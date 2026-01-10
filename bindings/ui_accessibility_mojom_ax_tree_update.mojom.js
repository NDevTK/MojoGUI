// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_tree_update.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};

ax.mojom.AXTreeUpdateSpec = { $: {} };

// Struct: AXTreeUpdate
mojo.internal.Struct(
    ax.mojom.AXTreeUpdateSpec, 'ax.mojom.AXTreeUpdate', [
      mojo.internal.StructField('has_tree_data', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('tree_data', 8, 0, ax.mojom.AXTreeDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('node_id_to_clear', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('root_id', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('nodes', 24, 0, mojo.internal.Array(ax.mojom.AXNodeDataSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('event_from', 32, 0, ax.mojom.EventFromSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_from_action', 36, 0, ax.mojom.ActionSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_intents', 40, 0, mojo.internal.Array(ax.mojom.EventIntentSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('tree_checks', 48, 0, ax.mojom.AXTreeChecksSpec, null, true, 0, undefined),
    ],
    [[0, 64]]);
