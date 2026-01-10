// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_event.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var ui = ui || {};
var ui = ui || {};


// Struct: AXEvent
ax.mojom.mojom.AXEventSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AXEvent',
      packedSize: 40,
      fields: [
        { name: 'event_type', packedOffset: 8, packedBitOffset: 0, type: ax.mojom.EventSpec, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'event_from', packedOffset: 16, packedBitOffset: 0, type: ax.mojom.EventFromSpec, nullable: false, minVersion: 0 },
        { name: 'event_from_action', packedOffset: 20, packedBitOffset: 0, type: ax.mojom.ActionSpec, nullable: false, minVersion: 0 },
        { name: 'event_intents', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ax.mojom.EventIntentSpec, false), nullable: false, minVersion: 0 },
        { name: 'action_request_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
