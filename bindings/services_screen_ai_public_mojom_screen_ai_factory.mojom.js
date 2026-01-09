// Auto-generated MojoJS binding
// Source: chromium_src/services/screen_ai/public/mojom/screen_ai_factory.mojom
// Module: screen_ai.mojom

'use strict';

// Module namespace
var screen_ai = screen_ai || {};
screen_ai.mojom = screen_ai.mojom || {};


// Interface: ScreenAIServiceShutdownHandler
screen_ai.mojom.ScreenAIServiceShutdownHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'screen_ai.mojom.ScreenAIServiceShutdownHandler';
  }

  shuttingDownOnIdle() {
    // Method: ShuttingDownOnIdle
    // Call: ShuttingDownOnIdle()
  }

};

screen_ai.mojom.ScreenAIServiceShutdownHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ScreenAIServiceFactory
screen_ai.mojom.ScreenAIServiceFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'screen_ai.mojom.ScreenAIServiceFactory';
  }

  initializeOCR(library_path, model_files, ocr_service_receiver) {
    // Method: InitializeOCR
    return new Promise((resolve) => {
      // Call: InitializeOCR(library_path, model_files, ocr_service_receiver)
      resolve({});
    });
  }

  initializeMainContentExtraction(library_path, model_files, main_content_extractor_service) {
    // Method: InitializeMainContentExtraction
    return new Promise((resolve) => {
      // Call: InitializeMainContentExtraction(library_path, model_files, main_content_extractor_service)
      resolve({});
    });
  }

  bindShutdownHandler(shutdown_handler) {
    // Method: BindShutdownHandler
    // Call: BindShutdownHandler(shutdown_handler)
  }

};

screen_ai.mojom.ScreenAIServiceFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
