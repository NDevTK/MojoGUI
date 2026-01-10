// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/handwriting/handwriting.mojom
// Module: handwriting.mojom

'use strict';

// Module namespace
var handwriting = handwriting || {};
handwriting.mojom = handwriting.mojom || {};


// Enum: HandwritingRecognitionType
handwriting.mojom.HandwritingRecognitionType = {
  kText: 0,
};
handwriting.mojom.HandwritingRecognitionTypeSpec = { $: mojo.internal.Enum() };

// Enum: HandwritingInputType
handwriting.mojom.HandwritingInputType = {
  kMouse: 0,
  kStylus: 1,
  kTouch: 2,
};
handwriting.mojom.HandwritingInputTypeSpec = { $: mojo.internal.Enum() };

// Enum: CreateHandwritingRecognizerResult
handwriting.mojom.CreateHandwritingRecognizerResult = {
  kOk: 0,
  kError: 1,
  kNotSupported: 2,
};
handwriting.mojom.CreateHandwritingRecognizerResultSpec = { $: mojo.internal.Enum() };

// Struct: HandwritingPoint
handwriting.mojom.HandwritingPointSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.HandwritingPoint',
      packedSize: 24,
      fields: [
        { name: 'location', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 't', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: HandwritingStroke
handwriting.mojom.HandwritingStrokeSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.HandwritingStroke',
      packedSize: 16,
      fields: [
        { name: 'points', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(handwriting.mojom.HandwritingPointSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: HandwritingDrawingSegment
handwriting.mojom.HandwritingDrawingSegmentSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.HandwritingDrawingSegment',
      packedSize: 24,
      fields: [
        { name: 'stroke_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'begin_point_index', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'end_point_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: HandwritingSegment
handwriting.mojom.HandwritingSegmentSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.HandwritingSegment',
      packedSize: 32,
      fields: [
        { name: 'grapheme', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'begin_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'end_index', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'drawing_segments', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(handwriting.mojom.HandwritingDrawingSegmentSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: HandwritingPrediction
handwriting.mojom.HandwritingPredictionSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.HandwritingPrediction',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'segmentation_result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(handwriting.mojom.HandwritingSegmentSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: HandwritingHints
handwriting.mojom.HandwritingHintsSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.HandwritingHints',
      packedSize: 40,
      fields: [
        { name: 'recognition_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'input_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'text_context', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'alternatives', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: HandwritingHintsQueryResult
handwriting.mojom.HandwritingHintsQueryResultSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.HandwritingHintsQueryResult',
      packedSize: 32,
      fields: [
        { name: 'recognition_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(handwriting.mojom.HandwritingRecognitionTypeSpec, false), nullable: false, minVersion: 0 },
        { name: 'input_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(handwriting.mojom.HandwritingInputTypeSpec, false), nullable: false, minVersion: 0 },
        { name: 'text_context', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'alternatives', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: QueryHandwritingRecognizerResult
handwriting.mojom.QueryHandwritingRecognizerResultSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.QueryHandwritingRecognizerResult',
      packedSize: 24,
      fields: [
        { name: 'text_alternatives', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'text_segmentation', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'hints', packedOffset: 8, packedBitOffset: 0, type: handwriting.mojom.HandwritingHintsQueryResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: HandwritingModelConstraint
handwriting.mojom.HandwritingModelConstraintSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.HandwritingModelConstraint',
      packedSize: 16,
      fields: [
        { name: 'languages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: HandwritingRecognizer
handwriting.mojom.HandwritingRecognizer = {};

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
  }

  getPrediction(strokes, hints) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      handwriting.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec,
      handwriting.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec,
      [strokes, hints]);
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

// ParamsSpec for GetPrediction
handwriting.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.HandwritingRecognizer.GetPrediction_Params',
      packedSize: 24,
      fields: [
        { name: 'strokes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(handwriting.mojom.HandwritingStrokeSpec, false), nullable: false, minVersion: 0 },
        { name: 'hints', packedOffset: 8, packedBitOffset: 0, type: handwriting.mojom.HandwritingHintsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

handwriting.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.HandwritingRecognizer.GetPrediction_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'prediction', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(handwriting.mojom.HandwritingPredictionSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
handwriting.mojom.HandwritingRecognizerPtr = handwriting.mojom.HandwritingRecognizerRemote;
handwriting.mojom.HandwritingRecognizerRequest = handwriting.mojom.HandwritingRecognizerPendingReceiver;


// Interface: HandwritingRecognitionService
handwriting.mojom.HandwritingRecognitionService = {};

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
  }

  createHandwritingRecognizer(constraint) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ParamsSpec,
      handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ResponseParamsSpec,
      [constraint]);
  }

  queryHandwritingRecognizer(constraint) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ParamsSpec,
      handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ResponseParamsSpec,
      [constraint]);
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

// ParamsSpec for CreateHandwritingRecognizer
handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.HandwritingRecognitionService.CreateHandwritingRecognizer_Params',
      packedSize: 16,
      fields: [
        { name: 'constraint', packedOffset: 0, packedBitOffset: 0, type: handwriting.mojom.HandwritingModelConstraintSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.HandwritingRecognitionService.CreateHandwritingRecognizer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: handwriting.mojom.CreateHandwritingRecognizerResultSpec, nullable: false, minVersion: 0 },
        { name: 'handwriting_recognizer', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for QueryHandwritingRecognizer
handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.HandwritingRecognitionService.QueryHandwritingRecognizer_Params',
      packedSize: 16,
      fields: [
        { name: 'constraint', packedOffset: 0, packedBitOffset: 0, type: handwriting.mojom.HandwritingModelConstraintSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.HandwritingRecognitionService.QueryHandwritingRecognizer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: handwriting.mojom.QueryHandwritingRecognizerResultSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
handwriting.mojom.HandwritingRecognitionServicePtr = handwriting.mojom.HandwritingRecognitionServiceRemote;
handwriting.mojom.HandwritingRecognitionServiceRequest = handwriting.mojom.HandwritingRecognitionServicePendingReceiver;

