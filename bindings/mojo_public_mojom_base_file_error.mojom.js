// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/file_error.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.FileErrorSpec = { $: mojo.internal.Enum() };

// Enum: FileError
mojo_base.mojom.FileError = {
  OK: 0,
  FAILED: -1,
  IN_USE: -2,
  EXISTS: -3,
  NOT_FOUND: -4,
  ACCESS_DENIED: -5,
  TOO_MANY_OPENED: -6,
  NO_MEMORY: -7,
  NO_SPACE: -8,
  NOT_A_DIRECTORY: -9,
  INVALID_OPERATION: -10,
  SECURITY: -11,
  ABORT: -12,
  NOT_A_FILE: -13,
  NOT_EMPTY: -14,
  INVALID_URL: -15,
  IO: -16,
};
