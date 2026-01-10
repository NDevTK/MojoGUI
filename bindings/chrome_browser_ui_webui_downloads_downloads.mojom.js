// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/downloads/downloads.mojom
// Module: downloads.mojom

'use strict';

// Module namespace
var downloads = downloads || {};
downloads.mojom = downloads.mojom || {};
var url = url || {};


// Enum: DangerType
downloads.mojom.mojom.DangerType = {
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
downloads.mojom.mojom.DangerTypeSpec = { $: mojo.internal.Enum() };

// Enum: TailoredWarningType
downloads.mojom.mojom.TailoredWarningType = {
  kNoApplicableTailoredWarningType: 0,
  kCookieTheft: 1,
  kSuspiciousArchive: 2,
};
downloads.mojom.mojom.TailoredWarningTypeSpec = { $: mojo.internal.Enum() };

// Enum: State
downloads.mojom.mojom.State = {
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
downloads.mojom.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: SafeBrowsingState
downloads.mojom.mojom.SafeBrowsingState = {
  kNoSafeBrowsing: 0,
  kStandardProtection: 1,
  kEnhancedProtection: 2,
};
downloads.mojom.mojom.SafeBrowsingStateSpec = { $: mojo.internal.Enum() };

// Struct: Data
downloads.mojom.mojom.DataSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.Data',
      packedSize: 152,
      fields: [
        { name: 'file_externally_removed', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_dangerous', packedOffset: 136, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_insecure', packedOffset: 136, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_reviewable', packedOffset: 136, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'otr', packedOffset: 136, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'resume', packedOffset: 136, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'retry', packedOffset: 136, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'percent', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'started', packedOffset: 116, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'total', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'by_ext_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'by_ext_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'danger_type', packedOffset: 120, packedBitOffset: 0, type: downloads.mojom.DangerTypeSpec, nullable: false, minVersion: 0 },
        { name: 'tailored_warning_type', packedOffset: 124, packedBitOffset: 0, type: downloads.mojom.TailoredWarningTypeSpec, nullable: false, minVersion: 0 },
        { name: 'date_string', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'file_name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'file_path', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'file_url', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'last_reason_text', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'progress_status_text', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'show_in_folder_text', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'since_string', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 128, packedBitOffset: 0, type: downloads.mojom.StateSpec, nullable: false, minVersion: 0 },
        { name: 'display_initiator_origin', packedOffset: 96, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 104, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'safe_browsing_state', packedOffset: 132, packedBitOffset: 0, type: downloads.mojom.SafeBrowsingStateSpec, nullable: false, minVersion: 0 },
        { name: 'has_safe_browsing_verdict', packedOffset: 136, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 152}]
    }
  }
};

// Interface: PageHandlerFactory
downloads.mojom.mojom.PageHandlerFactory = {};

downloads.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

downloads.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'downloads.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      downloads.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new downloads.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

downloads.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      downloads.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

downloads.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new downloads.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'downloads.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
downloads.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(downloads.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(downloads.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
downloads.mojom.mojom.PageHandlerFactoryPtr = downloads.mojom.mojom.PageHandlerFactoryRemote;
downloads.mojom.mojom.PageHandlerFactoryRequest = downloads.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
downloads.mojom.mojom.PageHandler = {};

downloads.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

downloads.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'downloads.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      downloads.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new downloads.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

downloads.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDownloads(search_terms) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      downloads.mojom.mojom.PageHandler_GetDownloads_ParamsSpec,
      null,
      [search_terms]);
  }

  openFileRequiringGesture(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      downloads.mojom.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec,
      null,
      [id]);
  }

  drag(id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      downloads.mojom.mojom.PageHandler_Drag_ParamsSpec,
      null,
      [id]);
  }

  saveSuspiciousRequiringGesture(id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      downloads.mojom.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec,
      null,
      [id]);
  }

  recordOpenBypassWarningDialog(id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      downloads.mojom.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec,
      null,
      [id]);
  }

  saveDangerousFromDialogRequiringGesture(id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      downloads.mojom.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec,
      null,
      [id]);
  }

  recordCancelBypassWarningDialog(id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      downloads.mojom.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec,
      null,
      [id]);
  }

  discardDangerous(id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      downloads.mojom.mojom.PageHandler_DiscardDangerous_ParamsSpec,
      null,
      [id]);
  }

  retryDownload(id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      downloads.mojom.mojom.PageHandler_RetryDownload_ParamsSpec,
      null,
      [id]);
  }

  show(id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      downloads.mojom.mojom.PageHandler_Show_ParamsSpec,
      null,
      [id]);
  }

  pause(id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      downloads.mojom.mojom.PageHandler_Pause_ParamsSpec,
      null,
      [id]);
  }

  resume(id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      downloads.mojom.mojom.PageHandler_Resume_ParamsSpec,
      null,
      [id]);
  }

  remove(id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      downloads.mojom.mojom.PageHandler_Remove_ParamsSpec,
      null,
      [id]);
  }

  undo() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      downloads.mojom.mojom.PageHandler_Undo_ParamsSpec,
      null,
      []);
  }

  cancel(id) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      downloads.mojom.mojom.PageHandler_Cancel_ParamsSpec,
      null,
      [id]);
  }

  clearAll() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      downloads.mojom.mojom.PageHandler_ClearAll_ParamsSpec,
      null,
      []);
  }

  openDownloadsFolderRequiringGesture() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      downloads.mojom.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec,
      null,
      []);
  }

  openEsbSettings() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      downloads.mojom.mojom.PageHandler_OpenEsbSettings_ParamsSpec,
      null,
      []);
  }

  logEsbPromotionRowViewed() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      downloads.mojom.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec,
      null,
      []);
  }

  openDuringScanningRequiringGesture(id) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      downloads.mojom.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec,
      null,
      [id]);
  }

  reviewDangerousRequiringGesture(id) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      downloads.mojom.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec,
      null,
      [id]);
  }

  deepScan(id) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      downloads.mojom.mojom.PageHandler_DeepScan_ParamsSpec,
      null,
      [id]);
  }

  bypassDeepScanRequiringGesture(id) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      downloads.mojom.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec,
      null,
      [id]);
  }

  isEligibleForEsbPromo() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      downloads.mojom.mojom.PageHandler_IsEligibleForEsbPromo_ParamsSpec,
      downloads.mojom.mojom.PageHandler_IsEligibleForEsbPromo_ResponseParamsSpec,
      []);
  }

};

