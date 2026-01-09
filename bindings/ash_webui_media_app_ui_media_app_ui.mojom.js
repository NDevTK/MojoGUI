// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/media_app_ui/media_app_ui.mojom
// Module: ash.media_app_ui.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.media_app_ui = ash.media_app_ui || {};
ash.media_app_ui.mojom = ash.media_app_ui.mojom || {};


// Interface: PageHandlerFactory
ash.media_app_ui.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.media_app_ui.mojom.PageHandlerFactory';
  }

  createPageHandler(handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(handler)
  }

};

ash.media_app_ui.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
ash.media_app_ui.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.media_app_ui.mojom.PageHandler';
  }

  openFeedbackDialog() {
    // Method: OpenFeedbackDialog
    return new Promise((resolve) => {
      // Call: OpenFeedbackDialog()
      resolve({});
    });
  }

  toggleBrowserFullscreenMode() {
    // Method: ToggleBrowserFullscreenMode
    // Call: ToggleBrowserFullscreenMode()
  }

  maybeTriggerPdfHats() {
    // Method: MaybeTriggerPdfHats
    // Call: MaybeTriggerPdfHats()
  }

  isFileArcWritable(token) {
    // Method: IsFileArcWritable
    return new Promise((resolve) => {
      // Call: IsFileArcWritable(token)
      resolve({});
    });
  }

  isFileBrowserWritable(token) {
    // Method: IsFileBrowserWritable
    return new Promise((resolve) => {
      // Call: IsFileBrowserWritable(token)
      resolve({});
    });
  }

  editInPhotos(token, mime_type) {
    // Method: EditInPhotos
    // Call: EditInPhotos(token, mime_type)
  }

  mediaApp(SWAs) {
    // Method: MediaApp
    // Call: MediaApp(SWAs)
  }

  submitForm(url, payload, header) {
    // Method: SubmitForm
    // Call: SubmitForm(url, payload, header)
  }

};

ash.media_app_ui.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
