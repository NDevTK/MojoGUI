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
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'pointer_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'touch_minor', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'pressure', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'orientation', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'tilt_x', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'tilt_y', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'tool_type', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
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
        { name: 'event_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'latest_event_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'down_time_ms', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'raw_position_offset', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pointers', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'historical_events', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'pix_to_dip', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'ticks_x', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'ticks_y', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'tick_multiplier', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'source', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'action', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'action_index', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'action_button', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'gesture_classification', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'button_state', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'flags', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'for_touch_handle', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
