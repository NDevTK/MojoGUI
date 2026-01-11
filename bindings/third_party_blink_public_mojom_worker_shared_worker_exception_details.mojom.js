// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker_exception_details.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var network = network || {};

blink.mojom.SharedWorkerErrorTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.SharedWorkerExceptionDetailsSpec = { $: {} };

// Enum: SharedWorkerErrorType
blink.mojom.SharedWorkerErrorType = {
  kParseError: 0,
  kRuntimeError: 1,
};

// Struct: SharedWorkerExceptionDetails
mojo.internal.Struct(
    blink.mojom.SharedWorkerExceptionDetailsSpec, 'blink.mojom.SharedWorkerExceptionDetails', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_location', 8, 0, network.mojom.SourceLocationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_type', 16, 0, blink.mojom.SharedWorkerErrorTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);
