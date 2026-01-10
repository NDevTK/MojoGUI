// Auto-generated MojoJS binding
// Source: chromium_src/ui/events/mojom/motion_event_android.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: PointerCoordinates
ui.mojom.mojom.PointerCoordinatesSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.PointerCoordinates',
      packedSize: 24,
      fields: [
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'touch_major', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: MotionEventAndroidCachedPointer
ui.mojom.mojom.MotionEventAndroidCachedPointerSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.MotionEventAndroidCachedPointer',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'pointer_data', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.PointerCoordinatesSpec, nullable: false, minVersion: 0 },
        { name: 'touch_minor', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'pressure', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'orientation', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'tilt_x', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'tilt_y', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'tool_type', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: HistoricalCachedPointer
ui.mojom.mojom.HistoricalCachedPointerSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.HistoricalCachedPointer',
      packedSize: 24,
      fields: [
        { name: 'pointers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ui.mojom.PointerCoordinatesSpec, false), nullable: false, minVersion: 0 },
        { name: 'event_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CachedMotionEventAndroid
ui.mojom.mojom.CachedMotionEventAndroidSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.CachedMotionEventAndroid',
      packedSize: 96,
      fields: [
        { name: 'pix_to_dip', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'ticks_x', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'ticks_y', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'tick_multiplier', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'for_touch_handle', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'latest_event_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'down_time_ms', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'action', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'action_index', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'action_button', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'gesture_classification', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'button_state', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'flags', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'raw_position_offset', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false, minVersion: 0 },
        { name: 'pointers', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(ui.mojom.MotionEventAndroidCachedPointerSpec, false), nullable: false, minVersion: 0 },
        { name: 'historical_events', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(ui.mojom.HistoricalCachedPointerSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 96}]
    }
  }
};
