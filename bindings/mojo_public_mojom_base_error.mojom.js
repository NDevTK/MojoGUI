// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/error.mojom
// Module: mojo_base.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.CodeSpec = { $: mojo.internal.Enum() };
mojo_base.mojom.ErrorSpec = { $: {} };

// Enum: Code
mojo_base.mojom.Code = {
  kCancelled: 1,
  kUnknown: 2,
  kInvalidArgument: 3,
  kDeadlineExceeded: 4,
  kNotFound: 5,
  kAlreadyExists: 6,
  kPermissionDenied: 7,
  kResourceExhausted: 8,
  kFailedPrecondition: 9,
  kAborted: 10,
  kOutOfRange: 11,
  kUnimplemented: 12,
  kInternal: 13,
  kUnavailable: 14,
  kDataLoss: 15,
  kUnauthenticated: 16,
};

// Struct: Error
mojo.internal.Struct(
    mojo_base.mojom.ErrorSpec, 'mojo_base.mojom.Error', [
      mojo.internal.StructField('code', 0, 0, mojo_base.mojom.CodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);
