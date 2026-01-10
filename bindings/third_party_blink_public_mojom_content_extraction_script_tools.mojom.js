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
        { name: 'read_only', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ScriptTool
blink.mojom.ScriptToolSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ScriptTool',
      packedSize: 40,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'input_schema', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'annotations', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.ScriptToolAnnotationsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
