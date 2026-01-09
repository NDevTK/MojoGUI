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
    this.status_reasons@2 = values.status_reasons@2 !== undefined ? values.status_reasons@2 : 0;
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
    this.height@1 = values.height@1 !== undefined ? values.height@1 : 0;
  }
};

// Struct: Dpi
crosapi.mojom.Dpi = class {
  constructor(values = {}) {
    this.vertical@1 = values.vertical@1 !== undefined ? values.vertical@1 : 0;
  }
};

// Struct: SizeOption
crosapi.mojom.SizeOption = class {
  constructor(values = {}) {
    this.allowed_values@1 = values.allowed_values@1 !== undefined ? values.allowed_values@1 : [];
  }
};

// Struct: StringOption
crosapi.mojom.StringOption = class {
  constructor(values = {}) {
    this.allowed_values@1 = values.allowed_values@1 !== undefined ? values.allowed_values@1 : "";
  }
};

// Struct: DuplexOption
crosapi.mojom.DuplexOption = class {
  constructor(values = {}) {
    this.allowed_values@1 = values.allowed_values@1 !== undefined ? values.allowed_values@1 : [];
  }
};

// Struct: BoolOption
crosapi.mojom.BoolOption = class {
  constructor(values = {}) {
    this.allowed_values@1 = values.allowed_values@1 !== undefined ? values.allowed_values@1 : false;
  }
};

// Struct: DpiOption
crosapi.mojom.DpiOption = class {
  constructor(values = {}) {
    this.allowed_values@1 = values.allowed_values@1 !== undefined ? values.allowed_values@1 : [];
  }
};

// Struct: QualityOption
crosapi.mojom.QualityOption = class {
  constructor(values = {}) {
    this.allowed_values@1 = values.allowed_values@1 !== undefined ? values.allowed_values@1 : [];
  }
};

// Struct: ManagedPrintOptions
crosapi.mojom.ManagedPrintOptions = class {
  constructor(values = {}) {
    this.print_as_image@6 = values.print_as_image@6 !== undefined ? values.print_as_image@6 : false;
  }
};

// Struct: PrintJob
crosapi.mojom.PrintJob = class {
  constructor(values = {}) {
    this.media_size@8 = values.media_size@8 !== undefined ? values.media_size@8 : 0;
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
    this.name@2 = values.name@2 !== undefined ? values.name@2 : "";
  }
};

// Struct: CapabilitiesResponse
crosapi.mojom.CapabilitiesResponse = class {
  constructor(values = {}) {
    this.default_pin_mode_deprecated@8 = values.default_pin_mode_deprecated@8 !== undefined ? values.default_pin_mode_deprecated@8 : 0;
  }
};

// Struct: Policies
crosapi.mojom.Policies = class {
  constructor(values = {}) {
    this.print_header_footer_allowed@0 = values.print_header_footer_allowed@0 !== undefined ? values.print_header_footer_allowed@0 : 0;
    this.0 = values.0 !== undefined ? values.0 : 0;
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
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

  0(config) {
    // Method: 0
    // Call: 0(config)
  }

  1() {
    // Method: 1
    // Call: 1()
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

  0(printer_id, job_id, status) {
    // Method: 0
    // Call: 0(printer_id, job_id, status)
  }

  1(printer_id, job_id, update) {
    // Method: 1
    // Call: 1(printer_id, job_id, update)
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

  0(printers) {
    // Method: 0
    // Call: 0(printers)
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

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  objects(object) {
    // Method: objects
    // Call: objects(object)
  }

  field() {
    // Method: field
    // Call: field()
  }

  1(printer_id) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(printer_id)
      resolve({});
    });
  }

  2(printer_id) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(printer_id)
      resolve({});
    });
  }

  3(printer_id) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(printer_id)
      resolve({});
    });
  }

  4() {
    // Method: 4
    // Call: 4()
  }

  5(job) {
    // Method: 5
    // Call: 5(job)
  }

  cancelPrintJob() {
    // Method: CancelPrintJob
    // Call: CancelPrintJob()
  }

  12(printer_id, job_id) {
    // Method: 12
    return new Promise((resolve) => {
      // Call: 12(printer_id, job_id)
      resolve({});
    });
  }

  6() {
    // Method: 6
    return new Promise((resolve) => {
      // Call: 6()
      resolve({});
    });
  }

  7(print_server_ids) {
    // Method: 7
    // Call: 7(print_server_ids)
  }

  8(observer) {
    // Method: 8
    // Call: 8(observer)
  }

  9() {
    // Method: 9
    return new Promise((resolve) => {
      // Call: 9()
      resolve({});
    });
  }

  10() {
    // Method: 10
    return new Promise((resolve) => {
      // Call: 10()
      resolve({});
    });
  }

  11() {
    // Method: 11
    return new Promise((resolve) => {
      // Call: 11()
      resolve({});
    });
  }

  13(observer, source) {
    // Method: 13
    // Call: 13(observer, source)
  }

  14(printer_id) {
    // Method: 14
    return new Promise((resolve) => {
      // Call: 14(printer_id)
      resolve({});
    });
  }

  15(printer_id) {
    // Method: 15
    return new Promise((resolve) => {
      // Call: 15(printer_id)
      resolve({});
    });
  }

  16(observer) {
    // Method: 16
    return new Promise((resolve) => {
      // Call: 16(observer)
      resolve({});
    });
  }

};

crosapi.mojom.LocalPrinterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
