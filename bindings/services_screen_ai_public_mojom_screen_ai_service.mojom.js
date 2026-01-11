// Auto-generated MojoJS binding
 // Source: chromium_src/services/screen_ai/public/mojom/screen_ai_service.mojom
 // Module: screen_ai.mojom

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
 

 mojo.internal.bindings.screen_ai = mojo.internal.bindings.screen_ai || {};
mojo.internal.bindings.screen_ai.mojom = mojo.internal.bindings.screen_ai.mojom || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.ax = mojo.internal.bindings.ax || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.screen_ai.mojom.DirectionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.screen_ai.mojom.OcrClientTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.screen_ai.mojom.MceClientTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.screen_ai.mojom.VisualAnnotationSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.LineBoxSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.WordBoxSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator = {};
mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator.$interfaceName = 'screen_ai.mojom.ScreenAIAnnotator';
mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ParamsSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ParamsSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_SetClientType_ParamsSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ParamsSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_SetOCRLightMode_ParamsSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ParamsSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor = {};
mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor.$interfaceName = 'screen_ai.mojom.Screen2xMainContentExtractor';
mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ParamsSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ParamsSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ParamsSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_SetClientType_ParamsSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.OCRService = {};
mojo.internal.bindings.screen_ai.mojom.OCRService.$interfaceName = 'screen_ai.mojom.OCRService';
mojo.internal.bindings.screen_ai.mojom.OCRService_BindAnnotator_ParamsSpec = { $: {} };
mojo.internal.bindings.screen_ai.mojom.MainContentExtractionService = {};
mojo.internal.bindings.screen_ai.mojom.MainContentExtractionService.$interfaceName = 'screen_ai.mojom.MainContentExtractionService';
mojo.internal.bindings.screen_ai.mojom.MainContentExtractionService_BindMainContentExtractor_ParamsSpec = { $: {} };

// Enum: Direction
mojo.internal.bindings.screen_ai.mojom.Direction = {
  DIRECTION_UNSPECIFIED: 0,
  DIRECTION_LEFT_TO_RIGHT: 1,
  DIRECTION_RIGHT_TO_LEFT: 2,
  DIRECTION_TOP_TO_BOTTOM: 3,
};

// Enum: OcrClientType
mojo.internal.bindings.screen_ai.mojom.OcrClientType = {
  kTest: 0,
  kPdfViewer: 1,
  kLocalSearch: 2,
  kCameraApp: 3,
  kMediaApp: 4,
  kScreenshotTextDetection: 5,
};

// Enum: MceClientType
mojo.internal.bindings.screen_ai.mojom.MceClientType = {
  kTest: 0,
  kReadingMode: 1,
  kMainNode: 2,
  kMahi: 3,
};

