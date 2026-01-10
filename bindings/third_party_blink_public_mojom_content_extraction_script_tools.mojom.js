// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_extraction/script_tools.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ScriptToolAnnotationsSpec = { $: {} };
blink.mojom.ScriptToolSpec = { $: {} };

// Struct: ScriptToolAnnotations
mojo.internal.Struct(
    blink.mojom.ScriptToolAnnotationsSpec, 'blink.mojom.ScriptToolAnnotations', [
      mojo.internal.StructField('read_only', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ScriptTool
mojo.internal.Struct(
    blink.mojom.ScriptToolSpec, 'blink.mojom.ScriptTool', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('input_schema', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('annotations', 24, 0, blink.mojom.ScriptToolAnnotationsSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);
