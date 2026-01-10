// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/trusted_signals_cache.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};

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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'auction_worklet.mojom.TrustedSignalsCacheClient',
    'context');
  return remote.$;
};

auction_worklet.mojom.TrustedSignalsCacheClientPtr = auction_worklet.mojom.TrustedSignalsCacheClientRemote;
auction_worklet.mojom.TrustedSignalsCacheClientRequest = auction_worklet.mojom.TrustedSignalsCacheClientPendingReceiver;


// Interface: TrustedSignalsCache
mojo.internal.Struct(
    auction_worklet.mojom.TrustedSignalsCache_GetTrustedSignals_ParamsSpec, 'auction_worklet.mojom.TrustedSignalsCache_GetTrustedSignals_Params', [
      mojo.internal.StructField('compression_group_token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(auction_worklet.mojom.TrustedSignalsCacheClientRemote), null, false, 0, undefined),
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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'auction_worklet.mojom.TrustedSignalsCache',
    'context');
  return remote.$;
};

auction_worklet.mojom.TrustedSignalsCachePtr = auction_worklet.mojom.TrustedSignalsCacheRemote;
auction_worklet.mojom.TrustedSignalsCacheRequest = auction_worklet.mojom.TrustedSignalsCachePendingReceiver;

