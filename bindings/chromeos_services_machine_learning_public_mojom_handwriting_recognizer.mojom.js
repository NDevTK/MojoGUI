// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/handwriting_recognizer.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};
var mojo_base = mojo_base || {};

chromeos.machine_learning.mojom.StatusSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.LoadHandwritingModelResultSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.InkPointSpec = { $: {} };
chromeos.machine_learning.mojom.InkStrokeSpec = { $: {} };
chromeos.machine_learning.mojom.WritingGuideSpec = { $: {} };
chromeos.machine_learning.mojom.RecognitionContextSpec = { $: {} };
chromeos.machine_learning.mojom.HandwritingRecognitionQuerySpec = { $: {} };
chromeos.machine_learning.mojom.HandwritingRecognizerInkRangeSpec = { $: {} };
chromeos.machine_learning.mojom.HandwritingRecognizerSegmentSpec = { $: {} };
chromeos.machine_learning.mojom.HandwritingRecognizerSegmentationSpec = { $: {} };
chromeos.machine_learning.mojom.HandwritingRecognizerCandidateSpec = { $: {} };
chromeos.machine_learning.mojom.HandwritingRecognizerResultSpec = { $: {} };
chromeos.machine_learning.mojom.HandwritingRecognizerSpecSpec = { $: {} };
chromeos.machine_learning.mojom.HandwritingRecognizer = {};
chromeos.machine_learning.mojom.HandwritingRecognizer.$interfaceName = 'chromeos.machine_learning.mojom.HandwritingRecognizer';
chromeos.machine_learning.mojom.HandwritingRecognizer_Recognize_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.HandwritingRecognizer_Recognize_ResponseParamsSpec = { $: {} };

// Enum: Status
chromeos.machine_learning.mojom.Status = {
  OK: 0,
  ERROR: 1,
};

// Enum: LoadHandwritingModelResult
chromeos.machine_learning.mojom.LoadHandwritingModelResult = {
  OK: 0,
  DEPRECATED_MODEL_SPEC_ERROR: 1,
  LOAD_MODEL_ERROR: 2,
  FEATURE_NOT_SUPPORTED_ERROR: 3,
  LANGUAGE_NOT_SUPPORTED_ERROR: 4,
  FEATURE_DISABLED_BY_USER: 5,
  DLC_DOES_NOT_EXIST: 6,
  DLC_INSTALL_ERROR: 7,
  DLC_GET_PATH_ERROR: 8,
  LOAD_NATIVE_LIB_ERROR: 9,
  LOAD_FUNC_PTR_ERROR: 10,
  LOAD_MODEL_FILES_ERROR: 11,
};

