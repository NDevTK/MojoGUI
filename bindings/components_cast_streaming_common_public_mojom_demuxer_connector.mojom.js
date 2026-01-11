// Auto-generated MojoJS binding
 // Source: chromium_src/components/cast_streaming/common/public/mojom/demuxer_connector.mojom
 // Module: cast_streaming.mojom

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
 

 mojo.internal.bindings.cast_streaming = mojo.internal.bindings.cast_streaming || {};
mojo.internal.bindings.cast_streaming.mojom = mojo.internal.bindings.cast_streaming.mojom || {};
mojo.internal.bindings.media = mojo.internal.bindings.media || {};

mojo.internal.bindings.cast_streaming.mojom.GetAudioBufferResponseSpec = { $: {} };
mojo.internal.bindings.cast_streaming.mojom.GetVideoBufferResponseSpec = { $: {} };
mojo.internal.bindings.cast_streaming.mojom.AudioStreamInfoSpec = { $: {} };
mojo.internal.bindings.cast_streaming.mojom.VideoStreamInfoSpec = { $: {} };
mojo.internal.bindings.cast_streaming.mojom.AudioStreamInitializationInfoSpec = { $: {} };
mojo.internal.bindings.cast_streaming.mojom.VideoStreamInitializationInfoSpec = { $: {} };
mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester = {};
mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester.$interfaceName = 'cast_streaming.mojom.AudioBufferRequester';
mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester_GetBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester_GetBuffer_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ParamsSpec = { $: {} };
mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester = {};
mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester.$interfaceName = 'cast_streaming.mojom.VideoBufferRequester';
mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester_GetBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester_GetBuffer_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ParamsSpec = { $: {} };
mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cast_streaming.mojom.DemuxerConnector = {};
mojo.internal.bindings.cast_streaming.mojom.DemuxerConnector.$interfaceName = 'cast_streaming.mojom.DemuxerConnector';
mojo.internal.bindings.cast_streaming.mojom.DemuxerConnector_EnableReceiver_ParamsSpec = { $: {} };
mojo.internal.bindings.cast_streaming.mojom.DemuxerConnector_EnableReceiver_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cast_streaming.mojom.DemuxerConnector_OnStreamsInitialized_ParamsSpec = { $: {} };

// Union: GetAudioBufferResponse
mojo.internal.Union(
    mojo.internal.bindings.cast_streaming.mojom.GetAudioBufferResponseSpec, 'cast_streaming.mojom.GetAudioBufferResponse', {
      'arg_stream_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.cast_streaming.mojom.AudioStreamInfoSpec.$,
        'nullable': false,
      },
      'arg_buffer': {
        'ordinal': 1,
        'type': mojo.internal.bindings.media.mojom.DecoderBufferSpec.$,
        'nullable': false,
      },
    });

// Union: GetVideoBufferResponse
mojo.internal.Union(
    mojo.internal.bindings.cast_streaming.mojom.GetVideoBufferResponseSpec, 'cast_streaming.mojom.GetVideoBufferResponse', {
      'arg_stream_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.cast_streaming.mojom.VideoStreamInfoSpec.$,
        'nullable': false,
      },
      'arg_buffer': {
        'ordinal': 1,
        'type': mojo.internal.bindings.media.mojom.DecoderBufferSpec.$,
        'nullable': false,
      },
    });

