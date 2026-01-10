// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_worker_client.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ServiceWorkerWorkerClient = {};
blink.mojom.ServiceWorkerWorkerClient.$interfaceName = 'blink.mojom.ServiceWorkerWorkerClient';
blink.mojom.ServiceWorkerWorkerClient_OnControllerChanged_ParamsSpec = { $: {} };

// Interface: ServiceWorkerWorkerClient
mojo.internal.Struct(
    blink.mojom.ServiceWorkerWorkerClient_OnControllerChanged_ParamsSpec, 'blink.mojom.ServiceWorkerWorkerClient_OnControllerChanged_Params', [
      mojo.internal.StructField('mode', 0, 0, blink.mojom.ControllerServiceWorkerModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ServiceWorkerWorkerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerWorkerClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerWorkerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerWorkerClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerWorkerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerWorkerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onControllerChanged(mode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerWorkerClient_OnControllerChanged_ParamsSpec,
      null,
      [mode],
      false);
  }

};

blink.mojom.ServiceWorkerWorkerClient.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerWorkerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerWorkerClient',
    'context');
  return remote.$;
};

blink.mojom.ServiceWorkerWorkerClientReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnControllerChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerWorkerClient_OnControllerChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnControllerChanged (0)');
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
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerWorkerClient_OnControllerChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onControllerChanged');
          const result = this.impl.onControllerChanged(params.mode);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.ServiceWorkerWorkerClientReceiver = blink.mojom.ServiceWorkerWorkerClientReceiver;

blink.mojom.ServiceWorkerWorkerClientPtr = blink.mojom.ServiceWorkerWorkerClientRemote;
blink.mojom.ServiceWorkerWorkerClientRequest = blink.mojom.ServiceWorkerWorkerClientPendingReceiver;

