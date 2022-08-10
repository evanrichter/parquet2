#![no_main]
use libfuzzer_sys::fuzz_target;
use parquet2::read::decompress;
use parquet2::read::get_page_iterator;
use parquet2::read::read_metadata;

fuzz_target!(|data: &[u8]| {
    let _ = fuzz(data);
});

fn fuzz(data: &[u8]) -> Result<(), ()> {
    let mut reader = std::io::Cursor::new(data);
    let metadata = read_metadata(&mut reader).map_err(unit)?;

    for row_group in metadata.row_groups {
        let columns = row_group.columns();
        for column_meta in columns {
            for page in get_page_iterator(column_meta, &mut reader, None, Vec::new(), 16 * 1024)
                .map_err(unit)?
            {
                let mut decompress_buffer = Vec::new();
                if let Ok(page) = page {
                    let _page = decompress(page, &mut decompress_buffer);
                }
            }
        }
    }

    Ok(())
}

// eats errors
fn unit<T>(_any: T) {}
