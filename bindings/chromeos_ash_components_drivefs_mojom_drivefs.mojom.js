// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/drivefs/mojom/drivefs.mojom
// Module: drivefs.mojom

'use strict';

// Module namespace
var drivefs = drivefs || {};
drivefs.mojom = drivefs.mojom || {};


// Enum: CancelUploadMode
drivefs.mojom.CancelUploadMode = {
  kTrashAfterCancellation: 0,
  kDeleteAfterCancellation: 1,
};

// Enum: DocsOfflineEnableStatus
drivefs.mojom.DocsOfflineEnableStatus = {
  kSuccess: 0,
  kAlreadyEnabled: 1,
  kUnknownError: 2,
  kDisableUnsupported: 3,
  kOfflineEligible: 4,
  kOfflineIneligibleUnknown: 5,
  kOfflineIneligibleOtherUser: 6,
  kOfflineIneligibleDbInInvalidState: 7,
  kOfflineIneligiblePolicyDisallow: 8,
  kOfflineIneligibleNoExtension: 9,
  kOfflineIneligibleInsufficientDiskSpace: 10,
  kNativeMessageHostError: 11,
  kNativeMessageClientError: 12,
  kSystemError: 13,
};

// Enum: CreateOrDelete
drivefs.mojom.CreateOrDelete = {
  kCreated: 0,
  kDeleted: 1,
};

// Enum: CSESupport
drivefs.mojom.CSESupport = {
  kListing: 0,
};

// Enum: AccessTokenStatus
drivefs.mojom.AccessTokenStatus = {
  kSuccess: 0,
  kTransientError: 1,
  kAuthError: 2,
};

// Enum: MirrorSyncStatus
drivefs.mojom.MirrorSyncStatus = {
  kSuccess: 0,
  kFailure: 1,
  kFeatureNotEnabled: 2,
};

// Enum: MirrorPathStatus
drivefs.mojom.MirrorPathStatus = {
  kStart: 0,
  kStop: 1,
};

// Enum: DialogResult
drivefs.mojom.DialogResult = {
  kNotDisplayed: 0,
  kAccept: 1,
  kReject: 2,
  kDismiss: 3,
};

// Enum: FileError
drivefs.mojom.FileError = {
  kOk: 0,
  kFailed: 1,
  kInUse: 2,
  kExists: 3,
  kNotFound: 4,
  kAccessDenied: 5,
  kTooManyOpened: 6,
  kNoMemory: 7,
  kNoServerSpace: 8,
  kNotADirectory: 9,
  kInvalidOperation: 10,
  kSecurity: 11,
  kAbort: 12,
  kNotAFile: 13,
  kNotEmpty: 14,
  kInvalidUrl: 15,
  kNoConnection: 16,
  kNoLocalSpace: 17,
  kServiceUnavailable: 18,
  kOkWithMoreResults: 19,
};

// Enum: Type
drivefs.mojom.Type = {
  kCantUploadStorageFull: 0,
  kPinningFailedDiskFull: 1,
  kCantUploadStorageFullOrganization: 2,
  kCantUploadSharedDriveStorageFull: 3,
};

// Enum: Type
drivefs.mojom.Type = {
  kEnableDocsOffline: 0,
};

// Enum: Type
drivefs.mojom.Type = {
  kFile: 0,
  kHosted: 1,
  kDirectory: 2,
};

// Enum: CanPinStatus
drivefs.mojom.CanPinStatus = {
  kOk: 0,
  kDisabled: 1,
};

// Enum: LookupStatus
drivefs.mojom.LookupStatus = {
  kOk: 0,
  kNotFound: 1,
  kPermissionDenied: 2,
};

// Enum: ItemEventReason
drivefs.mojom.ItemEventReason = {
  kTransfer: 0,
  kPin: 1,
};

// Enum: State
drivefs.mojom.State = {
  kQueued: 0,
  kInProgress: 1,
  kCompleted: 2,
  kFailed: 3,
  kCancelledAndDeleted: 4,
  kCancelledAndTrashed: 5,
};

// Enum: Type
drivefs.mojom.Type = {
  kCreate: 0,
  kDelete: 1,
  kModify: 2,
};

// Enum: QuerySource
drivefs.mojom.QuerySource = {
  kLocalOnly: 0,
  kCloudOnly: 1,
  kLocalAndCloud: 2,
};

