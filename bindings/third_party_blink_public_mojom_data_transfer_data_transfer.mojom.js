// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/data_transfer/data_transfer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};

blink.mojom.DataTransferFileSpec = { $: {} };

// Struct: DataTransferFile
mojo.internal.Struct(
    blink.mojom.DataTransferFileSpec, 'blink.mojom.DataTransferFile', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('file_system_access_token', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDataTransferTokenRemote), null, true, 0, undefined),
    ],
    [[0, 32]]);
