// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_tensor.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};


// Struct: TensorUsage
webnn.mojom.TensorUsage = class {
  constructor(values = {}) {
    this.graph_constant = values.graph_constant !== undefined ? values.graph_constant : 0;
  }
};

// Struct: TensorInfo
webnn.mojom.TensorInfo = class {
  constructor(values = {}) {
    this.usage = values.usage !== undefined ? values.usage : null;
  }
};

// Interface: WebNNTensor
webnn.mojom.WebNNTensorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'webnn.mojom.WebNNTensor';
  }

  readTensor() {
    // Method: ReadTensor
    return new Promise((resolve) => {
      // Call: ReadTensor()
      resolve({});
    });
  }

  writeTensor(src_buffer) {
    // Method: WriteTensor
    // Call: WriteTensor(src_buffer)
  }

  importTensor(fence) {
    // Method: ImportTensor
    // Call: ImportTensor(fence)
  }

};

webnn.mojom.WebNNTensorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
