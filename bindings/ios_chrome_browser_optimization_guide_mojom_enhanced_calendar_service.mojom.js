// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/enhanced_calendar_service.mojom
// Module: ai.mojom

'use strict';

// Module namespace
var ai = ai || {};
ai.mojom = ai.mojom || {};


// Struct: EnhancedCalendarServiceRequestParams
ai.mojom.EnhancedCalendarServiceRequestParams = class {
  constructor(values = {}) {
    this.selected_text = values.selected_text !== undefined ? values.selected_text : "";
    this.optional_prompt = values.optional_prompt !== undefined ? values.optional_prompt : "";
  }
};

// Interface: EnhancedCalendarService
ai.mojom.EnhancedCalendarServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ai.mojom.EnhancedCalendarService';
  }

  executeEnhancedCalendarRequest(request_params) {
    // Method: ExecuteEnhancedCalendarRequest
    return new Promise((resolve) => {
      // Call: ExecuteEnhancedCalendarRequest(request_params)
      resolve({});
    });
  }

};

ai.mojom.EnhancedCalendarServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
