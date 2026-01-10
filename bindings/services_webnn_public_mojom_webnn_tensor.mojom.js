// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_tensor.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};


// Union: ReadTensorResult
webnn.mojom.mojom.ReadTensorResultSpec = { $: mojo.internal.Union(
    'webnn.mojom.ReadTensorResult', {
      'buffer': {
        'ordinal': 0,
        'type': mojo_base.mojom.BigBufferSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': webnn.mojom.ErrorSpec,
      }},
    })
};

// Struct: TensorUsage
webnn.mojom.mojom.TensorUsageSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.TensorUsage',
      packedSize: 16,
      fields: [
        { name: 'web_gpu_interop', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'read', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'write', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'graph_constant', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TensorInfo
webnn.mojom.mojom.TensorInfoSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.TensorInfo',
      packedSize: 24,
      fields: [
        { name: 'descriptor', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandDescriptorSpec, nullable: false, minVersion: 0 },
        { name: 'usage', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.TensorUsageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: WebNNTensor
webnn.mojom.mojom.WebNNTensor = {};

webnn.mojom.mojom.WebNNTensorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webnn.mojom.mojom.WebNNTensorRemote = class {
  static get $interfaceName() {
    return 'webnn.mojom.WebNNTensor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webnn.mojom.mojom.WebNNTensorPendingReceiver,
      handle);
    this.$ = new webnn.mojom.mojom.WebNNTensorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

webnn.mojom.mojom.WebNNTensorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  readTensor() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      webnn.mojom.mojom.WebNNTensor_ReadTensor_ParamsSpec,
      webnn.mojom.mojom.WebNNTensor_ReadTensor_ResponseParamsSpec,
      []);
  }

  writeTensor(src_buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      webnn.mojom.mojom.WebNNTensor_WriteTensor_ParamsSpec,
      null,
      [src_buffer]);
  }

  exportTensor() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      webnn.mojom.mojom.WebNNTensor_ExportTensor_ParamsSpec,
      null,
      []);
  }

  importTensor(fence) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      webnn.mojom.mojom.WebNNTensor_ImportTensor_ParamsSpec,
      null,
      [fence]);
  }

};

webnn.mojom.mojom.WebNNTensor.getRemote = function() {
  let remote = new webnn.mojom.mojom.WebNNTensorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webnn.mojom.WebNNTensor',
    'context');
  return remote.$;
};

// ParamsSpec for ReadTensor
webnn.mojom.mojom.WebNNTensor_ReadTensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNTensor.ReadTensor_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

webnn.mojom.mojom.WebNNTensor_ReadTensor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNTensor.ReadTensor_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.ReadTensorResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for WriteTensor
webnn.mojom.mojom.WebNNTensor_WriteTensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNTensor.WriteTensor_Params',
      packedSize: 24,
      fields: [
        { name: 'src_buffer', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ExportTensor
webnn.mojom.mojom.WebNNTensor_ExportTensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNTensor.ExportTensor_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ImportTensor
webnn.mojom.mojom.WebNNTensor_ImportTensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNTensor.ImportTensor_Params',
      packedSize: 16,
      fields: [
        { name: 'fence', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
webnn.mojom.mojom.WebNNTensorPtr = webnn.mojom.mojom.WebNNTensorRemote;
webnn.mojom.mojom.WebNNTensorRequest = webnn.mojom.mojom.WebNNTensorPendingReceiver;

