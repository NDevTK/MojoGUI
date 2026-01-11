// Auto-generated MojoJS binding
 // Source: chromium_src/services/network/public/mojom/p2p.mojom
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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.network.mojom.P2PSocketTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.P2PSocketOptionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.EcnMarkingSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.P2PHostAndIPEndPointSpec = { $: {} };
mojo.internal.bindings.network.mojom.P2PPacketInfoSpec = { $: {} };
mojo.internal.bindings.network.mojom.P2PPortRangeSpec = { $: {} };
mojo.internal.bindings.network.mojom.P2PSendPacketMetricsSpec = { $: {} };
mojo.internal.bindings.network.mojom.P2PReceivedPacketSpec = { $: {} };
mojo.internal.bindings.network.mojom.P2PSendPacketSpec = { $: {} };
mojo.internal.bindings.network.mojom.P2PNetworkNotificationClient = {};
mojo.internal.bindings.network.mojom.P2PNetworkNotificationClientSpec = { $ : {} };
mojo.internal.bindings.network.mojom.P2PNetworkNotificationClient.$interfaceName = 'network.mojom.P2PNetworkNotificationClient';
mojo.internal.bindings.network.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.P2PSocketManager = {};
mojo.internal.bindings.network.mojom.P2PSocketManagerSpec = { $ : {} };
mojo.internal.bindings.network.mojom.P2PSocketManager.$interfaceName = 'network.mojom.P2PSocketManager';
mojo.internal.bindings.network.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.P2PSocketManager_GetHostAddress_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.P2PSocketManager_GetHostAddress_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.P2PSocketManager_CreateSocket_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.P2PSocket = {};
mojo.internal.bindings.network.mojom.P2PSocketSpec = { $ : {} };
mojo.internal.bindings.network.mojom.P2PSocket.$interfaceName = 'network.mojom.P2PSocket';
mojo.internal.bindings.network.mojom.P2PSocket_Send_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.P2PSocket_SendBatch_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.P2PSocket_SetOption_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.P2PSocketClient = {};
mojo.internal.bindings.network.mojom.P2PSocketClientSpec = { $ : {} };
mojo.internal.bindings.network.mojom.P2PSocketClient.$interfaceName = 'network.mojom.P2PSocketClient';
mojo.internal.bindings.network.mojom.P2PSocketClient_SocketCreated_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.P2PSocketClient_SendComplete_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.P2PSocketClient_DataReceived_ParamsSpec = { $: {} };

// Enum: P2PSocketType
mojo.internal.bindings.network.mojom.P2PSocketType = {
};

// Enum: P2PSocketOption
mojo.internal.bindings.network.mojom.P2PSocketOption = {
};

// Enum: EcnMarking
mojo.internal.bindings.network.mojom.EcnMarking = {
  kNotEct: 0,
  kEct1: 1,
  kEct0: 2,
  kCe: 3,
};

// Struct: P2PHostAndIPEndPoint
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.P2PHostAndIPEndPointSpec, 'network.mojom.P2PHostAndIPEndPoint', [
    ],
    [[0, 8]]);

// Struct: P2PPacketInfo
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.P2PPacketInfoSpec, 'network.mojom.P2PPacketInfo', [
    ],
    [[0, 8]]);

// Struct: P2PPortRange
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.P2PPortRangeSpec, 'network.mojom.P2PPortRange', [
    ],
    [[0, 8]]);

// Struct: P2PSendPacketMetrics
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.P2PSendPacketMetricsSpec, 'network.mojom.P2PSendPacketMetrics', [
    ],
    [[0, 8]]);

