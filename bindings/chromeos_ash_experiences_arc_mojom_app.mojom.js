// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/app.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: WindowSizeType
arc.mojom.WindowSizeType = {
};

// Enum: InstallPriority
arc.mojom.InstallPriority = {
  kMedium: 0,
  kLow: 1,
};

// Enum: ShowPackageInfoPage
arc.mojom.ShowPackageInfoPage = {
};

// Enum: AppDiscoveryRequestState
arc.mojom.AppDiscoveryRequestState = {
};

// Enum: AppShortcutItemType
arc.mojom.AppShortcutItemType = {
  which: 0,
  which: 1,
};

// Enum: PaiFlowState
arc.mojom.PaiFlowState = {
};

// Enum: AppCategory
arc.mojom.AppCategory = {
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
arc.mojom.InstallationResult = class {
  constructor(values = {}) {
    this.is_launchable_app = values.is_launchable_app !== undefined ? values.is_launchable_app : false;
  }
};

// Struct: AppStorage
arc.mojom.AppStorage = class {
  constructor(values = {}) {
    this.data_size_in_bytes = values.data_size_in_bytes !== undefined ? values.data_size_in_bytes : 0;
  }
};

// Struct: AppInfo
arc.mojom.AppInfo = class {
  constructor(values = {}) {
    this.initial_layout = values.initial_layout !== undefined ? values.initial_layout : false;
    this.app_storage = values.app_storage !== undefined ? values.app_storage : "";
    this.up. = values.up. !== undefined ? values.up. : null;
    this.app_category = values.app_category !== undefined ? values.app_category : false;
  }
};

// Struct: WebAppInfo
arc.mojom.WebAppInfo = class {
  constructor(values = {}) {
    this.certificate_sha256_fingerprint = values.certificate_sha256_fingerprint !== undefined ? values.certificate_sha256_fingerprint : 0;
  }
};

// Struct: WindowLayout
arc.mojom.WindowLayout = class {
  constructor(values = {}) {
    this.bounds = values.bounds !== undefined ? values.bounds : false;
  }
};

// Struct: PackageLocaleInfo
arc.mojom.PackageLocaleInfo = class {
  constructor(values = {}) {
    this.supported_locales = values.supported_locales !== undefined ? values.supported_locales : "";
    this.doesn't = values.doesn't !== undefined ? values.doesn't : null;
    this."ja"] = values."ja"] !== undefined ? values."ja"] : null;
    this.selected_locale = values.selected_locale !== undefined ? values.selected_locale : "";
  }
};

// Struct: ArcPackageInfo
arc.mojom.ArcPackageInfo = class {
  constructor(values = {}) {
    this.vpn_provider = values.vpn_provider !== undefined ? values.vpn_provider : 0;
    this.permission_states = values.permission_states !== undefined ? values.permission_states : false;
    this.priority = values.priority !== undefined ? values.priority : false;
    this.game_controls_opt_out = values.game_controls_opt_out !== undefined ? values.game_controls_opt_out : false;
  }
};

// Struct: ShortcutInfo
arc.mojom.ShortcutInfo = class {
  constructor(values = {}) {
    this.intent_uri = values.intent_uri !== undefined ? values.intent_uri : "";
  }
};

// Struct: RawIconPngData
arc.mojom.RawIconPngData = class {
  constructor(values = {}) {
    this.is_adaptive_icon = values.is_adaptive_icon !== undefined ? values.is_adaptive_icon : false;
    this.background_icon_png_data = values.background_icon_png_data !== undefined ? values.background_icon_png_data : 0;
  }
};

// Struct: WindowInfo
arc.mojom.WindowInfo = class {
  constructor(values = {}) {
    this.bounds = values.bounds !== undefined ? values.bounds : 0;
  }
};

// Struct: AppDiscoveryResult
arc.mojom.AppDiscoveryResult = class {
  constructor(values = {}) {
    this.icon = values.icon !== undefined ? values.icon : 0;
  }
};

// Struct: AppShortcutItem
arc.mojom.AppShortcutItem = class {
  constructor(values = {}) {
    this.short_label = values.short_label !== undefined ? values.short_label : "";
    this.type = values.type !== undefined ? values.type : 0;
    this.non-negative = values.non-negative !== undefined ? values.non-negative : null;
    this.rank = values.rank !== undefined ? values.rank : 0;
    this.icon = values.icon !== undefined ? values.icon : null;
  }
};

// Interface: AppHost
arc.mojom.AppHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.AppHost';
  }

  2(app) {
    // Method: 2
    // Call: 2(app)
  }

  0(apps) {
    // Method: 0
    // Call: 0(apps)
  }

  8(arcPackageInfo) {
    // Method: 8
    // Call: 8(arcPackageInfo)
  }

  13(package_name, apps) {
    // Method: 13
    // Call: 13(package_name, apps)
  }

  9(packages) {
    // Method: 9
    // Call: 9(packages)
  }

  10(arcPackageInfo) {
    // Method: 10
    // Call: 10(arcPackageInfo)
  }

  3(package_name) {
    // Method: 3
    // Call: 3(package_name)
  }

  4(task_id@0, package_name@1, activity@2, name@3, intent@4, session_id@5) {
    // Method: 4
    // Call: 4(task_id@0, package_name@1, activity@2, name@3, intent@4, session_id@5)
  }

  onTaskDescriptionChanged() {
    // Method: OnTaskDescriptionChanged
    // Call: OnTaskDescriptionChanged()
  }

  17(task_id, label, icon_png_data) {
    // Method: 17
    // Call: 17(task_id, label, icon_png_data)
  }

  18(task_id, label, icon, primary_color, status_bar_color) {
    // Method: 18
    // Call: 18(task_id, label, icon, primary_color, status_bar_color)
  }

  5(task_id) {
    // Method: 5
    // Call: 5(task_id)
  }

  6(task_id) {
    // Method: 6
    // Call: 6(task_id)
  }

  7(package_name, enabled) {
    // Method: 7
    // Call: 7(package_name, enabled)
  }

  11(shortcut) {
    // Method: 11
    // Call: 11(shortcut)
  }

  14(package_name@0) {
    // Method: 14
    // Call: 14(package_name@0)
  }

  15(result@1) {
    // Method: 15
    // Call: 15(result@1)
  }

  16(package_name, intent_uri) {
    // Method: 16
    // Call: 16(package_name, intent_uri)
  }

  19(package_name, progress) {
    // Method: 19
    // Call: 19(package_name, progress)
  }

  inactive(is) {
    // Method: inactive
    // Call: inactive(is)
  }

  20(package_name, active) {
    // Method: 20
    // Call: 20(package_name, active)
  }

};

