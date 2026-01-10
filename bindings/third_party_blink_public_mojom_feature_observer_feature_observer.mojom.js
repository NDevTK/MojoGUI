// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/feature_observer/feature_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ObservedFeatureTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.ObservedFeature = {};
blink.mojom.ObservedFeature.$interfaceName = 'blink.mojom.ObservedFeature';
blink.mojom.FeatureObserver = {};
blink.mojom.FeatureObserver.$interfaceName = 'blink.mojom.FeatureObserver';
blink.mojom.FeatureObserver_Register_ParamsSpec = { $: {} };

// Enum: ObservedFeatureType
blink.mojom.ObservedFeatureType = {
  kWebLock: 0,
  kBlockingIndexedDBLock: 1,
};

// Interface: ObservedFeature
blink.mojom.ObservedFeaturePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ObservedFeatureRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ObservedFeature';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ObservedFeaturePendingReceiver,
      handle);
    this.$ = new blink.mojom.ObservedFeatureRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ObservedFeatureRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

blink.mojom.ObservedFeature.getRemote = function() {
  let remote = new blink.mojom.ObservedFeatureRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ObservedFeature',
    'context');
  return remote.$;
};

blink.mojom.ObservedFeatureReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
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
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.ObservedFeatureReceiver = blink.mojom.ObservedFeatureReceiver;

blink.mojom.ObservedFeaturePtr = blink.mojom.ObservedFeatureRemote;
blink.mojom.ObservedFeatureRequest = blink.mojom.ObservedFeaturePendingReceiver;


// Interface: FeatureObserver
mojo.internal.Struct(
    blink.mojom.FeatureObserver_Register_ParamsSpec, 'blink.mojom.FeatureObserver_Register_Params', [
      mojo.internal.StructField('feature', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.ObservedFeatureSpec), null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, blink.mojom.ObservedFeatureTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.FeatureObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FeatureObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FeatureObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FeatureObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.FeatureObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FeatureObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  register(feature, type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FeatureObserver_Register_ParamsSpec,
      null,
      [feature, type],
      false);
  }

};

blink.mojom.FeatureObserver.getRemote = function() {
  let remote = new blink.mojom.FeatureObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FeatureObserver',
    'context');
  return remote.$;
};

blink.mojom.FeatureObserverReceiver = class {
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
        
        // Try Method 0: Register
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FeatureObserver_Register_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Register (0)');
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
          const params = decoder.decodeStruct(blink.mojom.FeatureObserver_Register_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.register');
          const result = this.impl.register(params.feature, params.type);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.FeatureObserverReceiver = blink.mojom.FeatureObserverReceiver;

blink.mojom.FeatureObserverPtr = blink.mojom.FeatureObserverRemote;
blink.mojom.FeatureObserverRequest = blink.mojom.FeatureObserverPendingReceiver;

