// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/machine_learning_service.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: LoadModelResult
chromeos.machine_learning.mojom.LoadModelResult = {
  OK: 0,
  MODEL_SPEC_ERROR: 1,
  LOAD_MODEL_ERROR: 2,
  FEATURE_NOT_SUPPORTED_ERROR: 3,
  LANGUAGE_NOT_SUPPORTED_ERROR: 4,
};
chromeos.machine_learning.mojom.LoadModelResultSpec = { $: mojo.internal.Enum() };

// Interface: MachineLearningService
chromeos.machine_learning.mojom.MachineLearningService = {};

chromeos.machine_learning.mojom.MachineLearningService_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService_Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.MachineLearningServiceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_Params',
      packedSize: 24,
      fields: [
        { name: 'spec', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.BuiltinModelSpecSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.ModelRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_Params',
      packedSize: 24,
      fields: [
        { name: 'spec', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.FlatBufferModelSpecSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.ModelRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.TextClassifierRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_Params',
      packedSize: 24,
      fields: [
        { name: 'spec', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.HandwritingRecognizerSpecSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.HandwritingRecognizerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_Params',
      packedSize: 32,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.SodaConfigSpec, nullable: false, minVersion: 0 },
        { name: 'soda_client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.machine_learning.mojom.SodaClientRemote), nullable: false, minVersion: 0 },
        { name: 'soda_recognizer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.SodaRecognizerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.GrammarCheckerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.TextSuggesterRemote), nullable: false, minVersion: 0 },
        { name: 'spec', packedOffset: 8, packedBitOffset: 0, type: chromeos.machine_learning.mojom.TextSuggesterSpecSpec, nullable: true, minVersion: 3 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 3, packedSize: 24}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_Params',
      packedSize: 24,
      fields: [
        { name: 'constraint', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.web_platform.mojom.HandwritingModelConstraintSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.DocumentScannerRemote), nullable: false, minVersion: 0 },
        { name: 'config', packedOffset: 8, packedBitOffset: 0, type: chromeos.machine_learning.mojom.DocumentScannerConfigSpec, nullable: true, minVersion: 6 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 6, packedSize: 24}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_Params',
      packedSize: 24,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.ImageAnnotatorConfigSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.ImageContentAnnotatorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_Params',
      packedSize: 24,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.HeatmapPalmRejectionConfigSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.machine_learning.mojom.HeatmapPalmRejectionClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_REMOVED_4_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService_REMOVED_4_Params',
      packedSize: 24,
      fields: [
        { name: 'spec', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.HandwritingRecognizerSpecSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.HandwritingRecognizerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [receiver]);
  }

  loadBuiltinModel(spec, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_ResponseParamsSpec,
      [spec, receiver]);
  }

  loadFlatBufferModel(spec, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_ResponseParamsSpec,
      [spec, receiver]);
  }

  loadTextClassifier(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_ResponseParamsSpec,
      [receiver]);
  }

  loadHandwritingModel(spec, receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_ResponseParamsSpec,
      [spec, receiver]);
  }

  loadSpeechRecognizer(config, soda_client, soda_recognizer) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_ResponseParamsSpec,
      [config, soda_client, soda_recognizer]);
  }

  loadGrammarChecker(receiver) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_ResponseParamsSpec,
      [receiver]);
  }

  loadTextSuggester(receiver, spec) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_ResponseParamsSpec,
      [receiver, spec]);
  }

  loadWebPlatformHandwritingModel(constraint, receiver) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_ResponseParamsSpec,
      [constraint, receiver]);
  }

  loadDocumentScanner(receiver, config) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_ResponseParamsSpec,
      [receiver, config]);
  }

  loadImageAnnotator(config, receiver) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_ResponseParamsSpec,
      [config, receiver]);
  }

  loadHeatmapPalmRejection(config, client) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_ResponseParamsSpec,
      [config, client]);
  }

  rEMOVED_4(spec, receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.machine_learning.mojom.MachineLearningService_REMOVED_4_ParamsSpec,
      chromeos.machine_learning.mojom.MachineLearningService_REMOVED_4_ResponseParamsSpec,
      [spec, receiver]);
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

