// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/print_management/mojom/printing_manager.mojom
// Module: chromeos.printing.printing_manager.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.printing = chromeos.printing || {};
chromeos.printing.printing_manager = chromeos.printing.printing_manager || {};
chromeos.printing.printing_manager.mojom = chromeos.printing.printing_manager.mojom || {};


// Enum: PrintJobCompletionStatus
chromeos.printing.printing_manager.mojom.PrintJobCompletionStatus = {
  kFailed: 0,
  kCanceled: 1,
  kPrinted: 2,
};

// Enum: PrinterErrorCode
chromeos.printing.printing_manager.mojom.PrinterErrorCode = {
  kNoError: 0,
  kPaperJam: 1,
  kOutOfPaper: 2,
  kOutOfInk: 3,
  kDoorOpen: 4,
  kPrinterUnreachable: 5,
  kTrayMissing: 6,
  kOutputFull: 7,
  kStopped: 8,
  kFilterFailed: 9,
  kUnknownError: 10,
  kClientUnauthorized: 11,
  kExpiredCertificate: 12,
};

// Enum: ActivePrintJobState
chromeos.printing.printing_manager.mojom.ActivePrintJobState = {
  failed: 0,
  and: 1,
};

// Enum: LaunchSource
chromeos.printing.printing_manager.mojom.LaunchSource = {
};

// Struct: CompletedPrintJobInfo
chromeos.printing.printing_manager.mojom.CompletedPrintJobInfo = class {
  constructor(values = {}) {
    this.completion_status = values.completion_status !== undefined ? values.completion_status : 0;
  }
};

// Struct: ActivePrintJobInfo
chromeos.printing.printing_manager.mojom.ActivePrintJobInfo = class {
  constructor(values = {}) {
    this.active_state = values.active_state !== undefined ? values.active_state : 0;
  }
};

// Struct: PrintJobInfo
chromeos.printing.printing_manager.mojom.PrintJobInfo = class {
  constructor(values = {}) {
    this.active_print_job_info = values.active_print_job_info !== undefined ? values.active_print_job_info : 0;
  }
};

// Interface: PrintJobsObserver
chromeos.printing.printing_manager.mojom.PrintJobsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.printing.printing_manager.mojom.PrintJobsObserver';
  }

  onAllPrintJobsDeleted() {
    // Method: OnAllPrintJobsDeleted
    // Call: OnAllPrintJobsDeleted()
  }

  onPrintJobUpdate(print_job) {
    // Method: OnPrintJobUpdate
    // Call: OnPrintJobUpdate(print_job)
  }

};

chromeos.printing.printing_manager.mojom.PrintJobsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PrintingMetadataProvider
chromeos.printing.printing_manager.mojom.PrintingMetadataProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider';
  }

  observePrintJobs(observer) {
    // Method: ObservePrintJobs
    // Call: ObservePrintJobs(observer)
  }

  getPrintJobs() {
    // Method: GetPrintJobs
    return new Promise((resolve) => {
      // Call: GetPrintJobs()
      resolve({});
    });
  }

  deleteAllPrintJobs() {
    // Method: DeleteAllPrintJobs
    return new Promise((resolve) => {
      // Call: DeleteAllPrintJobs()
      resolve({});
    });
  }

  cancelPrintJob(id) {
    // Method: CancelPrintJob
    return new Promise((resolve) => {
      // Call: CancelPrintJob(id)
      resolve({});
    });
  }

  getDeletePrintJobHistoryAllowedByPolicy() {
    // Method: GetDeletePrintJobHistoryAllowedByPolicy
    return new Promise((resolve) => {
      // Call: GetDeletePrintJobHistoryAllowedByPolicy()
      resolve({});
    });
  }

  getPrintJobHistoryExpirationPeriod() {
    // Method: GetPrintJobHistoryExpirationPeriod
    return new Promise((resolve) => {
      // Call: GetPrintJobHistoryExpirationPeriod()
      resolve({});
    });
  }

};

chromeos.printing.printing_manager.mojom.PrintingMetadataProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PrintManagementHandler
chromeos.printing.printing_manager.mojom.PrintManagementHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.printing.printing_manager.mojom.PrintManagementHandler';
  }

  launchPrinterSettings(source) {
    // Method: LaunchPrinterSettings
    // Call: LaunchPrinterSettings(source)
  }

  recordGetPrintJobsRequestDuration(duration) {
    // Method: RecordGetPrintJobsRequestDuration
    // Call: RecordGetPrintJobsRequestDuration(duration)
  }

};

chromeos.printing.printing_manager.mojom.PrintManagementHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
