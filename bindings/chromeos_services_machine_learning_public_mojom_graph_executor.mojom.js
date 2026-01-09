// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/graph_executor.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: ExecuteResult
chromeos.machine_learning.mojom.ExecuteResult = {
  OK: 0,
  INPUT_MISSING_ERROR: 1,
  UNKNOWN_INPUT_ERROR: 2,
  INPUT_TYPE_ERROR: 3,
  INPUT_SHAPE_ERROR: 4,
  INPUT_FORMAT_ERROR: 5,
  OUTPUT_MISSING_ERROR: 6,
  UNKNOWN_OUTPUT_ERROR: 7,
  DUPLICATE_OUTPUT_ERROR: 8,
  EXECUTION_ERROR: 9,
};

// Interface: GraphExecutor
chromeos.machine_learning.mojom.GraphExecutorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.machine_learning.mojom.GraphExecutor';
  }

};

chromeos.machine_learning.mojom.GraphExecutorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
