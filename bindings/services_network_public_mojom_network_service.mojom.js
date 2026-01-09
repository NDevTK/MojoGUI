// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_service.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: HttpAuthStaticParams
network.mojom.HttpAuthStaticParams = class {
  constructor(values = {}) {
    this.gssapi_library_name = values.gssapi_library_name !== undefined ? values.gssapi_library_name : "";
  }
};

// Struct: HttpAuthDynamicParams
network.mojom.HttpAuthDynamicParams = class {
  constructor(values = {}) {
    this.true = values.true !== undefined ? values.true : false;
  }
};

// Struct: EnvironmentVariable
network.mojom.EnvironmentVariable = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : "";
  }
};

// Struct: NetworkServiceParams
network.mojom.NetworkServiceParams = class {
  constructor(values = {}) {
    this.environment = values.environment !== undefined ? values.environment : 0;
    this.first_party_sets_enabled = values.first_party_sets_enabled !== undefined ? values.first_party_sets_enabled : false;
    this.system_dns_resolver = values.system_dns_resolver !== undefined ? values.system_dns_resolver : null;
  }
};

// Struct: SCTAuditingConfiguration
network.mojom.SCTAuditingConfiguration = class {
  constructor(values = {}) {
    this.report_uri = values.report_uri !== undefined ? values.report_uri : 0;
    this.hashdance_traffic_annotation = values.hashdance_traffic_annotation !== undefined ? values.hashdance_traffic_annotation : null;
  }
};

// Struct: NetworkDurableMessageConfig
network.mojom.NetworkDurableMessageConfig = class {
  constructor(values = {}) {
    this.http_storage_max_size = values.http_storage_max_size !== undefined ? values.http_storage_max_size : 0;
  }
};

// Interface: GssapiLibraryLoadObserver
network.mojom.GssapiLibraryLoadObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.GssapiLibraryLoadObserver';
  }

  onBeforeGssapiLibraryLoad() {
    // Method: OnBeforeGssapiLibraryLoad
    // Call: OnBeforeGssapiLibraryLoad()
  }

};

