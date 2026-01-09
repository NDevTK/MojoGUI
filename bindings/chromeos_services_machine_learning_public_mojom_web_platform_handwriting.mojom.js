// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/web_platform_handwriting.mojom
// Module: chromeos.machine_learning.web_platform.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.web_platform = chromeos.machine_learning.web_platform || {};
chromeos.machine_learning.web_platform.mojom = chromeos.machine_learning.web_platform.mojom || {};


// Interface: HandwritingRecognizer
chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer = {};

chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer.getRemote = function() {
  let remote = new chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer',
    'context');
  return remote.$;
};

// Legacy compatibility
chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerPtr = chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRemote;
chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRequest = chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerPendingReceiver;

