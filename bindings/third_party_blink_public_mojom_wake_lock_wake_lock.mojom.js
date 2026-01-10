// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/wake_lock/wake_lock.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var device = device || {};

blink.mojom.WakeLockService = {};
blink.mojom.WakeLockService.$interfaceName = 'blink.mojom.WakeLockService';
blink.mojom.WakeLockService_GetWakeLock_ParamsSpec = { $: {} };

// Interface: WakeLockService
mojo.internal.Struct(
    blink.mojom.WakeLockService_GetWakeLock_ParamsSpec, 'blink.mojom.WakeLockService_GetWakeLock_Params', [
      mojo.internal.StructField('type', 0, 0, device.mojom.WakeLockTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, device.mojom.WakeLockReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('wake_lock', 24, 0, mojo.internal.InterfaceRequest(device.mojom.WakeLockRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

blink.mojom.WakeLockServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WakeLockServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WakeLockService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WakeLockServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.WakeLockServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WakeLockServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getWakeLock(type, reason, description, wake_lock) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WakeLockService_GetWakeLock_ParamsSpec,
      null,
      [type, reason, description, wake_lock],
      false);
  }

};

blink.mojom.WakeLockService.getRemote = function() {
  let remote = new blink.mojom.WakeLockServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WakeLockService',
    'context');
  return remote.$;
};

blink.mojom.WakeLockServiceReceiver = class {
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
        
        // Try Method 0: GetWakeLock
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.WakeLockService_GetWakeLock_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWakeLock (0)');
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
          const params = decoder.decodeStruct(blink.mojom.WakeLockService_GetWakeLock_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getWakeLock');
          const result = this.impl.getWakeLock(params.type, params.reason, params.description, params.wake_lock);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.WakeLockServiceReceiver = blink.mojom.WakeLockServiceReceiver;

blink.mojom.WakeLockServicePtr = blink.mojom.WakeLockServiceRemote;
blink.mojom.WakeLockServiceRequest = blink.mojom.WakeLockServicePendingReceiver;

