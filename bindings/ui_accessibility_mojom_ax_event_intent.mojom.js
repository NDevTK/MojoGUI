// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_event_intent.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var ui = ui || {};


// Struct: EventIntent
ax.mojom.mojom.EventIntentSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.EventIntent',
      packedSize: 24,
      fields: [
        { name: 'command', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.CommandSpec, nullable: false, minVersion: 0 },
        { name: 'input_event_type', packedOffset: 4, packedBitOffset: 0, type: ax.mojom.InputEventTypeSpec, nullable: false, minVersion: 0 },
        { name: 'text_boundary', packedOffset: 8, packedBitOffset: 0, type: ax.mojom.TextBoundarySpec, nullable: false, minVersion: 0 },
        { name: 'move_direction', packedOffset: 12, packedBitOffset: 0, type: ax.mojom.MoveDirectionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
