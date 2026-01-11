// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/service_worker.mojom
// Module: extensions.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
      mojo.internal.StructField('port', 40, 0, pending_associated_receiver<extensions.mojom.MessagePort>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('port_host', 48, 0, pending_associated_remote<extensions.mojom.MessagePortHost>Spec.$, null, false, 0, undefined),
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
  updatePermissions(active_permissions, withheld_permissions) {
    return this.$.updatePermissions(active_permissions, withheld_permissions);
  }
  dispatchOnConnect(port_id, channel_type, channel_name, tab_info, external_connection_info, port, port_host) {
    return this.$.dispatchOnConnect(port_id, channel_type, channel_name, tab_info, external_connection_info, port, port_host);
  }
};

extensions.mojom.ServiceWorkerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorker', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  updatePermissions(active_permissions, withheld_permissions) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      extensions.mojom.ServiceWorker_UpdatePermissions_ParamsSpec,
      null,
      [active_permissions, withheld_permissions],
      false);
  }

  dispatchOnConnect(port_id, channel_type, channel_name, tab_info, external_connection_info, port, port_host) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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

extensions.mojom.ServiceWorkerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorker', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.ServiceWorker_UpdatePermissions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.ServiceWorker_DispatchOnConnect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.ServiceWorker_UpdatePermissions_ParamsSpec.$.structSpec);
          const result = this.impl.updatePermissions(params.active_permissions, params.withheld_permissions);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.ServiceWorker_DispatchOnConnect_ParamsSpec.$.structSpec);
          const result = this.impl.dispatchOnConnect(params.port_id, params.channel_type, params.channel_name, params.tab_info, params.external_connection_info, params.port, params.port_host);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, extensions.mojom.ServiceWorker_DispatchOnConnect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

extensions.mojom.ServiceWorkerReceiver = extensions.mojom.ServiceWorkerReceiver;

extensions.mojom.ServiceWorkerPtr = extensions.mojom.ServiceWorkerRemote;
extensions.mojom.ServiceWorkerRequest = extensions.mojom.ServiceWorkerPendingReceiver;

