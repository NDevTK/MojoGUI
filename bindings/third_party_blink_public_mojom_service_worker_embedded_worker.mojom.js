// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/service_worker/embedded_worker.mojom
 // Module: blink.mojom

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
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.service_manager = mojo.internal.bindings.service_manager || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.blink.mojom.EmbeddedWorkerStartParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedWorkerStartTimingSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClient = {};
mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClient.$interfaceName = 'blink.mojom.EmbeddedWorkerInstanceClient';
mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClient_StartWorker_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClient_StopWorker_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost = {};
mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost.$interfaceName = 'blink.mojom.EmbeddedWorkerInstanceHost';
mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_CountFeature_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnReadyForInspection_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnScriptLoaded_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnScriptEvaluationStart_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnStarted_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnReportException_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnReportConsoleMessage_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnStopped_ParamsSpec = { $: {} };

// Struct: EmbeddedWorkerStartParams
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedWorkerStartParamsSpec, 'blink.mojom.EmbeddedWorkerStartParams', [
      mojo.internal.StructField('arg_service_worker_version_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_scope', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_script_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_script_type', 24, 0, mojo.internal.bindings.blink.mojom.ScriptTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_outside_fetch_client_settings_object', 32, 0, mojo.internal.bindings.blink.mojom.FetchClientSettingsObjectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_user_agent', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_ua_metadata', 48, 0, mojo.internal.bindings.blink.mojom.UserAgentMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_devtools_worker_token', 56, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_script_url_to_skip_throttling', 64, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_renderer_preferences', 72, 0, mojo.internal.bindings.blink.mojom.RendererPreferencesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_forced_enabled_runtime_features', 80, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_service_worker_receiver', 88, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.ServiceWorkerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_interface_provider', 96, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.service_manager.mojom.InterfaceProviderRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_controller_receiver', 104, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.ControllerServiceWorkerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_installed_scripts_info', 112, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerInstalledScriptsInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_instance_host', 120, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_provider_info', 128, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerProviderInfoForStartWorkerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_content_settings_proxy', 136, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.WorkerContentSettingsProxyRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_preference_watcher_receiver', 144, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.RendererPreferenceWatcherRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_subresource_loader_factories', 152, 0, mojo.internal.bindings.blink.mojom.URLLoaderFactoryBundleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_subresource_loader_updater', 160, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.SubresourceLoaderUpdaterRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_service_worker_token', 168, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ukm_source_id', 176, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_main_script_load_params', 184, 0, mojo.internal.bindings.blink.mojom.WorkerMainScriptLoadParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_policy_container', 192, 0, mojo.internal.bindings.blink.mojom.PolicyContainerSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_storage_key', 200, 0, mojo.internal.bindings.blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cors_exempt_header_list', 208, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_coep_reporting_observer', 216, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.ReportingObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_dip_reporting_observer', 224, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.ReportingObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_service_worker_route_id', 232, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_wait_for_debugger', 236, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_installed', 236, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 248]]);

// Struct: EmbeddedWorkerStartTiming
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedWorkerStartTimingSpec, 'blink.mojom.EmbeddedWorkerStartTiming', [
      mojo.internal.StructField('arg_start_worker_received_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_script_evaluation_start_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_script_evaluation_end_time', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: EmbeddedWorkerInstanceClient
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClient_StartWorker_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceClient_StartWorker_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.EmbeddedWorkerStartParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClient_StopWorker_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceClient_StopWorker_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.EmbeddedWorkerInstanceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startWorker(arg_params) {
    return this.$.startWorker(arg_params);
  }
  stopWorker() {
    return this.$.stopWorker();
  }
};

mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EmbeddedWorkerInstanceClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  startWorker(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClient_StartWorker_ParamsSpec,
      null,
      [arg_params],
      false);
  }

  stopWorker() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClient_StopWorker_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClient.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.EmbeddedWorkerInstanceClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EmbeddedWorkerInstanceClient', [
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
        
        // Try Method 0: StartWorker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClient_StartWorker_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartWorker (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StopWorker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClient_StopWorker_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopWorker (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClient_StartWorker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startWorker');
          const result = this.impl.startWorker(params.arg_params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClient_StopWorker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopWorker');
          const result = this.impl.stopWorker();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClientReceiver = mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClientReceiver;

mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClientPtr = mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClientRemote;
mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClientRequest = mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceClientPendingReceiver;


// Interface: EmbeddedWorkerInstanceHost
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ResponseParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ResponseParams', [
      mojo.internal.StructField('arg_will_be_terminated', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_CountFeature_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_CountFeature_Params', [
      mojo.internal.StructField('arg_feature', 0, 0, mojo.internal.bindings.blink.mojom.WebFeatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnReadyForInspection_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_OnReadyForInspection_Params', [
      mojo.internal.StructField('arg_agent', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.DevToolsAgentRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_agent_host', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.DevToolsAgentHostRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnScriptLoaded_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_OnScriptLoaded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnScriptEvaluationStart_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_OnScriptEvaluationStart_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnStarted_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_OnStarted_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerStartStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_fetch_handler_type', 8, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerFetchHandlerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_start_timing', 16, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.EmbeddedWorkerStartTimingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_thread_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_hid_event_handlers', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_usb_event_handlers', 28, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnReportException_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_OnReportException_Params', [
      mojo.internal.StructField('arg_error_message', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_line_number', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_column_number', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnReportConsoleMessage_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_OnReportConsoleMessage_Params', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.blink.mojom.ConsoleMessageSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_message_level', 8, 0, mojo.internal.bindings.blink.mojom.ConsoleMessageLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 16, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_line_number', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnStopped_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_OnStopped_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.EmbeddedWorkerInstanceHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestTermination() {
    return this.$.requestTermination();
  }
  countFeature(arg_feature) {
    return this.$.countFeature(arg_feature);
  }
  onReadyForInspection(arg_agent, arg_agent_host) {
    return this.$.onReadyForInspection(arg_agent, arg_agent_host);
  }
  onScriptLoaded() {
    return this.$.onScriptLoaded();
  }
  onScriptEvaluationStart() {
    return this.$.onScriptEvaluationStart();
  }
  onStarted(arg_status, arg_fetch_handler_type, arg_has_hid_event_handlers, arg_has_usb_event_handlers, arg_thread_id, arg_start_timing) {
    return this.$.onStarted(arg_status, arg_fetch_handler_type, arg_has_hid_event_handlers, arg_has_usb_event_handlers, arg_thread_id, arg_start_timing);
  }
  onReportException(arg_error_message, arg_line_number, arg_column_number, arg_source_url) {
    return this.$.onReportException(arg_error_message, arg_line_number, arg_column_number, arg_source_url);
  }
  onReportConsoleMessage(arg_source, arg_message_level, arg_message, arg_line_number, arg_source_url) {
    return this.$.onReportConsoleMessage(arg_source, arg_message_level, arg_message, arg_line_number, arg_source_url);
  }
  onStopped() {
    return this.$.onStopped();
  }
};

mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EmbeddedWorkerInstanceHost', [
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

  requestTermination() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ParamsSpec,
      mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ResponseParamsSpec,
      [],
      false);
  }

  countFeature(arg_feature) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_CountFeature_ParamsSpec,
      null,
      [arg_feature],
      false);
  }

  onReadyForInspection(arg_agent, arg_agent_host) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnReadyForInspection_ParamsSpec,
      null,
      [arg_agent, arg_agent_host],
      false);
  }

  onScriptLoaded() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnScriptLoaded_ParamsSpec,
      null,
      [],
      false);
  }

  onScriptEvaluationStart() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnScriptEvaluationStart_ParamsSpec,
      null,
      [],
      false);
  }

  onStarted(arg_status, arg_fetch_handler_type, arg_has_hid_event_handlers, arg_has_usb_event_handlers, arg_thread_id, arg_start_timing) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnStarted_ParamsSpec,
      null,
      [arg_status, arg_fetch_handler_type, arg_has_hid_event_handlers, arg_has_usb_event_handlers, arg_thread_id, arg_start_timing],
      false);
  }

  onReportException(arg_error_message, arg_line_number, arg_column_number, arg_source_url) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnReportException_ParamsSpec,
      null,
      [arg_error_message, arg_line_number, arg_column_number, arg_source_url],
      false);
  }

  onReportConsoleMessage(arg_source, arg_message_level, arg_message, arg_line_number, arg_source_url) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnReportConsoleMessage_ParamsSpec,
      null,
      [arg_source, arg_message_level, arg_message, arg_line_number, arg_source_url],
      false);
  }

  onStopped() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnStopped_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.EmbeddedWorkerInstanceHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EmbeddedWorkerInstanceHost', [
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
        
        // Try Method 0: RequestTermination
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestTermination (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CountFeature
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_CountFeature_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CountFeature (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnReadyForInspection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnReadyForInspection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReadyForInspection (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnScriptLoaded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnScriptLoaded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScriptLoaded (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnScriptEvaluationStart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnScriptEvaluationStart_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScriptEvaluationStart (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStarted (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnReportException
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnReportException_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReportException (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnReportConsoleMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnReportConsoleMessage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReportConsoleMessage (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnStopped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnStopped_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStopped (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestTermination');
          const result = this.impl.requestTermination();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestTermination FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_CountFeature_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.countFeature');
          const result = this.impl.countFeature(params.arg_feature);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnReadyForInspection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReadyForInspection');
          const result = this.impl.onReadyForInspection(params.arg_agent, params.arg_agent_host);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnScriptLoaded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onScriptLoaded');
          const result = this.impl.onScriptLoaded();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnScriptEvaluationStart_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onScriptEvaluationStart');
          const result = this.impl.onScriptEvaluationStart();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStarted');
          const result = this.impl.onStarted(params.arg_status, params.arg_fetch_handler_type, params.arg_has_hid_event_handlers, params.arg_has_usb_event_handlers, params.arg_thread_id, params.arg_start_timing);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnReportException_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReportException');
          const result = this.impl.onReportException(params.arg_error_message, params.arg_line_number, params.arg_column_number, params.arg_source_url);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnReportConsoleMessage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReportConsoleMessage');
          const result = this.impl.onReportConsoleMessage(params.arg_source, params.arg_message_level, params.arg_message, params.arg_line_number, params.arg_source_url);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHost_OnStopped_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStopped');
          const result = this.impl.onStopped();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHostReceiver = mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHostReceiver;

mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHostPtr = mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHostRemote;
mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHostRequest = mojo.internal.bindings.blink.mojom.EmbeddedWorkerInstanceHostPendingReceiver;

