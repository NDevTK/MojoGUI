// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_to_emf_converter.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Interface: PdfToEmfConverter
printing.mojom.PdfToEmfConverterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'printing.mojom.PdfToEmfConverter';
  }

  convertPage(page_index) {
    // Method: ConvertPage
    return new Promise((resolve) => {
      // Call: ConvertPage(page_index)
      resolve({});
    });
  }

  setWebContentsURL(url) {
    // Method: SetWebContentsURL
    // Call: SetWebContentsURL(url)
  }

  setUseSkiaRendererPolicy(use_skia) {
    // Method: SetUseSkiaRendererPolicy
    // Call: SetUseSkiaRendererPolicy(use_skia)
  }

};

printing.mojom.PdfToEmfConverterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PdfToEmfConverterFactory
printing.mojom.PdfToEmfConverterFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'printing.mojom.PdfToEmfConverterFactory';
  }

  createConverter(pdf_region, render_settings) {
    // Method: CreateConverter
    return new Promise((resolve) => {
      // Call: CreateConverter(pdf_region, render_settings)
      resolve({});
    });
  }

};

printing.mojom.PdfToEmfConverterFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
