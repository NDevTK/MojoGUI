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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = downloads.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = downloads.mojom.PageHandler_GetDownloads_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDownloads(params.search_terms);
          break;
        }
        case 1: {
          const params = downloads.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openFileRequiringGesture(params.id);
          break;
        }
        case 2: {
          const params = downloads.mojom.PageHandler_Drag_ParamsSpec.$.decode(message.payload);
          const result = this.impl.drag(params.id);
          break;
        }
        case 3: {
          const params = downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec.$.decode(message.payload);
          const result = this.impl.saveSuspiciousRequiringGesture(params.id);
          break;
        }
        case 4: {
          const params = downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordOpenBypassWarningDialog(params.id);
          break;
        }
        case 5: {
          const params = downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec.$.decode(message.payload);
          const result = this.impl.saveDangerousFromDialogRequiringGesture(params.id);
          break;
        }
        case 6: {
          const params = downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordCancelBypassWarningDialog(params.id);
          break;
        }
        case 7: {
          const params = downloads.mojom.PageHandler_DiscardDangerous_ParamsSpec.$.decode(message.payload);
          const result = this.impl.discardDangerous(params.id);
          break;
        }
        case 8: {
          const params = downloads.mojom.PageHandler_RetryDownload_ParamsSpec.$.decode(message.payload);
          const result = this.impl.retryDownload(params.id);
          break;
        }
        case 9: {
          const params = downloads.mojom.PageHandler_Show_ParamsSpec.$.decode(message.payload);
          const result = this.impl.show(params.id);
          break;
        }
        case 10: {
          const params = downloads.mojom.PageHandler_Pause_ParamsSpec.$.decode(message.payload);
          const result = this.impl.pause(params.id);
          break;
        }
        case 11: {
          const params = downloads.mojom.PageHandler_Resume_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resume(params.id);
          break;
        }
        case 12: {
          const params = downloads.mojom.PageHandler_Remove_ParamsSpec.$.decode(message.payload);
          const result = this.impl.remove(params.id);
          break;
        }
        case 13: {
          const params = downloads.mojom.PageHandler_Undo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.undo();
          break;
        }
        case 14: {
          const params = downloads.mojom.PageHandler_Cancel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancel(params.id);
          break;
        }
        case 15: {
          const params = downloads.mojom.PageHandler_ClearAll_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearAll();
          break;
        }
        case 16: {
          const params = downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openDownloadsFolderRequiringGesture();
          break;
        }
        case 17: {
          const params = downloads.mojom.PageHandler_OpenEsbSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openEsbSettings();
          break;
        }
        case 18: {
          const params = downloads.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.logEsbPromotionRowViewed();
          break;
        }
        case 19: {
          const params = downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openDuringScanningRequiringGesture(params.id);
          break;
        }
        case 20: {
          const params = downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reviewDangerousRequiringGesture(params.id);
          break;
        }
        case 21: {
          const params = downloads.mojom.PageHandler_DeepScan_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deepScan(params.id);
          break;
        }
        case 22: {
          const params = downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bypassDeepScanRequiringGesture(params.id);
          break;
        }
        case 23: {
          const params = downloads.mojom.PageHandler_IsEligibleForEsbPromo_ParamsSpec.$.decode(message.payload);
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = downloads.mojom.Page_RemoveItem_ParamsSpec.$.decode(message.payload);
          const result = this.impl.removeItem(params.index);
          break;
        }
        case 1: {
          const params = downloads.mojom.Page_UpdateItem_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateItem(params.index, params.data);
          break;
        }
        case 2: {
          const params = downloads.mojom.Page_InsertItems_ParamsSpec.$.decode(message.payload);
          const result = this.impl.insertItems(params.index, params.items);
          break;
        }
        case 3: {
          const params = downloads.mojom.Page_ClearAll_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearAll();
          break;
        }
      }
    }});
  }
};

downloads.mojom.PageReceiver = downloads.mojom.PageReceiver;

downloads.mojom.PagePtr = downloads.mojom.PageRemote;
downloads.mojom.PageRequest = downloads.mojom.PagePendingReceiver;