// Enum: SortField
drivefs.mojom.SortField = {
  kNone: 0,
  kLastModified: 1,
  kLastViewedByMe: 2,
  kFileSize: 3,
  kSharedWithMe: 4,
};

// Enum: SortDirection
drivefs.mojom.SortDirection = {
  kAscending: 0,
  kDescending: 1,
};

// Enum: DateComparisonOperator
drivefs.mojom.DateComparisonOperator = {
  kLessOrEqual: 0,
  kLessThan: 1,
  kEqual: 2,
  kGreaterThan: 3,
  kGreaterOrEqual: 4,
};

// Enum: QueryKind
drivefs.mojom.QueryKind = {
  kRegular: 0,
  kQuickAccess: 1,
};

// Enum: UserType
drivefs.mojom.UserType = {
  kUnmanaged: 0,
  kOrganization: 1,
};

// Enum: NetError
drivefs.mojom.NetError = {
  kOk: 0,
  kIOPending: 1,
  kFailed: 2,
  kAborted: 3,
  kInvalidArgument: 4,
  kInvalidHandle: 5,
  kFileNotFound: 6,
  kTimedOut: 7,
  kNameNotResolved: 8,
  kInternetDisconnected: 9,
  kAddressUnreachable: 10,
};

// Enum: MirrorItemSyncingStatus
drivefs.mojom.MirrorItemSyncingStatus = {
  kUnknown: 0,
  kSynced: 1,
  kSyncing: 2,
  kSyncError: 3,
};

// Enum: Type
drivefs.mojom.Type = {
  kGenericUploadFailure: 0,
  kGenericDownloadFailure: 1,
  kMultipleFailures: 2,
  kExceedsCloudDownloadQuota: 3,
  kNoDiskSpace: 4,
  kExceedsCloudStorageQuota: 5,
  kExceedsCloudUploadQuota: 6,
};

// Interface: DriveFsBootstrap
drivefs.mojom.DriveFsBootstrap = {};

drivefs.mojom.DriveFsBootstrapPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

drivefs.mojom.DriveFsBootstrapRemote = class {
  static get $interfaceName() {
    return 'drivefs.mojom.DriveFsBootstrap';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      drivefs.mojom.DriveFsBootstrapPendingReceiver,
      handle);
    this.$ = new drivefs.mojom.DriveFsBootstrapRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

drivefs.mojom.DriveFsBootstrapRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(config, drive_fs, delegate) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      drivefs.mojom.DriveFsBootstrap_Init_ParamsSpec.$,
      null,
      [config, drive_fs, delegate]);
  }

};

drivefs.mojom.DriveFsBootstrap.getRemote = function() {
  let remote = new drivefs.mojom.DriveFsBootstrapRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'drivefs.mojom.DriveFsBootstrap',
    'context');
  return remote.$;
};

// ParamsSpec for Init
drivefs.mojom.DriveFsBootstrap_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsBootstrap.Init_Params',
      packedSize: 32,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'drive_fs', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'delegate', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
drivefs.mojom.DriveFsBootstrapPtr = drivefs.mojom.DriveFsBootstrapRemote;
drivefs.mojom.DriveFsBootstrapRequest = drivefs.mojom.DriveFsBootstrapPendingReceiver;


// Interface: DriveFs
drivefs.mojom.DriveFs = {};

drivefs.mojom.DriveFsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

