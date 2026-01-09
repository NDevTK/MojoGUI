// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/mtp_storage_info.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Struct: MtpStorageInfo
device.mojom.MtpStorageInfoSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpStorageInfo',
      packedSize: 104,
      fields: [
        { name: 'storage_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'vendor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'product', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'max_capacity', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'free_space_in_bytes', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'free_space_in_objects', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'storage_description', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'volume_identifier', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'serial_number', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'vendor_id', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'product_id', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'device_flags', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'storage_type', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'filesystem_type', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'access_capability', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
