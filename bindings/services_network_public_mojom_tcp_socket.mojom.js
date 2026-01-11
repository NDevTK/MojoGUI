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

mojo.internal.bindings.network.mojom.TCPKeepAliveOptionsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TCPConnectedSocketOptionsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TCPServerSocketOptionsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TCPBoundSocket = {};
mojo.internal.bindings.network.mojom.TCPBoundSocket.$interfaceName = 'network.mojom.TCPBoundSocket';
mojo.internal.bindings.network.mojom.TCPBoundSocket_Listen_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TCPBoundSocket_Listen_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TCPBoundSocket_Connect_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TCPBoundSocket_Connect_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TCPConnectedSocket = {};
mojo.internal.bindings.network.mojom.TCPConnectedSocket.$interfaceName = 'network.mojom.TCPConnectedSocket';
mojo.internal.bindings.network.mojom.TCPConnectedSocket_UpgradeToTLS_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TCPConnectedSocket_UpgradeToTLS_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetSendBufferSize_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetNoDelay_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetKeepAlive_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SocketObserver = {};
mojo.internal.bindings.network.mojom.SocketObserver.$interfaceName = 'network.mojom.SocketObserver';
mojo.internal.bindings.network.mojom.SocketObserver_OnReadError_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SocketObserver_OnWriteError_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TCPServerSocket = {};
mojo.internal.bindings.network.mojom.TCPServerSocket.$interfaceName = 'network.mojom.TCPServerSocket';
mojo.internal.bindings.network.mojom.TCPServerSocket_Accept_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TCPServerSocket_Accept_ResponseParamsSpec = { $: {} };