// Struct: P2PReceivedPacket
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.P2PReceivedPacketSpec, 'network.mojom.P2PReceivedPacket', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_socket_address', 8, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_timestamp', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ecn', 24, 0, mojo.internal.bindings.network.mojom.EcnMarkingSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: P2PSendPacket
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.P2PSendPacketSpec, 'network.mojom.P2PSendPacket', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_packet_info', 8, 0, mojo.internal.bindings.network.mojom.P2PPacketInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: P2PNetworkNotificationClient
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec, 'network.mojom.P2PNetworkNotificationClient_NetworkListChanged_Params', [
      mojo.internal.StructField('arg_networks', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.NetworkInterfaceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_default_ipv4_local_address', 8, 0, mojo.internal.bindings.network.mojom.IPAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_default_ipv6_local_address', 16, 0, mojo.internal.bindings.network.mojom.IPAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.network.mojom.P2PNetworkNotificationClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.P2PNetworkNotificationClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PNetworkNotificationClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.P2PNetworkNotificationClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.P2PNetworkNotificationClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  networkListChanged(arg_networks, arg_default_ipv4_local_address, arg_default_ipv6_local_address) {
    return this.$.networkListChanged(arg_networks, arg_default_ipv4_local_address, arg_default_ipv6_local_address);
  }
};

mojo.internal.bindings.network.mojom.P2PNetworkNotificationClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('network.mojom.P2PNetworkNotificationClient', [
      { explicit: null },
    ]);
  }

  networkListChanged(arg_networks, arg_default_ipv4_local_address, arg_default_ipv6_local_address) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec,
      null,
      [arg_networks, arg_default_ipv4_local_address, arg_default_ipv6_local_address],
      false);
  }

};

mojo.internal.bindings.network.mojom.P2PNetworkNotificationClient.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.P2PNetworkNotificationClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PNetworkNotificationClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.P2PNetworkNotificationClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('network.mojom.P2PNetworkNotificationClient', [
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
        
        // Try Method 0: NetworkListChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NetworkListChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.networkListChanged');
          const result = this.impl.networkListChanged(params.arg_networks, params.arg_default_ipv4_local_address, params.arg_default_ipv6_local_address);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.P2PNetworkNotificationClientReceiver = mojo.internal.bindings.network.mojom.P2PNetworkNotificationClientReceiver;

mojo.internal.bindings.network.mojom.P2PNetworkNotificationClientPtr = mojo.internal.bindings.network.mojom.P2PNetworkNotificationClientRemote;
mojo.internal.bindings.network.mojom.P2PNetworkNotificationClientRequest = mojo.internal.bindings.network.mojom.P2PNetworkNotificationClientPendingReceiver;


// Interface: P2PSocketManager
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec, 'network.mojom.P2PSocketManager_StartNetworkNotifications_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.P2PNetworkNotificationClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.P2PSocketManager_GetHostAddress_ParamsSpec, 'network.mojom.P2PSocketManager_GetHostAddress_Params', [
      mojo.internal.StructField('arg_host_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_address_family', 8, 0, mojo.internal.bindings.network.mojom.AddressFamilySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_enable_mdns', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.P2PSocketManager_GetHostAddress_ResponseParamsSpec, 'network.mojom.P2PSocketManager_GetHostAddress_ResponseParams', [
      mojo.internal.StructField('arg_addresses', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.IPAddressSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.P2PSocketManager_CreateSocket_ParamsSpec, 'network.mojom.P2PSocketManager_CreateSocket_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.network.mojom.P2PSocketTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_local_address', 8, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_port_range', 16, 0, mojo.internal.bindings.network.mojom.P2PPortRangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_remote_address', 24, 0, mojo.internal.bindings.network.mojom.P2PHostAndIPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_traffic_annotation', 32, 0, mojo.internal.bindings.network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_devtools_token', 40, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_client', 48, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.P2PSocketClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_socket', 56, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.P2PSocketRemote), null, false, 0, undefined),
    ],
    [[0, 72]]);

mojo.internal.bindings.network.mojom.P2PSocketManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.P2PSocketManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PSocketManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.P2PSocketManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.P2PSocketManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startNetworkNotifications(arg_client) {
    return this.$.startNetworkNotifications(arg_client);
  }
  getHostAddress(arg_host_name, arg_address_family, arg_enable_mdns) {
    return this.$.getHostAddress(arg_host_name, arg_address_family, arg_enable_mdns);
  }
  createSocket(arg_type, arg_local_address, arg_port_range, arg_remote_address, arg_traffic_annotation, arg_devtools_token, arg_client, arg_socket) {
    return this.$.createSocket(arg_type, arg_local_address, arg_port_range, arg_remote_address, arg_traffic_annotation, arg_devtools_token, arg_client, arg_socket);
  }
};

