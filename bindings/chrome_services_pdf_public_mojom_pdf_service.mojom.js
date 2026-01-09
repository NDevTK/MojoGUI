// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/pdf/public/mojom/pdf_service.mojom
// Module: pdf.mojom

'use strict';

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};


// Interface: Ocr
pdf.mojom.OcrPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'pdf.mojom.Ocr';
  }

  performOcr(image) {
    // Method: PerformOcr
    return new Promise((resolve) => {
      // Call: PerformOcr(image)
      resolve({});
    });
  }

};

pdf.mojom.OcrRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PdfService
pdf.mojom.PdfServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'pdf.mojom.PdfService';
  }

  bindPdfProgressiveSearchifier(receiver, ocr) {
    // Method: BindPdfProgressiveSearchifier
    // Call: BindPdfProgressiveSearchifier(receiver, ocr)
  }

  bindPdfSearchifier(receiver, ocr) {
    // Method: BindPdfSearchifier
    // Call: BindPdfSearchifier(receiver, ocr)
  }

  bindPdfThumbnailer(receiver) {
    // Method: BindPdfThumbnailer
    // Call: BindPdfThumbnailer(receiver)
  }

};

pdf.mojom.PdfServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
