// Auto-generated MojoJS binding
// Source: chromium_src/services/screen_ai/public/mojom/screen_ai_service.mojom
// Module: screen_ai.mojom

'use strict';

// Module namespace
var screen_ai = screen_ai || {};
screen_ai.mojom = screen_ai.mojom || {};


// Enum: Direction
screen_ai.mojom.Direction = {
  DIRECTION_UNSPECIFIED: 0,
  DIRECTION_LEFT_TO_RIGHT: 1,
  DIRECTION_RIGHT_TO_LEFT: 2,
  DIRECTION_TOP_TO_BOTTOM: 3,
};

// Enum: OcrClientType
screen_ai.mojom.OcrClientType = {
  kTest: 0,
  kPdfViewer: 1,
  kLocalSearch: 2,
  kCameraApp: 3,
  kMediaApp: 4,
  kScreenshotTextDetection: 5,
};

// Enum: MceClientType
screen_ai.mojom.MceClientType = {
  kTest: 0,
  kReadingMode: 1,
  kMainNode: 2,
  kMahi: 3,
};

// Interface: ScreenAIAnnotator
screen_ai.mojom.ScreenAIAnnotator = {};

screen_ai.mojom.ScreenAIAnnotatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

screen_ai.mojom.ScreenAIAnnotatorRemote = class {
  static get $interfaceName() {
    return 'screen_ai.mojom.ScreenAIAnnotator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      screen_ai.mojom.ScreenAIAnnotatorPendingReceiver,
      handle);
    this.$ = new screen_ai.mojom.ScreenAIAnnotatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

screen_ai.mojom.ScreenAIAnnotatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  performOcrAndReturnAXTreeUpdate(image) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ParamsSpec,
      screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ResponseParamsSpec,
      screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ResponseParamsSpec,
      [image],
      undefined,
      undefined
    );
  }

  performOcrAndReturnAnnotation(image) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ParamsSpec,
      screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ResponseParamsSpec,
      screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ResponseParamsSpec,
      [image],
      undefined,
      undefined
    );
  }

  setClientType(client_type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      screen_ai.mojom.ScreenAIAnnotator_SetClientType_ParamsSpec,
      null,
      null,
      [client_type],
      undefined,
      undefined
    );
  }

  getMaxImageDimension() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ParamsSpec,
      screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ResponseParamsSpec,
      screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  setOCRLightMode(enabled) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      screen_ai.mojom.ScreenAIAnnotator_SetOCRLightMode_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  isOCRBusy() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ParamsSpec,
      screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ResponseParamsSpec,
      screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

};

screen_ai.mojom.ScreenAIAnnotator.getRemote = function() {
  let remote = new screen_ai.mojom.ScreenAIAnnotatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'screen_ai.mojom.ScreenAIAnnotator',
    'context');
  return remote.$;
};

// ParamsSpec for PerformOcrAndReturnAXTreeUpdate
screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIAnnotator.PerformOcrAndReturnAXTreeUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIAnnotator.PerformOcrAndReturnAXTreeUpdate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'update', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PerformOcrAndReturnAnnotation
screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIAnnotator.PerformOcrAndReturnAnnotation_Params',
      packedSize: 16,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIAnnotator.PerformOcrAndReturnAnnotation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'visual_annotation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetClientType
screen_ai.mojom.ScreenAIAnnotator_SetClientType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIAnnotator.SetClientType_Params',
      packedSize: 16,
      fields: [
        { name: 'client_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetMaxImageDimension
screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIAnnotator.GetMaxImageDimension_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIAnnotator.GetMaxImageDimension_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'max_dimension', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetOCRLightMode
screen_ai.mojom.ScreenAIAnnotator_SetOCRLightMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIAnnotator.SetOCRLightMode_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsOCRBusy
screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIAnnotator.IsOCRBusy_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIAnnotator.IsOCRBusy_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'busy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
screen_ai.mojom.ScreenAIAnnotatorPtr = screen_ai.mojom.ScreenAIAnnotatorRemote;
screen_ai.mojom.ScreenAIAnnotatorRequest = screen_ai.mojom.ScreenAIAnnotatorPendingReceiver;


// Interface: Screen2xMainContentExtractor
screen_ai.mojom.Screen2xMainContentExtractor = {};

screen_ai.mojom.Screen2xMainContentExtractorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

screen_ai.mojom.Screen2xMainContentExtractorRemote = class {
  static get $interfaceName() {
    return 'screen_ai.mojom.Screen2xMainContentExtractor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      screen_ai.mojom.Screen2xMainContentExtractorPendingReceiver,
      handle);
    this.$ = new screen_ai.mojom.Screen2xMainContentExtractorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

screen_ai.mojom.Screen2xMainContentExtractorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  extractMainContent(snapshot) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ParamsSpec,
      screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ResponseParamsSpec,
      screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ResponseParamsSpec,
      [snapshot],
      undefined,
      undefined
    );
  }

  extractMainNode(snapshot) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ParamsSpec,
      screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ResponseParamsSpec,
      screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ResponseParamsSpec,
      [snapshot],
      undefined,
      undefined
    );
  }

  identifyMainNode(ax_tree) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ParamsSpec,
      screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ResponseParamsSpec,
      screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ResponseParamsSpec,
      [ax_tree],
      undefined,
      undefined
    );
  }

  setClientType(client_type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      screen_ai.mojom.Screen2xMainContentExtractor_SetClientType_ParamsSpec,
      null,
      null,
      [client_type],
      undefined,
      undefined
    );
  }

};

