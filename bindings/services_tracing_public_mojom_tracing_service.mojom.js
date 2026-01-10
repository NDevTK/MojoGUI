// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/tracing_service.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};
var sandbox = sandbox || {};

tracing.mojom.ClientInfoSpec = { $: {} };
tracing.mojom.TracingService = {};
tracing.mojom.TracingService.$interfaceName = 'tracing.mojom.TracingService';
tracing.mojom.TracingService_Initialize_ParamsSpec = { $: {} };
tracing.mojom.TracingService_AddClient_ParamsSpec = { $: {} };
tracing.mojom.TracingService_BindConsumerHost_ParamsSpec = { $: {} };

tracing.mojom.kTracingSandbox = sandbox.mojom.Sandbox.kUtility;

tracing.mojom.kTracingSandbox = sandbox.mojom.Sandbox.kService;

// Struct: ClientInfo
mojo.internal.Struct(
    tracing.mojom.ClientInfoSpec, 'tracing.mojom.ClientInfo', [
      mojo.internal.StructField('process', 0, 0, mojo.internal.InterfaceProxy(tracing.mojom.TracedProcessRemote), null, false, 0, undefined),
      mojo.internal.StructField('pid', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: TracingService
mojo.internal.Struct(
    tracing.mojom.TracingService_Initialize_ParamsSpec, 'tracing.mojom.TracingService_Initialize_Params', [
      mojo.internal.StructField('clients', 0, 0, mojo.internal.Array(tracing.mojom.ClientInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tracing.mojom.TracingService_AddClient_ParamsSpec, 'tracing.mojom.TracingService_AddClient_Params', [
      mojo.internal.StructField('client', 0, 0, tracing.mojom.ClientInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tracing.mojom.TracingService_BindConsumerHost_ParamsSpec, 'tracing.mojom.TracingService_BindConsumerHost_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(tracing.mojom.ConsumerHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

tracing.mojom.TracingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.TracingServiceRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.TracingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.TracingServicePendingReceiver,
      handle);
    this.$ = new tracing.mojom.TracingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.TracingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(clients) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.TracingService_Initialize_ParamsSpec,
      null,
      [clients],
      false);
  }

  addClient(client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracing.mojom.TracingService_AddClient_ParamsSpec,
      null,
      [client],
      false);
  }

  bindConsumerHost(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tracing.mojom.TracingService_BindConsumerHost_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

tracing.mojom.TracingService.getRemote = function() {
  let remote = new tracing.mojom.TracingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.TracingService',
    'context');
  return remote.$;
};

tracing.mojom.TracingServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
        
        // Try Method 0: Initialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(tracing.mojom.TracingService_Initialize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(tracing.mojom.TracingService_AddClient_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddClient (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: BindConsumerHost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(tracing.mojom.TracingService_BindConsumerHost_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindConsumerHost (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
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
          const params = decoder.decodeStruct(tracing.mojom.TracingService_Initialize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.clients);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(tracing.mojom.TracingService_AddClient_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addClient');
          const result = this.impl.addClient(params.client);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(tracing.mojom.TracingService_BindConsumerHost_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindConsumerHost');
          const result = this.impl.bindConsumerHost(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

tracing.mojom.TracingServiceReceiver = tracing.mojom.TracingServiceReceiver;

tracing.mojom.TracingServicePtr = tracing.mojom.TracingServiceRemote;
tracing.mojom.TracingServiceRequest = tracing.mojom.TracingServicePendingReceiver;

