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

// Enum: GpuDelegateApi
chromeos.machine_learning.mojom.GpuDelegateApi = {
  OPENGL: 0,
  OPENCL: 1,
};

// Enum: CreateGraphExecutorResult
chromeos.machine_learning.mojom.CreateGraphExecutorResult = {
  OK: 0,
  MODEL_INTERPRETATION_ERROR: 1,
  MEMORY_ALLOCATION_ERROR: 2,
  NNAPI_UNAVAILABLE: 3,
  NNAPI_USE_ERROR: 4,
};

// Struct: GraphExecutorOptions
chromeos.machine_learning.mojom.GraphExecutorOptionsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.GraphExecutorOptions',
      packedSize: 16,
      fields: [
        { name: 'OPENGL', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FlatBufferModelSpec
chromeos.machine_learning.mojom.FlatBufferModelSpecSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.FlatBufferModelSpec',
      packedSize: 16,
      fields: [
        { name: 'metrics_model_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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

// Legacy compatibility
chromeos.machine_learning.mojom.ModelPtr = chromeos.machine_learning.mojom.ModelRemote;
chromeos.machine_learning.mojom.ModelRequest = chromeos.machine_learning.mojom.ModelPendingReceiver;

