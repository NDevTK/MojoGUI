// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_nup_converter.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Enum: Status
printing.mojom.Status = {
  SUCCESS: 0,
  CONVERSION_FAILURE: 1,
  HANDLE_MAP_ERROR: 2,
};

// Interface: PdfNupConverter
printing.mojom.PdfNupConverterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'printing.mojom.PdfNupConverter';
  }

  nupPageConvert(pages_per_sheet, page_size, printable_area, pdf_page_regions) {
    // Method: NupPageConvert
    return new Promise((resolve) => {
      // Call: NupPageConvert(pages_per_sheet, page_size, printable_area, pdf_page_regions)
      resolve({});
    });
  }

  nupDocumentConvert(pages_per_sheet, page_size, printable_area, src_pdf_region) {
    // Method: NupDocumentConvert
    return new Promise((resolve) => {
      // Call: NupDocumentConvert(pages_per_sheet, page_size, printable_area, src_pdf_region)
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

printing.mojom.PdfNupConverterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
