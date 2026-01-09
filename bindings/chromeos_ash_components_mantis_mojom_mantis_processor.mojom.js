// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/mantis/mojom/mantis_processor.mojom
// Module: mantis.mojom

'use strict';

// Module namespace
var mantis = mantis || {};
mantis.mojom = mantis.mojom || {};


// Enum: MantisError
mantis.mojom.MantisError = {
};

// Enum: SafetyClassifierVerdict
mantis.mojom.SafetyClassifierVerdict = {
  kPass: 0,
};

// Enum: SegmentationMode
mantis.mojom.SegmentationMode = {
  kLasso: 0,
};

// Struct: TouchPoint
mantis.mojom.TouchPoint = class {
  constructor(values = {}) {
    this.y@1 = values.y@1 !== undefined ? values.y@1 : 0;
  }
};

// Interface: MantisProcessor
mantis.mojom.MantisProcessorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mantis.mojom.MantisProcessor';
  }

  image() {
    // Method: image
    // Call: image()
  }

  0(image, mask, seed) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(image, mask, seed)
      resolve({});
    });
  }

  1(image, mask, seed, prompt) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(image, mask, seed, prompt)
      resolve({});
    });
  }

  image() {
    // Method: image
    // Call: image()
  }

  2(image, prior) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(image, prior)
      resolve({});
    });
  }

  3(image) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(image)
      resolve({});
    });
  }

  image() {
    // Method: image
    // Call: image()
  }

  4(image, mask, seed) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(image, mask, seed)
      resolve({});
    });
  }

  mode(lasso) {
    // Method: mode
    // Call: mode(lasso)
  }

  5(gesture) {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5(gesture)
      resolve({});
    });
  }

};

mantis.mojom.MantisProcessorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
