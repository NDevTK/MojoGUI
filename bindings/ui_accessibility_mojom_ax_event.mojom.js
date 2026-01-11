// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_event.mojom
// Module: ax.mojom

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};

ax.mojom.AXEventSpec = { $: {} };

// Struct: AXEvent
mojo.internal.Struct(
    ax.mojom.AXEventSpec, 'ax.mojom.AXEvent', [
      mojo.internal.StructField('event_type', 0, 0, ax.mojom.EventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_from', 8, 0, ax.mojom.EventFromSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_from_action', 16, 0, ax.mojom.ActionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_intents', 24, 0, mojo.internal.Array(ax.mojom.EventIntentSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('action_request_id', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);
