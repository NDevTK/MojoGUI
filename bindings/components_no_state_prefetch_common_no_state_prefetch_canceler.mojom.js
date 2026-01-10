// Auto-generated MojoJS binding
// Source: chromium_src/components/no_state_prefetch/common/no_state_prefetch_canceler.mojom
// Module: prerender.mojom

'use strict';

// Module namespace
var prerender = prerender || {};
prerender.mojom = prerender.mojom || {};

prerender.mojom.NoStatePrefetchCanceler = {};
prerender.mojom.NoStatePrefetchCanceler.$interfaceName = 'prerender.mojom.NoStatePrefetchCanceler';
prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchForUnsupportedScheme_ParamsSpec = { $: {} };
prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchAfterSubresourcesDiscovered_ParamsSpec = { $: {} };

// Interface: NoStatePrefetchCanceler
mojo.internal.Struct(
    prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchForUnsupportedScheme_ParamsSpec, 'prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchForUnsupportedScheme_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchAfterSubresourcesDiscovered_ParamsSpec, 'prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchAfterSubresourcesDiscovered_Params', [
    ],
    [[0, 8]]);

prerender.mojom.NoStatePrefetchCancelerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

prerender.mojom.NoStatePrefetchCancelerRemote = class {
  static get $interfaceName() {
    return 'prerender.mojom.NoStatePrefetchCanceler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      prerender.mojom.NoStatePrefetchCancelerPendingReceiver,
      handle);
    this.$ = new prerender.mojom.NoStatePrefetchCancelerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

prerender.mojom.NoStatePrefetchCancelerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  cancelNoStatePrefetchForUnsupportedScheme() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchForUnsupportedScheme_ParamsSpec,
      null,
      [],
      false);
  }

  cancelNoStatePrefetchAfterSubresourcesDiscovered() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchAfterSubresourcesDiscovered_ParamsSpec,
      null,
      [],
      false);
  }

};

prerender.mojom.NoStatePrefetchCanceler.getRemote = function() {
  let remote = new prerender.mojom.NoStatePrefetchCancelerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'prerender.mojom.NoStatePrefetchCanceler',
    'context');
  return remote.$;
};

prerender.mojom.NoStatePrefetchCancelerReceiver = class {
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
        
        // Try Method 0: CancelNoStatePrefetchForUnsupportedScheme
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchForUnsupportedScheme_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelNoStatePrefetchForUnsupportedScheme (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CancelNoStatePrefetchAfterSubresourcesDiscovered
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchAfterSubresourcesDiscovered_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelNoStatePrefetchAfterSubresourcesDiscovered (1)');
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
          const params = decoder.decodeStruct(prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchForUnsupportedScheme_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancelNoStatePrefetchForUnsupportedScheme');
          const result = this.impl.cancelNoStatePrefetchForUnsupportedScheme();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchAfterSubresourcesDiscovered_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancelNoStatePrefetchAfterSubresourcesDiscovered');
          const result = this.impl.cancelNoStatePrefetchAfterSubresourcesDiscovered();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

prerender.mojom.NoStatePrefetchCancelerReceiver = prerender.mojom.NoStatePrefetchCancelerReceiver;

prerender.mojom.NoStatePrefetchCancelerPtr = prerender.mojom.NoStatePrefetchCancelerRemote;
prerender.mojom.NoStatePrefetchCancelerRequest = prerender.mojom.NoStatePrefetchCancelerPendingReceiver;

