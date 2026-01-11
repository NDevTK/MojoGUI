// Auto-generated MojoJS binding
// Source: chromium_src/components/network_hints/common/network_hints.mojom
// Module: network_hints.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network_hints = network_hints || {};
network_hints.mojom = network_hints.mojom || {};
var url = url || {};

network_hints.mojom.NetworkHintsHandler = {};
network_hints.mojom.NetworkHintsHandler.$interfaceName = 'network_hints.mojom.NetworkHintsHandler';
network_hints.mojom.NetworkHintsHandler_PrefetchDNS_ParamsSpec = { $: {} };
network_hints.mojom.NetworkHintsHandler_Preconnect_ParamsSpec = { $: {} };

// Interface: NetworkHintsHandler
mojo.internal.Struct(
    network_hints.mojom.NetworkHintsHandler_PrefetchDNS_ParamsSpec, 'network_hints.mojom.NetworkHintsHandler_PrefetchDNS_Params', [
      mojo.internal.StructField('url_list', 0, 0, mojo.internal.Array(url.mojom.SchemeHostPortSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network_hints.mojom.NetworkHintsHandler_Preconnect_ParamsSpec, 'network_hints.mojom.NetworkHintsHandler_Preconnect_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.SchemeHostPortSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allow_credentials', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

network_hints.mojom.NetworkHintsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network_hints.mojom.NetworkHintsHandlerRemote = class {
  static get $interfaceName() {
    return 'network_hints.mojom.NetworkHintsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network_hints.mojom.NetworkHintsHandlerPendingReceiver,
      handle);
    this.$ = new network_hints.mojom.NetworkHintsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  prefetchDNS(url_list) {
    return this.$.prefetchDNS(url_list);
  }
  preconnect(url, allow_credentials) {
    return this.$.preconnect(url, allow_credentials);
  }
};

network_hints.mojom.NetworkHintsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkHintsHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  prefetchDNS(url_list) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network_hints.mojom.NetworkHintsHandler_PrefetchDNS_ParamsSpec,
      null,
      [url_list],
      false);
  }

  preconnect(url, allow_credentials) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network_hints.mojom.NetworkHintsHandler_Preconnect_ParamsSpec,
      null,
      [url, allow_credentials],
      false);
  }

};

network_hints.mojom.NetworkHintsHandler.getRemote = function() {
  let remote = new network_hints.mojom.NetworkHintsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network_hints.mojom.NetworkHintsHandler',
    'context');
  return remote.$;
};

network_hints.mojom.NetworkHintsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetworkHintsHandler', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network_hints.mojom.NetworkHintsHandler_PrefetchDNS_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network_hints.mojom.NetworkHintsHandler_Preconnect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network_hints.mojom.NetworkHintsHandler_PrefetchDNS_ParamsSpec.$.structSpec);
          const result = this.impl.prefetchDNS(params.url_list);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network_hints.mojom.NetworkHintsHandler_Preconnect_ParamsSpec.$.structSpec);
          const result = this.impl.preconnect(params.url, params.allow_credentials);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network_hints.mojom.NetworkHintsHandlerReceiver = network_hints.mojom.NetworkHintsHandlerReceiver;

network_hints.mojom.NetworkHintsHandlerPtr = network_hints.mojom.NetworkHintsHandlerRemote;
network_hints.mojom.NetworkHintsHandlerRequest = network_hints.mojom.NetworkHintsHandlerPendingReceiver;

