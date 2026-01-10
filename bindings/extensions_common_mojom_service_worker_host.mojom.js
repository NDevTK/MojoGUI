// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/service_worker_host.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var blink = blink || {};
var url = url || {};

extensions.mojom.ServiceWorkerHost = {};
extensions.mojom.ServiceWorkerHost.$interfaceName = 'extensions.mojom.ServiceWorkerHost';
extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_RequestWorker_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_RequestWorker_ResponseParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_WorkerResponseAck_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_OpenChannelToTab_ParamsSpec = { $: {} };

// Interface: ServiceWorkerHost
mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_version_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('worker_thread_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('service_worker_token', 24, 0, blink.mojom.ServiceWorkerTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_dispatcher', 32, 0, mojo.internal.AssociatedInterfaceProxy(extensions.mojom.EventDispatcherRemote), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('activation_token', 8, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_scope', 16, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_version_id', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('worker_thread_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('activation_token', 8, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_scope', 16, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_version_id', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('worker_thread_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_RequestWorker_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_RequestWorker_Params', [
      mojo.internal.StructField('params', 0, 0, extensions.mojom.RequestParamsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_RequestWorker_ResponseParamsSpec, 'extensions.mojom.ServiceWorkerHost_RequestWorker_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('response_wrapper', 8, 0, mojo_base.mojom.ListValueSpec, null, false, 0, undefined),
      mojo.internal.StructField('error', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('extra_data', 24, 0, extensions.mojom.ExtraResponseDataSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_WorkerResponseAck_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_WorkerResponseAck_Params', [
      mojo.internal.StructField('request_uuid', 0, 0, mojo_base.mojom.UuidSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_Params', [
      mojo.internal.StructField('info', 0, 0, extensions.mojom.ExternalConnectionInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('channel_type', 8, 0, extensions.mojom.ChannelTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('channel_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port_id', 24, 0, extensions.mojom.PortIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('port', 32, 0, mojo.internal.AssociatedInterfaceProxy(extensions.mojom.MessagePortRemote), null, false, 0, undefined),
      mojo.internal.StructField('port_host', 40, 0, mojo.internal.AssociatedInterfaceRequest(extensions.mojom.MessagePortHostRemote), null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_Params', [
      mojo.internal.StructField('native_app_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port_id', 8, 0, extensions.mojom.PortIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('port', 16, 0, mojo.internal.AssociatedInterfaceProxy(extensions.mojom.MessagePortRemote), null, false, 0, undefined),
      mojo.internal.StructField('port_host', 24, 0, mojo.internal.AssociatedInterfaceRequest(extensions.mojom.MessagePortHostRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_OpenChannelToTab_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_OpenChannelToTab_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('frame_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('document_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('channel_type', 16, 0, extensions.mojom.ChannelTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('channel_name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port_id', 32, 0, extensions.mojom.PortIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('port', 40, 0, mojo.internal.AssociatedInterfaceProxy(extensions.mojom.MessagePortRemote), null, false, 0, undefined),
      mojo.internal.StructField('port_host', 48, 0, mojo.internal.AssociatedInterfaceRequest(extensions.mojom.MessagePortHostRemote), null, false, 0, undefined),
    ],
    [[0, 64]]);

extensions.mojom.ServiceWorkerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.ServiceWorkerHostRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.ServiceWorkerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.ServiceWorkerHostPendingReceiver,
      handle);
    this.$ = new extensions.mojom.ServiceWorkerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.ServiceWorkerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didInitializeServiceWorkerContext(extension_id, service_worker_version_id, worker_thread_id, service_worker_token, event_dispatcher) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_ParamsSpec,
      null,
      [extension_id, service_worker_version_id, worker_thread_id, service_worker_token, event_dispatcher]);
  }

  didStartServiceWorkerContext(extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_ParamsSpec,
      null,
      [extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id]);
  }

  didStopServiceWorkerContext(extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_ParamsSpec,
      null,
      [extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id]);
  }

  requestWorker(params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      extensions.mojom.ServiceWorkerHost_RequestWorker_ParamsSpec,
      extensions.mojom.ServiceWorkerHost_RequestWorker_ResponseParamsSpec,
      [params]);
  }

  workerResponseAck(request_uuid) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      extensions.mojom.ServiceWorkerHost_WorkerResponseAck_ParamsSpec,
      null,
      [request_uuid]);
  }

  openChannelToExtension(info, channel_type, channel_name, port_id, port, port_host) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_ParamsSpec,
      null,
      [info, channel_type, channel_name, port_id, port, port_host]);
  }

  openChannelToNativeApp(native_app_name, port_id, port, port_host) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_ParamsSpec,
      null,
      [native_app_name, port_id, port, port_host]);
  }

  openChannelToTab(tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      extensions.mojom.ServiceWorkerHost_OpenChannelToTab_ParamsSpec,
      null,
      [tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host]);
  }

};

extensions.mojom.ServiceWorkerHost.getRemote = function() {
  let remote = new extensions.mojom.ServiceWorkerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.ServiceWorkerHost',
    'context');
  return remote.$;
};

extensions.mojom.ServiceWorkerHostPtr = extensions.mojom.ServiceWorkerHostRemote;
extensions.mojom.ServiceWorkerHostRequest = extensions.mojom.ServiceWorkerHostPendingReceiver;

