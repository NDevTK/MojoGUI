// Auto-generated MojoJS binding
// Source: chromium_src/ui/events/mojom/motion_event_android.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


// Struct: PointerCoordinates
ui.mojom.PointerCoordinatesSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.PointerCoordinates',
      packedSize: 24,
      fields: [
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'touch_major', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MotionEventAndroidCachedPointer
ui.mojom.MotionEventAndroidCachedPointerSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.MotionEventAndroidCachedPointer',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'pointer_data', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.PointerCoordinatesSpec, nullable: false },
        { name: 'touch_minor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'pressure', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'orientation', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'tilt_x', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'tilt_y', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'tool_type', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HistoricalCachedPointer
ui.mojom.HistoricalCachedPointerSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.HistoricalCachedPointer',
      packedSize: 24,
      fields: [
        { name: 'pointers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'event_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CachedMotionEventAndroid
ui.mojom.CachedMotionEventAndroidSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.CachedMotionEventAndroid',
      packedSize: 104,
      fields: [
        { name: 'pix_to_dip', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'ticks_x', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'ticks_y', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'tick_multiplier', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'source', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'for_touch_handle', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'latest_event_time', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'down_time_ms', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'action', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'action_index', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'action_button', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'gesture_classification', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'button_state', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'flags', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'raw_position_offset', packedOffset: 72, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false },
        { name: 'pointers', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'historical_events', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
