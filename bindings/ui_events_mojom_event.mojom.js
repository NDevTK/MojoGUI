// Auto-generated MojoJS binding
// Source: chromium_src/ui/events/mojom/event.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


// Struct: KeyData
ui.mojom.KeyDataSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.KeyData',
      packedSize: 32,
      fields: [
        { name: 'key_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'dom_code', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'dom_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'is_char', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'relative_location', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'root_location', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'scale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'left', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'right', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'up', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'down', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GestureData
ui.mojom.GestureDataSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.GestureData',
      packedSize: 32,
      fields: [
        { name: 'location', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'device_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'details', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ScrollData
ui.mojom.ScrollDataSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.ScrollData',
      packedSize: 56,
      fields: [
        { name: 'location', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'momentum_phase', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'scroll_event_phase', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'x_offset', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'y_offset', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'x_offset_ordinal', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'y_offset_ordinal', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'finger_count', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'pointer_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'radius_x', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'radius_y', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'force', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'tilt_x', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'tilt_y', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'tangential_pressure', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'twist', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'id', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'offset_x', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'offset_y', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'location', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pointer_details', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'wheel_offset', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'tick_120ths', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'changed_button_flags', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'location', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pointer_details', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'may_cause_scrolling', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'hovering', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Event
ui.mojom.EventSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.Event',
      packedSize: 88,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'time_stamp', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'latency', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'key_data', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'gesture_data', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'scroll_data', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'touch_data', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'mouse_data', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'properties', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Map, nullable: true },
        { name: 'flags', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
