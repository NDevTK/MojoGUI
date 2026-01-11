// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/intrinsic_sizing_info.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var gfx = gfx || {};

blink.mojom.IntrinsicSizingInfoSpec = { $: {} };

// Struct: IntrinsicSizingInfo
mojo.internal.Struct(
    blink.mojom.IntrinsicSizingInfoSpec, 'blink.mojom.IntrinsicSizingInfo', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('aspect_ratio', 8, 0, gfx.mojom.SizeFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_width', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_height', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);
