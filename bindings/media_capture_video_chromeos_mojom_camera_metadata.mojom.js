// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/camera_metadata.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Enum: EntryType
cros.mojom.mojom.EntryType = {
  TYPE_BYTE: 0,
  TYPE_INT32: 1,
  TYPE_FLOAT: 2,
  TYPE_INT64: 3,
  TYPE_DOUBLE: 4,
  TYPE_RATIONAL: 5,
  NUM_TYPES: 6,
};
cros.mojom.mojom.EntryTypeSpec = { $: mojo.internal.Enum() };

// Struct: CameraMetadataEntry
cros.mojom.mojom.CameraMetadataEntrySpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraMetadataEntry',
      packedSize: 32,
      fields: [
        { name: 'index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'tag', packedOffset: 12, packedBitOffset: 0, type: cros.mojom.CameraMetadataTagSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: cros.mojom.EntryTypeSpec, nullable: false, minVersion: 0 },
        { name: 'count', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CameraMetadata
cros.mojom.mojom.CameraMetadataSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraMetadata',
      packedSize: 40,
      fields: [
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'entry_count', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'entry_capacity', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data_count', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data_capacity', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(cros.mojom.CameraMetadataEntrySpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
