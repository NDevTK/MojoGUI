// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/pdf/public/mojom/pdf_progressive_searchifier.mojom
// Module: pdf.mojom

'use strict';

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};


// Interface: PdfProgressiveSearchifier
pdf.mojom.PdfProgressiveSearchifierPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'pdf.mojom.PdfProgressiveSearchifier';
  }

  addPage(image, page_index) {
    // Method: AddPage
    // Call: AddPage(image, page_index)
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

};

pdf.mojom.PdfProgressiveSearchifierRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
