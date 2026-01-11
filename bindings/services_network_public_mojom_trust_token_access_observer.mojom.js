// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/trust_token_access_observer.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};

network.mojom.TrustTokenAccessDetailsSpec = { $: {} };
network.mojom.TrustTokenIssuanceDetailsSpec = { $: {} };
network.mojom.TrustTokenRedemptionDetailsSpec = { $: {} };
network.mojom.TrustTokenSigningDetailsSpec = { $: {} };
network.mojom.TrustTokenAccessObserver = {};
network.mojom.TrustTokenAccessObserver.$interfaceName = 'network.mojom.TrustTokenAccessObserver';
network.mojom.TrustTokenAccessObserver_OnTrustTokensAccessed_ParamsSpec = { $: {} };
network.mojom.TrustTokenAccessObserver_Clone_ParamsSpec = { $: {} };

// Union: TrustTokenAccessDetails
mojo.internal.Union(
    network.mojom.TrustTokenAccessDetailsSpec, 'network.mojom.TrustTokenAccessDetails', {
      'issuance': {
        'ordinal': 0,
        'type': network.mojom.TrustTokenIssuanceDetailsSpec.$,
        'nullable': false,
      },
      'redemption': {
        'ordinal': 1,
        'type': network.mojom.TrustTokenRedemptionDetailsSpec.$,
        'nullable': false,
      },
      'signing': {
        'ordinal': 2,
        'type': network.mojom.TrustTokenSigningDetailsSpec.$,
        'nullable': false,
      },
    });

// Struct: TrustTokenIssuanceDetails
mojo.internal.Struct(
    network.mojom.TrustTokenIssuanceDetailsSpec, 'network.mojom.TrustTokenIssuanceDetails', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('issuer', 8, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('blocked', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TrustTokenRedemptionDetails
mojo.internal.Struct(
    network.mojom.TrustTokenRedemptionDetailsSpec, 'network.mojom.TrustTokenRedemptionDetails', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('issuer', 8, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('blocked', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TrustTokenSigningDetails
mojo.internal.Struct(
    network.mojom.TrustTokenSigningDetailsSpec, 'network.mojom.TrustTokenSigningDetails', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('blocked', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: TrustTokenAccessObserver
mojo.internal.Struct(
    network.mojom.TrustTokenAccessObserver_OnTrustTokensAccessed_ParamsSpec, 'network.mojom.TrustTokenAccessObserver_OnTrustTokensAccessed_Params', [
      mojo.internal.StructField('details', 0, 0, network.mojom.TrustTokenAccessDetailsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TrustTokenAccessObserver_Clone_ParamsSpec, 'network.mojom.TrustTokenAccessObserver_Clone_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceRequest(network.mojom.TrustTokenAccessObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.TrustTokenAccessObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.TrustTokenAccessObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TrustTokenAccessObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.TrustTokenAccessObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.TrustTokenAccessObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onTrustTokensAccessed(details) {
    return this.$.onTrustTokensAccessed(details);
  }
  clone(listener) {
    return this.$.clone(listener);
  }
};

network.mojom.TrustTokenAccessObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TrustTokenAccessObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onTrustTokensAccessed(details) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.TrustTokenAccessObserver_OnTrustTokensAccessed_ParamsSpec,
      null,
      [details],
      false);
  }

  clone(listener) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.TrustTokenAccessObserver_Clone_ParamsSpec,
      null,
      [listener],
      false);
  }

};

network.mojom.TrustTokenAccessObserver.getRemote = function() {
  let remote = new network.mojom.TrustTokenAccessObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TrustTokenAccessObserver',
    'context');
  return remote.$;
};

network.mojom.TrustTokenAccessObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TrustTokenAccessObserver', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.TrustTokenAccessObserver_OnTrustTokensAccessed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.TrustTokenAccessObserver_Clone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.TrustTokenAccessObserver_OnTrustTokensAccessed_ParamsSpec.$.structSpec);
          const result = this.impl.onTrustTokensAccessed(params.details);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.TrustTokenAccessObserver_Clone_ParamsSpec.$.structSpec);
          const result = this.impl.clone(params.listener);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

network.mojom.TrustTokenAccessObserverReceiver = network.mojom.TrustTokenAccessObserverReceiver;

network.mojom.TrustTokenAccessObserverPtr = network.mojom.TrustTokenAccessObserverRemote;
network.mojom.TrustTokenAccessObserverRequest = network.mojom.TrustTokenAccessObserverPendingReceiver;

