// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/file_suggestion/drive_suggestion.mojom
// Module: file_suggestion.mojom

'use strict';

// Module namespace
var file_suggestion = file_suggestion || {};
file_suggestion.mojom = file_suggestion.mojom || {};


// Interface: DriveSuggestionHandler
file_suggestion.mojom.DriveSuggestionHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'file_suggestion.mojom.DriveSuggestionHandler';
  }

  getFiles() {
    // Method: GetFiles
    return new Promise((resolve) => {
      // Call: GetFiles()
      resolve({});
    });
  }

  dismissModule() {
    // Method: DismissModule
    // Call: DismissModule()
  }

  restoreModule() {
    // Method: RestoreModule
    // Call: RestoreModule()
  }

};

file_suggestion.mojom.DriveSuggestionHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
