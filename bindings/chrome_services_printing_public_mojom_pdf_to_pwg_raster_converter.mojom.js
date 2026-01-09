// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_to_pwg_raster_converter.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Enum: TransformType
printing.mojom.TransformType = {
  TRANSFORM_NORMAL: 0,
  TRANSFORM_ROTATE_180: 1,
  TRANSFORM_FLIP_HORIZONTAL: 2,
  TRANSFORM_FLIP_VERTICAL: 3,
};

// Enum: DuplexMode
printing.mojom.DuplexMode = {
  SIMPLEX: 0,
  LONG_EDGE: 1,
  SHORT_EDGE: 2,
};

// Struct: PwgRasterSettings
printing.mojom.PwgRasterSettings = class {
  constructor(values = {}) {
    this.TRANSFORM_NORMAL = values.TRANSFORM_NORMAL !== undefined ? values.TRANSFORM_NORMAL : null;
  }
};

// Interface: PdfToPwgRasterConverter
printing.mojom.PdfToPwgRasterConverterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'printing.mojom.PdfToPwgRasterConverter';
  }

  convert(pdf_region, pdf_settings, pwg_raster_settings) {
    // Method: Convert
    return new Promise((resolve) => {
      // Call: Convert(pdf_region, pdf_settings, pwg_raster_settings)
      resolve({});
    });
  }

  setUseSkiaRendererPolicy(use_skia) {
    // Method: SetUseSkiaRendererPolicy
    // Call: SetUseSkiaRendererPolicy(use_skia)
  }

};

printing.mojom.PdfToPwgRasterConverterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
