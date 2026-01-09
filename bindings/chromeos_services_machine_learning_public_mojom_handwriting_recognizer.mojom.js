// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/handwriting_recognizer.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: Status
chromeos.machine_learning.mojom.Status = {
  OK: 0,
  ERROR: 1,
};

// Enum: LoadHandwritingModelResult
chromeos.machine_learning.mojom.LoadHandwritingModelResult = {
  OK: 0,
  DEPRECATED_MODEL_SPEC_ERROR: 1,
  LOAD_MODEL_ERROR: 2,
  FEATURE_NOT_SUPPORTED_ERROR: 3,
  LANGUAGE_NOT_SUPPORTED_ERROR: 4,
  FEATURE_DISABLED_BY_USER: 5,
  DLC_DOES_NOT_EXIST: 6,
  DLC_INSTALL_ERROR: 7,
  DLC_GET_PATH_ERROR: 8,
  LOAD_NATIVE_LIB_ERROR: 9,
  LOAD_FUNC_PTR_ERROR: 10,
  LOAD_MODEL_FILES_ERROR: 11,
};

// Interface: HandwritingRecognizer
chromeos.machine_learning.mojom.HandwritingRecognizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.mojom.HandwritingRecognizerRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.HandwritingRecognizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.mojom.HandwritingRecognizerPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.mojom.HandwritingRecognizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.mojom.HandwritingRecognizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.machine_learning.mojom.HandwritingRecognizer.getRemote = function() {
  let remote = new chromeos.machine_learning.mojom.HandwritingRecognizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.HandwritingRecognizer',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.machine_learning.mojom.HandwritingRecognizerPtr = chromeos.machine_learning.mojom.HandwritingRecognizerRemote;
chromeos.machine_learning.mojom.HandwritingRecognizerRequest = chromeos.machine_learning.mojom.HandwritingRecognizerPendingReceiver;