drivefs.mojom.DriveFsRemote = class {
  static get $interfaceName() {
    return 'drivefs.mojom.DriveFs';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      drivefs.mojom.DriveFsPendingReceiver,
      handle);
    this.$ = new drivefs.mojom.DriveFsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

drivefs.mojom.DriveFsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getMetadata(path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      drivefs.mojom.DriveFs_GetMetadata_ParamsSpec.$,
      drivefs.mojom.DriveFs_GetMetadata_ResponseParamsSpec.$,
      [path]);
  }

  setPinned(path, pinned) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      drivefs.mojom.DriveFs_SetPinned_ParamsSpec.$,
      drivefs.mojom.DriveFs_SetPinned_ResponseParamsSpec.$,
      [path, pinned]);
  }

  updateNetworkState(pause_syncing, is_offline) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      drivefs.mojom.DriveFs_UpdateNetworkState_ParamsSpec.$,
      null,
      [pause_syncing, is_offline]);
  }

  resetCache() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      drivefs.mojom.DriveFs_ResetCache_ParamsSpec.$,
      drivefs.mojom.DriveFs_ResetCache_ResponseParamsSpec.$,
      []);
  }

  getThumbnail(path, crop_to_square) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      drivefs.mojom.DriveFs_GetThumbnail_ParamsSpec.$,
      drivefs.mojom.DriveFs_GetThumbnail_ResponseParamsSpec.$,
      [path, crop_to_square]);
  }

  copyFile(source, target) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      drivefs.mojom.DriveFs_CopyFile_ParamsSpec.$,
      drivefs.mojom.DriveFs_CopyFile_ResponseParamsSpec.$,
      [source, target]);
  }

  startSearchQuery(query, query_params) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      drivefs.mojom.DriveFs_StartSearchQuery_ParamsSpec.$,
      null,
      [query, query_params]);
  }

  fetchAllChangeLogs() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      drivefs.mojom.DriveFs_FetchAllChangeLogs_ParamsSpec.$,
      null,
      []);
  }

  fetchChangeLog(options) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      drivefs.mojom.DriveFs_FetchChangeLog_ParamsSpec.$,
      null,
      [options]);
  }

  sendNativeMessageRequest(request) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      drivefs.mojom.DriveFs_SendNativeMessageRequest_ParamsSpec.$,
      drivefs.mojom.DriveFs_SendNativeMessageRequest_ResponseParamsSpec.$,
      [request]);
  }

  setStartupArguments(arguments) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      drivefs.mojom.DriveFs_SetStartupArguments_ParamsSpec.$,
      drivefs.mojom.DriveFs_SetStartupArguments_ResponseParamsSpec.$,
      [arguments]);
  }

  getStartupArguments() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      drivefs.mojom.DriveFs_GetStartupArguments_ParamsSpec.$,
      drivefs.mojom.DriveFs_GetStartupArguments_ResponseParamsSpec.$,
      []);
  }

  setTracingEnabled(enabled) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      drivefs.mojom.DriveFs_SetTracingEnabled_ParamsSpec.$,
      null,
      [enabled]);
  }

  setNetworkingEnabled(enabled) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      drivefs.mojom.DriveFs_SetNetworkingEnabled_ParamsSpec.$,
      null,
      [enabled]);
  }

  forcePauseSyncing(enable) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      drivefs.mojom.DriveFs_ForcePauseSyncing_ParamsSpec.$,
      null,
      [enable]);
  }

  dumpAccountSettings() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      drivefs.mojom.DriveFs_DumpAccountSettings_ParamsSpec.$,
      null,
      []);
  }

  loadAccountSettings() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      drivefs.mojom.DriveFs_LoadAccountSettings_ParamsSpec.$,
      null,
      []);
  }

  createNativeHostSession(params, host, port) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      drivefs.mojom.DriveFs_CreateNativeHostSession_ParamsSpec.$,
      null,
      [params, host, port]);
  }

  locateFilesByItemIds(item_ids) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      drivefs.mojom.DriveFs_LocateFilesByItemIds_ParamsSpec.$,
      drivefs.mojom.DriveFs_LocateFilesByItemIds_ResponseParamsSpec.$,
      [item_ids]);
  }

  getQuotaUsage() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      drivefs.mojom.DriveFs_GetQuotaUsage_ParamsSpec.$,
      drivefs.mojom.DriveFs_GetQuotaUsage_ResponseParamsSpec.$,
      []);
  }

  toggleMirroring(enabled) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      drivefs.mojom.DriveFs_ToggleMirroring_ParamsSpec.$,
      drivefs.mojom.DriveFs_ToggleMirroring_ResponseParamsSpec.$,
      [enabled]);
  }

  toggleSyncForPath(path, status) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      drivefs.mojom.DriveFs_ToggleSyncForPath_ParamsSpec.$,
      drivefs.mojom.DriveFs_ToggleSyncForPath_ResponseParamsSpec.$,
      [path, status]);
  }

  getSyncingPaths() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      drivefs.mojom.DriveFs_GetSyncingPaths_ParamsSpec.$,
      drivefs.mojom.DriveFs_GetSyncingPaths_ResponseParamsSpec.$,
      []);
  }

  pollHostedFilePinStates() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      drivefs.mojom.DriveFs_PollHostedFilePinStates_ParamsSpec.$,
      null,
      []);
  }

  getPooledQuotaUsage() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      drivefs.mojom.DriveFs_GetPooledQuotaUsage_ParamsSpec.$,
      drivefs.mojom.DriveFs_GetPooledQuotaUsage_ResponseParamsSpec.$,
      []);
  }

  setPinnedByStableId(stable_id, pinned) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      drivefs.mojom.DriveFs_SetPinnedByStableId_ParamsSpec.$,
      drivefs.mojom.DriveFs_SetPinnedByStableId_ResponseParamsSpec.$,
      [stable_id, pinned]);
  }

  getMetadataByStableId(stable_id) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      drivefs.mojom.DriveFs_GetMetadataByStableId_ParamsSpec.$,
      drivefs.mojom.DriveFs_GetMetadataByStableId_ResponseParamsSpec.$,
      [stable_id]);
  }

  cancelUploadByPath(path, cancel_mode) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      drivefs.mojom.DriveFs_CancelUploadByPath_ParamsSpec.$,
      null,
      [path, cancel_mode]);
  }

  setDocsOfflineEnabled(enabled) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      drivefs.mojom.DriveFs_SetDocsOfflineEnabled_ParamsSpec.$,
      drivefs.mojom.DriveFs_SetDocsOfflineEnabled_ResponseParamsSpec.$,
      [enabled]);
  }

  getOfflineFilesSpaceUsage() {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      drivefs.mojom.DriveFs_GetOfflineFilesSpaceUsage_ParamsSpec.$,
      drivefs.mojom.DriveFs_GetOfflineFilesSpaceUsage_ResponseParamsSpec.$,
      []);
  }

  clearOfflineFiles() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      drivefs.mojom.DriveFs_ClearOfflineFiles_ParamsSpec.$,
      drivefs.mojom.DriveFs_ClearOfflineFiles_ResponseParamsSpec.$,
      []);
  }

  immediatelyUpload(path) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      drivefs.mojom.DriveFs_ImmediatelyUpload_ParamsSpec.$,
      drivefs.mojom.DriveFs_ImmediatelyUpload_ResponseParamsSpec.$,
      [path]);
  }

  updateFromPairedDoc(path) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      drivefs.mojom.DriveFs_UpdateFromPairedDoc_ParamsSpec.$,
      drivefs.mojom.DriveFs_UpdateFromPairedDoc_ResponseParamsSpec.$,
      [path]);
  }

  getItemFromCloudStore(path) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      drivefs.mojom.DriveFs_GetItemFromCloudStore_ParamsSpec.$,
      drivefs.mojom.DriveFs_GetItemFromCloudStore_ResponseParamsSpec.$,
      [path]);
  }

  getDocsOfflineStats() {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      drivefs.mojom.DriveFs_GetDocsOfflineStats_ParamsSpec.$,
      drivefs.mojom.DriveFs_GetDocsOfflineStats_ResponseParamsSpec.$,
      []);
  }

  getMirrorSyncStatusForFile(path) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      drivefs.mojom.DriveFs_GetMirrorSyncStatusForFile_ParamsSpec.$,
      drivefs.mojom.DriveFs_GetMirrorSyncStatusForFile_ResponseParamsSpec.$,
      [path]);
  }

  getMirrorSyncStatusForDirectory(path) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      drivefs.mojom.DriveFs_GetMirrorSyncStatusForDirectory_ParamsSpec.$,
      drivefs.mojom.DriveFs_GetMirrorSyncStatusForDirectory_ResponseParamsSpec.$,
      [path]);
  }

};

