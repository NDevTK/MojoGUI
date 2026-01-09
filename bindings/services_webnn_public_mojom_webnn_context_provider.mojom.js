// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_context_provider.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};


// Enum: PowerPreference
webnn.mojom.PowerPreference = {
};

// Struct: CreateContextOptions
webnn.mojom.CreateContextOptions = class {
  constructor(values = {}) {
    this.kDefault = values.kDefault !== undefined ? values.kDefault : null;
  }
};

// Struct: CreateContextSuccess
webnn.mojom.CreateContextSuccess = class {
  constructor(values = {}) {
    this.read_tensor_consumer = values.read_tensor_consumer !== undefined ? values.read_tensor_consumer : null;
  }
};

// Interface: WebNNContextProvider
webnn.mojom.WebNNContextProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'webnn.mojom.WebNNContextProvider';
  }

  createWebNNContext(options) {
    // Method: CreateWebNNContext
    return new Promise((resolve) => {
      // Call: CreateWebNNContext(options)
      resolve({});
    });
  }

};

webnn.mojom.WebNNContextProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
