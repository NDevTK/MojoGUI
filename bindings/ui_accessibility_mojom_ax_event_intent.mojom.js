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
        { name: 'command', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'input_event_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'text_boundary', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'move_direction', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
