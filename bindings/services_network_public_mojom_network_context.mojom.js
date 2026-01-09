// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_context.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: TrustTokenOperationPolicyVerdict
network.mojom.TrustTokenOperationPolicyVerdict = {
  kForbid: 0,
  kPotentiallyPermit: 1,
};

// Enum: SCTAuditingMode
network.mojom.SCTAuditingMode = {
  kDisabled: 0,
  kEnhancedSafeBrowsingReporting: 1,
  kHashdance: 2,
};

// Enum: DomainReliabilityClearMode
network.mojom.DomainReliabilityClearMode = {
  CLEAR_CONTEXTS: 0,
  CLEAR_BEACONS: 1,
};

// Interface: CustomProxyConnectionObserver
network.mojom.CustomProxyConnectionObserver = {};

network.mojom.CustomProxyConnectionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.CustomProxyConnectionObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CustomProxyConnectionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.CustomProxyConnectionObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.CustomProxyConnectionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.CustomProxyConnectionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFallback(bad_chain, net_error) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.CustomProxyConnectionObserver_OnFallback_ParamsSpec,
      null,
      null,
      [bad_chain, net_error],
      undefined,
      undefined
    );
  }

  onTunnelHeadersReceived(proxy_chain, chain_index, response_headers) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_ParamsSpec,
      null,
      null,
      [proxy_chain, chain_index, response_headers],
      undefined,
      undefined
    );
  }

};

network.mojom.CustomProxyConnectionObserver.getRemote = function() {
  let remote = new network.mojom.CustomProxyConnectionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CustomProxyConnectionObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnFallback
network.mojom.CustomProxyConnectionObserver_OnFallback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CustomProxyConnectionObserver.OnFallback_Params',
      packedSize: 24,
      fields: [
        { name: 'bad_chain', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'net_error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnTunnelHeadersReceived
network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CustomProxyConnectionObserver.OnTunnelHeadersReceived_Params',
      packedSize: 32,
      fields: [
        { name: 'proxy_chain', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'chain_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'response_headers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
network.mojom.CustomProxyConnectionObserverPtr = network.mojom.CustomProxyConnectionObserverRemote;
network.mojom.CustomProxyConnectionObserverRequest = network.mojom.CustomProxyConnectionObserverPendingReceiver;


// Interface: CustomProxyConfigClient
network.mojom.CustomProxyConfigClient = {};

network.mojom.CustomProxyConfigClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.CustomProxyConfigClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CustomProxyConfigClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.CustomProxyConfigClientPendingReceiver,
      handle);
    this.$ = new network.mojom.CustomProxyConfigClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.CustomProxyConfigClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCustomProxyConfigUpdated(proxy_config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ParamsSpec,
      null,
      null,
      [proxy_config],
      undefined,
      undefined
    );
  }

};

network.mojom.CustomProxyConfigClient.getRemote = function() {
  let remote = new network.mojom.CustomProxyConfigClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CustomProxyConfigClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnCustomProxyConfigUpdated
network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CustomProxyConfigClient.OnCustomProxyConfigUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'proxy_config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.CustomProxyConfigClientPtr = network.mojom.CustomProxyConfigClientRemote;
network.mojom.CustomProxyConfigClientRequest = network.mojom.CustomProxyConfigClientPendingReceiver;


// Interface: TrustedHeaderClient
network.mojom.TrustedHeaderClient = {};

network.mojom.TrustedHeaderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.TrustedHeaderClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TrustedHeaderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.TrustedHeaderClientPendingReceiver,
      handle);
    this.$ = new network.mojom.TrustedHeaderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.TrustedHeaderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBeforeSendHeaders(headers) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ParamsSpec,
      network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParamsSpec,
      network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParamsSpec,
      [headers],
      undefined,
      undefined
    );
  }

  onHeadersReceived(headers, remote_endpoint, ssl_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.TrustedHeaderClient_OnHeadersReceived_ParamsSpec,
      network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParamsSpec,
      network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParamsSpec,
      [headers, remote_endpoint, ssl_info],
      undefined,
      undefined
    );
  }

};

