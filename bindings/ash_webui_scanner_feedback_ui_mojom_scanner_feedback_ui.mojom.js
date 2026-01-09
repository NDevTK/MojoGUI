// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/scanner_feedback_ui/mojom/scanner_feedback_ui.mojom
// Module: ash.mojom.scanner_feedback_ui

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.scanner_feedback_ui = ash.mojom.scanner_feedback_ui || {};


// Struct: FeedbackInfo
ash.mojom.scanner_feedback_ui.FeedbackInfo = class {
  constructor(values = {}) {
    this.screenshot_url = values.screenshot_url !== undefined ? values.screenshot_url : "";
  }
};

// Interface: PageHandler
ash.mojom.scanner_feedback_ui.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.mojom.scanner_feedback_ui.PageHandler';
  }

  getFeedbackInfo() {
    // Method: GetFeedbackInfo
    return new Promise((resolve) => {
      // Call: GetFeedbackInfo()
      resolve({});
    });
  }

  closeDialog() {
    // Method: CloseDialog
    // Call: CloseDialog()
  }

  sendFeedback(user_description) {
    // Method: SendFeedback
    // Call: SendFeedback(user_description)
  }

};

ash.mojom.scanner_feedback_ui.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
