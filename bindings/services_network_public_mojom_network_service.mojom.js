// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_service.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var content_settings = content_settings || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};
var url = url || {};

network.mojom.HttpAuthStaticParamsSpec = { $: {} };
network.mojom.HttpAuthDynamicParamsSpec = { $: {} };
network.mojom.EnvironmentVariableSpec = { $: {} };
network.mojom.NetworkServiceParamsSpec = { $: {} };
network.mojom.SCTAuditingConfigurationSpec = { $: {} };
network.mojom.NetworkDurableMessageConfigSpec = { $: {} };
network.mojom.GssapiLibraryLoadObserver = {};
network.mojom.GssapiLibraryLoadObserver.$interfaceName = 'network.mojom.GssapiLibraryLoadObserver';
network.mojom.GssapiLibraryLoadObserver_OnBeforeGssapiLibraryLoad_ParamsSpec = { $: {} };
network.mojom.NetworkService = {};
network.mojom.NetworkService.$interfaceName = 'network.mojom.NetworkService';
network.mojom.NetworkService_SetParams_ParamsSpec = { $: {} };
network.mojom.NetworkService_StartNetLog_ParamsSpec = { $: {} };
network.mojom.NetworkService_AttachNetLogProxy_ParamsSpec = { $: {} };
network.mojom.NetworkService_SetSSLKeyLogFile_ParamsSpec = { $: {} };
network.mojom.NetworkService_CreateNetworkContext_ParamsSpec = { $: {} };
network.mojom.NetworkService_ConfigureStubHostResolver_ParamsSpec = { $: {} };
network.mojom.NetworkService_DisableQuic_ParamsSpec = { $: {} };
network.mojom.NetworkService_SetUpHttpAuth_ParamsSpec = { $: {} };
network.mojom.NetworkService_ConfigureHttpAuthPrefs_ParamsSpec = { $: {} };
network.mojom.NetworkService_SetRawHeadersAccess_ParamsSpec = { $: {} };
network.mojom.NetworkService_SetMaxConnectionsPerProxyChain_ParamsSpec = { $: {} };
network.mojom.NetworkService_GetNetworkChangeManager_ParamsSpec = { $: {} };
network.mojom.NetworkService_GetNetworkQualityEstimatorManager_ParamsSpec = { $: {} };
network.mojom.NetworkService_GetDnsConfigChangeManager_ParamsSpec = { $: {} };
network.mojom.NetworkService_GetNetworkList_ParamsSpec = { $: {} };
network.mojom.NetworkService_GetNetworkList_ResponseParamsSpec = { $: {} };
network.mojom.NetworkService_OnTrustStoreChanged_ParamsSpec = { $: {} };
network.mojom.NetworkService_OnClientCertStoreChanged_ParamsSpec = { $: {} };
network.mojom.NetworkService_SetEncryptionKey_ParamsSpec = { $: {} };
network.mojom.NetworkService_OnPeerToPeerConnectionsCountChange_ParamsSpec = { $: {} };
network.mojom.NetworkService_OnApplicationStateChange_ParamsSpec = { $: {} };
network.mojom.NetworkService_SetTrustTokenKeyCommitments_ParamsSpec = { $: {} };
network.mojom.NetworkService_SetTrustTokenKeyCommitments_ResponseParamsSpec = { $: {} };
network.mojom.NetworkService_ClearSCTAuditingCache_ParamsSpec = { $: {} };
network.mojom.NetworkService_ConfigureSCTAuditing_ParamsSpec = { $: {} };
network.mojom.NetworkService_UpdateCtLogList_ParamsSpec = { $: {} };
network.mojom.NetworkService_UpdateCtLogList_ResponseParamsSpec = { $: {} };
network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ParamsSpec = { $: {} };
network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ResponseParamsSpec = { $: {} };
network.mojom.NetworkService_SetCtEnforcementEnabled_ParamsSpec = { $: {} };
network.mojom.NetworkService_SetCtEnforcementEnabled_ResponseParamsSpec = { $: {} };
network.mojom.NetworkService_UpdateKeyPinsList_ParamsSpec = { $: {} };
network.mojom.NetworkService_DumpWithoutCrashing_ParamsSpec = { $: {} };
network.mojom.NetworkService_BindTestInterfaceForTesting_ParamsSpec = { $: {} };
network.mojom.NetworkService_SetFirstPartySets_ParamsSpec = { $: {} };
network.mojom.NetworkService_SetExplicitlyAllowedPorts_ParamsSpec = { $: {} };
network.mojom.NetworkService_ParseHeaders_ParamsSpec = { $: {} };
network.mojom.NetworkService_ParseHeaders_ResponseParamsSpec = { $: {} };
network.mojom.NetworkService_EnableDataUseUpdates_ParamsSpec = { $: {} };
network.mojom.NetworkService_SetIPv6ReachabilityOverride_ParamsSpec = { $: {} };
network.mojom.NetworkService_SetGssapiLibraryLoadObserver_ParamsSpec = { $: {} };
network.mojom.NetworkService_SetNetworkAnnotationMonitor_ParamsSpec = { $: {} };
network.mojom.NetworkService_SetTpcdMetadataGrants_ParamsSpec = { $: {} };
network.mojom.NetworkService_InterceptUrlLoaderForBodyDecoding_ParamsSpec = { $: {} };
network.mojom.NetworkService_DecodeContentEncoding_ParamsSpec = { $: {} };
network.mojom.NetworkService_DecodeContentEncoding_ResponseParamsSpec = { $: {} };
network.mojom.NetworkService_SetTLS13EarlyDataEnabled_ParamsSpec = { $: {} };
network.mojom.NetworkService_AddDurableMessageCollector_ParamsSpec = { $: {} };
network.mojom.DurableMessageCollector = {};
network.mojom.DurableMessageCollector.$interfaceName = 'network.mojom.DurableMessageCollector';
network.mojom.DurableMessageCollector_Configure_ParamsSpec = { $: {} };
network.mojom.DurableMessageCollector_Configure_ResponseParamsSpec = { $: {} };
network.mojom.DurableMessageCollector_EnableForProfile_ParamsSpec = { $: {} };
network.mojom.DurableMessageCollector_EnableForProfile_ResponseParamsSpec = { $: {} };
network.mojom.DurableMessageCollector_DisableForProfile_ParamsSpec = { $: {} };
network.mojom.DurableMessageCollector_DisableForProfile_ResponseParamsSpec = { $: {} };
network.mojom.DurableMessageCollector_Retrieve_ParamsSpec = { $: {} };
network.mojom.DurableMessageCollector_Retrieve_ResponseParamsSpec = { $: {} };

