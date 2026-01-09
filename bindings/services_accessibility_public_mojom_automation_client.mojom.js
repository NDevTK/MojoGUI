// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/automation_client.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Interface: AutomationClient
ax.mojom.AutomationClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ax.mojom.AutomationClient';
  }

  enable() {
    // Method: Enable
    return new Promise((resolve) => {
      // Call: Enable()
      resolve({});
    });
  }

  disable() {
    // Method: Disable
    // Call: Disable()
  }

  enableChildTree(tree_id) {
    // Method: EnableChildTree
    // Call: EnableChildTree(tree_id)
  }

  performAction(action_data) {
    // Method: PerformAction
    // Call: PerformAction(action_data)
  }

};

ax.mojom.AutomationClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
