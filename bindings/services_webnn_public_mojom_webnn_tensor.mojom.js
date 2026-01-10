// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_tensor.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};
var gpu = gpu || {};
var mojo_base = mojo_base || {};

webnn.mojom.ReadTensorResultSpec = { $: {} };
webnn.mojom.TensorUsageSpec = { $: {} };
webnn.mojom.TensorInfoSpec = { $: {} };
webnn.mojom.WebNNTensor = {};
webnn.mojom.WebNNTensor.$interfaceName = 'webnn.mojom.WebNNTensor';
webnn.mojom.WebNNTensor_ReadTensor_ParamsSpec = { $: {} };
webnn.mojom.WebNNTensor_ReadTensor_ResponseParamsSpec = { $: {} };
webnn.mojom.WebNNTensor_WriteTensor_ParamsSpec = { $: {} };
webnn.mojom.WebNNTensor_ExportTensor_ParamsSpec = { $: {} };
webnn.mojom.WebNNTensor_ImportTensor_ParamsSpec = { $: {} };

// Union: ReadTensorResult
mojo.internal.Union(
    webnn.mojom.ReadTensorResultSpec, 'webnn.mojom.ReadTensorResult', {
      'buffer': {
        'ordinal': 0,
        'type': mojo_base.mojom.BigBufferSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo_base.mojom.ErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: TensorUsage
mojo.internal.Struct(
    webnn.mojom.TensorUsageSpec, 'webnn.mojom.TensorUsage', [
      mojo.internal.StructField('web_gpu_interop', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('read', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('write', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('graph_constant', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TensorInfo
mojo.internal.Struct(
    webnn.mojom.TensorInfoSpec, 'webnn.mojom.TensorInfo', [
      mojo.internal.StructField('descriptor', 0, 0, webnn.mojom.OperandDescriptorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('usage', 8, 0, webnn.mojom.TensorUsageSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: WebNNTensor
mojo.internal.Struct(
    webnn.mojom.WebNNTensor_ReadTensor_ParamsSpec, 'webnn.mojom.WebNNTensor_ReadTensor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webnn.mojom.WebNNTensor_ReadTensor_ResponseParamsSpec, 'webnn.mojom.WebNNTensor_ReadTensor_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, webnn.mojom.ReadTensorResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webnn.mojom.WebNNTensor_WriteTensor_ParamsSpec, 'webnn.mojom.WebNNTensor_WriteTensor_Params', [
      mojo.internal.StructField('src_buffer', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webnn.mojom.WebNNTensor_ExportTensor_ParamsSpec, 'webnn.mojom.WebNNTensor_ExportTensor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webnn.mojom.WebNNTensor_ImportTensor_ParamsSpec, 'webnn.mojom.WebNNTensor_ImportTensor_Params', [
      mojo.internal.StructField('fence', 0, 0, gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

webnn.mojom.WebNNTensorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webnn.mojom.WebNNTensorRemote = class {
  static get $interfaceName() {
    return 'webnn.mojom.WebNNTensor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webnn.mojom.WebNNTensorPendingReceiver,
      handle);
    this.$ = new webnn.mojom.WebNNTensorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

webnn.mojom.WebNNTensorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  readTensor() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      webnn.mojom.WebNNTensor_ReadTensor_ParamsSpec,
      webnn.mojom.WebNNTensor_ReadTensor_ResponseParamsSpec,
      [],
      false);
  }

  writeTensor(src_buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      webnn.mojom.WebNNTensor_WriteTensor_ParamsSpec,
      null,
      [src_buffer],
      false);
  }

  exportTensor() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      webnn.mojom.WebNNTensor_ExportTensor_ParamsSpec,
      null,
      [],
      false);
  }

  importTensor(fence) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      webnn.mojom.WebNNTensor_ImportTensor_ParamsSpec,
      null,
      [fence],
      false);
  }

};

webnn.mojom.WebNNTensor.getRemote = function() {
  let remote = new webnn.mojom.WebNNTensorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webnn.mojom.WebNNTensor',
    'context');
  return remote.$;
};

webnn.mojom.WebNNTensorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = webnn.mojom.WebNNTensor_ReadTensor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.readTensor();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, webnn.mojom.WebNNTensor_ReadTensor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = webnn.mojom.WebNNTensor_WriteTensor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.writeTensor(params.src_buffer);
          break;
        }
        case 2: {
          const params = webnn.mojom.WebNNTensor_ExportTensor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.exportTensor();
          break;
        }
        case 3: {
          const params = webnn.mojom.WebNNTensor_ImportTensor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.importTensor(params.fence);
          break;
        }
      }
    });
  }
};

webnn.mojom.WebNNTensorReceiver = webnn.mojom.WebNNTensorReceiver;

webnn.mojom.WebNNTensorPtr = webnn.mojom.WebNNTensorRemote;
webnn.mojom.WebNNTensorRequest = webnn.mojom.WebNNTensorPendingReceiver;

