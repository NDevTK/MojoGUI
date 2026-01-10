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
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

network.mojom.EcnMarkingSpec = { $: mojo.internal.Enum() };
network.mojom.P2PReceivedPacketSpec = { $: {} };
network.mojom.P2PSendPacketSpec = { $: {} };
network.mojom.P2PNetworkNotificationClient = {};
network.mojom.P2PNetworkNotificationClient.$interfaceName = 'network.mojom.P2PNetworkNotificationClient';
network.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec = { $: {} };
network.mojom.P2PSocketManager = {};
network.mojom.P2PSocketManager.$interfaceName = 'network.mojom.P2PSocketManager';
network.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec = { $: {} };
network.mojom.P2PSocketManager_GetHostAddress_ParamsSpec = { $: {} };
network.mojom.P2PSocketManager_GetHostAddress_ResponseParamsSpec = { $: {} };
network.mojom.P2PSocketManager_CreateSocket_ParamsSpec = { $: {} };
network.mojom.P2PSocket = {};
network.mojom.P2PSocket.$interfaceName = 'network.mojom.P2PSocket';
network.mojom.P2PSocket_Send_ParamsSpec = { $: {} };
network.mojom.P2PSocket_SendBatch_ParamsSpec = { $: {} };
network.mojom.P2PSocket_SetOption_ParamsSpec = { $: {} };
network.mojom.P2PSocketClient = {};
network.mojom.P2PSocketClient.$interfaceName = 'network.mojom.P2PSocketClient';
network.mojom.P2PSocketClient_SocketCreated_ParamsSpec = { $: {} };
network.mojom.P2PSocketClient_SendComplete_ParamsSpec = { $: {} };
network.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec = { $: {} };
network.mojom.P2PSocketClient_DataReceived_ParamsSpec = { $: {} };

// Enum: EcnMarking
network.mojom.EcnMarking = {
  kNotEct: 0,
  kEct1: 1,
  kEct0: 2,
  kCe: 3,
};