drivefs.mojom.DriveFs.getRemote = function() {
  let remote = new drivefs.mojom.DriveFsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'drivefs.mojom.DriveFs',
    'context');
  return remote.$;
};

// ParamsSpec for GetMetadata
drivefs.mojom.DriveFs_GetMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetMetadata_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_GetMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetMetadata_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPinned
drivefs.mojom.DriveFs_SetPinned_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.SetPinned_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pinned', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_SetPinned_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.SetPinned_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateNetworkState
drivefs.mojom.DriveFs_UpdateNetworkState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.UpdateNetworkState_Params',
      packedSize: 24,
      fields: [
        { name: 'pause_syncing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_offline', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResetCache
drivefs.mojom.DriveFs_ResetCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.ResetCache_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_ResetCache_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.ResetCache_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetThumbnail
drivefs.mojom.DriveFs_GetThumbnail_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetThumbnail_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'crop_to_square', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_GetThumbnail_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetThumbnail_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'thumbnail', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CopyFile
drivefs.mojom.DriveFs_CopyFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.CopyFile_Params',
      packedSize: 24,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'target', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_CopyFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.CopyFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartSearchQuery
drivefs.mojom.DriveFs_StartSearchQuery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.StartSearchQuery_Params',
      packedSize: 24,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'query_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FetchAllChangeLogs
drivefs.mojom.DriveFs_FetchAllChangeLogs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.FetchAllChangeLogs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FetchChangeLog
drivefs.mojom.DriveFs_FetchChangeLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.FetchChangeLog_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendNativeMessageRequest
drivefs.mojom.DriveFs_SendNativeMessageRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.SendNativeMessageRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_SendNativeMessageRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.SendNativeMessageRequest_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'response', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetStartupArguments
drivefs.mojom.DriveFs_SetStartupArguments_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.SetStartupArguments_Params',
      packedSize: 16,
      fields: [
        { name: 'arguments', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_SetStartupArguments_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.SetStartupArguments_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetStartupArguments
drivefs.mojom.DriveFs_GetStartupArguments_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetStartupArguments_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_GetStartupArguments_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetStartupArguments_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'arguments', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetTracingEnabled
drivefs.mojom.DriveFs_SetTracingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.SetTracingEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetNetworkingEnabled
drivefs.mojom.DriveFs_SetNetworkingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.SetNetworkingEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ForcePauseSyncing
drivefs.mojom.DriveFs_ForcePauseSyncing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.ForcePauseSyncing_Params',
      packedSize: 16,
      fields: [
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DumpAccountSettings
drivefs.mojom.DriveFs_DumpAccountSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.DumpAccountSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LoadAccountSettings
drivefs.mojom.DriveFs_LoadAccountSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.LoadAccountSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateNativeHostSession
drivefs.mojom.DriveFs_CreateNativeHostSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.CreateNativeHostSession_Params',
      packedSize: 32,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'port', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LocateFilesByItemIds
drivefs.mojom.DriveFs_LocateFilesByItemIds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.LocateFilesByItemIds_Params',
      packedSize: 16,
      fields: [
        { name: 'item_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_LocateFilesByItemIds_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.LocateFilesByItemIds_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetQuotaUsage
drivefs.mojom.DriveFs_GetQuotaUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetQuotaUsage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_GetQuotaUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetQuotaUsage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'quota', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ToggleMirroring
drivefs.mojom.DriveFs_ToggleMirroring_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.ToggleMirroring_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_ToggleMirroring_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.ToggleMirroring_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ToggleSyncForPath
drivefs.mojom.DriveFs_ToggleSyncForPath_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.ToggleSyncForPath_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_ToggleSyncForPath_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.ToggleSyncForPath_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSyncingPaths
drivefs.mojom.DriveFs_GetSyncingPaths_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetSyncingPaths_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_GetSyncingPaths_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetSyncingPaths_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'paths', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PollHostedFilePinStates
drivefs.mojom.DriveFs_PollHostedFilePinStates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.PollHostedFilePinStates_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPooledQuotaUsage
drivefs.mojom.DriveFs_GetPooledQuotaUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetPooledQuotaUsage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_GetPooledQuotaUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetPooledQuotaUsage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'quota', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPinnedByStableId
drivefs.mojom.DriveFs_SetPinnedByStableId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.SetPinnedByStableId_Params',
      packedSize: 24,
      fields: [
        { name: 'stable_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pinned', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_SetPinnedByStableId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.SetPinnedByStableId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetMetadataByStableId
drivefs.mojom.DriveFs_GetMetadataByStableId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetMetadataByStableId_Params',
      packedSize: 16,
      fields: [
        { name: 'stable_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_GetMetadataByStableId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetMetadataByStableId_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CancelUploadByPath
drivefs.mojom.DriveFs_CancelUploadByPath_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.CancelUploadByPath_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cancel_mode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetDocsOfflineEnabled
drivefs.mojom.DriveFs_SetDocsOfflineEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.SetDocsOfflineEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_SetDocsOfflineEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.SetDocsOfflineEnabled_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetOfflineFilesSpaceUsage
drivefs.mojom.DriveFs_GetOfflineFilesSpaceUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetOfflineFilesSpaceUsage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_GetOfflineFilesSpaceUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetOfflineFilesSpaceUsage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'space_used', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearOfflineFiles
drivefs.mojom.DriveFs_ClearOfflineFiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.ClearOfflineFiles_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_ClearOfflineFiles_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.ClearOfflineFiles_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ImmediatelyUpload
drivefs.mojom.DriveFs_ImmediatelyUpload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.ImmediatelyUpload_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_ImmediatelyUpload_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.ImmediatelyUpload_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateFromPairedDoc
drivefs.mojom.DriveFs_UpdateFromPairedDoc_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.UpdateFromPairedDoc_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_UpdateFromPairedDoc_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.UpdateFromPairedDoc_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetItemFromCloudStore
drivefs.mojom.DriveFs_GetItemFromCloudStore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetItemFromCloudStore_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_GetItemFromCloudStore_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetItemFromCloudStore_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDocsOfflineStats
drivefs.mojom.DriveFs_GetDocsOfflineStats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetDocsOfflineStats_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_GetDocsOfflineStats_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetDocsOfflineStats_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'counts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetMirrorSyncStatusForFile
drivefs.mojom.DriveFs_GetMirrorSyncStatusForFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetMirrorSyncStatusForFile_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_GetMirrorSyncStatusForFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetMirrorSyncStatusForFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetMirrorSyncStatusForDirectory
drivefs.mojom.DriveFs_GetMirrorSyncStatusForDirectory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetMirrorSyncStatusForDirectory_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFs_GetMirrorSyncStatusForDirectory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetMirrorSyncStatusForDirectory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
drivefs.mojom.DriveFsPtr = drivefs.mojom.DriveFsRemote;
drivefs.mojom.DriveFsRequest = drivefs.mojom.DriveFsPendingReceiver;


// Interface: DriveFsDelegate
drivefs.mojom.DriveFsDelegate = {};

drivefs.mojom.DriveFsDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

drivefs.mojom.DriveFsDelegateRemote = class {
  static get $interfaceName() {
    return 'drivefs.mojom.DriveFsDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      drivefs.mojom.DriveFsDelegatePendingReceiver,
      handle);
    this.$ = new drivefs.mojom.DriveFsDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

drivefs.mojom.DriveFsDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAccessToken(client_id, app_id, scopes) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      drivefs.mojom.DriveFsDelegate_GetAccessToken_ParamsSpec.$,
      drivefs.mojom.DriveFsDelegate_GetAccessToken_ResponseParamsSpec.$,
      [client_id, app_id, scopes]);
  }

  onMounted() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnMounted_ParamsSpec.$,
      null,
      []);
  }

  onMountFailed(retry_delay) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnMountFailed_ParamsSpec.$,
      null,
      [retry_delay]);
  }

  onUnmounted(retry_delay) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnUnmounted_ParamsSpec.$,
      null,
      [retry_delay]);
  }

  onSyncingStatusUpdate(status) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnSyncingStatusUpdate_ParamsSpec.$,
      null,
      [status]);
  }

  onFilesChanged(changes) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnFilesChanged_ParamsSpec.$,
      null,
      [changes]);
  }

  onError(error) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnError_ParamsSpec.$,
      null,
      [error]);
  }

  onTeamDrivesListReady(team_drive_ids) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnTeamDrivesListReady_ParamsSpec.$,
      null,
      [team_drive_ids]);
  }

  onTeamDriveChanged(team_drive_id, change_type) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnTeamDriveChanged_ParamsSpec.$,
      null,
      [team_drive_id, change_type]);
  }

  onHeartbeat() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnHeartbeat_ParamsSpec.$,
      null,
      []);
  }

  connectToExtension(params, port, host) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      drivefs.mojom.DriveFsDelegate_ConnectToExtension_ParamsSpec.$,
      drivefs.mojom.DriveFsDelegate_ConnectToExtension_ResponseParamsSpec.$,
      [params, port, host]);
  }

  displayConfirmDialog(reason) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      drivefs.mojom.DriveFsDelegate_DisplayConfirmDialog_ParamsSpec.$,
      drivefs.mojom.DriveFsDelegate_DisplayConfirmDialog_ResponseParamsSpec.$,
      [reason]);
  }

  executeHttpRequest(request, delegate) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      drivefs.mojom.DriveFsDelegate_ExecuteHttpRequest_ParamsSpec.$,
      null,
      [request, delegate]);
  }

  getMachineRootID() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      drivefs.mojom.DriveFsDelegate_GetMachineRootID_ParamsSpec.$,
      drivefs.mojom.DriveFsDelegate_GetMachineRootID_ResponseParamsSpec.$,
      []);
  }

  persistMachineRootID(doc_id) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      drivefs.mojom.DriveFsDelegate_PersistMachineRootID_ParamsSpec.$,
      null,
      [doc_id]);
  }

  onMirrorSyncingStatusUpdate(status) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnMirrorSyncingStatusUpdate_ParamsSpec.$,
      null,
      [status]);
  }

  onItemProgress(progress_event) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnItemProgress_ParamsSpec.$,
      null,
      [progress_event]);
  }

  getAccessTokenWithExpiry(client_id, app_id, scopes) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      drivefs.mojom.DriveFsDelegate_GetAccessTokenWithExpiry_ParamsSpec.$,
      drivefs.mojom.DriveFsDelegate_GetAccessTokenWithExpiry_ResponseParamsSpec.$,
      [client_id, app_id, scopes]);
  }

  onNotificationReceived(notification) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnNotificationReceived_ParamsSpec.$,
      null,
      [notification]);
  }

  onMirrorSyncError(error_list) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnMirrorSyncError_ParamsSpec.$,
      null,
      [error_list]);
  }

};

