// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cookie_access_observer.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};

network.mojom.TypeSpec = { $: mojo.internal.Enum() };
network.mojom.CookieAccessDetailsSpec = { $: {} };
network.mojom.CookieAccessObserver = {};
network.mojom.CookieAccessObserver.$interfaceName = 'network.mojom.CookieAccessObserver';
network.mojom.CookieAccessObserver_OnCookiesAccessed_ParamsSpec = { $: {} };
network.mojom.CookieAccessObserver_Clone_ParamsSpec = { $: {} };

// Enum: Type
network.mojom.Type = {
  kRead: 0,
  kChange: 1,
};

// Struct: CookieAccessDetails
mojo.internal.Struct(
    network.mojom.CookieAccessDetailsSpec, 'network.mojom.CookieAccessDetails', [
      mojo.internal.StructField('kRead', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: CookieAccessObserver
mojo.internal.Struct(
    network.mojom.CookieAccessObserver_OnCookiesAccessed_ParamsSpec, 'network.mojom.CookieAccessObserver_OnCookiesAccessed_Params', [
      mojo.internal.StructField('details', 0, 0, mojo.internal.Array(network.mojom.CookieAccessDetailsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.CookieAccessObserver_Clone_ParamsSpec, 'network.mojom.CookieAccessObserver_Clone_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceRequest(network.mojom.CookieAccessObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.CookieAccessObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.CookieAccessObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CookieAccessObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.CookieAccessObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.CookieAccessObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.CookieAccessObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCookiesAccessed(details) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.CookieAccessObserver_OnCookiesAccessed_ParamsSpec,
      null,
      [details],
      false);
  }

  clone(listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.CookieAccessObserver_Clone_ParamsSpec,
      null,
      [listener],
      false);
  }

};

network.mojom.CookieAccessObserver.getRemote = function() {
  let remote = new network.mojom.CookieAccessObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CookieAccessObserver',
    'context');
  return remote.$;
};

network.mojom.CookieAccessObserverReceiver = class {
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
        
        // Try Method 0: OnCookiesAccessed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.CookieAccessObserver_OnCookiesAccessed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCookiesAccessed (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.CookieAccessObserver_Clone_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(network.mojom.CookieAccessObserver_OnCookiesAccessed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onCookiesAccessed');
          const result = this.impl.onCookiesAccessed(params.details);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CookieAccessObserver_Clone_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.listener);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.CookieAccessObserverReceiver = network.mojom.CookieAccessObserverReceiver;

network.mojom.CookieAccessObserverPtr = network.mojom.CookieAccessObserverRemote;
network.mojom.CookieAccessObserverRequest = network.mojom.CookieAccessObserverPendingReceiver;

