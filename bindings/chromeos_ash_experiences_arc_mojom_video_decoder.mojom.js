// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_decoder.mojom
 // Module: arc.mojom

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
 

 mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.sandbox = mojo.internal.bindings.sandbox || {};

mojo.internal.bindings.arc.mojom.DecoderStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.DecoderBufferSpec = { $: {} };
mojo.internal.bindings.arc.mojom.BufferSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecoderConfigSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecoder = {};
mojo.internal.bindings.arc.mojom.VideoDecoder.$interfaceName = 'arc.mojom.VideoDecoder';
mojo.internal.bindings.arc.mojom.VideoDecoder_Initialize_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecoder_Initialize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecoder_Decode_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecoder_Decode_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecoder_Reset_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecoder_Reset_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecoder_ReleaseVideoFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecoderClient = {};
mojo.internal.bindings.arc.mojom.VideoDecoderClient.$interfaceName = 'arc.mojom.VideoDecoderClient';
mojo.internal.bindings.arc.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecoderClient_OnError_ParamsSpec = { $: {} };

// Enum: DecoderStatus
mojo.internal.bindings.arc.mojom.DecoderStatus = {
  OK: 0,
  ABORTED: 1,
  FAILED: 2,
  INVALID_ARGUMENT: 3,
  CREATION_FAILED: 4,
};

// Union: DecoderBuffer
mojo.internal.Union(
    mojo.internal.bindings.arc.mojom.DecoderBufferSpec, 'arc.mojom.DecoderBuffer', {
      'arg_buffer': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.arc.mojom.BufferSpec.$,
        'nullable': false,
      },
      'arg_end_of_stream': {
        'ordinal': 1,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
    });

// Struct: Buffer
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.BufferSpec, 'arc.mojom.Buffer', [
      mojo.internal.StructField('arg_timestamp', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_handle_fd', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_size', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VideoDecoderConfig
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecoderConfigSpec, 'arc.mojom.VideoDecoderConfig', [
      mojo.internal.StructField('arg_profile', 0, 0, mojo.internal.bindings.arc.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_coded_size', 8, 0, mojo.internal.bindings.arc.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: VideoDecoder
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecoder_Initialize_ParamsSpec, 'arc.mojom.VideoDecoder_Initialize_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.VideoDecoderConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.VideoDecoderClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_video_frame_pool', 16, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.arc.mojom.VideoFramePoolRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecoder_Initialize_ResponseParamsSpec, 'arc.mojom.VideoDecoder_Initialize_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.DecoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecoder_Decode_ParamsSpec, 'arc.mojom.VideoDecoder_Decode_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.bindings.arc.mojom.DecoderBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecoder_Decode_ResponseParamsSpec, 'arc.mojom.VideoDecoder_Decode_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.DecoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecoder_Reset_ParamsSpec, 'arc.mojom.VideoDecoder_Reset_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecoder_Reset_ResponseParamsSpec, 'arc.mojom.VideoDecoder_Reset_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecoder_ReleaseVideoFrame_ParamsSpec, 'arc.mojom.VideoDecoder_ReleaseVideoFrame_Params', [
      mojo.internal.StructField('arg_video_frame_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.VideoDecoderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.VideoDecoderRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoDecoder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.VideoDecoderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.VideoDecoderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  initialize(arg_config, arg_client, arg_video_frame_pool) {
    return this.$.initialize(arg_config, arg_client, arg_video_frame_pool);
  }
  decode(arg_buffer) {
    return this.$.decode(arg_buffer);
  }
  reset() {
    return this.$.reset();
  }
  releaseVideoFrame(arg_video_frame_id) {
    return this.$.releaseVideoFrame(arg_video_frame_id);
  }
};

mojo.internal.bindings.arc.mojom.VideoDecoderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoDecoder', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  initialize(arg_config, arg_client, arg_video_frame_pool) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoDecoder_Initialize_ParamsSpec,
      mojo.internal.bindings.arc.mojom.VideoDecoder_Initialize_ResponseParamsSpec,
      [arg_config, arg_client, arg_video_frame_pool],
      false);
  }

  decode(arg_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoDecoder_Decode_ParamsSpec,
      mojo.internal.bindings.arc.mojom.VideoDecoder_Decode_ResponseParamsSpec,
      [arg_buffer],
      false);
  }

  reset() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoDecoder_Reset_ParamsSpec,
      mojo.internal.bindings.arc.mojom.VideoDecoder_Reset_ResponseParamsSpec,
      [],
      false);
  }

  releaseVideoFrame(arg_video_frame_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoDecoder_ReleaseVideoFrame_ParamsSpec,
      null,
      [arg_video_frame_id],
      false);
  }

};

