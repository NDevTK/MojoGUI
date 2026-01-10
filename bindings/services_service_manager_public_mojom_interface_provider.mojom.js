// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/interface_provider.mojom
// Module: service_manager.mojom

'use strict';

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};

service_manager.mojom.InterfaceProvider = {};
service_manager.mojom.InterfaceProvider.$interfaceName = 'service_manager.mojom.InterfaceProvider';
service_manager.mojom.InterfaceProvider_GetInterface_ParamsSpec = { $: {} };

// Interface: InterfaceProvider
mojo.internal.Struct(
    service_manager.mojom.InterfaceProvider_GetInterface_ParamsSpec, 'service_manager.mojom.InterfaceProvider_GetInterface_Params', [
      mojo.internal.StructField('interface_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pipe', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

service_manager.mojom.InterfaceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

service_manager.mojom.InterfaceProviderRemote = class {
  static get $interfaceName() {
    return 'service_manager.mojom.InterfaceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      service_manager.mojom.InterfaceProviderPendingReceiver,
      handle);
    this.$ = new service_manager.mojom.InterfaceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

service_manager.mojom.InterfaceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getInterface(interface_name, pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      service_manager.mojom.InterfaceProvider_GetInterface_ParamsSpec,
      null,
      [interface_name, pipe],
      false);
  }

};

service_manager.mojom.InterfaceProvider.getRemote = function() {
  let remote = new service_manager.mojom.InterfaceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'service_manager.mojom.InterfaceProvider',
    'context');
  return remote.$;
};

service_manager.mojom.InterfaceProviderReceiver = class {
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
        
        // Try Method 0: GetInterface
        try {
             decoder.decodeStruct(service_manager.mojom.InterfaceProvider_GetInterface_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInterface (0)');
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
          const params = decoder.decodeStruct(service_manager.mojom.InterfaceProvider_GetInterface_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getInterface');
          const result = this.impl.getInterface(params.interface_name, params.pipe);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

service_manager.mojom.InterfaceProviderReceiver = service_manager.mojom.InterfaceProviderReceiver;

service_manager.mojom.InterfaceProviderPtr = service_manager.mojom.InterfaceProviderRemote;
service_manager.mojom.InterfaceProviderRequest = service_manager.mojom.InterfaceProviderPendingReceiver;

