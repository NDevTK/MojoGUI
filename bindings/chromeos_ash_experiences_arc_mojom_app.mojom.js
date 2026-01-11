// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/app.mojom
// Module: arc.mojom

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.WindowSizeTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.InstallPrioritySpec = { $: mojo.internal.Enum() };
arc.mojom.ShowPackageInfoPageSpec = { $: mojo.internal.Enum() };
arc.mojom.AppDiscoveryRequestStateSpec = { $: mojo.internal.Enum() };
arc.mojom.AppShortcutItemTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.PaiFlowStateSpec = { $: mojo.internal.Enum() };
arc.mojom.AppCategorySpec = { $: mojo.internal.Enum() };
arc.mojom.InstallationResultSpec = { $: {} };
arc.mojom.AppStorageSpec = { $: {} };
arc.mojom.AppInfoSpec = { $: {} };
arc.mojom.WebAppInfoSpec = { $: {} };
arc.mojom.WindowLayoutSpec = { $: {} };
arc.mojom.PackageLocaleInfoSpec = { $: {} };
arc.mojom.ArcPackageInfoSpec = { $: {} };
arc.mojom.ShortcutInfoSpec = { $: {} };
arc.mojom.RawIconPngDataSpec = { $: {} };
arc.mojom.WindowInfoSpec = { $: {} };
arc.mojom.AppDiscoveryResultSpec = { $: {} };
arc.mojom.AppShortcutItemSpec = { $: {} };
arc.mojom.AppHost = {};
arc.mojom.AppHost.$interfaceName = 'arc.mojom.AppHost';
arc.mojom.AppHost_OnAppAddedDeprecated_ParamsSpec = { $: {} };
arc.mojom.AppHost_OnAppListRefreshed_ParamsSpec = { $: {} };
arc.mojom.AppHost_OnPackageAdded_ParamsSpec = { $: {} };
arc.mojom.AppHost_OnPackageAppListRefreshed_ParamsSpec = { $: {} };
arc.mojom.AppHost_OnPackageListRefreshed_ParamsSpec = { $: {} };
arc.mojom.AppHost_OnPackageModified_ParamsSpec = { $: {} };
arc.mojom.AppHost_OnPackageRemoved_ParamsSpec = { $: {} };
arc.mojom.AppHost_OnTaskCreated_ParamsSpec = { $: {} };
arc.mojom.AppHost_OnTaskDescriptionUpdated_ParamsSpec = { $: {} };
arc.mojom.AppHost_OnTaskDescriptionChanged_ParamsSpec = { $: {} };
arc.mojom.AppHost_OnTaskDestroyed_ParamsSpec = { $: {} };
arc.mojom.AppHost_OnTaskSetActive_ParamsSpec = { $: {} };
arc.mojom.AppHost_OnNotificationsEnabledChanged_ParamsSpec = { $: {} };
arc.mojom.AppHost_OnInstallShortcut_ParamsSpec = { $: {} };
arc.mojom.AppHost_OnInstallationStarted_ParamsSpec = { $: {} };
arc.mojom.AppHost_OnInstallationFinished_ParamsSpec = { $: {} };
arc.mojom.AppHost_OnUninstallShortcut_ParamsSpec = { $: {} };
arc.mojom.AppHost_OnInstallationProgressChanged_ParamsSpec = { $: {} };
arc.mojom.AppHost_OnInstallationActiveChanged_ParamsSpec = { $: {} };
arc.mojom.AppInstance = {};
arc.mojom.AppInstance.$interfaceName = 'arc.mojom.AppInstance';
arc.mojom.AppInstance_Init_ParamsSpec = { $: {} };
arc.mojom.AppInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.AppInstance_CloseTask_ParamsSpec = { $: {} };
arc.mojom.AppInstance_InstallPackage_ParamsSpec = { $: {} };
arc.mojom.AppInstance_LaunchAppWithWindowInfo_ParamsSpec = { $: {} };
arc.mojom.AppInstance_LaunchAppShortcutItem_ParamsSpec = { $: {} };
arc.mojom.AppInstance_LaunchIntentWithWindowInfo_ParamsSpec = { $: {} };
arc.mojom.AppInstance_UpdateWindowInfo_ParamsSpec = { $: {} };
arc.mojom.AppInstance_RequestAppIcon_ParamsSpec = { $: {} };
arc.mojom.AppInstance_RequestAppIcon_ResponseParamsSpec = { $: {} };
arc.mojom.AppInstance_GetAppIcon_ParamsSpec = { $: {} };
arc.mojom.AppInstance_GetAppIcon_ResponseParamsSpec = { $: {} };
arc.mojom.AppInstance_RequestShortcutIcon_ParamsSpec = { $: {} };
arc.mojom.AppInstance_RequestShortcutIcon_ResponseParamsSpec = { $: {} };
arc.mojom.AppInstance_GetAppShortcutIcon_ParamsSpec = { $: {} };
arc.mojom.AppInstance_GetAppShortcutIcon_ResponseParamsSpec = { $: {} };
arc.mojom.AppInstance_RequestPackageIcon_ParamsSpec = { $: {} };
arc.mojom.AppInstance_RequestPackageIcon_ResponseParamsSpec = { $: {} };
arc.mojom.AppInstance_GetPackageIcon_ParamsSpec = { $: {} };
arc.mojom.AppInstance_GetPackageIcon_ResponseParamsSpec = { $: {} };
arc.mojom.AppInstance_RemoveCachedIcon_ParamsSpec = { $: {} };
arc.mojom.AppInstance_SetTaskActive_ParamsSpec = { $: {} };
arc.mojom.AppInstance_ShowPackageInfoDeprecated_ParamsSpec = { $: {} };
arc.mojom.AppInstance_ShowPackageInfoOnPageDeprecated_ParamsSpec = { $: {} };
arc.mojom.AppInstance_ShowPackageInfoOnPage_ParamsSpec = { $: {} };
arc.mojom.AppInstance_SetNotificationsEnabled_ParamsSpec = { $: {} };
arc.mojom.AppInstance_StartPaiFlow_ParamsSpec = { $: {} };
arc.mojom.AppInstance_StartPaiFlow_ResponseParamsSpec = { $: {} };
arc.mojom.AppInstance_StartFastAppReinstallFlow_ParamsSpec = { $: {} };
arc.mojom.AppInstance_UninstallPackage_ParamsSpec = { $: {} };
arc.mojom.AppInstance_UpdateAppDetails_ParamsSpec = { $: {} };
arc.mojom.AppInstance_GetAndroidId_ParamsSpec = { $: {} };
arc.mojom.AppInstance_GetAndroidId_ResponseParamsSpec = { $: {} };
arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ParamsSpec = { $: {} };
arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ResponseParamsSpec = { $: {} };
arc.mojom.AppInstance_GetAppShortcutItems_ParamsSpec = { $: {} };
arc.mojom.AppInstance_GetAppShortcutItems_ResponseParamsSpec = { $: {} };
arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ParamsSpec = { $: {} };
arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ResponseParamsSpec = { $: {} };
arc.mojom.AppInstance_IsInstallable_ParamsSpec = { $: {} };
arc.mojom.AppInstance_IsInstallable_ResponseParamsSpec = { $: {} };
arc.mojom.AppInstance_GetAppCategory_ParamsSpec = { $: {} };
arc.mojom.AppInstance_GetAppCategory_ResponseParamsSpec = { $: {} };
arc.mojom.AppInstance_SetAppLocale_ParamsSpec = { $: {} };

