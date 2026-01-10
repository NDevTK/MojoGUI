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
drivefs.mojom.CancelUploadModeSpec = { $: mojo.internal.Enum() };

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
drivefs.mojom.DocsOfflineEnableStatusSpec = { $: mojo.internal.Enum() };

// Enum: CreateOrDelete
drivefs.mojom.CreateOrDelete = {
  kCreated: 0,
  kDeleted: 1,
};
drivefs.mojom.CreateOrDeleteSpec = { $: mojo.internal.Enum() };

// Enum: CSESupport
drivefs.mojom.CSESupport = {
  kListing: 0,
};
drivefs.mojom.CSESupportSpec = { $: mojo.internal.Enum() };

// Enum: AccessTokenStatus
drivefs.mojom.AccessTokenStatus = {
  kSuccess: 0,
  kTransientError: 1,
  kAuthError: 2,
};
drivefs.mojom.AccessTokenStatusSpec = { $: mojo.internal.Enum() };

// Enum: MirrorSyncStatus
drivefs.mojom.MirrorSyncStatus = {
  kSuccess: 0,
  kFailure: 1,
  kFeatureNotEnabled: 2,
};
drivefs.mojom.MirrorSyncStatusSpec = { $: mojo.internal.Enum() };

// Enum: MirrorPathStatus
drivefs.mojom.MirrorPathStatus = {
  kStart: 0,
  kStop: 1,
};
drivefs.mojom.MirrorPathStatusSpec = { $: mojo.internal.Enum() };

// Enum: DialogResult
drivefs.mojom.DialogResult = {
  kNotDisplayed: 0,
  kAccept: 1,
  kReject: 2,
  kDismiss: 3,
};
drivefs.mojom.DialogResultSpec = { $: mojo.internal.Enum() };

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
drivefs.mojom.FileErrorSpec = { $: mojo.internal.Enum() };

// Enum: Type
drivefs.mojom.Type = {
  kCantUploadStorageFull: 0,
  kPinningFailedDiskFull: 1,
  kCantUploadStorageFullOrganization: 2,
  kCantUploadSharedDriveStorageFull: 3,
};
drivefs.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Enum: Type
drivefs.mojom.Type = {
  kEnableDocsOffline: 0,
};
drivefs.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Enum: Type
drivefs.mojom.Type = {
  kFile: 0,
  kHosted: 1,
  kDirectory: 2,
};
drivefs.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Enum: CanPinStatus
drivefs.mojom.CanPinStatus = {
  kOk: 0,
  kDisabled: 1,
};
drivefs.mojom.CanPinStatusSpec = { $: mojo.internal.Enum() };

// Enum: LookupStatus
drivefs.mojom.LookupStatus = {
  kOk: 0,
  kNotFound: 1,
  kPermissionDenied: 2,
};
drivefs.mojom.LookupStatusSpec = { $: mojo.internal.Enum() };

// Enum: ItemEventReason
drivefs.mojom.ItemEventReason = {
  kTransfer: 0,
  kPin: 1,
};
drivefs.mojom.ItemEventReasonSpec = { $: mojo.internal.Enum() };

// Enum: State
drivefs.mojom.State = {
  kQueued: 0,
  kInProgress: 1,
  kCompleted: 2,
  kFailed: 3,
  kCancelledAndDeleted: 4,
  kCancelledAndTrashed: 5,
};
drivefs.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: Type
drivefs.mojom.Type = {
  kCreate: 0,
  kDelete: 1,
  kModify: 2,
};
drivefs.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Enum: QuerySource
drivefs.mojom.QuerySource = {
  kLocalOnly: 0,
  kCloudOnly: 1,
  kLocalAndCloud: 2,
};
drivefs.mojom.QuerySourceSpec = { $: mojo.internal.Enum() };

// Enum: SortField
drivefs.mojom.SortField = {
  kNone: 0,
  kLastModified: 1,
  kLastViewedByMe: 2,
  kFileSize: 3,
  kSharedWithMe: 4,
};
drivefs.mojom.SortFieldSpec = { $: mojo.internal.Enum() };

// Enum: SortDirection
drivefs.mojom.SortDirection = {
  kAscending: 0,
  kDescending: 1,
};
drivefs.mojom.SortDirectionSpec = { $: mojo.internal.Enum() };

// Enum: DateComparisonOperator
drivefs.mojom.DateComparisonOperator = {
  kLessOrEqual: 0,
  kLessThan: 1,
  kEqual: 2,
  kGreaterThan: 3,
  kGreaterOrEqual: 4,
};
drivefs.mojom.DateComparisonOperatorSpec = { $: mojo.internal.Enum() };

// Enum: QueryKind
drivefs.mojom.QueryKind = {
  kRegular: 0,
  kQuickAccess: 1,
};
drivefs.mojom.QueryKindSpec = { $: mojo.internal.Enum() };

