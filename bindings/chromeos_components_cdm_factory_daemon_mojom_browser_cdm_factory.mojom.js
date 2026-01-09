// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/browser_cdm_factory.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.mojom = chromeos.cdm.mojom || {};


// Interface: BrowserCdmFactory
chromeos.cdm.mojom.BrowserCdmFactory = {};

chromeos.cdm.mojom.BrowserCdmFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.mojom.BrowserCdmFactoryRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.BrowserCdmFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.mojom.BrowserCdmFactoryPendingReceiver,
      handle);
    this.$ = new chromeos.cdm.mojom.BrowserCdmFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cdm.mojom.BrowserCdmFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.cdm.mojom.BrowserCdmFactory.getRemote = function() {
  let remote = new chromeos.cdm.mojom.BrowserCdmFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.BrowserCdmFactory',
    'context');
  return remote.$;
};

// Legacy compatibility
chromeos.cdm.mojom.BrowserCdmFactoryPtr = chromeos.cdm.mojom.BrowserCdmFactoryRemote;
chromeos.cdm.mojom.BrowserCdmFactoryRequest = chromeos.cdm.mojom.BrowserCdmFactoryPendingReceiver;

