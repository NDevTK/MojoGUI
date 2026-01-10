// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cookie_encryption_provider.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var os_crypt_async = os_crypt_async || {};

network.mojom.CookieEncryptionProvider = {};
network.mojom.CookieEncryptionProvider.$interfaceName = 'network.mojom.CookieEncryptionProvider';
network.mojom.CookieEncryptionProvider_GetEncryptor_ParamsSpec = { $: {} };
network.mojom.CookieEncryptionProvider_GetEncryptor_ResponseParamsSpec = { $: {} };

// Interface: CookieEncryptionProvider
mojo.internal.Struct(
    network.mojom.CookieEncryptionProvider_GetEncryptor_ParamsSpec, 'network.mojom.CookieEncryptionProvider_GetEncryptor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.CookieEncryptionProvider_GetEncryptor_ResponseParamsSpec, 'network.mojom.CookieEncryptionProvider_GetEncryptor_ResponseParams', [
      mojo.internal.StructField('encryptor', 0, 0, os_crypt_async.mojom.EncryptorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.CookieEncryptionProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.CookieEncryptionProviderRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CookieEncryptionProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.CookieEncryptionProviderPendingReceiver,
      handle);
    this.$ = new network.mojom.CookieEncryptionProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.CookieEncryptionProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getEncryptor() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.CookieEncryptionProvider_GetEncryptor_ParamsSpec,
      network.mojom.CookieEncryptionProvider_GetEncryptor_ResponseParamsSpec,
      [],
      false);
  }

};

network.mojom.CookieEncryptionProvider.getRemote = function() {
  let remote = new network.mojom.CookieEncryptionProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CookieEncryptionProvider',
    'context');
  return remote.$;
};

network.mojom.CookieEncryptionProviderReceiver = class {
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
          const params = network.mojom.CookieEncryptionProvider_GetEncryptor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getEncryptor();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.CookieEncryptionProvider_GetEncryptor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

network.mojom.CookieEncryptionProviderReceiver = network.mojom.CookieEncryptionProviderReceiver;

network.mojom.CookieEncryptionProviderPtr = network.mojom.CookieEncryptionProviderRemote;
network.mojom.CookieEncryptionProviderRequest = network.mojom.CookieEncryptionProviderPendingReceiver;

