// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/data_transfer/data_transfer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};


// Struct: DataTransferFile
blink.mojom.DataTransferFileSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DataTransferFile',
      packedSize: 32,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'file_system_access_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDataTransferTokenRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
