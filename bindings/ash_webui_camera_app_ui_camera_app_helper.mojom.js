// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/camera_app_ui/camera_app_helper.mojom
// Module: ash.camera_app.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ash = ash || {};
ash.camera_app = ash.camera_app || {};
ash.camera_app.mojom = ash.camera_app.mojom || {};
var arc = arc || {};
var chromeos = chromeos || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};
var url = url || {};

ash.camera_app.mojom.ScreenStateSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.LidStateSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.WindowStateTypeSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.FileMonitorResultSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.StorageMonitorStatusSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.AspectRatioSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.FileTypeSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.CaptureDestinationSpec = { $: {} };
ash.camera_app.mojom.WifiConfigSpec = { $: {} };
ash.camera_app.mojom.CloudUploadSpec = { $: {} };
ash.camera_app.mojom.LocalFileSpec = { $: {} };
ash.camera_app.mojom.TabletModeMonitor = {};
ash.camera_app.mojom.TabletModeMonitor.$interfaceName = 'ash.camera_app.mojom.TabletModeMonitor';
ash.camera_app.mojom.TabletModeMonitor_Update_ParamsSpec = { $: {} };
ash.camera_app.mojom.ScreenStateMonitor = {};
ash.camera_app.mojom.ScreenStateMonitor.$interfaceName = 'ash.camera_app.mojom.ScreenStateMonitor';
ash.camera_app.mojom.ScreenStateMonitor_Update_ParamsSpec = { $: {} };
ash.camera_app.mojom.ScreenLockedMonitor = {};
ash.camera_app.mojom.ScreenLockedMonitor.$interfaceName = 'ash.camera_app.mojom.ScreenLockedMonitor';
ash.camera_app.mojom.ScreenLockedMonitor_Update_ParamsSpec = { $: {} };
ash.camera_app.mojom.ExternalScreenMonitor = {};
ash.camera_app.mojom.ExternalScreenMonitor.$interfaceName = 'ash.camera_app.mojom.ExternalScreenMonitor';
ash.camera_app.mojom.ExternalScreenMonitor_Update_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraUsageOwnershipMonitor = {};
ash.camera_app.mojom.CameraUsageOwnershipMonitor.$interfaceName = 'ash.camera_app.mojom.CameraUsageOwnershipMonitor';
ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.LidStateMonitor = {};
ash.camera_app.mojom.LidStateMonitor.$interfaceName = 'ash.camera_app.mojom.LidStateMonitor';
ash.camera_app.mojom.LidStateMonitor_Update_ParamsSpec = { $: {} };
ash.camera_app.mojom.SWPrivacySwitchMonitor = {};
ash.camera_app.mojom.SWPrivacySwitchMonitor.$interfaceName = 'ash.camera_app.mojom.SWPrivacySwitchMonitor';
ash.camera_app.mojom.SWPrivacySwitchMonitor_Update_ParamsSpec = { $: {} };
ash.camera_app.mojom.WindowStateMonitor = {};
ash.camera_app.mojom.WindowStateMonitor.$interfaceName = 'ash.camera_app.mojom.WindowStateMonitor';
ash.camera_app.mojom.WindowStateMonitor_OnWindowStateChanged_ParamsSpec = { $: {} };
ash.camera_app.mojom.WindowStateMonitor_OnWindowFocusChanged_ParamsSpec = { $: {} };
ash.camera_app.mojom.StorageMonitor = {};
ash.camera_app.mojom.StorageMonitor.$interfaceName = 'ash.camera_app.mojom.StorageMonitor';
ash.camera_app.mojom.StorageMonitor_Update_ParamsSpec = { $: {} };
ash.camera_app.mojom.WindowStateController = {};
ash.camera_app.mojom.WindowStateController.$interfaceName = 'ash.camera_app.mojom.WindowStateController';
ash.camera_app.mojom.WindowStateController_AddMonitor_ParamsSpec = { $: {} };
ash.camera_app.mojom.WindowStateController_AddMonitor_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.WindowStateController_GetWindowState_ParamsSpec = { $: {} };
ash.camera_app.mojom.WindowStateController_GetWindowState_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.WindowStateController_Minimize_ParamsSpec = { $: {} };
ash.camera_app.mojom.WindowStateController_Minimize_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.WindowStateController_Restore_ParamsSpec = { $: {} };
ash.camera_app.mojom.WindowStateController_Restore_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.WindowStateController_Maximize_ParamsSpec = { $: {} };
ash.camera_app.mojom.WindowStateController_Maximize_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.WindowStateController_Fullscreen_ParamsSpec = { $: {} };
ash.camera_app.mojom.WindowStateController_Fullscreen_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.WindowStateController_Focus_ParamsSpec = { $: {} };
ash.camera_app.mojom.WindowStateController_Focus_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper = {};
ash.camera_app.mojom.CameraAppHelper.$interfaceName = 'ash.camera_app.mojom.CameraAppHelper';
ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_StartPerfEventTrace_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_StopPerfEventTrace_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_OpenFileInGallery_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_OpenFeedbackDialog_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_OpenUrlInBrowser_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_MaybeTriggerSurvey_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_StopStorageMonitor_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_OpenStorageManagement_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_OpenWifiDialog_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_PerformOcr_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_PerformOcr_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_CreatePdfBuilder_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ParamsSpec = { $: {} };
ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ResponseParamsSpec = { $: {} };

// Enum: ScreenState
ash.camera_app.mojom.ScreenState = {
  kOn: 0,
  kOff: 1,
  kOffAuto: 2,
};

// Enum: LidState
ash.camera_app.mojom.LidState = {
  kOpen: 0,
  kClosed: 1,
  kNotPresent: 2,
};

// Enum: WindowStateType
ash.camera_app.mojom.WindowStateType = {
  kMinimized: 0,
  kMaximized: 1,
  kFullscreen: 2,
  kRegular: 3,
};

