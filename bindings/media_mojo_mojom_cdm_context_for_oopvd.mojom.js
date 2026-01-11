// Auto-generated MojoJS binding
 // Source: chromium_src/media/mojo/mojom/cdm_context_for_oopvd.mojom
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
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.media.mojom.DecryptStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.CdmContextEventSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.CdmContextEventCallback = {};
mojo.internal.bindings.media.mojom.CdmContextEventCallback.$interfaceName = 'media.mojom.CdmContextEventCallback';
mojo.internal.bindings.media.mojom.CdmContextEventCallback_EventCallback_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.CdmContextForOOPVD = {};
mojo.internal.bindings.media.mojom.CdmContextForOOPVD.$interfaceName = 'media.mojom.CdmContextForOOPVD';
mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetHwKeyData_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetHwKeyData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.CdmContextForOOPVD_RegisterEventCallback_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetHwConfigData_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetHwConfigData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetScreenResolutions_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetScreenResolutions_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ResponseParamsSpec = { $: {} };

// Enum: DecryptStatus
mojo.internal.bindings.media.mojom.DecryptStatus = {
  kSuccess: 0,
  kNoKey: 1,
  kFailure: 2,
};

// Enum: CdmContextEvent
mojo.internal.bindings.media.mojom.CdmContextEvent = {
  kHasAdditionalUsableKey: 0,
  kHardwareContextReset: 1,
};

// Interface: CdmContextEventCallback
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmContextEventCallback_EventCallback_ParamsSpec, 'media.mojom.CdmContextEventCallback_EventCallback_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.media.mojom.CdmContextEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.CdmContextEventCallbackPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.CdmContextEventCallbackRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CdmContextEventCallback';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.CdmContextEventCallbackPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.CdmContextEventCallbackRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  eventCallback(arg_event) {
    return this.$.eventCallback(arg_event);
  }
};

mojo.internal.bindings.media.mojom.CdmContextEventCallbackRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CdmContextEventCallback', [
      { explicit: null },
    ]);
  }

  eventCallback(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.CdmContextEventCallback_EventCallback_ParamsSpec,
      null,
      [arg_event],
      false);
  }

};

