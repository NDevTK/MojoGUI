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
blink.mojom.SharedWorkerErrorTypeSpec = { $: mojo.internal.Enum() };

// Struct: SharedWorkerExceptionDetails
blink.mojom.SharedWorkerExceptionDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerExceptionDetails',
      packedSize: 32,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'source_location', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SourceLocationSpec, nullable: false, minVersion: 0 },
        { name: 'error_type', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.SharedWorkerErrorTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
