// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_updates_and_events.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Struct: AXUpdatesAndEvents
ax.mojom.AXUpdatesAndEventsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AXUpdatesAndEvents',
      packedSize: 32,
      fields: [
        { name: 'tree_id', packedOffset: 8, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false },
        { name: 'updates', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'events', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
