// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/metrics.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: BootType
arc.mojom.BootType = {
  UNKNOWN: 0,
  FIRST_BOOT: 1,
  FIRST_BOOT_AFTER_UPDATE: 2,
  REGULAR_BOOT: 3,
};

// Enum: NativeBridgeType
arc.mojom.NativeBridgeType = {
  NONE: 0,
  HOUDINI: 1,
  NDK_TRANSLATION: 2,
};

// Enum: CompanionLibApiId
arc.mojom.CompanionLibApiId = {
  UNSUPPORTED: 0,
  GET_DEVICE_MODE: 1,
  GET_DISPLAY_TOPOLOGY: 2,
  GET_PRIMARY_DISPLAY_ID: 3,
  GET_WORKSPACE_INSETS: 4,
  REGISTER_CALLBACK: 5,
  UNREGISTER_CALLBACK: 6,
  ACTIVATE_TASK: 7,
  GET_CAPTION_HEIGHT: 8,
  GET_HIDDEN_CAPTION_BUTTON: 9,
  HIDE_CAPTION_BUTTON: 10,
  GET_TASK_WINDOW_BOUNDS: 11,
  GET_TASK_WINDOW_STATE: 12,
  IS_SHADOW_HIDDEN: 13,
  HIDE_SHADOW: 14,
  ON_CLOSE_REQUEST_RESPONSE: 15,
  SET_ON_CLOSE_REQUEST_HANDLER: 16,
  REMOVE_ON_CLOSE_REQUEST_HANDLER: 17,
  SET_TASK_WINDOW_BOUNDS: 18,
  SET_TASK_WINDOW_STATE: 19,
  GET_WINDOW_STATE: 20,
  WINDOW_INTERACTION_CONTROLLER: 21,
  SET_CLIPPING_TO_TASK_DISABLE: 22,
  IS_CLIPPING_TO_TASK_DISABLED: 23,
};

// Enum: ArcDnsQuery
arc.mojom.ArcDnsQuery = {
  OTHER_HOST_NAME: 0,
  ANDROID_API_HOST_NAME: 1,
};

// Enum: ArcNetworkEvent
arc.mojom.ArcNetworkEvent = {
  kUnknown: 0,
  kAndroidLegacyVpnConnection: 1,
  kAndroidThirdPartyVpnConnection: 2,
  kMojoConfigureAndroidVpn: 3,
  kMojoDisconnectAndroidVpn: 4,
  kMojoDnsTest: 5,
  kMojoHttpTest: 6,
  kMojoPingTest: 7,
  kWifiScannerClientConnection: 8,
  kWifiScannerGetScanResults: 9,
  kWifiScannerGetSingleScanResults: 10,
  kWifiScannerEnable: 11,
  kWifiScannerDisable: 12,
  kWifiScannerStartSingleScan: 13,
  kWifiScannerStartBackgroundScan: 14,
  kWifiScannerStartPnoScan: 15,
  kWifiScannerRegisterListener: 16,
  kWifiManagerStartScan: 17,
  kWifiManagerEnable: 18,
  kWifiManagerDisable: 19,
  kWifiManagerDisconnect: 20,
  kWifiManagerReconnect: 21,
  kWifiManagerGetNetworks: 22,
  kWifiManagerGetNetworksPrivileged: 23,
  kWifiManagerAddNetwork: 24,
  kWifiManagerRemoveNetwork: 25,
  kWifiManagerEnableNetwork: 26,
  kWifiManagerDisableNetwork: 27,
  kWifiManagerConnect: 28,
  kWifiManagerSave: 29,
  kWifiManagerForget: 30,
  kWifiManagerRegisterScanListener: 31,
  kWifiManagerAddNetworkSuggestions: 32,
};

// Enum: ArcNetworkError
arc.mojom.ArcNetworkError = {
  kUnknown: 0,
  kMojoGetNetworksError: 1,
  kMojoWifiAddNetworkFailed: 2,
  kMojoWifiForgetNetworkFailed: 3,
  kMojoWifiConnectFailed: 4,
  kMojoWifiDisconnectFailed: 5,
  kMojoWifiScanTimeout: 6,
  kMojoWifiGetScanResultsFailed: 7,
  kNetdGetIpv4Error: 8,
  kNetdSetIpv4Error: 9,
  kNetdIfaceListError: 10,
  kNetdIfaceUpError: 11,
  kNetdIfaceMtuError: 12,
  kNetdIfaceClearError: 13,
  kNetdIfconfigGetError: 14,
  kNetdRestartIpv6Error: 15,
  kNetdIpForwardingStartError: 16,
  kNetdIpForwardingStopError: 17,
  kNetdIfaceForwardingStartError: 18,
  kNetdIfaceForwardingStopError: 19,
  kNetdTetheringStartError: 20,
  kNetdTetheringStopError: 21,
  kNetdSnatStartError: 22,
  kNetdSnatStopError: 23,
};

// Enum: AppKillType
arc.mojom.AppKillType = {
  LMKD_KILL: 0,
  OOM_KILL: 1,
};

// Enum: AppPrimaryAbi
arc.mojom.AppPrimaryAbi = {
  kNone: 0,
  kArm: 1,
  kArm64: 2,
  kX86: 3,
  kX86_64: 4,
};

// Enum: ArcCorePriAbiMigEvent
arc.mojom.ArcCorePriAbiMigEvent = {
  kUnsupported: 0,
  kMigrationCompleted: 1,
  kGmsNoDowngrade: 2,
  kGmsDowngradeSuccess: 3,
  kGmsDowngradeFailure: 4,
  kWebviewNoDowngrade: 5,
  kWebviewDowngradeSuccess: 6,
  kWebviewDowngradeFailure: 7,
};

