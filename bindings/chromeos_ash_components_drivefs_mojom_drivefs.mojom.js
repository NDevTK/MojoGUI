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
  but: 0,
};

// Enum: AccessTokenStatus
drivefs.mojom.AccessTokenStatus = {
};

// Enum: MirrorSyncStatus
drivefs.mojom.MirrorSyncStatus = {
};

// Enum: MirrorPathStatus
drivefs.mojom.MirrorPathStatus = {
};

// Enum: DialogResult
drivefs.mojom.DialogResult = {
};

// Enum: FileError
drivefs.mojom.FileError = {
  kFailed: 0,
  kInUse: 1,
  kExists: 2,
  kNotFound: 3,
  kAccessDenied: 4,
  kTooManyOpened: 5,
  kNoMemory: 6,
  kNoServerSpace: 7,
  kNotADirectory: 8,
  kInvalidOperation: 9,
  kSecurity: 10,
  kAbort: 11,
  kNotAFile: 12,
  kNotEmpty: 13,
  kInvalidUrl: 14,
  kNoConnection: 15,
  kNoLocalSpace: 16,
  kServiceUnavailable: 17,
  kOkWithMoreResults: 18,
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
};

// Enum: UserType
drivefs.mojom.UserType = {
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

// Struct: DriveFsConfiguration
drivefs.mojom.DriveFsConfiguration = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: AccessToken
drivefs.mojom.AccessToken = class {
  constructor(values = {}) {
    this.expiry_time = values.expiry_time !== undefined ? values.expiry_time : "";
  }
};

// Struct: DriveError
drivefs.mojom.DriveError = class {
  constructor(values = {}) {
    this.kCantUploadStorageFull = values.kCantUploadStorageFull !== undefined ? values.kCantUploadStorageFull : null;
  }
};

// Struct: DialogReason
drivefs.mojom.DialogReason = class {
  constructor(values = {}) {
    this.kEnableDocsOffline = values.kEnableDocsOffline !== undefined ? values.kEnableDocsOffline : null;
  }
};

// Struct: UserInfo
drivefs.mojom.UserInfo = class {
  constructor(values = {}) {
    this.display_name = values.display_name !== undefined ? values.display_name : "";
  }
};

// Struct: FileMetadata
drivefs.mojom.FileMetadata = class {
  constructor(values = {}) {
    this.kFile = values.kFile !== undefined ? values.kFile : null;
  }
};

// Struct: ShortcutDetails
drivefs.mojom.ShortcutDetails = class {
  constructor(values = {}) {
    this.kUnknown = values.kUnknown !== undefined ? values.kUnknown : 0;
  }
};

// Struct: ImageMetadata
drivefs.mojom.ImageMetadata = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : 0;
  }
};

// Struct: Capabilities
drivefs.mojom.Capabilities = class {
  constructor(values = {}) {
    this.true = values.true !== undefined ? values.true : false;
  }
};

// Struct: FolderFeature
drivefs.mojom.FolderFeature = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
    this.uploads = values.uploads !== undefined ? values.uploads : null;
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: QuickAccess
drivefs.mojom.QuickAccess = class {
  constructor(values = {}) {
    this.score = values.score !== undefined ? values.score : 0;
  }
};

// Struct: SharedDriveQuota
drivefs.mojom.SharedDriveQuota = class {
  constructor(values = {}) {
    this.individual_quota_bytes_total = values.individual_quota_bytes_total !== undefined ? values.individual_quota_bytes_total : 0;
  }
};

// Struct: ItemEvent
drivefs.mojom.ItemEvent = class {
  constructor(values = {}) {
    this.kQueued = values.kQueued !== undefined ? values.kQueued : null;
  }
};

// Struct: ProgressEvent
drivefs.mojom.ProgressEvent = class {
  constructor(values = {}) {
    this.path = values.path !== undefined ? values.path : 0;
    this.file_path = values.file_path !== undefined ? values.file_path : 0;
  }
};

// Struct: SyncingStatus
drivefs.mojom.SyncingStatus = class {
  constructor(values = {}) {
    this.item_events = values.item_events !== undefined ? values.item_events : [];
  }
};

// Struct: FileChange
drivefs.mojom.FileChange = class {
  constructor(values = {}) {
    this.kCreate = values.kCreate !== undefined ? values.kCreate : null;
  }
};

// Struct: QueryParameters
drivefs.mojom.QueryParameters = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : null;
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
  }
};

// Struct: QueryItem
drivefs.mojom.QueryItem = class {
  constructor(values = {}) {
    this.path = values.path !== undefined ? values.path : null;
  }
};

// Struct: FetchChangeLogOptions
drivefs.mojom.FetchChangeLogOptions = class {
  constructor(values = {}) {
    this.team_drive_id = values.team_drive_id !== undefined ? values.team_drive_id : 0;
  }
};

