// Auto-generated MojoJS binding
// Source: chromium_src/ui/latency/mojom/latency_info.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


// Enum: LatencyComponentType
ui.mojom.mojom.LatencyComponentType = {
  INPUT_EVENT_LATENCY_BEGIN_RWH_COMPONENT: 0,
  INPUT_EVENT_LATENCY_SCROLL_UPDATE_ORIGINAL_COMPONENT: 1,
  INPUT_EVENT_LATENCY_FIRST_SCROLL_UPDATE_ORIGINAL_COMPONENT: 2,
  INPUT_EVENT_LATENCY_ORIGINAL_COMPONENT: 3,
  INPUT_EVENT_LATENCY_UI_COMPONENT: 4,
  INPUT_EVENT_LATENCY_RENDERER_MAIN_COMPONENT: 5,
  INPUT_EVENT_LATENCY_RENDERING_SCHEDULED_MAIN_COMPONENT: 6,
  INPUT_EVENT_LATENCY_RENDERING_SCHEDULED_IMPL_COMPONENT: 7,
  INPUT_EVENT_LATENCY_RENDERER_SWAP_COMPONENT: 8,
  DISPLAY_COMPOSITOR_RECEIVED_FRAME_COMPONENT: 9,
  INPUT_EVENT_GPU_SWAP_BUFFER_COMPONENT: 10,
  INPUT_EVENT_LATENCY_FRAME_SWAP_COMPONENT: 11,
};
ui.mojom.mojom.LatencyComponentTypeSpec = { $: mojo.internal.Enum() };

// Struct: LatencyInfo
ui.mojom.mojom.LatencyInfoSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.LatencyInfo',
      packedSize: 48,
      fields: [
        { name: 'latency_components', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(ui.mojom.LatencyComponentTypeSpec, mojo_base.mojom.TimeTicksSpec, false), nullable: false, minVersion: 0 },
        { name: 'trace_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'coalesced', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'began', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'terminated', packedOffset: 32, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'gesture_scroll_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'touch_trace_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};
