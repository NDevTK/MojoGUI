// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/trusted_signals_cache.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};


// Enum: TrustedSignalsCompressionScheme
auction_worklet.mojom.mojom.TrustedSignalsCompressionScheme = {
  kNone: 0,
  kGzip: 1,
  kBrotli: 2,
};
auction_worklet.mojom.mojom.TrustedSignalsCompressionSchemeSpec = { $: mojo.internal.Enum() };

// Struct: TrustedSignalsCacheKey
auction_worklet.mojom.mojom.TrustedSignalsCacheKeySpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.TrustedSignalsCacheKey',
      packedSize: 24,
      fields: [
        { name: 'compression_group_token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'partition_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: TrustedSignalsCacheClient
auction_worklet.mojom.mojom.TrustedSignalsCacheClient = {};

auction_worklet.mojom.mojom.TrustedSignalsCacheClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

auction_worklet.mojom.mojom.TrustedSignalsCacheClientRemote = class {
  static get $interfaceName() {
    return 'auction_worklet.mojom.TrustedSignalsCacheClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      auction_worklet.mojom.mojom.TrustedSignalsCacheClientPendingReceiver,
      handle);
    this.$ = new auction_worklet.mojom.mojom.TrustedSignalsCacheClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

auction_worklet.mojom.mojom.TrustedSignalsCacheClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSuccess(compression_scheme, compression_group_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      auction_worklet.mojom.mojom.TrustedSignalsCacheClient_OnSuccess_ParamsSpec,
      null,
      [compression_scheme, compression_group_data]);
  }

  onError(error_message) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      auction_worklet.mojom.mojom.TrustedSignalsCacheClient_OnError_ParamsSpec,
      null,
      [error_message]);
  }

};

auction_worklet.mojom.mojom.TrustedSignalsCacheClient.getRemote = function() {
  let remote = new auction_worklet.mojom.mojom.TrustedSignalsCacheClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'auction_worklet.mojom.TrustedSignalsCacheClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnSuccess
auction_worklet.mojom.mojom.TrustedSignalsCacheClient_OnSuccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.TrustedSignalsCacheClient.OnSuccess_Params',
      packedSize: 32,
      fields: [
        { name: 'compression_scheme', packedOffset: 16, packedBitOffset: 0, type: auction_worklet.mojom.TrustedSignalsCompressionSchemeSpec, nullable: false, minVersion: 0 },
        { name: 'compression_group_data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnError
auction_worklet.mojom.mojom.TrustedSignalsCacheClient_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.TrustedSignalsCacheClient.OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
auction_worklet.mojom.mojom.TrustedSignalsCacheClientPtr = auction_worklet.mojom.mojom.TrustedSignalsCacheClientRemote;
auction_worklet.mojom.mojom.TrustedSignalsCacheClientRequest = auction_worklet.mojom.mojom.TrustedSignalsCacheClientPendingReceiver;


// Interface: TrustedSignalsCache
auction_worklet.mojom.mojom.TrustedSignalsCache = {};

auction_worklet.mojom.mojom.TrustedSignalsCachePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

auction_worklet.mojom.mojom.TrustedSignalsCacheRemote = class {
  static get $interfaceName() {
    return 'auction_worklet.mojom.TrustedSignalsCache';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      auction_worklet.mojom.mojom.TrustedSignalsCachePendingReceiver,
      handle);
    this.$ = new auction_worklet.mojom.mojom.TrustedSignalsCacheRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

auction_worklet.mojom.mojom.TrustedSignalsCacheRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getTrustedSignals(compression_group_token, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      auction_worklet.mojom.mojom.TrustedSignalsCache_GetTrustedSignals_ParamsSpec,
      null,
      [compression_group_token, client]);
  }

};

auction_worklet.mojom.mojom.TrustedSignalsCache.getRemote = function() {
  let remote = new auction_worklet.mojom.mojom.TrustedSignalsCacheRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'auction_worklet.mojom.TrustedSignalsCache',
    'context');
  return remote.$;
};

// ParamsSpec for GetTrustedSignals
auction_worklet.mojom.mojom.TrustedSignalsCache_GetTrustedSignals_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.TrustedSignalsCache.GetTrustedSignals_Params',
      packedSize: 24,
      fields: [
        { name: 'compression_group_token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
auction_worklet.mojom.mojom.TrustedSignalsCachePtr = auction_worklet.mojom.mojom.TrustedSignalsCacheRemote;
auction_worklet.mojom.mojom.TrustedSignalsCacheRequest = auction_worklet.mojom.mojom.TrustedSignalsCachePendingReceiver;