mojo.internal.bindings.media.mojom.CdmContextEventCallback.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.CdmContextEventCallbackRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CdmContextEventCallback',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.CdmContextEventCallbackReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CdmContextEventCallback', [
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
        
        // Try Method 0: EventCallback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.CdmContextEventCallback_EventCallback_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EventCallback (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.CdmContextEventCallback_EventCallback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.eventCallback');
          const result = this.impl.eventCallback(params.arg_event);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.CdmContextEventCallbackReceiver = mojo.internal.bindings.media.mojom.CdmContextEventCallbackReceiver;

mojo.internal.bindings.media.mojom.CdmContextEventCallbackPtr = mojo.internal.bindings.media.mojom.CdmContextEventCallbackRemote;
mojo.internal.bindings.media.mojom.CdmContextEventCallbackRequest = mojo.internal.bindings.media.mojom.CdmContextEventCallbackPendingReceiver;


// Interface: CdmContextForOOPVD
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetHwKeyData_ParamsSpec, 'media.mojom.CdmContextForOOPVD_GetHwKeyData_Params', [
      mojo.internal.StructField('arg_decrypt_config', 0, 0, mojo.internal.bindings.media.mojom.DecryptConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hw_identifier', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetHwKeyData_ResponseParamsSpec, 'media.mojom.CdmContextForOOPVD_GetHwKeyData_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.media.mojom.DecryptStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmContextForOOPVD_RegisterEventCallback_ParamsSpec, 'media.mojom.CdmContextForOOPVD_RegisterEventCallback_Params', [
      mojo.internal.StructField('arg_callback', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.CdmContextEventCallbackSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetHwConfigData_ParamsSpec, 'media.mojom.CdmContextForOOPVD_GetHwConfigData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetHwConfigData_ResponseParamsSpec, 'media.mojom.CdmContextForOOPVD_GetHwConfigData_ResponseParams', [
      mojo.internal.StructField('arg_config_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetScreenResolutions_ParamsSpec, 'media.mojom.CdmContextForOOPVD_GetScreenResolutions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetScreenResolutions_ResponseParamsSpec, 'media.mojom.CdmContextForOOPVD_GetScreenResolutions_ResponseParams', [
      mojo.internal.StructField('arg_resolutions', 0, 0, mojo.internal.Array(mojo.internal.bindings.gfx.mojom.SizeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ParamsSpec, 'media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_Params', [
      mojo.internal.StructField('arg_size', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ResponseParamsSpec, 'media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ResponseParams', [
      mojo.internal.StructField('arg_secure_buffer', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ParamsSpec, 'media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_Params', [
      mojo.internal.StructField('arg_secure_handle', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_stream_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ResponseParamsSpec, 'media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ResponseParams', [
      mojo.internal.StructField('arg_slice_header', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ParamsSpec, 'media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.bindings.media.mojom.DecoderBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bytes', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ResponseParamsSpec, 'media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.media.mojom.DecryptStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_decoder_buffer', 8, 0, mojo.internal.bindings.media.mojom.DecoderBufferSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_bytes', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.media.mojom.CdmContextForOOPVDPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.CdmContextForOOPVDRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CdmContextForOOPVD';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.CdmContextForOOPVDPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.CdmContextForOOPVDRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getHwKeyData(arg_decrypt_config, arg_hw_identifier) {
    return this.$.getHwKeyData(arg_decrypt_config, arg_hw_identifier);
  }
  registerEventCallback(arg_callback) {
    return this.$.registerEventCallback(arg_callback);
  }
  getHwConfigData() {
    return this.$.getHwConfigData();
  }
  getScreenResolutions() {
    return this.$.getScreenResolutions();
  }
  allocateSecureBuffer(arg_size) {
    return this.$.allocateSecureBuffer(arg_size);
  }
  parseEncryptedSliceHeader(arg_secure_handle, arg_offset, arg_stream_data) {
    return this.$.parseEncryptedSliceHeader(arg_secure_handle, arg_offset, arg_stream_data);
  }
  decryptVideoBuffer(arg_buffer, arg_bytes) {
    return this.$.decryptVideoBuffer(arg_buffer, arg_bytes);
  }
};

mojo.internal.bindings.media.mojom.CdmContextForOOPVDRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CdmContextForOOPVD', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getHwKeyData(arg_decrypt_config, arg_hw_identifier) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetHwKeyData_ParamsSpec,
      mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetHwKeyData_ResponseParamsSpec,
      [arg_decrypt_config, arg_hw_identifier],
      false);
  }

  registerEventCallback(arg_callback) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.CdmContextForOOPVD_RegisterEventCallback_ParamsSpec,
      null,
      [arg_callback],
      false);
  }

  getHwConfigData() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetHwConfigData_ParamsSpec,
      mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetHwConfigData_ResponseParamsSpec,
      [],
      false);
  }

  getScreenResolutions() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetScreenResolutions_ParamsSpec,
      mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetScreenResolutions_ResponseParamsSpec,
      [],
      false);
  }

  allocateSecureBuffer(arg_size) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ParamsSpec,
      mojo.internal.bindings.media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ResponseParamsSpec,
      [arg_size],
      false);
  }

  parseEncryptedSliceHeader(arg_secure_handle, arg_offset, arg_stream_data) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ParamsSpec,
      mojo.internal.bindings.media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ResponseParamsSpec,
      [arg_secure_handle, arg_offset, arg_stream_data],
      false);
  }

  decryptVideoBuffer(arg_buffer, arg_bytes) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ParamsSpec,
      mojo.internal.bindings.media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ResponseParamsSpec,
      [arg_buffer, arg_bytes],
      false);
  }

};

mojo.internal.bindings.media.mojom.CdmContextForOOPVD.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.CdmContextForOOPVDRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CdmContextForOOPVD',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.CdmContextForOOPVDReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CdmContextForOOPVD', [
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
        
        // Try Method 0: GetHwKeyData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetHwKeyData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHwKeyData (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RegisterEventCallback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.CdmContextForOOPVD_RegisterEventCallback_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterEventCallback (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetHwConfigData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetHwConfigData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHwConfigData (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetScreenResolutions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetScreenResolutions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetScreenResolutions (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: AllocateSecureBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AllocateSecureBuffer (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ParseEncryptedSliceHeader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ParseEncryptedSliceHeader (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DecryptVideoBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DecryptVideoBuffer (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetHwKeyData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHwKeyData');
          const result = this.impl.getHwKeyData(params.arg_decrypt_config, params.arg_hw_identifier);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetHwKeyData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetHwKeyData FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.CdmContextForOOPVD_RegisterEventCallback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerEventCallback');
          const result = this.impl.registerEventCallback(params.arg_callback);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetHwConfigData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHwConfigData');
          const result = this.impl.getHwConfigData();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetHwConfigData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetHwConfigData FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetScreenResolutions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getScreenResolutions');
          const result = this.impl.getScreenResolutions();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.CdmContextForOOPVD_GetScreenResolutions_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetScreenResolutions FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.allocateSecureBuffer');
          const result = this.impl.allocateSecureBuffer(params.arg_size);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AllocateSecureBuffer FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.parseEncryptedSliceHeader');
          const result = this.impl.parseEncryptedSliceHeader(params.arg_secure_handle, params.arg_offset, params.arg_stream_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ParseEncryptedSliceHeader FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.decryptVideoBuffer');
          const result = this.impl.decryptVideoBuffer(params.arg_buffer, params.arg_bytes);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DecryptVideoBuffer FAILED:', e));
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

mojo.internal.bindings.media.mojom.CdmContextForOOPVDReceiver = mojo.internal.bindings.media.mojom.CdmContextForOOPVDReceiver;

mojo.internal.bindings.media.mojom.CdmContextForOOPVDPtr = mojo.internal.bindings.media.mojom.CdmContextForOOPVDRemote;
mojo.internal.bindings.media.mojom.CdmContextForOOPVDRequest = mojo.internal.bindings.media.mojom.CdmContextForOOPVDPendingReceiver;

