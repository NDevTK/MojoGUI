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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CacheEncryptionProvider_GetEncryptor_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getEncryptor');
          const result = this.impl.getEncryptor();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.CacheEncryptionProvider_GetEncryptor_ResponseParamsSpec);
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

network.mojom.CacheEncryptionProviderReceiver = network.mojom.CacheEncryptionProviderReceiver;

network.mojom.CacheEncryptionProviderPtr = network.mojom.CacheEncryptionProviderRemote;
network.mojom.CacheEncryptionProviderRequest = network.mojom.CacheEncryptionProviderPendingReceiver;

