// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_context.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var content_settings = content_settings || {};
var unexportable_keys = unexportable_keys || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};
var cert_verifier = cert_verifier || {};
var proxy_resolver = proxy_resolver || {};
var url = url || {};

network.mojom.TrustTokenOperationPolicyVerdictSpec = { $: mojo.internal.Enum() };
network.mojom.SCTAuditingModeSpec = { $: mojo.internal.Enum() };
network.mojom.DomainReliabilityClearModeSpec = { $: mojo.internal.Enum() };
network.mojom.CustomProxyConfigSpec = { $: {} };
network.mojom.CertVerifierServiceRemoteParamsSpec = { $: {} };
network.mojom.HttpAuthStaticNetworkContextParamsSpec = { $: {} };
network.mojom.NetworkContextFilePathsSpec = { $: {} };
network.mojom.SocketBrokerRemotesSpec = { $: {} };
network.mojom.NetworkContextParamsSpec = { $: {} };
network.mojom.NetworkConditionsSpec = { $: {} };
network.mojom.MatchedNetworkConditionsSpec = { $: {} };
network.mojom.SharedDictionaryInfoSpec = { $: {} };
network.mojom.SignedExchangeReportSpec = { $: {} };
network.mojom.URLLoaderFactoryOverrideSpec = { $: {} };
network.mojom.URLLoaderFactoryParamsSpec = { $: {} };
network.mojom.NonceAndAllowlistedPatternsSpec = { $: {} };
network.mojom.CustomProxyConnectionObserver = {};
network.mojom.CustomProxyConnectionObserver.$interfaceName = 'network.mojom.CustomProxyConnectionObserver';
network.mojom.CustomProxyConnectionObserver_OnFallback_ParamsSpec = { $: {} };
network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_ParamsSpec = { $: {} };
network.mojom.CustomProxyConfigClient = {};
network.mojom.CustomProxyConfigClient.$interfaceName = 'network.mojom.CustomProxyConfigClient';
network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ParamsSpec = { $: {} };
network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ResponseParamsSpec = { $: {} };
network.mojom.TrustedHeaderClient = {};
network.mojom.TrustedHeaderClient.$interfaceName = 'network.mojom.TrustedHeaderClient';
network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ParamsSpec = { $: {} };
network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParamsSpec = { $: {} };
network.mojom.TrustedHeaderClient_OnHeadersReceived_ParamsSpec = { $: {} };
network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParamsSpec = { $: {} };
network.mojom.TrustedURLLoaderHeaderClient = {};
network.mojom.TrustedURLLoaderHeaderClient.$interfaceName = 'network.mojom.TrustedURLLoaderHeaderClient';
network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_ParamsSpec = { $: {} };
network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_ParamsSpec = { $: {} };
network.mojom.PreloadedSharedDictionaryInfoHandle = {};
network.mojom.PreloadedSharedDictionaryInfoHandle.$interfaceName = 'network.mojom.PreloadedSharedDictionaryInfoHandle';
network.mojom.NetworkContext = {};
network.mojom.NetworkContext.$interfaceName = 'network.mojom.NetworkContext';
network.mojom.NetworkContext_SetClient_ParamsSpec = { $: {} };
network.mojom.NetworkContext_CreateURLLoaderFactory_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ResetURLLoaderFactories_ParamsSpec = { $: {} };
network.mojom.NetworkContext_GetViaObliviousHttp_ParamsSpec = { $: {} };
network.mojom.NetworkContext_GetCookieManager_ParamsSpec = { $: {} };
network.mojom.NetworkContext_GetRestrictedCookieManager_ParamsSpec = { $: {} };
network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearTrustTokenData_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearTrustTokenData_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_GetStoredTrustTokenCounts_ParamsSpec = { $: {} };
network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ParamsSpec = { $: {} };
network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_DeleteStoredTrustTokens_ParamsSpec = { $: {} };
network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_SetBlockTrustTokens_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearHttpCache_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearHttpCache_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_ComputeHttpCacheSize_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_NotifyBrowserIdle_ParamsSpec = { $: {} };
network.mojom.NetworkContext_NotifyExternalCacheHit_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearHostCache_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearHostCache_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearHttpAuthCache_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearHttpAuthCache_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearCorsPreflightCache_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearCorsPreflightCache_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearReportingCacheReports_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearReportingCacheReports_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearReportingCacheClients_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearReportingCacheClients_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearNetworkErrorLogging_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearNetworkErrorLogging_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearDomainReliability_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearDomainReliability_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearSharedDictionaryCache_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearSharedDictionaryCache_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_SetDocumentReportingEndpoints_ParamsSpec = { $: {} };
network.mojom.NetworkContext_SetEnterpriseReportingEndpoints_ParamsSpec = { $: {} };
network.mojom.NetworkContext_SendReportsAndRemoveSource_ParamsSpec = { $: {} };
network.mojom.NetworkContext_QueueReport_ParamsSpec = { $: {} };
network.mojom.NetworkContext_QueueEnterpriseReport_ParamsSpec = { $: {} };
network.mojom.NetworkContext_QueueSignedExchangeReport_ParamsSpec = { $: {} };
network.mojom.NetworkContext_CloseAllConnections_ParamsSpec = { $: {} };
network.mojom.NetworkContext_CloseAllConnections_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_CloseIdleConnections_ParamsSpec = { $: {} };
network.mojom.NetworkContext_CloseIdleConnections_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_SetNetworkConditions_ParamsSpec = { $: {} };
network.mojom.NetworkContext_SetAcceptLanguage_ParamsSpec = { $: {} };
network.mojom.NetworkContext_SetEnableReferrers_ParamsSpec = { $: {} };
network.mojom.NetworkContext_SetCTPolicy_ParamsSpec = { $: {} };
network.mojom.NetworkContext_CreateUDPSocket_ParamsSpec = { $: {} };
network.mojom.NetworkContext_CreateRestrictedUDPSocket_ParamsSpec = { $: {} };
network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_CreateTCPServerSocket_ParamsSpec = { $: {} };
network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_CreateTCPConnectedSocket_ParamsSpec = { $: {} };
network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_CreateTCPBoundSocket_ParamsSpec = { $: {} };
network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_ParamsSpec = { $: {} };
network.mojom.NetworkContext_LookUpProxyForURL_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ForceReloadProxyConfig_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ForceReloadProxyConfig_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearBadProxiesCache_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearBadProxiesCache_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_CreateWebSocket_ParamsSpec = { $: {} };
network.mojom.NetworkContext_CreateWebTransport_ParamsSpec = { $: {} };
network.mojom.NetworkContext_CreateNetLogExporter_ParamsSpec = { $: {} };
network.mojom.NetworkContext_PreconnectSockets_ParamsSpec = { $: {} };
network.mojom.NetworkContext_CreateP2PSocketManager_ParamsSpec = { $: {} };
network.mojom.NetworkContext_CreateMdnsResponder_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ResolveHost_ParamsSpec = { $: {} };
network.mojom.NetworkContext_CreateHostResolver_ParamsSpec = { $: {} };
network.mojom.NetworkContext_VerifyCert_ParamsSpec = { $: {} };
network.mojom.NetworkContext_VerifyCert_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_VerifyCertForSignedExchange_ParamsSpec = { $: {} };
network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_Verify2QwacCertBinding_ParamsSpec = { $: {} };
network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_AddHSTS_ParamsSpec = { $: {} };
network.mojom.NetworkContext_AddHSTS_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_IsHSTSActiveForHost_ParamsSpec = { $: {} };
network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_GetHSTSState_ParamsSpec = { $: {} };
network.mojom.NetworkContext_GetHSTSState_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ParamsSpec = { $: {} };
network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_DeleteDynamicDataForHost_ParamsSpec = { $: {} };
network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_ParamsSpec = { $: {} };
network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ParamsSpec = { $: {} };
network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ParamsSpec = { $: {} };
network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_AddAuthCacheEntry_ParamsSpec = { $: {} };
network.mojom.NetworkContext_AddAuthCacheEntry_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_ParamsSpec = { $: {} };
network.mojom.NetworkContext_LookupProxyAuthCredentials_ParamsSpec = { $: {} };
network.mojom.NetworkContext_LookupProxyAuthCredentials_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ParamsSpec = { $: {} };
network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_VerifyCertificateForTesting_ParamsSpec = { $: {} };
network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ParamsSpec = { $: {} };
network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ParamsSpec = { $: {} };
network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_SetSCTAuditingMode_ParamsSpec = { $: {} };
network.mojom.NetworkContext_AddReportingApiObserver_ParamsSpec = { $: {} };
network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ParamsSpec = { $: {} };
network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_GetSharedDictionaryInfo_ParamsSpec = { $: {} };
network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ParamsSpec = { $: {} };
network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_ParamsSpec = { $: {} };
network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_ParamsSpec = { $: {} };
network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ParamsSpec = { $: {} };
network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_ParamsSpec = { $: {} };
network.mojom.NetworkContext_FlushMatchingCachedClientCert_ParamsSpec = { $: {} };
network.mojom.NetworkContext_FlushClientCertCache_ParamsSpec = { $: {} };
network.mojom.NetworkContext_RevokeNetworkForNonces_ParamsSpec = { $: {} };
network.mojom.NetworkContext_RevokeNetworkForNonces_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_ClearNonces_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ParamsSpec = { $: {} };
network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_Prefetch_ParamsSpec = { $: {} };
network.mojom.NetworkContext_GetBoundNetworkForTesting_ParamsSpec = { $: {} };
network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContext_GetDeviceBoundSessionManager_ParamsSpec = { $: {} };
network.mojom.NetworkContext_AddQuicHints_ParamsSpec = { $: {} };

network.mojom.kWebSocketOptionNone = 0;

network.mojom.kWebSocketOptionBlockAllCookies = 1;

network.mojom.kWebSocketOptionBlockThirdPartyCookies = 2;

network.mojom.kBrowserProcessId = 0;

network.mojom.kInvalidProcessId = -1;

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

