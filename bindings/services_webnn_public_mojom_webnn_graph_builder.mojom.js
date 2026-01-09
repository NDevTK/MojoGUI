// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_graph_builder.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};


// Struct: CreateGraphSuccess
webnn.mojom.CreateGraphSuccess = class {
  constructor(values = {}) {
    this.devices = values.devices !== undefined ? values.devices : [];
  }
};

// Interface: WebNNGraphBuilder
webnn.mojom.WebNNGraphBuilderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'webnn.mojom.WebNNGraphBuilder';
  }

  createPendingConstant(constant_handle, data_type, data) {
    // Method: CreatePendingConstant
    // Call: CreatePendingConstant(constant_handle, data_type, data)
  }

  isValidGraphForTesting(context_properties, graph_info) {
    // Method: IsValidGraphForTesting
    return new Promise((resolve) => {
      // Call: IsValidGraphForTesting(context_properties, graph_info)
      resolve({});
    });
  }

};

webnn.mojom.WebNNGraphBuilderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
