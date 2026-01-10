// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/metrics.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var mojo_base = mojo_base || {};

arc.mojom.BootTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.NativeBridgeTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.CompanionLibApiIdSpec = { $: mojo.internal.Enum() };
arc.mojom.ArcDnsQuerySpec = { $: mojo.internal.Enum() };
arc.mojom.ArcNetworkEventSpec = { $: mojo.internal.Enum() };
arc.mojom.ArcNetworkErrorSpec = { $: mojo.internal.Enum() };
arc.mojom.AppKillTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.AppPrimaryAbiSpec = { $: mojo.internal.Enum() };
arc.mojom.ArcCorePriAbiMigEventSpec = { $: mojo.internal.Enum() };
arc.mojom.DataRestoreStatusSpec = { $: mojo.internal.Enum() };
arc.mojom.LowLatencyStylusLibraryTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.LowLatencyStylusLibApiIdSpec = { $: mojo.internal.Enum() };
arc.mojom.VpnServiceBuilderCompatApiIdSpec = { $: mojo.internal.Enum() };
arc.mojom.MainAccountHashMigrationStatusSpec = { $: mojo.internal.Enum() };
arc.mojom.WaylandTimingEventSpec = { $: mojo.internal.Enum() };
arc.mojom.ArcKeyMintErrorSpec = { $: mojo.internal.Enum() };
arc.mojom.ArcKeyMintLoggedOperationSpec = { $: mojo.internal.Enum() };
arc.mojom.CertificateSigningResultSpec = { $: mojo.internal.Enum() };
arc.mojom.AppErrorDialogTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.AndroidAppCategorySpec = { $: mojo.internal.Enum() };
arc.mojom.AndroidDataDirectorySpec = { $: mojo.internal.Enum() };
arc.mojom.BootProgressEventSpec = { $: {} };
arc.mojom.GfxMetricsSpec = { $: {} };
arc.mojom.AppKillSpec = { $: {} };
arc.mojom.LowLatencyStylusLibPredictionTargetSpec = { $: {} };
arc.mojom.AppCategoryDataSizeSpec = { $: {} };
arc.mojom.DataDirectorySizeSpec = { $: {} };
arc.mojom.MetricsHost = {};
arc.mojom.MetricsHost.$interfaceName = 'arc.mojom.MetricsHost';
arc.mojom.MetricsHost_ReportBootProgress_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportNativeBridge_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportCompanionLibApiUsage_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportAppKill_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportArcCorePriAbiMigEvent_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportArcCorePriAbiMigFailedTries_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportArcCorePriAbiMigDowngradeDelay_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportArcCorePriAbiMigBootTime_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportAnr_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportArcSystemHealthUpgrade_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportLowLatencyStylusLibApiUsage_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportLowLatencyStylusLibPredictionTarget_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportDnsQueryResult_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportMainAccountHashMigrationMetrics_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportArcNetworkEvent_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportArcNetworkError_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportAppPrimaryAbi_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportDataRestore_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportMemoryPressure_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportProvisioningPreSignIn_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportWaylandLateTimingEvent_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportWebViewProcessStarted_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportVpnServiceBuilderCompatApiUsage_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportNewQosSocketCount_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportQosSocketPercentage_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportArcKeyMintError_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportDragResizeLatency_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportAppErrorDialogType_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportApkCacheHit_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportAppCategoryDataSizeList_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportDataDirectorySizeList_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportArcKeyMintErrorForOperation_ParamsSpec = { $: {} };
arc.mojom.MetricsHost_ReportCertificateSigningResult_ParamsSpec = { $: {} };
arc.mojom.MetricsInstance = {};
arc.mojom.MetricsInstance.$interfaceName = 'arc.mojom.MetricsInstance';
arc.mojom.MetricsInstance_Init_ParamsSpec = { $: {} };
arc.mojom.MetricsInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.MetricsInstance_GetGfxMetrics_ParamsSpec = { $: {} };
arc.mojom.MetricsInstance_GetGfxMetrics_ResponseParamsSpec = { $: {} };

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
  MinVersion: 32,
  MinVersion: 32,
  MinVersion: 32,
  MinVersion: 32,
  MinVersion: 32,
  MinVersion: 32,
  MinVersion: 32,
  MinVersion: 32,
  MinVersion: 32,
  MinVersion: 32,
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
  MinVersion: 23,
  MinVersion: 23,
  MinVersion: 23,
  MinVersion: 23,
  MinVersion: 23,
};

