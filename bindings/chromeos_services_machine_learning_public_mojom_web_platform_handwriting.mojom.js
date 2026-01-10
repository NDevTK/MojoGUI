// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/web_platform_handwriting.mojom
// Module: chromeos.machine_learning.web_platform.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.web_platform = chromeos.machine_learning.web_platform || {};
chromeos.machine_learning.web_platform.mojom = chromeos.machine_learning.web_platform.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

chromeos.machine_learning.web_platform.mojom.HandwritingPointSpec = { $: {} };
chromeos.machine_learning.web_platform.mojom.HandwritingStrokeSpec = { $: {} };
chromeos.machine_learning.web_platform.mojom.HandwritingDrawingSegmentSpec = { $: {} };
chromeos.machine_learning.web_platform.mojom.HandwritingSegmentSpec = { $: {} };
chromeos.machine_learning.web_platform.mojom.HandwritingPredictionSpec = { $: {} };
chromeos.machine_learning.web_platform.mojom.HandwritingHintsSpec = { $: {} };
chromeos.machine_learning.web_platform.mojom.HandwritingModelConstraintSpec = { $: {} };
chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer = {};
chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer.$interfaceName = 'chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer';
chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec = { $: {} };
chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec = { $: {} };

// Struct: HandwritingPoint
mojo.internal.Struct(
    chromeos.machine_learning.web_platform.mojom.HandwritingPointSpec, 'chromeos.machine_learning.web_platform.mojom.HandwritingPoint', [
      mojo.internal.StructField('location', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('t', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HandwritingStroke
mojo.internal.Struct(
    chromeos.machine_learning.web_platform.mojom.HandwritingStrokeSpec, 'chromeos.machine_learning.web_platform.mojom.HandwritingStroke', [
      mojo.internal.StructField('points', 0, 0, mojo.internal.Array(chromeos.machine_learning.web_platform.mojom.HandwritingPointSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HandwritingDrawingSegment
mojo.internal.Struct(
    chromeos.machine_learning.web_platform.mojom.HandwritingDrawingSegmentSpec, 'chromeos.machine_learning.web_platform.mojom.HandwritingDrawingSegment', [
      mojo.internal.StructField('stroke_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('begin_point_index', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end_point_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HandwritingSegment
mojo.internal.Struct(
    chromeos.machine_learning.web_platform.mojom.HandwritingSegmentSpec, 'chromeos.machine_learning.web_platform.mojom.HandwritingSegment', [
      mojo.internal.StructField('grapheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('begin_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end_index', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('drawing_segments', 16, 0, mojo.internal.Array(chromeos.machine_learning.web_platform.mojom.HandwritingDrawingSegmentSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: HandwritingPrediction
mojo.internal.Struct(
    chromeos.machine_learning.web_platform.mojom.HandwritingPredictionSpec, 'chromeos.machine_learning.web_platform.mojom.HandwritingPrediction', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('segmentation_result', 8, 0, mojo.internal.Array(chromeos.machine_learning.web_platform.mojom.HandwritingSegmentSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HandwritingHints
mojo.internal.Struct(
    chromeos.machine_learning.web_platform.mojom.HandwritingHintsSpec, 'chromeos.machine_learning.web_platform.mojom.HandwritingHints', [
      mojo.internal.StructField('recognition_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('input_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('deprecated_text_context', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('alternatives', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('text_context', 32, 0, mojo.internal.String, null, true, 1, undefined),
    ],
    [[0, 40], [1, 48]]);

// Struct: HandwritingModelConstraint
mojo.internal.Struct(
    chromeos.machine_learning.web_platform.mojom.HandwritingModelConstraintSpec, 'chromeos.machine_learning.web_platform.mojom.HandwritingModelConstraint', [
      mojo.internal.StructField('languages', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: HandwritingRecognizer
mojo.internal.Struct(
    chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec, 'chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer_GetPrediction_Params', [
      mojo.internal.StructField('strokes', 0, 0, mojo.internal.Array(chromeos.machine_learning.web_platform.mojom.HandwritingStrokeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('hints', 8, 0, chromeos.machine_learning.web_platform.mojom.HandwritingHintsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec, 'chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer_GetPrediction_ResponseParams', [
      mojo.internal.StructField('prediction', 0, 0, mojo.internal.Array(chromeos.machine_learning.web_platform.mojom.HandwritingPredictionSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPrediction(strokes, hints) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec,
      chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec,
      [strokes, hints],
      false);
  }

};

chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer.getRemote = function() {
  let remote = new chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer',
    'context');
  return remote.$;
};

chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerPtr = chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRemote;
chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRequest = chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerPendingReceiver;

