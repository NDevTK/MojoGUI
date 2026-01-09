// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/bindings/public/mojom/api_bindings.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Struct: ApiBinding
chromecast.mojom.ApiBinding = class {
  constructor(values = {}) {
    this.script = values.script !== undefined ? values.script : "";
  }
};

// Interface: ApiBindings
chromecast.mojom.ApiBindingsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.ApiBindings';
  }

  getAll() {
    // Method: GetAll
    return new Promise((resolve) => {
      // Call: GetAll()
      resolve({});
    });
  }

  connect(port_name, port) {
    // Method: Connect
    // Call: Connect(port_name, port)
  }

};

chromecast.mojom.ApiBindingsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
