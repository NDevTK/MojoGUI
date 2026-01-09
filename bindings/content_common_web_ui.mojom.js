// Auto-generated MojoJS binding
// Source: chromium_src/content/common/web_ui.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: WebUIHost
content.mojom.WebUIHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.WebUIHost';
  }

  send(message, args) {
    // Method: Send
    // Call: Send(message, args)
  }

};

content.mojom.WebUIHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebUI
content.mojom.WebUIPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.WebUI';
  }

  setProperty(property_name, property_value_json) {
    // Method: SetProperty
    // Call: SetProperty(property_name, property_value_json)
  }

};

content.mojom.WebUIRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