network.mojom.GssapiLibraryLoadObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NetworkService
network.mojom.NetworkServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.NetworkService';
  }

  setParams(params) {
    // Method: SetParams
    // Call: SetParams(params)
  }

  startNetLog(file, max_total_size, capture_mode, constants, duration) {
    // Method: StartNetLog
    // Call: StartNetLog(file, max_total_size, capture_mode, constants, duration)
  }

  attachNetLogProxy(proxy_source, proxy_sink) {
    // Method: AttachNetLogProxy
    // Call: AttachNetLogProxy(proxy_source, proxy_sink)
  }

  setSSLKeyLogFile(file) {
    // Method: SetSSLKeyLogFile
    // Call: SetSSLKeyLogFile(file)
  }

  createNetworkContext(context, params) {
    // Method: CreateNetworkContext
    // Call: CreateNetworkContext(context, params)
  }

  configureStubHostResolver(insecure_dns_client_enabled, happy_eyeballs_v3_enabled, secure_dns_mode, dns_over_https_config, additional_dns_types_enabled, fallback_doh_nameservers) {
    // Method: ConfigureStubHostResolver
    // Call: ConfigureStubHostResolver(insecure_dns_client_enabled, happy_eyeballs_v3_enabled, secure_dns_mode, dns_over_https_config, additional_dns_types_enabled, fallback_doh_nameservers)
  }

  disableQuic() {
    // Method: DisableQuic
    // Call: DisableQuic()
  }

  setUpHttpAuth(http_auth_static_params) {
    // Method: SetUpHttpAuth
    // Call: SetUpHttpAuth(http_auth_static_params)
  }

  configureHttpAuthPrefs(http_auth_dynamic_params) {
    // Method: ConfigureHttpAuthPrefs
    // Call: ConfigureHttpAuthPrefs(http_auth_dynamic_params)
  }

  setRawHeadersAccess(process_id, origins) {
    // Method: SetRawHeadersAccess
    // Call: SetRawHeadersAccess(process_id, origins)
  }

  setMaxConnectionsPerProxyChain(max_connections) {
    // Method: SetMaxConnectionsPerProxyChain
    // Call: SetMaxConnectionsPerProxyChain(max_connections)
  }

  getNetworkChangeManager(network_change_manager) {
    // Method: GetNetworkChangeManager
    // Call: GetNetworkChangeManager(network_change_manager)
  }

  getNetworkQualityEstimatorManager(receiver) {
    // Method: GetNetworkQualityEstimatorManager
    // Call: GetNetworkQualityEstimatorManager(receiver)
  }

  getDnsConfigChangeManager(receiver) {
    // Method: GetDnsConfigChangeManager
    // Call: GetDnsConfigChangeManager(receiver)
  }

  getNetworkList(policy) {
    // Method: GetNetworkList
    return new Promise((resolve) => {
      // Call: GetNetworkList(policy)
      resolve({});
    });
  }

  onTrustStoreChanged() {
    // Method: OnTrustStoreChanged
    // Call: OnTrustStoreChanged()
  }

  onClientCertStoreChanged() {
    // Method: OnClientCertStoreChanged
    // Call: OnClientCertStoreChanged()
  }

  setEncryptionKey(encryption_key) {
    // Method: SetEncryptionKey
    // Call: SetEncryptionKey(encryption_key)
  }

  onMemoryPressure(memory_pressure_level) {
    // Method: OnMemoryPressure
    // Call: OnMemoryPressure(memory_pressure_level)
  }

  onPeerToPeerConnectionsCountChange(count) {
    // Method: OnPeerToPeerConnectionsCountChange
    // Call: OnPeerToPeerConnectionsCountChange(count)
  }

  onApplicationStateChange(state) {
    // Method: OnApplicationStateChange
    // Call: OnApplicationStateChange(state)
  }

  setTrustTokenKeyCommitments(raw_commitments) {
    // Method: SetTrustTokenKeyCommitments
    // Call: SetTrustTokenKeyCommitments(raw_commitments)
  }

  clearSCTAuditingCache() {
    // Method: ClearSCTAuditingCache
    // Call: ClearSCTAuditingCache()
  }

  configureSCTAuditing(configuration) {
    // Method: ConfigureSCTAuditing
    // Call: ConfigureSCTAuditing(configuration)
  }

  updateCtLogList(log_list) {
    // Method: UpdateCtLogList
    // Call: UpdateCtLogList(log_list)
  }

  updateCtKnownPopularSCTs(sct_hashes) {
    // Method: UpdateCtKnownPopularSCTs
    // Call: UpdateCtKnownPopularSCTs(sct_hashes)
  }

  setCtEnforcementEnabled(enabled) {
    // Method: SetCtEnforcementEnabled
    // Call: SetCtEnforcementEnabled(enabled)
  }

  updateKeyPinsList(pin_list, update_time) {
    // Method: UpdateKeyPinsList
    // Call: UpdateKeyPinsList(pin_list, update_time)
  }

  dumpWithoutCrashing(dump_request_time) {
    // Method: DumpWithoutCrashing
    // Call: DumpWithoutCrashing(dump_request_time)
  }

  bindTestInterfaceForTesting(receiver) {
    // Method: BindTestInterfaceForTesting
    // Call: BindTestInterfaceForTesting(receiver)
  }

  setFirstPartySets(sets) {
    // Method: SetFirstPartySets
    // Call: SetFirstPartySets(sets)
  }

  setExplicitlyAllowedPorts(ports) {
    // Method: SetExplicitlyAllowedPorts
    // Call: SetExplicitlyAllowedPorts(ports)
  }

  parseHeaders(url, headers) {
    // Method: ParseHeaders
    return new Promise((resolve) => {
      // Call: ParseHeaders(url, headers)
      resolve({});
    });
  }

  enableDataUseUpdates(enable) {
    // Method: EnableDataUseUpdates
    // Call: EnableDataUseUpdates(enable)
  }

  setIPv6ReachabilityOverride(reachability_override) {
    // Method: SetIPv6ReachabilityOverride
    // Call: SetIPv6ReachabilityOverride(reachability_override)
  }

  setGssapiLibraryLoadObserver(gssapi_library_load_observer) {
    // Method: SetGssapiLibraryLoadObserver
    // Call: SetGssapiLibraryLoadObserver(gssapi_library_load_observer)
  }

  setNetworkAnnotationMonitor(remote) {
    // Method: SetNetworkAnnotationMonitor
    // Call: SetNetworkAnnotationMonitor(remote)
  }

  setTpcdMetadataGrants(settings) {
    // Method: SetTpcdMetadataGrants
    // Call: SetTpcdMetadataGrants(settings)
  }

  interceptUrlLoaderForBodyDecoding(content_encoding_types, source_body, dest_body, source_url_loader, source_url_loader_client, dest_url_loader, dest_url_loader_client) {
    // Method: InterceptUrlLoaderForBodyDecoding
    // Call: InterceptUrlLoaderForBodyDecoding(content_encoding_types, source_body, dest_body, source_url_loader, source_url_loader_client, dest_url_loader, dest_url_loader_client)
  }

  decodeContentEncoding(content_encoding_types, source_body, dest_body) {
    // Method: DecodeContentEncoding
    return new Promise((resolve) => {
      // Call: DecodeContentEncoding(content_encoding_types, source_body, dest_body)
      resolve({});
    });
  }

  setTLS13EarlyDataEnabled(enabled) {
    // Method: SetTLS13EarlyDataEnabled
    // Call: SetTLS13EarlyDataEnabled(enabled)
  }

  addDurableMessageCollector(receiver) {
    // Method: AddDurableMessageCollector
    // Call: AddDurableMessageCollector(receiver)
  }

};

network.mojom.NetworkServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DurableMessageCollector
network.mojom.DurableMessageCollectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.DurableMessageCollector';
  }

  configure(config) {
    // Method: Configure
    // Call: Configure(config)
  }

  enableForProfile(throttling_profile_id) {
    // Method: EnableForProfile
    // Call: EnableForProfile(throttling_profile_id)
  }

  disableForProfile(throttling_profile_id) {
    // Method: DisableForProfile
    // Call: DisableForProfile(throttling_profile_id)
  }

  retrieve(devtools_request_id) {
    // Method: Retrieve
    return new Promise((resolve) => {
      // Call: Retrieve(devtools_request_id)
      resolve({});
    });
  }

};

network.mojom.DurableMessageCollectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
