// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/downloads/downloads.mojom
// Module: downloads.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(downloads.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(downloads.mojom.PageHandlerRemote), null, false, 0, undefined),
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
  createPageHandler(page, handler) {
    return this.$.createPageHandler(page, handler);
  }
};

downloads.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    });
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
  getDownloads(search_terms) {
    return this.$.getDownloads(search_terms);
  }
  openFileRequiringGesture(id) {
    return this.$.openFileRequiringGesture(id);
  }
  drag(id) {
    return this.$.drag(id);
  }
  saveSuspiciousRequiringGesture(id) {
    return this.$.saveSuspiciousRequiringGesture(id);
  }
  recordOpenBypassWarningDialog(id) {
    return this.$.recordOpenBypassWarningDialog(id);
  }
  saveDangerousFromDialogRequiringGesture(id) {
    return this.$.saveDangerousFromDialogRequiringGesture(id);
  }
  recordCancelBypassWarningDialog(id) {
    return this.$.recordCancelBypassWarningDialog(id);
  }
  discardDangerous(id) {
    return this.$.discardDangerous(id);
  }
  retryDownload(id) {
    return this.$.retryDownload(id);
  }
  show(id) {
    return this.$.show(id);
  }
  pause(id) {
    return this.$.pause(id);
  }
  resume(id) {
    return this.$.resume(id);
  }
  remove(id) {
    return this.$.remove(id);
  }
  undo() {
    return this.$.undo();
  }
  cancel(id) {
    return this.$.cancel(id);
  }
  clearAll() {
    return this.$.clearAll();
  }
  openDownloadsFolderRequiringGesture() {
    return this.$.openDownloadsFolderRequiringGesture();
  }
  openEsbSettings() {
    return this.$.openEsbSettings();
  }
  logEsbPromotionRowViewed() {
    return this.$.logEsbPromotionRowViewed();
  }
  openDuringScanningRequiringGesture(id) {
    return this.$.openDuringScanningRequiringGesture(id);
  }
  reviewDangerousRequiringGesture(id) {
    return this.$.reviewDangerousRequiringGesture(id);
  }
  deepScan(id) {
    return this.$.deepScan(id);
  }
  bypassDeepScanRequiringGesture(id) {
    return this.$.bypassDeepScanRequiringGesture(id);
  }
  isEligibleForEsbPromo() {
    return this.$.isEligibleForEsbPromo();
  }
};

