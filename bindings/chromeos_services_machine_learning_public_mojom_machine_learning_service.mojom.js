// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/machine_learning_service.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

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
  }

  clone(receiver) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_Clone_ParamsSpec,
      null,
      [receiver],
      false);
  }

  loadBuiltinModel(spec, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_ResponseParamsSpec,
      [spec, receiver],
      false);
  }

  loadFlatBufferModel(spec, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_ResponseParamsSpec,
      [spec, receiver],
      false);
  }

  loadTextClassifier(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_ResponseParamsSpec,
      [receiver],
      false);
  }

  loadHandwritingModel(spec, receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_ResponseParamsSpec,
      [spec, receiver],
      false);
  }

  loadSpeechRecognizer(config, soda_client, soda_recognizer) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_ResponseParamsSpec,
      [config, soda_client, soda_recognizer],
      false);
  }

  loadGrammarChecker(receiver) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_ResponseParamsSpec,
      [receiver],
      false);
  }

  loadTextSuggester(receiver, spec) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_ResponseParamsSpec,
      [receiver, spec],
      false);
  }

  loadWebPlatformHandwritingModel(constraint, receiver) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_ResponseParamsSpec,
      [constraint, receiver],
      false);
  }

  loadDocumentScanner(receiver, config) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_ResponseParamsSpec,
      [receiver, config],
      false);
  }

  loadImageAnnotator(config, receiver) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_ResponseParamsSpec,
      [config, receiver],
      false);
  }

  loadHeatmapPalmRejection(config, client) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_ResponseParamsSpec,
      [config, client],
      false);
  }

  rEMOVED_4(spec, receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 5: {
          const params = chromeos.machine_learning.mojom.MachineLearningService_Clone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clone(params.receiver);
          break;
        }
        case 0: {
          const params = chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadBuiltinModel(params.spec, params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadFlatBufferModel(params.spec, params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadTextClassifier(params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 3: {
          const params = chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadHandwritingModel(params.spec, params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 6: {
          const params = chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadSpeechRecognizer(params.config, params.soda_client, params.soda_recognizer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 7: {
          const params = chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadGrammarChecker(params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 8: {
          const params = chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadTextSuggester(params.receiver, params.spec);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 9: {
          const params = chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadWebPlatformHandwritingModel(params.constraint, params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 10: {
          const params = chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadDocumentScanner(params.receiver, params.config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 12: {
          const params = chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadImageAnnotator(params.config, params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 13: {
          const params = chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadHeatmapPalmRejection(params.config, params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 4: {
          const params = chromeos.machine_learning.mojom.MachineLearningService_REMOVED_4_ParamsSpec.$.decode(message.payload);
          const result = this.impl.rEMOVED_4(params.spec, params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromeos.machine_learning.mojom.MachineLearningService_REMOVED_4_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

chromeos.machine_learning.mojom.MachineLearningServiceReceiver = chromeos.machine_learning.mojom.MachineLearningServiceReceiver;

chromeos.machine_learning.mojom.MachineLearningServicePtr = chromeos.machine_learning.mojom.MachineLearningServiceRemote;
chromeos.machine_learning.mojom.MachineLearningServiceRequest = chromeos.machine_learning.mojom.MachineLearningServicePendingReceiver;