// Struct: PooledQuotaUsage
drivefs.mojom.PooledQuotaUsage = class {
  constructor(values = {}) {
    this.organization_name = values.organization_name !== undefined ? values.organization_name : 0;
  }
};

// Struct: QuotaUsage
drivefs.mojom.QuotaUsage = class {
  constructor(values = {}) {
    this.total_cloud_bytes = values.total_cloud_bytes !== undefined ? values.total_cloud_bytes : 0;
  }
};

// Struct: HttpHeader
drivefs.mojom.HttpHeader = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : "";
  }
};

// Struct: HttpRequest
drivefs.mojom.HttpRequest = class {
  constructor(values = {}) {
    this.request_body_bytes = values.request_body_bytes !== undefined ? values.request_body_bytes : 0;
  }
};

// Struct: HttpResponse
drivefs.mojom.HttpResponse = class {
  constructor(values = {}) {
    this.headers = values.headers !== undefined ? values.headers : 0;
  }
};

// Struct: HttpCompletionStatus
drivefs.mojom.HttpCompletionStatus = class {
  constructor(values = {}) {
    this.response_body_bytes = values.response_body_bytes !== undefined ? values.response_body_bytes : 0;
  }
};

// Struct: DocsOfflineStats
drivefs.mojom.DocsOfflineStats = class {
  constructor(values = {}) {
    this.available_offline = values.available_offline !== undefined ? values.available_offline : 0;
  }
};

// Struct: MirrorSyncError
drivefs.mojom.MirrorSyncError = class {
  constructor(values = {}) {
    this.kUnknown = values.kUnknown !== undefined ? values.kUnknown : null;
  }
};

// Struct: MirrorSyncErrorList
drivefs.mojom.MirrorSyncErrorList = class {
  constructor(values = {}) {
    this.errors = values.errors !== undefined ? values.errors : [];
  }
};

// Interface: DriveFsBootstrap
drivefs.mojom.DriveFsBootstrapPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'drivefs.mojom.DriveFsBootstrap';
  }

  init(config, drive_fs, delegate) {
    // Method: Init
    // Call: Init(config, drive_fs, delegate)
  }

};

drivefs.mojom.DriveFsBootstrapRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DriveFs
drivefs.mojom.DriveFsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'drivefs.mojom.DriveFs';
  }

  getMetadata(path) {
    // Method: GetMetadata
    return new Promise((resolve) => {
      // Call: GetMetadata(path)
      resolve({});
    });
  }

  setPinned(path, pinned) {
    // Method: SetPinned
    return new Promise((resolve) => {
      // Call: SetPinned(path, pinned)
      resolve({});
    });
  }

  updateNetworkState(pause_syncing, is_offline) {
    // Method: UpdateNetworkState
    // Call: UpdateNetworkState(pause_syncing, is_offline)
  }

  resetCache() {
    // Method: ResetCache
    return new Promise((resolve) => {
      // Call: ResetCache()
      resolve({});
    });
  }

  getThumbnail(path, crop_to_square) {
    // Method: GetThumbnail
    return new Promise((resolve) => {
      // Call: GetThumbnail(path, crop_to_square)
      resolve({});
    });
  }

  copyFile(source, target) {
    // Method: CopyFile
    return new Promise((resolve) => {
      // Call: CopyFile(source, target)
      resolve({});
    });
  }

  startSearchQuery(query, query_params) {
    // Method: StartSearchQuery
    // Call: StartSearchQuery(query, query_params)
  }

  fetchAllChangeLogs() {
    // Method: FetchAllChangeLogs
    // Call: FetchAllChangeLogs()
  }

  changelog() {
    // Method: changelog
    // Call: changelog()
  }

  fetchChangeLog(options) {
    // Method: FetchChangeLog
    // Call: FetchChangeLog(options)
  }

  sendNativeMessageRequest(request) {
    // Method: SendNativeMessageRequest
    return new Promise((resolve) => {
      // Call: SendNativeMessageRequest(request)
      resolve({});
    });
  }

  setStartupArguments(arguments) {
    // Method: SetStartupArguments
    return new Promise((resolve) => {
      // Call: SetStartupArguments(arguments)
      resolve({});
    });
  }

  getStartupArguments() {
    // Method: GetStartupArguments
    return new Promise((resolve) => {
      // Call: GetStartupArguments()
      resolve({});
    });
  }

  setTracingEnabled(enabled) {
    // Method: SetTracingEnabled
    // Call: SetTracingEnabled(enabled)
  }

  setNetworkingEnabled(enabled) {
    // Method: SetNetworkingEnabled
    // Call: SetNetworkingEnabled(enabled)
  }

  forcePauseSyncing(enable) {
    // Method: ForcePauseSyncing
    // Call: ForcePauseSyncing(enable)
  }

  settings(flags) {
    // Method: settings
    // Call: settings(flags)
  }

  dumpAccountSettings() {
    // Method: DumpAccountSettings
    // Call: DumpAccountSettings()
  }

  settings(flags) {
    // Method: settings
    // Call: settings(flags)
  }

  loadAccountSettings() {
    // Method: LoadAccountSettings
    // Call: LoadAccountSettings()
  }

  createNativeHostSession(params, host, port) {
    // Method: CreateNativeHostSession
    // Call: CreateNativeHostSession(params, host, port)
  }

  locateFilesByItemIds(item_ids) {
    // Method: LocateFilesByItemIds
    return new Promise((resolve) => {
      // Call: LocateFilesByItemIds(item_ids)
      resolve({});
    });
  }

  getQuotaUsage() {
    // Method: GetQuotaUsage
    return new Promise((resolve) => {
      // Call: GetQuotaUsage()
      resolve({});
    });
  }

  toggleMirroring(enabled) {
    // Method: ToggleMirroring
    return new Promise((resolve) => {
      // Call: ToggleMirroring(enabled)
      resolve({});
    });
  }

  toggleSyncForPath(path, status) {
    // Method: ToggleSyncForPath
    return new Promise((resolve) => {
      // Call: ToggleSyncForPath(path, status)
      resolve({});
    });
  }

  getSyncingPaths() {
    // Method: GetSyncingPaths
    return new Promise((resolve) => {
      // Call: GetSyncingPaths()
      resolve({});
    });
  }

  pollHostedFilePinStates() {
    // Method: PollHostedFilePinStates
    // Call: PollHostedFilePinStates()
  }

  getPooledQuotaUsage() {
    // Method: GetPooledQuotaUsage
    return new Promise((resolve) => {
      // Call: GetPooledQuotaUsage()
      resolve({});
    });
  }

  setPinnedByStableId(stable_id, pinned) {
    // Method: SetPinnedByStableId
    return new Promise((resolve) => {
      // Call: SetPinnedByStableId(stable_id, pinned)
      resolve({});
    });
  }

  getMetadataByStableId(stable_id) {
    // Method: GetMetadataByStableId
    return new Promise((resolve) => {
      // Call: GetMetadataByStableId(stable_id)
      resolve({});
    });
  }

};

