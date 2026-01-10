// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/web_platform_handwriting.mojom
// Module: chromeos.machine_learning.web_platform.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.machine_learning.web_platform = chromeos.machine_learning.machine_learning.web_platform || {};
chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom = chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: HandwritingPoint
chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingPointSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.web_platform.mojom.HandwritingPoint',
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
chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingStrokeSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.web_platform.mojom.HandwritingStroke',
      packedSize: 16,
      fields: [
        { name: 'points', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chromeos.machine_learning.web_platform.mojom.HandwritingPointSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: HandwritingDrawingSegment
chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingDrawingSegmentSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.web_platform.mojom.HandwritingDrawingSegment',
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
chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingSegmentSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.web_platform.mojom.HandwritingSegment',
      packedSize: 32,
      fields: [
        { name: 'grapheme', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'begin_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'end_index', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'drawing_segments', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(chromeos.machine_learning.web_platform.mojom.HandwritingDrawingSegmentSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: HandwritingPrediction
chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingPredictionSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.web_platform.mojom.HandwritingPrediction',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'segmentation_result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(chromeos.machine_learning.web_platform.mojom.HandwritingSegmentSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: HandwritingHints
chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingHintsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.web_platform.mojom.HandwritingHints',
      packedSize: 48,
      fields: [
        { name: 'recognition_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'input_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'deprecated_text_context', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'alternatives', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'text_context', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 48}, {version: 1, packedSize: 48}]
    }
  }
};

// Struct: HandwritingModelConstraint
chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingModelConstraintSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.web_platform.mojom.HandwritingModelConstraint',
      packedSize: 16,
      fields: [
        { name: 'languages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: HandwritingRecognizer
chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingRecognizer = {};

chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingRecognizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingRecognizerRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingRecognizerPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingRecognizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingRecognizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPrediction(strokes, hints) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec,
      chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec,
      [strokes, hints]);
  }

};

chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingRecognizer.getRemote = function() {
  let remote = new chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingRecognizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer',
    'context');
  return remote.$;
};

// ParamsSpec for GetPrediction
chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer.GetPrediction_Params',
      packedSize: 24,
      fields: [
        { name: 'strokes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chromeos.machine_learning.web_platform.mojom.HandwritingStrokeSpec, false), nullable: false, minVersion: 0 },
        { name: 'hints', packedOffset: 8, packedBitOffset: 0, type: chromeos.machine_learning.web_platform.mojom.HandwritingHintsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer.GetPrediction_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'prediction', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chromeos.machine_learning.web_platform.mojom.HandwritingPredictionSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingRecognizerPtr = chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingRecognizerRemote;
chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingRecognizerRequest = chromeos.machine_learning.machine_learning.web_platform.web_platform.mojom.mojom.HandwritingRecognizerPendingReceiver;

