// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/web_transport.mojom
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

network.mojom.WebTransportErrorSpec = { $: {} };
network.mojom.WebTransportCertificateFingerprintSpec = { $: {} };
network.mojom.WebTransportCloseInfoSpec = { $: {} };
network.mojom.WebTransportStatsSpec = { $: {} };
network.mojom.WebTransport = {};
network.mojom.WebTransport.$interfaceName = 'network.mojom.WebTransport';
network.mojom.WebTransport_SendDatagram_ParamsSpec = { $: {} };
network.mojom.WebTransport_SendDatagram_ResponseParamsSpec = { $: {} };
network.mojom.WebTransport_CreateStream_ParamsSpec = { $: {} };
network.mojom.WebTransport_CreateStream_ResponseParamsSpec = { $: {} };
network.mojom.WebTransport_AcceptBidirectionalStream_ParamsSpec = { $: {} };
network.mojom.WebTransport_AcceptBidirectionalStream_ResponseParamsSpec = { $: {} };
network.mojom.WebTransport_AcceptUnidirectionalStream_ParamsSpec = { $: {} };
network.mojom.WebTransport_AcceptUnidirectionalStream_ResponseParamsSpec = { $: {} };
network.mojom.WebTransport_SendFin_ParamsSpec = { $: {} };
network.mojom.WebTransport_AbortStream_ParamsSpec = { $: {} };
network.mojom.WebTransport_StopSending_ParamsSpec = { $: {} };
network.mojom.WebTransport_SetOutgoingDatagramExpirationDuration_ParamsSpec = { $: {} };
network.mojom.WebTransport_GetStats_ParamsSpec = { $: {} };
network.mojom.WebTransport_GetStats_ResponseParamsSpec = { $: {} };
network.mojom.WebTransport_Close_ParamsSpec = { $: {} };
network.mojom.WebTransportClient = {};
network.mojom.WebTransportClient.$interfaceName = 'network.mojom.WebTransportClient';
network.mojom.WebTransportClient_OnDatagramReceived_ParamsSpec = { $: {} };
network.mojom.WebTransportClient_OnIncomingStreamClosed_ParamsSpec = { $: {} };
network.mojom.WebTransportClient_OnOutgoingStreamClosed_ParamsSpec = { $: {} };
network.mojom.WebTransportClient_OnReceivedStopSending_ParamsSpec = { $: {} };
network.mojom.WebTransportClient_OnReceivedResetStream_ParamsSpec = { $: {} };
network.mojom.WebTransportClient_OnClosed_ParamsSpec = { $: {} };
network.mojom.WebTransportHandshakeClient = {};
network.mojom.WebTransportHandshakeClient.$interfaceName = 'network.mojom.WebTransportHandshakeClient';
network.mojom.WebTransportHandshakeClient_OnBeforeConnect_ParamsSpec = { $: {} };
network.mojom.WebTransportHandshakeClient_OnConnectionEstablished_ParamsSpec = { $: {} };
network.mojom.WebTransportHandshakeClient_OnHandshakeFailed_ParamsSpec = { $: {} };

