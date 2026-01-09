// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_extraction/script_tools.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: ScriptToolAnnotations
blink.mojom.ScriptToolAnnotationsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ScriptToolAnnotations',
      packedSize: 16,
      fields: [
        { name: 'read_only', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ScriptTool
blink.mojom.ScriptToolSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ScriptTool',
      packedSize: 16,
      fields: [
        { name: 'annotations', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
