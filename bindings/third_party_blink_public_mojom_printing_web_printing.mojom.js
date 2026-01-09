// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/printing/web_printing.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: WebPrintingMultipleDocumentHandling
blink.mojom.WebPrintingMultipleDocumentHandling = {
  kSeparateDocumentsCollatedCopies: 0,
  kSeparateDocumentsUncollatedCopies: 1,
};

// Enum: WebPrintingSides
blink.mojom.WebPrintingSides = {
  kOneSided: 0,
  kTwoSidedLongEdge: 1,
  kTwoSidedShortEdge: 2,
};

// Enum: WebPrintQuality
blink.mojom.WebPrintQuality = {
  kDraft: 0,
  kNormal: 1,
  kHigh: 2,
};

// Enum: WebPrintColorMode
blink.mojom.WebPrintColorMode = {
  kColor: 0,
  kMonochrome: 1,
};

// Enum: WebPrintingOrientationRequested
blink.mojom.WebPrintingOrientationRequested = {
  kPortrait: 0,
  kLandscape: 1,
};

// Enum: WebPrinterState
blink.mojom.WebPrinterState = {
  kIdle: 0,
  kProcessing: 1,
  kStopped: 2,
};

// Enum: WebPrinterStateReason
blink.mojom.WebPrinterStateReason = {
  kOther: 0,
  kConnectingToDevice: 1,
  kCoverOpen: 2,
  kDeveloperEmpty: 3,
  kDeveloperLow: 4,
  kDoorOpen: 5,
  kFuserOverTemp: 6,
  kFuserUnderTemp: 7,
  kInputTrayMissing: 8,
  kInterlockOpen: 9,
  kInterpreterResourceUnavailable: 10,
  kMarkerSupplyEmpty: 11,
  kMarkerSupplyLow: 12,
  kMarkerWasteAlmostFull: 13,
  kMarkerWasteFull: 14,
  kMediaEmpty: 15,
  kMediaJam: 16,
  kMediaLow: 17,
  kMediaNeeded: 18,
  kMovingToPaused: 19,
  kOpcLifeOver: 20,
  kOpcNearEol: 21,
  kOutputAreaAlmostFull: 22,
  kOutputAreaFull: 23,
  kOutputTrayMissing: 24,
  kPaused: 25,
  kShutdown: 26,
  kSpoolAreaFull: 27,
  kStoppedPartly: 28,
  kStopping: 29,
  kTimedOut: 30,
  kTonerEmpty: 31,
  kTonerLow: 32,
};

// Enum: WebPrintJobState
blink.mojom.WebPrintJobState = {
  kPending: 0,
  kProcessing: 1,
  kCompleted: 2,
  kCanceled: 3,
  kAborted: 4,
};

// Enum: GetPrintersError
blink.mojom.GetPrintersError = {
  kUserPermissionDenied: 0,
};

// Enum: WebPrinterFetchError
blink.mojom.WebPrinterFetchError = {
  kPrinterUnreachable: 0,
  kUserPermissionDenied: 1,
};

// Enum: WebPrintError
blink.mojom.WebPrintError = {
  kPrinterUnreachable: 0,
  kDocumentMalformed: 1,
  kPrintJobTemplateAttributesMismatch: 2,
  kUserPermissionDenied: 3,
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
    this.0 = values.0 !== undefined ? values.0 : 0;
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