// Struct: TCPKeepAliveOptions
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TCPKeepAliveOptionsSpec, 'network.mojom.TCPKeepAliveOptions', [
      mojo.internal.StructField('arg_delay', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_enable', 2, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TCPConnectedSocketOptions
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TCPConnectedSocketOptionsSpec, 'network.mojom.TCPConnectedSocketOptions', [
      mojo.internal.StructField('arg_keep_alive_options', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.TCPKeepAliveOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_send_buffer_size', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_receive_buffer_size', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_no_delay', 16, 0, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TCPServerSocketOptions
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TCPServerSocketOptionsSpec, 'network.mojom.TCPServerSocketOptions', [
      mojo.internal.StructField('arg_connection_tracker', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.SocketConnectionTrackerRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_backlog', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_ipv6_only_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_ipv6_only_$value', originalFieldName: 'arg_ipv6_only' }),
      mojo.internal.StructField('arg_ipv6_only_$value', 12, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_ipv6_only_$flag', originalFieldName: 'arg_ipv6_only' }),
    ],
    [[0, 24]]);

// Interface: TCPBoundSocket
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TCPBoundSocket_Listen_ParamsSpec, 'network.mojom.TCPBoundSocket_Listen_Params', [
      mojo.internal.StructField('arg_socket', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.TCPServerSocketSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_backlog', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TCPBoundSocket_Listen_ResponseParamsSpec, 'network.mojom.TCPBoundSocket_Listen_ResponseParams', [
      mojo.internal.StructField('arg_net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TCPBoundSocket_Connect_ParamsSpec, 'network.mojom.TCPBoundSocket_Connect_Params', [
      mojo.internal.StructField('arg_remote_addr_list', 0, 0, mojo.internal.bindings.network.mojom.AddressListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tcp_connected_socket_options', 8, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.TCPConnectedSocketOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_socket', 16, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.TCPConnectedSocketSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.SocketObserverSpec), null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TCPBoundSocket_Connect_ResponseParamsSpec, 'network.mojom.TCPBoundSocket_Connect_ResponseParams', [
      mojo.internal.StructField('arg_local_addr', 0, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_peer_addr', 8, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_receive_stream', 16, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('arg_send_stream', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('arg_net_error', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.bindings.network.mojom.TCPBoundSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.TCPBoundSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TCPBoundSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.TCPBoundSocketPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.TCPBoundSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  listen(arg_backlog, arg_socket) {
    return this.$.listen(arg_backlog, arg_socket);
  }
  connect(arg_remote_addr_list, arg_tcp_connected_socket_options, arg_socket, arg_observer) {
    return this.$.connect(arg_remote_addr_list, arg_tcp_connected_socket_options, arg_socket, arg_observer);
  }
};

mojo.internal.bindings.network.mojom.TCPBoundSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TCPBoundSocket', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  listen(arg_backlog, arg_socket) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.TCPBoundSocket_Listen_ParamsSpec,
      mojo.internal.bindings.network.mojom.TCPBoundSocket_Listen_ResponseParamsSpec,
      [arg_backlog, arg_socket],
      false);
  }

  connect(arg_remote_addr_list, arg_tcp_connected_socket_options, arg_socket, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.TCPBoundSocket_Connect_ParamsSpec,
      mojo.internal.bindings.network.mojom.TCPBoundSocket_Connect_ResponseParamsSpec,
      [arg_remote_addr_list, arg_tcp_connected_socket_options, arg_socket, arg_observer],
      false);
  }

};

mojo.internal.bindings.network.mojom.TCPBoundSocket.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.TCPBoundSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TCPBoundSocket',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.TCPBoundSocketReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TCPBoundSocket_Listen_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TCPBoundSocket_Connect_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TCPBoundSocket_Listen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.listen');
          const result = this.impl.listen(params.arg_backlog, params.arg_socket);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.TCPBoundSocket_Listen_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Listen FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TCPBoundSocket_Connect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.arg_remote_addr_list, params.arg_tcp_connected_socket_options, params.arg_socket, params.arg_observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.TCPBoundSocket_Connect_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Connect FAILED:', e));
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

mojo.internal.bindings.network.mojom.TCPBoundSocketReceiver = mojo.internal.bindings.network.mojom.TCPBoundSocketReceiver;

mojo.internal.bindings.network.mojom.TCPBoundSocketPtr = mojo.internal.bindings.network.mojom.TCPBoundSocketRemote;
mojo.internal.bindings.network.mojom.TCPBoundSocketRequest = mojo.internal.bindings.network.mojom.TCPBoundSocketPendingReceiver;


// Interface: TCPConnectedSocket
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TCPConnectedSocket_UpgradeToTLS_ParamsSpec, 'network.mojom.TCPConnectedSocket_UpgradeToTLS_Params', [
      mojo.internal.StructField('arg_host_port_pair', 0, 0, mojo.internal.bindings.network.mojom.HostPortPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.network.mojom.TLSClientSocketOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_traffic_annotation', 16, 0, mojo.internal.bindings.network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_receiver', 24, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.TLSClientSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 32, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.SocketObserverSpec), null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TCPConnectedSocket_UpgradeToTLS_ResponseParamsSpec, 'network.mojom.TCPConnectedSocket_UpgradeToTLS_ResponseParams', [
      mojo.internal.StructField('arg_receive_stream', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('arg_send_stream', 8, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('arg_ssl_info', 16, 0, mojo.internal.bindings.network.mojom.SSLInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_net_error', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetSendBufferSize_ParamsSpec, 'network.mojom.TCPConnectedSocket_SetSendBufferSize_Params', [
      mojo.internal.StructField('arg_send_buffer_size', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParamsSpec, 'network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParams', [
      mojo.internal.StructField('arg_net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ParamsSpec, 'network.mojom.TCPConnectedSocket_SetReceiveBufferSize_Params', [
      mojo.internal.StructField('arg_receive_buffer_size', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParamsSpec, 'network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParams', [
      mojo.internal.StructField('arg_net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetNoDelay_ParamsSpec, 'network.mojom.TCPConnectedSocket_SetNoDelay_Params', [
      mojo.internal.StructField('arg_no_delay', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParamsSpec, 'network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetKeepAlive_ParamsSpec, 'network.mojom.TCPConnectedSocket_SetKeepAlive_Params', [
      mojo.internal.StructField('arg_delay_secs', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_enable', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParamsSpec, 'network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.TCPConnectedSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.TCPConnectedSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TCPConnectedSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.TCPConnectedSocketPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.TCPConnectedSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  upgradeToTLS(arg_host_port_pair, arg_options, arg_traffic_annotation, arg_receiver, arg_observer) {
    return this.$.upgradeToTLS(arg_host_port_pair, arg_options, arg_traffic_annotation, arg_receiver, arg_observer);
  }
  setSendBufferSize(arg_send_buffer_size) {
    return this.$.setSendBufferSize(arg_send_buffer_size);
  }
  setReceiveBufferSize(arg_receive_buffer_size) {
    return this.$.setReceiveBufferSize(arg_receive_buffer_size);
  }
  setNoDelay(arg_no_delay) {
    return this.$.setNoDelay(arg_no_delay);
  }
  setKeepAlive(arg_enable, arg_delay_secs) {
    return this.$.setKeepAlive(arg_enable, arg_delay_secs);
  }
};

mojo.internal.bindings.network.mojom.TCPConnectedSocketRemoteCallHandler = class {
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

  upgradeToTLS(arg_host_port_pair, arg_options, arg_traffic_annotation, arg_receiver, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.TCPConnectedSocket_UpgradeToTLS_ParamsSpec,
      mojo.internal.bindings.network.mojom.TCPConnectedSocket_UpgradeToTLS_ResponseParamsSpec,
      [arg_host_port_pair, arg_options, arg_traffic_annotation, arg_receiver, arg_observer],
      false);
  }

  setSendBufferSize(arg_send_buffer_size) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetSendBufferSize_ParamsSpec,
      mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParamsSpec,
      [arg_send_buffer_size],
      false);
  }

  setReceiveBufferSize(arg_receive_buffer_size) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ParamsSpec,
      mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParamsSpec,
      [arg_receive_buffer_size],
      false);
  }

  setNoDelay(arg_no_delay) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetNoDelay_ParamsSpec,
      mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParamsSpec,
      [arg_no_delay],
      false);
  }

  setKeepAlive(arg_enable, arg_delay_secs) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetKeepAlive_ParamsSpec,
      mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParamsSpec,
      [arg_enable, arg_delay_secs],
      false);
  }

};

mojo.internal.bindings.network.mojom.TCPConnectedSocket.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.TCPConnectedSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TCPConnectedSocket',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.TCPConnectedSocketReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TCPConnectedSocket_UpgradeToTLS_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetSendBufferSize_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetNoDelay_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetKeepAlive_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TCPConnectedSocket_UpgradeToTLS_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.upgradeToTLS');
          const result = this.impl.upgradeToTLS(params.arg_host_port_pair, params.arg_options, params.arg_traffic_annotation, params.arg_receiver, params.arg_observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.TCPConnectedSocket_UpgradeToTLS_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpgradeToTLS FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetSendBufferSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSendBufferSize');
          const result = this.impl.setSendBufferSize(params.arg_send_buffer_size);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetSendBufferSize FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setReceiveBufferSize');
          const result = this.impl.setReceiveBufferSize(params.arg_receive_buffer_size);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetReceiveBufferSize FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetNoDelay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNoDelay');
          const result = this.impl.setNoDelay(params.arg_no_delay);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetNoDelay FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetKeepAlive_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setKeepAlive');
          const result = this.impl.setKeepAlive(params.arg_enable, params.arg_delay_secs);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetKeepAlive FAILED:', e));
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

mojo.internal.bindings.network.mojom.TCPConnectedSocketReceiver = mojo.internal.bindings.network.mojom.TCPConnectedSocketReceiver;

mojo.internal.bindings.network.mojom.TCPConnectedSocketPtr = mojo.internal.bindings.network.mojom.TCPConnectedSocketRemote;
mojo.internal.bindings.network.mojom.TCPConnectedSocketRequest = mojo.internal.bindings.network.mojom.TCPConnectedSocketPendingReceiver;


// Interface: SocketObserver
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SocketObserver_OnReadError_ParamsSpec, 'network.mojom.SocketObserver_OnReadError_Params', [
      mojo.internal.StructField('arg_net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SocketObserver_OnWriteError_ParamsSpec, 'network.mojom.SocketObserver_OnWriteError_Params', [
      mojo.internal.StructField('arg_net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.SocketObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.SocketObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SocketObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.SocketObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.SocketObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onReadError(arg_net_error) {
    return this.$.onReadError(arg_net_error);
  }
  onWriteError(arg_net_error) {
    return this.$.onWriteError(arg_net_error);
  }
};

mojo.internal.bindings.network.mojom.SocketObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SocketObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onReadError(arg_net_error) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.SocketObserver_OnReadError_ParamsSpec,
      null,
      [arg_net_error],
      false);
  }

  onWriteError(arg_net_error) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.SocketObserver_OnWriteError_ParamsSpec,
      null,
      [arg_net_error],
      false);
  }

};

mojo.internal.bindings.network.mojom.SocketObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.SocketObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SocketObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.SocketObserverReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SocketObserver_OnReadError_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SocketObserver_OnWriteError_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SocketObserver_OnReadError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReadError');
          const result = this.impl.onReadError(params.arg_net_error);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SocketObserver_OnWriteError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWriteError');
          const result = this.impl.onWriteError(params.arg_net_error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.SocketObserverReceiver = mojo.internal.bindings.network.mojom.SocketObserverReceiver;

mojo.internal.bindings.network.mojom.SocketObserverPtr = mojo.internal.bindings.network.mojom.SocketObserverRemote;
mojo.internal.bindings.network.mojom.SocketObserverRequest = mojo.internal.bindings.network.mojom.SocketObserverPendingReceiver;


// Interface: TCPServerSocket
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TCPServerSocket_Accept_ParamsSpec, 'network.mojom.TCPServerSocket_Accept_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.SocketObserverSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TCPServerSocket_Accept_ResponseParamsSpec, 'network.mojom.TCPServerSocket_Accept_ResponseParams', [
      mojo.internal.StructField('arg_remote_addr', 0, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_connected_socket', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.TCPConnectedSocketSpec), null, true, 0, undefined),
      mojo.internal.StructField('arg_send_stream', 16, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('arg_receive_stream', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('arg_net_error', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.bindings.network.mojom.TCPServerSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.TCPServerSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TCPServerSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.TCPServerSocketPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.TCPServerSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  accept(arg_observer) {
    return this.$.accept(arg_observer);
  }
};

mojo.internal.bindings.network.mojom.TCPServerSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TCPServerSocket', [
      { explicit: null },
    ]);
  }

  accept(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.TCPServerSocket_Accept_ParamsSpec,
      mojo.internal.bindings.network.mojom.TCPServerSocket_Accept_ResponseParamsSpec,
      [arg_observer],
      false);
  }

};

mojo.internal.bindings.network.mojom.TCPServerSocket.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.TCPServerSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TCPServerSocket',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.TCPServerSocketReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TCPServerSocket_Accept_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TCPServerSocket_Accept_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.accept');
          const result = this.impl.accept(params.arg_observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.TCPServerSocket_Accept_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Accept FAILED:', e));
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

mojo.internal.bindings.network.mojom.TCPServerSocketReceiver = mojo.internal.bindings.network.mojom.TCPServerSocketReceiver;

mojo.internal.bindings.network.mojom.TCPServerSocketPtr = mojo.internal.bindings.network.mojom.TCPServerSocketRemote;
mojo.internal.bindings.network.mojom.TCPServerSocketRequest = mojo.internal.bindings.network.mojom.TCPServerSocketPendingReceiver;

