// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/printing_service.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Interface: PrintingService
printing.mojom.PrintingServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'printing.mojom.PrintingService';
  }

  bindPdfNupConverter(receiver) {
    // Method: BindPdfNupConverter
    // Call: BindPdfNupConverter(receiver)
  }

  bindPdfToPwgRasterConverter(receiver) {
    // Method: BindPdfToPwgRasterConverter
    // Call: BindPdfToPwgRasterConverter(receiver)
  }

  bindPdfFlattener(receiver) {
    // Method: BindPdfFlattener
    // Call: BindPdfFlattener(receiver)
  }

  bindPdfToEmfConverterFactory(receiver) {
    // Method: BindPdfToEmfConverterFactory
    // Call: BindPdfToEmfConverterFactory(receiver)
  }

};

printing.mojom.PrintingServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
