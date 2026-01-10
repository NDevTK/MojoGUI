// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/handwriting/handwriting.mojom
// Module: handwriting.mojom

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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
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
var handwriting = handwriting || {};
handwriting.mojom = handwriting.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

handwriting.mojom.HandwritingRecognitionTypeSpec = { $: mojo.internal.Enum() };
handwriting.mojom.HandwritingInputTypeSpec = { $: mojo.internal.Enum() };
handwriting.mojom.CreateHandwritingRecognizerResultSpec = { $: mojo.internal.Enum() };
handwriting.mojom.HandwritingPointSpec = { $: {} };
handwriting.mojom.HandwritingStrokeSpec = { $: {} };
handwriting.mojom.HandwritingDrawingSegmentSpec = { $: {} };
handwriting.mojom.HandwritingSegmentSpec = { $: {} };
handwriting.mojom.HandwritingPredictionSpec = { $: {} };
handwriting.mojom.HandwritingHintsSpec = { $: {} };
handwriting.mojom.HandwritingHintsQueryResultSpec = { $: {} };
handwriting.mojom.QueryHandwritingRecognizerResultSpec = { $: {} };
handwriting.mojom.HandwritingModelConstraintSpec = { $: {} };
handwriting.mojom.HandwritingRecognizer = {};
handwriting.mojom.HandwritingRecognizer.$interfaceName = 'handwriting.mojom.HandwritingRecognizer';
handwriting.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec = { $: {} };
handwriting.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec = { $: {} };
handwriting.mojom.HandwritingRecognitionService = {};
handwriting.mojom.HandwritingRecognitionService.$interfaceName = 'handwriting.mojom.HandwritingRecognitionService';
handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ParamsSpec = { $: {} };
handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ResponseParamsSpec = { $: {} };
handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ParamsSpec = { $: {} };
handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ResponseParamsSpec = { $: {} };

// Enum: HandwritingRecognitionType
handwriting.mojom.HandwritingRecognitionType = {
  kText: 0,
};

// Enum: HandwritingInputType
handwriting.mojom.HandwritingInputType = {
  kMouse: 0,
  kStylus: 1,
  kTouch: 2,
};

// Enum: CreateHandwritingRecognizerResult
handwriting.mojom.CreateHandwritingRecognizerResult = {
  kOk: 0,
  kError: 1,
  kNotSupported: 2,
};

