// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/suggest_internals/suggest_internals.mojom
// Module: suggest_internals.mojom

'use strict';

// Module namespace
var suggest_internals = suggest_internals || {};
suggest_internals.mojom = suggest_internals.mojom || {};


// Enum: RequestStatus
suggest_internals.mojom.RequestStatus = {
  kHardcoded: 0,
  kCreated: 1,
  kSent: 2,
  kSucceeded: 3,
  kFailed: 4,
};

// Struct: Request
suggest_internals.mojom.Request = class {
  constructor(values = {}) {
    this.response = values.response !== undefined ? values.response : "";
  }
};

// Interface: PageHandler
suggest_internals.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'suggest_internals.mojom.PageHandler';
  }

  setPage(page) {
    // Method: SetPage
    // Call: SetPage(page)
  }

  hardcodeResponse(response, delay) {
    // Method: HardcodeResponse
    return new Promise((resolve) => {
      // Call: HardcodeResponse(response, delay)
      resolve({});
    });
  }

};

suggest_internals.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
suggest_internals.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'suggest_internals.mojom.Page';
  }

  onRequestCreated(request) {
    // Method: OnRequestCreated
    // Call: OnRequestCreated(request)
  }

  onRequestStarted(request) {
    // Method: OnRequestStarted
    // Call: OnRequestStarted(request)
  }

  onRequestCompleted(request) {
    // Method: OnRequestCompleted
    // Call: OnRequestCompleted(request)
  }

};

suggest_internals.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
