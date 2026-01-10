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
        { name: 'arrived_in_browser_main_timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'scrolls_blocking_touch_dispatched_to_renderer', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'dispatched_to_renderer', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