drivefs.mojom.DriveFsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DriveFsDelegate
drivefs.mojom.DriveFsDelegatePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'drivefs.mojom.DriveFsDelegate';
  }

  getAccessToken(client_id, app_id, scopes) {
    // Method: GetAccessToken
    return new Promise((resolve) => {
      // Call: GetAccessToken(client_id, app_id, scopes)
      resolve({});
    });
  }

  onMounted() {
    // Method: OnMounted
    // Call: OnMounted()
  }

  onMountFailed(retry_delay) {
    // Method: OnMountFailed
    // Call: OnMountFailed(retry_delay)
  }

  onUnmounted(retry_delay) {
    // Method: OnUnmounted
    // Call: OnUnmounted(retry_delay)
  }

  onSyncingStatusUpdate(status) {
    // Method: OnSyncingStatusUpdate
    // Call: OnSyncingStatusUpdate(status)
  }

  onFilesChanged(changes) {
    // Method: OnFilesChanged
    // Call: OnFilesChanged(changes)
  }

  onError(error) {
    // Method: OnError
    // Call: OnError(error)
  }

  onTeamDrivesListReady(team_drive_ids) {
    // Method: OnTeamDrivesListReady
    // Call: OnTeamDrivesListReady(team_drive_ids)
  }

};

drivefs.mojom.DriveFsDelegateRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SearchQuery
drivefs.mojom.SearchQueryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'drivefs.mojom.SearchQuery';
  }

  getNextPage() {
    // Method: GetNextPage
    return new Promise((resolve) => {
      // Call: GetNextPage()
      resolve({});
    });
  }

};

drivefs.mojom.SearchQueryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HttpDelegate
drivefs.mojom.HttpDelegatePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'drivefs.mojom.HttpDelegate';
  }

  getRequestBody(request_body) {
    // Method: GetRequestBody
    // Call: GetRequestBody(request_body)
  }

  onReceiveResponse(response) {
    // Method: OnReceiveResponse
    // Call: OnReceiveResponse(response)
  }

  onReceiveBody(response_body) {
    // Method: OnReceiveBody
    // Call: OnReceiveBody(response_body)
  }

  onRequestComplete(status) {
    // Method: OnRequestComplete
    // Call: OnRequestComplete(status)
  }

};

drivefs.mojom.HttpDelegateRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
