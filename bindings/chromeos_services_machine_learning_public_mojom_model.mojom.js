// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/model.mojom
// Module: chromeos.machine_learning.mojom

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};

chromeos.machine_learning.mojom.BuiltinModelIdSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.GpuDelegateApiSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.CreateGraphExecutorResultSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.GraphExecutorOptionsSpec = { $: {} };
chromeos.machine_learning.mojom.BuiltinModelSpecSpec = { $: {} };
chromeos.machine_learning.mojom.FlatBufferModelSpecSpec = { $: {} };
chromeos.machine_learning.mojom.Model = {};
chromeos.machine_learning.mojom.Model.$interfaceName = 'chromeos.machine_learning.mojom.Model';
chromeos.machine_learning.mojom.Model_REMOVED_0_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.Model_REMOVED_0_ResponseParamsSpec = { $: {} };
chromeos.machine_learning.mojom.Model_CreateGraphExecutor_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.Model_CreateGraphExecutor_ResponseParamsSpec = { $: {} };

// Enum: BuiltinModelId
chromeos.machine_learning.mojom.BuiltinModelId = {
  UNSUPPORTED_UNKNOWN: 0,
  TEST_MODEL: 1,
  UNSUPPORTED_SMART_DIM_20181115: 2,
  UNSUPPORTED_SMART_DIM_20190221: 3,
  UNSUPPORTED_TOP_CAT_20190722: 4,
  SMART_DIM_20190521: 5,
  UNSUPPORTED_SEARCH_RANKER_20190923: 6,
  MinVersion: 6,
  MinVersion: 6,
  MinVersion: 6,
  MinVersion: 6,
  MinVersion: 6,
};

// Enum: GpuDelegateApi
chromeos.machine_learning.mojom.GpuDelegateApi = {
  UNKNOWN: 0,
  OPENGL: 1,
  OPENCL: 2,
};

// Enum: CreateGraphExecutorResult
chromeos.machine_learning.mojom.CreateGraphExecutorResult = {
  OK: 0,
  MODEL_INTERPRETATION_ERROR: 1,
  MEMORY_ALLOCATION_ERROR: 2,
  NNAPI_UNAVAILABLE: 3,
  NNAPI_USE_ERROR: 4,
  MinVersion: 4,
  MinVersion: 4,
  MinVersion: 4,
  MinVersion: 4,
};

// Struct: GraphExecutorOptions
mojo.internal.Struct(
    chromeos.machine_learning.mojom.GraphExecutorOptionsSpec, 'chromeos.machine_learning.mojom.GraphExecutorOptions', [
      mojo.internal.StructField('use_nnapi', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_gpu', 0, 1, mojo.internal.Bool, false, false, 1, undefined),
      mojo.internal.StructField('gpu_delegate_api', 8, 0, chromeos.machine_learning.mojom.GpuDelegateApiSpec.$, 0, false, 2, undefined),
    ],
    [[0, 16], [1, 16], [2, 24]]);

// Struct: BuiltinModelSpec
mojo.internal.Struct(
    chromeos.machine_learning.mojom.BuiltinModelSpecSpec, 'chromeos.machine_learning.mojom.BuiltinModelSpec', [
      mojo.internal.StructField('id', 0, 0, chromeos.machine_learning.mojom.BuiltinModelIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FlatBufferModelSpec
mojo.internal.Struct(
    chromeos.machine_learning.mojom.FlatBufferModelSpecSpec, 'chromeos.machine_learning.mojom.FlatBufferModelSpec', [
      mojo.internal.StructField('model_string', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('inputs', 8, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('outputs', 16, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('metrics_model_name', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: Model
mojo.internal.Struct(
    chromeos.machine_learning.mojom.Model_REMOVED_0_ParamsSpec, 'chromeos.machine_learning.mojom.Model_REMOVED_0_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.GraphExecutorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.Model_REMOVED_0_ResponseParamsSpec, 'chromeos.machine_learning.mojom.Model_REMOVED_0_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.CreateGraphExecutorResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.Model_CreateGraphExecutor_ParamsSpec, 'chromeos.machine_learning.mojom.Model_CreateGraphExecutor_Params', [
      mojo.internal.StructField('options', 0, 0, chromeos.machine_learning.mojom.GraphExecutorOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.GraphExecutorRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.Model_CreateGraphExecutor_ResponseParamsSpec, 'chromeos.machine_learning.mojom.Model_CreateGraphExecutor_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.CreateGraphExecutorResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.machine_learning.mojom.ModelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.mojom.ModelRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.Model';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.mojom.ModelPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.mojom.ModelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  rEMOVED_0(receiver) {
    return this.$.rEMOVED_0(receiver);
  }
  createGraphExecutor(options, receiver) {
    return this.$.createGraphExecutor(options, receiver);
  }
};

chromeos.machine_learning.mojom.ModelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Model', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  rEMOVED_0(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.machine_learning.mojom.Model_REMOVED_0_ParamsSpec,
      chromeos.machine_learning.mojom.Model_REMOVED_0_ResponseParamsSpec,
      [receiver],
      false);
  }

  createGraphExecutor(options, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.machine_learning.mojom.Model_CreateGraphExecutor_ParamsSpec,
      chromeos.machine_learning.mojom.Model_CreateGraphExecutor_ResponseParamsSpec,
      [options, receiver],
      false);
  }

};

chromeos.machine_learning.mojom.Model.getRemote = function() {
  let remote = new chromeos.machine_learning.mojom.ModelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.Model',
    'context');
  return remote.$;
};

chromeos.machine_learning.mojom.ModelReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Model', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.Model_REMOVED_0_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.Model_CreateGraphExecutor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.Model_REMOVED_0_ParamsSpec.$.structSpec);
          const result = this.impl.rEMOVED_0(params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.Model_REMOVED_0_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.Model_CreateGraphExecutor_ParamsSpec.$.structSpec);
          const result = this.impl.createGraphExecutor(params.options, params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.Model_CreateGraphExecutor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromeos.machine_learning.mojom.ModelReceiver = chromeos.machine_learning.mojom.ModelReceiver;

chromeos.machine_learning.mojom.ModelPtr = chromeos.machine_learning.mojom.ModelRemote;
chromeos.machine_learning.mojom.ModelRequest = chromeos.machine_learning.mojom.ModelPendingReceiver;

