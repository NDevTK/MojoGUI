// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/embedded_worker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var services = services || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
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
      mojo.internal.StructField('service_worker_route_id', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('devtools_worker_token', 64, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('script_url_to_skip_throttling', 72, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wait_for_debugger', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_installed', 80, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('renderer_preferences', 88, 0, blink.mojom.RendererPreferencesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('forced_enabled_runtime_features', 96, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('service_worker_receiver', 104, 0, mojo.internal.InterfaceRequest(blink.mojom.ServiceWorkerRemote), null, false, 0, undefined),
      mojo.internal.StructField('interface_provider', 112, 0, mojo.internal.InterfaceRequest(service_manager.mojom.InterfaceProviderRemote), null, false, 0, undefined),
      mojo.internal.StructField('controller_receiver', 120, 0, mojo.internal.InterfaceRequest(blink.mojom.ControllerServiceWorkerRemote), null, false, 0, undefined),
      mojo.internal.StructField('installed_scripts_info', 128, 0, blink.mojom.ServiceWorkerInstalledScriptsInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('instance_host', 136, 0, mojo.internal.AssociatedInterfaceProxy(blink.mojom.EmbeddedWorkerInstanceHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('provider_info', 144, 0, blink.mojom.ServiceWorkerProviderInfoForStartWorkerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('content_settings_proxy', 152, 0, mojo.internal.InterfaceProxy(blink.mojom.WorkerContentSettingsProxyRemote), null, false, 0, undefined),
      mojo.internal.StructField('preference_watcher_receiver', 160, 0, mojo.internal.InterfaceRequest(blink.mojom.RendererPreferenceWatcherRemote), null, false, 0, undefined),
      mojo.internal.StructField('subresource_loader_factories', 168, 0, blink.mojom.URLLoaderFactoryBundleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subresource_loader_updater', 176, 0, mojo.internal.InterfaceRequest(blink.mojom.SubresourceLoaderUpdaterRemote), null, false, 0, undefined),
      mojo.internal.StructField('service_worker_token', 184, 0, blink.mojom.ServiceWorkerTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ukm_source_id', 192, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('main_script_load_params', 200, 0, blink.mojom.WorkerMainScriptLoadParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('policy_container', 208, 0, blink.mojom.PolicyContainerSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('storage_key', 216, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cors_exempt_header_list', 224, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('coep_reporting_observer', 232, 0, mojo.internal.InterfaceRequest(blink.mojom.ReportingObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('dip_reporting_observer', 240, 0, mojo.internal.InterfaceRequest(blink.mojom.ReportingObserverRemote), null, true, 0, undefined),
    ],
    [[0, 256]]);

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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.EmbeddedWorkerInstanceClient',
    'context');
  return remote.$;
};

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
      mojo.internal.StructField('has_hid_event_handlers', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_usb_event_handlers', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('thread_id', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('start_timing', 24, 0, blink.mojom.EmbeddedWorkerStartTimingSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedWorkerInstanceHost_OnReportException_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_OnReportException_Params', [
      mojo.internal.StructField('error_message', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('line_number', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('column_number', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('source_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedWorkerInstanceHost_OnReportConsoleMessage_ParamsSpec, 'blink.mojom.EmbeddedWorkerInstanceHost_OnReportConsoleMessage_Params', [
      mojo.internal.StructField('source', 0, 0, blink.mojom.ConsoleMessageSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message_level', 8, 0, blink.mojom.ConsoleMessageLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('line_number', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('source_url', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.EmbeddedWorkerInstanceHost',
    'context');
  return remote.$;
};

blink.mojom.EmbeddedWorkerInstanceHostPtr = blink.mojom.EmbeddedWorkerInstanceHostRemote;
blink.mojom.EmbeddedWorkerInstanceHostRequest = blink.mojom.EmbeddedWorkerInstanceHostPendingReceiver;

