// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/window_features/window_features.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var gfx = gfx || {};

blink.mojom.WindowFeaturesSpec = { $: {} };

// Struct: WindowFeatures
mojo.internal.Struct(
    blink.mojom.WindowFeaturesSpec, 'blink.mojom.WindowFeatures', [
      mojo.internal.StructField('bounds', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_x', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_y', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_width', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_height', 8, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_popup', 8, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);
