// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/web_platform_handwriting.mojom
// Module: chromeos.machine_learning.web_platform.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.web_platform = chromeos.machine_learning.web_platform || {};
chromeos.machine_learning.web_platform.mojom = chromeos.machine_learning.web_platform.mojom || {};


// Struct: HandwritingPoint
chromeos.machine_learning.web_platform.mojom.HandwritingPoint = class {
  constructor(values = {}) {
    this.t = values.t !== undefined ? values.t : 0;
  }
};

// Struct: HandwritingStroke
chromeos.machine_learning.web_platform.mojom.HandwritingStroke = class {
  constructor(values = {}) {
    this.points = values.points !== undefined ? values.points : 0;
  }
};

// Struct: HandwritingDrawingSegment
chromeos.machine_learning.web_platform.mojom.HandwritingDrawingSegment = class {
  constructor(values = {}) {
    this.end_point_index = values.end_point_index !== undefined ? values.end_point_index : 0;
  }
};

// Struct: HandwritingSegment
chromeos.machine_learning.web_platform.mojom.HandwritingSegment = class {
  constructor(values = {}) {
    this.grapheme = values.grapheme !== undefined ? values.grapheme : "";
    this.drawing_segments = values.drawing_segments !== undefined ? values.drawing_segments : 0;
  }
};

// Struct: HandwritingPrediction
chromeos.machine_learning.web_platform.mojom.HandwritingPrediction = class {
  constructor(values = {}) {
    this.segmentation_result = values.segmentation_result !== undefined ? values.segmentation_result : "";
  }
};

// Struct: HandwritingHints
chromeos.machine_learning.web_platform.mojom.HandwritingHints = class {
  constructor(values = {}) {
    this.input_type@1 = values.input_type@1 !== undefined ? values.input_type@1 : "";
    this.alternatives@3 = values.alternatives@3 !== undefined ? values.alternatives@3 : 0;
    this.text_context@4 = values.text_context@4 !== undefined ? values.text_context@4 : "";
  }
};

// Struct: HandwritingModelConstraint
chromeos.machine_learning.web_platform.mojom.HandwritingModelConstraint = class {
  constructor(values = {}) {
    this.languages = values.languages !== undefined ? values.languages : "";
  }
};

// Interface: HandwritingRecognizer
chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer';
  }

};

chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
