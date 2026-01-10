// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/direct_sockets/direct_sockets.mojom
// Module: blink.mojom

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
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};

blink.mojom.DirectTCPSocketOptionsSpec = { $: {} };
blink.mojom.DirectConnectedUDPSocketOptionsSpec = { $: {} };
blink.mojom.DirectBoundUDPSocketOptionsSpec = { $: {} };
blink.mojom.DirectTCPServerSocketOptionsSpec = { $: {} };
blink.mojom.DirectSocketsService = {};
blink.mojom.DirectSocketsService.$interfaceName = 'blink.mojom.DirectSocketsService';
blink.mojom.DirectSocketsService_OpenTCPSocket_ParamsSpec = { $: {} };
blink.mojom.DirectSocketsService_OpenTCPSocket_ResponseParamsSpec = { $: {} };
blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_ParamsSpec = { $: {} };
blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_ResponseParamsSpec = { $: {} };
blink.mojom.DirectSocketsService_OpenBoundUDPSocket_ParamsSpec = { $: {} };
blink.mojom.DirectSocketsService_OpenBoundUDPSocket_ResponseParamsSpec = { $: {} };
blink.mojom.DirectSocketsService_OpenTCPServerSocket_ParamsSpec = { $: {} };
blink.mojom.DirectSocketsService_OpenTCPServerSocket_ResponseParamsSpec = { $: {} };

// Struct: DirectTCPSocketOptions
mojo.internal.Struct(
    blink.mojom.DirectTCPSocketOptionsSpec, 'blink.mojom.DirectTCPSocketOptions', [
      mojo.internal.StructField('remote_addr', 0, 0, network.mojom.HostPortPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('keep_alive_options', 8, 0, network.mojom.TCPKeepAliveOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('dns_query_type', 16, 0, network.mojom.DnsQueryTypeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('send_buffer_size_$value', 24, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'send_buffer_size_$flag', originalFieldName: 'send_buffer_size' }),
      mojo.internal.StructField('receive_buffer_size_$value', 28, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'receive_buffer_size_$flag', originalFieldName: 'receive_buffer_size' }),
      mojo.internal.StructField('send_buffer_size_$flag', 32, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'send_buffer_size_$value', originalFieldName: 'send_buffer_size' }),
      mojo.internal.StructField('receive_buffer_size_$flag', 32, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'receive_buffer_size_$value', originalFieldName: 'receive_buffer_size' }),
      mojo.internal.StructField('no_delay', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: DirectConnectedUDPSocketOptions
mojo.internal.Struct(
    blink.mojom.DirectConnectedUDPSocketOptionsSpec, 'blink.mojom.DirectConnectedUDPSocketOptions', [
      mojo.internal.StructField('remote_addr', 0, 0, network.mojom.HostPortPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dns_query_type', 8, 0, network.mojom.DnsQueryTypeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('send_buffer_size_$value', 16, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'send_buffer_size_$flag', originalFieldName: 'send_buffer_size' }),
      mojo.internal.StructField('receive_buffer_size_$value', 20, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'receive_buffer_size_$flag', originalFieldName: 'receive_buffer_size' }),
      mojo.internal.StructField('send_buffer_size_$flag', 24, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'send_buffer_size_$value', originalFieldName: 'send_buffer_size' }),
      mojo.internal.StructField('receive_buffer_size_$flag', 24, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'receive_buffer_size_$value', originalFieldName: 'receive_buffer_size' }),
      mojo.internal.StructField('multicast_time_to_live_$flag', 24, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'multicast_time_to_live_$value', originalFieldName: 'multicast_time_to_live' }),
      mojo.internal.StructField('multicast_time_to_live_$value', 25, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'multicast_time_to_live_$flag', originalFieldName: 'multicast_time_to_live' }),
      mojo.internal.StructField('multicast_loopback_$flag', 26, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'multicast_loopback_$value', originalFieldName: 'multicast_loopback' }),
      mojo.internal.StructField('multicast_loopback_$value', 26, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'multicast_loopback_$flag', originalFieldName: 'multicast_loopback' }),
    ],
    [[0, 40]]);

