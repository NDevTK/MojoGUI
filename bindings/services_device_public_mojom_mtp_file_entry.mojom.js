// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/mtp_file_entry.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: FileType
device.mojom.FileType = {
  FILE_TYPE_FOLDER: 0,
  FILE_TYPE_JPEG: 1,
  FILE_TYPE_JFIF: 2,
  FILE_TYPE_TIFF: 3,
  FILE_TYPE_BMP: 4,
  FILE_TYPE_GIF: 5,
  FILE_TYPE_PICT: 6,
  FILE_TYPE_PNG: 7,
  FILE_TYPE_WINDOWSIMAGEFORMAT: 8,
  FILE_TYPE_JP2: 9,
  FILE_TYPE_JPX: 10,
  FILE_TYPE_UNKNOWN: 11,
  FILE_TYPE_OTHER: 12,
};

// Struct: MtpFileEntry
device.mojom.MtpFileEntrySpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpFileEntry',
      packedSize: 16,
      fields: [
        { name: 'FILE_TYPE_FOLDER', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
