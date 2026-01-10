// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/service_worker.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Interface: ServiceWorker
extensions.mojom.mojom.ServiceWorker = {};

extensions.mojom.mojom.ServiceWorkerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.mojom.ServiceWorkerRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.ServiceWorker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.mojom.ServiceWorkerPendingReceiver,
      handle);
    this.$ = new extensions.mojom.mojom.ServiceWorkerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.mojom.ServiceWorkerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updatePermissions(active_permissions, withheld_permissions) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.mojom.ServiceWorker_UpdatePermissions_ParamsSpec,
      null,
      [active_permissions, withheld_permissions]);
  }

  dispatchOnConnect(port_id, channel_type, channel_name, tab_info, external_connection_info, port, port_host) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.mojom.ServiceWorker_DispatchOnConnect_ParamsSpec,
      extensions.mojom.mojom.ServiceWorker_DispatchOnConnect_ResponseParamsSpec,
      [port_id, channel_type, channel_name, tab_info, external_connection_info, port, port_host]);
  }

};

extensions.mojom.mojom.ServiceWorker.getRemote = function() {
  let remote = new extensions.mojom.mojom.ServiceWorkerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.ServiceWorker',
    'context');
  return remote.$;
};

// ParamsSpec for UpdatePermissions
extensions.mojom.mojom.ServiceWorker_UpdatePermissions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorker.UpdatePermissions_Params',
      packedSize: 24,
      fields: [
        { name: 'active_permissions', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.PermissionSetSpec, nullable: false, minVersion: 0 },
        { name: 'withheld_permissions', packedOffset: 8, packedBitOffset: 0, type: extensions.mojom.PermissionSetSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DispatchOnConnect
extensions.mojom.mojom.ServiceWorker_DispatchOnConnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorker.DispatchOnConnect_Params',
      packedSize: 64,
      fields: [
        { name: 'port_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.PortIdSpec, nullable: false, minVersion: 0 },
        { name: 'channel_type', packedOffset: 48, packedBitOffset: 0, type: extensions.mojom.ChannelTypeSpec, nullable: false, minVersion: 0 },
        { name: 'channel_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'tab_info', packedOffset: 16, packedBitOffset: 0, type: extensions.mojom.TabConnectionInfoSpec, nullable: false, minVersion: 0 },
        { name: 'external_connection_info', packedOffset: 24, packedBitOffset: 0, type: extensions.mojom.ExternalConnectionInfoSpec, nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(extensions.mojom.MessagePortRemote), nullable: false, minVersion: 0 },
        { name: 'port_host', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(extensions.mojom.MessagePortHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

extensions.mojom.mojom.ServiceWorker_DispatchOnConnect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorker.DispatchOnConnect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
extensions.mojom.mojom.ServiceWorkerPtr = extensions.mojom.mojom.ServiceWorkerRemote;
extensions.mojom.mojom.ServiceWorkerRequest = extensions.mojom.mojom.ServiceWorkerPendingReceiver;