// Struct: P2PReceivedPacket
mojo.internal.Struct(
    network.mojom.P2PReceivedPacketSpec, 'network.mojom.P2PReceivedPacket', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('socket_address', 8, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 16, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ecn', 24, 0, network.mojom.EcnMarkingSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: P2PSendPacket
mojo.internal.Struct(
    network.mojom.P2PSendPacketSpec, 'network.mojom.P2PSendPacket', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('packet_info', 8, 0, network.mojom.P2PPacketInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: P2PNetworkNotificationClient
mojo.internal.Struct(
    network.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec, 'network.mojom.P2PNetworkNotificationClient_NetworkListChanged_Params', [
      mojo.internal.StructField('networks', 0, 0, mojo.internal.Array(network.mojom.NetworkInterfaceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('default_ipv4_local_address', 8, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('default_ipv6_local_address', 16, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

network.mojom.P2PNetworkNotificationClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.P2PNetworkNotificationClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PNetworkNotificationClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.P2PNetworkNotificationClientPendingReceiver,
      handle);
    this.$ = new network.mojom.P2PNetworkNotificationClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.P2PNetworkNotificationClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('P2PNetworkNotificationClient', [
      { explicit: null },
    ]);
  }

  networkListChanged(networks, default_ipv4_local_address, default_ipv6_local_address) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec,
      null,
      [networks, default_ipv4_local_address, default_ipv6_local_address],
      false);
  }

};

network.mojom.P2PNetworkNotificationClient.getRemote = function() {
  let remote = new network.mojom.P2PNetworkNotificationClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PNetworkNotificationClient',
    'context');
  return remote.$;
};

network.mojom.P2PNetworkNotificationClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('P2PNetworkNotificationClient', [
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
             decoder.decodeStructInline(network.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec);
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
          const params = decoder.decodeStructInline(network.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.networkListChanged');
          const result = this.impl.networkListChanged(params.networks, params.default_ipv4_local_address, params.default_ipv6_local_address);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.P2PNetworkNotificationClientReceiver = network.mojom.P2PNetworkNotificationClientReceiver;

network.mojom.P2PNetworkNotificationClientPtr = network.mojom.P2PNetworkNotificationClientRemote;
network.mojom.P2PNetworkNotificationClientRequest = network.mojom.P2PNetworkNotificationClientPendingReceiver;


// Interface: P2PSocketManager
mojo.internal.Struct(
    network.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec, 'network.mojom.P2PSocketManager_StartNetworkNotifications_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(network.mojom.P2PNetworkNotificationClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.P2PSocketManager_GetHostAddress_ParamsSpec, 'network.mojom.P2PSocketManager_GetHostAddress_Params', [
      mojo.internal.StructField('host_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('address_family', 8, 0, network.mojom.AddressFamilySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('enable_mdns', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.P2PSocketManager_GetHostAddress_ResponseParamsSpec, 'network.mojom.P2PSocketManager_GetHostAddress_ResponseParams', [
      mojo.internal.StructField('addresses', 0, 0, mojo.internal.Array(network.mojom.IPAddressSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.P2PSocketManager_CreateSocket_ParamsSpec, 'network.mojom.P2PSocketManager_CreateSocket_Params', [
      mojo.internal.StructField('type', 0, 0, network.mojom.P2PSocketTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_address', 8, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port_range', 16, 0, network.mojom.P2PPortRangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_address', 24, 0, network.mojom.P2PHostAndIPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 32, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_token', 40, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client', 48, 0, mojo.internal.InterfaceProxy(network.mojom.P2PSocketClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('socket', 56, 0, mojo.internal.InterfaceRequest(network.mojom.P2PSocketSpec), null, false, 0, undefined),
    ],
    [[0, 72]]);

network.mojom.P2PSocketManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.P2PSocketManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PSocketManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.P2PSocketManagerPendingReceiver,
      handle);
    this.$ = new network.mojom.P2PSocketManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.P2PSocketManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('P2PSocketManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  startNetworkNotifications(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec,
      null,
      [client],
      false);
  }

  getHostAddress(host_name, address_family, enable_mdns) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.P2PSocketManager_GetHostAddress_ParamsSpec,
      network.mojom.P2PSocketManager_GetHostAddress_ResponseParamsSpec,
      [host_name, address_family, enable_mdns],
      false);
  }

  createSocket(type, local_address, port_range, remote_address, traffic_annotation, devtools_token, client, socket) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.P2PSocketManager_CreateSocket_ParamsSpec,
      null,
      [type, local_address, port_range, remote_address, traffic_annotation, devtools_token, client, socket],
      false);
  }

};

network.mojom.P2PSocketManager.getRemote = function() {
  let remote = new network.mojom.P2PSocketManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PSocketManager',
    'context');
  return remote.$;
};

network.mojom.P2PSocketManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('P2PSocketManager', [
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
             decoder.decodeStructInline(network.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec);
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
             decoder.decodeStructInline(network.mojom.P2PSocketManager_GetHostAddress_ParamsSpec);
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
             decoder.decodeStructInline(network.mojom.P2PSocketManager_CreateSocket_ParamsSpec);
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
          const params = decoder.decodeStructInline(network.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startNetworkNotifications');
          const result = this.impl.startNetworkNotifications(params.client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PSocketManager_GetHostAddress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHostAddress');
          const result = this.impl.getHostAddress(params.host_name, params.address_family, params.enable_mdns);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.P2PSocketManager_GetHostAddress_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PSocketManager_CreateSocket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createSocket');
          const result = this.impl.createSocket(params.type, params.local_address, params.port_range, params.remote_address, params.traffic_annotation, params.devtools_token, params.client, params.socket);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.P2PSocketManagerReceiver = network.mojom.P2PSocketManagerReceiver;

network.mojom.P2PSocketManagerPtr = network.mojom.P2PSocketManagerRemote;
network.mojom.P2PSocketManagerRequest = network.mojom.P2PSocketManagerPendingReceiver;


// Interface: P2PSocket
mojo.internal.Struct(
    network.mojom.P2PSocket_Send_ParamsSpec, 'network.mojom.P2PSocket_Send_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('packet_info', 8, 0, network.mojom.P2PPacketInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.P2PSocket_SendBatch_ParamsSpec, 'network.mojom.P2PSocket_SendBatch_Params', [
      mojo.internal.StructField('packet_batch', 0, 0, mojo.internal.Array(network.mojom.P2PSendPacketSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.P2PSocket_SetOption_ParamsSpec, 'network.mojom.P2PSocket_SetOption_Params', [
      mojo.internal.StructField('option', 0, 0, network.mojom.P2PSocketOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

network.mojom.P2PSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.P2PSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.P2PSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.P2PSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.P2PSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('P2PSocket', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  send(data, packet_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.P2PSocket_Send_ParamsSpec,
      null,
      [data, packet_info],
      false);
  }

  sendBatch(packet_batch) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.P2PSocket_SendBatch_ParamsSpec,
      null,
      [packet_batch],
      false);
  }

  setOption(option, value) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.P2PSocket_SetOption_ParamsSpec,
      null,
      [option, value],
      false);
  }

};

network.mojom.P2PSocket.getRemote = function() {
  let remote = new network.mojom.P2PSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PSocket',
    'context');
  return remote.$;
};

network.mojom.P2PSocketReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('P2PSocket', [
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
             decoder.decodeStructInline(network.mojom.P2PSocket_Send_ParamsSpec);
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
             decoder.decodeStructInline(network.mojom.P2PSocket_SendBatch_ParamsSpec);
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
             decoder.decodeStructInline(network.mojom.P2PSocket_SetOption_ParamsSpec);
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
          const params = decoder.decodeStructInline(network.mojom.P2PSocket_Send_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.send');
          const result = this.impl.send(params.data, params.packet_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PSocket_SendBatch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendBatch');
          const result = this.impl.sendBatch(params.packet_batch);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PSocket_SetOption_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOption');
          const result = this.impl.setOption(params.option, params.value);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.P2PSocketReceiver = network.mojom.P2PSocketReceiver;

network.mojom.P2PSocketPtr = network.mojom.P2PSocketRemote;
network.mojom.P2PSocketRequest = network.mojom.P2PSocketPendingReceiver;


// Interface: P2PSocketClient
mojo.internal.Struct(
    network.mojom.P2PSocketClient_SocketCreated_ParamsSpec, 'network.mojom.P2PSocketClient_SocketCreated_Params', [
      mojo.internal.StructField('local_address', 0, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_address', 8, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.P2PSocketClient_SendComplete_ParamsSpec, 'network.mojom.P2PSocketClient_SendComplete_Params', [
      mojo.internal.StructField('send_metrics', 0, 0, network.mojom.P2PSendPacketMetricsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec, 'network.mojom.P2PSocketClient_SendBatchComplete_Params', [
      mojo.internal.StructField('send_metrics_batch', 0, 0, mojo.internal.Array(network.mojom.P2PSendPacketMetricsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.P2PSocketClient_DataReceived_ParamsSpec, 'network.mojom.P2PSocketClient_DataReceived_Params', [
      mojo.internal.StructField('packets', 0, 0, mojo.internal.Array(network.mojom.P2PReceivedPacketSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.P2PSocketClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.P2PSocketClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PSocketClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.P2PSocketClientPendingReceiver,
      handle);
    this.$ = new network.mojom.P2PSocketClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.P2PSocketClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('P2PSocketClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  socketCreated(local_address, remote_address) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.P2PSocketClient_SocketCreated_ParamsSpec,
      null,
      [local_address, remote_address],
      false);
  }

  sendComplete(send_metrics) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.P2PSocketClient_SendComplete_ParamsSpec,
      null,
      [send_metrics],
      false);
  }

  sendBatchComplete(send_metrics_batch) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec,
      null,
      [send_metrics_batch],
      false);
  }

  dataReceived(packets) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.P2PSocketClient_DataReceived_ParamsSpec,
      null,
      [packets],
      false);
  }

};

network.mojom.P2PSocketClient.getRemote = function() {
  let remote = new network.mojom.P2PSocketClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PSocketClient',
    'context');
  return remote.$;
};

network.mojom.P2PSocketClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('P2PSocketClient', [
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
             decoder.decodeStructInline(network.mojom.P2PSocketClient_SocketCreated_ParamsSpec);
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
             decoder.decodeStructInline(network.mojom.P2PSocketClient_SendComplete_ParamsSpec);
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
             decoder.decodeStructInline(network.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec);
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
             decoder.decodeStructInline(network.mojom.P2PSocketClient_DataReceived_ParamsSpec);
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
          const params = decoder.decodeStructInline(network.mojom.P2PSocketClient_SocketCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.socketCreated');
          const result = this.impl.socketCreated(params.local_address, params.remote_address);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PSocketClient_SendComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendComplete');
          const result = this.impl.sendComplete(params.send_metrics);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendBatchComplete');
          const result = this.impl.sendBatchComplete(params.send_metrics_batch);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PSocketClient_DataReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dataReceived');
          const result = this.impl.dataReceived(params.packets);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.P2PSocketClientReceiver = network.mojom.P2PSocketClientReceiver;

network.mojom.P2PSocketClientPtr = network.mojom.P2PSocketClientRemote;
network.mojom.P2PSocketClientRequest = network.mojom.P2PSocketClientPendingReceiver;

