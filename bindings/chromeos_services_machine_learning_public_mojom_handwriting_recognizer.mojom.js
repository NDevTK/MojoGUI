// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/handwriting_recognizer.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: Status
chromeos.machine_learning.mojom.Status = {
  OK: 0,
  ERROR: 1,
};

// Enum: LoadHandwritingModelResult
chromeos.machine_learning.mojom.LoadHandwritingModelResult = {
  OK: 0,
  LOAD_MODEL_ERROR: 1,
  but: 2,
  but: 3,
  but: 4,
};

// Struct: InkPoint
chromeos.machine_learning.mojom.InkPoint = class {
  constructor(values = {}) {
    this.t = values.t !== undefined ? values.t : 0;
  }
};

// Struct: InkStroke
chromeos.machine_learning.mojom.InkStroke = class {
  constructor(values = {}) {
    this.points = values.points !== undefined ? values.points : 0;
  }
};

// Struct: WritingGuide
chromeos.machine_learning.mojom.WritingGuide = class {
  constructor(values = {}) {
    this.height = values.height !== undefined ? values.height : 0;
  }
};

// Struct: RecognitionContext
chromeos.machine_learning.mojom.RecognitionContext = class {
  constructor(values = {}) {
    this.pre_context = values.pre_context !== undefined ? values.pre_context : "";
  }
};

// Struct: HandwritingRecognitionQuery
chromeos.machine_learning.mojom.HandwritingRecognitionQuery = class {
  constructor(values = {}) {
    this.max_num_results = values.max_num_results !== undefined ? values.max_num_results : 0;
    this.return_segmentation = values.return_segmentation !== undefined ? values.return_segmentation : false;
  }
};

// Struct: HandwritingRecognizerInkRange
chromeos.machine_learning.mojom.HandwritingRecognizerInkRange = class {
  constructor(values = {}) {
    this.end_point = values.end_point !== undefined ? values.end_point : 0;
  }
};

// Struct: HandwritingRecognizerSegment
chromeos.machine_learning.mojom.HandwritingRecognizerSegment = class {
  constructor(values = {}) {
    this.ink_ranges = values.ink_ranges !== undefined ? values.ink_ranges : "";
  }
};

// Struct: HandwritingRecognizerSegmentation
chromeos.machine_learning.mojom.HandwritingRecognizerSegmentation = class {
  constructor(values = {}) {
    this.segments = values.segments !== undefined ? values.segments : [];
  }
};

// Struct: HandwritingRecognizerCandidate
chromeos.machine_learning.mojom.HandwritingRecognizerCandidate = class {
  constructor(values = {}) {
    this.text = values.text !== undefined ? values.text : "";
    this.segmentation = values.segmentation !== undefined ? values.segmentation : 0;
  }
};

// Struct: HandwritingRecognizerResult
chromeos.machine_learning.mojom.HandwritingRecognizerResult = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : null;
    this.1 = values.1 !== undefined ? values.1 : null;
  }
};

// Struct: HandwritingRecognizerSpec
chromeos.machine_learning.mojom.HandwritingRecognizerSpec = class {
  constructor(values = {}) {
    this.language = values.language !== undefined ? values.language : "";
    this.language_pack_path = values.language_pack_path !== undefined ? values.language_pack_path : "";
    this.library_dlc_path = values.library_dlc_path !== undefined ? values.library_dlc_path : "";
  }
};

// Interface: HandwritingRecognizer
chromeos.machine_learning.mojom.HandwritingRecognizerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.machine_learning.mojom.HandwritingRecognizer';
  }

  0(query) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(query)
      resolve({});
    });
  }

};

chromeos.machine_learning.mojom.HandwritingRecognizerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
