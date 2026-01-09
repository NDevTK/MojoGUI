// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/legion_internals/legion_internals.mojom
// Module: legion_internals.mojom

'use strict';

// Module namespace
var legion_internals = legion_internals || {};
legion_internals.mojom = legion_internals.mojom || {};


// Struct: LegionResponse
legion_internals.mojom.LegionResponse = class {
  constructor(values = {}) {
    this.error = values.error !== undefined ? values.error : "";
  }
};

// Interface: LegionInternalsPageHandler
legion_internals.mojom.LegionInternalsPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'legion_internals.mojom.LegionInternalsPageHandler';
  }

  connect(url, api_key) {
    // Method: Connect
    // Call: Connect(url, api_key)
  }

  close() {
    // Method: Close
    // Call: Close()
  }

  sendRequest(feature_name, request) {
    // Method: SendRequest
    return new Promise((resolve) => {
      // Call: SendRequest(feature_name, request)
      resolve({});
    });
  }

};

legion_internals.mojom.LegionInternalsPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
