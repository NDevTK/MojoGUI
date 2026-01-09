// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cache_encryption_provider.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: CacheEncryptionProvider
network.mojom.CacheEncryptionProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.CacheEncryptionProvider';
  }

  getEncryptor() {
    // Method: GetEncryptor
    return new Promise((resolve) => {
      // Call: GetEncryptor()
      resolve({});
    });
  }

};

network.mojom.CacheEncryptionProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
