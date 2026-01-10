// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/udp_socket.mojom
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
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

network.mojom.UDPSocketOptionsSpec = { $: {} };
network.mojom.UDPSocket = {};
network.mojom.UDPSocket.$interfaceName = 'network.mojom.UDPSocket';
network.mojom.UDPSocket_Bind_ParamsSpec = { $: {} };
network.mojom.UDPSocket_Bind_ResponseParamsSpec = { $: {} };
network.mojom.UDPSocket_Connect_ParamsSpec = { $: {} };
network.mojom.UDPSocket_Connect_ResponseParamsSpec = { $: {} };
network.mojom.UDPSocket_SetBroadcast_ParamsSpec = { $: {} };
network.mojom.UDPSocket_SetBroadcast_ResponseParamsSpec = { $: {} };
network.mojom.UDPSocket_SetSendBufferSize_ParamsSpec = { $: {} };
network.mojom.UDPSocket_SetSendBufferSize_ResponseParamsSpec = { $: {} };
network.mojom.UDPSocket_SetReceiveBufferSize_ParamsSpec = { $: {} };
network.mojom.UDPSocket_SetReceiveBufferSize_ResponseParamsSpec = { $: {} };
network.mojom.UDPSocket_JoinGroup_ParamsSpec = { $: {} };
network.mojom.UDPSocket_JoinGroup_ResponseParamsSpec = { $: {} };
network.mojom.UDPSocket_LeaveGroup_ParamsSpec = { $: {} };
network.mojom.UDPSocket_LeaveGroup_ResponseParamsSpec = { $: {} };
network.mojom.UDPSocket_ReceiveMore_ParamsSpec = { $: {} };
network.mojom.UDPSocket_ReceiveMoreWithBufferSize_ParamsSpec = { $: {} };
network.mojom.UDPSocket_SendTo_ParamsSpec = { $: {} };
network.mojom.UDPSocket_SendTo_ResponseParamsSpec = { $: {} };
network.mojom.UDPSocket_Send_ParamsSpec = { $: {} };
network.mojom.UDPSocket_Send_ResponseParamsSpec = { $: {} };
network.mojom.UDPSocket_Close_ParamsSpec = { $: {} };
network.mojom.UDPSocketListener = {};
network.mojom.UDPSocketListener.$interfaceName = 'network.mojom.UDPSocketListener';
network.mojom.UDPSocketListener_OnReceived_ParamsSpec = { $: {} };

