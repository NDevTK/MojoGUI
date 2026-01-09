// Auto-generated MojoJS binding
// Source: chromium_src/services/shape_detection/public/mojom/shape_detection_service.mojom
// Module: shape_detection.mojom

'use strict';

// Module namespace
var shape_detection = shape_detection || {};
shape_detection.mojom = shape_detection.mojom || {};


// Interface: ShapeDetectionService
shape_detection.mojom.ShapeDetectionServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'shape_detection.mojom.ShapeDetectionService';
  }

  bindBarcodeDetectionProvider(receiver) {
    // Method: BindBarcodeDetectionProvider
    // Call: BindBarcodeDetectionProvider(receiver)
  }

  bindFaceDetectionProvider(receiver) {
    // Method: BindFaceDetectionProvider
    // Call: BindFaceDetectionProvider(receiver)
  }

  bindTextDetection(receiver) {
    // Method: BindTextDetection
    // Call: BindTextDetection(receiver)
  }

};

shape_detection.mojom.ShapeDetectionServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
