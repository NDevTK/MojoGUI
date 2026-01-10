// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_worker_client_registry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ServiceWorkerWorkerClientRegistry = {};
blink.mojom.ServiceWorkerWorkerClientRegistry.$interfaceName = 'blink.mojom.ServiceWorkerWorkerClientRegistry';
blink.mojom.ServiceWorkerWorkerClientRegistry_RegisterWorkerClient_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerWorkerClientRegistry_CloneWorkerClientRegistry_ParamsSpec = { $: {} };

// Interface: ServiceWorkerWorkerClientRegistry
mojo.internal.Struct(
    blink.mojom.ServiceWorkerWorkerClientRegistry_RegisterWorkerClient_ParamsSpec, 'blink.mojom.ServiceWorkerWorkerClientRegistry_RegisterWorkerClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.ServiceWorkerWorkerClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerWorkerClientRegistry_CloneWorkerClientRegistry_ParamsSpec, 'blink.mojom.ServiceWorkerWorkerClientRegistry_CloneWorkerClientRegistry_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.ServiceWorkerWorkerClientRegistrySpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ServiceWorkerWorkerClientRegistryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerWorkerClientRegistryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerWorkerClientRegistry';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerWorkerClientRegistryPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerWorkerClientRegistryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerWorkerClientRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerWorkerClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerWorkerClientRegistry_RegisterWorkerClient_ParamsSpec,
      null,
      [client],
      false);
  }

  cloneWorkerClientRegistry(host) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerWorkerClientRegistry_CloneWorkerClientRegistry_ParamsSpec,
      null,
      [host],
      false);
  }

};

blink.mojom.ServiceWorkerWorkerClientRegistry.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerWorkerClientRegistryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerWorkerClientRegistry',
    'context');
  return remote.$;
};

blink.mojom.ServiceWorkerWorkerClientRegistryReceiver = class {
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
        
        // Try Method 0: RegisterWorkerClient
        try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerWorkerClientRegistry_RegisterWorkerClient_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterWorkerClient (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: CloneWorkerClientRegistry
        try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerWorkerClientRegistry_CloneWorkerClientRegistry_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloneWorkerClientRegistry (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerWorkerClientRegistry_RegisterWorkerClient_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.registerWorkerClient');
          const result = this.impl.registerWorkerClient(params.client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerWorkerClientRegistry_CloneWorkerClientRegistry_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cloneWorkerClientRegistry');
          const result = this.impl.cloneWorkerClientRegistry(params.host);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.ServiceWorkerWorkerClientRegistryReceiver = blink.mojom.ServiceWorkerWorkerClientRegistryReceiver;

blink.mojom.ServiceWorkerWorkerClientRegistryPtr = blink.mojom.ServiceWorkerWorkerClientRegistryRemote;
blink.mojom.ServiceWorkerWorkerClientRegistryRequest = blink.mojom.ServiceWorkerWorkerClientRegistryPendingReceiver;

