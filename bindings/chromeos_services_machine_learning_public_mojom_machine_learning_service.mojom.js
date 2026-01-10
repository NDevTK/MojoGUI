// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/machine_learning_service.mojom
// Module: chromeos.machine_learning.mojom

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
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};

chromeos.machine_learning.mojom.LoadModelResultSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.MachineLearningService = {};
chromeos.machine_learning.mojom.MachineLearningService.$interfaceName = 'chromeos.machine_learning.mojom.MachineLearningService';
chromeos.machine_learning.mojom.MachineLearningService_Clone_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_ResponseParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_ResponseParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_ResponseParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_ResponseParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_ResponseParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_ResponseParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_ResponseParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_ResponseParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_ResponseParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_ResponseParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_ResponseParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_REMOVED_4_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.MachineLearningService_REMOVED_4_ResponseParamsSpec = { $: {} };

// Enum: LoadModelResult
chromeos.machine_learning.mojom.LoadModelResult = {
  OK: 0,
  MODEL_SPEC_ERROR: 1,
  LOAD_MODEL_ERROR: 2,
  FEATURE_NOT_SUPPORTED_ERROR: 3,
  LANGUAGE_NOT_SUPPORTED_ERROR: 4,
};

// Interface: MachineLearningService
mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_Clone_ParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_Clone_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.MachineLearningServiceSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_ParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_Params', [
      mojo.internal.StructField('spec', 0, 0, chromeos.machine_learning.mojom.BuiltinModelSpecSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.ModelRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_ResponseParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.LoadModelResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_ParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_Params', [
      mojo.internal.StructField('spec', 0, 0, chromeos.machine_learning.mojom.FlatBufferModelSpecSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.ModelRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_ResponseParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.LoadModelResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_ParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.TextClassifierRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_ResponseParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.LoadModelResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_ParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_Params', [
      mojo.internal.StructField('spec', 0, 0, chromeos.machine_learning.mojom.HandwritingRecognizerSpecSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.HandwritingRecognizerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_ResponseParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.LoadHandwritingModelResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_ParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_Params', [
      mojo.internal.StructField('config', 0, 0, chromeos.machine_learning.mojom.SodaConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('soda_client', 8, 0, mojo.internal.InterfaceProxy(chromeos.machine_learning.mojom.SodaClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('soda_recognizer', 16, 0, mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.SodaRecognizerRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_ResponseParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.LoadModelResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_ParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.GrammarCheckerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_ResponseParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.LoadModelResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_ParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.TextSuggesterRemote), null, false, 0, undefined),
      mojo.internal.StructField('spec', 8, 0, chromeos.machine_learning.mojom.TextSuggesterSpecSpec.$, null, true, 3, undefined),
    ],
    [[0, 16], [3, 24]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_ResponseParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.LoadModelResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_ParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_Params', [
      mojo.internal.StructField('constraint', 0, 0, chromeos.machine_learning.web_platform.mojom.HandwritingModelConstraintSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_ResponseParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.LoadHandwritingModelResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_ParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.DocumentScannerRemote), null, false, 0, undefined),
      mojo.internal.StructField('config', 8, 0, chromeos.machine_learning.mojom.DocumentScannerConfigSpec.$, null, true, 6, undefined),
    ],
    [[0, 16], [6, 24]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_ResponseParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.LoadModelResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_ParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_Params', [
      mojo.internal.StructField('config', 0, 0, chromeos.machine_learning.mojom.ImageAnnotatorConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.ImageContentAnnotatorRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_ResponseParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.LoadModelResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_ParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_Params', [
      mojo.internal.StructField('config', 0, 0, chromeos.machine_learning.mojom.HeatmapPalmRejectionConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(chromeos.machine_learning.mojom.HeatmapPalmRejectionClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_ResponseParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.LoadHeatmapPalmRejectionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_REMOVED_4_ParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_REMOVED_4_Params', [
      mojo.internal.StructField('spec', 0, 0, chromeos.machine_learning.mojom.HandwritingRecognizerSpecSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.HandwritingRecognizerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.MachineLearningService_REMOVED_4_ResponseParamsSpec, 'chromeos.machine_learning.mojom.MachineLearningService_REMOVED_4_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.LoadModelResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.machine_learning.mojom.MachineLearningServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.mojom.MachineLearningServiceRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.MachineLearningService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.mojom.MachineLearningServicePendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.mojom.MachineLearningServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.mojom.MachineLearningServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MachineLearningService', [
      { explicit: 5 },
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 4 },
    ]);
  }

  clone(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_Clone_ParamsSpec,
      null,
      [receiver],
      false);
  }

  loadBuiltinModel(spec, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_ResponseParamsSpec,
      [spec, receiver],
      false);
  }

  loadFlatBufferModel(spec, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_ResponseParamsSpec,
      [spec, receiver],
      false);
  }

  loadTextClassifier(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_ResponseParamsSpec,
      [receiver],
      false);
  }

  loadHandwritingModel(spec, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_ResponseParamsSpec,
      [spec, receiver],
      false);
  }

  loadSpeechRecognizer(config, soda_client, soda_recognizer) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_ResponseParamsSpec,
      [config, soda_client, soda_recognizer],
      false);
  }

  loadGrammarChecker(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_ResponseParamsSpec,
      [receiver],
      false);
  }

  loadTextSuggester(receiver, spec) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_ResponseParamsSpec,
      [receiver, spec],
      false);
  }

  loadWebPlatformHandwritingModel(constraint, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_ResponseParamsSpec,
      [constraint, receiver],
      false);
  }

  loadDocumentScanner(receiver, config) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_ResponseParamsSpec,
      [receiver, config],
      false);
  }

  loadImageAnnotator(config, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_ResponseParamsSpec,
      [config, receiver],
      false);
  }

  loadHeatmapPalmRejection(config, client) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_ResponseParamsSpec,
      [config, client],
      false);
  }

  rEMOVED_4(spec, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_REMOVED_4_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_REMOVED_4_ResponseParamsSpec,
      [spec, receiver],
      false);
  }

};

