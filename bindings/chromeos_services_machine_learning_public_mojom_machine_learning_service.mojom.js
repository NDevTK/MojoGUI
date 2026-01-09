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

  5(receiver) {
    // Method: 5
    // Call: 5(receiver)
  }

  0(spec, receiver) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(spec, receiver)
      resolve({});
    });
  }

  1(spec, receiver) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(spec, receiver)
      resolve({});
    });
  }

  2(receiver) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(receiver)
      resolve({});
    });
  }

  3(spec, receiver) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(spec, receiver)
      resolve({});
    });
  }

  6(config, soda_client, soda_recognizer) {
    // Method: 6
    return new Promise((resolve) => {
      // Call: 6(config, soda_client, soda_recognizer)
      resolve({});
    });
  }

  7(receiver) {
    // Method: 7
    return new Promise((resolve) => {
      // Call: 7(receiver)
      resolve({});
    });
  }

  8(receiver, spec) {
    // Method: 8
    return new Promise((resolve) => {
      // Call: 8(receiver, spec)
      resolve({});
    });
  }

  9(constraint, receiver) {
    // Method: 9
    return new Promise((resolve) => {
      // Call: 9(constraint, receiver)
      resolve({});
    });
  }

  10(receiver, config) {
    // Method: 10
    return new Promise((resolve) => {
      // Call: 10(receiver, config)
      resolve({});
    });
  }

  12(config, receiver) {
    // Method: 12
    return new Promise((resolve) => {
      // Call: 12(config, receiver)
      resolve({});
    });
  }

  13(config, client) {
    // Method: 13
    return new Promise((resolve) => {
      // Call: 13(config, client)
      resolve({});
    });
  }

  4(spec, receiver) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(spec, receiver)
      resolve({});
    });
  }

};

chromeos.machine_learning.mojom.MachineLearningServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