// Struct: WebTransportError
mojo.internal.Struct(
    network.mojom.WebTransportErrorSpec, 'network.mojom.WebTransportError', [
      mojo.internal.StructField('details', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('net_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('quic_error', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('safe_to_report_details', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WebTransportCertificateFingerprint
mojo.internal.Struct(
    network.mojom.WebTransportCertificateFingerprintSpec, 'network.mojom.WebTransportCertificateFingerprint', [
      mojo.internal.StructField('algorithm', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('fingerprint', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebTransportCloseInfo
mojo.internal.Struct(
    network.mojom.WebTransportCloseInfoSpec, 'network.mojom.WebTransportCloseInfo', [
      mojo.internal.StructField('reason', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('code', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebTransportStats
mojo.internal.Struct(
    network.mojom.WebTransportStatsSpec, 'network.mojom.WebTransportStats', [
      mojo.internal.StructField('timestamp', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('min_rtt', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('smoothed_rtt', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rtt_variation', 24, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('estimated_send_rate_bps', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('datagrams_expired_outgoing', 40, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('datagrams_lost_outgoing', 48, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: WebTransport
mojo.internal.Struct(
    network.mojom.WebTransport_SendDatagram_ParamsSpec, 'network.mojom.WebTransport_SendDatagram_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransport_SendDatagram_ResponseParamsSpec, 'network.mojom.WebTransport_SendDatagram_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransport_CreateStream_ParamsSpec, 'network.mojom.WebTransport_CreateStream_Params', [
      mojo.internal.StructField('readable', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('writable', 8, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.WebTransport_CreateStream_ResponseParamsSpec, 'network.mojom.WebTransport_CreateStream_ResponseParams', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('succeeded', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransport_AcceptBidirectionalStream_ParamsSpec, 'network.mojom.WebTransport_AcceptBidirectionalStream_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.WebTransport_AcceptBidirectionalStream_ResponseParamsSpec, 'network.mojom.WebTransport_AcceptBidirectionalStream_ResponseParams', [
      mojo.internal.StructField('readable', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('writable', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('stream_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.WebTransport_AcceptUnidirectionalStream_ParamsSpec, 'network.mojom.WebTransport_AcceptUnidirectionalStream_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.WebTransport_AcceptUnidirectionalStream_ResponseParamsSpec, 'network.mojom.WebTransport_AcceptUnidirectionalStream_ResponseParams', [
      mojo.internal.StructField('readable', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('stream_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.WebTransport_SendFin_ParamsSpec, 'network.mojom.WebTransport_SendFin_Params', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransport_AbortStream_ParamsSpec, 'network.mojom.WebTransport_AbortStream_Params', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('code', 4, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransport_StopSending_ParamsSpec, 'network.mojom.WebTransport_StopSending_Params', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('code', 4, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransport_SetOutgoingDatagramExpirationDuration_ParamsSpec, 'network.mojom.WebTransport_SetOutgoingDatagramExpirationDuration_Params', [
      mojo.internal.StructField('duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransport_GetStats_ParamsSpec, 'network.mojom.WebTransport_GetStats_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.WebTransport_GetStats_ResponseParamsSpec, 'network.mojom.WebTransport_GetStats_ResponseParams', [
      mojo.internal.StructField('stats', 0, 0, network.mojom.WebTransportStatsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransport_Close_ParamsSpec, 'network.mojom.WebTransport_Close_Params', [
      mojo.internal.StructField('close_info', 0, 0, network.mojom.WebTransportCloseInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.WebTransportPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.WebTransportRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebTransport';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.WebTransportPendingReceiver,
      handle);
    this.$ = new network.mojom.WebTransportRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  sendDatagram(data) {
    return this.$.sendDatagram(data);
  }
  createStream(readable, writable) {
    return this.$.createStream(readable, writable);
  }
  acceptBidirectionalStream() {
    return this.$.acceptBidirectionalStream();
  }
  acceptUnidirectionalStream() {
    return this.$.acceptUnidirectionalStream();
  }
  sendFin(stream_id) {
    return this.$.sendFin(stream_id);
  }
  abortStream(stream_id, code) {
    return this.$.abortStream(stream_id, code);
  }
  stopSending(stream_id, code) {
    return this.$.stopSending(stream_id, code);
  }
  setOutgoingDatagramExpirationDuration(duration) {
    return this.$.setOutgoingDatagramExpirationDuration(duration);
  }
  getStats() {
    return this.$.getStats();
  }
  close(close_info) {
    return this.$.close(close_info);
  }
};

network.mojom.WebTransportRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebTransport', [
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

  sendDatagram(data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.WebTransport_SendDatagram_ParamsSpec,
      network.mojom.WebTransport_SendDatagram_ResponseParamsSpec,
      [data],
      false);
  }

  createStream(readable, writable) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.WebTransport_CreateStream_ParamsSpec,
      network.mojom.WebTransport_CreateStream_ResponseParamsSpec,
      [readable, writable],
      false);
  }

  acceptBidirectionalStream() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.WebTransport_AcceptBidirectionalStream_ParamsSpec,
      network.mojom.WebTransport_AcceptBidirectionalStream_ResponseParamsSpec,
      [],
      false);
  }

  acceptUnidirectionalStream() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.WebTransport_AcceptUnidirectionalStream_ParamsSpec,
      network.mojom.WebTransport_AcceptUnidirectionalStream_ResponseParamsSpec,
      [],
      false);
  }

  sendFin(stream_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      network.mojom.WebTransport_SendFin_ParamsSpec,
      null,
      [stream_id],
      false);
  }

  abortStream(stream_id, code) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      network.mojom.WebTransport_AbortStream_ParamsSpec,
      null,
      [stream_id, code],
      false);
  }

  stopSending(stream_id, code) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      network.mojom.WebTransport_StopSending_ParamsSpec,
      null,
      [stream_id, code],
      false);
  }

  setOutgoingDatagramExpirationDuration(duration) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      network.mojom.WebTransport_SetOutgoingDatagramExpirationDuration_ParamsSpec,
      null,
      [duration],
      false);
  }

  getStats() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      network.mojom.WebTransport_GetStats_ParamsSpec,
      network.mojom.WebTransport_GetStats_ResponseParamsSpec,
      [],
      false);
  }

  close(close_info) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      network.mojom.WebTransport_Close_ParamsSpec,
      null,
      [close_info],
      false);
  }

};

network.mojom.WebTransport.getRemote = function() {
  let remote = new network.mojom.WebTransportRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebTransport',
    'context');
  return remote.$;
};

network.mojom.WebTransportReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebTransport', [
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
        
        // Try Method 0: SendDatagram
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransport_SendDatagram_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendDatagram (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransport_CreateStream_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateStream (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: AcceptBidirectionalStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransport_AcceptBidirectionalStream_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcceptBidirectionalStream (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: AcceptUnidirectionalStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransport_AcceptUnidirectionalStream_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcceptUnidirectionalStream (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SendFin
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransport_SendFin_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendFin (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: AbortStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransport_AbortStream_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AbortStream (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: StopSending
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransport_StopSending_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopSending (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetOutgoingDatagramExpirationDuration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransport_SetOutgoingDatagramExpirationDuration_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOutgoingDatagramExpirationDuration (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetStats
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransport_GetStats_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetStats (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: Close
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransport_Close_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Close (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
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
          const params = decoder.decodeStructInline(network.mojom.WebTransport_SendDatagram_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendDatagram');
          const result = this.impl.sendDatagram(params.data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.WebTransport_SendDatagram_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SendDatagram FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransport_CreateStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createStream');
          const result = this.impl.createStream(params.readable, params.writable);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.WebTransport_CreateStream_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateStream FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransport_AcceptBidirectionalStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.acceptBidirectionalStream');
          const result = this.impl.acceptBidirectionalStream();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.WebTransport_AcceptBidirectionalStream_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AcceptBidirectionalStream FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransport_AcceptUnidirectionalStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.acceptUnidirectionalStream');
          const result = this.impl.acceptUnidirectionalStream();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.WebTransport_AcceptUnidirectionalStream_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AcceptUnidirectionalStream FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransport_SendFin_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendFin');
          const result = this.impl.sendFin(params.stream_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransport_AbortStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.abortStream');
          const result = this.impl.abortStream(params.stream_id, params.code);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransport_StopSending_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopSending');
          const result = this.impl.stopSending(params.stream_id, params.code);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransport_SetOutgoingDatagramExpirationDuration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOutgoingDatagramExpirationDuration');
          const result = this.impl.setOutgoingDatagramExpirationDuration(params.duration);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransport_GetStats_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getStats');
          const result = this.impl.getStats();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.WebTransport_GetStats_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetStats FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransport_Close_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.close');
          const result = this.impl.close(params.close_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.WebTransportReceiver = network.mojom.WebTransportReceiver;

network.mojom.WebTransportPtr = network.mojom.WebTransportRemote;
network.mojom.WebTransportRequest = network.mojom.WebTransportPendingReceiver;


// Interface: WebTransportClient
mojo.internal.Struct(
    network.mojom.WebTransportClient_OnDatagramReceived_ParamsSpec, 'network.mojom.WebTransportClient_OnDatagramReceived_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransportClient_OnIncomingStreamClosed_ParamsSpec, 'network.mojom.WebTransportClient_OnIncomingStreamClosed_Params', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('fin_received', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransportClient_OnOutgoingStreamClosed_ParamsSpec, 'network.mojom.WebTransportClient_OnOutgoingStreamClosed_Params', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransportClient_OnReceivedStopSending_ParamsSpec, 'network.mojom.WebTransportClient_OnReceivedStopSending_Params', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('stream_error_code', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransportClient_OnReceivedResetStream_ParamsSpec, 'network.mojom.WebTransportClient_OnReceivedResetStream_Params', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('stream_error_code', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransportClient_OnClosed_ParamsSpec, 'network.mojom.WebTransportClient_OnClosed_Params', [
      mojo.internal.StructField('close_info', 0, 0, network.mojom.WebTransportCloseInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('final_stats', 8, 0, network.mojom.WebTransportStatsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

network.mojom.WebTransportClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.WebTransportClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebTransportClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.WebTransportClientPendingReceiver,
      handle);
    this.$ = new network.mojom.WebTransportClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDatagramReceived(data) {
    return this.$.onDatagramReceived(data);
  }
  onIncomingStreamClosed(stream_id, fin_received) {
    return this.$.onIncomingStreamClosed(stream_id, fin_received);
  }
  onOutgoingStreamClosed(stream_id) {
    return this.$.onOutgoingStreamClosed(stream_id);
  }
  onReceivedStopSending(stream_id, stream_error_code) {
    return this.$.onReceivedStopSending(stream_id, stream_error_code);
  }
  onReceivedResetStream(stream_id, stream_error_code) {
    return this.$.onReceivedResetStream(stream_id, stream_error_code);
  }
  onClosed(close_info, final_stats) {
    return this.$.onClosed(close_info, final_stats);
  }
};

network.mojom.WebTransportClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebTransportClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onDatagramReceived(data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.WebTransportClient_OnDatagramReceived_ParamsSpec,
      null,
      [data],
      false);
  }

  onIncomingStreamClosed(stream_id, fin_received) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.WebTransportClient_OnIncomingStreamClosed_ParamsSpec,
      null,
      [stream_id, fin_received],
      false);
  }

  onOutgoingStreamClosed(stream_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.WebTransportClient_OnOutgoingStreamClosed_ParamsSpec,
      null,
      [stream_id],
      false);
  }

  onReceivedStopSending(stream_id, stream_error_code) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.WebTransportClient_OnReceivedStopSending_ParamsSpec,
      null,
      [stream_id, stream_error_code],
      false);
  }

  onReceivedResetStream(stream_id, stream_error_code) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      network.mojom.WebTransportClient_OnReceivedResetStream_ParamsSpec,
      null,
      [stream_id, stream_error_code],
      false);
  }

  onClosed(close_info, final_stats) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      network.mojom.WebTransportClient_OnClosed_ParamsSpec,
      null,
      [close_info, final_stats],
      false);
  }

};

network.mojom.WebTransportClient.getRemote = function() {
  let remote = new network.mojom.WebTransportClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebTransportClient',
    'context');
  return remote.$;
};

network.mojom.WebTransportClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebTransportClient', [
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
        
        // Try Method 0: OnDatagramReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransportClient_OnDatagramReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDatagramReceived (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnIncomingStreamClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransportClient_OnIncomingStreamClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnIncomingStreamClosed (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnOutgoingStreamClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransportClient_OnOutgoingStreamClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOutgoingStreamClosed (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnReceivedStopSending
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransportClient_OnReceivedStopSending_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReceivedStopSending (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnReceivedResetStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransportClient_OnReceivedResetStream_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReceivedResetStream (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransportClient_OnClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClosed (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(network.mojom.WebTransportClient_OnDatagramReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDatagramReceived');
          const result = this.impl.onDatagramReceived(params.data);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransportClient_OnIncomingStreamClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onIncomingStreamClosed');
          const result = this.impl.onIncomingStreamClosed(params.stream_id, params.fin_received);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransportClient_OnOutgoingStreamClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOutgoingStreamClosed');
          const result = this.impl.onOutgoingStreamClosed(params.stream_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransportClient_OnReceivedStopSending_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReceivedStopSending');
          const result = this.impl.onReceivedStopSending(params.stream_id, params.stream_error_code);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransportClient_OnReceivedResetStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReceivedResetStream');
          const result = this.impl.onReceivedResetStream(params.stream_id, params.stream_error_code);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransportClient_OnClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClosed');
          const result = this.impl.onClosed(params.close_info, params.final_stats);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.WebTransportClientReceiver = network.mojom.WebTransportClientReceiver;

network.mojom.WebTransportClientPtr = network.mojom.WebTransportClientRemote;
network.mojom.WebTransportClientRequest = network.mojom.WebTransportClientPendingReceiver;


// Interface: WebTransportHandshakeClient
mojo.internal.Struct(
    network.mojom.WebTransportHandshakeClient_OnBeforeConnect_ParamsSpec, 'network.mojom.WebTransportHandshakeClient_OnBeforeConnect_Params', [
      mojo.internal.StructField('server_address', 0, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransportHandshakeClient_OnConnectionEstablished_ParamsSpec, 'network.mojom.WebTransportHandshakeClient_OnConnectionEstablished_Params', [
      mojo.internal.StructField('transport', 0, 0, mojo.internal.InterfaceProxy(network.mojom.WebTransportSpec), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceRequest(network.mojom.WebTransportClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('response_headers', 16, 0, network.mojom.HttpResponseHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('selected_application_protocol', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('initial_stats', 32, 0, network.mojom.WebTransportStatsSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    network.mojom.WebTransportHandshakeClient_OnHandshakeFailed_ParamsSpec, 'network.mojom.WebTransportHandshakeClient_OnHandshakeFailed_Params', [
      mojo.internal.StructField('error', 0, 0, network.mojom.WebTransportErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.WebTransportHandshakeClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.WebTransportHandshakeClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebTransportHandshakeClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.WebTransportHandshakeClientPendingReceiver,
      handle);
    this.$ = new network.mojom.WebTransportHandshakeClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onBeforeConnect(server_address) {
    return this.$.onBeforeConnect(server_address);
  }
  onConnectionEstablished(transport, client, response_headers, selected_application_protocol, initial_stats) {
    return this.$.onConnectionEstablished(transport, client, response_headers, selected_application_protocol, initial_stats);
  }
  onHandshakeFailed(error) {
    return this.$.onHandshakeFailed(error);
  }
};

network.mojom.WebTransportHandshakeClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebTransportHandshakeClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onBeforeConnect(server_address) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.WebTransportHandshakeClient_OnBeforeConnect_ParamsSpec,
      null,
      [server_address],
      false);
  }

  onConnectionEstablished(transport, client, response_headers, selected_application_protocol, initial_stats) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.WebTransportHandshakeClient_OnConnectionEstablished_ParamsSpec,
      null,
      [transport, client, response_headers, selected_application_protocol, initial_stats],
      false);
  }

  onHandshakeFailed(error) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.WebTransportHandshakeClient_OnHandshakeFailed_ParamsSpec,
      null,
      [error],
      false);
  }

};

network.mojom.WebTransportHandshakeClient.getRemote = function() {
  let remote = new network.mojom.WebTransportHandshakeClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebTransportHandshakeClient',
    'context');
  return remote.$;
};

network.mojom.WebTransportHandshakeClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebTransportHandshakeClient', [
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
        
        // Try Method 0: OnBeforeConnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransportHandshakeClient_OnBeforeConnect_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBeforeConnect (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnConnectionEstablished
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransportHandshakeClient_OnConnectionEstablished_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnectionEstablished (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnHandshakeFailed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransportHandshakeClient_OnHandshakeFailed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHandshakeFailed (2)');
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
          const params = decoder.decodeStructInline(network.mojom.WebTransportHandshakeClient_OnBeforeConnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBeforeConnect');
          const result = this.impl.onBeforeConnect(params.server_address);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransportHandshakeClient_OnConnectionEstablished_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onConnectionEstablished');
          const result = this.impl.onConnectionEstablished(params.transport, params.client, params.response_headers, params.selected_application_protocol, params.initial_stats);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransportHandshakeClient_OnHandshakeFailed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHandshakeFailed');
          const result = this.impl.onHandshakeFailed(params.error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.WebTransportHandshakeClientReceiver = network.mojom.WebTransportHandshakeClientReceiver;

network.mojom.WebTransportHandshakeClientPtr = network.mojom.WebTransportHandshakeClientRemote;
network.mojom.WebTransportHandshakeClientRequest = network.mojom.WebTransportHandshakeClientPendingReceiver;

