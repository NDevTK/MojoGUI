// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/handwriting_recognizer.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.machine_learning.mojom = chromeos.machine_learning.machine_learning.mojom || {};


// Enum: Status
chromeos.machine_learning.machine_learning.mojom.mojom.Status = {
  OK: 0,
  ERROR: 1,
};
chromeos.machine_learning.machine_learning.mojom.mojom.StatusSpec = { $: mojo.internal.Enum() };

// Enum: LoadHandwritingModelResult
chromeos.machine_learning.machine_learning.mojom.mojom.LoadHandwritingModelResult = {
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
chromeos.machine_learning.machine_learning.mojom.mojom.LoadHandwritingModelResultSpec = { $: mojo.internal.Enum() };

// Struct: InkPoint
chromeos.machine_learning.machine_learning.mojom.mojom.InkPointSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.InkPoint',
      packedSize: 24,
      fields: [
        { name: 'x', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'y', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 't', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: InkStroke
chromeos.machine_learning.machine_learning.mojom.mojom.InkStrokeSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.InkStroke',
      packedSize: 16,
      fields: [
        { name: 'points', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chromeos.machine_learning.mojom.InkPointSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: WritingGuide
chromeos.machine_learning.machine_learning.mojom.mojom.WritingGuideSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.WritingGuide',
      packedSize: 16,
      fields: [
        { name: 'width', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: RecognitionContext
chromeos.machine_learning.machine_learning.mojom.mojom.RecognitionContextSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.RecognitionContext',
      packedSize: 24,
      fields: [
        { name: 'writing_guide', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.WritingGuideSpec, nullable: true, minVersion: 0 },
        { name: 'pre_context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: HandwritingRecognitionQuery
chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognitionQuerySpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HandwritingRecognitionQuery',
      packedSize: 32,
      fields: [
        { name: 'ink', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chromeos.machine_learning.mojom.InkStrokeSpec, false), nullable: false, minVersion: 0 },
        { name: 'context', packedOffset: 8, packedBitOffset: 0, type: chromeos.machine_learning.mojom.RecognitionContextSpec, nullable: true, minVersion: 0 },
        { name: 'max_num_results', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'return_segmentation', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: HandwritingRecognizerInkRange
chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizerInkRangeSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HandwritingRecognizerInkRange',
      packedSize: 24,
      fields: [
        { name: 'start_stroke', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'end_stroke', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'start_point', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'end_point', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: HandwritingRecognizerSegment
chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizerSegmentSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HandwritingRecognizerSegment',
      packedSize: 24,
      fields: [
        { name: 'sublabel', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'ink_ranges', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(chromeos.machine_learning.mojom.HandwritingRecognizerInkRangeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: HandwritingRecognizerSegmentation
chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizerSegmentationSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HandwritingRecognizerSegmentation',
      packedSize: 16,
      fields: [
        { name: 'segments', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chromeos.machine_learning.mojom.HandwritingRecognizerSegmentSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: HandwritingRecognizerCandidate
chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizerCandidateSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HandwritingRecognizerCandidate',
      packedSize: 32,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'score', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'segmentation', packedOffset: 8, packedBitOffset: 0, type: chromeos.machine_learning.mojom.HandwritingRecognizerSegmentationSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: HandwritingRecognizerResult
chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizerResultSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HandwritingRecognizerResult',
      packedSize: 16,
      fields: [
        { name: 'OK', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: HandwritingRecognizerSpec
chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizerSpecSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HandwritingRecognizerSpec',
      packedSize: 32,
      fields: [
        { name: 'language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'language_pack_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
        { name: 'library_dlc_path', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 1, packedSize: 24}, {version: 2, packedSize: 32}]
    }
  }
};

// Interface: HandwritingRecognizer
chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizer = {};

chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizerRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.HandwritingRecognizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizerPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  recognize(query) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizer_Recognize_ParamsSpec,
      chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizer_Recognize_ResponseParamsSpec,
      [query]);
  }

};

chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizer.getRemote = function() {
  let remote = new chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.HandwritingRecognizer',
    'context');
  return remote.$;
};

// ParamsSpec for Recognize
chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizer_Recognize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HandwritingRecognizer.Recognize_Params',
      packedSize: 16,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.HandwritingRecognitionQuerySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizer_Recognize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HandwritingRecognizer.Recognize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.HandwritingRecognizerResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizerPtr = chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizerRemote;
chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizerRequest = chromeos.machine_learning.machine_learning.mojom.mojom.HandwritingRecognizerPendingReceiver;

