// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/pdf/public/mojom/pdf_searchifier.mojom
// Module: pdf.mojom

'use strict';

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};


// Interface: PdfSearchifier
pdf.mojom.PdfSearchifierPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'pdf.mojom.PdfSearchifier';
  }

  searchify(pdf) {
    // Method: Searchify
    return new Promise((resolve) => {
      // Call: Searchify(pdf)
      resolve({});
    });
  }

};

pdf.mojom.PdfSearchifierRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
