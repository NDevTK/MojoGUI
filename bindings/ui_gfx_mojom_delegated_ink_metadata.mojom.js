// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/delegated_ink_metadata.mojom
// Module: gfx.mojom

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var mojo_base = mojo_base || {};
var skia = skia || {};

gfx.mojom.DelegatedInkMetadataSpec = { $: {} };

// Struct: DelegatedInkMetadata
mojo.internal.Struct(
    gfx.mojom.DelegatedInkMetadataSpec, 'gfx.mojom.DelegatedInkMetadata', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('diameter', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('color', 16, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 24, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('presentation_area', 32, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_time', 40, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_hovering', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);
