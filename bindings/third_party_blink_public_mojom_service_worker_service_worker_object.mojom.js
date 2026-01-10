// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_object.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.ServiceWorkerObjectInfoSpec = { $: {} };
blink.mojom.ServiceWorkerObjectHost = {};
blink.mojom.ServiceWorkerObjectHost.$interfaceName = 'blink.mojom.ServiceWorkerObjectHost';
blink.mojom.ServiceWorkerObjectHost_PostMessageToServiceWorker_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorkerObject = {};
blink.mojom.ServiceWorkerObject.$interfaceName = 'blink.mojom.ServiceWorkerObject';
blink.mojom.ServiceWorkerObject_StateChanged_ParamsSpec = { $: {} };

// Struct: ServiceWorkerObjectInfo
mojo.internal.Struct(
    blink.mojom.ServiceWorkerObjectInfoSpec, 'blink.mojom.ServiceWorkerObjectInfo', [
      mojo.internal.StructField('version_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('state', 8, 0, blink.mojom.ServiceWorkerStateSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('host_remote', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: ServiceWorkerObjectHost
mojo.internal.Struct(
    blink.mojom.ServiceWorkerObjectHost_PostMessageToServiceWorker_ParamsSpec, 'blink.mojom.ServiceWorkerObjectHost_PostMessageToServiceWorker_Params', [
      mojo.internal.StructField('message', 0, 0, blink.mojom.TransferableMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ParamsSpec, 'blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ResponseParamsSpec, 'blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ResponseParams', [
    ],
    [[0, 8]]);

blink.mojom.ServiceWorkerObjectHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerObjectHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerObjectHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerObjectHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerObjectHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerObjectHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  postMessageToServiceWorker(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerObjectHost_PostMessageToServiceWorker_ParamsSpec,
      null,
      [message],
      false);
  }

  terminateForTesting() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ParamsSpec,
      blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.ServiceWorkerObjectHost.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerObjectHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerObjectHost',
    'context');
  return remote.$;
};

blink.mojom.ServiceWorkerObjectHostReceiver = class {
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
        
        // Try Method 0: PostMessageToServiceWorker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerObjectHost_PostMessageToServiceWorker_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PostMessageToServiceWorker (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: TerminateForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TerminateForTesting (1)');
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
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerObjectHost_PostMessageToServiceWorker_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.postMessageToServiceWorker');
          const result = this.impl.postMessageToServiceWorker(params.message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.terminateForTesting');
          const result = this.impl.terminateForTesting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ResponseParamsSpec);
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

blink.mojom.ServiceWorkerObjectHostReceiver = blink.mojom.ServiceWorkerObjectHostReceiver;

blink.mojom.ServiceWorkerObjectHostPtr = blink.mojom.ServiceWorkerObjectHostRemote;
blink.mojom.ServiceWorkerObjectHostRequest = blink.mojom.ServiceWorkerObjectHostPendingReceiver;


// Interface: ServiceWorkerObject
mojo.internal.Struct(
    blink.mojom.ServiceWorkerObject_StateChanged_ParamsSpec, 'blink.mojom.ServiceWorkerObject_StateChanged_Params', [
      mojo.internal.StructField('state', 0, 0, blink.mojom.ServiceWorkerStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ServiceWorkerObjectPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerObjectRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerObject';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerObjectPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerObjectRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerObjectRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  stateChanged(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerObject_StateChanged_ParamsSpec,
      null,
      [state],
      false);
  }

};

blink.mojom.ServiceWorkerObject.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerObjectRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerObject',
    'context');
  return remote.$;
};

blink.mojom.ServiceWorkerObjectReceiver = class {
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
        
        // Try Method 0: StateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerObject_StateChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StateChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerObject_StateChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stateChanged');
          const result = this.impl.stateChanged(params.state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.ServiceWorkerObjectReceiver = blink.mojom.ServiceWorkerObjectReceiver;

blink.mojom.ServiceWorkerObjectPtr = blink.mojom.ServiceWorkerObjectRemote;
blink.mojom.ServiceWorkerObjectRequest = blink.mojom.ServiceWorkerObjectPendingReceiver;

