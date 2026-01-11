// Auto-generated MojoJS binding
 // Source: chromium_src/ash/webui/diagnostics_ui/mojom/network_health_provider.mojom
 // Module: ash.diagnostics.mojom

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

         const p = window.mojoVersion.split('.');
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.diagnostics = mojo.internal.bindings.ash.diagnostics || {};
mojo.internal.bindings.ash.diagnostics.mojom = mojo.internal.bindings.ash.diagnostics.mojom || {};

mojo.internal.bindings.ash.diagnostics.mojom.AuthenticationTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.diagnostics.mojom.NetworkTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.diagnostics.mojom.RoamingStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.diagnostics.mojom.LockTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.diagnostics.mojom.SecurityTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.diagnostics.mojom.NetworkTypePropertiesSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.IPConfigPropertiesSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.CellularStatePropertiesSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.EthernetStatePropertiesSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.WiFiStatePropertiesSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.NetworkSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserver = {};
mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserver.$interfaceName = 'ash.diagnostics.mojom.NetworkListObserver';
mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserver_OnNetworkListChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserver = {};
mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserver.$interfaceName = 'ash.diagnostics.mojom.NetworkStateObserver';
mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserver_OnNetworkStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProvider = {};
mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProvider.$interfaceName = 'ash.diagnostics.mojom.NetworkHealthProvider';
mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetworkList_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetwork_ParamsSpec = { $: {} };

// Enum: AuthenticationType
mojo.internal.bindings.ash.diagnostics.mojom.AuthenticationType = {
  kNone: 0,
  k8021x: 1,
};

// Enum: NetworkState
mojo.internal.bindings.ash.diagnostics.mojom.NetworkState = {
  kOnline: 0,
  kConnected: 1,
  kPortal: 2,
  kConnecting: 3,
  kNotConnected: 4,
  kDisabled: 5,
};

// Enum: NetworkType
mojo.internal.bindings.ash.diagnostics.mojom.NetworkType = {
  kCellular: 0,
  kEthernet: 1,
  kWiFi: 2,
  kUnsupported: 3,
};

// Enum: RoamingState
mojo.internal.bindings.ash.diagnostics.mojom.RoamingState = {
  kNone: 0,
  kRoaming: 1,
  kHome: 2,
};

// Enum: LockType
mojo.internal.bindings.ash.diagnostics.mojom.LockType = {
  kNone: 0,
  kSimPin: 1,
  kSimPuk: 2,
  kNetworkPin: 3,
};

// Enum: SecurityType
mojo.internal.bindings.ash.diagnostics.mojom.SecurityType = {
  kNone: 0,
  kWep8021x: 1,
  kWepPsk: 2,
  kWpaEap: 3,
  kWpaPsk: 4,
};

// Union: NetworkTypeProperties
mojo.internal.Union(
    mojo.internal.bindings.ash.diagnostics.mojom.NetworkTypePropertiesSpec, 'ash.diagnostics.mojom.NetworkTypeProperties', {
      'arg_cellular': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.ash.diagnostics.mojom.CellularStatePropertiesSpec.$,
        'nullable': false,
      },
      'arg_ethernet': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.ash.diagnostics.mojom.EthernetStatePropertiesSpec.$,
        'nullable': false,
      },
      'arg_wifi': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.internal.bindings.ash.diagnostics.mojom.WiFiStatePropertiesSpec.$,
        'nullable': false,
      },
    });

