// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/mtp_storage_info.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.MtpStorageInfoSpec = { $: {} };

// Struct: MtpStorageInfo
mojo.internal.Struct(
    device.mojom.MtpStorageInfoSpec, 'device.mojom.MtpStorageInfo', [
      mojo.internal.StructField('storage_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('vendor', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('vendor_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('product', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('product_id', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('device_flags', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('storage_type', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('filesystem_type', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('access_capability', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_capacity', 56, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('free_space_in_bytes', 64, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('free_space_in_objects', 72, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('storage_description', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('volume_identifier', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('serial_number', 96, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 112]]);
