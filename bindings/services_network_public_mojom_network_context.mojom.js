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
      network.mojom.CustomProxyConnectionObserver_OnFallback_ParamsSpec.$,
      null,
      [bad_chain, net_error]);
  }

  onTunnelHeadersReceived(proxy_chain, chain_index, response_headers) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_ParamsSpec.$,
      null,
      [proxy_chain, chain_index, response_headers]);
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
        { name: 'bad_chain', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'net_error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'proxy_chain', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'chain_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'response_headers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ParamsSpec.$,
      null,
      [proxy_config]);
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
        { name: 'proxy_config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ParamsSpec.$,
      network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParamsSpec.$,
      [headers]);
  }

  onHeadersReceived(headers, remote_endpoint, ssl_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.TrustedHeaderClient_OnHeadersReceived_ParamsSpec.$,
      network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParamsSpec.$,
      [headers, remote_endpoint, ssl_info]);
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
        { name: 'headers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustedHeaderClient.OnBeforeSendHeaders_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'headers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'headers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'remote_endpoint', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ssl_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustedHeaderClient.OnHeadersReceived_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'headers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'preserve_fragment_on_redirect_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_ParamsSpec.$,
      null,
      [request_id, header_client]);
  }

  onLoaderForCorsPreflightCreated(request, header_client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_ParamsSpec.$,
      null,
      [request, header_client]);
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
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'header_client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'header_client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      network.mojom.NetworkContext_SetClient_ParamsSpec.$,
      null,
      [client]);
  }

  createURLLoaderFactory(url_loader_factory, params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.NetworkContext_CreateURLLoaderFactory_ParamsSpec.$,
      null,
      [url_loader_factory, params]);
  }

  resetURLLoaderFactories() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.NetworkContext_ResetURLLoaderFactories_ParamsSpec.$,
      null,
      []);
  }

  getViaObliviousHttp(request, client) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.NetworkContext_GetViaObliviousHttp_ParamsSpec.$,
      null,
      [request, client]);
  }

  getCookieManager(cookie_manager) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.NetworkContext_GetCookieManager_ParamsSpec.$,
      null,
      [cookie_manager]);
  }

  getRestrictedCookieManager(restricted_cookie_manager, role, origin, isolation_info, cookie_setting_overrides, devtools_cookie_setting_overrides, cookie_observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.NetworkContext_GetRestrictedCookieManager_ParamsSpec.$,
      null,
      [restricted_cookie_manager, role, origin, isolation_info, cookie_setting_overrides, devtools_cookie_setting_overrides, cookie_observer]);
  }

  getTrustTokenQueryAnswerer(trust_token_query_answerer, top_frame_origin) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_ParamsSpec.$,
      null,
      [trust_token_query_answerer, top_frame_origin]);
  }

  clearTrustTokenData(filter) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      network.mojom.NetworkContext_ClearTrustTokenData_ParamsSpec.$,
      null,
      [filter]);
  }

  clearTrustTokenSessionOnlyData() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ParamsSpec.$,
      network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParamsSpec.$,
      []);
  }

  getStoredTrustTokenCounts() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      network.mojom.NetworkContext_GetStoredTrustTokenCounts_ParamsSpec.$,
      network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParamsSpec.$,
      []);
  }

  getPrivateStateTokenRedemptionRecords() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ParamsSpec.$,
      network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParamsSpec.$,
      []);
  }

  deleteStoredTrustTokens(issuer) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      network.mojom.NetworkContext_DeleteStoredTrustTokens_ParamsSpec.$,
      network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParamsSpec.$,
      [issuer]);
  }

  setBlockTrustTokens(block) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      network.mojom.NetworkContext_SetBlockTrustTokens_ParamsSpec.$,
      null,
      [block]);
  }

  clearNetworkingHistoryBetween(start_time, end_time) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ParamsSpec.$,
      null,
      [start_time, end_time]);
  }

  clearHttpCache(start_time, end_time, filter) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      network.mojom.NetworkContext_ClearHttpCache_ParamsSpec.$,
      null,
      [start_time, end_time, filter]);
  }

  computeHttpCacheSize(start_time, end_time) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      network.mojom.NetworkContext_ComputeHttpCacheSize_ParamsSpec.$,
      network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParamsSpec.$,
      [start_time, end_time]);
  }

  notifyBrowserIdle() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      network.mojom.NetworkContext_NotifyBrowserIdle_ParamsSpec.$,
      null,
      []);
  }

  notifyExternalCacheHit(url, http_method, key, include_credentials) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      network.mojom.NetworkContext_NotifyExternalCacheHit_ParamsSpec.$,
      null,
      [url, http_method, key, include_credentials]);
  }

  clearHostCache(filter) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      network.mojom.NetworkContext_ClearHostCache_ParamsSpec.$,
      null,
      [filter]);
  }

  clearHttpAuthCache(start_time, end_time, filter) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      network.mojom.NetworkContext_ClearHttpAuthCache_ParamsSpec.$,
      null,
      [start_time, end_time, filter]);
  }

  clearCorsPreflightCache(filter) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      network.mojom.NetworkContext_ClearCorsPreflightCache_ParamsSpec.$,
      null,
      [filter]);
  }

  clearReportingCacheReports(filter) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      network.mojom.NetworkContext_ClearReportingCacheReports_ParamsSpec.$,
      null,
      [filter]);
  }

  clearReportingCacheClients(filter) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      network.mojom.NetworkContext_ClearReportingCacheClients_ParamsSpec.$,
      null,
      [filter]);
  }

  clearNetworkErrorLogging(filter) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      network.mojom.NetworkContext_ClearNetworkErrorLogging_ParamsSpec.$,
      null,
      [filter]);
  }

  clearDomainReliability(filter, mode) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      network.mojom.NetworkContext_ClearDomainReliability_ParamsSpec.$,
      null,
      [filter, mode]);
  }

  clearSharedDictionaryCache(start_time, end_time, filter) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      network.mojom.NetworkContext_ClearSharedDictionaryCache_ParamsSpec.$,
      null,
      [start_time, end_time, filter]);
  }

  clearSharedDictionaryCacheForIsolationKey(isolation_key) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ParamsSpec.$,
      null,
      [isolation_key]);
  }

  setDocumentReportingEndpoints(reporting_source, origin, isolation_info, endpoints) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      network.mojom.NetworkContext_SetDocumentReportingEndpoints_ParamsSpec.$,
      null,
      [reporting_source, origin, isolation_info, endpoints]);
  }

  setEnterpriseReportingEndpoints(endpoints) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      network.mojom.NetworkContext_SetEnterpriseReportingEndpoints_ParamsSpec.$,
      null,
      [endpoints]);
  }

  sendReportsAndRemoveSource(reporting_source) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      network.mojom.NetworkContext_SendReportsAndRemoveSource_ParamsSpec.$,
      null,
      [reporting_source]);
  }

  queueReport(type, group, url, reporting_source, network_anonymization_key, body) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      network.mojom.NetworkContext_QueueReport_ParamsSpec.$,
      null,
      [type, group, url, reporting_source, network_anonymization_key, body]);
  }

  queueEnterpriseReport(type, group, url, body) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      network.mojom.NetworkContext_QueueEnterpriseReport_ParamsSpec.$,
      null,
      [type, group, url, body]);
  }

  queueSignedExchangeReport(report, network_anonymization_key) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      network.mojom.NetworkContext_QueueSignedExchangeReport_ParamsSpec.$,
      null,
      [report, network_anonymization_key]);
  }

  closeAllConnections() {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      network.mojom.NetworkContext_CloseAllConnections_ParamsSpec.$,
      null,
      []);
  }

  closeIdleConnections() {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      network.mojom.NetworkContext_CloseIdleConnections_ParamsSpec.$,
      null,
      []);
  }

  setNetworkConditions(throttling_profile_id, conditions) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      network.mojom.NetworkContext_SetNetworkConditions_ParamsSpec.$,
      null,
      [throttling_profile_id, conditions]);
  }

  setAcceptLanguage(new_accept_language) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      network.mojom.NetworkContext_SetAcceptLanguage_ParamsSpec.$,
      null,
      [new_accept_language]);
  }

  setEnableReferrers(enable_referrers) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      network.mojom.NetworkContext_SetEnableReferrers_ParamsSpec.$,
      null,
      [enable_referrers]);
  }

  setCTPolicy(ct_policy) {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      network.mojom.NetworkContext_SetCTPolicy_ParamsSpec.$,
      null,
      [ct_policy]);
  }

  createUDPSocket(receiver, listener) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      network.mojom.NetworkContext_CreateUDPSocket_ParamsSpec.$,
      null,
      [receiver, listener]);
  }

  createRestrictedUDPSocket(addr, mode, traffic_annotation, params, receiver, listener, allow_multicast) {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      network.mojom.NetworkContext_CreateRestrictedUDPSocket_ParamsSpec.$,
      network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParamsSpec.$,
      [addr, mode, traffic_annotation, params, receiver, listener, allow_multicast]);
  }

  createTCPServerSocket(local_addr, options, traffic_annotation, socket) {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      network.mojom.NetworkContext_CreateTCPServerSocket_ParamsSpec.$,
      network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParamsSpec.$,
      [local_addr, options, traffic_annotation, socket]);
  }

  createTCPConnectedSocket(local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer) {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      network.mojom.NetworkContext_CreateTCPConnectedSocket_ParamsSpec.$,
      network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParamsSpec.$,
      [local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer]);
  }

  createTCPBoundSocket(local_addr, traffic_annotation, socket) {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      network.mojom.NetworkContext_CreateTCPBoundSocket_ParamsSpec.$,
      network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParamsSpec.$,
      [local_addr, traffic_annotation, socket]);
  }

  createProxyResolvingSocketFactory(factory) {
    // Ordinal: 44
    return this.proxy.sendMessage(
      44,  // ordinal
      network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_ParamsSpec.$,
      null,
      [factory]);
  }

  lookUpProxyForURL(url, network_anonymization_key, proxy_lookup_client) {
    // Ordinal: 45
    return this.proxy.sendMessage(
      45,  // ordinal
      network.mojom.NetworkContext_LookUpProxyForURL_ParamsSpec.$,
      null,
      [url, network_anonymization_key, proxy_lookup_client]);
  }

  forceReloadProxyConfig() {
    // Ordinal: 46
    return this.proxy.sendMessage(
      46,  // ordinal
      network.mojom.NetworkContext_ForceReloadProxyConfig_ParamsSpec.$,
      null,
      []);
  }

  clearBadProxiesCache() {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      network.mojom.NetworkContext_ClearBadProxiesCache_ParamsSpec.$,
      null,
      []);
  }

  createWebSocket(url, requested_protocols, site_for_cookies, storage_access_api_status, isolation_info, additional_headers, process_id, origin, client_security_state, options, traffic_annotation, handshake_client, url_loader_network_observer, auth_handler, header_client, throttling_profile_id) {
    // Ordinal: 48
    return this.proxy.sendMessage(
      48,  // ordinal
      network.mojom.NetworkContext_CreateWebSocket_ParamsSpec.$,
      null,
      [url, requested_protocols, site_for_cookies, storage_access_api_status, isolation_info, additional_headers, process_id, origin, client_security_state, options, traffic_annotation, handshake_client, url_loader_network_observer, auth_handler, header_client, throttling_profile_id]);
  }

  createWebTransport(url, origin, network_anonymization_key, fingerprints, application_protocols, handshake_client, url_loader_network_observer, client_security_state) {
    // Ordinal: 49
    return this.proxy.sendMessage(
      49,  // ordinal
      network.mojom.NetworkContext_CreateWebTransport_ParamsSpec.$,
      null,
      [url, origin, network_anonymization_key, fingerprints, application_protocols, handshake_client, url_loader_network_observer, client_security_state]);
  }

  createNetLogExporter(receiver) {
    // Ordinal: 50
    return this.proxy.sendMessage(
      50,  // ordinal
      network.mojom.NetworkContext_CreateNetLogExporter_ParamsSpec.$,
      null,
      [receiver]);
  }

  preconnectSockets(num_streams, url, credentials_mode, network_anonymization_key, traffic_annotation, keepalive_config, observer_client) {
    // Ordinal: 51
    return this.proxy.sendMessage(
      51,  // ordinal
      network.mojom.NetworkContext_PreconnectSockets_ParamsSpec.$,
      null,
      [num_streams, url, credentials_mode, network_anonymization_key, traffic_annotation, keepalive_config, observer_client]);
  }

  createP2PSocketManager(network_anonymization_key, client, trusted_socket_manager, socket_manager) {
    // Ordinal: 52
    return this.proxy.sendMessage(
      52,  // ordinal
      network.mojom.NetworkContext_CreateP2PSocketManager_ParamsSpec.$,
      null,
      [network_anonymization_key, client, trusted_socket_manager, socket_manager]);
  }

  createMdnsResponder(responder_receiver) {
    // Ordinal: 53
    return this.proxy.sendMessage(
      53,  // ordinal
      network.mojom.NetworkContext_CreateMdnsResponder_ParamsSpec.$,
      null,
      [responder_receiver]);
  }

  resolveHost(host, network_anonymization_key, optional_parameters, response_client) {
    // Ordinal: 54
    return this.proxy.sendMessage(
      54,  // ordinal
      network.mojom.NetworkContext_ResolveHost_ParamsSpec.$,
      null,
      [host, network_anonymization_key, optional_parameters, response_client]);
  }

  createHostResolver(config_overrides, host_resolver) {
    // Ordinal: 55
    return this.proxy.sendMessage(
      55,  // ordinal
      network.mojom.NetworkContext_CreateHostResolver_ParamsSpec.$,
      null,
      [config_overrides, host_resolver]);
  }

  verifyCert(certificate, host_port, ocsp_response, sct_list) {
    // Ordinal: 56
    return this.proxy.sendMessage(
      56,  // ordinal
      network.mojom.NetworkContext_VerifyCert_ParamsSpec.$,
      network.mojom.NetworkContext_VerifyCert_ResponseParamsSpec.$,
      [certificate, host_port, ocsp_response, sct_list]);
  }

  verifyCertForSignedExchange(certificate, host_port, ocsp_response, sct_list) {
    // Ordinal: 57
    return this.proxy.sendMessage(
      57,  // ordinal
      network.mojom.NetworkContext_VerifyCertForSignedExchange_ParamsSpec.$,
      network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParamsSpec.$,
      [certificate, host_port, ocsp_response, sct_list]);
  }

  verify2QwacCertBinding(binding, hostname, tls_certificate) {
    // Ordinal: 58
    return this.proxy.sendMessage(
      58,  // ordinal
      network.mojom.NetworkContext_Verify2QwacCertBinding_ParamsSpec.$,
      network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParamsSpec.$,
      [binding, hostname, tls_certificate]);
  }

  addHSTS(host, expiry, include_subdomains) {
    // Ordinal: 59
    return this.proxy.sendMessage(
      59,  // ordinal
      network.mojom.NetworkContext_AddHSTS_ParamsSpec.$,
      null,
      [host, expiry, include_subdomains]);
  }

  isHSTSActiveForHost(host, is_top_level_nav) {
    // Ordinal: 60
    return this.proxy.sendMessage(
      60,  // ordinal
      network.mojom.NetworkContext_IsHSTSActiveForHost_ParamsSpec.$,
      network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParamsSpec.$,
      [host, is_top_level_nav]);
  }

  getHSTSState(domain) {
    // Ordinal: 61
    return this.proxy.sendMessage(
      61,  // ordinal
      network.mojom.NetworkContext_GetHSTSState_ParamsSpec.$,
      network.mojom.NetworkContext_GetHSTSState_ResponseParamsSpec.$,
      [domain]);
  }

  setCorsOriginAccessListsForOrigin(source_origin, allow_patterns, block_patterns) {
    // Ordinal: 62
    return this.proxy.sendMessage(
      62,  // ordinal
      network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ParamsSpec.$,
      null,
      [source_origin, allow_patterns, block_patterns]);
  }

  deleteDynamicDataForHost(host) {
    // Ordinal: 63
    return this.proxy.sendMessage(
      63,  // ordinal
      network.mojom.NetworkContext_DeleteDynamicDataForHost_ParamsSpec.$,
      network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParamsSpec.$,
      [host]);
  }

  setSplitAuthCacheByNetworkAnonymizationKey(split_auth_cache_by_network_anonymization_key) {
    // Ordinal: 64
    return this.proxy.sendMessage(
      64,  // ordinal
      network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_ParamsSpec.$,
      null,
      [split_auth_cache_by_network_anonymization_key]);
  }

  saveHttpAuthCacheProxyEntries() {
    // Ordinal: 65
    return this.proxy.sendMessage(
      65,  // ordinal
      network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ParamsSpec.$,
      network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParamsSpec.$,
      []);
  }

  loadHttpAuthCacheProxyEntries(cache_key) {
    // Ordinal: 66
    return this.proxy.sendMessage(
      66,  // ordinal
      network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ParamsSpec.$,
      null,
      [cache_key]);
  }

  addAuthCacheEntry(challenge, network_anonymization_key, credentials) {
    // Ordinal: 67
    return this.proxy.sendMessage(
      67,  // ordinal
      network.mojom.NetworkContext_AddAuthCacheEntry_ParamsSpec.$,
      null,
      [challenge, network_anonymization_key, credentials]);
  }

  setCorsNonWildcardRequestHeadersSupport(value) {
    // Ordinal: 68
    return this.proxy.sendMessage(
      68,  // ordinal
      network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_ParamsSpec.$,
      null,
      [value]);
  }

  lookupProxyAuthCredentials(proxy_server, auth_scheme, realm) {
    // Ordinal: 69
    return this.proxy.sendMessage(
      69,  // ordinal
      network.mojom.NetworkContext_LookupProxyAuthCredentials_ParamsSpec.$,
      network.mojom.NetworkContext_LookupProxyAuthCredentials_ResponseParamsSpec.$,
      [proxy_server, auth_scheme, realm]);
  }

  enableStaticKeyPinningForTesting() {
    // Ordinal: 70
    return this.proxy.sendMessage(
      70,  // ordinal
      network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ParamsSpec.$,
      null,
      []);
  }

  verifyCertificateForTesting(certificate, hostname, ocsp_response, sct_list) {
    // Ordinal: 71
    return this.proxy.sendMessage(
      71,  // ordinal
      network.mojom.NetworkContext_VerifyCertificateForTesting_ParamsSpec.$,
      network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParamsSpec.$,
      [certificate, hostname, ocsp_response, sct_list]);
  }

  getTrustAnchorIDsForTesting() {
    // Ordinal: 72
    return this.proxy.sendMessage(
      72,  // ordinal
      network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ParamsSpec.$,
      network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParamsSpec.$,
      []);
  }

  addDomainReliabilityContextForTesting(origin, upload_url) {
    // Ordinal: 73
    return this.proxy.sendMessage(
      73,  // ordinal
      network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ParamsSpec.$,
      null,
      [origin, upload_url]);
  }

  forceDomainReliabilityUploadsForTesting() {
    // Ordinal: 74
    return this.proxy.sendMessage(
      74,  // ordinal
      network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ParamsSpec.$,
      null,
      []);
  }

  setSCTAuditingMode(mode) {
    // Ordinal: 75
    return this.proxy.sendMessage(
      75,  // ordinal
      network.mojom.NetworkContext_SetSCTAuditingMode_ParamsSpec.$,
      null,
      [mode]);
  }

  addReportingApiObserver(observer) {
    // Ordinal: 76
    return this.proxy.sendMessage(
      76,  // ordinal
      network.mojom.NetworkContext_AddReportingApiObserver_ParamsSpec.$,
      null,
      [observer]);
  }

  getSharedDictionaryUsageInfo() {
    // Ordinal: 77
    return this.proxy.sendMessage(
      77,  // ordinal
      network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ParamsSpec.$,
      network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParamsSpec.$,
      []);
  }

  getSharedDictionaryInfo(isolation_key) {
    // Ordinal: 78
    return this.proxy.sendMessage(
      78,  // ordinal
      network.mojom.NetworkContext_GetSharedDictionaryInfo_ParamsSpec.$,
      network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParamsSpec.$,
      [isolation_key]);
  }

  getSharedDictionaryOriginsBetween(start_time, end_time) {
    // Ordinal: 79
    return this.proxy.sendMessage(
      79,  // ordinal
      network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ParamsSpec.$,
      network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParamsSpec.$,
      [start_time, end_time]);
  }

  setSharedDictionaryCacheMaxSize(cache_max_size) {
    // Ordinal: 80
    return this.proxy.sendMessage(
      80,  // ordinal
      network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_ParamsSpec.$,
      null,
      [cache_max_size]);
  }

  preloadSharedDictionaryInfoForDocument(urls, preload_handle) {
    // Ordinal: 81
    return this.proxy.sendMessage(
      81,  // ordinal
      network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_ParamsSpec.$,
      null,
      [urls, preload_handle]);
  }

  hasPreloadedSharedDictionaryInfoForTesting() {
    // Ordinal: 82
    return this.proxy.sendMessage(
      82,  // ordinal
      network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ParamsSpec.$,
      network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParamsSpec.$,
      []);
  }

  flushCachedClientCertIfNeeded(host, certificate) {
    // Ordinal: 83
    return this.proxy.sendMessage(
      83,  // ordinal
      network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_ParamsSpec.$,
      null,
      [host, certificate]);
  }

  flushMatchingCachedClientCert(certificate) {
    // Ordinal: 84
    return this.proxy.sendMessage(
      84,  // ordinal
      network.mojom.NetworkContext_FlushMatchingCachedClientCert_ParamsSpec.$,
      null,
      [certificate]);
  }

  flushClientCertCache() {
    // Ordinal: 85
    return this.proxy.sendMessage(
      85,  // ordinal
      network.mojom.NetworkContext_FlushClientCertCache_ParamsSpec.$,
      null,
      []);
  }

  revokeNetworkForNonces(nonces_to_patterns) {
    // Ordinal: 86
    return this.proxy.sendMessage(
      86,  // ordinal
      network.mojom.NetworkContext_RevokeNetworkForNonces_ParamsSpec.$,
      null,
      [nonces_to_patterns]);
  }

  clearNonces(nonces) {
    // Ordinal: 87
    return this.proxy.sendMessage(
      87,  // ordinal
      network.mojom.NetworkContext_ClearNonces_ParamsSpec.$,
      null,
      [nonces]);
  }

  exemptUrlFromNetworkRevocationForNonce(exempted_url, nonce) {
    // Ordinal: 88
    return this.proxy.sendMessage(
      88,  // ordinal
      network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ParamsSpec.$,
      null,
      [exempted_url, nonce]);
  }

  prefetch(request_id, options, request, traffic_annotation) {
    // Ordinal: 89
    return this.proxy.sendMessage(
      89,  // ordinal
      network.mojom.NetworkContext_Prefetch_ParamsSpec.$,
      null,
      [request_id, options, request, traffic_annotation]);
  }

  getBoundNetworkForTesting() {
    // Ordinal: 90
    return this.proxy.sendMessage(
      90,  // ordinal
      network.mojom.NetworkContext_GetBoundNetworkForTesting_ParamsSpec.$,
      network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParamsSpec.$,
      []);
  }

  getDeviceBoundSessionManager(device_bound_session_manager) {
    // Ordinal: 91
    return this.proxy.sendMessage(
      91,  // ordinal
      network.mojom.NetworkContext_GetDeviceBoundSessionManager_ParamsSpec.$,
      null,
      [device_bound_session_manager]);
  }

  addQuicHints(origins, network_anonymization_key) {
    // Ordinal: 92
    return this.proxy.sendMessage(
      92,  // ordinal
      network.mojom.NetworkContext_AddQuicHints_ParamsSpec.$,
      null,
      [origins, network_anonymization_key]);
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
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'url_loader_factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'cookie_manager', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'restricted_cookie_manager', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'role', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'origin', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'isolation_info', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cookie_setting_overrides', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'devtools_cookie_setting_overrides', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cookie_observer', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'trust_token_query_answerer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'top_frame_origin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearTrustTokenSessionOnlyData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'any_data_deleted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetStoredTrustTokenCounts_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tokens', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetPrivateStateTokenRedemptionRecords_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'issuer_redemption_record_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'issuer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.DeleteStoredTrustTokens_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'block', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'end_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'end_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'filter', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'end_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ComputeHttpCacheSize_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'is_upper_bound', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'size_or_error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'http_method', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'include_credentials', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'end_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'filter', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'mode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'end_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'filter', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'isolation_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'reporting_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'isolation_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'endpoints', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'endpoints', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'reporting_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'group', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'reporting_source', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'network_anonymization_key', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'body', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'group', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'body', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'network_anonymization_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
        { name: 'throttling_profile_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'conditions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'new_accept_language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'enable_referrers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'ct_policy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'listener', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'addr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'mode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'traffic_annotation', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'params', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'receiver', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'listener', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'allow_multicast', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateRestrictedUDPSocket_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'local_addr_out', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'local_addr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'traffic_annotation', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'socket', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateTCPServerSocket_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'local_addr_out', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'local_addr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'remote_addr_list', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'tcp_connected_socket_options', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'traffic_annotation', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'socket', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'observer', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateTCPConnectedSocket_ResponseParams',
      packedSize: 48,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'local_addr', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'peer_addr', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'receive_stream', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'send_stream', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'local_addr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'traffic_annotation', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'socket', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateTCPBoundSocket_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'local_addr', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'network_anonymization_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'proxy_lookup_client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'requested_protocols', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'site_for_cookies', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'storage_access_api_status', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'isolation_info', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'additional_headers', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'process_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'origin', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client_security_state', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'options', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'traffic_annotation', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'handshake_client', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'url_loader_network_observer', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'auth_handler', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'header_client', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'throttling_profile_id', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'network_anonymization_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'fingerprints', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'application_protocols', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'handshake_client', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'url_loader_network_observer', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client_security_state', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'num_streams', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'credentials_mode', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'network_anonymization_key', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'traffic_annotation', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'keepalive_config', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'observer_client', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'network_anonymization_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'trusted_socket_manager', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'socket_manager', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'responder_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'network_anonymization_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'optional_parameters', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'response_client', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'config_overrides', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'host_resolver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'host_port', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ocsp_response', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'sct_list', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_VerifyCert_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.VerifyCert_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cv_result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pkp_bypassed', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'host_port', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ocsp_response', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'sct_list', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.VerifyCertForSignedExchange_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cv_result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pkp_bypassed', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'binding', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'hostname', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'tls_certificate', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.Verify2QwacCertBinding_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'verified_cert', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'expiry', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'include_subdomains', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_top_level_nav', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.IsHSTSActiveForHost_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'domain', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_GetHSTSState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetHSTSState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'source_origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'allow_patterns', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'block_patterns', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.DeleteDynamicDataForHost_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'split_auth_cache_by_network_anonymization_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SaveHttpAuthCacheProxyEntries_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'cache_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'cache_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'challenge', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'network_anonymization_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'credentials', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'proxy_server', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'auth_scheme', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'realm', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_LookupProxyAuthCredentials_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.LookupProxyAuthCredentials_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'credentials', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'hostname', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ocsp_response', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'sct_list', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.VerifyCertificateForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetTrustAnchorIDsForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'trust_anchor_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'upload_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetSharedDictionaryUsageInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'usage_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'isolation_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetSharedDictionaryInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'dictionaries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'end_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetSharedDictionaryOriginsBetween_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'origins', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'cache_max_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'urls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'preload_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.HasPreloadedSharedDictionaryInfoForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'certificate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
        { name: 'nonces_to_patterns', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'nonces', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'exempted_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'nonce', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'request', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'traffic_annotation', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetBoundNetworkForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'bound_network', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'device_bound_session_manager', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'origins', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'network_anonymization_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.NetworkContextPtr = network.mojom.NetworkContextRemote;
network.mojom.NetworkContextRequest = network.mojom.NetworkContextPendingReceiver;

