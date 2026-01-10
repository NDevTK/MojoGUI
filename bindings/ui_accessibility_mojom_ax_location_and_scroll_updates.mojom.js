// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_location_and_scroll_updates.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};

ax.mojom.AXLocationChangeSpec = { $: {} };
ax.mojom.AXScrollChangeSpec = { $: {} };
ax.mojom.AXLocationAndScrollUpdatesSpec = { $: {} };

// Struct: AXLocationChange
mojo.internal.Struct(
    ax.mojom.AXLocationChangeSpec, 'ax.mojom.AXLocationChange', [
      mojo.internal.StructField('new_location', 0, 0, ax.mojom.AXRelativeBoundsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AXScrollChange
mojo.internal.Struct(
    ax.mojom.AXScrollChangeSpec, 'ax.mojom.AXScrollChange', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('scroll_x', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('scroll_y', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AXLocationAndScrollUpdates
mojo.internal.Struct(
    ax.mojom.AXLocationAndScrollUpdatesSpec, 'ax.mojom.AXLocationAndScrollUpdates', [
      mojo.internal.StructField('location_changes', 0, 0, mojo.internal.Array(ax.mojom.AXLocationChangeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('scroll_changes', 8, 0, mojo.internal.Array(ax.mojom.AXScrollChangeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);
