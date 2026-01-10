// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/data_pipe_getter.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.DataPipeGetter = {};
network.mojom.DataPipeGetter.$interfaceName = 'network.mojom.DataPipeGetter';
network.mojom.DataPipeGetter_Read_ParamsSpec = { $: {} };
network.mojom.DataPipeGetter_Read_ResponseParamsSpec = { $: {} };
network.mojom.DataPipeGetter_Clone_ParamsSpec = { $: {} };

// Interface: DataPipeGetter
mojo.internal.Struct(
    network.mojom.DataPipeGetter_Read_ParamsSpec, 'network.mojom.DataPipeGetter_Read_Params', [
      mojo.internal.StructField('pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.DataPipeGetter_Read_ResponseParamsSpec, 'network.mojom.DataPipeGetter_Read_ResponseParams', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.DataPipeGetter_Clone_ParamsSpec, 'network.mojom.DataPipeGetter_Clone_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.DataPipeGetterSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.DataPipeGetterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.DataPipeGetterRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DataPipeGetter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.DataPipeGetterPendingReceiver,
      handle);
    this.$ = new network.mojom.DataPipeGetterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.DataPipeGetterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  read(pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.DataPipeGetter_Read_ParamsSpec,
      network.mojom.DataPipeGetter_Read_ResponseParamsSpec,
      [pipe],
      false);
  }

  clone(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.DataPipeGetter_Clone_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

network.mojom.DataPipeGetter.getRemote = function() {
  let remote = new network.mojom.DataPipeGetterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DataPipeGetter',
    'context');
  return remote.$;
};

network.mojom.DataPipeGetterReceiver = class {
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
        
        // Try Method 0: Read
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.DataPipeGetter_Read_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Read (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.DataPipeGetter_Clone_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Clone (1)');
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
          const params = decoder.decodeStruct(network.mojom.DataPipeGetter_Read_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.read');
          const result = this.impl.read(params.pipe);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.DataPipeGetter_Read_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DataPipeGetter_Clone_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.DataPipeGetterReceiver = network.mojom.DataPipeGetterReceiver;

network.mojom.DataPipeGetterPtr = network.mojom.DataPipeGetterRemote;
network.mojom.DataPipeGetterRequest = network.mojom.DataPipeGetterPendingReceiver;