// Struct: HttpAuthStaticParams
mojo.internal.Struct(
    network.mojom.HttpAuthStaticParamsSpec, 'network.mojom.HttpAuthStaticParams', [
      mojo.internal.StructField('gssapi_library_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HttpAuthDynamicParams
mojo.internal.Struct(
    network.mojom.HttpAuthDynamicParamsSpec, 'network.mojom.HttpAuthDynamicParams', [
      mojo.internal.StructField('allowed_schemes', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('patterns_allowed_to_use_all_schemes', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('server_allowlist', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('delegate_allowlist', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('android_negotiate_account_type', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('delegate_by_kdc_policy', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('negotiate_disable_cname_lookup', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_negotiate_port', 40, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ntlm_v2_enabled', 40, 3, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('allow_gssapi_library_load', 40, 4, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('basic_over_http_enabled', 40, 5, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: EnvironmentVariable
mojo.internal.Struct(
    network.mojom.EnvironmentVariableSpec, 'network.mojom.EnvironmentVariable', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NetworkServiceParams
mojo.internal.Struct(
    network.mojom.NetworkServiceParamsSpec, 'network.mojom.NetworkServiceParams', [
      mojo.internal.StructField('initial_connection_type', 0, 0, network.mojom.ConnectionTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('initial_connection_subtype', 8, 0, network.mojom.ConnectionSubtypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('initial_address_map', 16, 0, network.mojom.InitialAddressMapSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('environment', 24, 0, mojo.internal.Array(network.mojom.EnvironmentVariableSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('default_observer', 32, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderNetworkServiceObserverRemote), null, false, 0, undefined),
      mojo.internal.StructField('system_dns_resolver', 40, 0, mojo.internal.InterfaceProxy(network.mojom.SystemDnsResolverRemote), null, true, 0, undefined),
      mojo.internal.StructField('first_party_sets_enabled', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: SCTAuditingConfiguration
mojo.internal.Struct(
    network.mojom.SCTAuditingConfigurationSpec, 'network.mojom.SCTAuditingConfiguration', [
      mojo.internal.StructField('sampling_rate', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('log_expected_ingestion_delay', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('log_max_ingestion_random_delay', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('report_uri', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hashdance_lookup_uri', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 40, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hashdance_traffic_annotation', 48, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: NetworkDurableMessageConfig
mojo.internal.Struct(
    network.mojom.NetworkDurableMessageConfigSpec, 'network.mojom.NetworkDurableMessageConfig', [
      mojo.internal.StructField('http_storage_max_size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: GssapiLibraryLoadObserver
mojo.internal.Struct(
    network.mojom.GssapiLibraryLoadObserver_OnBeforeGssapiLibraryLoad_ParamsSpec, 'network.mojom.GssapiLibraryLoadObserver_OnBeforeGssapiLibraryLoad_Params', [
    ],
    [[0, 8]]);

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
  onBeforeGssapiLibraryLoad() {
    return this.$.onBeforeGssapiLibraryLoad();
  }
};

network.mojom.GssapiLibraryLoadObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GssapiLibraryLoadObserver', [
      { explicit: null },
    ]);
  }

  onBeforeGssapiLibraryLoad() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.GssapiLibraryLoadObserver_OnBeforeGssapiLibraryLoad_ParamsSpec,
      null,
      [],
      false);
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

network.mojom.GssapiLibraryLoadObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GssapiLibraryLoadObserver', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.GssapiLibraryLoadObserver_OnBeforeGssapiLibraryLoad_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.GssapiLibraryLoadObserver_OnBeforeGssapiLibraryLoad_ParamsSpec.$.structSpec);
          const result = this.impl.onBeforeGssapiLibraryLoad();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.GssapiLibraryLoadObserverReceiver = network.mojom.GssapiLibraryLoadObserverReceiver;

network.mojom.GssapiLibraryLoadObserverPtr = network.mojom.GssapiLibraryLoadObserverRemote;
network.mojom.GssapiLibraryLoadObserverRequest = network.mojom.GssapiLibraryLoadObserverPendingReceiver;


// Interface: NetworkService
mojo.internal.Struct(
    network.mojom.NetworkService_SetParams_ParamsSpec, 'network.mojom.NetworkService_SetParams_Params', [
      mojo.internal.StructField('params', 0, 0, network.mojom.NetworkServiceParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_StartNetLog_ParamsSpec, 'network.mojom.NetworkService_StartNetLog_Params', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_total_size', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('capture_mode', 16, 0, network.mojom.NetLogCaptureModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('constants', 24, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('duration', 32, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    network.mojom.NetworkService_AttachNetLogProxy_ParamsSpec, 'network.mojom.NetworkService_AttachNetLogProxy_Params', [
      mojo.internal.StructField('proxy_source', 0, 0, mojo.internal.InterfaceProxy(network.mojom.NetLogProxySourceRemote), null, false, 0, undefined),
      mojo.internal.StructField('proxy_sink', 8, 0, mojo.internal.InterfaceRequest(network.mojom.NetLogProxySinkRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkService_SetSSLKeyLogFile_ParamsSpec, 'network.mojom.NetworkService_SetSSLKeyLogFile_Params', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_CreateNetworkContext_ParamsSpec, 'network.mojom.NetworkService_CreateNetworkContext_Params', [
      mojo.internal.StructField('context', 0, 0, mojo.internal.InterfaceRequest(network.mojom.NetworkContextRemote), null, false, 0, undefined),
      mojo.internal.StructField('params', 8, 0, network.mojom.NetworkContextParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkService_ConfigureStubHostResolver_ParamsSpec, 'network.mojom.NetworkService_ConfigureStubHostResolver_Params', [
      mojo.internal.StructField('secure_dns_mode', 0, 0, network.mojom.SecureDnsModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dns_over_https_config', 8, 0, network.mojom.DnsOverHttpsConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fallback_doh_nameservers', 16, 0, mojo.internal.Array(network.mojom.IPEndPointSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('insecure_dns_client_enabled', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('happy_eyeballs_v3_enabled', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('additional_dns_types_enabled', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.NetworkService_DisableQuic_ParamsSpec, 'network.mojom.NetworkService_DisableQuic_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkService_SetUpHttpAuth_ParamsSpec, 'network.mojom.NetworkService_SetUpHttpAuth_Params', [
      mojo.internal.StructField('http_auth_static_params', 0, 0, network.mojom.HttpAuthStaticParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_ConfigureHttpAuthPrefs_ParamsSpec, 'network.mojom.NetworkService_ConfigureHttpAuthPrefs_Params', [
      mojo.internal.StructField('http_auth_dynamic_params', 0, 0, network.mojom.HttpAuthDynamicParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_SetRawHeadersAccess_ParamsSpec, 'network.mojom.NetworkService_SetRawHeadersAccess_Params', [
      mojo.internal.StructField('origins', 0, 0, mojo.internal.Array(url.mojom.OriginSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('process_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkService_SetMaxConnectionsPerProxyChain_ParamsSpec, 'network.mojom.NetworkService_SetMaxConnectionsPerProxyChain_Params', [
      mojo.internal.StructField('max_connections', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_GetNetworkChangeManager_ParamsSpec, 'network.mojom.NetworkService_GetNetworkChangeManager_Params', [
      mojo.internal.StructField('network_change_manager', 0, 0, mojo.internal.InterfaceRequest(network.mojom.NetworkChangeManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_GetNetworkQualityEstimatorManager_ParamsSpec, 'network.mojom.NetworkService_GetNetworkQualityEstimatorManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.NetworkQualityEstimatorManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_GetDnsConfigChangeManager_ParamsSpec, 'network.mojom.NetworkService_GetDnsConfigChangeManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.DnsConfigChangeManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_GetNetworkList_ParamsSpec, 'network.mojom.NetworkService_GetNetworkList_Params', [
      mojo.internal.StructField('policy', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_GetNetworkList_ResponseParamsSpec, 'network.mojom.NetworkService_GetNetworkList_ResponseParams', [
      mojo.internal.StructField('networks', 0, 0, mojo.internal.Array(network.mojom.NetworkInterfaceSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_OnTrustStoreChanged_ParamsSpec, 'network.mojom.NetworkService_OnTrustStoreChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkService_OnClientCertStoreChanged_ParamsSpec, 'network.mojom.NetworkService_OnClientCertStoreChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkService_SetEncryptionKey_ParamsSpec, 'network.mojom.NetworkService_SetEncryptionKey_Params', [
      mojo.internal.StructField('encryption_key', 0, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_OnPeerToPeerConnectionsCountChange_ParamsSpec, 'network.mojom.NetworkService_OnPeerToPeerConnectionsCountChange_Params', [
      mojo.internal.StructField('count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_OnApplicationStateChange_ParamsSpec, 'network.mojom.NetworkService_OnApplicationStateChange_Params', [
      mojo.internal.StructField('state', 0, 0, mojo_base.mojom.ApplicationStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_SetTrustTokenKeyCommitments_ParamsSpec, 'network.mojom.NetworkService_SetTrustTokenKeyCommitments_Params', [
      mojo.internal.StructField('raw_commitments', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_SetTrustTokenKeyCommitments_ResponseParamsSpec, 'network.mojom.NetworkService_SetTrustTokenKeyCommitments_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkService_ClearSCTAuditingCache_ParamsSpec, 'network.mojom.NetworkService_ClearSCTAuditingCache_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkService_ConfigureSCTAuditing_ParamsSpec, 'network.mojom.NetworkService_ConfigureSCTAuditing_Params', [
      mojo.internal.StructField('configuration', 0, 0, network.mojom.SCTAuditingConfigurationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_UpdateCtLogList_ParamsSpec, 'network.mojom.NetworkService_UpdateCtLogList_Params', [
      mojo.internal.StructField('log_list', 0, 0, mojo.internal.Array(network.mojom.CTLogInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_UpdateCtLogList_ResponseParamsSpec, 'network.mojom.NetworkService_UpdateCtLogList_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ParamsSpec, 'network.mojom.NetworkService_UpdateCtKnownPopularSCTs_Params', [
      mojo.internal.StructField('sct_hashes', 0, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ResponseParamsSpec, 'network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkService_SetCtEnforcementEnabled_ParamsSpec, 'network.mojom.NetworkService_SetCtEnforcementEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_SetCtEnforcementEnabled_ResponseParamsSpec, 'network.mojom.NetworkService_SetCtEnforcementEnabled_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkService_UpdateKeyPinsList_ParamsSpec, 'network.mojom.NetworkService_UpdateKeyPinsList_Params', [
      mojo.internal.StructField('pin_list', 0, 0, network.mojom.PinListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('update_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkService_DumpWithoutCrashing_ParamsSpec, 'network.mojom.NetworkService_DumpWithoutCrashing_Params', [
      mojo.internal.StructField('dump_request_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_BindTestInterfaceForTesting_ParamsSpec, 'network.mojom.NetworkService_BindTestInterfaceForTesting_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.NetworkServiceTestRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_SetFirstPartySets_ParamsSpec, 'network.mojom.NetworkService_SetFirstPartySets_Params', [
      mojo.internal.StructField('sets', 0, 0, network.mojom.GlobalFirstPartySetsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_SetExplicitlyAllowedPorts_ParamsSpec, 'network.mojom.NetworkService_SetExplicitlyAllowedPorts_Params', [
      mojo.internal.StructField('ports', 0, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_ParseHeaders_ParamsSpec, 'network.mojom.NetworkService_ParseHeaders_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('headers', 8, 0, network.mojom.HttpResponseHeadersSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkService_ParseHeaders_ResponseParamsSpec, 'network.mojom.NetworkService_ParseHeaders_ResponseParams', [
      mojo.internal.StructField('parsed_headers', 0, 0, network.mojom.ParsedHeadersSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_EnableDataUseUpdates_ParamsSpec, 'network.mojom.NetworkService_EnableDataUseUpdates_Params', [
      mojo.internal.StructField('enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_SetIPv6ReachabilityOverride_ParamsSpec, 'network.mojom.NetworkService_SetIPv6ReachabilityOverride_Params', [
      mojo.internal.StructField('reachability_override', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_SetGssapiLibraryLoadObserver_ParamsSpec, 'network.mojom.NetworkService_SetGssapiLibraryLoadObserver_Params', [
      mojo.internal.StructField('gssapi_library_load_observer', 0, 0, mojo.internal.InterfaceProxy(network.mojom.GssapiLibraryLoadObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_SetNetworkAnnotationMonitor_ParamsSpec, 'network.mojom.NetworkService_SetNetworkAnnotationMonitor_Params', [
      mojo.internal.StructField('remote', 0, 0, mojo.internal.InterfaceProxy(network.mojom.NetworkAnnotationMonitorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_SetTpcdMetadataGrants_ParamsSpec, 'network.mojom.NetworkService_SetTpcdMetadataGrants_Params', [
      mojo.internal.StructField('settings', 0, 0, mojo.internal.Array(content_settings.mojom.ContentSettingPatternSourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_InterceptUrlLoaderForBodyDecoding_ParamsSpec, 'network.mojom.NetworkService_InterceptUrlLoaderForBodyDecoding_Params', [
      mojo.internal.StructField('content_encoding_types', 0, 0, mojo.internal.Array(network.mojom.SourceTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('source_body', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('dest_body', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('source_url_loader', 24, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderRemote), null, false, 0, undefined),
      mojo.internal.StructField('source_url_loader_client', 32, 0, mojo.internal.InterfaceRequest(network.mojom.URLLoaderClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('dest_url_loader', 40, 0, mojo.internal.InterfaceRequest(network.mojom.URLLoaderRemote), null, false, 0, undefined),
      mojo.internal.StructField('dest_url_loader_client', 48, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderClientRemote), null, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    network.mojom.NetworkService_DecodeContentEncoding_ParamsSpec, 'network.mojom.NetworkService_DecodeContentEncoding_Params', [
      mojo.internal.StructField('content_encoding_types', 0, 0, mojo.internal.Array(network.mojom.SourceTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('source_body', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('dest_body', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.NetworkService_DecodeContentEncoding_ResponseParamsSpec, 'network.mojom.NetworkService_DecodeContentEncoding_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_SetTLS13EarlyDataEnabled_ParamsSpec, 'network.mojom.NetworkService_SetTLS13EarlyDataEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkService_AddDurableMessageCollector_ParamsSpec, 'network.mojom.NetworkService_AddDurableMessageCollector_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.DurableMessageCollectorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  setParams(params) {
    return this.$.setParams(params);
  }
  startNetLog(file, max_total_size, capture_mode, constants, duration) {
    return this.$.startNetLog(file, max_total_size, capture_mode, constants, duration);
  }
  attachNetLogProxy(proxy_source, proxy_sink) {
    return this.$.attachNetLogProxy(proxy_source, proxy_sink);
  }
  setSSLKeyLogFile(file) {
    return this.$.setSSLKeyLogFile(file);
  }
  createNetworkContext(context, params) {
    return this.$.createNetworkContext(context, params);
  }
  configureStubHostResolver(insecure_dns_client_enabled, happy_eyeballs_v3_enabled, secure_dns_mode, dns_over_https_config, additional_dns_types_enabled, fallback_doh_nameservers) {
    return this.$.configureStubHostResolver(insecure_dns_client_enabled, happy_eyeballs_v3_enabled, secure_dns_mode, dns_over_https_config, additional_dns_types_enabled, fallback_doh_nameservers);
  }
  disableQuic() {
    return this.$.disableQuic();
  }
  setUpHttpAuth(http_auth_static_params) {
    return this.$.setUpHttpAuth(http_auth_static_params);
  }
  configureHttpAuthPrefs(http_auth_dynamic_params) {
    return this.$.configureHttpAuthPrefs(http_auth_dynamic_params);
  }
  setRawHeadersAccess(process_id, origins) {
    return this.$.setRawHeadersAccess(process_id, origins);
  }
  setMaxConnectionsPerProxyChain(max_connections) {
    return this.$.setMaxConnectionsPerProxyChain(max_connections);
  }
  getNetworkChangeManager(network_change_manager) {
    return this.$.getNetworkChangeManager(network_change_manager);
  }
  getNetworkQualityEstimatorManager(receiver) {
    return this.$.getNetworkQualityEstimatorManager(receiver);
  }
  getDnsConfigChangeManager(receiver) {
    return this.$.getDnsConfigChangeManager(receiver);
  }
  getNetworkList(policy) {
    return this.$.getNetworkList(policy);
  }
  onTrustStoreChanged() {
    return this.$.onTrustStoreChanged();
  }
  onClientCertStoreChanged() {
    return this.$.onClientCertStoreChanged();
  }
  setEncryptionKey(encryption_key) {
    return this.$.setEncryptionKey(encryption_key);
  }
  onPeerToPeerConnectionsCountChange(count) {
    return this.$.onPeerToPeerConnectionsCountChange(count);
  }
  onApplicationStateChange(state) {
    return this.$.onApplicationStateChange(state);
  }
  setTrustTokenKeyCommitments(raw_commitments) {
    return this.$.setTrustTokenKeyCommitments(raw_commitments);
  }
  clearSCTAuditingCache() {
    return this.$.clearSCTAuditingCache();
  }
  configureSCTAuditing(configuration) {
    return this.$.configureSCTAuditing(configuration);
  }
  updateCtLogList(log_list) {
    return this.$.updateCtLogList(log_list);
  }
  updateCtKnownPopularSCTs(sct_hashes) {
    return this.$.updateCtKnownPopularSCTs(sct_hashes);
  }
  setCtEnforcementEnabled(enabled) {
    return this.$.setCtEnforcementEnabled(enabled);
  }
  updateKeyPinsList(pin_list, update_time) {
    return this.$.updateKeyPinsList(pin_list, update_time);
  }
  dumpWithoutCrashing(dump_request_time) {
    return this.$.dumpWithoutCrashing(dump_request_time);
  }
  bindTestInterfaceForTesting(receiver) {
    return this.$.bindTestInterfaceForTesting(receiver);
  }
  setFirstPartySets(sets) {
    return this.$.setFirstPartySets(sets);
  }
  setExplicitlyAllowedPorts(ports) {
    return this.$.setExplicitlyAllowedPorts(ports);
  }
  parseHeaders(url, headers) {
    return this.$.parseHeaders(url, headers);
  }
  enableDataUseUpdates(enable) {
    return this.$.enableDataUseUpdates(enable);
  }
  setIPv6ReachabilityOverride(reachability_override) {
    return this.$.setIPv6ReachabilityOverride(reachability_override);
  }
  setGssapiLibraryLoadObserver(gssapi_library_load_observer) {
    return this.$.setGssapiLibraryLoadObserver(gssapi_library_load_observer);
  }
  setNetworkAnnotationMonitor(remote) {
    return this.$.setNetworkAnnotationMonitor(remote);
  }
  setTpcdMetadataGrants(settings) {
    return this.$.setTpcdMetadataGrants(settings);
  }
  interceptUrlLoaderForBodyDecoding(content_encoding_types, source_body, dest_body, source_url_loader, source_url_loader_client, dest_url_loader, dest_url_loader_client) {
    return this.$.interceptUrlLoaderForBodyDecoding(content_encoding_types, source_body, dest_body, source_url_loader, source_url_loader_client, dest_url_loader, dest_url_loader_client);
  }
  decodeContentEncoding(content_encoding_types, source_body, dest_body) {
    return this.$.decodeContentEncoding(content_encoding_types, source_body, dest_body);
  }
  setTLS13EarlyDataEnabled(enabled) {
    return this.$.setTLS13EarlyDataEnabled(enabled);
  }
  addDurableMessageCollector(receiver) {
    return this.$.addDurableMessageCollector(receiver);
  }
};

network.mojom.NetworkServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setParams(params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.NetworkService_SetParams_ParamsSpec,
      null,
      [params],
      false);
  }

  startNetLog(file, max_total_size, capture_mode, constants, duration) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.NetworkService_StartNetLog_ParamsSpec,
      null,
      [file, max_total_size, capture_mode, constants, duration],
      false);
  }

  attachNetLogProxy(proxy_source, proxy_sink) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.NetworkService_AttachNetLogProxy_ParamsSpec,
      null,
      [proxy_source, proxy_sink],
      false);
  }

  setSSLKeyLogFile(file) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.NetworkService_SetSSLKeyLogFile_ParamsSpec,
      null,
      [file],
      false);
  }

  createNetworkContext(context, params) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      network.mojom.NetworkService_CreateNetworkContext_ParamsSpec,
      null,
      [context, params],
      false);
  }

  configureStubHostResolver(insecure_dns_client_enabled, happy_eyeballs_v3_enabled, secure_dns_mode, dns_over_https_config, additional_dns_types_enabled, fallback_doh_nameservers) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      network.mojom.NetworkService_ConfigureStubHostResolver_ParamsSpec,
      null,
      [insecure_dns_client_enabled, happy_eyeballs_v3_enabled, secure_dns_mode, dns_over_https_config, additional_dns_types_enabled, fallback_doh_nameservers],
      false);
  }

  disableQuic() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      network.mojom.NetworkService_DisableQuic_ParamsSpec,
      null,
      [],
      false);
  }

  setUpHttpAuth(http_auth_static_params) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      network.mojom.NetworkService_SetUpHttpAuth_ParamsSpec,
      null,
      [http_auth_static_params],
      false);
  }

  configureHttpAuthPrefs(http_auth_dynamic_params) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      network.mojom.NetworkService_ConfigureHttpAuthPrefs_ParamsSpec,
      null,
      [http_auth_dynamic_params],
      false);
  }

  setRawHeadersAccess(process_id, origins) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      network.mojom.NetworkService_SetRawHeadersAccess_ParamsSpec,
      null,
      [process_id, origins],
      false);
  }

  setMaxConnectionsPerProxyChain(max_connections) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      network.mojom.NetworkService_SetMaxConnectionsPerProxyChain_ParamsSpec,
      null,
      [max_connections],
      false);
  }

  getNetworkChangeManager(network_change_manager) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      network.mojom.NetworkService_GetNetworkChangeManager_ParamsSpec,
      null,
      [network_change_manager],
      false);
  }

  getNetworkQualityEstimatorManager(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      network.mojom.NetworkService_GetNetworkQualityEstimatorManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  getDnsConfigChangeManager(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      network.mojom.NetworkService_GetDnsConfigChangeManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  getNetworkList(policy) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      network.mojom.NetworkService_GetNetworkList_ParamsSpec,
      network.mojom.NetworkService_GetNetworkList_ResponseParamsSpec,
      [policy],
      false);
  }

  onTrustStoreChanged() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      network.mojom.NetworkService_OnTrustStoreChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onClientCertStoreChanged() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      network.mojom.NetworkService_OnClientCertStoreChanged_ParamsSpec,
      null,
      [],
      false);
  }

  setEncryptionKey(encryption_key) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      network.mojom.NetworkService_SetEncryptionKey_ParamsSpec,
      null,
      [encryption_key],
      false);
  }

  onPeerToPeerConnectionsCountChange(count) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      network.mojom.NetworkService_OnPeerToPeerConnectionsCountChange_ParamsSpec,
      null,
      [count],
      false);
  }

  onApplicationStateChange(state) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      network.mojom.NetworkService_OnApplicationStateChange_ParamsSpec,
      null,
      [state],
      false);
  }

  setTrustTokenKeyCommitments(raw_commitments) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      network.mojom.NetworkService_SetTrustTokenKeyCommitments_ParamsSpec,
      network.mojom.NetworkService_SetTrustTokenKeyCommitments_ResponseParamsSpec,
      [raw_commitments],
      false);
  }

  clearSCTAuditingCache() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      network.mojom.NetworkService_ClearSCTAuditingCache_ParamsSpec,
      null,
      [],
      false);
  }

  configureSCTAuditing(configuration) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      network.mojom.NetworkService_ConfigureSCTAuditing_ParamsSpec,
      null,
      [configuration],
      false);
  }

  updateCtLogList(log_list) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      network.mojom.NetworkService_UpdateCtLogList_ParamsSpec,
      network.mojom.NetworkService_UpdateCtLogList_ResponseParamsSpec,
      [log_list],
      false);
  }

  updateCtKnownPopularSCTs(sct_hashes) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ParamsSpec,
      network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ResponseParamsSpec,
      [sct_hashes],
      false);
  }

  setCtEnforcementEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      network.mojom.NetworkService_SetCtEnforcementEnabled_ParamsSpec,
      network.mojom.NetworkService_SetCtEnforcementEnabled_ResponseParamsSpec,
      [enabled],
      false);
  }

  updateKeyPinsList(pin_list, update_time) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      network.mojom.NetworkService_UpdateKeyPinsList_ParamsSpec,
      null,
      [pin_list, update_time],
      false);
  }

  dumpWithoutCrashing(dump_request_time) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      network.mojom.NetworkService_DumpWithoutCrashing_ParamsSpec,
      null,
      [dump_request_time],
      false);
  }

  bindTestInterfaceForTesting(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      network.mojom.NetworkService_BindTestInterfaceForTesting_ParamsSpec,
      null,
      [receiver],
      false);
  }

  setFirstPartySets(sets) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      network.mojom.NetworkService_SetFirstPartySets_ParamsSpec,
      null,
      [sets],
      false);
  }

  setExplicitlyAllowedPorts(ports) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      network.mojom.NetworkService_SetExplicitlyAllowedPorts_ParamsSpec,
      null,
      [ports],
      false);
  }

  parseHeaders(url, headers) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      network.mojom.NetworkService_ParseHeaders_ParamsSpec,
      network.mojom.NetworkService_ParseHeaders_ResponseParamsSpec,
      [url, headers],
      false);
  }

  enableDataUseUpdates(enable) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      network.mojom.NetworkService_EnableDataUseUpdates_ParamsSpec,
      null,
      [enable],
      false);
  }

  setIPv6ReachabilityOverride(reachability_override) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      network.mojom.NetworkService_SetIPv6ReachabilityOverride_ParamsSpec,
      null,
      [reachability_override],
      false);
  }

  setGssapiLibraryLoadObserver(gssapi_library_load_observer) {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      network.mojom.NetworkService_SetGssapiLibraryLoadObserver_ParamsSpec,
      null,
      [gssapi_library_load_observer],
      false);
  }

  setNetworkAnnotationMonitor(remote) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      network.mojom.NetworkService_SetNetworkAnnotationMonitor_ParamsSpec,
      null,
      [remote],
      false);
  }

  setTpcdMetadataGrants(settings) {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      network.mojom.NetworkService_SetTpcdMetadataGrants_ParamsSpec,
      null,
      [settings],
      false);
  }

  interceptUrlLoaderForBodyDecoding(content_encoding_types, source_body, dest_body, source_url_loader, source_url_loader_client, dest_url_loader, dest_url_loader_client) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      network.mojom.NetworkService_InterceptUrlLoaderForBodyDecoding_ParamsSpec,
      null,
      [content_encoding_types, source_body, dest_body, source_url_loader, source_url_loader_client, dest_url_loader, dest_url_loader_client],
      false);
  }

  decodeContentEncoding(content_encoding_types, source_body, dest_body) {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      network.mojom.NetworkService_DecodeContentEncoding_ParamsSpec,
      network.mojom.NetworkService_DecodeContentEncoding_ResponseParamsSpec,
      [content_encoding_types, source_body, dest_body],
      false);
  }

  setTLS13EarlyDataEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      network.mojom.NetworkService_SetTLS13EarlyDataEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  addDurableMessageCollector(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      network.mojom.NetworkService_AddDurableMessageCollector_ParamsSpec,
      null,
      [receiver],
      false);
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

network.mojom.NetworkServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetworkService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_SetParams_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_StartNetLog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_AttachNetLogProxy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_SetSSLKeyLogFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_CreateNetworkContext_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_ConfigureStubHostResolver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_DisableQuic_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_SetUpHttpAuth_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_ConfigureHttpAuthPrefs_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_SetRawHeadersAccess_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_SetMaxConnectionsPerProxyChain_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_GetNetworkChangeManager_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_GetNetworkQualityEstimatorManager_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_GetDnsConfigChangeManager_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_GetNetworkList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_OnTrustStoreChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_OnClientCertStoreChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_SetEncryptionKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_OnPeerToPeerConnectionsCountChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_OnApplicationStateChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_SetTrustTokenKeyCommitments_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_ClearSCTAuditingCache_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_ConfigureSCTAuditing_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_UpdateCtLogList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_SetCtEnforcementEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_UpdateKeyPinsList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_DumpWithoutCrashing_ParamsSpec);
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_BindTestInterfaceForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_SetFirstPartySets_ParamsSpec);
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_SetExplicitlyAllowedPorts_ParamsSpec);
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_ParseHeaders_ParamsSpec);
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_EnableDataUseUpdates_ParamsSpec);
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_SetIPv6ReachabilityOverride_ParamsSpec);
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_SetGssapiLibraryLoadObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_SetNetworkAnnotationMonitor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_SetTpcdMetadataGrants_ParamsSpec);
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_InterceptUrlLoaderForBodyDecoding_ParamsSpec);
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_DecodeContentEncoding_ParamsSpec);
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_SetTLS13EarlyDataEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkService_AddDurableMessageCollector_ParamsSpec);
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_SetParams_ParamsSpec.$.structSpec);
          const result = this.impl.setParams(params.params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_StartNetLog_ParamsSpec.$.structSpec);
          const result = this.impl.startNetLog(params.file, params.max_total_size, params.capture_mode, params.constants, params.duration);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_AttachNetLogProxy_ParamsSpec.$.structSpec);
          const result = this.impl.attachNetLogProxy(params.proxy_source, params.proxy_sink);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_SetSSLKeyLogFile_ParamsSpec.$.structSpec);
          const result = this.impl.setSSLKeyLogFile(params.file);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_CreateNetworkContext_ParamsSpec.$.structSpec);
          const result = this.impl.createNetworkContext(params.context, params.params);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_ConfigureStubHostResolver_ParamsSpec.$.structSpec);
          const result = this.impl.configureStubHostResolver(params.insecure_dns_client_enabled, params.happy_eyeballs_v3_enabled, params.secure_dns_mode, params.dns_over_https_config, params.additional_dns_types_enabled, params.fallback_doh_nameservers);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_DisableQuic_ParamsSpec.$.structSpec);
          const result = this.impl.disableQuic();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_SetUpHttpAuth_ParamsSpec.$.structSpec);
          const result = this.impl.setUpHttpAuth(params.http_auth_static_params);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_ConfigureHttpAuthPrefs_ParamsSpec.$.structSpec);
          const result = this.impl.configureHttpAuthPrefs(params.http_auth_dynamic_params);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_SetRawHeadersAccess_ParamsSpec.$.structSpec);
          const result = this.impl.setRawHeadersAccess(params.process_id, params.origins);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_SetMaxConnectionsPerProxyChain_ParamsSpec.$.structSpec);
          const result = this.impl.setMaxConnectionsPerProxyChain(params.max_connections);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_GetNetworkChangeManager_ParamsSpec.$.structSpec);
          const result = this.impl.getNetworkChangeManager(params.network_change_manager);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_GetNetworkQualityEstimatorManager_ParamsSpec.$.structSpec);
          const result = this.impl.getNetworkQualityEstimatorManager(params.receiver);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_GetDnsConfigChangeManager_ParamsSpec.$.structSpec);
          const result = this.impl.getDnsConfigChangeManager(params.receiver);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_GetNetworkList_ParamsSpec.$.structSpec);
          const result = this.impl.getNetworkList(params.policy);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkService_GetNetworkList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_OnTrustStoreChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onTrustStoreChanged();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_OnClientCertStoreChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onClientCertStoreChanged();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_SetEncryptionKey_ParamsSpec.$.structSpec);
          const result = this.impl.setEncryptionKey(params.encryption_key);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_OnPeerToPeerConnectionsCountChange_ParamsSpec.$.structSpec);
          const result = this.impl.onPeerToPeerConnectionsCountChange(params.count);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_OnApplicationStateChange_ParamsSpec.$.structSpec);
          const result = this.impl.onApplicationStateChange(params.state);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_SetTrustTokenKeyCommitments_ParamsSpec.$.structSpec);
          const result = this.impl.setTrustTokenKeyCommitments(params.raw_commitments);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkService_SetTrustTokenKeyCommitments_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_ClearSCTAuditingCache_ParamsSpec.$.structSpec);
          const result = this.impl.clearSCTAuditingCache();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_ConfigureSCTAuditing_ParamsSpec.$.structSpec);
          const result = this.impl.configureSCTAuditing(params.configuration);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_UpdateCtLogList_ParamsSpec.$.structSpec);
          const result = this.impl.updateCtLogList(params.log_list);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkService_UpdateCtLogList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ParamsSpec.$.structSpec);
          const result = this.impl.updateCtKnownPopularSCTs(params.sct_hashes);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_SetCtEnforcementEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setCtEnforcementEnabled(params.enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkService_SetCtEnforcementEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_UpdateKeyPinsList_ParamsSpec.$.structSpec);
          const result = this.impl.updateKeyPinsList(params.pin_list, params.update_time);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_DumpWithoutCrashing_ParamsSpec.$.structSpec);
          const result = this.impl.dumpWithoutCrashing(params.dump_request_time);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_BindTestInterfaceForTesting_ParamsSpec.$.structSpec);
          const result = this.impl.bindTestInterfaceForTesting(params.receiver);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_SetFirstPartySets_ParamsSpec.$.structSpec);
          const result = this.impl.setFirstPartySets(params.sets);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_SetExplicitlyAllowedPorts_ParamsSpec.$.structSpec);
          const result = this.impl.setExplicitlyAllowedPorts(params.ports);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_ParseHeaders_ParamsSpec.$.structSpec);
          const result = this.impl.parseHeaders(params.url, params.headers);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkService_ParseHeaders_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_EnableDataUseUpdates_ParamsSpec.$.structSpec);
          const result = this.impl.enableDataUseUpdates(params.enable);
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_SetIPv6ReachabilityOverride_ParamsSpec.$.structSpec);
          const result = this.impl.setIPv6ReachabilityOverride(params.reachability_override);
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_SetGssapiLibraryLoadObserver_ParamsSpec.$.structSpec);
          const result = this.impl.setGssapiLibraryLoadObserver(params.gssapi_library_load_observer);
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_SetNetworkAnnotationMonitor_ParamsSpec.$.structSpec);
          const result = this.impl.setNetworkAnnotationMonitor(params.remote);
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_SetTpcdMetadataGrants_ParamsSpec.$.structSpec);
          const result = this.impl.setTpcdMetadataGrants(params.settings);
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_InterceptUrlLoaderForBodyDecoding_ParamsSpec.$.structSpec);
          const result = this.impl.interceptUrlLoaderForBodyDecoding(params.content_encoding_types, params.source_body, params.dest_body, params.source_url_loader, params.source_url_loader_client, params.dest_url_loader, params.dest_url_loader_client);
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_DecodeContentEncoding_ParamsSpec.$.structSpec);
          const result = this.impl.decodeContentEncoding(params.content_encoding_types, params.source_body, params.dest_body);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkService_DecodeContentEncoding_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_SetTLS13EarlyDataEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setTLS13EarlyDataEnabled(params.enabled);
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkService_AddDurableMessageCollector_ParamsSpec.$.structSpec);
          const result = this.impl.addDurableMessageCollector(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.NetworkServiceReceiver = network.mojom.NetworkServiceReceiver;

network.mojom.NetworkServicePtr = network.mojom.NetworkServiceRemote;
network.mojom.NetworkServiceRequest = network.mojom.NetworkServicePendingReceiver;


// Interface: DurableMessageCollector
mojo.internal.Struct(
    network.mojom.DurableMessageCollector_Configure_ParamsSpec, 'network.mojom.DurableMessageCollector_Configure_Params', [
      mojo.internal.StructField('config', 0, 0, network.mojom.NetworkDurableMessageConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.DurableMessageCollector_Configure_ResponseParamsSpec, 'network.mojom.DurableMessageCollector_Configure_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.DurableMessageCollector_EnableForProfile_ParamsSpec, 'network.mojom.DurableMessageCollector_EnableForProfile_Params', [
      mojo.internal.StructField('throttling_profile_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.DurableMessageCollector_EnableForProfile_ResponseParamsSpec, 'network.mojom.DurableMessageCollector_EnableForProfile_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.DurableMessageCollector_DisableForProfile_ParamsSpec, 'network.mojom.DurableMessageCollector_DisableForProfile_Params', [
      mojo.internal.StructField('throttling_profile_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.DurableMessageCollector_DisableForProfile_ResponseParamsSpec, 'network.mojom.DurableMessageCollector_DisableForProfile_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.DurableMessageCollector_Retrieve_ParamsSpec, 'network.mojom.DurableMessageCollector_Retrieve_Params', [
      mojo.internal.StructField('devtools_request_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.DurableMessageCollector_Retrieve_ResponseParamsSpec, 'network.mojom.DurableMessageCollector_Retrieve_ResponseParams', [
      mojo.internal.StructField('message', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
  configure(config) {
    return this.$.configure(config);
  }
  enableForProfile(throttling_profile_id) {
    return this.$.enableForProfile(throttling_profile_id);
  }
  disableForProfile(throttling_profile_id) {
    return this.$.disableForProfile(throttling_profile_id);
  }
  retrieve(devtools_request_id) {
    return this.$.retrieve(devtools_request_id);
  }
};

network.mojom.DurableMessageCollectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DurableMessageCollector', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  configure(config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.DurableMessageCollector_Configure_ParamsSpec,
      network.mojom.DurableMessageCollector_Configure_ResponseParamsSpec,
      [config],
      false);
  }

  enableForProfile(throttling_profile_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.DurableMessageCollector_EnableForProfile_ParamsSpec,
      network.mojom.DurableMessageCollector_EnableForProfile_ResponseParamsSpec,
      [throttling_profile_id],
      false);
  }

  disableForProfile(throttling_profile_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.DurableMessageCollector_DisableForProfile_ParamsSpec,
      network.mojom.DurableMessageCollector_DisableForProfile_ResponseParamsSpec,
      [throttling_profile_id],
      false);
  }

  retrieve(devtools_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.DurableMessageCollector_Retrieve_ParamsSpec,
      network.mojom.DurableMessageCollector_Retrieve_ResponseParamsSpec,
      [devtools_request_id],
      false);
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

network.mojom.DurableMessageCollectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DurableMessageCollector', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.DurableMessageCollector_Configure_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.DurableMessageCollector_EnableForProfile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.DurableMessageCollector_DisableForProfile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.DurableMessageCollector_Retrieve_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DurableMessageCollector_Configure_ParamsSpec.$.structSpec);
          const result = this.impl.configure(params.config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.DurableMessageCollector_Configure_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DurableMessageCollector_EnableForProfile_ParamsSpec.$.structSpec);
          const result = this.impl.enableForProfile(params.throttling_profile_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.DurableMessageCollector_EnableForProfile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DurableMessageCollector_DisableForProfile_ParamsSpec.$.structSpec);
          const result = this.impl.disableForProfile(params.throttling_profile_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.DurableMessageCollector_DisableForProfile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DurableMessageCollector_Retrieve_ParamsSpec.$.structSpec);
          const result = this.impl.retrieve(params.devtools_request_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.DurableMessageCollector_Retrieve_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.DurableMessageCollectorReceiver = network.mojom.DurableMessageCollectorReceiver;

network.mojom.DurableMessageCollectorPtr = network.mojom.DurableMessageCollectorRemote;
network.mojom.DurableMessageCollectorRequest = network.mojom.DurableMessageCollectorPendingReceiver;

