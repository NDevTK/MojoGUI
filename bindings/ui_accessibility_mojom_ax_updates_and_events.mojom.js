// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_updates_and_events.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};


// Struct: AXUpdatesAndEvents
ax.mojom.mojom.AXUpdatesAndEventsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AXUpdatesAndEvents',
      packedSize: 40,
      fields: [
        { name: 'tree_id', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false, minVersion: 0 },
        { name: 'updates', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(ax.mojom.AXTreeUpdateSpec, false), nullable: false, minVersion: 0 },
        { name: 'events', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(ax.mojom.AXEventSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
