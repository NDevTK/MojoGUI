// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker_exception_details.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: SharedWorkerErrorType
blink.mojom.SharedWorkerErrorType = {
  kParseError: 0,
  kRuntimeError: 1,
};

// Struct: SharedWorkerExceptionDetails
blink.mojom.SharedWorkerExceptionDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerExceptionDetails',
      packedSize: 16,
      fields: [
        { name: 'error_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
