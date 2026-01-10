// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/embedded_worker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var service_manager = service_manager || {};
var url = url || {};

blink.mojom.EmbeddedWorkerStartParamsSpec = { $: {} };
blink.mojom.EmbeddedWorkerStartTimingSpec = { $: {} };
blink.mojom.EmbeddedWorkerInstanceClient = {};
blink.mojom.EmbeddedWorkerInstanceClient.$interfaceName = 'blink.mojom.EmbeddedWorkerInstanceClient';
blink.mojom.EmbeddedWorkerInstanceClient_StartWorker_ParamsSpec = { $: {} };
blink.mojom.EmbeddedWorkerInstanceClient_StopWorker_ParamsSpec = { $: {} };
blink.mojom.EmbeddedWorkerInstanceHost = {};
blink.mojom.EmbeddedWorkerInstanceHost.$interfaceName = 'blink.mojom.EmbeddedWorkerInstanceHost';
blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ParamsSpec = { $: {} };
blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ResponseParamsSpec = { $: {} };
blink.mojom.EmbeddedWorkerInstanceHost_CountFeature_ParamsSpec = { $: {} };
blink.mojom.EmbeddedWorkerInstanceHost_OnReadyForInspection_ParamsSpec = { $: {} };
blink.mojom.EmbeddedWorkerInstanceHost_OnScriptLoaded_ParamsSpec = { $: {} };
blink.mojom.EmbeddedWorkerInstanceHost_OnScriptEvaluationStart_ParamsSpec = { $: {} };
blink.mojom.EmbeddedWorkerInstanceHost_OnStarted_ParamsSpec = { $: {} };
blink.mojom.EmbeddedWorkerInstanceHost_OnReportException_ParamsSpec = { $: {} };
blink.mojom.EmbeddedWorkerInstanceHost_OnReportConsoleMessage_ParamsSpec = { $: {} };
blink.mojom.EmbeddedWorkerInstanceHost_OnStopped_ParamsSpec = { $: {} };

