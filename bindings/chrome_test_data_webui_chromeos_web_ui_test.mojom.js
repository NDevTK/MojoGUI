// Auto-generated MojoJS binding
// Source: chromium_src/chrome/test/data/webui/chromeos/web_ui_test.mojom
// Module: web_ui_test.mojom

'use strict';

// Module namespace
var web_ui_test = web_ui_test || {};
web_ui_test.mojom = web_ui_test.mojom || {};


// Interface: TestRunner
web_ui_test.mojom.TestRunnerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'web_ui_test.mojom.TestRunner';
  }

  testComplete(failureMessage) {
    // Method: TestComplete
    // Call: TestComplete(failureMessage)
  }

};

web_ui_test.mojom.TestRunnerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