// Struct: InkPoint
mojo.internal.Struct(
    chromeos.machine_learning.mojom.InkPointSpec, 'chromeos.machine_learning.mojom.InkPoint', [
      mojo.internal.StructField('t', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('x', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('y', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: InkStroke
mojo.internal.Struct(
    chromeos.machine_learning.mojom.InkStrokeSpec, 'chromeos.machine_learning.mojom.InkStroke', [
      mojo.internal.StructField('points', 0, 0, mojo.internal.Array(chromeos.machine_learning.mojom.InkPointSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WritingGuide
mojo.internal.Struct(
    chromeos.machine_learning.mojom.WritingGuideSpec, 'chromeos.machine_learning.mojom.WritingGuide', [
      mojo.internal.StructField('width', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('height', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: RecognitionContext
mojo.internal.Struct(
    chromeos.machine_learning.mojom.RecognitionContextSpec, 'chromeos.machine_learning.mojom.RecognitionContext', [
      mojo.internal.StructField('writing_guide', 0, 0, chromeos.machine_learning.mojom.WritingGuideSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('pre_context', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HandwritingRecognitionQuery
mojo.internal.Struct(
    chromeos.machine_learning.mojom.HandwritingRecognitionQuerySpec, 'chromeos.machine_learning.mojom.HandwritingRecognitionQuery', [
      mojo.internal.StructField('ink', 0, 0, mojo.internal.Array(chromeos.machine_learning.mojom.InkStrokeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('context', 8, 0, chromeos.machine_learning.mojom.RecognitionContextSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('max_num_results', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('return_segmentation', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: HandwritingRecognizerInkRange
mojo.internal.Struct(
    chromeos.machine_learning.mojom.HandwritingRecognizerInkRangeSpec, 'chromeos.machine_learning.mojom.HandwritingRecognizerInkRange', [
      mojo.internal.StructField('start_stroke', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end_stroke', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('start_point', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end_point', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HandwritingRecognizerSegment
mojo.internal.Struct(
    chromeos.machine_learning.mojom.HandwritingRecognizerSegmentSpec, 'chromeos.machine_learning.mojom.HandwritingRecognizerSegment', [
      mojo.internal.StructField('sublabel', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('ink_ranges', 8, 0, mojo.internal.Array(chromeos.machine_learning.mojom.HandwritingRecognizerInkRangeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HandwritingRecognizerSegmentation
mojo.internal.Struct(
    chromeos.machine_learning.mojom.HandwritingRecognizerSegmentationSpec, 'chromeos.machine_learning.mojom.HandwritingRecognizerSegmentation', [
      mojo.internal.StructField('segments', 0, 0, mojo.internal.Array(chromeos.machine_learning.mojom.HandwritingRecognizerSegmentSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HandwritingRecognizerCandidate
mojo.internal.Struct(
    chromeos.machine_learning.mojom.HandwritingRecognizerCandidateSpec, 'chromeos.machine_learning.mojom.HandwritingRecognizerCandidate', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('segmentation', 8, 0, chromeos.machine_learning.mojom.HandwritingRecognizerSegmentationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('score', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: HandwritingRecognizerResult
mojo.internal.Struct(
    chromeos.machine_learning.mojom.HandwritingRecognizerResultSpec, 'chromeos.machine_learning.mojom.HandwritingRecognizerResult', [
      mojo.internal.StructField('OK', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HandwritingRecognizerSpec
mojo.internal.Struct(
    chromeos.machine_learning.mojom.HandwritingRecognizerSpecSpec, 'chromeos.machine_learning.mojom.HandwritingRecognizerSpec', [
      mojo.internal.StructField('language', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('language_pack_path', 8, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('library_dlc_path', 16, 0, mojo.internal.String, null, true, 2, undefined),
    ],
    [[0, 16], [1, 24], [2, 32]]);

// Interface: HandwritingRecognizer
mojo.internal.Struct(
    chromeos.machine_learning.mojom.HandwritingRecognizer_Recognize_ParamsSpec, 'chromeos.machine_learning.mojom.HandwritingRecognizer_Recognize_Params', [
      mojo.internal.StructField('query', 0, 0, chromeos.machine_learning.mojom.HandwritingRecognitionQuerySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.HandwritingRecognizer_Recognize_ResponseParamsSpec, 'chromeos.machine_learning.mojom.HandwritingRecognizer_Recognize_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.HandwritingRecognizerResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.machine_learning.mojom.HandwritingRecognizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.mojom.HandwritingRecognizerRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.HandwritingRecognizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.mojom.HandwritingRecognizerPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.mojom.HandwritingRecognizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.mojom.HandwritingRecognizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  recognize(query) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.machine_learning.mojom.HandwritingRecognizer_Recognize_ParamsSpec,
      chromeos.machine_learning.mojom.HandwritingRecognizer_Recognize_ResponseParamsSpec,
      [query],
      false);
  }

};

chromeos.machine_learning.mojom.HandwritingRecognizer.getRemote = function() {
  let remote = new chromeos.machine_learning.mojom.HandwritingRecognizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.HandwritingRecognizer',
    'context');
  return remote.$;
};

chromeos.machine_learning.mojom.HandwritingRecognizerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.machine_learning.mojom.HandwritingRecognizer_Recognize_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recognize(params.query);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.HandwritingRecognizer_Recognize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

chromeos.machine_learning.mojom.HandwritingRecognizerReceiver = chromeos.machine_learning.mojom.HandwritingRecognizerReceiver;

chromeos.machine_learning.mojom.HandwritingRecognizerPtr = chromeos.machine_learning.mojom.HandwritingRecognizerRemote;
chromeos.machine_learning.mojom.HandwritingRecognizerRequest = chromeos.machine_learning.mojom.HandwritingRecognizerPendingReceiver;

