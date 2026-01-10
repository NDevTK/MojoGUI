// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/page/draggable_region.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var gfx = gfx || {};

blink.mojom.DraggableRegionSpec = { $: {} };

// Struct: DraggableRegion
mojo.internal.Struct(
    blink.mojom.DraggableRegionSpec, 'blink.mojom.DraggableRegion', [
      mojo.internal.StructField('bounds', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('draggable', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);
