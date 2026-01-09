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
        { name: 'tree_data', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeDataSpec, nullable: false },
        { name: 'nodes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'event_from', packedOffset: 16, packedBitOffset: 0, type: ax.mojom.EventFromSpec, nullable: false },
        { name: 'event_from_action', packedOffset: 24, packedBitOffset: 0, type: ax.mojom.ActionSpec, nullable: false },
        { name: 'event_intents', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'tree_checks', packedOffset: 40, packedBitOffset: 0, type: ax.mojom.AXTreeChecksSpec, nullable: true },
        { name: 'node_id_to_clear', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'root_id', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'has_tree_data', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
