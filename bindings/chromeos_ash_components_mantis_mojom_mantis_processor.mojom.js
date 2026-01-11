// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/components/mantis/mojom/mantis_processor.mojom
 // Module: mantis.mojom

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
 

 mojo.internal.bindings.mantis = mojo.internal.bindings.mantis || {};
mojo.internal.bindings.mantis.mojom = mojo.internal.bindings.mantis.mojom || {};

mojo.internal.bindings.mantis.mojom.MantisErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.mantis.mojom.SafetyClassifierVerdictSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.mantis.mojom.SegmentationModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.mantis.mojom.MantisResultSpec = { $: {} };
mojo.internal.bindings.mantis.mojom.TouchPointSpec = { $: {} };
mojo.internal.bindings.mantis.mojom.MantisProcessor = {};
mojo.internal.bindings.mantis.mojom.MantisProcessorSpec = { $ : {} };
mojo.internal.bindings.mantis.mojom.MantisProcessor.$interfaceName = 'mantis.mojom.MantisProcessor';
mojo.internal.bindings.mantis.mojom.MantisProcessor_Inpainting_ParamsSpec = { $: {} };
mojo.internal.bindings.mantis.mojom.MantisProcessor_Inpainting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mantis.mojom.MantisProcessor_GenerativeFill_ParamsSpec = { $: {} };
mojo.internal.bindings.mantis.mojom.MantisProcessor_GenerativeFill_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mantis.mojom.MantisProcessor_Segmentation_ParamsSpec = { $: {} };
mojo.internal.bindings.mantis.mojom.MantisProcessor_Segmentation_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mantis.mojom.MantisProcessor_ClassifyImageSafety_ParamsSpec = { $: {} };
mojo.internal.bindings.mantis.mojom.MantisProcessor_ClassifyImageSafety_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mantis.mojom.MantisProcessor_Outpainting_ParamsSpec = { $: {} };
mojo.internal.bindings.mantis.mojom.MantisProcessor_Outpainting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mantis.mojom.MantisProcessor_InferSegmentationMode_ParamsSpec = { $: {} };
mojo.internal.bindings.mantis.mojom.MantisProcessor_InferSegmentationMode_ResponseParamsSpec = { $: {} };

// Enum: MantisError
mojo.internal.bindings.mantis.mojom.MantisError = {
  kUnknownError: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
};

// Enum: SafetyClassifierVerdict
mojo.internal.bindings.mantis.mojom.SafetyClassifierVerdict = {
  kPass: 0,
  kFail: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
};

// Enum: SegmentationMode
mojo.internal.bindings.mantis.mojom.SegmentationMode = {
  kScribble: 0,
  kLasso: 1,
};

// Union: MantisResult
mojo.internal.Union(
    mojo.internal.bindings.mantis.mojom.MantisResultSpec, 'mantis.mojom.MantisResult', {
      'arg_error': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mantis.mojom.MantisErrorSpec.$,
        'nullable': false,
      },
      'arg_result_image': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
    });

