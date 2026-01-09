// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/image_content_annotation.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: Status
chromeos.machine_learning.mojom.Status = {
  ERROR: 0,
};

// Struct: ImageAnnotatorConfig
chromeos.machine_learning.mojom.ImageAnnotatorConfig = class {
  constructor(values = {}) {
  }
};

// Struct: ImageAnnotationScore
chromeos.machine_learning.mojom.ImageAnnotationScore = class {
  constructor(values = {}) {
  }
};

// Struct: ImageAnnotationResult
chromeos.machine_learning.mojom.ImageAnnotationResult = class {
  constructor(values = {}) {
  }
};

// Interface: ImageContentAnnotator
chromeos.machine_learning.mojom.ImageContentAnnotatorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.machine_learning.mojom.ImageContentAnnotator';
  }

};

chromeos.machine_learning.mojom.ImageContentAnnotatorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