// Enum: AppKillType
arc.mojom.AppKillType = {
  LMKD_KILL: 0,
  OOM_KILL: 1,
  MinVersion: 1,
  MinVersion: 1,
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
  kUnsupported: 0,
  kCPU: 1,
  kGPU: 2,
};

// Enum: LowLatencyStylusLibApiId
arc.mojom.LowLatencyStylusLibApiId = {
  kUnsupported: 0,
  kInkOverlayLowLatencyLibInUse: 1,
  kGLInkOverlayLowLatencyLibInUse: 2,
  kGLInkOverlaySetProjectionMatrix: 3,
  kGLInkOverlaySetViewMatrix: 4,
};

// Enum: VpnServiceBuilderCompatApiId
arc.mojom.VpnServiceBuilderCompatApiId = {
  kUnsupported: 0,
  kVpnExcludeRoute: 1,
  kVpnAddRoute: 2,
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
  kOther: 0,
  kBinderReleaseClipboardData: 1,
  kWlBufferRelease: 2,
  kWlKeyboardLeave: 3,
  kWlPointerMotion: 4,
  kWlPointerLeave: 5,
  kZauraShellActivated: 6,
  kZauraSurfaceOcclusionChanged: 7,
  kZcrRemoteSurfaceWindowGeometryChanged: 8,
  kZcrRemoteSurfaceBoundsChangedInOutput: 9,
  kZcrVsyncTimingUpdate: 10,
};

// Enum: ArcKeyMintError
arc.mojom.ArcKeyMintError = {
  kOther: 0,
  kOk: 1,
  kUnknownError: 2,
  kInvalidKeyBlob: 3,
  kInvalidArgument: 4,
  kUnsupportedAlgorithm: 5,
  kUnimplemented: 6,
  kUnexpectedNullPointer: 7,
};

// Enum: ArcKeyMintLoggedOperation
arc.mojom.ArcKeyMintLoggedOperation = {
  kOther: 0,
  kGenerateCertificateRequest: 1,
};

// Enum: CertificateSigningResult
arc.mojom.CertificateSigningResult = {
  kOther: 0,
  kOk: 1,
  kDeviceNotRegistered: 2,
  kTimeout: 3,
  kIOException: 4,
  kHttp200: 5,
  kHttp403: 6,
  kHttp404: 7,
  kHttp500: 8,
  kHttp503: 9,
  MinVersion: 9,
  MinVersion: 9,
};

// Enum: AppErrorDialogType
arc.mojom.AppErrorDialogType = {
  kUnsupported: 0,
  kAerrApplication: 1,
  kAerrProcess: 2,
  kAerrApplicationRepeated: 3,
  kAerrProcessRepeated: 4,
  kAnrActivityApplication: 5,
  kAnrActivityProcess: 6,
  kAnrApplicationProcess: 7,
  kAnrProcess: 8,
};

// Enum: AndroidAppCategory
arc.mojom.AndroidAppCategory = {
  kOther: 0,
  kAudio: 1,
  kGame: 2,
  kImage: 3,
  kProductivity: 4,
  kSocial: 5,
  kVideo: 6,
};

// Enum: AndroidDataDirectory
arc.mojom.AndroidDataDirectory = {
  kData: 0,
  kDataApp: 1,
  kDataData: 2,
  kDataMedia: 3,
  kDataMediaAndroid: 4,
  kDataUserDE: 5,
};