// Struct: TouchPoint
mojo.internal.Struct(
    mojo.internal.bindings.mantis.mojom.TouchPointSpec, 'mantis.mojom.TouchPoint', [
      mojo.internal.StructField('arg_x', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_y', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: MantisProcessor
mojo.internal.Struct(
    mojo.internal.bindings.mantis.mojom.MantisProcessor_Inpainting_ParamsSpec, 'mantis.mojom.MantisProcessor_Inpainting_Params', [
      mojo.internal.StructField('arg_image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_mask', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_seed', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.mantis.mojom.MantisProcessor_Inpainting_ResponseParamsSpec, 'mantis.mojom.MantisProcessor_Inpainting_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mantis.mojom.MantisResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mantis.mojom.MantisProcessor_GenerativeFill_ParamsSpec, 'mantis.mojom.MantisProcessor_GenerativeFill_Params', [
      mojo.internal.StructField('arg_image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_mask', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_prompt', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_seed', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.mantis.mojom.MantisProcessor_GenerativeFill_ResponseParamsSpec, 'mantis.mojom.MantisProcessor_GenerativeFill_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mantis.mojom.MantisResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mantis.mojom.MantisProcessor_Segmentation_ParamsSpec, 'mantis.mojom.MantisProcessor_Segmentation_Params', [
      mojo.internal.StructField('arg_image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_prior', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.mantis.mojom.MantisProcessor_Segmentation_ResponseParamsSpec, 'mantis.mojom.MantisProcessor_Segmentation_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mantis.mojom.MantisResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mantis.mojom.MantisProcessor_ClassifyImageSafety_ParamsSpec, 'mantis.mojom.MantisProcessor_ClassifyImageSafety_Params', [
      mojo.internal.StructField('arg_image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mantis.mojom.MantisProcessor_ClassifyImageSafety_ResponseParamsSpec, 'mantis.mojom.MantisProcessor_ClassifyImageSafety_ResponseParams', [
      mojo.internal.StructField('arg_verdict', 0, 0, mojo.internal.bindings.mantis.mojom.SafetyClassifierVerdictSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mantis.mojom.MantisProcessor_Outpainting_ParamsSpec, 'mantis.mojom.MantisProcessor_Outpainting_Params', [
      mojo.internal.StructField('arg_image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_mask', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_seed', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.mantis.mojom.MantisProcessor_Outpainting_ResponseParamsSpec, 'mantis.mojom.MantisProcessor_Outpainting_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mantis.mojom.MantisResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mantis.mojom.MantisProcessor_InferSegmentationMode_ParamsSpec, 'mantis.mojom.MantisProcessor_InferSegmentationMode_Params', [
      mojo.internal.StructField('arg_gesture', 0, 0, mojo.internal.Array(mojo.internal.bindings.mantis.mojom.TouchPointSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mantis.mojom.MantisProcessor_InferSegmentationMode_ResponseParamsSpec, 'mantis.mojom.MantisProcessor_InferSegmentationMode_ResponseParams', [
      mojo.internal.StructField('arg_mode', 0, 0, mojo.internal.bindings.mantis.mojom.SegmentationModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.mantis.mojom.MantisProcessorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.mantis.mojom.MantisProcessorRemote = class {
  static get $interfaceName() {
    return 'mantis.mojom.MantisProcessor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.mantis.mojom.MantisProcessorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.mantis.mojom.MantisProcessorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  inpainting(arg_image, arg_mask, arg_seed) {
    return this.$.inpainting(arg_image, arg_mask, arg_seed);
  }
  generativeFill(arg_image, arg_mask, arg_seed, arg_prompt) {
    return this.$.generativeFill(arg_image, arg_mask, arg_seed, arg_prompt);
  }
  segmentation(arg_image, arg_prior) {
    return this.$.segmentation(arg_image, arg_prior);
  }
  classifyImageSafety(arg_image) {
    return this.$.classifyImageSafety(arg_image);
  }
  outpainting(arg_image, arg_mask, arg_seed) {
    return this.$.outpainting(arg_image, arg_mask, arg_seed);
  }
  inferSegmentationMode(arg_gesture) {
    return this.$.inferSegmentationMode(arg_gesture);
  }
};

mojo.internal.bindings.mantis.mojom.MantisProcessorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('mantis.mojom.MantisProcessor', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
    ]);
  }

  inpainting(arg_image, arg_mask, arg_seed) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.mantis.mojom.MantisProcessor_Inpainting_ParamsSpec,
      mojo.internal.bindings.mantis.mojom.MantisProcessor_Inpainting_ResponseParamsSpec,
      [arg_image, arg_mask, arg_seed],
      false);
  }

  generativeFill(arg_image, arg_mask, arg_seed, arg_prompt) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.mantis.mojom.MantisProcessor_GenerativeFill_ParamsSpec,
      mojo.internal.bindings.mantis.mojom.MantisProcessor_GenerativeFill_ResponseParamsSpec,
      [arg_image, arg_mask, arg_seed, arg_prompt],
      false);
  }

  segmentation(arg_image, arg_prior) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.mantis.mojom.MantisProcessor_Segmentation_ParamsSpec,
      mojo.internal.bindings.mantis.mojom.MantisProcessor_Segmentation_ResponseParamsSpec,
      [arg_image, arg_prior],
      false);
  }

  classifyImageSafety(arg_image) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.mantis.mojom.MantisProcessor_ClassifyImageSafety_ParamsSpec,
      mojo.internal.bindings.mantis.mojom.MantisProcessor_ClassifyImageSafety_ResponseParamsSpec,
      [arg_image],
      false);
  }

  outpainting(arg_image, arg_mask, arg_seed) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.mantis.mojom.MantisProcessor_Outpainting_ParamsSpec,
      mojo.internal.bindings.mantis.mojom.MantisProcessor_Outpainting_ResponseParamsSpec,
      [arg_image, arg_mask, arg_seed],
      false);
  }

  inferSegmentationMode(arg_gesture) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.mantis.mojom.MantisProcessor_InferSegmentationMode_ParamsSpec,
      mojo.internal.bindings.mantis.mojom.MantisProcessor_InferSegmentationMode_ResponseParamsSpec,
      [arg_gesture],
      false);
  }

};

mojo.internal.bindings.mantis.mojom.MantisProcessor.getRemote = function() {
  let remote = new mojo.internal.bindings.mantis.mojom.MantisProcessorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mantis.mojom.MantisProcessor',
    'context');
  return remote.$;
};

mojo.internal.bindings.mantis.mojom.MantisProcessorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('mantis.mojom.MantisProcessor', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
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
        
        // Try Method 0: Inpainting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mantis.mojom.MantisProcessor_Inpainting_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Inpainting (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GenerativeFill
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mantis.mojom.MantisProcessor_GenerativeFill_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenerativeFill (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Segmentation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mantis.mojom.MantisProcessor_Segmentation_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Segmentation (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ClassifyImageSafety
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mantis.mojom.MantisProcessor_ClassifyImageSafety_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClassifyImageSafety (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Outpainting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mantis.mojom.MantisProcessor_Outpainting_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Outpainting (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: InferSegmentationMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mantis.mojom.MantisProcessor_InferSegmentationMode_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InferSegmentationMode (5)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.mantis.mojom.MantisProcessor_Inpainting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.inpainting');
          const result = this.impl.inpainting(params.arg_image, params.arg_mask, params.arg_seed);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mantis.mojom.MantisProcessor_Inpainting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Inpainting FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mantis.mojom.MantisProcessor_GenerativeFill_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.generativeFill');
          const result = this.impl.generativeFill(params.arg_image, params.arg_mask, params.arg_seed, params.arg_prompt);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mantis.mojom.MantisProcessor_GenerativeFill_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GenerativeFill FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mantis.mojom.MantisProcessor_Segmentation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.segmentation');
          const result = this.impl.segmentation(params.arg_image, params.arg_prior);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mantis.mojom.MantisProcessor_Segmentation_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Segmentation FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mantis.mojom.MantisProcessor_ClassifyImageSafety_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.classifyImageSafety');
          const result = this.impl.classifyImageSafety(params.arg_image);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mantis.mojom.MantisProcessor_ClassifyImageSafety_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClassifyImageSafety FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mantis.mojom.MantisProcessor_Outpainting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.outpainting');
          const result = this.impl.outpainting(params.arg_image, params.arg_mask, params.arg_seed);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mantis.mojom.MantisProcessor_Outpainting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Outpainting FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mantis.mojom.MantisProcessor_InferSegmentationMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.inferSegmentationMode');
          const result = this.impl.inferSegmentationMode(params.arg_gesture);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mantis.mojom.MantisProcessor_InferSegmentationMode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InferSegmentationMode FAILED:', e));
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

mojo.internal.bindings.mantis.mojom.MantisProcessorReceiver = mojo.internal.bindings.mantis.mojom.MantisProcessorReceiver;

mojo.internal.bindings.mantis.mojom.MantisProcessorPtr = mojo.internal.bindings.mantis.mojom.MantisProcessorRemote;
mojo.internal.bindings.mantis.mojom.MantisProcessorRequest = mojo.internal.bindings.mantis.mojom.MantisProcessorPendingReceiver;

