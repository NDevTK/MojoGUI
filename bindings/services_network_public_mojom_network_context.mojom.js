// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_context.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: TrustTokenOperationPolicyVerdict
network.mojom.TrustTokenOperationPolicyVerdict = {
};

// Enum: SCTAuditingMode
network.mojom.SCTAuditingMode = {
};

// Enum: DomainReliabilityClearMode
network.mojom.DomainReliabilityClearMode = {
  CLEAR_CONTEXTS: 0,
  CLEAR_BEACONS: 1,
};

// Struct: CustomProxyConfig
network.mojom.CustomProxyConfig = class {
  constructor(values = {}) {
    this.rules = values.rules !== undefined ? values.rules : null;
    this.in = values.in !== undefined ? values.in : null;
    this.false = values.false !== undefined ? values.false : false;
    this.connect_tunnel_headers = values.connect_tunnel_headers !== undefined ? values.connect_tunnel_headers : null;
  }
};

// Struct: CertVerifierServiceRemoteParams
network.mojom.CertVerifierServiceRemoteParams = class {
  constructor(values = {}) {
    this.cert_verifier_service_client_receiver = values.cert_verifier_service_client_receiver !== undefined ? values.cert_verifier_service_client_receiver : null;
  }
};

// Struct: HttpAuthStaticNetworkContextParams
network.mojom.HttpAuthStaticNetworkContextParams = class {
  constructor(values = {}) {
  }
};