// Struct: UDPSocketOptions
mojo.internal.Struct(
    network.mojom.UDPSocketOptionsSpec, 'network.mojom.UDPSocketOptions', [
      mojo.internal.StructField('multicast_interface', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('multicast_time_to_live', 4, 0, mojo.internal.Uint32, 1, false, 0, undefined),
      mojo.internal.StructField('send_buffer_size', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('receive_buffer_size', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('allow_address_reuse', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_broadcast', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_address_sharing_for_multicast', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('multicast_loopback_mode', 16, 3, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('ipv6_only_$flag', 16, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'ipv6_only_$value', originalFieldName: 'ipv6_only' }),
      mojo.internal.StructField('ipv6_only_$value', 16, 5, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'ipv6_only_$flag', originalFieldName: 'ipv6_only' }),
    ],
    [[0, 32]]);

// Interface: UDPSocket
mojo.internal.Struct(
    network.mojom.UDPSocket_Bind_ParamsSpec, 'network.mojom.UDPSocket_Bind_Params', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('socket_options', 8, 0, network.mojom.UDPSocketOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_Bind_ResponseParamsSpec, 'network.mojom.UDPSocket_Bind_ResponseParams', [
      mojo.internal.StructField('local_addr_out', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_Connect_ParamsSpec, 'network.mojom.UDPSocket_Connect_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('socket_options', 8, 0, network.mojom.UDPSocketOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_Connect_ResponseParamsSpec, 'network.mojom.UDPSocket_Connect_ResponseParams', [
      mojo.internal.StructField('local_addr_out', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_SetBroadcast_ParamsSpec, 'network.mojom.UDPSocket_SetBroadcast_Params', [
      mojo.internal.StructField('broadcast', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_SetBroadcast_ResponseParamsSpec, 'network.mojom.UDPSocket_SetBroadcast_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_SetSendBufferSize_ParamsSpec, 'network.mojom.UDPSocket_SetSendBufferSize_Params', [
      mojo.internal.StructField('send_buffer_size', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_SetSendBufferSize_ResponseParamsSpec, 'network.mojom.UDPSocket_SetSendBufferSize_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_SetReceiveBufferSize_ParamsSpec, 'network.mojom.UDPSocket_SetReceiveBufferSize_Params', [
      mojo.internal.StructField('receive_buffer_size', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_SetReceiveBufferSize_ResponseParamsSpec, 'network.mojom.UDPSocket_SetReceiveBufferSize_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_JoinGroup_ParamsSpec, 'network.mojom.UDPSocket_JoinGroup_Params', [
      mojo.internal.StructField('group_address', 0, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_JoinGroup_ResponseParamsSpec, 'network.mojom.UDPSocket_JoinGroup_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_LeaveGroup_ParamsSpec, 'network.mojom.UDPSocket_LeaveGroup_Params', [
      mojo.internal.StructField('group_address', 0, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_LeaveGroup_ResponseParamsSpec, 'network.mojom.UDPSocket_LeaveGroup_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_ReceiveMore_ParamsSpec, 'network.mojom.UDPSocket_ReceiveMore_Params', [
      mojo.internal.StructField('num_additional_datagrams', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_ReceiveMoreWithBufferSize_ParamsSpec, 'network.mojom.UDPSocket_ReceiveMoreWithBufferSize_Params', [
      mojo.internal.StructField('num_additional_datagrams', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('buffer_size', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_SendTo_ParamsSpec, 'network.mojom.UDPSocket_SendTo_Params', [
      mojo.internal.StructField('dest_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 16, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_SendTo_ResponseParamsSpec, 'network.mojom.UDPSocket_SendTo_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_Send_ParamsSpec, 'network.mojom.UDPSocket_Send_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 8, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_Send_ResponseParamsSpec, 'network.mojom.UDPSocket_Send_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_Close_ParamsSpec, 'network.mojom.UDPSocket_Close_Params', [
    ],
    [[0, 8]]);

network.mojom.UDPSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.UDPSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.UDPSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.UDPSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.UDPSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.UDPSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UDPSocket', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bind(local_addr, socket_options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.UDPSocket_Bind_ParamsSpec,
      network.mojom.UDPSocket_Bind_ResponseParamsSpec,
      [local_addr, socket_options],
      false);
  }

  connect(remote_addr, socket_options) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.UDPSocket_Connect_ParamsSpec,
      network.mojom.UDPSocket_Connect_ResponseParamsSpec,
      [remote_addr, socket_options],
      false);
  }

  setBroadcast(broadcast) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.UDPSocket_SetBroadcast_ParamsSpec,
      network.mojom.UDPSocket_SetBroadcast_ResponseParamsSpec,
      [broadcast],
      false);
  }

  setSendBufferSize(send_buffer_size) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.UDPSocket_SetSendBufferSize_ParamsSpec,
      network.mojom.UDPSocket_SetSendBufferSize_ResponseParamsSpec,
      [send_buffer_size],
      false);
  }

  setReceiveBufferSize(receive_buffer_size) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      network.mojom.UDPSocket_SetReceiveBufferSize_ParamsSpec,
      network.mojom.UDPSocket_SetReceiveBufferSize_ResponseParamsSpec,
      [receive_buffer_size],
      false);
  }

  joinGroup(group_address) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      network.mojom.UDPSocket_JoinGroup_ParamsSpec,
      network.mojom.UDPSocket_JoinGroup_ResponseParamsSpec,
      [group_address],
      false);
  }

  leaveGroup(group_address) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      network.mojom.UDPSocket_LeaveGroup_ParamsSpec,
      network.mojom.UDPSocket_LeaveGroup_ResponseParamsSpec,
      [group_address],
      false);
  }

  receiveMore(num_additional_datagrams) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      network.mojom.UDPSocket_ReceiveMore_ParamsSpec,
      null,
      [num_additional_datagrams],
      false);
  }

  receiveMoreWithBufferSize(num_additional_datagrams, buffer_size) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      network.mojom.UDPSocket_ReceiveMoreWithBufferSize_ParamsSpec,
      null,
      [num_additional_datagrams, buffer_size],
      false);
  }

  sendTo(dest_addr, data, traffic_annotation) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      network.mojom.UDPSocket_SendTo_ParamsSpec,
      network.mojom.UDPSocket_SendTo_ResponseParamsSpec,
      [dest_addr, data, traffic_annotation],
      false);
  }

  send(data, traffic_annotation) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      network.mojom.UDPSocket_Send_ParamsSpec,
      network.mojom.UDPSocket_Send_ResponseParamsSpec,
      [data, traffic_annotation],
      false);
  }

  close() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      network.mojom.UDPSocket_Close_ParamsSpec,
      null,
      [],
      false);
  }

};

