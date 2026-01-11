// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_device.mojom
// Module: webnn.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};

webnn.mojom.DeviceSpec = { $: mojo.internal.Enum() };

// Enum: Device
webnn.mojom.Device = {
  kCpu: 0,
  kGpu: 1,
  kNpu: 2,
};
