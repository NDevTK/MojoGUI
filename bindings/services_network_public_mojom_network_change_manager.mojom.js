// Auto-generated MojoJS binding
 // Source: chromium_src/services/network/public/mojom/network_change_manager.mojom
 // Module: network.mojom

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
 

 mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};

mojo.internal.bindings.network.mojom.ConnectionTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.ConnectionSubtypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.IPAddressChangeTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.NetworkChangeManagerClient = {};
mojo.internal.bindings.network.mojom.NetworkChangeManagerClient.$interfaceName = 'network.mojom.NetworkChangeManagerClient';
mojo.internal.bindings.network.mojom.NetworkChangeManagerClient_OnInitialConnectionType_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkChangeManagerClient_OnNetworkChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkChangeManager = {};
mojo.internal.bindings.network.mojom.NetworkChangeManager.$interfaceName = 'network.mojom.NetworkChangeManager';
mojo.internal.bindings.network.mojom.NetworkChangeManager_RequestNotifications_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkChangeManager_OnNetworkChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkChangeManager_BindNetworkInterfaceChangeListener_ParamsSpec = { $: {} };

// Enum: ConnectionType
mojo.internal.bindings.network.mojom.ConnectionType = {
  CONNECTION_UNKNOWN: 0,
  CONNECTION_ETHERNET: 1,
  CONNECTION_WIFI: 2,
  CONNECTION_2G: 3,
  CONNECTION_3G: 4,
  CONNECTION_4G: 5,
  CONNECTION_NONE: 6,
  CONNECTION_BLUETOOTH: 7,
  CONNECTION_5G: 8,
  CONNECTION_LAST: 8,
};

// Enum: ConnectionSubtype
mojo.internal.bindings.network.mojom.ConnectionSubtype = {
  SUBTYPE_UNKNOWN: 0,
  SUBTYPE_NONE: 1,
  SUBTYPE_OTHER: 2,
  SUBTYPE_GSM: 3,
  SUBTYPE_IDEN: 4,
  SUBTYPE_CDMA: 5,
  SUBTYPE_1XRTT: 6,
  SUBTYPE_GPRS: 7,
  SUBTYPE_EDGE: 8,
  SUBTYPE_UMTS: 9,
  SUBTYPE_EVDO_REV_0: 10,
  SUBTYPE_EVDO_REV_A: 11,
  SUBTYPE_HSPA: 12,
  SUBTYPE_EVDO_REV_B: 13,
  SUBTYPE_HSDPA: 14,
  SUBTYPE_HSUPA: 15,
  SUBTYPE_EHRPD: 16,
  SUBTYPE_HSPAP: 17,
  SUBTYPE_LTE: 18,
  SUBTYPE_LTE_ADVANCED: 19,
  SUBTYPE_BLUETOOTH_1_2: 20,
  SUBTYPE_BLUETOOTH_2_1: 21,
  SUBTYPE_BLUETOOTH_3_0: 22,
  SUBTYPE_BLUETOOTH_4_0: 23,
  SUBTYPE_ETHERNET: 24,
  SUBTYPE_FAST_ETHERNET: 25,
  SUBTYPE_GIGABIT_ETHERNET: 26,
  SUBTYPE_10_GIGABIT_ETHERNET: 27,
  SUBTYPE_WIFI_B: 28,
  SUBTYPE_WIFI_G: 29,
  SUBTYPE_WIFI_N: 30,
  SUBTYPE_WIFI_AC: 31,
  SUBTYPE_WIFI_AD: 32,
  SUBTYPE_LAST: 32,
};

// Enum: IPAddressChangeType
mojo.internal.bindings.network.mojom.IPAddressChangeType = {
  IP_ADDRESS_CHANGE_NONE: 0,
  IP_ADDRESS_CHANGE_NORMAL: 1,
  IP_ADDRESS_CHANGE_IPV6_TEMPADDR: 2,
  IP_ADDRESS_CHANGE_LAST: 2,
};

// Interface: NetworkChangeManagerClient
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkChangeManagerClient_OnInitialConnectionType_ParamsSpec, 'network.mojom.NetworkChangeManagerClient_OnInitialConnectionType_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.ConnectionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkChangeManagerClient_OnNetworkChanged_ParamsSpec, 'network.mojom.NetworkChangeManagerClient_OnNetworkChanged_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.ConnectionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.NetworkChangeManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.NetworkChangeManagerClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkChangeManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.NetworkChangeManagerClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.NetworkChangeManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onInitialConnectionType(arg_type) {
    return this.$.onInitialConnectionType(arg_type);
  }
  onNetworkChanged(arg_type) {
    return this.$.onNetworkChanged(arg_type);
  }
};

mojo.internal.bindings.network.mojom.NetworkChangeManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkChangeManagerClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onInitialConnectionType(arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkChangeManagerClient_OnInitialConnectionType_ParamsSpec,
      null,
      [arg_type],
      false);
  }

  onNetworkChanged(arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkChangeManagerClient_OnNetworkChanged_ParamsSpec,
      null,
      [arg_type],
      false);
  }

};

