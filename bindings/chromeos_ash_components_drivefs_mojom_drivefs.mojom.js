// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/drivefs/mojom/drivefs.mojom
// Module: drivefs.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var drivefs = drivefs || {};
drivefs.mojom = drivefs.mojom || {};
var mojo_base = mojo_base || {};

drivefs.mojom.CancelUploadModeSpec = { $: mojo.internal.Enum() };
drivefs.mojom.DocsOfflineEnableStatusSpec = { $: mojo.internal.Enum() };
drivefs.mojom.CreateOrDeleteSpec = { $: mojo.internal.Enum() };
drivefs.mojom.CSESupportSpec = { $: mojo.internal.Enum() };
drivefs.mojom.AccessTokenStatusSpec = { $: mojo.internal.Enum() };
drivefs.mojom.MirrorSyncStatusSpec = { $: mojo.internal.Enum() };
drivefs.mojom.MirrorPathStatusSpec = { $: mojo.internal.Enum() };
drivefs.mojom.DialogResultSpec = { $: mojo.internal.Enum() };
drivefs.mojom.FileErrorSpec = { $: mojo.internal.Enum() };
drivefs.mojom.TypeSpec = { $: mojo.internal.Enum() };
drivefs.mojom.TypeSpec = { $: mojo.internal.Enum() };
drivefs.mojom.TypeSpec = { $: mojo.internal.Enum() };
drivefs.mojom.CanPinStatusSpec = { $: mojo.internal.Enum() };
drivefs.mojom.LookupStatusSpec = { $: mojo.internal.Enum() };
drivefs.mojom.ItemEventReasonSpec = { $: mojo.internal.Enum() };
drivefs.mojom.StateSpec = { $: mojo.internal.Enum() };
drivefs.mojom.TypeSpec = { $: mojo.internal.Enum() };
drivefs.mojom.QuerySourceSpec = { $: mojo.internal.Enum() };
drivefs.mojom.SortFieldSpec = { $: mojo.internal.Enum() };
drivefs.mojom.SortDirectionSpec = { $: mojo.internal.Enum() };
drivefs.mojom.DateComparisonOperatorSpec = { $: mojo.internal.Enum() };
drivefs.mojom.QueryKindSpec = { $: mojo.internal.Enum() };
drivefs.mojom.UserTypeSpec = { $: mojo.internal.Enum() };
drivefs.mojom.NetErrorSpec = { $: mojo.internal.Enum() };
drivefs.mojom.MirrorItemSyncingStatusSpec = { $: mojo.internal.Enum() };
drivefs.mojom.TypeSpec = { $: mojo.internal.Enum() };
drivefs.mojom.FilePathOrErrorSpec = { $: {} };
drivefs.mojom.DriveFsConfigurationSpec = { $: {} };
drivefs.mojom.AccessTokenSpec = { $: {} };
drivefs.mojom.DriveErrorSpec = { $: {} };
drivefs.mojom.DialogReasonSpec = { $: {} };
drivefs.mojom.UserInfoSpec = { $: {} };
drivefs.mojom.FileMetadataSpec = { $: {} };
drivefs.mojom.ShortcutDetailsSpec = { $: {} };
drivefs.mojom.ImageMetadataSpec = { $: {} };
drivefs.mojom.CapabilitiesSpec = { $: {} };
drivefs.mojom.FolderFeatureSpec = { $: {} };
drivefs.mojom.QuickAccessSpec = { $: {} };
drivefs.mojom.SharedDriveQuotaSpec = { $: {} };
drivefs.mojom.ItemEventSpec = { $: {} };
drivefs.mojom.ProgressEventSpec = { $: {} };
drivefs.mojom.SyncingStatusSpec = { $: {} };
drivefs.mojom.FileChangeSpec = { $: {} };
drivefs.mojom.QueryParametersSpec = { $: {} };
drivefs.mojom.QueryItemSpec = { $: {} };
drivefs.mojom.FetchChangeLogOptionsSpec = { $: {} };
drivefs.mojom.PooledQuotaUsageSpec = { $: {} };
drivefs.mojom.QuotaUsageSpec = { $: {} };
drivefs.mojom.HttpHeaderSpec = { $: {} };
drivefs.mojom.HttpRequestSpec = { $: {} };
drivefs.mojom.HttpResponseSpec = { $: {} };
drivefs.mojom.HttpCompletionStatusSpec = { $: {} };
drivefs.mojom.DocsOfflineStatsSpec = { $: {} };
drivefs.mojom.MirrorSyncErrorSpec = { $: {} };
drivefs.mojom.MirrorSyncErrorListSpec = { $: {} };
drivefs.mojom.DriveFsBootstrap = {};
drivefs.mojom.DriveFsBootstrap.$interfaceName = 'drivefs.mojom.DriveFsBootstrap';
drivefs.mojom.DriveFsBootstrap_Init_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs = {};
drivefs.mojom.DriveFs.$interfaceName = 'drivefs.mojom.DriveFs';
drivefs.mojom.DriveFs_GetMetadata_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetMetadata_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_SetPinned_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_SetPinned_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_UpdateNetworkState_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_ResetCache_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_ResetCache_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetThumbnail_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetThumbnail_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_CopyFile_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_CopyFile_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_StartSearchQuery_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_FetchAllChangeLogs_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_FetchChangeLog_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_SendNativeMessageRequest_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_SendNativeMessageRequest_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_SetStartupArguments_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_SetStartupArguments_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetStartupArguments_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetStartupArguments_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_SetTracingEnabled_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_SetNetworkingEnabled_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_ForcePauseSyncing_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_DumpAccountSettings_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_LoadAccountSettings_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_CreateNativeHostSession_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_LocateFilesByItemIds_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_LocateFilesByItemIds_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetQuotaUsage_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetQuotaUsage_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_ToggleMirroring_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_ToggleMirroring_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_ToggleSyncForPath_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_ToggleSyncForPath_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetSyncingPaths_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetSyncingPaths_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_PollHostedFilePinStates_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetPooledQuotaUsage_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetPooledQuotaUsage_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_SetPinnedByStableId_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_SetPinnedByStableId_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetMetadataByStableId_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetMetadataByStableId_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_CancelUploadByPath_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_SetDocsOfflineEnabled_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_SetDocsOfflineEnabled_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetOfflineFilesSpaceUsage_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetOfflineFilesSpaceUsage_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_ClearOfflineFiles_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_ClearOfflineFiles_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_ImmediatelyUpload_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_ImmediatelyUpload_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_UpdateFromPairedDoc_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_UpdateFromPairedDoc_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetItemFromCloudStore_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetItemFromCloudStore_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetDocsOfflineStats_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetDocsOfflineStats_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetMirrorSyncStatusForFile_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetMirrorSyncStatusForFile_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetMirrorSyncStatusForDirectory_ParamsSpec = { $: {} };
drivefs.mojom.DriveFs_GetMirrorSyncStatusForDirectory_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate = {};
drivefs.mojom.DriveFsDelegate.$interfaceName = 'drivefs.mojom.DriveFsDelegate';
drivefs.mojom.DriveFsDelegate_GetAccessToken_ParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_GetAccessToken_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_OnMounted_ParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_OnMountFailed_ParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_OnUnmounted_ParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_OnSyncingStatusUpdate_ParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_OnFilesChanged_ParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_OnError_ParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_OnTeamDrivesListReady_ParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_OnTeamDriveChanged_ParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_OnHeartbeat_ParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_ConnectToExtension_ParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_ConnectToExtension_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_DisplayConfirmDialog_ParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_DisplayConfirmDialog_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_ExecuteHttpRequest_ParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_GetMachineRootID_ParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_GetMachineRootID_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_PersistMachineRootID_ParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_OnMirrorSyncingStatusUpdate_ParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_OnItemProgress_ParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_GetAccessTokenWithExpiry_ParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_GetAccessTokenWithExpiry_ResponseParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_OnNotificationReceived_ParamsSpec = { $: {} };
drivefs.mojom.DriveFsDelegate_OnMirrorSyncError_ParamsSpec = { $: {} };
drivefs.mojom.SearchQuery = {};
drivefs.mojom.SearchQuery.$interfaceName = 'drivefs.mojom.SearchQuery';
drivefs.mojom.SearchQuery_GetNextPage_ParamsSpec = { $: {} };
drivefs.mojom.SearchQuery_GetNextPage_ResponseParamsSpec = { $: {} };
drivefs.mojom.HttpDelegate = {};
drivefs.mojom.HttpDelegate.$interfaceName = 'drivefs.mojom.HttpDelegate';
drivefs.mojom.HttpDelegate_GetRequestBody_ParamsSpec = { $: {} };
drivefs.mojom.HttpDelegate_OnReceiveResponse_ParamsSpec = { $: {} };
drivefs.mojom.HttpDelegate_OnReceiveBody_ParamsSpec = { $: {} };
drivefs.mojom.HttpDelegate_OnRequestComplete_ParamsSpec = { $: {} };

