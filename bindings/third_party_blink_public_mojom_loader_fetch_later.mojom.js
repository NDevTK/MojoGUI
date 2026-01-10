// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/fetch_later.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var network = network || {};

blink.mojom.FetchLaterLoaderFactory = {};
blink.mojom.FetchLaterLoaderFactory.$interfaceName = 'blink.mojom.FetchLaterLoaderFactory';
blink.mojom.FetchLaterLoaderFactory_CreateLoader_ParamsSpec = { $: {} };
blink.mojom.FetchLaterLoaderFactory_Clone_ParamsSpec = { $: {} };
blink.mojom.FetchLaterLoader = {};
blink.mojom.FetchLaterLoader.$interfaceName = 'blink.mojom.FetchLaterLoader';
blink.mojom.FetchLaterLoader_SendNow_ParamsSpec = { $: {} };
blink.mojom.FetchLaterLoader_Cancel_ParamsSpec = { $: {} };

// Interface: FetchLaterLoaderFactory
mojo.internal.Struct(
    blink.mojom.FetchLaterLoaderFactory_CreateLoader_ParamsSpec, 'blink.mojom.FetchLaterLoaderFactory_CreateLoader_Params', [
      mojo.internal.StructField('loader', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('request', 8, 0, network.mojom.URLRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 16, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('options', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.FetchLaterLoaderFactory_Clone_ParamsSpec, 'blink.mojom.FetchLaterLoaderFactory_Clone_Params', [
      mojo.internal.StructField('factory', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.FetchLaterLoaderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FetchLaterLoaderFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FetchLaterLoaderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FetchLaterLoaderFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.FetchLaterLoaderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FetchLaterLoaderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createLoader(loader, request_id, options, request, traffic_annotation) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FetchLaterLoaderFactory_CreateLoader_ParamsSpec,
      null,
      [loader, request_id, options, request, traffic_annotation],
      false);
  }

  clone(factory) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FetchLaterLoaderFactory_Clone_ParamsSpec,
      null,
      [factory],
      false);
  }

};

blink.mojom.FetchLaterLoaderFactory.getRemote = function() {
  let remote = new blink.mojom.FetchLaterLoaderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FetchLaterLoaderFactory',
    'context');
  return remote.$;
};

blink.mojom.FetchLaterLoaderFactoryReceiver = class {
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
        
        // Try Method 0: CreateLoader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FetchLaterLoaderFactory_CreateLoader_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateLoader (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FetchLaterLoaderFactory_Clone_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(blink.mojom.FetchLaterLoaderFactory_CreateLoader_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createLoader');
          const result = this.impl.createLoader(params.loader, params.request_id, params.options, params.request, params.traffic_annotation);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FetchLaterLoaderFactory_Clone_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.factory);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.FetchLaterLoaderFactoryReceiver = blink.mojom.FetchLaterLoaderFactoryReceiver;

blink.mojom.FetchLaterLoaderFactoryPtr = blink.mojom.FetchLaterLoaderFactoryRemote;
blink.mojom.FetchLaterLoaderFactoryRequest = blink.mojom.FetchLaterLoaderFactoryPendingReceiver;


// Interface: FetchLaterLoader
mojo.internal.Struct(
    blink.mojom.FetchLaterLoader_SendNow_ParamsSpec, 'blink.mojom.FetchLaterLoader_SendNow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FetchLaterLoader_Cancel_ParamsSpec, 'blink.mojom.FetchLaterLoader_Cancel_Params', [
    ],
    [[0, 8]]);

blink.mojom.FetchLaterLoaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FetchLaterLoaderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FetchLaterLoader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FetchLaterLoaderPendingReceiver,
      handle);
    this.$ = new blink.mojom.FetchLaterLoaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FetchLaterLoaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendNow() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FetchLaterLoader_SendNow_ParamsSpec,
      null,
      [],
      false);
  }

  cancel() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FetchLaterLoader_Cancel_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.FetchLaterLoader.getRemote = function() {
  let remote = new blink.mojom.FetchLaterLoaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FetchLaterLoader',
    'context');
  return remote.$;
};

blink.mojom.FetchLaterLoaderReceiver = class {
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
        
        // Try Method 0: SendNow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FetchLaterLoader_SendNow_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNow (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Cancel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FetchLaterLoader_Cancel_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Cancel (1)');
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
          const params = decoder.decodeStruct(blink.mojom.FetchLaterLoader_SendNow_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sendNow');
          const result = this.impl.sendNow();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FetchLaterLoader_Cancel_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancel');
          const result = this.impl.cancel();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.FetchLaterLoaderReceiver = blink.mojom.FetchLaterLoaderReceiver;

blink.mojom.FetchLaterLoaderPtr = blink.mojom.FetchLaterLoaderRemote;
blink.mojom.FetchLaterLoaderRequest = blink.mojom.FetchLaterLoaderPendingReceiver;

