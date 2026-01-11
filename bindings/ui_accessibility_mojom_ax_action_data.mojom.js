// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_action_data.mojom
// Module: ax.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var gfx = gfx || {};

ax.mojom.AXActionDataSpec = { $: {} };

// Struct: AXActionData
mojo.internal.Struct(
    ax.mojom.AXActionDataSpec, 'ax.mojom.AXActionData', [
      mojo.internal.StructField('action', 0, 0, ax.mojom.ActionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_tree_id', 8, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_extension_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('target_rect', 24, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_point', 32, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('hit_test_event_to_fire', 48, 0, ax.mojom.EventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('horizontal_scroll_alignment', 56, 0, ax.mojom.ScrollAlignmentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('vertical_scroll_alignment', 64, 0, ax.mojom.ScrollAlignmentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scroll_behavior', 72, 0, ax.mojom.ScrollBehaviorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('child_tree_id', 80, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_role', 88, 0, ax.mojom.RoleSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('target_node_id', 96, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('request_id', 100, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('flags', 104, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('anchor_node_id', 108, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('anchor_offset', 112, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('focus_node_id', 116, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('focus_offset', 120, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('custom_action_id', 124, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 136]]);
