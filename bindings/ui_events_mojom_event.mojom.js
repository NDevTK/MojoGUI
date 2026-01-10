// Auto-generated MojoJS binding
// Source: chromium_src/ui/events/mojom/event.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};


// Union: GestureDataDetails
ui.mojom.GestureDataDetailsSpec = { $: mojo.internal.Union(
    'ui.mojom.GestureDataDetails', {
      'pinch': {
        'ordinal': 0,
        'type': ui.mojom.GesturePinchDataSpec,
      }},
      'swipe': {
        'ordinal': 1,
        'type': ui.mojom.GestureSwipeDataSpec,
      }},
    })
};

// Struct: KeyData
ui.mojom.KeyDataSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.KeyData',
      packedSize: 24,
      fields: [
        { name: 'key_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'dom_code', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'dom_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'is_char', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: LocationData
ui.mojom.LocationDataSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.LocationData',
      packedSize: 24,
      fields: [
        { name: 'relative_location', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'root_location', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: GesturePinchData
ui.mojom.GesturePinchDataSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.GesturePinchData',
      packedSize: 16,
      fields: [
        { name: 'scale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: GestureSwipeData
ui.mojom.GestureSwipeDataSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.GestureSwipeData',
      packedSize: 16,
      fields: [
        { name: 'left', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'right', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'up', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'down', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: GestureData
ui.mojom.GestureDataSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.GestureData',
      packedSize: 40,
      fields: [
        { name: 'location', packedOffset: 16, packedBitOffset: 0, type: ui.mojom.LocationDataSpec, nullable: false, minVersion: 0 },
        { name: 'device_type', packedOffset: 24, packedBitOffset: 0, type: ui.mojom.GestureDeviceTypeSpec, nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.GestureDataDetailsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ScrollData
ui.mojom.ScrollDataSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.ScrollData',
      packedSize: 48,
      fields: [
        { name: 'location', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.LocationDataSpec, nullable: false, minVersion: 0 },
        { name: 'x_offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'y_offset', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'x_offset_ordinal', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'y_offset_ordinal', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'finger_count', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'momentum_phase', packedOffset: 28, packedBitOffset: 0, type: ui.mojom.EventMomentumPhaseSpec, nullable: false, minVersion: 0 },
        { name: 'scroll_event_phase', packedOffset: 32, packedBitOffset: 0, type: ui.mojom.ScrollEventPhaseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: PointerDetails
ui.mojom.PointerDetailsSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.PointerDetails',
      packedSize: 56,
      fields: [
        { name: 'pointer_type', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.EventPointerTypeSpec, nullable: false, minVersion: 0 },
        { name: 'radius_x', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'radius_y', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'force', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'tilt_x', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'tilt_y', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'tangential_pressure', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'twist', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'offset_x', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'offset_y', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: MouseData
ui.mojom.MouseDataSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.MouseData',
      packedSize: 48,
      fields: [
        { name: 'changed_button_flags', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'location', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.LocationDataSpec, nullable: false, minVersion: 0 },
        { name: 'pointer_details', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.PointerDetailsSpec, nullable: false, minVersion: 0 },
        { name: 'wheel_offset', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.Vector2dSpec, nullable: false, minVersion: 0 },
        { name: 'tick_120ths', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.Vector2dSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: TouchData
ui.mojom.TouchDataSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.TouchData',
      packedSize: 32,
      fields: [
        { name: 'may_cause_scrolling', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'hovering', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'location', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.LocationDataSpec, nullable: false, minVersion: 0 },
        { name: 'pointer_details', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.PointerDetailsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Event
ui.mojom.EventSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.Event',
      packedSize: 80,
      fields: [
        { name: 'action', packedOffset: 64, packedBitOffset: 0, type: ui.mojom.EventTypeSpec, nullable: false, minVersion: 0 },
        { name: 'flags', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'time_stamp', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'latency', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.LatencyInfoSpec, nullable: false, minVersion: 0 },
        { name: 'key_data', packedOffset: 16, packedBitOffset: 0, type: ui.mojom.KeyDataSpec, nullable: true, minVersion: 0 },
        { name: 'gesture_data', packedOffset: 24, packedBitOffset: 0, type: ui.mojom.GestureDataSpec, nullable: true, minVersion: 0 },
        { name: 'scroll_data', packedOffset: 32, packedBitOffset: 0, type: ui.mojom.ScrollDataSpec, nullable: true, minVersion: 0 },
        { name: 'touch_data', packedOffset: 40, packedBitOffset: 0, type: ui.mojom.TouchDataSpec, nullable: true, minVersion: 0 },
        { name: 'mouse_data', packedOffset: 48, packedBitOffset: 0, type: ui.mojom.MouseDataSpec, nullable: true, minVersion: 0 },
        { name: 'properties', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.Uint8, false), false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};
