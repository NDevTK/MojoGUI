// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/service_worker.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Interface: ServiceWorker
extensions.mojom.ServiceWorker = {};

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
      [active_permissions, withheld_permissions]);
  }

  dispatchOnConnect(port_id, channel_type, channel_name, tab_info, external_connection_info, port, port_host) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.ServiceWorker_DispatchOnConnect_ParamsSpec,
      extensions.mojom.ServiceWorker_DispatchOnConnect_ResponseParamsSpec,
      [port_id, channel_type, channel_name, tab_info, external_connection_info, port, port_host]);
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

// ParamsSpec for UpdatePermissions
extensions.mojom.ServiceWorker_UpdatePermissions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorker.UpdatePermissions_Params',
      packedSize: 24,
      fields: [
        { name: 'active_permissions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'withheld_permissions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchOnConnect
extensions.mojom.ServiceWorker_DispatchOnConnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorker.DispatchOnConnect_Params',
      packedSize: 56,
      fields: [
        { name: 'port_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.PortIdSpec, nullable: false },
        { name: 'channel_type', packedOffset: 8, packedBitOffset: 0, type: extensions.mojom.ChannelTypeSpec, nullable: false },
        { name: 'channel_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'tab_info', packedOffset: 24, packedBitOffset: 0, type: extensions.mojom.TabConnectionInfoSpec, nullable: false },
        { name: 'external_connection_info', packedOffset: 32, packedBitOffset: 0, type: extensions.mojom.ExternalConnectionInfoSpec, nullable: false },
        { name: 'port', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
        { name: 'port_host', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

extensions.mojom.ServiceWorker_DispatchOnConnect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorker.DispatchOnConnect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
extensions.mojom.ServiceWorkerPtr = extensions.mojom.ServiceWorkerRemote;
extensions.mojom.ServiceWorkerRequest = extensions.mojom.ServiceWorkerPendingReceiver;