mojo.internal.bindings.arc.mojom.VideoDecoder.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.VideoDecoderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoDecoder',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.VideoDecoderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoDecoder', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
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
        
        // Try Method 0: Initialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecoder_Initialize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Decode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecoder_Decode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Decode (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Reset
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecoder_Reset_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Reset (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ReleaseVideoFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecoder_ReleaseVideoFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReleaseVideoFrame (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecoder_Initialize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.arg_config, params.arg_client, params.arg_video_frame_pool);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.VideoDecoder_Initialize_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Initialize FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecoder_Decode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.decode');
          const result = this.impl.decode(params.arg_buffer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.VideoDecoder_Decode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Decode FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecoder_Reset_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reset');
          const result = this.impl.reset();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.VideoDecoder_Reset_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Reset FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecoder_ReleaseVideoFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.releaseVideoFrame');
          const result = this.impl.releaseVideoFrame(params.arg_video_frame_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.VideoDecoderReceiver = mojo.internal.bindings.arc.mojom.VideoDecoderReceiver;

mojo.internal.bindings.arc.mojom.VideoDecoderPtr = mojo.internal.bindings.arc.mojom.VideoDecoderRemote;
mojo.internal.bindings.arc.mojom.VideoDecoderRequest = mojo.internal.bindings.arc.mojom.VideoDecoderPendingReceiver;


// Interface: VideoDecoderClient
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec, 'arc.mojom.VideoDecoderClient_OnVideoFrameDecoded_Params', [
      mojo.internal.StructField('arg_visible_rect', 0, 0, mojo.internal.bindings.arc.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_timestamp', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_video_frame_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecoderClient_OnError_ParamsSpec, 'arc.mojom.VideoDecoderClient_OnError_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.DecoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.VideoDecoderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.VideoDecoderClientRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoDecoderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.VideoDecoderClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.VideoDecoderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onVideoFrameDecoded(arg_video_frame_id, arg_visible_rect, arg_timestamp) {
    return this.$.onVideoFrameDecoded(arg_video_frame_id, arg_visible_rect, arg_timestamp);
  }
  onError(arg_status) {
    return this.$.onError(arg_status);
  }
};

mojo.internal.bindings.arc.mojom.VideoDecoderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoDecoderClient', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onVideoFrameDecoded(arg_video_frame_id, arg_visible_rect, arg_timestamp) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec,
      null,
      [arg_video_frame_id, arg_visible_rect, arg_timestamp],
      false);
  }

  onError(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoDecoderClient_OnError_ParamsSpec,
      null,
      [arg_status],
      false);
  }

};

mojo.internal.bindings.arc.mojom.VideoDecoderClient.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.VideoDecoderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoDecoderClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.VideoDecoderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoDecoderClient', [
      { explicit: 0 },
      { explicit: 1 },
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
        
        // Try Method 0: OnVideoFrameDecoded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVideoFrameDecoded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecoderClient_OnError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVideoFrameDecoded');
          const result = this.impl.onVideoFrameDecoded(params.arg_video_frame_id, params.arg_visible_rect, params.arg_timestamp);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecoderClient_OnError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.arg_status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.VideoDecoderClientReceiver = mojo.internal.bindings.arc.mojom.VideoDecoderClientReceiver;

mojo.internal.bindings.arc.mojom.VideoDecoderClientPtr = mojo.internal.bindings.arc.mojom.VideoDecoderClientRemote;
mojo.internal.bindings.arc.mojom.VideoDecoderClientRequest = mojo.internal.bindings.arc.mojom.VideoDecoderClientPendingReceiver;

