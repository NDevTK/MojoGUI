// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_event.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Struct: AXEvent
ax.mojom.AXEventSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AXEvent',
      packedSize: 56,
      fields: [
        { name: 'event_type', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.EventSpec, nullable: false },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'event_from', packedOffset: 16, packedBitOffset: 0, type: ax.mojom.EventFromSpec, nullable: false },
        { name: 'event_from_action', packedOffset: 24, packedBitOffset: 0, type: ax.mojom.ActionSpec, nullable: false },
        { name: 'event_intents', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'action_request_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