// Struct: IPConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.IPConfigPropertiesSpec, 'ash.diagnostics.mojom.IPConfigProperties', [
      mojo.internal.StructField('arg_name_servers', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_gateway', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_ip_address', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_routing_prefix', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CellularStateProperties
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.CellularStatePropertiesSpec, 'ash.diagnostics.mojom.CellularStateProperties', [
      mojo.internal.StructField('arg_iccid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_eid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_technology', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_roaming_state', 24, 0, mojo.internal.bindings.mojo.internal.bindings.ash.diagnostics.mojom.RoamingStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_lock_type', 32, 0, mojo.internal.bindings.mojo.internal.bindings.ash.diagnostics.mojom.LockTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_signal_strength', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_roaming', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sim_locked', 44, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: EthernetStateProperties
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.EthernetStatePropertiesSpec, 'ash.diagnostics.mojom.EthernetStateProperties', [
      mojo.internal.StructField('arg_authentication', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.diagnostics.mojom.AuthenticationTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WiFiStateProperties
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.WiFiStatePropertiesSpec, 'ash.diagnostics.mojom.WiFiStateProperties', [
      mojo.internal.StructField('arg_ssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_bssid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_security', 16, 0, mojo.internal.bindings.mojo.internal.bindings.ash.diagnostics.mojom.SecurityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_signal_strength', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_frequency', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Network
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.NetworkSpec, 'ash.diagnostics.mojom.Network', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.mojo.internal.bindings.ash.diagnostics.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type_properties', 16, 0, mojo.internal.bindings.ash.diagnostics.mojom.NetworkTypePropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_observer_guid', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_mac_address', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_ip_config', 48, 0, mojo.internal.bindings.mojo.internal.bindings.ash.diagnostics.mojom.IPConfigPropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 64]]);

// Interface: NetworkListObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserver_OnNetworkListChanged_ParamsSpec, 'ash.diagnostics.mojom.NetworkListObserver_OnNetworkListChanged_Params', [
      mojo.internal.StructField('arg_network_guids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_active_guid', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.NetworkListObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onNetworkListChanged(arg_network_guids, arg_active_guid) {
    return this.$.onNetworkListChanged(arg_network_guids, arg_active_guid);
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkListObserver', [
      { explicit: null },
    ]);
  }

  onNetworkListChanged(arg_network_guids, arg_active_guid) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserver_OnNetworkListChanged_ParamsSpec,
      null,
      [arg_network_guids, arg_active_guid],
      false);
  }

};

mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.NetworkListObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetworkListObserver', [
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
        
        // Try Method 0: OnNetworkListChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserver_OnNetworkListChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetworkListChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserver_OnNetworkListChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNetworkListChanged');
          const result = this.impl.onNetworkListChanged(params.arg_network_guids, params.arg_active_guid);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserverReceiver = mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserverReceiver;

mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserverPtr = mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserverRemote;
mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserverRequest = mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserverPendingReceiver;


// Interface: NetworkStateObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserver_OnNetworkStateChanged_ParamsSpec, 'ash.diagnostics.mojom.NetworkStateObserver_OnNetworkStateChanged_Params', [
      mojo.internal.StructField('arg_network', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.diagnostics.mojom.NetworkSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.NetworkStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onNetworkStateChanged(arg_network) {
    return this.$.onNetworkStateChanged(arg_network);
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkStateObserver', [
      { explicit: null },
    ]);
  }

  onNetworkStateChanged(arg_network) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserver_OnNetworkStateChanged_ParamsSpec,
      null,
      [arg_network],
      false);
  }

};

mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.NetworkStateObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetworkStateObserver', [
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
        
        // Try Method 0: OnNetworkStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserver_OnNetworkStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetworkStateChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserver_OnNetworkStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNetworkStateChanged');
          const result = this.impl.onNetworkStateChanged(params.arg_network);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserverReceiver = mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserverReceiver;

mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserverPtr = mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserverRemote;
mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserverRequest = mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserverPendingReceiver;


// Interface: NetworkHealthProvider
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetworkList_ParamsSpec, 'ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetworkList_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.diagnostics.mojom.NetworkListObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetwork_ParamsSpec, 'ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetwork_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.diagnostics.mojom.NetworkStateObserverSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_guid', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProviderRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.NetworkHealthProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  observeNetworkList(arg_observer) {
    return this.$.observeNetworkList(arg_observer);
  }
  observeNetwork(arg_observer, arg_guid) {
    return this.$.observeNetwork(arg_observer, arg_guid);
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkHealthProvider', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  observeNetworkList(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetworkList_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeNetwork(arg_observer, arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetwork_ParamsSpec,
      null,
      [arg_observer, arg_guid],
      false);
  }

};

mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.NetworkHealthProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetworkHealthProvider', [
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
        
        // Try Method 0: ObserveNetworkList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetworkList_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveNetworkList (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ObserveNetwork
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetwork_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveNetwork (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetworkList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeNetworkList');
          const result = this.impl.observeNetworkList(params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetwork_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeNetwork');
          const result = this.impl.observeNetwork(params.arg_observer, params.arg_guid);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProviderReceiver = mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProviderReceiver;

mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProviderPtr = mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProviderRemote;
mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProviderRequest = mojo.internal.bindings.ash.diagnostics.mojom.NetworkHealthProviderPendingReceiver;