screen_ai.mojom.Screen2xMainContentExtractor.getRemote = function() {
  let remote = new screen_ai.mojom.Screen2xMainContentExtractorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'screen_ai.mojom.Screen2xMainContentExtractor',
    'context');
  return remote.$;
};

// ParamsSpec for ExtractMainContent
screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.Screen2xMainContentExtractor.ExtractMainContent_Params',
      packedSize: 16,
      fields: [
        { name: 'snapshot', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.Screen2xMainContentExtractor.ExtractMainContent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'content_node_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ExtractMainNode
screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.Screen2xMainContentExtractor.ExtractMainNode_Params',
      packedSize: 16,
      fields: [
        { name: 'snapshot', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.Screen2xMainContentExtractor.ExtractMainNode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'main_node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IdentifyMainNode
screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.Screen2xMainContentExtractor.IdentifyMainNode_Params',
      packedSize: 16,
      fields: [
        { name: 'ax_tree', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.Screen2xMainContentExtractor.IdentifyMainNode_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'tree_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'node_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetClientType
screen_ai.mojom.Screen2xMainContentExtractor_SetClientType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.Screen2xMainContentExtractor.SetClientType_Params',
      packedSize: 16,
      fields: [
        { name: 'client_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
screen_ai.mojom.Screen2xMainContentExtractorPtr = screen_ai.mojom.Screen2xMainContentExtractorRemote;
screen_ai.mojom.Screen2xMainContentExtractorRequest = screen_ai.mojom.Screen2xMainContentExtractorPendingReceiver;


// Interface: OCRService
screen_ai.mojom.OCRService = {};

screen_ai.mojom.OCRServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

screen_ai.mojom.OCRServiceRemote = class {
  static get $interfaceName() {
    return 'screen_ai.mojom.OCRService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      screen_ai.mojom.OCRServicePendingReceiver,
      handle);
    this.$ = new screen_ai.mojom.OCRServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

screen_ai.mojom.OCRServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindAnnotator(annotator) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      screen_ai.mojom.OCRService_BindAnnotator_ParamsSpec,
      null,
      null,
      [annotator],
      undefined,
      undefined
    );
  }

};

screen_ai.mojom.OCRService.getRemote = function() {
  let remote = new screen_ai.mojom.OCRServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'screen_ai.mojom.OCRService',
    'context');
  return remote.$;
};

// ParamsSpec for BindAnnotator
screen_ai.mojom.OCRService_BindAnnotator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.OCRService.BindAnnotator_Params',
      packedSize: 16,
      fields: [
        { name: 'annotator', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
screen_ai.mojom.OCRServicePtr = screen_ai.mojom.OCRServiceRemote;
screen_ai.mojom.OCRServiceRequest = screen_ai.mojom.OCRServicePendingReceiver;


// Interface: MainContentExtractionService
screen_ai.mojom.MainContentExtractionService = {};

screen_ai.mojom.MainContentExtractionServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

screen_ai.mojom.MainContentExtractionServiceRemote = class {
  static get $interfaceName() {
    return 'screen_ai.mojom.MainContentExtractionService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      screen_ai.mojom.MainContentExtractionServicePendingReceiver,
      handle);
    this.$ = new screen_ai.mojom.MainContentExtractionServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

screen_ai.mojom.MainContentExtractionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindMainContentExtractor(main_content_extractor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      screen_ai.mojom.MainContentExtractionService_BindMainContentExtractor_ParamsSpec,
      null,
      null,
      [main_content_extractor],
      undefined,
      undefined
    );
  }

};

screen_ai.mojom.MainContentExtractionService.getRemote = function() {
  let remote = new screen_ai.mojom.MainContentExtractionServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'screen_ai.mojom.MainContentExtractionService',
    'context');
  return remote.$;
};

// ParamsSpec for BindMainContentExtractor
screen_ai.mojom.MainContentExtractionService_BindMainContentExtractor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.MainContentExtractionService.BindMainContentExtractor_Params',
      packedSize: 16,
      fields: [
        { name: 'main_content_extractor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
screen_ai.mojom.MainContentExtractionServicePtr = screen_ai.mojom.MainContentExtractionServiceRemote;
screen_ai.mojom.MainContentExtractionServiceRequest = screen_ai.mojom.MainContentExtractionServicePendingReceiver;

