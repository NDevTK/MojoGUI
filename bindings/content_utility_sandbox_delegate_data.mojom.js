// Auto-generated MojoJS binding
// Source: chromium_src/content/utility/sandbox_delegate_data.mojom
// Module: content.mojom.sandbox

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
content.mojom.sandbox = content.mojom.sandbox || {};
var mojo_base = mojo_base || {};

content.mojom.sandbox.UtilityConfigSpec = { $: {} };

// Struct: UtilityConfig
mojo.internal.Struct(
    content.mojom.sandbox.UtilityConfigSpec, 'content.mojom.sandbox.UtilityConfig', [
      mojo.internal.StructField('preload_libraries', 0, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('bootstrap_event_handle', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);
