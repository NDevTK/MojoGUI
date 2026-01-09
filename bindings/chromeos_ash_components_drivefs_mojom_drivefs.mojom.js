// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/drivefs/mojom/drivefs.mojom
// Module: drivefs.mojom

'use strict';

// Module namespace
var drivefs = drivefs || {};
drivefs.mojom = drivefs.mojom || {};


// Enum: CancelUploadMode
drivefs.mojom.CancelUploadMode = {
};

// Enum: DocsOfflineEnableStatus
drivefs.mojom.DocsOfflineEnableStatus = {
};

// Enum: CreateOrDelete
drivefs.mojom.CreateOrDelete = {
};

// Enum: CSESupport
drivefs.mojom.CSESupport = {
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
};

// Enum: Type
drivefs.mojom.Type = {
};

// Enum: Type
drivefs.mojom.Type = {
};

// Enum: Type
drivefs.mojom.Type = {
};

// Enum: CanPinStatus
drivefs.mojom.CanPinStatus = {
};

// Enum: LookupStatus
drivefs.mojom.LookupStatus = {
};

// Enum: ItemEventReason
drivefs.mojom.ItemEventReason = {
};

// Enum: State
drivefs.mojom.State = {
};

// Enum: Type
drivefs.mojom.Type = {
};

// Enum: QuerySource
drivefs.mojom.QuerySource = {
};

// Enum: SortField
drivefs.mojom.SortField = {
};

// Enum: SortDirection
drivefs.mojom.SortDirection = {
};

// Enum: DateComparisonOperator
drivefs.mojom.DateComparisonOperator = {
};

// Enum: QueryKind
drivefs.mojom.QueryKind = {
};

// Enum: UserType
drivefs.mojom.UserType = {
};

// Enum: NetError
drivefs.mojom.NetError = {
};

// Enum: MirrorItemSyncingStatus
drivefs.mojom.MirrorItemSyncingStatus = {
};

// Enum: Type
drivefs.mojom.Type = {
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

  dumpAccountSettings() {
    // Method: DumpAccountSettings
    // Call: DumpAccountSettings()
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

  cancelUploadByPath(path, cancel_mode) {
    // Method: CancelUploadByPath
    // Call: CancelUploadByPath(path, cancel_mode)
  }

  setDocsOfflineEnabled(enabled) {
    // Method: SetDocsOfflineEnabled
    return new Promise((resolve) => {
      // Call: SetDocsOfflineEnabled(enabled)
      resolve({});
    });
  }

  getOfflineFilesSpaceUsage() {
    // Method: GetOfflineFilesSpaceUsage
    return new Promise((resolve) => {
      // Call: GetOfflineFilesSpaceUsage()
      resolve({});
    });
  }

  clearOfflineFiles() {
    // Method: ClearOfflineFiles
    return new Promise((resolve) => {
      // Call: ClearOfflineFiles()
      resolve({});
    });
  }

  immediatelyUpload(path) {
    // Method: ImmediatelyUpload
    return new Promise((resolve) => {
      // Call: ImmediatelyUpload(path)
      resolve({});
    });
  }

  updateFromPairedDoc(path) {
    // Method: UpdateFromPairedDoc
    return new Promise((resolve) => {
      // Call: UpdateFromPairedDoc(path)
      resolve({});
    });
  }

  getItemFromCloudStore(path) {
    // Method: GetItemFromCloudStore
    return new Promise((resolve) => {
      // Call: GetItemFromCloudStore(path)
      resolve({});
    });
  }

  getDocsOfflineStats() {
    // Method: GetDocsOfflineStats
    return new Promise((resolve) => {
      // Call: GetDocsOfflineStats()
      resolve({});
    });
  }

  getMirrorSyncStatusForFile(path) {
    // Method: GetMirrorSyncStatusForFile
    return new Promise((resolve) => {
      // Call: GetMirrorSyncStatusForFile(path)
      resolve({});
    });
  }

  getMirrorSyncStatusForDirectory(path) {
    // Method: GetMirrorSyncStatusForDirectory
    return new Promise((resolve) => {
      // Call: GetMirrorSyncStatusForDirectory(path)
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

  onTeamDriveChanged(team_drive_id, change_type) {
    // Method: OnTeamDriveChanged
    // Call: OnTeamDriveChanged(team_drive_id, change_type)
  }

  onHeartbeat() {
    // Method: OnHeartbeat
    // Call: OnHeartbeat()
  }

  connectToExtension(params, port, host) {
    // Method: ConnectToExtension
    return new Promise((resolve) => {
      // Call: ConnectToExtension(params, port, host)
      resolve({});
    });
  }

  displayConfirmDialog(reason) {
    // Method: DisplayConfirmDialog
    return new Promise((resolve) => {
      // Call: DisplayConfirmDialog(reason)
      resolve({});
    });
  }

  executeHttpRequest(request, delegate) {
    // Method: ExecuteHttpRequest
    // Call: ExecuteHttpRequest(request, delegate)
  }

  getMachineRootID() {
    // Method: GetMachineRootID
    return new Promise((resolve) => {
      // Call: GetMachineRootID()
      resolve({});
    });
  }

  persistMachineRootID(doc_id) {
    // Method: PersistMachineRootID
    // Call: PersistMachineRootID(doc_id)
  }

  onMirrorSyncingStatusUpdate(status) {
    // Method: OnMirrorSyncingStatusUpdate
    // Call: OnMirrorSyncingStatusUpdate(status)
  }

  onItemProgress(progress_event) {
    // Method: OnItemProgress
    // Call: OnItemProgress(progress_event)
  }

  getAccessTokenWithExpiry(client_id, app_id, scopes) {
    // Method: GetAccessTokenWithExpiry
    return new Promise((resolve) => {
      // Call: GetAccessTokenWithExpiry(client_id, app_id, scopes)
      resolve({});
    });
  }

  onNotificationReceived(notification) {
    // Method: OnNotificationReceived
    // Call: OnNotificationReceived(notification)
  }

  onMirrorSyncError(error_list) {
    // Method: OnMirrorSyncError
    // Call: OnMirrorSyncError(error_list)
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
