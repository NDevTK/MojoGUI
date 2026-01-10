// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/keymint/public/mojom/cert_store.mojom
// Module: arc.keymint.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.keymint = arc.keymint || {};
arc.keymint.keymint.mojom = arc.keymint.keymint.mojom || {};


// Union: KeyData
arc.keymint.keymint.mojom.mojom.KeyDataSpec = { $: mojo.internal.Union(
    'arc.keymint.mojom.KeyData', {
      'chaps_key_data': {
        'ordinal': 0,
        'type': arc.keymint.mojom.ChapsKeyDataSpec,
      }},
    })
};

// Struct: ChapsKeyData
arc.keymint.keymint.mojom.mojom.ChapsKeyDataSpec = {
  $: {
    structSpec: {
      name: 'arc.keymint.mojom.ChapsKeyData',
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
arc.keymint.keymint.mojom.mojom.ChromeOsKeySpec = {
  $: {
    structSpec: {
      name: 'arc.keymint.mojom.ChromeOsKey',
      packedSize: 32,
      fields: [
        { name: 'base64_subject_public_key_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'key_data', packedOffset: 0, packedBitOffset: 0, type: arc.keymint.mojom.KeyDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: CertStoreInstance
arc.keymint.keymint.mojom.mojom.CertStoreInstance = {};

arc.keymint.keymint.mojom.mojom.CertStoreInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.keymint.keymint.mojom.mojom.CertStoreInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.keymint.mojom.CertStoreInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.keymint.keymint.mojom.mojom.CertStoreInstancePendingReceiver,
      handle);
    this.$ = new arc.keymint.keymint.mojom.mojom.CertStoreInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.keymint.keymint.mojom.mojom.CertStoreInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updatePlaceholderKeys(keys) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.keymint.keymint.mojom.mojom.CertStoreInstance_UpdatePlaceholderKeys_ParamsSpec,
      arc.keymint.keymint.mojom.mojom.CertStoreInstance_UpdatePlaceholderKeys_ResponseParamsSpec,
      [keys]);
  }

  setSerialNumber(serial_number) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.keymint.keymint.mojom.mojom.CertStoreInstance_SetSerialNumber_ParamsSpec,
      null,
      [serial_number]);
  }

};

arc.keymint.keymint.mojom.mojom.CertStoreInstance.getRemote = function() {
  let remote = new arc.keymint.keymint.mojom.mojom.CertStoreInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.keymint.mojom.CertStoreInstance',
    'context');
  return remote.$;
};

// ParamsSpec for UpdatePlaceholderKeys
arc.keymint.keymint.mojom.mojom.CertStoreInstance_UpdatePlaceholderKeys_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.keymint.mojom.CertStoreInstance.UpdatePlaceholderKeys_Params',
      packedSize: 16,
      fields: [
        { name: 'keys', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.keymint.mojom.ChromeOsKeySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.keymint.keymint.mojom.mojom.CertStoreInstance_UpdatePlaceholderKeys_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.keymint.mojom.CertStoreInstance.UpdatePlaceholderKeys_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSerialNumber
arc.keymint.keymint.mojom.mojom.CertStoreInstance_SetSerialNumber_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.keymint.mojom.CertStoreInstance.SetSerialNumber_Params',
      packedSize: 16,
      fields: [
        { name: 'serial_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.keymint.keymint.mojom.mojom.CertStoreInstancePtr = arc.keymint.keymint.mojom.mojom.CertStoreInstanceRemote;
arc.keymint.keymint.mojom.mojom.CertStoreInstanceRequest = arc.keymint.keymint.mojom.mojom.CertStoreInstancePendingReceiver;

