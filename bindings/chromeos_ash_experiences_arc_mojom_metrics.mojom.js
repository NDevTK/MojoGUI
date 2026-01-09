// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/metrics.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: BootType
arc.mojom.BootType = {
};

// Enum: NativeBridgeType
arc.mojom.NativeBridgeType = {
};

// Enum: CompanionLibApiId
arc.mojom.CompanionLibApiId = {
  GET_DISPLAY_TOPOLOGY: 0,
  GET_PRIMARY_DISPLAY_ID: 1,
  GET_WORKSPACE_INSETS: 2,
  REGISTER_CALLBACK: 3,
  UNREGISTER_CALLBACK: 4,
  GET_CAPTION_HEIGHT: 5,
  GET_HIDDEN_CAPTION_BUTTON: 6,
  HIDE_CAPTION_BUTTON: 7,
  GET_TASK_WINDOW_BOUNDS: 8,
  GET_TASK_WINDOW_STATE: 9,
  IS_SHADOW_HIDDEN: 10,
  HIDE_SHADOW: 11,
  ON_CLOSE_REQUEST_RESPONSE: 12,
  SET_ON_CLOSE_REQUEST_HANDLER: 13,
  REMOVE_ON_CLOSE_REQUEST_HANDLER: 14,
  SET_TASK_WINDOW_BOUNDS: 15,
  SET_TASK_WINDOW_STATE: 16,
  IS_CLIPPING_TO_TASK_DISABLED: 17,
};

// Enum: ArcDnsQuery
arc.mojom.ArcDnsQuery = {
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
  it: 0,
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
};

// Enum: LowLatencyStylusLibraryType
arc.mojom.LowLatencyStylusLibraryType = {
  kCPU: 0,
  kGPU: 1,
};

// Enum: LowLatencyStylusLibApiId
arc.mojom.LowLatencyStylusLibApiId = {
  the: 0,
  kGLInkOverlaySetViewMatrix: 1,
};

// Enum: VpnServiceBuilderCompatApiId
arc.mojom.VpnServiceBuilderCompatApiId = {
  the: 0,
};

// Enum: MainAccountHashMigrationStatus
arc.mojom.MainAccountHashMigrationStatus = {
  you: 0,
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
arc.mojom.BootProgressEvent = class {
  constructor(values = {}) {
    this.event = values.event !== undefined ? values.event : "";
    this.uptimeMillis = values.uptimeMillis !== undefined ? values.uptimeMillis : 0;
  }
};

// Struct: GfxMetrics
arc.mojom.GfxMetrics = class {
  constructor(values = {}) {
    this.frameTimePercentile95 = values.frameTimePercentile95 !== undefined ? values.frameTimePercentile95 : 0;
  }
};

// Struct: AppKill
arc.mojom.AppKill = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : null;
    this.kills = values.kills !== undefined ? values.kills : null;
    this.count = values.count !== undefined ? values.count : 0;
  }
};

// Struct: LowLatencyStylusLibPredictionTarget
arc.mojom.LowLatencyStylusLibPredictionTarget = class {
  constructor(values = {}) {
    this.target = values.target !== undefined ? values.target : 0;
  }
};

// Struct: AppCategoryDataSize
arc.mojom.AppCategoryDataSize = class {
  constructor(values = {}) {
    this.data_size_in_mb = values.data_size_in_mb !== undefined ? values.data_size_in_mb : 0;
  }
};

// Struct: DataDirectorySize
arc.mojom.DataDirectorySize = class {
  constructor(values = {}) {
    this.size_in_mb = values.size_in_mb !== undefined ? values.size_in_mb : 0;
  }
};

// Interface: MetricsHost
arc.mojom.MetricsHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.MetricsHost';
  }

};

arc.mojom.MetricsHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MetricsInstance
arc.mojom.MetricsInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.MetricsInstance';
  }

};

arc.mojom.MetricsInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
