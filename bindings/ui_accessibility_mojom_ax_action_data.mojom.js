// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_action_data.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Struct: AXActionData
ax.mojom.AXActionDataSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AXActionData',
      packedSize: 136,
      fields: [
        { name: 'action', packedOffset: 8, packedBitOffset: 0, type: ax.mojom.ActionSpec, nullable: false },
        { name: 'target_tree_id', packedOffset: 16, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false },
        { name: 'source_extension_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'target_node_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'request_id', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'flags', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'anchor_node_id', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'anchor_offset', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'focus_node_id', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'focus_offset', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'custom_action_id', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'target_rect', packedOffset: 64, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'target_point', packedOffset: 72, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
        { name: 'value', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'hit_test_event_to_fire', packedOffset: 88, packedBitOffset: 0, type: ax.mojom.EventSpec, nullable: false },
        { name: 'horizontal_scroll_alignment', packedOffset: 96, packedBitOffset: 0, type: ax.mojom.ScrollAlignmentSpec, nullable: false },
        { name: 'vertical_scroll_alignment', packedOffset: 104, packedBitOffset: 0, type: ax.mojom.ScrollAlignmentSpec, nullable: false },
        { name: 'scroll_behavior', packedOffset: 112, packedBitOffset: 0, type: ax.mojom.ScrollBehaviorSpec, nullable: false },
        { name: 'child_tree_id', packedOffset: 120, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false },
        { name: 'target_role', packedOffset: 128, packedBitOffset: 0, type: ax.mojom.RoleSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
