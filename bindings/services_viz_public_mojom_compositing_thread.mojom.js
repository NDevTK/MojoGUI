// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/thread.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Enum: ThreadType
viz.mojom.mojom.ThreadType = {
  kMain: 0,
  kIO: 1,
  kCompositor: 2,
  kVideo: 3,
  kOther: 4,
};
viz.mojom.mojom.ThreadTypeSpec = { $: mojo.internal.Enum() };

// Struct: Thread
viz.mojom.mojom.ThreadSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.Thread',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 12, packedBitOffset: 0, type: viz.mojom.ThreadTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
