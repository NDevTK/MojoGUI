// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/print_management/mojom/printing_manager.mojom
// Module: chromeos.printing.printing_manager.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.printing = chromeos.printing || {};
chromeos.printing.printing.printing_manager = chromeos.printing.printing.printing_manager || {};
chromeos.printing.printing.printing_manager.printing_manager.mojom = chromeos.printing.printing.printing_manager.printing_manager.mojom || {};
var url = url || {};


// Enum: PrintJobCompletionStatus
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintJobCompletionStatus = {
  kFailed: 0,
  kCanceled: 1,
  kPrinted: 2,
};
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintJobCompletionStatusSpec = { $: mojo.internal.Enum() };

// Enum: PrinterErrorCode
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrinterErrorCode = {
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
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrinterErrorCodeSpec = { $: mojo.internal.Enum() };

// Enum: ActivePrintJobState
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.ActivePrintJobState = {
  kStarted: 0,
  kDocumentDone: 1,
};
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.ActivePrintJobStateSpec = { $: mojo.internal.Enum() };

// Enum: LaunchSource
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.LaunchSource = {
  kEmptyStateButton: 0,
  kHeaderButton: 1,
};
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.LaunchSourceSpec = { $: mojo.internal.Enum() };

// Struct: CompletedPrintJobInfo
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.CompletedPrintJobInfoSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.CompletedPrintJobInfo',
      packedSize: 16,
      fields: [
        { name: 'completion_status', packedOffset: 0, packedBitOffset: 0, type: chromeos.printing.printing_manager.mojom.PrintJobCompletionStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ActivePrintJobInfo
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.ActivePrintJobInfoSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.ActivePrintJobInfo',
      packedSize: 16,
      fields: [
        { name: 'printed_pages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'active_state', packedOffset: 4, packedBitOffset: 0, type: chromeos.printing.printing_manager.mojom.ActivePrintJobStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PrintJobInfo
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintJobInfoSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintJobInfo',
      packedSize: 80,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'creation_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'number_of_pages', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'printer_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'printer_name', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'printer_uri', packedOffset: 40, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'printer_error_code', packedOffset: 68, packedBitOffset: 0, type: chromeos.printing.printing_manager.mojom.PrinterErrorCodeSpec, nullable: false, minVersion: 0 },
        { name: 'completed_info', packedOffset: 48, packedBitOffset: 0, type: chromeos.printing.printing_manager.mojom.CompletedPrintJobInfoSpec, nullable: true, minVersion: 0 },
        { name: 'active_print_job_info', packedOffset: 56, packedBitOffset: 0, type: chromeos.printing.printing_manager.mojom.ActivePrintJobInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Interface: PrintJobsObserver
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintJobsObserver = {};

chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintJobsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintJobsObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.printing.printing_manager.mojom.PrintJobsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintJobsObserverPendingReceiver,
      handle);
    this.$ = new chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintJobsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintJobsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAllPrintJobsDeleted() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintJobsObserver_OnAllPrintJobsDeleted_ParamsSpec,
      null,
      []);
  }

  onPrintJobUpdate(print_job) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintJobsObserver_OnPrintJobUpdate_ParamsSpec,
      null,
      [print_job]);
  }

};

chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintJobsObserver.getRemote = function() {
  let remote = new chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintJobsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.printing.printing_manager.mojom.PrintJobsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnAllPrintJobsDeleted
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintJobsObserver_OnAllPrintJobsDeleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintJobsObserver.OnAllPrintJobsDeleted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnPrintJobUpdate
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintJobsObserver_OnPrintJobUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintJobsObserver.OnPrintJobUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'print_job', packedOffset: 0, packedBitOffset: 0, type: chromeos.printing.printing_manager.mojom.PrintJobInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintJobsObserverPtr = chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintJobsObserverRemote;
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintJobsObserverRequest = chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintJobsObserverPendingReceiver;


// Interface: PrintingMetadataProvider
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider = {};

chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProviderRemote = class {
  static get $interfaceName() {
    return 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProviderPendingReceiver,
      handle);
    this.$ = new chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  observePrintJobs(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_ObservePrintJobs_ParamsSpec,
      null,
      [observer]);
  }

  getPrintJobs() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_GetPrintJobs_ParamsSpec,
      chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_GetPrintJobs_ResponseParamsSpec,
      []);
  }

  deleteAllPrintJobs() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ParamsSpec,
      chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ResponseParamsSpec,
      []);
  }

  cancelPrintJob(id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_CancelPrintJob_ParamsSpec,
      chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_CancelPrintJob_ResponseParamsSpec,
      [id]);
  }

  getDeletePrintJobHistoryAllowedByPolicy() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ParamsSpec,
      chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ResponseParamsSpec,
      []);
  }

  getPrintJobHistoryExpirationPeriod() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ParamsSpec,
      chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ResponseParamsSpec,
      []);
  }

};

chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider.getRemote = function() {
  let remote = new chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider',
    'context');
  return remote.$;
};

// ParamsSpec for ObservePrintJobs
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_ObservePrintJobs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.ObservePrintJobs_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPrintJobs
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_GetPrintJobs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.GetPrintJobs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_GetPrintJobs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.GetPrintJobs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'print_jobs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chromeos.printing.printing_manager.mojom.PrintJobInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteAllPrintJobs
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.DeleteAllPrintJobs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.DeleteAllPrintJobs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CancelPrintJob
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_CancelPrintJob_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.CancelPrintJob_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_CancelPrintJob_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.CancelPrintJob_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'attempted_cancel', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDeletePrintJobHistoryAllowedByPolicy
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.GetDeletePrintJobHistoryAllowedByPolicy_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.GetDeletePrintJobHistoryAllowedByPolicy_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_allowed_by_policy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPrintJobHistoryExpirationPeriod
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.GetPrintJobHistoryExpirationPeriod_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.GetPrintJobHistoryExpirationPeriod_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'expiration_period_in_days', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0 },
        { name: 'is_from_policy', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProviderPtr = chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProviderRemote;
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProviderRequest = chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintingMetadataProviderPendingReceiver;


// Interface: PrintManagementHandler
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintManagementHandler = {};

chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintManagementHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintManagementHandlerRemote = class {
  static get $interfaceName() {
    return 'chromeos.printing.printing_manager.mojom.PrintManagementHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintManagementHandlerPendingReceiver,
      handle);
    this.$ = new chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintManagementHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintManagementHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  launchPrinterSettings(source) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintManagementHandler_LaunchPrinterSettings_ParamsSpec,
      null,
      [source]);
  }

  recordGetPrintJobsRequestDuration(duration) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintManagementHandler_RecordGetPrintJobsRequestDuration_ParamsSpec,
      null,
      [duration]);
  }

};

chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintManagementHandler.getRemote = function() {
  let remote = new chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintManagementHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.printing.printing_manager.mojom.PrintManagementHandler',
    'context');
  return remote.$;
};

// ParamsSpec for LaunchPrinterSettings
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintManagementHandler_LaunchPrinterSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintManagementHandler.LaunchPrinterSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: chromeos.printing.printing_manager.mojom.LaunchSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordGetPrintJobsRequestDuration
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintManagementHandler_RecordGetPrintJobsRequestDuration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintManagementHandler.RecordGetPrintJobsRequestDuration_Params',
      packedSize: 16,
      fields: [
        { name: 'duration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintManagementHandlerPtr = chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintManagementHandlerRemote;
chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintManagementHandlerRequest = chromeos.printing.printing.printing_manager.printing_manager.mojom.mojom.PrintManagementHandlerPendingReceiver;

