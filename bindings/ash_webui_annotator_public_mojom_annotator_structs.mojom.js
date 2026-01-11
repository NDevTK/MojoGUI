// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/annotator/public/mojom/annotator_structs.mojom
// Module: ash.annotator.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ash = ash || {};
ash.annotator = ash.annotator || {};
ash.annotator.mojom = ash.annotator.mojom || {};

ash.annotator.mojom.AnnotatorToolSpec = { $: {} };

// Struct: AnnotatorTool
mojo.internal.Struct(
    ash.annotator.mojom.AnnotatorToolSpec, 'ash.annotator.mojom.AnnotatorTool', [
      mojo.internal.StructField('tool', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('color', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('size', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);
