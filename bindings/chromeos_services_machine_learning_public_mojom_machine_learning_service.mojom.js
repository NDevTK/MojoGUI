// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/machine_learning_service.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: LoadModelResult
chromeos.machine_learning.mojom.LoadModelResult = {
  OK: 0,
  MODEL_SPEC_ERROR: 1,
  LOAD_MODEL_ERROR: 2,
  FEATURE_NOT_SUPPORTED_ERROR: 3,
  LANGUAGE_NOT_SUPPORTED_ERROR: 4,
};

// Interface: MachineLearningService
chromeos.machine_learning.mojom.MachineLearningServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.machine_learning.mojom.MachineLearningService';
  }

};

chromeos.machine_learning.mojom.MachineLearningServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
