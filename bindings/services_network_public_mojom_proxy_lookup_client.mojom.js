// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/proxy_lookup_client.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var proxy_resolver = proxy_resolver || {};

network.mojom.ProxyLookupClient = {};
network.mojom.ProxyLookupClient.$interfaceName = 'network.mojom.ProxyLookupClient';
network.mojom.ProxyLookupClient_OnProxyLookupComplete_ParamsSpec = { $: {} };

// Interface: ProxyLookupClient
mojo.internal.Struct(
    network.mojom.ProxyLookupClient_OnProxyLookupComplete_ParamsSpec, 'network.mojom.ProxyLookupClient_OnProxyLookupComplete_Params', [
      mojo.internal.StructField('proxy_info', 0, 0, proxy_resolver.mojom.ProxyInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('net_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

network.mojom.ProxyLookupClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ProxyLookupClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ProxyLookupClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ProxyLookupClientPendingReceiver,
      handle);
    this.$ = new network.mojom.ProxyLookupClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onProxyLookupComplete(net_error, proxy_info) {
    return this.$.onProxyLookupComplete(net_error, proxy_info);
  }
};

network.mojom.ProxyLookupClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProxyLookupClient', [
      { explicit: null },
    ]);
  }

  onProxyLookupComplete(net_error, proxy_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.ProxyLookupClient_OnProxyLookupComplete_ParamsSpec,
      null,
      [net_error, proxy_info],
      false);
  }

};

network.mojom.ProxyLookupClient.getRemote = function() {
  let remote = new network.mojom.ProxyLookupClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ProxyLookupClient',
    'context');
  return remote.$;
};

network.mojom.ProxyLookupClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProxyLookupClient', [
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
             decoder.decodeStructInline(network.mojom.ProxyLookupClient_OnProxyLookupComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.ProxyLookupClient_OnProxyLookupComplete_ParamsSpec.$.structSpec);
          const result = this.impl.onProxyLookupComplete(params.net_error, params.proxy_info);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.ProxyLookupClientReceiver = network.mojom.ProxyLookupClientReceiver;

network.mojom.ProxyLookupClientPtr = network.mojom.ProxyLookupClientRemote;
network.mojom.ProxyLookupClientRequest = network.mojom.ProxyLookupClientPendingReceiver;

