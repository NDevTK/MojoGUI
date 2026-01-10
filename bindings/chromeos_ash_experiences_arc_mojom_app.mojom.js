// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/app.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: WindowSizeType
arc.mojom.mojom.WindowSizeType = {
  kPhoneSize: 0,
  kTabletSize: 1,
  kMaximize: 2,
};
arc.mojom.mojom.WindowSizeTypeSpec = { $: mojo.internal.Enum() };

// Enum: InstallPriority
arc.mojom.mojom.InstallPriority = {
  kMedium: 0,
  kLow: 1,
};
arc.mojom.mojom.InstallPrioritySpec = { $: mojo.internal.Enum() };

// Enum: ShowPackageInfoPage
arc.mojom.mojom.ShowPackageInfoPage = {
  MAIN: 0,
  MANAGE_LINKS: 1,
};
arc.mojom.mojom.ShowPackageInfoPageSpec = { $: mojo.internal.Enum() };

// Enum: AppDiscoveryRequestState
arc.mojom.mojom.AppDiscoveryRequestState = {
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
arc.mojom.mojom.AppDiscoveryRequestStateSpec = { $: mojo.internal.Enum() };

// Enum: AppShortcutItemType
arc.mojom.mojom.AppShortcutItemType = {
  kStatic: 0,
  kDynamic: 1,
};
arc.mojom.mojom.AppShortcutItemTypeSpec = { $: mojo.internal.Enum() };

// Enum: PaiFlowState
arc.mojom.mojom.PaiFlowState = {
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
arc.mojom.mojom.PaiFlowStateSpec = { $: mojo.internal.Enum() };

// Enum: AppCategory
arc.mojom.mojom.AppCategory = {
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
arc.mojom.mojom.AppCategorySpec = { $: mojo.internal.Enum() };

// Struct: InstallationResult
arc.mojom.mojom.InstallationResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InstallationResult',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_launchable_app', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 62 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 62, packedSize: 24}]
    }
  }
};

// Struct: AppStorage
arc.mojom.mojom.AppStorageSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppStorage',
      packedSize: 24,
      fields: [
        { name: 'app_size_in_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'data_size_in_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AppInfo
arc.mojom.mojom.AppInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInfo',
      packedSize: 72,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'package_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'activity', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'sticky', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 2 },
        { name: 'notifications_enabled', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 7 },
        { name: 'suspended', packedOffset: 24, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 35 },
        { name: 'resize_lock_state', packedOffset: 28, packedBitOffset: 0, type: arc.mojom.ArcResizeLockStateSpec, nullable: false, minVersion: 47 },
        { name: 'initial_layout', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.WindowLayoutSpec, nullable: true, minVersion: 50 },
        { name: 'version_name', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 51 },
        { name: 'app_storage', packedOffset: 48, packedBitOffset: 0, type: arc.mojom.AppStorageSpec, nullable: true, minVersion: 52 },
        { name: 'need_fixup', packedOffset: 24, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 54 },
        { name: 'app_category', packedOffset: 56, packedBitOffset: 0, type: arc.mojom.AppCategorySpec, nullable: false, minVersion: 57 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 2, packedSize: 40}, {version: 7, packedSize: 40}, {version: 35, packedSize: 40}, {version: 47, packedSize: 40}, {version: 50, packedSize: 48}, {version: 51, packedSize: 56}, {version: 52, packedSize: 64}, {version: 54, packedSize: 64}, {version: 57, packedSize: 72}]
    }
  }
};

// Struct: WebAppInfo
arc.mojom.mojom.WebAppInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WebAppInfo',
      packedSize: 56,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'start_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'scope_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'theme_color', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'is_web_only_twa', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 44 },
        { name: 'certificate_sha256_fingerprint', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 45 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 44, packedSize: 48}, {version: 45, packedSize: 56}]
    }
  }
};

