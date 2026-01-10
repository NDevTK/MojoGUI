// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/print_management/mojom/printing_manager.mojom
// Module: chromeos.printing.printing_manager.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.printing = chromeos.printing || {};
chromeos.printing.printing_manager = chromeos.printing.printing_manager || {};
chromeos.printing.printing_manager.mojom = chromeos.printing.printing_manager.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

chromeos.printing.printing_manager.mojom.PrintJobCompletionStatusSpec = { $: mojo.internal.Enum() };
chromeos.printing.printing_manager.mojom.PrinterErrorCodeSpec = { $: mojo.internal.Enum() };
chromeos.printing.printing_manager.mojom.ActivePrintJobStateSpec = { $: mojo.internal.Enum() };
chromeos.printing.printing_manager.mojom.LaunchSourceSpec = { $: mojo.internal.Enum() };
chromeos.printing.printing_manager.mojom.CompletedPrintJobInfoSpec = { $: {} };
chromeos.printing.printing_manager.mojom.ActivePrintJobInfoSpec = { $: {} };
chromeos.printing.printing_manager.mojom.PrintJobInfoSpec = { $: {} };
chromeos.printing.printing_manager.mojom.PrintJobsObserver = {};
chromeos.printing.printing_manager.mojom.PrintJobsObserver.$interfaceName = 'chromeos.printing.printing_manager.mojom.PrintJobsObserver';
chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnAllPrintJobsDeleted_ParamsSpec = { $: {} };
chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnPrintJobUpdate_ParamsSpec = { $: {} };
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider = {};
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.$interfaceName = 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider';
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ParamsSpec = { $: {} };
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ResponseParamsSpec = { $: {} };
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ParamsSpec = { $: {} };
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ResponseParamsSpec = { $: {} };
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ParamsSpec = { $: {} };
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ResponseParamsSpec = { $: {} };
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ParamsSpec = { $: {} };
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ResponseParamsSpec = { $: {} };
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ParamsSpec = { $: {} };
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ResponseParamsSpec = { $: {} };
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ParamsSpec = { $: {} };
chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ResponseParamsSpec = { $: {} };
chromeos.printing.printing_manager.mojom.PrintManagementHandler = {};
chromeos.printing.printing_manager.mojom.PrintManagementHandler.$interfaceName = 'chromeos.printing.printing_manager.mojom.PrintManagementHandler';
chromeos.printing.printing_manager.mojom.PrintManagementHandler_LaunchPrinterSettings_ParamsSpec = { $: {} };
chromeos.printing.printing_manager.mojom.PrintManagementHandler_RecordGetPrintJobsRequestDuration_ParamsSpec = { $: {} };

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