// Enum: CancelUploadMode
drivefs.mojom.CancelUploadMode = {
  kTrashAfterCancellation: 0,
  kDeleteAfterCancellation: 1,
};

// Enum: DocsOfflineEnableStatus
drivefs.mojom.DocsOfflineEnableStatus = {
  kUnknown: 0,
  kSuccess: 1,
  kAlreadyEnabled: 2,
  kUnknownError: 3,
  kDisableUnsupported: 4,
  kOfflineEligible: 5,
  kOfflineIneligibleUnknown: 6,
  kOfflineIneligibleOtherUser: 7,
  kOfflineIneligibleDbInInvalidState: 8,
  kOfflineIneligiblePolicyDisallow: 9,
  kOfflineIneligibleNoExtension: 10,
  kOfflineIneligibleInsufficientDiskSpace: 11,
  kNativeMessageHostError: 12,
  kNativeMessageClientError: 13,
  kSystemError: 14,
};

// Enum: CreateOrDelete
drivefs.mojom.CreateOrDelete = {
  kCreated: 0,
  kDeleted: 1,
};

// Enum: CSESupport
drivefs.mojom.CSESupport = {
  kNone: 0,
  kListing: 1,
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
  kFailed: -1,
  kInUse: -2,
  kExists: -3,
  kNotFound: -4,
  kAccessDenied: -5,
  kTooManyOpened: -6,
  kNoMemory: -7,
  kNoServerSpace: -8,
  kNotADirectory: -9,
  kInvalidOperation: -10,
  kSecurity: -11,
  kAbort: -12,
  kNotAFile: -13,
  kNotEmpty: -14,
  kInvalidUrl: -15,
  kNoConnection: -16,
  kNoLocalSpace: -17,
  kServiceUnavailable: -18,
  kOkWithMoreResults: -19,
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
  kUnknown: 0,
  kOk: 1,
  kNotFound: 2,
  kPermissionDenied: 3,
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
  kIOPending: -1,
  kFailed: -2,
  kAborted: -3,
  kInvalidArgument: -4,
  kInvalidHandle: -5,
  kFileNotFound: -6,
  kTimedOut: -7,
  kNameNotResolved: -105,
  kInternetDisconnected: -106,
  kAddressUnreachable: -109,
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
  kUnknown: 0,
  kGenericUploadFailure: 1,
  kGenericDownloadFailure: 2,
  kMultipleFailures: 3,
  kExceedsCloudDownloadQuota: 4,
  kNoDiskSpace: 5,
  kExceedsCloudStorageQuota: 6,
  kExceedsCloudUploadQuota: 7,
};

// Union: FilePathOrError
mojo.internal.Union(
    drivefs.mojom.FilePathOrErrorSpec, 'drivefs.mojom.FilePathOrError', {
      'error': {
        'ordinal': 0,
        'type': drivefs.mojom.FileErrorSpec.$,
        'nullable': false,
      },
      'path': {
        'ordinal': 1,
        'type': mojo_base.mojom.FilePathSpec.$,
        'nullable': false,
      },
    });

