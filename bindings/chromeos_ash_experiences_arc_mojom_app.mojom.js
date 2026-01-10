// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/app.mojom
// Module: arc.mojom

'use strict';

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
};

arc.mojom.AppHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAppAddedDeprecated(app) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.AppHost_OnAppAddedDeprecated_ParamsSpec,
      null,
      [app],
      false);
  }

  onAppListRefreshed(apps) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.AppHost_OnAppListRefreshed_ParamsSpec,
      null,
      [apps],
      false);
  }

  onPackageAdded(arcPackageInfo) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.AppHost_OnPackageAdded_ParamsSpec,
      null,
      [arcPackageInfo],
      false);
  }

  onPackageAppListRefreshed(package_name, apps) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.AppHost_OnPackageAppListRefreshed_ParamsSpec,
      null,
      [package_name, apps],
      false);
  }

  onPackageListRefreshed(packages) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.AppHost_OnPackageListRefreshed_ParamsSpec,
      null,
      [packages],
      false);
  }

  onPackageModified(arcPackageInfo) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.AppHost_OnPackageModified_ParamsSpec,
      null,
      [arcPackageInfo],
      false);
  }

  onPackageRemoved(package_name) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.AppHost_OnPackageRemoved_ParamsSpec,
      null,
      [package_name],
      false);
  }

  onTaskCreated(task_id, package_name, activity, name, intent, session_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.AppHost_OnTaskCreated_ParamsSpec,
      null,
      [task_id, package_name, activity, name, intent, session_id],
      false);
  }

  onTaskDescriptionUpdated(task_id, label, icon_png_data) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      arc.mojom.AppHost_OnTaskDescriptionUpdated_ParamsSpec,
      null,
      [task_id, label, icon_png_data],
      false);
  }

  onTaskDescriptionChanged(task_id, label, icon, primary_color, status_bar_color) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      arc.mojom.AppHost_OnTaskDescriptionChanged_ParamsSpec,
      null,
      [task_id, label, icon, primary_color, status_bar_color],
      false);
  }

  onTaskDestroyed(task_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.AppHost_OnTaskDestroyed_ParamsSpec,
      null,
      [task_id],
      false);
  }

  onTaskSetActive(task_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.AppHost_OnTaskSetActive_ParamsSpec,
      null,
      [task_id],
      false);
  }

  onNotificationsEnabledChanged(package_name, enabled) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.AppHost_OnNotificationsEnabledChanged_ParamsSpec,
      null,
      [package_name, enabled],
      false);
  }

  onInstallShortcut(shortcut) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.AppHost_OnInstallShortcut_ParamsSpec,
      null,
      [shortcut],
      false);
  }

  onInstallationStarted(package_name) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.AppHost_OnInstallationStarted_ParamsSpec,
      null,
      [package_name],
      false);
  }

  onInstallationFinished(result) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.AppHost_OnInstallationFinished_ParamsSpec,
      null,
      [result],
      false);
  }

  onUninstallShortcut(package_name, intent_uri) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.AppHost_OnUninstallShortcut_ParamsSpec,
      null,
      [package_name, intent_uri],
      false);
  }

  onInstallationProgressChanged(package_name, progress) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      arc.mojom.AppHost_OnInstallationProgressChanged_ParamsSpec,
      null,
      [package_name, progress],
      false);
  }

  onInstallationActiveChanged(package_name, active) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
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
    this.ordinalMap.set(2, 0); // Default ordinal 2 -> Index 0
    this.ordinalMap.set(0, 1); // Default ordinal 0 -> Index 1
    this.ordinalMap.set(8, 2); // Default ordinal 8 -> Index 2
    this.ordinalMap.set(13, 3); // Default ordinal 13 -> Index 3
    this.ordinalMap.set(9, 4); // Default ordinal 9 -> Index 4
    this.ordinalMap.set(10, 5); // Default ordinal 10 -> Index 5
    this.ordinalMap.set(3, 6); // Default ordinal 3 -> Index 6
    this.ordinalMap.set(4, 7); // Default ordinal 4 -> Index 7
    this.ordinalMap.set(17, 8); // Default ordinal 17 -> Index 8
    this.ordinalMap.set(18, 9); // Default ordinal 18 -> Index 9
    this.ordinalMap.set(5, 10); // Default ordinal 5 -> Index 10
    this.ordinalMap.set(6, 11); // Default ordinal 6 -> Index 11
    this.ordinalMap.set(7, 12); // Default ordinal 7 -> Index 12
    this.ordinalMap.set(11, 13); // Default ordinal 11 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(19, 17); // Default ordinal 19 -> Index 17
    this.ordinalMap.set(20, 18); // Default ordinal 20 -> Index 18
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnAppAddedDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppHost_OnAppAddedDeprecated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAppAddedDeprecated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnAppListRefreshed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppHost_OnAppListRefreshed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAppListRefreshed (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnPackageAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppHost_OnPackageAdded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPackageAdded (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnPackageAppListRefreshed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppHost_OnPackageAppListRefreshed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPackageAppListRefreshed (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnPackageListRefreshed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppHost_OnPackageListRefreshed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPackageListRefreshed (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnPackageModified
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppHost_OnPackageModified_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPackageModified (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnPackageRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppHost_OnPackageRemoved_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPackageRemoved (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnTaskCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppHost_OnTaskCreated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTaskCreated (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnTaskDescriptionUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppHost_OnTaskDescriptionUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTaskDescriptionUpdated (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnTaskDescriptionChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppHost_OnTaskDescriptionChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTaskDescriptionChanged (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnTaskDestroyed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppHost_OnTaskDestroyed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTaskDestroyed (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OnTaskSetActive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppHost_OnTaskSetActive_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTaskSetActive (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OnNotificationsEnabledChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppHost_OnNotificationsEnabledChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNotificationsEnabledChanged (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: OnInstallShortcut
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppHost_OnInstallShortcut_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInstallShortcut (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: OnInstallationStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppHost_OnInstallationStarted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInstallationStarted (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: OnInstallationFinished
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppHost_OnInstallationFinished_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInstallationFinished (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: OnUninstallShortcut
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppHost_OnUninstallShortcut_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnUninstallShortcut (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: OnInstallationProgressChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppHost_OnInstallationProgressChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInstallationProgressChanged (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: OnInstallationActiveChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppHost_OnInstallationActiveChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInstallationActiveChanged (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppHost_OnAppAddedDeprecated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAppAddedDeprecated');
          const result = this.impl.onAppAddedDeprecated(params.app);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppHost_OnAppListRefreshed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAppListRefreshed');
          const result = this.impl.onAppListRefreshed(params.apps);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppHost_OnPackageAdded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPackageAdded');
          const result = this.impl.onPackageAdded(params.arcPackageInfo);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppHost_OnPackageAppListRefreshed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPackageAppListRefreshed');
          const result = this.impl.onPackageAppListRefreshed(params.package_name, params.apps);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppHost_OnPackageListRefreshed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPackageListRefreshed');
          const result = this.impl.onPackageListRefreshed(params.packages);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppHost_OnPackageModified_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPackageModified');
          const result = this.impl.onPackageModified(params.arcPackageInfo);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppHost_OnPackageRemoved_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPackageRemoved');
          const result = this.impl.onPackageRemoved(params.package_name);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppHost_OnTaskCreated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTaskCreated');
          const result = this.impl.onTaskCreated(params.task_id, params.package_name, params.activity, params.name, params.intent, params.session_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppHost_OnTaskDescriptionUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTaskDescriptionUpdated');
          const result = this.impl.onTaskDescriptionUpdated(params.task_id, params.label, params.icon_png_data);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppHost_OnTaskDescriptionChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTaskDescriptionChanged');
          const result = this.impl.onTaskDescriptionChanged(params.task_id, params.label, params.icon, params.primary_color, params.status_bar_color);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppHost_OnTaskDestroyed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTaskDestroyed');
          const result = this.impl.onTaskDestroyed(params.task_id);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppHost_OnTaskSetActive_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTaskSetActive');
          const result = this.impl.onTaskSetActive(params.task_id);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppHost_OnNotificationsEnabledChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNotificationsEnabledChanged');
          const result = this.impl.onNotificationsEnabledChanged(params.package_name, params.enabled);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppHost_OnInstallShortcut_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onInstallShortcut');
          const result = this.impl.onInstallShortcut(params.shortcut);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppHost_OnInstallationStarted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onInstallationStarted');
          const result = this.impl.onInstallationStarted(params.package_name);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppHost_OnInstallationFinished_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onInstallationFinished');
          const result = this.impl.onInstallationFinished(params.result);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppHost_OnUninstallShortcut_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onUninstallShortcut');
          const result = this.impl.onUninstallShortcut(params.package_name, params.intent_uri);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppHost_OnInstallationProgressChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onInstallationProgressChanged');
          const result = this.impl.onInstallationProgressChanged(params.package_name, params.progress);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppHost_OnInstallationActiveChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onInstallationActiveChanged');
          const result = this.impl.onInstallationActiveChanged(params.package_name, params.active);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.AppHostReceiver = arc.mojom.AppHostReceiver;

arc.mojom.AppHostPtr = arc.mojom.AppHostRemote;
arc.mojom.AppHostRequest = arc.mojom.AppHostPendingReceiver;


// Interface: AppInstance
mojo.internal.Struct(
    arc.mojom.AppInstance_Init_ParamsSpec, 'arc.mojom.AppInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.AppHostSpec), null, false, 0, undefined),
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
};

arc.mojom.AppInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      arc.mojom.AppInstance_Init_ParamsSpec,
      arc.mojom.AppInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  closeTask(task_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.AppInstance_CloseTask_ParamsSpec,
      null,
      [task_id],
      false);
  }

  installPackage(arcPackageInfo) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.AppInstance_InstallPackage_ParamsSpec,
      null,
      [arcPackageInfo],
      false);
  }

  launchAppWithWindowInfo(package_name, activity, window_info) {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      arc.mojom.AppInstance_LaunchAppWithWindowInfo_ParamsSpec,
      null,
      [package_name, activity, window_info],
      false);
  }

  launchAppShortcutItem(package_name, shortcut_id, display_id) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      arc.mojom.AppInstance_LaunchAppShortcutItem_ParamsSpec,
      null,
      [package_name, shortcut_id, display_id],
      false);
  }

  launchIntentWithWindowInfo(intent_uri, window_info) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      arc.mojom.AppInstance_LaunchIntentWithWindowInfo_ParamsSpec,
      null,
      [intent_uri, window_info],
      false);
  }

  updateWindowInfo(window_info) {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      arc.mojom.AppInstance_UpdateWindowInfo_ParamsSpec,
      null,
      [window_info],
      false);
  }

  requestAppIcon(package_name, activity, pixel_size) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      arc.mojom.AppInstance_RequestAppIcon_ParamsSpec,
      arc.mojom.AppInstance_RequestAppIcon_ResponseParamsSpec,
      [package_name, activity, pixel_size],
      false);
  }

  getAppIcon(package_name, activity, pixel_size) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      arc.mojom.AppInstance_GetAppIcon_ParamsSpec,
      arc.mojom.AppInstance_GetAppIcon_ResponseParamsSpec,
      [package_name, activity, pixel_size],
      false);
  }

  requestShortcutIcon(icon_resource_id, pixel_size) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      arc.mojom.AppInstance_RequestShortcutIcon_ParamsSpec,
      arc.mojom.AppInstance_RequestShortcutIcon_ResponseParamsSpec,
      [icon_resource_id, pixel_size],
      false);
  }

  getAppShortcutIcon(icon_resource_id, pixel_size) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      arc.mojom.AppInstance_GetAppShortcutIcon_ParamsSpec,
      arc.mojom.AppInstance_GetAppShortcutIcon_ResponseParamsSpec,
      [icon_resource_id, pixel_size],
      false);
  }

  requestPackageIcon(package_name, pixel_size, normalize) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      arc.mojom.AppInstance_RequestPackageIcon_ParamsSpec,
      arc.mojom.AppInstance_RequestPackageIcon_ResponseParamsSpec,
      [package_name, pixel_size, normalize],
      false);
  }

  getPackageIcon(package_name, pixel_size, normalize) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      arc.mojom.AppInstance_GetPackageIcon_ParamsSpec,
      arc.mojom.AppInstance_GetPackageIcon_ResponseParamsSpec,
      [package_name, pixel_size, normalize],
      false);
  }

  removeCachedIcon(icon_resource_id) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.AppInstance_RemoveCachedIcon_ParamsSpec,
      null,
      [icon_resource_id],
      false);
  }

  setTaskActive(task_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.AppInstance_SetTaskActive_ParamsSpec,
      null,
      [task_id],
      false);
  }

  showPackageInfoDeprecated(package_name, dimension_on_screen) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.AppInstance_ShowPackageInfoDeprecated_ParamsSpec,
      null,
      [package_name, dimension_on_screen],
      false);
  }

  showPackageInfoOnPageDeprecated(package_name, page, dimension_on_screen) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.AppInstance_ShowPackageInfoOnPageDeprecated_ParamsSpec,
      null,
      [package_name, page, dimension_on_screen],
      false);
  }

  showPackageInfoOnPage(package_name, page, display_id) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      arc.mojom.AppInstance_ShowPackageInfoOnPage_ParamsSpec,
      null,
      [package_name, page, display_id],
      false);
  }

  setNotificationsEnabled(package_name, enabled) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.AppInstance_SetNotificationsEnabled_ParamsSpec,
      null,
      [package_name, enabled],
      false);
  }

  startPaiFlow() {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      arc.mojom.AppInstance_StartPaiFlow_ParamsSpec,
      arc.mojom.AppInstance_StartPaiFlow_ResponseParamsSpec,
      [],
      false);
  }

  startFastAppReinstallFlow(arc_package_names) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      arc.mojom.AppInstance_StartFastAppReinstallFlow_ParamsSpec,
      null,
      [arc_package_names],
      false);
  }

  uninstallPackage(package_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.AppInstance_UninstallPackage_ParamsSpec,
      null,
      [package_name],
      false);
  }

  updateAppDetails(package_name) {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      arc.mojom.AppInstance_UpdateAppDetails_ParamsSpec,
      null,
      [package_name],
      false);
  }

  getAndroidId() {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      arc.mojom.AppInstance_GetAndroidId_ParamsSpec,
      arc.mojom.AppInstance_GetAndroidId_ResponseParamsSpec,
      [],
      false);
  }

  getAppShortcutGlobalQueryItems(query, max_results) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ParamsSpec,
      arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ResponseParamsSpec,
      [query, max_results],
      false);
  }

  getAppShortcutItems(package_name) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      arc.mojom.AppInstance_GetAppShortcutItems_ParamsSpec,
      arc.mojom.AppInstance_GetAppShortcutItems_ResponseParamsSpec,
      [package_name],
      false);
  }

  getRecentAndSuggestedAppsFromPlayStore(query, max_results) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ParamsSpec,
      arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ResponseParamsSpec,
      [query, max_results],
      false);
  }

  isInstallable(package_name) {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      arc.mojom.AppInstance_IsInstallable_ParamsSpec,
      arc.mojom.AppInstance_IsInstallable_ResponseParamsSpec,
      [package_name],
      false);
  }

  getAppCategory(package_name) {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      arc.mojom.AppInstance_GetAppCategory_ParamsSpec,
      arc.mojom.AppInstance_GetAppCategory_ResponseParamsSpec,
      [package_name],
      false);
  }

  setAppLocale(package_name, locale_tag) {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
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
    this.ordinalMap.set(21, 0); // Default ordinal 21 -> Index 0
    this.ordinalMap.set(8, 1); // Default ordinal 8 -> Index 1
    this.ordinalMap.set(11, 2); // Default ordinal 11 -> Index 2
    this.ordinalMap.set(38, 3); // Default ordinal 38 -> Index 3
    this.ordinalMap.set(24, 4); // Default ordinal 24 -> Index 4
    this.ordinalMap.set(39, 5); // Default ordinal 39 -> Index 5
    this.ordinalMap.set(40, 6); // Default ordinal 40 -> Index 6
    this.ordinalMap.set(27, 7); // Default ordinal 27 -> Index 7
    this.ordinalMap.set(35, 8); // Default ordinal 35 -> Index 8
    this.ordinalMap.set(28, 9); // Default ordinal 28 -> Index 9
    this.ordinalMap.set(36, 10); // Default ordinal 36 -> Index 10
    this.ordinalMap.set(30, 11); // Default ordinal 30 -> Index 11
    this.ordinalMap.set(37, 12); // Default ordinal 37 -> Index 12
    this.ordinalMap.set(14, 13); // Default ordinal 14 -> Index 13
    this.ordinalMap.set(7, 14); // Default ordinal 7 -> Index 14
    this.ordinalMap.set(9, 15); // Default ordinal 9 -> Index 15
    this.ordinalMap.set(15, 16); // Default ordinal 15 -> Index 16
    this.ordinalMap.set(20, 17); // Default ordinal 20 -> Index 17
    this.ordinalMap.set(10, 18); // Default ordinal 10 -> Index 18
    this.ordinalMap.set(32, 19); // Default ordinal 32 -> Index 19
    this.ordinalMap.set(25, 20); // Default ordinal 25 -> Index 20
    this.ordinalMap.set(5, 21); // Default ordinal 5 -> Index 21
    this.ordinalMap.set(42, 22); // Default ordinal 42 -> Index 22
    this.ordinalMap.set(33, 23); // Default ordinal 33 -> Index 23
    this.ordinalMap.set(26, 24); // Default ordinal 26 -> Index 24
    this.ordinalMap.set(23, 25); // Default ordinal 23 -> Index 25
    this.ordinalMap.set(16, 26); // Default ordinal 16 -> Index 26
    this.ordinalMap.set(34, 27); // Default ordinal 34 -> Index 27
    this.ordinalMap.set(41, 28); // Default ordinal 41 -> Index 28
    this.ordinalMap.set(43, 29); // Default ordinal 43 -> Index 29
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_Init_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CloseTask
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_CloseTask_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseTask (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: InstallPackage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_InstallPackage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallPackage (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: LaunchAppWithWindowInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_LaunchAppWithWindowInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchAppWithWindowInfo (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: LaunchAppShortcutItem
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_LaunchAppShortcutItem_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchAppShortcutItem (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: LaunchIntentWithWindowInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_LaunchIntentWithWindowInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchIntentWithWindowInfo (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: UpdateWindowInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_UpdateWindowInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateWindowInfo (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: RequestAppIcon
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_RequestAppIcon_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestAppIcon (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetAppIcon
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_GetAppIcon_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAppIcon (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: RequestShortcutIcon
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_RequestShortcutIcon_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestShortcutIcon (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetAppShortcutIcon
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_GetAppShortcutIcon_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAppShortcutIcon (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: RequestPackageIcon
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_RequestPackageIcon_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPackageIcon (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetPackageIcon
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_GetPackageIcon_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPackageIcon (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: RemoveCachedIcon
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_RemoveCachedIcon_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveCachedIcon (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SetTaskActive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_SetTaskActive_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTaskActive (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: ShowPackageInfoDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_ShowPackageInfoDeprecated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowPackageInfoDeprecated (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: ShowPackageInfoOnPageDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_ShowPackageInfoOnPageDeprecated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowPackageInfoOnPageDeprecated (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: ShowPackageInfoOnPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_ShowPackageInfoOnPage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowPackageInfoOnPage (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: SetNotificationsEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_SetNotificationsEnabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNotificationsEnabled (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: StartPaiFlow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_StartPaiFlow_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartPaiFlow (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: StartFastAppReinstallFlow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_StartFastAppReinstallFlow_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartFastAppReinstallFlow (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: UninstallPackage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_UninstallPackage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UninstallPackage (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: UpdateAppDetails
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_UpdateAppDetails_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateAppDetails (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: GetAndroidId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_GetAndroidId_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAndroidId (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: GetAppShortcutGlobalQueryItems
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAppShortcutGlobalQueryItems (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: GetAppShortcutItems
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_GetAppShortcutItems_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAppShortcutItems (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: GetRecentAndSuggestedAppsFromPlayStore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRecentAndSuggestedAppsFromPlayStore (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: IsInstallable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_IsInstallable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsInstallable (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: GetAppCategory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_GetAppCategory_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAppCategory (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: SetAppLocale
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AppInstance_SetAppLocale_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAppLocale (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppInstance_Init_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.init');
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
          const params = decoder.decodeStruct(arc.mojom.AppInstance_CloseTask_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.closeTask');
          const result = this.impl.closeTask(params.task_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppInstance_InstallPackage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.installPackage');
          const result = this.impl.installPackage(params.arcPackageInfo);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppInstance_LaunchAppWithWindowInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.launchAppWithWindowInfo');
          const result = this.impl.launchAppWithWindowInfo(params.package_name, params.activity, params.window_info);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppInstance_LaunchAppShortcutItem_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.launchAppShortcutItem');
          const result = this.impl.launchAppShortcutItem(params.package_name, params.shortcut_id, params.display_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppInstance_LaunchIntentWithWindowInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.launchIntentWithWindowInfo');
          const result = this.impl.launchIntentWithWindowInfo(params.intent_uri, params.window_info);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppInstance_UpdateWindowInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateWindowInfo');
          const result = this.impl.updateWindowInfo(params.window_info);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppInstance_RequestAppIcon_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestAppIcon');
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
          const params = decoder.decodeStruct(arc.mojom.AppInstance_GetAppIcon_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAppIcon');
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
          const params = decoder.decodeStruct(arc.mojom.AppInstance_RequestShortcutIcon_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestShortcutIcon');
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
          const params = decoder.decodeStruct(arc.mojom.AppInstance_GetAppShortcutIcon_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAppShortcutIcon');
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
          const params = decoder.decodeStruct(arc.mojom.AppInstance_RequestPackageIcon_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestPackageIcon');
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
          const params = decoder.decodeStruct(arc.mojom.AppInstance_GetPackageIcon_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPackageIcon');
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
          const params = decoder.decodeStruct(arc.mojom.AppInstance_RemoveCachedIcon_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.removeCachedIcon');
          const result = this.impl.removeCachedIcon(params.icon_resource_id);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppInstance_SetTaskActive_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setTaskActive');
          const result = this.impl.setTaskActive(params.task_id);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppInstance_ShowPackageInfoDeprecated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showPackageInfoDeprecated');
          const result = this.impl.showPackageInfoDeprecated(params.package_name, params.dimension_on_screen);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppInstance_ShowPackageInfoOnPageDeprecated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showPackageInfoOnPageDeprecated');
          const result = this.impl.showPackageInfoOnPageDeprecated(params.package_name, params.page, params.dimension_on_screen);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppInstance_ShowPackageInfoOnPage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showPackageInfoOnPage');
          const result = this.impl.showPackageInfoOnPage(params.package_name, params.page, params.display_id);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppInstance_SetNotificationsEnabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setNotificationsEnabled');
          const result = this.impl.setNotificationsEnabled(params.package_name, params.enabled);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppInstance_StartPaiFlow_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startPaiFlow');
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
          const params = decoder.decodeStruct(arc.mojom.AppInstance_StartFastAppReinstallFlow_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startFastAppReinstallFlow');
          const result = this.impl.startFastAppReinstallFlow(params.arc_package_names);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppInstance_UninstallPackage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.uninstallPackage');
          const result = this.impl.uninstallPackage(params.package_name);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppInstance_UpdateAppDetails_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateAppDetails');
          const result = this.impl.updateAppDetails(params.package_name);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AppInstance_GetAndroidId_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAndroidId');
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
          const params = decoder.decodeStruct(arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAppShortcutGlobalQueryItems');
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
          const params = decoder.decodeStruct(arc.mojom.AppInstance_GetAppShortcutItems_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAppShortcutItems');
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
          const params = decoder.decodeStruct(arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getRecentAndSuggestedAppsFromPlayStore');
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
          const params = decoder.decodeStruct(arc.mojom.AppInstance_IsInstallable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isInstallable');
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
          const params = decoder.decodeStruct(arc.mojom.AppInstance_GetAppCategory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAppCategory');
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
          const params = decoder.decodeStruct(arc.mojom.AppInstance_SetAppLocale_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setAppLocale');
          const result = this.impl.setAppLocale(params.package_name, params.locale_tag);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.AppInstanceReceiver = arc.mojom.AppInstanceReceiver;

arc.mojom.AppInstancePtr = arc.mojom.AppInstanceRemote;
arc.mojom.AppInstanceRequest = arc.mojom.AppInstancePendingReceiver;