// Struct: WindowLayout
arc.mojom.mojom.WindowLayoutSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WindowLayout',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.WindowSizeTypeSpec, nullable: false, minVersion: 0 },
        { name: 'resizable', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.RectSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PackageLocaleInfo
arc.mojom.mojom.PackageLocaleInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PackageLocaleInfo',
      packedSize: 24,
      fields: [
        { name: 'supported_locales', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'selected_locale', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ArcPackageInfo
arc.mojom.mojom.ArcPackageInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcPackageInfo',
      packedSize: 88,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'package_version', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'last_backup_android_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'last_backup_time', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'sync', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'deprecated_system', packedOffset: 28, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 11 },
        { name: 'vpn_provider', packedOffset: 28, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 25 },
        { name: 'web_app_info', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.WebAppInfoSpec, nullable: true, minVersion: 38 },
        { name: 'deprecated_permissions', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Map(arc.mojom.AppPermissionSpec, mojo.internal.Bool, false), nullable: true, minVersion: 41 },
        { name: 'permission_states', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Map(arc.mojom.AppPermissionSpec, arc.mojom.PermissionStateSpec, false), nullable: true, minVersion: 43 },
        { name: 'version_name', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 51 },
        { name: 'preinstalled', packedOffset: 28, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 55 },
        { name: 'priority', packedOffset: 64, packedBitOffset: 0, type: arc.mojom.InstallPrioritySpec, nullable: false, minVersion: 56 },
        { name: 'locale_info', packedOffset: 72, packedBitOffset: 0, type: arc.mojom.PackageLocaleInfoSpec, nullable: true, minVersion: 60 },
        { name: 'game_controls_opt_out', packedOffset: 28, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 61 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 11, packedSize: 40}, {version: 25, packedSize: 40}, {version: 38, packedSize: 48}, {version: 41, packedSize: 56}, {version: 43, packedSize: 64}, {version: 51, packedSize: 72}, {version: 55, packedSize: 72}, {version: 56, packedSize: 80}, {version: 60, packedSize: 88}, {version: 61, packedSize: 88}]
    }
  }
};

// Struct: ShortcutInfo
arc.mojom.mojom.ShortcutInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ShortcutInfo',
      packedSize: 40,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'package_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'icon_resource_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'intent_uri', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: RawIconPngData
arc.mojom.mojom.RawIconPngDataSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.RawIconPngData',
      packedSize: 40,
      fields: [
        { name: 'is_adaptive_icon', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'icon_png_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'foreground_icon_png_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'background_icon_png_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: WindowInfo
arc.mojom.mojom.WindowInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WindowInfo',
      packedSize: 32,
      fields: [
        { name: 'window_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.RectSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: AppDiscoveryResult
arc.mojom.mojom.AppDiscoveryResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppDiscoveryResult',
      packedSize: 80,
      fields: [
        { name: 'launch_intent_uri', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'install_intent_uri', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'is_instant_app', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_recent', packedOffset: 52, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'publisher_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'formatted_price', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'review_score', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'icon_png_data', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'package_name', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 22 },
        { name: 'icon', packedOffset: 64, packedBitOffset: 0, type: arc.mojom.RawIconPngDataSpec, nullable: true, minVersion: 46 },
      ],
      versions: [{version: 0, packedSize: 64}, {version: 22, packedSize: 72}, {version: 46, packedSize: 80}]
    }
  }
};

// Struct: AppShortcutItem
arc.mojom.mojom.AppShortcutItemSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppShortcutItem',
      packedSize: 56,
      fields: [
        { name: 'shortcut_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'short_label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'icon_png', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'package_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 31 },
        { name: 'type', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.AppShortcutItemTypeSpec, nullable: false, minVersion: 32 },
        { name: 'rank', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 32 },
        { name: 'icon', packedOffset: 40, packedBitOffset: 0, type: arc.mojom.RawIconPngDataSpec, nullable: true, minVersion: 46 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 31, packedSize: 40}, {version: 32, packedSize: 48}, {version: 46, packedSize: 56}]
    }
  }
};

// Interface: AppHost
arc.mojom.mojom.AppHost = {};

