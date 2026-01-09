// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_tree_update.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Struct: AXTreeUpdate
ax.mojom.AXTreeUpdateSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AXTreeUpdate',
      packedSize: 72,
      fields: [
        { name: 'has_tree_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'tree_data', packedOffset: 16, packedBitOffset: 0, type: ax.mojom.AXTreeDataSpec, nullable: false },
        { name: 'node_id_to_clear', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'root_id', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'nodes', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'event_from', packedOffset: 40, packedBitOffset: 0, type: ax.mojom.EventFromSpec, nullable: false },
        { name: 'event_from_action', packedOffset: 48, packedBitOffset: 0, type: ax.mojom.ActionSpec, nullable: false },
        { name: 'event_intents', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'tree_checks', packedOffset: 64, packedBitOffset: 0, type: ax.mojom.AXTreeChecksSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
