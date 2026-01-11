// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_tree_update.mojom
// Module: ax.mojom

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};

ax.mojom.AXTreeUpdateSpec = { $: {} };

// Struct: AXTreeUpdate
mojo.internal.Struct(
    ax.mojom.AXTreeUpdateSpec, 'ax.mojom.AXTreeUpdate', [
      mojo.internal.StructField('tree_data', 0, 0, ax.mojom.AXTreeDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('nodes', 8, 0, mojo.internal.Array(ax.mojom.AXNodeDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('event_from', 16, 0, ax.mojom.EventFromSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_from_action', 24, 0, ax.mojom.ActionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_intents', 32, 0, mojo.internal.Array(ax.mojom.EventIntentSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('tree_checks', 40, 0, ax.mojom.AXTreeChecksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('node_id_to_clear', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('root_id', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_tree_data', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);
