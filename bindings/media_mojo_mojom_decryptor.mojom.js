// Auto-generated MojoJS binding
 // Source: chromium_src/media/mojo/mojom/decryptor.mojom
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
 

 mojo.internal.bindings.media = mojo.internal.bindings.media || {};
mojo.internal.bindings.media.mojom = mojo.internal.bindings.media.mojom || {};

mojo.internal.bindings.media.mojom.StatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.StreamTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.Decryptor = {};
mojo.internal.bindings.media.mojom.DecryptorSpec = { $ : {} };
mojo.internal.bindings.media.mojom.Decryptor.$interfaceName = 'media.mojom.Decryptor';
mojo.internal.bindings.media.mojom.Decryptor_Initialize_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Decryptor_Decrypt_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Decryptor_Decrypt_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Decryptor_CancelDecrypt_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Decryptor_InitializeAudioDecoder_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Decryptor_InitializeAudioDecoder_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Decryptor_InitializeVideoDecoder_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Decryptor_InitializeVideoDecoder_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Decryptor_DecryptAndDecodeAudio_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Decryptor_DecryptAndDecodeAudio_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Decryptor_DecryptAndDecodeVideo_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Decryptor_DecryptAndDecodeVideo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Decryptor_ResetDecoder_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.Decryptor_DeinitializeDecoder_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.FrameResourceReleaser = {};
mojo.internal.bindings.media.mojom.FrameResourceReleaserSpec = { $ : {} };
mojo.internal.bindings.media.mojom.FrameResourceReleaser.$interfaceName = 'media.mojom.FrameResourceReleaser';

// Enum: Status
mojo.internal.bindings.media.mojom.Status = {
};

// Enum: StreamType
mojo.internal.bindings.media.mojom.StreamType = {
};

