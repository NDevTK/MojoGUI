// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/trusted_vault_encryption_keys_extension.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Struct: TrustedVaultKey
chrome.mojom.TrustedVaultKey = class {
  constructor(values = {}) {
    this.bytes = values.bytes !== undefined ? values.bytes : 0;
  }
};

// Interface: TrustedVaultEncryptionKeysExtension
chrome.mojom.TrustedVaultEncryptionKeysExtensionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.TrustedVaultEncryptionKeysExtension';
  }

  setEncryptionKeys(gaia_id, encryption_keys) {
    // Method: SetEncryptionKeys
    // Call: SetEncryptionKeys(gaia_id, encryption_keys)
  }

  addTrustedRecoveryMethod(gaia_id, public_key, method_type_hint) {
    // Method: AddTrustedRecoveryMethod
    // Call: AddTrustedRecoveryMethod(gaia_id, public_key, method_type_hint)
  }

};

chrome.mojom.TrustedVaultEncryptionKeysExtensionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
