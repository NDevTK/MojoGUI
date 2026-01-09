// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/text_classifier.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: AnnotationUsecase
chromeos.machine_learning.mojom.AnnotationUsecase = {
  Share: 0,
  Linkify: 1,
};

// Struct: TextEntity
chromeos.machine_learning.mojom.TextEntity = class {
  constructor(values = {}) {
    this.name@0 = values.name@0 !== undefined ? values.name@0 : "";
    this.data@2 = values.data@2 !== undefined ? values.data@2 : 0;
  }
};

// Struct: TextAnnotation
chromeos.machine_learning.mojom.TextAnnotation = class {
  constructor(values = {}) {
    this.entities@2 = values.entities@2 !== undefined ? values.entities@2 : 0;
  }
};

// Struct: TextAnnotationRequest
chromeos.machine_learning.mojom.TextAnnotationRequest = class {
  constructor(values = {}) {
    this.ANNOTATION_USECASE_SMART = values.ANNOTATION_USECASE_SMART !== undefined ? values.ANNOTATION_USECASE_SMART : "";
    this.reference_time@4 = values.reference_time@4 !== undefined ? values.reference_time@4 : null;
    this.reference_timezone@5 = values.reference_timezone@5 !== undefined ? values.reference_timezone@5 : "";
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: CodepointSpan
chromeos.machine_learning.mojom.CodepointSpan = class {
  constructor(values = {}) {
    this.end_offset@1 = values.end_offset@1 !== undefined ? values.end_offset@1 : 0;
  }
};

// Struct: TextLanguage
chromeos.machine_learning.mojom.TextLanguage = class {
  constructor(values = {}) {
    this.confidence = values.confidence !== undefined ? values.confidence : 0;
  }
};

// Struct: REMOVED_TextSuggestSelectionRequest
chromeos.machine_learning.mojom.REMOVED_TextSuggestSelectionRequest = class {
  constructor(values = {}) {
    this.ANNOTATION_USECASE_SMART = values.ANNOTATION_USECASE_SMART !== undefined ? values.ANNOTATION_USECASE_SMART : 0;
  }
};

// Interface: TextClassifier
chromeos.machine_learning.mojom.TextClassifierPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.machine_learning.mojom.TextClassifier';
  }

  0(request) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(request)
      resolve({});
    });
  }

  2(text) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(text)
      resolve({});
    });
  }

  1(request) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(request)
      resolve({});
    });
  }

};

chromeos.machine_learning.mojom.TextClassifierRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