// Enum: WindowSizeType
arc.mojom.WindowSizeType = {
  kUnknown: 0,
  kPhoneSize: 1,
  kTabletSize: 2,
  kMaximize: 3,
};

// Enum: InstallPriority
arc.mojom.InstallPriority = {
  kUndefined: 0,
  kMedium: 1,
  kLow: 2,
};

// Enum: ShowPackageInfoPage
arc.mojom.ShowPackageInfoPage = {
  MAIN: 0,
  MANAGE_LINKS: 1,
  MinVersion: 1,
};

// Enum: AppDiscoveryRequestState
arc.mojom.AppDiscoveryRequestState = {
  SUCCESS: 0,
  CANCELED: 1,
  ERROR_DEPRECATED: 2,
  PLAY_STORE_PROXY_NOT_AVAILABLE: 3,
  FAILED_TO_CALL_CANCEL: 4,
  FAILED_TO_CALL_FINDAPPS: 5,
  REQUEST_HAS_INVALID_PARAMS: 6,
  REQUEST_TIMEOUT: 7,
  PHONESKY_RESULT_REQUEST_CODE_UNMATCHED: 8,
  PHONESKY_RESULT_SESSION_ID_UNMATCHED: 9,
  PHONESKY_REQUEST_REQUEST_CODE_UNMATCHED: 10,
  PHONESKY_APP_DISCOVERY_NOT_AVAILABLE: 11,
  PHONESKY_VERSION_NOT_SUPPORTED: 12,
  PHONESKY_UNEXPECTED_EXCEPTION: 13,
  PHONESKY_MALFORMED_QUERY: 14,
  PHONESKY_INTERNAL_ERROR: 15,
  PHONESKY_RESULT_INVALID_DATA: 16,
};

// Enum: AppShortcutItemType
arc.mojom.AppShortcutItemType = {
  kStatic: 0,
  kDynamic: 1,
};

// Enum: PaiFlowState
arc.mojom.PaiFlowState = {
  SUCCEEDED: 0,
  UNKNOWN: 1,
  NO_ACCOUNT: 2,
  NO_APPS: 3,
  INTERRUPTED: 4,
  PLAY_STORE_NOT_RESPONDED: 5,
  PLAY_STORE_NO_ACCESS: 6,
  PROXY_NOT_FOUND: 7,
  PROXY_NO_ACCESS: 8,
  TIMEOUT: 9,
};

// Enum: AppCategory
arc.mojom.AppCategory = {
  kUndefined: -1,
  kGame: 0,
  kAudio: 1,
  kVideo: 2,
  kImage: 3,
  kSocial: 4,
  kNews: 5,
  kMaps: 6,
  kProductivity: 7,
  kAccessibility: 8,
};

// Struct: InstallationResult
mojo.internal.Struct(
    arc.mojom.InstallationResultSpec, 'arc.mojom.InstallationResult', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_launchable_app', 8, 1, mojo.internal.Bool, false, false, 62, undefined),
    ],
    [[0, 24], [62, 24]]);

