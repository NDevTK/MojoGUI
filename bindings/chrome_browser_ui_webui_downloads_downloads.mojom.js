// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/downloads/downloads.mojom
// Module: downloads.mojom

'use strict';

// Module namespace
var downloads = downloads || {};
downloads.mojom = downloads.mojom || {};
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
      mojo.internal.StructField('file_externally_removed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_dangerous', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_insecure', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_reviewable', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('otr', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('resume', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('retry', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('percent', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('started', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('total', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('by_ext_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('by_ext_name', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('danger_type', 40, 0, downloads.mojom.DangerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tailored_warning_type', 48, 0, downloads.mojom.TailoredWarningTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('date_string', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file_name', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file_path', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file_url', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('id', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_reason_text', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('progress_status_text', 104, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('show_in_folder_text', 112, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('since_string', 120, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('state', 128, 0, downloads.mojom.StateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_initiator_origin', 136, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 144, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('safe_browsing_state', 152, 0, downloads.mojom.SafeBrowsingStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_safe_browsing_verdict', 160, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 176]]);

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
      mojo.internal.StructField('index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, downloads.mojom.DataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    downloads.mojom.Page_InsertItems_ParamsSpec, 'downloads.mojom.Page_InsertItems_Params', [
      mojo.internal.StructField('index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('items', 8, 0, mojo.internal.Array(downloads.mojom.DataSpec.$, false), null, false, 0, undefined),
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

downloads.mojom.PagePtr = downloads.mojom.PageRemote;
downloads.mojom.PageRequest = downloads.mojom.PagePendingReceiver;