// Struct: DirectBoundUDPSocketOptions
mojo.internal.Struct(
    blink.mojom.DirectBoundUDPSocketOptionsSpec, 'blink.mojom.DirectBoundUDPSocketOptions', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('send_buffer_size_$value', 8, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'send_buffer_size_$flag', originalFieldName: 'send_buffer_size' }),
      mojo.internal.StructField('receive_buffer_size_$value', 12, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'receive_buffer_size_$flag', originalFieldName: 'receive_buffer_size' }),
      mojo.internal.StructField('send_buffer_size_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'send_buffer_size_$value', originalFieldName: 'send_buffer_size' }),
      mojo.internal.StructField('receive_buffer_size_$flag', 16, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'receive_buffer_size_$value', originalFieldName: 'receive_buffer_size' }),
      mojo.internal.StructField('ipv6_only_$flag', 16, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'ipv6_only_$value', originalFieldName: 'ipv6_only' }),
      mojo.internal.StructField('ipv6_only_$value', 16, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'ipv6_only_$flag', originalFieldName: 'ipv6_only' }),
      mojo.internal.StructField('multicast_allow_address_sharing_$flag', 16, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'multicast_allow_address_sharing_$value', originalFieldName: 'multicast_allow_address_sharing' }),
      mojo.internal.StructField('multicast_allow_address_sharing_$value', 16, 5, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'multicast_allow_address_sharing_$flag', originalFieldName: 'multicast_allow_address_sharing' }),
      mojo.internal.StructField('multicast_time_to_live_$flag', 16, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'multicast_time_to_live_$value', originalFieldName: 'multicast_time_to_live' }),
      mojo.internal.StructField('multicast_time_to_live_$value', 17, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'multicast_time_to_live_$flag', originalFieldName: 'multicast_time_to_live' }),
      mojo.internal.StructField('multicast_loopback_$flag', 18, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'multicast_loopback_$value', originalFieldName: 'multicast_loopback' }),
      mojo.internal.StructField('multicast_loopback_$value', 18, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'multicast_loopback_$flag', originalFieldName: 'multicast_loopback' }),
    ],
    [[0, 32]]);

// Struct: DirectTCPServerSocketOptions
mojo.internal.Struct(
    blink.mojom.DirectTCPServerSocketOptionsSpec, 'blink.mojom.DirectTCPServerSocketOptions', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('backlog_$value', 8, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'backlog_$flag', originalFieldName: 'backlog' }),
      mojo.internal.StructField('ipv6_only_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'ipv6_only_$value', originalFieldName: 'ipv6_only' }),
      mojo.internal.StructField('ipv6_only_$value', 12, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'ipv6_only_$flag', originalFieldName: 'ipv6_only' }),
      mojo.internal.StructField('backlog_$flag', 12, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'backlog_$value', originalFieldName: 'backlog' }),
    ],
    [[0, 24]]);