// Struct: AppStorage
mojo.internal.Struct(
    arc.mojom.AppStorageSpec, 'arc.mojom.AppStorage', [
      mojo.internal.StructField('app_size_in_bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('data_size_in_bytes', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AppInfo
mojo.internal.Struct(
    arc.mojom.AppInfoSpec, 'arc.mojom.AppInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('package_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('activity', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sticky', 24, 0, mojo.internal.Bool, false, false, 2, undefined),
      mojo.internal.StructField('notifications_enabled', 24, 1, mojo.internal.Bool, false, false, 7, undefined),
      mojo.internal.StructField('suspended', 24, 2, mojo.internal.Bool, false, false, 35, undefined),
      mojo.internal.StructField('resize_lock_state', 32, 0, arc.mojom.ArcResizeLockStateSpec.$, null, false, 47, undefined),
      mojo.internal.StructField('initial_layout', 40, 0, arc.mojom.WindowLayoutSpec.$, null, true, 50, undefined),
      mojo.internal.StructField('version_name', 48, 0, mojo.internal.String, null, true, 51, undefined),
      mojo.internal.StructField('app_storage', 56, 0, arc.mojom.AppStorageSpec.$, null, true, 52, undefined),
      mojo.internal.StructField('need_fixup', 64, 0, mojo.internal.Bool, false, false, 54, undefined),
      mojo.internal.StructField('app_category', 72, 0, arc.mojom.AppCategorySpec.$, null, false, 57, undefined),
    ],
    [[0, 32], [2, 40], [7, 40], [35, 40], [47, 48], [50, 56], [51, 64], [52, 72], [54, 80], [57, 88]]);

// Struct: WebAppInfo
mojo.internal.Struct(
    arc.mojom.WebAppInfoSpec, 'arc.mojom.WebAppInfo', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('start_url', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('scope_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('theme_color', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('is_web_only_twa', 32, 0, mojo.internal.Bool, false, false, 44, undefined),
      mojo.internal.StructField('certificate_sha256_fingerprint', 40, 0, mojo.internal.String, null, true, 45, undefined),
    ],
    [[0, 40], [44, 48], [45, 56]]);

// Struct: WindowLayout
mojo.internal.Struct(
    arc.mojom.WindowLayoutSpec, 'arc.mojom.WindowLayout', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.WindowSizeTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, arc.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('resizable', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PackageLocaleInfo
mojo.internal.Struct(
    arc.mojom.PackageLocaleInfoSpec, 'arc.mojom.PackageLocaleInfo', [
      mojo.internal.StructField('supported_locales', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('selected_locale', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ArcPackageInfo
mojo.internal.Struct(
    arc.mojom.ArcPackageInfoSpec, 'arc.mojom.ArcPackageInfo', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_backup_android_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('last_backup_time', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('package_version', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sync', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('deprecated_system', 28, 1, mojo.internal.Bool, false, false, 11, undefined),
      mojo.internal.StructField('vpn_provider', 28, 2, mojo.internal.Bool, false, false, 25, undefined),
      mojo.internal.StructField('web_app_info', 32, 0, arc.mojom.WebAppInfoSpec.$, null, true, 38, undefined),
      mojo.internal.StructField('deprecated_permissions', 40, 0, mojo.internal.Map(arc.mojom.AppPermissionSpec.$, mojo.internal.Bool, false), null, true, 41, undefined),
      mojo.internal.StructField('permission_states', 48, 0, mojo.internal.Map(arc.mojom.AppPermissionSpec.$, arc.mojom.PermissionStateSpec.$, false), null, true, 43, undefined),
      mojo.internal.StructField('version_name', 56, 0, mojo.internal.String, null, true, 51, undefined),
      mojo.internal.StructField('preinstalled', 64, 0, mojo.internal.Bool, false, false, 55, undefined),
      mojo.internal.StructField('priority', 72, 0, arc.mojom.InstallPrioritySpec.$, null, false, 56, undefined),
      mojo.internal.StructField('locale_info', 80, 0, arc.mojom.PackageLocaleInfoSpec.$, null, true, 60, undefined),
      mojo.internal.StructField('game_controls_opt_out', 88, 0, mojo.internal.Bool, false, false, 61, undefined),
    ],
    [[0, 40], [11, 40], [25, 40], [38, 48], [41, 56], [43, 64], [51, 72], [55, 80], [56, 88], [60, 96], [61, 104]]);

// Struct: ShortcutInfo
mojo.internal.Struct(
    arc.mojom.ShortcutInfoSpec, 'arc.mojom.ShortcutInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('package_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon_resource_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('intent_uri', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: RawIconPngData
mojo.internal.Struct(
    arc.mojom.RawIconPngDataSpec, 'arc.mojom.RawIconPngData', [
      mojo.internal.StructField('icon_png_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('foreground_icon_png_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('background_icon_png_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('is_adaptive_icon', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: WindowInfo
mojo.internal.Struct(
    arc.mojom.WindowInfoSpec, 'arc.mojom.WindowInfo', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, arc.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('window_id', 16, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('state', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AppDiscoveryResult
mojo.internal.Struct(
    arc.mojom.AppDiscoveryResultSpec, 'arc.mojom.AppDiscoveryResult', [
      mojo.internal.StructField('launch_intent_uri', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('install_intent_uri', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('label', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('publisher_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('formatted_price', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('icon_png_data', 40, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('review_score', 48, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('is_instant_app', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_recent', 52, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('package_name', 56, 0, mojo.internal.String, null, true, 22, undefined),
      mojo.internal.StructField('icon', 64, 0, arc.mojom.RawIconPngDataSpec.$, null, true, 46, undefined),
    ],
    [[0, 64], [22, 72], [46, 80]]);

// Struct: AppShortcutItem
mojo.internal.Struct(
    arc.mojom.AppShortcutItemSpec, 'arc.mojom.AppShortcutItem', [
      mojo.internal.StructField('shortcut_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('short_label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon_png', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('package_name', 24, 0, mojo.internal.String, null, true, 31, undefined),
      mojo.internal.StructField('type', 32, 0, arc.mojom.AppShortcutItemTypeSpec.$, null, false, 32, undefined),
      mojo.internal.StructField('rank', 40, 0, mojo.internal.Int32, 0, false, 32, undefined),
      mojo.internal.StructField('icon', 48, 0, arc.mojom.RawIconPngDataSpec.$, null, true, 46, undefined),
    ],
    [[0, 32], [31, 40], [32, 56], [46, 64]]);

// Interface: AppHost
mojo.internal.Struct(
    arc.mojom.AppHost_OnAppAddedDeprecated_ParamsSpec, 'arc.mojom.AppHost_OnAppAddedDeprecated_Params', [
      mojo.internal.StructField('app', 0, 0, arc.mojom.AppInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppHost_OnAppListRefreshed_ParamsSpec, 'arc.mojom.AppHost_OnAppListRefreshed_Params', [
      mojo.internal.StructField('apps', 0, 0, mojo.internal.Array(arc.mojom.AppInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppHost_OnPackageAdded_ParamsSpec, 'arc.mojom.AppHost_OnPackageAdded_Params', [
      mojo.internal.StructField('arcPackageInfo', 0, 0, arc.mojom.ArcPackageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppHost_OnPackageAppListRefreshed_ParamsSpec, 'arc.mojom.AppHost_OnPackageAppListRefreshed_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('apps', 8, 0, mojo.internal.Array(arc.mojom.AppInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AppHost_OnPackageListRefreshed_ParamsSpec, 'arc.mojom.AppHost_OnPackageListRefreshed_Params', [
      mojo.internal.StructField('packages', 0, 0, mojo.internal.Array(arc.mojom.ArcPackageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppHost_OnPackageModified_ParamsSpec, 'arc.mojom.AppHost_OnPackageModified_Params', [
      mojo.internal.StructField('arcPackageInfo', 0, 0, arc.mojom.ArcPackageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppHost_OnPackageRemoved_ParamsSpec, 'arc.mojom.AppHost_OnPackageRemoved_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppHost_OnTaskCreated_ParamsSpec, 'arc.mojom.AppHost_OnTaskCreated_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('activity', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('task_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('name', 24, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('intent', 32, 0, mojo.internal.String, null, true, 15, undefined),
      mojo.internal.StructField('session_id', 40, 0, mojo.internal.Int32, 0, false, 48, undefined),
    ],
    [[0, 32], [13, 40], [15, 48], [48, 56]]);

mojo.internal.Struct(
    arc.mojom.AppHost_OnTaskDescriptionUpdated_ParamsSpec, 'arc.mojom.AppHost_OnTaskDescriptionUpdated_Params', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon_png_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('task_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.AppHost_OnTaskDescriptionChanged_ParamsSpec, 'arc.mojom.AppHost_OnTaskDescriptionChanged_Params', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon', 8, 0, arc.mojom.RawIconPngDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('task_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('primary_color', 20, 0, mojo.internal.Uint32, 0, false, 49, undefined),
      mojo.internal.StructField('status_bar_color', 24, 0, mojo.internal.Uint32, 0, false, 49, undefined),
    ],
    [[0, 32], [49, 40]]);

mojo.internal.Struct(
    arc.mojom.AppHost_OnTaskDestroyed_ParamsSpec, 'arc.mojom.AppHost_OnTaskDestroyed_Params', [
      mojo.internal.StructField('task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppHost_OnTaskSetActive_ParamsSpec, 'arc.mojom.AppHost_OnTaskSetActive_Params', [
      mojo.internal.StructField('task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppHost_OnNotificationsEnabledChanged_ParamsSpec, 'arc.mojom.AppHost_OnNotificationsEnabledChanged_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AppHost_OnInstallShortcut_ParamsSpec, 'arc.mojom.AppHost_OnInstallShortcut_Params', [
      mojo.internal.StructField('shortcut', 0, 0, arc.mojom.ShortcutInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppHost_OnInstallationStarted_ParamsSpec, 'arc.mojom.AppHost_OnInstallationStarted_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, true, 17, undefined),
    ],
    [[0, 8], [17, 16]]);

mojo.internal.Struct(
    arc.mojom.AppHost_OnInstallationFinished_ParamsSpec, 'arc.mojom.AppHost_OnInstallationFinished_Params', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.InstallationResultSpec.$, null, true, 17, undefined),
    ],
    [[0, 8], [17, 16]]);

mojo.internal.Struct(
    arc.mojom.AppHost_OnUninstallShortcut_ParamsSpec, 'arc.mojom.AppHost_OnUninstallShortcut_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('intent_uri', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AppHost_OnInstallationProgressChanged_ParamsSpec, 'arc.mojom.AppHost_OnInstallationProgressChanged_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('progress', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AppHost_OnInstallationActiveChanged_ParamsSpec, 'arc.mojom.AppHost_OnInstallationActiveChanged_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('active', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

arc.mojom.AppHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AppHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AppHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AppHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.AppHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAppAddedDeprecated(app) {
    return this.$.onAppAddedDeprecated(app);
  }
  onAppListRefreshed(apps) {
    return this.$.onAppListRefreshed(apps);
  }
  onPackageAdded(arcPackageInfo) {
    return this.$.onPackageAdded(arcPackageInfo);
  }
  onPackageAppListRefreshed(package_name, apps) {
    return this.$.onPackageAppListRefreshed(package_name, apps);
  }
  onPackageListRefreshed(packages) {
    return this.$.onPackageListRefreshed(packages);
  }
  onPackageModified(arcPackageInfo) {
    return this.$.onPackageModified(arcPackageInfo);
  }
  onPackageRemoved(package_name) {
    return this.$.onPackageRemoved(package_name);
  }
  onTaskCreated(task_id, package_name, activity, name, intent, session_id) {
    return this.$.onTaskCreated(task_id, package_name, activity, name, intent, session_id);
  }
  onTaskDescriptionUpdated(task_id, label, icon_png_data) {
    return this.$.onTaskDescriptionUpdated(task_id, label, icon_png_data);
  }
  onTaskDescriptionChanged(task_id, label, icon, primary_color, status_bar_color) {
    return this.$.onTaskDescriptionChanged(task_id, label, icon, primary_color, status_bar_color);
  }
  onTaskDestroyed(task_id) {
    return this.$.onTaskDestroyed(task_id);
  }
  onTaskSetActive(task_id) {
    return this.$.onTaskSetActive(task_id);
  }
  onNotificationsEnabledChanged(package_name, enabled) {
    return this.$.onNotificationsEnabledChanged(package_name, enabled);
  }
  onInstallShortcut(shortcut) {
    return this.$.onInstallShortcut(shortcut);
  }
  onInstallationStarted(package_name) {
    return this.$.onInstallationStarted(package_name);
  }
  onInstallationFinished(result) {
    return this.$.onInstallationFinished(result);
  }
  onUninstallShortcut(package_name, intent_uri) {
    return this.$.onUninstallShortcut(package_name, intent_uri);
  }
  onInstallationProgressChanged(package_name, progress) {
    return this.$.onInstallationProgressChanged(package_name, progress);
  }
  onInstallationActiveChanged(package_name, active) {
    return this.$.onInstallationActiveChanged(package_name, active);
  }
};

arc.mojom.AppHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AppHost', [
      { explicit: 2 },
      { explicit: 0 },
      { explicit: 8 },
      { explicit: 13 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 11 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 19 },
      { explicit: 20 },
    ]);
  }

  onAppAddedDeprecated(app) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.AppHost_OnAppAddedDeprecated_ParamsSpec,
      null,
      [app],
      false);
  }

  onAppListRefreshed(apps) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.AppHost_OnAppListRefreshed_ParamsSpec,
      null,
      [apps],
      false);
  }

  onPackageAdded(arcPackageInfo) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.AppHost_OnPackageAdded_ParamsSpec,
      null,
      [arcPackageInfo],
      false);
  }

  onPackageAppListRefreshed(package_name, apps) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.AppHost_OnPackageAppListRefreshed_ParamsSpec,
      null,
      [package_name, apps],
      false);
  }

  onPackageListRefreshed(packages) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.AppHost_OnPackageListRefreshed_ParamsSpec,
      null,
      [packages],
      false);
  }

  onPackageModified(arcPackageInfo) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      arc.mojom.AppHost_OnPackageModified_ParamsSpec,
      null,
      [arcPackageInfo],
      false);
  }

  onPackageRemoved(package_name) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      arc.mojom.AppHost_OnPackageRemoved_ParamsSpec,
      null,
      [package_name],
      false);
  }

  onTaskCreated(task_id, package_name, activity, name, intent, session_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      arc.mojom.AppHost_OnTaskCreated_ParamsSpec,
      null,
      [task_id, package_name, activity, name, intent, session_id],
      false);
  }

  onTaskDescriptionUpdated(task_id, label, icon_png_data) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      arc.mojom.AppHost_OnTaskDescriptionUpdated_ParamsSpec,
      null,
      [task_id, label, icon_png_data],
      false);
  }

  onTaskDescriptionChanged(task_id, label, icon, primary_color, status_bar_color) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      arc.mojom.AppHost_OnTaskDescriptionChanged_ParamsSpec,
      null,
      [task_id, label, icon, primary_color, status_bar_color],
      false);
  }

  onTaskDestroyed(task_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      arc.mojom.AppHost_OnTaskDestroyed_ParamsSpec,
      null,
      [task_id],
      false);
  }

  onTaskSetActive(task_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      arc.mojom.AppHost_OnTaskSetActive_ParamsSpec,
      null,
      [task_id],
      false);
  }

  onNotificationsEnabledChanged(package_name, enabled) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      arc.mojom.AppHost_OnNotificationsEnabledChanged_ParamsSpec,
      null,
      [package_name, enabled],
      false);
  }

  onInstallShortcut(shortcut) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      arc.mojom.AppHost_OnInstallShortcut_ParamsSpec,
      null,
      [shortcut],
      false);
  }

  onInstallationStarted(package_name) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      arc.mojom.AppHost_OnInstallationStarted_ParamsSpec,
      null,
      [package_name],
      false);
  }

  onInstallationFinished(result) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      arc.mojom.AppHost_OnInstallationFinished_ParamsSpec,
      null,
      [result],
      false);
  }

  onUninstallShortcut(package_name, intent_uri) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      arc.mojom.AppHost_OnUninstallShortcut_ParamsSpec,
      null,
      [package_name, intent_uri],
      false);
  }

  onInstallationProgressChanged(package_name, progress) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      arc.mojom.AppHost_OnInstallationProgressChanged_ParamsSpec,
      null,
      [package_name, progress],
      false);
  }

  onInstallationActiveChanged(package_name, active) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      arc.mojom.AppHost_OnInstallationActiveChanged_ParamsSpec,
      null,
      [package_name, active],
      false);
  }

};

arc.mojom.AppHost.getRemote = function() {
  let remote = new arc.mojom.AppHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AppHost',
    'context');
  return remote.$;
};

arc.mojom.AppHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AppHost', [
      { explicit: 2 },
      { explicit: 0 },
      { explicit: 8 },
      { explicit: 13 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 11 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 19 },
      { explicit: 20 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(arc.mojom.AppHost_OnAppAddedDeprecated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppHost_OnAppListRefreshed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppHost_OnPackageAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppHost_OnPackageAppListRefreshed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppHost_OnPackageListRefreshed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppHost_OnPackageModified_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppHost_OnPackageRemoved_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppHost_OnTaskCreated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppHost_OnTaskDescriptionUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppHost_OnTaskDescriptionChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppHost_OnTaskDestroyed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppHost_OnTaskSetActive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppHost_OnNotificationsEnabledChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppHost_OnInstallShortcut_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppHost_OnInstallationStarted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppHost_OnInstallationFinished_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppHost_OnUninstallShortcut_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppHost_OnInstallationProgressChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppHost_OnInstallationActiveChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppHost_OnAppAddedDeprecated_ParamsSpec.$.structSpec);
          const result = this.impl.onAppAddedDeprecated(params.app);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppHost_OnAppListRefreshed_ParamsSpec.$.structSpec);
          const result = this.impl.onAppListRefreshed(params.apps);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppHost_OnPackageAdded_ParamsSpec.$.structSpec);
          const result = this.impl.onPackageAdded(params.arcPackageInfo);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppHost_OnPackageAppListRefreshed_ParamsSpec.$.structSpec);
          const result = this.impl.onPackageAppListRefreshed(params.package_name, params.apps);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppHost_OnPackageListRefreshed_ParamsSpec.$.structSpec);
          const result = this.impl.onPackageListRefreshed(params.packages);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppHost_OnPackageModified_ParamsSpec.$.structSpec);
          const result = this.impl.onPackageModified(params.arcPackageInfo);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppHost_OnPackageRemoved_ParamsSpec.$.structSpec);
          const result = this.impl.onPackageRemoved(params.package_name);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppHost_OnTaskCreated_ParamsSpec.$.structSpec);
          const result = this.impl.onTaskCreated(params.task_id, params.package_name, params.activity, params.name, params.intent, params.session_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppHost_OnTaskDescriptionUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onTaskDescriptionUpdated(params.task_id, params.label, params.icon_png_data);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppHost_OnTaskDescriptionChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onTaskDescriptionChanged(params.task_id, params.label, params.icon, params.primary_color, params.status_bar_color);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppHost_OnTaskDestroyed_ParamsSpec.$.structSpec);
          const result = this.impl.onTaskDestroyed(params.task_id);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppHost_OnTaskSetActive_ParamsSpec.$.structSpec);
          const result = this.impl.onTaskSetActive(params.task_id);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppHost_OnNotificationsEnabledChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onNotificationsEnabledChanged(params.package_name, params.enabled);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppHost_OnInstallShortcut_ParamsSpec.$.structSpec);
          const result = this.impl.onInstallShortcut(params.shortcut);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppHost_OnInstallationStarted_ParamsSpec.$.structSpec);
          const result = this.impl.onInstallationStarted(params.package_name);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppHost_OnInstallationFinished_ParamsSpec.$.structSpec);
          const result = this.impl.onInstallationFinished(params.result);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppHost_OnUninstallShortcut_ParamsSpec.$.structSpec);
          const result = this.impl.onUninstallShortcut(params.package_name, params.intent_uri);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppHost_OnInstallationProgressChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onInstallationProgressChanged(params.package_name, params.progress);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppHost_OnInstallationActiveChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onInstallationActiveChanged(params.package_name, params.active);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.AppHostReceiver = arc.mojom.AppHostReceiver;