// Enum: DataRestoreStatus
arc.mojom.DataRestoreStatus = {
  kNotNeeded: 0,
  kSuccess: 1,
  kFailed: 2,
};

// Enum: LowLatencyStylusLibraryType
arc.mojom.LowLatencyStylusLibraryType = {
  kCPU: 0,
  kGPU: 1,
};

// Enum: LowLatencyStylusLibApiId
arc.mojom.LowLatencyStylusLibApiId = {
  kInkOverlayLowLatencyLibInUse: 0,
  kGLInkOverlayLowLatencyLibInUse: 1,
  kGLInkOverlaySetProjectionMatrix: 2,
  kGLInkOverlaySetViewMatrix: 3,
};

// Enum: VpnServiceBuilderCompatApiId
arc.mojom.VpnServiceBuilderCompatApiId = {
  kVpnExcludeRoute: 0,
  kVpnAddRoute: 1,
};

// Enum: MainAccountHashMigrationStatus
arc.mojom.MainAccountHashMigrationStatus = {
  kHashCodeMigrationNotRequired: 0,
  kHashCodeMigrationSuccessful: 1,
  kHashCodeMigrationFailed: 2,
  kHashCodeMigrationFailedDueToMultipleAccounts: 3,
  kHashCodeMigrationFailedDueToNoMatchingAccount: 4,
};

// Enum: WaylandTimingEvent
arc.mojom.WaylandTimingEvent = {
  kBinderReleaseClipboardData: 0,
  kWlBufferRelease: 1,
  kWlKeyboardLeave: 2,
  kWlPointerMotion: 3,
  kWlPointerLeave: 4,
  kZauraShellActivated: 5,
  kZauraSurfaceOcclusionChanged: 6,
  kZcrRemoteSurfaceWindowGeometryChanged: 7,
  kZcrRemoteSurfaceBoundsChangedInOutput: 8,
  kZcrVsyncTimingUpdate: 9,
};

// Enum: ArcKeyMintError
arc.mojom.ArcKeyMintError = {
  kOk: 0,
  kUnknownError: 1,
  kInvalidKeyBlob: 2,
  kInvalidArgument: 3,
  kUnsupportedAlgorithm: 4,
  kUnimplemented: 5,
  kUnexpectedNullPointer: 6,
};

// Enum: ArcKeyMintLoggedOperation
arc.mojom.ArcKeyMintLoggedOperation = {
  kGenerateCertificateRequest: 0,
};

// Enum: CertificateSigningResult
arc.mojom.CertificateSigningResult = {
  kOk: 0,
  kDeviceNotRegistered: 1,
  kTimeout: 2,
  kIOException: 3,
  kHttp200: 4,
  kHttp403: 5,
  kHttp404: 6,
  kHttp500: 7,
  kHttp503: 8,
};

// Enum: AppErrorDialogType
arc.mojom.AppErrorDialogType = {
  kAerrApplication: 0,
  kAerrProcess: 1,
  kAerrApplicationRepeated: 2,
  kAerrProcessRepeated: 3,
  kAnrActivityApplication: 4,
  kAnrActivityProcess: 5,
  kAnrApplicationProcess: 6,
  kAnrProcess: 7,
};

// Enum: AndroidAppCategory
arc.mojom.AndroidAppCategory = {
  kAudio: 0,
  kGame: 1,
  kImage: 2,
  kProductivity: 3,
  kSocial: 4,
  kVideo: 5,
};

// Enum: AndroidDataDirectory
arc.mojom.AndroidDataDirectory = {
  kDataApp: 0,
  kDataData: 1,
  kDataMedia: 2,
  kDataMediaAndroid: 3,
  kDataUserDE: 4,
};

// Struct: BootProgressEvent
arc.mojom.BootProgressEventSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BootProgressEvent',
      packedSize: 24,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'uptimeMillis', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GfxMetrics
arc.mojom.GfxMetricsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.GfxMetrics',
      packedSize: 32,
      fields: [
        { name: 'framesTotal', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'framesJanky', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'frameTimePercentile95', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AppKill
arc.mojom.AppKillSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppKill',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LowLatencyStylusLibPredictionTarget
arc.mojom.LowLatencyStylusLibPredictionTargetSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.LowLatencyStylusLibPredictionTarget',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'target', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AppCategoryDataSize
arc.mojom.AppCategoryDataSizeSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppCategoryDataSize',
      packedSize: 24,
      fields: [
        { name: 'category', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'data_size_in_mb', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DataDirectorySize
arc.mojom.DataDirectorySizeSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DataDirectorySize',
      packedSize: 24,
      fields: [
        { name: 'directory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'size_in_mb', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: MetricsHost
arc.mojom.MetricsHost = {};

arc.mojom.MetricsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.MetricsHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MetricsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.MetricsHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.MetricsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.MetricsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.MetricsHost.getRemote = function() {
  let remote = new arc.mojom.MetricsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MetricsHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.MetricsHostPtr = arc.mojom.MetricsHostRemote;
arc.mojom.MetricsHostRequest = arc.mojom.MetricsHostPendingReceiver;


// Interface: MetricsInstance
arc.mojom.MetricsInstance = {};

arc.mojom.MetricsInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.MetricsInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MetricsInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.MetricsInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.MetricsInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.MetricsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.MetricsInstance.getRemote = function() {
  let remote = new arc.mojom.MetricsInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MetricsInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.MetricsInstancePtr = arc.mojom.MetricsInstanceRemote;
arc.mojom.MetricsInstanceRequest = arc.mojom.MetricsInstancePendingReceiver;

