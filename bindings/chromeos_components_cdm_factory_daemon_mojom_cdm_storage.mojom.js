// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/cdm_storage.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.mojom = chromeos.cdm.mojom || {};


// Interface: CdmStorage
chromeos.cdm.mojom.CdmStorage = {};

chromeos.cdm.mojom.CdmStoragePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.mojom.CdmStorageRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.CdmStorage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.mojom.CdmStoragePendingReceiver,
      handle);
    this.$ = new chromeos.cdm.mojom.CdmStorageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cdm.mojom.CdmStorageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.cdm.mojom.CdmStorage.getRemote = function() {
  let remote = new chromeos.cdm.mojom.CdmStorageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.CdmStorage',
    'context');
  return remote.$;
};

// Legacy compatibility
chromeos.cdm.mojom.CdmStoragePtr = chromeos.cdm.mojom.CdmStorageRemote;
chromeos.cdm.mojom.CdmStorageRequest = chromeos.cdm.mojom.CdmStoragePendingReceiver;

