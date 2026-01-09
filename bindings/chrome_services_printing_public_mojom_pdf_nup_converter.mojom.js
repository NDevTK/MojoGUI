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

};

printing.mojom.PdfNupConverterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
