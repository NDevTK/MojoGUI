// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/automation_registry.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Interface: RendererAutomationRegistry
extensions.mojom.RendererAutomationRegistryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'extensions.mojom.RendererAutomationRegistry';
  }

  bindAutomation(automation) {
    // Method: BindAutomation
    // Call: BindAutomation(automation)
  }

};

extensions.mojom.RendererAutomationRegistryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