// Struct: EmbeddedWorkerStartParams
mojo.internal.Struct(
    blink.mojom.EmbeddedWorkerStartParamsSpec, 'blink.mojom.EmbeddedWorkerStartParams', [
      mojo.internal.StructField('service_worker_version_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('scope', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('script_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('script_type', 24, 0, blink.mojom.ScriptTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('outside_fetch_client_settings_object', 32, 0, blink.mojom.FetchClientSettingsObjectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('user_agent', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('ua_metadata', 48, 0, blink.mojom.UserAgentMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_worker_token', 56, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('script_url_to_skip_throttling', 64, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('renderer_preferences', 72, 0, blink.mojom.RendererPreferencesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('forced_enabled_runtime_features', 80, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('service_worker_receiver', 88, 0, mojo.internal.InterfaceRequest(blink.mojom.ServiceWorkerRemote), null, false, 0, undefined),
      mojo.internal.StructField('interface_provider', 96, 0, mojo.internal.InterfaceRequest(service_manager.mojom.InterfaceProviderRemote), null, false, 0, undefined),
      mojo.internal.StructField('controller_receiver', 104, 0, mojo.internal.InterfaceRequest(blink.mojom.ControllerServiceWorkerRemote), null, false, 0, undefined),
      mojo.internal.StructField('installed_scripts_info', 112, 0, blink.mojom.ServiceWorkerInstalledScriptsInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('instance_host', 120, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('provider_info', 128, 0, blink.mojom.ServiceWorkerProviderInfoForStartWorkerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('content_settings_proxy', 136, 0, mojo.internal.InterfaceProxy(blink.mojom.WorkerContentSettingsProxyRemote), null, false, 0, undefined),
      mojo.internal.StructField('preference_watcher_receiver', 144, 0, mojo.internal.InterfaceRequest(blink.mojom.RendererPreferenceWatcherRemote), null, false, 0, undefined),
      mojo.internal.StructField('subresource_loader_factories', 152, 0, blink.mojom.URLLoaderFactoryBundleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subresource_loader_updater', 160, 0, mojo.internal.InterfaceRequest(blink.mojom.SubresourceLoaderUpdaterRemote), null, false, 0, undefined),
      mojo.internal.StructField('service_worker_token', 168, 0, blink.mojom.ServiceWorkerTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ukm_source_id', 176, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('main_script_load_params', 184, 0, blink.mojom.WorkerMainScriptLoadParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('policy_container', 192, 0, blink.mojom.PolicyContainerSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('storage_key', 200, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cors_exempt_header_list', 208, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('coep_reporting_observer', 216, 0, mojo.internal.InterfaceRequest(blink.mojom.ReportingObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('dip_reporting_observer', 224, 0, mojo.internal.InterfaceRequest(blink.mojom.ReportingObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('service_worker_route_id', 232, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('wait_for_debugger', 236, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_installed', 236, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 248]]);

// Struct: EmbeddedWorkerStartTiming
mojo.internal.Struct(
    blink.mojom.EmbeddedWorkerStartTimingSpec, 'blink.mojom.EmbeddedWorkerStartTiming', [
      mojo.internal.StructField('start_worker_received_time', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('script_evaluation_start_time', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('script_evaluation_end_time', 16, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: EmbeddedWorkerInstanceClient
mojo.internal.Struct(
    blink.mojom.EmbeddedWorkerInstanceClient_StartWorker_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceClient_StartWorker_Params', [
      mojo.internal.StructField('params', 0, 0, blink.mojom.EmbeddedWorkerStartParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedWorkerInstanceClient_StopWorker_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceClient_StopWorker_Params', [
    ],
    [[0, 8]]);

blink.mojom.EmbeddedWorkerInstanceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.EmbeddedWorkerInstanceClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.EmbeddedWorkerInstanceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.EmbeddedWorkerInstanceClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.EmbeddedWorkerInstanceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.EmbeddedWorkerInstanceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startWorker(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceClient_StartWorker_ParamsSpec,
      null,
      [params],
      false);
  }

  stopWorker() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceClient_StopWorker_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.EmbeddedWorkerInstanceClient.getRemote = function() {
  let remote = new blink.mojom.EmbeddedWorkerInstanceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.EmbeddedWorkerInstanceClient',
    'context');
  return remote.$;
};

blink.mojom.EmbeddedWorkerInstanceClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
             decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceClient_StartWorker_ParamsSpec.$);
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
             decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceClient_StopWorker_ParamsSpec.$);
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
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceClient_StartWorker_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.startWorker');
          const result = this.impl.startWorker(params.params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceClient_StopWorker_ParamsSpec.$);
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

blink.mojom.EmbeddedWorkerInstanceClientReceiver = blink.mojom.EmbeddedWorkerInstanceClientReceiver;

blink.mojom.EmbeddedWorkerInstanceClientPtr = blink.mojom.EmbeddedWorkerInstanceClientRemote;
blink.mojom.EmbeddedWorkerInstanceClientRequest = blink.mojom.EmbeddedWorkerInstanceClientPendingReceiver;


// Interface: EmbeddedWorkerInstanceHost
mojo.internal.Struct(
    blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ResponseParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ResponseParams', [
      mojo.internal.StructField('will_be_terminated', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedWorkerInstanceHost_CountFeature_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_CountFeature_Params', [
      mojo.internal.StructField('feature', 0, 0, blink.mojom.WebFeatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedWorkerInstanceHost_OnReadyForInspection_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_OnReadyForInspection_Params', [
      mojo.internal.StructField('agent', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.DevToolsAgentRemote), null, false, 0, undefined),
      mojo.internal.StructField('agent_host', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.DevToolsAgentHostRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedWorkerInstanceHost_OnScriptLoaded_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_OnScriptLoaded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedWorkerInstanceHost_OnScriptEvaluationStart_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_OnScriptEvaluationStart_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedWorkerInstanceHost_OnStarted_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_OnStarted_Params', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerStartStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fetch_handler_type', 8, 0, blink.mojom.ServiceWorkerFetchHandlerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('start_timing', 16, 0, blink.mojom.EmbeddedWorkerStartTimingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('thread_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_hid_event_handlers', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_usb_event_handlers', 28, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedWorkerInstanceHost_OnReportException_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_OnReportException_Params', [
      mojo.internal.StructField('error_message', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('line_number', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('column_number', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedWorkerInstanceHost_OnReportConsoleMessage_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_OnReportConsoleMessage_Params', [
      mojo.internal.StructField('source', 0, 0, blink.mojom.ConsoleMessageSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message_level', 8, 0, blink.mojom.ConsoleMessageLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('line_number', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedWorkerInstanceHost_OnStopped_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_OnStopped_Params', [
    ],
    [[0, 8]]);

blink.mojom.EmbeddedWorkerInstanceHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.EmbeddedWorkerInstanceHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.EmbeddedWorkerInstanceHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.EmbeddedWorkerInstanceHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.EmbeddedWorkerInstanceHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.EmbeddedWorkerInstanceHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestTermination() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ParamsSpec,
      blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ResponseParamsSpec,
      [],
      false);
  }

  countFeature(feature) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_CountFeature_ParamsSpec,
      null,
      [feature],
      false);
  }

  onReadyForInspection(agent, agent_host) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnReadyForInspection_ParamsSpec,
      null,
      [agent, agent_host],
      false);
  }

  onScriptLoaded() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnScriptLoaded_ParamsSpec,
      null,
      [],
      false);
  }

  onScriptEvaluationStart() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnScriptEvaluationStart_ParamsSpec,
      null,
      [],
      false);
  }

  onStarted(status, fetch_handler_type, has_hid_event_handlers, has_usb_event_handlers, thread_id, start_timing) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnStarted_ParamsSpec,
      null,
      [status, fetch_handler_type, has_hid_event_handlers, has_usb_event_handlers, thread_id, start_timing],
      false);
  }

  onReportException(error_message, line_number, column_number, source_url) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnReportException_ParamsSpec,
      null,
      [error_message, line_number, column_number, source_url],
      false);
  }

  onReportConsoleMessage(source, message_level, message, line_number, source_url) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnReportConsoleMessage_ParamsSpec,
      null,
      [source, message_level, message, line_number, source_url],
      false);
  }

  onStopped() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnStopped_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.EmbeddedWorkerInstanceHost.getRemote = function() {
  let remote = new blink.mojom.EmbeddedWorkerInstanceHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.EmbeddedWorkerInstanceHost',
    'context');
  return remote.$;
};

blink.mojom.EmbeddedWorkerInstanceHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
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
             decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ParamsSpec.$);
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
             decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceHost_CountFeature_ParamsSpec.$);
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
             decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceHost_OnReadyForInspection_ParamsSpec.$);
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
             decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceHost_OnScriptLoaded_ParamsSpec.$);
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
             decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceHost_OnScriptEvaluationStart_ParamsSpec.$);
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
             decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceHost_OnStarted_ParamsSpec.$);
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
             decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceHost_OnReportException_ParamsSpec.$);
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
             decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceHost_OnReportConsoleMessage_ParamsSpec.$);
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
             decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceHost_OnStopped_ParamsSpec.$);
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
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.requestTermination');
          const result = this.impl.requestTermination();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceHost_CountFeature_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.countFeature');
          const result = this.impl.countFeature(params.feature);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceHost_OnReadyForInspection_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onReadyForInspection');
          const result = this.impl.onReadyForInspection(params.agent, params.agent_host);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceHost_OnScriptLoaded_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onScriptLoaded');
          const result = this.impl.onScriptLoaded();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceHost_OnScriptEvaluationStart_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onScriptEvaluationStart');
          const result = this.impl.onScriptEvaluationStart();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceHost_OnStarted_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onStarted');
          const result = this.impl.onStarted(params.status, params.fetch_handler_type, params.has_hid_event_handlers, params.has_usb_event_handlers, params.thread_id, params.start_timing);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceHost_OnReportException_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onReportException');
          const result = this.impl.onReportException(params.error_message, params.line_number, params.column_number, params.source_url);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceHost_OnReportConsoleMessage_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onReportConsoleMessage');
          const result = this.impl.onReportConsoleMessage(params.source, params.message_level, params.message, params.line_number, params.source_url);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedWorkerInstanceHost_OnStopped_ParamsSpec.$);
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

blink.mojom.EmbeddedWorkerInstanceHostReceiver = blink.mojom.EmbeddedWorkerInstanceHostReceiver;

blink.mojom.EmbeddedWorkerInstanceHostPtr = blink.mojom.EmbeddedWorkerInstanceHostRemote;
blink.mojom.EmbeddedWorkerInstanceHostRequest = blink.mojom.EmbeddedWorkerInstanceHostPendingReceiver;

