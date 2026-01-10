// Auto-generated MojoJS binding
// Source: chromium_src/ui/events/mojom/event_latency_metadata.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};
var mojo_base = mojo_base || {};

ui.mojom.EventLatencyMetadataSpec = { $: {} };

// Struct: EventLatencyMetadata
mojo.internal.Struct(
    ui.mojom.EventLatencyMetadataSpec, 'ui.mojom.EventLatencyMetadata', [
      mojo.internal.StructField('arrived_in_browser_main_timestamp', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scrolls_blocking_touch_dispatched_to_renderer', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dispatched_to_renderer', 16, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);