// Enum: FileMonitorResult
ash.camera_app.mojom.FileMonitorResult = {
  kDeleted: 0,
  kCanceled: 1,
  kError: 2,
};

// Enum: StorageMonitorStatus
ash.camera_app.mojom.StorageMonitorStatus = {
  kNormal: 0,
  kLow: 1,
  kCriticallyLow: 2,
  kCanceled: 3,
  kError: 4,
};

// Enum: AspectRatio
ash.camera_app.mojom.AspectRatio = {
  kOthers: 0,
  k4To3: 1,
  k16To9: 2,
};

// Enum: FileType
ash.camera_app.mojom.FileType = {
  kPhoto: 0,
  kVideo: 1,
  kGif: 2,
};

// Union: CaptureDestination
mojo.internal.Union(
    ash.camera_app.mojom.CaptureDestinationSpec, 'ash.camera_app.mojom.CaptureDestination', {
      'cloud_upload': {
        'ordinal': 0,
        'type': ash.camera_app.mojom.CloudUploadSpec.$,
        'nullable': false,
      },
      'local_file': {
        'ordinal': 1,
        'type': ash.camera_app.mojom.LocalFileSpec.$,
        'nullable': false,
      },
    });

// Struct: WifiConfig
mojo.internal.Struct(
    ash.camera_app.mojom.WifiConfigSpec, 'ash.camera_app.mojom.WifiConfig', [
      mojo.internal.StructField('ssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('security', 8, 0, ash.camera_app.mojom.WifiSecurityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('password', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('eap_method', 24, 0, ash.camera_app.mojom.WifiEapMethodSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('eap_phase2_method', 32, 0, ash.camera_app.mojom.WifiEapPhase2MethodSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('eap_identity', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('eap_anonymous_identity', 48, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 64]]);

// Struct: CloudUpload
mojo.internal.Struct(
    ash.camera_app.mojom.CloudUploadSpec, 'ash.camera_app.mojom.CloudUpload', [
      mojo.internal.StructField('file_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('thumbnail', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LocalFile
mojo.internal.Struct(
    ash.camera_app.mojom.LocalFileSpec, 'ash.camera_app.mojom.LocalFile', [
      mojo.internal.StructField('file_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: TabletModeMonitor
mojo.internal.Struct(
    ash.camera_app.mojom.TabletModeMonitor_Update_ParamsSpec, 'ash.camera_app.mojom.TabletModeMonitor_Update_Params', [
      mojo.internal.StructField('is_tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.camera_app.mojom.TabletModeMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.TabletModeMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.TabletModeMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.TabletModeMonitorPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.TabletModeMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  update(is_tablet_mode) {
    return this.$.update(is_tablet_mode);
  }
};

ash.camera_app.mojom.TabletModeMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TabletModeMonitor', [
      { explicit: null },
    ]);
  }

  update(is_tablet_mode) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.camera_app.mojom.TabletModeMonitor_Update_ParamsSpec,
      null,
      [is_tablet_mode],
      false);
  }

};

ash.camera_app.mojom.TabletModeMonitor.getRemote = function() {
  let remote = new ash.camera_app.mojom.TabletModeMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.TabletModeMonitor',
    'context');
  return remote.$;
};

ash.camera_app.mojom.TabletModeMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TabletModeMonitor', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.TabletModeMonitor_Update_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.TabletModeMonitor_Update_ParamsSpec.$.structSpec);
          const result = this.impl.update(params.is_tablet_mode);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.camera_app.mojom.TabletModeMonitorReceiver = ash.camera_app.mojom.TabletModeMonitorReceiver;

ash.camera_app.mojom.TabletModeMonitorPtr = ash.camera_app.mojom.TabletModeMonitorRemote;
ash.camera_app.mojom.TabletModeMonitorRequest = ash.camera_app.mojom.TabletModeMonitorPendingReceiver;


// Interface: ScreenStateMonitor
mojo.internal.Struct(
    ash.camera_app.mojom.ScreenStateMonitor_Update_ParamsSpec, 'ash.camera_app.mojom.ScreenStateMonitor_Update_Params', [
      mojo.internal.StructField('state', 0, 0, ash.camera_app.mojom.ScreenStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.camera_app.mojom.ScreenStateMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.ScreenStateMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.ScreenStateMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.ScreenStateMonitorPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.ScreenStateMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  update(state) {
    return this.$.update(state);
  }
};

ash.camera_app.mojom.ScreenStateMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ScreenStateMonitor', [
      { explicit: null },
    ]);
  }

  update(state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.camera_app.mojom.ScreenStateMonitor_Update_ParamsSpec,
      null,
      [state],
      false);
  }

};

ash.camera_app.mojom.ScreenStateMonitor.getRemote = function() {
  let remote = new ash.camera_app.mojom.ScreenStateMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.ScreenStateMonitor',
    'context');
  return remote.$;
};

ash.camera_app.mojom.ScreenStateMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ScreenStateMonitor', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.ScreenStateMonitor_Update_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.ScreenStateMonitor_Update_ParamsSpec.$.structSpec);
          const result = this.impl.update(params.state);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.camera_app.mojom.ScreenStateMonitorReceiver = ash.camera_app.mojom.ScreenStateMonitorReceiver;

ash.camera_app.mojom.ScreenStateMonitorPtr = ash.camera_app.mojom.ScreenStateMonitorRemote;
ash.camera_app.mojom.ScreenStateMonitorRequest = ash.camera_app.mojom.ScreenStateMonitorPendingReceiver;


// Interface: ScreenLockedMonitor
mojo.internal.Struct(
    ash.camera_app.mojom.ScreenLockedMonitor_Update_ParamsSpec, 'ash.camera_app.mojom.ScreenLockedMonitor_Update_Params', [
      mojo.internal.StructField('is_screen_locked', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.camera_app.mojom.ScreenLockedMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.ScreenLockedMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.ScreenLockedMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.ScreenLockedMonitorPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.ScreenLockedMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  update(is_screen_locked) {
    return this.$.update(is_screen_locked);
  }
};

ash.camera_app.mojom.ScreenLockedMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ScreenLockedMonitor', [
      { explicit: null },
    ]);
  }

  update(is_screen_locked) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.camera_app.mojom.ScreenLockedMonitor_Update_ParamsSpec,
      null,
      [is_screen_locked],
      false);
  }

};

