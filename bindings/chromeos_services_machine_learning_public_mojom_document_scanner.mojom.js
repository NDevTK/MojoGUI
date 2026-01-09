// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/document_scanner.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: DocumentScannerResultStatus
chromeos.machine_learning.mojom.DocumentScannerResultStatus = {
  OK: 0,
  ERROR: 1,
};

// Struct: DocumentScannerConfig
chromeos.machine_learning.mojom.DocumentScannerConfig = class {
  constructor(values = {}) {
  }
};

// Struct: DetectCornersResult
chromeos.machine_learning.mojom.DetectCornersResult = class {
  constructor(values = {}) {
  }
};

// Struct: DoPostProcessingResult
chromeos.machine_learning.mojom.DoPostProcessingResult = class {
  constructor(values = {}) {
  }
};

// Interface: DocumentScanner
chromeos.machine_learning.mojom.DocumentScannerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.machine_learning.mojom.DocumentScanner';
  }

};

chromeos.machine_learning.mojom.DocumentScannerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
