// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_context.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};
var gpu = gpu || {};
var mojo_base = mojo_base || {};
var blink = blink || {};

webnn.mojom.CreateTensorResultSpec = { $: {} };
webnn.mojom.CreateTensorSuccessSpec = { $: {} };
webnn.mojom.WebNNContext = {};
webnn.mojom.WebNNContext.$interfaceName = 'webnn.mojom.WebNNContext';
webnn.mojom.WebNNContext_CreateGraphBuilder_ParamsSpec = { $: {} };
webnn.mojom.WebNNContext_CreateTensor_ParamsSpec = { $: {} };
webnn.mojom.WebNNContext_CreateTensor_ResponseParamsSpec = { $: {} };
webnn.mojom.WebNNContext_CreateTensorFromMailbox_ParamsSpec = { $: {} };
webnn.mojom.WebNNContext_CreateTensorFromMailbox_ResponseParamsSpec = { $: {} };

// Union: CreateTensorResult
mojo.internal.Union(
    webnn.mojom.CreateTensorResultSpec, 'webnn.mojom.CreateTensorResult', {
      'success': {
        'ordinal': 0,
        'type': webnn.mojom.CreateTensorSuccessSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo_base.mojom.ErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: CreateTensorSuccess
mojo.internal.Struct(
    webnn.mojom.CreateTensorSuccessSpec, 'webnn.mojom.CreateTensorSuccess', [
      mojo.internal.StructField('tensor_remote', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('tensor_handle', 8, 0, blink.mojom.WebNNTensorTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: WebNNContext
mojo.internal.Struct(
    webnn.mojom.WebNNContext_CreateGraphBuilder_ParamsSpec, 'webnn.mojom.WebNNContext_CreateGraphBuilder_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webnn.mojom.WebNNContext_CreateTensor_ParamsSpec, 'webnn.mojom.WebNNContext_CreateTensor_Params', [
      mojo.internal.StructField('tensor_info', 0, 0, webnn.mojom.TensorInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tensor_data', 8, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    webnn.mojom.WebNNContext_CreateTensor_ResponseParamsSpec, 'webnn.mojom.WebNNContext_CreateTensor_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, webnn.mojom.CreateTensorResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webnn.mojom.WebNNContext_CreateTensorFromMailbox_ParamsSpec, 'webnn.mojom.WebNNContext_CreateTensorFromMailbox_Params', [
      mojo.internal.StructField('tensor_info', 0, 0, webnn.mojom.TensorInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mailbox', 8, 0, gpu.mojom.MailboxSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fence', 16, 0, gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    webnn.mojom.WebNNContext_CreateTensorFromMailbox_ResponseParamsSpec, 'webnn.mojom.WebNNContext_CreateTensorFromMailbox_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, webnn.mojom.CreateTensorResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [receiver],
      false);
  }

  createTensor(tensor_info, tensor_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      webnn.mojom.WebNNContext_CreateTensor_ParamsSpec,
      webnn.mojom.WebNNContext_CreateTensor_ResponseParamsSpec,
      [tensor_info, tensor_data],
      false);
  }

  createTensorFromMailbox(tensor_info, mailbox, fence) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      webnn.mojom.WebNNContext_CreateTensorFromMailbox_ParamsSpec,
      webnn.mojom.WebNNContext_CreateTensorFromMailbox_ResponseParamsSpec,
      [tensor_info, mailbox, fence],
      false);
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

webnn.mojom.WebNNContextReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = webnn.mojom.WebNNContext_CreateGraphBuilder_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createGraphBuilder(params.receiver);
          break;
        }
        case 1: {
          const params = webnn.mojom.WebNNContext_CreateTensor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createTensor(params.tensor_info, params.tensor_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, webnn.mojom.WebNNContext_CreateTensor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = webnn.mojom.WebNNContext_CreateTensorFromMailbox_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createTensorFromMailbox(params.tensor_info, params.mailbox, params.fence);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, webnn.mojom.WebNNContext_CreateTensorFromMailbox_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

webnn.mojom.WebNNContextReceiver = webnn.mojom.WebNNContextReceiver;

webnn.mojom.WebNNContextPtr = webnn.mojom.WebNNContextRemote;
webnn.mojom.WebNNContextRequest = webnn.mojom.WebNNContextPendingReceiver;

