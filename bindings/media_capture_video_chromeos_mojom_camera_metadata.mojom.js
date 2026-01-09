// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/camera_metadata.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Enum: EntryType
cros.mojom.EntryType = {
  TYPE_BYTE: 0,
  TYPE_INT32: 1,
  TYPE_FLOAT: 2,
  TYPE_INT64: 3,
  TYPE_DOUBLE: 4,
  TYPE_RATIONAL: 5,
  NUM_TYPES: 6,
};

// Struct: CameraMetadataEntry
cros.mojom.CameraMetadataEntrySpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraMetadataEntry',
      packedSize: 40,
      fields: [
        { name: 'tag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.EntryTypeSpec, nullable: false },
        { name: 'data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'index', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'count', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CameraMetadata
cros.mojom.CameraMetadataSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraMetadata',
      packedSize: 40,
      fields: [
        { name: 'entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'entry_count', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'entry_capacity', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'data_count', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'data_capacity', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
