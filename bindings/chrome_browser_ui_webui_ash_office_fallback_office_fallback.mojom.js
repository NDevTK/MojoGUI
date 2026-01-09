// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/office_fallback/office_fallback.mojom
// Module: ash.office_fallback.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.office_fallback = ash.office_fallback || {};
ash.office_fallback.mojom = ash.office_fallback.mojom || {};


// Enum: DialogChoice
ash.office_fallback.mojom.DialogChoice = {
  kCancel: 0,
  kOk: 1,
  kQuickOffice: 2,
  kTryAgain: 3,
};

// Interface: PageHandlerFactory
ash.office_fallback.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.office_fallback.mojom.PageHandlerFactory';
  }

  createPageHandler(handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(handler)
  }

};

ash.office_fallback.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
ash.office_fallback.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.office_fallback.mojom.PageHandler';
  }

  close(choice) {
    // Method: Close
    // Call: Close(choice)
  }

};

ash.office_fallback.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
