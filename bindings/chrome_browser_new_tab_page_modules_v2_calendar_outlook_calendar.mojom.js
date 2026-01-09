// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/calendar/outlook_calendar.mojom
// Module: ntp.calendar.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.calendar = ntp.calendar || {};
ntp.calendar.mojom = ntp.calendar.mojom || {};


// Interface: OutlookCalendarPageHandler
ntp.calendar.mojom.OutlookCalendarPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ntp.calendar.mojom.OutlookCalendarPageHandler';
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

ntp.calendar.mojom.OutlookCalendarPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
