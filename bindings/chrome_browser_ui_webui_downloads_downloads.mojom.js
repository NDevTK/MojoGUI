// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/downloads/downloads.mojom
// Module: downloads.mojom

'use strict';

// Module namespace
var downloads = downloads || {};
downloads.mojom = downloads.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

downloads.mojom.DangerTypeSpec = { $: mojo.internal.Enum() };
downloads.mojom.TailoredWarningTypeSpec = { $: mojo.internal.Enum() };
downloads.mojom.StateSpec = { $: mojo.internal.Enum() };
downloads.mojom.SafeBrowsingStateSpec = { $: mojo.internal.Enum() };
downloads.mojom.DataSpec = { $: {} };
downloads.mojom.PageHandlerFactory = {};
downloads.mojom.PageHandlerFactory.$interfaceName = 'downloads.mojom.PageHandlerFactory';
downloads.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
downloads.mojom.PageHandler = {};
downloads.mojom.PageHandler.$interfaceName = 'downloads.mojom.PageHandler';
downloads.mojom.PageHandler_GetDownloads_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_Drag_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_DiscardDangerous_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_RetryDownload_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_Show_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_Pause_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_Resume_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_Remove_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_Undo_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_Cancel_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_ClearAll_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_OpenEsbSettings_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_DeepScan_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_IsEligibleForEsbPromo_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_IsEligibleForEsbPromo_ResponseParamsSpec = { $: {} };
downloads.mojom.Page = {};
downloads.mojom.Page.$interfaceName = 'downloads.mojom.Page';
downloads.mojom.Page_RemoveItem_ParamsSpec = { $: {} };
downloads.mojom.Page_UpdateItem_ParamsSpec = { $: {} };
downloads.mojom.Page_InsertItems_ParamsSpec = { $: {} };
downloads.mojom.Page_ClearAll_ParamsSpec = { $: {} };

// Enum: DangerType
downloads.mojom.DangerType = {
  kNoApplicableDangerType: 0,
  kDangerousFile: 1,
  kDangerousUrl: 2,
  kDangerousContent: 3,
  kCookieTheft: 4,
  kUncommonContent: 5,
  kDangerousHost: 6,
  kPotentiallyUnwanted: 7,
  kAsyncScanning: 8,
  kAsyncLocalPasswordScanning: 9,
  kBlockedPasswordProtected: 10,
  kBlockedTooLarge: 11,
  kSensitiveContentWarning: 12,
  kSensitiveContentBlock: 13,
  kDeepScannedFailed: 14,
  kDeepScannedSafe: 15,
  kDeepScannedOpenedDangerous: 16,
  kBlockedScanFailed: 17,
  kForcedSaveToGdrive: 18,
};

// Enum: TailoredWarningType
downloads.mojom.TailoredWarningType = {
  kNoApplicableTailoredWarningType: 0,
  kCookieTheft: 1,
  kSuspiciousArchive: 2,
};

// Enum: State
downloads.mojom.State = {
  kInProgress: 0,
  kCancelled: 1,
  kComplete: 2,
  kPaused: 3,
  kDangerous: 4,
  kInterrupted: 5,
  kInsecure: 6,
  kAsyncScanning: 7,
  kPromptForScanning: 8,
  kPromptForLocalPasswordScanning: 9,
};

// Enum: SafeBrowsingState
downloads.mojom.SafeBrowsingState = {
  kNoSafeBrowsing: 0,
  kStandardProtection: 1,
  kEnhancedProtection: 2,
};