drivefs.mojom.DriveFsDelegate.getRemote = function() {
  let remote = new drivefs.mojom.DriveFsDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'drivefs.mojom.DriveFsDelegate',
    'context');
  return remote.$;
};

// ParamsSpec for GetAccessToken
drivefs.mojom.DriveFsDelegate_GetAccessToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.GetAccessToken_Params',
      packedSize: 32,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'scopes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_GetAccessToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.GetAccessToken_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'access_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnMounted
drivefs.mojom.DriveFsDelegate_OnMounted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.OnMounted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnMountFailed
drivefs.mojom.DriveFsDelegate_OnMountFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.OnMountFailed_Params',
      packedSize: 16,
      fields: [
        { name: 'retry_delay', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnUnmounted
drivefs.mojom.DriveFsDelegate_OnUnmounted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.OnUnmounted_Params',
      packedSize: 16,
      fields: [
        { name: 'retry_delay', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSyncingStatusUpdate
drivefs.mojom.DriveFsDelegate_OnSyncingStatusUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.OnSyncingStatusUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFilesChanged
drivefs.mojom.DriveFsDelegate_OnFilesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.OnFilesChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'changes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnError
drivefs.mojom.DriveFsDelegate_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTeamDrivesListReady
drivefs.mojom.DriveFsDelegate_OnTeamDrivesListReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.OnTeamDrivesListReady_Params',
      packedSize: 16,
      fields: [
        { name: 'team_drive_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTeamDriveChanged
drivefs.mojom.DriveFsDelegate_OnTeamDriveChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.OnTeamDriveChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'team_drive_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'change_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnHeartbeat
drivefs.mojom.DriveFsDelegate_OnHeartbeat_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.OnHeartbeat_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ConnectToExtension
drivefs.mojom.DriveFsDelegate_ConnectToExtension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.ConnectToExtension_Params',
      packedSize: 32,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'port', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'host', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_ConnectToExtension_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.ConnectToExtension_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DisplayConfirmDialog
drivefs.mojom.DriveFsDelegate_DisplayConfirmDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.DisplayConfirmDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_DisplayConfirmDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.DisplayConfirmDialog_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExecuteHttpRequest
drivefs.mojom.DriveFsDelegate_ExecuteHttpRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.ExecuteHttpRequest_Params',
      packedSize: 24,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'delegate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetMachineRootID
drivefs.mojom.DriveFsDelegate_GetMachineRootID_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.GetMachineRootID_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_GetMachineRootID_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.GetMachineRootID_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'doc_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PersistMachineRootID
drivefs.mojom.DriveFsDelegate_PersistMachineRootID_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.PersistMachineRootID_Params',
      packedSize: 16,
      fields: [
        { name: 'doc_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnMirrorSyncingStatusUpdate
drivefs.mojom.DriveFsDelegate_OnMirrorSyncingStatusUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.OnMirrorSyncingStatusUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnItemProgress
drivefs.mojom.DriveFsDelegate_OnItemProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.OnItemProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'progress_event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAccessTokenWithExpiry
drivefs.mojom.DriveFsDelegate_GetAccessTokenWithExpiry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.GetAccessTokenWithExpiry_Params',
      packedSize: 32,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'scopes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_GetAccessTokenWithExpiry_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.GetAccessTokenWithExpiry_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'access_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNotificationReceived
drivefs.mojom.DriveFsDelegate_OnNotificationReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.OnNotificationReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'notification', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnMirrorSyncError
drivefs.mojom.DriveFsDelegate_OnMirrorSyncError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.OnMirrorSyncError_Params',
      packedSize: 16,
      fields: [
        { name: 'error_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
drivefs.mojom.DriveFsDelegatePtr = drivefs.mojom.DriveFsDelegateRemote;
drivefs.mojom.DriveFsDelegateRequest = drivefs.mojom.DriveFsDelegatePendingReceiver;


// Interface: SearchQuery
drivefs.mojom.SearchQuery = {};

drivefs.mojom.SearchQueryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

drivefs.mojom.SearchQueryRemote = class {
  static get $interfaceName() {
    return 'drivefs.mojom.SearchQuery';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      drivefs.mojom.SearchQueryPendingReceiver,
      handle);
    this.$ = new drivefs.mojom.SearchQueryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

drivefs.mojom.SearchQueryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getNextPage() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      drivefs.mojom.SearchQuery_GetNextPage_ParamsSpec.$,
      drivefs.mojom.SearchQuery_GetNextPage_ResponseParamsSpec.$,
      []);
  }

};

drivefs.mojom.SearchQuery.getRemote = function() {
  let remote = new drivefs.mojom.SearchQueryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'drivefs.mojom.SearchQuery',
    'context');
  return remote.$;
};

// ParamsSpec for GetNextPage
drivefs.mojom.SearchQuery_GetNextPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.SearchQuery.GetNextPage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

drivefs.mojom.SearchQuery_GetNextPage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.SearchQuery.GetNextPage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
drivefs.mojom.SearchQueryPtr = drivefs.mojom.SearchQueryRemote;
drivefs.mojom.SearchQueryRequest = drivefs.mojom.SearchQueryPendingReceiver;


// Interface: HttpDelegate
drivefs.mojom.HttpDelegate = {};

drivefs.mojom.HttpDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

drivefs.mojom.HttpDelegateRemote = class {
  static get $interfaceName() {
    return 'drivefs.mojom.HttpDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      drivefs.mojom.HttpDelegatePendingReceiver,
      handle);
    this.$ = new drivefs.mojom.HttpDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

drivefs.mojom.HttpDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getRequestBody(request_body) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      drivefs.mojom.HttpDelegate_GetRequestBody_ParamsSpec.$,
      null,
      [request_body]);
  }

  onReceiveResponse(response) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      drivefs.mojom.HttpDelegate_OnReceiveResponse_ParamsSpec.$,
      null,
      [response]);
  }

  onReceiveBody(response_body) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      drivefs.mojom.HttpDelegate_OnReceiveBody_ParamsSpec.$,
      null,
      [response_body]);
  }

  onRequestComplete(status) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      drivefs.mojom.HttpDelegate_OnRequestComplete_ParamsSpec.$,
      null,
      [status]);
  }

};

drivefs.mojom.HttpDelegate.getRemote = function() {
  let remote = new drivefs.mojom.HttpDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'drivefs.mojom.HttpDelegate',
    'context');
  return remote.$;
};

// ParamsSpec for GetRequestBody
drivefs.mojom.HttpDelegate_GetRequestBody_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.HttpDelegate.GetRequestBody_Params',
      packedSize: 16,
      fields: [
        { name: 'request_body', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnReceiveResponse
drivefs.mojom.HttpDelegate_OnReceiveResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.HttpDelegate.OnReceiveResponse_Params',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnReceiveBody
drivefs.mojom.HttpDelegate_OnReceiveBody_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.HttpDelegate.OnReceiveBody_Params',
      packedSize: 16,
      fields: [
        { name: 'response_body', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnRequestComplete
drivefs.mojom.HttpDelegate_OnRequestComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.HttpDelegate.OnRequestComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
drivefs.mojom.HttpDelegatePtr = drivefs.mojom.HttpDelegateRemote;
drivefs.mojom.HttpDelegateRequest = drivefs.mojom.HttpDelegatePendingReceiver;

