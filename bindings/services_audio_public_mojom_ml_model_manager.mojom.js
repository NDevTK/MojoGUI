// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/ml_model_manager.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};


// Interface: MlModelManager
audio.mojom.MlModelManager = {};

audio.mojom.MlModelManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

audio.mojom.MlModelManagerRemote = class {
  static get $interfaceName() {
    return 'audio.mojom.MlModelManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      audio.mojom.MlModelManagerPendingReceiver,
      handle);
    this.$ = new audio.mojom.MlModelManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

audio.mojom.MlModelManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setResidualEchoEstimationModel(tflite_file) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      audio.mojom.MlModelManager_SetResidualEchoEstimationModel_ParamsSpec,
      null,
      [tflite_file]);
  }

  stopServingResidualEchoEstimationModel() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      audio.mojom.MlModelManager_StopServingResidualEchoEstimationModel_ParamsSpec,
      null,
      []);
  }

};

audio.mojom.MlModelManager.getRemote = function() {
  let remote = new audio.mojom.MlModelManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'audio.mojom.MlModelManager',
    'context');
  return remote.$;
};

// ParamsSpec for SetResidualEchoEstimationModel
audio.mojom.MlModelManager_SetResidualEchoEstimationModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.MlModelManager.SetResidualEchoEstimationModel_Params',
      packedSize: 16,
      fields: [
        { name: 'tflite_file', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopServingResidualEchoEstimationModel
audio.mojom.MlModelManager_StopServingResidualEchoEstimationModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.MlModelManager.StopServingResidualEchoEstimationModel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
audio.mojom.MlModelManagerPtr = audio.mojom.MlModelManagerRemote;
audio.mojom.MlModelManagerRequest = audio.mojom.MlModelManagerPendingReceiver;

