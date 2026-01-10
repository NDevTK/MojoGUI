// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/keymaster/public/mojom/cert_store.mojom
// Module: arc.keymaster.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.keymaster = arc.keymaster || {};
arc.keymaster.mojom = arc.keymaster.mojom || {};


// Union: KeyData
arc.keymaster.mojom.KeyDataSpec = { $: mojo.internal.Union(
    'arc.keymaster.mojom.KeyData', {
      'chaps_key_data': {
        'ordinal': 0,
        'type': arc.keymaster.mojom.ChapsKeyDataSpec,
      }},
    })
};

// Struct: ChapsKeyData
arc.keymaster.mojom.ChapsKeyDataSpec = {
  $: {
    structSpec: {
      name: 'arc.keymaster.mojom.ChapsKeyData',
      packedSize: 32,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'slot', packedOffset: 16, packedBitOffset: 0, type: arc.keymanagement.mojom.ChapsSlotSpec, nullable: false, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 1, packedSize: 32}]
    }
  }
};

// Struct: ChromeOsKey
arc.keymaster.mojom.ChromeOsKeySpec = {
  $: {
    structSpec: {
      name: 'arc.keymaster.mojom.ChromeOsKey',
      packedSize: 32,
      fields: [
        { name: 'base64_subject_public_key_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'key_data', packedOffset: 8, packedBitOffset: 0, type: arc.keymaster.mojom.KeyDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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

  updatePlaceholderKeys(keys) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.keymaster.mojom.CertStoreInstance_UpdatePlaceholderKeys_ParamsSpec,
      arc.keymaster.mojom.CertStoreInstance_UpdatePlaceholderKeys_ResponseParamsSpec,
      [keys]);
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

// ParamsSpec for UpdatePlaceholderKeys
arc.keymaster.mojom.CertStoreInstance_UpdatePlaceholderKeys_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.keymaster.mojom.CertStoreInstance.UpdatePlaceholderKeys_Params',
      packedSize: 16,
      fields: [
        { name: 'keys', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.keymaster.mojom.ChromeOsKeySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.keymaster.mojom.CertStoreInstance_UpdatePlaceholderKeys_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.keymaster.mojom.CertStoreInstance.UpdatePlaceholderKeys_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.keymaster.mojom.CertStoreInstancePtr = arc.keymaster.mojom.CertStoreInstanceRemote;
arc.keymaster.mojom.CertStoreInstanceRequest = arc.keymaster.mojom.CertStoreInstancePendingReceiver;

