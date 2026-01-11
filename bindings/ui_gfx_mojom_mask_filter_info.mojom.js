// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/mask_filter_info.mojom
// Module: gfx.mojom

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.MaskFilterInfoSpec = { $: {} };

// Struct: MaskFilterInfo
mojo.internal.Struct(
    gfx.mojom.MaskFilterInfoSpec, 'gfx.mojom.MaskFilterInfo', [
      mojo.internal.StructField('rounded_corner_bounds', 0, 0, gfx.mojom.RRectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gradient_mask', 8, 0, gfx.mojom.LinearGradientSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('clip_id_$value', 16, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'clip_id_$flag', originalFieldName: 'clip_id' }),
      mojo.internal.StructField('clip_id_$flag', 20, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'clip_id_$value', originalFieldName: 'clip_id' }),
    ],
    [[0, 32]]);