arc.mojom.AppHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AppInstance
arc.mojom.AppInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.AppInstance';
  }

  21(host_remote) {
    // Method: 21
    // Call: 21(host_remote)
  }

  8(task_id) {
    // Method: 8
    // Call: 8(task_id)
  }

  11(arcPackageInfo) {
    // Method: 11
    // Call: 11(arcPackageInfo)
  }

  38(package_name, activity, window_info) {
    // Method: 38
    // Call: 38(package_name, activity, window_info)
  }

  24(package_name, shortcut_id, display_id) {
    // Method: 24
    // Call: 24(package_name, shortcut_id, display_id)
  }

  39(intent_uri, window_info) {
    // Method: 39
    // Call: 39(intent_uri, window_info)
  }

  40(window_info) {
    // Method: 40
    // Call: 40(window_info)
  }

  getAppIcon() {
    // Method: GetAppIcon
    // Call: GetAppIcon()
  }

  27(package_name, activity, pixel_size) {
    // Method: 27
    return new Promise((resolve) => {
      // Call: 27(package_name, activity, pixel_size)
      resolve({});
    });
  }

  35(package_name, activity, pixel_size) {
    // Method: 35
    return new Promise((resolve) => {
      // Call: 35(package_name, activity, pixel_size)
      resolve({});
    });
  }

  getAppShortcutIcon() {
    // Method: GetAppShortcutIcon
    // Call: GetAppShortcutIcon()
  }

  28(icon_resource_id, pixel_size) {
    // Method: 28
    return new Promise((resolve) => {
      // Call: 28(icon_resource_id, pixel_size)
      resolve({});
    });
  }

  36(icon_resource_id, pixel_size) {
    // Method: 36
    return new Promise((resolve) => {
      // Call: 36(icon_resource_id, pixel_size)
      resolve({});
    });
  }

  getPackageIcon() {
    // Method: GetPackageIcon
    // Call: GetPackageIcon()
  }

  30(package_name, pixel_size, normalize) {
    // Method: 30
    return new Promise((resolve) => {
      // Call: 30(package_name, pixel_size, normalize)
      resolve({});
    });
  }

  37(package_name, pixel_size, normalize) {
    // Method: 37
    return new Promise((resolve) => {
      // Call: 37(package_name, pixel_size, normalize)
      resolve({});
    });
  }

  14(icon_resource_id) {
    // Method: 14
    // Call: 14(icon_resource_id)
  }

  7(task_id) {
    // Method: 7
    // Call: 7(task_id)
  }

  9(package_name, dimension_on_screen) {
    // Method: 9
    // Call: 9(package_name, dimension_on_screen)
  }

  15(package_name, page, dimension_on_screen) {
    // Method: 15
    // Call: 15(package_name, page, dimension_on_screen)
  }

  20(package_name, page, display_id) {
    // Method: 20
    // Call: 20(package_name, page, display_id)
  }

  10(package_name, enabled) {
    // Method: 10
    // Call: 10(package_name, enabled)
  }

  32() {
    // Method: 32
    return new Promise((resolve) => {
      // Call: 32()
      resolve({});
    });
  }

  25(arc_package_names) {
    // Method: 25
    // Call: 25(arc_package_names)
  }

  error(ever) {
    // Method: Error
    // Call: Error(ever)
  }

  5(package_name) {
    // Method: 5
    // Call: 5(package_name)
  }

  42(package_name) {
    // Method: 42
    // Call: 42(package_name)
  }

  servers(flow) {
    // Method: servers
    // Call: servers(flow)
  }

  33() {
    // Method: 33
    return new Promise((resolve) => {
      // Call: 33()
      resolve({});
    });
  }

  26(query, max_results) {
    // Method: 26
    return new Promise((resolve) => {
      // Call: 26(query, max_results)
      resolve({});
    });
  }

  23(package_name) {
    // Method: 23
    return new Promise((resolve) => {
      // Call: 23(package_name)
      resolve({});
    });
  }

  16(query, max_results) {
    // Method: 16
    return new Promise((resolve) => {
      // Call: 16(query, max_results)
      resolve({});
    });
  }

  34(package_name) {
    // Method: 34
    return new Promise((resolve) => {
      // Call: 34(package_name)
      resolve({});
    });
  }

  41(package_name) {
    // Method: 41
    return new Promise((resolve) => {
      // Call: 41(package_name)
      resolve({});
    });
  }

  locale(47) {
    // Method: locale
    // Call: locale(47)
  }

  43(package_name, locale_tag) {
    // Method: 43
    // Call: 43(package_name, locale_tag)
  }

};

arc.mojom.AppInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
