// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/keymint/public/mojom/cert_store.mojom
// Module: arc.keymint.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.keymint = arc.keymint || {};
arc.keymint.mojom = arc.keymint.mojom || {};


// Interface: CertStoreInstance
arc.keymint.mojom.CertStoreInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.keymint.mojom.CertStoreInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.keymint.mojom.CertStoreInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.keymint.mojom.CertStoreInstancePendingReceiver,
      handle);
    this.$ = new arc.keymint.mojom.CertStoreInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.keymint.mojom.CertStoreInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.keymint.mojom.CertStoreInstance.getRemote = function() {
  let remote = new arc.keymint.mojom.CertStoreInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.keymint.mojom.CertStoreInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.keymint.mojom.CertStoreInstancePtr = arc.keymint.mojom.CertStoreInstanceRemote;
arc.keymint.mojom.CertStoreInstanceRequest = arc.keymint.mojom.CertStoreInstancePendingReceiver;

