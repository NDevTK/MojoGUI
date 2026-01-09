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
      packedSize: 144,
      fields: [
        { name: 'tree_id', packedOffset: 8, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false },
        { name: 'parent_tree_id', packedOffset: 16, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false },
        { name: 'focused_tree_id', packedOffset: 24, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false },
        { name: 'doctype', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'loaded', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'loading_progress', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'mimetype', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'title', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'focus_id', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'sel_is_backward', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'sel_anchor_object_id', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'sel_anchor_offset', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'sel_anchor_affinity', packedOffset: 104, packedBitOffset: 0, type: ax.mojom.TextAffinitySpec, nullable: false },
        { name: 'sel_focus_object_id', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'sel_focus_offset', packedOffset: 116, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'sel_focus_affinity', packedOffset: 120, packedBitOffset: 0, type: ax.mojom.TextAffinitySpec, nullable: false },
        { name: 'root_scroller_id', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'metadata', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