// Enum: UserType
drivefs.mojom.UserType = {
  kUnmanaged: 0,
  kOrganization: 1,
};
drivefs.mojom.UserTypeSpec = { $: mojo.internal.Enum() };

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
drivefs.mojom.NetErrorSpec = { $: mojo.internal.Enum() };

// Enum: MirrorItemSyncingStatus
drivefs.mojom.MirrorItemSyncingStatus = {
  kUnknown: 0,
  kSynced: 1,
  kSyncing: 2,
  kSyncError: 3,
};
drivefs.mojom.MirrorItemSyncingStatusSpec = { $: mojo.internal.Enum() };

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
drivefs.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Union: FilePathOrError
drivefs.mojom.FilePathOrErrorSpec = { $: mojo.internal.Union(
    'drivefs.mojom.FilePathOrError', {
      'error': {
        'ordinal': 0,
        'type': drivefs.mojom.FileErrorSpec,
      }},
      'path': {
        'ordinal': 1,
        'type': mojo_base.mojom.FilePathSpec,
      }},
    })
};

// Struct: DriveFsConfiguration
drivefs.mojom.DriveFsConfigurationSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsConfiguration',
      packedSize: 40,
      fields: [
        { name: 'user_email', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'access_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
        { name: 'enable_metrics', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 2 },
        { name: 'lost_and_found_directory_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 3 },
        { name: 'enable_experimental_mirroring', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 4 },
        { name: 'enable_verbose_logging', packedOffset: 16, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 5 },
        { name: 'cse_support', packedOffset: 20, packedBitOffset: 0, type: drivefs.mojom.CSESupportSpec, nullable: false, minVersion: 7 },
        { name: 'fetch_modifying_user_metadata', packedOffset: 16, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 8 },
        { name: 'fetch_sharing_user_metadata', packedOffset: 16, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 8 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 1, packedSize: 24}, {version: 2, packedSize: 32}, {version: 3, packedSize: 40}, {version: 4, packedSize: 40}, {version: 5, packedSize: 40}, {version: 7, packedSize: 40}, {version: 8, packedSize: 40}]
    }
  }
};

