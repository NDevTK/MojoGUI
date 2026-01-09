// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_error.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: FileSystemAccessStatus
blink.mojom.FileSystemAccessStatus = {
  kOk: 0,
  kPermissionDenied: 1,
  kSecurityError: 2,
  kNoModificationAllowedError: 3,
  kInvalidModificationError: 4,
  kNotSupportedError: 5,
  kInvalidState: 6,
  kInvalidArgument: 7,
  kOperationFailed: 8,
  kOperationAborted: 9,
  kFileError: 10,
};

// Struct: FileSystemAccessError
blink.mojom.FileSystemAccessErrorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessError',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'file_error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
