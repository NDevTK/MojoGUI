// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/model.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: BuiltinModelId
chromeos.machine_learning.mojom.BuiltinModelId = {
  UNSUPPORTED_UNKNOWN: 0,
  TEST_MODEL: 1,
  UNSUPPORTED_SMART_DIM_20181115: 2,
  UNSUPPORTED_SMART_DIM_20190221: 3,
  UNSUPPORTED_TOP_CAT_20190722: 4,
  SMART_DIM_20190521: 5,
  UNSUPPORTED_SEARCH_RANKER_20190923: 6,
};
chromeos.machine_learning.mojom.BuiltinModelIdSpec = { $: mojo.internal.Enum() };

// Enum: GpuDelegateApi
chromeos.machine_learning.mojom.GpuDelegateApi = {
  OPENGL: 0,
  OPENCL: 1,
};
chromeos.machine_learning.mojom.GpuDelegateApiSpec = { $: mojo.internal.Enum() };

// Enum: CreateGraphExecutorResult
chromeos.machine_learning.mojom.CreateGraphExecutorResult = {
  OK: 0,
  MODEL_INTERPRETATION_ERROR: 1,
  MEMORY_ALLOCATION_ERROR: 2,
  NNAPI_UNAVAILABLE: 3,
  NNAPI_USE_ERROR: 4,
};
chromeos.machine_learning.mojom.CreateGraphExecutorResultSpec = { $: mojo.internal.Enum() };

// Struct: GraphExecutorOptions
chromeos.machine_learning.mojom.GraphExecutorOptionsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.GraphExecutorOptions',
      packedSize: 16,
      fields: [
        { name: 'use_nnapi', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'use_gpu', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 1 },
        { name: 'gpu_delegate_api', packedOffset: 4, packedBitOffset: 0, type: chromeos.machine_learning.mojom.GpuDelegateApiSpec, nullable: false, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 1, packedSize: 16}, {version: 2, packedSize: 16}]
    }
  }
};

// Struct: BuiltinModelSpec
chromeos.machine_learning.mojom.BuiltinModelSpecSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.BuiltinModelSpec',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.BuiltinModelIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FlatBufferModelSpec
chromeos.machine_learning.mojom.FlatBufferModelSpecSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.FlatBufferModelSpec',
      packedSize: 40,
      fields: [
        { name: 'model_string', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'inputs', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.Int32, false), nullable: false, minVersion: 0 },
        { name: 'outputs', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.Int32, false), nullable: false, minVersion: 0 },
        { name: 'metrics_model_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: Model
chromeos.machine_learning.mojom.Model = {};

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
};

chromeos.machine_learning.mojom.ModelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  rEMOVED_0(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.machine_learning.mojom.Model_REMOVED_0_ParamsSpec,
      chromeos.machine_learning.mojom.Model_REMOVED_0_ResponseParamsSpec,
      [receiver]);
  }

  createGraphExecutor(options, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.machine_learning.mojom.Model_CreateGraphExecutor_ParamsSpec,
      chromeos.machine_learning.mojom.Model_CreateGraphExecutor_ResponseParamsSpec,
      [options, receiver]);
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

// ParamsSpec for REMOVED_0
chromeos.machine_learning.mojom.Model_REMOVED_0_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.Model.REMOVED_0_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.machine_learning.mojom.Model_REMOVED_0_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.Model.REMOVED_0_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.CreateGraphExecutorResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateGraphExecutor
chromeos.machine_learning.mojom.Model_CreateGraphExecutor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.Model.CreateGraphExecutor_Params',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.GraphExecutorOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.machine_learning.mojom.Model_CreateGraphExecutor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.Model.CreateGraphExecutor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.CreateGraphExecutorResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.machine_learning.mojom.ModelPtr = chromeos.machine_learning.mojom.ModelRemote;
chromeos.machine_learning.mojom.ModelRequest = chromeos.machine_learning.mojom.ModelPendingReceiver;

