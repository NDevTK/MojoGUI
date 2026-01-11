// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/thread.mojom
// Module: viz.mojom

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.ThreadTypeSpec = { $: mojo.internal.Enum() };
viz.mojom.ThreadSpec = { $: {} };

// Enum: ThreadType
viz.mojom.ThreadType = {
  kMain: 0,
  kIO: 1,
  kCompositor: 2,
  kVideo: 3,
  kOther: 4,
};

// Struct: Thread
mojo.internal.Struct(
    viz.mojom.ThreadSpec, 'viz.mojom.Thread', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, viz.mojom.ThreadTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);
