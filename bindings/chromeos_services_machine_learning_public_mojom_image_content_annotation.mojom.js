// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/image_content_annotation.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: Status
chromeos.machine_learning.mojom.Status = {
  ERROR: 0,
};

// Interface: ImageContentAnnotator
chromeos.machine_learning.mojom.ImageContentAnnotatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.mojom.ImageContentAnnotatorRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.ImageContentAnnotator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.mojom.ImageContentAnnotatorPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.mojom.ImageContentAnnotatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.mojom.ImageContentAnnotatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.machine_learning.mojom.ImageContentAnnotator.getRemote = function() {
  let remote = new chromeos.machine_learning.mojom.ImageContentAnnotatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.ImageContentAnnotator',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.machine_learning.mojom.ImageContentAnnotatorPtr = chromeos.machine_learning.mojom.ImageContentAnnotatorRemote;
chromeos.machine_learning.mojom.ImageContentAnnotatorRequest = chromeos.machine_learning.mojom.ImageContentAnnotatorPendingReceiver;

