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

// Struct: Landmark
shape_detection.mojom.Landmark = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : 0;
  }
};

// Struct: FaceDetectionResult
shape_detection.mojom.FaceDetectionResult = class {
  constructor(values = {}) {
    this.landmarks = values.landmarks !== undefined ? values.landmarks : [];
  }
};

// Struct: FaceDetectorOptions
shape_detection.mojom.FaceDetectorOptions = class {
  constructor(values = {}) {
    this.fast_mode = values.fast_mode !== undefined ? values.fast_mode : 0;
  }
};

// Interface: FaceDetection
shape_detection.mojom.FaceDetectionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'shape_detection.mojom.FaceDetection';
  }

  detect(bitmap_data) {
    // Method: Detect
    return new Promise((resolve) => {
      // Call: Detect(bitmap_data)
      resolve({});
    });
  }

};

shape_detection.mojom.FaceDetectionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