// Struct: CompletedPrintJobInfo
mojo.internal.Struct(
    chromeos.printing.printing_manager.mojom.CompletedPrintJobInfoSpec, 'chromeos.printing.printing_manager.mojom.CompletedPrintJobInfo', [
      mojo.internal.StructField('completion_status', 0, 0, chromeos.printing.printing_manager.mojom.PrintJobCompletionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ActivePrintJobInfo
mojo.internal.Struct(
    chromeos.printing.printing_manager.mojom.ActivePrintJobInfoSpec, 'chromeos.printing.printing_manager.mojom.ActivePrintJobInfo', [
      mojo.internal.StructField('active_state', 0, 0, chromeos.printing.printing_manager.mojom.ActivePrintJobStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('printed_pages', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PrintJobInfo
mojo.internal.Struct(
    chromeos.printing.printing_manager.mojom.PrintJobInfoSpec, 'chromeos.printing.printing_manager.mojom.PrintJobInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('creation_time', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('printer_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('printer_name', 32, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('printer_uri', 40, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('printer_error_code', 48, 0, chromeos.printing.printing_manager.mojom.PrinterErrorCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('completed_info', 56, 0, chromeos.printing.printing_manager.mojom.CompletedPrintJobInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('active_print_job_info', 64, 0, chromeos.printing.printing_manager.mojom.ActivePrintJobInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('number_of_pages', 72, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 88]]);

// Interface: PrintJobsObserver
mojo.internal.Struct(
    chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnAllPrintJobsDeleted_ParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnAllPrintJobsDeleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnPrintJobUpdate_ParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnPrintJobUpdate_Params', [
      mojo.internal.StructField('print_job', 0, 0, chromeos.printing.printing_manager.mojom.PrintJobInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  onPrintJobUpdate(print_job) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnPrintJobUpdate_ParamsSpec,
      null,
      [print_job],
      false);
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

chromeos.printing.printing_manager.mojom.PrintJobsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnAllPrintJobsDeleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnAllPrintJobsDeleted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAllPrintJobsDeleted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnPrintJobUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnPrintJobUpdate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPrintJobUpdate (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnAllPrintJobsDeleted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAllPrintJobsDeleted');
          const result = this.impl.onAllPrintJobsDeleted();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnPrintJobUpdate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPrintJobUpdate');
          const result = this.impl.onPrintJobUpdate(params.print_job);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.printing.printing_manager.mojom.PrintJobsObserverReceiver = chromeos.printing.printing_manager.mojom.PrintJobsObserverReceiver;

chromeos.printing.printing_manager.mojom.PrintJobsObserverPtr = chromeos.printing.printing_manager.mojom.PrintJobsObserverRemote;
chromeos.printing.printing_manager.mojom.PrintJobsObserverRequest = chromeos.printing.printing_manager.mojom.PrintJobsObserverPendingReceiver;


// Interface: PrintingMetadataProvider
mojo.internal.Struct(
    chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromeos.printing.printing_manager.mojom.PrintJobsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ResponseParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ResponseParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ResponseParams', [
      mojo.internal.StructField('print_jobs', 0, 0, mojo.internal.Array(chromeos.printing.printing_manager.mojom.PrintJobInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ResponseParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ResponseParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ResponseParams', [
      mojo.internal.StructField('attempted_cancel', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ResponseParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ResponseParams', [
      mojo.internal.StructField('is_allowed_by_policy', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ResponseParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ResponseParams', [
      mojo.internal.StructField('expiration_period_in_days', 0, 0, mojo.internal.Int16, 0, false, 0, undefined),
      mojo.internal.StructField('is_from_policy', 2, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ResponseParamsSpec,
      [observer],
      false);
  }

  getPrintJobs() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ParamsSpec,
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ResponseParamsSpec,
      [],
      false);
  }

  deleteAllPrintJobs() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ParamsSpec,
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ResponseParamsSpec,
      [],
      false);
  }

  cancelPrintJob(id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ParamsSpec,
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ResponseParamsSpec,
      [id],
      false);
  }

  getDeletePrintJobHistoryAllowedByPolicy() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ParamsSpec,
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ResponseParamsSpec,
      [],
      false);
  }

  getPrintJobHistoryExpirationPeriod() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ParamsSpec,
      chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ResponseParamsSpec,
      [],
      false);
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

chromeos.printing.printing_manager.mojom.PrintingMetadataProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ObservePrintJobs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObservePrintJobs (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetPrintJobs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPrintJobs (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DeleteAllPrintJobs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteAllPrintJobs (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CancelPrintJob
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelPrintJob (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetDeletePrintJobHistoryAllowedByPolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeletePrintJobHistoryAllowedByPolicy (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetPrintJobHistoryExpirationPeriod
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPrintJobHistoryExpirationPeriod (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.observePrintJobs');
          const result = this.impl.observePrintJobs(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPrintJobs');
          const result = this.impl.getPrintJobs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteAllPrintJobs');
          const result = this.impl.deleteAllPrintJobs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancelPrintJob');
          const result = this.impl.cancelPrintJob(params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDeletePrintJobHistoryAllowedByPolicy');
          const result = this.impl.getDeletePrintJobHistoryAllowedByPolicy();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPrintJobHistoryExpirationPeriod');
          const result = this.impl.getPrintJobHistoryExpirationPeriod();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.printing.printing_manager.mojom.PrintingMetadataProviderReceiver = chromeos.printing.printing_manager.mojom.PrintingMetadataProviderReceiver;

chromeos.printing.printing_manager.mojom.PrintingMetadataProviderPtr = chromeos.printing.printing_manager.mojom.PrintingMetadataProviderRemote;
chromeos.printing.printing_manager.mojom.PrintingMetadataProviderRequest = chromeos.printing.printing_manager.mojom.PrintingMetadataProviderPendingReceiver;


// Interface: PrintManagementHandler
mojo.internal.Struct(
    chromeos.printing.printing_manager.mojom.PrintManagementHandler_LaunchPrinterSettings_ParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintManagementHandler_LaunchPrinterSettings_Params', [
      mojo.internal.StructField('source', 0, 0, chromeos.printing.printing_manager.mojom.LaunchSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.printing.printing_manager.mojom.PrintManagementHandler_RecordGetPrintJobsRequestDuration_ParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintManagementHandler_RecordGetPrintJobsRequestDuration_Params', [
      mojo.internal.StructField('duration', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [source],
      false);
  }

  recordGetPrintJobsRequestDuration(duration) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.printing.printing_manager.mojom.PrintManagementHandler_RecordGetPrintJobsRequestDuration_ParamsSpec,
      null,
      [duration],
      false);
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

chromeos.printing.printing_manager.mojom.PrintManagementHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: LaunchPrinterSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.printing.printing_manager.mojom.PrintManagementHandler_LaunchPrinterSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchPrinterSettings (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RecordGetPrintJobsRequestDuration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.printing.printing_manager.mojom.PrintManagementHandler_RecordGetPrintJobsRequestDuration_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordGetPrintJobsRequestDuration (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.printing.printing_manager.mojom.PrintManagementHandler_LaunchPrinterSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.launchPrinterSettings');
          const result = this.impl.launchPrinterSettings(params.source);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.printing.printing_manager.mojom.PrintManagementHandler_RecordGetPrintJobsRequestDuration_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordGetPrintJobsRequestDuration');
          const result = this.impl.recordGetPrintJobsRequestDuration(params.duration);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.printing.printing_manager.mojom.PrintManagementHandlerReceiver = chromeos.printing.printing_manager.mojom.PrintManagementHandlerReceiver;

chromeos.printing.printing_manager.mojom.PrintManagementHandlerPtr = chromeos.printing.printing_manager.mojom.PrintManagementHandlerRemote;
chromeos.printing.printing_manager.mojom.PrintManagementHandlerRequest = chromeos.printing.printing_manager.mojom.PrintManagementHandlerPendingReceiver;

