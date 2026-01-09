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
      packedSize: 16,
      fields: [
        { name: 'is_char', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'root_location', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'down', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'scroll_event_phase', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'offset_y', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'tick_120ths', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'pointer_details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
