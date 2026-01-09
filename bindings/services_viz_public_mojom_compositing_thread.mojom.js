// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/thread.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Enum: ThreadType
viz.mojom.ThreadType = {
  kMain: 0,
  kIO: 1,
  kCompositor: 2,
  kVideo: 3,
  kOther: 4,
};

// Struct: Thread
viz.mojom.ThreadSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.Thread',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.ThreadTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
