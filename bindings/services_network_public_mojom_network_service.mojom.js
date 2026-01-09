// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_service.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: GssapiLibraryLoadObserver
network.mojom.GssapiLibraryLoadObserver = {};

network.mojom.GssapiLibraryLoadObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.GssapiLibraryLoadObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.GssapiLibraryLoadObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.GssapiLibraryLoadObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.GssapiLibraryLoadObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.GssapiLibraryLoadObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBeforeGssapiLibraryLoad() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.GssapiLibraryLoadObserver_OnBeforeGssapiLibraryLoad_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

network.mojom.GssapiLibraryLoadObserver.getRemote = function() {
  let remote = new network.mojom.GssapiLibraryLoadObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.GssapiLibraryLoadObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnBeforeGssapiLibraryLoad
network.mojom.GssapiLibraryLoadObserver_OnBeforeGssapiLibraryLoad_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.GssapiLibraryLoadObserver.OnBeforeGssapiLibraryLoad_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
network.mojom.GssapiLibraryLoadObserverPtr = network.mojom.GssapiLibraryLoadObserverRemote;
network.mojom.GssapiLibraryLoadObserverRequest = network.mojom.GssapiLibraryLoadObserverPendingReceiver;


// Interface: NetworkService
network.mojom.NetworkService = {};

network.mojom.NetworkServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetworkServiceRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetworkServicePendingReceiver,
      handle);
    this.$ = new network.mojom.NetworkServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.NetworkServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setParams(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.NetworkService_SetParams_ParamsSpec,
      null,
      null,
      [params],
      undefined,
      undefined
    );
  }

  startNetLog(file, max_total_size, capture_mode, constants, duration) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.NetworkService_StartNetLog_ParamsSpec,
      null,
      null,
      [file, max_total_size, capture_mode, constants, duration],
      undefined,
      undefined
    );
  }

  attachNetLogProxy(proxy_source, proxy_sink) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.NetworkService_AttachNetLogProxy_ParamsSpec,
      null,
      null,
      [proxy_source, proxy_sink],
      undefined,
      undefined
    );
  }

  setSSLKeyLogFile(file) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.NetworkService_SetSSLKeyLogFile_ParamsSpec,
      null,
      null,
      [file],
      undefined,
      undefined
    );
  }

  createNetworkContext(context, params) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.NetworkService_CreateNetworkContext_ParamsSpec,
      null,
      null,
      [context, params],
      undefined,
      undefined
    );
  }

  configureStubHostResolver(insecure_dns_client_enabled, happy_eyeballs_v3_enabled, secure_dns_mode, dns_over_https_config, additional_dns_types_enabled, fallback_doh_nameservers) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.NetworkService_ConfigureStubHostResolver_ParamsSpec,
      null,
      null,
      [insecure_dns_client_enabled, happy_eyeballs_v3_enabled, secure_dns_mode, dns_over_https_config, additional_dns_types_enabled, fallback_doh_nameservers],
      undefined,
      undefined
    );
  }

  disableQuic() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      network.mojom.NetworkService_DisableQuic_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setUpHttpAuth(http_auth_static_params) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      network.mojom.NetworkService_SetUpHttpAuth_ParamsSpec,
      null,
      null,
      [http_auth_static_params],
      undefined,
      undefined
    );
  }

  configureHttpAuthPrefs(http_auth_dynamic_params) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      network.mojom.NetworkService_ConfigureHttpAuthPrefs_ParamsSpec,
      null,
      null,
      [http_auth_dynamic_params],
      undefined,
      undefined
    );
  }

  setRawHeadersAccess(process_id, origins) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      network.mojom.NetworkService_SetRawHeadersAccess_ParamsSpec,
      null,
      null,
      [process_id, origins],
      undefined,
      undefined
    );
  }

  setMaxConnectionsPerProxyChain(max_connections) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      network.mojom.NetworkService_SetMaxConnectionsPerProxyChain_ParamsSpec,
      null,
      null,
      [max_connections],
      undefined,
      undefined
    );
  }

  getNetworkChangeManager(network_change_manager) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      network.mojom.NetworkService_GetNetworkChangeManager_ParamsSpec,
      null,
      null,
      [network_change_manager],
      undefined,
      undefined
    );
  }

  getNetworkQualityEstimatorManager(receiver) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      network.mojom.NetworkService_GetNetworkQualityEstimatorManager_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  getDnsConfigChangeManager(receiver) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      network.mojom.NetworkService_GetDnsConfigChangeManager_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  getNetworkList(policy) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      network.mojom.NetworkService_GetNetworkList_ParamsSpec,
      network.mojom.NetworkService_GetNetworkList_ResponseParamsSpec,
      network.mojom.NetworkService_GetNetworkList_ResponseParamsSpec,
      [policy],
      undefined,
      undefined
    );
  }

  onTrustStoreChanged() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      network.mojom.NetworkService_OnTrustStoreChanged_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onClientCertStoreChanged() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      network.mojom.NetworkService_OnClientCertStoreChanged_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setEncryptionKey(encryption_key) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      network.mojom.NetworkService_SetEncryptionKey_ParamsSpec,
      null,
      null,
      [encryption_key],
      undefined,
      undefined
    );
  }

  onPeerToPeerConnectionsCountChange(count) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      network.mojom.NetworkService_OnPeerToPeerConnectionsCountChange_ParamsSpec,
      null,
      null,
      [count],
      undefined,
      undefined
    );
  }

  onApplicationStateChange(state) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      network.mojom.NetworkService_OnApplicationStateChange_ParamsSpec,
      null,
      null,
      [state],
      undefined,
      undefined
    );
  }

  setTrustTokenKeyCommitments(raw_commitments) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      network.mojom.NetworkService_SetTrustTokenKeyCommitments_ParamsSpec,
      null,
      null,
      [raw_commitments],
      undefined,
      undefined
    );
  }

  clearSCTAuditingCache() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      network.mojom.NetworkService_ClearSCTAuditingCache_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  configureSCTAuditing(configuration) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      network.mojom.NetworkService_ConfigureSCTAuditing_ParamsSpec,
      null,
      null,
      [configuration],
      undefined,
      undefined
    );
  }

  updateCtLogList(log_list) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      network.mojom.NetworkService_UpdateCtLogList_ParamsSpec,
      null,
      null,
      [log_list],
      undefined,
      undefined
    );
  }

  updateCtKnownPopularSCTs(sct_hashes) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ParamsSpec,
      null,
      null,
      [sct_hashes],
      undefined,
      undefined
    );
  }

  setCtEnforcementEnabled(enabled) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      network.mojom.NetworkService_SetCtEnforcementEnabled_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  updateKeyPinsList(pin_list, update_time) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      network.mojom.NetworkService_UpdateKeyPinsList_ParamsSpec,
      null,
      null,
      [pin_list, update_time],
      undefined,
      undefined
    );
  }

  dumpWithoutCrashing(dump_request_time) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      network.mojom.NetworkService_DumpWithoutCrashing_ParamsSpec,
      null,
      null,
      [dump_request_time],
      undefined,
      undefined
    );
  }

  bindTestInterfaceForTesting(receiver) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      network.mojom.NetworkService_BindTestInterfaceForTesting_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  setFirstPartySets(sets) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      network.mojom.NetworkService_SetFirstPartySets_ParamsSpec,
      null,
      null,
      [sets],
      undefined,
      undefined
    );
  }

  setExplicitlyAllowedPorts(ports) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      network.mojom.NetworkService_SetExplicitlyAllowedPorts_ParamsSpec,
      null,
      null,
      [ports],
      undefined,
      undefined
    );
  }

  parseHeaders(url, headers) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      network.mojom.NetworkService_ParseHeaders_ParamsSpec,
      network.mojom.NetworkService_ParseHeaders_ResponseParamsSpec,
      network.mojom.NetworkService_ParseHeaders_ResponseParamsSpec,
      [url, headers],
      undefined,
      undefined
    );
  }

  enableDataUseUpdates(enable) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      network.mojom.NetworkService_EnableDataUseUpdates_ParamsSpec,
      null,
      null,
      [enable],
      undefined,
      undefined
    );
  }

  setIPv6ReachabilityOverride(reachability_override) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      network.mojom.NetworkService_SetIPv6ReachabilityOverride_ParamsSpec,
      null,
      null,
      [reachability_override],
      undefined,
      undefined
    );
  }

  setGssapiLibraryLoadObserver(gssapi_library_load_observer) {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      network.mojom.NetworkService_SetGssapiLibraryLoadObserver_ParamsSpec,
      null,
      null,
      [gssapi_library_load_observer],
      undefined,
      undefined
    );
  }

  setNetworkAnnotationMonitor(remote) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      network.mojom.NetworkService_SetNetworkAnnotationMonitor_ParamsSpec,
      null,
      null,
      [remote],
      undefined,
      undefined
    );
  }

  setTpcdMetadataGrants(settings) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      network.mojom.NetworkService_SetTpcdMetadataGrants_ParamsSpec,
      null,
      null,
      [settings],
      undefined,
      undefined
    );
  }

  interceptUrlLoaderForBodyDecoding(content_encoding_types, source_body, dest_body, source_url_loader, source_url_loader_client, dest_url_loader, dest_url_loader_client) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      network.mojom.NetworkService_InterceptUrlLoaderForBodyDecoding_ParamsSpec,
      null,
      null,
      [content_encoding_types, source_body, dest_body, source_url_loader, source_url_loader_client, dest_url_loader, dest_url_loader_client],
      undefined,
      undefined
    );
  }

  decodeContentEncoding(content_encoding_types, source_body, dest_body) {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      network.mojom.NetworkService_DecodeContentEncoding_ParamsSpec,
      network.mojom.NetworkService_DecodeContentEncoding_ResponseParamsSpec,
      network.mojom.NetworkService_DecodeContentEncoding_ResponseParamsSpec,
      [content_encoding_types, source_body, dest_body],
      undefined,
      undefined
    );
  }

  setTLS13EarlyDataEnabled(enabled) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      network.mojom.NetworkService_SetTLS13EarlyDataEnabled_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  addDurableMessageCollector(receiver) {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      network.mojom.NetworkService_AddDurableMessageCollector_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

};

