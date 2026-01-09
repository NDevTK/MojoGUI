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

};

arc.mojom.AppInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