ash.camera_app.mojom.ScreenLockedMonitor.getRemote = function() {
  let remote = new ash.camera_app.mojom.ScreenLockedMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.ScreenLockedMonitor',
    'context');
  return remote.$;
};

ash.camera_app.mojom.ScreenLockedMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ScreenLockedMonitor', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.ScreenLockedMonitor_Update_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.ScreenLockedMonitor_Update_ParamsSpec.$.structSpec);
          const result = this.impl.update(params.is_screen_locked);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.camera_app.mojom.ScreenLockedMonitorReceiver = ash.camera_app.mojom.ScreenLockedMonitorReceiver;

ash.camera_app.mojom.ScreenLockedMonitorPtr = ash.camera_app.mojom.ScreenLockedMonitorRemote;
ash.camera_app.mojom.ScreenLockedMonitorRequest = ash.camera_app.mojom.ScreenLockedMonitorPendingReceiver;


// Interface: ExternalScreenMonitor
mojo.internal.Struct(
    ash.camera_app.mojom.ExternalScreenMonitor_Update_ParamsSpec, 'ash.camera_app.mojom.ExternalScreenMonitor_Update_Params', [
      mojo.internal.StructField('has_external_screen', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.camera_app.mojom.ExternalScreenMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.ExternalScreenMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.ExternalScreenMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.ExternalScreenMonitorPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.ExternalScreenMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  update(has_external_screen) {
    return this.$.update(has_external_screen);
  }
};

ash.camera_app.mojom.ExternalScreenMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ExternalScreenMonitor', [
      { explicit: null },
    ]);
  }

  update(has_external_screen) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.camera_app.mojom.ExternalScreenMonitor_Update_ParamsSpec,
      null,
      [has_external_screen],
      false);
  }

};

ash.camera_app.mojom.ExternalScreenMonitor.getRemote = function() {
  let remote = new ash.camera_app.mojom.ExternalScreenMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.ExternalScreenMonitor',
    'context');
  return remote.$;
};

ash.camera_app.mojom.ExternalScreenMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ExternalScreenMonitor', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.ExternalScreenMonitor_Update_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.ExternalScreenMonitor_Update_ParamsSpec.$.structSpec);
          const result = this.impl.update(params.has_external_screen);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.camera_app.mojom.ExternalScreenMonitorReceiver = ash.camera_app.mojom.ExternalScreenMonitorReceiver;

ash.camera_app.mojom.ExternalScreenMonitorPtr = ash.camera_app.mojom.ExternalScreenMonitorRemote;
ash.camera_app.mojom.ExternalScreenMonitorRequest = ash.camera_app.mojom.ExternalScreenMonitorPendingReceiver;


// Interface: CameraUsageOwnershipMonitor
mojo.internal.Struct(
    ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ParamsSpec, 'ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_Params', [
      mojo.internal.StructField('has_usage', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ResponseParamsSpec, 'ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ResponseParams', [
    ],
    [[0, 8]]);

ash.camera_app.mojom.CameraUsageOwnershipMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.CameraUsageOwnershipMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.CameraUsageOwnershipMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.CameraUsageOwnershipMonitorPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.CameraUsageOwnershipMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onCameraUsageOwnershipChanged(has_usage) {
    return this.$.onCameraUsageOwnershipChanged(has_usage);
  }
};

ash.camera_app.mojom.CameraUsageOwnershipMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CameraUsageOwnershipMonitor', [
      { explicit: null },
    ]);
  }

  onCameraUsageOwnershipChanged(has_usage) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ParamsSpec,
      ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ResponseParamsSpec,
      [has_usage],
      false);
  }

};

ash.camera_app.mojom.CameraUsageOwnershipMonitor.getRemote = function() {
  let remote = new ash.camera_app.mojom.CameraUsageOwnershipMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.CameraUsageOwnershipMonitor',
    'context');
  return remote.$;
};

ash.camera_app.mojom.CameraUsageOwnershipMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CameraUsageOwnershipMonitor', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onCameraUsageOwnershipChanged(params.has_usage);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.camera_app.mojom.CameraUsageOwnershipMonitorReceiver = ash.camera_app.mojom.CameraUsageOwnershipMonitorReceiver;

ash.camera_app.mojom.CameraUsageOwnershipMonitorPtr = ash.camera_app.mojom.CameraUsageOwnershipMonitorRemote;
ash.camera_app.mojom.CameraUsageOwnershipMonitorRequest = ash.camera_app.mojom.CameraUsageOwnershipMonitorPendingReceiver;


// Interface: LidStateMonitor
mojo.internal.Struct(
    ash.camera_app.mojom.LidStateMonitor_Update_ParamsSpec, 'ash.camera_app.mojom.LidStateMonitor_Update_Params', [
      mojo.internal.StructField('lid_status', 0, 0, ash.camera_app.mojom.LidStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.camera_app.mojom.LidStateMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.LidStateMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.LidStateMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.LidStateMonitorPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.LidStateMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  update(lid_status) {
    return this.$.update(lid_status);
  }
};

ash.camera_app.mojom.LidStateMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LidStateMonitor', [
      { explicit: null },
    ]);
  }

  update(lid_status) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.camera_app.mojom.LidStateMonitor_Update_ParamsSpec,
      null,
      [lid_status],
      false);
  }

};

ash.camera_app.mojom.LidStateMonitor.getRemote = function() {
  let remote = new ash.camera_app.mojom.LidStateMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.LidStateMonitor',
    'context');
  return remote.$;
};

