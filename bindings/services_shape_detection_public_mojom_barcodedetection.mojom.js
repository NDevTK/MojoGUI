// Auto-generated MojoJS binding
// Source: chromium_src/services/shape_detection/public/mojom/barcodedetection.mojom
// Module: shape_detection.mojom

'use strict';

// Module namespace
var shape_detection = shape_detection || {};
shape_detection.mojom = shape_detection.mojom || {};


// Enum: BarcodeFormat
shape_detection.mojom.BarcodeFormat = {
  AZTEC: 0,
  CODE_128: 1,
  CODE_39: 2,
  CODE_93: 3,
  CODABAR: 4,
  DATA_MATRIX: 5,
  EAN_13: 6,
  EAN_8: 7,
  ITF: 8,
  PDF417: 9,
  QR_CODE: 10,
  UNKNOWN: 11,
  UPC_A: 12,
  UPC_E: 13,
};

// Struct: BarcodeDetectionResult
shape_detection.mojom.BarcodeDetectionResult = class {
  constructor(values = {}) {
    this.corner_points = values.corner_points !== undefined ? values.corner_points : 0;
  }
};

// Interface: BarcodeDetection
shape_detection.mojom.BarcodeDetectionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'shape_detection.mojom.BarcodeDetection';
  }

  detect(bitmap_data) {
    // Method: Detect
    return new Promise((resolve) => {
      // Call: Detect(bitmap_data)
      resolve({});
    });
  }

};

shape_detection.mojom.BarcodeDetectionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
