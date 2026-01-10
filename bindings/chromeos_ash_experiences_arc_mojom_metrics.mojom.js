// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/metrics.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: BootType
arc.mojom.mojom.BootType = {
  UNKNOWN: 0,
  FIRST_BOOT: 1,
  FIRST_BOOT_AFTER_UPDATE: 2,
  REGULAR_BOOT: 3,
};
arc.mojom.mojom.BootTypeSpec = { $: mojo.internal.Enum() };

// Enum: NativeBridgeType
arc.mojom.mojom.NativeBridgeType = {
  NONE: 0,
  HOUDINI: 1,
  NDK_TRANSLATION: 2,
};
arc.mojom.mojom.NativeBridgeTypeSpec = { $: mojo.internal.Enum() };

// Enum: CompanionLibApiId
arc.mojom.mojom.CompanionLibApiId = {
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
arc.mojom.mojom.CompanionLibApiIdSpec = { $: mojo.internal.Enum() };

// Enum: ArcDnsQuery
arc.mojom.mojom.ArcDnsQuery = {
  OTHER_HOST_NAME: 0,
  ANDROID_API_HOST_NAME: 1,
};
arc.mojom.mojom.ArcDnsQuerySpec = { $: mojo.internal.Enum() };

// Enum: ArcNetworkEvent
arc.mojom.mojom.ArcNetworkEvent = {
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
arc.mojom.mojom.ArcNetworkEventSpec = { $: mojo.internal.Enum() };

// Enum: ArcNetworkError
arc.mojom.mojom.ArcNetworkError = {
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
arc.mojom.mojom.ArcNetworkErrorSpec = { $: mojo.internal.Enum() };

// Enum: AppKillType
arc.mojom.mojom.AppKillType = {
  LMKD_KILL: 0,
  OOM_KILL: 1,
};
arc.mojom.mojom.AppKillTypeSpec = { $: mojo.internal.Enum() };

// Enum: AppPrimaryAbi
arc.mojom.mojom.AppPrimaryAbi = {
  kNone: 0,
  kArm: 1,
  kArm64: 2,
  kX86: 3,
  kX86_64: 4,
};
arc.mojom.mojom.AppPrimaryAbiSpec = { $: mojo.internal.Enum() };

// Enum: ArcCorePriAbiMigEvent
arc.mojom.mojom.ArcCorePriAbiMigEvent = {
  kUnsupported: 0,
  kMigrationCompleted: 1,
  kGmsNoDowngrade: 2,
  kGmsDowngradeSuccess: 3,
  kGmsDowngradeFailure: 4,
  kWebviewNoDowngrade: 5,
  kWebviewDowngradeSuccess: 6,
  kWebviewDowngradeFailure: 7,
};
arc.mojom.mojom.ArcCorePriAbiMigEventSpec = { $: mojo.internal.Enum() };

// Enum: DataRestoreStatus
arc.mojom.mojom.DataRestoreStatus = {
  kNotNeeded: 0,
  kSuccess: 1,
  kFailed: 2,
};
arc.mojom.mojom.DataRestoreStatusSpec = { $: mojo.internal.Enum() };

// Enum: LowLatencyStylusLibraryType
arc.mojom.mojom.LowLatencyStylusLibraryType = {
  kCPU: 0,
  kGPU: 1,
};
arc.mojom.mojom.LowLatencyStylusLibraryTypeSpec = { $: mojo.internal.Enum() };

// Enum: LowLatencyStylusLibApiId
arc.mojom.mojom.LowLatencyStylusLibApiId = {
  kInkOverlayLowLatencyLibInUse: 0,
  kGLInkOverlayLowLatencyLibInUse: 1,
  kGLInkOverlaySetProjectionMatrix: 2,
  kGLInkOverlaySetViewMatrix: 3,
};
arc.mojom.mojom.LowLatencyStylusLibApiIdSpec = { $: mojo.internal.Enum() };

// Enum: VpnServiceBuilderCompatApiId
arc.mojom.mojom.VpnServiceBuilderCompatApiId = {
  kVpnExcludeRoute: 0,
  kVpnAddRoute: 1,
};
arc.mojom.mojom.VpnServiceBuilderCompatApiIdSpec = { $: mojo.internal.Enum() };

// Enum: MainAccountHashMigrationStatus
arc.mojom.mojom.MainAccountHashMigrationStatus = {
  kHashCodeMigrationNotRequired: 0,
  kHashCodeMigrationSuccessful: 1,
  kHashCodeMigrationFailed: 2,
  kHashCodeMigrationFailedDueToMultipleAccounts: 3,
  kHashCodeMigrationFailedDueToNoMatchingAccount: 4,
};
arc.mojom.mojom.MainAccountHashMigrationStatusSpec = { $: mojo.internal.Enum() };

// Enum: WaylandTimingEvent
arc.mojom.mojom.WaylandTimingEvent = {
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
arc.mojom.mojom.WaylandTimingEventSpec = { $: mojo.internal.Enum() };

// Enum: ArcKeyMintError
arc.mojom.mojom.ArcKeyMintError = {
  kOk: 0,
  kUnknownError: 1,
  kInvalidKeyBlob: 2,
  kInvalidArgument: 3,
  kUnsupportedAlgorithm: 4,
  kUnimplemented: 5,
  kUnexpectedNullPointer: 6,
};
arc.mojom.mojom.ArcKeyMintErrorSpec = { $: mojo.internal.Enum() };

// Enum: ArcKeyMintLoggedOperation
arc.mojom.mojom.ArcKeyMintLoggedOperation = {
  kGenerateCertificateRequest: 0,
};
arc.mojom.mojom.ArcKeyMintLoggedOperationSpec = { $: mojo.internal.Enum() };

// Enum: CertificateSigningResult
arc.mojom.mojom.CertificateSigningResult = {
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
arc.mojom.mojom.CertificateSigningResultSpec = { $: mojo.internal.Enum() };

// Enum: AppErrorDialogType
arc.mojom.mojom.AppErrorDialogType = {
  kAerrApplication: 0,
  kAerrProcess: 1,
  kAerrApplicationRepeated: 2,
  kAerrProcessRepeated: 3,
  kAnrActivityApplication: 4,
  kAnrActivityProcess: 5,
  kAnrApplicationProcess: 6,
  kAnrProcess: 7,
};
arc.mojom.mojom.AppErrorDialogTypeSpec = { $: mojo.internal.Enum() };

// Enum: AndroidAppCategory
arc.mojom.mojom.AndroidAppCategory = {
  kAudio: 0,
  kGame: 1,
  kImage: 2,
  kProductivity: 3,
  kSocial: 4,
  kVideo: 5,
};
arc.mojom.mojom.AndroidAppCategorySpec = { $: mojo.internal.Enum() };

// Enum: AndroidDataDirectory
arc.mojom.mojom.AndroidDataDirectory = {
  kDataApp: 0,
  kDataData: 1,
  kDataMedia: 2,
  kDataMediaAndroid: 3,
  kDataUserDE: 4,
};
arc.mojom.mojom.AndroidDataDirectorySpec = { $: mojo.internal.Enum() };

// Struct: BootProgressEvent
arc.mojom.mojom.BootProgressEventSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BootProgressEvent',
      packedSize: 24,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'uptimeMillis', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: GfxMetrics
arc.mojom.mojom.GfxMetricsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.GfxMetrics',
      packedSize: 32,
      fields: [
        { name: 'framesTotal', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'framesJanky', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'frameTimePercentile95', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: AppKill
arc.mojom.mojom.AppKillSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppKill',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AppKillTypeSpec, nullable: false, minVersion: 0 },
        { name: 'count', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: LowLatencyStylusLibPredictionTarget
arc.mojom.mojom.LowLatencyStylusLibPredictionTargetSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.LowLatencyStylusLibPredictionTarget',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.LowLatencyStylusLibraryTypeSpec, nullable: false, minVersion: 0 },
        { name: 'target', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AppCategoryDataSize
arc.mojom.mojom.AppCategoryDataSizeSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppCategoryDataSize',
      packedSize: 16,
      fields: [
        { name: 'category', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AndroidAppCategorySpec, nullable: false, minVersion: 0 },
        { name: 'data_size_in_mb', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DataDirectorySize
arc.mojom.mojom.DataDirectorySizeSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DataDirectorySize',
      packedSize: 16,
      fields: [
        { name: 'directory', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AndroidDataDirectorySpec, nullable: false, minVersion: 0 },
        { name: 'size_in_mb', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: MetricsHost
arc.mojom.mojom.MetricsHost = {};

arc.mojom.mojom.MetricsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.MetricsHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MetricsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.MetricsHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.MetricsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.MetricsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  reportBootProgress(events, boot_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportBootProgress_ParamsSpec,
      null,
      [events, boot_type]);
  }

  reportNativeBridge(native_bridge_type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportNativeBridge_ParamsSpec,
      null,
      [native_bridge_type]);
  }

  reportCompanionLibApiUsage(api_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportCompanionLibApiUsage_ParamsSpec,
      null,
      [api_id]);
  }

  reportAppKill(app_kill) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportAppKill_ParamsSpec,
      null,
      [app_kill]);
  }

  reportArcCorePriAbiMigEvent(event) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportArcCorePriAbiMigEvent_ParamsSpec,
      null,
      [event]);
  }

  reportArcCorePriAbiMigFailedTries(failed_attempts) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportArcCorePriAbiMigFailedTries_ParamsSpec,
      null,
      [failed_attempts]);
  }

  reportArcCorePriAbiMigDowngradeDelay(delay) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportArcCorePriAbiMigDowngradeDelay_ParamsSpec,
      null,
      [delay]);
  }

  reportArcCorePriAbiMigBootTime(duration) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportArcCorePriAbiMigBootTime_ParamsSpec,
      null,
      [duration]);
  }

  reportAnr(anr) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportAnr_ParamsSpec,
      null,
      [anr]);
  }

  reportArcSystemHealthUpgrade(duration, packages_deleted) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportArcSystemHealthUpgrade_ParamsSpec,
      null,
      [duration, packages_deleted]);
  }

  reportLowLatencyStylusLibApiUsage(api_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportLowLatencyStylusLibApiUsage_ParamsSpec,
      null,
      [api_id]);
  }

  reportLowLatencyStylusLibPredictionTarget(prediction_target) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportLowLatencyStylusLibPredictionTarget_ParamsSpec,
      null,
      [prediction_target]);
  }

  reportDnsQueryResult(query, success) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportDnsQueryResult_ParamsSpec,
      null,
      [query, success]);
  }

  reportMainAccountHashMigrationMetrics(status) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportMainAccountHashMigrationMetrics_ParamsSpec,
      null,
      [status]);
  }

  reportArcNetworkEvent(event) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportArcNetworkEvent_ParamsSpec,
      null,
      [event]);
  }

  reportArcNetworkError(error) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportArcNetworkError_ParamsSpec,
      null,
      [error]);
  }

  reportAppPrimaryAbi(abi) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportAppPrimaryAbi_ParamsSpec,
      null,
      [abi]);
  }

  reportDataRestore(status, duration_ms) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportDataRestore_ParamsSpec,
      null,
      [status, duration_ms]);
  }

  reportMemoryPressure(psi_file_contents) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportMemoryPressure_ParamsSpec,
      null,
      [psi_file_contents]);
  }

  reportProvisioningPreSignIn() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportProvisioningPreSignIn_ParamsSpec,
      null,
      []);
  }

  reportWaylandLateTimingEvent(event, duration) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportWaylandLateTimingEvent_ParamsSpec,
      null,
      [event, duration]);
  }

  reportWebViewProcessStarted() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportWebViewProcessStarted_ParamsSpec,
      null,
      []);
  }

  reportVpnServiceBuilderCompatApiUsage(api_id) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportVpnServiceBuilderCompatApiUsage_ParamsSpec,
      null,
      [api_id]);
  }

  reportNewQosSocketCount(count) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportNewQosSocketCount_ParamsSpec,
      null,
      [count]);
  }

  reportQosSocketPercentage(perc) {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportQosSocketPercentage_ParamsSpec,
      null,
      [perc]);
  }

  reportArcKeyMintError(error) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportArcKeyMintError_ParamsSpec,
      null,
      [error]);
  }

  reportDragResizeLatency(durations) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportDragResizeLatency_ParamsSpec,
      null,
      [durations]);
  }

  reportAppErrorDialogType(type) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportAppErrorDialogType_ParamsSpec,
      null,
      [type]);
  }

  reportApkCacheHit(hit) {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportApkCacheHit_ParamsSpec,
      null,
      [hit]);
  }

  reportAppCategoryDataSizeList(list) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportAppCategoryDataSizeList_ParamsSpec,
      null,
      [list]);
  }

  reportDataDirectorySizeList(list) {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportDataDirectorySizeList_ParamsSpec,
      null,
      [list]);
  }

  reportArcKeyMintErrorForOperation(error, operation) {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportArcKeyMintErrorForOperation_ParamsSpec,
      null,
      [error, operation]);
  }

  reportCertificateSigningResult(result) {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      arc.mojom.mojom.MetricsHost_ReportCertificateSigningResult_ParamsSpec,
      null,
      [result]);
  }

};