// Struct: Data
mojo.internal.Struct(
    downloads.mojom.DataSpec, 'downloads.mojom.Data', [
      mojo.internal.StructField('total', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('by_ext_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('by_ext_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('danger_type', 24, 0, downloads.mojom.DangerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tailored_warning_type', 32, 0, downloads.mojom.TailoredWarningTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('date_string', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file_name', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file_path', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file_url', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('id', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_reason_text', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('progress_status_text', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('show_in_folder_text', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('since_string', 104, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('state', 112, 0, downloads.mojom.StateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_initiator_origin', 120, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 128, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('safe_browsing_state', 136, 0, downloads.mojom.SafeBrowsingStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('percent', 144, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('started', 148, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('file_externally_removed', 152, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_dangerous', 152, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_insecure', 152, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_reviewable', 152, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('otr', 152, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('resume', 152, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('retry', 152, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_safe_browsing_verdict', 152, 7, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 168]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    downloads.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'downloads.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(downloads.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(downloads.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

downloads.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

downloads.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'downloads.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      downloads.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new downloads.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

downloads.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      downloads.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

downloads.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new downloads.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'downloads.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

downloads.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: CreatePageHandler
        try {
             decoder.decodeStruct(downloads.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

downloads.mojom.PageHandlerFactoryReceiver = downloads.mojom.PageHandlerFactoryReceiver;

downloads.mojom.PageHandlerFactoryPtr = downloads.mojom.PageHandlerFactoryRemote;
downloads.mojom.PageHandlerFactoryRequest = downloads.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    downloads.mojom.PageHandler_GetDownloads_ParamsSpec, 'downloads.mojom.PageHandler_GetDownloads_Params', [
      mojo.internal.StructField('search_terms', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_OpenFileRequiringGesture_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_Drag_ParamsSpec, 'downloads.mojom.PageHandler_Drag_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec, 'downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec, 'downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_DiscardDangerous_ParamsSpec, 'downloads.mojom.PageHandler_DiscardDangerous_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_RetryDownload_ParamsSpec, 'downloads.mojom.PageHandler_RetryDownload_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_Show_ParamsSpec, 'downloads.mojom.PageHandler_Show_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_Pause_ParamsSpec, 'downloads.mojom.PageHandler_Pause_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_Resume_ParamsSpec, 'downloads.mojom.PageHandler_Resume_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_Remove_ParamsSpec, 'downloads.mojom.PageHandler_Remove_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_Undo_ParamsSpec, 'downloads.mojom.PageHandler_Undo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_Cancel_ParamsSpec, 'downloads.mojom.PageHandler_Cancel_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_ClearAll_ParamsSpec, 'downloads.mojom.PageHandler_ClearAll_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_OpenEsbSettings_ParamsSpec, 'downloads.mojom.PageHandler_OpenEsbSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec, 'downloads.mojom.PageHandler_LogEsbPromotionRowViewed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_DeepScan_ParamsSpec, 'downloads.mojom.PageHandler_DeepScan_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_IsEligibleForEsbPromo_ParamsSpec, 'downloads.mojom.PageHandler_IsEligibleForEsbPromo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_IsEligibleForEsbPromo_ResponseParamsSpec, 'downloads.mojom.PageHandler_IsEligibleForEsbPromo_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

downloads.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

downloads.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'downloads.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      downloads.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new downloads.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

downloads.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDownloads(search_terms) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      downloads.mojom.PageHandler_GetDownloads_ParamsSpec,
      null,
      [search_terms],
      false);
  }

  openFileRequiringGesture(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      downloads.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec,
      null,
      [id],
      false);
  }

  drag(id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      downloads.mojom.PageHandler_Drag_ParamsSpec,
      null,
      [id],
      false);
  }

  saveSuspiciousRequiringGesture(id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec,
      null,
      [id],
      false);
  }

  recordOpenBypassWarningDialog(id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec,
      null,
      [id],
      false);
  }

  saveDangerousFromDialogRequiringGesture(id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec,
      null,
      [id],
      false);
  }

  recordCancelBypassWarningDialog(id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec,
      null,
      [id],
      false);
  }

  discardDangerous(id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      downloads.mojom.PageHandler_DiscardDangerous_ParamsSpec,
      null,
      [id],
      false);
  }

  retryDownload(id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      downloads.mojom.PageHandler_RetryDownload_ParamsSpec,
      null,
      [id],
      false);
  }

  show(id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      downloads.mojom.PageHandler_Show_ParamsSpec,
      null,
      [id],
      false);
  }

  pause(id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      downloads.mojom.PageHandler_Pause_ParamsSpec,
      null,
      [id],
      false);
  }

  resume(id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      downloads.mojom.PageHandler_Resume_ParamsSpec,
      null,
      [id],
      false);
  }

  remove(id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      downloads.mojom.PageHandler_Remove_ParamsSpec,
      null,
      [id],
      false);
  }

  undo() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      downloads.mojom.PageHandler_Undo_ParamsSpec,
      null,
      [],
      false);
  }

  cancel(id) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      downloads.mojom.PageHandler_Cancel_ParamsSpec,
      null,
      [id],
      false);
  }

  clearAll() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      downloads.mojom.PageHandler_ClearAll_ParamsSpec,
      null,
      [],
      false);
  }

  openDownloadsFolderRequiringGesture() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec,
      null,
      [],
      false);
  }

  openEsbSettings() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      downloads.mojom.PageHandler_OpenEsbSettings_ParamsSpec,
      null,
      [],
      false);
  }

  logEsbPromotionRowViewed() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      downloads.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec,
      null,
      [],
      false);
  }

  openDuringScanningRequiringGesture(id) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec,
      null,
      [id],
      false);
  }

  reviewDangerousRequiringGesture(id) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec,
      null,
      [id],
      false);
  }

  deepScan(id) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      downloads.mojom.PageHandler_DeepScan_ParamsSpec,
      null,
      [id],
      false);
  }

  bypassDeepScanRequiringGesture(id) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec,
      null,
      [id],
      false);
  }

  isEligibleForEsbPromo() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      downloads.mojom.PageHandler_IsEligibleForEsbPromo_ParamsSpec,
      downloads.mojom.PageHandler_IsEligibleForEsbPromo_ResponseParamsSpec,
      [],
      false);
  }

};

