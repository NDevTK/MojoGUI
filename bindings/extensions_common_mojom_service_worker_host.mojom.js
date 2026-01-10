// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/service_worker_host.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var blink = blink || {};
var url = url || {};


// Interface: ServiceWorkerHost
extensions.mojom.ServiceWorkerHost = {};

extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_Params',
      packedSize: 48,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false, minVersion: 0 },
        { name: 'service_worker_version_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'worker_thread_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'service_worker_token', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ServiceWorkerTokenSpec, nullable: false, minVersion: 0 },
        { name: 'event_dispatcher', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(extensions.mojom.EventDispatcherRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_Params',
      packedSize: 48,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false, minVersion: 0 },
        { name: 'activation_token', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'service_worker_scope', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'service_worker_version_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'worker_thread_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_Params',
      packedSize: 48,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false, minVersion: 0 },
        { name: 'activation_token', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'service_worker_scope', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'service_worker_version_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'worker_thread_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

extensions.mojom.ServiceWorkerHost_RequestWorker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorkerHost_RequestWorker_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.RequestParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

extensions.mojom.ServiceWorkerHost_WorkerResponseAck_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorkerHost_WorkerResponseAck_Params',
      packedSize: 16,
      fields: [
        { name: 'request_uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_Params',
      packedSize: 56,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExternalConnectionInfoSpec, nullable: false, minVersion: 0 },
        { name: 'channel_type', packedOffset: 40, packedBitOffset: 0, type: extensions.mojom.ChannelTypeSpec, nullable: false, minVersion: 0 },
        { name: 'channel_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'port_id', packedOffset: 16, packedBitOffset: 0, type: extensions.mojom.PortIdSpec, nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(extensions.mojom.MessagePortRemote), nullable: false, minVersion: 0 },
        { name: 'port_host', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(extensions.mojom.MessagePortHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_Params',
      packedSize: 40,
      fields: [
        { name: 'native_app_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'port_id', packedOffset: 8, packedBitOffset: 0, type: extensions.mojom.PortIdSpec, nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(extensions.mojom.MessagePortRemote), nullable: false, minVersion: 0 },
        { name: 'port_host', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(extensions.mojom.MessagePortHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

extensions.mojom.ServiceWorkerHost_OpenChannelToTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorkerHost_OpenChannelToTab_Params',
      packedSize: 64,
      fields: [
        { name: 'tab_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'frame_id', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'document_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'channel_type', packedOffset: 48, packedBitOffset: 0, type: extensions.mojom.ChannelTypeSpec, nullable: false, minVersion: 0 },
        { name: 'channel_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'port_id', packedOffset: 16, packedBitOffset: 0, type: extensions.mojom.PortIdSpec, nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(extensions.mojom.MessagePortRemote), nullable: false, minVersion: 0 },
        { name: 'port_host', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(extensions.mojom.MessagePortHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

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

// ParamsSpec for DidInitializeServiceWorkerContext
extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorkerHost.DidInitializeServiceWorkerContext_Params',
      packedSize: 48,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false, minVersion: 0 },
        { name: 'service_worker_version_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'worker_thread_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'service_worker_token', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ServiceWorkerTokenSpec, nullable: false, minVersion: 0 },
        { name: 'event_dispatcher', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(extensions.mojom.EventDispatcherRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for DidStartServiceWorkerContext
extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorkerHost.DidStartServiceWorkerContext_Params',
      packedSize: 48,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false, minVersion: 0 },
        { name: 'activation_token', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'service_worker_scope', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'service_worker_version_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'worker_thread_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for DidStopServiceWorkerContext
extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorkerHost.DidStopServiceWorkerContext_Params',
      packedSize: 48,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false, minVersion: 0 },
        { name: 'activation_token', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'service_worker_scope', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'service_worker_version_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'worker_thread_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for RequestWorker
extensions.mojom.ServiceWorkerHost_RequestWorker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorkerHost.RequestWorker_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.RequestParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

extensions.mojom.ServiceWorkerHost_RequestWorker_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorkerHost.RequestWorker_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'success', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'response_wrapper', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ListValueSpec, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'extra_data', packedOffset: 16, packedBitOffset: 0, type: extensions.mojom.ExtraResponseDataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for WorkerResponseAck
extensions.mojom.ServiceWorkerHost_WorkerResponseAck_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorkerHost.WorkerResponseAck_Params',
      packedSize: 16,
      fields: [
        { name: 'request_uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenChannelToExtension
extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorkerHost.OpenChannelToExtension_Params',
      packedSize: 56,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExternalConnectionInfoSpec, nullable: false, minVersion: 0 },
        { name: 'channel_type', packedOffset: 40, packedBitOffset: 0, type: extensions.mojom.ChannelTypeSpec, nullable: false, minVersion: 0 },
        { name: 'channel_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'port_id', packedOffset: 16, packedBitOffset: 0, type: extensions.mojom.PortIdSpec, nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(extensions.mojom.MessagePortRemote), nullable: false, minVersion: 0 },
        { name: 'port_host', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(extensions.mojom.MessagePortHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// ParamsSpec for OpenChannelToNativeApp
extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorkerHost.OpenChannelToNativeApp_Params',
      packedSize: 40,
      fields: [
        { name: 'native_app_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'port_id', packedOffset: 8, packedBitOffset: 0, type: extensions.mojom.PortIdSpec, nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(extensions.mojom.MessagePortRemote), nullable: false, minVersion: 0 },
        { name: 'port_host', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(extensions.mojom.MessagePortHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for OpenChannelToTab
extensions.mojom.ServiceWorkerHost_OpenChannelToTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorkerHost.OpenChannelToTab_Params',
      packedSize: 64,
      fields: [
        { name: 'tab_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'frame_id', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'document_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'channel_type', packedOffset: 48, packedBitOffset: 0, type: extensions.mojom.ChannelTypeSpec, nullable: false, minVersion: 0 },
        { name: 'channel_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'port_id', packedOffset: 16, packedBitOffset: 0, type: extensions.mojom.PortIdSpec, nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(extensions.mojom.MessagePortRemote), nullable: false, minVersion: 0 },
        { name: 'port_host', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(extensions.mojom.MessagePortHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Legacy compatibility
extensions.mojom.ServiceWorkerHostPtr = extensions.mojom.ServiceWorkerHostRemote;
extensions.mojom.ServiceWorkerHostRequest = extensions.mojom.ServiceWorkerHostPendingReceiver;

