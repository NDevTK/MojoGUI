// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/auction_worklet_service.mojom
// Module: auction_worklet.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};
var sandbox = sandbox || {};
var network = network || {};
var blink = blink || {};
var url = url || {};

auction_worklet.mojom.BrowserSignalsSpec = { $: {} };
auction_worklet.mojom.AuctionWorkletPermissionsPolicyStateSpec = { $: {} };
auction_worklet.mojom.TrustedSignalsPublicKeySpec = { $: {} };
auction_worklet.mojom.LoadSellerWorkletClient = {};
auction_worklet.mojom.LoadSellerWorkletClient.$interfaceName = 'auction_worklet.mojom.LoadSellerWorkletClient';
auction_worklet.mojom.LoadSellerWorkletClient_SellerWorkletLoaded_ParamsSpec = { $: {} };
auction_worklet.mojom.AuctionWorkletService = {};
auction_worklet.mojom.AuctionWorkletService.$interfaceName = 'auction_worklet.mojom.AuctionWorkletService';
auction_worklet.mojom.AuctionWorkletService_SetTrustedSignalsCache_ParamsSpec = { $: {} };
auction_worklet.mojom.AuctionWorkletService_LoadBidderWorklet_ParamsSpec = { $: {} };
auction_worklet.mojom.AuctionWorkletService_LoadSellerWorklet_ParamsSpec = { $: {} };

