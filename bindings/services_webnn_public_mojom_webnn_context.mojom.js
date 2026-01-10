// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_context.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};


// Union: CreateTensorResult
webnn.mojom.CreateTensorResultSpec = { $: mojo.internal.Union(
    'webnn.mojom.CreateTensorResult', {
      'success': {
        'ordinal': 0,
        'type': webnn.mojom.CreateTensorSuccessSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': webnn.mojom.ErrorSpec,
      }},
    })
};

// Struct: CreateTensorSuccess
webnn.mojom.CreateTensorSuccessSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.CreateTensorSuccess',
      packedSize: 24,
      fields: [
        { name: 'tensor_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'tensor_handle', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.WebNNTensorTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: WebNNContext
webnn.mojom.WebNNContext = {};

webnn.mojom.WebNNContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webnn.mojom.WebNNContextRemote = class {
  static get $interfaceName() {
    return 'webnn.mojom.WebNNContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webnn.mojom.WebNNContextPendingReceiver,
      handle);
    this.$ = new webnn.mojom.WebNNContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

webnn.mojom.WebNNContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createGraphBuilder(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      webnn.mojom.WebNNContext_CreateGraphBuilder_ParamsSpec,
      null,
      [receiver]);
  }

  createTensor(tensor_info, tensor_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      webnn.mojom.WebNNContext_CreateTensor_ParamsSpec,
      webnn.mojom.WebNNContext_CreateTensor_ResponseParamsSpec,
      [tensor_info, tensor_data]);
  }

  createTensorFromMailbox(tensor_info, mailbox, fence) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      webnn.mojom.WebNNContext_CreateTensorFromMailbox_ParamsSpec,
      webnn.mojom.WebNNContext_CreateTensorFromMailbox_ResponseParamsSpec,
      [tensor_info, mailbox, fence]);
  }

};

webnn.mojom.WebNNContext.getRemote = function() {
  let remote = new webnn.mojom.WebNNContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webnn.mojom.WebNNContext',
    'context');
  return remote.$;
};

// ParamsSpec for CreateGraphBuilder
webnn.mojom.WebNNContext_CreateGraphBuilder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNContext.CreateGraphBuilder_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateTensor
webnn.mojom.WebNNContext_CreateTensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNContext.CreateTensor_Params',
      packedSize: 32,
      fields: [
        { name: 'tensor_info', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.TensorInfoSpec, nullable: false, minVersion: 0 },
        { name: 'tensor_data', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

webnn.mojom.WebNNContext_CreateTensor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNContext.CreateTensor_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.CreateTensorResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateTensorFromMailbox
webnn.mojom.WebNNContext_CreateTensorFromMailbox_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNContext.CreateTensorFromMailbox_Params',
      packedSize: 32,
      fields: [
        { name: 'tensor_info', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.TensorInfoSpec, nullable: false, minVersion: 0 },
        { name: 'mailbox', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false, minVersion: 0 },
        { name: 'fence', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

webnn.mojom.WebNNContext_CreateTensorFromMailbox_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNContext.CreateTensorFromMailbox_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.CreateTensorResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
webnn.mojom.WebNNContextPtr = webnn.mojom.WebNNContextRemote;
webnn.mojom.WebNNContextRequest = webnn.mojom.WebNNContextPendingReceiver;

