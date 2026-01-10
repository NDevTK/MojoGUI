// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/service_control.mojom
// Module: service_manager.mojom

'use strict';

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};

service_manager.mojom.ServiceControl = {};
service_manager.mojom.ServiceControl.$interfaceName = 'service_manager.mojom.ServiceControl';
service_manager.mojom.ServiceControl_RequestQuit_ParamsSpec = { $: {} };

// Interface: ServiceControl
mojo.internal.Struct(
    service_manager.mojom.ServiceControl_RequestQuit_ParamsSpec, 'service_manager.mojom.ServiceControl_RequestQuit_Params', [
    ],
    [[0, 8]]);

service_manager.mojom.ServiceControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

service_manager.mojom.ServiceControlRemote = class {
  static get $interfaceName() {
    return 'service_manager.mojom.ServiceControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      service_manager.mojom.ServiceControlPendingReceiver,
      handle);
    this.$ = new service_manager.mojom.ServiceControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

service_manager.mojom.ServiceControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestQuit() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      service_manager.mojom.ServiceControl_RequestQuit_ParamsSpec,
      null,
      [],
      false);
  }

};

service_manager.mojom.ServiceControl.getRemote = function() {
  let remote = new service_manager.mojom.ServiceControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'service_manager.mojom.ServiceControl',
    'context');
  return remote.$;
};

service_manager.mojom.ServiceControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: RequestQuit
        try {
             decoder.decodeStruct(service_manager.mojom.ServiceControl_RequestQuit_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestQuit (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(service_manager.mojom.ServiceControl_RequestQuit_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestQuit');
          const result = this.impl.requestQuit();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

service_manager.mojom.ServiceControlReceiver = service_manager.mojom.ServiceControlReceiver;

service_manager.mojom.ServiceControlPtr = service_manager.mojom.ServiceControlRemote;
service_manager.mojom.ServiceControlRequest = service_manager.mojom.ServiceControlPendingReceiver;

