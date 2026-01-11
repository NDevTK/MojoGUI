// Auto-generated MojoJS binding
 // Source: chromium_src/media/mojo/mojom/fuchsia_media.mojom
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

mojo.internal.bindings.media.mojom.VideoDecoderSecureMemoryModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.CdmRequestSpec = { $: {} };
mojo.internal.bindings.media.mojom.StreamProcessorRequestSpec = { $: {} };
mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProvider = {};
mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProvider.$interfaceName = 'media.mojom.FuchsiaMediaCdmProvider';
mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProvider_CreateCdm_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProvider = {};
mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProvider.$interfaceName = 'media.mojom.FuchsiaMediaCodecProvider';
mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProvider_CreateVideoDecoder_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ResponseParamsSpec = { $: {} };

// Enum: VideoDecoderSecureMemoryMode
mojo.internal.bindings.media.mojom.VideoDecoderSecureMemoryMode = {
  CLEAR: 0,
  SECURE: 1,
  SECURE_OUTPUT: 2,
};

// Struct: CdmRequest
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmRequestSpec, 'media.mojom.CdmRequest', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: StreamProcessorRequest
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.StreamProcessorRequestSpec, 'media.mojom.StreamProcessorRequest', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: FuchsiaMediaCdmProvider
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProvider_CreateCdm_ParamsSpec, 'media.mojom.FuchsiaMediaCdmProvider_CreateCdm_Params', [
      mojo.internal.StructField('arg_key_system', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_cdm_request', 8, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.CdmRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.FuchsiaMediaCdmProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createCdm(arg_key_system, arg_cdm_request) {
    return this.$.createCdm(arg_key_system, arg_cdm_request);
  }
};

mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FuchsiaMediaCdmProvider', [
      { explicit: null },
    ]);
  }

  createCdm(arg_key_system, arg_cdm_request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProvider_CreateCdm_ParamsSpec,
      null,
      [arg_key_system, arg_cdm_request],
      false);
  }

};

mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.FuchsiaMediaCdmProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FuchsiaMediaCdmProvider', [
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
        
        // Try Method 0: CreateCdm
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProvider_CreateCdm_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCdm (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProvider_CreateCdm_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCdm');
          const result = this.impl.createCdm(params.arg_key_system, params.arg_cdm_request);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProviderReceiver = mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProviderReceiver;

mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProviderPtr = mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProviderRemote;
mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProviderRequest = mojo.internal.bindings.media.mojom.FuchsiaMediaCdmProviderPendingReceiver;


// Interface: FuchsiaMediaCodecProvider
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProvider_CreateVideoDecoder_ParamsSpec, 'media.mojom.FuchsiaMediaCodecProvider_CreateVideoDecoder_Params', [
      mojo.internal.StructField('arg_codec', 0, 0, mojo.internal.bindings.media.mojom.VideoCodecSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_secure_mode', 8, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.VideoDecoderSecureMemoryModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_stream_processor_request', 16, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.StreamProcessorRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ParamsSpec, 'media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ResponseParamsSpec, 'media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ResponseParams', [
      mojo.internal.StructField('arg_supported_configs', 0, 0, mojo.internal.Array(mojo.internal.bindings.media.mojom.SupportedVideoDecoderConfigSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.FuchsiaMediaCodecProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createVideoDecoder(arg_codec, arg_secure_mode, arg_stream_processor_request) {
    return this.$.createVideoDecoder(arg_codec, arg_secure_mode, arg_stream_processor_request);
  }
  getSupportedVideoDecoderConfigs() {
    return this.$.getSupportedVideoDecoderConfigs();
  }
};

mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FuchsiaMediaCodecProvider', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  createVideoDecoder(arg_codec, arg_secure_mode, arg_stream_processor_request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProvider_CreateVideoDecoder_ParamsSpec,
      null,
      [arg_codec, arg_secure_mode, arg_stream_processor_request],
      false);
  }

  getSupportedVideoDecoderConfigs() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ParamsSpec,
      mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.FuchsiaMediaCodecProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FuchsiaMediaCodecProvider', [
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
        
        // Try Method 0: CreateVideoDecoder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProvider_CreateVideoDecoder_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateVideoDecoder (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetSupportedVideoDecoderConfigs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSupportedVideoDecoderConfigs (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProvider_CreateVideoDecoder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createVideoDecoder');
          const result = this.impl.createVideoDecoder(params.arg_codec, params.arg_secure_mode, params.arg_stream_processor_request);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSupportedVideoDecoderConfigs');
          const result = this.impl.getSupportedVideoDecoderConfigs();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSupportedVideoDecoderConfigs FAILED:', e));
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

mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProviderReceiver = mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProviderReceiver;

mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProviderPtr = mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProviderRemote;
mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProviderRequest = mojo.internal.bindings.media.mojom.FuchsiaMediaCodecProviderPendingReceiver;