// Struct: NetworkContextFilePaths
network.mojom.NetworkContextFilePaths = class {
  constructor(values = {}) {
    this.shared_dictionary_directory = values.shared_dictionary_directory !== undefined ? values.shared_dictionary_directory : null;
    this.http_cache_directory = values.http_cache_directory !== undefined ? values.http_cache_directory : null;
    this.no_vary_search_directory = values.no_vary_search_directory !== undefined ? values.no_vary_search_directory : null;
    this.data_directory = values.data_directory !== undefined ? values.data_directory : null;
    this.from = values.from !== undefined ? values.from : null;
    this.be = values.be !== undefined ? values.be : null;
    this.unsandboxed_data_path = values.unsandboxed_data_path !== undefined ? values.unsandboxed_data_path : null;
    this.cookie_database_name = values.cookie_database_name !== undefined ? values.cookie_database_name : null;
    this.device_bound_sessions_database_name = values.device_bound_sessions_database_name !== undefined ? values.device_bound_sessions_database_name : null;
    this.see = values.see !== undefined ? values.see : null;
    this.trust_token_database_name = values.trust_token_database_name !== undefined ? values.trust_token_database_name : null;
    this.is = values.is !== undefined ? values.is : null;
    this.http_server_properties_file_name = values.http_server_properties_file_name !== undefined ? values.http_server_properties_file_name : null;
    this.empty = values.empty !== undefined ? values.empty : null;
    this.transport_security_persister_file_name = values.transport_security_persister_file_name !== undefined ? values.transport_security_persister_file_name : null;
    this.is = values.is !== undefined ? values.is : null;
    this.empty = values.empty !== undefined ? values.empty : null;
    this.reporting_and_nel_store_database_name = values.reporting_and_nel_store_database_name !== undefined ? values.reporting_and_nel_store_database_name : null;
    this.empty = values.empty !== undefined ? values.empty : null;
    this.sct_auditing_pending_reports_file_name = values.sct_auditing_pending_reports_file_name !== undefined ? values.sct_auditing_pending_reports_file_name : null;
    this.from = values.from !== undefined ? values.from : null;
    this.to = values.to !== undefined ? values.to : null;
    this.be = values.be !== undefined ? values.be : null;
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: SocketBrokerRemotes
network.mojom.SocketBrokerRemotes = class {
  constructor(values = {}) {
    this.server = values.server !== undefined ? values.server : null;
  }
};

// Struct: NetworkContextParams
network.mojom.NetworkContextParams = class {
  constructor(values = {}) {
    this.user_agent = values.user_agent !== undefined ? values.user_agent : "";
    this.false = values.false !== undefined ? values.false : false;
    this.true = values.true !== undefined ? values.true : false;
    this.true = values.true !== undefined ? values.true : false;
    this.use = values.use !== undefined ? values.use : null;
    this.proxy_resolver_factory = values.proxy_resolver_factory !== undefined ? values.proxy_resolver_factory : null;
    this.populated = values.populated !== undefined ? values.populated : null;
    this.dhcp_wpad_url_client = values.dhcp_wpad_url_client !== undefined ? values.dhcp_wpad_url_client : null;
    this.true = values.true !== undefined ? values.true : false;
    this.false = values.false !== undefined ? values.false : false;
    this.http_cache_file_operations_factory = values.http_cache_file_operations_factory !== undefined ? values.http_cache_file_operations_factory : 0;
    this.encryption_provider = values.encryption_provider !== undefined ? values.encryption_provider : null;
    this.those = values.those !== undefined ? values.those : null;
    this.false = values.false !== undefined ? values.false : false;
    this.ssl_config_client_receiver = values.ssl_config_client_receiver !== undefined ? values.ssl_config_client_receiver : null;
    this.initial = values.initial !== undefined ? values.initial : null;
    this.proxy_config_client_receiver = values.proxy_config_client_receiver !== undefined ? values.proxy_config_client_receiver : null;
    this.listen = values.listen !== undefined ? values.listen : null;
    this.custom_proxy_config_client_receiver = values.custom_proxy_config_client_receiver !== undefined ? values.custom_proxy_config_client_receiver : null;
    this.custom_proxy_connection_observer_remote = values.custom_proxy_connection_observer_remote !== undefined ? values.custom_proxy_connection_observer_remote : null;
    this.during = values.during !== undefined ? values.during : null;
    this.socket_brokers = values.socket_brokers !== undefined ? values.socket_brokers : null;
    this.are = values.are !== undefined ? values.are : null;
    this.true = values.true !== undefined ? values.true : false;
    this.Pinning = values.Pinning !== undefined ? values.Pinning : null;
    this.cookie_manager_params = values.cookie_manager_params !== undefined ? values.cookie_manager_params : false;
    this.false = values.false !== undefined ? values.false : false;
    this.reporting_delivery_interval = values.reporting_delivery_interval !== undefined ? values.reporting_delivery_interval : null;
    this.hsts_policy_bypass_list = values.hsts_policy_bypass_list !== undefined ? values.hsts_policy_bypass_list : false;
    this.http_auth_static_network_context_params = values.http_auth_static_network_context_params !== undefined ? values.http_auth_static_network_context_params : null;
    this.false = values.false !== undefined ? values.false : false;
    this.false = values.false !== undefined ? values.false : false;
    this.false = values.false !== undefined ? values.false : false;
    this.file_paths = values.file_paths !== undefined ? values.file_paths : null;
    this.false = values.false !== undefined ? values.false : false;
    this.false = values.false !== undefined ? values.false : false;
    this.NetworkContext = values.NetworkContext !== undefined ? values.NetworkContext : null;
    this.NetworkContext = values.NetworkContext !== undefined ? values.NetworkContext : null;
    this.false = values.false !== undefined ? values.false : 0;
    this.quic_idle_connection_timeout_seconds = values.quic_idle_connection_timeout_seconds !== undefined ? values.quic_idle_connection_timeout_seconds : 0;
    this.now = values.now !== undefined ? values.now : null;
    this.false = values.false !== undefined ? values.false : false;
    this.unexportable = values.unexportable !== undefined ? values.unexportable : null;
    this.bound_sessions_unexportable_key_service = values.bound_sessions_unexportable_key_service !== undefined ? values.bound_sessions_unexportable_key_service : null;
  }
};

// Struct: NetworkConditions
network.mojom.NetworkConditions = class {
  constructor(values = {}) {
    this.offline = values.offline !== undefined ? values.offline : false;
    this.rule_id = values.rule_id !== undefined ? values.rule_id : 0;
  }
};

// Struct: MatchedNetworkConditions
network.mojom.MatchedNetworkConditions = class {
  constructor(values = {}) {
    this.conditions = values.conditions !== undefined ? values.conditions : "";
  }
};

// Struct: SharedDictionaryInfo
network.mojom.SharedDictionaryInfo = class {
  constructor(values = {}) {
    this.hash = values.hash !== undefined ? values.hash : 0;
  }
};

// Struct: SignedExchangeReport
network.mojom.SignedExchangeReport = class {
  constructor(values = {}) {
    this.elapsed_time = values.elapsed_time !== undefined ? values.elapsed_time : 0;
  }
};

// Struct: URLLoaderFactoryOverride
network.mojom.URLLoaderFactoryOverride = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: URLLoaderFactoryParams
network.mojom.URLLoaderFactoryParams = class {
  constructor(values = {}) {
    this.kInvalidProcessId = values.kInvalidProcessId !== undefined ? values.kInvalidProcessId : 0;
    this.false = values.false !== undefined ? values.false : false;
    this.Fetch = values.Fetch !== undefined ? values.Fetch : null;
    this.false = values.false !== undefined ? values.false : false;
    this.will = values.will !== undefined ? values.will : null;
    this.request = values.request !== undefined ? values.request : null;
    this.header_client = values.header_client !== undefined ? values.header_client : null;
    this.set = values.set !== undefined ? values.set : null;
    this.false = values.false !== undefined ? values.false : false;
    this.to = values.to !== undefined ? values.to : null;
    this.be = values.be !== undefined ? values.be : null;
    this.false = values.false !== undefined ? values.false : false;
    this.device_bound_session_observer = values.device_bound_session_observer !== undefined ? values.device_bound_session_observer : null;
    this.not = values.not !== undefined ? values.not : null;
    this.the = values.the !== undefined ? values.the : null;
    this.kPotentiallyPermit = values.kPotentiallyPermit !== undefined ? values.kPotentiallyPermit : null;
    this.not = values.not !== undefined ? values.not : null;
    this.the = values.the !== undefined ? values.the : null;
    this.cookie_setting_overrides = values.cookie_setting_overrides !== undefined ? values.cookie_setting_overrides : "";
    this.applied = values.applied !== undefined ? values.applied : null;
    this.devtools_cookie_setting_overrides = values.devtools_cookie_setting_overrides !== undefined ? values.devtools_cookie_setting_overrides : null;
    this.false = values.false !== undefined ? values.false : false;
    this.false = values.false !== undefined ? values.false : false;
    this.false = values.false !== undefined ? values.false : false;
    this.network_restrictions_id = values.network_restrictions_id !== undefined ? values.network_restrictions_id : null;
  }
};

// Struct: NonceAndAllowlistedPatterns
network.mojom.NonceAndAllowlistedPatterns = class {
  constructor(values = {}) {
    this.allowlisted_patterns = values.allowlisted_patterns !== undefined ? values.allowlisted_patterns : "";
  }
};

// Interface: CustomProxyConnectionObserver
network.mojom.CustomProxyConnectionObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.CustomProxyConnectionObserver';
  }

  onFallback(bad_chain, net_error) {
    // Method: OnFallback
    // Call: OnFallback(bad_chain, net_error)
  }

  onTunnelHeadersReceived(proxy_chain, chain_index, response_headers) {
    // Method: OnTunnelHeadersReceived
    // Call: OnTunnelHeadersReceived(proxy_chain, chain_index, response_headers)
  }

};