// Struct: VisualAnnotation
mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.VisualAnnotationSpec, 'screen_ai.mojom.VisualAnnotation', [
      mojo.internal.StructField('arg_lines', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.screen_ai.mojom.LineBoxSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: LineBox
mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.LineBoxSpec, 'screen_ai.mojom.LineBox', [
      mojo.internal.StructField('arg_words', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.screen_ai.mojom.WordBoxSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_text_line', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_language', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_bounding_box', 24, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_block_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_paragraph_id', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bounding_box_angle', 40, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_confidence', 44, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: WordBox
mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.WordBoxSpec, 'screen_ai.mojom.WordBox', [
      mojo.internal.StructField('arg_word', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_language', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_bounding_box', 16, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_direction', 24, 0, mojo.internal.bindings.mojo.internal.bindings.screen_ai.mojom.DirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_whitespace_bounding_box', 32, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bounding_box_angle', 40, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_whitespace_bounding_box_angle', 44, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_confidence', 48, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: ScreenAIAnnotator
mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ParamsSpec, 'screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_Params', [
      mojo.internal.StructField('arg_image', 0, 0, mojo.internal.bindings.skia.mojom.BitmapN32Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ResponseParamsSpec, 'screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ResponseParams', [
      mojo.internal.StructField('arg_update', 0, 0, mojo.internal.bindings.ax.mojom.AXTreeUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ParamsSpec, 'screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_Params', [
      mojo.internal.StructField('arg_image', 0, 0, mojo.internal.bindings.skia.mojom.BitmapN32Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ResponseParamsSpec, 'screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ResponseParams', [
      mojo.internal.StructField('arg_visual_annotation', 0, 0, mojo.internal.bindings.mojo.internal.bindings.screen_ai.mojom.VisualAnnotationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_SetClientType_ParamsSpec, 'screen_ai.mojom.ScreenAIAnnotator_SetClientType_Params', [
      mojo.internal.StructField('arg_client_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.screen_ai.mojom.OcrClientTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ParamsSpec, 'screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ResponseParamsSpec, 'screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ResponseParams', [
      mojo.internal.StructField('arg_max_dimension', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_SetOCRLightMode_ParamsSpec, 'screen_ai.mojom.ScreenAIAnnotator_SetOCRLightMode_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ParamsSpec, 'screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ResponseParamsSpec, 'screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ResponseParams', [
      mojo.internal.StructField('arg_busy', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotatorRemote = class {
  static get $interfaceName() {
    return 'screen_ai.mojom.ScreenAIAnnotator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotatorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  performOcrAndReturnAXTreeUpdate(arg_image) {
    return this.$.performOcrAndReturnAXTreeUpdate(arg_image);
  }
  performOcrAndReturnAnnotation(arg_image) {
    return this.$.performOcrAndReturnAnnotation(arg_image);
  }
  setClientType(arg_client_type) {
    return this.$.setClientType(arg_client_type);
  }
  getMaxImageDimension() {
    return this.$.getMaxImageDimension();
  }
  setOCRLightMode(arg_enabled) {
    return this.$.setOCRLightMode(arg_enabled);
  }
  isOCRBusy() {
    return this.$.isOCRBusy();
  }
};

mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ScreenAIAnnotator', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  performOcrAndReturnAXTreeUpdate(arg_image) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ParamsSpec,
      mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ResponseParamsSpec,
      [arg_image],
      false);
  }

  performOcrAndReturnAnnotation(arg_image) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ParamsSpec,
      mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ResponseParamsSpec,
      [arg_image],
      false);
  }

  setClientType(arg_client_type) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_SetClientType_ParamsSpec,
      null,
      [arg_client_type],
      false);
  }

  getMaxImageDimension() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ParamsSpec,
      mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ResponseParamsSpec,
      [],
      false);
  }

  setOCRLightMode(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_SetOCRLightMode_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  isOCRBusy() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ParamsSpec,
      mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator.getRemote = function() {
  let remote = new mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'screen_ai.mojom.ScreenAIAnnotator',
    'context');
  return remote.$;
};

mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotatorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ScreenAIAnnotator', [
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
        
        // Try Method 0: PerformOcrAndReturnAXTreeUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PerformOcrAndReturnAXTreeUpdate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: PerformOcrAndReturnAnnotation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PerformOcrAndReturnAnnotation (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetClientType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_SetClientType_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetClientType (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetMaxImageDimension
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMaxImageDimension (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetOCRLightMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_SetOCRLightMode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOCRLightMode (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: IsOCRBusy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsOCRBusy (5)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.performOcrAndReturnAXTreeUpdate');
          const result = this.impl.performOcrAndReturnAXTreeUpdate(params.arg_image);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PerformOcrAndReturnAXTreeUpdate FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.performOcrAndReturnAnnotation');
          const result = this.impl.performOcrAndReturnAnnotation(params.arg_image);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PerformOcrAndReturnAnnotation FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_SetClientType_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setClientType');
          const result = this.impl.setClientType(params.arg_client_type);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMaxImageDimension');
          const result = this.impl.getMaxImageDimension();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetMaxImageDimension FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_SetOCRLightMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOCRLightMode');
          const result = this.impl.setOCRLightMode(params.arg_enabled);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isOCRBusy');
          const result = this.impl.isOCRBusy();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsOCRBusy FAILED:', e));
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

mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotatorReceiver = mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotatorReceiver;

mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotatorPtr = mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotatorRemote;
mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotatorRequest = mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotatorPendingReceiver;


// Interface: Screen2xMainContentExtractor
mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ParamsSpec, 'screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_Params', [
      mojo.internal.StructField('arg_snapshot', 0, 0, mojo.internal.bindings.ax.mojom.AXTreeUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ResponseParamsSpec, 'screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ResponseParams', [
      mojo.internal.StructField('arg_content_node_ids', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ParamsSpec, 'screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_Params', [
      mojo.internal.StructField('arg_snapshot', 0, 0, mojo.internal.bindings.ax.mojom.AXTreeUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ResponseParamsSpec, 'screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ResponseParams', [
      mojo.internal.StructField('arg_main_node_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ParamsSpec, 'screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_Params', [
      mojo.internal.StructField('arg_ax_tree', 0, 0, mojo.internal.bindings.ax.mojom.AXTreeUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ResponseParamsSpec, 'screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ResponseParams', [
      mojo.internal.StructField('arg_tree_id', 0, 0, mojo.internal.bindings.ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_node_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_SetClientType_ParamsSpec, 'screen_ai.mojom.Screen2xMainContentExtractor_SetClientType_Params', [
      mojo.internal.StructField('arg_client_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.screen_ai.mojom.MceClientTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractorRemote = class {
  static get $interfaceName() {
    return 'screen_ai.mojom.Screen2xMainContentExtractor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  extractMainContent(arg_snapshot) {
    return this.$.extractMainContent(arg_snapshot);
  }
  extractMainNode(arg_snapshot) {
    return this.$.extractMainNode(arg_snapshot);
  }
  identifyMainNode(arg_ax_tree) {
    return this.$.identifyMainNode(arg_ax_tree);
  }
  setClientType(arg_client_type) {
    return this.$.setClientType(arg_client_type);
  }
};

mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Screen2xMainContentExtractor', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  extractMainContent(arg_snapshot) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ParamsSpec,
      mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ResponseParamsSpec,
      [arg_snapshot],
      false);
  }

  extractMainNode(arg_snapshot) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ParamsSpec,
      mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ResponseParamsSpec,
      [arg_snapshot],
      false);
  }

  identifyMainNode(arg_ax_tree) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ParamsSpec,
      mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ResponseParamsSpec,
      [arg_ax_tree],
      false);
  }

  setClientType(arg_client_type) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_SetClientType_ParamsSpec,
      null,
      [arg_client_type],
      false);
  }

};

mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor.getRemote = function() {
  let remote = new mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'screen_ai.mojom.Screen2xMainContentExtractor',
    'context');
  return remote.$;
};

mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Screen2xMainContentExtractor', [
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
        
        // Try Method 0: ExtractMainContent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtractMainContent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ExtractMainNode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtractMainNode (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: IdentifyMainNode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IdentifyMainNode (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetClientType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_SetClientType_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetClientType (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.extractMainContent');
          const result = this.impl.extractMainContent(params.arg_snapshot);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ExtractMainContent FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.extractMainNode');
          const result = this.impl.extractMainNode(params.arg_snapshot);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ExtractMainNode FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.identifyMainNode');
          const result = this.impl.identifyMainNode(params.arg_ax_tree);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IdentifyMainNode FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractor_SetClientType_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setClientType');
          const result = this.impl.setClientType(params.arg_client_type);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractorReceiver = mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractorReceiver;

mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractorPtr = mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractorRemote;
mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractorRequest = mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractorPendingReceiver;


// Interface: OCRService
mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.OCRService_BindAnnotator_ParamsSpec, 'screen_ai.mojom.OCRService_BindAnnotator_Params', [
      mojo.internal.StructField('arg_annotator', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.screen_ai.mojom.ScreenAIAnnotatorSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.screen_ai.mojom.OCRServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.screen_ai.mojom.OCRServiceRemote = class {
  static get $interfaceName() {
    return 'screen_ai.mojom.OCRService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.screen_ai.mojom.OCRServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.screen_ai.mojom.OCRServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindAnnotator(arg_annotator) {
    return this.$.bindAnnotator(arg_annotator);
  }
};

mojo.internal.bindings.screen_ai.mojom.OCRServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OCRService', [
      { explicit: null },
    ]);
  }

  bindAnnotator(arg_annotator) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.screen_ai.mojom.OCRService_BindAnnotator_ParamsSpec,
      null,
      [arg_annotator],
      false);
  }

};

mojo.internal.bindings.screen_ai.mojom.OCRService.getRemote = function() {
  let remote = new mojo.internal.bindings.screen_ai.mojom.OCRServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'screen_ai.mojom.OCRService',
    'context');
  return remote.$;
};

mojo.internal.bindings.screen_ai.mojom.OCRServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OCRService', [
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
        
        // Try Method 0: BindAnnotator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.OCRService_BindAnnotator_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAnnotator (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.OCRService_BindAnnotator_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindAnnotator');
          const result = this.impl.bindAnnotator(params.arg_annotator);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.screen_ai.mojom.OCRServiceReceiver = mojo.internal.bindings.screen_ai.mojom.OCRServiceReceiver;

mojo.internal.bindings.screen_ai.mojom.OCRServicePtr = mojo.internal.bindings.screen_ai.mojom.OCRServiceRemote;
mojo.internal.bindings.screen_ai.mojom.OCRServiceRequest = mojo.internal.bindings.screen_ai.mojom.OCRServicePendingReceiver;


// Interface: MainContentExtractionService
mojo.internal.Struct(
    mojo.internal.bindings.screen_ai.mojom.MainContentExtractionService_BindMainContentExtractor_ParamsSpec, 'screen_ai.mojom.MainContentExtractionService_BindMainContentExtractor_Params', [
      mojo.internal.StructField('arg_main_content_extractor', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.screen_ai.mojom.Screen2xMainContentExtractorSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.screen_ai.mojom.MainContentExtractionServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.screen_ai.mojom.MainContentExtractionServiceRemote = class {
  static get $interfaceName() {
    return 'screen_ai.mojom.MainContentExtractionService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.screen_ai.mojom.MainContentExtractionServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.screen_ai.mojom.MainContentExtractionServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindMainContentExtractor(arg_main_content_extractor) {
    return this.$.bindMainContentExtractor(arg_main_content_extractor);
  }
};

mojo.internal.bindings.screen_ai.mojom.MainContentExtractionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MainContentExtractionService', [
      { explicit: null },
    ]);
  }

  bindMainContentExtractor(arg_main_content_extractor) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.screen_ai.mojom.MainContentExtractionService_BindMainContentExtractor_ParamsSpec,
      null,
      [arg_main_content_extractor],
      false);
  }

};

mojo.internal.bindings.screen_ai.mojom.MainContentExtractionService.getRemote = function() {
  let remote = new mojo.internal.bindings.screen_ai.mojom.MainContentExtractionServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'screen_ai.mojom.MainContentExtractionService',
    'context');
  return remote.$;
};

mojo.internal.bindings.screen_ai.mojom.MainContentExtractionServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MainContentExtractionService', [
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
        
        // Try Method 0: BindMainContentExtractor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.MainContentExtractionService_BindMainContentExtractor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindMainContentExtractor (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.screen_ai.mojom.MainContentExtractionService_BindMainContentExtractor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindMainContentExtractor');
          const result = this.impl.bindMainContentExtractor(params.arg_main_content_extractor);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.screen_ai.mojom.MainContentExtractionServiceReceiver = mojo.internal.bindings.screen_ai.mojom.MainContentExtractionServiceReceiver;

mojo.internal.bindings.screen_ai.mojom.MainContentExtractionServicePtr = mojo.internal.bindings.screen_ai.mojom.MainContentExtractionServiceRemote;
mojo.internal.bindings.screen_ai.mojom.MainContentExtractionServiceRequest = mojo.internal.bindings.screen_ai.mojom.MainContentExtractionServicePendingReceiver;

