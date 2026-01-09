// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_event_intent.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Struct: EventIntent
ax.mojom.EventIntentSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.EventIntent',
      packedSize: 40,
      fields: [
        { name: 'command', packedOffset: 8, packedBitOffset: 0, type: ax.mojom.CommandSpec, nullable: false },
        { name: 'input_event_type', packedOffset: 16, packedBitOffset: 0, type: ax.mojom.InputEventTypeSpec, nullable: false },
        { name: 'text_boundary', packedOffset: 24, packedBitOffset: 0, type: ax.mojom.TextBoundarySpec, nullable: false },
        { name: 'move_direction', packedOffset: 32, packedBitOffset: 0, type: ax.mojom.MoveDirectionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
