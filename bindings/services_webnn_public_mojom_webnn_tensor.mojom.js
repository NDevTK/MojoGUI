// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_tensor.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};


// Struct: TensorUsage
webnn.mojom.TensorUsageSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.TensorUsage',
      packedSize: 16,
      fields: [
        { name: 'graph_constant', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TensorInfo
webnn.mojom.TensorInfoSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.TensorInfo',
      packedSize: 16,
      fields: [
        { name: 'usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: WebNNTensor
webnn.mojom.WebNNTensor = {};

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
      []);
  }

  writeTensor(src_buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      webnn.mojom.WebNNTensor_WriteTensor_ParamsSpec,
      null,
      [src_buffer]);
  }

  exportTensor() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      webnn.mojom.WebNNTensor_ExportTensor_ParamsSpec,
      null,
      []);
  }

  importTensor(fence) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      webnn.mojom.WebNNTensor_ImportTensor_ParamsSpec,
      null,
      [fence]);
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

// ParamsSpec for ReadTensor
webnn.mojom.WebNNTensor_ReadTensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNTensor.ReadTensor_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

webnn.mojom.WebNNTensor_ReadTensor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNTensor.ReadTensor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WriteTensor
webnn.mojom.WebNNTensor_WriteTensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNTensor.WriteTensor_Params',
      packedSize: 16,
      fields: [
        { name: 'src_buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExportTensor
webnn.mojom.WebNNTensor_ExportTensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNTensor.ExportTensor_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ImportTensor
webnn.mojom.WebNNTensor_ImportTensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNTensor.ImportTensor_Params',
      packedSize: 16,
      fields: [
        { name: 'fence', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
webnn.mojom.WebNNTensorPtr = webnn.mojom.WebNNTensorRemote;
webnn.mojom.WebNNTensorRequest = webnn.mojom.WebNNTensorPendingReceiver;

