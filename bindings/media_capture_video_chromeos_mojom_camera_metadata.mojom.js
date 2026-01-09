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
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
