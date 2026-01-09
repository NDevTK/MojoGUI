// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/camera_app_ui/pdf_builder.mojom
// Module: ash.camera_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.camera_app = ash.camera_app || {};
ash.camera_app.mojom = ash.camera_app.mojom || {};


// Interface: PdfBuilder
ash.camera_app.mojom.PdfBuilderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.camera_app.mojom.PdfBuilder';
  }

  addPage(jpeg, page_index) {
    // Method: AddPage
    // Call: AddPage(jpeg, page_index)
  }

  addPageInline(jpeg, page_index) {
    // Method: AddPageInline
    // Call: AddPageInline(jpeg, page_index)
  }

  deletePage(page_index) {
    // Method: DeletePage
    // Call: DeletePage(page_index)
  }

  save() {
    // Method: Save
    return new Promise((resolve) => {
      // Call: Save()
      resolve({});
    });
  }

  saveInline() {
    // Method: SaveInline
    return new Promise((resolve) => {
      // Call: SaveInline()
      resolve({});
    });
  }

};

ash.camera_app.mojom.PdfBuilderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
