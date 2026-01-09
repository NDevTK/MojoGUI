// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/printing/web_printing.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: WebPrintingMultipleDocumentHandling
blink.mojom.WebPrintingMultipleDocumentHandling = {
};

// Enum: WebPrintingSides
blink.mojom.WebPrintingSides = {
};

// Enum: WebPrintQuality
blink.mojom.WebPrintQuality = {
};

// Enum: WebPrintColorMode
blink.mojom.WebPrintColorMode = {
};

// Enum: WebPrintingOrientationRequested
blink.mojom.WebPrintingOrientationRequested = {
};

// Enum: WebPrinterState
blink.mojom.WebPrinterState = {
};

// Enum: WebPrinterStateReason
blink.mojom.WebPrinterStateReason = {
};

// Enum: WebPrintJobState
blink.mojom.WebPrintJobState = {
};

// Enum: GetPrintersError
blink.mojom.GetPrintersError = {
};

// Enum: WebPrinterFetchError
blink.mojom.WebPrinterFetchError = {
};

// Enum: WebPrintError
blink.mojom.WebPrintError = {
};

// Struct: WebPrinterInfo
blink.mojom.WebPrinterInfo = class {
  constructor(values = {}) {
    this.printer_remote = values.printer_remote !== undefined ? values.printer_remote : 0;
  }
};

// Struct: WebPrintingRange
blink.mojom.WebPrintingRange = class {
  constructor(values = {}) {
    this.to = values.to !== undefined ? values.to : 0;
  }
};

// Struct: WebPrintingMediaSize
blink.mojom.WebPrintingMediaSize = class {
  constructor(values = {}) {
    this.y_dimension = values.y_dimension !== undefined ? values.y_dimension : 0;
  }
};

// Struct: WebPrintingMediaCollection
blink.mojom.WebPrintingMediaCollection = class {
  constructor(values = {}) {
    this.media_size_name = values.media_size_name !== undefined ? values.media_size_name : 0;
  }
};

// Struct: WebPrinterAttributes
blink.mojom.WebPrinterAttributes = class {
  constructor(values = {}) {
    this.printer_id = values.printer_id !== undefined ? values.printer_id : 0;
  }
};

// Struct: WebPrintingMediaCollectionRequested
blink.mojom.WebPrintingMediaCollectionRequested = class {
  constructor(values = {}) {
    this.media_size = values.media_size !== undefined ? values.media_size : null;
  }
};

// Struct: WebPrintJobTemplateAttributes
blink.mojom.WebPrintJobTemplateAttributes = class {
  constructor(values = {}) {
    this.sides = values.sides !== undefined ? values.sides : 0;
  }
};

// Struct: WebPrintJobUpdate
blink.mojom.WebPrintJobUpdate = class {
  constructor(values = {}) {
  }
};

// Struct: WebPrintJobInfo
blink.mojom.WebPrintJobInfo = class {
  constructor(values = {}) {
    this.controller = values.controller !== undefined ? values.controller : 0;
  }
};

// Interface: WebPrintJobStateObserver
blink.mojom.WebPrintJobStateObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WebPrintJobStateObserver';
  }

  onWebPrintJobUpdate(update) {
    // Method: OnWebPrintJobUpdate
    // Call: OnWebPrintJobUpdate(update)
  }

};

blink.mojom.WebPrintJobStateObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebPrintJobController
blink.mojom.WebPrintJobControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WebPrintJobController';
  }

  cancel() {
    // Method: Cancel
    // Call: Cancel()
  }

};

blink.mojom.WebPrintJobControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebPrinter
blink.mojom.WebPrinterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WebPrinter';
  }

  fetchAttributes() {
    // Method: FetchAttributes
    return new Promise((resolve) => {
      // Call: FetchAttributes()
      resolve({});
    });
  }

  print(document, attributes) {
    // Method: Print
    return new Promise((resolve) => {
      // Call: Print(document, attributes)
      resolve({});
    });
  }

};

blink.mojom.WebPrinterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebPrintingService
blink.mojom.WebPrintingServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WebPrintingService';
  }

  getPrinters() {
    // Method: GetPrinters
    return new Promise((resolve) => {
      // Call: GetPrinters()
      resolve({});
    });
  }

};

blink.mojom.WebPrintingServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
