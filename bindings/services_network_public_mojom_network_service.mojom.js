// Auto-generated MojoJS binding
 // Source: chromium_src/services/network/public/mojom/network_service.mojom
 // Module: network.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.content_settings = mojo.internal.bindings.content_settings || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.sandbox = mojo.internal.bindings.sandbox || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.network.mojom.HttpAuthStaticParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpAuthDynamicParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.EnvironmentVariableSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SCTAuditingConfigurationSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkDurableMessageConfigSpec = { $: {} };
mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserver = {};
mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserver.$interfaceName = 'network.mojom.GssapiLibraryLoadObserver';
mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserver_OnBeforeGssapiLibraryLoad_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService = {};
mojo.internal.bindings.network.mojom.NetworkService.$interfaceName = 'network.mojom.NetworkService';
mojo.internal.bindings.network.mojom.NetworkService_SetParams_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_StartNetLog_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_AttachNetLogProxy_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_SetSSLKeyLogFile_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_CreateNetworkContext_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_ConfigureStubHostResolver_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_DisableQuic_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_SetUpHttpAuth_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_ConfigureHttpAuthPrefs_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_SetRawHeadersAccess_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_SetMaxConnectionsPerProxyChain_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_GetNetworkChangeManager_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_GetNetworkQualityEstimatorManager_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_GetDnsConfigChangeManager_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_GetNetworkList_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_GetNetworkList_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_OnTrustStoreChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_OnClientCertStoreChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_SetEncryptionKey_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_OnPeerToPeerConnectionsCountChange_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_OnApplicationStateChange_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_SetTrustTokenKeyCommitments_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_SetTrustTokenKeyCommitments_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_ClearSCTAuditingCache_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_ConfigureSCTAuditing_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_UpdateCtLogList_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_UpdateCtLogList_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_SetCtEnforcementEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_SetCtEnforcementEnabled_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_UpdateKeyPinsList_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_DumpWithoutCrashing_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_BindTestInterfaceForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_SetFirstPartySets_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_SetExplicitlyAllowedPorts_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_ParseHeaders_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_ParseHeaders_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_EnableDataUseUpdates_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_SetIPv6ReachabilityOverride_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_SetGssapiLibraryLoadObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_SetNetworkAnnotationMonitor_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_SetTpcdMetadataGrants_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_InterceptUrlLoaderForBodyDecoding_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_DecodeContentEncoding_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_DecodeContentEncoding_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_SetTLS13EarlyDataEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkService_AddDurableMessageCollector_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DurableMessageCollector = {};
mojo.internal.bindings.network.mojom.DurableMessageCollector.$interfaceName = 'network.mojom.DurableMessageCollector';
mojo.internal.bindings.network.mojom.DurableMessageCollector_Configure_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DurableMessageCollector_Configure_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DurableMessageCollector_EnableForProfile_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DurableMessageCollector_EnableForProfile_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DurableMessageCollector_DisableForProfile_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DurableMessageCollector_DisableForProfile_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DurableMessageCollector_Retrieve_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DurableMessageCollector_Retrieve_ResponseParamsSpec = { $: {} };

