// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/ml_model_manager.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};


// Interface: MlModelManager
audio.mojom.MlModelManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'audio.mojom.MlModelManager';
  }

  setResidualEchoEstimationModel(tflite_file) {
    // Method: SetResidualEchoEstimationModel
    // Call: SetResidualEchoEstimationModel(tflite_file)
  }

  stopServingResidualEchoEstimationModel() {
    // Method: StopServingResidualEchoEstimationModel
    // Call: StopServingResidualEchoEstimationModel()
  }

};

audio.mojom.MlModelManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
