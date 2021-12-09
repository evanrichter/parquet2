(function() {var implementors = {};
implementors["parquet2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"parquet2/error/enum.Feature.html\" title=\"enum parquet2::error::Feature\">Feature</a>","synthetic":false,"types":["parquet2::error::Feature"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"parquet2/error/enum.ParquetError.html\" title=\"enum parquet2::error::ParquetError\">ParquetError</a>","synthetic":false,"types":["parquet2::error::ParquetError"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/encoding/bitpacking/struct.Decoder.html\" title=\"struct parquet2::encoding::bitpacking::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":false,"types":["parquet2::encoding::bitpacking::Decoder"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/encoding/delta_bitpacked/struct.Decoder.html\" title=\"struct parquet2::encoding::delta_bitpacked::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":false,"types":["parquet2::encoding::delta_bitpacked::decoder::Decoder"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/encoding/delta_byte_array/struct.Decoder.html\" title=\"struct parquet2::encoding::delta_byte_array::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":false,"types":["parquet2::encoding::delta_byte_array::decoder::Decoder"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/encoding/delta_length_byte_array/struct.Decoder.html\" title=\"struct parquet2::encoding::delta_length_byte_array::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":false,"types":["parquet2::encoding::delta_length_byte_array::decoder::Decoder"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/encoding/hybrid_rle/struct.Decoder.html\" title=\"struct parquet2::encoding::hybrid_rle::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":false,"types":["parquet2::encoding::hybrid_rle::decoder::Decoder"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"parquet2/encoding/hybrid_rle/enum.HybridEncoded.html\" title=\"enum parquet2::encoding::hybrid_rle::HybridEncoded\">HybridEncoded</a>&lt;'a&gt;","synthetic":false,"types":["parquet2::encoding::hybrid_rle::HybridEncoded"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/encoding/hybrid_rle/struct.HybridRleDecoder.html\" title=\"struct parquet2::encoding::hybrid_rle::HybridRleDecoder\">HybridRleDecoder</a>&lt;'a&gt;","synthetic":false,"types":["parquet2::encoding::hybrid_rle::HybridRleDecoder"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/encoding/plain_byte_array/struct.Decoder.html\" title=\"struct parquet2::encoding::plain_byte_array::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":false,"types":["parquet2::encoding::plain_byte_array::decoder::Decoder"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/metadata/struct.ColumnChunkMetaData.html\" title=\"struct parquet2::metadata::ColumnChunkMetaData\">ColumnChunkMetaData</a>","synthetic":false,"types":["parquet2::metadata::column_chunk_metadata::ColumnChunkMetaData"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/metadata/struct.ColumnDescriptor.html\" title=\"struct parquet2::metadata::ColumnDescriptor\">ColumnDescriptor</a>","synthetic":false,"types":["parquet2::metadata::column_descriptor::ColumnDescriptor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"parquet2/metadata/enum.ColumnOrder.html\" title=\"enum parquet2::metadata::ColumnOrder\">ColumnOrder</a>","synthetic":false,"types":["parquet2::metadata::column_order::ColumnOrder"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/metadata/struct.FileMetaData.html\" title=\"struct parquet2::metadata::FileMetaData\">FileMetaData</a>","synthetic":false,"types":["parquet2::metadata::file_metadata::FileMetaData"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/metadata/struct.RowGroupMetaData.html\" title=\"struct parquet2::metadata::RowGroupMetaData\">RowGroupMetaData</a>","synthetic":false,"types":["parquet2::metadata::row_metadata::RowGroupMetaData"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/metadata/struct.SchemaDescriptor.html\" title=\"struct parquet2::metadata::SchemaDescriptor\">SchemaDescriptor</a>","synthetic":false,"types":["parquet2::metadata::schema_descriptor::SchemaDescriptor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"parquet2/metadata/enum.SortOrder.html\" title=\"enum parquet2::metadata::SortOrder\">SortOrder</a>","synthetic":false,"types":["parquet2::metadata::sort::SortOrder"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/page/struct.BinaryPageDict.html\" title=\"struct parquet2::page::BinaryPageDict\">BinaryPageDict</a>","synthetic":false,"types":["parquet2::page::page_dict::binary::BinaryPageDict"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/page/struct.FixedLenByteArrayPageDict.html\" title=\"struct parquet2::page::FixedLenByteArrayPageDict\">FixedLenByteArrayPageDict</a>","synthetic":false,"types":["parquet2::page::page_dict::fixed_len_binary::FixedLenByteArrayPageDict"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"parquet2/types/trait.NativeType.html\" title=\"trait parquet2::types::NativeType\">NativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/page/struct.PrimitivePageDict.html\" title=\"struct parquet2::page::PrimitivePageDict\">PrimitivePageDict</a>&lt;T&gt;","synthetic":false,"types":["parquet2::page::page_dict::primitive::PrimitivePageDict"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/page/struct.EncodedDictPage.html\" title=\"struct parquet2::page::EncodedDictPage\">EncodedDictPage</a>","synthetic":false,"types":["parquet2::page::page_dict::EncodedDictPage"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/page/struct.CompressedDictPage.html\" title=\"struct parquet2::page::CompressedDictPage\">CompressedDictPage</a>","synthetic":false,"types":["parquet2::page::page_dict::CompressedDictPage"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/page/struct.CompressedDataPage.html\" title=\"struct parquet2::page::CompressedDataPage\">CompressedDataPage</a>","synthetic":false,"types":["parquet2::page::CompressedDataPage"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"parquet2/page/enum.DataPageHeader.html\" title=\"enum parquet2::page::DataPageHeader\">DataPageHeader</a>","synthetic":false,"types":["parquet2::page::DataPageHeader"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/page/struct.DataPage.html\" title=\"struct parquet2::page::DataPage\">DataPage</a>","synthetic":false,"types":["parquet2::page::DataPage"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"parquet2/page/enum.Page.html\" title=\"enum parquet2::page::Page\">Page</a>","synthetic":false,"types":["parquet2::page::Page"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"parquet2/page/enum.EncodedPage.html\" title=\"enum parquet2::page::EncodedPage\">EncodedPage</a>","synthetic":false,"types":["parquet2::page::EncodedPage"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"parquet2/page/enum.CompressedPage.html\" title=\"enum parquet2::page::CompressedPage\">CompressedPage</a>","synthetic":false,"types":["parquet2::page::CompressedPage"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"parquet2/schema/enum.Repetition.html\" title=\"enum parquet2::schema::Repetition\">Repetition</a>","synthetic":false,"types":["parquet2::parquet_bridge::Repetition"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"parquet2/compression/enum.Compression.html\" title=\"enum parquet2::compression::Compression\">Compression</a>","synthetic":false,"types":["parquet2::parquet_bridge::Compression"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"parquet2/page/enum.PageType.html\" title=\"enum parquet2::page::PageType\">PageType</a>","synthetic":false,"types":["parquet2::parquet_bridge::PageType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"parquet2/encoding/enum.Encoding.html\" title=\"enum parquet2::encoding::Encoding\">Encoding</a>","synthetic":false,"types":["parquet2::parquet_bridge::Encoding"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"parquet2/read/enum.State.html\" title=\"enum parquet2::read::State\">State</a>&lt;T&gt;","synthetic":false,"types":["parquet2::read::State"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/read/struct.ReadColumnIterator.html\" title=\"struct parquet2::read::ReadColumnIterator\">ReadColumnIterator</a>","synthetic":false,"types":["parquet2::read::ReadColumnIterator"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"parquet2/schema/types/enum.PhysicalType.html\" title=\"enum parquet2::schema::types::PhysicalType\">PhysicalType</a>","synthetic":false,"types":["parquet2::schema::types::physical_type::PhysicalType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/schema/types/struct.BasicTypeInfo.html\" title=\"struct parquet2::schema::types::BasicTypeInfo\">BasicTypeInfo</a>","synthetic":false,"types":["parquet2::schema::types::basic_type::BasicTypeInfo"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"parquet2/schema/types/enum.PrimitiveConvertedType.html\" title=\"enum parquet2::schema::types::PrimitiveConvertedType\">PrimitiveConvertedType</a>","synthetic":false,"types":["parquet2::schema::types::converted_type::PrimitiveConvertedType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"parquet2/schema/types/enum.GroupConvertedType.html\" title=\"enum parquet2::schema::types::GroupConvertedType\">GroupConvertedType</a>","synthetic":false,"types":["parquet2::schema::types::converted_type::GroupConvertedType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"parquet2/schema/types/enum.ParquetType.html\" title=\"enum parquet2::schema::types::ParquetType\">ParquetType</a>","synthetic":false,"types":["parquet2::schema::types::parquet_type::ParquetType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/statistics/struct.BinaryStatistics.html\" title=\"struct parquet2::statistics::BinaryStatistics\">BinaryStatistics</a>","synthetic":false,"types":["parquet2::statistics::binary::BinaryStatistics"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/statistics/struct.BooleanStatistics.html\" title=\"struct parquet2::statistics::BooleanStatistics\">BooleanStatistics</a>","synthetic":false,"types":["parquet2::statistics::boolean::BooleanStatistics"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/statistics/struct.FixedLenStatistics.html\" title=\"struct parquet2::statistics::FixedLenStatistics\">FixedLenStatistics</a>","synthetic":false,"types":["parquet2::statistics::fixed_len_binary::FixedLenStatistics"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"parquet2/types/trait.NativeType.html\" title=\"trait parquet2::types::NativeType\">NativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/statistics/struct.PrimitiveStatistics.html\" title=\"struct parquet2::statistics::PrimitiveStatistics\">PrimitiveStatistics</a>&lt;T&gt;","synthetic":false,"types":["parquet2::statistics::primitive::PrimitiveStatistics"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet2/write/struct.WriteOptions.html\" title=\"struct parquet2::write::WriteOptions\">WriteOptions</a>","synthetic":false,"types":["parquet2::write::WriteOptions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"parquet2/write/enum.Version.html\" title=\"enum parquet2::write::Version\">Version</a>","synthetic":false,"types":["parquet2::write::Version"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()