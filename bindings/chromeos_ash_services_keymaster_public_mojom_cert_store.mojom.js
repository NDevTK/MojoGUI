// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/keymaster/public/mojom/cert_store.mojom
// Module: arc.keymaster.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.keymaster = arc.keymaster || {};
arc.keymaster.mojom = arc.keymaster.mojom || {};


// Struct: ChapsKeyData
arc.keymaster.mojom.ChapsKeyDataSpec = {
  $: {
    structSpec: {
      name: 'arc.keymaster.mojom.ChapsKeyData',
      packedSize: 24,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ChromeOsKey
arc.keymaster.mojom.ChromeOsKeySpec = {
  $: {
    structSpec: {
      name: 'arc.keymaster.mojom.ChromeOsKey',
      packedSize: 24,
      fields: [
        { name: 'base64_subject_public_key_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'key_data', packedOffset: 8, packedBitOffset: 0, type: arc.keymaster.mojom.KeyDataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: CertStoreInstance
arc.keymaster.mojom.CertStoreInstance = {};

arc.keymaster.mojom.CertStoreInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.keymaster.mojom.CertStoreInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.keymaster.mojom.CertStoreInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.keymaster.mojom.CertStoreInstancePendingReceiver,
      handle);
    this.$ = new arc.keymaster.mojom.CertStoreInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.keymaster.mojom.CertStoreInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.keymaster.mojom.CertStoreInstance.getRemote = function() {
  let remote = new arc.keymaster.mojom.CertStoreInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.keymaster.mojom.CertStoreInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.keymaster.mojom.CertStoreInstancePtr = arc.keymaster.mojom.CertStoreInstanceRemote;
arc.keymaster.mojom.CertStoreInstanceRequest = arc.keymaster.mojom.CertStoreInstancePendingReceiver;

