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
  kStarted: 0,
  kDocumentDone: 1,
};

// Enum: LaunchSource
chromeos.printing.printing_manager.mojom.LaunchSource = {
  kEmptyStateButton: 0,
  kHeaderButton: 1,
};

// Interface: PrintJobsObserver
chromeos.printing.printing_manager.mojom.PrintJobsObserver = {};

chromeos.printing.printing_manager.mojom.PrintJobsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.printing.printing_manager.mojom.PrintJobsObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.printing.printing_manager.mojom.PrintJobsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.printing.printing_manager.mojom.PrintJobsObserverPendingReceiver,
      handle);
    this.$ = new chromeos.printing.printing_manager.mojom.PrintJobsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.printing.printing_manager.mojom.PrintJobsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAllPrintJobsDeleted() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnAllPrintJobsDeleted_ParamsSpec,
      null,
      []);
  }

  onPrintJobUpdate(print_job) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnPrintJobUpdate_ParamsSpec,
      null,
      [print_job]);
  }

};

chromeos.printing.printing_manager.mojom.PrintJobsObserver.getRemote = function() {
  let remote = new chromeos.printing.printing_manager.mojom.PrintJobsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.printing.printing_manager.mojom.PrintJobsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnAllPrintJobsDeleted
chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnAllPrintJobsDeleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintJobsObserver.OnAllPrintJobsDeleted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPrintJobUpdate
chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnPrintJobUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintJobsObserver.OnPrintJobUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'print_job', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromeos.printing.printing_manager.mojom.PrintJobsObserverPtr = chromeos.printing.printing_manager.mojom.PrintJobsObserverRemote;
chromeos.printing.printing_manager.mojom.PrintJobsObserverRequest = chromeos.printing.printing_manager.mojom.PrintJobsObserverPendingReceiver;


// Interface: PrintingMetadataProvider
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider = {};

chromeos.printing.printing_manager.mojom.PrintingMetadataProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.printing.printing_manager.mojom.PrintingMetadataProviderRemote = class {
  static get $interfaceName() {
    return 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.printing.printing_manager.mojom.PrintingMetadataProviderPendingReceiver,
      handle);
    this.$ = new chromeos.printing.printing_manager.mojom.PrintingMetadataProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.printing.printing_manager.mojom.PrintingMetadataProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  observePrintJobs(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ParamsSpec,
      null,
      [observer]);
  }

  getPrintJobs() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ParamsSpec,
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ResponseParamsSpec,
      []);
  }

  deleteAllPrintJobs() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ParamsSpec,
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ResponseParamsSpec,
      []);
  }

  cancelPrintJob(id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ParamsSpec,
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ResponseParamsSpec,
      [id]);
  }

  getDeletePrintJobHistoryAllowedByPolicy() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ParamsSpec,
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ResponseParamsSpec,
      []);
  }

  getPrintJobHistoryExpirationPeriod() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ParamsSpec,
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ResponseParamsSpec,
      []);
  }

};

chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.getRemote = function() {
  let remote = new chromeos.printing.printing_manager.mojom.PrintingMetadataProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider',
    'context');
  return remote.$;
};

// ParamsSpec for ObservePrintJobs
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.ObservePrintJobs_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPrintJobs
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.GetPrintJobs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.GetPrintJobs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'print_jobs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteAllPrintJobs
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.DeleteAllPrintJobs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.DeleteAllPrintJobs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CancelPrintJob
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.CancelPrintJob_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.CancelPrintJob_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'attempted_cancel', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDeletePrintJobHistoryAllowedByPolicy
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.GetDeletePrintJobHistoryAllowedByPolicy_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.GetDeletePrintJobHistoryAllowedByPolicy_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_allowed_by_policy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPrintJobHistoryExpirationPeriod
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.GetPrintJobHistoryExpirationPeriod_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.GetPrintJobHistoryExpirationPeriod_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'expiration_period_in_days', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_from_policy', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromeos.printing.printing_manager.mojom.PrintingMetadataProviderPtr = chromeos.printing.printing_manager.mojom.PrintingMetadataProviderRemote;
chromeos.printing.printing_manager.mojom.PrintingMetadataProviderRequest = chromeos.printing.printing_manager.mojom.PrintingMetadataProviderPendingReceiver;


// Interface: PrintManagementHandler
chromeos.printing.printing_manager.mojom.PrintManagementHandler = {};

chromeos.printing.printing_manager.mojom.PrintManagementHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.printing.printing_manager.mojom.PrintManagementHandlerRemote = class {
  static get $interfaceName() {
    return 'chromeos.printing.printing_manager.mojom.PrintManagementHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.printing.printing_manager.mojom.PrintManagementHandlerPendingReceiver,
      handle);
    this.$ = new chromeos.printing.printing_manager.mojom.PrintManagementHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.printing.printing_manager.mojom.PrintManagementHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  launchPrinterSettings(source) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.printing.printing_manager.mojom.PrintManagementHandler_LaunchPrinterSettings_ParamsSpec,
      null,
      [source]);
  }

  recordGetPrintJobsRequestDuration(duration) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.printing.printing_manager.mojom.PrintManagementHandler_RecordGetPrintJobsRequestDuration_ParamsSpec,
      null,
      [duration]);
  }

};

chromeos.printing.printing_manager.mojom.PrintManagementHandler.getRemote = function() {
  let remote = new chromeos.printing.printing_manager.mojom.PrintManagementHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.printing.printing_manager.mojom.PrintManagementHandler',
    'context');
  return remote.$;
};

// ParamsSpec for LaunchPrinterSettings
chromeos.printing.printing_manager.mojom.PrintManagementHandler_LaunchPrinterSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintManagementHandler.LaunchPrinterSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordGetPrintJobsRequestDuration
chromeos.printing.printing_manager.mojom.PrintManagementHandler_RecordGetPrintJobsRequestDuration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.printing.printing_manager.mojom.PrintManagementHandler.RecordGetPrintJobsRequestDuration_Params',
      packedSize: 16,
      fields: [
        { name: 'duration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromeos.printing.printing_manager.mojom.PrintManagementHandlerPtr = chromeos.printing.printing_manager.mojom.PrintManagementHandlerRemote;
chromeos.printing.printing_manager.mojom.PrintManagementHandlerRequest = chromeos.printing.printing_manager.mojom.PrintManagementHandlerPendingReceiver;

