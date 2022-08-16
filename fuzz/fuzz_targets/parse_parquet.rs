#![no_main]
#![feature(mixed_integer_ops)]
use libfuzzer_sys::fuzz_target;
use parquet2::read::decompress;
use parquet2::read::get_page_iterator;
use parquet2::read::read_metadata;
use std::io::Read;
use std::io::Seek;
use std::io::SeekFrom;

const CURSOR_HISTORY_DEPTH: usize = 8;

/// A fuzz input wrapper that implements Read and Seek
///
/// This is basically `std::io::Cursor` except with a history of cursor
/// positions. When reading or seeking, and the cursor is detected to not
/// advance for a while (CURSOR_HISTORY_DEPTH), the read or seek will panic.
struct FuzzInput<'a> {
    data: &'a [u8],
    pos: usize,
    last: [usize; CURSOR_HISTORY_DEPTH],
}

impl<'a> FuzzInput<'a> {
    fn new(data: &'a [u8]) -> Self {
        Self {
            data,
            pos: 0,
            last: [8, 7, 6, 5, 4, 3, 2, 1],
        }
    }

    fn remaining_slice(&self) -> &[u8] {
        let len = self.pos.min(self.data.len());
        &self.data[len..]
    }

    fn update_pos(&mut self, pos: usize) {
        self.pos = pos;

        // shift over the history
        self.last
            .as_mut_slice()
            .copy_within(0..(CURSOR_HISTORY_DEPTH - 1), 1);
        self.last[0] = pos;

        if self.last.iter().all(|l| *l == pos) {
            panic!("no progress is being made! stuck at position {}", self.pos);
        }
    }
}

impl Read for FuzzInput<'_> {
    fn read(&mut self, buf: &mut [u8]) -> std::io::Result<usize> {
        let n = Read::read(&mut self.remaining_slice(), buf)?;
        self.update_pos(self.pos + n);
        Ok(n)
    }
}

impl Seek for FuzzInput<'_> {
    fn seek(&mut self, style: SeekFrom) -> std::io::Result<u64> {
        let (base_pos, offset) = match style {
            SeekFrom::Start(n) => {
                self.update_pos(n as usize);
                return Ok(n);
            }
            SeekFrom::End(n) => (self.data.len(), n),
            SeekFrom::Current(n) => (self.pos, n),
        };
        match base_pos.checked_add_signed(offset as isize) {
            Some(n) => {
                self.update_pos(n);
                Ok(self.pos as u64)
            }
            None => Err(std::io::Error::new(
                std::io::ErrorKind::InvalidInput,
                "invalid seek to a negative or overflowing position",
            )),
        }
    }

    fn stream_position(&mut self) -> std::io::Result<u64> {
        Ok(self.pos as u64)
    }
}

fuzz_target!(|data: &[u8]| {
    let _ = fuzz(data);
});

fn fuzz(data: &[u8]) -> Result<(), ()> {
    let mut reader = FuzzInput::new(data);
    let metadata = read_metadata(&mut reader).map_err(unit)?;

    for row_group in metadata.row_groups {
        let columns = row_group.columns();
        for column_meta in columns {
            for maybe_page in
                get_page_iterator(column_meta, &mut reader, None, Vec::new(), 16 * 1024)
                    .map_err(unit)?
            {
                let mut decompress_buffer = Vec::new();
                let page = maybe_page.map_err(unit)?;
                let _page = decompress(page, &mut decompress_buffer);
            }
        }
    }

    Ok(())
}

// eats errors
fn unit<T>(_any: T) {}
