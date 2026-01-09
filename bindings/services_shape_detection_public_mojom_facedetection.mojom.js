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

// Interface: FaceDetection
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
      shape_detection.mojom.FaceDetection_Detect_ParamsSpec.$,
      shape_detection.mojom.FaceDetection_Detect_ResponseParamsSpec.$,
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
        { name: 'bitmap_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

shape_detection.mojom.FaceDetection_Detect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.FaceDetection.Detect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
shape_detection.mojom.FaceDetectionPtr = shape_detection.mojom.FaceDetectionRemote;
shape_detection.mojom.FaceDetectionRequest = shape_detection.mojom.FaceDetectionPendingReceiver;