// Struct: HttpAuthStaticParams
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpAuthStaticParamsSpec, 'network.mojom.HttpAuthStaticParams', [
      mojo.internal.StructField('arg_gssapi_library_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HttpAuthDynamicParams
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpAuthDynamicParamsSpec, 'network.mojom.HttpAuthDynamicParams', [
      mojo.internal.StructField('arg_allowed_schemes', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_patterns_allowed_to_use_all_schemes', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_server_allowlist', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_delegate_allowlist', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_android_negotiate_account_type', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_delegate_by_kdc_policy', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_negotiate_disable_cname_lookup', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_negotiate_port', 40, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ntlm_v2_enabled', 40, 3, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_allow_gssapi_library_load', 40, 4, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_basic_over_http_enabled', 40, 5, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: EnvironmentVariable
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.EnvironmentVariableSpec, 'network.mojom.EnvironmentVariable', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NetworkServiceParams
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceParamsSpec, 'network.mojom.NetworkServiceParams', [
      mojo.internal.StructField('arg_initial_connection_type', 0, 0, mojo.internal.bindings.network.mojom.ConnectionTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_initial_connection_subtype', 8, 0, mojo.internal.bindings.network.mojom.ConnectionSubtypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_initial_address_map', 16, 0, mojo.internal.bindings.network.mojom.InitialAddressMapSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_environment', 24, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.EnvironmentVariableSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_default_observer', 32, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_system_dns_resolver', 40, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.SystemDnsResolverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_first_party_sets_enabled', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: SCTAuditingConfiguration
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SCTAuditingConfigurationSpec, 'network.mojom.SCTAuditingConfiguration', [
      mojo.internal.StructField('arg_sampling_rate', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_log_expected_ingestion_delay', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_log_max_ingestion_random_delay', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_report_uri', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hashdance_lookup_uri', 32, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_traffic_annotation', 40, 0, mojo.internal.bindings.network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hashdance_traffic_annotation', 48, 0, mojo.internal.bindings.network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: NetworkDurableMessageConfig
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkDurableMessageConfigSpec, 'network.mojom.NetworkDurableMessageConfig', [
      mojo.internal.StructField('arg_http_storage_max_size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: GssapiLibraryLoadObserver
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserver_OnBeforeGssapiLibraryLoad_ParamsSpec, 'network.mojom.GssapiLibraryLoadObserver_OnBeforeGssapiLibraryLoad_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.GssapiLibraryLoadObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserverRemoteCallHandler(this.proxy);
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

mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GssapiLibraryLoadObserver', [
      { explicit: null },
    ]);
  }

  onBeforeGssapiLibraryLoad() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserver_OnBeforeGssapiLibraryLoad_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.GssapiLibraryLoadObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GssapiLibraryLoadObserver', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnBeforeGssapiLibraryLoad
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserver_OnBeforeGssapiLibraryLoad_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBeforeGssapiLibraryLoad (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserver_OnBeforeGssapiLibraryLoad_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBeforeGssapiLibraryLoad');
          const result = this.impl.onBeforeGssapiLibraryLoad();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserverReceiver = mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserverReceiver;

mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserverPtr = mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserverRemote;
mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserverRequest = mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserverPendingReceiver;


// Interface: NetworkService
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_SetParams_ParamsSpec, 'network.mojom.NetworkService_SetParams_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.network.mojom.NetworkServiceParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_StartNetLog_ParamsSpec, 'network.mojom.NetworkService_StartNetLog_Params', [
      mojo.internal.StructField('arg_file', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_total_size', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_capture_mode', 16, 0, mojo.internal.bindings.network.mojom.NetLogCaptureModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_constants', 24, 0, mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_duration', 32, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_AttachNetLogProxy_ParamsSpec, 'network.mojom.NetworkService_AttachNetLogProxy_Params', [
      mojo.internal.StructField('arg_proxy_source', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.NetLogProxySourceRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_proxy_sink', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.NetLogProxySinkRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_SetSSLKeyLogFile_ParamsSpec, 'network.mojom.NetworkService_SetSSLKeyLogFile_Params', [
      mojo.internal.StructField('arg_file', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_CreateNetworkContext_ParamsSpec, 'network.mojom.NetworkService_CreateNetworkContext_Params', [
      mojo.internal.StructField('arg_context', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.NetworkContextRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_params', 8, 0, mojo.internal.bindings.network.mojom.NetworkContextParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_ConfigureStubHostResolver_ParamsSpec, 'network.mojom.NetworkService_ConfigureStubHostResolver_Params', [
      mojo.internal.StructField('arg_secure_dns_mode', 0, 0, mojo.internal.bindings.network.mojom.SecureDnsModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dns_over_https_config', 8, 0, mojo.internal.bindings.network.mojom.DnsOverHttpsConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_fallback_doh_nameservers', 16, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.IPEndPointSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_insecure_dns_client_enabled', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_happy_eyeballs_v3_enabled', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_additional_dns_types_enabled', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_DisableQuic_ParamsSpec, 'network.mojom.NetworkService_DisableQuic_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_SetUpHttpAuth_ParamsSpec, 'network.mojom.NetworkService_SetUpHttpAuth_Params', [
      mojo.internal.StructField('arg_http_auth_static_params', 0, 0, mojo.internal.bindings.network.mojom.HttpAuthStaticParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_ConfigureHttpAuthPrefs_ParamsSpec, 'network.mojom.NetworkService_ConfigureHttpAuthPrefs_Params', [
      mojo.internal.StructField('arg_http_auth_dynamic_params', 0, 0, mojo.internal.bindings.network.mojom.HttpAuthDynamicParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_SetRawHeadersAccess_ParamsSpec, 'network.mojom.NetworkService_SetRawHeadersAccess_Params', [
      mojo.internal.StructField('arg_origins', 0, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.OriginSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_process_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_SetMaxConnectionsPerProxyChain_ParamsSpec, 'network.mojom.NetworkService_SetMaxConnectionsPerProxyChain_Params', [
      mojo.internal.StructField('arg_max_connections', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_GetNetworkChangeManager_ParamsSpec, 'network.mojom.NetworkService_GetNetworkChangeManager_Params', [
      mojo.internal.StructField('arg_network_change_manager', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.NetworkChangeManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_GetNetworkQualityEstimatorManager_ParamsSpec, 'network.mojom.NetworkService_GetNetworkQualityEstimatorManager_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.NetworkQualityEstimatorManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_GetDnsConfigChangeManager_ParamsSpec, 'network.mojom.NetworkService_GetDnsConfigChangeManager_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.DnsConfigChangeManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_GetNetworkList_ParamsSpec, 'network.mojom.NetworkService_GetNetworkList_Params', [
      mojo.internal.StructField('arg_policy', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_GetNetworkList_ResponseParamsSpec, 'network.mojom.NetworkService_GetNetworkList_ResponseParams', [
      mojo.internal.StructField('arg_networks', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.NetworkInterfaceSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_OnTrustStoreChanged_ParamsSpec, 'network.mojom.NetworkService_OnTrustStoreChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_OnClientCertStoreChanged_ParamsSpec, 'network.mojom.NetworkService_OnClientCertStoreChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_SetEncryptionKey_ParamsSpec, 'network.mojom.NetworkService_SetEncryptionKey_Params', [
      mojo.internal.StructField('arg_encryption_key', 0, 0, mojo.internal.bindings.mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_OnPeerToPeerConnectionsCountChange_ParamsSpec, 'network.mojom.NetworkService_OnPeerToPeerConnectionsCountChange_Params', [
      mojo.internal.StructField('arg_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_OnApplicationStateChange_ParamsSpec, 'network.mojom.NetworkService_OnApplicationStateChange_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.mojo_base.mojom.ApplicationStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_SetTrustTokenKeyCommitments_ParamsSpec, 'network.mojom.NetworkService_SetTrustTokenKeyCommitments_Params', [
      mojo.internal.StructField('arg_raw_commitments', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_SetTrustTokenKeyCommitments_ResponseParamsSpec, 'network.mojom.NetworkService_SetTrustTokenKeyCommitments_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_ClearSCTAuditingCache_ParamsSpec, 'network.mojom.NetworkService_ClearSCTAuditingCache_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_ConfigureSCTAuditing_ParamsSpec, 'network.mojom.NetworkService_ConfigureSCTAuditing_Params', [
      mojo.internal.StructField('arg_configuration', 0, 0, mojo.internal.bindings.network.mojom.SCTAuditingConfigurationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_UpdateCtLogList_ParamsSpec, 'network.mojom.NetworkService_UpdateCtLogList_Params', [
      mojo.internal.StructField('arg_log_list', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.CTLogInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_UpdateCtLogList_ResponseParamsSpec, 'network.mojom.NetworkService_UpdateCtLogList_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ParamsSpec, 'network.mojom.NetworkService_UpdateCtKnownPopularSCTs_Params', [
      mojo.internal.StructField('arg_sct_hashes', 0, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ResponseParamsSpec, 'network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_SetCtEnforcementEnabled_ParamsSpec, 'network.mojom.NetworkService_SetCtEnforcementEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_SetCtEnforcementEnabled_ResponseParamsSpec, 'network.mojom.NetworkService_SetCtEnforcementEnabled_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_UpdateKeyPinsList_ParamsSpec, 'network.mojom.NetworkService_UpdateKeyPinsList_Params', [
      mojo.internal.StructField('arg_pin_list', 0, 0, mojo.internal.bindings.network.mojom.PinListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_update_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_DumpWithoutCrashing_ParamsSpec, 'network.mojom.NetworkService_DumpWithoutCrashing_Params', [
      mojo.internal.StructField('arg_dump_request_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_BindTestInterfaceForTesting_ParamsSpec, 'network.mojom.NetworkService_BindTestInterfaceForTesting_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.NetworkServiceTestRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_SetFirstPartySets_ParamsSpec, 'network.mojom.NetworkService_SetFirstPartySets_Params', [
      mojo.internal.StructField('arg_sets', 0, 0, mojo.internal.bindings.network.mojom.GlobalFirstPartySetsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_SetExplicitlyAllowedPorts_ParamsSpec, 'network.mojom.NetworkService_SetExplicitlyAllowedPorts_Params', [
      mojo.internal.StructField('arg_ports', 0, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_ParseHeaders_ParamsSpec, 'network.mojom.NetworkService_ParseHeaders_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_headers', 8, 0, mojo.internal.bindings.network.mojom.HttpResponseHeadersSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_ParseHeaders_ResponseParamsSpec, 'network.mojom.NetworkService_ParseHeaders_ResponseParams', [
      mojo.internal.StructField('arg_parsed_headers', 0, 0, mojo.internal.bindings.network.mojom.ParsedHeadersSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_EnableDataUseUpdates_ParamsSpec, 'network.mojom.NetworkService_EnableDataUseUpdates_Params', [
      mojo.internal.StructField('arg_enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_SetIPv6ReachabilityOverride_ParamsSpec, 'network.mojom.NetworkService_SetIPv6ReachabilityOverride_Params', [
      mojo.internal.StructField('arg_reachability_override', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_SetGssapiLibraryLoadObserver_ParamsSpec, 'network.mojom.NetworkService_SetGssapiLibraryLoadObserver_Params', [
      mojo.internal.StructField('arg_gssapi_library_load_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.GssapiLibraryLoadObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_SetNetworkAnnotationMonitor_ParamsSpec, 'network.mojom.NetworkService_SetNetworkAnnotationMonitor_Params', [
      mojo.internal.StructField('arg_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.NetworkAnnotationMonitorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_SetTpcdMetadataGrants_ParamsSpec, 'network.mojom.NetworkService_SetTpcdMetadataGrants_Params', [
      mojo.internal.StructField('arg_settings', 0, 0, mojo.internal.Array(mojo.internal.bindings.content_settings.mojom.ContentSettingPatternSourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_InterceptUrlLoaderForBodyDecoding_ParamsSpec, 'network.mojom.NetworkService_InterceptUrlLoaderForBodyDecoding_Params', [
      mojo.internal.StructField('arg_content_encoding_types', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.SourceTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_source_body', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_dest_body', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_url_loader', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.URLLoaderRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_source_url_loader_client', 32, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.URLLoaderClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_dest_url_loader', 40, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.URLLoaderRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_dest_url_loader_client', 48, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.URLLoaderClientRemote), null, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_DecodeContentEncoding_ParamsSpec, 'network.mojom.NetworkService_DecodeContentEncoding_Params', [
      mojo.internal.StructField('arg_content_encoding_types', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.SourceTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_source_body', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_dest_body', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_DecodeContentEncoding_ResponseParamsSpec, 'network.mojom.NetworkService_DecodeContentEncoding_ResponseParams', [
      mojo.internal.StructField('arg_error_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_SetTLS13EarlyDataEnabled_ParamsSpec, 'network.mojom.NetworkService_SetTLS13EarlyDataEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkService_AddDurableMessageCollector_ParamsSpec, 'network.mojom.NetworkService_AddDurableMessageCollector_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.DurableMessageCollectorSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.NetworkServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.NetworkServiceRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.NetworkServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.NetworkServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setParams(arg_params) {
    return this.$.setParams(arg_params);
  }
  startNetLog(arg_file, arg_max_total_size, arg_capture_mode, arg_constants, arg_duration) {
    return this.$.startNetLog(arg_file, arg_max_total_size, arg_capture_mode, arg_constants, arg_duration);
  }
  attachNetLogProxy(arg_proxy_source, arg_proxy_sink) {
    return this.$.attachNetLogProxy(arg_proxy_source, arg_proxy_sink);
  }
  setSSLKeyLogFile(arg_file) {
    return this.$.setSSLKeyLogFile(arg_file);
  }
  createNetworkContext(arg_context, arg_params) {
    return this.$.createNetworkContext(arg_context, arg_params);
  }
  configureStubHostResolver(arg_insecure_dns_client_enabled, arg_happy_eyeballs_v3_enabled, arg_secure_dns_mode, arg_dns_over_https_config, arg_additional_dns_types_enabled, arg_fallback_doh_nameservers) {
    return this.$.configureStubHostResolver(arg_insecure_dns_client_enabled, arg_happy_eyeballs_v3_enabled, arg_secure_dns_mode, arg_dns_over_https_config, arg_additional_dns_types_enabled, arg_fallback_doh_nameservers);
  }
  disableQuic() {
    return this.$.disableQuic();
  }
  setUpHttpAuth(arg_http_auth_static_params) {
    return this.$.setUpHttpAuth(arg_http_auth_static_params);
  }
  configureHttpAuthPrefs(arg_http_auth_dynamic_params) {
    return this.$.configureHttpAuthPrefs(arg_http_auth_dynamic_params);
  }
  setRawHeadersAccess(arg_process_id, arg_origins) {
    return this.$.setRawHeadersAccess(arg_process_id, arg_origins);
  }
  setMaxConnectionsPerProxyChain(arg_max_connections) {
    return this.$.setMaxConnectionsPerProxyChain(arg_max_connections);
  }
  getNetworkChangeManager(arg_network_change_manager) {
    return this.$.getNetworkChangeManager(arg_network_change_manager);
  }
  getNetworkQualityEstimatorManager(arg_receiver) {
    return this.$.getNetworkQualityEstimatorManager(arg_receiver);
  }
  getDnsConfigChangeManager(arg_receiver) {
    return this.$.getDnsConfigChangeManager(arg_receiver);
  }
  getNetworkList(arg_policy) {
    return this.$.getNetworkList(arg_policy);
  }
  onTrustStoreChanged() {
    return this.$.onTrustStoreChanged();
  }
  onClientCertStoreChanged() {
    return this.$.onClientCertStoreChanged();
  }
  setEncryptionKey(arg_encryption_key) {
    return this.$.setEncryptionKey(arg_encryption_key);
  }
  onPeerToPeerConnectionsCountChange(arg_count) {
    return this.$.onPeerToPeerConnectionsCountChange(arg_count);
  }
  onApplicationStateChange(arg_state) {
    return this.$.onApplicationStateChange(arg_state);
  }
  setTrustTokenKeyCommitments(arg_raw_commitments) {
    return this.$.setTrustTokenKeyCommitments(arg_raw_commitments);
  }
  clearSCTAuditingCache() {
    return this.$.clearSCTAuditingCache();
  }
  configureSCTAuditing(arg_configuration) {
    return this.$.configureSCTAuditing(arg_configuration);
  }
  updateCtLogList(arg_log_list) {
    return this.$.updateCtLogList(arg_log_list);
  }
  updateCtKnownPopularSCTs(arg_sct_hashes) {
    return this.$.updateCtKnownPopularSCTs(arg_sct_hashes);
  }
  setCtEnforcementEnabled(arg_enabled) {
    return this.$.setCtEnforcementEnabled(arg_enabled);
  }
  updateKeyPinsList(arg_pin_list, arg_update_time) {
    return this.$.updateKeyPinsList(arg_pin_list, arg_update_time);
  }
  dumpWithoutCrashing(arg_dump_request_time) {
    return this.$.dumpWithoutCrashing(arg_dump_request_time);
  }
  bindTestInterfaceForTesting(arg_receiver) {
    return this.$.bindTestInterfaceForTesting(arg_receiver);
  }
  setFirstPartySets(arg_sets) {
    return this.$.setFirstPartySets(arg_sets);
  }
  setExplicitlyAllowedPorts(arg_ports) {
    return this.$.setExplicitlyAllowedPorts(arg_ports);
  }
  parseHeaders(arg_url, arg_headers) {
    return this.$.parseHeaders(arg_url, arg_headers);
  }
  enableDataUseUpdates(arg_enable) {
    return this.$.enableDataUseUpdates(arg_enable);
  }
  setIPv6ReachabilityOverride(arg_reachability_override) {
    return this.$.setIPv6ReachabilityOverride(arg_reachability_override);
  }
  setGssapiLibraryLoadObserver(arg_gssapi_library_load_observer) {
    return this.$.setGssapiLibraryLoadObserver(arg_gssapi_library_load_observer);
  }
  setNetworkAnnotationMonitor(arg_remote) {
    return this.$.setNetworkAnnotationMonitor(arg_remote);
  }
  setTpcdMetadataGrants(arg_settings) {
    return this.$.setTpcdMetadataGrants(arg_settings);
  }
  interceptUrlLoaderForBodyDecoding(arg_content_encoding_types, arg_source_body, arg_dest_body, arg_source_url_loader, arg_source_url_loader_client, arg_dest_url_loader, arg_dest_url_loader_client) {
    return this.$.interceptUrlLoaderForBodyDecoding(arg_content_encoding_types, arg_source_body, arg_dest_body, arg_source_url_loader, arg_source_url_loader_client, arg_dest_url_loader, arg_dest_url_loader_client);
  }
  decodeContentEncoding(arg_content_encoding_types, arg_source_body, arg_dest_body) {
    return this.$.decodeContentEncoding(arg_content_encoding_types, arg_source_body, arg_dest_body);
  }
  setTLS13EarlyDataEnabled(arg_enabled) {
    return this.$.setTLS13EarlyDataEnabled(arg_enabled);
  }
  addDurableMessageCollector(arg_receiver) {
    return this.$.addDurableMessageCollector(arg_receiver);
  }
};

mojo.internal.bindings.network.mojom.NetworkServiceRemoteCallHandler = class {
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

  setParams(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_SetParams_ParamsSpec,
      null,
      [arg_params],
      false);
  }

  startNetLog(arg_file, arg_max_total_size, arg_capture_mode, arg_constants, arg_duration) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_StartNetLog_ParamsSpec,
      null,
      [arg_file, arg_max_total_size, arg_capture_mode, arg_constants, arg_duration],
      false);
  }

  attachNetLogProxy(arg_proxy_source, arg_proxy_sink) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_AttachNetLogProxy_ParamsSpec,
      null,
      [arg_proxy_source, arg_proxy_sink],
      false);
  }

  setSSLKeyLogFile(arg_file) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_SetSSLKeyLogFile_ParamsSpec,
      null,
      [arg_file],
      false);
  }

  createNetworkContext(arg_context, arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_CreateNetworkContext_ParamsSpec,
      null,
      [arg_context, arg_params],
      false);
  }

  configureStubHostResolver(arg_insecure_dns_client_enabled, arg_happy_eyeballs_v3_enabled, arg_secure_dns_mode, arg_dns_over_https_config, arg_additional_dns_types_enabled, arg_fallback_doh_nameservers) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_ConfigureStubHostResolver_ParamsSpec,
      null,
      [arg_insecure_dns_client_enabled, arg_happy_eyeballs_v3_enabled, arg_secure_dns_mode, arg_dns_over_https_config, arg_additional_dns_types_enabled, arg_fallback_doh_nameservers],
      false);
  }

  disableQuic() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_DisableQuic_ParamsSpec,
      null,
      [],
      false);
  }

  setUpHttpAuth(arg_http_auth_static_params) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_SetUpHttpAuth_ParamsSpec,
      null,
      [arg_http_auth_static_params],
      false);
  }

  configureHttpAuthPrefs(arg_http_auth_dynamic_params) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_ConfigureHttpAuthPrefs_ParamsSpec,
      null,
      [arg_http_auth_dynamic_params],
      false);
  }

  setRawHeadersAccess(arg_process_id, arg_origins) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_SetRawHeadersAccess_ParamsSpec,
      null,
      [arg_process_id, arg_origins],
      false);
  }

  setMaxConnectionsPerProxyChain(arg_max_connections) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_SetMaxConnectionsPerProxyChain_ParamsSpec,
      null,
      [arg_max_connections],
      false);
  }

  getNetworkChangeManager(arg_network_change_manager) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_GetNetworkChangeManager_ParamsSpec,
      null,
      [arg_network_change_manager],
      false);
  }

  getNetworkQualityEstimatorManager(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_GetNetworkQualityEstimatorManager_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  getDnsConfigChangeManager(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_GetDnsConfigChangeManager_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  getNetworkList(arg_policy) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_GetNetworkList_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkService_GetNetworkList_ResponseParamsSpec,
      [arg_policy],
      false);
  }

  onTrustStoreChanged() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_OnTrustStoreChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onClientCertStoreChanged() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_OnClientCertStoreChanged_ParamsSpec,
      null,
      [],
      false);
  }

  setEncryptionKey(arg_encryption_key) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_SetEncryptionKey_ParamsSpec,
      null,
      [arg_encryption_key],
      false);
  }

  onPeerToPeerConnectionsCountChange(arg_count) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_OnPeerToPeerConnectionsCountChange_ParamsSpec,
      null,
      [arg_count],
      false);
  }

  onApplicationStateChange(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_OnApplicationStateChange_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  setTrustTokenKeyCommitments(arg_raw_commitments) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_SetTrustTokenKeyCommitments_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkService_SetTrustTokenKeyCommitments_ResponseParamsSpec,
      [arg_raw_commitments],
      false);
  }

  clearSCTAuditingCache() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_ClearSCTAuditingCache_ParamsSpec,
      null,
      [],
      false);
  }

  configureSCTAuditing(arg_configuration) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_ConfigureSCTAuditing_ParamsSpec,
      null,
      [arg_configuration],
      false);
  }

  updateCtLogList(arg_log_list) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_UpdateCtLogList_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkService_UpdateCtLogList_ResponseParamsSpec,
      [arg_log_list],
      false);
  }

  updateCtKnownPopularSCTs(arg_sct_hashes) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ResponseParamsSpec,
      [arg_sct_hashes],
      false);
  }

  setCtEnforcementEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_SetCtEnforcementEnabled_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkService_SetCtEnforcementEnabled_ResponseParamsSpec,
      [arg_enabled],
      false);
  }

  updateKeyPinsList(arg_pin_list, arg_update_time) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_UpdateKeyPinsList_ParamsSpec,
      null,
      [arg_pin_list, arg_update_time],
      false);
  }

  dumpWithoutCrashing(arg_dump_request_time) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_DumpWithoutCrashing_ParamsSpec,
      null,
      [arg_dump_request_time],
      false);
  }

  bindTestInterfaceForTesting(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_BindTestInterfaceForTesting_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  setFirstPartySets(arg_sets) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_SetFirstPartySets_ParamsSpec,
      null,
      [arg_sets],
      false);
  }

  setExplicitlyAllowedPorts(arg_ports) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_SetExplicitlyAllowedPorts_ParamsSpec,
      null,
      [arg_ports],
      false);
  }

  parseHeaders(arg_url, arg_headers) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_ParseHeaders_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkService_ParseHeaders_ResponseParamsSpec,
      [arg_url, arg_headers],
      false);
  }

  enableDataUseUpdates(arg_enable) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_EnableDataUseUpdates_ParamsSpec,
      null,
      [arg_enable],
      false);
  }

  setIPv6ReachabilityOverride(arg_reachability_override) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_SetIPv6ReachabilityOverride_ParamsSpec,
      null,
      [arg_reachability_override],
      false);
  }

  setGssapiLibraryLoadObserver(arg_gssapi_library_load_observer) {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_SetGssapiLibraryLoadObserver_ParamsSpec,
      null,
      [arg_gssapi_library_load_observer],
      false);
  }

  setNetworkAnnotationMonitor(arg_remote) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_SetNetworkAnnotationMonitor_ParamsSpec,
      null,
      [arg_remote],
      false);
  }

  setTpcdMetadataGrants(arg_settings) {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_SetTpcdMetadataGrants_ParamsSpec,
      null,
      [arg_settings],
      false);
  }

  interceptUrlLoaderForBodyDecoding(arg_content_encoding_types, arg_source_body, arg_dest_body, arg_source_url_loader, arg_source_url_loader_client, arg_dest_url_loader, arg_dest_url_loader_client) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_InterceptUrlLoaderForBodyDecoding_ParamsSpec,
      null,
      [arg_content_encoding_types, arg_source_body, arg_dest_body, arg_source_url_loader, arg_source_url_loader_client, arg_dest_url_loader, arg_dest_url_loader_client],
      false);
  }

  decodeContentEncoding(arg_content_encoding_types, arg_source_body, arg_dest_body) {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_DecodeContentEncoding_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkService_DecodeContentEncoding_ResponseParamsSpec,
      [arg_content_encoding_types, arg_source_body, arg_dest_body],
      false);
  }

  setTLS13EarlyDataEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_SetTLS13EarlyDataEnabled_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  addDurableMessageCollector(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkService_AddDurableMessageCollector_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

};

mojo.internal.bindings.network.mojom.NetworkService.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.NetworkServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkService',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.NetworkServiceReceiver = class {
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetParams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetParams_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetParams (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StartNetLog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_StartNetLog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartNetLog (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: AttachNetLogProxy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_AttachNetLogProxy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AttachNetLogProxy (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetSSLKeyLogFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetSSLKeyLogFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSSLKeyLogFile (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CreateNetworkContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_CreateNetworkContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateNetworkContext (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ConfigureStubHostResolver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_ConfigureStubHostResolver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConfigureStubHostResolver (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DisableQuic
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_DisableQuic_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableQuic (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetUpHttpAuth
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetUpHttpAuth_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUpHttpAuth (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ConfigureHttpAuthPrefs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_ConfigureHttpAuthPrefs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConfigureHttpAuthPrefs (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetRawHeadersAccess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetRawHeadersAccess_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetRawHeadersAccess (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetMaxConnectionsPerProxyChain
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetMaxConnectionsPerProxyChain_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMaxConnectionsPerProxyChain (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: GetNetworkChangeManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_GetNetworkChangeManager_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNetworkChangeManager (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetNetworkQualityEstimatorManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_GetNetworkQualityEstimatorManager_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNetworkQualityEstimatorManager (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: GetDnsConfigChangeManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_GetDnsConfigChangeManager_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDnsConfigChangeManager (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: GetNetworkList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_GetNetworkList_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNetworkList (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: OnTrustStoreChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_OnTrustStoreChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTrustStoreChanged (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: OnClientCertStoreChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_OnClientCertStoreChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClientCertStoreChanged (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: SetEncryptionKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetEncryptionKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetEncryptionKey (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: OnPeerToPeerConnectionsCountChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_OnPeerToPeerConnectionsCountChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPeerToPeerConnectionsCountChange (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: OnApplicationStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_OnApplicationStateChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnApplicationStateChange (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: SetTrustTokenKeyCommitments
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetTrustTokenKeyCommitments_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTrustTokenKeyCommitments (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: ClearSCTAuditingCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_ClearSCTAuditingCache_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearSCTAuditingCache (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: ConfigureSCTAuditing
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_ConfigureSCTAuditing_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConfigureSCTAuditing (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: UpdateCtLogList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_UpdateCtLogList_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateCtLogList (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: UpdateCtKnownPopularSCTs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateCtKnownPopularSCTs (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: SetCtEnforcementEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetCtEnforcementEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCtEnforcementEnabled (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: UpdateKeyPinsList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_UpdateKeyPinsList_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateKeyPinsList (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: DumpWithoutCrashing
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_DumpWithoutCrashing_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DumpWithoutCrashing (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: BindTestInterfaceForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_BindTestInterfaceForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindTestInterfaceForTesting (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: SetFirstPartySets
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetFirstPartySets_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFirstPartySets (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: SetExplicitlyAllowedPorts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetExplicitlyAllowedPorts_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetExplicitlyAllowedPorts (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: ParseHeaders
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_ParseHeaders_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ParseHeaders (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: EnableDataUseUpdates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_EnableDataUseUpdates_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableDataUseUpdates (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
           }
        }
        // Try Method 33: SetIPv6ReachabilityOverride
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetIPv6ReachabilityOverride_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIPv6ReachabilityOverride (33)');
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 33 failed:', e);
           }
        }
        // Try Method 34: SetGssapiLibraryLoadObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetGssapiLibraryLoadObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetGssapiLibraryLoadObserver (34)');
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 34 failed:', e);
           }
        }
        // Try Method 35: SetNetworkAnnotationMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetNetworkAnnotationMonitor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNetworkAnnotationMonitor (35)');
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 35 failed:', e);
           }
        }
        // Try Method 36: SetTpcdMetadataGrants
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetTpcdMetadataGrants_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTpcdMetadataGrants (36)');
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 36 failed:', e);
           }
        }
        // Try Method 37: InterceptUrlLoaderForBodyDecoding
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_InterceptUrlLoaderForBodyDecoding_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InterceptUrlLoaderForBodyDecoding (37)');
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 37 failed:', e);
           }
        }
        // Try Method 38: DecodeContentEncoding
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_DecodeContentEncoding_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DecodeContentEncoding (38)');
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 38 failed:', e);
           }
        }
        // Try Method 39: SetTLS13EarlyDataEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetTLS13EarlyDataEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTLS13EarlyDataEnabled (39)');
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 39 failed:', e);
           }
        }
        // Try Method 40: AddDurableMessageCollector
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_AddDurableMessageCollector_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddDurableMessageCollector (40)');
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 40 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetParams_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setParams');
          const result = this.impl.setParams(params.arg_params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_StartNetLog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startNetLog');
          const result = this.impl.startNetLog(params.arg_file, params.arg_max_total_size, params.arg_capture_mode, params.arg_constants, params.arg_duration);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_AttachNetLogProxy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.attachNetLogProxy');
          const result = this.impl.attachNetLogProxy(params.arg_proxy_source, params.arg_proxy_sink);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetSSLKeyLogFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSSLKeyLogFile');
          const result = this.impl.setSSLKeyLogFile(params.arg_file);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_CreateNetworkContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createNetworkContext');
          const result = this.impl.createNetworkContext(params.arg_context, params.arg_params);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_ConfigureStubHostResolver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.configureStubHostResolver');
          const result = this.impl.configureStubHostResolver(params.arg_insecure_dns_client_enabled, params.arg_happy_eyeballs_v3_enabled, params.arg_secure_dns_mode, params.arg_dns_over_https_config, params.arg_additional_dns_types_enabled, params.arg_fallback_doh_nameservers);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_DisableQuic_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disableQuic');
          const result = this.impl.disableQuic();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetUpHttpAuth_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUpHttpAuth');
          const result = this.impl.setUpHttpAuth(params.arg_http_auth_static_params);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_ConfigureHttpAuthPrefs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.configureHttpAuthPrefs');
          const result = this.impl.configureHttpAuthPrefs(params.arg_http_auth_dynamic_params);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetRawHeadersAccess_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setRawHeadersAccess');
          const result = this.impl.setRawHeadersAccess(params.arg_process_id, params.arg_origins);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetMaxConnectionsPerProxyChain_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMaxConnectionsPerProxyChain');
          const result = this.impl.setMaxConnectionsPerProxyChain(params.arg_max_connections);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_GetNetworkChangeManager_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNetworkChangeManager');
          const result = this.impl.getNetworkChangeManager(params.arg_network_change_manager);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_GetNetworkQualityEstimatorManager_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNetworkQualityEstimatorManager');
          const result = this.impl.getNetworkQualityEstimatorManager(params.arg_receiver);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_GetDnsConfigChangeManager_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDnsConfigChangeManager');
          const result = this.impl.getDnsConfigChangeManager(params.arg_receiver);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_GetNetworkList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNetworkList');
          const result = this.impl.getNetworkList(params.arg_policy);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkService_GetNetworkList_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetNetworkList FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_OnTrustStoreChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTrustStoreChanged');
          const result = this.impl.onTrustStoreChanged();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_OnClientCertStoreChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClientCertStoreChanged');
          const result = this.impl.onClientCertStoreChanged();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetEncryptionKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setEncryptionKey');
          const result = this.impl.setEncryptionKey(params.arg_encryption_key);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_OnPeerToPeerConnectionsCountChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPeerToPeerConnectionsCountChange');
          const result = this.impl.onPeerToPeerConnectionsCountChange(params.arg_count);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_OnApplicationStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onApplicationStateChange');
          const result = this.impl.onApplicationStateChange(params.arg_state);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetTrustTokenKeyCommitments_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTrustTokenKeyCommitments');
          const result = this.impl.setTrustTokenKeyCommitments(params.arg_raw_commitments);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkService_SetTrustTokenKeyCommitments_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetTrustTokenKeyCommitments FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_ClearSCTAuditingCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearSCTAuditingCache');
          const result = this.impl.clearSCTAuditingCache();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_ConfigureSCTAuditing_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.configureSCTAuditing');
          const result = this.impl.configureSCTAuditing(params.arg_configuration);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_UpdateCtLogList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateCtLogList');
          const result = this.impl.updateCtLogList(params.arg_log_list);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkService_UpdateCtLogList_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateCtLogList FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateCtKnownPopularSCTs');
          const result = this.impl.updateCtKnownPopularSCTs(params.arg_sct_hashes);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkService_UpdateCtKnownPopularSCTs_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateCtKnownPopularSCTs FAILED:', e));
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetCtEnforcementEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCtEnforcementEnabled');
          const result = this.impl.setCtEnforcementEnabled(params.arg_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkService_SetCtEnforcementEnabled_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetCtEnforcementEnabled FAILED:', e));
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_UpdateKeyPinsList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateKeyPinsList');
          const result = this.impl.updateKeyPinsList(params.arg_pin_list, params.arg_update_time);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_DumpWithoutCrashing_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dumpWithoutCrashing');
          const result = this.impl.dumpWithoutCrashing(params.arg_dump_request_time);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_BindTestInterfaceForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindTestInterfaceForTesting');
          const result = this.impl.bindTestInterfaceForTesting(params.arg_receiver);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetFirstPartySets_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFirstPartySets');
          const result = this.impl.setFirstPartySets(params.arg_sets);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetExplicitlyAllowedPorts_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setExplicitlyAllowedPorts');
          const result = this.impl.setExplicitlyAllowedPorts(params.arg_ports);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_ParseHeaders_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.parseHeaders');
          const result = this.impl.parseHeaders(params.arg_url, params.arg_headers);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkService_ParseHeaders_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ParseHeaders FAILED:', e));
          }
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_EnableDataUseUpdates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableDataUseUpdates');
          const result = this.impl.enableDataUseUpdates(params.arg_enable);
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetIPv6ReachabilityOverride_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIPv6ReachabilityOverride');
          const result = this.impl.setIPv6ReachabilityOverride(params.arg_reachability_override);
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetGssapiLibraryLoadObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setGssapiLibraryLoadObserver');
          const result = this.impl.setGssapiLibraryLoadObserver(params.arg_gssapi_library_load_observer);
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetNetworkAnnotationMonitor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNetworkAnnotationMonitor');
          const result = this.impl.setNetworkAnnotationMonitor(params.arg_remote);
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetTpcdMetadataGrants_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTpcdMetadataGrants');
          const result = this.impl.setTpcdMetadataGrants(params.arg_settings);
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_InterceptUrlLoaderForBodyDecoding_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.interceptUrlLoaderForBodyDecoding');
          const result = this.impl.interceptUrlLoaderForBodyDecoding(params.arg_content_encoding_types, params.arg_source_body, params.arg_dest_body, params.arg_source_url_loader, params.arg_source_url_loader_client, params.arg_dest_url_loader, params.arg_dest_url_loader_client);
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_DecodeContentEncoding_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.decodeContentEncoding');
          const result = this.impl.decodeContentEncoding(params.arg_content_encoding_types, params.arg_source_body, params.arg_dest_body);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkService_DecodeContentEncoding_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DecodeContentEncoding FAILED:', e));
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_SetTLS13EarlyDataEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTLS13EarlyDataEnabled');
          const result = this.impl.setTLS13EarlyDataEnabled(params.arg_enabled);
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkService_AddDurableMessageCollector_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addDurableMessageCollector');
          const result = this.impl.addDurableMessageCollector(params.arg_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.NetworkServiceReceiver = mojo.internal.bindings.network.mojom.NetworkServiceReceiver;

mojo.internal.bindings.network.mojom.NetworkServicePtr = mojo.internal.bindings.network.mojom.NetworkServiceRemote;
mojo.internal.bindings.network.mojom.NetworkServiceRequest = mojo.internal.bindings.network.mojom.NetworkServicePendingReceiver;


// Interface: DurableMessageCollector
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DurableMessageCollector_Configure_ParamsSpec, 'network.mojom.DurableMessageCollector_Configure_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.network.mojom.NetworkDurableMessageConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DurableMessageCollector_Configure_ResponseParamsSpec, 'network.mojom.DurableMessageCollector_Configure_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DurableMessageCollector_EnableForProfile_ParamsSpec, 'network.mojom.DurableMessageCollector_EnableForProfile_Params', [
      mojo.internal.StructField('arg_throttling_profile_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DurableMessageCollector_EnableForProfile_ResponseParamsSpec, 'network.mojom.DurableMessageCollector_EnableForProfile_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DurableMessageCollector_DisableForProfile_ParamsSpec, 'network.mojom.DurableMessageCollector_DisableForProfile_Params', [
      mojo.internal.StructField('arg_throttling_profile_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DurableMessageCollector_DisableForProfile_ResponseParamsSpec, 'network.mojom.DurableMessageCollector_DisableForProfile_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DurableMessageCollector_Retrieve_ParamsSpec, 'network.mojom.DurableMessageCollector_Retrieve_Params', [
      mojo.internal.StructField('arg_devtools_request_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DurableMessageCollector_Retrieve_ResponseParamsSpec, 'network.mojom.DurableMessageCollector_Retrieve_ResponseParams', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.DurableMessageCollectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.DurableMessageCollectorRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DurableMessageCollector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.DurableMessageCollectorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.DurableMessageCollectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  configure(arg_config) {
    return this.$.configure(arg_config);
  }
  enableForProfile(arg_throttling_profile_id) {
    return this.$.enableForProfile(arg_throttling_profile_id);
  }
  disableForProfile(arg_throttling_profile_id) {
    return this.$.disableForProfile(arg_throttling_profile_id);
  }
  retrieve(arg_devtools_request_id) {
    return this.$.retrieve(arg_devtools_request_id);
  }
};

mojo.internal.bindings.network.mojom.DurableMessageCollectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DurableMessageCollector', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  configure(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.DurableMessageCollector_Configure_ParamsSpec,
      mojo.internal.bindings.network.mojom.DurableMessageCollector_Configure_ResponseParamsSpec,
      [arg_config],
      false);
  }

  enableForProfile(arg_throttling_profile_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.DurableMessageCollector_EnableForProfile_ParamsSpec,
      mojo.internal.bindings.network.mojom.DurableMessageCollector_EnableForProfile_ResponseParamsSpec,
      [arg_throttling_profile_id],
      false);
  }

  disableForProfile(arg_throttling_profile_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.DurableMessageCollector_DisableForProfile_ParamsSpec,
      mojo.internal.bindings.network.mojom.DurableMessageCollector_DisableForProfile_ResponseParamsSpec,
      [arg_throttling_profile_id],
      false);
  }

  retrieve(arg_devtools_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.network.mojom.DurableMessageCollector_Retrieve_ParamsSpec,
      mojo.internal.bindings.network.mojom.DurableMessageCollector_Retrieve_ResponseParamsSpec,
      [arg_devtools_request_id],
      false);
  }

};

mojo.internal.bindings.network.mojom.DurableMessageCollector.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.DurableMessageCollectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DurableMessageCollector',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.DurableMessageCollectorReceiver = class {
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Configure
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DurableMessageCollector_Configure_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Configure (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: EnableForProfile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DurableMessageCollector_EnableForProfile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableForProfile (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DisableForProfile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DurableMessageCollector_DisableForProfile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableForProfile (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Retrieve
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DurableMessageCollector_Retrieve_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Retrieve (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DurableMessageCollector_Configure_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.configure');
          const result = this.impl.configure(params.arg_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.DurableMessageCollector_Configure_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Configure FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DurableMessageCollector_EnableForProfile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableForProfile');
          const result = this.impl.enableForProfile(params.arg_throttling_profile_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.DurableMessageCollector_EnableForProfile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EnableForProfile FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DurableMessageCollector_DisableForProfile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disableForProfile');
          const result = this.impl.disableForProfile(params.arg_throttling_profile_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.DurableMessageCollector_DisableForProfile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DisableForProfile FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DurableMessageCollector_Retrieve_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.retrieve');
          const result = this.impl.retrieve(params.arg_devtools_request_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.DurableMessageCollector_Retrieve_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Retrieve FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.DurableMessageCollectorReceiver = mojo.internal.bindings.network.mojom.DurableMessageCollectorReceiver;

mojo.internal.bindings.network.mojom.DurableMessageCollectorPtr = mojo.internal.bindings.network.mojom.DurableMessageCollectorRemote;
mojo.internal.bindings.network.mojom.DurableMessageCollectorRequest = mojo.internal.bindings.network.mojom.DurableMessageCollectorPendingReceiver;