arc.mojom.AppHostPtr = arc.mojom.AppHostRemote;
arc.mojom.AppHostRequest = arc.mojom.AppHostPendingReceiver;


// Interface: AppInstance
mojo.internal.Struct(
    arc.mojom.AppInstance_Init_ParamsSpec, 'arc.mojom.AppInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.AppHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_Init_ResponseParamsSpec, 'arc.mojom.AppInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_CloseTask_ParamsSpec, 'arc.mojom.AppInstance_CloseTask_Params', [
      mojo.internal.StructField('task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_InstallPackage_ParamsSpec, 'arc.mojom.AppInstance_InstallPackage_Params', [
      mojo.internal.StructField('arcPackageInfo', 0, 0, arc.mojom.ArcPackageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_LaunchAppWithWindowInfo_ParamsSpec, 'arc.mojom.AppInstance_LaunchAppWithWindowInfo_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('activity', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('window_info', 16, 0, arc.mojom.WindowInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_LaunchAppShortcutItem_ParamsSpec, 'arc.mojom.AppInstance_LaunchAppShortcutItem_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('shortcut_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_LaunchIntentWithWindowInfo_ParamsSpec, 'arc.mojom.AppInstance_LaunchIntentWithWindowInfo_Params', [
      mojo.internal.StructField('intent_uri', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('window_info', 8, 0, arc.mojom.WindowInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_UpdateWindowInfo_ParamsSpec, 'arc.mojom.AppInstance_UpdateWindowInfo_Params', [
      mojo.internal.StructField('window_info', 0, 0, arc.mojom.WindowInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_RequestAppIcon_ParamsSpec, 'arc.mojom.AppInstance_RequestAppIcon_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('activity', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pixel_size', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_RequestAppIcon_ResponseParamsSpec, 'arc.mojom.AppInstance_RequestAppIcon_ResponseParams', [
      mojo.internal.StructField('icon_png_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_GetAppIcon_ParamsSpec, 'arc.mojom.AppInstance_GetAppIcon_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('activity', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pixel_size', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_GetAppIcon_ResponseParamsSpec, 'arc.mojom.AppInstance_GetAppIcon_ResponseParams', [
      mojo.internal.StructField('icon', 0, 0, arc.mojom.RawIconPngDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_RequestShortcutIcon_ParamsSpec, 'arc.mojom.AppInstance_RequestShortcutIcon_Params', [
      mojo.internal.StructField('icon_resource_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pixel_size', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_RequestShortcutIcon_ResponseParamsSpec, 'arc.mojom.AppInstance_RequestShortcutIcon_ResponseParams', [
      mojo.internal.StructField('icon_png_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_GetAppShortcutIcon_ParamsSpec, 'arc.mojom.AppInstance_GetAppShortcutIcon_Params', [
      mojo.internal.StructField('icon_resource_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pixel_size', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_GetAppShortcutIcon_ResponseParamsSpec, 'arc.mojom.AppInstance_GetAppShortcutIcon_ResponseParams', [
      mojo.internal.StructField('icon', 0, 0, arc.mojom.RawIconPngDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_RequestPackageIcon_ParamsSpec, 'arc.mojom.AppInstance_RequestPackageIcon_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pixel_size', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('normalize', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_RequestPackageIcon_ResponseParamsSpec, 'arc.mojom.AppInstance_RequestPackageIcon_ResponseParams', [
      mojo.internal.StructField('icon_png_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_GetPackageIcon_ParamsSpec, 'arc.mojom.AppInstance_GetPackageIcon_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pixel_size', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('normalize', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_GetPackageIcon_ResponseParamsSpec, 'arc.mojom.AppInstance_GetPackageIcon_ResponseParams', [
      mojo.internal.StructField('icon', 0, 0, arc.mojom.RawIconPngDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_RemoveCachedIcon_ParamsSpec, 'arc.mojom.AppInstance_RemoveCachedIcon_Params', [
      mojo.internal.StructField('icon_resource_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_SetTaskActive_ParamsSpec, 'arc.mojom.AppInstance_SetTaskActive_Params', [
      mojo.internal.StructField('task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_ShowPackageInfoDeprecated_ParamsSpec, 'arc.mojom.AppInstance_ShowPackageInfoDeprecated_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('dimension_on_screen', 8, 0, arc.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_ShowPackageInfoOnPageDeprecated_ParamsSpec, 'arc.mojom.AppInstance_ShowPackageInfoOnPageDeprecated_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, arc.mojom.ShowPackageInfoPageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dimension_on_screen', 16, 0, arc.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_ShowPackageInfoOnPage_ParamsSpec, 'arc.mojom.AppInstance_ShowPackageInfoOnPage_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, arc.mojom.ShowPackageInfoPageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_SetNotificationsEnabled_ParamsSpec, 'arc.mojom.AppInstance_SetNotificationsEnabled_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_StartPaiFlow_ParamsSpec, 'arc.mojom.AppInstance_StartPaiFlow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_StartPaiFlow_ResponseParamsSpec, 'arc.mojom.AppInstance_StartPaiFlow_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, arc.mojom.PaiFlowStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_StartFastAppReinstallFlow_ParamsSpec, 'arc.mojom.AppInstance_StartFastAppReinstallFlow_Params', [
      mojo.internal.StructField('arc_package_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_UninstallPackage_ParamsSpec, 'arc.mojom.AppInstance_UninstallPackage_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_UpdateAppDetails_ParamsSpec, 'arc.mojom.AppInstance_UpdateAppDetails_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_GetAndroidId_ParamsSpec, 'arc.mojom.AppInstance_GetAndroidId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_GetAndroidId_ResponseParamsSpec, 'arc.mojom.AppInstance_GetAndroidId_ResponseParams', [
      mojo.internal.StructField('android_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ParamsSpec, 'arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_Params', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('max_results', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ResponseParamsSpec, 'arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ResponseParams', [
      mojo.internal.StructField('shortcut_items', 0, 0, mojo.internal.Array(arc.mojom.AppShortcutItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_GetAppShortcutItems_ParamsSpec, 'arc.mojom.AppInstance_GetAppShortcutItems_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_GetAppShortcutItems_ResponseParamsSpec, 'arc.mojom.AppInstance_GetAppShortcutItems_ResponseParams', [
      mojo.internal.StructField('shortcut_items', 0, 0, mojo.internal.Array(arc.mojom.AppShortcutItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ParamsSpec, 'arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_Params', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('max_results', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ResponseParamsSpec, 'arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(arc.mojom.AppDiscoveryResultSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('state', 8, 0, arc.mojom.AppDiscoveryRequestStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_IsInstallable_ParamsSpec, 'arc.mojom.AppInstance_IsInstallable_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_IsInstallable_ResponseParamsSpec, 'arc.mojom.AppInstance_IsInstallable_ResponseParams', [
      mojo.internal.StructField('is_installable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_GetAppCategory_ParamsSpec, 'arc.mojom.AppInstance_GetAppCategory_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_GetAppCategory_ResponseParamsSpec, 'arc.mojom.AppInstance_GetAppCategory_ResponseParams', [
      mojo.internal.StructField('category', 0, 0, arc.mojom.AppCategorySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppInstance_SetAppLocale_ParamsSpec, 'arc.mojom.AppInstance_SetAppLocale_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('locale_tag', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

arc.mojom.AppInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AppInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AppInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AppInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.AppInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(host_remote) {
    return this.$.init(host_remote);
  }
  closeTask(task_id) {
    return this.$.closeTask(task_id);
  }
  installPackage(arcPackageInfo) {
    return this.$.installPackage(arcPackageInfo);
  }
  launchAppWithWindowInfo(package_name, activity, window_info) {
    return this.$.launchAppWithWindowInfo(package_name, activity, window_info);
  }
  launchAppShortcutItem(package_name, shortcut_id, display_id) {
    return this.$.launchAppShortcutItem(package_name, shortcut_id, display_id);
  }
  launchIntentWithWindowInfo(intent_uri, window_info) {
    return this.$.launchIntentWithWindowInfo(intent_uri, window_info);
  }
  updateWindowInfo(window_info) {
    return this.$.updateWindowInfo(window_info);
  }
  requestAppIcon(package_name, activity, pixel_size) {
    return this.$.requestAppIcon(package_name, activity, pixel_size);
  }
  getAppIcon(package_name, activity, pixel_size) {
    return this.$.getAppIcon(package_name, activity, pixel_size);
  }
  requestShortcutIcon(icon_resource_id, pixel_size) {
    return this.$.requestShortcutIcon(icon_resource_id, pixel_size);
  }
  getAppShortcutIcon(icon_resource_id, pixel_size) {
    return this.$.getAppShortcutIcon(icon_resource_id, pixel_size);
  }
  requestPackageIcon(package_name, pixel_size, normalize) {
    return this.$.requestPackageIcon(package_name, pixel_size, normalize);
  }
  getPackageIcon(package_name, pixel_size, normalize) {
    return this.$.getPackageIcon(package_name, pixel_size, normalize);
  }
  removeCachedIcon(icon_resource_id) {
    return this.$.removeCachedIcon(icon_resource_id);
  }
  setTaskActive(task_id) {
    return this.$.setTaskActive(task_id);
  }
  showPackageInfoDeprecated(package_name, dimension_on_screen) {
    return this.$.showPackageInfoDeprecated(package_name, dimension_on_screen);
  }
  showPackageInfoOnPageDeprecated(package_name, page, dimension_on_screen) {
    return this.$.showPackageInfoOnPageDeprecated(package_name, page, dimension_on_screen);
  }
  showPackageInfoOnPage(package_name, page, display_id) {
    return this.$.showPackageInfoOnPage(package_name, page, display_id);
  }
  setNotificationsEnabled(package_name, enabled) {
    return this.$.setNotificationsEnabled(package_name, enabled);
  }
  startPaiFlow() {
    return this.$.startPaiFlow();
  }
  startFastAppReinstallFlow(arc_package_names) {
    return this.$.startFastAppReinstallFlow(arc_package_names);
  }
  uninstallPackage(package_name) {
    return this.$.uninstallPackage(package_name);
  }
  updateAppDetails(package_name) {
    return this.$.updateAppDetails(package_name);
  }
  getAndroidId() {
    return this.$.getAndroidId();
  }
  getAppShortcutGlobalQueryItems(query, max_results) {
    return this.$.getAppShortcutGlobalQueryItems(query, max_results);
  }
  getAppShortcutItems(package_name) {
    return this.$.getAppShortcutItems(package_name);
  }
  getRecentAndSuggestedAppsFromPlayStore(query, max_results) {
    return this.$.getRecentAndSuggestedAppsFromPlayStore(query, max_results);
  }
  isInstallable(package_name) {
    return this.$.isInstallable(package_name);
  }
  getAppCategory(package_name) {
    return this.$.getAppCategory(package_name);
  }
  setAppLocale(package_name, locale_tag) {
    return this.$.setAppLocale(package_name, locale_tag);
  }
};

arc.mojom.AppInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AppInstance', [
      { explicit: 21 },
      { explicit: 8 },
      { explicit: 11 },
      { explicit: 38 },
      { explicit: 24 },
      { explicit: 39 },
      { explicit: 40 },
      { explicit: 27 },
      { explicit: 35 },
      { explicit: 28 },
      { explicit: 36 },
      { explicit: 30 },
      { explicit: 37 },
      { explicit: 14 },
      { explicit: 7 },
      { explicit: 9 },
      { explicit: 15 },
      { explicit: 20 },
      { explicit: 10 },
      { explicit: 32 },
      { explicit: 25 },
      { explicit: 5 },
      { explicit: 42 },
      { explicit: 33 },
      { explicit: 26 },
      { explicit: 23 },
      { explicit: 16 },
      { explicit: 34 },
      { explicit: 41 },
      { explicit: 43 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.AppInstance_Init_ParamsSpec,
      arc.mojom.AppInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  closeTask(task_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.AppInstance_CloseTask_ParamsSpec,
      null,
      [task_id],
      false);
  }

  installPackage(arcPackageInfo) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.AppInstance_InstallPackage_ParamsSpec,
      null,
      [arcPackageInfo],
      false);
  }

  launchAppWithWindowInfo(package_name, activity, window_info) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.AppInstance_LaunchAppWithWindowInfo_ParamsSpec,
      null,
      [package_name, activity, window_info],
      false);
  }

  launchAppShortcutItem(package_name, shortcut_id, display_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.AppInstance_LaunchAppShortcutItem_ParamsSpec,
      null,
      [package_name, shortcut_id, display_id],
      false);
  }

  launchIntentWithWindowInfo(intent_uri, window_info) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      arc.mojom.AppInstance_LaunchIntentWithWindowInfo_ParamsSpec,
      null,
      [intent_uri, window_info],
      false);
  }

  updateWindowInfo(window_info) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      arc.mojom.AppInstance_UpdateWindowInfo_ParamsSpec,
      null,
      [window_info],
      false);
  }

  requestAppIcon(package_name, activity, pixel_size) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      arc.mojom.AppInstance_RequestAppIcon_ParamsSpec,
      arc.mojom.AppInstance_RequestAppIcon_ResponseParamsSpec,
      [package_name, activity, pixel_size],
      false);
  }

  getAppIcon(package_name, activity, pixel_size) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      arc.mojom.AppInstance_GetAppIcon_ParamsSpec,
      arc.mojom.AppInstance_GetAppIcon_ResponseParamsSpec,
      [package_name, activity, pixel_size],
      false);
  }

  requestShortcutIcon(icon_resource_id, pixel_size) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      arc.mojom.AppInstance_RequestShortcutIcon_ParamsSpec,
      arc.mojom.AppInstance_RequestShortcutIcon_ResponseParamsSpec,
      [icon_resource_id, pixel_size],
      false);
  }

  getAppShortcutIcon(icon_resource_id, pixel_size) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      arc.mojom.AppInstance_GetAppShortcutIcon_ParamsSpec,
      arc.mojom.AppInstance_GetAppShortcutIcon_ResponseParamsSpec,
      [icon_resource_id, pixel_size],
      false);
  }

  requestPackageIcon(package_name, pixel_size, normalize) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      arc.mojom.AppInstance_RequestPackageIcon_ParamsSpec,
      arc.mojom.AppInstance_RequestPackageIcon_ResponseParamsSpec,
      [package_name, pixel_size, normalize],
      false);
  }

  getPackageIcon(package_name, pixel_size, normalize) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      arc.mojom.AppInstance_GetPackageIcon_ParamsSpec,
      arc.mojom.AppInstance_GetPackageIcon_ResponseParamsSpec,
      [package_name, pixel_size, normalize],
      false);
  }

  removeCachedIcon(icon_resource_id) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      arc.mojom.AppInstance_RemoveCachedIcon_ParamsSpec,
      null,
      [icon_resource_id],
      false);
  }

  setTaskActive(task_id) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      arc.mojom.AppInstance_SetTaskActive_ParamsSpec,
      null,
      [task_id],
      false);
  }

  showPackageInfoDeprecated(package_name, dimension_on_screen) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      arc.mojom.AppInstance_ShowPackageInfoDeprecated_ParamsSpec,
      null,
      [package_name, dimension_on_screen],
      false);
  }

  showPackageInfoOnPageDeprecated(package_name, page, dimension_on_screen) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      arc.mojom.AppInstance_ShowPackageInfoOnPageDeprecated_ParamsSpec,
      null,
      [package_name, page, dimension_on_screen],
      false);
  }

  showPackageInfoOnPage(package_name, page, display_id) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      arc.mojom.AppInstance_ShowPackageInfoOnPage_ParamsSpec,
      null,
      [package_name, page, display_id],
      false);
  }

  setNotificationsEnabled(package_name, enabled) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      arc.mojom.AppInstance_SetNotificationsEnabled_ParamsSpec,
      null,
      [package_name, enabled],
      false);
  }

  startPaiFlow() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      arc.mojom.AppInstance_StartPaiFlow_ParamsSpec,
      arc.mojom.AppInstance_StartPaiFlow_ResponseParamsSpec,
      [],
      false);
  }

  startFastAppReinstallFlow(arc_package_names) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      arc.mojom.AppInstance_StartFastAppReinstallFlow_ParamsSpec,
      null,
      [arc_package_names],
      false);
  }

  uninstallPackage(package_name) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      arc.mojom.AppInstance_UninstallPackage_ParamsSpec,
      null,
      [package_name],
      false);
  }

  updateAppDetails(package_name) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      arc.mojom.AppInstance_UpdateAppDetails_ParamsSpec,
      null,
      [package_name],
      false);
  }

  getAndroidId() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      arc.mojom.AppInstance_GetAndroidId_ParamsSpec,
      arc.mojom.AppInstance_GetAndroidId_ResponseParamsSpec,
      [],
      false);
  }

  getAppShortcutGlobalQueryItems(query, max_results) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ParamsSpec,
      arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ResponseParamsSpec,
      [query, max_results],
      false);
  }

  getAppShortcutItems(package_name) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      arc.mojom.AppInstance_GetAppShortcutItems_ParamsSpec,
      arc.mojom.AppInstance_GetAppShortcutItems_ResponseParamsSpec,
      [package_name],
      false);
  }

  getRecentAndSuggestedAppsFromPlayStore(query, max_results) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ParamsSpec,
      arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ResponseParamsSpec,
      [query, max_results],
      false);
  }

  isInstallable(package_name) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      arc.mojom.AppInstance_IsInstallable_ParamsSpec,
      arc.mojom.AppInstance_IsInstallable_ResponseParamsSpec,
      [package_name],
      false);
  }

  getAppCategory(package_name) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      arc.mojom.AppInstance_GetAppCategory_ParamsSpec,
      arc.mojom.AppInstance_GetAppCategory_ResponseParamsSpec,
      [package_name],
      false);
  }

  setAppLocale(package_name, locale_tag) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      arc.mojom.AppInstance_SetAppLocale_ParamsSpec,
      null,
      [package_name, locale_tag],
      false);
  }

};