arc.mojom.mojom.MetricsHost.getRemote = function() {
  let remote = new arc.mojom.mojom.MetricsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MetricsHost',
    'context');
  return remote.$;
};

// ParamsSpec for ReportBootProgress
arc.mojom.mojom.MetricsHost_ReportBootProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportBootProgress_Params',
      packedSize: 24,
      fields: [
        { name: 'events', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.BootProgressEventSpec, false), nullable: false, minVersion: 0 },
        { name: 'boot_type', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BootTypeSpec, nullable: false, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 1, packedSize: 24}]
    }
  }
};

// ParamsSpec for ReportNativeBridge
arc.mojom.mojom.MetricsHost_ReportNativeBridge_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportNativeBridge_Params',
      packedSize: 16,
      fields: [
        { name: 'native_bridge_type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.NativeBridgeTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportCompanionLibApiUsage
arc.mojom.mojom.MetricsHost_ReportCompanionLibApiUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportCompanionLibApiUsage_Params',
      packedSize: 16,
      fields: [
        { name: 'api_id', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.CompanionLibApiIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportAppKill
arc.mojom.mojom.MetricsHost_ReportAppKill_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportAppKill_Params',
      packedSize: 16,
      fields: [
        { name: 'app_kill', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AppKillSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportArcCorePriAbiMigEvent
arc.mojom.mojom.MetricsHost_ReportArcCorePriAbiMigEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportArcCorePriAbiMigEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcCorePriAbiMigEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportArcCorePriAbiMigFailedTries
arc.mojom.mojom.MetricsHost_ReportArcCorePriAbiMigFailedTries_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportArcCorePriAbiMigFailedTries_Params',
      packedSize: 16,
      fields: [
        { name: 'failed_attempts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportArcCorePriAbiMigDowngradeDelay
arc.mojom.mojom.MetricsHost_ReportArcCorePriAbiMigDowngradeDelay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportArcCorePriAbiMigDowngradeDelay_Params',
      packedSize: 16,
      fields: [
        { name: 'delay', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportArcCorePriAbiMigBootTime
arc.mojom.mojom.MetricsHost_ReportArcCorePriAbiMigBootTime_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportArcCorePriAbiMigBootTime_Params',
      packedSize: 16,
      fields: [
        { name: 'duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportAnr
arc.mojom.mojom.MetricsHost_ReportAnr_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportAnr_Params',
      packedSize: 16,
      fields: [
        { name: 'anr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AnrSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportArcSystemHealthUpgrade
arc.mojom.mojom.MetricsHost_ReportArcSystemHealthUpgrade_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportArcSystemHealthUpgrade_Params',
      packedSize: 24,
      fields: [
        { name: 'duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'packages_deleted', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ReportLowLatencyStylusLibApiUsage
arc.mojom.mojom.MetricsHost_ReportLowLatencyStylusLibApiUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportLowLatencyStylusLibApiUsage_Params',
      packedSize: 16,
      fields: [
        { name: 'api_id', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.LowLatencyStylusLibApiIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportLowLatencyStylusLibPredictionTarget
arc.mojom.mojom.MetricsHost_ReportLowLatencyStylusLibPredictionTarget_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportLowLatencyStylusLibPredictionTarget_Params',
      packedSize: 16,
      fields: [
        { name: 'prediction_target', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.LowLatencyStylusLibPredictionTargetSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportDnsQueryResult
arc.mojom.mojom.MetricsHost_ReportDnsQueryResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportDnsQueryResult_Params',
      packedSize: 16,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcDnsQuerySpec, nullable: false, minVersion: 0 },
        { name: 'success', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportMainAccountHashMigrationMetrics
arc.mojom.mojom.MetricsHost_ReportMainAccountHashMigrationMetrics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportMainAccountHashMigrationMetrics_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.MainAccountHashMigrationStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportArcNetworkEvent
arc.mojom.mojom.MetricsHost_ReportArcNetworkEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportArcNetworkEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcNetworkEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportArcNetworkError
arc.mojom.mojom.MetricsHost_ReportArcNetworkError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportArcNetworkError_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcNetworkErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportAppPrimaryAbi
arc.mojom.mojom.MetricsHost_ReportAppPrimaryAbi_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportAppPrimaryAbi_Params',
      packedSize: 16,
      fields: [
        { name: 'abi', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AppPrimaryAbiSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportDataRestore
arc.mojom.mojom.MetricsHost_ReportDataRestore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportDataRestore_Params',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.DataRestoreStatusSpec, nullable: false, minVersion: 0 },
        { name: 'duration_ms', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ReportMemoryPressure
arc.mojom.mojom.MetricsHost_ReportMemoryPressure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportMemoryPressure_Params',
      packedSize: 16,
      fields: [
        { name: 'psi_file_contents', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportProvisioningPreSignIn
arc.mojom.mojom.MetricsHost_ReportProvisioningPreSignIn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportProvisioningPreSignIn_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ReportWaylandLateTimingEvent
arc.mojom.mojom.MetricsHost_ReportWaylandLateTimingEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportWaylandLateTimingEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'event', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.WaylandTimingEventSpec, nullable: false, minVersion: 0 },
        { name: 'duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ReportWebViewProcessStarted
arc.mojom.mojom.MetricsHost_ReportWebViewProcessStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportWebViewProcessStarted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ReportVpnServiceBuilderCompatApiUsage
arc.mojom.mojom.MetricsHost_ReportVpnServiceBuilderCompatApiUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportVpnServiceBuilderCompatApiUsage_Params',
      packedSize: 16,
      fields: [
        { name: 'api_id', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.VpnServiceBuilderCompatApiIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportNewQosSocketCount
arc.mojom.mojom.MetricsHost_ReportNewQosSocketCount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportNewQosSocketCount_Params',
      packedSize: 16,
      fields: [
        { name: 'count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportQosSocketPercentage
arc.mojom.mojom.MetricsHost_ReportQosSocketPercentage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportQosSocketPercentage_Params',
      packedSize: 16,
      fields: [
        { name: 'perc', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportArcKeyMintError
arc.mojom.mojom.MetricsHost_ReportArcKeyMintError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportArcKeyMintError_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcKeyMintErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportDragResizeLatency
arc.mojom.mojom.MetricsHost_ReportDragResizeLatency_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportDragResizeLatency_Params',
      packedSize: 16,
      fields: [
        { name: 'durations', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.TimeDeltaSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportAppErrorDialogType
arc.mojom.mojom.MetricsHost_ReportAppErrorDialogType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportAppErrorDialogType_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AppErrorDialogTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportApkCacheHit
arc.mojom.mojom.MetricsHost_ReportApkCacheHit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportApkCacheHit_Params',
      packedSize: 16,
      fields: [
        { name: 'hit', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportAppCategoryDataSizeList
arc.mojom.mojom.MetricsHost_ReportAppCategoryDataSizeList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportAppCategoryDataSizeList_Params',
      packedSize: 16,
      fields: [
        { name: 'list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.AppCategoryDataSizeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportDataDirectorySizeList
arc.mojom.mojom.MetricsHost_ReportDataDirectorySizeList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportDataDirectorySizeList_Params',
      packedSize: 16,
      fields: [
        { name: 'list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.DataDirectorySizeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportArcKeyMintErrorForOperation
arc.mojom.mojom.MetricsHost_ReportArcKeyMintErrorForOperation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportArcKeyMintErrorForOperation_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcKeyMintErrorSpec, nullable: false, minVersion: 0 },
        { name: 'operation', packedOffset: 4, packedBitOffset: 0, type: arc.mojom.ArcKeyMintLoggedOperationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportCertificateSigningResult
arc.mojom.mojom.MetricsHost_ReportCertificateSigningResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsHost.ReportCertificateSigningResult_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.CertificateSigningResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.MetricsHostPtr = arc.mojom.mojom.MetricsHostRemote;
arc.mojom.mojom.MetricsHostRequest = arc.mojom.mojom.MetricsHostPendingReceiver;


// Interface: MetricsInstance
arc.mojom.mojom.MetricsInstance = {};

arc.mojom.mojom.MetricsInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.MetricsInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MetricsInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.MetricsInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.MetricsInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.MetricsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.MetricsInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  getGfxMetrics(packageName) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.MetricsInstance_GetGfxMetrics_ParamsSpec,
      arc.mojom.mojom.MetricsInstance_GetGfxMetrics_ResponseParamsSpec,
      [packageName]);
  }

};

arc.mojom.mojom.MetricsInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.MetricsInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MetricsInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.MetricsInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetGfxMetrics
arc.mojom.mojom.MetricsInstance_GetGfxMetrics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsInstance.GetGfxMetrics_Params',
      packedSize: 16,
      fields: [
        { name: 'packageName', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.MetricsInstance_GetGfxMetrics_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MetricsInstance.GetGfxMetrics_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'metrics', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.GfxMetricsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.MetricsInstancePtr = arc.mojom.mojom.MetricsInstanceRemote;
arc.mojom.mojom.MetricsInstanceRequest = arc.mojom.mojom.MetricsInstancePendingReceiver;

