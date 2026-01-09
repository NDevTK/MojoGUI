// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/handwriting_recognizer.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


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
chromeos.machine_learning.mojom.InkPointSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.InkPoint',
      packedSize: 24,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 't', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InkStroke
chromeos.machine_learning.mojom.InkStrokeSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.InkStroke',
      packedSize: 16,
      fields: [
        { name: 'points', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WritingGuide
chromeos.machine_learning.mojom.WritingGuideSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.WritingGuide',
      packedSize: 16,
      fields: [
        { name: 'width', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'height', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RecognitionContext
chromeos.machine_learning.mojom.RecognitionContextSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.RecognitionContext',
      packedSize: 24,
      fields: [
        { name: 'writing_guide', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.WritingGuideSpec, nullable: true },
        { name: 'pre_context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HandwritingRecognitionQuery
chromeos.machine_learning.mojom.HandwritingRecognitionQuerySpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HandwritingRecognitionQuery',
      packedSize: 40,
      fields: [
        { name: 'ink', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'context', packedOffset: 8, packedBitOffset: 0, type: chromeos.machine_learning.mojom.RecognitionContextSpec, nullable: true },
        { name: 'max_num_results', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'return_segmentation', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HandwritingRecognizerInkRange
chromeos.machine_learning.mojom.HandwritingRecognizerInkRangeSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HandwritingRecognizerInkRange',
      packedSize: 24,
      fields: [
        { name: 'start_stroke', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'end_stroke', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'start_point', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'end_point', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HandwritingRecognizerSegment
chromeos.machine_learning.mojom.HandwritingRecognizerSegmentSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HandwritingRecognizerSegment',
      packedSize: 24,
      fields: [
        { name: 'sublabel', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'ink_ranges', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HandwritingRecognizerSegmentation
chromeos.machine_learning.mojom.HandwritingRecognizerSegmentationSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HandwritingRecognizerSegmentation',
      packedSize: 16,
      fields: [
        { name: 'segments', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HandwritingRecognizerCandidate
chromeos.machine_learning.mojom.HandwritingRecognizerCandidateSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HandwritingRecognizerCandidate',
      packedSize: 32,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'score', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'segmentation', packedOffset: 16, packedBitOffset: 0, type: chromeos.machine_learning.mojom.HandwritingRecognizerSegmentationSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HandwritingRecognizerResult
chromeos.machine_learning.mojom.HandwritingRecognizerResultSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HandwritingRecognizerResult',
      packedSize: 16,
      fields: [
        { name: 'OK', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HandwritingRecognizerSpec
chromeos.machine_learning.mojom.HandwritingRecognizerSpecSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HandwritingRecognizerSpec',
      packedSize: 16,
      fields: [
        { name: 'language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: HandwritingRecognizer
chromeos.machine_learning.mojom.HandwritingRecognizer = {};

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

// Legacy compatibility
chromeos.machine_learning.mojom.HandwritingRecognizerPtr = chromeos.machine_learning.mojom.HandwritingRecognizerRemote;
chromeos.machine_learning.mojom.HandwritingRecognizerRequest = chromeos.machine_learning.mojom.HandwritingRecognizerPendingReceiver;

