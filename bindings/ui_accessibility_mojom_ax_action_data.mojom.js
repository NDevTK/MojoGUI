// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_action_data.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: AXActionData
ax.mojom.mojom.AXActionDataSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AXActionData',
      packedSize: 128,
      fields: [
        { name: 'action', packedOffset: 64, packedBitOffset: 0, type: ax.mojom.ActionSpec, nullable: false, minVersion: 0 },
        { name: 'target_tree_id', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false, minVersion: 0 },
        { name: 'source_extension_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'target_node_id', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'request_id', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'flags', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'anchor_node_id', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'anchor_offset', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'focus_node_id', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'focus_offset', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'custom_action_id', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'target_rect', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'target_point', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'hit_test_event_to_fire', packedOffset: 100, packedBitOffset: 0, type: ax.mojom.EventSpec, nullable: false, minVersion: 0 },
        { name: 'horizontal_scroll_alignment', packedOffset: 104, packedBitOffset: 0, type: ax.mojom.ScrollAlignmentSpec, nullable: false, minVersion: 0 },
        { name: 'vertical_scroll_alignment', packedOffset: 108, packedBitOffset: 0, type: ax.mojom.ScrollAlignmentSpec, nullable: false, minVersion: 0 },
        { name: 'scroll_behavior', packedOffset: 112, packedBitOffset: 0, type: ax.mojom.ScrollBehaviorSpec, nullable: false, minVersion: 0 },
        { name: 'child_tree_id', packedOffset: 16, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false, minVersion: 0 },
        { name: 'target_role', packedOffset: 116, packedBitOffset: 0, type: ax.mojom.RoleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 128}]
    }
  }
};
