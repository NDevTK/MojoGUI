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

ax.mojom.AXActionDataSpec = { $: {} };

// Struct: AXActionData
mojo.internal.Struct(
    ax.mojom.AXActionDataSpec, 'ax.mojom.AXActionData', [
      mojo.internal.StructField('action', 0, 0, ax.mojom.ActionSpec, null, false, 0, undefined),
      mojo.internal.StructField('target_tree_id', 8, 0, ax.mojom.AXTreeIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('source_extension_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('target_node_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('request_id', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('flags', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('anchor_node_id', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('anchor_offset', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('focus_node_id', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('focus_offset', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('custom_action_id', 60, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('target_rect', 64, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('target_point', 72, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
      mojo.internal.StructField('value', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('hit_test_event_to_fire', 88, 0, ax.mojom.EventSpec, null, false, 0, undefined),
      mojo.internal.StructField('horizontal_scroll_alignment', 92, 0, ax.mojom.ScrollAlignmentSpec, null, false, 0, undefined),
      mojo.internal.StructField('vertical_scroll_alignment', 96, 0, ax.mojom.ScrollAlignmentSpec, null, false, 0, undefined),
      mojo.internal.StructField('scroll_behavior', 100, 0, ax.mojom.ScrollBehaviorSpec, null, false, 0, undefined),
      mojo.internal.StructField('child_tree_id', 104, 0, ax.mojom.AXTreeIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('target_role', 120, 0, ax.mojom.RoleSpec, 0, false, 0, undefined),
    ],
    [[0, 136]]);