// Struct: BrowserSignals
mojo.internal.Struct(
    auction_worklet.mojom.BrowserSignalsSpec, 'auction_worklet.mojom.BrowserSignals', [
      mojo.internal.StructField('top_frame_origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('seller', 8, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AuctionWorkletPermissionsPolicyState
mojo.internal.Struct(
    auction_worklet.mojom.AuctionWorkletPermissionsPolicyStateSpec, 'auction_worklet.mojom.AuctionWorkletPermissionsPolicyState', [
      mojo.internal.StructField('private_aggregation_allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shared_storage_allowed', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TrustedSignalsPublicKey
mojo.internal.Struct(
    auction_worklet.mojom.TrustedSignalsPublicKeySpec, 'auction_worklet.mojom.TrustedSignalsPublicKey', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: LoadSellerWorkletClient
mojo.internal.Struct(
    auction_worklet.mojom.LoadSellerWorkletClient_SellerWorkletLoaded_ParamsSpec, 'auction_worklet.mojom.LoadSellerWorkletClient_SellerWorkletLoaded_Params', [
      mojo.internal.StructField('trusted_signals_url_allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

auction_worklet.mojom.LoadSellerWorkletClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

auction_worklet.mojom.LoadSellerWorkletClientRemote = class {
  static get $interfaceName() {
    return 'auction_worklet.mojom.LoadSellerWorkletClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      auction_worklet.mojom.LoadSellerWorkletClientPendingReceiver,
      handle);
    this.$ = new auction_worklet.mojom.LoadSellerWorkletClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

auction_worklet.mojom.LoadSellerWorkletClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LoadSellerWorkletClient', [
      { explicit: null },
    ]);
  }

  sellerWorkletLoaded(trusted_signals_url_allowed) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      auction_worklet.mojom.LoadSellerWorkletClient_SellerWorkletLoaded_ParamsSpec,
      null,
      [trusted_signals_url_allowed],
      false);
  }

};

auction_worklet.mojom.LoadSellerWorkletClient.getRemote = function() {
  let remote = new auction_worklet.mojom.LoadSellerWorkletClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'auction_worklet.mojom.LoadSellerWorkletClient',
    'context');
  return remote.$;
};

auction_worklet.mojom.LoadSellerWorkletClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LoadSellerWorkletClient', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SellerWorkletLoaded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.LoadSellerWorkletClient_SellerWorkletLoaded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SellerWorkletLoaded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(auction_worklet.mojom.LoadSellerWorkletClient_SellerWorkletLoaded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sellerWorkletLoaded');
          const result = this.impl.sellerWorkletLoaded(params.trusted_signals_url_allowed);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

auction_worklet.mojom.LoadSellerWorkletClientReceiver = auction_worklet.mojom.LoadSellerWorkletClientReceiver;

auction_worklet.mojom.LoadSellerWorkletClientPtr = auction_worklet.mojom.LoadSellerWorkletClientRemote;
auction_worklet.mojom.LoadSellerWorkletClientRequest = auction_worklet.mojom.LoadSellerWorkletClientPendingReceiver;


// Interface: AuctionWorkletService
mojo.internal.Struct(
    auction_worklet.mojom.AuctionWorkletService_SetTrustedSignalsCache_ParamsSpec, 'auction_worklet.mojom.AuctionWorkletService_SetTrustedSignalsCache_Params', [
      mojo.internal.StructField('trusted_signals_cache', 0, 0, mojo.internal.InterfaceProxy(auction_worklet.mojom.TrustedSignalsCacheRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    auction_worklet.mojom.AuctionWorkletService_LoadBidderWorklet_ParamsSpec, 'auction_worklet.mojom.AuctionWorkletService_LoadBidderWorklet_Params', [
      mojo.internal.StructField('bidder_worklet', 0, 0, mojo.internal.InterfaceRequest(auction_worklet.mojom.BidderWorkletRemote), null, false, 0, undefined),
      mojo.internal.StructField('shared_storage_hosts', 8, 0, mojo.internal.Array(mojo.internal.InterfaceProxy(auction_worklet.mojom.AuctionSharedStorageHostRemote), false), null, true, 0, undefined),
      mojo.internal.StructField('url_loader_factory', 16, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('auction_network_events_handler', 24, 0, mojo.internal.InterfaceProxy(auction_worklet.mojom.AuctionNetworkEventsHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('script_source_load', 32, 0, auction_worklet.mojom.InProgressAuctionDownloadSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wasm_helper_load', 40, 0, auction_worklet.mojom.InProgressAuctionDownloadSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('trusted_bidding_signals_url', 48, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('trusted_bidding_signals_slot_size_param', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('top_window_origin', 64, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('permissions_policy_state', 72, 0, auction_worklet.mojom.AuctionWorkletPermissionsPolicyStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('public_key', 80, 0, auction_worklet.mojom.TrustedSignalsPublicKeySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('experiment_group_id_$value', 88, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'experiment_group_id_$flag', originalFieldName: 'experiment_group_id' }),
      mojo.internal.StructField('pause_for_debugger_on_start', 90, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('experiment_group_id_$flag', 90, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'experiment_group_id_$value', originalFieldName: 'experiment_group_id' }),
    ],
    [[0, 104]]);

mojo.internal.Struct(
    auction_worklet.mojom.AuctionWorkletService_LoadSellerWorklet_ParamsSpec, 'auction_worklet.mojom.AuctionWorkletService_LoadSellerWorklet_Params', [
      mojo.internal.StructField('seller_worklet', 0, 0, mojo.internal.InterfaceRequest(auction_worklet.mojom.SellerWorkletRemote), null, false, 0, undefined),
      mojo.internal.StructField('shared_storage_hosts', 8, 0, mojo.internal.Array(mojo.internal.InterfaceProxy(auction_worklet.mojom.AuctionSharedStorageHostRemote), false), null, true, 0, undefined),
      mojo.internal.StructField('url_loader_factory', 16, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('auction_network_events_handler', 24, 0, mojo.internal.InterfaceProxy(auction_worklet.mojom.AuctionNetworkEventsHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('script_source_load', 32, 0, auction_worklet.mojom.InProgressAuctionDownloadSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trusted_scoring_signals_url', 40, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('top_window_origin', 48, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('permissions_policy_state', 56, 0, auction_worklet.mojom.AuctionWorkletPermissionsPolicyStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('public_key', 64, 0, auction_worklet.mojom.TrustedSignalsPublicKeySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('load_seller_worklet_client', 72, 0, mojo.internal.InterfaceProxy(auction_worklet.mojom.LoadSellerWorkletClientSpec), null, true, 0, undefined),
      mojo.internal.StructField('experiment_group_id_$value', 80, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'experiment_group_id_$flag', originalFieldName: 'experiment_group_id' }),
      mojo.internal.StructField('pause_for_debugger_on_start', 82, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('experiment_group_id_$flag', 82, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'experiment_group_id_$value', originalFieldName: 'experiment_group_id' }),
      mojo.internal.StructField('send_creative_scanning_metadata_$flag', 82, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'send_creative_scanning_metadata_$value', originalFieldName: 'send_creative_scanning_metadata' }),
      mojo.internal.StructField('send_creative_scanning_metadata_$value', 82, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'send_creative_scanning_metadata_$flag', originalFieldName: 'send_creative_scanning_metadata' }),
    ],
    [[0, 96]]);

auction_worklet.mojom.AuctionWorkletServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

auction_worklet.mojom.AuctionWorkletServiceRemote = class {
  static get $interfaceName() {
    return 'auction_worklet.mojom.AuctionWorkletService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      auction_worklet.mojom.AuctionWorkletServicePendingReceiver,
      handle);
    this.$ = new auction_worklet.mojom.AuctionWorkletServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

auction_worklet.mojom.AuctionWorkletServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AuctionWorkletService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setTrustedSignalsCache(trusted_signals_cache) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      auction_worklet.mojom.AuctionWorkletService_SetTrustedSignalsCache_ParamsSpec,
      null,
      [trusted_signals_cache],
      false);
  }

  loadBidderWorklet(bidder_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, wasm_helper_load, trusted_bidding_signals_url, trusted_bidding_signals_slot_size_param, top_window_origin, permissions_policy_state, experiment_group_id, public_key) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      auction_worklet.mojom.AuctionWorkletService_LoadBidderWorklet_ParamsSpec,
      null,
      [bidder_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, wasm_helper_load, trusted_bidding_signals_url, trusted_bidding_signals_slot_size_param, top_window_origin, permissions_policy_state, experiment_group_id, public_key],
      false);
  }

  loadSellerWorklet(seller_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, trusted_scoring_signals_url, top_window_origin, permissions_policy_state, experiment_group_id, send_creative_scanning_metadata, public_key, load_seller_worklet_client) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      auction_worklet.mojom.AuctionWorkletService_LoadSellerWorklet_ParamsSpec,
      null,
      [seller_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, trusted_scoring_signals_url, top_window_origin, permissions_policy_state, experiment_group_id, send_creative_scanning_metadata, public_key, load_seller_worklet_client],
      false);
  }

};

auction_worklet.mojom.AuctionWorkletService.getRemote = function() {
  let remote = new auction_worklet.mojom.AuctionWorkletServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'auction_worklet.mojom.AuctionWorkletService',
    'context');
  return remote.$;
};

auction_worklet.mojom.AuctionWorkletServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AuctionWorkletService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetTrustedSignalsCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.AuctionWorkletService_SetTrustedSignalsCache_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTrustedSignalsCache (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: LoadBidderWorklet
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.AuctionWorkletService_LoadBidderWorklet_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadBidderWorklet (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: LoadSellerWorklet
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.AuctionWorkletService_LoadSellerWorklet_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadSellerWorklet (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(auction_worklet.mojom.AuctionWorkletService_SetTrustedSignalsCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTrustedSignalsCache');
          const result = this.impl.setTrustedSignalsCache(params.trusted_signals_cache);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(auction_worklet.mojom.AuctionWorkletService_LoadBidderWorklet_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadBidderWorklet');
          const result = this.impl.loadBidderWorklet(params.bidder_worklet, params.shared_storage_hosts, params.pause_for_debugger_on_start, params.url_loader_factory, params.auction_network_events_handler, params.script_source_load, params.wasm_helper_load, params.trusted_bidding_signals_url, params.trusted_bidding_signals_slot_size_param, params.top_window_origin, params.permissions_policy_state, params.experiment_group_id, params.public_key);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(auction_worklet.mojom.AuctionWorkletService_LoadSellerWorklet_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadSellerWorklet');
          const result = this.impl.loadSellerWorklet(params.seller_worklet, params.shared_storage_hosts, params.pause_for_debugger_on_start, params.url_loader_factory, params.auction_network_events_handler, params.script_source_load, params.trusted_scoring_signals_url, params.top_window_origin, params.permissions_policy_state, params.experiment_group_id, params.send_creative_scanning_metadata, params.public_key, params.load_seller_worklet_client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

auction_worklet.mojom.AuctionWorkletServiceReceiver = auction_worklet.mojom.AuctionWorkletServiceReceiver;

auction_worklet.mojom.AuctionWorkletServicePtr = auction_worklet.mojom.AuctionWorkletServiceRemote;
auction_worklet.mojom.AuctionWorkletServiceRequest = auction_worklet.mojom.AuctionWorkletServicePendingReceiver;

