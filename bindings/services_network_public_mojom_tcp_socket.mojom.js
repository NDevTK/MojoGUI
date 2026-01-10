// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/tcp_socket.mojom
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

network.mojom.TCPKeepAliveOptionsSpec = { $: {} };
network.mojom.TCPConnectedSocketOptionsSpec = { $: {} };
network.mojom.TCPServerSocketOptionsSpec = { $: {} };
network.mojom.TCPBoundSocket = {};
network.mojom.TCPBoundSocket.$interfaceName = 'network.mojom.TCPBoundSocket';
network.mojom.TCPBoundSocket_Listen_ParamsSpec = { $: {} };
network.mojom.TCPBoundSocket_Listen_ResponseParamsSpec = { $: {} };
network.mojom.TCPBoundSocket_Connect_ParamsSpec = { $: {} };
network.mojom.TCPBoundSocket_Connect_ResponseParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket = {};
network.mojom.TCPConnectedSocket.$interfaceName = 'network.mojom.TCPConnectedSocket';
network.mojom.TCPConnectedSocket_UpgradeToTLS_ParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_UpgradeToTLS_ResponseParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetSendBufferSize_ParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetNoDelay_ParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetKeepAlive_ParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParamsSpec = { $: {} };
network.mojom.SocketObserver = {};
network.mojom.SocketObserver.$interfaceName = 'network.mojom.SocketObserver';
network.mojom.SocketObserver_OnReadError_ParamsSpec = { $: {} };
network.mojom.SocketObserver_OnWriteError_ParamsSpec = { $: {} };
network.mojom.TCPServerSocket = {};
network.mojom.TCPServerSocket.$interfaceName = 'network.mojom.TCPServerSocket';
network.mojom.TCPServerSocket_Accept_ParamsSpec = { $: {} };
network.mojom.TCPServerSocket_Accept_ResponseParamsSpec = { $: {} };