downloads.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getDownloads(search_terms) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      downloads.mojom.PageHandler_GetDownloads_ParamsSpec,
      null,
      [search_terms],
      false);
  }

  openFileRequiringGesture(id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      downloads.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec,
      null,
      [id],
      false);
  }

  drag(id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      downloads.mojom.PageHandler_Drag_ParamsSpec,
      null,
      [id],
      false);
  }

  saveSuspiciousRequiringGesture(id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec,
      null,
      [id],
      false);
  }

  recordOpenBypassWarningDialog(id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec,
      null,
      [id],
      false);
  }

  saveDangerousFromDialogRequiringGesture(id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec,
      null,
      [id],
      false);
  }

  recordCancelBypassWarningDialog(id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec,
      null,
      [id],
      false);
  }

  discardDangerous(id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      downloads.mojom.PageHandler_DiscardDangerous_ParamsSpec,
      null,
      [id],
      false);
  }

  retryDownload(id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      downloads.mojom.PageHandler_RetryDownload_ParamsSpec,
      null,
      [id],
      false);
  }

  show(id) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      downloads.mojom.PageHandler_Show_ParamsSpec,
      null,
      [id],
      false);
  }

  pause(id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      downloads.mojom.PageHandler_Pause_ParamsSpec,
      null,
      [id],
      false);
  }

  resume(id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      downloads.mojom.PageHandler_Resume_ParamsSpec,
      null,
      [id],
      false);
  }

  remove(id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      downloads.mojom.PageHandler_Remove_ParamsSpec,
      null,
      [id],
      false);
  }

  undo() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      downloads.mojom.PageHandler_Undo_ParamsSpec,
      null,
      [],
      false);
  }

  cancel(id) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      downloads.mojom.PageHandler_Cancel_ParamsSpec,
      null,
      [id],
      false);
  }

  clearAll() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      downloads.mojom.PageHandler_ClearAll_ParamsSpec,
      null,
      [],
      false);
  }

  openDownloadsFolderRequiringGesture() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec,
      null,
      [],
      false);
  }

  openEsbSettings() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      downloads.mojom.PageHandler_OpenEsbSettings_ParamsSpec,
      null,
      [],
      false);
  }

  logEsbPromotionRowViewed() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      downloads.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec,
      null,
      [],
      false);
  }

  openDuringScanningRequiringGesture(id) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec,
      null,
      [id],
      false);
  }

  reviewDangerousRequiringGesture(id) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec,
      null,
      [id],
      false);
  }

  deepScan(id) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      downloads.mojom.PageHandler_DeepScan_ParamsSpec,
      null,
      [id],
      false);
  }

  bypassDeepScanRequiringGesture(id) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec,
      null,
      [id],
      false);
  }

  isEligibleForEsbPromo() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_GetDownloads_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_Drag_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_DiscardDangerous_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_RetryDownload_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_Show_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_Pause_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_Resume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_Remove_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_Undo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_Cancel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_ClearAll_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_OpenEsbSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_DeepScan_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_IsEligibleForEsbPromo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_GetDownloads_ParamsSpec.$.structSpec);
          const result = this.impl.getDownloads(params.search_terms);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec.$.structSpec);
          const result = this.impl.openFileRequiringGesture(params.id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_Drag_ParamsSpec.$.structSpec);
          const result = this.impl.drag(params.id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec.$.structSpec);
          const result = this.impl.saveSuspiciousRequiringGesture(params.id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec.$.structSpec);
          const result = this.impl.recordOpenBypassWarningDialog(params.id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec.$.structSpec);
          const result = this.impl.saveDangerousFromDialogRequiringGesture(params.id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec.$.structSpec);
          const result = this.impl.recordCancelBypassWarningDialog(params.id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_DiscardDangerous_ParamsSpec.$.structSpec);
          const result = this.impl.discardDangerous(params.id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_RetryDownload_ParamsSpec.$.structSpec);
          const result = this.impl.retryDownload(params.id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_Show_ParamsSpec.$.structSpec);
          const result = this.impl.show(params.id);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_Pause_ParamsSpec.$.structSpec);
          const result = this.impl.pause(params.id);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_Resume_ParamsSpec.$.structSpec);
          const result = this.impl.resume(params.id);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_Remove_ParamsSpec.$.structSpec);
          const result = this.impl.remove(params.id);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_Undo_ParamsSpec.$.structSpec);
          const result = this.impl.undo();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_Cancel_ParamsSpec.$.structSpec);
          const result = this.impl.cancel(params.id);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_ClearAll_ParamsSpec.$.structSpec);
          const result = this.impl.clearAll();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec.$.structSpec);
          const result = this.impl.openDownloadsFolderRequiringGesture();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_OpenEsbSettings_ParamsSpec.$.structSpec);
          const result = this.impl.openEsbSettings();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec.$.structSpec);
          const result = this.impl.logEsbPromotionRowViewed();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec.$.structSpec);
          const result = this.impl.openDuringScanningRequiringGesture(params.id);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec.$.structSpec);
          const result = this.impl.reviewDangerousRequiringGesture(params.id);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_DeepScan_ParamsSpec.$.structSpec);
          const result = this.impl.deepScan(params.id);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec.$.structSpec);
          const result = this.impl.bypassDeepScanRequiringGesture(params.id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_IsEligibleForEsbPromo_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    });
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
  removeItem(index) {
    return this.$.removeItem(index);
  }
  updateItem(index, data) {
    return this.$.updateItem(index, data);
  }
  insertItems(index, items) {
    return this.$.insertItems(index, items);
  }
  clearAll() {
    return this.$.clearAll();
  }
};

downloads.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  removeItem(index) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      downloads.mojom.Page_RemoveItem_ParamsSpec,
      null,
      [index],
      false);
  }

  updateItem(index, data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      downloads.mojom.Page_UpdateItem_ParamsSpec,
      null,
      [index, data],
      false);
  }

  insertItems(index, items) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      downloads.mojom.Page_InsertItems_ParamsSpec,
      null,
      [index, items],
      false);
  }

  clearAll() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.Page_RemoveItem_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.Page_UpdateItem_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.Page_InsertItems_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.Page_ClearAll_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.Page_RemoveItem_ParamsSpec.$.structSpec);
          const result = this.impl.removeItem(params.index);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.Page_UpdateItem_ParamsSpec.$.structSpec);
          const result = this.impl.updateItem(params.index, params.data);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.Page_InsertItems_ParamsSpec.$.structSpec);
          const result = this.impl.insertItems(params.index, params.items);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.Page_ClearAll_ParamsSpec.$.structSpec);
          const result = this.impl.clearAll();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

downloads.mojom.PageReceiver = downloads.mojom.PageReceiver;

downloads.mojom.PagePtr = downloads.mojom.PageRemote;
downloads.mojom.PageRequest = downloads.mojom.PagePendingReceiver;