downloads.mojom.PageHandler.getRemote = function() {
  let remote = new downloads.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'downloads.mojom.PageHandler',
    'context');
  return remote.$;
};

downloads.mojom.PageHandlerReceiver = class {
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
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
    this.ordinalMap.set(20, 20); // Default ordinal 20 -> Index 20
    this.ordinalMap.set(21, 21); // Default ordinal 21 -> Index 21
    this.ordinalMap.set(22, 22); // Default ordinal 22 -> Index 22
    this.ordinalMap.set(23, 23); // Default ordinal 23 -> Index 23
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
        
        // Try Method 0: GetDownloads
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_GetDownloads_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDownloads (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OpenFileRequiringGesture
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFileRequiringGesture (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: Drag
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_Drag_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Drag (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: SaveSuspiciousRequiringGesture
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SaveSuspiciousRequiringGesture (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: RecordOpenBypassWarningDialog
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordOpenBypassWarningDialog (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: SaveDangerousFromDialogRequiringGesture
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SaveDangerousFromDialogRequiringGesture (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: RecordCancelBypassWarningDialog
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordCancelBypassWarningDialog (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: DiscardDangerous
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_DiscardDangerous_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DiscardDangerous (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: RetryDownload
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_RetryDownload_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RetryDownload (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 9: Show
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_Show_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Show (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 10: Pause
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_Pause_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Pause (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 11: Resume
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_Resume_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resume (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 12: Remove
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_Remove_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Remove (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 13: Undo
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_Undo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Undo (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 14: Cancel
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_Cancel_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Cancel (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 15: ClearAll
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_ClearAll_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearAll (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 16: OpenDownloadsFolderRequiringGesture
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDownloadsFolderRequiringGesture (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 17: OpenEsbSettings
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_OpenEsbSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenEsbSettings (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 18: LogEsbPromotionRowViewed
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogEsbPromotionRowViewed (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 19: OpenDuringScanningRequiringGesture
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDuringScanningRequiringGesture (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 20: ReviewDangerousRequiringGesture
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReviewDangerousRequiringGesture (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 21: DeepScan
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_DeepScan_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeepScan (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 22: BypassDeepScanRequiringGesture
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BypassDeepScanRequiringGesture (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 23: IsEligibleForEsbPromo
        try {
             decoder.decodeStruct(downloads.mojom.PageHandler_IsEligibleForEsbPromo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsEligibleForEsbPromo (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_GetDownloads_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDownloads');
          const result = this.impl.getDownloads(params.search_terms);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openFileRequiringGesture');
          const result = this.impl.openFileRequiringGesture(params.id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_Drag_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.drag');
          const result = this.impl.drag(params.id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.saveSuspiciousRequiringGesture');
          const result = this.impl.saveSuspiciousRequiringGesture(params.id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordOpenBypassWarningDialog');
          const result = this.impl.recordOpenBypassWarningDialog(params.id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.saveDangerousFromDialogRequiringGesture');
          const result = this.impl.saveDangerousFromDialogRequiringGesture(params.id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordCancelBypassWarningDialog');
          const result = this.impl.recordCancelBypassWarningDialog(params.id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_DiscardDangerous_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.discardDangerous');
          const result = this.impl.discardDangerous(params.id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_RetryDownload_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.retryDownload');
          const result = this.impl.retryDownload(params.id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_Show_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.show');
          const result = this.impl.show(params.id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_Pause_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.pause');
          const result = this.impl.pause(params.id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_Resume_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume(params.id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_Remove_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.remove');
          const result = this.impl.remove(params.id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_Undo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.undo');
          const result = this.impl.undo();
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_Cancel_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancel');
          const result = this.impl.cancel(params.id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_ClearAll_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearAll');
          const result = this.impl.clearAll();
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openDownloadsFolderRequiringGesture');
          const result = this.impl.openDownloadsFolderRequiringGesture();
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_OpenEsbSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openEsbSettings');
          const result = this.impl.openEsbSettings();
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.logEsbPromotionRowViewed');
          const result = this.impl.logEsbPromotionRowViewed();
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openDuringScanningRequiringGesture');
          const result = this.impl.openDuringScanningRequiringGesture(params.id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.reviewDangerousRequiringGesture');
          const result = this.impl.reviewDangerousRequiringGesture(params.id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_DeepScan_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deepScan');
          const result = this.impl.deepScan(params.id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bypassDeepScanRequiringGesture');
          const result = this.impl.bypassDeepScanRequiringGesture(params.id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.PageHandler_IsEligibleForEsbPromo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isEligibleForEsbPromo');
          const result = this.impl.isEligibleForEsbPromo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, downloads.mojom.PageHandler_IsEligibleForEsbPromo_ResponseParamsSpec);
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

downloads.mojom.PageHandlerReceiver = downloads.mojom.PageHandlerReceiver;

downloads.mojom.PageHandlerPtr = downloads.mojom.PageHandlerRemote;
downloads.mojom.PageHandlerRequest = downloads.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    downloads.mojom.Page_RemoveItem_ParamsSpec, 'downloads.mojom.Page_RemoveItem_Params', [
      mojo.internal.StructField('index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.Page_UpdateItem_ParamsSpec, 'downloads.mojom.Page_UpdateItem_Params', [
      mojo.internal.StructField('data', 0, 0, downloads.mojom.DataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    downloads.mojom.Page_InsertItems_ParamsSpec, 'downloads.mojom.Page_InsertItems_Params', [
      mojo.internal.StructField('items', 0, 0, mojo.internal.Array(downloads.mojom.DataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    downloads.mojom.Page_ClearAll_ParamsSpec, 'downloads.mojom.Page_ClearAll_Params', [
    ],
    [[0, 8]]);

downloads.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

downloads.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'downloads.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      downloads.mojom.PagePendingReceiver,
      handle);
    this.$ = new downloads.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

downloads.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  removeItem(index) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      downloads.mojom.Page_RemoveItem_ParamsSpec,
      null,
      [index],
      false);
  }

  updateItem(index, data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      downloads.mojom.Page_UpdateItem_ParamsSpec,
      null,
      [index, data],
      false);
  }

  insertItems(index, items) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      downloads.mojom.Page_InsertItems_ParamsSpec,
      null,
      [index, items],
      false);
  }

  clearAll() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      downloads.mojom.Page_ClearAll_ParamsSpec,
      null,
      [],
      false);
  }

};

downloads.mojom.Page.getRemote = function() {
  let remote = new downloads.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'downloads.mojom.Page',
    'context');
  return remote.$;
};

downloads.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: RemoveItem
        try {
             decoder.decodeStruct(downloads.mojom.Page_RemoveItem_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveItem (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: UpdateItem
        try {
             decoder.decodeStruct(downloads.mojom.Page_UpdateItem_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateItem (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: InsertItems
        try {
             decoder.decodeStruct(downloads.mojom.Page_InsertItems_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InsertItems (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: ClearAll
        try {
             decoder.decodeStruct(downloads.mojom.Page_ClearAll_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearAll (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.Page_RemoveItem_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.removeItem');
          const result = this.impl.removeItem(params.index);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.Page_UpdateItem_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateItem');
          const result = this.impl.updateItem(params.index, params.data);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.Page_InsertItems_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.insertItems');
          const result = this.impl.insertItems(params.index, params.items);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(downloads.mojom.Page_ClearAll_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearAll');
          const result = this.impl.clearAll();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

downloads.mojom.PageReceiver = downloads.mojom.PageReceiver;

downloads.mojom.PagePtr = downloads.mojom.PageRemote;
downloads.mojom.PageRequest = downloads.mojom.PagePendingReceiver;

