// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cache_encryption_provider.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: CacheEncryptionProvider
network.mojom.mojom.CacheEncryptionProvider = {};

network.mojom.mojom.CacheEncryptionProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.CacheEncryptionProviderRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CacheEncryptionProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.CacheEncryptionProviderPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.CacheEncryptionProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.CacheEncryptionProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getEncryptor() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.CacheEncryptionProvider_GetEncryptor_ParamsSpec,
      network.mojom.mojom.CacheEncryptionProvider_GetEncryptor_ResponseParamsSpec,
      []);
  }

};

network.mojom.mojom.CacheEncryptionProvider.getRemote = function() {
  let remote = new network.mojom.mojom.CacheEncryptionProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CacheEncryptionProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetEncryptor
network.mojom.mojom.CacheEncryptionProvider_GetEncryptor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CacheEncryptionProvider.GetEncryptor_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

network.mojom.mojom.CacheEncryptionProvider_GetEncryptor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CacheEncryptionProvider.GetEncryptor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'encryptor', packedOffset: 0, packedBitOffset: 0, type: os_crypt_async.mojom.EncryptorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.CacheEncryptionProviderPtr = network.mojom.mojom.CacheEncryptionProviderRemote;
network.mojom.mojom.CacheEncryptionProviderRequest = network.mojom.mojom.CacheEncryptionProviderPendingReceiver;

