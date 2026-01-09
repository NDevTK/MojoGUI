// Auto-generated MojoJS binding
// Source: chromium_src/components/language_detection/content/common/language_detection.mojom
// Module: language_detection.mojom

'use strict';

// Module namespace
var language_detection = language_detection || {};
language_detection.mojom = language_detection.mojom || {};


// Enum: LanguageDetectionModelStatus
language_detection.mojom.LanguageDetectionModelStatus = {
};

// Interface: ContentLanguageDetectionDriver
language_detection.mojom.ContentLanguageDetectionDriverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'language_detection.mojom.ContentLanguageDetectionDriver';
  }

  getLanguageDetectionModel() {
    // Method: GetLanguageDetectionModel
    return new Promise((resolve) => {
      // Call: GetLanguageDetectionModel()
      resolve({});
    });
  }

  getLanguageDetectionModelStatus() {
    // Method: GetLanguageDetectionModelStatus
    return new Promise((resolve) => {
      // Call: GetLanguageDetectionModelStatus()
      resolve({});
    });
  }

};

language_detection.mojom.ContentLanguageDetectionDriverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