// Struct: AccessToken
drivefs.mojom.AccessTokenSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.AccessToken',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'expiry_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DriveError
drivefs.mojom.DriveErrorSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveError',
      packedSize: 16,
      fields: [
        { name: 'kCantUploadStorageFull', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DialogReason
drivefs.mojom.DialogReasonSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DialogReason',
      packedSize: 16,
      fields: [
        { name: 'kEnableDocsOffline', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: UserInfo
drivefs.mojom.UserInfoSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.UserInfo',
      packedSize: 16,
      fields: [
        { name: 'display_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FileMetadata
drivefs.mojom.FileMetadataSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.FileMetadata',
      packedSize: 16,
      fields: [
        { name: 'kFile', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ShortcutDetails
drivefs.mojom.ShortcutDetailsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.ShortcutDetails',
      packedSize: 24,
      fields: [
        { name: 'target_stable_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'kUnknown', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ImageMetadata
drivefs.mojom.ImageMetadataSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.ImageMetadata',
      packedSize: 24,
      fields: [
        { name: 'height', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'width', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'rotation', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Capabilities
drivefs.mojom.CapabilitiesSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.Capabilities',
      packedSize: 16,
      fields: [
        { name: 'can_share', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'can_copy', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'can_delete', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'can_rename', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'can_add_children', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FolderFeature
drivefs.mojom.FolderFeatureSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.FolderFeature',
      packedSize: 16,
      fields: [
        { name: 'is_machine_root', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_arbitrary_sync_folder', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_external_media', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: QuickAccess
drivefs.mojom.QuickAccessSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.QuickAccess',
      packedSize: 16,
      fields: [
        { name: 'score', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SharedDriveQuota
drivefs.mojom.SharedDriveQuotaSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.SharedDriveQuota',
      packedSize: 24,
      fields: [
        { name: 'quota_bytes_used_in_drive', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'individual_quota_bytes_total', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ItemEvent
drivefs.mojom.ItemEventSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.ItemEvent',
      packedSize: 16,
      fields: [
        { name: 'kQueued', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ProgressEvent
drivefs.mojom.ProgressEventSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.ProgressEvent',
      packedSize: 40,
      fields: [
        { name: 'stable_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'progress', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'file_path', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 1, packedSize: 40}]
    }
  }
};

// Struct: SyncingStatus
drivefs.mojom.SyncingStatusSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.SyncingStatus',
      packedSize: 16,
      fields: [
        { name: 'item_events', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(drivefs.mojom.ItemEventSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FileChange
drivefs.mojom.FileChangeSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.FileChange',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'kCreate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: QueryParameters
drivefs.mojom.QueryParametersSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.QueryParameters',
      packedSize: 16,
      fields: [
        { name: 'kLocalOnly', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: QueryItem
drivefs.mojom.QueryItemSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.QueryItem',
      packedSize: 24,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.FileMetadataSpec, nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FetchChangeLogOptions
drivefs.mojom.FetchChangeLogOptionsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.FetchChangeLogOptions',
      packedSize: 24,
      fields: [
        { name: 'change_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'team_drive_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PooledQuotaUsage
drivefs.mojom.PooledQuotaUsageSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.PooledQuotaUsage',
      packedSize: 40,
      fields: [
        { name: 'user_type', packedOffset: 24, packedBitOffset: 0, type: drivefs.mojom.UserTypeSpec, nullable: false, minVersion: 0 },
        { name: 'used_user_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'total_user_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'organization_limit_exceeded', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'organization_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: QuotaUsage
drivefs.mojom.QuotaUsageSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.QuotaUsage',
      packedSize: 24,
      fields: [
        { name: 'free_cloud_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'total_cloud_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: HttpHeader
drivefs.mojom.HttpHeaderSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.HttpHeader',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: HttpRequest
drivefs.mojom.HttpRequestSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.HttpRequest',
      packedSize: 40,
      fields: [
        { name: 'method', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'headers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(drivefs.mojom.HttpHeaderSpec, false), nullable: false, minVersion: 0 },
        { name: 'request_body_bytes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: HttpResponse
drivefs.mojom.HttpResponseSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.HttpResponse',
      packedSize: 24,
      fields: [
        { name: 'response_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'headers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(drivefs.mojom.HttpHeaderSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: HttpCompletionStatus
drivefs.mojom.HttpCompletionStatusSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.HttpCompletionStatus',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: drivefs.mojom.NetErrorSpec, nullable: false, minVersion: 0 },
        { name: 'response_body_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DocsOfflineStats
drivefs.mojom.DocsOfflineStatsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DocsOfflineStats',
      packedSize: 16,
      fields: [
        { name: 'total', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'available_offline', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: MirrorSyncError
drivefs.mojom.MirrorSyncErrorSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.MirrorSyncError',
      packedSize: 16,
      fields: [
        { name: 'kUnknown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: MirrorSyncErrorList
drivefs.mojom.MirrorSyncErrorListSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.MirrorSyncErrorList',
      packedSize: 16,
      fields: [
        { name: 'errors', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(drivefs.mojom.MirrorSyncErrorSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: DriveFsBootstrap
drivefs.mojom.DriveFsBootstrap = {};

drivefs.mojom.DriveFsBootstrap_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsBootstrap_Init_Params',
      packedSize: 32,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.DriveFsConfigurationSpec, nullable: false, minVersion: 0 },
        { name: 'drive_fs', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(drivefs.mojom.DriveFsRemote), nullable: false, minVersion: 0 },
        { name: 'delegate', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(drivefs.mojom.DriveFsDelegateRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

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
      drivefs.mojom.DriveFsBootstrap_Init_ParamsSpec,
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
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.DriveFsConfigurationSpec, nullable: false, minVersion: 0 },
        { name: 'drive_fs', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(drivefs.mojom.DriveFsRemote), nullable: false, minVersion: 0 },
        { name: 'delegate', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(drivefs.mojom.DriveFsDelegateRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
drivefs.mojom.DriveFsBootstrapPtr = drivefs.mojom.DriveFsBootstrapRemote;
drivefs.mojom.DriveFsBootstrapRequest = drivefs.mojom.DriveFsBootstrapPendingReceiver;


// Interface: DriveFs
drivefs.mojom.DriveFs = {};

drivefs.mojom.DriveFs_GetMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_GetMetadata_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_SetPinned_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_SetPinned_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'pinned', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

drivefs.mojom.DriveFs_UpdateNetworkState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_UpdateNetworkState_Params',
      packedSize: 16,
      fields: [
        { name: 'pause_syncing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_offline', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_ResetCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_ResetCache_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFs_GetThumbnail_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_GetThumbnail_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'crop_to_square', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

drivefs.mojom.DriveFs_CopyFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_CopyFile_Params',
      packedSize: 24,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'target', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

drivefs.mojom.DriveFs_StartSearchQuery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_StartSearchQuery_Params',
      packedSize: 24,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(drivefs.mojom.SearchQueryRemote), nullable: false, minVersion: 0 },
        { name: 'query_params', packedOffset: 8, packedBitOffset: 0, type: drivefs.mojom.QueryParametersSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

drivefs.mojom.DriveFs_FetchAllChangeLogs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_FetchAllChangeLogs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFs_FetchChangeLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_FetchChangeLog_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(drivefs.mojom.FetchChangeLogOptionsSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_SendNativeMessageRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_SendNativeMessageRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_SetStartupArguments_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_SetStartupArguments_Params',
      packedSize: 16,
      fields: [
        { name: 'arguments', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_GetStartupArguments_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_GetStartupArguments_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFs_SetTracingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_SetTracingEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_SetNetworkingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_SetNetworkingEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_ForcePauseSyncing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_ForcePauseSyncing_Params',
      packedSize: 16,
      fields: [
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_DumpAccountSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_DumpAccountSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFs_LoadAccountSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_LoadAccountSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFs_CreateNativeHostSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_CreateNativeHostSession_Params',
      packedSize: 32,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.ExtensionConnectionParamsSpec, nullable: false, minVersion: 0 },
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(drivefs.mojom.NativeMessagingHostRemote), nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(drivefs.mojom.NativeMessagingPortRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

drivefs.mojom.DriveFs_LocateFilesByItemIds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_LocateFilesByItemIds_Params',
      packedSize: 16,
      fields: [
        { name: 'item_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_GetQuotaUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_GetQuotaUsage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFs_ToggleMirroring_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_ToggleMirroring_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_ToggleSyncForPath_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_ToggleSyncForPath_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: drivefs.mojom.MirrorPathStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

drivefs.mojom.DriveFs_GetSyncingPaths_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_GetSyncingPaths_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFs_PollHostedFilePinStates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_PollHostedFilePinStates_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFs_GetPooledQuotaUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_GetPooledQuotaUsage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFs_SetPinnedByStableId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_SetPinnedByStableId_Params',
      packedSize: 24,
      fields: [
        { name: 'stable_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'pinned', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

drivefs.mojom.DriveFs_GetMetadataByStableId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_GetMetadataByStableId_Params',
      packedSize: 16,
      fields: [
        { name: 'stable_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_CancelUploadByPath_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_CancelUploadByPath_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'cancel_mode', packedOffset: 8, packedBitOffset: 0, type: drivefs.mojom.CancelUploadModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

drivefs.mojom.DriveFs_SetDocsOfflineEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_SetDocsOfflineEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_GetOfflineFilesSpaceUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_GetOfflineFilesSpaceUsage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFs_ClearOfflineFiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_ClearOfflineFiles_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFs_ImmediatelyUpload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_ImmediatelyUpload_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_UpdateFromPairedDoc_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_UpdateFromPairedDoc_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_GetItemFromCloudStore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_GetItemFromCloudStore_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_GetDocsOfflineStats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_GetDocsOfflineStats_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFs_GetMirrorSyncStatusForFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_GetMirrorSyncStatusForFile_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_GetMirrorSyncStatusForDirectory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs_GetMirrorSyncStatusForDirectory_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      drivefs.mojom.DriveFs_GetMetadata_ParamsSpec,
      drivefs.mojom.DriveFs_GetMetadata_ResponseParamsSpec,
      [path]);
  }

  setPinned(path, pinned) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      drivefs.mojom.DriveFs_SetPinned_ParamsSpec,
      drivefs.mojom.DriveFs_SetPinned_ResponseParamsSpec,
      [path, pinned]);
  }

  updateNetworkState(pause_syncing, is_offline) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      drivefs.mojom.DriveFs_UpdateNetworkState_ParamsSpec,
      null,
      [pause_syncing, is_offline]);
  }

  resetCache() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      drivefs.mojom.DriveFs_ResetCache_ParamsSpec,
      drivefs.mojom.DriveFs_ResetCache_ResponseParamsSpec,
      []);
  }

  getThumbnail(path, crop_to_square) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      drivefs.mojom.DriveFs_GetThumbnail_ParamsSpec,
      drivefs.mojom.DriveFs_GetThumbnail_ResponseParamsSpec,
      [path, crop_to_square]);
  }

  copyFile(source, target) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      drivefs.mojom.DriveFs_CopyFile_ParamsSpec,
      drivefs.mojom.DriveFs_CopyFile_ResponseParamsSpec,
      [source, target]);
  }

  startSearchQuery(query, query_params) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      drivefs.mojom.DriveFs_StartSearchQuery_ParamsSpec,
      null,
      [query, query_params]);
  }

  fetchAllChangeLogs() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      drivefs.mojom.DriveFs_FetchAllChangeLogs_ParamsSpec,
      null,
      []);
  }

  fetchChangeLog(options) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      drivefs.mojom.DriveFs_FetchChangeLog_ParamsSpec,
      null,
      [options]);
  }

  sendNativeMessageRequest(request) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      drivefs.mojom.DriveFs_SendNativeMessageRequest_ParamsSpec,
      drivefs.mojom.DriveFs_SendNativeMessageRequest_ResponseParamsSpec,
      [request]);
  }

  setStartupArguments(arguments) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      drivefs.mojom.DriveFs_SetStartupArguments_ParamsSpec,
      drivefs.mojom.DriveFs_SetStartupArguments_ResponseParamsSpec,
      [arguments]);
  }

  getStartupArguments() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      drivefs.mojom.DriveFs_GetStartupArguments_ParamsSpec,
      drivefs.mojom.DriveFs_GetStartupArguments_ResponseParamsSpec,
      []);
  }

  setTracingEnabled(enabled) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      drivefs.mojom.DriveFs_SetTracingEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  setNetworkingEnabled(enabled) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      drivefs.mojom.DriveFs_SetNetworkingEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  forcePauseSyncing(enable) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      drivefs.mojom.DriveFs_ForcePauseSyncing_ParamsSpec,
      null,
      [enable]);
  }

  dumpAccountSettings() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      drivefs.mojom.DriveFs_DumpAccountSettings_ParamsSpec,
      null,
      []);
  }

  loadAccountSettings() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      drivefs.mojom.DriveFs_LoadAccountSettings_ParamsSpec,
      null,
      []);
  }

  createNativeHostSession(params, host, port) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      drivefs.mojom.DriveFs_CreateNativeHostSession_ParamsSpec,
      null,
      [params, host, port]);
  }

  locateFilesByItemIds(item_ids) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      drivefs.mojom.DriveFs_LocateFilesByItemIds_ParamsSpec,
      drivefs.mojom.DriveFs_LocateFilesByItemIds_ResponseParamsSpec,
      [item_ids]);
  }

  getQuotaUsage() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      drivefs.mojom.DriveFs_GetQuotaUsage_ParamsSpec,
      drivefs.mojom.DriveFs_GetQuotaUsage_ResponseParamsSpec,
      []);
  }

  toggleMirroring(enabled) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      drivefs.mojom.DriveFs_ToggleMirroring_ParamsSpec,
      drivefs.mojom.DriveFs_ToggleMirroring_ResponseParamsSpec,
      [enabled]);
  }

  toggleSyncForPath(path, status) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      drivefs.mojom.DriveFs_ToggleSyncForPath_ParamsSpec,
      drivefs.mojom.DriveFs_ToggleSyncForPath_ResponseParamsSpec,
      [path, status]);
  }

  getSyncingPaths() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      drivefs.mojom.DriveFs_GetSyncingPaths_ParamsSpec,
      drivefs.mojom.DriveFs_GetSyncingPaths_ResponseParamsSpec,
      []);
  }

  pollHostedFilePinStates() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      drivefs.mojom.DriveFs_PollHostedFilePinStates_ParamsSpec,
      null,
      []);
  }

  getPooledQuotaUsage() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      drivefs.mojom.DriveFs_GetPooledQuotaUsage_ParamsSpec,
      drivefs.mojom.DriveFs_GetPooledQuotaUsage_ResponseParamsSpec,
      []);
  }

  setPinnedByStableId(stable_id, pinned) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      drivefs.mojom.DriveFs_SetPinnedByStableId_ParamsSpec,
      drivefs.mojom.DriveFs_SetPinnedByStableId_ResponseParamsSpec,
      [stable_id, pinned]);
  }

  getMetadataByStableId(stable_id) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      drivefs.mojom.DriveFs_GetMetadataByStableId_ParamsSpec,
      drivefs.mojom.DriveFs_GetMetadataByStableId_ResponseParamsSpec,
      [stable_id]);
  }

  cancelUploadByPath(path, cancel_mode) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      drivefs.mojom.DriveFs_CancelUploadByPath_ParamsSpec,
      null,
      [path, cancel_mode]);
  }

  setDocsOfflineEnabled(enabled) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      drivefs.mojom.DriveFs_SetDocsOfflineEnabled_ParamsSpec,
      drivefs.mojom.DriveFs_SetDocsOfflineEnabled_ResponseParamsSpec,
      [enabled]);
  }

  getOfflineFilesSpaceUsage() {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      drivefs.mojom.DriveFs_GetOfflineFilesSpaceUsage_ParamsSpec,
      drivefs.mojom.DriveFs_GetOfflineFilesSpaceUsage_ResponseParamsSpec,
      []);
  }

  clearOfflineFiles() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      drivefs.mojom.DriveFs_ClearOfflineFiles_ParamsSpec,
      drivefs.mojom.DriveFs_ClearOfflineFiles_ResponseParamsSpec,
      []);
  }

  immediatelyUpload(path) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      drivefs.mojom.DriveFs_ImmediatelyUpload_ParamsSpec,
      drivefs.mojom.DriveFs_ImmediatelyUpload_ResponseParamsSpec,
      [path]);
  }

  updateFromPairedDoc(path) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      drivefs.mojom.DriveFs_UpdateFromPairedDoc_ParamsSpec,
      drivefs.mojom.DriveFs_UpdateFromPairedDoc_ResponseParamsSpec,
      [path]);
  }

  getItemFromCloudStore(path) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      drivefs.mojom.DriveFs_GetItemFromCloudStore_ParamsSpec,
      drivefs.mojom.DriveFs_GetItemFromCloudStore_ResponseParamsSpec,
      [path]);
  }

  getDocsOfflineStats() {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      drivefs.mojom.DriveFs_GetDocsOfflineStats_ParamsSpec,
      drivefs.mojom.DriveFs_GetDocsOfflineStats_ResponseParamsSpec,
      []);
  }

  getMirrorSyncStatusForFile(path) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      drivefs.mojom.DriveFs_GetMirrorSyncStatusForFile_ParamsSpec,
      drivefs.mojom.DriveFs_GetMirrorSyncStatusForFile_ResponseParamsSpec,
      [path]);
  }

  getMirrorSyncStatusForDirectory(path) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      drivefs.mojom.DriveFs_GetMirrorSyncStatusForDirectory_ParamsSpec,
      drivefs.mojom.DriveFs_GetMirrorSyncStatusForDirectory_ResponseParamsSpec,
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
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_GetMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetMetadata_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: drivefs.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.FileMetadataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'pinned', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

