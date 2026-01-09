// Auto-generated MojoJS binding
// Source: chromium_src/services/shape_detection/public/mojom/textdetection.mojom
// Module: shape_detection.mojom

'use strict';

// Module namespace
var shape_detection = shape_detection || {};
shape_detection.mojom = shape_detection.mojom || {};


// Struct: TextDetectionResult
shape_detection.mojom.TextDetectionResult = class {
  constructor(values = {}) {
    this.corner_points = values.corner_points !== undefined ? values.corner_points : 0;
  }
};

// Interface: TextDetection
shape_detection.mojom.TextDetectionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'shape_detection.mojom.TextDetection';
  }

  detect(bitmap_data) {
    // Method: Detect
    return new Promise((resolve) => {
      // Call: Detect(bitmap_data)
      resolve({});
    });
  }

};

shape_detection.mojom.TextDetectionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
