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
      packedSize: 64,
      fields: [
        { name: 'has_tree_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'tree_data', packedOffset: 8, packedBitOffset: 0, type: ax.mojom.AXTreeDataSpec, nullable: false, minVersion: 0 },
        { name: 'node_id_to_clear', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'root_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'nodes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(ax.mojom.AXNodeDataSpec, false), nullable: false, minVersion: 0 },
        { name: 'event_from', packedOffset: 20, packedBitOffset: 0, type: ax.mojom.EventFromSpec, nullable: false, minVersion: 0 },
        { name: 'event_from_action', packedOffset: 32, packedBitOffset: 0, type: ax.mojom.ActionSpec, nullable: false, minVersion: 0 },
        { name: 'event_intents', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(ax.mojom.EventIntentSpec, false), nullable: false, minVersion: 0 },
        { name: 'tree_checks', packedOffset: 48, packedBitOffset: 0, type: ax.mojom.AXTreeChecksSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};
