// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/swap_timings.mojom
// Module: gfx.mojom

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var mojo_base = mojo_base || {};

gfx.mojom.SwapTimingsSpec = { $: {} };

// Struct: SwapTimings
mojo.internal.Struct(
    gfx.mojom.SwapTimingsSpec, 'gfx.mojom.SwapTimings', [
      mojo.internal.StructField('swap_start', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('swap_end', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