network.mojom.UDPSocket.getRemote = function() {
  let remote = new network.mojom.UDPSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.UDPSocket',
    'context');
  return remote.$;
};

network.mojom.UDPSocketReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UDPSocket', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: Bind
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_Bind_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Bind (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Connect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_Connect_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Connect (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetBroadcast
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_SetBroadcast_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBroadcast (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetSendBufferSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_SetSendBufferSize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSendBufferSize (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetReceiveBufferSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_SetReceiveBufferSize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetReceiveBufferSize (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: JoinGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_JoinGroup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> JoinGroup (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: LeaveGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_LeaveGroup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LeaveGroup (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ReceiveMore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_ReceiveMore_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReceiveMore (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ReceiveMoreWithBufferSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_ReceiveMoreWithBufferSize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReceiveMoreWithBufferSize (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SendTo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_SendTo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendTo (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: Send
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_Send_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Send (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: Close
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_Close_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Close (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
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
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_Bind_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bind');
          const result = this.impl.bind(params.local_addr, params.socket_options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.UDPSocket_Bind_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_Connect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.remote_addr, params.socket_options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.UDPSocket_Connect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_SetBroadcast_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBroadcast');
          const result = this.impl.setBroadcast(params.broadcast);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.UDPSocket_SetBroadcast_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_SetSendBufferSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSendBufferSize');
          const result = this.impl.setSendBufferSize(params.send_buffer_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.UDPSocket_SetSendBufferSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_SetReceiveBufferSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setReceiveBufferSize');
          const result = this.impl.setReceiveBufferSize(params.receive_buffer_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.UDPSocket_SetReceiveBufferSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_JoinGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.joinGroup');
          const result = this.impl.joinGroup(params.group_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.UDPSocket_JoinGroup_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_LeaveGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.leaveGroup');
          const result = this.impl.leaveGroup(params.group_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.UDPSocket_LeaveGroup_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_ReceiveMore_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.receiveMore');
          const result = this.impl.receiveMore(params.num_additional_datagrams);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_ReceiveMoreWithBufferSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.receiveMoreWithBufferSize');
          const result = this.impl.receiveMoreWithBufferSize(params.num_additional_datagrams, params.buffer_size);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_SendTo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendTo');
          const result = this.impl.sendTo(params.dest_addr, params.data, params.traffic_annotation);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.UDPSocket_SendTo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_Send_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.send');
          const result = this.impl.send(params.data, params.traffic_annotation);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.UDPSocket_Send_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_Close_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.close');
          const result = this.impl.close();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.UDPSocketReceiver = network.mojom.UDPSocketReceiver;

network.mojom.UDPSocketPtr = network.mojom.UDPSocketRemote;
network.mojom.UDPSocketRequest = network.mojom.UDPSocketPendingReceiver;


// Interface: UDPSocketListener
mojo.internal.Struct(
    network.mojom.UDPSocketListener_OnReceived_ParamsSpec, 'network.mojom.UDPSocketListener_OnReceived_Params', [
      mojo.internal.StructField('src_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

network.mojom.UDPSocketListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.UDPSocketListenerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.UDPSocketListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.UDPSocketListenerPendingReceiver,
      handle);
    this.$ = new network.mojom.UDPSocketListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.UDPSocketListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UDPSocketListener', [
      { explicit: null },
    ]);
  }

  onReceived(result, src_addr, data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.UDPSocketListener_OnReceived_ParamsSpec,
      null,
      [result, src_addr, data],
      false);
  }

};

network.mojom.UDPSocketListener.getRemote = function() {
  let remote = new network.mojom.UDPSocketListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.UDPSocketListener',
    'context');
  return remote.$;
};

network.mojom.UDPSocketListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UDPSocketListener', [
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
        
        // Try Method 0: OnReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocketListener_OnReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReceived (0)');
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
          const params = decoder.decodeStructInline(network.mojom.UDPSocketListener_OnReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReceived');
          const result = this.impl.onReceived(params.result, params.src_addr, params.data);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.UDPSocketListenerReceiver = network.mojom.UDPSocketListenerReceiver;

network.mojom.UDPSocketListenerPtr = network.mojom.UDPSocketListenerRemote;
network.mojom.UDPSocketListenerRequest = network.mojom.UDPSocketListenerPendingReceiver;

