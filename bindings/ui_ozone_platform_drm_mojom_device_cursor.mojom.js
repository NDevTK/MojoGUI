// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/drm/mojom/device_cursor.mojom
// Module: ui.ozone.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.ozone = ui.ozone || {};
ui.ozone.mojom = ui.ozone.mojom || {};


// Interface: DeviceCursor
ui.ozone.mojom.DeviceCursorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ui.ozone.mojom.DeviceCursor';
  }

  setCursor(window, bitmaps, point, frame_delay) {
    // Method: SetCursor
    // Call: SetCursor(window, bitmaps, point, frame_delay)
  }

  moveCursor(window, point) {
    // Method: MoveCursor
    // Call: MoveCursor(window, point)
  }

};

ui.ozone.mojom.DeviceCursorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
