// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/handwriting/handwriting.mojom
// Module: handwriting.mojom

'use strict';

// Module namespace
var handwriting = handwriting || {};
handwriting.mojom = handwriting.mojom || {};


// Enum: HandwritingRecognitionType
handwriting.mojom.HandwritingRecognitionType = {
  kText: 0,
};

// Enum: HandwritingInputType
handwriting.mojom.HandwritingInputType = {
  kMouse: 0,
  kStylus: 1,
  kTouch: 2,
};

// Enum: CreateHandwritingRecognizerResult
handwriting.mojom.CreateHandwritingRecognizerResult = {
  kOk: 0,
  kError: 1,
};

// Struct: HandwritingPoint
handwriting.mojom.HandwritingPoint = class {
  constructor(values = {}) {
    this.t = values.t !== undefined ? values.t : 0;
  }
};

// Struct: HandwritingStroke
handwriting.mojom.HandwritingStroke = class {
  constructor(values = {}) {
    this.points = values.points !== undefined ? values.points : 0;
  }
};

// Struct: HandwritingDrawingSegment
handwriting.mojom.HandwritingDrawingSegment = class {
  constructor(values = {}) {
    this.end_point_index = values.end_point_index !== undefined ? values.end_point_index : 0;
  }
};

// Struct: HandwritingSegment
handwriting.mojom.HandwritingSegment = class {
  constructor(values = {}) {
    this.grapheme = values.grapheme !== undefined ? values.grapheme : "";
    this.drawing_segments = values.drawing_segments !== undefined ? values.drawing_segments : 0;
  }
};

// Struct: HandwritingPrediction
handwriting.mojom.HandwritingPrediction = class {
  constructor(values = {}) {
    this.segmentation_result = values.segmentation_result !== undefined ? values.segmentation_result : "";
  }
};

// Struct: HandwritingHints
handwriting.mojom.HandwritingHints = class {
  constructor(values = {}) {
    this.input_type = values.input_type !== undefined ? values.input_type : "";
    this.(e.g. = values.(e.g. !== undefined ? values.(e.g. : null;
    this.alternatives = values.alternatives !== undefined ? values.alternatives : 0;
  }
};

// Struct: HandwritingHintsQueryResult
handwriting.mojom.HandwritingHintsQueryResult = class {
  constructor(values = {}) {
    this.alternatives = values.alternatives !== undefined ? values.alternatives : false;
  }
};

// Struct: QueryHandwritingRecognizerResult
handwriting.mojom.QueryHandwritingRecognizerResult = class {
  constructor(values = {}) {
    this.hints = values.hints !== undefined ? values.hints : 0;
  }
};

// Struct: HandwritingModelConstraint
handwriting.mojom.HandwritingModelConstraint = class {
  constructor(values = {}) {
    this.languages = values.languages !== undefined ? values.languages : "";
  }
};

// Interface: HandwritingRecognizer
handwriting.mojom.HandwritingRecognizerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'handwriting.mojom.HandwritingRecognizer';
  }

  getPrediction(strokes, hints) {
    // Method: GetPrediction
    return new Promise((resolve) => {
      // Call: GetPrediction(strokes, hints)
      resolve({});
    });
  }

};

handwriting.mojom.HandwritingRecognizerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HandwritingRecognitionService
handwriting.mojom.HandwritingRecognitionServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'handwriting.mojom.HandwritingRecognitionService';
  }

  createHandwritingRecognizer(constraint) {
    // Method: CreateHandwritingRecognizer
    return new Promise((resolve) => {
      // Call: CreateHandwritingRecognizer(constraint)
      resolve({});
    });
  }

  queryHandwritingRecognizer(constraint) {
    // Method: QueryHandwritingRecognizer
    return new Promise((resolve) => {
      // Call: QueryHandwritingRecognizer(constraint)
      resolve({});
    });
  }

};

handwriting.mojom.HandwritingRecognitionServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
