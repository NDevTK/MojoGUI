// Auto-generated MojoJS binding
// Source: chromium_src/ui/events/mojom/event_latency_metadata.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


// Struct: EventLatencyMetadata
ui.mojom.EventLatencyMetadataSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.EventLatencyMetadata',
      packedSize: 32,
      fields: [
        { name: 'arrived_in_browser_main_timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'scrolls_blocking_touch_dispatched_to_renderer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'dispatched_to_renderer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