// Struct: AudioStreamInfo
mojo.internal.Struct(
    mojo.internal.bindings.cast_streaming.mojom.AudioStreamInfoSpec, 'cast_streaming.mojom.AudioStreamInfo', [
      mojo.internal.StructField('arg_decoder_config', 0, 0, mojo.internal.bindings.media.mojom.AudioDecoderConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_data_pipe', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VideoStreamInfo
mojo.internal.Struct(
    mojo.internal.bindings.cast_streaming.mojom.VideoStreamInfoSpec, 'cast_streaming.mojom.VideoStreamInfo', [
      mojo.internal.StructField('arg_decoder_config', 0, 0, mojo.internal.bindings.media.mojom.VideoDecoderConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_data_pipe', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AudioStreamInitializationInfo
mojo.internal.Struct(
    mojo.internal.bindings.cast_streaming.mojom.AudioStreamInitializationInfoSpec, 'cast_streaming.mojom.AudioStreamInitializationInfo', [
      mojo.internal.StructField('arg_buffer_requester', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequesterSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_stream_initialization_info', 8, 0, mojo.internal.bindings.mojo.internal.bindings.cast_streaming.mojom.AudioStreamInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VideoStreamInitializationInfo
mojo.internal.Struct(
    mojo.internal.bindings.cast_streaming.mojom.VideoStreamInitializationInfoSpec, 'cast_streaming.mojom.VideoStreamInitializationInfo', [
      mojo.internal.StructField('arg_buffer_requester', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequesterSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_stream_initialization_info', 8, 0, mojo.internal.bindings.mojo.internal.bindings.cast_streaming.mojom.VideoStreamInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: AudioBufferRequester
mojo.internal.Struct(
    mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester_GetBuffer_ParamsSpec, 'cast_streaming.mojom.AudioBufferRequester_GetBuffer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester_GetBuffer_ResponseParamsSpec, 'cast_streaming.mojom.AudioBufferRequester_GetBuffer_ResponseParams', [
      mojo.internal.StructField('arg_buffer_response', 0, 0, mojo.internal.bindings.cast_streaming.mojom.GetAudioBufferResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ParamsSpec, 'cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ResponseParamsSpec, 'cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequesterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequesterRemote = class {
  static get $interfaceName() {
    return 'cast_streaming.mojom.AudioBufferRequester';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequesterPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequesterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getBuffer() {
    return this.$.getBuffer();
  }
  enableBitstreamConverter() {
    return this.$.enableBitstreamConverter();
  }
};

mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequesterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioBufferRequester', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getBuffer() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester_GetBuffer_ParamsSpec,
      mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester_GetBuffer_ResponseParamsSpec,
      [],
      false);
  }

  enableBitstreamConverter() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ParamsSpec,
      mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester.getRemote = function() {
  let remote = new mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequesterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cast_streaming.mojom.AudioBufferRequester',
    'context');
  return remote.$;
};

mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequesterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioBufferRequester', [
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
        
        // Try Method 0: GetBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester_GetBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBuffer (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: EnableBitstreamConverter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableBitstreamConverter (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester_GetBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getBuffer');
          const result = this.impl.getBuffer();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester_GetBuffer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetBuffer FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableBitstreamConverter');
          const result = this.impl.enableBitstreamConverter();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EnableBitstreamConverter FAILED:', e));
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

mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequesterReceiver = mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequesterReceiver;

mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequesterPtr = mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequesterRemote;
mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequesterRequest = mojo.internal.bindings.cast_streaming.mojom.AudioBufferRequesterPendingReceiver;


// Interface: VideoBufferRequester
mojo.internal.Struct(
    mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester_GetBuffer_ParamsSpec, 'cast_streaming.mojom.VideoBufferRequester_GetBuffer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester_GetBuffer_ResponseParamsSpec, 'cast_streaming.mojom.VideoBufferRequester_GetBuffer_ResponseParams', [
      mojo.internal.StructField('arg_buffer_response', 0, 0, mojo.internal.bindings.cast_streaming.mojom.GetVideoBufferResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ParamsSpec, 'cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ResponseParamsSpec, 'cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequesterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequesterRemote = class {
  static get $interfaceName() {
    return 'cast_streaming.mojom.VideoBufferRequester';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequesterPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequesterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getBuffer() {
    return this.$.getBuffer();
  }
  enableBitstreamConverter() {
    return this.$.enableBitstreamConverter();
  }
};

mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequesterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoBufferRequester', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getBuffer() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester_GetBuffer_ParamsSpec,
      mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester_GetBuffer_ResponseParamsSpec,
      [],
      false);
  }

  enableBitstreamConverter() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ParamsSpec,
      mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester.getRemote = function() {
  let remote = new mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequesterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cast_streaming.mojom.VideoBufferRequester',
    'context');
  return remote.$;
};

mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequesterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoBufferRequester', [
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
        
        // Try Method 0: GetBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester_GetBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBuffer (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: EnableBitstreamConverter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableBitstreamConverter (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester_GetBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getBuffer');
          const result = this.impl.getBuffer();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester_GetBuffer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetBuffer FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableBitstreamConverter');
          const result = this.impl.enableBitstreamConverter();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EnableBitstreamConverter FAILED:', e));
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

mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequesterReceiver = mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequesterReceiver;

mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequesterPtr = mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequesterRemote;
mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequesterRequest = mojo.internal.bindings.cast_streaming.mojom.VideoBufferRequesterPendingReceiver;


// Interface: DemuxerConnector
mojo.internal.Struct(
    mojo.internal.bindings.cast_streaming.mojom.DemuxerConnector_EnableReceiver_ParamsSpec, 'cast_streaming.mojom.DemuxerConnector_EnableReceiver_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cast_streaming.mojom.DemuxerConnector_EnableReceiver_ResponseParamsSpec, 'cast_streaming.mojom.DemuxerConnector_EnableReceiver_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cast_streaming.mojom.DemuxerConnector_OnStreamsInitialized_ParamsSpec, 'cast_streaming.mojom.DemuxerConnector_OnStreamsInitialized_Params', [
      mojo.internal.StructField('arg_audio_buffer_requester', 0, 0, mojo.internal.bindings.mojo.internal.bindings.cast_streaming.mojom.AudioStreamInitializationInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_video_buffer_requester', 8, 0, mojo.internal.bindings.mojo.internal.bindings.cast_streaming.mojom.VideoStreamInitializationInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.cast_streaming.mojom.DemuxerConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cast_streaming.mojom.DemuxerConnectorRemote = class {
  static get $interfaceName() {
    return 'cast_streaming.mojom.DemuxerConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cast_streaming.mojom.DemuxerConnectorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cast_streaming.mojom.DemuxerConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  enableReceiver() {
    return this.$.enableReceiver();
  }
  onStreamsInitialized(arg_audio_buffer_requester, arg_video_buffer_requester) {
    return this.$.onStreamsInitialized(arg_audio_buffer_requester, arg_video_buffer_requester);
  }
};

mojo.internal.bindings.cast_streaming.mojom.DemuxerConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DemuxerConnector', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  enableReceiver() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cast_streaming.mojom.DemuxerConnector_EnableReceiver_ParamsSpec,
      mojo.internal.bindings.cast_streaming.mojom.DemuxerConnector_EnableReceiver_ResponseParamsSpec,
      [],
      false);
  }

  onStreamsInitialized(arg_audio_buffer_requester, arg_video_buffer_requester) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.cast_streaming.mojom.DemuxerConnector_OnStreamsInitialized_ParamsSpec,
      null,
      [arg_audio_buffer_requester, arg_video_buffer_requester],
      false);
  }

};

mojo.internal.bindings.cast_streaming.mojom.DemuxerConnector.getRemote = function() {
  let remote = new mojo.internal.bindings.cast_streaming.mojom.DemuxerConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cast_streaming.mojom.DemuxerConnector',
    'context');
  return remote.$;
};

mojo.internal.bindings.cast_streaming.mojom.DemuxerConnectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DemuxerConnector', [
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
        
        // Try Method 0: EnableReceiver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cast_streaming.mojom.DemuxerConnector_EnableReceiver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableReceiver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnStreamsInitialized
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cast_streaming.mojom.DemuxerConnector_OnStreamsInitialized_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStreamsInitialized (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cast_streaming.mojom.DemuxerConnector_EnableReceiver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableReceiver');
          const result = this.impl.enableReceiver();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cast_streaming.mojom.DemuxerConnector_EnableReceiver_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EnableReceiver FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cast_streaming.mojom.DemuxerConnector_OnStreamsInitialized_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStreamsInitialized');
          const result = this.impl.onStreamsInitialized(params.arg_audio_buffer_requester, params.arg_video_buffer_requester);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.cast_streaming.mojom.DemuxerConnectorReceiver = mojo.internal.bindings.cast_streaming.mojom.DemuxerConnectorReceiver;

mojo.internal.bindings.cast_streaming.mojom.DemuxerConnectorPtr = mojo.internal.bindings.cast_streaming.mojom.DemuxerConnectorRemote;
mojo.internal.bindings.cast_streaming.mojom.DemuxerConnectorRequest = mojo.internal.bindings.cast_streaming.mojom.DemuxerConnectorPendingReceiver;