chromeos.machine_learning.mojom.MachineLearningService.getRemote = function() {
  let remote = new chromeos.machine_learning.mojom.MachineLearningServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.MachineLearningService',
    'context');
  return remote.$;
};

chromeos.machine_learning.mojom.MachineLearningServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MachineLearningService', [
      { explicit: 5 },
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 4 },
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
        
        // Try Method 0: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_Clone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Clone (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: LoadBuiltinModel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadBuiltinModel (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: LoadFlatBufferModel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadFlatBufferModel (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: LoadTextClassifier
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadTextClassifier (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: LoadHandwritingModel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadHandwritingModel (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: LoadSpeechRecognizer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadSpeechRecognizer (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: LoadGrammarChecker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadGrammarChecker (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: LoadTextSuggester
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadTextSuggester (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: LoadWebPlatformHandwritingModel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadWebPlatformHandwritingModel (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: LoadDocumentScanner
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadDocumentScanner (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: LoadImageAnnotator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadImageAnnotator (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: LoadHeatmapPalmRejection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadHeatmapPalmRejection (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: REMOVED_4
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_REMOVED_4_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> REMOVED_4 (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_Clone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadBuiltinModel');
          const result = this.impl.loadBuiltinModel(params.spec, params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadFlatBufferModel');
          const result = this.impl.loadFlatBufferModel(params.spec, params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadTextClassifier');
          const result = this.impl.loadTextClassifier(params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadHandwritingModel');
          const result = this.impl.loadHandwritingModel(params.spec, params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadSpeechRecognizer');
          const result = this.impl.loadSpeechRecognizer(params.config, params.soda_client, params.soda_recognizer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadGrammarChecker');
          const result = this.impl.loadGrammarChecker(params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadTextSuggester');
          const result = this.impl.loadTextSuggester(params.receiver, params.spec);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadWebPlatformHandwritingModel');
          const result = this.impl.loadWebPlatformHandwritingModel(params.constraint, params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadDocumentScanner');
          const result = this.impl.loadDocumentScanner(params.receiver, params.config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadImageAnnotator');
          const result = this.impl.loadImageAnnotator(params.config, params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadHeatmapPalmRejection');
          const result = this.impl.loadHeatmapPalmRejection(params.config, params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.MachineLearningService_REMOVED_4_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rEMOVED_4');
          const result = this.impl.rEMOVED_4(params.spec, params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_REMOVED_4_ResponseParamsSpec);
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

chromeos.machine_learning.mojom.MachineLearningServiceReceiver = chromeos.machine_learning.mojom.MachineLearningServiceReceiver;

chromeos.machine_learning.mojom.MachineLearningServicePtr = chromeos.machine_learning.mojom.MachineLearningServiceRemote;
chromeos.machine_learning.mojom.MachineLearningServiceRequest = chromeos.machine_learning.mojom.MachineLearningServicePendingReceiver;

