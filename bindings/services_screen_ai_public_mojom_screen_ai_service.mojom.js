// Auto-generated MojoJS binding
// Source: chromium_src/services/screen_ai/public/mojom/screen_ai_service.mojom
// Module: screen_ai.mojom

'use strict';

// Module namespace
var screen_ai = screen_ai || {};
screen_ai.mojom = screen_ai.mojom || {};


// Enum: Direction
screen_ai.mojom.Direction = {
  DIRECTION_UNSPECIFIED: 0,
  DIRECTION_LEFT_TO_RIGHT: 1,
  DIRECTION_RIGHT_TO_LEFT: 2,
  DIRECTION_TOP_TO_BOTTOM: 3,
};

// Enum: OcrClientType
screen_ai.mojom.OcrClientType = {
};

// Enum: MceClientType
screen_ai.mojom.MceClientType = {
};

// Struct: VisualAnnotation
screen_ai.mojom.VisualAnnotation = class {
  constructor(values = {}) {
    this.lines = values.lines !== undefined ? values.lines : [];
  }
};

// Struct: LineBox
screen_ai.mojom.LineBox = class {
  constructor(values = {}) {
    this.text_line = values.text_line !== undefined ? values.text_line : "";
    this.639-2 = values.639-2 !== undefined ? values.639-2 : null;
    this.confidence = values.confidence !== undefined ? values.confidence : 0;
  }
};

// Struct: WordBox
screen_ai.mojom.WordBox = class {
  constructor(values = {}) {
    this.word = values.word !== undefined ? values.word : "";
    this.639-2 = values.639-2 !== undefined ? values.639-2 : null;
    this.confidence = values.confidence !== undefined ? values.confidence : 0;
  }
};

// Interface: ScreenAIAnnotator
screen_ai.mojom.ScreenAIAnnotatorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'screen_ai.mojom.ScreenAIAnnotator';
  }

  performOcrAndReturnAXTreeUpdate(image) {
    // Method: PerformOcrAndReturnAXTreeUpdate
    return new Promise((resolve) => {
      // Call: PerformOcrAndReturnAXTreeUpdate(image)
      resolve({});
    });
  }

  performOcrAndReturnAnnotation(image) {
    // Method: PerformOcrAndReturnAnnotation
    return new Promise((resolve) => {
      // Call: PerformOcrAndReturnAnnotation(image)
      resolve({});
    });
  }

  setClientType(client_type) {
    // Method: SetClientType
    // Call: SetClientType(client_type)
  }

  getMaxImageDimension() {
    // Method: GetMaxImageDimension
    return new Promise((resolve) => {
      // Call: GetMaxImageDimension()
      resolve({});
    });
  }

  setOCRLightMode(enabled) {
    // Method: SetOCRLightMode
    // Call: SetOCRLightMode(enabled)
  }

  isOCRBusy() {
    // Method: IsOCRBusy
    return new Promise((resolve) => {
      // Call: IsOCRBusy()
      resolve({});
    });
  }

};

screen_ai.mojom.ScreenAIAnnotatorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Screen2xMainContentExtractor
screen_ai.mojom.Screen2xMainContentExtractorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'screen_ai.mojom.Screen2xMainContentExtractor';
  }

  extractMainContent(snapshot) {
    // Method: ExtractMainContent
    return new Promise((resolve) => {
      // Call: ExtractMainContent(snapshot)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  extractMainNode(snapshot) {
    // Method: ExtractMainNode
    return new Promise((resolve) => {
      // Call: ExtractMainNode(snapshot)
      resolve({});
    });
  }

  identifyMainNode(ax_tree) {
    // Method: IdentifyMainNode
    return new Promise((resolve) => {
      // Call: IdentifyMainNode(ax_tree)
      resolve({});
    });
  }

  setClientType(client_type) {
    // Method: SetClientType
    // Call: SetClientType(client_type)
  }

};

screen_ai.mojom.Screen2xMainContentExtractorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: OCRService
screen_ai.mojom.OCRServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'screen_ai.mojom.OCRService';
  }

  bindAnnotator(annotator) {
    // Method: BindAnnotator
    // Call: BindAnnotator(annotator)
  }

};

screen_ai.mojom.OCRServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MainContentExtractionService
screen_ai.mojom.MainContentExtractionServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'screen_ai.mojom.MainContentExtractionService';
  }

  bindMainContentExtractor(main_content_extractor) {
    // Method: BindMainContentExtractor
    // Call: BindMainContentExtractor(main_content_extractor)
  }

};

screen_ai.mojom.MainContentExtractionServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
