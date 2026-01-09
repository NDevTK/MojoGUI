// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_context.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};


// Struct: CreateTensorSuccess
webnn.mojom.CreateTensorSuccess = class {
  constructor(values = {}) {
    this.tensor_handle = values.tensor_handle !== undefined ? values.tensor_handle : null;
  }
};

// Interface: WebNNContext
webnn.mojom.WebNNContextPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'webnn.mojom.WebNNContext';
  }

  createGraphBuilder(receiver) {
    // Method: CreateGraphBuilder
    // Call: CreateGraphBuilder(receiver)
  }

  createTensor(tensor_info, tensor_data) {
    // Method: CreateTensor
    return new Promise((resolve) => {
      // Call: CreateTensor(tensor_info, tensor_data)
      resolve({});
    });
  }

  createTensor() {
    // Method: CreateTensor
    // Call: CreateTensor()
  }

  createTensorFromMailbox(tensor_info, mailbox, fence) {
    // Method: CreateTensorFromMailbox
    return new Promise((resolve) => {
      // Call: CreateTensorFromMailbox(tensor_info, mailbox, fence)
      resolve({});
    });
  }

};

webnn.mojom.WebNNContextRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
