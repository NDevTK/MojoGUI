// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_context.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var components = components || {};
var components = components || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var url = url || {};
var url = url || {};
var url = url || {};
var services = services || {};
var services = services || {};
var services = services || {};

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
      mojo.internal.StructField('should_override_existing_config', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_non_idempotent_methods', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('connect_tunnel_headers', 16, 0, network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('enable_brotli', 16, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('enable_zstd', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_referrers', 16, 2, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('validate_referrer_policy_on_initial_request', 16, 3, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('proxy_resolver_factory', 24, 0, mojo.internal.InterfaceProxy(proxy_resolver.mojom.ProxyResolverFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('system_proxy_resolver', 32, 0, mojo.internal.InterfaceProxy(proxy_resolver.mojom.SystemProxyResolverRemote), null, true, 0, undefined),
      mojo.internal.StructField('dhcp_wpad_url_client', 40, 0, mojo.internal.InterfaceProxy(network.mojom.DhcpWpadUrlClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('enable_encrypted_cookies', 48, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('restore_old_session_cookies', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('persist_session_cookies', 48, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('http_cache_enabled', 48, 3, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('http_cache_max_size', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('http_cache_file_operations_factory', 56, 0, mojo.internal.InterfaceProxy(network.mojom.HttpCacheBackendFileOperationsFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('encryption_provider', 64, 0, mojo.internal.InterfaceProxy(network.mojom.CacheEncryptionProviderRemote), null, true, 0, undefined),
      mojo.internal.StructField('check_clear_text_permitted', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('initial_ssl_config', 80, 0, network.mojom.SSLConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ssl_config_client_receiver', 88, 0, mojo.internal.InterfaceRequest(network.mojom.SSLConfigClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('initial_proxy_config', 96, 0, network.mojom.ProxyConfigWithAnnotationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('proxy_config_client_receiver', 104, 0, mojo.internal.InterfaceRequest(network.mojom.ProxyConfigClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('initial_custom_proxy_config', 112, 0, network.mojom.CustomProxyConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('custom_proxy_config_client_receiver', 120, 0, mojo.internal.InterfaceRequest(network.mojom.CustomProxyConfigClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('custom_proxy_connection_observer_remote', 128, 0, mojo.internal.InterfaceProxy(network.mojom.CustomProxyConnectionObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('proxy_config_poller_client', 136, 0, mojo.internal.InterfaceProxy(network.mojom.ProxyConfigPollerClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('proxy_error_client', 144, 0, mojo.internal.InterfaceProxy(network.mojom.ProxyErrorClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('socket_brokers', 152, 0, network.mojom.SocketBrokerRemotesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('pac_quick_check_enabled', 160, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('enable_certificate_reporting', 160, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enforce_chrome_ct_policy', 160, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sct_auditing_mode', 168, 0, network.mojom.SCTAuditingModeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('ct_policy', 176, 0, network.mojom.CTPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cert_verifier_params', 184, 0, network.mojom.CertVerifierServiceRemoteParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cookie_manager_params', 192, 0, network.mojom.CookieManagerParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cookie_manager', 200, 0, mojo.internal.InterfaceRequest(network.mojom.CookieManagerRemote), null, true, 0, undefined),
      mojo.internal.StructField('enable_domain_reliability', 208, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('domain_reliability_upload_reporter', 216, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('discard_domain_reliablity_uploads', 224, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('reporting_delivery_interval', 232, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('skip_reporting_send_permission_check', 240, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('cors_origin_access_list', 248, 0, mojo.internal.Array(network.mojom.CorsOriginAccessPatternsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('cors_exempt_header_list', 256, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('hsts_policy_bypass_list', 264, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('http_auth_static_network_context_params', 272, 0, network.mojom.HttpAuthStaticNetworkContextParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('reset_http_cache_backend', 280, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('split_auth_cache_by_network_anonymization_key', 280, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('require_network_anonymization_key', 280, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('win_permissions_set', 280, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('file_paths', 288, 0, network.mojom.NetworkContextFilePathsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('block_trust_tokens', 296, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shared_dictionary_enabled', 296, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shared_dictionary_cache_max_size', 304, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('first_party_sets_access_delegate_params', 312, 0, network.mojom.FirstPartySetsAccessDelegateParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('first_party_sets_access_delegate_receiver', 320, 0, mojo.internal.InterfaceRequest(network.mojom.FirstPartySetsAccessDelegateRemote), null, true, 0, undefined),
      mojo.internal.StructField('acam_preflight_spec_conformant', 328, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('cookie_encryption_provider', 336, 0, mojo.internal.InterfaceProxy(network.mojom.CookieEncryptionProviderRemote), null, true, 0, undefined),
      mojo.internal.StructField('device_bound_sessions_enabled', 344, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('bound_network', 352, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('enterprise_reporting_endpoints', 360, 0, mojo.internal.Map(mojo.internal.String, url.mojom.UrlSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('stale_dns_enabled', 368, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('quic_idle_connection_timeout_seconds_$flag', 368, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'quic_idle_connection_timeout_seconds_$value', originalFieldName: 'quic_idle_connection_timeout_seconds' }),
      mojo.internal.StructField('quic_idle_connection_timeout_seconds_$value', 376, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'quic_idle_connection_timeout_seconds_$flag', originalFieldName: 'quic_idle_connection_timeout_seconds' }),
      mojo.internal.StructField('enable_encrypted_http_cache', 384, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('bound_sessions_unexportable_key_service', 392, 0, mojo.internal.InterfaceProxy(unexportable_keys.mojom.UnexportableKeyServiceRemote), null, true, 0, undefined),
    ],
    [[0, 408]]);

// Struct: NetworkConditions
mojo.internal.Struct(
    network.mojom.NetworkConditionsSpec, 'network.mojom.NetworkConditions', [
      mojo.internal.StructField('offline', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('latency', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('download_throughput', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('upload_throughput', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('packet_loss', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('packet_queue_length', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('packet_reordering', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('rule_id', 48, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 64]]);

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
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('outer_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('inner_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cert_url', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('referrer', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('server_ip_address', 48, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('protocol', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('method', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('status_code', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('elapsed_time', 80, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 96]]);

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
      mojo.internal.StructField('process_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('request_initiator_origin_lock', 8, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_orb_enabled', 16, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('ignore_isolated_world_origin', 16, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('unsafe_non_webby_initiator', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_web_security', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('header_client', 24, 0, mojo.internal.InterfaceProxy(network.mojom.TrustedURLLoaderHeaderClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('isolation_info', 32, 0, network.mojom.IsolationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('disable_secure_dns', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_trusted', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('automatically_assign_isolation_info', 40, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('top_frame_id', 48, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('factory_override', 56, 0, network.mojom.URLLoaderFactoryOverrideSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_security_state', 64, 0, network.mojom.ClientSecurityStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('coep_reporter', 72, 0, mojo.internal.InterfaceProxy(network.mojom.CrossOriginEmbedderPolicyReporterRemote), null, true, 0, undefined),
      mojo.internal.StructField('dip_reporter', 80, 0, mojo.internal.InterfaceProxy(network.mojom.DocumentIsolationPolicyReporterRemote), null, true, 0, undefined),
      mojo.internal.StructField('cookie_observer', 88, 0, mojo.internal.InterfaceProxy(network.mojom.CookieAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('trust_token_observer', 96, 0, mojo.internal.InterfaceProxy(network.mojom.TrustTokenAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('shared_dictionary_observer', 104, 0, mojo.internal.InterfaceProxy(network.mojom.SharedDictionaryAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('url_loader_network_observer', 112, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderNetworkServiceObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('devtools_observer', 120, 0, mojo.internal.InterfaceProxy(network.mojom.DevToolsObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('device_bound_session_observer', 128, 0, mojo.internal.InterfaceProxy(network.mojom.DeviceBoundSessionAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('kPotentiallyPermit', 136, 0, network.mojom.TrustTokenOperationPolicyVerdict trust_token_issuance_policy =Spec.$, 0, false, 0, undefined),
      mojo.internal.StructField('kPotentiallyPermit', 144, 0, network.mojom.TrustTokenOperationPolicyVerdict trust_token_redemption_policy =Spec.$, 0, false, 0, undefined),
      mojo.internal.StructField('debug_tag', 152, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('cookie_setting_overrides', 160, 0, network.mojom.CookieSettingOverridesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_cookie_setting_overrides', 168, 0, network.mojom.CookieSettingOverridesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('require_cross_site_request_for_cookies', 176, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ignore_factory_reset', 176, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_main_frame_origin_recently_accessed', 176, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('network_restrictions_id', 184, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 200]]);

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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'network.mojom.CustomProxyConnectionObserver',
    'context');
  return remote.$;
};

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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'network.mojom.CustomProxyConfigClient',
    'context');
  return remote.$;
};

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
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('headers', 8, 0, network.mojom.HttpRequestHeadersSpec.$, null, true, 0, undefined),
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
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('headers', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('preserve_fragment_on_redirect_url', 16, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'network.mojom.TrustedHeaderClient',
    'context');
  return remote.$;
};

network.mojom.TrustedHeaderClientPtr = network.mojom.TrustedHeaderClientRemote;
network.mojom.TrustedHeaderClientRequest = network.mojom.TrustedHeaderClientPendingReceiver;


// Interface: TrustedURLLoaderHeaderClient
mojo.internal.Struct(
    network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_ParamsSpec, 'network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('header_client', 8, 0, mojo.internal.InterfaceRequest(network.mojom.TrustedHeaderClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_ParamsSpec, 'network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_Params', [
      mojo.internal.StructField('request', 0, 0, network.mojom.URLRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('header_client', 8, 0, mojo.internal.InterfaceRequest(network.mojom.TrustedHeaderClientRemote), null, false, 0, undefined),
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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'network.mojom.TrustedURLLoaderHeaderClient',
    'context');
  return remote.$;
};

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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'network.mojom.PreloadedSharedDictionaryInfoHandle',
    'context');
  return remote.$;
};

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
      mojo.internal.StructField('is_upper_bound', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('size_or_error', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
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
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('local_addr_out', 8, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
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
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('local_addr_out', 8, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
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
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('local_addr', 8, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('peer_addr', 16, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('receive_stream', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('send_stream', 32, 0, mojo.internal.Pointer, null, true, 0, undefined),
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
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('local_addr', 8, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
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
      mojo.internal.StructField('process_id', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('origin', 56, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_security_state', 64, 0, network.mojom.ClientSecurityStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 72, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 80, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('handshake_client', 88, 0, mojo.internal.InterfaceProxy(network.mojom.WebSocketHandshakeClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('url_loader_network_observer', 96, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderNetworkServiceObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('auth_handler', 104, 0, mojo.internal.InterfaceProxy(network.mojom.WebSocketAuthenticationHandlerRemote), null, true, 0, undefined),
      mojo.internal.StructField('header_client', 112, 0, mojo.internal.InterfaceProxy(network.mojom.TrustedHeaderClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('throttling_profile_id', 120, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 136]]);

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
      mojo.internal.StructField('num_streams', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('credentials_mode', 16, 0, network.mojom.CredentialsModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network_anonymization_key', 24, 0, network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 32, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('keepalive_config', 40, 0, network.mojom.ConnectionKeepAliveConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('observer_client', 48, 0, mojo.internal.InterfaceProxy(network.mojom.ConnectionChangeObserverClientRemote), null, true, 0, undefined),
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
      mojo.internal.StructField('error_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('cv_result', 8, 0, network.mojom.CertVerifyResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pkp_bypassed', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

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
      mojo.internal.StructField('error_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('cv_result', 8, 0, network.mojom.CertVerifyResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pkp_bypassed', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

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
      mojo.internal.StructField('preload_handle', 8, 0, mojo.internal.InterfaceRequest(network.mojom.PreloadedSharedDictionaryInfoHandleRemote), null, false, 0, undefined),
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
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('options', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('request', 8, 0, network.mojom.URLRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 16, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'network.mojom.NetworkContext',
    'context');
  return remote.$;
};

network.mojom.NetworkContextPtr = network.mojom.NetworkContextRemote;
network.mojom.NetworkContextRequest = network.mojom.NetworkContextPendingReceiver;