ash.camera_app.mojom.LidStateMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LidStateMonitor', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.LidStateMonitor_Update_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.LidStateMonitor_Update_ParamsSpec.$.structSpec);
          const result = this.impl.update(params.lid_status);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.camera_app.mojom.LidStateMonitorReceiver = ash.camera_app.mojom.LidStateMonitorReceiver;

ash.camera_app.mojom.LidStateMonitorPtr = ash.camera_app.mojom.LidStateMonitorRemote;
ash.camera_app.mojom.LidStateMonitorRequest = ash.camera_app.mojom.LidStateMonitorPendingReceiver;


// Interface: SWPrivacySwitchMonitor
mojo.internal.Struct(
    ash.camera_app.mojom.SWPrivacySwitchMonitor_Update_ParamsSpec, 'ash.camera_app.mojom.SWPrivacySwitchMonitor_Update_Params', [
      mojo.internal.StructField('is_sw_privacy_switch_on', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.camera_app.mojom.SWPrivacySwitchMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.SWPrivacySwitchMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.SWPrivacySwitchMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.SWPrivacySwitchMonitorPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.SWPrivacySwitchMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  update(is_sw_privacy_switch_on) {
    return this.$.update(is_sw_privacy_switch_on);
  }
};

ash.camera_app.mojom.SWPrivacySwitchMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SWPrivacySwitchMonitor', [
      { explicit: null },
    ]);
  }

  update(is_sw_privacy_switch_on) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.camera_app.mojom.SWPrivacySwitchMonitor_Update_ParamsSpec,
      null,
      [is_sw_privacy_switch_on],
      false);
  }

};

ash.camera_app.mojom.SWPrivacySwitchMonitor.getRemote = function() {
  let remote = new ash.camera_app.mojom.SWPrivacySwitchMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.SWPrivacySwitchMonitor',
    'context');
  return remote.$;
};

ash.camera_app.mojom.SWPrivacySwitchMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SWPrivacySwitchMonitor', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.SWPrivacySwitchMonitor_Update_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.SWPrivacySwitchMonitor_Update_ParamsSpec.$.structSpec);
          const result = this.impl.update(params.is_sw_privacy_switch_on);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.camera_app.mojom.SWPrivacySwitchMonitorReceiver = ash.camera_app.mojom.SWPrivacySwitchMonitorReceiver;

ash.camera_app.mojom.SWPrivacySwitchMonitorPtr = ash.camera_app.mojom.SWPrivacySwitchMonitorRemote;
ash.camera_app.mojom.SWPrivacySwitchMonitorRequest = ash.camera_app.mojom.SWPrivacySwitchMonitorPendingReceiver;


// Interface: WindowStateMonitor
mojo.internal.Struct(
    ash.camera_app.mojom.WindowStateMonitor_OnWindowStateChanged_ParamsSpec, 'ash.camera_app.mojom.WindowStateMonitor_OnWindowStateChanged_Params', [
      mojo.internal.StructField('states', 0, 0, mojo.internal.Array(ash.camera_app.mojom.WindowStateTypeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.WindowStateMonitor_OnWindowFocusChanged_ParamsSpec, 'ash.camera_app.mojom.WindowStateMonitor_OnWindowFocusChanged_Params', [
      mojo.internal.StructField('is_focus', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.camera_app.mojom.WindowStateMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.WindowStateMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.WindowStateMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.WindowStateMonitorPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.WindowStateMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onWindowStateChanged(states) {
    return this.$.onWindowStateChanged(states);
  }
  onWindowFocusChanged(is_focus) {
    return this.$.onWindowFocusChanged(is_focus);
  }
};

ash.camera_app.mojom.WindowStateMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WindowStateMonitor', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onWindowStateChanged(states) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.camera_app.mojom.WindowStateMonitor_OnWindowStateChanged_ParamsSpec,
      null,
      [states],
      false);
  }

  onWindowFocusChanged(is_focus) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.camera_app.mojom.WindowStateMonitor_OnWindowFocusChanged_ParamsSpec,
      null,
      [is_focus],
      false);
  }

};

ash.camera_app.mojom.WindowStateMonitor.getRemote = function() {
  let remote = new ash.camera_app.mojom.WindowStateMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.WindowStateMonitor',
    'context');
  return remote.$;
};

ash.camera_app.mojom.WindowStateMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WindowStateMonitor', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.WindowStateMonitor_OnWindowStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.WindowStateMonitor_OnWindowFocusChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.WindowStateMonitor_OnWindowStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onWindowStateChanged(params.states);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.WindowStateMonitor_OnWindowFocusChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onWindowFocusChanged(params.is_focus);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.camera_app.mojom.WindowStateMonitorReceiver = ash.camera_app.mojom.WindowStateMonitorReceiver;

ash.camera_app.mojom.WindowStateMonitorPtr = ash.camera_app.mojom.WindowStateMonitorRemote;
ash.camera_app.mojom.WindowStateMonitorRequest = ash.camera_app.mojom.WindowStateMonitorPendingReceiver;


// Interface: StorageMonitor
mojo.internal.Struct(
    ash.camera_app.mojom.StorageMonitor_Update_ParamsSpec, 'ash.camera_app.mojom.StorageMonitor_Update_Params', [
      mojo.internal.StructField('status', 0, 0, ash.camera_app.mojom.StorageMonitorStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.camera_app.mojom.StorageMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.StorageMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.StorageMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.StorageMonitorPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.StorageMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  update(status) {
    return this.$.update(status);
  }
};

ash.camera_app.mojom.StorageMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('StorageMonitor', [
      { explicit: null },
    ]);
  }

  update(status) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.camera_app.mojom.StorageMonitor_Update_ParamsSpec,
      null,
      [status],
      false);
  }

};

ash.camera_app.mojom.StorageMonitor.getRemote = function() {
  let remote = new ash.camera_app.mojom.StorageMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.StorageMonitor',
    'context');
  return remote.$;
};

