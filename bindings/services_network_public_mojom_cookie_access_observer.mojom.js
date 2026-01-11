// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cookie_access_observer.mojom
// Module: network.mojom

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
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceRequest(network.mojom.CookieAccessObserverRemote), null, false, 0, undefined),
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
  onCookiesAccessed(details) {
    return this.$.onCookiesAccessed(details);
  }
  clone(listener) {
    return this.$.clone(listener);
  }
};

network.mojom.CookieAccessObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CookieAccessObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onCookiesAccessed(details) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.CookieAccessObserver_OnCookiesAccessed_ParamsSpec,
      null,
      [details],
      false);
  }

  clone(listener) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('CookieAccessObserver', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.CookieAccessObserver_OnCookiesAccessed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.CookieAccessObserver_Clone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.CookieAccessObserver_OnCookiesAccessed_ParamsSpec.$.structSpec);
          const result = this.impl.onCookiesAccessed(params.details);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.CookieAccessObserver_Clone_ParamsSpec.$.structSpec);
          const result = this.impl.clone(params.listener);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.CookieAccessObserverReceiver = network.mojom.CookieAccessObserverReceiver;

network.mojom.CookieAccessObserverPtr = network.mojom.CookieAccessObserverRemote;
network.mojom.CookieAccessObserverRequest = network.mojom.CookieAccessObserverPendingReceiver;

