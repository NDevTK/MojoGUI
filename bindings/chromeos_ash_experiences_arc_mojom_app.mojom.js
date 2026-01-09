// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/app.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: WindowSizeType
arc.mojom.WindowSizeType = {
  kPhoneSize: 0,
  kTabletSize: 1,
  kMaximize: 2,
};

// Enum: InstallPriority
arc.mojom.InstallPriority = {
  kMedium: 0,
  kLow: 1,
};

// Enum: ShowPackageInfoPage
arc.mojom.ShowPackageInfoPage = {
  MAIN: 0,
  MANAGE_LINKS: 1,
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
arc.mojom.InstallationResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InstallationResult',
      packedSize: 16,
      fields: [
        { name: 'is_launchable_app', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AppStorage
arc.mojom.AppStorageSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppStorage',
      packedSize: 16,
      fields: [
        { name: 'data_size_in_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AppInfo
arc.mojom.AppInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppInfo',
      packedSize: 16,
      fields: [
        { name: 'app_category', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebAppInfo
arc.mojom.WebAppInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WebAppInfo',
      packedSize: 16,
      fields: [
        { name: 'certificate_sha256_fingerprint', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WindowLayout
arc.mojom.WindowLayoutSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WindowLayout',
      packedSize: 16,
      fields: [
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PackageLocaleInfo
arc.mojom.PackageLocaleInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PackageLocaleInfo',
      packedSize: 16,
      fields: [
        { name: 'selected_locale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ArcPackageInfo
arc.mojom.ArcPackageInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcPackageInfo',
      packedSize: 16,
      fields: [
        { name: 'game_controls_opt_out', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ShortcutInfo
arc.mojom.ShortcutInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ShortcutInfo',
      packedSize: 16,
      fields: [
        { name: 'intent_uri', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RawIconPngData
arc.mojom.RawIconPngDataSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.RawIconPngData',
      packedSize: 16,
      fields: [
        { name: 'background_icon_png_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WindowInfo
arc.mojom.WindowInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WindowInfo',
      packedSize: 16,
      fields: [
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AppDiscoveryResult
arc.mojom.AppDiscoveryResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppDiscoveryResult',
      packedSize: 16,
      fields: [
        { name: 'icon', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AppShortcutItem
arc.mojom.AppShortcutItemSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppShortcutItem',
      packedSize: 16,
      fields: [
        { name: 'icon', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: AppHost
arc.mojom.AppHost = {};

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

// Legacy compatibility
arc.mojom.AppHostPtr = arc.mojom.AppHostRemote;
arc.mojom.AppHostRequest = arc.mojom.AppHostPendingReceiver;


// Interface: AppInstance
arc.mojom.AppInstance = {};

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

// Legacy compatibility
arc.mojom.AppInstancePtr = arc.mojom.AppInstanceRemote;
arc.mojom.AppInstanceRequest = arc.mojom.AppInstancePendingReceiver;

