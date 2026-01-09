// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/document_scanner.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Struct: DetectCornersResult
cros.mojom.DetectCornersResult = class {
  constructor(values = {}) {
    this.corners = values.corners !== undefined ? values.corners : 0;
  }
};

// Interface: CrosDocumentScanner
cros.mojom.CrosDocumentScannerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.CrosDocumentScanner';
  }

};

cros.mojom.CrosDocumentScannerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
