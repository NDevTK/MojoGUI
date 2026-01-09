// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cache_encryption_provider.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: CacheEncryptionProvider
network.mojom.CacheEncryptionProvider = {};

network.mojom.CacheEncryptionProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.CacheEncryptionProviderRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CacheEncryptionProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.CacheEncryptionProviderPendingReceiver,
      handle);
    this.$ = new network.mojom.CacheEncryptionProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.CacheEncryptionProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getEncryptor() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.CacheEncryptionProvider_GetEncryptor_ParamsSpec,
      network.mojom.CacheEncryptionProvider_GetEncryptor_ResponseParamsSpec,
      []);
  }

};

network.mojom.CacheEncryptionProvider.getRemote = function() {
  let remote = new network.mojom.CacheEncryptionProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CacheEncryptionProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetEncryptor
network.mojom.CacheEncryptionProvider_GetEncryptor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CacheEncryptionProvider.GetEncryptor_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.CacheEncryptionProvider_GetEncryptor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CacheEncryptionProvider.GetEncryptor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'encryptor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.CacheEncryptionProviderPtr = network.mojom.CacheEncryptionProviderRemote;
network.mojom.CacheEncryptionProviderRequest = network.mojom.CacheEncryptionProviderPendingReceiver;

