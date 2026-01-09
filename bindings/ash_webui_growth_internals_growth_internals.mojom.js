// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/growth_internals/growth_internals.mojom
// Module: ash.growth.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.growth = ash.growth || {};
ash.growth.mojom = ash.growth.mojom || {};


// Interface: PageHandler
ash.growth.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.growth.mojom.PageHandler';
  }

  getCampaignsLogs() {
    // Method: GetCampaignsLogs
    return new Promise((resolve) => {
      // Call: GetCampaignsLogs()
      resolve({});
    });
  }

  clearAllEvents() {
    // Method: ClearAllEvents
    // Call: ClearAllEvents()
  }

};

ash.growth.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