downloads.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new downloads.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'downloads.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetDownloads
downloads.mojom.mojom.PageHandler_GetDownloads_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.GetDownloads_Params',
      packedSize: 16,
      fields: [
        { name: 'search_terms', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenFileRequiringGesture
downloads.mojom.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.OpenFileRequiringGesture_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Drag
downloads.mojom.mojom.PageHandler_Drag_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.Drag_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SaveSuspiciousRequiringGesture
downloads.mojom.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.SaveSuspiciousRequiringGesture_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordOpenBypassWarningDialog
downloads.mojom.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.RecordOpenBypassWarningDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SaveDangerousFromDialogRequiringGesture
downloads.mojom.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.SaveDangerousFromDialogRequiringGesture_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordCancelBypassWarningDialog
downloads.mojom.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.RecordCancelBypassWarningDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DiscardDangerous
downloads.mojom.mojom.PageHandler_DiscardDangerous_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.DiscardDangerous_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RetryDownload
downloads.mojom.mojom.PageHandler_RetryDownload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.RetryDownload_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Show
downloads.mojom.mojom.PageHandler_Show_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.Show_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Pause
downloads.mojom.mojom.PageHandler_Pause_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.Pause_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Resume
downloads.mojom.mojom.PageHandler_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.Resume_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Remove
downloads.mojom.mojom.PageHandler_Remove_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.Remove_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Undo
downloads.mojom.mojom.PageHandler_Undo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.Undo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Cancel
downloads.mojom.mojom.PageHandler_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.Cancel_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearAll
downloads.mojom.mojom.PageHandler_ClearAll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.ClearAll_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenDownloadsFolderRequiringGesture
downloads.mojom.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.OpenDownloadsFolderRequiringGesture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenEsbSettings
downloads.mojom.mojom.PageHandler_OpenEsbSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.OpenEsbSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for LogEsbPromotionRowViewed
downloads.mojom.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.LogEsbPromotionRowViewed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenDuringScanningRequiringGesture
downloads.mojom.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.OpenDuringScanningRequiringGesture_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReviewDangerousRequiringGesture
downloads.mojom.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.ReviewDangerousRequiringGesture_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeepScan
downloads.mojom.mojom.PageHandler_DeepScan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.DeepScan_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BypassDeepScanRequiringGesture
downloads.mojom.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.BypassDeepScanRequiringGesture_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsEligibleForEsbPromo
downloads.mojom.mojom.PageHandler_IsEligibleForEsbPromo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.IsEligibleForEsbPromo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

downloads.mojom.mojom.PageHandler_IsEligibleForEsbPromo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.PageHandler.IsEligibleForEsbPromo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
downloads.mojom.mojom.PageHandlerPtr = downloads.mojom.mojom.PageHandlerRemote;
downloads.mojom.mojom.PageHandlerRequest = downloads.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
downloads.mojom.mojom.Page = {};

downloads.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

downloads.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'downloads.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      downloads.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new downloads.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

downloads.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  removeItem(index) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      downloads.mojom.mojom.Page_RemoveItem_ParamsSpec,
      null,
      [index]);
  }

  updateItem(index, data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      downloads.mojom.mojom.Page_UpdateItem_ParamsSpec,
      null,
      [index, data]);
  }

  insertItems(index, items) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      downloads.mojom.mojom.Page_InsertItems_ParamsSpec,
      null,
      [index, items]);
  }

  clearAll() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      downloads.mojom.mojom.Page_ClearAll_ParamsSpec,
      null,
      []);
  }

};

downloads.mojom.mojom.Page.getRemote = function() {
  let remote = new downloads.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'downloads.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for RemoveItem
downloads.mojom.mojom.Page_RemoveItem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.Page.RemoveItem_Params',
      packedSize: 16,
      fields: [
        { name: 'index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateItem
downloads.mojom.mojom.Page_UpdateItem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.Page.UpdateItem_Params',
      packedSize: 24,
      fields: [
        { name: 'index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: downloads.mojom.DataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for InsertItems
downloads.mojom.mojom.Page_InsertItems_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.Page.InsertItems_Params',
      packedSize: 24,
      fields: [
        { name: 'index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(downloads.mojom.DataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ClearAll
downloads.mojom.mojom.Page_ClearAll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'downloads.mojom.Page.ClearAll_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
downloads.mojom.mojom.PagePtr = downloads.mojom.mojom.PageRemote;
downloads.mojom.mojom.PageRequest = downloads.mojom.mojom.PagePendingReceiver;

