// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/feature_update.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var mojo_base = mojo_base || {};

chromecast.mojom.FeatureUpdateObserver = {};
chromecast.mojom.FeatureUpdateObserver.$interfaceName = 'chromecast.mojom.FeatureUpdateObserver';
chromecast.mojom.FeatureUpdateObserver_OnFeaturesUpdated_ParamsSpec = { $: {} };
chromecast.mojom.FeatureUpdateService = {};
chromecast.mojom.FeatureUpdateService.$interfaceName = 'chromecast.mojom.FeatureUpdateService';
chromecast.mojom.FeatureUpdateService_RegisterFeatureUpdateObserver_ParamsSpec = { $: {} };

// Interface: FeatureUpdateObserver
mojo.internal.Struct(
    chromecast.mojom.FeatureUpdateObserver_OnFeaturesUpdated_ParamsSpec, 'chromecast.mojom.FeatureUpdateObserver_OnFeaturesUpdated_Params', [
      mojo.internal.StructField('features', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.FeatureUpdateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.FeatureUpdateObserverRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.FeatureUpdateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.FeatureUpdateObserverPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.FeatureUpdateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.FeatureUpdateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFeaturesUpdated(features) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.FeatureUpdateObserver_OnFeaturesUpdated_ParamsSpec,
      null,
      [features],
      false);
  }

};

chromecast.mojom.FeatureUpdateObserver.getRemote = function() {
  let remote = new chromecast.mojom.FeatureUpdateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.FeatureUpdateObserver',
    'context');
  return remote.$;
};

chromecast.mojom.FeatureUpdateObserverReceiver = class {
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
        
        // Try Method 0: OnFeaturesUpdated
        try {
             decoder.decodeStruct(chromecast.mojom.FeatureUpdateObserver_OnFeaturesUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFeaturesUpdated (0)');
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
          const params = decoder.decodeStruct(chromecast.mojom.FeatureUpdateObserver_OnFeaturesUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFeaturesUpdated');
          const result = this.impl.onFeaturesUpdated(params.features);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.mojom.FeatureUpdateObserverReceiver = chromecast.mojom.FeatureUpdateObserverReceiver;

chromecast.mojom.FeatureUpdateObserverPtr = chromecast.mojom.FeatureUpdateObserverRemote;
chromecast.mojom.FeatureUpdateObserverRequest = chromecast.mojom.FeatureUpdateObserverPendingReceiver;


// Interface: FeatureUpdateService
mojo.internal.Struct(
    chromecast.mojom.FeatureUpdateService_RegisterFeatureUpdateObserver_ParamsSpec, 'chromecast.mojom.FeatureUpdateService_RegisterFeatureUpdateObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.FeatureUpdateObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.FeatureUpdateServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.FeatureUpdateServiceRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.FeatureUpdateService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.FeatureUpdateServicePendingReceiver,
      handle);
    this.$ = new chromecast.mojom.FeatureUpdateServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.FeatureUpdateServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerFeatureUpdateObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.FeatureUpdateService_RegisterFeatureUpdateObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

};

chromecast.mojom.FeatureUpdateService.getRemote = function() {
  let remote = new chromecast.mojom.FeatureUpdateServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.FeatureUpdateService',
    'context');
  return remote.$;
};

chromecast.mojom.FeatureUpdateServiceReceiver = class {
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
        
        // Try Method 0: RegisterFeatureUpdateObserver
        try {
             decoder.decodeStruct(chromecast.mojom.FeatureUpdateService_RegisterFeatureUpdateObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterFeatureUpdateObserver (0)');
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
          const params = decoder.decodeStruct(chromecast.mojom.FeatureUpdateService_RegisterFeatureUpdateObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.registerFeatureUpdateObserver');
          const result = this.impl.registerFeatureUpdateObserver(params.observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.mojom.FeatureUpdateServiceReceiver = chromecast.mojom.FeatureUpdateServiceReceiver;

chromecast.mojom.FeatureUpdateServicePtr = chromecast.mojom.FeatureUpdateServiceRemote;
chromecast.mojom.FeatureUpdateServiceRequest = chromecast.mojom.FeatureUpdateServicePendingReceiver;

