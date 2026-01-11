// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/blob_url_store.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var url = url || {};

blink.mojom.BlobURLStore = {};
blink.mojom.BlobURLStore.$interfaceName = 'blink.mojom.BlobURLStore';
blink.mojom.BlobURLStore_Register_ParamsSpec = { $: {} };
blink.mojom.BlobURLStore_Register_ResponseParamsSpec = { $: {} };
blink.mojom.BlobURLStore_Revoke_ParamsSpec = { $: {} };
blink.mojom.BlobURLStore_ResolveAsURLLoaderFactory_ParamsSpec = { $: {} };
blink.mojom.BlobURLStore_ResolveAsBlobURLToken_ParamsSpec = { $: {} };
blink.mojom.BlobURLToken = {};
blink.mojom.BlobURLToken.$interfaceName = 'blink.mojom.BlobURLToken';
blink.mojom.BlobURLToken_Clone_ParamsSpec = { $: {} };
blink.mojom.BlobURLToken_GetToken_ParamsSpec = { $: {} };
blink.mojom.BlobURLToken_GetToken_ResponseParamsSpec = { $: {} };

// Interface: BlobURLStore
mojo.internal.Struct(
    blink.mojom.BlobURLStore_Register_ParamsSpec, 'blink.mojom.BlobURLStore_Register_Params', [
      mojo.internal.StructField('blob', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobRemote), null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BlobURLStore_Register_ResponseParamsSpec, 'blink.mojom.BlobURLStore_Register_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BlobURLStore_Revoke_ParamsSpec, 'blink.mojom.BlobURLStore_Revoke_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BlobURLStore_ResolveAsURLLoaderFactory_ParamsSpec, 'blink.mojom.BlobURLStore_ResolveAsURLLoaderFactory_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('factory', 8, 0, mojo.internal.InterfaceRequest(network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BlobURLStore_ResolveAsBlobURLToken_ParamsSpec, 'blink.mojom.BlobURLStore_ResolveAsBlobURLToken_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('token', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.BlobURLTokenRemote), null, false, 0, undefined),
      mojo.internal.StructField('is_top_level_navigation', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

blink.mojom.BlobURLStorePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BlobURLStoreRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BlobURLStore';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BlobURLStorePendingReceiver,
      handle);
    this.$ = new blink.mojom.BlobURLStoreRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  register(blob, url) {
    return this.$.register(blob, url);
  }
  revoke(url) {
    return this.$.revoke(url);
  }
  resolveAsURLLoaderFactory(url, factory) {
    return this.$.resolveAsURLLoaderFactory(url, factory);
  }
  resolveAsBlobURLToken(url, token, is_top_level_navigation) {
    return this.$.resolveAsBlobURLToken(url, token, is_top_level_navigation);
  }
};

blink.mojom.BlobURLStoreRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BlobURLStore', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  register(blob, url) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.BlobURLStore_Register_ParamsSpec,
      blink.mojom.BlobURLStore_Register_ResponseParamsSpec,
      [blob, url],
      false);
  }

  revoke(url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.BlobURLStore_Revoke_ParamsSpec,
      null,
      [url],
      false);
  }

  resolveAsURLLoaderFactory(url, factory) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.BlobURLStore_ResolveAsURLLoaderFactory_ParamsSpec,
      null,
      [url, factory],
      false);
  }

  resolveAsBlobURLToken(url, token, is_top_level_navigation) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.BlobURLStore_ResolveAsBlobURLToken_ParamsSpec,
      null,
      [url, token, is_top_level_navigation],
      false);
  }

};

blink.mojom.BlobURLStore.getRemote = function() {
  let remote = new blink.mojom.BlobURLStoreRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BlobURLStore',
    'context');
  return remote.$;
};

blink.mojom.BlobURLStoreReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BlobURLStore', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(blink.mojom.BlobURLStore_Register_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BlobURLStore_Revoke_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BlobURLStore_ResolveAsURLLoaderFactory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BlobURLStore_ResolveAsBlobURLToken_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BlobURLStore_Register_ParamsSpec.$.structSpec);
          const result = this.impl.register(params.blob, params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BlobURLStore_Register_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BlobURLStore_Revoke_ParamsSpec.$.structSpec);
          const result = this.impl.revoke(params.url);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BlobURLStore_ResolveAsURLLoaderFactory_ParamsSpec.$.structSpec);
          const result = this.impl.resolveAsURLLoaderFactory(params.url, params.factory);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BlobURLStore_ResolveAsBlobURLToken_ParamsSpec.$.structSpec);
          const result = this.impl.resolveAsBlobURLToken(params.url, params.token, params.is_top_level_navigation);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.BlobURLStoreReceiver = blink.mojom.BlobURLStoreReceiver;

blink.mojom.BlobURLStorePtr = blink.mojom.BlobURLStoreRemote;
blink.mojom.BlobURLStoreRequest = blink.mojom.BlobURLStorePendingReceiver;


// Interface: BlobURLToken
mojo.internal.Struct(
    blink.mojom.BlobURLToken_Clone_ParamsSpec, 'blink.mojom.BlobURLToken_Clone_Params', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.BlobURLTokenRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BlobURLToken_GetToken_ParamsSpec, 'blink.mojom.BlobURLToken_GetToken_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BlobURLToken_GetToken_ResponseParamsSpec, 'blink.mojom.BlobURLToken_GetToken_ResponseParams', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.BlobURLTokenPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BlobURLTokenRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BlobURLToken';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BlobURLTokenPendingReceiver,
      handle);
    this.$ = new blink.mojom.BlobURLTokenRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  clone(token) {
    return this.$.clone(token);
  }
  getToken() {
    return this.$.getToken();
  }
};

blink.mojom.BlobURLTokenRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BlobURLToken', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  clone(token) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.BlobURLToken_Clone_ParamsSpec,
      null,
      [token],
      false);
  }

  getToken() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.BlobURLToken_GetToken_ParamsSpec,
      blink.mojom.BlobURLToken_GetToken_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.BlobURLToken.getRemote = function() {
  let remote = new blink.mojom.BlobURLTokenRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BlobURLToken',
    'context');
  return remote.$;
};

blink.mojom.BlobURLTokenReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BlobURLToken', [
      { explicit: null },
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
             decoder.decodeStructInline(blink.mojom.BlobURLToken_Clone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BlobURLToken_GetToken_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BlobURLToken_Clone_ParamsSpec.$.structSpec);
          const result = this.impl.clone(params.token);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BlobURLToken_GetToken_ParamsSpec.$.structSpec);
          const result = this.impl.getToken();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BlobURLToken_GetToken_ResponseParamsSpec);
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

blink.mojom.BlobURLTokenReceiver = blink.mojom.BlobURLTokenReceiver;

blink.mojom.BlobURLTokenPtr = blink.mojom.BlobURLTokenRemote;
blink.mojom.BlobURLTokenRequest = blink.mojom.BlobURLTokenPendingReceiver;

