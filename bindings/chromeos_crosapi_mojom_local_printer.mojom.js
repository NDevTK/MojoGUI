// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/local_printer.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: Reason
crosapi.mojom.Reason = {
  kDeviceError: 0,
  kDoorOpen: 1,
  kLowOnInk: 2,
  kLowOnPaper: 3,
  kNoError: 4,
  kOutOfPaper: 5,
  kOutputAreaAlmostFull: 6,
  kOutputFull: 7,
  kPaperJam: 8,
  kPaused: 9,
  kPrinterQueueFull: 10,
  kPrinterUnreachable: 11,
  kStopped: 12,
  kTrayMissing: 13,
};

// Enum: Severity
crosapi.mojom.Severity = {
  kReport: 0,
  kWarning: 1,
  kError: 2,
};

// Enum: DuplexType
crosapi.mojom.DuplexType = {
  kOneSided: 0,
  kShortEdge: 1,
  kLongEdge: 2,
};

// Enum: QualityType
crosapi.mojom.QualityType = {
  kDraft: 0,
  kNormal: 1,
  kHigh: 2,
};

// Enum: DuplexMode
crosapi.mojom.DuplexMode = {
  kLongEdge: 0,
  kShortEdge: 1,
};

// Enum: Source
crosapi.mojom.Source = {
  kPrintPreview: 0,
  kArc: 1,
  kExtension: 2,
  kPrintPreviewIncognito: 3,
};

// Enum: ServerPrintersFetchingMode
crosapi.mojom.ServerPrintersFetchingMode = {
};

// Enum: BackgroundGraphicsModeRestriction
crosapi.mojom.BackgroundGraphicsModeRestriction = {
  kEnabled: 0,
  kDisabled: 1,
};

// Enum: OptionalBool
crosapi.mojom.OptionalBool = {
  kUnset: 0,
  kFalse: 1,
  kTrue: 2,
};

// Enum: PrintJobStatus
crosapi.mojom.PrintJobStatus = {
  kStarted: 0,
  kUpdated: 1,
  kSuspended: 2,
  kResumed: 3,
  kDone: 4,
  kError: 5,
  kCancelled: 6,
};

// Enum: PrintJobSource
crosapi.mojom.PrintJobSource = {
};

// Struct: LocalDestinationInfo
crosapi.mojom.LocalDestinationInfo = class {
  constructor(values = {}) {
    this.managed_print_options = values.managed_print_options !== undefined ? values.managed_print_options : 0;
  }
};

// Struct: PrinterStatus
crosapi.mojom.PrinterStatus = class {
  constructor(values = {}) {
  }
};

// Struct: StatusReason
crosapi.mojom.StatusReason = class {
  constructor(values = {}) {
    this.kUnknownReason = values.kUnknownReason !== undefined ? values.kUnknownReason : null;
    this.kExpiredCertificate = values.kExpiredCertificate !== undefined ? values.kExpiredCertificate : null;
  }
};

// Struct: Size
crosapi.mojom.Size = class {
  constructor(values = {}) {
  }
};

// Struct: Dpi
crosapi.mojom.Dpi = class {
  constructor(values = {}) {
  }
};

// Struct: SizeOption
crosapi.mojom.SizeOption = class {
  constructor(values = {}) {
  }
};

// Struct: StringOption
crosapi.mojom.StringOption = class {
  constructor(values = {}) {
  }
};

// Struct: DuplexOption
crosapi.mojom.DuplexOption = class {
  constructor(values = {}) {
  }
};

// Struct: BoolOption
crosapi.mojom.BoolOption = class {
  constructor(values = {}) {
  }
};

// Struct: DpiOption
crosapi.mojom.DpiOption = class {
  constructor(values = {}) {
  }
};

// Struct: QualityOption
crosapi.mojom.QualityOption = class {
  constructor(values = {}) {
  }
};

// Struct: ManagedPrintOptions
crosapi.mojom.ManagedPrintOptions = class {
  constructor(values = {}) {
  }
};

// Struct: PrintJob
crosapi.mojom.PrintJob = class {
  constructor(values = {}) {
    this.kSimplex = values.kSimplex !== undefined ? values.kSimplex : 0;
  }
};

// Struct: PrintServersConfig
crosapi.mojom.PrintServersConfig = class {
  constructor(values = {}) {
    this.kStandard = values.kStandard !== undefined ? values.kStandard : 0;
  }
};

// Struct: PrintServer
crosapi.mojom.PrintServer = class {
  constructor(values = {}) {
  }
};

// Struct: CapabilitiesResponse
crosapi.mojom.CapabilitiesResponse = class {
  constructor(values = {}) {
  }
};

// Struct: Policies
crosapi.mojom.Policies = class {
  constructor(values = {}) {
  }
};

// Struct: PrintJobUpdate
crosapi.mojom.PrintJobUpdate = class {
  constructor(values = {}) {
    this.pages_printed = values.pages_printed !== undefined ? values.pages_printed : 0;
  }
};

// Struct: OAuthNotNeeded
crosapi.mojom.OAuthNotNeeded = class {
  constructor(values = {}) {
  }
};

// Struct: OAuthError
crosapi.mojom.OAuthError = class {
  constructor(values = {}) {
  }
};

// Struct: OAuthAccessToken
crosapi.mojom.OAuthAccessToken = class {
  constructor(values = {}) {
    this.token = values.token !== undefined ? values.token : "";
  }
};

// Interface: PrintServerObserver
crosapi.mojom.PrintServerObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.PrintServerObserver';
  }

};

crosapi.mojom.PrintServerObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PrintJobObserver
crosapi.mojom.PrintJobObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.PrintJobObserver';
  }

};

crosapi.mojom.PrintJobObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: LocalPrintersObserver
crosapi.mojom.LocalPrintersObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.LocalPrintersObserver';
  }

};

crosapi.mojom.LocalPrintersObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: LocalPrinter
crosapi.mojom.LocalPrinterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.LocalPrinter';
  }

};

crosapi.mojom.LocalPrinterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
