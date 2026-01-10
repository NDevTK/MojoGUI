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

extensions.mojom.ServiceWorkerReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: UpdatePermissions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.ServiceWorker_UpdatePermissions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdatePermissions (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: DispatchOnConnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.ServiceWorker_DispatchOnConnect_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchOnConnect (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(extensions.mojom.ServiceWorker_UpdatePermissions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updatePermissions');
          const result = this.impl.updatePermissions(params.active_permissions, params.withheld_permissions);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.ServiceWorker_DispatchOnConnect_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dispatchOnConnect');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

extensions.mojom.ServiceWorkerReceiver = extensions.mojom.ServiceWorkerReceiver;

extensions.mojom.ServiceWorkerPtr = extensions.mojom.ServiceWorkerRemote;
extensions.mojom.ServiceWorkerRequest = extensions.mojom.ServiceWorkerPendingReceiver;

