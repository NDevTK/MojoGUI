// Auto-generated MojoJS binding
// Source: chromium_src/components/services/print_compositor/public/mojom/print_compositor.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Enum: Status
printing.mojom.Status = {
  kSuccess: 0,
  kHandleMapError: 1,
  kContentFormatError: 2,
  kCompositingFailure: 3,
};

// Enum: DocumentType
printing.mojom.DocumentType = {
  kPDF: 0,
  kXPS: 1,
};

// Interface: PrintCompositor
printing.mojom.PrintCompositorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'printing.mojom.PrintCompositor';
  }

};

printing.mojom.PrintCompositorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