drivefs.mojom.DriveFs_SetPinned_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.SetPinned_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateNetworkState
drivefs.mojom.DriveFs_UpdateNetworkState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.UpdateNetworkState_Params',
      packedSize: 16,
      fields: [
        { name: 'pause_syncing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_offline', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFs_ResetCache_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.ResetCache_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'crop_to_square', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

drivefs.mojom.DriveFs_GetThumbnail_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetThumbnail_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'thumbnail', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'target', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

drivefs.mojom.DriveFs_CopyFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.CopyFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(drivefs.mojom.SearchQueryRemote), nullable: false, minVersion: 0 },
        { name: 'query_params', packedOffset: 8, packedBitOffset: 0, type: drivefs.mojom.QueryParametersSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(drivefs.mojom.FetchChangeLogOptionsSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_SendNativeMessageRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.SendNativeMessageRequest_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: drivefs.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'arguments', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_SetStartupArguments_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.SetStartupArguments_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFs_GetStartupArguments_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetStartupArguments_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'arguments', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.ExtensionConnectionParamsSpec, nullable: false, minVersion: 0 },
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(drivefs.mojom.NativeMessagingHostRemote), nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(drivefs.mojom.NativeMessagingPortRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'item_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_LocateFilesByItemIds_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.LocateFilesByItemIds_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(drivefs.mojom.FilePathOrErrorSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFs_GetQuotaUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetQuotaUsage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: drivefs.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
        { name: 'quota', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.QuotaUsageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_ToggleMirroring_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.ToggleMirroring_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.MirrorSyncStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: drivefs.mojom.MirrorPathStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

drivefs.mojom.DriveFs_ToggleSyncForPath_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.ToggleSyncForPath_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFs_GetSyncingPaths_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetSyncingPaths_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: drivefs.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
        { name: 'paths', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFs_GetPooledQuotaUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetPooledQuotaUsage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: drivefs.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
        { name: 'quota', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.PooledQuotaUsageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'stable_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'pinned', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

drivefs.mojom.DriveFs_SetPinnedByStableId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.SetPinnedByStableId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'stable_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_GetMetadataByStableId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetMetadataByStableId_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: drivefs.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.FileMetadataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'cancel_mode', packedOffset: 8, packedBitOffset: 0, type: drivefs.mojom.CancelUploadModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_SetDocsOfflineEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.SetDocsOfflineEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 4, packedBitOffset: 0, type: drivefs.mojom.DocsOfflineEnableStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFs_GetOfflineFilesSpaceUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetOfflineFilesSpaceUsage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: drivefs.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
        { name: 'space_used', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFs_ClearOfflineFiles_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.ClearOfflineFiles_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_ImmediatelyUpload_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.ImmediatelyUpload_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_UpdateFromPairedDoc_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.UpdateFromPairedDoc_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_GetItemFromCloudStore_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetItemFromCloudStore_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFs_GetDocsOfflineStats_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetDocsOfflineStats_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: drivefs.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
        { name: 'counts', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.DocsOfflineStatsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_GetMirrorSyncStatusForFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetMirrorSyncStatusForFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.MirrorItemSyncingStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFs_GetMirrorSyncStatusForDirectory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFs.GetMirrorSyncStatusForDirectory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.MirrorItemSyncingStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
drivefs.mojom.DriveFsPtr = drivefs.mojom.DriveFsRemote;
drivefs.mojom.DriveFsRequest = drivefs.mojom.DriveFsPendingReceiver;


// Interface: DriveFsDelegate
drivefs.mojom.DriveFsDelegate = {};

drivefs.mojom.DriveFsDelegate_GetAccessToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate_GetAccessToken_Params',
      packedSize: 32,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'scopes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_OnMounted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate_OnMounted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_OnMountFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate_OnMountFailed_Params',
      packedSize: 16,
      fields: [
        { name: 'retry_delay', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_OnUnmounted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate_OnUnmounted_Params',
      packedSize: 16,
      fields: [
        { name: 'retry_delay', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_OnSyncingStatusUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate_OnSyncingStatusUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.SyncingStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_OnFilesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate_OnFilesChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'changes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(drivefs.mojom.FileChangeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate_OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.DriveErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_OnTeamDrivesListReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate_OnTeamDrivesListReady_Params',
      packedSize: 16,
      fields: [
        { name: 'team_drive_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_OnTeamDriveChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate_OnTeamDriveChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'team_drive_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'change_type', packedOffset: 8, packedBitOffset: 0, type: drivefs.mojom.CreateOrDeleteSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_OnHeartbeat_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate_OnHeartbeat_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_ConnectToExtension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate_ConnectToExtension_Params',
      packedSize: 32,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.ExtensionConnectionParamsSpec, nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(drivefs.mojom.NativeMessagingPortRemote), nullable: false, minVersion: 0 },
        { name: 'host', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(drivefs.mojom.NativeMessagingHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_DisplayConfirmDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate_DisplayConfirmDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.DialogReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_ExecuteHttpRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate_ExecuteHttpRequest_Params',
      packedSize: 24,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.HttpRequestSpec, nullable: false, minVersion: 0 },
        { name: 'delegate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(drivefs.mojom.HttpDelegateRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_GetMachineRootID_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate_GetMachineRootID_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_PersistMachineRootID_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate_PersistMachineRootID_Params',
      packedSize: 16,
      fields: [
        { name: 'doc_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_OnMirrorSyncingStatusUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate_OnMirrorSyncingStatusUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.SyncingStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_OnItemProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate_OnItemProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'progress_event', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.ProgressEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_GetAccessTokenWithExpiry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate_GetAccessTokenWithExpiry_Params',
      packedSize: 32,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'scopes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_OnNotificationReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate_OnNotificationReceived_Params',
      packedSize: 24,
      fields: [
        { name: 'notification', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.DriveFsNotificationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_OnMirrorSyncError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate_OnMirrorSyncError_Params',
      packedSize: 16,
      fields: [
        { name: 'error_list', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.MirrorSyncErrorListSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      drivefs.mojom.DriveFsDelegate_GetAccessToken_ParamsSpec,
      drivefs.mojom.DriveFsDelegate_GetAccessToken_ResponseParamsSpec,
      [client_id, app_id, scopes]);
  }

  onMounted() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnMounted_ParamsSpec,
      null,
      []);
  }

  onMountFailed(retry_delay) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnMountFailed_ParamsSpec,
      null,
      [retry_delay]);
  }

  onUnmounted(retry_delay) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnUnmounted_ParamsSpec,
      null,
      [retry_delay]);
  }

  onSyncingStatusUpdate(status) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnSyncingStatusUpdate_ParamsSpec,
      null,
      [status]);
  }

  onFilesChanged(changes) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnFilesChanged_ParamsSpec,
      null,
      [changes]);
  }

  onError(error) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnError_ParamsSpec,
      null,
      [error]);
  }

  onTeamDrivesListReady(team_drive_ids) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnTeamDrivesListReady_ParamsSpec,
      null,
      [team_drive_ids]);
  }

  onTeamDriveChanged(team_drive_id, change_type) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnTeamDriveChanged_ParamsSpec,
      null,
      [team_drive_id, change_type]);
  }

  onHeartbeat() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnHeartbeat_ParamsSpec,
      null,
      []);
  }

  connectToExtension(params, port, host) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      drivefs.mojom.DriveFsDelegate_ConnectToExtension_ParamsSpec,
      drivefs.mojom.DriveFsDelegate_ConnectToExtension_ResponseParamsSpec,
      [params, port, host]);
  }

  displayConfirmDialog(reason) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      drivefs.mojom.DriveFsDelegate_DisplayConfirmDialog_ParamsSpec,
      drivefs.mojom.DriveFsDelegate_DisplayConfirmDialog_ResponseParamsSpec,
      [reason]);
  }

  executeHttpRequest(request, delegate) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      drivefs.mojom.DriveFsDelegate_ExecuteHttpRequest_ParamsSpec,
      null,
      [request, delegate]);
  }

  getMachineRootID() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      drivefs.mojom.DriveFsDelegate_GetMachineRootID_ParamsSpec,
      drivefs.mojom.DriveFsDelegate_GetMachineRootID_ResponseParamsSpec,
      []);
  }

  persistMachineRootID(doc_id) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      drivefs.mojom.DriveFsDelegate_PersistMachineRootID_ParamsSpec,
      null,
      [doc_id]);
  }

  onMirrorSyncingStatusUpdate(status) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnMirrorSyncingStatusUpdate_ParamsSpec,
      null,
      [status]);
  }

  onItemProgress(progress_event) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnItemProgress_ParamsSpec,
      null,
      [progress_event]);
  }

  getAccessTokenWithExpiry(client_id, app_id, scopes) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      drivefs.mojom.DriveFsDelegate_GetAccessTokenWithExpiry_ParamsSpec,
      drivefs.mojom.DriveFsDelegate_GetAccessTokenWithExpiry_ResponseParamsSpec,
      [client_id, app_id, scopes]);
  }

  onNotificationReceived(notification) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnNotificationReceived_ParamsSpec,
      null,
      [notification]);
  }

  onMirrorSyncError(error_list) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      drivefs.mojom.DriveFsDelegate_OnMirrorSyncError_ParamsSpec,
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
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'scopes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_GetAccessToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.GetAccessToken_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: drivefs.mojom.AccessTokenStatusSpec, nullable: false, minVersion: 0 },
        { name: 'access_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'retry_delay', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'retry_delay', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.SyncingStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'changes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(drivefs.mojom.FileChangeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.DriveErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'team_drive_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'team_drive_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'change_type', packedOffset: 8, packedBitOffset: 0, type: drivefs.mojom.CreateOrDeleteSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.ExtensionConnectionParamsSpec, nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(drivefs.mojom.NativeMessagingPortRemote), nullable: false, minVersion: 0 },
        { name: 'host', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(drivefs.mojom.NativeMessagingHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_ConnectToExtension_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.ConnectToExtension_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.ExtensionConnectionStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.DialogReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_DisplayConfirmDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.DisplayConfirmDialog_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.DialogResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.HttpRequestSpec, nullable: false, minVersion: 0 },
        { name: 'delegate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(drivefs.mojom.HttpDelegateRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_GetMachineRootID_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.GetMachineRootID_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'doc_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'doc_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.SyncingStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'progress_event', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.ProgressEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'scopes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

drivefs.mojom.DriveFsDelegate_GetAccessTokenWithExpiry_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.GetAccessTokenWithExpiry_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: drivefs.mojom.AccessTokenStatusSpec, nullable: false, minVersion: 0 },
        { name: 'access_token', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.AccessTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnNotificationReceived
drivefs.mojom.DriveFsDelegate_OnNotificationReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.DriveFsDelegate.OnNotificationReceived_Params',
      packedSize: 24,
      fields: [
        { name: 'notification', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.DriveFsNotificationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'error_list', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.MirrorSyncErrorListSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
drivefs.mojom.DriveFsDelegatePtr = drivefs.mojom.DriveFsDelegateRemote;
drivefs.mojom.DriveFsDelegateRequest = drivefs.mojom.DriveFsDelegatePendingReceiver;


// Interface: SearchQuery
drivefs.mojom.SearchQuery = {};

drivefs.mojom.SearchQuery_GetNextPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.SearchQuery_GetNextPage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      drivefs.mojom.SearchQuery_GetNextPage_ParamsSpec,
      drivefs.mojom.SearchQuery_GetNextPage_ResponseParamsSpec,
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

drivefs.mojom.SearchQuery_GetNextPage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.SearchQuery.GetNextPage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: drivefs.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(drivefs.mojom.QueryItemSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
drivefs.mojom.SearchQueryPtr = drivefs.mojom.SearchQueryRemote;
drivefs.mojom.SearchQueryRequest = drivefs.mojom.SearchQueryPendingReceiver;


// Interface: HttpDelegate
drivefs.mojom.HttpDelegate = {};

drivefs.mojom.HttpDelegate_GetRequestBody_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.HttpDelegate_GetRequestBody_Params',
      packedSize: 16,
      fields: [
        { name: 'request_body', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.HttpDelegate_OnReceiveResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.HttpDelegate_OnReceiveResponse_Params',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.HttpResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.HttpDelegate_OnReceiveBody_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.HttpDelegate_OnReceiveBody_Params',
      packedSize: 16,
      fields: [
        { name: 'response_body', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

drivefs.mojom.HttpDelegate_OnRequestComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.HttpDelegate_OnRequestComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.HttpCompletionStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      drivefs.mojom.HttpDelegate_GetRequestBody_ParamsSpec,
      null,
      [request_body]);
  }

  onReceiveResponse(response) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      drivefs.mojom.HttpDelegate_OnReceiveResponse_ParamsSpec,
      null,
      [response]);
  }

  onReceiveBody(response_body) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      drivefs.mojom.HttpDelegate_OnReceiveBody_ParamsSpec,
      null,
      [response_body]);
  }

  onRequestComplete(status) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      drivefs.mojom.HttpDelegate_OnRequestComplete_ParamsSpec,
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
        { name: 'request_body', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.HttpResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'response_body', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: drivefs.mojom.HttpCompletionStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
drivefs.mojom.HttpDelegatePtr = drivefs.mojom.HttpDelegateRemote;
drivefs.mojom.HttpDelegateRequest = drivefs.mojom.HttpDelegatePendingReceiver;