network.mojom.CustomProxyConnectionObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CustomProxyConfigClient
network.mojom.CustomProxyConfigClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.CustomProxyConfigClient';
  }

  onCustomProxyConfigUpdated(proxy_config) {
    // Method: OnCustomProxyConfigUpdated
    // Call: OnCustomProxyConfigUpdated(proxy_config)
  }

};

network.mojom.CustomProxyConfigClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TrustedHeaderClient
network.mojom.TrustedHeaderClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.TrustedHeaderClient';
  }

  onBeforeSendHeaders(headers) {
    // Method: OnBeforeSendHeaders
    return new Promise((resolve) => {
      // Call: OnBeforeSendHeaders(headers)
      resolve({});
    });
  }

  onHeadersReceived(headers, remote_endpoint, ssl_info) {
    // Method: OnHeadersReceived
    return new Promise((resolve) => {
      // Call: OnHeadersReceived(headers, remote_endpoint, ssl_info)
      resolve({});
    });
  }

};

network.mojom.TrustedHeaderClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TrustedURLLoaderHeaderClient
network.mojom.TrustedURLLoaderHeaderClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.TrustedURLLoaderHeaderClient';
  }

  onLoaderCreated(request_id, header_client) {
    // Method: OnLoaderCreated
    // Call: OnLoaderCreated(request_id, header_client)
  }

  onLoaderForCorsPreflightCreated(request, header_client) {
    // Method: OnLoaderForCorsPreflightCreated
    // Call: OnLoaderForCorsPreflightCreated(request, header_client)
  }

};

network.mojom.TrustedURLLoaderHeaderClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PreloadedSharedDictionaryInfoHandle
network.mojom.PreloadedSharedDictionaryInfoHandlePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.PreloadedSharedDictionaryInfoHandle';
  }

};

network.mojom.PreloadedSharedDictionaryInfoHandleRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NetworkContext
network.mojom.NetworkContextPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.NetworkContext';
  }

  setClient(client) {
    // Method: SetClient
    // Call: SetClient(client)
  }

  createURLLoaderFactory(url_loader_factory, params) {
    // Method: CreateURLLoaderFactory
    // Call: CreateURLLoaderFactory(url_loader_factory, params)
  }

  resetURLLoaderFactories() {
    // Method: ResetURLLoaderFactories
    // Call: ResetURLLoaderFactories()
  }

  getViaObliviousHttp(request, client) {
    // Method: GetViaObliviousHttp
    // Call: GetViaObliviousHttp(request, client)
  }

  getCookieManager(cookie_manager) {
    // Method: GetCookieManager
    // Call: GetCookieManager(cookie_manager)
  }

  getRestrictedCookieManager(restricted_cookie_manager, role, origin, isolation_info, cookie_setting_overrides, devtools_cookie_setting_overrides, cookie_observer) {
    // Method: GetRestrictedCookieManager
    // Call: GetRestrictedCookieManager(restricted_cookie_manager, role, origin, isolation_info, cookie_setting_overrides, devtools_cookie_setting_overrides, cookie_observer)
  }

  getTrustTokenQueryAnswerer(trust_token_query_answerer, top_frame_origin) {
    // Method: GetTrustTokenQueryAnswerer
    // Call: GetTrustTokenQueryAnswerer(trust_token_query_answerer, top_frame_origin)
  }

  clearTrustTokenData(filter) {
    // Method: ClearTrustTokenData
    // Call: ClearTrustTokenData(filter)
  }

  clearTrustTokenSessionOnlyData() {
    // Method: ClearTrustTokenSessionOnlyData
    return new Promise((resolve) => {
      // Call: ClearTrustTokenSessionOnlyData()
      resolve({});
    });
  }

  getStoredTrustTokenCounts() {
    // Method: GetStoredTrustTokenCounts
    return new Promise((resolve) => {
      // Call: GetStoredTrustTokenCounts()
      resolve({});
    });
  }

  getPrivateStateTokenRedemptionRecords() {
    // Method: GetPrivateStateTokenRedemptionRecords
    return new Promise((resolve) => {
      // Call: GetPrivateStateTokenRedemptionRecords()
      resolve({});
    });
  }

  deleteStoredTrustTokens(issuer) {
    // Method: DeleteStoredTrustTokens
    return new Promise((resolve) => {
      // Call: DeleteStoredTrustTokens(issuer)
      resolve({});
    });
  }

  setBlockTrustTokens(block) {
    // Method: SetBlockTrustTokens
    // Call: SetBlockTrustTokens(block)
  }

  clearNetworkingHistoryBetween(start_time, end_time) {
    // Method: ClearNetworkingHistoryBetween
    // Call: ClearNetworkingHistoryBetween(start_time, end_time)
  }

  clearHttpCache(start_time, end_time, filter) {
    // Method: ClearHttpCache
    // Call: ClearHttpCache(start_time, end_time, filter)
  }

  computeHttpCacheSize(start_time, end_time) {
    // Method: ComputeHttpCacheSize
    return new Promise((resolve) => {
      // Call: ComputeHttpCacheSize(start_time, end_time)
      resolve({});
    });
  }

  notifyBrowserIdle() {
    // Method: NotifyBrowserIdle
    // Call: NotifyBrowserIdle()
  }

  notifyExternalCacheHit(url, http_method, key, include_credentials) {
    // Method: NotifyExternalCacheHit
    // Call: NotifyExternalCacheHit(url, http_method, key, include_credentials)
  }

  clearHostCache(filter) {
    // Method: ClearHostCache
    // Call: ClearHostCache(filter)
  }

  clearHttpAuthCache(start_time, end_time, filter) {
    // Method: ClearHttpAuthCache
    // Call: ClearHttpAuthCache(start_time, end_time, filter)
  }

  clearCorsPreflightCache(filter) {
    // Method: ClearCorsPreflightCache
    // Call: ClearCorsPreflightCache(filter)
  }

  clearReportingCacheReports(filter) {
    // Method: ClearReportingCacheReports
    // Call: ClearReportingCacheReports(filter)
  }

  clearReportingCacheClients(filter) {
    // Method: ClearReportingCacheClients
    // Call: ClearReportingCacheClients(filter)
  }

  clearNetworkErrorLogging(filter) {
    // Method: ClearNetworkErrorLogging
    // Call: ClearNetworkErrorLogging(filter)
  }

  clearDomainReliability(filter, mode) {
    // Method: ClearDomainReliability
    // Call: ClearDomainReliability(filter, mode)
  }

  clearSharedDictionaryCache(start_time, end_time, filter) {
    // Method: ClearSharedDictionaryCache
    // Call: ClearSharedDictionaryCache(start_time, end_time, filter)
  }

  clearSharedDictionaryCacheForIsolationKey(isolation_key) {
    // Method: ClearSharedDictionaryCacheForIsolationKey
    // Call: ClearSharedDictionaryCacheForIsolationKey(isolation_key)
  }

  setDocumentReportingEndpoints(reporting_source, origin, isolation_info, endpoints) {
    // Method: SetDocumentReportingEndpoints
    // Call: SetDocumentReportingEndpoints(reporting_source, origin, isolation_info, endpoints)
  }

  setEnterpriseReportingEndpoints(endpoints) {
    // Method: SetEnterpriseReportingEndpoints
    // Call: SetEnterpriseReportingEndpoints(endpoints)
  }

  sendReportsAndRemoveSource(reporting_source) {
    // Method: SendReportsAndRemoveSource
    // Call: SendReportsAndRemoveSource(reporting_source)
  }

  queueReport(type, group, url, reporting_source, network_anonymization_key, body) {
    // Method: QueueReport
    // Call: QueueReport(type, group, url, reporting_source, network_anonymization_key, body)
  }

  queueEnterpriseReport(type, group, url, body) {
    // Method: QueueEnterpriseReport
    // Call: QueueEnterpriseReport(type, group, url, body)
  }

  queueSignedExchangeReport(report, network_anonymization_key) {
    // Method: QueueSignedExchangeReport
    // Call: QueueSignedExchangeReport(report, network_anonymization_key)
  }

  closeAllConnections() {
    // Method: CloseAllConnections
    // Call: CloseAllConnections()
  }

  closeIdleConnections() {
    // Method: CloseIdleConnections
    // Call: CloseIdleConnections()
  }

  setNetworkConditions(throttling_profile_id, conditions) {
    // Method: SetNetworkConditions
    // Call: SetNetworkConditions(throttling_profile_id, conditions)
  }

  setAcceptLanguage(new_accept_language) {
    // Method: SetAcceptLanguage
    // Call: SetAcceptLanguage(new_accept_language)
  }

  setEnableReferrers(enable_referrers) {
    // Method: SetEnableReferrers
    // Call: SetEnableReferrers(enable_referrers)
  }

  setCTPolicy(ct_policy) {
    // Method: SetCTPolicy
    // Call: SetCTPolicy(ct_policy)
  }

  createUDPSocket(receiver, listener) {
    // Method: CreateUDPSocket
    // Call: CreateUDPSocket(receiver, listener)
  }

  createRestrictedUDPSocket(addr, mode, traffic_annotation, params, receiver, listener, allow_multicast) {
    // Method: CreateRestrictedUDPSocket
    return new Promise((resolve) => {
      // Call: CreateRestrictedUDPSocket(addr, mode, traffic_annotation, params, receiver, listener, allow_multicast)
      resolve({});
    });
  }

  createTCPServerSocket(local_addr, options, traffic_annotation, socket) {
    // Method: CreateTCPServerSocket
    return new Promise((resolve) => {
      // Call: CreateTCPServerSocket(local_addr, options, traffic_annotation, socket)
      resolve({});
    });
  }

  createTCPConnectedSocket(local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer) {
    // Method: CreateTCPConnectedSocket
    return new Promise((resolve) => {
      // Call: CreateTCPConnectedSocket(local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer)
      resolve({});
    });
  }

  createTCPBoundSocket(local_addr, traffic_annotation, socket) {
    // Method: CreateTCPBoundSocket
    return new Promise((resolve) => {
      // Call: CreateTCPBoundSocket(local_addr, traffic_annotation, socket)
      resolve({});
    });
  }

  createProxyResolvingSocketFactory(factory) {
    // Method: CreateProxyResolvingSocketFactory
    // Call: CreateProxyResolvingSocketFactory(factory)
  }

  lookUpProxyForURL(url, network_anonymization_key, proxy_lookup_client) {
    // Method: LookUpProxyForURL
    // Call: LookUpProxyForURL(url, network_anonymization_key, proxy_lookup_client)
  }

  forceReloadProxyConfig() {
    // Method: ForceReloadProxyConfig
    // Call: ForceReloadProxyConfig()
  }

  clearBadProxiesCache() {
    // Method: ClearBadProxiesCache
    // Call: ClearBadProxiesCache()
  }

  createWebSocket(url, requested_protocols, site_for_cookies, storage_access_api_status, isolation_info, additional_headers, process_id, origin, client_security_state, options, traffic_annotation, handshake_client, url_loader_network_observer, auth_handler, header_client, throttling_profile_id) {
    // Method: CreateWebSocket
    // Call: CreateWebSocket(url, requested_protocols, site_for_cookies, storage_access_api_status, isolation_info, additional_headers, process_id, origin, client_security_state, options, traffic_annotation, handshake_client, url_loader_network_observer, auth_handler, header_client, throttling_profile_id)
  }

  createWebTransport(url, origin, network_anonymization_key, fingerprints, application_protocols, handshake_client, url_loader_network_observer, client_security_state) {
    // Method: CreateWebTransport
    // Call: CreateWebTransport(url, origin, network_anonymization_key, fingerprints, application_protocols, handshake_client, url_loader_network_observer, client_security_state)
  }

  createNetLogExporter(receiver) {
    // Method: CreateNetLogExporter
    // Call: CreateNetLogExporter(receiver)
  }

  preconnectSockets(num_streams, url, credentials_mode, network_anonymization_key, traffic_annotation, keepalive_config, observer_client) {
    // Method: PreconnectSockets
    // Call: PreconnectSockets(num_streams, url, credentials_mode, network_anonymization_key, traffic_annotation, keepalive_config, observer_client)
  }

  createP2PSocketManager(network_anonymization_key, client, trusted_socket_manager, socket_manager) {
    // Method: CreateP2PSocketManager
    // Call: CreateP2PSocketManager(network_anonymization_key, client, trusted_socket_manager, socket_manager)
  }

  createMdnsResponder(responder_receiver) {
    // Method: CreateMdnsResponder
    // Call: CreateMdnsResponder(responder_receiver)
  }

  resolveHost(host, network_anonymization_key, optional_parameters, response_client) {
    // Method: ResolveHost
    // Call: ResolveHost(host, network_anonymization_key, optional_parameters, response_client)
  }

  createHostResolver(config_overrides, host_resolver) {
    // Method: CreateHostResolver
    // Call: CreateHostResolver(config_overrides, host_resolver)
  }

  verifyCert(certificate, host_port, ocsp_response, sct_list) {
    // Method: VerifyCert
    return new Promise((resolve) => {
      // Call: VerifyCert(certificate, host_port, ocsp_response, sct_list)
      resolve({});
    });
  }

  verifyCertForSignedExchange(certificate, host_port, ocsp_response, sct_list) {
    // Method: VerifyCertForSignedExchange
    return new Promise((resolve) => {
      // Call: VerifyCertForSignedExchange(certificate, host_port, ocsp_response, sct_list)
      resolve({});
    });
  }

  verify2QwacCertBinding(binding, hostname, tls_certificate) {
    // Method: Verify2QwacCertBinding
    return new Promise((resolve) => {
      // Call: Verify2QwacCertBinding(binding, hostname, tls_certificate)
      resolve({});
    });
  }

  addHSTS(host, expiry, include_subdomains) {
    // Method: AddHSTS
    // Call: AddHSTS(host, expiry, include_subdomains)
  }

  isHSTSActiveForHost(host, is_top_level_nav) {
    // Method: IsHSTSActiveForHost
    return new Promise((resolve) => {
      // Call: IsHSTSActiveForHost(host, is_top_level_nav)
      resolve({});
    });
  }

  getHSTSState(domain) {
    // Method: GetHSTSState
    return new Promise((resolve) => {
      // Call: GetHSTSState(domain)
      resolve({});
    });
  }

  setCorsOriginAccessListsForOrigin(source_origin, allow_patterns, block_patterns) {
    // Method: SetCorsOriginAccessListsForOrigin
    // Call: SetCorsOriginAccessListsForOrigin(source_origin, allow_patterns, block_patterns)
  }

  deleteDynamicDataForHost(host) {
    // Method: DeleteDynamicDataForHost
    return new Promise((resolve) => {
      // Call: DeleteDynamicDataForHost(host)
      resolve({});
    });
  }

  setSplitAuthCacheByNetworkAnonymizationKey(split_auth_cache_by_network_anonymization_key) {
    // Method: SetSplitAuthCacheByNetworkAnonymizationKey
    // Call: SetSplitAuthCacheByNetworkAnonymizationKey(split_auth_cache_by_network_anonymization_key)
  }

  saveHttpAuthCacheProxyEntries() {
    // Method: SaveHttpAuthCacheProxyEntries
    return new Promise((resolve) => {
      // Call: SaveHttpAuthCacheProxyEntries()
      resolve({});
    });
  }

  loadHttpAuthCacheProxyEntries(cache_key) {
    // Method: LoadHttpAuthCacheProxyEntries
    // Call: LoadHttpAuthCacheProxyEntries(cache_key)
  }

  addAuthCacheEntry(challenge, network_anonymization_key, credentials) {
    // Method: AddAuthCacheEntry
    // Call: AddAuthCacheEntry(challenge, network_anonymization_key, credentials)
  }

  setCorsNonWildcardRequestHeadersSupport(value) {
    // Method: SetCorsNonWildcardRequestHeadersSupport
    // Call: SetCorsNonWildcardRequestHeadersSupport(value)
  }

  lookupProxyAuthCredentials(proxy_server, auth_scheme, realm) {
    // Method: LookupProxyAuthCredentials
    return new Promise((resolve) => {
      // Call: LookupProxyAuthCredentials(proxy_server, auth_scheme, realm)
      resolve({});
    });
  }

  enableStaticKeyPinningForTesting() {
    // Method: EnableStaticKeyPinningForTesting
    // Call: EnableStaticKeyPinningForTesting()
  }

  verifyCertificateForTesting(certificate, hostname, ocsp_response, sct_list) {
    // Method: VerifyCertificateForTesting
    return new Promise((resolve) => {
      // Call: VerifyCertificateForTesting(certificate, hostname, ocsp_response, sct_list)
      resolve({});
    });
  }

  getTrustAnchorIDsForTesting() {
    // Method: GetTrustAnchorIDsForTesting
    return new Promise((resolve) => {
      // Call: GetTrustAnchorIDsForTesting()
      resolve({});
    });
  }

  addDomainReliabilityContextForTesting(origin, upload_url) {
    // Method: AddDomainReliabilityContextForTesting
    // Call: AddDomainReliabilityContextForTesting(origin, upload_url)
  }

  forceDomainReliabilityUploadsForTesting() {
    // Method: ForceDomainReliabilityUploadsForTesting
    // Call: ForceDomainReliabilityUploadsForTesting()
  }

  setSCTAuditingMode(mode) {
    // Method: SetSCTAuditingMode
    // Call: SetSCTAuditingMode(mode)
  }

  addReportingApiObserver(observer) {
    // Method: AddReportingApiObserver
    // Call: AddReportingApiObserver(observer)
  }

  getSharedDictionaryUsageInfo() {
    // Method: GetSharedDictionaryUsageInfo
    return new Promise((resolve) => {
      // Call: GetSharedDictionaryUsageInfo()
      resolve({});
    });
  }

  getSharedDictionaryInfo(isolation_key) {
    // Method: GetSharedDictionaryInfo
    return new Promise((resolve) => {
      // Call: GetSharedDictionaryInfo(isolation_key)
      resolve({});
    });
  }

  getSharedDictionaryOriginsBetween(start_time, end_time) {
    // Method: GetSharedDictionaryOriginsBetween
    return new Promise((resolve) => {
      // Call: GetSharedDictionaryOriginsBetween(start_time, end_time)
      resolve({});
    });
  }

  setSharedDictionaryCacheMaxSize(cache_max_size) {
    // Method: SetSharedDictionaryCacheMaxSize
    // Call: SetSharedDictionaryCacheMaxSize(cache_max_size)
  }

  preloadSharedDictionaryInfoForDocument(urls, preload_handle) {
    // Method: PreloadSharedDictionaryInfoForDocument
    // Call: PreloadSharedDictionaryInfoForDocument(urls, preload_handle)
  }

  hasPreloadedSharedDictionaryInfoForTesting() {
    // Method: HasPreloadedSharedDictionaryInfoForTesting
    return new Promise((resolve) => {
      // Call: HasPreloadedSharedDictionaryInfoForTesting()
      resolve({});
    });
  }

  flushCachedClientCertIfNeeded(host, certificate) {
    // Method: FlushCachedClientCertIfNeeded
    // Call: FlushCachedClientCertIfNeeded(host, certificate)
  }

  flushMatchingCachedClientCert(certificate) {
    // Method: FlushMatchingCachedClientCert
    // Call: FlushMatchingCachedClientCert(certificate)
  }

  flushClientCertCache() {
    // Method: FlushClientCertCache
    // Call: FlushClientCertCache()
  }

  revokeNetworkForNonces(nonces_to_patterns) {
    // Method: RevokeNetworkForNonces
    // Call: RevokeNetworkForNonces(nonces_to_patterns)
  }

  clearNonces(nonces) {
    // Method: ClearNonces
    // Call: ClearNonces(nonces)
  }

  exemptUrlFromNetworkRevocationForNonce(exempted_url, nonce) {
    // Method: ExemptUrlFromNetworkRevocationForNonce
    // Call: ExemptUrlFromNetworkRevocationForNonce(exempted_url, nonce)
  }

  prefetch(request_id, options, request, traffic_annotation) {
    // Method: Prefetch
    // Call: Prefetch(request_id, options, request, traffic_annotation)
  }

  getBoundNetworkForTesting() {
    // Method: GetBoundNetworkForTesting
    return new Promise((resolve) => {
      // Call: GetBoundNetworkForTesting()
      resolve({});
    });
  }

  getDeviceBoundSessionManager(device_bound_session_manager) {
    // Method: GetDeviceBoundSessionManager
    // Call: GetDeviceBoundSessionManager(device_bound_session_manager)
  }

  addQuicHints(origins, network_anonymization_key) {
    // Method: AddQuicHints
    // Call: AddQuicHints(origins, network_anonymization_key)
  }

};

network.mojom.NetworkContextRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
