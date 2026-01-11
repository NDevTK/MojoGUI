// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/metrics.mojom
// Module: arc.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const p = window.mojoVersion.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

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
  reportBootProgress(events, boot_type) {
    return this.$.reportBootProgress(events, boot_type);
  }
  reportNativeBridge(native_bridge_type) {
    return this.$.reportNativeBridge(native_bridge_type);
  }
  reportCompanionLibApiUsage(api_id) {
    return this.$.reportCompanionLibApiUsage(api_id);
  }
  reportAppKill(app_kill) {
    return this.$.reportAppKill(app_kill);
  }
  reportArcCorePriAbiMigEvent(event) {
    return this.$.reportArcCorePriAbiMigEvent(event);
  }
  reportArcCorePriAbiMigFailedTries(failed_attempts) {
    return this.$.reportArcCorePriAbiMigFailedTries(failed_attempts);
  }
  reportArcCorePriAbiMigDowngradeDelay(delay) {
    return this.$.reportArcCorePriAbiMigDowngradeDelay(delay);
  }
  reportArcCorePriAbiMigBootTime(duration) {
    return this.$.reportArcCorePriAbiMigBootTime(duration);
  }
  reportAnr(anr) {
    return this.$.reportAnr(anr);
  }
  reportArcSystemHealthUpgrade(duration, packages_deleted) {
    return this.$.reportArcSystemHealthUpgrade(duration, packages_deleted);
  }
  reportLowLatencyStylusLibApiUsage(api_id) {
    return this.$.reportLowLatencyStylusLibApiUsage(api_id);
  }
  reportLowLatencyStylusLibPredictionTarget(prediction_target) {
    return this.$.reportLowLatencyStylusLibPredictionTarget(prediction_target);
  }
  reportDnsQueryResult(query, success) {
    return this.$.reportDnsQueryResult(query, success);
  }
  reportMainAccountHashMigrationMetrics(status) {
    return this.$.reportMainAccountHashMigrationMetrics(status);
  }
  reportArcNetworkEvent(event) {
    return this.$.reportArcNetworkEvent(event);
  }
  reportArcNetworkError(error) {
    return this.$.reportArcNetworkError(error);
  }
  reportAppPrimaryAbi(abi) {
    return this.$.reportAppPrimaryAbi(abi);
  }
  reportDataRestore(status, duration_ms) {
    return this.$.reportDataRestore(status, duration_ms);
  }
  reportMemoryPressure(psi_file_contents) {
    return this.$.reportMemoryPressure(psi_file_contents);
  }
  reportProvisioningPreSignIn() {
    return this.$.reportProvisioningPreSignIn();
  }
  reportWaylandLateTimingEvent(event, duration) {
    return this.$.reportWaylandLateTimingEvent(event, duration);
  }
  reportWebViewProcessStarted() {
    return this.$.reportWebViewProcessStarted();
  }
  reportVpnServiceBuilderCompatApiUsage(api_id) {
    return this.$.reportVpnServiceBuilderCompatApiUsage(api_id);
  }
  reportNewQosSocketCount(count) {
    return this.$.reportNewQosSocketCount(count);
  }
  reportQosSocketPercentage(perc) {
    return this.$.reportQosSocketPercentage(perc);
  }
  reportArcKeyMintError(error) {
    return this.$.reportArcKeyMintError(error);
  }
  reportDragResizeLatency(durations) {
    return this.$.reportDragResizeLatency(durations);
  }
  reportAppErrorDialogType(type) {
    return this.$.reportAppErrorDialogType(type);
  }
  reportApkCacheHit(hit) {
    return this.$.reportApkCacheHit(hit);
  }
  reportAppCategoryDataSizeList(list) {
    return this.$.reportAppCategoryDataSizeList(list);
  }
  reportDataDirectorySizeList(list) {
    return this.$.reportDataDirectorySizeList(list);
  }
  reportArcKeyMintErrorForOperation(error, operation) {
    return this.$.reportArcKeyMintErrorForOperation(error, operation);
  }
  reportCertificateSigningResult(result) {
    return this.$.reportCertificateSigningResult(result);
  }
};

