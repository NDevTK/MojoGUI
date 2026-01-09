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
};

// Enum: GpuDelegateApi
chromeos.machine_learning.mojom.GpuDelegateApi = {
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
chromeos.machine_learning.mojom.GraphExecutorOptions = class {
  constructor(values = {}) {
    this.OPENGL = values.OPENGL !== undefined ? values.OPENGL : false;
  }
};

// Struct: BuiltinModelSpec
chromeos.machine_learning.mojom.BuiltinModelSpec = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : null;
  }
};

// Struct: FlatBufferModelSpec
chromeos.machine_learning.mojom.FlatBufferModelSpec = class {
  constructor(values = {}) {
    this.metrics_model_name = values.metrics_model_name !== undefined ? values.metrics_model_name : 0;
  }
};

// Interface: Model
chromeos.machine_learning.mojom.ModelPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.machine_learning.mojom.Model';
  }

};

chromeos.machine_learning.mojom.ModelRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