// Struct: TCPKeepAliveOptions
mojo.internal.Struct(
    network.mojom.TCPKeepAliveOptionsSpec, 'network.mojom.TCPKeepAliveOptions', [
      mojo.internal.StructField('delay', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('enable', 2, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TCPConnectedSocketOptions
mojo.internal.Struct(
    network.mojom.TCPConnectedSocketOptionsSpec, 'network.mojom.TCPConnectedSocketOptions', [
      mojo.internal.StructField('keep_alive_options', 0, 0, network.mojom.TCPKeepAliveOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('send_buffer_size', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('receive_buffer_size', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('no_delay', 16, 0, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TCPServerSocketOptions
mojo.internal.Struct(
    network.mojom.TCPServerSocketOptionsSpec, 'network.mojom.TCPServerSocketOptions', [
      mojo.internal.StructField('connection_tracker', 0, 0, mojo.internal.InterfaceProxy(network.mojom.SocketConnectionTrackerRemote), null, true, 0, undefined),
      mojo.internal.StructField('backlog', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('ipv6_only_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'ipv6_only_$value', originalFieldName: 'ipv6_only' }),
      mojo.internal.StructField('ipv6_only_$value', 12, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'ipv6_only_$flag', originalFieldName: 'ipv6_only' }),
    ],
    [[0, 24]]);

// Interface: TCPBoundSocket
mojo.internal.Struct(
    network.mojom.TCPBoundSocket_Listen_ParamsSpec, 'network.mojom.TCPBoundSocket_Listen_Params', [
      mojo.internal.StructField('socket', 0, 0, mojo.internal.InterfaceRequest(network.mojom.TCPServerSocketSpec), null, false, 0, undefined),
      mojo.internal.StructField('backlog', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.TCPBoundSocket_Listen_ResponseParamsSpec, 'network.mojom.TCPBoundSocket_Listen_ResponseParams', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPBoundSocket_Connect_ParamsSpec, 'network.mojom.TCPBoundSocket_Connect_Params', [
      mojo.internal.StructField('remote_addr_list', 0, 0, network.mojom.AddressListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tcp_connected_socket_options', 8, 0, network.mojom.TCPConnectedSocketOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('socket', 16, 0, mojo.internal.InterfaceRequest(network.mojom.TCPConnectedSocketSpec), null, false, 0, undefined),
      mojo.internal.StructField('observer', 24, 0, mojo.internal.InterfaceProxy(network.mojom.SocketObserverSpec), null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.TCPBoundSocket_Connect_ResponseParamsSpec, 'network.mojom.TCPBoundSocket_Connect_ResponseParams', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('peer_addr', 8, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('receive_stream', 16, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('send_stream', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('net_error', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

network.mojom.TCPBoundSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.TCPBoundSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TCPBoundSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.TCPBoundSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.TCPBoundSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.TCPBoundSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TCPBoundSocket', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  listen(backlog, socket) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.TCPBoundSocket_Listen_ParamsSpec,
      network.mojom.TCPBoundSocket_Listen_ResponseParamsSpec,
      [backlog, socket],
      false);
  }

  connect(remote_addr_list, tcp_connected_socket_options, socket, observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.TCPBoundSocket_Connect_ParamsSpec,
      network.mojom.TCPBoundSocket_Connect_ResponseParamsSpec,
      [remote_addr_list, tcp_connected_socket_options, socket, observer],
      false);
  }

};

network.mojom.TCPBoundSocket.getRemote = function() {
  let remote = new network.mojom.TCPBoundSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TCPBoundSocket',
    'context');
  return remote.$;
};

network.mojom.TCPBoundSocketReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TCPBoundSocket', [
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
        
        // Try Method 0: Listen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.TCPBoundSocket_Listen_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Listen (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Connect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.TCPBoundSocket_Connect_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Connect (1)');
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
          const params = decoder.decodeStructInline(network.mojom.TCPBoundSocket_Listen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.listen');
          const result = this.impl.listen(params.backlog, params.socket);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TCPBoundSocket_Listen_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.TCPBoundSocket_Connect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.remote_addr_list, params.tcp_connected_socket_options, params.socket, params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TCPBoundSocket_Connect_ResponseParamsSpec);
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

network.mojom.TCPBoundSocketReceiver = network.mojom.TCPBoundSocketReceiver;

network.mojom.TCPBoundSocketPtr = network.mojom.TCPBoundSocketRemote;
network.mojom.TCPBoundSocketRequest = network.mojom.TCPBoundSocketPendingReceiver;


// Interface: TCPConnectedSocket
mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_UpgradeToTLS_ParamsSpec, 'network.mojom.TCPConnectedSocket_UpgradeToTLS_Params', [
      mojo.internal.StructField('host_port_pair', 0, 0, network.mojom.HostPortPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, network.mojom.TLSClientSocketOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 16, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 24, 0, mojo.internal.InterfaceRequest(network.mojom.TLSClientSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 32, 0, mojo.internal.InterfaceProxy(network.mojom.SocketObserverSpec), null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_UpgradeToTLS_ResponseParamsSpec, 'network.mojom.TCPConnectedSocket_UpgradeToTLS_ResponseParams', [
      mojo.internal.StructField('receive_stream', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('send_stream', 8, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('ssl_info', 16, 0, network.mojom.SSLInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('net_error', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetSendBufferSize_ParamsSpec, 'network.mojom.TCPConnectedSocket_SetSendBufferSize_Params', [
      mojo.internal.StructField('send_buffer_size', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParamsSpec, 'network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParams', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ParamsSpec, 'network.mojom.TCPConnectedSocket_SetReceiveBufferSize_Params', [
      mojo.internal.StructField('receive_buffer_size', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParamsSpec, 'network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParams', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetNoDelay_ParamsSpec, 'network.mojom.TCPConnectedSocket_SetNoDelay_Params', [
      mojo.internal.StructField('no_delay', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParamsSpec, 'network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetKeepAlive_ParamsSpec, 'network.mojom.TCPConnectedSocket_SetKeepAlive_Params', [
      mojo.internal.StructField('delay_secs', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('enable', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParamsSpec, 'network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.TCPConnectedSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.TCPConnectedSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TCPConnectedSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.TCPConnectedSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.TCPConnectedSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.TCPConnectedSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TCPConnectedSocket', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  upgradeToTLS(host_port_pair, options, traffic_annotation, receiver, observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.TCPConnectedSocket_UpgradeToTLS_ParamsSpec,
      network.mojom.TCPConnectedSocket_UpgradeToTLS_ResponseParamsSpec,
      [host_port_pair, options, traffic_annotation, receiver, observer],
      false);
  }

  setSendBufferSize(send_buffer_size) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.TCPConnectedSocket_SetSendBufferSize_ParamsSpec,
      network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParamsSpec,
      [send_buffer_size],
      false);
  }

  setReceiveBufferSize(receive_buffer_size) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ParamsSpec,
      network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParamsSpec,
      [receive_buffer_size],
      false);
  }

  setNoDelay(no_delay) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.TCPConnectedSocket_SetNoDelay_ParamsSpec,
      network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParamsSpec,
      [no_delay],
      false);
  }

  setKeepAlive(enable, delay_secs) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      network.mojom.TCPConnectedSocket_SetKeepAlive_ParamsSpec,
      network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParamsSpec,
      [enable, delay_secs],
      false);
  }

};

network.mojom.TCPConnectedSocket.getRemote = function() {
  let remote = new network.mojom.TCPConnectedSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TCPConnectedSocket',
    'context');
  return remote.$;
};

network.mojom.TCPConnectedSocketReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TCPConnectedSocket', [
      { explicit: null },
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
        
        // Try Method 0: UpgradeToTLS
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.TCPConnectedSocket_UpgradeToTLS_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpgradeToTLS (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetSendBufferSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.TCPConnectedSocket_SetSendBufferSize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSendBufferSize (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetReceiveBufferSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetReceiveBufferSize (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetNoDelay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.TCPConnectedSocket_SetNoDelay_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNoDelay (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetKeepAlive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.TCPConnectedSocket_SetKeepAlive_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetKeepAlive (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(network.mojom.TCPConnectedSocket_UpgradeToTLS_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.upgradeToTLS');
          const result = this.impl.upgradeToTLS(params.host_port_pair, params.options, params.traffic_annotation, params.receiver, params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TCPConnectedSocket_UpgradeToTLS_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.TCPConnectedSocket_SetSendBufferSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSendBufferSize');
          const result = this.impl.setSendBufferSize(params.send_buffer_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setReceiveBufferSize');
          const result = this.impl.setReceiveBufferSize(params.receive_buffer_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.TCPConnectedSocket_SetNoDelay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNoDelay');
          const result = this.impl.setNoDelay(params.no_delay);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.TCPConnectedSocket_SetKeepAlive_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setKeepAlive');
          const result = this.impl.setKeepAlive(params.enable, params.delay_secs);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParamsSpec);
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

network.mojom.TCPConnectedSocketReceiver = network.mojom.TCPConnectedSocketReceiver;

network.mojom.TCPConnectedSocketPtr = network.mojom.TCPConnectedSocketRemote;
network.mojom.TCPConnectedSocketRequest = network.mojom.TCPConnectedSocketPendingReceiver;


// Interface: SocketObserver
mojo.internal.Struct(
    network.mojom.SocketObserver_OnReadError_ParamsSpec, 'network.mojom.SocketObserver_OnReadError_Params', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.SocketObserver_OnWriteError_ParamsSpec, 'network.mojom.SocketObserver_OnWriteError_Params', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.SocketObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.SocketObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SocketObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.SocketObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.SocketObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.SocketObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SocketObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onReadError(net_error) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.SocketObserver_OnReadError_ParamsSpec,
      null,
      [net_error],
      false);
  }

  onWriteError(net_error) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.SocketObserver_OnWriteError_ParamsSpec,
      null,
      [net_error],
      false);
  }

};

network.mojom.SocketObserver.getRemote = function() {
  let remote = new network.mojom.SocketObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SocketObserver',
    'context');
  return remote.$;
};

network.mojom.SocketObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SocketObserver', [
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
        
        // Try Method 0: OnReadError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.SocketObserver_OnReadError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReadError (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnWriteError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.SocketObserver_OnWriteError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWriteError (1)');
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
          const params = decoder.decodeStructInline(network.mojom.SocketObserver_OnReadError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReadError');
          const result = this.impl.onReadError(params.net_error);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.SocketObserver_OnWriteError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWriteError');
          const result = this.impl.onWriteError(params.net_error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.SocketObserverReceiver = network.mojom.SocketObserverReceiver;

network.mojom.SocketObserverPtr = network.mojom.SocketObserverRemote;
network.mojom.SocketObserverRequest = network.mojom.SocketObserverPendingReceiver;


// Interface: TCPServerSocket
mojo.internal.Struct(
    network.mojom.TCPServerSocket_Accept_ParamsSpec, 'network.mojom.TCPServerSocket_Accept_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(network.mojom.SocketObserverSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPServerSocket_Accept_ResponseParamsSpec, 'network.mojom.TCPServerSocket_Accept_ResponseParams', [
      mojo.internal.StructField('remote_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('connected_socket', 8, 0, mojo.internal.InterfaceProxy(network.mojom.TCPConnectedSocketSpec), null, true, 0, undefined),
      mojo.internal.StructField('send_stream', 16, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('receive_stream', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('net_error', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

network.mojom.TCPServerSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.TCPServerSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TCPServerSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.TCPServerSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.TCPServerSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.TCPServerSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TCPServerSocket', [
      { explicit: null },
    ]);
  }

  accept(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.TCPServerSocket_Accept_ParamsSpec,
      network.mojom.TCPServerSocket_Accept_ResponseParamsSpec,
      [observer],
      false);
  }

};

network.mojom.TCPServerSocket.getRemote = function() {
  let remote = new network.mojom.TCPServerSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TCPServerSocket',
    'context');
  return remote.$;
};

network.mojom.TCPServerSocketReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TCPServerSocket', [
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
        
        // Try Method 0: Accept
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.TCPServerSocket_Accept_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Accept (0)');
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
          const params = decoder.decodeStructInline(network.mojom.TCPServerSocket_Accept_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.accept');
          const result = this.impl.accept(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TCPServerSocket_Accept_ResponseParamsSpec);
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

network.mojom.TCPServerSocketReceiver = network.mojom.TCPServerSocketReceiver;

network.mojom.TCPServerSocketPtr = network.mojom.TCPServerSocketRemote;
network.mojom.TCPServerSocketRequest = network.mojom.TCPServerSocketPendingReceiver;