// Interface: Decryptor
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Decryptor_Initialize_ParamsSpec, 'media.mojom.Decryptor_Initialize_Params', [
      mojo.internal.StructField('arg_audio_pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_video_pipe', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_decrypt_pipe', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_decrypted_pipe', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Decryptor_Decrypt_ParamsSpec, 'media.mojom.Decryptor_Decrypt_Params', [
      mojo.internal.StructField('arg_stream_type', 0, 0, mojo.internal.bindings.media.mojom.StreamTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_encrypted', 8, 0, mojo.internal.bindings.media.mojom.DecoderBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Decryptor_Decrypt_ResponseParamsSpec, 'media.mojom.Decryptor_Decrypt_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.media.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer', 8, 0, mojo.internal.bindings.media.mojom.DecoderBufferSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Decryptor_CancelDecrypt_ParamsSpec, 'media.mojom.Decryptor_CancelDecrypt_Params', [
      mojo.internal.StructField('arg_stream_type', 0, 0, mojo.internal.bindings.media.mojom.StreamTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Decryptor_InitializeAudioDecoder_ParamsSpec, 'media.mojom.Decryptor_InitializeAudioDecoder_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.media.mojom.AudioDecoderConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Decryptor_InitializeAudioDecoder_ResponseParamsSpec, 'media.mojom.Decryptor_InitializeAudioDecoder_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Decryptor_InitializeVideoDecoder_ParamsSpec, 'media.mojom.Decryptor_InitializeVideoDecoder_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.media.mojom.VideoDecoderConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Decryptor_InitializeVideoDecoder_ResponseParamsSpec, 'media.mojom.Decryptor_InitializeVideoDecoder_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Decryptor_DecryptAndDecodeAudio_ParamsSpec, 'media.mojom.Decryptor_DecryptAndDecodeAudio_Params', [
      mojo.internal.StructField('arg_encrypted', 0, 0, mojo.internal.bindings.media.mojom.DecoderBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Decryptor_DecryptAndDecodeAudio_ResponseParamsSpec, 'media.mojom.Decryptor_DecryptAndDecodeAudio_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.media.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_audio_buffers', 8, 0, mojo.internal.Array(mojo.internal.bindings.media.mojom.AudioBufferSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Decryptor_DecryptAndDecodeVideo_ParamsSpec, 'media.mojom.Decryptor_DecryptAndDecodeVideo_Params', [
      mojo.internal.StructField('arg_encrypted', 0, 0, mojo.internal.bindings.media.mojom.DecoderBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Decryptor_DecryptAndDecodeVideo_ResponseParamsSpec, 'media.mojom.Decryptor_DecryptAndDecodeVideo_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.media.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_video_frame', 8, 0, mojo.internal.bindings.media.mojom.VideoFrameSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_releaser', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.FrameResourceReleaserRemote), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Decryptor_ResetDecoder_ParamsSpec, 'media.mojom.Decryptor_ResetDecoder_Params', [
      mojo.internal.StructField('arg_stream_type', 0, 0, mojo.internal.bindings.media.mojom.StreamTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Decryptor_DeinitializeDecoder_ParamsSpec, 'media.mojom.Decryptor_DeinitializeDecoder_Params', [
      mojo.internal.StructField('arg_stream_type', 0, 0, mojo.internal.bindings.media.mojom.StreamTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.DecryptorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.DecryptorRemote = class {
  static get $interfaceName() {
    return 'media.mojom.Decryptor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.DecryptorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.DecryptorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  initialize(arg_audio_pipe, arg_video_pipe, arg_decrypt_pipe, arg_decrypted_pipe) {
    return this.$.initialize(arg_audio_pipe, arg_video_pipe, arg_decrypt_pipe, arg_decrypted_pipe);
  }
  decrypt(arg_stream_type, arg_encrypted) {
    return this.$.decrypt(arg_stream_type, arg_encrypted);
  }
  cancelDecrypt(arg_stream_type) {
    return this.$.cancelDecrypt(arg_stream_type);
  }
  initializeAudioDecoder(arg_config) {
    return this.$.initializeAudioDecoder(arg_config);
  }
  initializeVideoDecoder(arg_config) {
    return this.$.initializeVideoDecoder(arg_config);
  }
  decryptAndDecodeAudio(arg_encrypted) {
    return this.$.decryptAndDecodeAudio(arg_encrypted);
  }
  decryptAndDecodeVideo(arg_encrypted) {
    return this.$.decryptAndDecodeVideo(arg_encrypted);
  }
  resetDecoder(arg_stream_type) {
    return this.$.resetDecoder(arg_stream_type);
  }
  deinitializeDecoder(arg_stream_type) {
    return this.$.deinitializeDecoder(arg_stream_type);
  }
};

mojo.internal.bindings.media.mojom.DecryptorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('media.mojom.Decryptor', [
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

  initialize(arg_audio_pipe, arg_video_pipe, arg_decrypt_pipe, arg_decrypted_pipe) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.Decryptor_Initialize_ParamsSpec,
      null,
      [arg_audio_pipe, arg_video_pipe, arg_decrypt_pipe, arg_decrypted_pipe],
      false);
  }

  decrypt(arg_stream_type, arg_encrypted) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.Decryptor_Decrypt_ParamsSpec,
      mojo.internal.bindings.media.mojom.Decryptor_Decrypt_ResponseParamsSpec,
      [arg_stream_type, arg_encrypted],
      false);
  }

  cancelDecrypt(arg_stream_type) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media.mojom.Decryptor_CancelDecrypt_ParamsSpec,
      null,
      [arg_stream_type],
      false);
  }

  initializeAudioDecoder(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.media.mojom.Decryptor_InitializeAudioDecoder_ParamsSpec,
      mojo.internal.bindings.media.mojom.Decryptor_InitializeAudioDecoder_ResponseParamsSpec,
      [arg_config],
      false);
  }

  initializeVideoDecoder(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.media.mojom.Decryptor_InitializeVideoDecoder_ParamsSpec,
      mojo.internal.bindings.media.mojom.Decryptor_InitializeVideoDecoder_ResponseParamsSpec,
      [arg_config],
      false);
  }

  decryptAndDecodeAudio(arg_encrypted) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.media.mojom.Decryptor_DecryptAndDecodeAudio_ParamsSpec,
      mojo.internal.bindings.media.mojom.Decryptor_DecryptAndDecodeAudio_ResponseParamsSpec,
      [arg_encrypted],
      false);
  }

  decryptAndDecodeVideo(arg_encrypted) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.media.mojom.Decryptor_DecryptAndDecodeVideo_ParamsSpec,
      mojo.internal.bindings.media.mojom.Decryptor_DecryptAndDecodeVideo_ResponseParamsSpec,
      [arg_encrypted],
      false);
  }

  resetDecoder(arg_stream_type) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.media.mojom.Decryptor_ResetDecoder_ParamsSpec,
      null,
      [arg_stream_type],
      false);
  }

  deinitializeDecoder(arg_stream_type) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.media.mojom.Decryptor_DeinitializeDecoder_ParamsSpec,
      null,
      [arg_stream_type],
      false);
  }

};

