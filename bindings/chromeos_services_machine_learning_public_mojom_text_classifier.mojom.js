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
  }
};

// Struct: TextAnnotation
chromeos.machine_learning.mojom.TextAnnotation = class {
  constructor(values = {}) {
  }
};

// Struct: TextAnnotationRequest
chromeos.machine_learning.mojom.TextAnnotationRequest = class {
  constructor(values = {}) {
    this.ANNOTATION_USECASE_SMART = values.ANNOTATION_USECASE_SMART !== undefined ? values.ANNOTATION_USECASE_SMART : "";
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: CodepointSpan
chromeos.machine_learning.mojom.CodepointSpan = class {
  constructor(values = {}) {
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

};

chromeos.machine_learning.mojom.TextClassifierRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
