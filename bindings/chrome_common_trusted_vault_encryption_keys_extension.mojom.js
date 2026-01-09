// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/trusted_vault_encryption_keys_extension.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: TrustedVaultEncryptionKeysExtension
chrome.mojom.TrustedVaultEncryptionKeysExtension = {};

chrome.mojom.TrustedVaultEncryptionKeysExtensionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.TrustedVaultEncryptionKeysExtensionRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.TrustedVaultEncryptionKeysExtension';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.TrustedVaultEncryptionKeysExtensionPendingReceiver,
      handle);
    this.$ = new chrome.mojom.TrustedVaultEncryptionKeysExtensionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.TrustedVaultEncryptionKeysExtensionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setEncryptionKeys(gaia_id, encryption_keys) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.TrustedVaultEncryptionKeysExtension_SetEncryptionKeys_ParamsSpec,
      null,
      null,
      [gaia_id, encryption_keys],
      undefined,
      undefined
    );
  }

  addTrustedRecoveryMethod(gaia_id, public_key, method_type_hint) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.TrustedVaultEncryptionKeysExtension_AddTrustedRecoveryMethod_ParamsSpec,
      null,
      null,
      [gaia_id, public_key, method_type_hint],
      undefined,
      undefined
    );
  }

};

chrome.mojom.TrustedVaultEncryptionKeysExtension.getRemote = function() {
  let remote = new chrome.mojom.TrustedVaultEncryptionKeysExtensionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.TrustedVaultEncryptionKeysExtension',
    'context');
  return remote.$;
};

// ParamsSpec for SetEncryptionKeys
chrome.mojom.TrustedVaultEncryptionKeysExtension_SetEncryptionKeys_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.TrustedVaultEncryptionKeysExtension.SetEncryptionKeys_Params',
      packedSize: 24,
      fields: [
        { name: 'gaia_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'encryption_keys', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AddTrustedRecoveryMethod
chrome.mojom.TrustedVaultEncryptionKeysExtension_AddTrustedRecoveryMethod_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.TrustedVaultEncryptionKeysExtension.AddTrustedRecoveryMethod_Params',
      packedSize: 32,
      fields: [
        { name: 'gaia_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'public_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'method_type_hint', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
chrome.mojom.TrustedVaultEncryptionKeysExtensionPtr = chrome.mojom.TrustedVaultEncryptionKeysExtensionRemote;
chrome.mojom.TrustedVaultEncryptionKeysExtensionRequest = chrome.mojom.TrustedVaultEncryptionKeysExtensionPendingReceiver;

