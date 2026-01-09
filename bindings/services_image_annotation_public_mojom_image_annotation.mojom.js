// Auto-generated MojoJS binding
// Source: chromium_src/services/image_annotation/public/mojom/image_annotation.mojom
// Module: image_annotation.mojom

'use strict';

// Module namespace
var image_annotation = image_annotation || {};
image_annotation.mojom = image_annotation.mojom || {};


// Enum: AnnotateImageError
image_annotation.mojom.AnnotateImageError = {
  kCanceled: 0,
  kFailure: 1,
  kAdult: 2,
};

// Enum: AnnotationType
image_annotation.mojom.AnnotationType = {
  kOcr: 0,
  kLabel: 1,
  kCaption: 2,
  kIcon: 3,
};

// Struct: Annotation
image_annotation.mojom.Annotation = class {
  constructor(values = {}) {
    this.text = values.text !== undefined ? values.text : 0;
  }
};

// Interface: ImageProcessor
image_annotation.mojom.ImageProcessorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'image_annotation.mojom.ImageProcessor';
  }

  getJpgImageData() {
    // Method: GetJpgImageData
    return new Promise((resolve) => {
      // Call: GetJpgImageData()
      resolve({});
    });
  }

};

image_annotation.mojom.ImageProcessorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Annotator
image_annotation.mojom.AnnotatorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'image_annotation.mojom.Annotator';
  }

  annotateImage(source_id, description_language_tag, image_processor) {
    // Method: AnnotateImage
    return new Promise((resolve) => {
      // Call: AnnotateImage(source_id, description_language_tag, image_processor)
      resolve({});
    });
  }

};

image_annotation.mojom.AnnotatorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ImageAnnotationService
image_annotation.mojom.ImageAnnotationServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'image_annotation.mojom.ImageAnnotationService';
  }

  bindAnnotator(receiver) {
    // Method: BindAnnotator
    // Call: BindAnnotator(receiver)
  }

};

image_annotation.mojom.ImageAnnotationServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
