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
      packedSize: 48,
      fields: [
        { name: 'index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'tag', packedOffset: 16, packedBitOffset: 0, type: cros.mojom.CameraMetadataTagSpec, nullable: false },
        { name: 'type', packedOffset: 24, packedBitOffset: 0, type: cros.mojom.EntryTypeSpec, nullable: false },
        { name: 'count', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'data', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'entry_count', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'entry_capacity', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'data_count', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'data_capacity', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'entries', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