// Interface: DirectSocketsService
mojo.internal.Struct(
    blink.mojom.DirectSocketsService_OpenTCPSocket_ParamsSpec, 'blink.mojom.DirectSocketsService_OpenTCPSocket_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.DirectTCPSocketOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(network.mojom.TCPConnectedSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 16, 0, mojo.internal.InterfaceProxy(network.mojom.SocketObserverRemote), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.DirectSocketsService_OpenTCPSocket_ResponseParamsSpec, 'blink.mojom.DirectSocketsService_OpenTCPSocket_ResponseParams', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('peer_addr', 8, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('receive_stream', 16, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('send_stream', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('result', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_ParamsSpec, 'blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.DirectConnectedUDPSocketOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(network.mojom.RestrictedUDPSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('listener', 16, 0, mojo.internal.InterfaceProxy(network.mojom.UDPSocketListenerRemote), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_ResponseParamsSpec, 'blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_ResponseParams', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('peer_addr', 8, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.DirectSocketsService_OpenBoundUDPSocket_ParamsSpec, 'blink.mojom.DirectSocketsService_OpenBoundUDPSocket_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.DirectBoundUDPSocketOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(network.mojom.RestrictedUDPSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('listener', 16, 0, mojo.internal.InterfaceProxy(network.mojom.UDPSocketListenerRemote), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.DirectSocketsService_OpenBoundUDPSocket_ResponseParamsSpec, 'blink.mojom.DirectSocketsService_OpenBoundUDPSocket_ResponseParams', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.DirectSocketsService_OpenTCPServerSocket_ParamsSpec, 'blink.mojom.DirectSocketsService_OpenTCPServerSocket_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.DirectTCPServerSocketOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(network.mojom.TCPServerSocketRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.DirectSocketsService_OpenTCPServerSocket_ResponseParamsSpec, 'blink.mojom.DirectSocketsService_OpenTCPServerSocket_ResponseParams', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.DirectSocketsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DirectSocketsServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DirectSocketsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DirectSocketsServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.DirectSocketsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DirectSocketsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DirectSocketsService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  openTCPSocket(options, receiver, observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.DirectSocketsService_OpenTCPSocket_ParamsSpec,
      blink.mojom.DirectSocketsService_OpenTCPSocket_ResponseParamsSpec,
      [options, receiver, observer],
      false);
  }

  openConnectedUDPSocket(options, receiver, listener) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_ParamsSpec,
      blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_ResponseParamsSpec,
      [options, receiver, listener],
      false);
  }

  openBoundUDPSocket(options, receiver, listener) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.DirectSocketsService_OpenBoundUDPSocket_ParamsSpec,
      blink.mojom.DirectSocketsService_OpenBoundUDPSocket_ResponseParamsSpec,
      [options, receiver, listener],
      false);
  }

  openTCPServerSocket(options, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.DirectSocketsService_OpenTCPServerSocket_ParamsSpec,
      blink.mojom.DirectSocketsService_OpenTCPServerSocket_ResponseParamsSpec,
      [options, receiver],
      false);
  }

};

blink.mojom.DirectSocketsService.getRemote = function() {
  let remote = new blink.mojom.DirectSocketsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DirectSocketsService',
    'context');
  return remote.$;
};

blink.mojom.DirectSocketsServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DirectSocketsService', [
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
        
        // Try Method 0: OpenTCPSocket
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DirectSocketsService_OpenTCPSocket_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenTCPSocket (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OpenConnectedUDPSocket
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenConnectedUDPSocket (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OpenBoundUDPSocket
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DirectSocketsService_OpenBoundUDPSocket_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenBoundUDPSocket (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OpenTCPServerSocket
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DirectSocketsService_OpenTCPServerSocket_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenTCPServerSocket (3)');
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
          const params = decoder.decodeStructInline(blink.mojom.DirectSocketsService_OpenTCPSocket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openTCPSocket');
          const result = this.impl.openTCPSocket(params.options, params.receiver, params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DirectSocketsService_OpenTCPSocket_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openConnectedUDPSocket');
          const result = this.impl.openConnectedUDPSocket(params.options, params.receiver, params.listener);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DirectSocketsService_OpenBoundUDPSocket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openBoundUDPSocket');
          const result = this.impl.openBoundUDPSocket(params.options, params.receiver, params.listener);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DirectSocketsService_OpenBoundUDPSocket_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DirectSocketsService_OpenTCPServerSocket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openTCPServerSocket');
          const result = this.impl.openTCPServerSocket(params.options, params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DirectSocketsService_OpenTCPServerSocket_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DirectSocketsServiceReceiver = blink.mojom.DirectSocketsServiceReceiver;

blink.mojom.DirectSocketsServicePtr = blink.mojom.DirectSocketsServiceRemote;
blink.mojom.DirectSocketsServiceRequest = blink.mojom.DirectSocketsServicePendingReceiver;