mojo.internal.bindings.network.mojom.P2PSocketManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('network.mojom.P2PSocketManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  startNetworkNotifications(arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec,
      null,
      [arg_client],
      false);
  }

  getHostAddress(arg_host_name, arg_address_family, arg_enable_mdns) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.P2PSocketManager_GetHostAddress_ParamsSpec,
      mojo.internal.bindings.network.mojom.P2PSocketManager_GetHostAddress_ResponseParamsSpec,
      [arg_host_name, arg_address_family, arg_enable_mdns],
      false);
  }

  createSocket(arg_type, arg_local_address, arg_port_range, arg_remote_address, arg_traffic_annotation, arg_devtools_token, arg_client, arg_socket) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.P2PSocketManager_CreateSocket_ParamsSpec,
      null,
      [arg_type, arg_local_address, arg_port_range, arg_remote_address, arg_traffic_annotation, arg_devtools_token, arg_client, arg_socket],
      false);
  }

};

mojo.internal.bindings.network.mojom.P2PSocketManager.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.P2PSocketManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PSocketManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.P2PSocketManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('network.mojom.P2PSocketManager', [
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
        
        // Try Method 0: StartNetworkNotifications
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartNetworkNotifications (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetHostAddress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PSocketManager_GetHostAddress_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHostAddress (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CreateSocket
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PSocketManager_CreateSocket_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSocket (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startNetworkNotifications');
          const result = this.impl.startNetworkNotifications(params.arg_client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PSocketManager_GetHostAddress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHostAddress');
          const result = this.impl.getHostAddress(params.arg_host_name, params.arg_address_family, params.arg_enable_mdns);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.P2PSocketManager_GetHostAddress_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetHostAddress FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PSocketManager_CreateSocket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createSocket');
          const result = this.impl.createSocket(params.arg_type, params.arg_local_address, params.arg_port_range, params.arg_remote_address, params.arg_traffic_annotation, params.arg_devtools_token, params.arg_client, params.arg_socket);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.P2PSocketManagerReceiver = mojo.internal.bindings.network.mojom.P2PSocketManagerReceiver;

mojo.internal.bindings.network.mojom.P2PSocketManagerPtr = mojo.internal.bindings.network.mojom.P2PSocketManagerRemote;
mojo.internal.bindings.network.mojom.P2PSocketManagerRequest = mojo.internal.bindings.network.mojom.P2PSocketManagerPendingReceiver;


// Interface: P2PSocket
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.P2PSocket_Send_ParamsSpec, 'network.mojom.P2PSocket_Send_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_packet_info', 8, 0, mojo.internal.bindings.network.mojom.P2PPacketInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.P2PSocket_SendBatch_ParamsSpec, 'network.mojom.P2PSocket_SendBatch_Params', [
      mojo.internal.StructField('arg_packet_batch', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.P2PSendPacketSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.P2PSocket_SetOption_ParamsSpec, 'network.mojom.P2PSocket_SetOption_Params', [
      mojo.internal.StructField('arg_option', 0, 0, mojo.internal.bindings.network.mojom.P2PSocketOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.network.mojom.P2PSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.P2PSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.P2PSocketPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.P2PSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  send(arg_data, arg_packet_info) {
    return this.$.send(arg_data, arg_packet_info);
  }
  sendBatch(arg_packet_batch) {
    return this.$.sendBatch(arg_packet_batch);
  }
  setOption(arg_option, arg_value) {
    return this.$.setOption(arg_option, arg_value);
  }
};

mojo.internal.bindings.network.mojom.P2PSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('network.mojom.P2PSocket', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  send(arg_data, arg_packet_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.P2PSocket_Send_ParamsSpec,
      null,
      [arg_data, arg_packet_info],
      false);
  }

  sendBatch(arg_packet_batch) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.P2PSocket_SendBatch_ParamsSpec,
      null,
      [arg_packet_batch],
      false);
  }

  setOption(arg_option, arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.P2PSocket_SetOption_ParamsSpec,
      null,
      [arg_option, arg_value],
      false);
  }

};

mojo.internal.bindings.network.mojom.P2PSocket.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.P2PSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PSocket',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.P2PSocketReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('network.mojom.P2PSocket', [
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
        
        // Try Method 0: Send
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PSocket_Send_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Send (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SendBatch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PSocket_SendBatch_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendBatch (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetOption
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PSocket_SetOption_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOption (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PSocket_Send_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.send');
          const result = this.impl.send(params.arg_data, params.arg_packet_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PSocket_SendBatch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendBatch');
          const result = this.impl.sendBatch(params.arg_packet_batch);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PSocket_SetOption_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOption');
          const result = this.impl.setOption(params.arg_option, params.arg_value);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.P2PSocketReceiver = mojo.internal.bindings.network.mojom.P2PSocketReceiver;

mojo.internal.bindings.network.mojom.P2PSocketPtr = mojo.internal.bindings.network.mojom.P2PSocketRemote;
mojo.internal.bindings.network.mojom.P2PSocketRequest = mojo.internal.bindings.network.mojom.P2PSocketPendingReceiver;


// Interface: P2PSocketClient
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.P2PSocketClient_SocketCreated_ParamsSpec, 'network.mojom.P2PSocketClient_SocketCreated_Params', [
      mojo.internal.StructField('arg_local_address', 0, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_remote_address', 8, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.P2PSocketClient_SendComplete_ParamsSpec, 'network.mojom.P2PSocketClient_SendComplete_Params', [
      mojo.internal.StructField('arg_send_metrics', 0, 0, mojo.internal.bindings.network.mojom.P2PSendPacketMetricsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec, 'network.mojom.P2PSocketClient_SendBatchComplete_Params', [
      mojo.internal.StructField('arg_send_metrics_batch', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.P2PSendPacketMetricsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.P2PSocketClient_DataReceived_ParamsSpec, 'network.mojom.P2PSocketClient_DataReceived_Params', [
      mojo.internal.StructField('arg_packets', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.P2PReceivedPacketSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.P2PSocketClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.P2PSocketClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PSocketClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.P2PSocketClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.P2PSocketClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  socketCreated(arg_local_address, arg_remote_address) {
    return this.$.socketCreated(arg_local_address, arg_remote_address);
  }
  sendComplete(arg_send_metrics) {
    return this.$.sendComplete(arg_send_metrics);
  }
  sendBatchComplete(arg_send_metrics_batch) {
    return this.$.sendBatchComplete(arg_send_metrics_batch);
  }
  dataReceived(arg_packets) {
    return this.$.dataReceived(arg_packets);
  }
};

mojo.internal.bindings.network.mojom.P2PSocketClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('network.mojom.P2PSocketClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  socketCreated(arg_local_address, arg_remote_address) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.P2PSocketClient_SocketCreated_ParamsSpec,
      null,
      [arg_local_address, arg_remote_address],
      false);
  }

  sendComplete(arg_send_metrics) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.P2PSocketClient_SendComplete_ParamsSpec,
      null,
      [arg_send_metrics],
      false);
  }

  sendBatchComplete(arg_send_metrics_batch) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec,
      null,
      [arg_send_metrics_batch],
      false);
  }

  dataReceived(arg_packets) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.network.mojom.P2PSocketClient_DataReceived_ParamsSpec,
      null,
      [arg_packets],
      false);
  }

};

mojo.internal.bindings.network.mojom.P2PSocketClient.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.P2PSocketClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PSocketClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.P2PSocketClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('network.mojom.P2PSocketClient', [
      { explicit: null },
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
        
        // Try Method 0: SocketCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PSocketClient_SocketCreated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SocketCreated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SendComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PSocketClient_SendComplete_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendComplete (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SendBatchComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendBatchComplete (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DataReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PSocketClient_DataReceived_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DataReceived (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PSocketClient_SocketCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.socketCreated');
          const result = this.impl.socketCreated(params.arg_local_address, params.arg_remote_address);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PSocketClient_SendComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendComplete');
          const result = this.impl.sendComplete(params.arg_send_metrics);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendBatchComplete');
          const result = this.impl.sendBatchComplete(params.arg_send_metrics_batch);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.P2PSocketClient_DataReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dataReceived');
          const result = this.impl.dataReceived(params.arg_packets);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.P2PSocketClientReceiver = mojo.internal.bindings.network.mojom.P2PSocketClientReceiver;

mojo.internal.bindings.network.mojom.P2PSocketClientPtr = mojo.internal.bindings.network.mojom.P2PSocketClientRemote;
mojo.internal.bindings.network.mojom.P2PSocketClientRequest = mojo.internal.bindings.network.mojom.P2PSocketClientPendingReceiver;