mojo.internal.bindings.media.mojom.Decryptor.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.DecryptorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.Decryptor',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.DecryptorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('media.mojom.Decryptor', [
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
        
        // Try Method 0: Initialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Decryptor_Initialize_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Decrypt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Decryptor_Decrypt_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Decrypt (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CancelDecrypt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Decryptor_CancelDecrypt_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelDecrypt (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: InitializeAudioDecoder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Decryptor_InitializeAudioDecoder_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitializeAudioDecoder (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: InitializeVideoDecoder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Decryptor_InitializeVideoDecoder_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitializeVideoDecoder (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: DecryptAndDecodeAudio
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Decryptor_DecryptAndDecodeAudio_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DecryptAndDecodeAudio (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DecryptAndDecodeVideo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Decryptor_DecryptAndDecodeVideo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DecryptAndDecodeVideo (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ResetDecoder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Decryptor_ResetDecoder_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetDecoder (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DeinitializeDecoder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Decryptor_DeinitializeDecoder_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeinitializeDecoder (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Decryptor_Initialize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.arg_audio_pipe, params.arg_video_pipe, params.arg_decrypt_pipe, params.arg_decrypted_pipe);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Decryptor_Decrypt_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.decrypt');
          const result = this.impl.decrypt(params.arg_stream_type, params.arg_encrypted);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.Decryptor_Decrypt_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Decrypt FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Decryptor_CancelDecrypt_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelDecrypt');
          const result = this.impl.cancelDecrypt(params.arg_stream_type);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Decryptor_InitializeAudioDecoder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initializeAudioDecoder');
          const result = this.impl.initializeAudioDecoder(params.arg_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.Decryptor_InitializeAudioDecoder_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InitializeAudioDecoder FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Decryptor_InitializeVideoDecoder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initializeVideoDecoder');
          const result = this.impl.initializeVideoDecoder(params.arg_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.Decryptor_InitializeVideoDecoder_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InitializeVideoDecoder FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Decryptor_DecryptAndDecodeAudio_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.decryptAndDecodeAudio');
          const result = this.impl.decryptAndDecodeAudio(params.arg_encrypted);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.Decryptor_DecryptAndDecodeAudio_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DecryptAndDecodeAudio FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Decryptor_DecryptAndDecodeVideo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.decryptAndDecodeVideo');
          const result = this.impl.decryptAndDecodeVideo(params.arg_encrypted);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.Decryptor_DecryptAndDecodeVideo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DecryptAndDecodeVideo FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Decryptor_ResetDecoder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resetDecoder');
          const result = this.impl.resetDecoder(params.arg_stream_type);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.Decryptor_DeinitializeDecoder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deinitializeDecoder');
          const result = this.impl.deinitializeDecoder(params.arg_stream_type);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.DecryptorReceiver = mojo.internal.bindings.media.mojom.DecryptorReceiver;

mojo.internal.bindings.media.mojom.DecryptorPtr = mojo.internal.bindings.media.mojom.DecryptorRemote;
mojo.internal.bindings.media.mojom.DecryptorRequest = mojo.internal.bindings.media.mojom.DecryptorPendingReceiver;


// Interface: FrameResourceReleaser
mojo.internal.bindings.media.mojom.FrameResourceReleaserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.FrameResourceReleaserRemote = class {
  static get $interfaceName() {
    return 'media.mojom.FrameResourceReleaser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.FrameResourceReleaserPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.FrameResourceReleaserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojo.internal.bindings.media.mojom.FrameResourceReleaserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('media.mojom.FrameResourceReleaser', [
    ]);
  }

};

mojo.internal.bindings.media.mojom.FrameResourceReleaser.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.FrameResourceReleaserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.FrameResourceReleaser',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.FrameResourceReleaserReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('media.mojom.FrameResourceReleaser', [
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
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.FrameResourceReleaserReceiver = mojo.internal.bindings.media.mojom.FrameResourceReleaserReceiver;

mojo.internal.bindings.media.mojom.FrameResourceReleaserPtr = mojo.internal.bindings.media.mojom.FrameResourceReleaserRemote;
mojo.internal.bindings.media.mojom.FrameResourceReleaserRequest = mojo.internal.bindings.media.mojom.FrameResourceReleaserPendingReceiver;

