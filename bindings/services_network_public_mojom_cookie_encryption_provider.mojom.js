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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.CookieEncryptionProvider_GetEncryptor_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.getEncryptor');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.CookieEncryptionProviderReceiver = network.mojom.CookieEncryptionProviderReceiver;

network.mojom.CookieEncryptionProviderPtr = network.mojom.CookieEncryptionProviderRemote;
network.mojom.CookieEncryptionProviderRequest = network.mojom.CookieEncryptionProviderPendingReceiver;

