// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_error.mojom
// Module: webnn.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};

webnn.mojom.CodeSpec = { $: mojo.internal.Enum() };
webnn.mojom.ErrorSpec = { $: {} };

// Enum: Code
webnn.mojom.Code = {
  kUnknownError: 0,
  kNotSupportedError: 1,
};

// Struct: Error
mojo.internal.Struct(
    webnn.mojom.ErrorSpec, 'webnn.mojom.Error', [
      mojo.internal.StructField('kUnknownError', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);
