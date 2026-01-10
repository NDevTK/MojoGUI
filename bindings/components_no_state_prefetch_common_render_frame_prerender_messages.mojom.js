// Auto-generated MojoJS binding
// Source: chromium_src/components/no_state_prefetch/common/render_frame_prerender_messages.mojom
// Module: prerender.mojom

'use strict';

// Module namespace
var prerender = prerender || {};
prerender.mojom = prerender.mojom || {};

prerender.mojom.NoStatePrefetchMessages = {};
prerender.mojom.NoStatePrefetchMessages.$interfaceName = 'prerender.mojom.NoStatePrefetchMessages';
prerender.mojom.NoStatePrefetchMessages_SetIsNoStatePrefetching_ParamsSpec = { $: {} };

// Interface: NoStatePrefetchMessages
mojo.internal.Struct(
    prerender.mojom.NoStatePrefetchMessages_SetIsNoStatePrefetching_ParamsSpec, 'prerender.mojom.NoStatePrefetchMessages_SetIsNoStatePrefetching_Params', [
      mojo.internal.StructField('histogram_prefix', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

prerender.mojom.NoStatePrefetchMessagesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

prerender.mojom.NoStatePrefetchMessagesRemote = class {
  static get $interfaceName() {
    return 'prerender.mojom.NoStatePrefetchMessages';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      prerender.mojom.NoStatePrefetchMessagesPendingReceiver,
      handle);
    this.$ = new prerender.mojom.NoStatePrefetchMessagesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

prerender.mojom.NoStatePrefetchMessagesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setIsNoStatePrefetching(histogram_prefix) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      prerender.mojom.NoStatePrefetchMessages_SetIsNoStatePrefetching_ParamsSpec,
      null,
      [histogram_prefix],
      false);
  }

};

prerender.mojom.NoStatePrefetchMessages.getRemote = function() {
  let remote = new prerender.mojom.NoStatePrefetchMessagesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'prerender.mojom.NoStatePrefetchMessages',
    'context');
  return remote.$;
};

prerender.mojom.NoStatePrefetchMessagesReceiver = class {
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
        
        // Try Method 0: SetIsNoStatePrefetching
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(prerender.mojom.NoStatePrefetchMessages_SetIsNoStatePrefetching_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsNoStatePrefetching (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(prerender.mojom.NoStatePrefetchMessages_SetIsNoStatePrefetching_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setIsNoStatePrefetching');
          const result = this.impl.setIsNoStatePrefetching(params.histogram_prefix);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

prerender.mojom.NoStatePrefetchMessagesReceiver = prerender.mojom.NoStatePrefetchMessagesReceiver;

prerender.mojom.NoStatePrefetchMessagesPtr = prerender.mojom.NoStatePrefetchMessagesRemote;
prerender.mojom.NoStatePrefetchMessagesRequest = prerender.mojom.NoStatePrefetchMessagesPendingReceiver;

