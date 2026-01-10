// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/chunked_data_pipe_getter.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.ChunkedDataPipeGetter = {};
network.mojom.ChunkedDataPipeGetter.$interfaceName = 'network.mojom.ChunkedDataPipeGetter';
network.mojom.ChunkedDataPipeGetter_GetSize_ParamsSpec = { $: {} };
network.mojom.ChunkedDataPipeGetter_GetSize_ResponseParamsSpec = { $: {} };
network.mojom.ChunkedDataPipeGetter_StartReading_ParamsSpec = { $: {} };

// Interface: ChunkedDataPipeGetter
mojo.internal.Struct(
    network.mojom.ChunkedDataPipeGetter_GetSize_ParamsSpec, 'network.mojom.ChunkedDataPipeGetter_GetSize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.ChunkedDataPipeGetter_GetSize_ResponseParamsSpec, 'network.mojom.ChunkedDataPipeGetter_GetSize_ResponseParams', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.ChunkedDataPipeGetter_StartReading_ParamsSpec, 'network.mojom.ChunkedDataPipeGetter_StartReading_Params', [
      mojo.internal.StructField('pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.ChunkedDataPipeGetterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ChunkedDataPipeGetterRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ChunkedDataPipeGetter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ChunkedDataPipeGetterPendingReceiver,
      handle);
    this.$ = new network.mojom.ChunkedDataPipeGetterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.ChunkedDataPipeGetterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSize() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.ChunkedDataPipeGetter_GetSize_ParamsSpec,
      network.mojom.ChunkedDataPipeGetter_GetSize_ResponseParamsSpec,
      [],
      false);
  }

  startReading(pipe) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.ChunkedDataPipeGetter_StartReading_ParamsSpec,
      null,
      [pipe],
      false);
  }

};

network.mojom.ChunkedDataPipeGetter.getRemote = function() {
  let remote = new network.mojom.ChunkedDataPipeGetterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ChunkedDataPipeGetter',
    'context');
  return remote.$;
};

network.mojom.ChunkedDataPipeGetterReceiver = class {
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
        
        // Try Method 0: GetSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.ChunkedDataPipeGetter_GetSize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StartReading
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.ChunkedDataPipeGetter_StartReading_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartReading (1)');
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
          const params = decoder.decodeStruct(network.mojom.ChunkedDataPipeGetter_GetSize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getSize');
          const result = this.impl.getSize();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.ChunkedDataPipeGetter_GetSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.ChunkedDataPipeGetter_StartReading_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startReading');
          const result = this.impl.startReading(params.pipe);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.ChunkedDataPipeGetterReceiver = network.mojom.ChunkedDataPipeGetterReceiver;

network.mojom.ChunkedDataPipeGetterPtr = network.mojom.ChunkedDataPipeGetterRemote;
network.mojom.ChunkedDataPipeGetterRequest = network.mojom.ChunkedDataPipeGetterPendingReceiver;

