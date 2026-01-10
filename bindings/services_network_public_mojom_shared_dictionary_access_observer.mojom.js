// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/shared_dictionary_access_observer.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};

network.mojom.TypeSpec = { $: mojo.internal.Enum() };
network.mojom.SharedDictionaryAccessDetailsSpec = { $: {} };
network.mojom.SharedDictionaryAccessObserver = {};
network.mojom.SharedDictionaryAccessObserver.$interfaceName = 'network.mojom.SharedDictionaryAccessObserver';
network.mojom.SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_ParamsSpec = { $: {} };
network.mojom.SharedDictionaryAccessObserver_Clone_ParamsSpec = { $: {} };

// Enum: Type
network.mojom.Type = {
  kRead: 0,
  kWrite: 1,
};

// Struct: SharedDictionaryAccessDetails
mojo.internal.Struct(
    network.mojom.SharedDictionaryAccessDetailsSpec, 'network.mojom.SharedDictionaryAccessDetails', [
      mojo.internal.StructField('kRead', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: SharedDictionaryAccessObserver
mojo.internal.Struct(
    network.mojom.SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_ParamsSpec, 'network.mojom.SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_Params', [
      mojo.internal.StructField('details', 0, 0, network.mojom.SharedDictionaryAccessDetailsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.SharedDictionaryAccessObserver_Clone_ParamsSpec, 'network.mojom.SharedDictionaryAccessObserver_Clone_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceRequest(network.mojom.SharedDictionaryAccessObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.SharedDictionaryAccessObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.SharedDictionaryAccessObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SharedDictionaryAccessObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.SharedDictionaryAccessObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.SharedDictionaryAccessObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.SharedDictionaryAccessObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSharedDictionaryAccessed(details) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_ParamsSpec,
      null,
      [details],
      false);
  }

  clone(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.SharedDictionaryAccessObserver_Clone_ParamsSpec,
      null,
      [observer],
      false);
  }

};

network.mojom.SharedDictionaryAccessObserver.getRemote = function() {
  let remote = new network.mojom.SharedDictionaryAccessObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SharedDictionaryAccessObserver',
    'context');
  return remote.$;
};

network.mojom.SharedDictionaryAccessObserverReceiver = class {
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onSharedDictionaryAccessed');
          const result = this.impl.onSharedDictionaryAccessed(params.details);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.SharedDictionaryAccessObserver_Clone_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.SharedDictionaryAccessObserverReceiver = network.mojom.SharedDictionaryAccessObserverReceiver;

network.mojom.SharedDictionaryAccessObserverPtr = network.mojom.SharedDictionaryAccessObserverRemote;
network.mojom.SharedDictionaryAccessObserverRequest = network.mojom.SharedDictionaryAccessObserverPendingReceiver;