// Struct: HandwritingPoint
mojo.internal.Struct(
    handwriting.mojom.HandwritingPointSpec, 'handwriting.mojom.HandwritingPoint', [
      mojo.internal.StructField('location', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('t', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HandwritingStroke
mojo.internal.Struct(
    handwriting.mojom.HandwritingStrokeSpec, 'handwriting.mojom.HandwritingStroke', [
      mojo.internal.StructField('points', 0, 0, mojo.internal.Array(handwriting.mojom.HandwritingPointSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HandwritingDrawingSegment
mojo.internal.Struct(
    handwriting.mojom.HandwritingDrawingSegmentSpec, 'handwriting.mojom.HandwritingDrawingSegment', [
      mojo.internal.StructField('stroke_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('begin_point_index', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end_point_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HandwritingSegment
mojo.internal.Struct(
    handwriting.mojom.HandwritingSegmentSpec, 'handwriting.mojom.HandwritingSegment', [
      mojo.internal.StructField('grapheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('drawing_segments', 8, 0, mojo.internal.Array(handwriting.mojom.HandwritingDrawingSegmentSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('begin_index', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end_index', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: HandwritingPrediction
mojo.internal.Struct(
    handwriting.mojom.HandwritingPredictionSpec, 'handwriting.mojom.HandwritingPrediction', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('segmentation_result', 8, 0, mojo.internal.Array(handwriting.mojom.HandwritingSegmentSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HandwritingHints
mojo.internal.Struct(
    handwriting.mojom.HandwritingHintsSpec, 'handwriting.mojom.HandwritingHints', [
      mojo.internal.StructField('recognition_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('input_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_context', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('alternatives', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: HandwritingHintsQueryResult
mojo.internal.Struct(
    handwriting.mojom.HandwritingHintsQueryResultSpec, 'handwriting.mojom.HandwritingHintsQueryResult', [
      mojo.internal.StructField('recognition_type', 0, 0, mojo.internal.Array(handwriting.mojom.HandwritingRecognitionTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('input_type', 8, 0, mojo.internal.Array(handwriting.mojom.HandwritingInputTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('text_context', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('alternatives', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: QueryHandwritingRecognizerResult
mojo.internal.Struct(
    handwriting.mojom.QueryHandwritingRecognizerResultSpec, 'handwriting.mojom.QueryHandwritingRecognizerResult', [
      mojo.internal.StructField('hints', 0, 0, handwriting.mojom.HandwritingHintsQueryResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_alternatives', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('text_segmentation', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HandwritingModelConstraint
mojo.internal.Struct(
    handwriting.mojom.HandwritingModelConstraintSpec, 'handwriting.mojom.HandwritingModelConstraint', [
      mojo.internal.StructField('languages', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: HandwritingRecognizer
mojo.internal.Struct(
    handwriting.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec, 'handwriting.mojom.HandwritingRecognizer_GetPrediction_Params', [
      mojo.internal.StructField('strokes', 0, 0, mojo.internal.Array(handwriting.mojom.HandwritingStrokeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('hints', 8, 0, handwriting.mojom.HandwritingHintsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    handwriting.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec, 'handwriting.mojom.HandwritingRecognizer_GetPrediction_ResponseParams', [
      mojo.internal.StructField('prediction', 0, 0, mojo.internal.Array(handwriting.mojom.HandwritingPredictionSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

handwriting.mojom.HandwritingRecognizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

handwriting.mojom.HandwritingRecognizerRemote = class {
  static get $interfaceName() {
    return 'handwriting.mojom.HandwritingRecognizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      handwriting.mojom.HandwritingRecognizerPendingReceiver,
      handle);
    this.$ = new handwriting.mojom.HandwritingRecognizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

handwriting.mojom.HandwritingRecognizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HandwritingRecognizer', [
      { explicit: null },
    ]);
  }

  getPrediction(strokes, hints) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      handwriting.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec,
      handwriting.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec,
      [strokes, hints],
      false);
  }

};

handwriting.mojom.HandwritingRecognizer.getRemote = function() {
  let remote = new handwriting.mojom.HandwritingRecognizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'handwriting.mojom.HandwritingRecognizer',
    'context');
  return remote.$;
};

handwriting.mojom.HandwritingRecognizerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HandwritingRecognizer', [
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
        
        // Try Method 0: GetPrediction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(handwriting.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPrediction (0)');
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
          const params = decoder.decodeStructInline(handwriting.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getPrediction');
          const result = this.impl.getPrediction(params.strokes, params.hints);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, handwriting.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec);
               responder(response);
            });
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

handwriting.mojom.HandwritingRecognizerReceiver = handwriting.mojom.HandwritingRecognizerReceiver;

handwriting.mojom.HandwritingRecognizerPtr = handwriting.mojom.HandwritingRecognizerRemote;
handwriting.mojom.HandwritingRecognizerRequest = handwriting.mojom.HandwritingRecognizerPendingReceiver;


// Interface: HandwritingRecognitionService
mojo.internal.Struct(
    handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ParamsSpec, 'handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_Params', [
      mojo.internal.StructField('constraint', 0, 0, handwriting.mojom.HandwritingModelConstraintSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ResponseParamsSpec, 'handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, handwriting.mojom.CreateHandwritingRecognizerResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('handwriting_recognizer', 8, 0, mojo.internal.InterfaceProxy(handwriting.mojom.HandwritingRecognizerSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ParamsSpec, 'handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_Params', [
      mojo.internal.StructField('constraint', 0, 0, handwriting.mojom.HandwritingModelConstraintSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ResponseParamsSpec, 'handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, handwriting.mojom.QueryHandwritingRecognizerResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

handwriting.mojom.HandwritingRecognitionServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

handwriting.mojom.HandwritingRecognitionServiceRemote = class {
  static get $interfaceName() {
    return 'handwriting.mojom.HandwritingRecognitionService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      handwriting.mojom.HandwritingRecognitionServicePendingReceiver,
      handle);
    this.$ = new handwriting.mojom.HandwritingRecognitionServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

handwriting.mojom.HandwritingRecognitionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HandwritingRecognitionService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  createHandwritingRecognizer(constraint) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ParamsSpec,
      handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ResponseParamsSpec,
      [constraint],
      false);
  }

  queryHandwritingRecognizer(constraint) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ParamsSpec,
      handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ResponseParamsSpec,
      [constraint],
      false);
  }

};

handwriting.mojom.HandwritingRecognitionService.getRemote = function() {
  let remote = new handwriting.mojom.HandwritingRecognitionServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'handwriting.mojom.HandwritingRecognitionService',
    'context');
  return remote.$;
};

handwriting.mojom.HandwritingRecognitionServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HandwritingRecognitionService', [
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
        
        // Try Method 0: CreateHandwritingRecognizer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateHandwritingRecognizer (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: QueryHandwritingRecognizer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueryHandwritingRecognizer (1)');
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
          const params = decoder.decodeStructInline(handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.createHandwritingRecognizer');
          const result = this.impl.createHandwritingRecognizer(params.constraint);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.queryHandwritingRecognizer');
          const result = this.impl.queryHandwritingRecognizer(params.constraint);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ResponseParamsSpec);
               responder(response);
            });
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

handwriting.mojom.HandwritingRecognitionServiceReceiver = handwriting.mojom.HandwritingRecognitionServiceReceiver;

handwriting.mojom.HandwritingRecognitionServicePtr = handwriting.mojom.HandwritingRecognitionServiceRemote;
handwriting.mojom.HandwritingRecognitionServiceRequest = handwriting.mojom.HandwritingRecognitionServicePendingReceiver;

