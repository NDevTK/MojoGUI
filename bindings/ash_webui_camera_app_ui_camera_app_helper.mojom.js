// Auto-generated MojoJS binding
 // Source: chromium_src/ash/webui/camera_app_ui/camera_app_helper.mojom
 // Module: ash.camera_app.mojom

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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.camera_app = mojo.internal.bindings.ash.camera_app || {};
mojo.internal.bindings.ash.camera_app.mojom = mojo.internal.bindings.ash.camera_app.mojom || {};
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.ash.camera_app.mojom.ScreenStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.camera_app.mojom.LidStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.camera_app.mojom.WindowStateTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.camera_app.mojom.FileMonitorResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.camera_app.mojom.StorageMonitorStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.camera_app.mojom.AspectRatioSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.camera_app.mojom.FileTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.camera_app.mojom.CaptureDestinationSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.WifiConfigSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CloudUploadSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.LocalFileSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitor = {};
mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitor.$interfaceName = 'ash.camera_app.mojom.TabletModeMonitor';
mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitor_Update_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitor = {};
mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitor.$interfaceName = 'ash.camera_app.mojom.ScreenStateMonitor';
mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitor_Update_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitor = {};
mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitor.$interfaceName = 'ash.camera_app.mojom.ScreenLockedMonitor';
mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitor_Update_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitor = {};
mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitor.$interfaceName = 'ash.camera_app.mojom.ExternalScreenMonitor';
mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitor_Update_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitor = {};
mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitor.$interfaceName = 'ash.camera_app.mojom.CameraUsageOwnershipMonitor';
mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitor = {};
mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitor.$interfaceName = 'ash.camera_app.mojom.LidStateMonitor';
mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitor_Update_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitor = {};
mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitor.$interfaceName = 'ash.camera_app.mojom.SWPrivacySwitchMonitor';
mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitor_Update_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitor = {};
mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitor.$interfaceName = 'ash.camera_app.mojom.WindowStateMonitor';
mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitor_OnWindowStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitor_OnWindowFocusChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.StorageMonitor = {};
mojo.internal.bindings.ash.camera_app.mojom.StorageMonitor.$interfaceName = 'ash.camera_app.mojom.StorageMonitor';
mojo.internal.bindings.ash.camera_app.mojom.StorageMonitor_Update_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.WindowStateController = {};
mojo.internal.bindings.ash.camera_app.mojom.WindowStateController.$interfaceName = 'ash.camera_app.mojom.WindowStateController';
mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_AddMonitor_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_AddMonitor_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_GetWindowState_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_GetWindowState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Minimize_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Minimize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Restore_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Restore_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Maximize_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Maximize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Fullscreen_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Fullscreen_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Focus_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Focus_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper = {};
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper.$interfaceName = 'ash.camera_app.mojom.CameraAppHelper';
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StartPerfEventTrace_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StopPerfEventTrace_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenFileInGallery_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenFeedbackDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenUrlInBrowser_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_MaybeTriggerSurvey_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StopStorageMonitor_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenStorageManagement_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenWifiDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_PerformOcr_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_PerformOcr_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_CreatePdfBuilder_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ResponseParamsSpec = { $: {} };

// Enum: ScreenState
mojo.internal.bindings.ash.camera_app.mojom.ScreenState = {
  kOn: 0,
  kOff: 1,
  kOffAuto: 2,
};

// Enum: LidState
mojo.internal.bindings.ash.camera_app.mojom.LidState = {
  kOpen: 0,
  kClosed: 1,
  kNotPresent: 2,
};

// Enum: WindowStateType
mojo.internal.bindings.ash.camera_app.mojom.WindowStateType = {
  kMinimized: 0,
  kMaximized: 1,
  kFullscreen: 2,
  kRegular: 3,
};

// Enum: FileMonitorResult
mojo.internal.bindings.ash.camera_app.mojom.FileMonitorResult = {
  kDeleted: 0,
  kCanceled: 1,
  kError: 2,
};

// Enum: StorageMonitorStatus
mojo.internal.bindings.ash.camera_app.mojom.StorageMonitorStatus = {
  kNormal: 0,
  kLow: 1,
  kCriticallyLow: 2,
  kCanceled: 3,
  kError: 4,
};

// Enum: AspectRatio
mojo.internal.bindings.ash.camera_app.mojom.AspectRatio = {
  kOthers: 0,
  k4To3: 1,
  k16To9: 2,
};

// Enum: FileType
mojo.internal.bindings.ash.camera_app.mojom.FileType = {
  kPhoto: 0,
  kVideo: 1,
  kGif: 2,
};

// Union: CaptureDestination
mojo.internal.Union(
    mojo.internal.bindings.ash.camera_app.mojom.CaptureDestinationSpec, 'ash.camera_app.mojom.CaptureDestination', {
      'arg_cloud_upload': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.camera_app.mojom.CloudUploadSpec.$,
        'nullable': false,
      },
      'arg_local_file': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.camera_app.mojom.LocalFileSpec.$,
        'nullable': false,
      },
    });

