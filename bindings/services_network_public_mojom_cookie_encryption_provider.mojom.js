// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cookie_encryption_provider.mojom
// Module: network.mojom

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
  getEncryptor() {
    return this.$.getEncryptor();
  }
};

network.mojom.CookieEncryptionProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CookieEncryptionProvider', [
      { explicit: null },
    ]);
  }

  getEncryptor() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CookieEncryptionProvider', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.CookieEncryptionProvider_GetEncryptor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.CookieEncryptionProvider_GetEncryptor_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

network.mojom.CookieEncryptionProviderReceiver = network.mojom.CookieEncryptionProviderReceiver;

network.mojom.CookieEncryptionProviderPtr = network.mojom.CookieEncryptionProviderRemote;
network.mojom.CookieEncryptionProviderRequest = network.mojom.CookieEncryptionProviderPendingReceiver;

