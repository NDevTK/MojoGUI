// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/file_suggestion/microsoft_files.mojom
// Module: file_suggestion.mojom

'use strict';

// Module namespace
var file_suggestion = file_suggestion || {};
file_suggestion.mojom = file_suggestion.mojom || {};


// Interface: MicrosoftFilesPageHandler
file_suggestion.mojom.MicrosoftFilesPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'file_suggestion.mojom.MicrosoftFilesPageHandler';
  }

  dismissModule() {
    // Method: DismissModule
    // Call: DismissModule()
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

file_suggestion.mojom.MicrosoftFilesPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
