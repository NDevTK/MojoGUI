// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/pdf/public/mojom/pdf_thumbnailer.mojom
// Module: pdf.mojom

'use strict';

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};


// Struct: ThumbParams
pdf.mojom.ThumbParams = class {
  constructor(values = {}) {
    this.size_px = values.size_px !== undefined ? values.size_px : null;
    this.inch = values.inch !== undefined ? values.inch : null;
    this.keep_aspect = values.keep_aspect !== undefined ? values.keep_aspect : false;
  }
};

// Interface: PdfThumbnailer
pdf.mojom.PdfThumbnailerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'pdf.mojom.PdfThumbnailer';
  }

  getThumbnail() {
    // Method: GetThumbnail
    // Call: GetThumbnail()
  }

  details() {
    // Method: details
    // Call: details()
  }

  getThumbnail(params, pdf_region) {
    // Method: GetThumbnail
    return new Promise((resolve) => {
      // Call: GetThumbnail(params, pdf_region)
      resolve({});
    });
  }

  setUseSkiaRendererPolicy(use_skia) {
    // Method: SetUseSkiaRendererPolicy
    // Call: SetUseSkiaRendererPolicy(use_skia)
  }

};

pdf.mojom.PdfThumbnailerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
