// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/app.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};

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
      mojo.internal.StructField('resizable', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('bounds', 16, 0, arc.mojom.RectSpec.$, null, true, 0, undefined),
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
      mojo.internal.StructField('package_version', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('last_backup_android_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('last_backup_time', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('sync', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('deprecated_system', 32, 1, mojo.internal.Bool, false, false, 11, undefined),
      mojo.internal.StructField('vpn_provider', 32, 2, mojo.internal.Bool, false, false, 25, undefined),
      mojo.internal.StructField('web_app_info', 40, 0, arc.mojom.WebAppInfoSpec.$, null, true, 38, undefined),
      mojo.internal.StructField('deprecated_permissions', 48, 0, mojo.internal.Map(arc.mojom.AppPermissionSpec.$, mojo.internal.Bool, false), null, true, 41, undefined),
      mojo.internal.StructField('permission_states', 56, 0, mojo.internal.Map(arc.mojom.AppPermissionSpec.$, arc.mojom.PermissionStateSpec.$, false), null, true, 43, undefined),
      mojo.internal.StructField('version_name', 64, 0, mojo.internal.String, null, true, 51, undefined),
      mojo.internal.StructField('preinstalled', 72, 0, mojo.internal.Bool, false, false, 55, undefined),
      mojo.internal.StructField('priority', 80, 0, arc.mojom.InstallPrioritySpec.$, null, false, 56, undefined),
      mojo.internal.StructField('locale_info', 88, 0, arc.mojom.PackageLocaleInfoSpec.$, null, true, 60, undefined),
      mojo.internal.StructField('game_controls_opt_out', 96, 0, mojo.internal.Bool, false, false, 61, undefined),
    ],
    [[0, 48], [11, 48], [25, 48], [38, 56], [41, 64], [43, 72], [51, 80], [55, 88], [56, 96], [60, 104], [61, 112]]);

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
      mojo.internal.StructField('is_adaptive_icon', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('icon_png_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('foreground_icon_png_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('background_icon_png_data', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: WindowInfo
mojo.internal.Struct(
    arc.mojom.WindowInfoSpec, 'arc.mojom.WindowInfo', [
      mojo.internal.StructField('window_id', 0, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('state', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('display_id', 8, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('bounds', 16, 0, arc.mojom.RectSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AppDiscoveryResult
mojo.internal.Struct(
    arc.mojom.AppDiscoveryResultSpec, 'arc.mojom.AppDiscoveryResult', [
      mojo.internal.StructField('launch_intent_uri', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('install_intent_uri', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('label', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('is_instant_app', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_recent', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('publisher_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('formatted_price', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('review_score', 48, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('icon_png_data', 56, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('package_name', 64, 0, mojo.internal.String, null, true, 22, undefined),
      mojo.internal.StructField('icon', 72, 0, arc.mojom.RawIconPngDataSpec.$, null, true, 46, undefined),
    ],
    [[0, 72], [22, 80], [46, 88]]);

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
      mojo.internal.StructField('task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('package_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('activity', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 24, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('intent', 32, 0, mojo.internal.String, null, true, 15, undefined),
      mojo.internal.StructField('session_id', 40, 0, mojo.internal.Int32, 0, false, 48, undefined),
    ],
    [[0, 32], [13, 40], [15, 48], [48, 56]]);

mojo.internal.Struct(
    arc.mojom.AppHost_OnTaskDescriptionUpdated_ParamsSpec, 'arc.mojom.AppHost_OnTaskDescriptionUpdated_Params', [
      mojo.internal.StructField('task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon_png_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.AppHost_OnTaskDescriptionChanged_ParamsSpec, 'arc.mojom.AppHost_OnTaskDescriptionChanged_Params', [
      mojo.internal.StructField('task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon', 16, 0, arc.mojom.RawIconPngDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('primary_color', 24, 0, mojo.internal.Uint32, 0, false, 49, undefined),
      mojo.internal.StructField('status_bar_color', 28, 0, mojo.internal.Uint32, 0, false, 49, undefined),
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

arc.mojom.AppInstancePtr = arc.mojom.AppInstanceRemote;
arc.mojom.AppInstanceRequest = arc.mojom.AppInstancePendingReceiver;