arc.mojom.AppInstance.getRemote = function() {
  let remote = new arc.mojom.AppInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AppInstance',
    'context');
  return remote.$;
};

arc.mojom.AppInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AppInstance', [
      { explicit: 21 },
      { explicit: 8 },
      { explicit: 11 },
      { explicit: 38 },
      { explicit: 24 },
      { explicit: 39 },
      { explicit: 40 },
      { explicit: 27 },
      { explicit: 35 },
      { explicit: 28 },
      { explicit: 36 },
      { explicit: 30 },
      { explicit: 37 },
      { explicit: 14 },
      { explicit: 7 },
      { explicit: 9 },
      { explicit: 15 },
      { explicit: 20 },
      { explicit: 10 },
      { explicit: 32 },
      { explicit: 25 },
      { explicit: 5 },
      { explicit: 42 },
      { explicit: 33 },
      { explicit: 26 },
      { explicit: 23 },
      { explicit: 16 },
      { explicit: 34 },
      { explicit: 41 },
      { explicit: 43 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(arc.mojom.AppInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_CloseTask_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_InstallPackage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_LaunchAppWithWindowInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_LaunchAppShortcutItem_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_LaunchIntentWithWindowInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_UpdateWindowInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_RequestAppIcon_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_GetAppIcon_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_RequestShortcutIcon_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_GetAppShortcutIcon_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_RequestPackageIcon_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_GetPackageIcon_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_RemoveCachedIcon_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_SetTaskActive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_ShowPackageInfoDeprecated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_ShowPackageInfoOnPageDeprecated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_ShowPackageInfoOnPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_SetNotificationsEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_StartPaiFlow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_StartFastAppReinstallFlow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_UninstallPackage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_UpdateAppDetails_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_GetAndroidId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_GetAppShortcutItems_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_IsInstallable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_GetAppCategory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppInstance_SetAppLocale_ParamsSpec);
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AppInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_CloseTask_ParamsSpec.$.structSpec);
          const result = this.impl.closeTask(params.task_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_InstallPackage_ParamsSpec.$.structSpec);
          const result = this.impl.installPackage(params.arcPackageInfo);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_LaunchAppWithWindowInfo_ParamsSpec.$.structSpec);
          const result = this.impl.launchAppWithWindowInfo(params.package_name, params.activity, params.window_info);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_LaunchAppShortcutItem_ParamsSpec.$.structSpec);
          const result = this.impl.launchAppShortcutItem(params.package_name, params.shortcut_id, params.display_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_LaunchIntentWithWindowInfo_ParamsSpec.$.structSpec);
          const result = this.impl.launchIntentWithWindowInfo(params.intent_uri, params.window_info);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_UpdateWindowInfo_ParamsSpec.$.structSpec);
          const result = this.impl.updateWindowInfo(params.window_info);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_RequestAppIcon_ParamsSpec.$.structSpec);
          const result = this.impl.requestAppIcon(params.package_name, params.activity, params.pixel_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AppInstance_RequestAppIcon_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_GetAppIcon_ParamsSpec.$.structSpec);
          const result = this.impl.getAppIcon(params.package_name, params.activity, params.pixel_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AppInstance_GetAppIcon_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_RequestShortcutIcon_ParamsSpec.$.structSpec);
          const result = this.impl.requestShortcutIcon(params.icon_resource_id, params.pixel_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AppInstance_RequestShortcutIcon_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_GetAppShortcutIcon_ParamsSpec.$.structSpec);
          const result = this.impl.getAppShortcutIcon(params.icon_resource_id, params.pixel_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AppInstance_GetAppShortcutIcon_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_RequestPackageIcon_ParamsSpec.$.structSpec);
          const result = this.impl.requestPackageIcon(params.package_name, params.pixel_size, params.normalize);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AppInstance_RequestPackageIcon_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_GetPackageIcon_ParamsSpec.$.structSpec);
          const result = this.impl.getPackageIcon(params.package_name, params.pixel_size, params.normalize);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AppInstance_GetPackageIcon_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_RemoveCachedIcon_ParamsSpec.$.structSpec);
          const result = this.impl.removeCachedIcon(params.icon_resource_id);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_SetTaskActive_ParamsSpec.$.structSpec);
          const result = this.impl.setTaskActive(params.task_id);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_ShowPackageInfoDeprecated_ParamsSpec.$.structSpec);
          const result = this.impl.showPackageInfoDeprecated(params.package_name, params.dimension_on_screen);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_ShowPackageInfoOnPageDeprecated_ParamsSpec.$.structSpec);
          const result = this.impl.showPackageInfoOnPageDeprecated(params.package_name, params.page, params.dimension_on_screen);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_ShowPackageInfoOnPage_ParamsSpec.$.structSpec);
          const result = this.impl.showPackageInfoOnPage(params.package_name, params.page, params.display_id);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_SetNotificationsEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setNotificationsEnabled(params.package_name, params.enabled);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_StartPaiFlow_ParamsSpec.$.structSpec);
          const result = this.impl.startPaiFlow();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AppInstance_StartPaiFlow_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_StartFastAppReinstallFlow_ParamsSpec.$.structSpec);
          const result = this.impl.startFastAppReinstallFlow(params.arc_package_names);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_UninstallPackage_ParamsSpec.$.structSpec);
          const result = this.impl.uninstallPackage(params.package_name);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_UpdateAppDetails_ParamsSpec.$.structSpec);
          const result = this.impl.updateAppDetails(params.package_name);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_GetAndroidId_ParamsSpec.$.structSpec);
          const result = this.impl.getAndroidId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AppInstance_GetAndroidId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ParamsSpec.$.structSpec);
          const result = this.impl.getAppShortcutGlobalQueryItems(params.query, params.max_results);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_GetAppShortcutItems_ParamsSpec.$.structSpec);
          const result = this.impl.getAppShortcutItems(params.package_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AppInstance_GetAppShortcutItems_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ParamsSpec.$.structSpec);
          const result = this.impl.getRecentAndSuggestedAppsFromPlayStore(params.query, params.max_results);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_IsInstallable_ParamsSpec.$.structSpec);
          const result = this.impl.isInstallable(params.package_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AppInstance_IsInstallable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_GetAppCategory_ParamsSpec.$.structSpec);
          const result = this.impl.getAppCategory(params.package_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AppInstance_GetAppCategory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppInstance_SetAppLocale_ParamsSpec.$.structSpec);
          const result = this.impl.setAppLocale(params.package_name, params.locale_tag);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.AppInstanceReceiver = arc.mojom.AppInstanceReceiver;

arc.mojom.AppInstancePtr = arc.mojom.AppInstanceRemote;
arc.mojom.AppInstanceRequest = arc.mojom.AppInstancePendingReceiver;

