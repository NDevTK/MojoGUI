// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_relative_bounds.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};

ax.mojom.AXRelativeBoundsSpec = { $: {} };

// Struct: AXRelativeBounds
mojo.internal.Struct(
    ax.mojom.AXRelativeBoundsSpec, 'ax.mojom.AXRelativeBounds', [
      mojo.internal.StructField('bounds', 0, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transform', 8, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('offset_container_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);
