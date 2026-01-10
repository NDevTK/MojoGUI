// Auto-generated MojoJS binding
// Source: chromium_src/ui/latency/mojom/latency_info.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};

ui.mojom.LatencyComponentTypeSpec = { $: mojo.internal.Enum() };
ui.mojom.LatencyInfoSpec = { $: {} };

// Enum: LatencyComponentType
ui.mojom.LatencyComponentType = {
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

// Struct: LatencyInfo
mojo.internal.Struct(
    ui.mojom.LatencyInfoSpec, 'ui.mojom.LatencyInfo', [
      mojo.internal.StructField('latency_components', 0, 0, mojo.internal.Map(ui.mojom.LatencyComponentTypeSpec, mojo_base.mojom.TimeTicksSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('trace_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('coalesced', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('began', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('terminated', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('gesture_scroll_id', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('touch_trace_id', 32, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 48]]);
