// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/trusted_signals_cache.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};


// Enum: TrustedSignalsCompressionScheme
auction_worklet.mojom.TrustedSignalsCompressionScheme = {
  kNone: 0,
  kGzip: 1,
  kBrotli: 2,
};

// Struct: TrustedSignalsCacheKey
auction_worklet.mojom.TrustedSignalsCacheKeySpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.TrustedSignalsCacheKey',
      packedSize: 24,
      fields: [
        { name: 'compression_group_token', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'partition_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: TrustedSignalsCacheClient
auction_worklet.mojom.TrustedSignalsCacheClient = {};

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
      [compression_scheme, compression_group_data]);
  }

  onError(error_message) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      auction_worklet.mojom.TrustedSignalsCacheClient_OnError_ParamsSpec,
      null,
      [error_message]);
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

// ParamsSpec for OnSuccess
auction_worklet.mojom.TrustedSignalsCacheClient_OnSuccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.TrustedSignalsCacheClient.OnSuccess_Params',
      packedSize: 24,
      fields: [
        { name: 'compression_scheme', packedOffset: 8, packedBitOffset: 0, type: auction_worklet.mojom.TrustedSignalsCompressionSchemeSpec, nullable: false },
        { name: 'compression_group_data', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnError
auction_worklet.mojom.TrustedSignalsCacheClient_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.TrustedSignalsCacheClient.OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
auction_worklet.mojom.TrustedSignalsCacheClientPtr = auction_worklet.mojom.TrustedSignalsCacheClientRemote;
auction_worklet.mojom.TrustedSignalsCacheClientRequest = auction_worklet.mojom.TrustedSignalsCacheClientPendingReceiver;


// Interface: TrustedSignalsCache
auction_worklet.mojom.TrustedSignalsCache = {};

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
      [compression_group_token, client]);
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

// ParamsSpec for GetTrustedSignals
auction_worklet.mojom.TrustedSignalsCache_GetTrustedSignals_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.TrustedSignalsCache.GetTrustedSignals_Params',
      packedSize: 24,
      fields: [
        { name: 'compression_group_token', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
auction_worklet.mojom.TrustedSignalsCachePtr = auction_worklet.mojom.TrustedSignalsCacheRemote;
auction_worklet.mojom.TrustedSignalsCacheRequest = auction_worklet.mojom.TrustedSignalsCachePendingReceiver;

