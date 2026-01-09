// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/annotator/public/mojom/annotator_structs.mojom
// Module: ash.annotator.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.annotator = ash.annotator || {};
ash.annotator.mojom = ash.annotator.mojom || {};


// Struct: AnnotatorTool
ash.annotator.mojom.AnnotatorToolSpec = {
  $: {
    structSpec: {
      name: 'ash.annotator.mojom.AnnotatorTool',
      packedSize: 32,
      fields: [
        { name: 'tool', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'color', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