// Struct: WifiConfig
mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.WifiConfigSpec, 'ash.camera_app.mojom.WifiConfig', [
      mojo.internal.StructField('arg_ssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_security', 8, 0, mojo.internal.bindings.ash.camera_app.mojom.WifiSecurityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_password', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_eap_method', 24, 0, mojo.internal.bindings.ash.camera_app.mojom.WifiEapMethodSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_eap_phase2_method', 32, 0, mojo.internal.bindings.ash.camera_app.mojom.WifiEapPhase2MethodSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_eap_identity', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_eap_anonymous_identity', 48, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 64]]);

// Struct: CloudUpload
mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CloudUploadSpec, 'ash.camera_app.mojom.CloudUpload', [
      mojo.internal.StructField('arg_file_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_thumbnail', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LocalFile
mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.LocalFileSpec, 'ash.camera_app.mojom.LocalFile', [
      mojo.internal.StructField('arg_file_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: TabletModeMonitor
mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitor_Update_ParamsSpec, 'ash.camera_app.mojom.TabletModeMonitor_Update_Params', [
      mojo.internal.StructField('arg_is_tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.TabletModeMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  update(arg_is_tablet_mode) {
    return this.$.update(arg_is_tablet_mode);
  }
};

mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TabletModeMonitor', [
      { explicit: null },
    ]);
  }

  update(arg_is_tablet_mode) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitor_Update_ParamsSpec,
      null,
      [arg_is_tablet_mode],
      false);
  }

};

mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitor.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.TabletModeMonitor',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TabletModeMonitor', [
      { explicit: null },
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
        
        // Try Method 0: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitor_Update_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitor_Update_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.arg_is_tablet_mode);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitorReceiver = mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitorReceiver;

mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitorPtr = mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitorRemote;
mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitorRequest = mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitorPendingReceiver;


// Interface: ScreenStateMonitor
mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitor_Update_ParamsSpec, 'ash.camera_app.mojom.ScreenStateMonitor_Update_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.ash.camera_app.mojom.ScreenStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.ScreenStateMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  update(arg_state) {
    return this.$.update(arg_state);
  }
};

mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ScreenStateMonitor', [
      { explicit: null },
    ]);
  }

  update(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitor_Update_ParamsSpec,
      null,
      [arg_state],
      false);
  }

};

mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitor.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.ScreenStateMonitor',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ScreenStateMonitor', [
      { explicit: null },
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
        
        // Try Method 0: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitor_Update_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitor_Update_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.arg_state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitorReceiver = mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitorReceiver;

mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitorPtr = mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitorRemote;
mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitorRequest = mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitorPendingReceiver;


// Interface: ScreenLockedMonitor
mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitor_Update_ParamsSpec, 'ash.camera_app.mojom.ScreenLockedMonitor_Update_Params', [
      mojo.internal.StructField('arg_is_screen_locked', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.ScreenLockedMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  update(arg_is_screen_locked) {
    return this.$.update(arg_is_screen_locked);
  }
};

mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ScreenLockedMonitor', [
      { explicit: null },
    ]);
  }

  update(arg_is_screen_locked) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitor_Update_ParamsSpec,
      null,
      [arg_is_screen_locked],
      false);
  }

};

mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitor.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.ScreenLockedMonitor',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ScreenLockedMonitor', [
      { explicit: null },
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
        
        // Try Method 0: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitor_Update_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitor_Update_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.arg_is_screen_locked);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitorReceiver = mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitorReceiver;

mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitorPtr = mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitorRemote;
mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitorRequest = mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitorPendingReceiver;


// Interface: ExternalScreenMonitor
mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitor_Update_ParamsSpec, 'ash.camera_app.mojom.ExternalScreenMonitor_Update_Params', [
      mojo.internal.StructField('arg_has_external_screen', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.ExternalScreenMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  update(arg_has_external_screen) {
    return this.$.update(arg_has_external_screen);
  }
};

mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ExternalScreenMonitor', [
      { explicit: null },
    ]);
  }

  update(arg_has_external_screen) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitor_Update_ParamsSpec,
      null,
      [arg_has_external_screen],
      false);
  }

};

mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitor.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.ExternalScreenMonitor',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ExternalScreenMonitor', [
      { explicit: null },
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
        
        // Try Method 0: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitor_Update_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitor_Update_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.arg_has_external_screen);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitorReceiver = mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitorReceiver;

mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitorPtr = mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitorRemote;
mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitorRequest = mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitorPendingReceiver;


// Interface: CameraUsageOwnershipMonitor
mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ParamsSpec, 'ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_Params', [
      mojo.internal.StructField('arg_has_usage', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ResponseParamsSpec, 'ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.CameraUsageOwnershipMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onCameraUsageOwnershipChanged(arg_has_usage) {
    return this.$.onCameraUsageOwnershipChanged(arg_has_usage);
  }
};

mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CameraUsageOwnershipMonitor', [
      { explicit: null },
    ]);
  }

  onCameraUsageOwnershipChanged(arg_has_usage) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ResponseParamsSpec,
      [arg_has_usage],
      false);
  }

};

mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitor.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.CameraUsageOwnershipMonitor',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CameraUsageOwnershipMonitor', [
      { explicit: null },
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
        
        // Try Method 0: OnCameraUsageOwnershipChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCameraUsageOwnershipChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCameraUsageOwnershipChanged');
          const result = this.impl.onCameraUsageOwnershipChanged(params.arg_has_usage);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnCameraUsageOwnershipChanged FAILED:', e));
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

mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitorReceiver = mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitorReceiver;

mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitorPtr = mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitorRemote;
mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitorRequest = mojo.internal.bindings.ash.camera_app.mojom.CameraUsageOwnershipMonitorPendingReceiver;


// Interface: LidStateMonitor
mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitor_Update_ParamsSpec, 'ash.camera_app.mojom.LidStateMonitor_Update_Params', [
      mojo.internal.StructField('arg_lid_status', 0, 0, mojo.internal.bindings.ash.camera_app.mojom.LidStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.LidStateMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  update(arg_lid_status) {
    return this.$.update(arg_lid_status);
  }
};

mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LidStateMonitor', [
      { explicit: null },
    ]);
  }

  update(arg_lid_status) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitor_Update_ParamsSpec,
      null,
      [arg_lid_status],
      false);
  }

};

mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitor.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.LidStateMonitor',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LidStateMonitor', [
      { explicit: null },
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
        
        // Try Method 0: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitor_Update_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitor_Update_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.arg_lid_status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitorReceiver = mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitorReceiver;

mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitorPtr = mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitorRemote;
mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitorRequest = mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitorPendingReceiver;


// Interface: SWPrivacySwitchMonitor
mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitor_Update_ParamsSpec, 'ash.camera_app.mojom.SWPrivacySwitchMonitor_Update_Params', [
      mojo.internal.StructField('arg_is_sw_privacy_switch_on', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.SWPrivacySwitchMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  update(arg_is_sw_privacy_switch_on) {
    return this.$.update(arg_is_sw_privacy_switch_on);
  }
};

mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SWPrivacySwitchMonitor', [
      { explicit: null },
    ]);
  }

  update(arg_is_sw_privacy_switch_on) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitor_Update_ParamsSpec,
      null,
      [arg_is_sw_privacy_switch_on],
      false);
  }

};

mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitor.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.SWPrivacySwitchMonitor',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SWPrivacySwitchMonitor', [
      { explicit: null },
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
        
        // Try Method 0: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitor_Update_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitor_Update_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.arg_is_sw_privacy_switch_on);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitorReceiver = mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitorReceiver;

mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitorPtr = mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitorRemote;
mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitorRequest = mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitorPendingReceiver;


// Interface: WindowStateMonitor
mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitor_OnWindowStateChanged_ParamsSpec, 'ash.camera_app.mojom.WindowStateMonitor_OnWindowStateChanged_Params', [
      mojo.internal.StructField('arg_states', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.camera_app.mojom.WindowStateTypeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitor_OnWindowFocusChanged_ParamsSpec, 'ash.camera_app.mojom.WindowStateMonitor_OnWindowFocusChanged_Params', [
      mojo.internal.StructField('arg_is_focus', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.WindowStateMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onWindowStateChanged(arg_states) {
    return this.$.onWindowStateChanged(arg_states);
  }
  onWindowFocusChanged(arg_is_focus) {
    return this.$.onWindowFocusChanged(arg_is_focus);
  }
};

mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WindowStateMonitor', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onWindowStateChanged(arg_states) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitor_OnWindowStateChanged_ParamsSpec,
      null,
      [arg_states],
      false);
  }

  onWindowFocusChanged(arg_is_focus) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitor_OnWindowFocusChanged_ParamsSpec,
      null,
      [arg_is_focus],
      false);
  }

};

mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitor.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.WindowStateMonitor',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WindowStateMonitor', [
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: OnWindowStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitor_OnWindowStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowStateChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnWindowFocusChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitor_OnWindowFocusChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowFocusChanged (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitor_OnWindowStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWindowStateChanged');
          const result = this.impl.onWindowStateChanged(params.arg_states);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitor_OnWindowFocusChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWindowFocusChanged');
          const result = this.impl.onWindowFocusChanged(params.arg_is_focus);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitorReceiver = mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitorReceiver;

mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitorPtr = mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitorRemote;
mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitorRequest = mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitorPendingReceiver;


// Interface: StorageMonitor
mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.StorageMonitor_Update_ParamsSpec, 'ash.camera_app.mojom.StorageMonitor_Update_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.ash.camera_app.mojom.StorageMonitorStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.camera_app.mojom.StorageMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.camera_app.mojom.StorageMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.StorageMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.camera_app.mojom.StorageMonitorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.camera_app.mojom.StorageMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  update(arg_status) {
    return this.$.update(arg_status);
  }
};

mojo.internal.bindings.ash.camera_app.mojom.StorageMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('StorageMonitor', [
      { explicit: null },
    ]);
  }

  update(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.StorageMonitor_Update_ParamsSpec,
      null,
      [arg_status],
      false);
  }

};

