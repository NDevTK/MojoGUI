// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_error.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};


// Enum: Code
webnn.mojom.Code = {
  kUnknownError: 0,
  kNotSupportedError: 1,
};
webnn.mojom.CodeSpec = { $: mojo.internal.Enum() };

// Struct: Error
webnn.mojom.ErrorSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Error',
      packedSize: 16,
      fields: [
        { name: 'kUnknownError', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
