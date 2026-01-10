// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/camera_metadata.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};
var chromeos = chromeos || {};

cros.mojom.EntryTypeSpec = { $: mojo.internal.Enum() };
cros.mojom.CameraMetadataEntrySpec = { $: {} };
cros.mojom.CameraMetadataSpec = { $: {} };

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
mojo.internal.Struct(
    cros.mojom.CameraMetadataEntrySpec, 'cros.mojom.CameraMetadataEntry', [
      mojo.internal.StructField('index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('tag', 8, 0, cros.mojom.CameraMetadataTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 16, 0, cros.mojom.EntryTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('count', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('data', 32, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: CameraMetadata
mojo.internal.Struct(
    cros.mojom.CameraMetadataSpec, 'cros.mojom.CameraMetadata', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('entry_count', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('entry_capacity', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('data_count', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('data_capacity', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('entries', 24, 0, mojo.internal.Array(cros.mojom.CameraMetadataEntrySpec.$, false), null, true, 0, undefined),
    ],
    [[0, 40]]);
