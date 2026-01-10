// Auto-generated MojoJS binding
// Source: chromium_src/ui/events/mojom/motion_event_android.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

ui.mojom.PointerCoordinatesSpec = { $: {} };
ui.mojom.MotionEventAndroidCachedPointerSpec = { $: {} };
ui.mojom.HistoricalCachedPointerSpec = { $: {} };
ui.mojom.CachedMotionEventAndroidSpec = { $: {} };

// Struct: PointerCoordinates
mojo.internal.Struct(
    ui.mojom.PointerCoordinatesSpec, 'ui.mojom.PointerCoordinates', [
      mojo.internal.StructField('position', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('touch_major', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MotionEventAndroidCachedPointer
mojo.internal.Struct(
    ui.mojom.MotionEventAndroidCachedPointerSpec, 'ui.mojom.MotionEventAndroidCachedPointer', [
      mojo.internal.StructField('pointer_data', 0, 0, ui.mojom.PointerCoordinatesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('touch_minor', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('pressure', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('orientation', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('tilt_x', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('tilt_y', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('tool_type', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: HistoricalCachedPointer
mojo.internal.Struct(
    ui.mojom.HistoricalCachedPointerSpec, 'ui.mojom.HistoricalCachedPointer', [
      mojo.internal.StructField('pointers', 0, 0, mojo.internal.Array(ui.mojom.PointerCoordinatesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('event_time', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CachedMotionEventAndroid
mojo.internal.Struct(
    ui.mojom.CachedMotionEventAndroidSpec, 'ui.mojom.CachedMotionEventAndroid', [
      mojo.internal.StructField('latest_event_time', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('down_time_ms', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('raw_position_offset', 16, 0, gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pointers', 24, 0, mojo.internal.Array(ui.mojom.MotionEventAndroidCachedPointerSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('historical_events', 32, 0, mojo.internal.Array(ui.mojom.HistoricalCachedPointerSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('pix_to_dip', 40, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('ticks_x', 44, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('ticks_y', 48, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('tick_multiplier', 52, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('source', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('action', 60, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('action_index', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('action_button', 68, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('gesture_classification', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('button_state', 76, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('flags', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('for_touch_handle', 84, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);