mojo.internal.bindings.ash.camera_app.mojom.StorageMonitor.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.camera_app.mojom.StorageMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.StorageMonitor',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.camera_app.mojom.StorageMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('StorageMonitor', [
      { explicit: null },
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
        
        // Try Method 0: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.StorageMonitor_Update_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.StorageMonitor_Update_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.arg_status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.camera_app.mojom.StorageMonitorReceiver = mojo.internal.bindings.ash.camera_app.mojom.StorageMonitorReceiver;

mojo.internal.bindings.ash.camera_app.mojom.StorageMonitorPtr = mojo.internal.bindings.ash.camera_app.mojom.StorageMonitorRemote;
mojo.internal.bindings.ash.camera_app.mojom.StorageMonitorRequest = mojo.internal.bindings.ash.camera_app.mojom.StorageMonitorPendingReceiver;


// Interface: WindowStateController
mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_AddMonitor_ParamsSpec, 'ash.camera_app.mojom.WindowStateController_AddMonitor_Params', [
      mojo.internal.StructField('arg_monitor', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.camera_app.mojom.WindowStateMonitorSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_AddMonitor_ResponseParamsSpec, 'ash.camera_app.mojom.WindowStateController_AddMonitor_ResponseParams', [
      mojo.internal.StructField('arg_states', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.camera_app.mojom.WindowStateTypeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_GetWindowState_ParamsSpec, 'ash.camera_app.mojom.WindowStateController_GetWindowState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_GetWindowState_ResponseParamsSpec, 'ash.camera_app.mojom.WindowStateController_GetWindowState_ResponseParams', [
      mojo.internal.StructField('arg_states', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.camera_app.mojom.WindowStateTypeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Minimize_ParamsSpec, 'ash.camera_app.mojom.WindowStateController_Minimize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Minimize_ResponseParamsSpec, 'ash.camera_app.mojom.WindowStateController_Minimize_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Restore_ParamsSpec, 'ash.camera_app.mojom.WindowStateController_Restore_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Restore_ResponseParamsSpec, 'ash.camera_app.mojom.WindowStateController_Restore_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Maximize_ParamsSpec, 'ash.camera_app.mojom.WindowStateController_Maximize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Maximize_ResponseParamsSpec, 'ash.camera_app.mojom.WindowStateController_Maximize_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Fullscreen_ParamsSpec, 'ash.camera_app.mojom.WindowStateController_Fullscreen_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Fullscreen_ResponseParamsSpec, 'ash.camera_app.mojom.WindowStateController_Fullscreen_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Focus_ParamsSpec, 'ash.camera_app.mojom.WindowStateController_Focus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Focus_ResponseParamsSpec, 'ash.camera_app.mojom.WindowStateController_Focus_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.ash.camera_app.mojom.WindowStateControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.camera_app.mojom.WindowStateControllerRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.WindowStateController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.camera_app.mojom.WindowStateControllerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.camera_app.mojom.WindowStateControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addMonitor(arg_monitor) {
    return this.$.addMonitor(arg_monitor);
  }
  getWindowState() {
    return this.$.getWindowState();
  }
  minimize() {
    return this.$.minimize();
  }
  restore() {
    return this.$.restore();
  }
  maximize() {
    return this.$.maximize();
  }
  fullscreen() {
    return this.$.fullscreen();
  }
  focus() {
    return this.$.focus();
  }
};

mojo.internal.bindings.ash.camera_app.mojom.WindowStateControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WindowStateController', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addMonitor(arg_monitor) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_AddMonitor_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_AddMonitor_ResponseParamsSpec,
      [arg_monitor],
      false);
  }

  getWindowState() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_GetWindowState_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_GetWindowState_ResponseParamsSpec,
      [],
      false);
  }

  minimize() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Minimize_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Minimize_ResponseParamsSpec,
      [],
      false);
  }

  restore() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Restore_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Restore_ResponseParamsSpec,
      [],
      false);
  }

  maximize() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Maximize_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Maximize_ResponseParamsSpec,
      [],
      false);
  }

  fullscreen() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Fullscreen_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Fullscreen_ResponseParamsSpec,
      [],
      false);
  }

  focus() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Focus_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Focus_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.ash.camera_app.mojom.WindowStateController.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.camera_app.mojom.WindowStateControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.WindowStateController',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.camera_app.mojom.WindowStateControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WindowStateController', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: AddMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_AddMonitor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddMonitor (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetWindowState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_GetWindowState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWindowState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Minimize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Minimize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Minimize (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Restore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Restore_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Restore (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Maximize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Maximize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Maximize (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Fullscreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Fullscreen_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Fullscreen (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: Focus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Focus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Focus (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_AddMonitor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addMonitor');
          const result = this.impl.addMonitor(params.arg_monitor);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_AddMonitor_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddMonitor FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_GetWindowState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getWindowState');
          const result = this.impl.getWindowState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_GetWindowState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetWindowState FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Minimize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.minimize');
          const result = this.impl.minimize();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Minimize_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Minimize FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Restore_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.restore');
          const result = this.impl.restore();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Restore_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Restore FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Maximize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.maximize');
          const result = this.impl.maximize();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Maximize_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Maximize FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Fullscreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fullscreen');
          const result = this.impl.fullscreen();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Fullscreen_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Fullscreen FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Focus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focus');
          const result = this.impl.focus();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.WindowStateController_Focus_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Focus FAILED:', e));
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

mojo.internal.bindings.ash.camera_app.mojom.WindowStateControllerReceiver = mojo.internal.bindings.ash.camera_app.mojom.WindowStateControllerReceiver;

mojo.internal.bindings.ash.camera_app.mojom.WindowStateControllerPtr = mojo.internal.bindings.ash.camera_app.mojom.WindowStateControllerRemote;
mojo.internal.bindings.ash.camera_app.mojom.WindowStateControllerRequest = mojo.internal.bindings.ash.camera_app.mojom.WindowStateControllerPendingReceiver;


// Interface: CameraAppHelper
mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_Params', [
      mojo.internal.StructField('arg_action', 0, 0, mojo.internal.bindings.arc.mojom.CameraIntentActionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_intent_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ResponseParams', [
      mojo.internal.StructField('arg_is_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_IsTabletMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ResponseParams', [
      mojo.internal.StructField('arg_is_tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StartPerfEventTrace_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_StartPerfEventTrace_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StopPerfEventTrace_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_StopPerfEventTrace_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_Params', [
      mojo.internal.StructField('arg_monitor', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.camera_app.mojom.TabletModeMonitorSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ResponseParams', [
      mojo.internal.StructField('arg_is_tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_Params', [
      mojo.internal.StructField('arg_monitor', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.camera_app.mojom.ScreenStateMonitorSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ResponseParams', [
      mojo.internal.StructField('arg_initial_state', 0, 0, mojo.internal.bindings.ash.camera_app.mojom.ScreenStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ResponseParams', [
      mojo.internal.StructField('arg_is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_Params', [
      mojo.internal.StructField('arg_monitor', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.camera_app.mojom.ExternalScreenMonitorSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ResponseParams', [
      mojo.internal.StructField('arg_has_external_screen', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenFileInGallery_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_OpenFileInGallery_Params', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenFeedbackDialog_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_OpenFeedbackDialog_Params', [
      mojo.internal.StructField('arg_placeholder', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenUrlInBrowser_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_OpenUrlInBrowser_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ResponseParams', [
      mojo.internal.StructField('arg_controller', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.camera_app.mojom.WindowStateControllerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_Params', [
      mojo.internal.StructField('arg_file_type', 0, 0, mojo.internal.bindings.ash.camera_app.mojom.FileTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_destination', 8, 0, mojo.internal.bindings.ash.camera_app.mojom.CaptureDestinationSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ResponseParams', [
      mojo.internal.StructField('arg_succeeded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_Params', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.ash.camera_app.mojom.FileMonitorResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ResponseParams', [
      mojo.internal.StructField('arg_is_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ResponseParams', [
      mojo.internal.StructField('arg_is_loaded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_Params', [
      mojo.internal.StructField('arg_jpeg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ResponseParams', [
      mojo.internal.StructField('arg_corners', 0, 0, mojo.internal.Array(mojo.internal.bindings.gfx.mojom.PointFSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_Params', [
      mojo.internal.StructField('arg_jpeg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_corners', 8, 0, mojo.internal.Array(mojo.internal.bindings.gfx.mojom.PointFSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_rotation', 16, 0, mojo.internal.bindings.chromeos.machine_learning.mojom.RotationSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ResponseParams', [
      mojo.internal.StructField('arg_doc_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_MaybeTriggerSurvey_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_MaybeTriggerSurvey_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_Params', [
      mojo.internal.StructField('arg_monitor', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.camera_app.mojom.StorageMonitorSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ResponseParams', [
      mojo.internal.StructField('arg_initial_status', 0, 0, mojo.internal.bindings.ash.camera_app.mojom.StorageMonitorStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StopStorageMonitor_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_StopStorageMonitor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenStorageManagement_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_OpenStorageManagement_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenWifiDialog_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_OpenWifiDialog_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.ash.camera_app.mojom.WifiConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_Params', [
      mojo.internal.StructField('arg_monitor', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.camera_app.mojom.LidStateMonitorSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ResponseParams', [
      mojo.internal.StructField('arg_lid_status', 0, 0, mojo.internal.bindings.ash.camera_app.mojom.LidStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_Params', [
      mojo.internal.StructField('arg_monitor', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.camera_app.mojom.SWPrivacySwitchMonitorSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ResponseParams', [
      mojo.internal.StructField('arg_is_sw_privacy_switch_on', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_GetEventsSender_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ResponseParams', [
      mojo.internal.StructField('arg_events_sender', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.camera_app.mojom.EventsSenderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_Params', [
      mojo.internal.StructField('arg_monitor', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.camera_app.mojom.ScreenLockedMonitorSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ResponseParams', [
      mojo.internal.StructField('arg_is_screen_locked', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_Params', [
      mojo.internal.StructField('arg_pdf_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ResponseParams', [
      mojo.internal.StructField('arg_jpeg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_PerformOcr_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_PerformOcr_Params', [
      mojo.internal.StructField('arg_jpeg_data', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_PerformOcr_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_PerformOcr_ResponseParams', [
      mojo.internal.StructField('arg_ocr_result', 0, 0, mojo.internal.bindings.ash.camera_app.mojom.OcrResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_Params', [
      mojo.internal.StructField('arg_jpeg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ResponseParams', [
      mojo.internal.StructField('arg_ocr_result', 0, 0, mojo.internal.bindings.ash.camera_app.mojom.OcrResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_CreatePdfBuilder_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_CreatePdfBuilder_Params', [
      mojo.internal.StructField('arg_builder', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.camera_app.mojom.PdfBuilderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ResponseParams', [
      mojo.internal.StructField('arg_order', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.camera_app.mojom.AspectRatioSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelperPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelperRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.CameraAppHelper';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelperPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelperRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  handleCameraResult(arg_intent_id, arg_action, arg_data) {
    return this.$.handleCameraResult(arg_intent_id, arg_action, arg_data);
  }
  isTabletMode() {
    return this.$.isTabletMode();
  }
  startPerfEventTrace(arg_event) {
    return this.$.startPerfEventTrace(arg_event);
  }
  stopPerfEventTrace(arg_event) {
    return this.$.stopPerfEventTrace(arg_event);
  }
  setTabletMonitor(arg_monitor) {
    return this.$.setTabletMonitor(arg_monitor);
  }
  setScreenStateMonitor(arg_monitor) {
    return this.$.setScreenStateMonitor(arg_monitor);
  }
  isMetricsAndCrashReportingEnabled() {
    return this.$.isMetricsAndCrashReportingEnabled();
  }
  setExternalScreenMonitor(arg_monitor) {
    return this.$.setExternalScreenMonitor(arg_monitor);
  }
  openFileInGallery(arg_name) {
    return this.$.openFileInGallery(arg_name);
  }
  openFeedbackDialog(arg_placeholder) {
    return this.$.openFeedbackDialog(arg_placeholder);
  }
  openUrlInBrowser(arg_url) {
    return this.$.openUrlInBrowser(arg_url);
  }
  getWindowStateController() {
    return this.$.getWindowStateController();
  }
  processCapturedFile(arg_file_type, arg_destination) {
    return this.$.processCapturedFile(arg_file_type, arg_destination);
  }
  monitorFileDeletion(arg_name) {
    return this.$.monitorFileDeletion(arg_name);
  }
  isDocumentScannerSupported() {
    return this.$.isDocumentScannerSupported();
  }
  checkDocumentModeReadiness() {
    return this.$.checkDocumentModeReadiness();
  }
  scanDocumentCorners(arg_jpeg_data) {
    return this.$.scanDocumentCorners(arg_jpeg_data);
  }
  convertToDocument(arg_jpeg_data, arg_corners, arg_rotation) {
    return this.$.convertToDocument(arg_jpeg_data, arg_corners, arg_rotation);
  }
  maybeTriggerSurvey() {
    return this.$.maybeTriggerSurvey();
  }
  startStorageMonitor(arg_monitor) {
    return this.$.startStorageMonitor(arg_monitor);
  }
  stopStorageMonitor() {
    return this.$.stopStorageMonitor();
  }
  openStorageManagement() {
    return this.$.openStorageManagement();
  }
  openWifiDialog(arg_config) {
    return this.$.openWifiDialog(arg_config);
  }
  setLidStateMonitor(arg_monitor) {
    return this.$.setLidStateMonitor(arg_monitor);
  }
  setSWPrivacySwitchMonitor(arg_monitor) {
    return this.$.setSWPrivacySwitchMonitor(arg_monitor);
  }
  getEventsSender() {
    return this.$.getEventsSender();
  }
  setScreenLockedMonitor(arg_monitor) {
    return this.$.setScreenLockedMonitor(arg_monitor);
  }
  renderPdfAsJpeg(arg_pdf_data) {
    return this.$.renderPdfAsJpeg(arg_pdf_data);
  }
  performOcr(arg_jpeg_data) {
    return this.$.performOcr(arg_jpeg_data);
  }
  performOcrInline(arg_jpeg_data) {
    return this.$.performOcrInline(arg_jpeg_data);
  }
  createPdfBuilder(arg_builder) {
    return this.$.createPdfBuilder(arg_builder);
  }
  getAspectRatioOrder() {
    return this.$.getAspectRatioOrder();
  }
};

mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelperRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CameraAppHelper', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  handleCameraResult(arg_intent_id, arg_action, arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ResponseParamsSpec,
      [arg_intent_id, arg_action, arg_data],
      false);
  }

  isTabletMode() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ResponseParamsSpec,
      [],
      false);
  }

  startPerfEventTrace(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StartPerfEventTrace_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  stopPerfEventTrace(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StopPerfEventTrace_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  setTabletMonitor(arg_monitor) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ResponseParamsSpec,
      [arg_monitor],
      false);
  }

  setScreenStateMonitor(arg_monitor) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ResponseParamsSpec,
      [arg_monitor],
      false);
  }

  isMetricsAndCrashReportingEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ResponseParamsSpec,
      [],
      false);
  }

  setExternalScreenMonitor(arg_monitor) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ResponseParamsSpec,
      [arg_monitor],
      false);
  }

  openFileInGallery(arg_name) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenFileInGallery_ParamsSpec,
      null,
      [arg_name],
      false);
  }

  openFeedbackDialog(arg_placeholder) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenFeedbackDialog_ParamsSpec,
      null,
      [arg_placeholder],
      false);
  }

  openUrlInBrowser(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenUrlInBrowser_ParamsSpec,
      null,
      [arg_url],
      false);
  }

  getWindowStateController() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ResponseParamsSpec,
      [],
      false);
  }

  processCapturedFile(arg_file_type, arg_destination) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ResponseParamsSpec,
      [arg_file_type, arg_destination],
      false);
  }

  monitorFileDeletion(arg_name) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ResponseParamsSpec,
      [arg_name],
      false);
  }

  isDocumentScannerSupported() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ResponseParamsSpec,
      [],
      false);
  }

  checkDocumentModeReadiness() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ResponseParamsSpec,
      [],
      false);
  }

  scanDocumentCorners(arg_jpeg_data) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ResponseParamsSpec,
      [arg_jpeg_data],
      false);
  }

  convertToDocument(arg_jpeg_data, arg_corners, arg_rotation) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ResponseParamsSpec,
      [arg_jpeg_data, arg_corners, arg_rotation],
      false);
  }

  maybeTriggerSurvey() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_MaybeTriggerSurvey_ParamsSpec,
      null,
      [],
      false);
  }

  startStorageMonitor(arg_monitor) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ResponseParamsSpec,
      [arg_monitor],
      false);
  }

  stopStorageMonitor() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StopStorageMonitor_ParamsSpec,
      null,
      [],
      false);
  }

  openStorageManagement() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenStorageManagement_ParamsSpec,
      null,
      [],
      false);
  }

  openWifiDialog(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenWifiDialog_ParamsSpec,
      null,
      [arg_config],
      false);
  }

  setLidStateMonitor(arg_monitor) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ResponseParamsSpec,
      [arg_monitor],
      false);
  }

  setSWPrivacySwitchMonitor(arg_monitor) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ResponseParamsSpec,
      [arg_monitor],
      false);
  }

  getEventsSender() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ResponseParamsSpec,
      [],
      false);
  }

  setScreenLockedMonitor(arg_monitor) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ResponseParamsSpec,
      [arg_monitor],
      false);
  }

  renderPdfAsJpeg(arg_pdf_data) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ResponseParamsSpec,
      [arg_pdf_data],
      false);
  }

  performOcr(arg_jpeg_data) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_PerformOcr_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_PerformOcr_ResponseParamsSpec,
      [arg_jpeg_data],
      false);
  }

  performOcrInline(arg_jpeg_data) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ResponseParamsSpec,
      [arg_jpeg_data],
      false);
  }

  createPdfBuilder(arg_builder) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_CreatePdfBuilder_ParamsSpec,
      null,
      [arg_builder],
      false);
  }

  getAspectRatioOrder() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ParamsSpec,
      mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelperRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.CameraAppHelper',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelperReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CameraAppHelper', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: HandleCameraResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleCameraResult (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: IsTabletMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsTabletMode (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: StartPerfEventTrace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StartPerfEventTrace_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartPerfEventTrace (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: StopPerfEventTrace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StopPerfEventTrace_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopPerfEventTrace (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetTabletMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTabletMonitor (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetScreenStateMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetScreenStateMonitor (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: IsMetricsAndCrashReportingEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsMetricsAndCrashReportingEnabled (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetExternalScreenMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetExternalScreenMonitor (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OpenFileInGallery
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenFileInGallery_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFileInGallery (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OpenFeedbackDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenFeedbackDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFeedbackDialog (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OpenUrlInBrowser
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenUrlInBrowser_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenUrlInBrowser (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: GetWindowStateController
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWindowStateController (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: ProcessCapturedFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProcessCapturedFile (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: MonitorFileDeletion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MonitorFileDeletion (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: IsDocumentScannerSupported
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsDocumentScannerSupported (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: CheckDocumentModeReadiness
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CheckDocumentModeReadiness (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: ScanDocumentCorners
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScanDocumentCorners (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: ConvertToDocument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConvertToDocument (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: MaybeTriggerSurvey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_MaybeTriggerSurvey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MaybeTriggerSurvey (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: StartStorageMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartStorageMonitor (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: StopStorageMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StopStorageMonitor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopStorageMonitor (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: OpenStorageManagement
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenStorageManagement_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenStorageManagement (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: OpenWifiDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenWifiDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenWifiDialog (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: SetLidStateMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLidStateMonitor (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: SetSWPrivacySwitchMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSWPrivacySwitchMonitor (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: GetEventsSender
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetEventsSender (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: SetScreenLockedMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetScreenLockedMonitor (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: RenderPdfAsJpeg
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RenderPdfAsJpeg (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: PerformOcr
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_PerformOcr_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PerformOcr (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: PerformOcrInline
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PerformOcrInline (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: CreatePdfBuilder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_CreatePdfBuilder_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePdfBuilder (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: GetAspectRatioOrder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAspectRatioOrder (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleCameraResult');
          const result = this.impl.handleCameraResult(params.arg_intent_id, params.arg_action, params.arg_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] HandleCameraResult FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isTabletMode');
          const result = this.impl.isTabletMode();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsTabletMode FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StartPerfEventTrace_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startPerfEventTrace');
          const result = this.impl.startPerfEventTrace(params.arg_event);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StopPerfEventTrace_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopPerfEventTrace');
          const result = this.impl.stopPerfEventTrace(params.arg_event);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTabletMonitor');
          const result = this.impl.setTabletMonitor(params.arg_monitor);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetTabletMonitor FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setScreenStateMonitor');
          const result = this.impl.setScreenStateMonitor(params.arg_monitor);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetScreenStateMonitor FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isMetricsAndCrashReportingEnabled');
          const result = this.impl.isMetricsAndCrashReportingEnabled();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsMetricsAndCrashReportingEnabled FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setExternalScreenMonitor');
          const result = this.impl.setExternalScreenMonitor(params.arg_monitor);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetExternalScreenMonitor FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenFileInGallery_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openFileInGallery');
          const result = this.impl.openFileInGallery(params.arg_name);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenFeedbackDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openFeedbackDialog');
          const result = this.impl.openFeedbackDialog(params.arg_placeholder);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenUrlInBrowser_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openUrlInBrowser');
          const result = this.impl.openUrlInBrowser(params.arg_url);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getWindowStateController');
          const result = this.impl.getWindowStateController();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetWindowStateController FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.processCapturedFile');
          const result = this.impl.processCapturedFile(params.arg_file_type, params.arg_destination);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ProcessCapturedFile FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.monitorFileDeletion');
          const result = this.impl.monitorFileDeletion(params.arg_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] MonitorFileDeletion FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isDocumentScannerSupported');
          const result = this.impl.isDocumentScannerSupported();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsDocumentScannerSupported FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.checkDocumentModeReadiness');
          const result = this.impl.checkDocumentModeReadiness();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CheckDocumentModeReadiness FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scanDocumentCorners');
          const result = this.impl.scanDocumentCorners(params.arg_jpeg_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ScanDocumentCorners FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.convertToDocument');
          const result = this.impl.convertToDocument(params.arg_jpeg_data, params.arg_corners, params.arg_rotation);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ConvertToDocument FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_MaybeTriggerSurvey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.maybeTriggerSurvey');
          const result = this.impl.maybeTriggerSurvey();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startStorageMonitor');
          const result = this.impl.startStorageMonitor(params.arg_monitor);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartStorageMonitor FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_StopStorageMonitor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopStorageMonitor');
          const result = this.impl.stopStorageMonitor();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenStorageManagement_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openStorageManagement');
          const result = this.impl.openStorageManagement();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_OpenWifiDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openWifiDialog');
          const result = this.impl.openWifiDialog(params.arg_config);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setLidStateMonitor');
          const result = this.impl.setLidStateMonitor(params.arg_monitor);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetLidStateMonitor FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSWPrivacySwitchMonitor');
          const result = this.impl.setSWPrivacySwitchMonitor(params.arg_monitor);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetSWPrivacySwitchMonitor FAILED:', e));
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getEventsSender');
          const result = this.impl.getEventsSender();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetEventsSender FAILED:', e));
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setScreenLockedMonitor');
          const result = this.impl.setScreenLockedMonitor(params.arg_monitor);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetScreenLockedMonitor FAILED:', e));
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.renderPdfAsJpeg');
          const result = this.impl.renderPdfAsJpeg(params.arg_pdf_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RenderPdfAsJpeg FAILED:', e));
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_PerformOcr_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.performOcr');
          const result = this.impl.performOcr(params.arg_jpeg_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_PerformOcr_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PerformOcr FAILED:', e));
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.performOcrInline');
          const result = this.impl.performOcrInline(params.arg_jpeg_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PerformOcrInline FAILED:', e));
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_CreatePdfBuilder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPdfBuilder');
          const result = this.impl.createPdfBuilder(params.arg_builder);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAspectRatioOrder');
          const result = this.impl.getAspectRatioOrder();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAspectRatioOrder FAILED:', e));
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

mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelperReceiver = mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelperReceiver;

mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelperPtr = mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelperRemote;
mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelperRequest = mojo.internal.bindings.ash.camera_app.mojom.CameraAppHelperPendingReceiver;

