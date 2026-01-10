// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_tree_data.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var ui = ui || {};
var ui = ui || {};

ax.mojom.AXTreeDataSpec = { $: {} };

// Struct: AXTreeData
mojo.internal.Struct(
    ax.mojom.AXTreeDataSpec, 'ax.mojom.AXTreeData', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('parent_tree_id', 8, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('focused_tree_id', 16, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('doctype', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mimetype', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sel_anchor_affinity', 56, 0, ax.mojom.TextAffinitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sel_focus_affinity', 64, 0, ax.mojom.TextAffinitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('metadata', 72, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('loading_progress', 80, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('focus_id', 84, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sel_anchor_object_id', 88, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sel_anchor_offset', 92, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sel_focus_object_id', 96, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sel_focus_offset', 100, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('root_scroller_id', 104, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('loaded', 108, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sel_is_backward', 108, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 120]]);
