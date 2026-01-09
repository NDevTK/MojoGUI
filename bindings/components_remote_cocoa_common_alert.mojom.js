// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/alert.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Enum: AlertDisposition
remote_cocoa.mojom.AlertDisposition = {
};

// Struct: AlertBridgeInitParams
remote_cocoa.mojom.AlertBridgeInitParams = class {
  constructor(values = {}) {
    this.primary_button_text = values.primary_button_text !== undefined ? values.primary_button_text : "";
    this.secondary_button_text = values.secondary_button_text !== undefined ? values.secondary_button_text : "";
    this.text_field_text = values.text_field_text !== undefined ? values.text_field_text : "";
    this.check_box_text = values.check_box_text !== undefined ? values.check_box_text : "";
  }
};

// Interface: AlertBridge
remote_cocoa.mojom.AlertBridgePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remote_cocoa.mojom.AlertBridge';
  }

  show(params) {
    // Method: Show
    return new Promise((resolve) => {
      // Call: Show(params)
      resolve({});
    });
  }

  dismiss() {
    // Method: Dismiss
    // Call: Dismiss()
  }

};

remote_cocoa.mojom.AlertBridgeRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
