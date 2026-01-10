// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_tree_data.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Struct: AXTreeData
ax.mojom.AXTreeDataSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AXTreeData',
      packedSize: 136,
      fields: [
        { name: 'tree_id', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false, minVersion: 0 },
        { name: 'parent_tree_id', packedOffset: 16, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false, minVersion: 0 },
        { name: 'focused_tree_id', packedOffset: 32, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false, minVersion: 0 },
        { name: 'doctype', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'loaded', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'loading_progress', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'mimetype', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'focus_id', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'sel_is_backward', packedOffset: 56, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sel_anchor_object_id', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'sel_anchor_offset', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'sel_anchor_affinity', packedOffset: 100, packedBitOffset: 0, type: ax.mojom.TextAffinitySpec, nullable: false, minVersion: 0 },
        { name: 'sel_focus_object_id', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'sel_focus_offset', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'sel_focus_affinity', packedOffset: 112, packedBitOffset: 0, type: ax.mojom.TextAffinitySpec, nullable: false, minVersion: 0 },
        { name: 'root_scroller_id', packedOffset: 116, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'metadata', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 136}]
    }
  }
};
