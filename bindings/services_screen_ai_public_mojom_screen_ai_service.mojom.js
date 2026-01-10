// Auto-generated MojoJS binding
// Source: chromium_src/services/screen_ai/public/mojom/screen_ai_service.mojom
// Module: screen_ai.mojom

'use strict';

// Module namespace
var screen_ai = screen_ai || {};
screen_ai.mojom = screen_ai.mojom || {};
var skia = skia || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: Direction
screen_ai.mojom.Direction = {
  DIRECTION_UNSPECIFIED: 0,
  DIRECTION_LEFT_TO_RIGHT: 1,
  DIRECTION_RIGHT_TO_LEFT: 2,
  DIRECTION_TOP_TO_BOTTOM: 3,
};
screen_ai.mojom.DirectionSpec = { $: mojo.internal.Enum() };

// Enum: OcrClientType
screen_ai.mojom.OcrClientType = {
  kTest: 0,
  kPdfViewer: 1,
  kLocalSearch: 2,
  kCameraApp: 3,
  kMediaApp: 4,
  kScreenshotTextDetection: 5,
};
screen_ai.mojom.OcrClientTypeSpec = { $: mojo.internal.Enum() };

// Enum: MceClientType
screen_ai.mojom.MceClientType = {
  kTest: 0,
  kReadingMode: 1,
  kMainNode: 2,
  kMahi: 3,
};
screen_ai.mojom.MceClientTypeSpec = { $: mojo.internal.Enum() };

// Struct: VisualAnnotation
screen_ai.mojom.VisualAnnotationSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.VisualAnnotation',
      packedSize: 16,
      fields: [
        { name: 'lines', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(screen_ai.mojom.LineBoxSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: LineBox
screen_ai.mojom.LineBoxSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.LineBox',
      packedSize: 56,
      fields: [
        { name: 'words', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(screen_ai.mojom.WordBoxSpec, false), nullable: false, minVersion: 0 },
        { name: 'text_line', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'block_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'paragraph_id', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'bounding_box', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'bounding_box_angle', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'confidence', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: WordBox
screen_ai.mojom.WordBoxSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.WordBox',
      packedSize: 56,
      fields: [
        { name: 'word', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'bounding_box', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'bounding_box_angle', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'direction', packedOffset: 36, packedBitOffset: 0, type: screen_ai.mojom.DirectionSpec, nullable: false, minVersion: 0 },
        { name: 'whitespace_bounding_box', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'whitespace_bounding_box_angle', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'confidence', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Interface: ScreenAIAnnotator
screen_ai.mojom.ScreenAIAnnotator = {};

screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_Params',
      packedSize: 16,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

screen_ai.mojom.ScreenAIAnnotator_SetClientType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIAnnotator_SetClientType_Params',
      packedSize: 16,
      fields: [
        { name: 'client_type', packedOffset: 0, packedBitOffset: 0, type: screen_ai.mojom.OcrClientTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

screen_ai.mojom.ScreenAIAnnotator_SetOCRLightMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIAnnotator_SetOCRLightMode_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      [image]);
  }

  performOcrAndReturnAnnotation(image) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ParamsSpec,
      screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ResponseParamsSpec,
      [image]);
  }

  setClientType(client_type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      screen_ai.mojom.ScreenAIAnnotator_SetClientType_ParamsSpec,
      null,
      [client_type]);
  }

  getMaxImageDimension() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ParamsSpec,
      screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ResponseParamsSpec,
      []);
  }

  setOCRLightMode(enabled) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      screen_ai.mojom.ScreenAIAnnotator_SetOCRLightMode_ParamsSpec,
      null,
      [enabled]);
  }

  isOCRBusy() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ParamsSpec,
      screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ResponseParamsSpec,
      []);
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
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: false, minVersion: 0 },
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
        { name: 'update', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeUpdateSpec, nullable: false, minVersion: 0 },
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
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: false, minVersion: 0 },
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
        { name: 'visual_annotation', packedOffset: 0, packedBitOffset: 0, type: screen_ai.mojom.VisualAnnotationSpec, nullable: false, minVersion: 0 },
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
        { name: 'client_type', packedOffset: 0, packedBitOffset: 0, type: screen_ai.mojom.OcrClientTypeSpec, nullable: false, minVersion: 0 },
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
        { name: 'max_dimension', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
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
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
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
        { name: 'busy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
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

screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_Params',
      packedSize: 16,
      fields: [
        { name: 'snapshot', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeUpdateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_Params',
      packedSize: 16,
      fields: [
        { name: 'snapshot', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeUpdateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_Params',
      packedSize: 16,
      fields: [
        { name: 'ax_tree', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeUpdateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

screen_ai.mojom.Screen2xMainContentExtractor_SetClientType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.Screen2xMainContentExtractor_SetClientType_Params',
      packedSize: 16,
      fields: [
        { name: 'client_type', packedOffset: 0, packedBitOffset: 0, type: screen_ai.mojom.MceClientTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [snapshot]);
  }

  extractMainNode(snapshot) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ParamsSpec,
      screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ResponseParamsSpec,
      [snapshot]);
  }

  identifyMainNode(ax_tree) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ParamsSpec,
      screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ResponseParamsSpec,
      [ax_tree]);
  }

  setClientType(client_type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      screen_ai.mojom.Screen2xMainContentExtractor_SetClientType_ParamsSpec,
      null,
      [client_type]);
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
        { name: 'snapshot', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeUpdateSpec, nullable: false, minVersion: 0 },
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
        { name: 'content_node_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: false, minVersion: 0 },
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
        { name: 'snapshot', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeUpdateSpec, nullable: false, minVersion: 0 },
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
        { name: 'main_node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
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
        { name: 'ax_tree', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeUpdateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.Screen2xMainContentExtractor.IdentifyMainNode_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'tree_id', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false, minVersion: 0 },
        { name: 'node_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'client_type', packedOffset: 0, packedBitOffset: 0, type: screen_ai.mojom.MceClientTypeSpec, nullable: false, minVersion: 0 },
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

screen_ai.mojom.OCRService_BindAnnotator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.OCRService_BindAnnotator_Params',
      packedSize: 16,
      fields: [
        { name: 'annotator', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(screen_ai.mojom.ScreenAIAnnotatorRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [annotator]);
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
        { name: 'annotator', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(screen_ai.mojom.ScreenAIAnnotatorRemote), nullable: true, minVersion: 0 },
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

screen_ai.mojom.MainContentExtractionService_BindMainContentExtractor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.MainContentExtractionService_BindMainContentExtractor_Params',
      packedSize: 16,
      fields: [
        { name: 'main_content_extractor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(screen_ai.mojom.Screen2xMainContentExtractorRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [main_content_extractor]);
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
        { name: 'main_content_extractor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(screen_ai.mojom.Screen2xMainContentExtractorRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
screen_ai.mojom.MainContentExtractionServicePtr = screen_ai.mojom.MainContentExtractionServiceRemote;
screen_ai.mojom.MainContentExtractionServiceRequest = screen_ai.mojom.MainContentExtractionServicePendingReceiver;