network.mojom.NetworkService.getRemote = function() {
  let remote = new network.mojom.NetworkServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkService',
    'context');
  return remote.$;
};

// ParamsSpec for SetParams
network.mojom.NetworkService_SetParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.SetParams_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartNetLog
network.mojom.NetworkService_StartNetLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.StartNetLog_Params',
      packedSize: 48,
      fields: [
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'max_total_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'capture_mode', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'constants', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'duration', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for AttachNetLogProxy
network.mojom.NetworkService_AttachNetLogProxy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.AttachNetLogProxy_Params',
      packedSize: 24,
      fields: [
        { name: 'proxy_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'proxy_sink', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetSSLKeyLogFile
network.mojom.NetworkService_SetSSLKeyLogFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.SetSSLKeyLogFile_Params',
      packedSize: 16,
      fields: [
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateNetworkContext
network.mojom.NetworkService_CreateNetworkContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.CreateNetworkContext_Params',
      packedSize: 24,
      fields: [
        { name: 'context', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ConfigureStubHostResolver
network.mojom.NetworkService_ConfigureStubHostResolver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.ConfigureStubHostResolver_Params',
      packedSize: 48,
      fields: [
        { name: 'insecure_dns_client_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'happy_eyeballs_v3_enabled', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'secure_dns_mode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'dns_over_https_config', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'additional_dns_types_enabled', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'fallback_doh_nameservers', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for DisableQuic
network.mojom.NetworkService_DisableQuic_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.DisableQuic_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetUpHttpAuth
network.mojom.NetworkService_SetUpHttpAuth_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.SetUpHttpAuth_Params',
      packedSize: 16,
      fields: [
        { name: 'http_auth_static_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ConfigureHttpAuthPrefs
network.mojom.NetworkService_ConfigureHttpAuthPrefs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.ConfigureHttpAuthPrefs_Params',
      packedSize: 16,
      fields: [
        { name: 'http_auth_dynamic_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetRawHeadersAccess
network.mojom.NetworkService_SetRawHeadersAccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.SetRawHeadersAccess_Params',
      packedSize: 24,
      fields: [
        { name: 'process_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'origins', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetMaxConnectionsPerProxyChain
network.mojom.NetworkService_SetMaxConnectionsPerProxyChain_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.SetMaxConnectionsPerProxyChain_Params',
      packedSize: 16,
      fields: [
        { name: 'max_connections', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNetworkChangeManager
network.mojom.NetworkService_GetNetworkChangeManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.GetNetworkChangeManager_Params',
      packedSize: 16,
      fields: [
        { name: 'network_change_manager', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNetworkQualityEstimatorManager
network.mojom.NetworkService_GetNetworkQualityEstimatorManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.GetNetworkQualityEstimatorManager_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDnsConfigChangeManager
network.mojom.NetworkService_GetDnsConfigChangeManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.GetDnsConfigChangeManager_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNetworkList
network.mojom.NetworkService_GetNetworkList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.GetNetworkList_Params',
      packedSize: 16,
      fields: [
        { name: 'policy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.NetworkService_GetNetworkList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.GetNetworkList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'networks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTrustStoreChanged
network.mojom.NetworkService_OnTrustStoreChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.OnTrustStoreChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnClientCertStoreChanged
network.mojom.NetworkService_OnClientCertStoreChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.OnClientCertStoreChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetEncryptionKey
network.mojom.NetworkService_SetEncryptionKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.SetEncryptionKey_Params',
      packedSize: 16,
      fields: [
        { name: 'encryption_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPeerToPeerConnectionsCountChange
network.mojom.NetworkService_OnPeerToPeerConnectionsCountChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.OnPeerToPeerConnectionsCountChange_Params',
      packedSize: 16,
      fields: [
        { name: 'count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnApplicationStateChange
network.mojom.NetworkService_OnApplicationStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.OnApplicationStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTrustTokenKeyCommitments
network.mojom.NetworkService_SetTrustTokenKeyCommitments_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.SetTrustTokenKeyCommitments_Params',
      packedSize: 16,
      fields: [
        { name: 'raw_commitments', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearSCTAuditingCache
network.mojom.NetworkService_ClearSCTAuditingCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.ClearSCTAuditingCache_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ConfigureSCTAuditing
network.mojom.NetworkService_ConfigureSCTAuditing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.ConfigureSCTAuditing_Params',
      packedSize: 16,
      fields: [
        { name: 'configuration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateCtLogList
network.mojom.NetworkService_UpdateCtLogList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.UpdateCtLogList_Params',
      packedSize: 16,
      fields: [
        { name: 'log_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateCtKnownPopularSCTs
network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.UpdateCtKnownPopularSCTs_Params',
      packedSize: 16,
      fields: [
        { name: 'sct_hashes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCtEnforcementEnabled
network.mojom.NetworkService_SetCtEnforcementEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.SetCtEnforcementEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateKeyPinsList
network.mojom.NetworkService_UpdateKeyPinsList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.UpdateKeyPinsList_Params',
      packedSize: 24,
      fields: [
        { name: 'pin_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'update_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DumpWithoutCrashing
network.mojom.NetworkService_DumpWithoutCrashing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.DumpWithoutCrashing_Params',
      packedSize: 16,
      fields: [
        { name: 'dump_request_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindTestInterfaceForTesting
network.mojom.NetworkService_BindTestInterfaceForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.BindTestInterfaceForTesting_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetFirstPartySets
network.mojom.NetworkService_SetFirstPartySets_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.SetFirstPartySets_Params',
      packedSize: 16,
      fields: [
        { name: 'sets', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetExplicitlyAllowedPorts
network.mojom.NetworkService_SetExplicitlyAllowedPorts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.SetExplicitlyAllowedPorts_Params',
      packedSize: 16,
      fields: [
        { name: 'ports', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ParseHeaders
network.mojom.NetworkService_ParseHeaders_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.ParseHeaders_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'headers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

network.mojom.NetworkService_ParseHeaders_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.ParseHeaders_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'parsed_headers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnableDataUseUpdates
network.mojom.NetworkService_EnableDataUseUpdates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.EnableDataUseUpdates_Params',
      packedSize: 16,
      fields: [
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetIPv6ReachabilityOverride
network.mojom.NetworkService_SetIPv6ReachabilityOverride_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.SetIPv6ReachabilityOverride_Params',
      packedSize: 16,
      fields: [
        { name: 'reachability_override', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetGssapiLibraryLoadObserver
network.mojom.NetworkService_SetGssapiLibraryLoadObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.SetGssapiLibraryLoadObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'gssapi_library_load_observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetNetworkAnnotationMonitor
network.mojom.NetworkService_SetNetworkAnnotationMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.SetNetworkAnnotationMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTpcdMetadataGrants
network.mojom.NetworkService_SetTpcdMetadataGrants_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.SetTpcdMetadataGrants_Params',
      packedSize: 16,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InterceptUrlLoaderForBodyDecoding
network.mojom.NetworkService_InterceptUrlLoaderForBodyDecoding_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.InterceptUrlLoaderForBodyDecoding_Params',
      packedSize: 64,
      fields: [
        { name: 'content_encoding_types', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'source_body', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'dest_body', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'source_url_loader', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'source_url_loader_client', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'dest_url_loader', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'dest_url_loader_client', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// ParamsSpec for DecodeContentEncoding
network.mojom.NetworkService_DecodeContentEncoding_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.DecodeContentEncoding_Params',
      packedSize: 32,
      fields: [
        { name: 'content_encoding_types', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'source_body', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'dest_body', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

network.mojom.NetworkService_DecodeContentEncoding_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.DecodeContentEncoding_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTLS13EarlyDataEnabled
network.mojom.NetworkService_SetTLS13EarlyDataEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.SetTLS13EarlyDataEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddDurableMessageCollector
network.mojom.NetworkService_AddDurableMessageCollector_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkService.AddDurableMessageCollector_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.NetworkServicePtr = network.mojom.NetworkServiceRemote;
network.mojom.NetworkServiceRequest = network.mojom.NetworkServicePendingReceiver;


// Interface: DurableMessageCollector
network.mojom.DurableMessageCollector = {};

network.mojom.DurableMessageCollectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.DurableMessageCollectorRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DurableMessageCollector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.DurableMessageCollectorPendingReceiver,
      handle);
    this.$ = new network.mojom.DurableMessageCollectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.DurableMessageCollectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  configure(config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.DurableMessageCollector_Configure_ParamsSpec,
      null,
      null,
      [config],
      undefined,
      undefined
    );
  }

  enableForProfile(throttling_profile_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.DurableMessageCollector_EnableForProfile_ParamsSpec,
      null,
      null,
      [throttling_profile_id],
      undefined,
      undefined
    );
  }

  disableForProfile(throttling_profile_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.DurableMessageCollector_DisableForProfile_ParamsSpec,
      null,
      null,
      [throttling_profile_id],
      undefined,
      undefined
    );
  }

  retrieve(devtools_request_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.DurableMessageCollector_Retrieve_ParamsSpec,
      network.mojom.DurableMessageCollector_Retrieve_ResponseParamsSpec,
      network.mojom.DurableMessageCollector_Retrieve_ResponseParamsSpec,
      [devtools_request_id],
      undefined,
      undefined
    );
  }

};

network.mojom.DurableMessageCollector.getRemote = function() {
  let remote = new network.mojom.DurableMessageCollectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DurableMessageCollector',
    'context');
  return remote.$;
};

// ParamsSpec for Configure
network.mojom.DurableMessageCollector_Configure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DurableMessageCollector.Configure_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnableForProfile
network.mojom.DurableMessageCollector_EnableForProfile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DurableMessageCollector.EnableForProfile_Params',
      packedSize: 16,
      fields: [
        { name: 'throttling_profile_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisableForProfile
network.mojom.DurableMessageCollector_DisableForProfile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DurableMessageCollector.DisableForProfile_Params',
      packedSize: 16,
      fields: [
        { name: 'throttling_profile_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Retrieve
network.mojom.DurableMessageCollector_Retrieve_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DurableMessageCollector.Retrieve_Params',
      packedSize: 16,
      fields: [
        { name: 'devtools_request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.DurableMessageCollector_Retrieve_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DurableMessageCollector.Retrieve_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.DurableMessageCollectorPtr = network.mojom.DurableMessageCollectorRemote;
network.mojom.DurableMessageCollectorRequest = network.mojom.DurableMessageCollectorPendingReceiver;

