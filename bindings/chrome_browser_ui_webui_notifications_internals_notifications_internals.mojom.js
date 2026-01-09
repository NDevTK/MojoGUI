// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/notifications_internals/notifications_internals.mojom
// Module: notifications_internals.mojom

'use strict';

// Module namespace
var notifications_internals = notifications_internals || {};
notifications_internals.mojom = notifications_internals.mojom || {};


// Interface: PageHandler
notifications_internals.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'notifications_internals.mojom.PageHandler';
  }

  scheduleNotification(feature) {
    // Method: ScheduleNotification
    // Call: ScheduleNotification(feature)
  }

};

notifications_internals.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