mojo.internal.bindings.network.mojom.NetworkChangeManagerClient.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.NetworkChangeManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkChangeManagerClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.NetworkChangeManagerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetworkChangeManagerClient', [
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
        
        // Try Method 0: OnInitialConnectionType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkChangeManagerClient_OnInitialConnectionType_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInitialConnectionType (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnNetworkChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkChangeManagerClient_OnNetworkChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetworkChanged (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkChangeManagerClient_OnInitialConnectionType_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onInitialConnectionType');
          const result = this.impl.onInitialConnectionType(params.arg_type);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkChangeManagerClient_OnNetworkChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNetworkChanged');
          const result = this.impl.onNetworkChanged(params.arg_type);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.NetworkChangeManagerClientReceiver = mojo.internal.bindings.network.mojom.NetworkChangeManagerClientReceiver;

mojo.internal.bindings.network.mojom.NetworkChangeManagerClientPtr = mojo.internal.bindings.network.mojom.NetworkChangeManagerClientRemote;
mojo.internal.bindings.network.mojom.NetworkChangeManagerClientRequest = mojo.internal.bindings.network.mojom.NetworkChangeManagerClientPendingReceiver;


// Interface: NetworkChangeManager
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkChangeManager_RequestNotifications_ParamsSpec, 'network.mojom.NetworkChangeManager_RequestNotifications_Params', [
      mojo.internal.StructField('arg_client_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.NetworkChangeManagerClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkChangeManager_OnNetworkChanged_ParamsSpec, 'network.mojom.NetworkChangeManager_OnNetworkChanged_Params', [
      mojo.internal.StructField('arg_ip_address_change_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.IPAddressChangeTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_connection_type', 8, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.ConnectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_connection_subtype', 16, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.ConnectionSubtypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dns_changed', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_connection_type_changed', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_connection_subtype_changed', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkChangeManager_BindNetworkInterfaceChangeListener_ParamsSpec, 'network.mojom.NetworkChangeManager_BindNetworkInterfaceChangeListener_Params', [
      mojo.internal.StructField('arg_notifier', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.NetworkChangeManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.NetworkChangeManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkChangeManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.NetworkChangeManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.NetworkChangeManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestNotifications(arg_client_remote) {
    return this.$.requestNotifications(arg_client_remote);
  }
  onNetworkChanged(arg_dns_changed, arg_ip_address_change_type, arg_connection_type_changed, arg_new_connection_type, arg_connection_subtype_changed, arg_new_connection_subtype) {
    return this.$.onNetworkChanged(arg_dns_changed, arg_ip_address_change_type, arg_connection_type_changed, arg_new_connection_type, arg_connection_subtype_changed, arg_new_connection_subtype);
  }
  bindNetworkInterfaceChangeListener(arg_notifier) {
    return this.$.bindNetworkInterfaceChangeListener(arg_notifier);
  }
};

mojo.internal.bindings.network.mojom.NetworkChangeManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkChangeManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestNotifications(arg_client_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkChangeManager_RequestNotifications_ParamsSpec,
      null,
      [arg_client_remote],
      false);
  }

  onNetworkChanged(arg_dns_changed, arg_ip_address_change_type, arg_connection_type_changed, arg_new_connection_type, arg_connection_subtype_changed, arg_new_connection_subtype) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkChangeManager_OnNetworkChanged_ParamsSpec,
      null,
      [arg_dns_changed, arg_ip_address_change_type, arg_connection_type_changed, arg_new_connection_type, arg_connection_subtype_changed, arg_new_connection_subtype],
      false);
  }

  bindNetworkInterfaceChangeListener(arg_notifier) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkChangeManager_BindNetworkInterfaceChangeListener_ParamsSpec,
      null,
      [arg_notifier],
      false);
  }

};

mojo.internal.bindings.network.mojom.NetworkChangeManager.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.NetworkChangeManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkChangeManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.NetworkChangeManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetworkChangeManager', [
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
        
        // Try Method 0: RequestNotifications
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkChangeManager_RequestNotifications_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestNotifications (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnNetworkChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkChangeManager_OnNetworkChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetworkChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: BindNetworkInterfaceChangeListener
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkChangeManager_BindNetworkInterfaceChangeListener_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindNetworkInterfaceChangeListener (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkChangeManager_RequestNotifications_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestNotifications');
          const result = this.impl.requestNotifications(params.arg_client_remote);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkChangeManager_OnNetworkChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNetworkChanged');
          const result = this.impl.onNetworkChanged(params.arg_dns_changed, params.arg_ip_address_change_type, params.arg_connection_type_changed, params.arg_new_connection_type, params.arg_connection_subtype_changed, params.arg_new_connection_subtype);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkChangeManager_BindNetworkInterfaceChangeListener_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindNetworkInterfaceChangeListener');
          const result = this.impl.bindNetworkInterfaceChangeListener(params.arg_notifier);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.NetworkChangeManagerReceiver = mojo.internal.bindings.network.mojom.NetworkChangeManagerReceiver;

mojo.internal.bindings.network.mojom.NetworkChangeManagerPtr = mojo.internal.bindings.network.mojom.NetworkChangeManagerRemote;
mojo.internal.bindings.network.mojom.NetworkChangeManagerRequest = mojo.internal.bindings.network.mojom.NetworkChangeManagerPendingReceiver;

