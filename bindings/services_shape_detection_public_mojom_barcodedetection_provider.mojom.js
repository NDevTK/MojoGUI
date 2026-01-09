// Auto-generated MojoJS binding
// Source: chromium_src/services/shape_detection/public/mojom/barcodedetection_provider.mojom
// Module: shape_detection.mojom

'use strict';

// Module namespace
var shape_detection = shape_detection || {};
shape_detection.mojom = shape_detection.mojom || {};


// Struct: BarcodeDetectorOptions
shape_detection.mojom.BarcodeDetectorOptions = class {
  constructor(values = {}) {
    this.formats = values.formats !== undefined ? values.formats : [];
  }
};

// Interface: BarcodeDetectionProvider
shape_detection.mojom.BarcodeDetectionProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'shape_detection.mojom.BarcodeDetectionProvider';
  }

  createBarcodeDetection(receiver, options) {
    // Method: CreateBarcodeDetection
    // Call: CreateBarcodeDetection(receiver, options)
  }

  enumerateSupportedFormats() {
    // Method: EnumerateSupportedFormats
    return new Promise((resolve) => {
      // Call: EnumerateSupportedFormats()
      resolve({});
    });
  }

};

shape_detection.mojom.BarcodeDetectionProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
