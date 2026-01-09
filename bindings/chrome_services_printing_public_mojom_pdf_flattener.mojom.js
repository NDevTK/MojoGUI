// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_flattener.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Struct: FlattenPdfResult
printing.mojom.FlattenPdfResult = class {
  constructor(values = {}) {
    this.page_count = values.page_count !== undefined ? values.page_count : 0;
  }
};

// Interface: PdfFlattener
printing.mojom.PdfFlattenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'printing.mojom.PdfFlattener';
  }

  flattenPdf(src_pdf_region) {
    // Method: FlattenPdf
    return new Promise((resolve) => {
      // Call: FlattenPdf(src_pdf_region)
      resolve({});
    });
  }

  setUseSkiaRendererPolicy(use_skia) {
    // Method: SetUseSkiaRendererPolicy
    // Call: SetUseSkiaRendererPolicy(use_skia)
  }

};

printing.mojom.PdfFlattenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