arc.mojom.MetricsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MetricsHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 19 },
      { explicit: 20 },
      { explicit: 21 },
      { explicit: 22 },
      { explicit: 23 },
      { explicit: 24 },
      { explicit: 30 },
      { explicit: 31 },
      { explicit: 32 },
      { explicit: 33 },
      { explicit: 34 },
      { explicit: 35 },
      { explicit: 36 },
      { explicit: 37 },
      { explicit: 38 },
      { explicit: 39 },
      { explicit: 40 },
      { explicit: 41 },
      { explicit: 42 },
    ]);
  }

  reportBootProgress(events, boot_type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.MetricsHost_ReportBootProgress_ParamsSpec,
      null,
      [events, boot_type],
      false);
  }

  reportNativeBridge(native_bridge_type) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.MetricsHost_ReportNativeBridge_ParamsSpec,
      null,
      [native_bridge_type],
      false);
  }

  reportCompanionLibApiUsage(api_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.MetricsHost_ReportCompanionLibApiUsage_ParamsSpec,
      null,
      [api_id],
      false);
  }

  reportAppKill(app_kill) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.MetricsHost_ReportAppKill_ParamsSpec,
      null,
      [app_kill],
      false);
  }

  reportArcCorePriAbiMigEvent(event) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.MetricsHost_ReportArcCorePriAbiMigEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  reportArcCorePriAbiMigFailedTries(failed_attempts) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      arc.mojom.MetricsHost_ReportArcCorePriAbiMigFailedTries_ParamsSpec,
      null,
      [failed_attempts],
      false);
  }

  reportArcCorePriAbiMigDowngradeDelay(delay) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      arc.mojom.MetricsHost_ReportArcCorePriAbiMigDowngradeDelay_ParamsSpec,
      null,
      [delay],
      false);
  }

  reportArcCorePriAbiMigBootTime(duration) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      arc.mojom.MetricsHost_ReportArcCorePriAbiMigBootTime_ParamsSpec,
      null,
      [duration],
      false);
  }

  reportAnr(anr) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      arc.mojom.MetricsHost_ReportAnr_ParamsSpec,
      null,
      [anr],
      false);
  }

  reportArcSystemHealthUpgrade(duration, packages_deleted) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      arc.mojom.MetricsHost_ReportArcSystemHealthUpgrade_ParamsSpec,
      null,
      [duration, packages_deleted],
      false);
  }

  reportLowLatencyStylusLibApiUsage(api_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      arc.mojom.MetricsHost_ReportLowLatencyStylusLibApiUsage_ParamsSpec,
      null,
      [api_id],
      false);
  }

  reportLowLatencyStylusLibPredictionTarget(prediction_target) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      arc.mojom.MetricsHost_ReportLowLatencyStylusLibPredictionTarget_ParamsSpec,
      null,
      [prediction_target],
      false);
  }

  reportDnsQueryResult(query, success) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      arc.mojom.MetricsHost_ReportDnsQueryResult_ParamsSpec,
      null,
      [query, success],
      false);
  }

  reportMainAccountHashMigrationMetrics(status) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      arc.mojom.MetricsHost_ReportMainAccountHashMigrationMetrics_ParamsSpec,
      null,
      [status],
      false);
  }

  reportArcNetworkEvent(event) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      arc.mojom.MetricsHost_ReportArcNetworkEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  reportArcNetworkError(error) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      arc.mojom.MetricsHost_ReportArcNetworkError_ParamsSpec,
      null,
      [error],
      false);
  }

  reportAppPrimaryAbi(abi) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      arc.mojom.MetricsHost_ReportAppPrimaryAbi_ParamsSpec,
      null,
      [abi],
      false);
  }

  reportDataRestore(status, duration_ms) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      arc.mojom.MetricsHost_ReportDataRestore_ParamsSpec,
      null,
      [status, duration_ms],
      false);
  }

  reportMemoryPressure(psi_file_contents) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      arc.mojom.MetricsHost_ReportMemoryPressure_ParamsSpec,
      null,
      [psi_file_contents],
      false);
  }

  reportProvisioningPreSignIn() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      arc.mojom.MetricsHost_ReportProvisioningPreSignIn_ParamsSpec,
      null,
      [],
      false);
  }

  reportWaylandLateTimingEvent(event, duration) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      arc.mojom.MetricsHost_ReportWaylandLateTimingEvent_ParamsSpec,
      null,
      [event, duration],
      false);
  }

  reportWebViewProcessStarted() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      arc.mojom.MetricsHost_ReportWebViewProcessStarted_ParamsSpec,
      null,
      [],
      false);
  }

  reportVpnServiceBuilderCompatApiUsage(api_id) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      arc.mojom.MetricsHost_ReportVpnServiceBuilderCompatApiUsage_ParamsSpec,
      null,
      [api_id],
      false);
  }

  reportNewQosSocketCount(count) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      arc.mojom.MetricsHost_ReportNewQosSocketCount_ParamsSpec,
      null,
      [count],
      false);
  }

  reportQosSocketPercentage(perc) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      arc.mojom.MetricsHost_ReportQosSocketPercentage_ParamsSpec,
      null,
      [perc],
      false);
  }

  reportArcKeyMintError(error) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      arc.mojom.MetricsHost_ReportArcKeyMintError_ParamsSpec,
      null,
      [error],
      false);
  }

  reportDragResizeLatency(durations) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      arc.mojom.MetricsHost_ReportDragResizeLatency_ParamsSpec,
      null,
      [durations],
      false);
  }

  reportAppErrorDialogType(type) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      arc.mojom.MetricsHost_ReportAppErrorDialogType_ParamsSpec,
      null,
      [type],
      false);
  }

  reportApkCacheHit(hit) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      arc.mojom.MetricsHost_ReportApkCacheHit_ParamsSpec,
      null,
      [hit],
      false);
  }

  reportAppCategoryDataSizeList(list) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      arc.mojom.MetricsHost_ReportAppCategoryDataSizeList_ParamsSpec,
      null,
      [list],
      false);
  }

  reportDataDirectorySizeList(list) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      arc.mojom.MetricsHost_ReportDataDirectorySizeList_ParamsSpec,
      null,
      [list],
      false);
  }

  reportArcKeyMintErrorForOperation(error, operation) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      arc.mojom.MetricsHost_ReportArcKeyMintErrorForOperation_ParamsSpec,
      null,
      [error, operation],
      false);
  }

  reportCertificateSigningResult(result) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MetricsHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 19 },
      { explicit: 20 },
      { explicit: 21 },
      { explicit: 22 },
      { explicit: 23 },
      { explicit: 24 },
      { explicit: 30 },
      { explicit: 31 },
      { explicit: 32 },
      { explicit: 33 },
      { explicit: 34 },
      { explicit: 35 },
      { explicit: 36 },
      { explicit: 37 },
      { explicit: 38 },
      { explicit: 39 },
      { explicit: 40 },
      { explicit: 41 },
      { explicit: 42 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ReportBootProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportBootProgress_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportBootProgress (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ReportNativeBridge
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportNativeBridge_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportNativeBridge (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReportCompanionLibApiUsage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportCompanionLibApiUsage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportCompanionLibApiUsage (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ReportAppKill
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportAppKill_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportAppKill (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ReportArcCorePriAbiMigEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportArcCorePriAbiMigEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportArcCorePriAbiMigEvent (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ReportArcCorePriAbiMigFailedTries
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportArcCorePriAbiMigFailedTries_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportArcCorePriAbiMigFailedTries (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ReportArcCorePriAbiMigDowngradeDelay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportArcCorePriAbiMigDowngradeDelay_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportArcCorePriAbiMigDowngradeDelay (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ReportArcCorePriAbiMigBootTime
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportArcCorePriAbiMigBootTime_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportArcCorePriAbiMigBootTime (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ReportAnr
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportAnr_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportAnr (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ReportArcSystemHealthUpgrade
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportArcSystemHealthUpgrade_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportArcSystemHealthUpgrade (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: ReportLowLatencyStylusLibApiUsage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportLowLatencyStylusLibApiUsage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportLowLatencyStylusLibApiUsage (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: ReportLowLatencyStylusLibPredictionTarget
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportLowLatencyStylusLibPredictionTarget_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportLowLatencyStylusLibPredictionTarget (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: ReportDnsQueryResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportDnsQueryResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportDnsQueryResult (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: ReportMainAccountHashMigrationMetrics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportMainAccountHashMigrationMetrics_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportMainAccountHashMigrationMetrics (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: ReportArcNetworkEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportArcNetworkEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportArcNetworkEvent (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: ReportArcNetworkError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportArcNetworkError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportArcNetworkError (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: ReportAppPrimaryAbi
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportAppPrimaryAbi_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportAppPrimaryAbi (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: ReportDataRestore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportDataRestore_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportDataRestore (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: ReportMemoryPressure
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportMemoryPressure_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportMemoryPressure (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: ReportProvisioningPreSignIn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportProvisioningPreSignIn_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportProvisioningPreSignIn (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: ReportWaylandLateTimingEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportWaylandLateTimingEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportWaylandLateTimingEvent (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: ReportWebViewProcessStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportWebViewProcessStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportWebViewProcessStarted (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: ReportVpnServiceBuilderCompatApiUsage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportVpnServiceBuilderCompatApiUsage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportVpnServiceBuilderCompatApiUsage (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: ReportNewQosSocketCount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportNewQosSocketCount_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportNewQosSocketCount (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: ReportQosSocketPercentage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportQosSocketPercentage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportQosSocketPercentage (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: ReportArcKeyMintError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportArcKeyMintError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportArcKeyMintError (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: ReportDragResizeLatency
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportDragResizeLatency_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportDragResizeLatency (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: ReportAppErrorDialogType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportAppErrorDialogType_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportAppErrorDialogType (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: ReportApkCacheHit
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportApkCacheHit_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportApkCacheHit (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: ReportAppCategoryDataSizeList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportAppCategoryDataSizeList_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportAppCategoryDataSizeList (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: ReportDataDirectorySizeList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportDataDirectorySizeList_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportDataDirectorySizeList (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: ReportArcKeyMintErrorForOperation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportArcKeyMintErrorForOperation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportArcKeyMintErrorForOperation (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: ReportCertificateSigningResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsHost_ReportCertificateSigningResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportCertificateSigningResult (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
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
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportBootProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportBootProgress');
          const result = this.impl.reportBootProgress(params.events, params.boot_type);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportNativeBridge_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportNativeBridge');
          const result = this.impl.reportNativeBridge(params.native_bridge_type);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportCompanionLibApiUsage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportCompanionLibApiUsage');
          const result = this.impl.reportCompanionLibApiUsage(params.api_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportAppKill_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportAppKill');
          const result = this.impl.reportAppKill(params.app_kill);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportArcCorePriAbiMigEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportArcCorePriAbiMigEvent');
          const result = this.impl.reportArcCorePriAbiMigEvent(params.event);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportArcCorePriAbiMigFailedTries_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportArcCorePriAbiMigFailedTries');
          const result = this.impl.reportArcCorePriAbiMigFailedTries(params.failed_attempts);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportArcCorePriAbiMigDowngradeDelay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportArcCorePriAbiMigDowngradeDelay');
          const result = this.impl.reportArcCorePriAbiMigDowngradeDelay(params.delay);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportArcCorePriAbiMigBootTime_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportArcCorePriAbiMigBootTime');
          const result = this.impl.reportArcCorePriAbiMigBootTime(params.duration);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportAnr_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportAnr');
          const result = this.impl.reportAnr(params.anr);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportArcSystemHealthUpgrade_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportArcSystemHealthUpgrade');
          const result = this.impl.reportArcSystemHealthUpgrade(params.duration, params.packages_deleted);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportLowLatencyStylusLibApiUsage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportLowLatencyStylusLibApiUsage');
          const result = this.impl.reportLowLatencyStylusLibApiUsage(params.api_id);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportLowLatencyStylusLibPredictionTarget_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportLowLatencyStylusLibPredictionTarget');
          const result = this.impl.reportLowLatencyStylusLibPredictionTarget(params.prediction_target);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportDnsQueryResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportDnsQueryResult');
          const result = this.impl.reportDnsQueryResult(params.query, params.success);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportMainAccountHashMigrationMetrics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportMainAccountHashMigrationMetrics');
          const result = this.impl.reportMainAccountHashMigrationMetrics(params.status);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportArcNetworkEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportArcNetworkEvent');
          const result = this.impl.reportArcNetworkEvent(params.event);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportArcNetworkError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportArcNetworkError');
          const result = this.impl.reportArcNetworkError(params.error);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportAppPrimaryAbi_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportAppPrimaryAbi');
          const result = this.impl.reportAppPrimaryAbi(params.abi);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportDataRestore_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportDataRestore');
          const result = this.impl.reportDataRestore(params.status, params.duration_ms);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportMemoryPressure_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportMemoryPressure');
          const result = this.impl.reportMemoryPressure(params.psi_file_contents);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportProvisioningPreSignIn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportProvisioningPreSignIn');
          const result = this.impl.reportProvisioningPreSignIn();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportWaylandLateTimingEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportWaylandLateTimingEvent');
          const result = this.impl.reportWaylandLateTimingEvent(params.event, params.duration);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportWebViewProcessStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportWebViewProcessStarted');
          const result = this.impl.reportWebViewProcessStarted();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportVpnServiceBuilderCompatApiUsage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportVpnServiceBuilderCompatApiUsage');
          const result = this.impl.reportVpnServiceBuilderCompatApiUsage(params.api_id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportNewQosSocketCount_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportNewQosSocketCount');
          const result = this.impl.reportNewQosSocketCount(params.count);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportQosSocketPercentage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportQosSocketPercentage');
          const result = this.impl.reportQosSocketPercentage(params.perc);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportArcKeyMintError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportArcKeyMintError');
          const result = this.impl.reportArcKeyMintError(params.error);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportDragResizeLatency_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportDragResizeLatency');
          const result = this.impl.reportDragResizeLatency(params.durations);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportAppErrorDialogType_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportAppErrorDialogType');
          const result = this.impl.reportAppErrorDialogType(params.type);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportApkCacheHit_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportApkCacheHit');
          const result = this.impl.reportApkCacheHit(params.hit);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportAppCategoryDataSizeList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportAppCategoryDataSizeList');
          const result = this.impl.reportAppCategoryDataSizeList(params.list);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportDataDirectorySizeList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportDataDirectorySizeList');
          const result = this.impl.reportDataDirectorySizeList(params.list);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportArcKeyMintErrorForOperation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportArcKeyMintErrorForOperation');
          const result = this.impl.reportArcKeyMintErrorForOperation(params.error, params.operation);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsHost_ReportCertificateSigningResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportCertificateSigningResult');
          const result = this.impl.reportCertificateSigningResult(params.result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
  init(host_remote) {
    return this.$.init(host_remote);
  }
  getGfxMetrics(packageName) {
    return this.$.getGfxMetrics(packageName);
  }
};

arc.mojom.MetricsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MetricsInstance', [
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.MetricsInstance_Init_ParamsSpec,
      arc.mojom.MetricsInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  getGfxMetrics(packageName) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MetricsInstance', [
      { explicit: 1 },
      { explicit: 2 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsInstance_Init_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetGfxMetrics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MetricsInstance_GetGfxMetrics_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetGfxMetrics (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(arc.mojom.MetricsInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.MetricsInstance_Init_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Init FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MetricsInstance_GetGfxMetrics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getGfxMetrics');
          const result = this.impl.getGfxMetrics(params.packageName);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.MetricsInstance_GetGfxMetrics_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetGfxMetrics FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.MetricsInstanceReceiver = arc.mojom.MetricsInstanceReceiver;

arc.mojom.MetricsInstancePtr = arc.mojom.MetricsInstanceRemote;
arc.mojom.MetricsInstanceRequest = arc.mojom.MetricsInstancePendingReceiver;

