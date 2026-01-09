// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cookie_encryption_provider.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: CookieEncryptionProvider
network.mojom.CookieEncryptionProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.CookieEncryptionProvider';
  }

  getEncryptor() {
    // Method: GetEncryptor
    return new Promise((resolve) => {
      // Call: GetEncryptor()
      resolve({});
    });
  }

};

network.mojom.CookieEncryptionProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