ash.camera_app.mojom.StorageMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('StorageMonitor', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.StorageMonitor_Update_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.StorageMonitor_Update_ParamsSpec.$.structSpec);
          const result = this.impl.update(params.status);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.camera_app.mojom.StorageMonitorReceiver = ash.camera_app.mojom.StorageMonitorReceiver;

ash.camera_app.mojom.StorageMonitorPtr = ash.camera_app.mojom.StorageMonitorRemote;
ash.camera_app.mojom.StorageMonitorRequest = ash.camera_app.mojom.StorageMonitorPendingReceiver;


// Interface: WindowStateController
mojo.internal.Struct(
    ash.camera_app.mojom.WindowStateController_AddMonitor_ParamsSpec, 'ash.camera_app.mojom.WindowStateController_AddMonitor_Params', [
      mojo.internal.StructField('monitor', 0, 0, mojo.internal.InterfaceProxy(ash.camera_app.mojom.WindowStateMonitorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.WindowStateController_AddMonitor_ResponseParamsSpec, 'ash.camera_app.mojom.WindowStateController_AddMonitor_ResponseParams', [
      mojo.internal.StructField('states', 0, 0, mojo.internal.Array(ash.camera_app.mojom.WindowStateTypeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.WindowStateController_GetWindowState_ParamsSpec, 'ash.camera_app.mojom.WindowStateController_GetWindowState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.WindowStateController_GetWindowState_ResponseParamsSpec, 'ash.camera_app.mojom.WindowStateController_GetWindowState_ResponseParams', [
      mojo.internal.StructField('states', 0, 0, mojo.internal.Array(ash.camera_app.mojom.WindowStateTypeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.WindowStateController_Minimize_ParamsSpec, 'ash.camera_app.mojom.WindowStateController_Minimize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.WindowStateController_Minimize_ResponseParamsSpec, 'ash.camera_app.mojom.WindowStateController_Minimize_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.WindowStateController_Restore_ParamsSpec, 'ash.camera_app.mojom.WindowStateController_Restore_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.WindowStateController_Restore_ResponseParamsSpec, 'ash.camera_app.mojom.WindowStateController_Restore_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.WindowStateController_Maximize_ParamsSpec, 'ash.camera_app.mojom.WindowStateController_Maximize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.WindowStateController_Maximize_ResponseParamsSpec, 'ash.camera_app.mojom.WindowStateController_Maximize_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.WindowStateController_Fullscreen_ParamsSpec, 'ash.camera_app.mojom.WindowStateController_Fullscreen_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.WindowStateController_Fullscreen_ResponseParamsSpec, 'ash.camera_app.mojom.WindowStateController_Fullscreen_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.WindowStateController_Focus_ParamsSpec, 'ash.camera_app.mojom.WindowStateController_Focus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.WindowStateController_Focus_ResponseParamsSpec, 'ash.camera_app.mojom.WindowStateController_Focus_ResponseParams', [
    ],
    [[0, 8]]);

ash.camera_app.mojom.WindowStateControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.WindowStateControllerRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.WindowStateController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.WindowStateControllerPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.WindowStateControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addMonitor(monitor) {
    return this.$.addMonitor(monitor);
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

ash.camera_app.mojom.WindowStateControllerRemoteCallHandler = class {
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

  addMonitor(monitor) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.camera_app.mojom.WindowStateController_AddMonitor_ParamsSpec,
      ash.camera_app.mojom.WindowStateController_AddMonitor_ResponseParamsSpec,
      [monitor],
      false);
  }

  getWindowState() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.camera_app.mojom.WindowStateController_GetWindowState_ParamsSpec,
      ash.camera_app.mojom.WindowStateController_GetWindowState_ResponseParamsSpec,
      [],
      false);
  }

  minimize() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.camera_app.mojom.WindowStateController_Minimize_ParamsSpec,
      ash.camera_app.mojom.WindowStateController_Minimize_ResponseParamsSpec,
      [],
      false);
  }

  restore() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.camera_app.mojom.WindowStateController_Restore_ParamsSpec,
      ash.camera_app.mojom.WindowStateController_Restore_ResponseParamsSpec,
      [],
      false);
  }

  maximize() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.camera_app.mojom.WindowStateController_Maximize_ParamsSpec,
      ash.camera_app.mojom.WindowStateController_Maximize_ResponseParamsSpec,
      [],
      false);
  }

  fullscreen() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.camera_app.mojom.WindowStateController_Fullscreen_ParamsSpec,
      ash.camera_app.mojom.WindowStateController_Fullscreen_ResponseParamsSpec,
      [],
      false);
  }

  focus() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.camera_app.mojom.WindowStateController_Focus_ParamsSpec,
      ash.camera_app.mojom.WindowStateController_Focus_ResponseParamsSpec,
      [],
      false);
  }

};

ash.camera_app.mojom.WindowStateController.getRemote = function() {
  let remote = new ash.camera_app.mojom.WindowStateControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.WindowStateController',
    'context');
  return remote.$;
};

ash.camera_app.mojom.WindowStateControllerReceiver = class {
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.WindowStateController_AddMonitor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.WindowStateController_GetWindowState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.WindowStateController_Minimize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.WindowStateController_Restore_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.WindowStateController_Maximize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.WindowStateController_Fullscreen_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.WindowStateController_Focus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.WindowStateController_AddMonitor_ParamsSpec.$.structSpec);
          const result = this.impl.addMonitor(params.monitor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.WindowStateController_AddMonitor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.WindowStateController_GetWindowState_ParamsSpec.$.structSpec);
          const result = this.impl.getWindowState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.WindowStateController_GetWindowState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.WindowStateController_Minimize_ParamsSpec.$.structSpec);
          const result = this.impl.minimize();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.WindowStateController_Minimize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.WindowStateController_Restore_ParamsSpec.$.structSpec);
          const result = this.impl.restore();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.WindowStateController_Restore_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.WindowStateController_Maximize_ParamsSpec.$.structSpec);
          const result = this.impl.maximize();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.WindowStateController_Maximize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.WindowStateController_Fullscreen_ParamsSpec.$.structSpec);
          const result = this.impl.fullscreen();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.WindowStateController_Fullscreen_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.WindowStateController_Focus_ParamsSpec.$.structSpec);
          const result = this.impl.focus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.WindowStateController_Focus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.camera_app.mojom.WindowStateControllerReceiver = ash.camera_app.mojom.WindowStateControllerReceiver;

