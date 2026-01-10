// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/close_watcher/close_listener.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.CloseListener = {};
blink.mojom.CloseListener.$interfaceName = 'blink.mojom.CloseListener';
blink.mojom.CloseListener_Signal_ParamsSpec = { $: {} };

// Interface: CloseListener
mojo.internal.Struct(
    blink.mojom.CloseListener_Signal_ParamsSpec, 'blink.mojom.CloseListener_Signal_Params', [
    ],
    [[0, 8]]);

blink.mojom.CloseListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.CloseListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.CloseListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.CloseListenerPendingReceiver,
      handle);
    this.$ = new blink.mojom.CloseListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.CloseListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  signal() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.CloseListener_Signal_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.CloseListener.getRemote = function() {
  let remote = new blink.mojom.CloseListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.CloseListener',
    'context');
  return remote.$;
};

blink.mojom.CloseListenerReceiver = class {
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
        
        // Try Method 0: Signal
        try {
             decoder.decodeStruct(blink.mojom.CloseListener_Signal_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Signal (0)');
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
          const params = decoder.decodeStruct(blink.mojom.CloseListener_Signal_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.signal');
          const result = this.impl.signal();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.CloseListenerReceiver = blink.mojom.CloseListenerReceiver;

blink.mojom.CloseListenerPtr = blink.mojom.CloseListenerRemote;
blink.mojom.CloseListenerRequest = blink.mojom.CloseListenerPendingReceiver;