arc.mojom.mojom.AppHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.AppHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AppHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.AppHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.AppHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.AppHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAppAddedDeprecated(app) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.AppHost_OnAppAddedDeprecated_ParamsSpec,
      null,
      [app]);
  }

  onAppListRefreshed(apps) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.AppHost_OnAppListRefreshed_ParamsSpec,
      null,
      [apps]);
  }

  onPackageAdded(arcPackageInfo) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.mojom.AppHost_OnPackageAdded_ParamsSpec,
      null,
      [arcPackageInfo]);
  }

  onPackageAppListRefreshed(package_name, apps) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.mojom.AppHost_OnPackageAppListRefreshed_ParamsSpec,
      null,
      [package_name, apps]);
  }

  onPackageListRefreshed(packages) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.mojom.AppHost_OnPackageListRefreshed_ParamsSpec,
      null,
      [packages]);
  }

  onPackageModified(arcPackageInfo) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.mojom.AppHost_OnPackageModified_ParamsSpec,
      null,
      [arcPackageInfo]);
  }

  onPackageRemoved(package_name) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.mojom.AppHost_OnPackageRemoved_ParamsSpec,
      null,
      [package_name]);
  }

  onTaskCreated(task_id, package_name, activity, name, intent, session_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.mojom.AppHost_OnTaskCreated_ParamsSpec,
      null,
      [task_id, package_name, activity, name, intent, session_id]);
  }

  onTaskDescriptionUpdated(task_id, label, icon_png_data) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      arc.mojom.mojom.AppHost_OnTaskDescriptionUpdated_ParamsSpec,
      null,
      [task_id, label, icon_png_data]);
  }

  onTaskDescriptionChanged(task_id, label, icon, primary_color, status_bar_color) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      arc.mojom.mojom.AppHost_OnTaskDescriptionChanged_ParamsSpec,
      null,
      [task_id, label, icon, primary_color, status_bar_color]);
  }

  onTaskDestroyed(task_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.mojom.AppHost_OnTaskDestroyed_ParamsSpec,
      null,
      [task_id]);
  }

  onTaskSetActive(task_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.mojom.AppHost_OnTaskSetActive_ParamsSpec,
      null,
      [task_id]);
  }

  onNotificationsEnabledChanged(package_name, enabled) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.mojom.AppHost_OnNotificationsEnabledChanged_ParamsSpec,
      null,
      [package_name, enabled]);
  }

  onInstallShortcut(shortcut) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.mojom.AppHost_OnInstallShortcut_ParamsSpec,
      null,
      [shortcut]);
  }

  onInstallationStarted(package_name) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.mojom.AppHost_OnInstallationStarted_ParamsSpec,
      null,
      [package_name]);
  }

  onInstallationFinished(result) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.mojom.AppHost_OnInstallationFinished_ParamsSpec,
      null,
      [result]);
  }

  onUninstallShortcut(package_name, intent_uri) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.mojom.AppHost_OnUninstallShortcut_ParamsSpec,
      null,
      [package_name, intent_uri]);
  }

  onInstallationProgressChanged(package_name, progress) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      arc.mojom.mojom.AppHost_OnInstallationProgressChanged_ParamsSpec,
      null,
      [package_name, progress]);
  }

  onInstallationActiveChanged(package_name, active) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      arc.mojom.mojom.AppHost_OnInstallationActiveChanged_ParamsSpec,
      null,
      [package_name, active]);
  }

};

arc.mojom.mojom.AppHost.getRemote = function() {
  let remote = new arc.mojom.mojom.AppHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AppHost',
    'context');
  return remote.$;
};

