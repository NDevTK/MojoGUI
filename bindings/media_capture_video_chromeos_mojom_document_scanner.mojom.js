// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/document_scanner.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Interface: CrosDocumentScanner
cros.mojom.CrosDocumentScannerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CrosDocumentScannerRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosDocumentScanner';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CrosDocumentScannerPendingReceiver,
      handle);
    this.$ = new cros.mojom.CrosDocumentScannerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CrosDocumentScannerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

cros.mojom.CrosDocumentScanner.getRemote = function() {
  let remote = new cros.mojom.CrosDocumentScannerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosDocumentScanner',
    'context');
  return remote.$;
}};

// Legacy compatibility
cros.mojom.CrosDocumentScannerPtr = cros.mojom.CrosDocumentScannerRemote;
cros.mojom.CrosDocumentScannerRequest = cros.mojom.CrosDocumentScannerPendingReceiver;

