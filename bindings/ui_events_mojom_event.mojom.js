// Auto-generated MojoJS binding
// Source: chromium_src/ui/events/mojom/event.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

ui.mojom.GestureDataDetailsSpec = { $: {} };
ui.mojom.KeyDataSpec = { $: {} };
ui.mojom.LocationDataSpec = { $: {} };
ui.mojom.GesturePinchDataSpec = { $: {} };
ui.mojom.GestureSwipeDataSpec = { $: {} };
ui.mojom.GestureDataSpec = { $: {} };
ui.mojom.ScrollDataSpec = { $: {} };
ui.mojom.PointerDetailsSpec = { $: {} };
ui.mojom.MouseDataSpec = { $: {} };
ui.mojom.TouchDataSpec = { $: {} };
ui.mojom.EventSpec = { $: {} };

// Union: GestureDataDetails
mojo.internal.Union(
    ui.mojom.GestureDataDetailsSpec, 'ui.mojom.GestureDataDetails', {
      'pinch': {
        'ordinal': 0,
        'type': ui.mojom.GesturePinchDataSpec.$,
        'nullable': false,
      },
      'swipe': {
        'ordinal': 1,
        'type': ui.mojom.GestureSwipeDataSpec.$,
        'nullable': false,
      },
    });

// Struct: KeyData
mojo.internal.Struct(
    ui.mojom.KeyDataSpec, 'ui.mojom.KeyData', [
      mojo.internal.StructField('key_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('dom_code', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('dom_key', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_char', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LocationData
mojo.internal.Struct(
    ui.mojom.LocationDataSpec, 'ui.mojom.LocationData', [
      mojo.internal.StructField('relative_location', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('root_location', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GesturePinchData
mojo.internal.Struct(
    ui.mojom.GesturePinchDataSpec, 'ui.mojom.GesturePinchData', [
      mojo.internal.StructField('scale', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GestureSwipeData
mojo.internal.Struct(
    ui.mojom.GestureSwipeDataSpec, 'ui.mojom.GestureSwipeData', [
      mojo.internal.StructField('left', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('right', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('up', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('down', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GestureData
mojo.internal.Struct(
    ui.mojom.GestureDataSpec, 'ui.mojom.GestureData', [
      mojo.internal.StructField('location', 0, 0, ui.mojom.LocationDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_type', 8, 0, ui.mojom.GestureDeviceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('details', 16, 0, ui.mojom.GestureDataDetailsSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ScrollData
mojo.internal.Struct(
    ui.mojom.ScrollDataSpec, 'ui.mojom.ScrollData', [
      mojo.internal.StructField('location', 0, 0, ui.mojom.LocationDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('momentum_phase', 8, 0, ui.mojom.EventMomentumPhaseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scroll_event_phase', 16, 0, ui.mojom.ScrollEventPhaseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('x_offset', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('y_offset', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('x_offset_ordinal', 32, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('y_offset_ordinal', 36, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('finger_count', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: PointerDetails
mojo.internal.Struct(
    ui.mojom.PointerDetailsSpec, 'ui.mojom.PointerDetails', [
      mojo.internal.StructField('pointer_type', 0, 0, ui.mojom.EventPointerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('radius_x', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('radius_y', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('force', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('tilt_x', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('tilt_y', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('tangential_pressure', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('twist', 32, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('id', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('offset_x', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('offset_y', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: MouseData
mojo.internal.Struct(
    ui.mojom.MouseDataSpec, 'ui.mojom.MouseData', [
      mojo.internal.StructField('location', 0, 0, ui.mojom.LocationDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pointer_details', 8, 0, ui.mojom.PointerDetailsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wheel_offset', 16, 0, gfx.mojom.Vector2dSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tick_120ths', 24, 0, gfx.mojom.Vector2dSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('changed_button_flags', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: TouchData
mojo.internal.Struct(
    ui.mojom.TouchDataSpec, 'ui.mojom.TouchData', [
      mojo.internal.StructField('location', 0, 0, ui.mojom.LocationDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pointer_details', 8, 0, ui.mojom.PointerDetailsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('may_cause_scrolling', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hovering', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Event
mojo.internal.Struct(
    ui.mojom.EventSpec, 'ui.mojom.Event', [
      mojo.internal.StructField('action', 0, 0, ui.mojom.EventTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('time_stamp', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('latency', 16, 0, ui.mojom.LatencyInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_data', 24, 0, ui.mojom.KeyDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('gesture_data', 32, 0, ui.mojom.GestureDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('scroll_data', 40, 0, ui.mojom.ScrollDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('touch_data', 48, 0, ui.mojom.TouchDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('mouse_data', 56, 0, ui.mojom.MouseDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('properties', 64, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.Uint8, false), false), null, true, 0, undefined),
      mojo.internal.StructField('flags', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 88]]);
