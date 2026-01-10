// Auto-generated MojoJS binding
// Source: chromium_src/services/shape_detection/public/mojom/facedetection.mojom
// Module: shape_detection.mojom

'use strict';

// Module namespace
var shape_detection = shape_detection || {};
shape_detection.mojom = shape_detection.mojom || {};


// Enum: LandmarkType
shape_detection.mojom.LandmarkType = {
  MOUTH: 0,
  EYE: 1,
  NOSE: 2,
};
shape_detection.mojom.LandmarkTypeSpec = { $: mojo.internal.Enum() };

// Struct: Landmark
shape_detection.mojom.LandmarkSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.Landmark',
      packedSize: 24,
      fields: [
        { name: 'locations', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.PointFSpec, false), nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: shape_detection.mojom.LandmarkTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FaceDetectionResult
shape_detection.mojom.FaceDetectionResultSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.FaceDetectionResult',
      packedSize: 24,
      fields: [
        { name: 'bounding_box', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'landmarks', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(shape_detection.mojom.LandmarkSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FaceDetectorOptions
shape_detection.mojom.FaceDetectorOptionsSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.FaceDetectorOptions',
      packedSize: 16,
      fields: [
        { name: 'max_detected_faces', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'fast_mode', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: FaceDetection
shape_detection.mojom.FaceDetection = {};

shape_detection.mojom.FaceDetectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

shape_detection.mojom.FaceDetectionRemote = class {
  static get $interfaceName() {
    return 'shape_detection.mojom.FaceDetection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      shape_detection.mojom.FaceDetectionPendingReceiver,
      handle);
    this.$ = new shape_detection.mojom.FaceDetectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

shape_detection.mojom.FaceDetectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  detect(bitmap_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      shape_detection.mojom.FaceDetection_Detect_ParamsSpec,
      shape_detection.mojom.FaceDetection_Detect_ResponseParamsSpec,
      [bitmap_data]);
  }

};

shape_detection.mojom.FaceDetection.getRemote = function() {
  let remote = new shape_detection.mojom.FaceDetectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'shape_detection.mojom.FaceDetection',
    'context');
  return remote.$;
};

// ParamsSpec for Detect
shape_detection.mojom.FaceDetection_Detect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.FaceDetection.Detect_Params',
      packedSize: 16,
      fields: [
        { name: 'bitmap_data', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

shape_detection.mojom.FaceDetection_Detect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.FaceDetection.Detect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(shape_detection.mojom.FaceDetectionResultSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
shape_detection.mojom.FaceDetectionPtr = shape_detection.mojom.FaceDetectionRemote;
shape_detection.mojom.FaceDetectionRequest = shape_detection.mojom.FaceDetectionPendingReceiver;

