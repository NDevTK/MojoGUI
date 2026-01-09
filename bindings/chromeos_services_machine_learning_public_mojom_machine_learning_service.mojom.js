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
chromeos.machine_learning.mojom.MachineLearningServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.mojom.MachineLearningServiceRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.MachineLearningService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.mojom.MachineLearningServicePendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.mojom.MachineLearningServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.mojom.MachineLearningServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.machine_learning.mojom.MachineLearningService.getRemote = function() {
  let remote = new chromeos.machine_learning.mojom.MachineLearningServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.MachineLearningService',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.machine_learning.mojom.MachineLearningServicePtr = chromeos.machine_learning.mojom.MachineLearningServiceRemote;
chromeos.machine_learning.mojom.MachineLearningServiceRequest = chromeos.machine_learning.mojom.MachineLearningServicePendingReceiver;

