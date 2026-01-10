// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/embedded_worker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: EmbeddedWorkerStartParams
blink.mojom.EmbeddedWorkerStartParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerStartParams',
      packedSize: 208,
      fields: [
        { name: 'service_worker_version_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'scope', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'script_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'script_type', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.ScriptTypeSpec, nullable: false, minVersion: 0 },
        { name: 'outside_fetch_client_settings_object', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.FetchClientSettingsObjectSpec, nullable: false, minVersion: 0 },
        { name: 'user_agent', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'ua_metadata', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.UserAgentMetadataSpec, nullable: false, minVersion: 0 },
        { name: 'service_worker_route_id', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'devtools_worker_token', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'script_url_to_skip_throttling', packedOffset: 64, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'wait_for_debugger', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_installed', packedOffset: 72, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'renderer_preferences', packedOffset: 80, packedBitOffset: 0, type: blink.mojom.RendererPreferencesSpec, nullable: false, minVersion: 0 },
        { name: 'forced_enabled_runtime_features', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'service_worker_receiver', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'interface_provider', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'controller_receiver', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'installed_scripts_info', packedOffset: 104, packedBitOffset: 0, type: blink.mojom.ServiceWorkerInstalledScriptsInfoSpec, nullable: true, minVersion: 0 },
        { name: 'instance_host', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'provider_info', packedOffset: 120, packedBitOffset: 0, type: blink.mojom.ServiceWorkerProviderInfoForStartWorkerSpec, nullable: false, minVersion: 0 },
        { name: 'content_settings_proxy', packedOffset: 116, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'preference_watcher_receiver', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'subresource_loader_factories', packedOffset: 136, packedBitOffset: 0, type: blink.mojom.URLLoaderFactoryBundleSpec, nullable: false, minVersion: 0 },
        { name: 'subresource_loader_updater', packedOffset: 132, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'service_worker_token', packedOffset: 144, packedBitOffset: 0, type: blink.mojom.ServiceWorkerTokenSpec, nullable: false, minVersion: 0 },
        { name: 'ukm_source_id', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'main_script_load_params', packedOffset: 160, packedBitOffset: 0, type: blink.mojom.WorkerMainScriptLoadParamsSpec, nullable: true, minVersion: 0 },
        { name: 'policy_container', packedOffset: 168, packedBitOffset: 0, type: blink.mojom.PolicyContainerSpec, nullable: true, minVersion: 0 },
        { name: 'storage_key', packedOffset: 176, packedBitOffset: 0, type: blink.mojom.StorageKeySpec, nullable: false, minVersion: 0 },
        { name: 'cors_exempt_header_list', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'coep_reporting_observer', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true, minVersion: 0 },
        { name: 'dip_reporting_observer', packedOffset: 196, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 208}]
    }
  }
};

// Struct: EmbeddedWorkerStartTiming
blink.mojom.EmbeddedWorkerStartTimingSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerStartTiming',
      packedSize: 32,
      fields: [
        { name: 'start_worker_received_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'script_evaluation_start_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'script_evaluation_end_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: EmbeddedWorkerInstanceClient
blink.mojom.EmbeddedWorkerInstanceClient = {};

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
      [params]);
  }

  stopWorker() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceClient_StopWorker_ParamsSpec,
      null,
      []);
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

// ParamsSpec for StartWorker
blink.mojom.EmbeddedWorkerInstanceClient_StartWorker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceClient.StartWorker_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.EmbeddedWorkerStartParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopWorker
blink.mojom.EmbeddedWorkerInstanceClient_StopWorker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceClient.StopWorker_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.EmbeddedWorkerInstanceClientPtr = blink.mojom.EmbeddedWorkerInstanceClientRemote;
blink.mojom.EmbeddedWorkerInstanceClientRequest = blink.mojom.EmbeddedWorkerInstanceClientPendingReceiver;


// Interface: EmbeddedWorkerInstanceHost
blink.mojom.EmbeddedWorkerInstanceHost = {};

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
      []);
  }

  countFeature(feature) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_CountFeature_ParamsSpec,
      null,
      [feature]);
  }

  onReadyForInspection(agent, agent_host) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnReadyForInspection_ParamsSpec,
      null,
      [agent, agent_host]);
  }

  onScriptLoaded() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnScriptLoaded_ParamsSpec,
      null,
      []);
  }

  onScriptEvaluationStart() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnScriptEvaluationStart_ParamsSpec,
      null,
      []);
  }

  onStarted(status, fetch_handler_type, has_hid_event_handlers, has_usb_event_handlers, thread_id, start_timing) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnStarted_ParamsSpec,
      null,
      [status, fetch_handler_type, has_hid_event_handlers, has_usb_event_handlers, thread_id, start_timing]);
  }

  onReportException(error_message, line_number, column_number, source_url) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnReportException_ParamsSpec,
      null,
      [error_message, line_number, column_number, source_url]);
  }

  onReportConsoleMessage(source, message_level, message, line_number, source_url) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnReportConsoleMessage_ParamsSpec,
      null,
      [source, message_level, message, line_number, source_url]);
  }

  onStopped() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnStopped_ParamsSpec,
      null,
      []);
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

// ParamsSpec for RequestTermination
blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceHost.RequestTermination_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceHost.RequestTermination_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'will_be_terminated', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CountFeature
blink.mojom.EmbeddedWorkerInstanceHost_CountFeature_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceHost.CountFeature_Params',
      packedSize: 16,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebFeatureSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnReadyForInspection
blink.mojom.EmbeddedWorkerInstanceHost_OnReadyForInspection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceHost.OnReadyForInspection_Params',
      packedSize: 16,
      fields: [
        { name: 'agent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'agent_host', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnScriptLoaded
blink.mojom.EmbeddedWorkerInstanceHost_OnScriptLoaded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceHost.OnScriptLoaded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnScriptEvaluationStart
blink.mojom.EmbeddedWorkerInstanceHost_OnScriptEvaluationStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceHost.OnScriptEvaluationStart_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnStarted
blink.mojom.EmbeddedWorkerInstanceHost_OnStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceHost.OnStarted_Params',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerStartStatusSpec, nullable: false, minVersion: 0 },
        { name: 'fetch_handler_type', packedOffset: 4, packedBitOffset: 0, type: blink.mojom.ServiceWorkerFetchHandlerTypeSpec, nullable: false, minVersion: 0 },
        { name: 'has_hid_event_handlers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_usb_event_handlers', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'thread_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'start_timing', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.EmbeddedWorkerStartTimingSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnReportException
blink.mojom.EmbeddedWorkerInstanceHost_OnReportException_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceHost.OnReportException_Params',
      packedSize: 32,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'line_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'column_number', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'source_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnReportConsoleMessage
blink.mojom.EmbeddedWorkerInstanceHost_OnReportConsoleMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceHost.OnReportConsoleMessage_Params',
      packedSize: 40,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ConsoleMessageSourceSpec, nullable: false, minVersion: 0 },
        { name: 'message_level', packedOffset: 4, packedBitOffset: 0, type: blink.mojom.ConsoleMessageLevelSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'line_number', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'source_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for OnStopped
blink.mojom.EmbeddedWorkerInstanceHost_OnStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceHost.OnStopped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.EmbeddedWorkerInstanceHostPtr = blink.mojom.EmbeddedWorkerInstanceHostRemote;
blink.mojom.EmbeddedWorkerInstanceHostRequest = blink.mojom.EmbeddedWorkerInstanceHostPendingReceiver;

