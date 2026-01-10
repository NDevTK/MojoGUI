// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_stream_handle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ServiceWorkerStreamHandleSpec = { $: {} };
blink.mojom.ServiceWorkerStreamCallback = {};
blink.mojom.ServiceWorkerStreamCallback.$interfaceName = 'blink.mojom.ServiceWorkerStreamCallback';
blink.mojom.ServiceWorkerStreamCallback_OnCompleted_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerStreamCallback_OnAborted_ParamsSpec = { $: {} };

// Struct: ServiceWorkerStreamHandle
mojo.internal.Struct(
    blink.mojom.ServiceWorkerStreamHandleSpec, 'blink.mojom.ServiceWorkerStreamHandle', [
      mojo.internal.StructField('stream', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('callback_receiver', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.ServiceWorkerStreamCallbackSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ServiceWorkerStreamCallback
mojo.internal.Struct(
    blink.mojom.ServiceWorkerStreamCallback_OnCompleted_ParamsSpec, 'blink.mojom.ServiceWorkerStreamCallback_OnCompleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerStreamCallback_OnAborted_ParamsSpec, 'blink.mojom.ServiceWorkerStreamCallback_OnAborted_Params', [
    ],
    [[0, 8]]);

blink.mojom.ServiceWorkerStreamCallbackPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerStreamCallbackRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerStreamCallback';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerStreamCallbackPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerStreamCallbackRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerStreamCallbackRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCompleted() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerStreamCallback_OnCompleted_ParamsSpec,
      null,
      [],
      false);
  }

  onAborted() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerStreamCallback_OnAborted_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.ServiceWorkerStreamCallback.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerStreamCallbackRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerStreamCallback',
    'context');
  return remote.$;
};

blink.mojom.ServiceWorkerStreamCallbackReceiver = class {
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
        
        // Try Method 0: OnCompleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerStreamCallback_OnCompleted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCompleted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnAborted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerStreamCallback_OnAborted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAborted (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerStreamCallback_OnCompleted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onCompleted');
          const result = this.impl.onCompleted();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerStreamCallback_OnAborted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAborted');
          const result = this.impl.onAborted();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.ServiceWorkerStreamCallbackReceiver = blink.mojom.ServiceWorkerStreamCallbackReceiver;

blink.mojom.ServiceWorkerStreamCallbackPtr = blink.mojom.ServiceWorkerStreamCallbackRemote;
blink.mojom.ServiceWorkerStreamCallbackRequest = blink.mojom.ServiceWorkerStreamCallbackPendingReceiver;

