// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/range/mojom/range.mojom
// Module: gfx.mojom

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.RangeSpec = { $: {} };
gfx.mojom.RangeFSpec = { $: {} };

// Struct: Range
mojo.internal.Struct(
    gfx.mojom.RangeSpec, 'gfx.mojom.Range', [
      mojo.internal.StructField('start', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: RangeF
mojo.internal.Struct(
    gfx.mojom.RangeFSpec, 'gfx.mojom.RangeF', [
      mojo.internal.StructField('start', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('end', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);
