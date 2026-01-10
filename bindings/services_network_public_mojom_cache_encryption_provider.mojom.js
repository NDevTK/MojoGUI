// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cache_encryption_provider.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var os_crypt_async = os_crypt_async || {};

network.mojom.CacheEncryptionProvider = {};
network.mojom.CacheEncryptionProvider.$interfaceName = 'network.mojom.CacheEncryptionProvider';
network.mojom.CacheEncryptionProvider_GetEncryptor_ParamsSpec = { $: {} };
network.mojom.CacheEncryptionProvider_GetEncryptor_ResponseParamsSpec = { $: {} };

// Interface: CacheEncryptionProvider
mojo.internal.Struct(
    network.mojom.CacheEncryptionProvider_GetEncryptor_ParamsSpec, 'network.mojom.CacheEncryptionProvider_GetEncryptor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.CacheEncryptionProvider_GetEncryptor_ResponseParamsSpec, 'network.mojom.CacheEncryptionProvider_GetEncryptor_ResponseParams', [
      mojo.internal.StructField('encryptor', 0, 0, os_crypt_async.mojom.EncryptorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
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

network.mojom.CacheEncryptionProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.CacheEncryptionProvider_GetEncryptor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getEncryptor();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.CacheEncryptionProvider_GetEncryptor_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

network.mojom.CacheEncryptionProviderReceiver = network.mojom.CacheEncryptionProviderReceiver;

network.mojom.CacheEncryptionProviderPtr = network.mojom.CacheEncryptionProviderRemote;
network.mojom.CacheEncryptionProviderRequest = network.mojom.CacheEncryptionProviderPendingReceiver;

