// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_error.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: FileSystemAccessStatus
blink.mojom.mojom.FileSystemAccessStatus = {
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
blink.mojom.mojom.FileSystemAccessStatusSpec = { $: mojo.internal.Enum() };

// Struct: FileSystemAccessError
blink.mojom.mojom.FileSystemAccessErrorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessError',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FileSystemAccessStatusSpec, nullable: false, minVersion: 0 },
        { name: 'file_error', packedOffset: 12, packedBitOffset: 0, type: mojo_base.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
