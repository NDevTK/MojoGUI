// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/calendar/google_calendar.mojom
// Module: ntp.calendar.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.calendar = ntp.calendar || {};
ntp.calendar.mojom = ntp.calendar.mojom || {};


// Interface: GoogleCalendarPageHandler
ntp.calendar.mojom.GoogleCalendarPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ntp.calendar.mojom.GoogleCalendarPageHandler';
  }

  getEvents() {
    // Method: GetEvents
    return new Promise((resolve) => {
      // Call: GetEvents()
      resolve({});
    });
  }

  dismissModule() {
    // Method: DismissModule
    // Call: DismissModule()
  }

  restoreModule() {
    // Method: RestoreModule
    // Call: RestoreModule()
  }

};

ntp.calendar.mojom.GoogleCalendarPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
