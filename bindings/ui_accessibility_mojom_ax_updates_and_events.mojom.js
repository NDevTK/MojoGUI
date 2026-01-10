// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_updates_and_events.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};

ax.mojom.AXUpdatesAndEventsSpec = { $: {} };

// Struct: AXUpdatesAndEvents
mojo.internal.Struct(
    ax.mojom.AXUpdatesAndEventsSpec, 'ax.mojom.AXUpdatesAndEvents', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('updates', 8, 0, mojo.internal.Array(ax.mojom.AXTreeUpdateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('events', 16, 0, mojo.internal.Array(ax.mojom.AXEventSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);