network.mojom.TrustedHeaderClient.getRemote = function() {
  let remote = new network.mojom.TrustedHeaderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TrustedHeaderClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnBeforeSendHeaders
network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustedHeaderClient.OnBeforeSendHeaders_Params',
      packedSize: 16,
      fields: [
        { name: 'headers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustedHeaderClient.OnBeforeSendHeaders_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'headers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnHeadersReceived
network.mojom.TrustedHeaderClient_OnHeadersReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustedHeaderClient.OnHeadersReceived_Params',
      packedSize: 32,
      fields: [
        { name: 'headers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'remote_endpoint', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'ssl_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustedHeaderClient.OnHeadersReceived_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'headers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'preserve_fragment_on_redirect_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
network.mojom.TrustedHeaderClientPtr = network.mojom.TrustedHeaderClientRemote;
network.mojom.TrustedHeaderClientRequest = network.mojom.TrustedHeaderClientPendingReceiver;


// Interface: TrustedURLLoaderHeaderClient
network.mojom.TrustedURLLoaderHeaderClient = {};

network.mojom.TrustedURLLoaderHeaderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.TrustedURLLoaderHeaderClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TrustedURLLoaderHeaderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.TrustedURLLoaderHeaderClientPendingReceiver,
      handle);
    this.$ = new network.mojom.TrustedURLLoaderHeaderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.TrustedURLLoaderHeaderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLoaderCreated(request_id, header_client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_ParamsSpec,
      null,
      null,
      [request_id, header_client],
      undefined,
      undefined
    );
  }

  onLoaderForCorsPreflightCreated(request, header_client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_ParamsSpec,
      null,
      null,
      [request, header_client],
      undefined,
      undefined
    );
  }

};

network.mojom.TrustedURLLoaderHeaderClient.getRemote = function() {
  let remote = new network.mojom.TrustedURLLoaderHeaderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TrustedURLLoaderHeaderClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnLoaderCreated
network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustedURLLoaderHeaderClient.OnLoaderCreated_Params',
      packedSize: 24,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'header_client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnLoaderForCorsPreflightCreated
network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustedURLLoaderHeaderClient.OnLoaderForCorsPreflightCreated_Params',
      packedSize: 24,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'header_client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
network.mojom.TrustedURLLoaderHeaderClientPtr = network.mojom.TrustedURLLoaderHeaderClientRemote;
network.mojom.TrustedURLLoaderHeaderClientRequest = network.mojom.TrustedURLLoaderHeaderClientPendingReceiver;


// Interface: PreloadedSharedDictionaryInfoHandle
network.mojom.PreloadedSharedDictionaryInfoHandle = {};

network.mojom.PreloadedSharedDictionaryInfoHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.PreloadedSharedDictionaryInfoHandleRemote = class {
  static get $interfaceName() {
    return 'network.mojom.PreloadedSharedDictionaryInfoHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.PreloadedSharedDictionaryInfoHandlePendingReceiver,
      handle);
    this.$ = new network.mojom.PreloadedSharedDictionaryInfoHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.PreloadedSharedDictionaryInfoHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

network.mojom.PreloadedSharedDictionaryInfoHandle.getRemote = function() {
  let remote = new network.mojom.PreloadedSharedDictionaryInfoHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.PreloadedSharedDictionaryInfoHandle',
    'context');
  return remote.$;
};

// Legacy compatibility
network.mojom.PreloadedSharedDictionaryInfoHandlePtr = network.mojom.PreloadedSharedDictionaryInfoHandleRemote;
network.mojom.PreloadedSharedDictionaryInfoHandleRequest = network.mojom.PreloadedSharedDictionaryInfoHandlePendingReceiver;


// Interface: NetworkContext
network.mojom.NetworkContext = {};

network.mojom.NetworkContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetworkContextRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetworkContextPendingReceiver,
      handle);
    this.$ = new network.mojom.NetworkContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.NetworkContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.NetworkContext_SetClient_ParamsSpec,
      null,
      null,
      [client],
      undefined,
      undefined
    );
  }

  createURLLoaderFactory(url_loader_factory, params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.NetworkContext_CreateURLLoaderFactory_ParamsSpec,
      null,
      null,
      [url_loader_factory, params],
      undefined,
      undefined
    );
  }

  resetURLLoaderFactories() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.NetworkContext_ResetURLLoaderFactories_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  getViaObliviousHttp(request, client) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.NetworkContext_GetViaObliviousHttp_ParamsSpec,
      null,
      null,
      [request, client],
      undefined,
      undefined
    );
  }

  getCookieManager(cookie_manager) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.NetworkContext_GetCookieManager_ParamsSpec,
      null,
      null,
      [cookie_manager],
      undefined,
      undefined
    );
  }

  getRestrictedCookieManager(restricted_cookie_manager, role, origin, isolation_info, cookie_setting_overrides, devtools_cookie_setting_overrides, cookie_observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.NetworkContext_GetRestrictedCookieManager_ParamsSpec,
      null,
      null,
      [restricted_cookie_manager, role, origin, isolation_info, cookie_setting_overrides, devtools_cookie_setting_overrides, cookie_observer],
      undefined,
      undefined
    );
  }

  getTrustTokenQueryAnswerer(trust_token_query_answerer, top_frame_origin) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_ParamsSpec,
      null,
      null,
      [trust_token_query_answerer, top_frame_origin],
      undefined,
      undefined
    );
  }

  clearTrustTokenData(filter) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      network.mojom.NetworkContext_ClearTrustTokenData_ParamsSpec,
      null,
      null,
      [filter],
      undefined,
      undefined
    );
  }

  clearTrustTokenSessionOnlyData() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ParamsSpec,
      network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParamsSpec,
      network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getStoredTrustTokenCounts() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      network.mojom.NetworkContext_GetStoredTrustTokenCounts_ParamsSpec,
      network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParamsSpec,
      network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getPrivateStateTokenRedemptionRecords() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ParamsSpec,
      network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParamsSpec,
      network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  deleteStoredTrustTokens(issuer) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      network.mojom.NetworkContext_DeleteStoredTrustTokens_ParamsSpec,
      network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParamsSpec,
      network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParamsSpec,
      [issuer],
      undefined,
      undefined
    );
  }

  setBlockTrustTokens(block) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      network.mojom.NetworkContext_SetBlockTrustTokens_ParamsSpec,
      null,
      null,
      [block],
      undefined,
      undefined
    );
  }

  clearNetworkingHistoryBetween(start_time, end_time) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ParamsSpec,
      null,
      null,
      [start_time, end_time],
      undefined,
      undefined
    );
  }

  clearHttpCache(start_time, end_time, filter) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      network.mojom.NetworkContext_ClearHttpCache_ParamsSpec,
      null,
      null,
      [start_time, end_time, filter],
      undefined,
      undefined
    );
  }

  computeHttpCacheSize(start_time, end_time) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      network.mojom.NetworkContext_ComputeHttpCacheSize_ParamsSpec,
      network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParamsSpec,
      network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParamsSpec,
      [start_time, end_time],
      undefined,
      undefined
    );
  }

  notifyBrowserIdle() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      network.mojom.NetworkContext_NotifyBrowserIdle_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  notifyExternalCacheHit(url, http_method, key, include_credentials) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      network.mojom.NetworkContext_NotifyExternalCacheHit_ParamsSpec,
      null,
      null,
      [url, http_method, key, include_credentials],
      undefined,
      undefined
    );
  }

  clearHostCache(filter) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      network.mojom.NetworkContext_ClearHostCache_ParamsSpec,
      null,
      null,
      [filter],
      undefined,
      undefined
    );
  }

  clearHttpAuthCache(start_time, end_time, filter) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      network.mojom.NetworkContext_ClearHttpAuthCache_ParamsSpec,
      null,
      null,
      [start_time, end_time, filter],
      undefined,
      undefined
    );
  }

  clearCorsPreflightCache(filter) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      network.mojom.NetworkContext_ClearCorsPreflightCache_ParamsSpec,
      null,
      null,
      [filter],
      undefined,
      undefined
    );
  }

  clearReportingCacheReports(filter) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      network.mojom.NetworkContext_ClearReportingCacheReports_ParamsSpec,
      null,
      null,
      [filter],
      undefined,
      undefined
    );
  }

  clearReportingCacheClients(filter) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      network.mojom.NetworkContext_ClearReportingCacheClients_ParamsSpec,
      null,
      null,
      [filter],
      undefined,
      undefined
    );
  }

  clearNetworkErrorLogging(filter) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      network.mojom.NetworkContext_ClearNetworkErrorLogging_ParamsSpec,
      null,
      null,
      [filter],
      undefined,
      undefined
    );
  }

  clearDomainReliability(filter, mode) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      network.mojom.NetworkContext_ClearDomainReliability_ParamsSpec,
      null,
      null,
      [filter, mode],
      undefined,
      undefined
    );
  }

  clearSharedDictionaryCache(start_time, end_time, filter) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      network.mojom.NetworkContext_ClearSharedDictionaryCache_ParamsSpec,
      null,
      null,
      [start_time, end_time, filter],
      undefined,
      undefined
    );
  }

  clearSharedDictionaryCacheForIsolationKey(isolation_key) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ParamsSpec,
      null,
      null,
      [isolation_key],
      undefined,
      undefined
    );
  }

  setDocumentReportingEndpoints(reporting_source, origin, isolation_info, endpoints) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      network.mojom.NetworkContext_SetDocumentReportingEndpoints_ParamsSpec,
      null,
      null,
      [reporting_source, origin, isolation_info, endpoints],
      undefined,
      undefined
    );
  }

  setEnterpriseReportingEndpoints(endpoints) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      network.mojom.NetworkContext_SetEnterpriseReportingEndpoints_ParamsSpec,
      null,
      null,
      [endpoints],
      undefined,
      undefined
    );
  }

  sendReportsAndRemoveSource(reporting_source) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      network.mojom.NetworkContext_SendReportsAndRemoveSource_ParamsSpec,
      null,
      null,
      [reporting_source],
      undefined,
      undefined
    );
  }

  queueReport(type, group, url, reporting_source, network_anonymization_key, body) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      network.mojom.NetworkContext_QueueReport_ParamsSpec,
      null,
      null,
      [type, group, url, reporting_source, network_anonymization_key, body],
      undefined,
      undefined
    );
  }

  queueEnterpriseReport(type, group, url, body) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      network.mojom.NetworkContext_QueueEnterpriseReport_ParamsSpec,
      null,
      null,
      [type, group, url, body],
      undefined,
      undefined
    );
  }

  queueSignedExchangeReport(report, network_anonymization_key) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      network.mojom.NetworkContext_QueueSignedExchangeReport_ParamsSpec,
      null,
      null,
      [report, network_anonymization_key],
      undefined,
      undefined
    );
  }

  closeAllConnections() {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      network.mojom.NetworkContext_CloseAllConnections_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  closeIdleConnections() {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      network.mojom.NetworkContext_CloseIdleConnections_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setNetworkConditions(throttling_profile_id, conditions) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      network.mojom.NetworkContext_SetNetworkConditions_ParamsSpec,
      null,
      null,
      [throttling_profile_id, conditions],
      undefined,
      undefined
    );
  }

  setAcceptLanguage(new_accept_language) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      network.mojom.NetworkContext_SetAcceptLanguage_ParamsSpec,
      null,
      null,
      [new_accept_language],
      undefined,
      undefined
    );
  }

  setEnableReferrers(enable_referrers) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      network.mojom.NetworkContext_SetEnableReferrers_ParamsSpec,
      null,
      null,
      [enable_referrers],
      undefined,
      undefined
    );
  }

  setCTPolicy(ct_policy) {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      network.mojom.NetworkContext_SetCTPolicy_ParamsSpec,
      null,
      null,
      [ct_policy],
      undefined,
      undefined
    );
  }

  createUDPSocket(receiver, listener) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      network.mojom.NetworkContext_CreateUDPSocket_ParamsSpec,
      null,
      null,
      [receiver, listener],
      undefined,
      undefined
    );
  }

  createRestrictedUDPSocket(addr, mode, traffic_annotation, params, receiver, listener, allow_multicast) {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      network.mojom.NetworkContext_CreateRestrictedUDPSocket_ParamsSpec,
      network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParamsSpec,
      network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParamsSpec,
      [addr, mode, traffic_annotation, params, receiver, listener, allow_multicast],
      undefined,
      undefined
    );
  }

  createTCPServerSocket(local_addr, options, traffic_annotation, socket) {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      network.mojom.NetworkContext_CreateTCPServerSocket_ParamsSpec,
      network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParamsSpec,
      network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParamsSpec,
      [local_addr, options, traffic_annotation, socket],
      undefined,
      undefined
    );
  }

  createTCPConnectedSocket(local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer) {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      network.mojom.NetworkContext_CreateTCPConnectedSocket_ParamsSpec,
      network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParamsSpec,
      network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParamsSpec,
      [local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer],
      undefined,
      undefined
    );
  }

  createTCPBoundSocket(local_addr, traffic_annotation, socket) {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      network.mojom.NetworkContext_CreateTCPBoundSocket_ParamsSpec,
      network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParamsSpec,
      network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParamsSpec,
      [local_addr, traffic_annotation, socket],
      undefined,
      undefined
    );
  }

  createProxyResolvingSocketFactory(factory) {
    // Ordinal: 44
    return this.proxy.sendMessage(
      44,  // ordinal
      network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_ParamsSpec,
      null,
      null,
      [factory],
      undefined,
      undefined
    );
  }

  lookUpProxyForURL(url, network_anonymization_key, proxy_lookup_client) {
    // Ordinal: 45
    return this.proxy.sendMessage(
      45,  // ordinal
      network.mojom.NetworkContext_LookUpProxyForURL_ParamsSpec,
      null,
      null,
      [url, network_anonymization_key, proxy_lookup_client],
      undefined,
      undefined
    );
  }

  forceReloadProxyConfig() {
    // Ordinal: 46
    return this.proxy.sendMessage(
      46,  // ordinal
      network.mojom.NetworkContext_ForceReloadProxyConfig_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  clearBadProxiesCache() {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      network.mojom.NetworkContext_ClearBadProxiesCache_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  createWebSocket(url, requested_protocols, site_for_cookies, storage_access_api_status, isolation_info, additional_headers, process_id, origin, client_security_state, options, traffic_annotation, handshake_client, url_loader_network_observer, auth_handler, header_client, throttling_profile_id) {
    // Ordinal: 48
    return this.proxy.sendMessage(
      48,  // ordinal
      network.mojom.NetworkContext_CreateWebSocket_ParamsSpec,
      null,
      null,
      [url, requested_protocols, site_for_cookies, storage_access_api_status, isolation_info, additional_headers, process_id, origin, client_security_state, options, traffic_annotation, handshake_client, url_loader_network_observer, auth_handler, header_client, throttling_profile_id],
      undefined,
      undefined
    );
  }

  createWebTransport(url, origin, network_anonymization_key, fingerprints, application_protocols, handshake_client, url_loader_network_observer, client_security_state) {
    // Ordinal: 49
    return this.proxy.sendMessage(
      49,  // ordinal
      network.mojom.NetworkContext_CreateWebTransport_ParamsSpec,
      null,
      null,
      [url, origin, network_anonymization_key, fingerprints, application_protocols, handshake_client, url_loader_network_observer, client_security_state],
      undefined,
      undefined
    );
  }

  createNetLogExporter(receiver) {
    // Ordinal: 50
    return this.proxy.sendMessage(
      50,  // ordinal
      network.mojom.NetworkContext_CreateNetLogExporter_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  preconnectSockets(num_streams, url, credentials_mode, network_anonymization_key, traffic_annotation, keepalive_config, observer_client) {
    // Ordinal: 51
    return this.proxy.sendMessage(
      51,  // ordinal
      network.mojom.NetworkContext_PreconnectSockets_ParamsSpec,
      null,
      null,
      [num_streams, url, credentials_mode, network_anonymization_key, traffic_annotation, keepalive_config, observer_client],
      undefined,
      undefined
    );
  }

  createP2PSocketManager(network_anonymization_key, client, trusted_socket_manager, socket_manager) {
    // Ordinal: 52
    return this.proxy.sendMessage(
      52,  // ordinal
      network.mojom.NetworkContext_CreateP2PSocketManager_ParamsSpec,
      null,
      null,
      [network_anonymization_key, client, trusted_socket_manager, socket_manager],
      undefined,
      undefined
    );
  }

  createMdnsResponder(responder_receiver) {
    // Ordinal: 53
    return this.proxy.sendMessage(
      53,  // ordinal
      network.mojom.NetworkContext_CreateMdnsResponder_ParamsSpec,
      null,
      null,
      [responder_receiver],
      undefined,
      undefined
    );
  }

  resolveHost(host, network_anonymization_key, optional_parameters, response_client) {
    // Ordinal: 54
    return this.proxy.sendMessage(
      54,  // ordinal
      network.mojom.NetworkContext_ResolveHost_ParamsSpec,
      null,
      null,
      [host, network_anonymization_key, optional_parameters, response_client],
      undefined,
      undefined
    );
  }

  createHostResolver(config_overrides, host_resolver) {
    // Ordinal: 55
    return this.proxy.sendMessage(
      55,  // ordinal
      network.mojom.NetworkContext_CreateHostResolver_ParamsSpec,
      null,
      null,
      [config_overrides, host_resolver],
      undefined,
      undefined
    );
  }

  verifyCert(certificate, host_port, ocsp_response, sct_list) {
    // Ordinal: 56
    return this.proxy.sendMessage(
      56,  // ordinal
      network.mojom.NetworkContext_VerifyCert_ParamsSpec,
      network.mojom.NetworkContext_VerifyCert_ResponseParamsSpec,
      network.mojom.NetworkContext_VerifyCert_ResponseParamsSpec,
      [certificate, host_port, ocsp_response, sct_list],
      undefined,
      undefined
    );
  }

  verifyCertForSignedExchange(certificate, host_port, ocsp_response, sct_list) {
    // Ordinal: 57
    return this.proxy.sendMessage(
      57,  // ordinal
      network.mojom.NetworkContext_VerifyCertForSignedExchange_ParamsSpec,
      network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParamsSpec,
      network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParamsSpec,
      [certificate, host_port, ocsp_response, sct_list],
      undefined,
      undefined
    );
  }

  verify2QwacCertBinding(binding, hostname, tls_certificate) {
    // Ordinal: 58
    return this.proxy.sendMessage(
      58,  // ordinal
      network.mojom.NetworkContext_Verify2QwacCertBinding_ParamsSpec,
      network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParamsSpec,
      network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParamsSpec,
      [binding, hostname, tls_certificate],
      undefined,
      undefined
    );
  }

  addHSTS(host, expiry, include_subdomains) {
    // Ordinal: 59
    return this.proxy.sendMessage(
      59,  // ordinal
      network.mojom.NetworkContext_AddHSTS_ParamsSpec,
      null,
      null,
      [host, expiry, include_subdomains],
      undefined,
      undefined
    );
  }

  isHSTSActiveForHost(host, is_top_level_nav) {
    // Ordinal: 60
    return this.proxy.sendMessage(
      60,  // ordinal
      network.mojom.NetworkContext_IsHSTSActiveForHost_ParamsSpec,
      network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParamsSpec,
      network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParamsSpec,
      [host, is_top_level_nav],
      undefined,
      undefined
    );
  }

  getHSTSState(domain) {
    // Ordinal: 61
    return this.proxy.sendMessage(
      61,  // ordinal
      network.mojom.NetworkContext_GetHSTSState_ParamsSpec,
      network.mojom.NetworkContext_GetHSTSState_ResponseParamsSpec,
      network.mojom.NetworkContext_GetHSTSState_ResponseParamsSpec,
      [domain],
      undefined,
      undefined
    );
  }

  setCorsOriginAccessListsForOrigin(source_origin, allow_patterns, block_patterns) {
    // Ordinal: 62
    return this.proxy.sendMessage(
      62,  // ordinal
      network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ParamsSpec,
      null,
      null,
      [source_origin, allow_patterns, block_patterns],
      undefined,
      undefined
    );
  }

  deleteDynamicDataForHost(host) {
    // Ordinal: 63
    return this.proxy.sendMessage(
      63,  // ordinal
      network.mojom.NetworkContext_DeleteDynamicDataForHost_ParamsSpec,
      network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParamsSpec,
      network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParamsSpec,
      [host],
      undefined,
      undefined
    );
  }

  setSplitAuthCacheByNetworkAnonymizationKey(split_auth_cache_by_network_anonymization_key) {
    // Ordinal: 64
    return this.proxy.sendMessage(
      64,  // ordinal
      network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_ParamsSpec,
      null,
      null,
      [split_auth_cache_by_network_anonymization_key],
      undefined,
      undefined
    );
  }

  saveHttpAuthCacheProxyEntries() {
    // Ordinal: 65
    return this.proxy.sendMessage(
      65,  // ordinal
      network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ParamsSpec,
      network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParamsSpec,
      network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  loadHttpAuthCacheProxyEntries(cache_key) {
    // Ordinal: 66
    return this.proxy.sendMessage(
      66,  // ordinal
      network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ParamsSpec,
      null,
      null,
      [cache_key],
      undefined,
      undefined
    );
  }

  addAuthCacheEntry(challenge, network_anonymization_key, credentials) {
    // Ordinal: 67
    return this.proxy.sendMessage(
      67,  // ordinal
      network.mojom.NetworkContext_AddAuthCacheEntry_ParamsSpec,
      null,
      null,
      [challenge, network_anonymization_key, credentials],
      undefined,
      undefined
    );
  }

  setCorsNonWildcardRequestHeadersSupport(value) {
    // Ordinal: 68
    return this.proxy.sendMessage(
      68,  // ordinal
      network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_ParamsSpec,
      null,
      null,
      [value],
      undefined,
      undefined
    );
  }

  lookupProxyAuthCredentials(proxy_server, auth_scheme, realm) {
    // Ordinal: 69
    return this.proxy.sendMessage(
      69,  // ordinal
      network.mojom.NetworkContext_LookupProxyAuthCredentials_ParamsSpec,
      network.mojom.NetworkContext_LookupProxyAuthCredentials_ResponseParamsSpec,
      network.mojom.NetworkContext_LookupProxyAuthCredentials_ResponseParamsSpec,
      [proxy_server, auth_scheme, realm],
      undefined,
      undefined
    );
  }

  enableStaticKeyPinningForTesting() {
    // Ordinal: 70
    return this.proxy.sendMessage(
      70,  // ordinal
      network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  verifyCertificateForTesting(certificate, hostname, ocsp_response, sct_list) {
    // Ordinal: 71
    return this.proxy.sendMessage(
      71,  // ordinal
      network.mojom.NetworkContext_VerifyCertificateForTesting_ParamsSpec,
      network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParamsSpec,
      network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParamsSpec,
      [certificate, hostname, ocsp_response, sct_list],
      undefined,
      undefined
    );
  }

  getTrustAnchorIDsForTesting() {
    // Ordinal: 72
    return this.proxy.sendMessage(
      72,  // ordinal
      network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ParamsSpec,
      network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParamsSpec,
      network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  addDomainReliabilityContextForTesting(origin, upload_url) {
    // Ordinal: 73
    return this.proxy.sendMessage(
      73,  // ordinal
      network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ParamsSpec,
      null,
      null,
      [origin, upload_url],
      undefined,
      undefined
    );
  }

  forceDomainReliabilityUploadsForTesting() {
    // Ordinal: 74
    return this.proxy.sendMessage(
      74,  // ordinal
      network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setSCTAuditingMode(mode) {
    // Ordinal: 75
    return this.proxy.sendMessage(
      75,  // ordinal
      network.mojom.NetworkContext_SetSCTAuditingMode_ParamsSpec,
      null,
      null,
      [mode],
      undefined,
      undefined
    );
  }

  addReportingApiObserver(observer) {
    // Ordinal: 76
    return this.proxy.sendMessage(
      76,  // ordinal
      network.mojom.NetworkContext_AddReportingApiObserver_ParamsSpec,
      null,
      null,
      [observer],
      undefined,
      undefined
    );
  }

  getSharedDictionaryUsageInfo() {
    // Ordinal: 77
    return this.proxy.sendMessage(
      77,  // ordinal
      network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ParamsSpec,
      network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParamsSpec,
      network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getSharedDictionaryInfo(isolation_key) {
    // Ordinal: 78
    return this.proxy.sendMessage(
      78,  // ordinal
      network.mojom.NetworkContext_GetSharedDictionaryInfo_ParamsSpec,
      network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParamsSpec,
      network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParamsSpec,
      [isolation_key],
      undefined,
      undefined
    );
  }

  getSharedDictionaryOriginsBetween(start_time, end_time) {
    // Ordinal: 79
    return this.proxy.sendMessage(
      79,  // ordinal
      network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ParamsSpec,
      network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParamsSpec,
      network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParamsSpec,
      [start_time, end_time],
      undefined,
      undefined
    );
  }

  setSharedDictionaryCacheMaxSize(cache_max_size) {
    // Ordinal: 80
    return this.proxy.sendMessage(
      80,  // ordinal
      network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_ParamsSpec,
      null,
      null,
      [cache_max_size],
      undefined,
      undefined
    );
  }

  preloadSharedDictionaryInfoForDocument(urls, preload_handle) {
    // Ordinal: 81
    return this.proxy.sendMessage(
      81,  // ordinal
      network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_ParamsSpec,
      null,
      null,
      [urls, preload_handle],
      undefined,
      undefined
    );
  }

  hasPreloadedSharedDictionaryInfoForTesting() {
    // Ordinal: 82
    return this.proxy.sendMessage(
      82,  // ordinal
      network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ParamsSpec,
      network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParamsSpec,
      network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  flushCachedClientCertIfNeeded(host, certificate) {
    // Ordinal: 83
    return this.proxy.sendMessage(
      83,  // ordinal
      network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_ParamsSpec,
      null,
      null,
      [host, certificate],
      undefined,
      undefined
    );
  }

  flushMatchingCachedClientCert(certificate) {
    // Ordinal: 84
    return this.proxy.sendMessage(
      84,  // ordinal
      network.mojom.NetworkContext_FlushMatchingCachedClientCert_ParamsSpec,
      null,
      null,
      [certificate],
      undefined,
      undefined
    );
  }

  flushClientCertCache() {
    // Ordinal: 85
    return this.proxy.sendMessage(
      85,  // ordinal
      network.mojom.NetworkContext_FlushClientCertCache_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  revokeNetworkForNonces(nonces_to_patterns) {
    // Ordinal: 86
    return this.proxy.sendMessage(
      86,  // ordinal
      network.mojom.NetworkContext_RevokeNetworkForNonces_ParamsSpec,
      null,
      null,
      [nonces_to_patterns],
      undefined,
      undefined
    );
  }

  clearNonces(nonces) {
    // Ordinal: 87
    return this.proxy.sendMessage(
      87,  // ordinal
      network.mojom.NetworkContext_ClearNonces_ParamsSpec,
      null,
      null,
      [nonces],
      undefined,
      undefined
    );
  }

  exemptUrlFromNetworkRevocationForNonce(exempted_url, nonce) {
    // Ordinal: 88
    return this.proxy.sendMessage(
      88,  // ordinal
      network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ParamsSpec,
      null,
      null,
      [exempted_url, nonce],
      undefined,
      undefined
    );
  }

  prefetch(request_id, options, request, traffic_annotation) {
    // Ordinal: 89
    return this.proxy.sendMessage(
      89,  // ordinal
      network.mojom.NetworkContext_Prefetch_ParamsSpec,
      null,
      null,
      [request_id, options, request, traffic_annotation],
      undefined,
      undefined
    );
  }

  getBoundNetworkForTesting() {
    // Ordinal: 90
    return this.proxy.sendMessage(
      90,  // ordinal
      network.mojom.NetworkContext_GetBoundNetworkForTesting_ParamsSpec,
      network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParamsSpec,
      network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getDeviceBoundSessionManager(device_bound_session_manager) {
    // Ordinal: 91
    return this.proxy.sendMessage(
      91,  // ordinal
      network.mojom.NetworkContext_GetDeviceBoundSessionManager_ParamsSpec,
      null,
      null,
      [device_bound_session_manager],
      undefined,
      undefined
    );
  }

  addQuicHints(origins, network_anonymization_key) {
    // Ordinal: 92
    return this.proxy.sendMessage(
      92,  // ordinal
      network.mojom.NetworkContext_AddQuicHints_ParamsSpec,
      null,
      null,
      [origins, network_anonymization_key],
      undefined,
      undefined
    );
  }

};

network.mojom.NetworkContext.getRemote = function() {
  let remote = new network.mojom.NetworkContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkContext',
    'context');
  return remote.$;
};

// ParamsSpec for SetClient
network.mojom.NetworkContext_SetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateURLLoaderFactory
network.mojom.NetworkContext_CreateURLLoaderFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateURLLoaderFactory_Params',
      packedSize: 24,
      fields: [
        { name: 'url_loader_factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ResetURLLoaderFactories
network.mojom.NetworkContext_ResetURLLoaderFactories_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ResetURLLoaderFactories_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetViaObliviousHttp
network.mojom.NetworkContext_GetViaObliviousHttp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetViaObliviousHttp_Params',
      packedSize: 24,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetCookieManager
network.mojom.NetworkContext_GetCookieManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetCookieManager_Params',
      packedSize: 16,
      fields: [
        { name: 'cookie_manager', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetRestrictedCookieManager
network.mojom.NetworkContext_GetRestrictedCookieManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetRestrictedCookieManager_Params',
      packedSize: 64,
      fields: [
        { name: 'restricted_cookie_manager', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'role', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'origin', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'isolation_info', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'cookie_setting_overrides', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'devtools_cookie_setting_overrides', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'cookie_observer', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// ParamsSpec for GetTrustTokenQueryAnswerer
network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetTrustTokenQueryAnswerer_Params',
      packedSize: 24,
      fields: [
        { name: 'trust_token_query_answerer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'top_frame_origin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ClearTrustTokenData
network.mojom.NetworkContext_ClearTrustTokenData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearTrustTokenData_Params',
      packedSize: 16,
      fields: [
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearTrustTokenSessionOnlyData
network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearTrustTokenSessionOnlyData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearTrustTokenSessionOnlyData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'any_data_deleted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetStoredTrustTokenCounts
network.mojom.NetworkContext_GetStoredTrustTokenCounts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetStoredTrustTokenCounts_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetStoredTrustTokenCounts_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tokens', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPrivateStateTokenRedemptionRecords
network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetPrivateStateTokenRedemptionRecords_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetPrivateStateTokenRedemptionRecords_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'issuer_redemption_record_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteStoredTrustTokens
network.mojom.NetworkContext_DeleteStoredTrustTokens_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.DeleteStoredTrustTokens_Params',
      packedSize: 16,
      fields: [
        { name: 'issuer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.DeleteStoredTrustTokens_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetBlockTrustTokens
network.mojom.NetworkContext_SetBlockTrustTokens_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetBlockTrustTokens_Params',
      packedSize: 16,
      fields: [
        { name: 'block', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearNetworkingHistoryBetween
network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearNetworkingHistoryBetween_Params',
      packedSize: 24,
      fields: [
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'end_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ClearHttpCache
network.mojom.NetworkContext_ClearHttpCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearHttpCache_Params',
      packedSize: 32,
      fields: [
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'end_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'filter', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ComputeHttpCacheSize
network.mojom.NetworkContext_ComputeHttpCacheSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ComputeHttpCacheSize_Params',
      packedSize: 24,
      fields: [
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'end_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ComputeHttpCacheSize_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'is_upper_bound', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'size_or_error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for NotifyBrowserIdle
network.mojom.NetworkContext_NotifyBrowserIdle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.NotifyBrowserIdle_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for NotifyExternalCacheHit
network.mojom.NetworkContext_NotifyExternalCacheHit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.NotifyExternalCacheHit_Params',
      packedSize: 40,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'http_method', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'include_credentials', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for ClearHostCache
network.mojom.NetworkContext_ClearHostCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearHostCache_Params',
      packedSize: 16,
      fields: [
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearHttpAuthCache
network.mojom.NetworkContext_ClearHttpAuthCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearHttpAuthCache_Params',
      packedSize: 32,
      fields: [
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'end_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'filter', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ClearCorsPreflightCache
network.mojom.NetworkContext_ClearCorsPreflightCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearCorsPreflightCache_Params',
      packedSize: 16,
      fields: [
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearReportingCacheReports
network.mojom.NetworkContext_ClearReportingCacheReports_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearReportingCacheReports_Params',
      packedSize: 16,
      fields: [
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearReportingCacheClients
network.mojom.NetworkContext_ClearReportingCacheClients_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearReportingCacheClients_Params',
      packedSize: 16,
      fields: [
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearNetworkErrorLogging
network.mojom.NetworkContext_ClearNetworkErrorLogging_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearNetworkErrorLogging_Params',
      packedSize: 16,
      fields: [
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearDomainReliability
network.mojom.NetworkContext_ClearDomainReliability_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearDomainReliability_Params',
      packedSize: 24,
      fields: [
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'mode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ClearSharedDictionaryCache
network.mojom.NetworkContext_ClearSharedDictionaryCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearSharedDictionaryCache_Params',
      packedSize: 32,
      fields: [
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'end_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'filter', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ClearSharedDictionaryCacheForIsolationKey
network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearSharedDictionaryCacheForIsolationKey_Params',
      packedSize: 16,
      fields: [
        { name: 'isolation_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDocumentReportingEndpoints
network.mojom.NetworkContext_SetDocumentReportingEndpoints_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetDocumentReportingEndpoints_Params',
      packedSize: 40,
      fields: [
        { name: 'reporting_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'isolation_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'endpoints', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for SetEnterpriseReportingEndpoints
network.mojom.NetworkContext_SetEnterpriseReportingEndpoints_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetEnterpriseReportingEndpoints_Params',
      packedSize: 16,
      fields: [
        { name: 'endpoints', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendReportsAndRemoveSource
network.mojom.NetworkContext_SendReportsAndRemoveSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SendReportsAndRemoveSource_Params',
      packedSize: 16,
      fields: [
        { name: 'reporting_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for QueueReport
network.mojom.NetworkContext_QueueReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.QueueReport_Params',
      packedSize: 56,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'group', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'reporting_source', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'network_anonymization_key', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'body', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// ParamsSpec for QueueEnterpriseReport
network.mojom.NetworkContext_QueueEnterpriseReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.QueueEnterpriseReport_Params',
      packedSize: 40,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'group', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'body', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for QueueSignedExchangeReport
network.mojom.NetworkContext_QueueSignedExchangeReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.QueueSignedExchangeReport_Params',
      packedSize: 24,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'network_anonymization_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CloseAllConnections
network.mojom.NetworkContext_CloseAllConnections_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CloseAllConnections_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CloseIdleConnections
network.mojom.NetworkContext_CloseIdleConnections_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CloseIdleConnections_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetNetworkConditions
network.mojom.NetworkContext_SetNetworkConditions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetNetworkConditions_Params',
      packedSize: 24,
      fields: [
        { name: 'throttling_profile_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'conditions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetAcceptLanguage
network.mojom.NetworkContext_SetAcceptLanguage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetAcceptLanguage_Params',
      packedSize: 16,
      fields: [
        { name: 'new_accept_language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetEnableReferrers
network.mojom.NetworkContext_SetEnableReferrers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetEnableReferrers_Params',
      packedSize: 16,
      fields: [
        { name: 'enable_referrers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCTPolicy
network.mojom.NetworkContext_SetCTPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetCTPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'ct_policy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateUDPSocket
network.mojom.NetworkContext_CreateUDPSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateUDPSocket_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'listener', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateRestrictedUDPSocket
network.mojom.NetworkContext_CreateRestrictedUDPSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateRestrictedUDPSocket_Params',
      packedSize: 64,
      fields: [
        { name: 'addr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'mode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'traffic_annotation', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'params', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'receiver', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'listener', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'allow_multicast', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateRestrictedUDPSocket_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'local_addr_out', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateTCPServerSocket
network.mojom.NetworkContext_CreateTCPServerSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateTCPServerSocket_Params',
      packedSize: 40,
      fields: [
        { name: 'local_addr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'traffic_annotation', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'socket', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateTCPServerSocket_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'local_addr_out', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateTCPConnectedSocket
network.mojom.NetworkContext_CreateTCPConnectedSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateTCPConnectedSocket_Params',
      packedSize: 56,
      fields: [
        { name: 'local_addr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'remote_addr_list', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'tcp_connected_socket_options', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'traffic_annotation', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'socket', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'observer', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateTCPConnectedSocket_ResponseParams',
      packedSize: 48,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'local_addr', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'peer_addr', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'receive_stream', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'send_stream', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for CreateTCPBoundSocket
network.mojom.NetworkContext_CreateTCPBoundSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateTCPBoundSocket_Params',
      packedSize: 32,
      fields: [
        { name: 'local_addr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'traffic_annotation', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'socket', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateTCPBoundSocket_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'local_addr', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateProxyResolvingSocketFactory
network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateProxyResolvingSocketFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LookUpProxyForURL
network.mojom.NetworkContext_LookUpProxyForURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.LookUpProxyForURL_Params',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'network_anonymization_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'proxy_lookup_client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ForceReloadProxyConfig
network.mojom.NetworkContext_ForceReloadProxyConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ForceReloadProxyConfig_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ClearBadProxiesCache
network.mojom.NetworkContext_ClearBadProxiesCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearBadProxiesCache_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CreateWebSocket
network.mojom.NetworkContext_CreateWebSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateWebSocket_Params',
      packedSize: 136,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'requested_protocols', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'site_for_cookies', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'storage_access_api_status', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'isolation_info', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'additional_headers', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'process_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'origin', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'client_security_state', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'options', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'traffic_annotation', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'handshake_client', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'url_loader_network_observer', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'auth_handler', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'header_client', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'throttling_profile_id', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 136}]
    }
  }
};

// ParamsSpec for CreateWebTransport
network.mojom.NetworkContext_CreateWebTransport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateWebTransport_Params',
      packedSize: 72,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'network_anonymization_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'fingerprints', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'application_protocols', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'handshake_client', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'url_loader_network_observer', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'client_security_state', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// ParamsSpec for CreateNetLogExporter
network.mojom.NetworkContext_CreateNetLogExporter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateNetLogExporter_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PreconnectSockets
network.mojom.NetworkContext_PreconnectSockets_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.PreconnectSockets_Params',
      packedSize: 64,
      fields: [
        { name: 'num_streams', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'credentials_mode', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'network_anonymization_key', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'traffic_annotation', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'keepalive_config', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'observer_client', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// ParamsSpec for CreateP2PSocketManager
network.mojom.NetworkContext_CreateP2PSocketManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateP2PSocketManager_Params',
      packedSize: 40,
      fields: [
        { name: 'network_anonymization_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'trusted_socket_manager', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'socket_manager', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for CreateMdnsResponder
network.mojom.NetworkContext_CreateMdnsResponder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateMdnsResponder_Params',
      packedSize: 16,
      fields: [
        { name: 'responder_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ResolveHost
network.mojom.NetworkContext_ResolveHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ResolveHost_Params',
      packedSize: 40,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'network_anonymization_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'optional_parameters', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'response_client', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for CreateHostResolver
network.mojom.NetworkContext_CreateHostResolver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateHostResolver_Params',
      packedSize: 24,
      fields: [
        { name: 'config_overrides', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'host_resolver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for VerifyCert
network.mojom.NetworkContext_VerifyCert_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.VerifyCert_Params',
      packedSize: 40,
      fields: [
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'host_port', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'ocsp_response', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'sct_list', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

network.mojom.NetworkContext_VerifyCert_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.VerifyCert_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'cv_result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pkp_bypassed', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for VerifyCertForSignedExchange
network.mojom.NetworkContext_VerifyCertForSignedExchange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.VerifyCertForSignedExchange_Params',
      packedSize: 40,
      fields: [
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'host_port', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'ocsp_response', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'sct_list', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.VerifyCertForSignedExchange_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'cv_result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pkp_bypassed', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for Verify2QwacCertBinding
network.mojom.NetworkContext_Verify2QwacCertBinding_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.Verify2QwacCertBinding_Params',
      packedSize: 32,
      fields: [
        { name: 'binding', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'hostname', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'tls_certificate', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.Verify2QwacCertBinding_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'verified_cert', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddHSTS
network.mojom.NetworkContext_AddHSTS_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.AddHSTS_Params',
      packedSize: 32,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'expiry', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'include_subdomains', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for IsHSTSActiveForHost
network.mojom.NetworkContext_IsHSTSActiveForHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.IsHSTSActiveForHost_Params',
      packedSize: 24,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_top_level_nav', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.IsHSTSActiveForHost_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetHSTSState
network.mojom.NetworkContext_GetHSTSState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetHSTSState_Params',
      packedSize: 16,
      fields: [
        { name: 'domain', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.NetworkContext_GetHSTSState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetHSTSState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCorsOriginAccessListsForOrigin
network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetCorsOriginAccessListsForOrigin_Params',
      packedSize: 32,
      fields: [
        { name: 'source_origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'allow_patterns', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'block_patterns', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for DeleteDynamicDataForHost
network.mojom.NetworkContext_DeleteDynamicDataForHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.DeleteDynamicDataForHost_Params',
      packedSize: 16,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.DeleteDynamicDataForHost_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSplitAuthCacheByNetworkAnonymizationKey
network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetSplitAuthCacheByNetworkAnonymizationKey_Params',
      packedSize: 16,
      fields: [
        { name: 'split_auth_cache_by_network_anonymization_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SaveHttpAuthCacheProxyEntries
network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SaveHttpAuthCacheProxyEntries_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SaveHttpAuthCacheProxyEntries_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'cache_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadHttpAuthCacheProxyEntries
network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.LoadHttpAuthCacheProxyEntries_Params',
      packedSize: 16,
      fields: [
        { name: 'cache_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddAuthCacheEntry
network.mojom.NetworkContext_AddAuthCacheEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.AddAuthCacheEntry_Params',
      packedSize: 32,
      fields: [
        { name: 'challenge', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'network_anonymization_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'credentials', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for SetCorsNonWildcardRequestHeadersSupport
network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetCorsNonWildcardRequestHeadersSupport_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LookupProxyAuthCredentials
network.mojom.NetworkContext_LookupProxyAuthCredentials_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.LookupProxyAuthCredentials_Params',
      packedSize: 32,
      fields: [
        { name: 'proxy_server', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'auth_scheme', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'realm', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

network.mojom.NetworkContext_LookupProxyAuthCredentials_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.LookupProxyAuthCredentials_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'credentials', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnableStaticKeyPinningForTesting
network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.EnableStaticKeyPinningForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for VerifyCertificateForTesting
network.mojom.NetworkContext_VerifyCertificateForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.VerifyCertificateForTesting_Params',
      packedSize: 40,
      fields: [
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'hostname', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'ocsp_response', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'sct_list', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.VerifyCertificateForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetTrustAnchorIDsForTesting
network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetTrustAnchorIDsForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetTrustAnchorIDsForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'trust_anchor_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddDomainReliabilityContextForTesting
network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.AddDomainReliabilityContextForTesting_Params',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'upload_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ForceDomainReliabilityUploadsForTesting
network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ForceDomainReliabilityUploadsForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetSCTAuditingMode
network.mojom.NetworkContext_SetSCTAuditingMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetSCTAuditingMode_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddReportingApiObserver
network.mojom.NetworkContext_AddReportingApiObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.AddReportingApiObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetSharedDictionaryUsageInfo
network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetSharedDictionaryUsageInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetSharedDictionaryUsageInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'usage_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetSharedDictionaryInfo
network.mojom.NetworkContext_GetSharedDictionaryInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetSharedDictionaryInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'isolation_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetSharedDictionaryInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'dictionaries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetSharedDictionaryOriginsBetween
network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetSharedDictionaryOriginsBetween_Params',
      packedSize: 24,
      fields: [
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'end_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetSharedDictionaryOriginsBetween_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'origins', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSharedDictionaryCacheMaxSize
network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetSharedDictionaryCacheMaxSize_Params',
      packedSize: 16,
      fields: [
        { name: 'cache_max_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PreloadSharedDictionaryInfoForDocument
network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.PreloadSharedDictionaryInfoForDocument_Params',
      packedSize: 24,
      fields: [
        { name: 'urls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'preload_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for HasPreloadedSharedDictionaryInfoForTesting
network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.HasPreloadedSharedDictionaryInfoForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.HasPreloadedSharedDictionaryInfoForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FlushCachedClientCertIfNeeded
network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.FlushCachedClientCertIfNeeded_Params',
      packedSize: 24,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'certificate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for FlushMatchingCachedClientCert
network.mojom.NetworkContext_FlushMatchingCachedClientCert_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.FlushMatchingCachedClientCert_Params',
      packedSize: 16,
      fields: [
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FlushClientCertCache
network.mojom.NetworkContext_FlushClientCertCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.FlushClientCertCache_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RevokeNetworkForNonces
network.mojom.NetworkContext_RevokeNetworkForNonces_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.RevokeNetworkForNonces_Params',
      packedSize: 16,
      fields: [
        { name: 'nonces_to_patterns', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearNonces
network.mojom.NetworkContext_ClearNonces_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearNonces_Params',
      packedSize: 16,
      fields: [
        { name: 'nonces', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ExemptUrlFromNetworkRevocationForNonce
network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ExemptUrlFromNetworkRevocationForNonce_Params',
      packedSize: 24,
      fields: [
        { name: 'exempted_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'nonce', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Prefetch
network.mojom.NetworkContext_Prefetch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.Prefetch_Params',
      packedSize: 40,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'request', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'traffic_annotation', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for GetBoundNetworkForTesting
network.mojom.NetworkContext_GetBoundNetworkForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetBoundNetworkForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetBoundNetworkForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'bound_network', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDeviceBoundSessionManager
network.mojom.NetworkContext_GetDeviceBoundSessionManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetDeviceBoundSessionManager_Params',
      packedSize: 16,
      fields: [
        { name: 'device_bound_session_manager', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddQuicHints
network.mojom.NetworkContext_AddQuicHints_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.AddQuicHints_Params',
      packedSize: 24,
      fields: [
        { name: 'origins', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'network_anonymization_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
network.mojom.NetworkContextPtr = network.mojom.NetworkContextRemote;
network.mojom.NetworkContextRequest = network.mojom.NetworkContextPendingReceiver;