// Struct: CustomProxyConfig
mojo.internal.Struct(
    network.mojom.CustomProxyConfigSpec, 'network.mojom.CustomProxyConfig', [
      mojo.internal.StructField('rules', 0, 0, network.mojom.ProxyRulesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('connect_tunnel_headers', 8, 0, network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('should_override_existing_config', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_non_idempotent_methods', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CertVerifierServiceRemoteParams
mojo.internal.Struct(
    network.mojom.CertVerifierServiceRemoteParamsSpec, 'network.mojom.CertVerifierServiceRemoteParams', [
      mojo.internal.StructField('cert_verifier_service', 0, 0, mojo.internal.InterfaceProxy(cert_verifier.mojom.CertVerifierServiceRemote), null, true, 0, undefined),
      mojo.internal.StructField('cert_verifier_service_client_receiver', 8, 0, mojo.internal.InterfaceRequest(cert_verifier.mojom.CertVerifierServiceClientRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HttpAuthStaticNetworkContextParams
mojo.internal.Struct(
    network.mojom.HttpAuthStaticNetworkContextParamsSpec, 'network.mojom.HttpAuthStaticNetworkContextParams', [
    ],
    [[0, 8]]);

// Struct: NetworkContextFilePaths
mojo.internal.Struct(
    network.mojom.NetworkContextFilePathsSpec, 'network.mojom.NetworkContextFilePaths', [
      mojo.internal.StructField('shared_dictionary_directory', 0, 0, network.mojom.TransferableDirectorySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('http_cache_directory', 8, 0, network.mojom.TransferableDirectorySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('no_vary_search_directory', 16, 0, network.mojom.TransferableDirectorySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('data_directory', 24, 0, network.mojom.TransferableDirectorySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('unsandboxed_data_path', 32, 0, mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cookie_database_name', 40, 0, mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('device_bound_sessions_database_name', 48, 0, mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('trust_token_database_name', 56, 0, mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('http_server_properties_file_name', 64, 0, mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('transport_security_persister_file_name', 72, 0, mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('reporting_and_nel_store_database_name', 80, 0, mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('sct_auditing_pending_reports_file_name', 88, 0, mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('trigger_migration', 96, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 112]]);

// Struct: SocketBrokerRemotes
mojo.internal.Struct(
    network.mojom.SocketBrokerRemotesSpec, 'network.mojom.SocketBrokerRemotes', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(network.mojom.SocketBrokerRemote), null, false, 0, undefined),
      mojo.internal.StructField('server', 8, 0, mojo.internal.InterfaceProxy(network.mojom.SocketBrokerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NetworkContextParams
mojo.internal.Struct(
    network.mojom.NetworkContextParamsSpec, 'network.mojom.NetworkContextParams', [
      mojo.internal.StructField('user_agent', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('accept_language', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('proxy_resolver_factory', 16, 0, mojo.internal.InterfaceProxy(proxy_resolver.mojom.ProxyResolverFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('system_proxy_resolver', 24, 0, mojo.internal.InterfaceProxy(proxy_resolver.mojom.SystemProxyResolverRemote), null, true, 0, undefined),
      mojo.internal.StructField('dhcp_wpad_url_client', 32, 0, mojo.internal.InterfaceProxy(network.mojom.DhcpWpadUrlClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('http_cache_file_operations_factory', 40, 0, mojo.internal.InterfaceProxy(network.mojom.HttpCacheBackendFileOperationsFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('encryption_provider', 48, 0, mojo.internal.InterfaceProxy(network.mojom.CacheEncryptionProviderRemote), null, true, 0, undefined),
      mojo.internal.StructField('initial_ssl_config', 56, 0, network.mojom.SSLConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ssl_config_client_receiver', 64, 0, mojo.internal.InterfaceRequest(network.mojom.SSLConfigClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('initial_proxy_config', 72, 0, network.mojom.ProxyConfigWithAnnotationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('proxy_config_client_receiver', 80, 0, mojo.internal.InterfaceRequest(network.mojom.ProxyConfigClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('initial_custom_proxy_config', 88, 0, network.mojom.CustomProxyConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('custom_proxy_config_client_receiver', 96, 0, mojo.internal.InterfaceRequest(network.mojom.CustomProxyConfigClientSpec), null, true, 0, undefined),
      mojo.internal.StructField('custom_proxy_connection_observer_remote', 104, 0, mojo.internal.InterfaceProxy(network.mojom.CustomProxyConnectionObserverSpec), null, true, 0, undefined),
      mojo.internal.StructField('proxy_config_poller_client', 112, 0, mojo.internal.InterfaceProxy(network.mojom.ProxyConfigPollerClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('proxy_error_client', 120, 0, mojo.internal.InterfaceProxy(network.mojom.ProxyErrorClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('socket_brokers', 128, 0, network.mojom.SocketBrokerRemotesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('sct_auditing_mode', 136, 0, network.mojom.SCTAuditingModeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('ct_policy', 144, 0, network.mojom.CTPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cert_verifier_params', 152, 0, network.mojom.CertVerifierServiceRemoteParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cookie_manager_params', 160, 0, network.mojom.CookieManagerParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cookie_manager', 168, 0, mojo.internal.InterfaceRequest(network.mojom.CookieManagerRemote), null, true, 0, undefined),
      mojo.internal.StructField('domain_reliability_upload_reporter', 176, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('reporting_delivery_interval', 184, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cors_origin_access_list', 192, 0, mojo.internal.Array(network.mojom.CorsOriginAccessPatternsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('cors_exempt_header_list', 200, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('hsts_policy_bypass_list', 208, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('http_auth_static_network_context_params', 216, 0, network.mojom.HttpAuthStaticNetworkContextParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('file_paths', 224, 0, network.mojom.NetworkContextFilePathsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('shared_dictionary_cache_max_size', 232, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('first_party_sets_access_delegate_params', 240, 0, network.mojom.FirstPartySetsAccessDelegateParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('first_party_sets_access_delegate_receiver', 248, 0, mojo.internal.InterfaceRequest(network.mojom.FirstPartySetsAccessDelegateRemote), null, true, 0, undefined),
      mojo.internal.StructField('cookie_encryption_provider', 256, 0, mojo.internal.InterfaceProxy(network.mojom.CookieEncryptionProviderRemote), null, true, 0, undefined),
      mojo.internal.StructField('bound_network', 264, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('enterprise_reporting_endpoints', 272, 0, mojo.internal.Map(mojo.internal.String, url.mojom.UrlSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('quic_idle_connection_timeout_seconds_$value', 280, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'quic_idle_connection_timeout_seconds_$flag', originalFieldName: 'quic_idle_connection_timeout_seconds' }),
      mojo.internal.StructField('bound_sessions_unexportable_key_service', 288, 0, mojo.internal.InterfaceProxy(unexportable_keys.mojom.UnexportableKeyServiceRemote), null, true, 0, undefined),
      mojo.internal.StructField('http_cache_max_size', 296, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('enable_brotli', 300, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('enable_zstd', 300, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_referrers', 300, 2, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('validate_referrer_policy_on_initial_request', 300, 3, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('enable_encrypted_cookies', 300, 4, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('restore_old_session_cookies', 300, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('persist_session_cookies', 300, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('http_cache_enabled', 300, 7, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('check_clear_text_permitted', 301, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('pac_quick_check_enabled', 301, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('enable_certificate_reporting', 301, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enforce_chrome_ct_policy', 301, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_domain_reliability', 301, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('discard_domain_reliablity_uploads', 301, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('skip_reporting_send_permission_check', 301, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('reset_http_cache_backend', 301, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('split_auth_cache_by_network_anonymization_key', 302, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('require_network_anonymization_key', 302, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('win_permissions_set', 302, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('block_trust_tokens', 302, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shared_dictionary_enabled', 302, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('acam_preflight_spec_conformant', 302, 5, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('device_bound_sessions_enabled', 302, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('stale_dns_enabled', 302, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('quic_idle_connection_timeout_seconds_$flag', 303, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'quic_idle_connection_timeout_seconds_$value', originalFieldName: 'quic_idle_connection_timeout_seconds' }),
      mojo.internal.StructField('enable_encrypted_http_cache', 303, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 312]]);

// Struct: NetworkConditions
mojo.internal.Struct(
    network.mojom.NetworkConditionsSpec, 'network.mojom.NetworkConditions', [
      mojo.internal.StructField('latency', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('download_throughput', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('upload_throughput', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('packet_loss', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('rule_id', 32, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('packet_queue_length', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('offline', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('packet_reordering', 44, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: MatchedNetworkConditions
mojo.internal.Struct(
    network.mojom.MatchedNetworkConditionsSpec, 'network.mojom.MatchedNetworkConditions', [
      mojo.internal.StructField('pattern', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('conditions', 8, 0, network.mojom.NetworkConditionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SharedDictionaryInfo
mojo.internal.Struct(
    network.mojom.SharedDictionaryInfoSpec, 'network.mojom.SharedDictionaryInfo', [
      mojo.internal.StructField('match', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('match_dest', 8, 0, mojo.internal.Array(network.mojom.RequestDestinationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('dictionary_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_fetch_time', 32, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response_time', 40, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('expiration', 48, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_used_time', 56, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size', 64, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('hash', 72, 0, network.mojom.SHA256HashValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: SignedExchangeReport
mojo.internal.Struct(
    network.mojom.SignedExchangeReportSpec, 'network.mojom.SignedExchangeReport', [
      mojo.internal.StructField('type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('outer_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('inner_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cert_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('referrer', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('server_ip_address', 40, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('protocol', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('method', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('elapsed_time', 64, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status_code', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('success', 76, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: URLLoaderFactoryOverride
mojo.internal.Struct(
    network.mojom.URLLoaderFactoryOverrideSpec, 'network.mojom.URLLoaderFactoryOverride', [
      mojo.internal.StructField('overriding_factory', 0, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('overridden_factory_receiver', 8, 0, mojo.internal.InterfaceRequest(network.mojom.URLLoaderFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('skip_cors_enabled_scheme_check', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: URLLoaderFactoryParams
mojo.internal.Struct(
    network.mojom.URLLoaderFactoryParamsSpec, 'network.mojom.URLLoaderFactoryParams', [
      mojo.internal.StructField('request_initiator_origin_lock', 0, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('header_client', 8, 0, mojo.internal.InterfaceProxy(network.mojom.TrustedURLLoaderHeaderClientSpec), null, true, 0, undefined),
      mojo.internal.StructField('isolation_info', 16, 0, network.mojom.IsolationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('top_frame_id', 24, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('factory_override', 32, 0, network.mojom.URLLoaderFactoryOverrideSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_security_state', 40, 0, network.mojom.ClientSecurityStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('coep_reporter', 48, 0, mojo.internal.InterfaceProxy(network.mojom.CrossOriginEmbedderPolicyReporterRemote), null, true, 0, undefined),
      mojo.internal.StructField('dip_reporter', 56, 0, mojo.internal.InterfaceProxy(network.mojom.DocumentIsolationPolicyReporterRemote), null, true, 0, undefined),
      mojo.internal.StructField('cookie_observer', 64, 0, mojo.internal.InterfaceProxy(network.mojom.CookieAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('trust_token_observer', 72, 0, mojo.internal.InterfaceProxy(network.mojom.TrustTokenAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('shared_dictionary_observer', 80, 0, mojo.internal.InterfaceProxy(network.mojom.SharedDictionaryAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('url_loader_network_observer', 88, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderNetworkServiceObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('devtools_observer', 96, 0, mojo.internal.InterfaceProxy(network.mojom.DevToolsObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('device_bound_session_observer', 104, 0, mojo.internal.InterfaceProxy(network.mojom.DeviceBoundSessionAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('kPotentiallyPermit', 112, 0, network.mojom.TrustTokenOperationPolicyVerdict trust_token_issuance_policy =Spec.$, 0, false, 0, undefined),
      mojo.internal.StructField('kPotentiallyPermit', 120, 0, network.mojom.TrustTokenOperationPolicyVerdict trust_token_redemption_policy =Spec.$, 0, false, 0, undefined),
      mojo.internal.StructField('debug_tag', 128, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('cookie_setting_overrides', 136, 0, network.mojom.CookieSettingOverridesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_cookie_setting_overrides', 144, 0, network.mojom.CookieSettingOverridesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network_restrictions_id', 152, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('process_id', 160, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_orb_enabled', 164, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('ignore_isolated_world_origin', 164, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('unsafe_non_webby_initiator', 164, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_web_security', 164, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_secure_dns', 164, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_trusted', 164, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('automatically_assign_isolation_info', 164, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('require_cross_site_request_for_cookies', 164, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ignore_factory_reset', 165, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_main_frame_origin_recently_accessed', 165, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 176]]);

// Struct: NonceAndAllowlistedPatterns
mojo.internal.Struct(
    network.mojom.NonceAndAllowlistedPatternsSpec, 'network.mojom.NonceAndAllowlistedPatterns', [
      mojo.internal.StructField('nonce', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allowlisted_patterns', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: CustomProxyConnectionObserver
mojo.internal.Struct(
    network.mojom.CustomProxyConnectionObserver_OnFallback_ParamsSpec, 'network.mojom.CustomProxyConnectionObserver_OnFallback_Params', [
      mojo.internal.StructField('bad_chain', 0, 0, network.mojom.ProxyChainSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('net_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_ParamsSpec, 'network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_Params', [
      mojo.internal.StructField('proxy_chain', 0, 0, network.mojom.ProxyChainSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('chain_index', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('response_headers', 16, 0, network.mojom.HttpResponseHeadersSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [bad_chain, net_error],
      false);
  }

  onTunnelHeadersReceived(proxy_chain, chain_index, response_headers) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_ParamsSpec,
      null,
      [proxy_chain, chain_index, response_headers],
      false);
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

network.mojom.CustomProxyConnectionObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.CustomProxyConnectionObserver_OnFallback_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFallback(params.bad_chain, params.net_error);
          break;
        }
        case 1: {
          const params = network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTunnelHeadersReceived(params.proxy_chain, params.chain_index, params.response_headers);
          break;
        }
      }
    });
  }
};

network.mojom.CustomProxyConnectionObserverReceiver = network.mojom.CustomProxyConnectionObserverReceiver;

network.mojom.CustomProxyConnectionObserverPtr = network.mojom.CustomProxyConnectionObserverRemote;
network.mojom.CustomProxyConnectionObserverRequest = network.mojom.CustomProxyConnectionObserverPendingReceiver;


// Interface: CustomProxyConfigClient
mojo.internal.Struct(
    network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ParamsSpec, 'network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_Params', [
      mojo.internal.StructField('proxy_config', 0, 0, network.mojom.CustomProxyConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ResponseParamsSpec, 'network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ResponseParams', [
    ],
    [[0, 8]]);

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
      network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ResponseParamsSpec,
      [proxy_config],
      false);
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

network.mojom.CustomProxyConfigClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onCustomProxyConfigUpdated(params.proxy_config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

network.mojom.CustomProxyConfigClientReceiver = network.mojom.CustomProxyConfigClientReceiver;

network.mojom.CustomProxyConfigClientPtr = network.mojom.CustomProxyConfigClientRemote;
network.mojom.CustomProxyConfigClientRequest = network.mojom.CustomProxyConfigClientPendingReceiver;


// Interface: TrustedHeaderClient
mojo.internal.Struct(
    network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ParamsSpec, 'network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_Params', [
      mojo.internal.StructField('headers', 0, 0, network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParamsSpec, 'network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParams', [
      mojo.internal.StructField('headers', 0, 0, network.mojom.HttpRequestHeadersSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.TrustedHeaderClient_OnHeadersReceived_ParamsSpec, 'network.mojom.TrustedHeaderClient_OnHeadersReceived_Params', [
      mojo.internal.StructField('headers', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('remote_endpoint', 8, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ssl_info', 16, 0, network.mojom.SSLInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParamsSpec, 'network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParams', [
      mojo.internal.StructField('headers', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('preserve_fragment_on_redirect_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [headers],
      false);
  }

  onHeadersReceived(headers, remote_endpoint, ssl_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.TrustedHeaderClient_OnHeadersReceived_ParamsSpec,
      network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParamsSpec,
      [headers, remote_endpoint, ssl_info],
      false);
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

network.mojom.TrustedHeaderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBeforeSendHeaders(params.headers);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = network.mojom.TrustedHeaderClient_OnHeadersReceived_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onHeadersReceived(params.headers, params.remote_endpoint, params.ssl_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

network.mojom.TrustedHeaderClientReceiver = network.mojom.TrustedHeaderClientReceiver;

network.mojom.TrustedHeaderClientPtr = network.mojom.TrustedHeaderClientRemote;
network.mojom.TrustedHeaderClientRequest = network.mojom.TrustedHeaderClientPendingReceiver;


// Interface: TrustedURLLoaderHeaderClient
mojo.internal.Struct(
    network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_ParamsSpec, 'network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_Params', [
      mojo.internal.StructField('header_client', 0, 0, mojo.internal.InterfaceRequest(network.mojom.TrustedHeaderClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('request_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_ParamsSpec, 'network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_Params', [
      mojo.internal.StructField('request', 0, 0, network.mojom.URLRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('header_client', 8, 0, mojo.internal.InterfaceRequest(network.mojom.TrustedHeaderClientSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [request_id, header_client],
      false);
  }

  onLoaderForCorsPreflightCreated(request, header_client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_ParamsSpec,
      null,
      [request, header_client],
      false);
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

network.mojom.TrustedURLLoaderHeaderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onLoaderCreated(params.request_id, params.header_client);
          break;
        }
        case 1: {
          const params = network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onLoaderForCorsPreflightCreated(params.request, params.header_client);
          break;
        }
      }
    });
  }
};

network.mojom.TrustedURLLoaderHeaderClientReceiver = network.mojom.TrustedURLLoaderHeaderClientReceiver;

network.mojom.TrustedURLLoaderHeaderClientPtr = network.mojom.TrustedURLLoaderHeaderClientRemote;
network.mojom.TrustedURLLoaderHeaderClientRequest = network.mojom.TrustedURLLoaderHeaderClientPendingReceiver;


// Interface: PreloadedSharedDictionaryInfoHandle
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

network.mojom.PreloadedSharedDictionaryInfoHandleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
      }
    });
  }
};

network.mojom.PreloadedSharedDictionaryInfoHandleReceiver = network.mojom.PreloadedSharedDictionaryInfoHandleReceiver;

network.mojom.PreloadedSharedDictionaryInfoHandlePtr = network.mojom.PreloadedSharedDictionaryInfoHandleRemote;
network.mojom.PreloadedSharedDictionaryInfoHandleRequest = network.mojom.PreloadedSharedDictionaryInfoHandlePendingReceiver;


// Interface: NetworkContext
mojo.internal.Struct(
    network.mojom.NetworkContext_SetClient_ParamsSpec, 'network.mojom.NetworkContext_SetClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(network.mojom.NetworkContextClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CreateURLLoaderFactory_ParamsSpec, 'network.mojom.NetworkContext_CreateURLLoaderFactory_Params', [
      mojo.internal.StructField('url_loader_factory', 0, 0, mojo.internal.InterfaceRequest(network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('params', 8, 0, network.mojom.URLLoaderFactoryParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ResetURLLoaderFactories_ParamsSpec, 'network.mojom.NetworkContext_ResetURLLoaderFactories_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetViaObliviousHttp_ParamsSpec, 'network.mojom.NetworkContext_GetViaObliviousHttp_Params', [
      mojo.internal.StructField('request', 0, 0, network.mojom.ObliviousHttpRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(network.mojom.ObliviousHttpClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetCookieManager_ParamsSpec, 'network.mojom.NetworkContext_GetCookieManager_Params', [
      mojo.internal.StructField('cookie_manager', 0, 0, mojo.internal.InterfaceRequest(network.mojom.CookieManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetRestrictedCookieManager_ParamsSpec, 'network.mojom.NetworkContext_GetRestrictedCookieManager_Params', [
      mojo.internal.StructField('restricted_cookie_manager', 0, 0, mojo.internal.InterfaceRequest(network.mojom.RestrictedCookieManagerRemote), null, false, 0, undefined),
      mojo.internal.StructField('role', 8, 0, network.mojom.RestrictedCookieManagerRoleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin', 16, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('isolation_info', 24, 0, network.mojom.IsolationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cookie_setting_overrides', 32, 0, network.mojom.CookieSettingOverridesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_cookie_setting_overrides', 40, 0, network.mojom.CookieSettingOverridesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cookie_observer', 48, 0, mojo.internal.InterfaceProxy(network.mojom.CookieAccessObserverRemote), null, true, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_ParamsSpec, 'network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_Params', [
      mojo.internal.StructField('trust_token_query_answerer', 0, 0, mojo.internal.InterfaceRequest(network.mojom.TrustTokenQueryAnswererRemote), null, false, 0, undefined),
      mojo.internal.StructField('top_frame_origin', 8, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearTrustTokenData_ParamsSpec, 'network.mojom.NetworkContext_ClearTrustTokenData_Params', [
      mojo.internal.StructField('filter', 0, 0, network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearTrustTokenData_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearTrustTokenData_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ParamsSpec, 'network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParams', [
      mojo.internal.StructField('any_data_deleted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetStoredTrustTokenCounts_ParamsSpec, 'network.mojom.NetworkContext_GetStoredTrustTokenCounts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParamsSpec, 'network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParams', [
      mojo.internal.StructField('tokens', 0, 0, mojo.internal.Array(network.mojom.StoredTrustTokensForIssuerSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ParamsSpec, 'network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParamsSpec, 'network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParams', [
      mojo.internal.StructField('issuer_redemption_record_map', 0, 0, mojo.internal.Map(url.mojom.OriginSpec.$, mojo.internal.Array(network.mojom.ToplevelRedemptionRecordSpec.$, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_DeleteStoredTrustTokens_ParamsSpec, 'network.mojom.NetworkContext_DeleteStoredTrustTokens_Params', [
      mojo.internal.StructField('issuer', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParamsSpec, 'network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, network.mojom.DeleteStoredTrustTokensStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_SetBlockTrustTokens_ParamsSpec, 'network.mojom.NetworkContext_SetBlockTrustTokens_Params', [
      mojo.internal.StructField('block', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ParamsSpec, 'network.mojom.NetworkContext_ClearNetworkingHistoryBetween_Params', [
      mojo.internal.StructField('start_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('end_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearHttpCache_ParamsSpec, 'network.mojom.NetworkContext_ClearHttpCache_Params', [
      mojo.internal.StructField('start_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('end_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('filter', 16, 0, network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearHttpCache_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearHttpCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ComputeHttpCacheSize_ParamsSpec, 'network.mojom.NetworkContext_ComputeHttpCacheSize_Params', [
      mojo.internal.StructField('start_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('end_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParamsSpec, 'network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParams', [
      mojo.internal.StructField('size_or_error', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('is_upper_bound', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_NotifyBrowserIdle_ParamsSpec, 'network.mojom.NetworkContext_NotifyBrowserIdle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_NotifyExternalCacheHit_ParamsSpec, 'network.mojom.NetworkContext_NotifyExternalCacheHit_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('http_method', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('key', 16, 0, network.mojom.NetworkIsolationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('include_credentials', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearHostCache_ParamsSpec, 'network.mojom.NetworkContext_ClearHostCache_Params', [
      mojo.internal.StructField('filter', 0, 0, network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearHostCache_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearHostCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearHttpAuthCache_ParamsSpec, 'network.mojom.NetworkContext_ClearHttpAuthCache_Params', [
      mojo.internal.StructField('start_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('end_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('filter', 16, 0, network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearHttpAuthCache_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearHttpAuthCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearCorsPreflightCache_ParamsSpec, 'network.mojom.NetworkContext_ClearCorsPreflightCache_Params', [
      mojo.internal.StructField('filter', 0, 0, network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearCorsPreflightCache_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearCorsPreflightCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearReportingCacheReports_ParamsSpec, 'network.mojom.NetworkContext_ClearReportingCacheReports_Params', [
      mojo.internal.StructField('filter', 0, 0, network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearReportingCacheReports_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearReportingCacheReports_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearReportingCacheClients_ParamsSpec, 'network.mojom.NetworkContext_ClearReportingCacheClients_Params', [
      mojo.internal.StructField('filter', 0, 0, network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearReportingCacheClients_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearReportingCacheClients_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearNetworkErrorLogging_ParamsSpec, 'network.mojom.NetworkContext_ClearNetworkErrorLogging_Params', [
      mojo.internal.StructField('filter', 0, 0, network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearNetworkErrorLogging_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearNetworkErrorLogging_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearDomainReliability_ParamsSpec, 'network.mojom.NetworkContext_ClearDomainReliability_Params', [
      mojo.internal.StructField('filter', 0, 0, network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('mode', 8, 0, network.mojom.DomainReliabilityClearModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearDomainReliability_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearDomainReliability_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearSharedDictionaryCache_ParamsSpec, 'network.mojom.NetworkContext_ClearSharedDictionaryCache_Params', [
      mojo.internal.StructField('start_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('end_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('filter', 16, 0, network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearSharedDictionaryCache_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearSharedDictionaryCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ParamsSpec, 'network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_Params', [
      mojo.internal.StructField('isolation_key', 0, 0, network.mojom.SharedDictionaryIsolationKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_SetDocumentReportingEndpoints_ParamsSpec, 'network.mojom.NetworkContext_SetDocumentReportingEndpoints_Params', [
      mojo.internal.StructField('reporting_source', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin', 8, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('isolation_info', 16, 0, network.mojom.IsolationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('endpoints', 24, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_SetEnterpriseReportingEndpoints_ParamsSpec, 'network.mojom.NetworkContext_SetEnterpriseReportingEndpoints_Params', [
      mojo.internal.StructField('endpoints', 0, 0, mojo.internal.Map(mojo.internal.String, url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_SendReportsAndRemoveSource_ParamsSpec, 'network.mojom.NetworkContext_SendReportsAndRemoveSource_Params', [
      mojo.internal.StructField('reporting_source', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_QueueReport_ParamsSpec, 'network.mojom.NetworkContext_QueueReport_Params', [
      mojo.internal.StructField('type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('group', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reporting_source', 24, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('network_anonymization_key', 32, 0, network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('body', 40, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_QueueEnterpriseReport_ParamsSpec, 'network.mojom.NetworkContext_QueueEnterpriseReport_Params', [
      mojo.internal.StructField('type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('group', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('body', 24, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_QueueSignedExchangeReport_ParamsSpec, 'network.mojom.NetworkContext_QueueSignedExchangeReport_Params', [
      mojo.internal.StructField('report', 0, 0, network.mojom.SignedExchangeReportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network_anonymization_key', 8, 0, network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CloseAllConnections_ParamsSpec, 'network.mojom.NetworkContext_CloseAllConnections_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CloseAllConnections_ResponseParamsSpec, 'network.mojom.NetworkContext_CloseAllConnections_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CloseIdleConnections_ParamsSpec, 'network.mojom.NetworkContext_CloseIdleConnections_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CloseIdleConnections_ResponseParamsSpec, 'network.mojom.NetworkContext_CloseIdleConnections_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_SetNetworkConditions_ParamsSpec, 'network.mojom.NetworkContext_SetNetworkConditions_Params', [
      mojo.internal.StructField('throttling_profile_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('conditions', 8, 0, mojo.internal.Array(network.mojom.MatchedNetworkConditionsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_SetAcceptLanguage_ParamsSpec, 'network.mojom.NetworkContext_SetAcceptLanguage_Params', [
      mojo.internal.StructField('new_accept_language', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_SetEnableReferrers_ParamsSpec, 'network.mojom.NetworkContext_SetEnableReferrers_Params', [
      mojo.internal.StructField('enable_referrers', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_SetCTPolicy_ParamsSpec, 'network.mojom.NetworkContext_SetCTPolicy_Params', [
      mojo.internal.StructField('ct_policy', 0, 0, network.mojom.CTPolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CreateUDPSocket_ParamsSpec, 'network.mojom.NetworkContext_CreateUDPSocket_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.UDPSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('listener', 8, 0, mojo.internal.InterfaceProxy(network.mojom.UDPSocketListenerRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CreateRestrictedUDPSocket_ParamsSpec, 'network.mojom.NetworkContext_CreateRestrictedUDPSocket_Params', [
      mojo.internal.StructField('addr', 0, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mode', 8, 0, network.mojom.RestrictedUDPSocketModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 16, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('params', 24, 0, network.mojom.RestrictedUDPSocketParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('receiver', 32, 0, mojo.internal.InterfaceRequest(network.mojom.RestrictedUDPSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('listener', 40, 0, mojo.internal.InterfaceProxy(network.mojom.UDPSocketListenerRemote), null, true, 0, undefined),
      mojo.internal.StructField('allow_multicast', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParamsSpec, 'network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParams', [
      mojo.internal.StructField('local_addr_out', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CreateTCPServerSocket_ParamsSpec, 'network.mojom.NetworkContext_CreateTCPServerSocket_Params', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, network.mojom.TCPServerSocketOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 16, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('socket', 24, 0, mojo.internal.InterfaceRequest(network.mojom.TCPServerSocketRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParamsSpec, 'network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParams', [
      mojo.internal.StructField('local_addr_out', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CreateTCPConnectedSocket_ParamsSpec, 'network.mojom.NetworkContext_CreateTCPConnectedSocket_Params', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('remote_addr_list', 8, 0, network.mojom.AddressListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tcp_connected_socket_options', 16, 0, network.mojom.TCPConnectedSocketOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 24, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('socket', 32, 0, mojo.internal.InterfaceRequest(network.mojom.TCPConnectedSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 40, 0, mojo.internal.InterfaceProxy(network.mojom.SocketObserverRemote), null, true, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParamsSpec, 'network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParams', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('peer_addr', 8, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('receive_stream', 16, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('send_stream', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('result', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CreateTCPBoundSocket_ParamsSpec, 'network.mojom.NetworkContext_CreateTCPBoundSocket_Params', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 8, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('socket', 16, 0, mojo.internal.InterfaceRequest(network.mojom.TCPBoundSocketRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParamsSpec, 'network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParams', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_ParamsSpec, 'network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_Params', [
      mojo.internal.StructField('factory', 0, 0, mojo.internal.InterfaceRequest(network.mojom.ProxyResolvingSocketFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_LookUpProxyForURL_ParamsSpec, 'network.mojom.NetworkContext_LookUpProxyForURL_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network_anonymization_key', 8, 0, network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('proxy_lookup_client', 16, 0, mojo.internal.InterfaceProxy(network.mojom.ProxyLookupClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ForceReloadProxyConfig_ParamsSpec, 'network.mojom.NetworkContext_ForceReloadProxyConfig_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ForceReloadProxyConfig_ResponseParamsSpec, 'network.mojom.NetworkContext_ForceReloadProxyConfig_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearBadProxiesCache_ParamsSpec, 'network.mojom.NetworkContext_ClearBadProxiesCache_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearBadProxiesCache_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearBadProxiesCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CreateWebSocket_ParamsSpec, 'network.mojom.NetworkContext_CreateWebSocket_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('requested_protocols', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('site_for_cookies', 16, 0, network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('storage_access_api_status', 24, 0, network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('isolation_info', 32, 0, network.mojom.IsolationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('additional_headers', 40, 0, mojo.internal.Array(network.mojom.HttpHeaderSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('origin', 48, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_security_state', 56, 0, network.mojom.ClientSecurityStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 64, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('handshake_client', 72, 0, mojo.internal.InterfaceProxy(network.mojom.WebSocketHandshakeClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('url_loader_network_observer', 80, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderNetworkServiceObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('auth_handler', 88, 0, mojo.internal.InterfaceProxy(network.mojom.WebSocketAuthenticationHandlerRemote), null, true, 0, undefined),
      mojo.internal.StructField('header_client', 96, 0, mojo.internal.InterfaceProxy(network.mojom.TrustedHeaderClientSpec), null, true, 0, undefined),
      mojo.internal.StructField('throttling_profile_id', 104, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('process_id', 112, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('options', 116, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 128]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CreateWebTransport_ParamsSpec, 'network.mojom.NetworkContext_CreateWebTransport_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin', 8, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network_anonymization_key', 16, 0, network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fingerprints', 24, 0, mojo.internal.Array(network.mojom.WebTransportCertificateFingerprintSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('application_protocols', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('handshake_client', 40, 0, mojo.internal.InterfaceProxy(network.mojom.WebTransportHandshakeClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('url_loader_network_observer', 48, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderNetworkServiceObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('client_security_state', 56, 0, network.mojom.ClientSecurityStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 72]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CreateNetLogExporter_ParamsSpec, 'network.mojom.NetworkContext_CreateNetLogExporter_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.NetLogExporterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_PreconnectSockets_ParamsSpec, 'network.mojom.NetworkContext_PreconnectSockets_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('credentials_mode', 8, 0, network.mojom.CredentialsModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network_anonymization_key', 16, 0, network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 24, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('keepalive_config', 32, 0, network.mojom.ConnectionKeepAliveConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('observer_client', 40, 0, mojo.internal.InterfaceProxy(network.mojom.ConnectionChangeObserverClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('num_streams', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CreateP2PSocketManager_ParamsSpec, 'network.mojom.NetworkContext_CreateP2PSocketManager_Params', [
      mojo.internal.StructField('network_anonymization_key', 0, 0, network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(network.mojom.P2PTrustedSocketManagerClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('trusted_socket_manager', 16, 0, mojo.internal.InterfaceRequest(network.mojom.P2PTrustedSocketManagerRemote), null, false, 0, undefined),
      mojo.internal.StructField('socket_manager', 24, 0, mojo.internal.InterfaceRequest(network.mojom.P2PSocketManagerRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CreateMdnsResponder_ParamsSpec, 'network.mojom.NetworkContext_CreateMdnsResponder_Params', [
      mojo.internal.StructField('responder_receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.MdnsResponderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ResolveHost_ParamsSpec, 'network.mojom.NetworkContext_ResolveHost_Params', [
      mojo.internal.StructField('host', 0, 0, network.mojom.HostResolverHostSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network_anonymization_key', 8, 0, network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('optional_parameters', 16, 0, network.mojom.ResolveHostParametersSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('response_client', 24, 0, mojo.internal.InterfaceProxy(network.mojom.ResolveHostClientRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_CreateHostResolver_ParamsSpec, 'network.mojom.NetworkContext_CreateHostResolver_Params', [
      mojo.internal.StructField('config_overrides', 0, 0, network.mojom.DnsConfigOverridesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('host_resolver', 8, 0, mojo.internal.InterfaceRequest(network.mojom.HostResolverRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_VerifyCert_ParamsSpec, 'network.mojom.NetworkContext_VerifyCert_Params', [
      mojo.internal.StructField('certificate', 0, 0, network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('host_port', 8, 0, network.mojom.HostPortPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ocsp_response', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sct_list', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_VerifyCert_ResponseParamsSpec, 'network.mojom.NetworkContext_VerifyCert_ResponseParams', [
      mojo.internal.StructField('cv_result', 0, 0, network.mojom.CertVerifyResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_code', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('pkp_bypassed', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_VerifyCertForSignedExchange_ParamsSpec, 'network.mojom.NetworkContext_VerifyCertForSignedExchange_Params', [
      mojo.internal.StructField('certificate', 0, 0, network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('host_port', 8, 0, network.mojom.HostPortPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ocsp_response', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sct_list', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParamsSpec, 'network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParams', [
      mojo.internal.StructField('cv_result', 0, 0, network.mojom.CertVerifyResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_code', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('pkp_bypassed', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_Verify2QwacCertBinding_ParamsSpec, 'network.mojom.NetworkContext_Verify2QwacCertBinding_Params', [
      mojo.internal.StructField('binding', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('hostname', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tls_certificate', 16, 0, network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParamsSpec, 'network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParams', [
      mojo.internal.StructField('verified_cert', 0, 0, network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_AddHSTS_ParamsSpec, 'network.mojom.NetworkContext_AddHSTS_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('expiry', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('include_subdomains', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_AddHSTS_ResponseParamsSpec, 'network.mojom.NetworkContext_AddHSTS_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_IsHSTSActiveForHost_ParamsSpec, 'network.mojom.NetworkContext_IsHSTSActiveForHost_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_top_level_nav', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParamsSpec, 'network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetHSTSState_ParamsSpec, 'network.mojom.NetworkContext_GetHSTSState_Params', [
      mojo.internal.StructField('domain', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetHSTSState_ResponseParamsSpec, 'network.mojom.NetworkContext_GetHSTSState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ParamsSpec, 'network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_Params', [
      mojo.internal.StructField('source_origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allow_patterns', 8, 0, mojo.internal.Array(network.mojom.CorsOriginPatternSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('block_patterns', 16, 0, mojo.internal.Array(network.mojom.CorsOriginPatternSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParamsSpec, 'network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_DeleteDynamicDataForHost_ParamsSpec, 'network.mojom.NetworkContext_DeleteDynamicDataForHost_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParamsSpec, 'network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_ParamsSpec, 'network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_Params', [
      mojo.internal.StructField('split_auth_cache_by_network_anonymization_key', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ParamsSpec, 'network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParamsSpec, 'network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParams', [
      mojo.internal.StructField('cache_key', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ParamsSpec, 'network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_Params', [
      mojo.internal.StructField('cache_key', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ResponseParamsSpec, 'network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_AddAuthCacheEntry_ParamsSpec, 'network.mojom.NetworkContext_AddAuthCacheEntry_Params', [
      mojo.internal.StructField('challenge', 0, 0, network.mojom.AuthChallengeInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network_anonymization_key', 8, 0, network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('credentials', 16, 0, network.mojom.AuthCredentialsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_AddAuthCacheEntry_ResponseParamsSpec, 'network.mojom.NetworkContext_AddAuthCacheEntry_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_ParamsSpec, 'network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_LookupProxyAuthCredentials_ParamsSpec, 'network.mojom.NetworkContext_LookupProxyAuthCredentials_Params', [
      mojo.internal.StructField('proxy_server', 0, 0, network.mojom.ProxyServerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('auth_scheme', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('realm', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_LookupProxyAuthCredentials_ResponseParamsSpec, 'network.mojom.NetworkContext_LookupProxyAuthCredentials_ResponseParams', [
      mojo.internal.StructField('credentials', 0, 0, network.mojom.AuthCredentialsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ParamsSpec, 'network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_VerifyCertificateForTesting_ParamsSpec, 'network.mojom.NetworkContext_VerifyCertificateForTesting_Params', [
      mojo.internal.StructField('certificate', 0, 0, network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hostname', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('ocsp_response', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sct_list', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ParamsSpec, 'network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParams', [
      mojo.internal.StructField('trust_anchor_ids', 0, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ParamsSpec, 'network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_Params', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('upload_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ParamsSpec, 'network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_SetSCTAuditingMode_ParamsSpec, 'network.mojom.NetworkContext_SetSCTAuditingMode_Params', [
      mojo.internal.StructField('mode', 0, 0, network.mojom.SCTAuditingModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_AddReportingApiObserver_ParamsSpec, 'network.mojom.NetworkContext_AddReportingApiObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(network.mojom.ReportingApiObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ParamsSpec, 'network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParamsSpec, 'network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParams', [
      mojo.internal.StructField('usage_info', 0, 0, mojo.internal.Array(network.mojom.SharedDictionaryUsageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetSharedDictionaryInfo_ParamsSpec, 'network.mojom.NetworkContext_GetSharedDictionaryInfo_Params', [
      mojo.internal.StructField('isolation_key', 0, 0, network.mojom.SharedDictionaryIsolationKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParamsSpec, 'network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParams', [
      mojo.internal.StructField('dictionaries', 0, 0, mojo.internal.Array(network.mojom.SharedDictionaryInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ParamsSpec, 'network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_Params', [
      mojo.internal.StructField('start_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('end_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParamsSpec, 'network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParams', [
      mojo.internal.StructField('origins', 0, 0, mojo.internal.Array(url.mojom.OriginSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_ParamsSpec, 'network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_Params', [
      mojo.internal.StructField('cache_max_size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_ParamsSpec, 'network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_Params', [
      mojo.internal.StructField('urls', 0, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('preload_handle', 8, 0, mojo.internal.InterfaceRequest(network.mojom.PreloadedSharedDictionaryInfoHandleSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ParamsSpec, 'network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_ParamsSpec, 'network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_Params', [
      mojo.internal.StructField('host', 0, 0, network.mojom.HostPortPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('certificate', 8, 0, network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_FlushMatchingCachedClientCert_ParamsSpec, 'network.mojom.NetworkContext_FlushMatchingCachedClientCert_Params', [
      mojo.internal.StructField('certificate', 0, 0, network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_FlushClientCertCache_ParamsSpec, 'network.mojom.NetworkContext_FlushClientCertCache_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_RevokeNetworkForNonces_ParamsSpec, 'network.mojom.NetworkContext_RevokeNetworkForNonces_Params', [
      mojo.internal.StructField('nonces_to_patterns', 0, 0, mojo.internal.Array(network.mojom.NonceAndAllowlistedPatternsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_RevokeNetworkForNonces_ResponseParamsSpec, 'network.mojom.NetworkContext_RevokeNetworkForNonces_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ClearNonces_ParamsSpec, 'network.mojom.NetworkContext_ClearNonces_Params', [
      mojo.internal.StructField('nonces', 0, 0, mojo.internal.Array(mojo_base.mojom.UnguessableTokenSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ParamsSpec, 'network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_Params', [
      mojo.internal.StructField('exempted_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('nonce', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ResponseParamsSpec, 'network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_Prefetch_ParamsSpec, 'network.mojom.NetworkContext_Prefetch_Params', [
      mojo.internal.StructField('request', 0, 0, network.mojom.URLRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 8, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('options', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetBoundNetworkForTesting_ParamsSpec, 'network.mojom.NetworkContext_GetBoundNetworkForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParams', [
      mojo.internal.StructField('bound_network', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_GetDeviceBoundSessionManager_ParamsSpec, 'network.mojom.NetworkContext_GetDeviceBoundSessionManager_Params', [
      mojo.internal.StructField('device_bound_session_manager', 0, 0, mojo.internal.InterfaceRequest(network.mojom.DeviceBoundSessionManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContext_AddQuicHints_ParamsSpec, 'network.mojom.NetworkContext_AddQuicHints_Params', [
      mojo.internal.StructField('origins', 0, 0, mojo.internal.Array(url.mojom.SchemeHostPortSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('network_anonymization_key', 8, 0, network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [client],
      false);
  }

  createURLLoaderFactory(url_loader_factory, params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.NetworkContext_CreateURLLoaderFactory_ParamsSpec,
      null,
      [url_loader_factory, params],
      false);
  }

  resetURLLoaderFactories() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.NetworkContext_ResetURLLoaderFactories_ParamsSpec,
      null,
      [],
      false);
  }

  getViaObliviousHttp(request, client) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.NetworkContext_GetViaObliviousHttp_ParamsSpec,
      null,
      [request, client],
      false);
  }

  getCookieManager(cookie_manager) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.NetworkContext_GetCookieManager_ParamsSpec,
      null,
      [cookie_manager],
      false);
  }

  getRestrictedCookieManager(restricted_cookie_manager, role, origin, isolation_info, cookie_setting_overrides, devtools_cookie_setting_overrides, cookie_observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.NetworkContext_GetRestrictedCookieManager_ParamsSpec,
      null,
      [restricted_cookie_manager, role, origin, isolation_info, cookie_setting_overrides, devtools_cookie_setting_overrides, cookie_observer],
      false);
  }

  getTrustTokenQueryAnswerer(trust_token_query_answerer, top_frame_origin) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_ParamsSpec,
      null,
      [trust_token_query_answerer, top_frame_origin],
      false);
  }

  clearTrustTokenData(filter) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      network.mojom.NetworkContext_ClearTrustTokenData_ParamsSpec,
      network.mojom.NetworkContext_ClearTrustTokenData_ResponseParamsSpec,
      [filter],
      false);
  }

  clearTrustTokenSessionOnlyData() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ParamsSpec,
      network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParamsSpec,
      [],
      false);
  }

  getStoredTrustTokenCounts() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      network.mojom.NetworkContext_GetStoredTrustTokenCounts_ParamsSpec,
      network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParamsSpec,
      [],
      false);
  }

  getPrivateStateTokenRedemptionRecords() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ParamsSpec,
      network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParamsSpec,
      [],
      false);
  }

  deleteStoredTrustTokens(issuer) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      network.mojom.NetworkContext_DeleteStoredTrustTokens_ParamsSpec,
      network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParamsSpec,
      [issuer],
      false);
  }

  setBlockTrustTokens(block) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      network.mojom.NetworkContext_SetBlockTrustTokens_ParamsSpec,
      null,
      [block],
      false);
  }

  clearNetworkingHistoryBetween(start_time, end_time) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ParamsSpec,
      network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ResponseParamsSpec,
      [start_time, end_time],
      false);
  }

  clearHttpCache(start_time, end_time, filter) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      network.mojom.NetworkContext_ClearHttpCache_ParamsSpec,
      network.mojom.NetworkContext_ClearHttpCache_ResponseParamsSpec,
      [start_time, end_time, filter],
      false);
  }

  computeHttpCacheSize(start_time, end_time) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      network.mojom.NetworkContext_ComputeHttpCacheSize_ParamsSpec,
      network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParamsSpec,
      [start_time, end_time],
      false);
  }

  notifyBrowserIdle() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      network.mojom.NetworkContext_NotifyBrowserIdle_ParamsSpec,
      null,
      [],
      false);
  }

  notifyExternalCacheHit(url, http_method, key, include_credentials) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      network.mojom.NetworkContext_NotifyExternalCacheHit_ParamsSpec,
      null,
      [url, http_method, key, include_credentials],
      false);
  }

  clearHostCache(filter) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      network.mojom.NetworkContext_ClearHostCache_ParamsSpec,
      network.mojom.NetworkContext_ClearHostCache_ResponseParamsSpec,
      [filter],
      false);
  }

  clearHttpAuthCache(start_time, end_time, filter) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      network.mojom.NetworkContext_ClearHttpAuthCache_ParamsSpec,
      network.mojom.NetworkContext_ClearHttpAuthCache_ResponseParamsSpec,
      [start_time, end_time, filter],
      false);
  }

  clearCorsPreflightCache(filter) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      network.mojom.NetworkContext_ClearCorsPreflightCache_ParamsSpec,
      network.mojom.NetworkContext_ClearCorsPreflightCache_ResponseParamsSpec,
      [filter],
      false);
  }

  clearReportingCacheReports(filter) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      network.mojom.NetworkContext_ClearReportingCacheReports_ParamsSpec,
      network.mojom.NetworkContext_ClearReportingCacheReports_ResponseParamsSpec,
      [filter],
      false);
  }

  clearReportingCacheClients(filter) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      network.mojom.NetworkContext_ClearReportingCacheClients_ParamsSpec,
      network.mojom.NetworkContext_ClearReportingCacheClients_ResponseParamsSpec,
      [filter],
      false);
  }

  clearNetworkErrorLogging(filter) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      network.mojom.NetworkContext_ClearNetworkErrorLogging_ParamsSpec,
      network.mojom.NetworkContext_ClearNetworkErrorLogging_ResponseParamsSpec,
      [filter],
      false);
  }

  clearDomainReliability(filter, mode) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      network.mojom.NetworkContext_ClearDomainReliability_ParamsSpec,
      network.mojom.NetworkContext_ClearDomainReliability_ResponseParamsSpec,
      [filter, mode],
      false);
  }

  clearSharedDictionaryCache(start_time, end_time, filter) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      network.mojom.NetworkContext_ClearSharedDictionaryCache_ParamsSpec,
      network.mojom.NetworkContext_ClearSharedDictionaryCache_ResponseParamsSpec,
      [start_time, end_time, filter],
      false);
  }

  clearSharedDictionaryCacheForIsolationKey(isolation_key) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ParamsSpec,
      network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ResponseParamsSpec,
      [isolation_key],
      false);
  }

  setDocumentReportingEndpoints(reporting_source, origin, isolation_info, endpoints) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      network.mojom.NetworkContext_SetDocumentReportingEndpoints_ParamsSpec,
      null,
      [reporting_source, origin, isolation_info, endpoints],
      false);
  }

  setEnterpriseReportingEndpoints(endpoints) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      network.mojom.NetworkContext_SetEnterpriseReportingEndpoints_ParamsSpec,
      null,
      [endpoints],
      false);
  }

  sendReportsAndRemoveSource(reporting_source) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      network.mojom.NetworkContext_SendReportsAndRemoveSource_ParamsSpec,
      null,
      [reporting_source],
      false);
  }

  queueReport(type, group, url, reporting_source, network_anonymization_key, body) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      network.mojom.NetworkContext_QueueReport_ParamsSpec,
      null,
      [type, group, url, reporting_source, network_anonymization_key, body],
      false);
  }

  queueEnterpriseReport(type, group, url, body) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      network.mojom.NetworkContext_QueueEnterpriseReport_ParamsSpec,
      null,
      [type, group, url, body],
      false);
  }

  queueSignedExchangeReport(report, network_anonymization_key) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      network.mojom.NetworkContext_QueueSignedExchangeReport_ParamsSpec,
      null,
      [report, network_anonymization_key],
      false);
  }

  closeAllConnections() {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      network.mojom.NetworkContext_CloseAllConnections_ParamsSpec,
      network.mojom.NetworkContext_CloseAllConnections_ResponseParamsSpec,
      [],
      false);
  }

  closeIdleConnections() {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      network.mojom.NetworkContext_CloseIdleConnections_ParamsSpec,
      network.mojom.NetworkContext_CloseIdleConnections_ResponseParamsSpec,
      [],
      false);
  }

  setNetworkConditions(throttling_profile_id, conditions) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      network.mojom.NetworkContext_SetNetworkConditions_ParamsSpec,
      null,
      [throttling_profile_id, conditions],
      false);
  }

  setAcceptLanguage(new_accept_language) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      network.mojom.NetworkContext_SetAcceptLanguage_ParamsSpec,
      null,
      [new_accept_language],
      false);
  }

  setEnableReferrers(enable_referrers) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      network.mojom.NetworkContext_SetEnableReferrers_ParamsSpec,
      null,
      [enable_referrers],
      false);
  }

  setCTPolicy(ct_policy) {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      network.mojom.NetworkContext_SetCTPolicy_ParamsSpec,
      null,
      [ct_policy],
      false);
  }

  createUDPSocket(receiver, listener) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      network.mojom.NetworkContext_CreateUDPSocket_ParamsSpec,
      null,
      [receiver, listener],
      false);
  }

  createRestrictedUDPSocket(addr, mode, traffic_annotation, params, receiver, listener, allow_multicast) {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      network.mojom.NetworkContext_CreateRestrictedUDPSocket_ParamsSpec,
      network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParamsSpec,
      [addr, mode, traffic_annotation, params, receiver, listener, allow_multicast],
      false);
  }

  createTCPServerSocket(local_addr, options, traffic_annotation, socket) {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      network.mojom.NetworkContext_CreateTCPServerSocket_ParamsSpec,
      network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParamsSpec,
      [local_addr, options, traffic_annotation, socket],
      false);
  }

  createTCPConnectedSocket(local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer) {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      network.mojom.NetworkContext_CreateTCPConnectedSocket_ParamsSpec,
      network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParamsSpec,
      [local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer],
      false);
  }

  createTCPBoundSocket(local_addr, traffic_annotation, socket) {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      network.mojom.NetworkContext_CreateTCPBoundSocket_ParamsSpec,
      network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParamsSpec,
      [local_addr, traffic_annotation, socket],
      false);
  }

  createProxyResolvingSocketFactory(factory) {
    // Ordinal: 44
    return this.proxy.sendMessage(
      44,  // ordinal
      network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_ParamsSpec,
      null,
      [factory],
      false);
  }

  lookUpProxyForURL(url, network_anonymization_key, proxy_lookup_client) {
    // Ordinal: 45
    return this.proxy.sendMessage(
      45,  // ordinal
      network.mojom.NetworkContext_LookUpProxyForURL_ParamsSpec,
      null,
      [url, network_anonymization_key, proxy_lookup_client],
      false);
  }

  forceReloadProxyConfig() {
    // Ordinal: 46
    return this.proxy.sendMessage(
      46,  // ordinal
      network.mojom.NetworkContext_ForceReloadProxyConfig_ParamsSpec,
      network.mojom.NetworkContext_ForceReloadProxyConfig_ResponseParamsSpec,
      [],
      false);
  }

  clearBadProxiesCache() {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      network.mojom.NetworkContext_ClearBadProxiesCache_ParamsSpec,
      network.mojom.NetworkContext_ClearBadProxiesCache_ResponseParamsSpec,
      [],
      false);
  }

  createWebSocket(url, requested_protocols, site_for_cookies, storage_access_api_status, isolation_info, additional_headers, process_id, origin, client_security_state, options, traffic_annotation, handshake_client, url_loader_network_observer, auth_handler, header_client, throttling_profile_id) {
    // Ordinal: 48
    return this.proxy.sendMessage(
      48,  // ordinal
      network.mojom.NetworkContext_CreateWebSocket_ParamsSpec,
      null,
      [url, requested_protocols, site_for_cookies, storage_access_api_status, isolation_info, additional_headers, process_id, origin, client_security_state, options, traffic_annotation, handshake_client, url_loader_network_observer, auth_handler, header_client, throttling_profile_id],
      false);
  }

  createWebTransport(url, origin, network_anonymization_key, fingerprints, application_protocols, handshake_client, url_loader_network_observer, client_security_state) {
    // Ordinal: 49
    return this.proxy.sendMessage(
      49,  // ordinal
      network.mojom.NetworkContext_CreateWebTransport_ParamsSpec,
      null,
      [url, origin, network_anonymization_key, fingerprints, application_protocols, handshake_client, url_loader_network_observer, client_security_state],
      false);
  }

  createNetLogExporter(receiver) {
    // Ordinal: 50
    return this.proxy.sendMessage(
      50,  // ordinal
      network.mojom.NetworkContext_CreateNetLogExporter_ParamsSpec,
      null,
      [receiver],
      false);
  }

  preconnectSockets(num_streams, url, credentials_mode, network_anonymization_key, traffic_annotation, keepalive_config, observer_client) {
    // Ordinal: 51
    return this.proxy.sendMessage(
      51,  // ordinal
      network.mojom.NetworkContext_PreconnectSockets_ParamsSpec,
      null,
      [num_streams, url, credentials_mode, network_anonymization_key, traffic_annotation, keepalive_config, observer_client],
      false);
  }

  createP2PSocketManager(network_anonymization_key, client, trusted_socket_manager, socket_manager) {
    // Ordinal: 52
    return this.proxy.sendMessage(
      52,  // ordinal
      network.mojom.NetworkContext_CreateP2PSocketManager_ParamsSpec,
      null,
      [network_anonymization_key, client, trusted_socket_manager, socket_manager],
      false);
  }

  createMdnsResponder(responder_receiver) {
    // Ordinal: 53
    return this.proxy.sendMessage(
      53,  // ordinal
      network.mojom.NetworkContext_CreateMdnsResponder_ParamsSpec,
      null,
      [responder_receiver],
      false);
  }

  resolveHost(host, network_anonymization_key, optional_parameters, response_client) {
    // Ordinal: 54
    return this.proxy.sendMessage(
      54,  // ordinal
      network.mojom.NetworkContext_ResolveHost_ParamsSpec,
      null,
      [host, network_anonymization_key, optional_parameters, response_client],
      false);
  }

  createHostResolver(config_overrides, host_resolver) {
    // Ordinal: 55
    return this.proxy.sendMessage(
      55,  // ordinal
      network.mojom.NetworkContext_CreateHostResolver_ParamsSpec,
      null,
      [config_overrides, host_resolver],
      false);
  }

  verifyCert(certificate, host_port, ocsp_response, sct_list) {
    // Ordinal: 56
    return this.proxy.sendMessage(
      56,  // ordinal
      network.mojom.NetworkContext_VerifyCert_ParamsSpec,
      network.mojom.NetworkContext_VerifyCert_ResponseParamsSpec,
      [certificate, host_port, ocsp_response, sct_list],
      false);
  }

  verifyCertForSignedExchange(certificate, host_port, ocsp_response, sct_list) {
    // Ordinal: 57
    return this.proxy.sendMessage(
      57,  // ordinal
      network.mojom.NetworkContext_VerifyCertForSignedExchange_ParamsSpec,
      network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParamsSpec,
      [certificate, host_port, ocsp_response, sct_list],
      false);
  }

  verify2QwacCertBinding(binding, hostname, tls_certificate) {
    // Ordinal: 58
    return this.proxy.sendMessage(
      58,  // ordinal
      network.mojom.NetworkContext_Verify2QwacCertBinding_ParamsSpec,
      network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParamsSpec,
      [binding, hostname, tls_certificate],
      false);
  }

  addHSTS(host, expiry, include_subdomains) {
    // Ordinal: 59
    return this.proxy.sendMessage(
      59,  // ordinal
      network.mojom.NetworkContext_AddHSTS_ParamsSpec,
      network.mojom.NetworkContext_AddHSTS_ResponseParamsSpec,
      [host, expiry, include_subdomains],
      false);
  }

  isHSTSActiveForHost(host, is_top_level_nav) {
    // Ordinal: 60
    return this.proxy.sendMessage(
      60,  // ordinal
      network.mojom.NetworkContext_IsHSTSActiveForHost_ParamsSpec,
      network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParamsSpec,
      [host, is_top_level_nav],
      false);
  }

  getHSTSState(domain) {
    // Ordinal: 61
    return this.proxy.sendMessage(
      61,  // ordinal
      network.mojom.NetworkContext_GetHSTSState_ParamsSpec,
      network.mojom.NetworkContext_GetHSTSState_ResponseParamsSpec,
      [domain],
      false);
  }

  setCorsOriginAccessListsForOrigin(source_origin, allow_patterns, block_patterns) {
    // Ordinal: 62
    return this.proxy.sendMessage(
      62,  // ordinal
      network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ParamsSpec,
      network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParamsSpec,
      [source_origin, allow_patterns, block_patterns],
      false);
  }

  deleteDynamicDataForHost(host) {
    // Ordinal: 63
    return this.proxy.sendMessage(
      63,  // ordinal
      network.mojom.NetworkContext_DeleteDynamicDataForHost_ParamsSpec,
      network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParamsSpec,
      [host],
      false);
  }

  setSplitAuthCacheByNetworkAnonymizationKey(split_auth_cache_by_network_anonymization_key) {
    // Ordinal: 64
    return this.proxy.sendMessage(
      64,  // ordinal
      network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_ParamsSpec,
      null,
      [split_auth_cache_by_network_anonymization_key],
      false);
  }

  saveHttpAuthCacheProxyEntries() {
    // Ordinal: 65
    return this.proxy.sendMessage(
      65,  // ordinal
      network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ParamsSpec,
      network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParamsSpec,
      [],
      false);
  }

  loadHttpAuthCacheProxyEntries(cache_key) {
    // Ordinal: 66
    return this.proxy.sendMessage(
      66,  // ordinal
      network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ParamsSpec,
      network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ResponseParamsSpec,
      [cache_key],
      false);
  }

  addAuthCacheEntry(challenge, network_anonymization_key, credentials) {
    // Ordinal: 67
    return this.proxy.sendMessage(
      67,  // ordinal
      network.mojom.NetworkContext_AddAuthCacheEntry_ParamsSpec,
      network.mojom.NetworkContext_AddAuthCacheEntry_ResponseParamsSpec,
      [challenge, network_anonymization_key, credentials],
      false);
  }

  setCorsNonWildcardRequestHeadersSupport(value) {
    // Ordinal: 68
    return this.proxy.sendMessage(
      68,  // ordinal
      network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_ParamsSpec,
      null,
      [value],
      false);
  }

  lookupProxyAuthCredentials(proxy_server, auth_scheme, realm) {
    // Ordinal: 69
    return this.proxy.sendMessage(
      69,  // ordinal
      network.mojom.NetworkContext_LookupProxyAuthCredentials_ParamsSpec,
      network.mojom.NetworkContext_LookupProxyAuthCredentials_ResponseParamsSpec,
      [proxy_server, auth_scheme, realm],
      false);
  }

  enableStaticKeyPinningForTesting() {
    // Ordinal: 70
    return this.proxy.sendMessage(
      70,  // ordinal
      network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ParamsSpec,
      network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ResponseParamsSpec,
      [],
      false);
  }

  verifyCertificateForTesting(certificate, hostname, ocsp_response, sct_list) {
    // Ordinal: 71
    return this.proxy.sendMessage(
      71,  // ordinal
      network.mojom.NetworkContext_VerifyCertificateForTesting_ParamsSpec,
      network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParamsSpec,
      [certificate, hostname, ocsp_response, sct_list],
      false);
  }

  getTrustAnchorIDsForTesting() {
    // Ordinal: 72
    return this.proxy.sendMessage(
      72,  // ordinal
      network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ParamsSpec,
      network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParamsSpec,
      [],
      false);
  }

  addDomainReliabilityContextForTesting(origin, upload_url) {
    // Ordinal: 73
    return this.proxy.sendMessage(
      73,  // ordinal
      network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ParamsSpec,
      network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ResponseParamsSpec,
      [origin, upload_url],
      false);
  }

  forceDomainReliabilityUploadsForTesting() {
    // Ordinal: 74
    return this.proxy.sendMessage(
      74,  // ordinal
      network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ParamsSpec,
      network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParamsSpec,
      [],
      false);
  }

  setSCTAuditingMode(mode) {
    // Ordinal: 75
    return this.proxy.sendMessage(
      75,  // ordinal
      network.mojom.NetworkContext_SetSCTAuditingMode_ParamsSpec,
      null,
      [mode],
      false);
  }

  addReportingApiObserver(observer) {
    // Ordinal: 76
    return this.proxy.sendMessage(
      76,  // ordinal
      network.mojom.NetworkContext_AddReportingApiObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  getSharedDictionaryUsageInfo() {
    // Ordinal: 77
    return this.proxy.sendMessage(
      77,  // ordinal
      network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ParamsSpec,
      network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParamsSpec,
      [],
      false);
  }

  getSharedDictionaryInfo(isolation_key) {
    // Ordinal: 78
    return this.proxy.sendMessage(
      78,  // ordinal
      network.mojom.NetworkContext_GetSharedDictionaryInfo_ParamsSpec,
      network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParamsSpec,
      [isolation_key],
      false);
  }

  getSharedDictionaryOriginsBetween(start_time, end_time) {
    // Ordinal: 79
    return this.proxy.sendMessage(
      79,  // ordinal
      network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ParamsSpec,
      network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParamsSpec,
      [start_time, end_time],
      false);
  }

  setSharedDictionaryCacheMaxSize(cache_max_size) {
    // Ordinal: 80
    return this.proxy.sendMessage(
      80,  // ordinal
      network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_ParamsSpec,
      null,
      [cache_max_size],
      false);
  }

  preloadSharedDictionaryInfoForDocument(urls, preload_handle) {
    // Ordinal: 81
    return this.proxy.sendMessage(
      81,  // ordinal
      network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_ParamsSpec,
      null,
      [urls, preload_handle],
      false);
  }

  hasPreloadedSharedDictionaryInfoForTesting() {
    // Ordinal: 82
    return this.proxy.sendMessage(
      82,  // ordinal
      network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ParamsSpec,
      network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParamsSpec,
      [],
      false);
  }

  flushCachedClientCertIfNeeded(host, certificate) {
    // Ordinal: 83
    return this.proxy.sendMessage(
      83,  // ordinal
      network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_ParamsSpec,
      null,
      [host, certificate],
      false);
  }

  flushMatchingCachedClientCert(certificate) {
    // Ordinal: 84
    return this.proxy.sendMessage(
      84,  // ordinal
      network.mojom.NetworkContext_FlushMatchingCachedClientCert_ParamsSpec,
      null,
      [certificate],
      false);
  }

  flushClientCertCache() {
    // Ordinal: 85
    return this.proxy.sendMessage(
      85,  // ordinal
      network.mojom.NetworkContext_FlushClientCertCache_ParamsSpec,
      null,
      [],
      false);
  }

  revokeNetworkForNonces(nonces_to_patterns) {
    // Ordinal: 86
    return this.proxy.sendMessage(
      86,  // ordinal
      network.mojom.NetworkContext_RevokeNetworkForNonces_ParamsSpec,
      network.mojom.NetworkContext_RevokeNetworkForNonces_ResponseParamsSpec,
      [nonces_to_patterns],
      false);
  }

  clearNonces(nonces) {
    // Ordinal: 87
    return this.proxy.sendMessage(
      87,  // ordinal
      network.mojom.NetworkContext_ClearNonces_ParamsSpec,
      null,
      [nonces],
      false);
  }

  exemptUrlFromNetworkRevocationForNonce(exempted_url, nonce) {
    // Ordinal: 88
    return this.proxy.sendMessage(
      88,  // ordinal
      network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ParamsSpec,
      network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ResponseParamsSpec,
      [exempted_url, nonce],
      false);
  }

  prefetch(request_id, options, request, traffic_annotation) {
    // Ordinal: 89
    return this.proxy.sendMessage(
      89,  // ordinal
      network.mojom.NetworkContext_Prefetch_ParamsSpec,
      null,
      [request_id, options, request, traffic_annotation],
      false);
  }

  getBoundNetworkForTesting() {
    // Ordinal: 90
    return this.proxy.sendMessage(
      90,  // ordinal
      network.mojom.NetworkContext_GetBoundNetworkForTesting_ParamsSpec,
      network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParamsSpec,
      [],
      false);
  }

  getDeviceBoundSessionManager(device_bound_session_manager) {
    // Ordinal: 91
    return this.proxy.sendMessage(
      91,  // ordinal
      network.mojom.NetworkContext_GetDeviceBoundSessionManager_ParamsSpec,
      null,
      [device_bound_session_manager],
      false);
  }

  addQuicHints(origins, network_anonymization_key) {
    // Ordinal: 92
    return this.proxy.sendMessage(
      92,  // ordinal
      network.mojom.NetworkContext_AddQuicHints_ParamsSpec,
      null,
      [origins, network_anonymization_key],
      false);
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

network.mojom.NetworkContextReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.NetworkContext_SetClient_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setClient(params.client);
          break;
        }
        case 1: {
          const params = network.mojom.NetworkContext_CreateURLLoaderFactory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createURLLoaderFactory(params.url_loader_factory, params.params);
          break;
        }
        case 2: {
          const params = network.mojom.NetworkContext_ResetURLLoaderFactories_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resetURLLoaderFactories();
          break;
        }
        case 3: {
          const params = network.mojom.NetworkContext_GetViaObliviousHttp_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getViaObliviousHttp(params.request, params.client);
          break;
        }
        case 4: {
          const params = network.mojom.NetworkContext_GetCookieManager_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getCookieManager(params.cookie_manager);
          break;
        }
        case 5: {
          const params = network.mojom.NetworkContext_GetRestrictedCookieManager_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getRestrictedCookieManager(params.restricted_cookie_manager, params.role, params.origin, params.isolation_info, params.cookie_setting_overrides, params.devtools_cookie_setting_overrides, params.cookie_observer);
          break;
        }
        case 6: {
          const params = network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getTrustTokenQueryAnswerer(params.trust_token_query_answerer, params.top_frame_origin);
          break;
        }
        case 7: {
          const params = network.mojom.NetworkContext_ClearTrustTokenData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearTrustTokenData(params.filter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_ClearTrustTokenData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearTrustTokenSessionOnlyData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = network.mojom.NetworkContext_GetStoredTrustTokenCounts_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getStoredTrustTokenCounts();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const params = network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPrivateStateTokenRedemptionRecords();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const params = network.mojom.NetworkContext_DeleteStoredTrustTokens_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deleteStoredTrustTokens(params.issuer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const params = network.mojom.NetworkContext_SetBlockTrustTokens_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBlockTrustTokens(params.block);
          break;
        }
        case 13: {
          const params = network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearNetworkingHistoryBetween(params.start_time, params.end_time);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const params = network.mojom.NetworkContext_ClearHttpCache_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearHttpCache(params.start_time, params.end_time, params.filter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_ClearHttpCache_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const params = network.mojom.NetworkContext_ComputeHttpCacheSize_ParamsSpec.$.decode(message.payload);
          const result = this.impl.computeHttpCacheSize(params.start_time, params.end_time);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const params = network.mojom.NetworkContext_NotifyBrowserIdle_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyBrowserIdle();
          break;
        }
        case 17: {
          const params = network.mojom.NetworkContext_NotifyExternalCacheHit_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyExternalCacheHit(params.url, params.http_method, params.key, params.include_credentials);
          break;
        }
        case 18: {
          const params = network.mojom.NetworkContext_ClearHostCache_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearHostCache(params.filter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_ClearHostCache_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const params = network.mojom.NetworkContext_ClearHttpAuthCache_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearHttpAuthCache(params.start_time, params.end_time, params.filter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_ClearHttpAuthCache_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const params = network.mojom.NetworkContext_ClearCorsPreflightCache_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearCorsPreflightCache(params.filter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_ClearCorsPreflightCache_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const params = network.mojom.NetworkContext_ClearReportingCacheReports_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearReportingCacheReports(params.filter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_ClearReportingCacheReports_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const params = network.mojom.NetworkContext_ClearReportingCacheClients_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearReportingCacheClients(params.filter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_ClearReportingCacheClients_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 23: {
          const params = network.mojom.NetworkContext_ClearNetworkErrorLogging_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearNetworkErrorLogging(params.filter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_ClearNetworkErrorLogging_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const params = network.mojom.NetworkContext_ClearDomainReliability_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearDomainReliability(params.filter, params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_ClearDomainReliability_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const params = network.mojom.NetworkContext_ClearSharedDictionaryCache_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearSharedDictionaryCache(params.start_time, params.end_time, params.filter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_ClearSharedDictionaryCache_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const params = network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearSharedDictionaryCacheForIsolationKey(params.isolation_key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const params = network.mojom.NetworkContext_SetDocumentReportingEndpoints_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setDocumentReportingEndpoints(params.reporting_source, params.origin, params.isolation_info, params.endpoints);
          break;
        }
        case 28: {
          const params = network.mojom.NetworkContext_SetEnterpriseReportingEndpoints_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setEnterpriseReportingEndpoints(params.endpoints);
          break;
        }
        case 29: {
          const params = network.mojom.NetworkContext_SendReportsAndRemoveSource_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendReportsAndRemoveSource(params.reporting_source);
          break;
        }
        case 30: {
          const params = network.mojom.NetworkContext_QueueReport_ParamsSpec.$.decode(message.payload);
          const result = this.impl.queueReport(params.type, params.group, params.url, params.reporting_source, params.network_anonymization_key, params.body);
          break;
        }
        case 31: {
          const params = network.mojom.NetworkContext_QueueEnterpriseReport_ParamsSpec.$.decode(message.payload);
          const result = this.impl.queueEnterpriseReport(params.type, params.group, params.url, params.body);
          break;
        }
        case 32: {
          const params = network.mojom.NetworkContext_QueueSignedExchangeReport_ParamsSpec.$.decode(message.payload);
          const result = this.impl.queueSignedExchangeReport(params.report, params.network_anonymization_key);
          break;
        }
        case 33: {
          const params = network.mojom.NetworkContext_CloseAllConnections_ParamsSpec.$.decode(message.payload);
          const result = this.impl.closeAllConnections();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_CloseAllConnections_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 34: {
          const params = network.mojom.NetworkContext_CloseIdleConnections_ParamsSpec.$.decode(message.payload);
          const result = this.impl.closeIdleConnections();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_CloseIdleConnections_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 35: {
          const params = network.mojom.NetworkContext_SetNetworkConditions_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setNetworkConditions(params.throttling_profile_id, params.conditions);
          break;
        }
        case 36: {
          const params = network.mojom.NetworkContext_SetAcceptLanguage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setAcceptLanguage(params.new_accept_language);
          break;
        }
        case 37: {
          const params = network.mojom.NetworkContext_SetEnableReferrers_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setEnableReferrers(params.enable_referrers);
          break;
        }
        case 38: {
          const params = network.mojom.NetworkContext_SetCTPolicy_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setCTPolicy(params.ct_policy);
          break;
        }
        case 39: {
          const params = network.mojom.NetworkContext_CreateUDPSocket_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createUDPSocket(params.receiver, params.listener);
          break;
        }
        case 40: {
          const params = network.mojom.NetworkContext_CreateRestrictedUDPSocket_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createRestrictedUDPSocket(params.addr, params.mode, params.traffic_annotation, params.params, params.receiver, params.listener, params.allow_multicast);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 41: {
          const params = network.mojom.NetworkContext_CreateTCPServerSocket_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createTCPServerSocket(params.local_addr, params.options, params.traffic_annotation, params.socket);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 42: {
          const params = network.mojom.NetworkContext_CreateTCPConnectedSocket_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createTCPConnectedSocket(params.local_addr, params.remote_addr_list, params.tcp_connected_socket_options, params.traffic_annotation, params.socket, params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 43: {
          const params = network.mojom.NetworkContext_CreateTCPBoundSocket_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createTCPBoundSocket(params.local_addr, params.traffic_annotation, params.socket);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 44: {
          const params = network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createProxyResolvingSocketFactory(params.factory);
          break;
        }
        case 45: {
          const params = network.mojom.NetworkContext_LookUpProxyForURL_ParamsSpec.$.decode(message.payload);
          const result = this.impl.lookUpProxyForURL(params.url, params.network_anonymization_key, params.proxy_lookup_client);
          break;
        }
        case 46: {
          const params = network.mojom.NetworkContext_ForceReloadProxyConfig_ParamsSpec.$.decode(message.payload);
          const result = this.impl.forceReloadProxyConfig();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_ForceReloadProxyConfig_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 47: {
          const params = network.mojom.NetworkContext_ClearBadProxiesCache_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearBadProxiesCache();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_ClearBadProxiesCache_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 48: {
          const params = network.mojom.NetworkContext_CreateWebSocket_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createWebSocket(params.url, params.requested_protocols, params.site_for_cookies, params.storage_access_api_status, params.isolation_info, params.additional_headers, params.process_id, params.origin, params.client_security_state, params.options, params.traffic_annotation, params.handshake_client, params.url_loader_network_observer, params.auth_handler, params.header_client, params.throttling_profile_id);
          break;
        }
        case 49: {
          const params = network.mojom.NetworkContext_CreateWebTransport_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createWebTransport(params.url, params.origin, params.network_anonymization_key, params.fingerprints, params.application_protocols, params.handshake_client, params.url_loader_network_observer, params.client_security_state);
          break;
        }
        case 50: {
          const params = network.mojom.NetworkContext_CreateNetLogExporter_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createNetLogExporter(params.receiver);
          break;
        }
        case 51: {
          const params = network.mojom.NetworkContext_PreconnectSockets_ParamsSpec.$.decode(message.payload);
          const result = this.impl.preconnectSockets(params.num_streams, params.url, params.credentials_mode, params.network_anonymization_key, params.traffic_annotation, params.keepalive_config, params.observer_client);
          break;
        }
        case 52: {
          const params = network.mojom.NetworkContext_CreateP2PSocketManager_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createP2PSocketManager(params.network_anonymization_key, params.client, params.trusted_socket_manager, params.socket_manager);
          break;
        }
        case 53: {
          const params = network.mojom.NetworkContext_CreateMdnsResponder_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createMdnsResponder(params.responder_receiver);
          break;
        }
        case 54: {
          const params = network.mojom.NetworkContext_ResolveHost_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resolveHost(params.host, params.network_anonymization_key, params.optional_parameters, params.response_client);
          break;
        }
        case 55: {
          const params = network.mojom.NetworkContext_CreateHostResolver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createHostResolver(params.config_overrides, params.host_resolver);
          break;
        }
        case 56: {
          const params = network.mojom.NetworkContext_VerifyCert_ParamsSpec.$.decode(message.payload);
          const result = this.impl.verifyCert(params.certificate, params.host_port, params.ocsp_response, params.sct_list);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_VerifyCert_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 57: {
          const params = network.mojom.NetworkContext_VerifyCertForSignedExchange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.verifyCertForSignedExchange(params.certificate, params.host_port, params.ocsp_response, params.sct_list);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 58: {
          const params = network.mojom.NetworkContext_Verify2QwacCertBinding_ParamsSpec.$.decode(message.payload);
          const result = this.impl.verify2QwacCertBinding(params.binding, params.hostname, params.tls_certificate);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 59: {
          const params = network.mojom.NetworkContext_AddHSTS_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addHSTS(params.host, params.expiry, params.include_subdomains);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_AddHSTS_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 60: {
          const params = network.mojom.NetworkContext_IsHSTSActiveForHost_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isHSTSActiveForHost(params.host, params.is_top_level_nav);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 61: {
          const params = network.mojom.NetworkContext_GetHSTSState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getHSTSState(params.domain);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_GetHSTSState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 62: {
          const params = network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setCorsOriginAccessListsForOrigin(params.source_origin, params.allow_patterns, params.block_patterns);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 63: {
          const params = network.mojom.NetworkContext_DeleteDynamicDataForHost_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deleteDynamicDataForHost(params.host);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 64: {
          const params = network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setSplitAuthCacheByNetworkAnonymizationKey(params.split_auth_cache_by_network_anonymization_key);
          break;
        }
        case 65: {
          const params = network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ParamsSpec.$.decode(message.payload);
          const result = this.impl.saveHttpAuthCacheProxyEntries();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 66: {
          const params = network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadHttpAuthCacheProxyEntries(params.cache_key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 67: {
          const params = network.mojom.NetworkContext_AddAuthCacheEntry_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addAuthCacheEntry(params.challenge, params.network_anonymization_key, params.credentials);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_AddAuthCacheEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 68: {
          const params = network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setCorsNonWildcardRequestHeadersSupport(params.value);
          break;
        }
        case 69: {
          const params = network.mojom.NetworkContext_LookupProxyAuthCredentials_ParamsSpec.$.decode(message.payload);
          const result = this.impl.lookupProxyAuthCredentials(params.proxy_server, params.auth_scheme, params.realm);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_LookupProxyAuthCredentials_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 70: {
          const params = network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enableStaticKeyPinningForTesting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 71: {
          const params = network.mojom.NetworkContext_VerifyCertificateForTesting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.verifyCertificateForTesting(params.certificate, params.hostname, params.ocsp_response, params.sct_list);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 72: {
          const params = network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getTrustAnchorIDsForTesting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 73: {
          const params = network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addDomainReliabilityContextForTesting(params.origin, params.upload_url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 74: {
          const params = network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.forceDomainReliabilityUploadsForTesting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 75: {
          const params = network.mojom.NetworkContext_SetSCTAuditingMode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setSCTAuditingMode(params.mode);
          break;
        }
        case 76: {
          const params = network.mojom.NetworkContext_AddReportingApiObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addReportingApiObserver(params.observer);
          break;
        }
        case 77: {
          const params = network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getSharedDictionaryUsageInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 78: {
          const params = network.mojom.NetworkContext_GetSharedDictionaryInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getSharedDictionaryInfo(params.isolation_key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 79: {
          const params = network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getSharedDictionaryOriginsBetween(params.start_time, params.end_time);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 80: {
          const params = network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setSharedDictionaryCacheMaxSize(params.cache_max_size);
          break;
        }
        case 81: {
          const params = network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_ParamsSpec.$.decode(message.payload);
          const result = this.impl.preloadSharedDictionaryInfoForDocument(params.urls, params.preload_handle);
          break;
        }
        case 82: {
          const params = network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.hasPreloadedSharedDictionaryInfoForTesting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 83: {
          const params = network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_ParamsSpec.$.decode(message.payload);
          const result = this.impl.flushCachedClientCertIfNeeded(params.host, params.certificate);
          break;
        }
        case 84: {
          const params = network.mojom.NetworkContext_FlushMatchingCachedClientCert_ParamsSpec.$.decode(message.payload);
          const result = this.impl.flushMatchingCachedClientCert(params.certificate);
          break;
        }
        case 85: {
          const params = network.mojom.NetworkContext_FlushClientCertCache_ParamsSpec.$.decode(message.payload);
          const result = this.impl.flushClientCertCache();
          break;
        }
        case 86: {
          const params = network.mojom.NetworkContext_RevokeNetworkForNonces_ParamsSpec.$.decode(message.payload);
          const result = this.impl.revokeNetworkForNonces(params.nonces_to_patterns);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_RevokeNetworkForNonces_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 87: {
          const params = network.mojom.NetworkContext_ClearNonces_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearNonces(params.nonces);
          break;
        }
        case 88: {
          const params = network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ParamsSpec.$.decode(message.payload);
          const result = this.impl.exemptUrlFromNetworkRevocationForNonce(params.exempted_url, params.nonce);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 89: {
          const params = network.mojom.NetworkContext_Prefetch_ParamsSpec.$.decode(message.payload);
          const result = this.impl.prefetch(params.request_id, params.options, params.request, params.traffic_annotation);
          break;
        }
        case 90: {
          const params = network.mojom.NetworkContext_GetBoundNetworkForTesting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getBoundNetworkForTesting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 91: {
          const params = network.mojom.NetworkContext_GetDeviceBoundSessionManager_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDeviceBoundSessionManager(params.device_bound_session_manager);
          break;
        }
        case 92: {
          const params = network.mojom.NetworkContext_AddQuicHints_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addQuicHints(params.origins, params.network_anonymization_key);
          break;
        }
      }
    });
  }
};

network.mojom.NetworkContextReceiver = network.mojom.NetworkContextReceiver;

network.mojom.NetworkContextPtr = network.mojom.NetworkContextRemote;
network.mojom.NetworkContextRequest = network.mojom.NetworkContextPendingReceiver;

