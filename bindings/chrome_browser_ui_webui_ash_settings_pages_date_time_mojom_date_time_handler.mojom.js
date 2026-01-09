// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/date_time/mojom/date_time_handler.mojom
// Module: ash.settings.date_time.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.date_time = ash.settings.date_time || {};
ash.settings.date_time.mojom = ash.settings.date_time.mojom || {};


// Interface: PageHandlerFactory
ash.settings.date_time.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.date_time.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

ash.settings.date_time.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
ash.settings.date_time.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.date_time.mojom.PageHandler';
  }

  showParentAccessForTimezone() {
    // Method: ShowParentAccessForTimezone
    // Call: ShowParentAccessForTimezone()
  }

  values(name) {
    // Method: values
    // Call: values(name)
  }

  getTimezones() {
    // Method: GetTimezones
    return new Promise((resolve) => {
      // Call: GetTimezones()
      resolve({});
    });
  }

  showSetDateTimeUI() {
    // Method: ShowSetDateTimeUI
    // Call: ShowSetDateTimeUI()
  }

};

ash.settings.date_time.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
ash.settings.date_time.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.date_time.mojom.Page';
  }

  onSystemClockCanSetTimeChanged(is_allowed) {
    // Method: OnSystemClockCanSetTimeChanged
    // Call: OnSystemClockCanSetTimeChanged(is_allowed)
  }

  onParentAccessValidationComplete(success) {
    // Method: OnParentAccessValidationComplete
    // Call: OnParentAccessValidationComplete(success)
  }

};

ash.settings.date_time.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
