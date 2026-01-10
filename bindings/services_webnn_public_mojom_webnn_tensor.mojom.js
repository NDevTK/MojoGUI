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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ReadTensor
        try {
             decoder.decodeStruct(webnn.mojom.WebNNTensor_ReadTensor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadTensor (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: WriteTensor
        try {
             decoder.decodeStruct(webnn.mojom.WebNNTensor_WriteTensor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteTensor (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: ExportTensor
        try {
             decoder.decodeStruct(webnn.mojom.WebNNTensor_ExportTensor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExportTensor (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: ImportTensor
        try {
             decoder.decodeStruct(webnn.mojom.WebNNTensor_ImportTensor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImportTensor (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(webnn.mojom.WebNNTensor_ReadTensor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readTensor');
          const result = this.impl.readTensor();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, webnn.mojom.WebNNTensor_ReadTensor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(webnn.mojom.WebNNTensor_WriteTensor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeTensor');
          const result = this.impl.writeTensor(params.src_buffer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(webnn.mojom.WebNNTensor_ExportTensor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.exportTensor');
          const result = this.impl.exportTensor();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(webnn.mojom.WebNNTensor_ImportTensor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.importTensor');
          const result = this.impl.importTensor(params.fence);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

webnn.mojom.WebNNTensorReceiver = webnn.mojom.WebNNTensorReceiver;

webnn.mojom.WebNNTensorPtr = webnn.mojom.WebNNTensorRemote;
webnn.mojom.WebNNTensorRequest = webnn.mojom.WebNNTensorPendingReceiver;

