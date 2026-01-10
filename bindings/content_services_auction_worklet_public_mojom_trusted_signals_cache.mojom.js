// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/trusted_signals_cache.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};
var mojo_base = mojo_base || {};

auction_worklet.mojom.TrustedSignalsCompressionSchemeSpec = { $: mojo.internal.Enum() };
auction_worklet.mojom.TrustedSignalsCacheKeySpec = { $: {} };
auction_worklet.mojom.TrustedSignalsCacheClient = {};
auction_worklet.mojom.TrustedSignalsCacheClient.$interfaceName = 'auction_worklet.mojom.TrustedSignalsCacheClient';
auction_worklet.mojom.TrustedSignalsCacheClient_OnSuccess_ParamsSpec = { $: {} };
auction_worklet.mojom.TrustedSignalsCacheClient_OnError_ParamsSpec = { $: {} };
auction_worklet.mojom.TrustedSignalsCache = {};
auction_worklet.mojom.TrustedSignalsCache.$interfaceName = 'auction_worklet.mojom.TrustedSignalsCache';
auction_worklet.mojom.TrustedSignalsCache_GetTrustedSignals_ParamsSpec = { $: {} };

// Enum: TrustedSignalsCompressionScheme
auction_worklet.mojom.TrustedSignalsCompressionScheme = {
  kNone: 0,
  kGzip: 1,
  kBrotli: 2,
};

// Struct: TrustedSignalsCacheKey
mojo.internal.Struct(
    auction_worklet.mojom.TrustedSignalsCacheKeySpec, 'auction_worklet.mojom.TrustedSignalsCacheKey', [
      mojo.internal.StructField('compression_group_token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('partition_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: TrustedSignalsCacheClient
mojo.internal.Struct(
    auction_worklet.mojom.TrustedSignalsCacheClient_OnSuccess_ParamsSpec, 'auction_worklet.mojom.TrustedSignalsCacheClient_OnSuccess_Params', [
      mojo.internal.StructField('compression_scheme', 0, 0, auction_worklet.mojom.TrustedSignalsCompressionSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('compression_group_data', 8, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    auction_worklet.mojom.TrustedSignalsCacheClient_OnError_ParamsSpec, 'auction_worklet.mojom.TrustedSignalsCacheClient_OnError_Params', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

auction_worklet.mojom.TrustedSignalsCacheClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

auction_worklet.mojom.TrustedSignalsCacheClientRemote = class {
  static get $interfaceName() {
    return 'auction_worklet.mojom.TrustedSignalsCacheClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      auction_worklet.mojom.TrustedSignalsCacheClientPendingReceiver,
      handle);
    this.$ = new auction_worklet.mojom.TrustedSignalsCacheClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

auction_worklet.mojom.TrustedSignalsCacheClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSuccess(compression_scheme, compression_group_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      auction_worklet.mojom.TrustedSignalsCacheClient_OnSuccess_ParamsSpec,
      null,
      [compression_scheme, compression_group_data],
      false);
  }

  onError(error_message) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      auction_worklet.mojom.TrustedSignalsCacheClient_OnError_ParamsSpec,
      null,
      [error_message],
      false);
  }

};

auction_worklet.mojom.TrustedSignalsCacheClient.getRemote = function() {
  let remote = new auction_worklet.mojom.TrustedSignalsCacheClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'auction_worklet.mojom.TrustedSignalsCacheClient',
    'context');
  return remote.$;
};

auction_worklet.mojom.TrustedSignalsCacheClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
          const params = decoder.decodeStruct(auction_worklet.mojom.TrustedSignalsCacheClient_OnSuccess_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onSuccess');
          const result = this.impl.onSuccess(params.compression_scheme, params.compression_group_data);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(auction_worklet.mojom.TrustedSignalsCacheClient_OnError_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.error_message);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

auction_worklet.mojom.TrustedSignalsCacheClientReceiver = auction_worklet.mojom.TrustedSignalsCacheClientReceiver;

auction_worklet.mojom.TrustedSignalsCacheClientPtr = auction_worklet.mojom.TrustedSignalsCacheClientRemote;
auction_worklet.mojom.TrustedSignalsCacheClientRequest = auction_worklet.mojom.TrustedSignalsCacheClientPendingReceiver;


// Interface: TrustedSignalsCache
mojo.internal.Struct(
    auction_worklet.mojom.TrustedSignalsCache_GetTrustedSignals_ParamsSpec, 'auction_worklet.mojom.TrustedSignalsCache_GetTrustedSignals_Params', [
      mojo.internal.StructField('compression_group_token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(auction_worklet.mojom.TrustedSignalsCacheClientSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

auction_worklet.mojom.TrustedSignalsCachePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

auction_worklet.mojom.TrustedSignalsCacheRemote = class {
  static get $interfaceName() {
    return 'auction_worklet.mojom.TrustedSignalsCache';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      auction_worklet.mojom.TrustedSignalsCachePendingReceiver,
      handle);
    this.$ = new auction_worklet.mojom.TrustedSignalsCacheRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

auction_worklet.mojom.TrustedSignalsCacheRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getTrustedSignals(compression_group_token, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      auction_worklet.mojom.TrustedSignalsCache_GetTrustedSignals_ParamsSpec,
      null,
      [compression_group_token, client],
      false);
  }

};

auction_worklet.mojom.TrustedSignalsCache.getRemote = function() {
  let remote = new auction_worklet.mojom.TrustedSignalsCacheRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'auction_worklet.mojom.TrustedSignalsCache',
    'context');
  return remote.$;
};

auction_worklet.mojom.TrustedSignalsCacheReceiver = class {
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
          const params = decoder.decodeStruct(auction_worklet.mojom.TrustedSignalsCache_GetTrustedSignals_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getTrustedSignals');
          const result = this.impl.getTrustedSignals(params.compression_group_token, params.client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

auction_worklet.mojom.TrustedSignalsCacheReceiver = auction_worklet.mojom.TrustedSignalsCacheReceiver;

auction_worklet.mojom.TrustedSignalsCachePtr = auction_worklet.mojom.TrustedSignalsCacheRemote;
auction_worklet.mojom.TrustedSignalsCacheRequest = auction_worklet.mojom.TrustedSignalsCachePendingReceiver;

