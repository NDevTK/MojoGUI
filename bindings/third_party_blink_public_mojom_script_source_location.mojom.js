// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/script_source_location.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.ScriptSourceLocationSpec = { $: {} };

// Struct: ScriptSourceLocation
mojo.internal.Struct(
    blink.mojom.ScriptSourceLocationSpec, 'blink.mojom.ScriptSourceLocation', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('function_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('line_number', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('column_number', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);