ash.camera_app.mojom.WindowStateControllerPtr = ash.camera_app.mojom.WindowStateControllerRemote;
ash.camera_app.mojom.WindowStateControllerRequest = ash.camera_app.mojom.WindowStateControllerPendingReceiver;


// Interface: CameraAppHelper
mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_Params', [
      mojo.internal.StructField('action', 0, 0, arc.mojom.CameraIntentActionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('intent_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ResponseParams', [
      mojo.internal.StructField('is_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_IsTabletMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ResponseParams', [
      mojo.internal.StructField('is_tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_StartPerfEventTrace_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_StartPerfEventTrace_Params', [
      mojo.internal.StructField('event', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_StopPerfEventTrace_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_StopPerfEventTrace_Params', [
      mojo.internal.StructField('event', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_Params', [
      mojo.internal.StructField('monitor', 0, 0, mojo.internal.InterfaceProxy(ash.camera_app.mojom.TabletModeMonitorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ResponseParams', [
      mojo.internal.StructField('is_tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_Params', [
      mojo.internal.StructField('monitor', 0, 0, mojo.internal.InterfaceProxy(ash.camera_app.mojom.ScreenStateMonitorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ResponseParams', [
      mojo.internal.StructField('initial_state', 0, 0, ash.camera_app.mojom.ScreenStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ResponseParams', [
      mojo.internal.StructField('is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_Params', [
      mojo.internal.StructField('monitor', 0, 0, mojo.internal.InterfaceProxy(ash.camera_app.mojom.ExternalScreenMonitorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ResponseParams', [
      mojo.internal.StructField('has_external_screen', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_OpenFileInGallery_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_OpenFileInGallery_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_OpenFeedbackDialog_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_OpenFeedbackDialog_Params', [
      mojo.internal.StructField('placeholder', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_OpenUrlInBrowser_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_OpenUrlInBrowser_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ResponseParams', [
      mojo.internal.StructField('controller', 0, 0, mojo.internal.InterfaceProxy(ash.camera_app.mojom.WindowStateControllerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_Params', [
      mojo.internal.StructField('file_type', 0, 0, ash.camera_app.mojom.FileTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('destination', 8, 0, ash.camera_app.mojom.CaptureDestinationSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ResponseParams', [
      mojo.internal.StructField('succeeded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.camera_app.mojom.FileMonitorResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ResponseParams', [
      mojo.internal.StructField('is_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ResponseParams', [
      mojo.internal.StructField('is_loaded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_Params', [
      mojo.internal.StructField('jpeg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ResponseParams', [
      mojo.internal.StructField('corners', 0, 0, mojo.internal.Array(gfx.mojom.PointFSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_Params', [
      mojo.internal.StructField('jpeg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('corners', 8, 0, mojo.internal.Array(gfx.mojom.PointFSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('rotation', 16, 0, chromeos.machine_learning.mojom.RotationSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ResponseParams', [
      mojo.internal.StructField('doc_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_MaybeTriggerSurvey_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_MaybeTriggerSurvey_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_Params', [
      mojo.internal.StructField('monitor', 0, 0, mojo.internal.InterfaceProxy(ash.camera_app.mojom.StorageMonitorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ResponseParams', [
      mojo.internal.StructField('initial_status', 0, 0, ash.camera_app.mojom.StorageMonitorStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_StopStorageMonitor_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_StopStorageMonitor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_OpenStorageManagement_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_OpenStorageManagement_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_OpenWifiDialog_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_OpenWifiDialog_Params', [
      mojo.internal.StructField('config', 0, 0, ash.camera_app.mojom.WifiConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_Params', [
      mojo.internal.StructField('monitor', 0, 0, mojo.internal.InterfaceProxy(ash.camera_app.mojom.LidStateMonitorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ResponseParams', [
      mojo.internal.StructField('lid_status', 0, 0, ash.camera_app.mojom.LidStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_Params', [
      mojo.internal.StructField('monitor', 0, 0, mojo.internal.InterfaceProxy(ash.camera_app.mojom.SWPrivacySwitchMonitorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ResponseParams', [
      mojo.internal.StructField('is_sw_privacy_switch_on', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_GetEventsSender_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ResponseParams', [
      mojo.internal.StructField('events_sender', 0, 0, mojo.internal.InterfaceProxy(ash.camera_app.mojom.EventsSenderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_Params', [
      mojo.internal.StructField('monitor', 0, 0, mojo.internal.InterfaceProxy(ash.camera_app.mojom.ScreenLockedMonitorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ResponseParams', [
      mojo.internal.StructField('is_screen_locked', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_Params', [
      mojo.internal.StructField('pdf_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ResponseParams', [
      mojo.internal.StructField('jpeg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_PerformOcr_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_PerformOcr_Params', [
      mojo.internal.StructField('jpeg_data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_PerformOcr_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_PerformOcr_ResponseParams', [
      mojo.internal.StructField('ocr_result', 0, 0, ash.camera_app.mojom.OcrResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_Params', [
      mojo.internal.StructField('jpeg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ResponseParams', [
      mojo.internal.StructField('ocr_result', 0, 0, ash.camera_app.mojom.OcrResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_CreatePdfBuilder_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_CreatePdfBuilder_Params', [
      mojo.internal.StructField('builder', 0, 0, mojo.internal.InterfaceRequest(ash.camera_app.mojom.PdfBuilderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ResponseParams', [
      mojo.internal.StructField('order', 0, 0, mojo.internal.Array(ash.camera_app.mojom.AspectRatioSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.camera_app.mojom.CameraAppHelperPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.CameraAppHelperRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.CameraAppHelper';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.CameraAppHelperPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.CameraAppHelperRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  handleCameraResult(intent_id, action, data) {
    return this.$.handleCameraResult(intent_id, action, data);
  }
  isTabletMode() {
    return this.$.isTabletMode();
  }
  startPerfEventTrace(event) {
    return this.$.startPerfEventTrace(event);
  }
  stopPerfEventTrace(event) {
    return this.$.stopPerfEventTrace(event);
  }
  setTabletMonitor(monitor) {
    return this.$.setTabletMonitor(monitor);
  }
  setScreenStateMonitor(monitor) {
    return this.$.setScreenStateMonitor(monitor);
  }
  isMetricsAndCrashReportingEnabled() {
    return this.$.isMetricsAndCrashReportingEnabled();
  }
  setExternalScreenMonitor(monitor) {
    return this.$.setExternalScreenMonitor(monitor);
  }
  openFileInGallery(name) {
    return this.$.openFileInGallery(name);
  }
  openFeedbackDialog(placeholder) {
    return this.$.openFeedbackDialog(placeholder);
  }
  openUrlInBrowser(url) {
    return this.$.openUrlInBrowser(url);
  }
  getWindowStateController() {
    return this.$.getWindowStateController();
  }
  processCapturedFile(file_type, destination) {
    return this.$.processCapturedFile(file_type, destination);
  }
  monitorFileDeletion(name) {
    return this.$.monitorFileDeletion(name);
  }
  isDocumentScannerSupported() {
    return this.$.isDocumentScannerSupported();
  }
  checkDocumentModeReadiness() {
    return this.$.checkDocumentModeReadiness();
  }
  scanDocumentCorners(jpeg_data) {
    return this.$.scanDocumentCorners(jpeg_data);
  }
  convertToDocument(jpeg_data, corners, rotation) {
    return this.$.convertToDocument(jpeg_data, corners, rotation);
  }
  maybeTriggerSurvey() {
    return this.$.maybeTriggerSurvey();
  }
  startStorageMonitor(monitor) {
    return this.$.startStorageMonitor(monitor);
  }
  stopStorageMonitor() {
    return this.$.stopStorageMonitor();
  }
  openStorageManagement() {
    return this.$.openStorageManagement();
  }
  openWifiDialog(config) {
    return this.$.openWifiDialog(config);
  }
  setLidStateMonitor(monitor) {
    return this.$.setLidStateMonitor(monitor);
  }
  setSWPrivacySwitchMonitor(monitor) {
    return this.$.setSWPrivacySwitchMonitor(monitor);
  }
  getEventsSender() {
    return this.$.getEventsSender();
  }
  setScreenLockedMonitor(monitor) {
    return this.$.setScreenLockedMonitor(monitor);
  }
  renderPdfAsJpeg(pdf_data) {
    return this.$.renderPdfAsJpeg(pdf_data);
  }
  performOcr(jpeg_data) {
    return this.$.performOcr(jpeg_data);
  }
  performOcrInline(jpeg_data) {
    return this.$.performOcrInline(jpeg_data);
  }
  createPdfBuilder(builder) {
    return this.$.createPdfBuilder(builder);
  }
  getAspectRatioOrder() {
    return this.$.getAspectRatioOrder();
  }
};

ash.camera_app.mojom.CameraAppHelperRemoteCallHandler = class {
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

  handleCameraResult(intent_id, action, data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ResponseParamsSpec,
      [intent_id, action, data],
      false);
  }

  isTabletMode() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ResponseParamsSpec,
      [],
      false);
  }

  startPerfEventTrace(event) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_StartPerfEventTrace_ParamsSpec,
      null,
      [event],
      false);
  }

  stopPerfEventTrace(event) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_StopPerfEventTrace_ParamsSpec,
      null,
      [event],
      false);
  }

  setTabletMonitor(monitor) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ResponseParamsSpec,
      [monitor],
      false);
  }

  setScreenStateMonitor(monitor) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ResponseParamsSpec,
      [monitor],
      false);
  }

  isMetricsAndCrashReportingEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ResponseParamsSpec,
      [],
      false);
  }

  setExternalScreenMonitor(monitor) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ResponseParamsSpec,
      [monitor],
      false);
  }

  openFileInGallery(name) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_OpenFileInGallery_ParamsSpec,
      null,
      [name],
      false);
  }

  openFeedbackDialog(placeholder) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_OpenFeedbackDialog_ParamsSpec,
      null,
      [placeholder],
      false);
  }

  openUrlInBrowser(url) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_OpenUrlInBrowser_ParamsSpec,
      null,
      [url],
      false);
  }

  getWindowStateController() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ResponseParamsSpec,
      [],
      false);
  }

  processCapturedFile(file_type, destination) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ResponseParamsSpec,
      [file_type, destination],
      false);
  }

  monitorFileDeletion(name) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ResponseParamsSpec,
      [name],
      false);
  }

  isDocumentScannerSupported() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ResponseParamsSpec,
      [],
      false);
  }

  checkDocumentModeReadiness() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ResponseParamsSpec,
      [],
      false);
  }

  scanDocumentCorners(jpeg_data) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ResponseParamsSpec,
      [jpeg_data],
      false);
  }

  convertToDocument(jpeg_data, corners, rotation) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ResponseParamsSpec,
      [jpeg_data, corners, rotation],
      false);
  }

  maybeTriggerSurvey() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_MaybeTriggerSurvey_ParamsSpec,
      null,
      [],
      false);
  }

  startStorageMonitor(monitor) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ResponseParamsSpec,
      [monitor],
      false);
  }

  stopStorageMonitor() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_StopStorageMonitor_ParamsSpec,
      null,
      [],
      false);
  }

  openStorageManagement() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_OpenStorageManagement_ParamsSpec,
      null,
      [],
      false);
  }

  openWifiDialog(config) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_OpenWifiDialog_ParamsSpec,
      null,
      [config],
      false);
  }

  setLidStateMonitor(monitor) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ResponseParamsSpec,
      [monitor],
      false);
  }

  setSWPrivacySwitchMonitor(monitor) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ResponseParamsSpec,
      [monitor],
      false);
  }

  getEventsSender() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ResponseParamsSpec,
      [],
      false);
  }

  setScreenLockedMonitor(monitor) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ResponseParamsSpec,
      [monitor],
      false);
  }

  renderPdfAsJpeg(pdf_data) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ResponseParamsSpec,
      [pdf_data],
      false);
  }

  performOcr(jpeg_data) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_PerformOcr_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_PerformOcr_ResponseParamsSpec,
      [jpeg_data],
      false);
  }

  performOcrInline(jpeg_data) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ResponseParamsSpec,
      [jpeg_data],
      false);
  }

  createPdfBuilder(builder) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_CreatePdfBuilder_ParamsSpec,
      null,
      [builder],
      false);
  }

  getAspectRatioOrder() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ResponseParamsSpec,
      [],
      false);
  }

};

ash.camera_app.mojom.CameraAppHelper.getRemote = function() {
  let remote = new ash.camera_app.mojom.CameraAppHelperRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.CameraAppHelper',
    'context');
  return remote.$;
};

ash.camera_app.mojom.CameraAppHelperReceiver = class {
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_StartPerfEventTrace_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_StopPerfEventTrace_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_OpenFileInGallery_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_OpenFeedbackDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_OpenUrlInBrowser_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_MaybeTriggerSurvey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_StopStorageMonitor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_OpenStorageManagement_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_OpenWifiDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ParamsSpec);
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_PerformOcr_ParamsSpec);
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ParamsSpec);
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_CreatePdfBuilder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ParamsSpec.$.structSpec);
          const result = this.impl.handleCameraResult(params.intent_id, params.action, params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ParamsSpec.$.structSpec);
          const result = this.impl.isTabletMode();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_StartPerfEventTrace_ParamsSpec.$.structSpec);
          const result = this.impl.startPerfEventTrace(params.event);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_StopPerfEventTrace_ParamsSpec.$.structSpec);
          const result = this.impl.stopPerfEventTrace(params.event);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ParamsSpec.$.structSpec);
          const result = this.impl.setTabletMonitor(params.monitor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ParamsSpec.$.structSpec);
          const result = this.impl.setScreenStateMonitor(params.monitor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.isMetricsAndCrashReportingEnabled();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ParamsSpec.$.structSpec);
          const result = this.impl.setExternalScreenMonitor(params.monitor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_OpenFileInGallery_ParamsSpec.$.structSpec);
          const result = this.impl.openFileInGallery(params.name);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_OpenFeedbackDialog_ParamsSpec.$.structSpec);
          const result = this.impl.openFeedbackDialog(params.placeholder);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_OpenUrlInBrowser_ParamsSpec.$.structSpec);
          const result = this.impl.openUrlInBrowser(params.url);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ParamsSpec.$.structSpec);
          const result = this.impl.getWindowStateController();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ParamsSpec.$.structSpec);
          const result = this.impl.processCapturedFile(params.file_type, params.destination);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ParamsSpec.$.structSpec);
          const result = this.impl.monitorFileDeletion(params.name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ParamsSpec.$.structSpec);
          const result = this.impl.isDocumentScannerSupported();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ParamsSpec.$.structSpec);
          const result = this.impl.checkDocumentModeReadiness();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ParamsSpec.$.structSpec);
          const result = this.impl.scanDocumentCorners(params.jpeg_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ParamsSpec.$.structSpec);
          const result = this.impl.convertToDocument(params.jpeg_data, params.corners, params.rotation);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_MaybeTriggerSurvey_ParamsSpec.$.structSpec);
          const result = this.impl.maybeTriggerSurvey();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ParamsSpec.$.structSpec);
          const result = this.impl.startStorageMonitor(params.monitor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_StopStorageMonitor_ParamsSpec.$.structSpec);
          const result = this.impl.stopStorageMonitor();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_OpenStorageManagement_ParamsSpec.$.structSpec);
          const result = this.impl.openStorageManagement();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_OpenWifiDialog_ParamsSpec.$.structSpec);
          const result = this.impl.openWifiDialog(params.config);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ParamsSpec.$.structSpec);
          const result = this.impl.setLidStateMonitor(params.monitor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ParamsSpec.$.structSpec);
          const result = this.impl.setSWPrivacySwitchMonitor(params.monitor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ParamsSpec.$.structSpec);
          const result = this.impl.getEventsSender();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ParamsSpec.$.structSpec);
          const result = this.impl.setScreenLockedMonitor(params.monitor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ParamsSpec.$.structSpec);
          const result = this.impl.renderPdfAsJpeg(params.pdf_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_PerformOcr_ParamsSpec.$.structSpec);
          const result = this.impl.performOcr(params.jpeg_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_PerformOcr_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ParamsSpec.$.structSpec);
          const result = this.impl.performOcrInline(params.jpeg_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_CreatePdfBuilder_ParamsSpec.$.structSpec);
          const result = this.impl.createPdfBuilder(params.builder);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ParamsSpec.$.structSpec);
          const result = this.impl.getAspectRatioOrder();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.camera_app.mojom.CameraAppHelperReceiver = ash.camera_app.mojom.CameraAppHelperReceiver;

ash.camera_app.mojom.CameraAppHelperPtr = ash.camera_app.mojom.CameraAppHelperRemote;
ash.camera_app.mojom.CameraAppHelperRequest = ash.camera_app.mojom.CameraAppHelperPendingReceiver;