// ParamsSpec for Clone
chromeos.machine_learning.mojom.MachineLearningService_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.MachineLearningServiceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadBuiltinModel
chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadBuiltinModel_Params',
      packedSize: 24,
      fields: [
        { name: 'spec', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.BuiltinModelSpecSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.ModelRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadBuiltinModel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadBuiltinModel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.LoadModelResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadFlatBufferModel
chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadFlatBufferModel_Params',
      packedSize: 24,
      fields: [
        { name: 'spec', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.FlatBufferModelSpecSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.ModelRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadFlatBufferModel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadFlatBufferModel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.LoadModelResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadTextClassifier
chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadTextClassifier_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.TextClassifierRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadTextClassifier_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadTextClassifier_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.LoadModelResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadHandwritingModel
chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadHandwritingModel_Params',
      packedSize: 24,
      fields: [
        { name: 'spec', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.HandwritingRecognizerSpecSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.HandwritingRecognizerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadHandwritingModel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadHandwritingModel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.LoadHandwritingModelResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadSpeechRecognizer
chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadSpeechRecognizer_Params',
      packedSize: 32,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.SodaConfigSpec, nullable: false, minVersion: 0 },
        { name: 'soda_client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.machine_learning.mojom.SodaClientRemote), nullable: false, minVersion: 0 },
        { name: 'soda_recognizer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.SodaRecognizerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadSpeechRecognizer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadSpeechRecognizer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.LoadModelResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadGrammarChecker
chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadGrammarChecker_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.GrammarCheckerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadGrammarChecker_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadGrammarChecker_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.LoadModelResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadTextSuggester
chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadTextSuggester_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.TextSuggesterRemote), nullable: false, minVersion: 0 },
        { name: 'spec', packedOffset: 8, packedBitOffset: 0, type: chromeos.machine_learning.mojom.TextSuggesterSpecSpec, nullable: true, minVersion: 3 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 3, packedSize: 24}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadTextSuggester_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadTextSuggester_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.LoadModelResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadWebPlatformHandwritingModel
chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadWebPlatformHandwritingModel_Params',
      packedSize: 24,
      fields: [
        { name: 'constraint', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.web_platform.mojom.HandwritingModelConstraintSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadWebPlatformHandwritingModel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadWebPlatformHandwritingModel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.LoadHandwritingModelResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadDocumentScanner
chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadDocumentScanner_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.DocumentScannerRemote), nullable: false, minVersion: 0 },
        { name: 'config', packedOffset: 8, packedBitOffset: 0, type: chromeos.machine_learning.mojom.DocumentScannerConfigSpec, nullable: true, minVersion: 6 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 6, packedSize: 24}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadDocumentScanner_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadDocumentScanner_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.LoadModelResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadImageAnnotator
chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadImageAnnotator_Params',
      packedSize: 24,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.ImageAnnotatorConfigSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.ImageContentAnnotatorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadImageAnnotator_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadImageAnnotator_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.LoadModelResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadHeatmapPalmRejection
chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadHeatmapPalmRejection_Params',
      packedSize: 24,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.HeatmapPalmRejectionConfigSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.machine_learning.mojom.HeatmapPalmRejectionClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_LoadHeatmapPalmRejection_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.LoadHeatmapPalmRejection_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.LoadHeatmapPalmRejectionResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for REMOVED_4
chromeos.machine_learning.mojom.MachineLearningService_REMOVED_4_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.REMOVED_4_Params',
      packedSize: 24,
      fields: [
        { name: 'spec', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.HandwritingRecognizerSpecSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.HandwritingRecognizerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.machine_learning.mojom.MachineLearningService_REMOVED_4_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MachineLearningService.REMOVED_4_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.LoadModelResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.machine_learning.mojom.MachineLearningServicePtr = chromeos.machine_learning.mojom.MachineLearningServiceRemote;
chromeos.machine_learning.mojom.MachineLearningServiceRequest = chromeos.machine_learning.mojom.MachineLearningServicePendingReceiver;

