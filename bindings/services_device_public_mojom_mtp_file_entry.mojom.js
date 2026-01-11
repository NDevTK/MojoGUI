// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/mtp_file_entry.mojom
// Module: device.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.FileTypeSpec = { $: mojo.internal.Enum() };
device.mojom.MtpFileEntrySpec = { $: {} };

// Enum: FileType
device.mojom.FileType = {
  FILE_TYPE_FOLDER: 0,
  FILE_TYPE_JPEG: 14,
  FILE_TYPE_JFIF: 15,
  FILE_TYPE_TIFF: 16,
  FILE_TYPE_BMP: 17,
  FILE_TYPE_GIF: 18,
  FILE_TYPE_PICT: 19,
  FILE_TYPE_PNG: 20,
  FILE_TYPE_WINDOWSIMAGEFORMAT: 25,
  FILE_TYPE_JP2: 40,
  FILE_TYPE_JPX: 41,
  FILE_TYPE_UNKNOWN: 44,
  FILE_TYPE_OTHER: 9999,
};

// Struct: MtpFileEntry
mojo.internal.Struct(
    device.mojom.MtpFileEntrySpec, 'device.mojom.MtpFileEntry', [
      mojo.internal.StructField('FILE_TYPE_FOLDER', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);
