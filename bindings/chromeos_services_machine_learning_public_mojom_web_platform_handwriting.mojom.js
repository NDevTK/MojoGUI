// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/web_platform_handwriting.mojom
// Module: chromeos.machine_learning.web_platform.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.web_platform = chromeos.machine_learning.web_platform || {};
chromeos.machine_learning.web_platform.mojom = chromeos.machine_learning.web_platform.mojom || {};


// Struct: HandwritingPoint
chromeos.machine_learning.web_platform.mojom.HandwritingPointSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.web_platform.mojom.HandwritingPoint',
      packedSize: 24,
      fields: [
        { name: 'location', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 't', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HandwritingStroke
chromeos.machine_learning.web_platform.mojom.HandwritingStrokeSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.web_platform.mojom.HandwritingStroke',
      packedSize: 16,
      fields: [
        { name: 'points', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HandwritingDrawingSegment
chromeos.machine_learning.web_platform.mojom.HandwritingDrawingSegmentSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.web_platform.mojom.HandwritingDrawingSegment',
      packedSize: 24,
      fields: [
        { name: 'stroke_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'begin_point_index', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'end_point_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HandwritingSegment
chromeos.machine_learning.web_platform.mojom.HandwritingSegmentSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.web_platform.mojom.HandwritingSegment',
      packedSize: 32,
      fields: [
        { name: 'grapheme', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'begin_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'end_index', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'drawing_segments', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HandwritingPrediction
chromeos.machine_learning.web_platform.mojom.HandwritingPredictionSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.web_platform.mojom.HandwritingPrediction',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'segmentation_result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HandwritingHints
chromeos.machine_learning.web_platform.mojom.HandwritingHintsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.web_platform.mojom.HandwritingHints',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HandwritingModelConstraint
chromeos.machine_learning.web_platform.mojom.HandwritingModelConstraintSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.web_platform.mojom.HandwritingModelConstraint',
      packedSize: 16,
      fields: [
        { name: 'languages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: HandwritingRecognizer
chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer = {};

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

};

chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer.getRemote = function() {
  let remote = new chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer',
    'context');
  return remote.$;
};

// Legacy compatibility
chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerPtr = chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRemote;
chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRequest = chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerPendingReceiver;

