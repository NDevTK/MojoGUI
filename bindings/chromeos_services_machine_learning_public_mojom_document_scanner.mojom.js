// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/document_scanner.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: DocumentScannerResultStatus
chromeos.machine_learning.mojom.DocumentScannerResultStatus = {
  OK: 0,
  ERROR: 1,
};

// Interface: DocumentScanner
chromeos.machine_learning.mojom.DocumentScannerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.mojom.DocumentScannerRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.DocumentScanner';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.mojom.DocumentScannerPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.mojom.DocumentScannerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.mojom.DocumentScannerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.machine_learning.mojom.DocumentScanner.getRemote = function() {
  let remote = new chromeos.machine_learning.mojom.DocumentScannerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.DocumentScanner',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.machine_learning.mojom.DocumentScannerPtr = chromeos.machine_learning.mojom.DocumentScannerRemote;
chromeos.machine_learning.mojom.DocumentScannerRequest = chromeos.machine_learning.mojom.DocumentScannerPendingReceiver;

