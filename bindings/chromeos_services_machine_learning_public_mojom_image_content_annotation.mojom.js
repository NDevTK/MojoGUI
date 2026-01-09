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
    this.locale@0 = values.locale@0 !== undefined ? values.locale@0 : "";
  }
};

// Struct: ImageAnnotationScore
chromeos.machine_learning.mojom.ImageAnnotationScore = class {
  constructor(values = {}) {
    this.id@0 = values.id@0 !== undefined ? values.id@0 : 0;
    this.DEPRECATED_confidence@1 = values.DEPRECATED_confidence@1 !== undefined ? values.DEPRECATED_confidence@1 : 0;
    this.mid@2 = values.mid@2 !== undefined ? values.mid@2 : "";
    this.name@3 = values.name@3 !== undefined ? values.name@3 : "";
    this.bounding_box@5 = values.bounding_box@5 !== undefined ? values.bounding_box@5 : 0;
  }
};

// Struct: ImageAnnotationResult
chromeos.machine_learning.mojom.ImageAnnotationResult = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : null;
    this.1 = values.1 !== undefined ? values.1 : null;
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
