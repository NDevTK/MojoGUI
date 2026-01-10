// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_error.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.FileSystemAccessStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.FileSystemAccessErrorSpec = { $: {} };

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
mojo.internal.Struct(
    blink.mojom.FileSystemAccessErrorSpec, 'blink.mojom.FileSystemAccessError', [
      mojo.internal.StructField('status', 8, 0, blink.mojom.FileSystemAccessStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('file_error', 12, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);
