// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/copy_output_request.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: CopyOutputRequest
viz.mojom.CopyOutputRequest = class {
  constructor(values = {}) {
    this.result_sender = values.result_sender !== undefined ? values.result_sender : null;
  }
};

// Interface: CopyOutputResultSender
viz.mojom.CopyOutputResultSenderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.CopyOutputResultSender';
  }

  sendResult(result) {
    // Method: SendResult
    // Call: SendResult(result)
  }

};

viz.mojom.CopyOutputResultSenderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
