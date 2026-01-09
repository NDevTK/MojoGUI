// Auto-generated MojoJS binding
// Source: chromium_src/services/shape_detection/public/mojom/facedetection_provider.mojom
// Module: shape_detection.mojom

'use strict';

// Module namespace
var shape_detection = shape_detection || {};
shape_detection.mojom = shape_detection.mojom || {};


// Interface: FaceDetectionProvider
shape_detection.mojom.FaceDetectionProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'shape_detection.mojom.FaceDetectionProvider';
  }

  createFaceDetection(receiver, options) {
    // Method: CreateFaceDetection
    // Call: CreateFaceDetection(receiver, options)
  }

};

shape_detection.mojom.FaceDetectionProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
