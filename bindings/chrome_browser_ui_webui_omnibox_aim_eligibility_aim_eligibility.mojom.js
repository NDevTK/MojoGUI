// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/omnibox/aim_eligibility/aim_eligibility.mojom
// Module: aim_eligibility.mojom

'use strict';

// Module namespace
var aim_eligibility = aim_eligibility || {};
aim_eligibility.mojom = aim_eligibility.mojom || {};


// Struct: EligibilityState
aim_eligibility.mojom.EligibilityState = class {
  constructor(values = {}) {
    this.is_eligible_by_policy = values.is_eligible_by_policy !== undefined ? values.is_eligible_by_policy : false;
    this.server_response_base64_url_encoded = values.server_response_base64_url_encoded !== undefined ? values.server_response_base64_url_encoded : false;
    this.last_updated = values.last_updated !== undefined ? values.last_updated : "";
  }
};

// Interface: Page
aim_eligibility.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'aim_eligibility.mojom.Page';
  }

  onEligibilityStateChanged(state) {
    // Method: OnEligibilityStateChanged
    // Call: OnEligibilityStateChanged(state)
  }

};

aim_eligibility.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
aim_eligibility.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'aim_eligibility.mojom.PageHandler';
  }

  getEligibilityState() {
    // Method: GetEligibilityState
    return new Promise((resolve) => {
      // Call: GetEligibilityState()
      resolve({});
    });
  }

  requestServerEligibilityForDebugging() {
    // Method: RequestServerEligibilityForDebugging
    // Call: RequestServerEligibilityForDebugging()
  }

  setEligibilityResponseForDebugging(base64_encoded_response) {
    // Method: SetEligibilityResponseForDebugging
    return new Promise((resolve) => {
      // Call: SetEligibilityResponseForDebugging(base64_encoded_response)
      resolve({});
    });
  }

};

aim_eligibility.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandlerFactory
aim_eligibility.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'aim_eligibility.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

aim_eligibility.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