// ParamsSpec for OnAppAddedDeprecated
arc.mojom.mojom.AppHost_OnAppAddedDeprecated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppHost.OnAppAddedDeprecated_Params',
      packedSize: 16,
      fields: [
        { name: 'app', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AppInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAppListRefreshed
arc.mojom.mojom.AppHost_OnAppListRefreshed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppHost.OnAppListRefreshed_Params',
      packedSize: 16,
      fields: [
        { name: 'apps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.AppInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPackageAdded
arc.mojom.mojom.AppHost_OnPackageAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppHost.OnPackageAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'arcPackageInfo', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcPackageInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPackageAppListRefreshed
arc.mojom.mojom.AppHost_OnPackageAppListRefreshed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppHost.OnPackageAppListRefreshed_Params',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'apps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.AppInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnPackageListRefreshed
arc.mojom.mojom.AppHost_OnPackageListRefreshed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppHost.OnPackageListRefreshed_Params',
      packedSize: 16,
      fields: [
        { name: 'packages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.ArcPackageInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPackageModified
arc.mojom.mojom.AppHost_OnPackageModified_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppHost.OnPackageModified_Params',
      packedSize: 16,
      fields: [
        { name: 'arcPackageInfo', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcPackageInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPackageRemoved
arc.mojom.mojom.AppHost_OnPackageRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppHost.OnPackageRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTaskCreated
arc.mojom.mojom.AppHost_OnTaskCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppHost.OnTaskCreated_Params',
      packedSize: 48,
      fields: [
        { name: 'task_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'activity', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 13 },
        { name: 'intent', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 15 },
        { name: 'session_id', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 48 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 13, packedSize: 40}, {version: 15, packedSize: 48}, {version: 48, packedSize: 48}]
    }
  }
};

// ParamsSpec for OnTaskDescriptionUpdated
arc.mojom.mojom.AppHost_OnTaskDescriptionUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppHost.OnTaskDescriptionUpdated_Params',
      packedSize: 32,
      fields: [
        { name: 'task_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'icon_png_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnTaskDescriptionChanged
arc.mojom.mojom.AppHost_OnTaskDescriptionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppHost.OnTaskDescriptionChanged_Params',
      packedSize: 40,
      fields: [
        { name: 'task_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'icon', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.RawIconPngDataSpec, nullable: false, minVersion: 0 },
        { name: 'primary_color', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 49 },
        { name: 'status_bar_color', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 49 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 49, packedSize: 40}]
    }
  }
};

// ParamsSpec for OnTaskDestroyed
arc.mojom.mojom.AppHost_OnTaskDestroyed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppHost.OnTaskDestroyed_Params',
      packedSize: 16,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTaskSetActive
arc.mojom.mojom.AppHost_OnTaskSetActive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppHost.OnTaskSetActive_Params',
      packedSize: 16,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnNotificationsEnabledChanged
arc.mojom.mojom.AppHost_OnNotificationsEnabledChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppHost.OnNotificationsEnabledChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnInstallShortcut
arc.mojom.mojom.AppHost_OnInstallShortcut_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppHost.OnInstallShortcut_Params',
      packedSize: 16,
      fields: [
        { name: 'shortcut', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ShortcutInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnInstallationStarted
arc.mojom.mojom.AppHost_OnInstallationStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppHost.OnInstallationStarted_Params',
      packedSize: 16,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 17 },
      ],
      versions: [{version: 17, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnInstallationFinished
arc.mojom.mojom.AppHost_OnInstallationFinished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppHost.OnInstallationFinished_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.InstallationResultSpec, nullable: true, minVersion: 17 },
      ],
      versions: [{version: 17, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnUninstallShortcut
arc.mojom.mojom.AppHost_OnUninstallShortcut_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppHost.OnUninstallShortcut_Params',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'intent_uri', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnInstallationProgressChanged
arc.mojom.mojom.AppHost_OnInstallationProgressChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppHost.OnInstallationProgressChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'progress', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnInstallationActiveChanged
arc.mojom.mojom.AppHost_OnInstallationActiveChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppHost.OnInstallationActiveChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'active', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.AppHostPtr = arc.mojom.mojom.AppHostRemote;
arc.mojom.mojom.AppHostRequest = arc.mojom.mojom.AppHostPendingReceiver;


// Interface: AppInstance
arc.mojom.mojom.AppInstance = {};

arc.mojom.mojom.AppInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.AppInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AppInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.AppInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.AppInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.AppInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      arc.mojom.mojom.AppInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  closeTask(task_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.mojom.AppInstance_CloseTask_ParamsSpec,
      null,
      [task_id]);
  }

  installPackage(arcPackageInfo) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.mojom.AppInstance_InstallPackage_ParamsSpec,
      null,
      [arcPackageInfo]);
  }

  launchAppWithWindowInfo(package_name, activity, window_info) {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      arc.mojom.mojom.AppInstance_LaunchAppWithWindowInfo_ParamsSpec,
      null,
      [package_name, activity, window_info]);
  }

  launchAppShortcutItem(package_name, shortcut_id, display_id) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      arc.mojom.mojom.AppInstance_LaunchAppShortcutItem_ParamsSpec,
      null,
      [package_name, shortcut_id, display_id]);
  }

  launchIntentWithWindowInfo(intent_uri, window_info) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      arc.mojom.mojom.AppInstance_LaunchIntentWithWindowInfo_ParamsSpec,
      null,
      [intent_uri, window_info]);
  }

  updateWindowInfo(window_info) {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      arc.mojom.mojom.AppInstance_UpdateWindowInfo_ParamsSpec,
      null,
      [window_info]);
  }

  requestAppIcon(package_name, activity, pixel_size) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      arc.mojom.mojom.AppInstance_RequestAppIcon_ParamsSpec,
      arc.mojom.mojom.AppInstance_RequestAppIcon_ResponseParamsSpec,
      [package_name, activity, pixel_size]);
  }

  getAppIcon(package_name, activity, pixel_size) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      arc.mojom.mojom.AppInstance_GetAppIcon_ParamsSpec,
      arc.mojom.mojom.AppInstance_GetAppIcon_ResponseParamsSpec,
      [package_name, activity, pixel_size]);
  }

  requestShortcutIcon(icon_resource_id, pixel_size) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      arc.mojom.mojom.AppInstance_RequestShortcutIcon_ParamsSpec,
      arc.mojom.mojom.AppInstance_RequestShortcutIcon_ResponseParamsSpec,
      [icon_resource_id, pixel_size]);
  }

  getAppShortcutIcon(icon_resource_id, pixel_size) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      arc.mojom.mojom.AppInstance_GetAppShortcutIcon_ParamsSpec,
      arc.mojom.mojom.AppInstance_GetAppShortcutIcon_ResponseParamsSpec,
      [icon_resource_id, pixel_size]);
  }

  requestPackageIcon(package_name, pixel_size, normalize) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      arc.mojom.mojom.AppInstance_RequestPackageIcon_ParamsSpec,
      arc.mojom.mojom.AppInstance_RequestPackageIcon_ResponseParamsSpec,
      [package_name, pixel_size, normalize]);
  }

  getPackageIcon(package_name, pixel_size, normalize) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      arc.mojom.mojom.AppInstance_GetPackageIcon_ParamsSpec,
      arc.mojom.mojom.AppInstance_GetPackageIcon_ResponseParamsSpec,
      [package_name, pixel_size, normalize]);
  }

  removeCachedIcon(icon_resource_id) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.mojom.AppInstance_RemoveCachedIcon_ParamsSpec,
      null,
      [icon_resource_id]);
  }

  setTaskActive(task_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.mojom.AppInstance_SetTaskActive_ParamsSpec,
      null,
      [task_id]);
  }

  showPackageInfoDeprecated(package_name, dimension_on_screen) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.mojom.AppInstance_ShowPackageInfoDeprecated_ParamsSpec,
      null,
      [package_name, dimension_on_screen]);
  }

  showPackageInfoOnPageDeprecated(package_name, page, dimension_on_screen) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.mojom.AppInstance_ShowPackageInfoOnPageDeprecated_ParamsSpec,
      null,
      [package_name, page, dimension_on_screen]);
  }

  showPackageInfoOnPage(package_name, page, display_id) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      arc.mojom.mojom.AppInstance_ShowPackageInfoOnPage_ParamsSpec,
      null,
      [package_name, page, display_id]);
  }

  setNotificationsEnabled(package_name, enabled) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.mojom.AppInstance_SetNotificationsEnabled_ParamsSpec,
      null,
      [package_name, enabled]);
  }

  startPaiFlow() {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      arc.mojom.mojom.AppInstance_StartPaiFlow_ParamsSpec,
      arc.mojom.mojom.AppInstance_StartPaiFlow_ResponseParamsSpec,
      []);
  }

  startFastAppReinstallFlow(arc_package_names) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      arc.mojom.mojom.AppInstance_StartFastAppReinstallFlow_ParamsSpec,
      null,
      [arc_package_names]);
  }

  uninstallPackage(package_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.mojom.AppInstance_UninstallPackage_ParamsSpec,
      null,
      [package_name]);
  }

  updateAppDetails(package_name) {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      arc.mojom.mojom.AppInstance_UpdateAppDetails_ParamsSpec,
      null,
      [package_name]);
  }

  getAndroidId() {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      arc.mojom.mojom.AppInstance_GetAndroidId_ParamsSpec,
      arc.mojom.mojom.AppInstance_GetAndroidId_ResponseParamsSpec,
      []);
  }

  getAppShortcutGlobalQueryItems(query, max_results) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      arc.mojom.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ParamsSpec,
      arc.mojom.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ResponseParamsSpec,
      [query, max_results]);
  }

  getAppShortcutItems(package_name) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      arc.mojom.mojom.AppInstance_GetAppShortcutItems_ParamsSpec,
      arc.mojom.mojom.AppInstance_GetAppShortcutItems_ResponseParamsSpec,
      [package_name]);
  }

  getRecentAndSuggestedAppsFromPlayStore(query, max_results) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ParamsSpec,
      arc.mojom.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ResponseParamsSpec,
      [query, max_results]);
  }

  isInstallable(package_name) {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      arc.mojom.mojom.AppInstance_IsInstallable_ParamsSpec,
      arc.mojom.mojom.AppInstance_IsInstallable_ResponseParamsSpec,
      [package_name]);
  }

  getAppCategory(package_name) {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      arc.mojom.mojom.AppInstance_GetAppCategory_ParamsSpec,
      arc.mojom.mojom.AppInstance_GetAppCategory_ResponseParamsSpec,
      [package_name]);
  }

  setAppLocale(package_name, locale_tag) {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      arc.mojom.mojom.AppInstance_SetAppLocale_ParamsSpec,
      null,
      [package_name, locale_tag]);
  }

};

