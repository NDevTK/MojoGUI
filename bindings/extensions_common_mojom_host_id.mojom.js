// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/host_id.mojom
// Module: extensions.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};

extensions.mojom.HostTypeSpec = { $: mojo.internal.Enum() };
extensions.mojom.HostIDSpec = { $: {} };

// Enum: HostType
extensions.mojom.HostType = {
  kExtensions: 0,
  kWebUi: 1,
  kControlledFrameEmbedder: 2,
};

// Struct: HostID
mojo.internal.Struct(
    extensions.mojom.HostIDSpec, 'extensions.mojom.HostID', [
      mojo.internal.StructField('kExtensions', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);
