// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/trust_token_access_observer.mojom
// Module: network.mojom

'use strict';

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
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceRequest(network.mojom.TrustTokenAccessObserverSpec), null, false, 0, undefined),
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
};

network.mojom.TrustTokenAccessObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTrustTokensAccessed(details) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.TrustTokenAccessObserver_OnTrustTokensAccessed_ParamsSpec,
      null,
      [details],
      false);
  }

  clone(listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
        
        // Try Method 0: OnTrustTokensAccessed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.TrustTokenAccessObserver_OnTrustTokensAccessed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTrustTokensAccessed (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.TrustTokenAccessObserver_Clone_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(network.mojom.TrustTokenAccessObserver_OnTrustTokensAccessed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTrustTokensAccessed');
          const result = this.impl.onTrustTokensAccessed(params.details);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.TrustTokenAccessObserver_Clone_ParamsSpec.$, message.header.headerSize);
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

network.mojom.TrustTokenAccessObserverReceiver = network.mojom.TrustTokenAccessObserverReceiver;

network.mojom.TrustTokenAccessObserverPtr = network.mojom.TrustTokenAccessObserverRemote;
network.mojom.TrustTokenAccessObserverRequest = network.mojom.TrustTokenAccessObserverPendingReceiver;

