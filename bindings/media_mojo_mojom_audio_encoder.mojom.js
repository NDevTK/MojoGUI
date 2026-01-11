// Auto-generated MojoJS binding
 // Source: chromium_src/media/mojo/mojom/audio_encoder.mojom
 // Module: media.mojom

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
 

 mojo.internal.bindings.media = mojo.internal.bindings.media || {};
mojo.internal.bindings.media.mojom = mojo.internal.bindings.media.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.media.mojom.AacOutputFormatSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.AacAudioEncoderConfigSpec = { $: {} };
mojo.internal.bindings.media.mojom.AudioEncoderConfigSpec = { $: {} };
mojo.internal.bindings.media.mojom.EncodedAudioBufferSpec = { $: {} };
mojo.internal.bindings.media.mojom.AudioEncoder = {};
mojo.internal.bindings.media.mojom.AudioEncoder.$interfaceName = 'media.mojom.AudioEncoder';
mojo.internal.bindings.media.mojom.AudioEncoder_Initialize_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.AudioEncoder_Initialize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.AudioEncoder_Encode_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.AudioEncoder_Encode_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.AudioEncoder_Flush_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.AudioEncoder_Flush_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.AudioEncoderClient = {};
mojo.internal.bindings.media.mojom.AudioEncoderClient.$interfaceName = 'media.mojom.AudioEncoderClient';
mojo.internal.bindings.media.mojom.AudioEncoderClient_OnEncodedBufferReady_ParamsSpec = { $: {} };

// Enum: AacOutputFormat
mojo.internal.bindings.media.mojom.AacOutputFormat = {
  kAAC: 0,
  kADTS: 1,
};

// Struct: AacAudioEncoderConfig
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AacAudioEncoderConfigSpec, 'media.mojom.AacAudioEncoderConfig', [
      mojo.internal.StructField('arg_format', 0, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.AacOutputFormatSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AudioEncoderConfig
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioEncoderConfigSpec, 'media.mojom.AudioEncoderConfig', [
      mojo.internal.StructField('arg_codec', 0, 0, mojo.internal.bindings.media.mojom.AudioCodecSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_aac', 8, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.AacAudioEncoderConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sample_rate', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bitrate', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_channel_count', 24, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: EncodedAudioBuffer
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.EncodedAudioBufferSpec, 'media.mojom.EncodedAudioBuffer', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_timestamp', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_duration', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: AudioEncoder
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioEncoder_Initialize_ParamsSpec, 'media.mojom.AudioEncoder_Initialize_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_config', 8, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.AudioEncoderConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioEncoder_Initialize_ResponseParamsSpec, 'media.mojom.AudioEncoder_Initialize_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.media.mojom.EncoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioEncoder_Encode_ParamsSpec, 'media.mojom.AudioEncoder_Encode_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.bindings.media.mojom.AudioBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioEncoder_Encode_ResponseParamsSpec, 'media.mojom.AudioEncoder_Encode_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.media.mojom.EncoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioEncoder_Flush_ParamsSpec, 'media.mojom.AudioEncoder_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioEncoder_Flush_ResponseParamsSpec, 'media.mojom.AudioEncoder_Flush_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.media.mojom.EncoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.AudioEncoderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.AudioEncoderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioEncoder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.AudioEncoderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.AudioEncoderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  initialize(arg_client, arg_config) {
    return this.$.initialize(arg_client, arg_config);
  }
  encode(arg_buffer) {
    return this.$.encode(arg_buffer);
  }
  flush() {
    return this.$.flush();
  }
};

mojo.internal.bindings.media.mojom.AudioEncoderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioEncoder', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  initialize(arg_client, arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.AudioEncoder_Initialize_ParamsSpec,
      mojo.internal.bindings.media.mojom.AudioEncoder_Initialize_ResponseParamsSpec,
      [arg_client, arg_config],
      false);
  }

  encode(arg_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.AudioEncoder_Encode_ParamsSpec,
      mojo.internal.bindings.media.mojom.AudioEncoder_Encode_ResponseParamsSpec,
      [arg_buffer],
      false);
  }

  flush() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media.mojom.AudioEncoder_Flush_ParamsSpec,
      mojo.internal.bindings.media.mojom.AudioEncoder_Flush_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.media.mojom.AudioEncoder.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.AudioEncoderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioEncoder',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.AudioEncoderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioEncoder', [
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
        
        // Try Method 0: Initialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.AudioEncoder_Initialize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Encode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.AudioEncoder_Encode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Encode (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Flush
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.AudioEncoder_Flush_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Flush (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.AudioEncoder_Initialize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.arg_client, params.arg_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.AudioEncoder_Initialize_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Initialize FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.AudioEncoder_Encode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.encode');
          const result = this.impl.encode(params.arg_buffer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.AudioEncoder_Encode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Encode FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.AudioEncoder_Flush_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flush');
          const result = this.impl.flush();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.AudioEncoder_Flush_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Flush FAILED:', e));
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

mojo.internal.bindings.media.mojom.AudioEncoderReceiver = mojo.internal.bindings.media.mojom.AudioEncoderReceiver;

mojo.internal.bindings.media.mojom.AudioEncoderPtr = mojo.internal.bindings.media.mojom.AudioEncoderRemote;
mojo.internal.bindings.media.mojom.AudioEncoderRequest = mojo.internal.bindings.media.mojom.AudioEncoderPendingReceiver;


// Interface: AudioEncoderClient
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioEncoderClient_OnEncodedBufferReady_ParamsSpec, 'media.mojom.AudioEncoderClient_OnEncodedBufferReady_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.EncodedAudioBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_description', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.media.mojom.AudioEncoderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.AudioEncoderClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioEncoderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.AudioEncoderClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.AudioEncoderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onEncodedBufferReady(arg_buffer, arg_description) {
    return this.$.onEncodedBufferReady(arg_buffer, arg_description);
  }
};

mojo.internal.bindings.media.mojom.AudioEncoderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioEncoderClient', [
      { explicit: null },
    ]);
  }

  onEncodedBufferReady(arg_buffer, arg_description) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.AudioEncoderClient_OnEncodedBufferReady_ParamsSpec,
      null,
      [arg_buffer, arg_description],
      false);
  }

};

mojo.internal.bindings.media.mojom.AudioEncoderClient.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.AudioEncoderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioEncoderClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.AudioEncoderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioEncoderClient', [
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
        
        // Try Method 0: OnEncodedBufferReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.AudioEncoderClient_OnEncodedBufferReady_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEncodedBufferReady (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.AudioEncoderClient_OnEncodedBufferReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onEncodedBufferReady');
          const result = this.impl.onEncodedBufferReady(params.arg_buffer, params.arg_description);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.AudioEncoderClientReceiver = mojo.internal.bindings.media.mojom.AudioEncoderClientReceiver;

mojo.internal.bindings.media.mojom.AudioEncoderClientPtr = mojo.internal.bindings.media.mojom.AudioEncoderClientRemote;
mojo.internal.bindings.media.mojom.AudioEncoderClientRequest = mojo.internal.bindings.media.mojom.AudioEncoderClientPendingReceiver;

