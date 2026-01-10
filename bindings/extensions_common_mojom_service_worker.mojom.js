// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/service_worker.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};

extensions.mojom.ServiceWorker = {};
extensions.mojom.ServiceWorker.$interfaceName = 'extensions.mojom.ServiceWorker';
extensions.mojom.ServiceWorker_UpdatePermissions_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorker_DispatchOnConnect_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorker_DispatchOnConnect_ResponseParamsSpec = { $: {} };

// Interface: ServiceWorker
mojo.internal.Struct(
    extensions.mojom.ServiceWorker_UpdatePermissions_ParamsSpec, 'extensions.mojom.ServiceWorker_UpdatePermissions_Params', [
      mojo.internal.StructField('active_permissions', 0, 0, extensions.mojom.PermissionSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('withheld_permissions', 8, 0, extensions.mojom.PermissionSetSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorker_DispatchOnConnect_ParamsSpec, 'extensions.mojom.ServiceWorker_DispatchOnConnect_Params', [
      mojo.internal.StructField('port_id', 0, 0, extensions.mojom.PortIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('channel_type', 8, 0, extensions.mojom.ChannelTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('channel_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tab_info', 24, 0, extensions.mojom.TabConnectionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('external_connection_info', 32, 0, extensions.mojom.ExternalConnectionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 40, 0, mojo.internal.AssociatedInterfaceRequest(extensions.mojom.MessagePortRemote), null, false, 0, undefined),
      mojo.internal.StructField('port_host', 48, 0, mojo.internal.AssociatedInterfaceProxy(extensions.mojom.MessagePortHostRemote), null, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorker_DispatchOnConnect_ResponseParamsSpec, 'extensions.mojom.ServiceWorker_DispatchOnConnect_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

extensions.mojom.ServiceWorkerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.ServiceWorkerRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.ServiceWorker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.ServiceWorkerPendingReceiver,
      handle);
    this.$ = new extensions.mojom.ServiceWorkerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.ServiceWorkerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updatePermissions(active_permissions, withheld_permissions) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.ServiceWorker_UpdatePermissions_ParamsSpec,
      null,
      [active_permissions, withheld_permissions],
      false);
  }

  dispatchOnConnect(port_id, channel_type, channel_name, tab_info, external_connection_info, port, port_host) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.ServiceWorker_DispatchOnConnect_ParamsSpec,
      extensions.mojom.ServiceWorker_DispatchOnConnect_ResponseParamsSpec,
      [port_id, channel_type, channel_name, tab_info, external_connection_info, port, port_host],
      false);
  }

};

extensions.mojom.ServiceWorker.getRemote = function() {
  let remote = new extensions.mojom.ServiceWorkerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.ServiceWorker',
    'context');
  return remote.$;
};

extensions.mojom.ServiceWorkerPtr = extensions.mojom.ServiceWorkerRemote;
extensions.mojom.ServiceWorkerRequest = extensions.mojom.ServiceWorkerPendingReceiver;