// Struct: DriveFsConfiguration
mojo.internal.Struct(
    drivefs.mojom.DriveFsConfigurationSpec, 'drivefs.mojom.DriveFsConfiguration', [
      mojo.internal.StructField('user_email', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('access_token', 8, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('enable_metrics', 16, 0, mojo.internal.Bool, false, false, 2, undefined),
      mojo.internal.StructField('lost_and_found_directory_name', 24, 0, mojo.internal.String, null, true, 3, undefined),
      mojo.internal.StructField('enable_experimental_mirroring', 32, 0, mojo.internal.Bool, false, false, 4, undefined),
      mojo.internal.StructField('enable_verbose_logging', 32, 1, mojo.internal.Bool, false, false, 5, undefined),
      mojo.internal.StructField('cse_support', 40, 0, drivefs.mojom.CSESupportSpec.$, 0, false, 7, undefined),
      mojo.internal.StructField('fetch_modifying_user_metadata', 48, 0, mojo.internal.Bool, false, false, 8, undefined),
      mojo.internal.StructField('fetch_sharing_user_metadata', 48, 1, mojo.internal.Bool, false, false, 8, undefined),
    ],
    [[0, 16], [1, 24], [2, 32], [3, 40], [4, 48], [5, 48], [7, 56], [8, 64]]);

// Struct: AccessToken
mojo.internal.Struct(
    drivefs.mojom.AccessTokenSpec, 'drivefs.mojom.AccessToken', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('expiry_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DriveError
mojo.internal.Struct(
    drivefs.mojom.DriveErrorSpec, 'drivefs.mojom.DriveError', [
      mojo.internal.StructField('kCantUploadStorageFull', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DialogReason
mojo.internal.Struct(
    drivefs.mojom.DialogReasonSpec, 'drivefs.mojom.DialogReason', [
      mojo.internal.StructField('kEnableDocsOffline', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UserInfo
mojo.internal.Struct(
    drivefs.mojom.UserInfoSpec, 'drivefs.mojom.UserInfo', [
      mojo.internal.StructField('display_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FileMetadata
mojo.internal.Struct(
    drivefs.mojom.FileMetadataSpec, 'drivefs.mojom.FileMetadata', [
      mojo.internal.StructField('kFile', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ShortcutDetails
mojo.internal.Struct(
    drivefs.mojom.ShortcutDetailsSpec, 'drivefs.mojom.ShortcutDetails', [
      mojo.internal.StructField('target_stable_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('kUnknown', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ImageMetadata
mojo.internal.Struct(
    drivefs.mojom.ImageMetadataSpec, 'drivefs.mojom.ImageMetadata', [
      mojo.internal.StructField('height', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('width', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('rotation', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Capabilities
mojo.internal.Struct(
    drivefs.mojom.CapabilitiesSpec, 'drivefs.mojom.Capabilities', [
      mojo.internal.StructField('can_share', 0, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('can_copy', 0, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('can_delete', 0, 2, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('can_rename', 0, 3, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('can_add_children', 0, 4, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FolderFeature
mojo.internal.Struct(
    drivefs.mojom.FolderFeatureSpec, 'drivefs.mojom.FolderFeature', [
      mojo.internal.StructField('is_machine_root', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_arbitrary_sync_folder', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_external_media', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: QuickAccess
mojo.internal.Struct(
    drivefs.mojom.QuickAccessSpec, 'drivefs.mojom.QuickAccess', [
      mojo.internal.StructField('score', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SharedDriveQuota
mojo.internal.Struct(
    drivefs.mojom.SharedDriveQuotaSpec, 'drivefs.mojom.SharedDriveQuota', [
      mojo.internal.StructField('quota_bytes_used_in_drive', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('individual_quota_bytes_total', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ItemEvent
mojo.internal.Struct(
    drivefs.mojom.ItemEventSpec, 'drivefs.mojom.ItemEvent', [
      mojo.internal.StructField('kQueued', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ProgressEvent
mojo.internal.Struct(
    drivefs.mojom.ProgressEventSpec, 'drivefs.mojom.ProgressEvent', [
      mojo.internal.StructField('stable_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('path', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('progress', 16, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('file_path', 24, 0, mojo_base.mojom.FilePathSpec.$, null, true, 1, undefined),
    ],
    [[0, 32], [1, 40]]);

// Struct: SyncingStatus
mojo.internal.Struct(
    drivefs.mojom.SyncingStatusSpec, 'drivefs.mojom.SyncingStatus', [
      mojo.internal.StructField('item_events', 0, 0, mojo.internal.Array(drivefs.mojom.ItemEventSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FileChange
mojo.internal.Struct(
    drivefs.mojom.FileChangeSpec, 'drivefs.mojom.FileChange', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('kCreate', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: QueryParameters
mojo.internal.Struct(
    drivefs.mojom.QueryParametersSpec, 'drivefs.mojom.QueryParameters', [
      mojo.internal.StructField('kLocalOnly', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: QueryItem
mojo.internal.Struct(
    drivefs.mojom.QueryItemSpec, 'drivefs.mojom.QueryItem', [
      mojo.internal.StructField('metadata', 0, 0, drivefs.mojom.FileMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('path', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FetchChangeLogOptions
mojo.internal.Struct(
    drivefs.mojom.FetchChangeLogOptionsSpec, 'drivefs.mojom.FetchChangeLogOptions', [
      mojo.internal.StructField('change_id', 0, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('team_drive_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PooledQuotaUsage
mojo.internal.Struct(
    drivefs.mojom.PooledQuotaUsageSpec, 'drivefs.mojom.PooledQuotaUsage', [
      mojo.internal.StructField('user_type', 0, 0, drivefs.mojom.UserTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('used_user_bytes', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('total_user_bytes', 16, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('organization_name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('organization_limit_exceeded', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: QuotaUsage
mojo.internal.Struct(
    drivefs.mojom.QuotaUsageSpec, 'drivefs.mojom.QuotaUsage', [
      mojo.internal.StructField('free_cloud_bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('total_cloud_bytes', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HttpHeader
mojo.internal.Struct(
    drivefs.mojom.HttpHeaderSpec, 'drivefs.mojom.HttpHeader', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HttpRequest
mojo.internal.Struct(
    drivefs.mojom.HttpRequestSpec, 'drivefs.mojom.HttpRequest', [
      mojo.internal.StructField('method', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('headers', 16, 0, mojo.internal.Array(drivefs.mojom.HttpHeaderSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('request_body_bytes', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: HttpResponse
mojo.internal.Struct(
    drivefs.mojom.HttpResponseSpec, 'drivefs.mojom.HttpResponse', [
      mojo.internal.StructField('headers', 0, 0, mojo.internal.Array(drivefs.mojom.HttpHeaderSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('response_code', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HttpCompletionStatus
mojo.internal.Struct(
    drivefs.mojom.HttpCompletionStatusSpec, 'drivefs.mojom.HttpCompletionStatus', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.NetErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response_body_bytes', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DocsOfflineStats
mojo.internal.Struct(
    drivefs.mojom.DocsOfflineStatsSpec, 'drivefs.mojom.DocsOfflineStats', [
      mojo.internal.StructField('total', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('available_offline', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MirrorSyncError
mojo.internal.Struct(
    drivefs.mojom.MirrorSyncErrorSpec, 'drivefs.mojom.MirrorSyncError', [
      mojo.internal.StructField('kUnknown', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MirrorSyncErrorList
mojo.internal.Struct(
    drivefs.mojom.MirrorSyncErrorListSpec, 'drivefs.mojom.MirrorSyncErrorList', [
      mojo.internal.StructField('errors', 0, 0, mojo.internal.Array(drivefs.mojom.MirrorSyncErrorSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: DriveFsBootstrap
mojo.internal.Struct(
    drivefs.mojom.DriveFsBootstrap_Init_ParamsSpec, 'drivefs.mojom.DriveFsBootstrap_Init_Params', [
      mojo.internal.StructField('config', 0, 0, drivefs.mojom.DriveFsConfigurationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('drive_fs', 8, 0, mojo.internal.InterfaceRequest(drivefs.mojom.DriveFsRemote), null, false, 0, undefined),
      mojo.internal.StructField('delegate', 16, 0, mojo.internal.InterfaceProxy(drivefs.mojom.DriveFsDelegateRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

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
  init(config, drive_fs, delegate) {
    return this.$.init(config, drive_fs, delegate);
  }
};

drivefs.mojom.DriveFsBootstrapRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DriveFsBootstrap', [
      { explicit: null },
    ]);
  }

  init(config, drive_fs, delegate) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      drivefs.mojom.DriveFsBootstrap_Init_ParamsSpec,
      null,
      [config, drive_fs, delegate],
      false);
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

drivefs.mojom.DriveFsBootstrapReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DriveFsBootstrap', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsBootstrap_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsBootstrap_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.config, params.drive_fs, params.delegate);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

drivefs.mojom.DriveFsBootstrapReceiver = drivefs.mojom.DriveFsBootstrapReceiver;

drivefs.mojom.DriveFsBootstrapPtr = drivefs.mojom.DriveFsBootstrapRemote;
drivefs.mojom.DriveFsBootstrapRequest = drivefs.mojom.DriveFsBootstrapPendingReceiver;


// Interface: DriveFs
mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetMetadata_ParamsSpec, 'drivefs.mojom.DriveFs_GetMetadata_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetMetadata_ResponseParamsSpec, 'drivefs.mojom.DriveFs_GetMetadata_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('metadata', 8, 0, drivefs.mojom.FileMetadataSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_SetPinned_ParamsSpec, 'drivefs.mojom.DriveFs_SetPinned_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pinned', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_SetPinned_ResponseParamsSpec, 'drivefs.mojom.DriveFs_SetPinned_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_UpdateNetworkState_ParamsSpec, 'drivefs.mojom.DriveFs_UpdateNetworkState_Params', [
      mojo.internal.StructField('pause_syncing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_offline', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_ResetCache_ParamsSpec, 'drivefs.mojom.DriveFs_ResetCache_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_ResetCache_ResponseParamsSpec, 'drivefs.mojom.DriveFs_ResetCache_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetThumbnail_ParamsSpec, 'drivefs.mojom.DriveFs_GetThumbnail_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('crop_to_square', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetThumbnail_ResponseParamsSpec, 'drivefs.mojom.DriveFs_GetThumbnail_ResponseParams', [
      mojo.internal.StructField('thumbnail', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_CopyFile_ParamsSpec, 'drivefs.mojom.DriveFs_CopyFile_Params', [
      mojo.internal.StructField('source', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_CopyFile_ResponseParamsSpec, 'drivefs.mojom.DriveFs_CopyFile_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_StartSearchQuery_ParamsSpec, 'drivefs.mojom.DriveFs_StartSearchQuery_Params', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.InterfaceRequest(drivefs.mojom.SearchQueryRemote), null, false, 0, undefined),
      mojo.internal.StructField('query_params', 8, 0, drivefs.mojom.QueryParametersSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_FetchAllChangeLogs_ParamsSpec, 'drivefs.mojom.DriveFs_FetchAllChangeLogs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_FetchChangeLog_ParamsSpec, 'drivefs.mojom.DriveFs_FetchChangeLog_Params', [
      mojo.internal.StructField('options', 0, 0, mojo.internal.Array(drivefs.mojom.FetchChangeLogOptionsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_SendNativeMessageRequest_ParamsSpec, 'drivefs.mojom.DriveFs_SendNativeMessageRequest_Params', [
      mojo.internal.StructField('request', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_SendNativeMessageRequest_ResponseParamsSpec, 'drivefs.mojom.DriveFs_SendNativeMessageRequest_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_SetStartupArguments_ParamsSpec, 'drivefs.mojom.DriveFs_SetStartupArguments_Params', [
      mojo.internal.StructField('arguments', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_SetStartupArguments_ResponseParamsSpec, 'drivefs.mojom.DriveFs_SetStartupArguments_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetStartupArguments_ParamsSpec, 'drivefs.mojom.DriveFs_GetStartupArguments_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetStartupArguments_ResponseParamsSpec, 'drivefs.mojom.DriveFs_GetStartupArguments_ResponseParams', [
      mojo.internal.StructField('arguments', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_SetTracingEnabled_ParamsSpec, 'drivefs.mojom.DriveFs_SetTracingEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_SetNetworkingEnabled_ParamsSpec, 'drivefs.mojom.DriveFs_SetNetworkingEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_ForcePauseSyncing_ParamsSpec, 'drivefs.mojom.DriveFs_ForcePauseSyncing_Params', [
      mojo.internal.StructField('enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_DumpAccountSettings_ParamsSpec, 'drivefs.mojom.DriveFs_DumpAccountSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_LoadAccountSettings_ParamsSpec, 'drivefs.mojom.DriveFs_LoadAccountSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_CreateNativeHostSession_ParamsSpec, 'drivefs.mojom.DriveFs_CreateNativeHostSession_Params', [
      mojo.internal.StructField('params', 0, 0, drivefs.mojom.ExtensionConnectionParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.InterfaceRequest(drivefs.mojom.NativeMessagingHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('port', 16, 0, mojo.internal.InterfaceProxy(drivefs.mojom.NativeMessagingPortRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_LocateFilesByItemIds_ParamsSpec, 'drivefs.mojom.DriveFs_LocateFilesByItemIds_Params', [
      mojo.internal.StructField('item_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_LocateFilesByItemIds_ResponseParamsSpec, 'drivefs.mojom.DriveFs_LocateFilesByItemIds_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, mojo.internal.Array(drivefs.mojom.FilePathOrErrorSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetQuotaUsage_ParamsSpec, 'drivefs.mojom.DriveFs_GetQuotaUsage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetQuotaUsage_ResponseParamsSpec, 'drivefs.mojom.DriveFs_GetQuotaUsage_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quota', 8, 0, drivefs.mojom.QuotaUsageSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_ToggleMirroring_ParamsSpec, 'drivefs.mojom.DriveFs_ToggleMirroring_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_ToggleMirroring_ResponseParamsSpec, 'drivefs.mojom.DriveFs_ToggleMirroring_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, drivefs.mojom.MirrorSyncStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_ToggleSyncForPath_ParamsSpec, 'drivefs.mojom.DriveFs_ToggleSyncForPath_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, drivefs.mojom.MirrorPathStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_ToggleSyncForPath_ResponseParamsSpec, 'drivefs.mojom.DriveFs_ToggleSyncForPath_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetSyncingPaths_ParamsSpec, 'drivefs.mojom.DriveFs_GetSyncingPaths_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetSyncingPaths_ResponseParamsSpec, 'drivefs.mojom.DriveFs_GetSyncingPaths_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('paths', 8, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_PollHostedFilePinStates_ParamsSpec, 'drivefs.mojom.DriveFs_PollHostedFilePinStates_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetPooledQuotaUsage_ParamsSpec, 'drivefs.mojom.DriveFs_GetPooledQuotaUsage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetPooledQuotaUsage_ResponseParamsSpec, 'drivefs.mojom.DriveFs_GetPooledQuotaUsage_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quota', 8, 0, drivefs.mojom.PooledQuotaUsageSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_SetPinnedByStableId_ParamsSpec, 'drivefs.mojom.DriveFs_SetPinnedByStableId_Params', [
      mojo.internal.StructField('stable_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('pinned', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_SetPinnedByStableId_ResponseParamsSpec, 'drivefs.mojom.DriveFs_SetPinnedByStableId_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetMetadataByStableId_ParamsSpec, 'drivefs.mojom.DriveFs_GetMetadataByStableId_Params', [
      mojo.internal.StructField('stable_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetMetadataByStableId_ResponseParamsSpec, 'drivefs.mojom.DriveFs_GetMetadataByStableId_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('metadata', 8, 0, drivefs.mojom.FileMetadataSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_CancelUploadByPath_ParamsSpec, 'drivefs.mojom.DriveFs_CancelUploadByPath_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cancel_mode', 8, 0, drivefs.mojom.CancelUploadModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_SetDocsOfflineEnabled_ParamsSpec, 'drivefs.mojom.DriveFs_SetDocsOfflineEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_SetDocsOfflineEnabled_ResponseParamsSpec, 'drivefs.mojom.DriveFs_SetDocsOfflineEnabled_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, drivefs.mojom.DocsOfflineEnableStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetOfflineFilesSpaceUsage_ParamsSpec, 'drivefs.mojom.DriveFs_GetOfflineFilesSpaceUsage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetOfflineFilesSpaceUsage_ResponseParamsSpec, 'drivefs.mojom.DriveFs_GetOfflineFilesSpaceUsage_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('space_used', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_ClearOfflineFiles_ParamsSpec, 'drivefs.mojom.DriveFs_ClearOfflineFiles_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_ClearOfflineFiles_ResponseParamsSpec, 'drivefs.mojom.DriveFs_ClearOfflineFiles_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_ImmediatelyUpload_ParamsSpec, 'drivefs.mojom.DriveFs_ImmediatelyUpload_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_ImmediatelyUpload_ResponseParamsSpec, 'drivefs.mojom.DriveFs_ImmediatelyUpload_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_UpdateFromPairedDoc_ParamsSpec, 'drivefs.mojom.DriveFs_UpdateFromPairedDoc_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_UpdateFromPairedDoc_ResponseParamsSpec, 'drivefs.mojom.DriveFs_UpdateFromPairedDoc_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetItemFromCloudStore_ParamsSpec, 'drivefs.mojom.DriveFs_GetItemFromCloudStore_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetItemFromCloudStore_ResponseParamsSpec, 'drivefs.mojom.DriveFs_GetItemFromCloudStore_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetDocsOfflineStats_ParamsSpec, 'drivefs.mojom.DriveFs_GetDocsOfflineStats_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetDocsOfflineStats_ResponseParamsSpec, 'drivefs.mojom.DriveFs_GetDocsOfflineStats_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('counts', 8, 0, drivefs.mojom.DocsOfflineStatsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetMirrorSyncStatusForFile_ParamsSpec, 'drivefs.mojom.DriveFs_GetMirrorSyncStatusForFile_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetMirrorSyncStatusForFile_ResponseParamsSpec, 'drivefs.mojom.DriveFs_GetMirrorSyncStatusForFile_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, drivefs.mojom.MirrorItemSyncingStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetMirrorSyncStatusForDirectory_ParamsSpec, 'drivefs.mojom.DriveFs_GetMirrorSyncStatusForDirectory_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFs_GetMirrorSyncStatusForDirectory_ResponseParamsSpec, 'drivefs.mojom.DriveFs_GetMirrorSyncStatusForDirectory_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, drivefs.mojom.MirrorItemSyncingStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  getMetadata(path) {
    return this.$.getMetadata(path);
  }
  setPinned(path, pinned) {
    return this.$.setPinned(path, pinned);
  }
  updateNetworkState(pause_syncing, is_offline) {
    return this.$.updateNetworkState(pause_syncing, is_offline);
  }
  resetCache() {
    return this.$.resetCache();
  }
  getThumbnail(path, crop_to_square) {
    return this.$.getThumbnail(path, crop_to_square);
  }
  copyFile(source, target) {
    return this.$.copyFile(source, target);
  }
  startSearchQuery(query, query_params) {
    return this.$.startSearchQuery(query, query_params);
  }
  fetchAllChangeLogs() {
    return this.$.fetchAllChangeLogs();
  }
  fetchChangeLog(options) {
    return this.$.fetchChangeLog(options);
  }
  sendNativeMessageRequest(request) {
    return this.$.sendNativeMessageRequest(request);
  }
  setStartupArguments(arguments) {
    return this.$.setStartupArguments(arguments);
  }
  getStartupArguments() {
    return this.$.getStartupArguments();
  }
  setTracingEnabled(enabled) {
    return this.$.setTracingEnabled(enabled);
  }
  setNetworkingEnabled(enabled) {
    return this.$.setNetworkingEnabled(enabled);
  }
  forcePauseSyncing(enable) {
    return this.$.forcePauseSyncing(enable);
  }
  dumpAccountSettings() {
    return this.$.dumpAccountSettings();
  }
  loadAccountSettings() {
    return this.$.loadAccountSettings();
  }
  createNativeHostSession(params, host, port) {
    return this.$.createNativeHostSession(params, host, port);
  }
  locateFilesByItemIds(item_ids) {
    return this.$.locateFilesByItemIds(item_ids);
  }
  getQuotaUsage() {
    return this.$.getQuotaUsage();
  }
  toggleMirroring(enabled) {
    return this.$.toggleMirroring(enabled);
  }
  toggleSyncForPath(path, status) {
    return this.$.toggleSyncForPath(path, status);
  }
  getSyncingPaths() {
    return this.$.getSyncingPaths();
  }
  pollHostedFilePinStates() {
    return this.$.pollHostedFilePinStates();
  }
  getPooledQuotaUsage() {
    return this.$.getPooledQuotaUsage();
  }
  setPinnedByStableId(stable_id, pinned) {
    return this.$.setPinnedByStableId(stable_id, pinned);
  }
  getMetadataByStableId(stable_id) {
    return this.$.getMetadataByStableId(stable_id);
  }
  cancelUploadByPath(path, cancel_mode) {
    return this.$.cancelUploadByPath(path, cancel_mode);
  }
  setDocsOfflineEnabled(enabled) {
    return this.$.setDocsOfflineEnabled(enabled);
  }
  getOfflineFilesSpaceUsage() {
    return this.$.getOfflineFilesSpaceUsage();
  }
  clearOfflineFiles() {
    return this.$.clearOfflineFiles();
  }
  immediatelyUpload(path) {
    return this.$.immediatelyUpload(path);
  }
  updateFromPairedDoc(path) {
    return this.$.updateFromPairedDoc(path);
  }
  getItemFromCloudStore(path) {
    return this.$.getItemFromCloudStore(path);
  }
  getDocsOfflineStats() {
    return this.$.getDocsOfflineStats();
  }
  getMirrorSyncStatusForFile(path) {
    return this.$.getMirrorSyncStatusForFile(path);
  }
  getMirrorSyncStatusForDirectory(path) {
    return this.$.getMirrorSyncStatusForDirectory(path);
  }
};

drivefs.mojom.DriveFsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DriveFs', [
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

  getMetadata(path) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      drivefs.mojom.DriveFs_GetMetadata_ParamsSpec,
      drivefs.mojom.DriveFs_GetMetadata_ResponseParamsSpec,
      [path],
      false);
  }

  setPinned(path, pinned) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      drivefs.mojom.DriveFs_SetPinned_ParamsSpec,
      drivefs.mojom.DriveFs_SetPinned_ResponseParamsSpec,
      [path, pinned],
      false);
  }

  updateNetworkState(pause_syncing, is_offline) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      drivefs.mojom.DriveFs_UpdateNetworkState_ParamsSpec,
      null,
      [pause_syncing, is_offline],
      false);
  }

  resetCache() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      drivefs.mojom.DriveFs_ResetCache_ParamsSpec,
      drivefs.mojom.DriveFs_ResetCache_ResponseParamsSpec,
      [],
      false);
  }

  getThumbnail(path, crop_to_square) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      drivefs.mojom.DriveFs_GetThumbnail_ParamsSpec,
      drivefs.mojom.DriveFs_GetThumbnail_ResponseParamsSpec,
      [path, crop_to_square],
      false);
  }

  copyFile(source, target) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      drivefs.mojom.DriveFs_CopyFile_ParamsSpec,
      drivefs.mojom.DriveFs_CopyFile_ResponseParamsSpec,
      [source, target],
      false);
  }

  startSearchQuery(query, query_params) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      drivefs.mojom.DriveFs_StartSearchQuery_ParamsSpec,
      null,
      [query, query_params],
      false);
  }

  fetchAllChangeLogs() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      drivefs.mojom.DriveFs_FetchAllChangeLogs_ParamsSpec,
      null,
      [],
      false);
  }

  fetchChangeLog(options) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      drivefs.mojom.DriveFs_FetchChangeLog_ParamsSpec,
      null,
      [options],
      false);
  }

  sendNativeMessageRequest(request) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      drivefs.mojom.DriveFs_SendNativeMessageRequest_ParamsSpec,
      drivefs.mojom.DriveFs_SendNativeMessageRequest_ResponseParamsSpec,
      [request],
      false);
  }

  setStartupArguments(arguments) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      drivefs.mojom.DriveFs_SetStartupArguments_ParamsSpec,
      drivefs.mojom.DriveFs_SetStartupArguments_ResponseParamsSpec,
      [arguments],
      false);
  }

  getStartupArguments() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      drivefs.mojom.DriveFs_GetStartupArguments_ParamsSpec,
      drivefs.mojom.DriveFs_GetStartupArguments_ResponseParamsSpec,
      [],
      false);
  }

  setTracingEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      drivefs.mojom.DriveFs_SetTracingEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setNetworkingEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      drivefs.mojom.DriveFs_SetNetworkingEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  forcePauseSyncing(enable) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      drivefs.mojom.DriveFs_ForcePauseSyncing_ParamsSpec,
      null,
      [enable],
      false);
  }

  dumpAccountSettings() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      drivefs.mojom.DriveFs_DumpAccountSettings_ParamsSpec,
      null,
      [],
      false);
  }

  loadAccountSettings() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      drivefs.mojom.DriveFs_LoadAccountSettings_ParamsSpec,
      null,
      [],
      false);
  }

  createNativeHostSession(params, host, port) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      drivefs.mojom.DriveFs_CreateNativeHostSession_ParamsSpec,
      null,
      [params, host, port],
      false);
  }

  locateFilesByItemIds(item_ids) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      drivefs.mojom.DriveFs_LocateFilesByItemIds_ParamsSpec,
      drivefs.mojom.DriveFs_LocateFilesByItemIds_ResponseParamsSpec,
      [item_ids],
      false);
  }

  getQuotaUsage() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      drivefs.mojom.DriveFs_GetQuotaUsage_ParamsSpec,
      drivefs.mojom.DriveFs_GetQuotaUsage_ResponseParamsSpec,
      [],
      false);
  }

  toggleMirroring(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      drivefs.mojom.DriveFs_ToggleMirroring_ParamsSpec,
      drivefs.mojom.DriveFs_ToggleMirroring_ResponseParamsSpec,
      [enabled],
      false);
  }

  toggleSyncForPath(path, status) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      drivefs.mojom.DriveFs_ToggleSyncForPath_ParamsSpec,
      drivefs.mojom.DriveFs_ToggleSyncForPath_ResponseParamsSpec,
      [path, status],
      false);
  }

  getSyncingPaths() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      drivefs.mojom.DriveFs_GetSyncingPaths_ParamsSpec,
      drivefs.mojom.DriveFs_GetSyncingPaths_ResponseParamsSpec,
      [],
      false);
  }

  pollHostedFilePinStates() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      drivefs.mojom.DriveFs_PollHostedFilePinStates_ParamsSpec,
      null,
      [],
      false);
  }

  getPooledQuotaUsage() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      drivefs.mojom.DriveFs_GetPooledQuotaUsage_ParamsSpec,
      drivefs.mojom.DriveFs_GetPooledQuotaUsage_ResponseParamsSpec,
      [],
      false);
  }

  setPinnedByStableId(stable_id, pinned) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      drivefs.mojom.DriveFs_SetPinnedByStableId_ParamsSpec,
      drivefs.mojom.DriveFs_SetPinnedByStableId_ResponseParamsSpec,
      [stable_id, pinned],
      false);
  }

  getMetadataByStableId(stable_id) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      drivefs.mojom.DriveFs_GetMetadataByStableId_ParamsSpec,
      drivefs.mojom.DriveFs_GetMetadataByStableId_ResponseParamsSpec,
      [stable_id],
      false);
  }

  cancelUploadByPath(path, cancel_mode) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      drivefs.mojom.DriveFs_CancelUploadByPath_ParamsSpec,
      null,
      [path, cancel_mode],
      false);
  }

  setDocsOfflineEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      drivefs.mojom.DriveFs_SetDocsOfflineEnabled_ParamsSpec,
      drivefs.mojom.DriveFs_SetDocsOfflineEnabled_ResponseParamsSpec,
      [enabled],
      false);
  }

  getOfflineFilesSpaceUsage() {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      drivefs.mojom.DriveFs_GetOfflineFilesSpaceUsage_ParamsSpec,
      drivefs.mojom.DriveFs_GetOfflineFilesSpaceUsage_ResponseParamsSpec,
      [],
      false);
  }

  clearOfflineFiles() {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      drivefs.mojom.DriveFs_ClearOfflineFiles_ParamsSpec,
      drivefs.mojom.DriveFs_ClearOfflineFiles_ResponseParamsSpec,
      [],
      false);
  }

  immediatelyUpload(path) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      drivefs.mojom.DriveFs_ImmediatelyUpload_ParamsSpec,
      drivefs.mojom.DriveFs_ImmediatelyUpload_ResponseParamsSpec,
      [path],
      false);
  }

  updateFromPairedDoc(path) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      drivefs.mojom.DriveFs_UpdateFromPairedDoc_ParamsSpec,
      drivefs.mojom.DriveFs_UpdateFromPairedDoc_ResponseParamsSpec,
      [path],
      false);
  }

  getItemFromCloudStore(path) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      drivefs.mojom.DriveFs_GetItemFromCloudStore_ParamsSpec,
      drivefs.mojom.DriveFs_GetItemFromCloudStore_ResponseParamsSpec,
      [path],
      false);
  }

  getDocsOfflineStats() {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      drivefs.mojom.DriveFs_GetDocsOfflineStats_ParamsSpec,
      drivefs.mojom.DriveFs_GetDocsOfflineStats_ResponseParamsSpec,
      [],
      false);
  }

  getMirrorSyncStatusForFile(path) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      drivefs.mojom.DriveFs_GetMirrorSyncStatusForFile_ParamsSpec,
      drivefs.mojom.DriveFs_GetMirrorSyncStatusForFile_ResponseParamsSpec,
      [path],
      false);
  }

  getMirrorSyncStatusForDirectory(path) {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      drivefs.mojom.DriveFs_GetMirrorSyncStatusForDirectory_ParamsSpec,
      drivefs.mojom.DriveFs_GetMirrorSyncStatusForDirectory_ResponseParamsSpec,
      [path],
      false);
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

drivefs.mojom.DriveFsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DriveFs', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_GetMetadata_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_SetPinned_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_UpdateNetworkState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_ResetCache_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_GetThumbnail_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_CopyFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_StartSearchQuery_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_FetchAllChangeLogs_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_FetchChangeLog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_SendNativeMessageRequest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_SetStartupArguments_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_GetStartupArguments_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_SetTracingEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_SetNetworkingEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_ForcePauseSyncing_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_DumpAccountSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_LoadAccountSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_CreateNativeHostSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_LocateFilesByItemIds_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_GetQuotaUsage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_ToggleMirroring_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_ToggleSyncForPath_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_GetSyncingPaths_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_PollHostedFilePinStates_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_GetPooledQuotaUsage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_SetPinnedByStableId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_GetMetadataByStableId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_CancelUploadByPath_ParamsSpec);
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_SetDocsOfflineEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_GetOfflineFilesSpaceUsage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_ClearOfflineFiles_ParamsSpec);
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_ImmediatelyUpload_ParamsSpec);
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_UpdateFromPairedDoc_ParamsSpec);
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_GetItemFromCloudStore_ParamsSpec);
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_GetDocsOfflineStats_ParamsSpec);
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_GetMirrorSyncStatusForFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFs_GetMirrorSyncStatusForDirectory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_GetMetadata_ParamsSpec.$.structSpec);
          const result = this.impl.getMetadata(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_GetMetadata_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_SetPinned_ParamsSpec.$.structSpec);
          const result = this.impl.setPinned(params.path, params.pinned);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_SetPinned_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_UpdateNetworkState_ParamsSpec.$.structSpec);
          const result = this.impl.updateNetworkState(params.pause_syncing, params.is_offline);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_ResetCache_ParamsSpec.$.structSpec);
          const result = this.impl.resetCache();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_ResetCache_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_GetThumbnail_ParamsSpec.$.structSpec);
          const result = this.impl.getThumbnail(params.path, params.crop_to_square);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_GetThumbnail_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_CopyFile_ParamsSpec.$.structSpec);
          const result = this.impl.copyFile(params.source, params.target);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_CopyFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_StartSearchQuery_ParamsSpec.$.structSpec);
          const result = this.impl.startSearchQuery(params.query, params.query_params);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_FetchAllChangeLogs_ParamsSpec.$.structSpec);
          const result = this.impl.fetchAllChangeLogs();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_FetchChangeLog_ParamsSpec.$.structSpec);
          const result = this.impl.fetchChangeLog(params.options);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_SendNativeMessageRequest_ParamsSpec.$.structSpec);
          const result = this.impl.sendNativeMessageRequest(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_SendNativeMessageRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_SetStartupArguments_ParamsSpec.$.structSpec);
          const result = this.impl.setStartupArguments(params.arguments);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_SetStartupArguments_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_GetStartupArguments_ParamsSpec.$.structSpec);
          const result = this.impl.getStartupArguments();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_GetStartupArguments_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_SetTracingEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setTracingEnabled(params.enabled);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_SetNetworkingEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setNetworkingEnabled(params.enabled);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_ForcePauseSyncing_ParamsSpec.$.structSpec);
          const result = this.impl.forcePauseSyncing(params.enable);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_DumpAccountSettings_ParamsSpec.$.structSpec);
          const result = this.impl.dumpAccountSettings();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_LoadAccountSettings_ParamsSpec.$.structSpec);
          const result = this.impl.loadAccountSettings();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_CreateNativeHostSession_ParamsSpec.$.structSpec);
          const result = this.impl.createNativeHostSession(params.params, params.host, params.port);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_LocateFilesByItemIds_ParamsSpec.$.structSpec);
          const result = this.impl.locateFilesByItemIds(params.item_ids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_LocateFilesByItemIds_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_GetQuotaUsage_ParamsSpec.$.structSpec);
          const result = this.impl.getQuotaUsage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_GetQuotaUsage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_ToggleMirroring_ParamsSpec.$.structSpec);
          const result = this.impl.toggleMirroring(params.enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_ToggleMirroring_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_ToggleSyncForPath_ParamsSpec.$.structSpec);
          const result = this.impl.toggleSyncForPath(params.path, params.status);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_ToggleSyncForPath_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_GetSyncingPaths_ParamsSpec.$.structSpec);
          const result = this.impl.getSyncingPaths();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_GetSyncingPaths_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_PollHostedFilePinStates_ParamsSpec.$.structSpec);
          const result = this.impl.pollHostedFilePinStates();
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_GetPooledQuotaUsage_ParamsSpec.$.structSpec);
          const result = this.impl.getPooledQuotaUsage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_GetPooledQuotaUsage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_SetPinnedByStableId_ParamsSpec.$.structSpec);
          const result = this.impl.setPinnedByStableId(params.stable_id, params.pinned);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_SetPinnedByStableId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_GetMetadataByStableId_ParamsSpec.$.structSpec);
          const result = this.impl.getMetadataByStableId(params.stable_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_GetMetadataByStableId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_CancelUploadByPath_ParamsSpec.$.structSpec);
          const result = this.impl.cancelUploadByPath(params.path, params.cancel_mode);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_SetDocsOfflineEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setDocsOfflineEnabled(params.enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_SetDocsOfflineEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_GetOfflineFilesSpaceUsage_ParamsSpec.$.structSpec);
          const result = this.impl.getOfflineFilesSpaceUsage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_GetOfflineFilesSpaceUsage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_ClearOfflineFiles_ParamsSpec.$.structSpec);
          const result = this.impl.clearOfflineFiles();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_ClearOfflineFiles_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_ImmediatelyUpload_ParamsSpec.$.structSpec);
          const result = this.impl.immediatelyUpload(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_ImmediatelyUpload_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_UpdateFromPairedDoc_ParamsSpec.$.structSpec);
          const result = this.impl.updateFromPairedDoc(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_UpdateFromPairedDoc_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_GetItemFromCloudStore_ParamsSpec.$.structSpec);
          const result = this.impl.getItemFromCloudStore(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_GetItemFromCloudStore_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_GetDocsOfflineStats_ParamsSpec.$.structSpec);
          const result = this.impl.getDocsOfflineStats();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_GetDocsOfflineStats_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_GetMirrorSyncStatusForFile_ParamsSpec.$.structSpec);
          const result = this.impl.getMirrorSyncStatusForFile(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_GetMirrorSyncStatusForFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFs_GetMirrorSyncStatusForDirectory_ParamsSpec.$.structSpec);
          const result = this.impl.getMirrorSyncStatusForDirectory(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFs_GetMirrorSyncStatusForDirectory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

drivefs.mojom.DriveFsReceiver = drivefs.mojom.DriveFsReceiver;

drivefs.mojom.DriveFsPtr = drivefs.mojom.DriveFsRemote;
drivefs.mojom.DriveFsRequest = drivefs.mojom.DriveFsPendingReceiver;


// Interface: DriveFsDelegate
mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_GetAccessToken_ParamsSpec, 'drivefs.mojom.DriveFsDelegate_GetAccessToken_Params', [
      mojo.internal.StructField('client_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('scopes', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_GetAccessToken_ResponseParamsSpec, 'drivefs.mojom.DriveFsDelegate_GetAccessToken_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, drivefs.mojom.AccessTokenStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('access_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_OnMounted_ParamsSpec, 'drivefs.mojom.DriveFsDelegate_OnMounted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_OnMountFailed_ParamsSpec, 'drivefs.mojom.DriveFsDelegate_OnMountFailed_Params', [
      mojo.internal.StructField('retry_delay', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_OnUnmounted_ParamsSpec, 'drivefs.mojom.DriveFsDelegate_OnUnmounted_Params', [
      mojo.internal.StructField('retry_delay', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_OnSyncingStatusUpdate_ParamsSpec, 'drivefs.mojom.DriveFsDelegate_OnSyncingStatusUpdate_Params', [
      mojo.internal.StructField('status', 0, 0, drivefs.mojom.SyncingStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_OnFilesChanged_ParamsSpec, 'drivefs.mojom.DriveFsDelegate_OnFilesChanged_Params', [
      mojo.internal.StructField('changes', 0, 0, mojo.internal.Array(drivefs.mojom.FileChangeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_OnError_ParamsSpec, 'drivefs.mojom.DriveFsDelegate_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.DriveErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_OnTeamDrivesListReady_ParamsSpec, 'drivefs.mojom.DriveFsDelegate_OnTeamDrivesListReady_Params', [
      mojo.internal.StructField('team_drive_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_OnTeamDriveChanged_ParamsSpec, 'drivefs.mojom.DriveFsDelegate_OnTeamDriveChanged_Params', [
      mojo.internal.StructField('team_drive_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('change_type', 8, 0, drivefs.mojom.CreateOrDeleteSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_OnHeartbeat_ParamsSpec, 'drivefs.mojom.DriveFsDelegate_OnHeartbeat_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_ConnectToExtension_ParamsSpec, 'drivefs.mojom.DriveFsDelegate_ConnectToExtension_Params', [
      mojo.internal.StructField('params', 0, 0, drivefs.mojom.ExtensionConnectionParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 8, 0, mojo.internal.InterfaceRequest(drivefs.mojom.NativeMessagingPortRemote), null, false, 0, undefined),
      mojo.internal.StructField('host', 16, 0, mojo.internal.InterfaceProxy(drivefs.mojom.NativeMessagingHostRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_ConnectToExtension_ResponseParamsSpec, 'drivefs.mojom.DriveFsDelegate_ConnectToExtension_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.ExtensionConnectionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_DisplayConfirmDialog_ParamsSpec, 'drivefs.mojom.DriveFsDelegate_DisplayConfirmDialog_Params', [
      mojo.internal.StructField('reason', 0, 0, drivefs.mojom.DialogReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_DisplayConfirmDialog_ResponseParamsSpec, 'drivefs.mojom.DriveFsDelegate_DisplayConfirmDialog_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, drivefs.mojom.DialogResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_ExecuteHttpRequest_ParamsSpec, 'drivefs.mojom.DriveFsDelegate_ExecuteHttpRequest_Params', [
      mojo.internal.StructField('request', 0, 0, drivefs.mojom.HttpRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('delegate', 8, 0, mojo.internal.InterfaceProxy(drivefs.mojom.HttpDelegateRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_GetMachineRootID_ParamsSpec, 'drivefs.mojom.DriveFsDelegate_GetMachineRootID_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_GetMachineRootID_ResponseParamsSpec, 'drivefs.mojom.DriveFsDelegate_GetMachineRootID_ResponseParams', [
      mojo.internal.StructField('doc_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_PersistMachineRootID_ParamsSpec, 'drivefs.mojom.DriveFsDelegate_PersistMachineRootID_Params', [
      mojo.internal.StructField('doc_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_OnMirrorSyncingStatusUpdate_ParamsSpec, 'drivefs.mojom.DriveFsDelegate_OnMirrorSyncingStatusUpdate_Params', [
      mojo.internal.StructField('status', 0, 0, drivefs.mojom.SyncingStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_OnItemProgress_ParamsSpec, 'drivefs.mojom.DriveFsDelegate_OnItemProgress_Params', [
      mojo.internal.StructField('progress_event', 0, 0, drivefs.mojom.ProgressEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_GetAccessTokenWithExpiry_ParamsSpec, 'drivefs.mojom.DriveFsDelegate_GetAccessTokenWithExpiry_Params', [
      mojo.internal.StructField('client_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('scopes', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_GetAccessTokenWithExpiry_ResponseParamsSpec, 'drivefs.mojom.DriveFsDelegate_GetAccessTokenWithExpiry_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, drivefs.mojom.AccessTokenStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('access_token', 8, 0, drivefs.mojom.AccessTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_OnNotificationReceived_ParamsSpec, 'drivefs.mojom.DriveFsDelegate_OnNotificationReceived_Params', [
      mojo.internal.StructField('notification', 0, 0, drivefs.mojom.DriveFsNotificationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.DriveFsDelegate_OnMirrorSyncError_ParamsSpec, 'drivefs.mojom.DriveFsDelegate_OnMirrorSyncError_Params', [
      mojo.internal.StructField('error_list', 0, 0, drivefs.mojom.MirrorSyncErrorListSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  getAccessToken(client_id, app_id, scopes) {
    return this.$.getAccessToken(client_id, app_id, scopes);
  }
  onMounted() {
    return this.$.onMounted();
  }
  onMountFailed(retry_delay) {
    return this.$.onMountFailed(retry_delay);
  }
  onUnmounted(retry_delay) {
    return this.$.onUnmounted(retry_delay);
  }
  onSyncingStatusUpdate(status) {
    return this.$.onSyncingStatusUpdate(status);
  }
  onFilesChanged(changes) {
    return this.$.onFilesChanged(changes);
  }
  onError(error) {
    return this.$.onError(error);
  }
  onTeamDrivesListReady(team_drive_ids) {
    return this.$.onTeamDrivesListReady(team_drive_ids);
  }
  onTeamDriveChanged(team_drive_id, change_type) {
    return this.$.onTeamDriveChanged(team_drive_id, change_type);
  }
  onHeartbeat() {
    return this.$.onHeartbeat();
  }
  connectToExtension(params, port, host) {
    return this.$.connectToExtension(params, port, host);
  }
  displayConfirmDialog(reason) {
    return this.$.displayConfirmDialog(reason);
  }
  executeHttpRequest(request, delegate) {
    return this.$.executeHttpRequest(request, delegate);
  }
  getMachineRootID() {
    return this.$.getMachineRootID();
  }
  persistMachineRootID(doc_id) {
    return this.$.persistMachineRootID(doc_id);
  }
  onMirrorSyncingStatusUpdate(status) {
    return this.$.onMirrorSyncingStatusUpdate(status);
  }
  onItemProgress(progress_event) {
    return this.$.onItemProgress(progress_event);
  }
  getAccessTokenWithExpiry(client_id, app_id, scopes) {
    return this.$.getAccessTokenWithExpiry(client_id, app_id, scopes);
  }
  onNotificationReceived(notification) {
    return this.$.onNotificationReceived(notification);
  }
  onMirrorSyncError(error_list) {
    return this.$.onMirrorSyncError(error_list);
  }
};

drivefs.mojom.DriveFsDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DriveFsDelegate', [
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

  getAccessToken(client_id, app_id, scopes) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      drivefs.mojom.DriveFsDelegate_GetAccessToken_ParamsSpec,
      drivefs.mojom.DriveFsDelegate_GetAccessToken_ResponseParamsSpec,
      [client_id, app_id, scopes],
      false);
  }

  onMounted() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      drivefs.mojom.DriveFsDelegate_OnMounted_ParamsSpec,
      null,
      [],
      false);
  }

  onMountFailed(retry_delay) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      drivefs.mojom.DriveFsDelegate_OnMountFailed_ParamsSpec,
      null,
      [retry_delay],
      false);
  }

  onUnmounted(retry_delay) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      drivefs.mojom.DriveFsDelegate_OnUnmounted_ParamsSpec,
      null,
      [retry_delay],
      false);
  }

  onSyncingStatusUpdate(status) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      drivefs.mojom.DriveFsDelegate_OnSyncingStatusUpdate_ParamsSpec,
      null,
      [status],
      false);
  }

  onFilesChanged(changes) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      drivefs.mojom.DriveFsDelegate_OnFilesChanged_ParamsSpec,
      null,
      [changes],
      false);
  }

  onError(error) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      drivefs.mojom.DriveFsDelegate_OnError_ParamsSpec,
      null,
      [error],
      false);
  }

  onTeamDrivesListReady(team_drive_ids) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      drivefs.mojom.DriveFsDelegate_OnTeamDrivesListReady_ParamsSpec,
      null,
      [team_drive_ids],
      false);
  }

  onTeamDriveChanged(team_drive_id, change_type) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      drivefs.mojom.DriveFsDelegate_OnTeamDriveChanged_ParamsSpec,
      null,
      [team_drive_id, change_type],
      false);
  }

  onHeartbeat() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      drivefs.mojom.DriveFsDelegate_OnHeartbeat_ParamsSpec,
      null,
      [],
      false);
  }

  connectToExtension(params, port, host) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      drivefs.mojom.DriveFsDelegate_ConnectToExtension_ParamsSpec,
      drivefs.mojom.DriveFsDelegate_ConnectToExtension_ResponseParamsSpec,
      [params, port, host],
      false);
  }

  displayConfirmDialog(reason) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      drivefs.mojom.DriveFsDelegate_DisplayConfirmDialog_ParamsSpec,
      drivefs.mojom.DriveFsDelegate_DisplayConfirmDialog_ResponseParamsSpec,
      [reason],
      false);
  }

  executeHttpRequest(request, delegate) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      drivefs.mojom.DriveFsDelegate_ExecuteHttpRequest_ParamsSpec,
      null,
      [request, delegate],
      false);
  }

  getMachineRootID() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      drivefs.mojom.DriveFsDelegate_GetMachineRootID_ParamsSpec,
      drivefs.mojom.DriveFsDelegate_GetMachineRootID_ResponseParamsSpec,
      [],
      false);
  }

  persistMachineRootID(doc_id) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      drivefs.mojom.DriveFsDelegate_PersistMachineRootID_ParamsSpec,
      null,
      [doc_id],
      false);
  }

  onMirrorSyncingStatusUpdate(status) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      drivefs.mojom.DriveFsDelegate_OnMirrorSyncingStatusUpdate_ParamsSpec,
      null,
      [status],
      false);
  }

  onItemProgress(progress_event) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      drivefs.mojom.DriveFsDelegate_OnItemProgress_ParamsSpec,
      null,
      [progress_event],
      false);
  }

  getAccessTokenWithExpiry(client_id, app_id, scopes) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      drivefs.mojom.DriveFsDelegate_GetAccessTokenWithExpiry_ParamsSpec,
      drivefs.mojom.DriveFsDelegate_GetAccessTokenWithExpiry_ResponseParamsSpec,
      [client_id, app_id, scopes],
      false);
  }

  onNotificationReceived(notification) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      drivefs.mojom.DriveFsDelegate_OnNotificationReceived_ParamsSpec,
      null,
      [notification],
      false);
  }

  onMirrorSyncError(error_list) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      drivefs.mojom.DriveFsDelegate_OnMirrorSyncError_ParamsSpec,
      null,
      [error_list],
      false);
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

drivefs.mojom.DriveFsDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DriveFsDelegate', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_GetAccessToken_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnMounted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnMountFailed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnUnmounted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnSyncingStatusUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnFilesChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnTeamDrivesListReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnTeamDriveChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnHeartbeat_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_ConnectToExtension_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_DisplayConfirmDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_ExecuteHttpRequest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_GetMachineRootID_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_PersistMachineRootID_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnMirrorSyncingStatusUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnItemProgress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_GetAccessTokenWithExpiry_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnNotificationReceived_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnMirrorSyncError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_GetAccessToken_ParamsSpec.$.structSpec);
          const result = this.impl.getAccessToken(params.client_id, params.app_id, params.scopes);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFsDelegate_GetAccessToken_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnMounted_ParamsSpec.$.structSpec);
          const result = this.impl.onMounted();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnMountFailed_ParamsSpec.$.structSpec);
          const result = this.impl.onMountFailed(params.retry_delay);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnUnmounted_ParamsSpec.$.structSpec);
          const result = this.impl.onUnmounted(params.retry_delay);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnSyncingStatusUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.onSyncingStatusUpdate(params.status);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnFilesChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onFilesChanged(params.changes);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnError_ParamsSpec.$.structSpec);
          const result = this.impl.onError(params.error);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnTeamDrivesListReady_ParamsSpec.$.structSpec);
          const result = this.impl.onTeamDrivesListReady(params.team_drive_ids);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnTeamDriveChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onTeamDriveChanged(params.team_drive_id, params.change_type);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnHeartbeat_ParamsSpec.$.structSpec);
          const result = this.impl.onHeartbeat();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_ConnectToExtension_ParamsSpec.$.structSpec);
          const result = this.impl.connectToExtension(params.params, params.port, params.host);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFsDelegate_ConnectToExtension_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_DisplayConfirmDialog_ParamsSpec.$.structSpec);
          const result = this.impl.displayConfirmDialog(params.reason);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFsDelegate_DisplayConfirmDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_ExecuteHttpRequest_ParamsSpec.$.structSpec);
          const result = this.impl.executeHttpRequest(params.request, params.delegate);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_GetMachineRootID_ParamsSpec.$.structSpec);
          const result = this.impl.getMachineRootID();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFsDelegate_GetMachineRootID_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_PersistMachineRootID_ParamsSpec.$.structSpec);
          const result = this.impl.persistMachineRootID(params.doc_id);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnMirrorSyncingStatusUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.onMirrorSyncingStatusUpdate(params.status);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnItemProgress_ParamsSpec.$.structSpec);
          const result = this.impl.onItemProgress(params.progress_event);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_GetAccessTokenWithExpiry_ParamsSpec.$.structSpec);
          const result = this.impl.getAccessTokenWithExpiry(params.client_id, params.app_id, params.scopes);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.DriveFsDelegate_GetAccessTokenWithExpiry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnNotificationReceived_ParamsSpec.$.structSpec);
          const result = this.impl.onNotificationReceived(params.notification);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.DriveFsDelegate_OnMirrorSyncError_ParamsSpec.$.structSpec);
          const result = this.impl.onMirrorSyncError(params.error_list);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

drivefs.mojom.DriveFsDelegateReceiver = drivefs.mojom.DriveFsDelegateReceiver;

drivefs.mojom.DriveFsDelegatePtr = drivefs.mojom.DriveFsDelegateRemote;
drivefs.mojom.DriveFsDelegateRequest = drivefs.mojom.DriveFsDelegatePendingReceiver;


// Interface: SearchQuery
mojo.internal.Struct(
    drivefs.mojom.SearchQuery_GetNextPage_ParamsSpec, 'drivefs.mojom.SearchQuery_GetNextPage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    drivefs.mojom.SearchQuery_GetNextPage_ResponseParamsSpec, 'drivefs.mojom.SearchQuery_GetNextPage_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, drivefs.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('results', 8, 0, mojo.internal.Array(drivefs.mojom.QueryItemSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

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
  getNextPage() {
    return this.$.getNextPage();
  }
};

drivefs.mojom.SearchQueryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SearchQuery', [
      { explicit: null },
    ]);
  }

  getNextPage() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      drivefs.mojom.SearchQuery_GetNextPage_ParamsSpec,
      drivefs.mojom.SearchQuery_GetNextPage_ResponseParamsSpec,
      [],
      false);
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

drivefs.mojom.SearchQueryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SearchQuery', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.SearchQuery_GetNextPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.SearchQuery_GetNextPage_ParamsSpec.$.structSpec);
          const result = this.impl.getNextPage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, drivefs.mojom.SearchQuery_GetNextPage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

drivefs.mojom.SearchQueryReceiver = drivefs.mojom.SearchQueryReceiver;

drivefs.mojom.SearchQueryPtr = drivefs.mojom.SearchQueryRemote;
drivefs.mojom.SearchQueryRequest = drivefs.mojom.SearchQueryPendingReceiver;


// Interface: HttpDelegate
mojo.internal.Struct(
    drivefs.mojom.HttpDelegate_GetRequestBody_ParamsSpec, 'drivefs.mojom.HttpDelegate_GetRequestBody_Params', [
      mojo.internal.StructField('request_body', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.HttpDelegate_OnReceiveResponse_ParamsSpec, 'drivefs.mojom.HttpDelegate_OnReceiveResponse_Params', [
      mojo.internal.StructField('response', 0, 0, drivefs.mojom.HttpResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.HttpDelegate_OnReceiveBody_ParamsSpec, 'drivefs.mojom.HttpDelegate_OnReceiveBody_Params', [
      mojo.internal.StructField('response_body', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    drivefs.mojom.HttpDelegate_OnRequestComplete_ParamsSpec, 'drivefs.mojom.HttpDelegate_OnRequestComplete_Params', [
      mojo.internal.StructField('status', 0, 0, drivefs.mojom.HttpCompletionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  getRequestBody(request_body) {
    return this.$.getRequestBody(request_body);
  }
  onReceiveResponse(response) {
    return this.$.onReceiveResponse(response);
  }
  onReceiveBody(response_body) {
    return this.$.onReceiveBody(response_body);
  }
  onRequestComplete(status) {
    return this.$.onRequestComplete(status);
  }
};

drivefs.mojom.HttpDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HttpDelegate', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getRequestBody(request_body) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      drivefs.mojom.HttpDelegate_GetRequestBody_ParamsSpec,
      null,
      [request_body],
      false);
  }

  onReceiveResponse(response) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      drivefs.mojom.HttpDelegate_OnReceiveResponse_ParamsSpec,
      null,
      [response],
      false);
  }

  onReceiveBody(response_body) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      drivefs.mojom.HttpDelegate_OnReceiveBody_ParamsSpec,
      null,
      [response_body],
      false);
  }

  onRequestComplete(status) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      drivefs.mojom.HttpDelegate_OnRequestComplete_ParamsSpec,
      null,
      [status],
      false);
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

drivefs.mojom.HttpDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HttpDelegate', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.HttpDelegate_GetRequestBody_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.HttpDelegate_OnReceiveResponse_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.HttpDelegate_OnReceiveBody_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.HttpDelegate_OnRequestComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.HttpDelegate_GetRequestBody_ParamsSpec.$.structSpec);
          const result = this.impl.getRequestBody(params.request_body);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.HttpDelegate_OnReceiveResponse_ParamsSpec.$.structSpec);
          const result = this.impl.onReceiveResponse(params.response);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.HttpDelegate_OnReceiveBody_ParamsSpec.$.structSpec);
          const result = this.impl.onReceiveBody(params.response_body);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.HttpDelegate_OnRequestComplete_ParamsSpec.$.structSpec);
          const result = this.impl.onRequestComplete(params.status);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

drivefs.mojom.HttpDelegateReceiver = drivefs.mojom.HttpDelegateReceiver;

drivefs.mojom.HttpDelegatePtr = drivefs.mojom.HttpDelegateRemote;
drivefs.mojom.HttpDelegateRequest = drivefs.mojom.HttpDelegatePendingReceiver;