arc.mojom.mojom.AppInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.AppInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AppInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.AppInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.AppHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CloseTask
arc.mojom.mojom.AppInstance_CloseTask_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.CloseTask_Params',
      packedSize: 16,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InstallPackage
arc.mojom.mojom.AppInstance_InstallPackage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.InstallPackage_Params',
      packedSize: 16,
      fields: [
        { name: 'arcPackageInfo', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcPackageInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LaunchAppWithWindowInfo
arc.mojom.mojom.AppInstance_LaunchAppWithWindowInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.LaunchAppWithWindowInfo_Params',
      packedSize: 32,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'activity', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'window_info', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.WindowInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for LaunchAppShortcutItem
arc.mojom.mojom.AppInstance_LaunchAppShortcutItem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.LaunchAppShortcutItem_Params',
      packedSize: 32,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'shortcut_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'display_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for LaunchIntentWithWindowInfo
arc.mojom.mojom.AppInstance_LaunchIntentWithWindowInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.LaunchIntentWithWindowInfo_Params',
      packedSize: 24,
      fields: [
        { name: 'intent_uri', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'window_info', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.WindowInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateWindowInfo
arc.mojom.mojom.AppInstance_UpdateWindowInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.UpdateWindowInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'window_info', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.WindowInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestAppIcon
arc.mojom.mojom.AppInstance_RequestAppIcon_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.RequestAppIcon_Params',
      packedSize: 32,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'activity', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pixel_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.mojom.AppInstance_RequestAppIcon_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.RequestAppIcon_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'icon_png_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAppIcon
arc.mojom.mojom.AppInstance_GetAppIcon_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.GetAppIcon_Params',
      packedSize: 32,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'activity', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pixel_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.mojom.AppInstance_GetAppIcon_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.GetAppIcon_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'icon', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.RawIconPngDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestShortcutIcon
arc.mojom.mojom.AppInstance_RequestShortcutIcon_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.RequestShortcutIcon_Params',
      packedSize: 24,
      fields: [
        { name: 'icon_resource_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pixel_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.AppInstance_RequestShortcutIcon_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.RequestShortcutIcon_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'icon_png_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAppShortcutIcon
arc.mojom.mojom.AppInstance_GetAppShortcutIcon_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.GetAppShortcutIcon_Params',
      packedSize: 24,
      fields: [
        { name: 'icon_resource_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pixel_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.AppInstance_GetAppShortcutIcon_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.GetAppShortcutIcon_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'icon', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.RawIconPngDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestPackageIcon
arc.mojom.mojom.AppInstance_RequestPackageIcon_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.RequestPackageIcon_Params',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pixel_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'normalize', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.AppInstance_RequestPackageIcon_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.RequestPackageIcon_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'icon_png_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPackageIcon
arc.mojom.mojom.AppInstance_GetPackageIcon_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.GetPackageIcon_Params',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pixel_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'normalize', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.AppInstance_GetPackageIcon_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.GetPackageIcon_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'icon', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.RawIconPngDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RemoveCachedIcon
arc.mojom.mojom.AppInstance_RemoveCachedIcon_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.RemoveCachedIcon_Params',
      packedSize: 16,
      fields: [
        { name: 'icon_resource_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTaskActive
arc.mojom.mojom.AppInstance_SetTaskActive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.SetTaskActive_Params',
      packedSize: 16,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowPackageInfoDeprecated
arc.mojom.mojom.AppInstance_ShowPackageInfoDeprecated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.ShowPackageInfoDeprecated_Params',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'dimension_on_screen', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ShowPackageInfoOnPageDeprecated
arc.mojom.mojom.AppInstance_ShowPackageInfoOnPageDeprecated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.ShowPackageInfoOnPageDeprecated_Params',
      packedSize: 32,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'page', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.ShowPackageInfoPageSpec, nullable: false, minVersion: 0 },
        { name: 'dimension_on_screen', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ShowPackageInfoOnPage
arc.mojom.mojom.AppInstance_ShowPackageInfoOnPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.ShowPackageInfoOnPage_Params',
      packedSize: 32,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'page', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.ShowPackageInfoPageSpec, nullable: false, minVersion: 0 },
        { name: 'display_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for SetNotificationsEnabled
arc.mojom.mojom.AppInstance_SetNotificationsEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.SetNotificationsEnabled_Params',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for StartPaiFlow
arc.mojom.mojom.AppInstance_StartPaiFlow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.StartPaiFlow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.AppInstance_StartPaiFlow_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.StartPaiFlow_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.PaiFlowStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartFastAppReinstallFlow
arc.mojom.mojom.AppInstance_StartFastAppReinstallFlow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.StartFastAppReinstallFlow_Params',
      packedSize: 16,
      fields: [
        { name: 'arc_package_names', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UninstallPackage
arc.mojom.mojom.AppInstance_UninstallPackage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.UninstallPackage_Params',
      packedSize: 16,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateAppDetails
arc.mojom.mojom.AppInstance_UpdateAppDetails_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.UpdateAppDetails_Params',
      packedSize: 16,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAndroidId
arc.mojom.mojom.AppInstance_GetAndroidId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.GetAndroidId_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.AppInstance_GetAndroidId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.GetAndroidId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'android_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAppShortcutGlobalQueryItems
arc.mojom.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.GetAppShortcutGlobalQueryItems_Params',
      packedSize: 24,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'max_results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.GetAppShortcutGlobalQueryItems_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'shortcut_items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.AppShortcutItemSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAppShortcutItems
arc.mojom.mojom.AppInstance_GetAppShortcutItems_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.GetAppShortcutItems_Params',
      packedSize: 16,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.AppInstance_GetAppShortcutItems_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.GetAppShortcutItems_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'shortcut_items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.AppShortcutItemSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetRecentAndSuggestedAppsFromPlayStore
arc.mojom.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.GetRecentAndSuggestedAppsFromPlayStore_Params',
      packedSize: 24,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'max_results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.GetRecentAndSuggestedAppsFromPlayStore_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.AppDiscoveryResultSpec, false), nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.AppDiscoveryRequestStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for IsInstallable
arc.mojom.mojom.AppInstance_IsInstallable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.IsInstallable_Params',
      packedSize: 16,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.AppInstance_IsInstallable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.IsInstallable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_installable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAppCategory
arc.mojom.mojom.AppInstance_GetAppCategory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.GetAppCategory_Params',
      packedSize: 16,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.AppInstance_GetAppCategory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.GetAppCategory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'category', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AppCategorySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAppLocale
arc.mojom.mojom.AppInstance_SetAppLocale_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInstance.SetAppLocale_Params',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'locale_tag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.AppInstancePtr = arc.mojom.mojom.AppInstanceRemote;
arc.mojom.mojom.AppInstanceRequest = arc.mojom.mojom.AppInstancePendingReceiver;

