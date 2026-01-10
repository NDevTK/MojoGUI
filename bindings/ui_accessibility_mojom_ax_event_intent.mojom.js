// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_event_intent.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var ui = ui || {};

ax.mojom.EventIntentSpec = { $: {} };

// Struct: EventIntent
mojo.internal.Struct(
    ax.mojom.EventIntentSpec, 'ax.mojom.EventIntent', [
      mojo.internal.StructField('command', 0, 0, ax.mojom.CommandSpec, null, false, 0, undefined),
      mojo.internal.StructField('input_event_type', 4, 0, ax.mojom.InputEventTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('text_boundary', 8, 0, ax.mojom.TextBoundarySpec, null, false, 0, undefined),
      mojo.internal.StructField('move_direction', 12, 0, ax.mojom.MoveDirectionSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);