// Struct: BootProgressEvent
mojo.internal.Struct(
    arc.mojom.BootProgressEventSpec, 'arc.mojom.BootProgressEvent', [
      mojo.internal.StructField('event', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('uptimeMillis', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GfxMetrics
mojo.internal.Struct(
    arc.mojom.GfxMetricsSpec, 'arc.mojom.GfxMetrics', [
      mojo.internal.StructField('framesTotal', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('framesJanky', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('frameTimePercentile95', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AppKill
mojo.internal.Struct(
    arc.mojom.AppKillSpec, 'arc.mojom.AppKill', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.AppKillTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('count', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LowLatencyStylusLibPredictionTarget
mojo.internal.Struct(
    arc.mojom.LowLatencyStylusLibPredictionTargetSpec, 'arc.mojom.LowLatencyStylusLibPredictionTarget', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.LowLatencyStylusLibraryTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AppCategoryDataSize
mojo.internal.Struct(
    arc.mojom.AppCategoryDataSizeSpec, 'arc.mojom.AppCategoryDataSize', [
      mojo.internal.StructField('category', 0, 0, arc.mojom.AndroidAppCategorySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data_size_in_mb', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DataDirectorySize
mojo.internal.Struct(
    arc.mojom.DataDirectorySizeSpec, 'arc.mojom.DataDirectorySize', [
      mojo.internal.StructField('directory', 0, 0, arc.mojom.AndroidDataDirectorySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size_in_mb', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: MetricsHost
mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportBootProgress_ParamsSpec, 'arc.mojom.MetricsHost_ReportBootProgress_Params', [
      mojo.internal.StructField('events', 0, 0, mojo.internal.Array(arc.mojom.BootProgressEventSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('boot_type', 8, 0, arc.mojom.BootTypeSpec.$, null, false, 1, undefined),
    ],
    [[0, 16], [1, 24]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportNativeBridge_ParamsSpec, 'arc.mojom.MetricsHost_ReportNativeBridge_Params', [
      mojo.internal.StructField('native_bridge_type', 0, 0, arc.mojom.NativeBridgeTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportCompanionLibApiUsage_ParamsSpec, 'arc.mojom.MetricsHost_ReportCompanionLibApiUsage_Params', [
      mojo.internal.StructField('api_id', 0, 0, arc.mojom.CompanionLibApiIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportAppKill_ParamsSpec, 'arc.mojom.MetricsHost_ReportAppKill_Params', [
      mojo.internal.StructField('app_kill', 0, 0, arc.mojom.AppKillSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportArcCorePriAbiMigEvent_ParamsSpec, 'arc.mojom.MetricsHost_ReportArcCorePriAbiMigEvent_Params', [
      mojo.internal.StructField('event', 0, 0, arc.mojom.ArcCorePriAbiMigEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportArcCorePriAbiMigFailedTries_ParamsSpec, 'arc.mojom.MetricsHost_ReportArcCorePriAbiMigFailedTries_Params', [
      mojo.internal.StructField('failed_attempts', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportArcCorePriAbiMigDowngradeDelay_ParamsSpec, 'arc.mojom.MetricsHost_ReportArcCorePriAbiMigDowngradeDelay_Params', [
      mojo.internal.StructField('delay', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportArcCorePriAbiMigBootTime_ParamsSpec, 'arc.mojom.MetricsHost_ReportArcCorePriAbiMigBootTime_Params', [
      mojo.internal.StructField('duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportAnr_ParamsSpec, 'arc.mojom.MetricsHost_ReportAnr_Params', [
      mojo.internal.StructField('anr', 0, 0, arc.mojom.AnrSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportArcSystemHealthUpgrade_ParamsSpec, 'arc.mojom.MetricsHost_ReportArcSystemHealthUpgrade_Params', [
      mojo.internal.StructField('duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('packages_deleted', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportLowLatencyStylusLibApiUsage_ParamsSpec, 'arc.mojom.MetricsHost_ReportLowLatencyStylusLibApiUsage_Params', [
      mojo.internal.StructField('api_id', 0, 0, arc.mojom.LowLatencyStylusLibApiIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportLowLatencyStylusLibPredictionTarget_ParamsSpec, 'arc.mojom.MetricsHost_ReportLowLatencyStylusLibPredictionTarget_Params', [
      mojo.internal.StructField('prediction_target', 0, 0, arc.mojom.LowLatencyStylusLibPredictionTargetSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportDnsQueryResult_ParamsSpec, 'arc.mojom.MetricsHost_ReportDnsQueryResult_Params', [
      mojo.internal.StructField('query', 0, 0, arc.mojom.ArcDnsQuerySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportMainAccountHashMigrationMetrics_ParamsSpec, 'arc.mojom.MetricsHost_ReportMainAccountHashMigrationMetrics_Params', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.MainAccountHashMigrationStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportArcNetworkEvent_ParamsSpec, 'arc.mojom.MetricsHost_ReportArcNetworkEvent_Params', [
      mojo.internal.StructField('event', 0, 0, arc.mojom.ArcNetworkEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportArcNetworkError_ParamsSpec, 'arc.mojom.MetricsHost_ReportArcNetworkError_Params', [
      mojo.internal.StructField('error', 0, 0, arc.mojom.ArcNetworkErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportAppPrimaryAbi_ParamsSpec, 'arc.mojom.MetricsHost_ReportAppPrimaryAbi_Params', [
      mojo.internal.StructField('abi', 0, 0, arc.mojom.AppPrimaryAbiSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportDataRestore_ParamsSpec, 'arc.mojom.MetricsHost_ReportDataRestore_Params', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.DataRestoreStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('duration_ms', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportMemoryPressure_ParamsSpec, 'arc.mojom.MetricsHost_ReportMemoryPressure_Params', [
      mojo.internal.StructField('psi_file_contents', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportProvisioningPreSignIn_ParamsSpec, 'arc.mojom.MetricsHost_ReportProvisioningPreSignIn_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportWaylandLateTimingEvent_ParamsSpec, 'arc.mojom.MetricsHost_ReportWaylandLateTimingEvent_Params', [
      mojo.internal.StructField('event', 0, 0, arc.mojom.WaylandTimingEventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('duration', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportWebViewProcessStarted_ParamsSpec, 'arc.mojom.MetricsHost_ReportWebViewProcessStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportVpnServiceBuilderCompatApiUsage_ParamsSpec, 'arc.mojom.MetricsHost_ReportVpnServiceBuilderCompatApiUsage_Params', [
      mojo.internal.StructField('api_id', 0, 0, arc.mojom.VpnServiceBuilderCompatApiIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportNewQosSocketCount_ParamsSpec, 'arc.mojom.MetricsHost_ReportNewQosSocketCount_Params', [
      mojo.internal.StructField('count', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportQosSocketPercentage_ParamsSpec, 'arc.mojom.MetricsHost_ReportQosSocketPercentage_Params', [
      mojo.internal.StructField('perc', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportArcKeyMintError_ParamsSpec, 'arc.mojom.MetricsHost_ReportArcKeyMintError_Params', [
      mojo.internal.StructField('error', 0, 0, arc.mojom.ArcKeyMintErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportDragResizeLatency_ParamsSpec, 'arc.mojom.MetricsHost_ReportDragResizeLatency_Params', [
      mojo.internal.StructField('durations', 0, 0, mojo.internal.Array(mojo_base.mojom.TimeDeltaSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportAppErrorDialogType_ParamsSpec, 'arc.mojom.MetricsHost_ReportAppErrorDialogType_Params', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.AppErrorDialogTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportApkCacheHit_ParamsSpec, 'arc.mojom.MetricsHost_ReportApkCacheHit_Params', [
      mojo.internal.StructField('hit', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportAppCategoryDataSizeList_ParamsSpec, 'arc.mojom.MetricsHost_ReportAppCategoryDataSizeList_Params', [
      mojo.internal.StructField('list', 0, 0, mojo.internal.Array(arc.mojom.AppCategoryDataSizeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportDataDirectorySizeList_ParamsSpec, 'arc.mojom.MetricsHost_ReportDataDirectorySizeList_Params', [
      mojo.internal.StructField('list', 0, 0, mojo.internal.Array(arc.mojom.DataDirectorySizeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportArcKeyMintErrorForOperation_ParamsSpec, 'arc.mojom.MetricsHost_ReportArcKeyMintErrorForOperation_Params', [
      mojo.internal.StructField('error', 0, 0, arc.mojom.ArcKeyMintErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('operation', 8, 0, arc.mojom.ArcKeyMintLoggedOperationSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.MetricsHost_ReportCertificateSigningResult_ParamsSpec, 'arc.mojom.MetricsHost_ReportCertificateSigningResult_Params', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.CertificateSigningResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

  reportBootProgress(events, boot_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.MetricsHost_ReportBootProgress_ParamsSpec,
      null,
      [events, boot_type],
      false);
  }

  reportNativeBridge(native_bridge_type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.MetricsHost_ReportNativeBridge_ParamsSpec,
      null,
      [native_bridge_type],
      false);
  }

  reportCompanionLibApiUsage(api_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.MetricsHost_ReportCompanionLibApiUsage_ParamsSpec,
      null,
      [api_id],
      false);
  }

  reportAppKill(app_kill) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.MetricsHost_ReportAppKill_ParamsSpec,
      null,
      [app_kill],
      false);
  }

  reportArcCorePriAbiMigEvent(event) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.MetricsHost_ReportArcCorePriAbiMigEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  reportArcCorePriAbiMigFailedTries(failed_attempts) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.MetricsHost_ReportArcCorePriAbiMigFailedTries_ParamsSpec,
      null,
      [failed_attempts],
      false);
  }

  reportArcCorePriAbiMigDowngradeDelay(delay) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.MetricsHost_ReportArcCorePriAbiMigDowngradeDelay_ParamsSpec,
      null,
      [delay],
      false);
  }

  reportArcCorePriAbiMigBootTime(duration) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.MetricsHost_ReportArcCorePriAbiMigBootTime_ParamsSpec,
      null,
      [duration],
      false);
  }

  reportAnr(anr) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.MetricsHost_ReportAnr_ParamsSpec,
      null,
      [anr],
      false);
  }

  reportArcSystemHealthUpgrade(duration, packages_deleted) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.MetricsHost_ReportArcSystemHealthUpgrade_ParamsSpec,
      null,
      [duration, packages_deleted],
      false);
  }

  reportLowLatencyStylusLibApiUsage(api_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.MetricsHost_ReportLowLatencyStylusLibApiUsage_ParamsSpec,
      null,
      [api_id],
      false);
  }

  reportLowLatencyStylusLibPredictionTarget(prediction_target) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.MetricsHost_ReportLowLatencyStylusLibPredictionTarget_ParamsSpec,
      null,
      [prediction_target],
      false);
  }

  reportDnsQueryResult(query, success) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.MetricsHost_ReportDnsQueryResult_ParamsSpec,
      null,
      [query, success],
      false);
  }

  reportMainAccountHashMigrationMetrics(status) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      arc.mojom.MetricsHost_ReportMainAccountHashMigrationMetrics_ParamsSpec,
      null,
      [status],
      false);
  }

  reportArcNetworkEvent(event) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      arc.mojom.MetricsHost_ReportArcNetworkEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  reportArcNetworkError(error) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      arc.mojom.MetricsHost_ReportArcNetworkError_ParamsSpec,
      null,
      [error],
      false);
  }

  reportAppPrimaryAbi(abi) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      arc.mojom.MetricsHost_ReportAppPrimaryAbi_ParamsSpec,
      null,
      [abi],
      false);
  }

  reportDataRestore(status, duration_ms) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      arc.mojom.MetricsHost_ReportDataRestore_ParamsSpec,
      null,
      [status, duration_ms],
      false);
  }

  reportMemoryPressure(psi_file_contents) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      arc.mojom.MetricsHost_ReportMemoryPressure_ParamsSpec,
      null,
      [psi_file_contents],
      false);
  }

  reportProvisioningPreSignIn() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      arc.mojom.MetricsHost_ReportProvisioningPreSignIn_ParamsSpec,
      null,
      [],
      false);
  }

  reportWaylandLateTimingEvent(event, duration) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      arc.mojom.MetricsHost_ReportWaylandLateTimingEvent_ParamsSpec,
      null,
      [event, duration],
      false);
  }

  reportWebViewProcessStarted() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      arc.mojom.MetricsHost_ReportWebViewProcessStarted_ParamsSpec,
      null,
      [],
      false);
  }

  reportVpnServiceBuilderCompatApiUsage(api_id) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      arc.mojom.MetricsHost_ReportVpnServiceBuilderCompatApiUsage_ParamsSpec,
      null,
      [api_id],
      false);
  }

  reportNewQosSocketCount(count) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      arc.mojom.MetricsHost_ReportNewQosSocketCount_ParamsSpec,
      null,
      [count],
      false);
  }

  reportQosSocketPercentage(perc) {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      arc.mojom.MetricsHost_ReportQosSocketPercentage_ParamsSpec,
      null,
      [perc],
      false);
  }

  reportArcKeyMintError(error) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      arc.mojom.MetricsHost_ReportArcKeyMintError_ParamsSpec,
      null,
      [error],
      false);
  }

  reportDragResizeLatency(durations) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      arc.mojom.MetricsHost_ReportDragResizeLatency_ParamsSpec,
      null,
      [durations],
      false);
  }

  reportAppErrorDialogType(type) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      arc.mojom.MetricsHost_ReportAppErrorDialogType_ParamsSpec,
      null,
      [type],
      false);
  }

  reportApkCacheHit(hit) {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      arc.mojom.MetricsHost_ReportApkCacheHit_ParamsSpec,
      null,
      [hit],
      false);
  }

  reportAppCategoryDataSizeList(list) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      arc.mojom.MetricsHost_ReportAppCategoryDataSizeList_ParamsSpec,
      null,
      [list],
      false);
  }

  reportDataDirectorySizeList(list) {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      arc.mojom.MetricsHost_ReportDataDirectorySizeList_ParamsSpec,
      null,
      [list],
      false);
  }

  reportArcKeyMintErrorForOperation(error, operation) {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      arc.mojom.MetricsHost_ReportArcKeyMintErrorForOperation_ParamsSpec,
      null,
      [error, operation],
      false);
  }

  reportCertificateSigningResult(result) {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      arc.mojom.MetricsHost_ReportCertificateSigningResult_ParamsSpec,
      null,
      [result],
      false);
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

arc.mojom.MetricsHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.MetricsHost_ReportBootProgress_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportBootProgress(params.events, params.boot_type);
          break;
        }
        case 1: {
          const params = arc.mojom.MetricsHost_ReportNativeBridge_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportNativeBridge(params.native_bridge_type);
          break;
        }
        case 2: {
          const params = arc.mojom.MetricsHost_ReportCompanionLibApiUsage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportCompanionLibApiUsage(params.api_id);
          break;
        }
        case 3: {
          const params = arc.mojom.MetricsHost_ReportAppKill_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportAppKill(params.app_kill);
          break;
        }
        case 4: {
          const params = arc.mojom.MetricsHost_ReportArcCorePriAbiMigEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportArcCorePriAbiMigEvent(params.event);
          break;
        }
        case 5: {
          const params = arc.mojom.MetricsHost_ReportArcCorePriAbiMigFailedTries_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportArcCorePriAbiMigFailedTries(params.failed_attempts);
          break;
        }
        case 6: {
          const params = arc.mojom.MetricsHost_ReportArcCorePriAbiMigDowngradeDelay_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportArcCorePriAbiMigDowngradeDelay(params.delay);
          break;
        }
        case 7: {
          const params = arc.mojom.MetricsHost_ReportArcCorePriAbiMigBootTime_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportArcCorePriAbiMigBootTime(params.duration);
          break;
        }
        case 10: {
          const params = arc.mojom.MetricsHost_ReportAnr_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportAnr(params.anr);
          break;
        }
        case 11: {
          const params = arc.mojom.MetricsHost_ReportArcSystemHealthUpgrade_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportArcSystemHealthUpgrade(params.duration, params.packages_deleted);
          break;
        }
        case 12: {
          const params = arc.mojom.MetricsHost_ReportLowLatencyStylusLibApiUsage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportLowLatencyStylusLibApiUsage(params.api_id);
          break;
        }
        case 13: {
          const params = arc.mojom.MetricsHost_ReportLowLatencyStylusLibPredictionTarget_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportLowLatencyStylusLibPredictionTarget(params.prediction_target);
          break;
        }
        case 16: {
          const params = arc.mojom.MetricsHost_ReportDnsQueryResult_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportDnsQueryResult(params.query, params.success);
          break;
        }
        case 17: {
          const params = arc.mojom.MetricsHost_ReportMainAccountHashMigrationMetrics_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportMainAccountHashMigrationMetrics(params.status);
          break;
        }
        case 19: {
          const params = arc.mojom.MetricsHost_ReportArcNetworkEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportArcNetworkEvent(params.event);
          break;
        }
        case 20: {
          const params = arc.mojom.MetricsHost_ReportArcNetworkError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportArcNetworkError(params.error);
          break;
        }
        case 21: {
          const params = arc.mojom.MetricsHost_ReportAppPrimaryAbi_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportAppPrimaryAbi(params.abi);
          break;
        }
        case 22: {
          const params = arc.mojom.MetricsHost_ReportDataRestore_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportDataRestore(params.status, params.duration_ms);
          break;
        }
        case 23: {
          const params = arc.mojom.MetricsHost_ReportMemoryPressure_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportMemoryPressure(params.psi_file_contents);
          break;
        }
        case 24: {
          const params = arc.mojom.MetricsHost_ReportProvisioningPreSignIn_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportProvisioningPreSignIn();
          break;
        }
        case 30: {
          const params = arc.mojom.MetricsHost_ReportWaylandLateTimingEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportWaylandLateTimingEvent(params.event, params.duration);
          break;
        }
        case 31: {
          const params = arc.mojom.MetricsHost_ReportWebViewProcessStarted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportWebViewProcessStarted();
          break;
        }
        case 32: {
          const params = arc.mojom.MetricsHost_ReportVpnServiceBuilderCompatApiUsage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportVpnServiceBuilderCompatApiUsage(params.api_id);
          break;
        }
        case 33: {
          const params = arc.mojom.MetricsHost_ReportNewQosSocketCount_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportNewQosSocketCount(params.count);
          break;
        }
        case 34: {
          const params = arc.mojom.MetricsHost_ReportQosSocketPercentage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportQosSocketPercentage(params.perc);
          break;
        }
        case 35: {
          const params = arc.mojom.MetricsHost_ReportArcKeyMintError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportArcKeyMintError(params.error);
          break;
        }
        case 36: {
          const params = arc.mojom.MetricsHost_ReportDragResizeLatency_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportDragResizeLatency(params.durations);
          break;
        }
        case 37: {
          const params = arc.mojom.MetricsHost_ReportAppErrorDialogType_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportAppErrorDialogType(params.type);
          break;
        }
        case 38: {
          const params = arc.mojom.MetricsHost_ReportApkCacheHit_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportApkCacheHit(params.hit);
          break;
        }
        case 39: {
          const params = arc.mojom.MetricsHost_ReportAppCategoryDataSizeList_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportAppCategoryDataSizeList(params.list);
          break;
        }
        case 40: {
          const params = arc.mojom.MetricsHost_ReportDataDirectorySizeList_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportDataDirectorySizeList(params.list);
          break;
        }
        case 41: {
          const params = arc.mojom.MetricsHost_ReportArcKeyMintErrorForOperation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportArcKeyMintErrorForOperation(params.error, params.operation);
          break;
        }
        case 42: {
          const params = arc.mojom.MetricsHost_ReportCertificateSigningResult_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportCertificateSigningResult(params.result);
          break;
        }
      }
      }
    }});
  }
};

arc.mojom.MetricsHostReceiver = arc.mojom.MetricsHostReceiver;

arc.mojom.MetricsHostPtr = arc.mojom.MetricsHostRemote;
arc.mojom.MetricsHostRequest = arc.mojom.MetricsHostPendingReceiver;


// Interface: MetricsInstance
mojo.internal.Struct(
    arc.mojom.MetricsInstance_Init_ParamsSpec, 'arc.mojom.MetricsInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.MetricsHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsInstance_Init_ResponseParamsSpec, 'arc.mojom.MetricsInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.MetricsInstance_GetGfxMetrics_ParamsSpec, 'arc.mojom.MetricsInstance_GetGfxMetrics_Params', [
      mojo.internal.StructField('packageName', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MetricsInstance_GetGfxMetrics_ResponseParamsSpec, 'arc.mojom.MetricsInstance_GetGfxMetrics_ResponseParams', [
      mojo.internal.StructField('metrics', 0, 0, arc.mojom.GfxMetricsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.MetricsInstance_Init_ParamsSpec,
      arc.mojom.MetricsInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  getGfxMetrics(packageName) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.MetricsInstance_GetGfxMetrics_ParamsSpec,
      arc.mojom.MetricsInstance_GetGfxMetrics_ResponseParamsSpec,
      [packageName],
      false);
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

arc.mojom.MetricsInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 1: {
          const params = arc.mojom.MetricsInstance_Init_ParamsSpec.$.decode(message.payload);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.MetricsInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = arc.mojom.MetricsInstance_GetGfxMetrics_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getGfxMetrics(params.packageName);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.MetricsInstance_GetGfxMetrics_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

arc.mojom.MetricsInstanceReceiver = arc.mojom.MetricsInstanceReceiver;

arc.mojom.MetricsInstancePtr = arc.mojom.MetricsInstanceRemote;
arc.mojom.MetricsInstanceRequest = arc.mojom.MetricsInstancePendingReceiver;

