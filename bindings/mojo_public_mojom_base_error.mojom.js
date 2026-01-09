// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/error.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Enum: Code
mojo_base.mojom.Code = {
  kCancelled: 0,
  kUnknown: 1,
  kInvalidArgument: 2,
  kDeadlineExceeded: 3,
  kNotFound: 4,
  kAlreadyExists: 5,
  kPermissionDenied: 6,
  kResourceExhausted: 7,
  kFailedPrecondition: 8,
  kAborted: 9,
  kOutOfRange: 10,
  kUnimplemented: 11,
  kInternal: 12,
  kUnavailable: 13,
  kDataLoss: 14,
  kUnauthenticated: 15,
};
mojo_base.mojom.CodeSpec = { $: mojo.internal.Enum() };

// Struct: Error
mojo_base.mojom.ErrorSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.Error',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.CodeSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
