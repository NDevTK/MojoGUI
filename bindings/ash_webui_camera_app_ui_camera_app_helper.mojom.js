// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/camera_app_ui/camera_app_helper.mojom
// Module: ash.camera_app.mojom

'use strict';

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
};

ash.camera_app.mojom.TabletModeMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(is_tablet_mode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ash.camera_app.mojom.TabletModeMonitor_Update_ParamsSpec.$.decode(message.payload);
          const result = this.impl.update(params.is_tablet_mode);
          break;
        }
      }
    }});
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
};

ash.camera_app.mojom.ScreenStateMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ash.camera_app.mojom.ScreenStateMonitor_Update_ParamsSpec.$.decode(message.payload);
          const result = this.impl.update(params.state);
          break;
        }
      }
    }});
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
};

ash.camera_app.mojom.ScreenLockedMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(is_screen_locked) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ash.camera_app.mojom.ScreenLockedMonitor_Update_ParamsSpec.$.decode(message.payload);
          const result = this.impl.update(params.is_screen_locked);
          break;
        }
      }
    }});
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
};

ash.camera_app.mojom.ExternalScreenMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(has_external_screen) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ash.camera_app.mojom.ExternalScreenMonitor_Update_ParamsSpec.$.decode(message.payload);
          const result = this.impl.update(params.has_external_screen);
          break;
        }
      }
    }});
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
};

ash.camera_app.mojom.CameraUsageOwnershipMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCameraUsageOwnershipChanged(has_usage) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ParamsSpec.$.decode(message.payload);
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
    }});
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
};

ash.camera_app.mojom.LidStateMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(lid_status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ash.camera_app.mojom.LidStateMonitor_Update_ParamsSpec.$.decode(message.payload);
          const result = this.impl.update(params.lid_status);
          break;
        }
      }
    }});
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
};

ash.camera_app.mojom.SWPrivacySwitchMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(is_sw_privacy_switch_on) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ash.camera_app.mojom.SWPrivacySwitchMonitor_Update_ParamsSpec.$.decode(message.payload);
          const result = this.impl.update(params.is_sw_privacy_switch_on);
          break;
        }
      }
    }});
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
};

ash.camera_app.mojom.WindowStateMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onWindowStateChanged(states) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.camera_app.mojom.WindowStateMonitor_OnWindowStateChanged_ParamsSpec,
      null,
      [states],
      false);
  }

  onWindowFocusChanged(is_focus) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ash.camera_app.mojom.WindowStateMonitor_OnWindowStateChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWindowStateChanged(params.states);
          break;
        }
        case 1: {
          const params = ash.camera_app.mojom.WindowStateMonitor_OnWindowFocusChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWindowFocusChanged(params.is_focus);
          break;
        }
      }
    }});
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
};

ash.camera_app.mojom.StorageMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ash.camera_app.mojom.StorageMonitor_Update_ParamsSpec.$.decode(message.payload);
          const result = this.impl.update(params.status);
          break;
        }
      }
    }});
  }
};

ash.camera_app.mojom.StorageMonitorReceiver = ash.camera_app.mojom.StorageMonitorReceiver;

ash.camera_app.mojom.StorageMonitorPtr = ash.camera_app.mojom.StorageMonitorRemote;
ash.camera_app.mojom.StorageMonitorRequest = ash.camera_app.mojom.StorageMonitorPendingReceiver;


// Interface: WindowStateController
mojo.internal.Struct(
    ash.camera_app.mojom.WindowStateController_AddMonitor_ParamsSpec, 'ash.camera_app.mojom.WindowStateController_AddMonitor_Params', [
      mojo.internal.StructField('monitor', 0, 0, mojo.internal.InterfaceProxy(ash.camera_app.mojom.WindowStateMonitorSpec), null, false, 0, undefined),
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
};

ash.camera_app.mojom.WindowStateControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addMonitor(monitor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.camera_app.mojom.WindowStateController_AddMonitor_ParamsSpec,
      ash.camera_app.mojom.WindowStateController_AddMonitor_ResponseParamsSpec,
      [monitor],
      false);
  }

  getWindowState() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.camera_app.mojom.WindowStateController_GetWindowState_ParamsSpec,
      ash.camera_app.mojom.WindowStateController_GetWindowState_ResponseParamsSpec,
      [],
      false);
  }

  minimize() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.camera_app.mojom.WindowStateController_Minimize_ParamsSpec,
      ash.camera_app.mojom.WindowStateController_Minimize_ResponseParamsSpec,
      [],
      false);
  }

  restore() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.camera_app.mojom.WindowStateController_Restore_ParamsSpec,
      ash.camera_app.mojom.WindowStateController_Restore_ResponseParamsSpec,
      [],
      false);
  }

  maximize() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.camera_app.mojom.WindowStateController_Maximize_ParamsSpec,
      ash.camera_app.mojom.WindowStateController_Maximize_ResponseParamsSpec,
      [],
      false);
  }

  fullscreen() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.camera_app.mojom.WindowStateController_Fullscreen_ParamsSpec,
      ash.camera_app.mojom.WindowStateController_Fullscreen_ResponseParamsSpec,
      [],
      false);
  }

  focus() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ash.camera_app.mojom.WindowStateController_AddMonitor_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.WindowStateController_GetWindowState_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.WindowStateController_Minimize_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.WindowStateController_Restore_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.WindowStateController_Maximize_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.WindowStateController_Fullscreen_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.WindowStateController_Focus_ParamsSpec.$.decode(message.payload);
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
    }});
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
      mojo.internal.StructField('monitor', 0, 0, mojo.internal.InterfaceProxy(ash.camera_app.mojom.TabletModeMonitorSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ResponseParams', [
      mojo.internal.StructField('is_tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_Params', [
      mojo.internal.StructField('monitor', 0, 0, mojo.internal.InterfaceProxy(ash.camera_app.mojom.ScreenStateMonitorSpec), null, false, 0, undefined),
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
      mojo.internal.StructField('monitor', 0, 0, mojo.internal.InterfaceProxy(ash.camera_app.mojom.ExternalScreenMonitorSpec), null, false, 0, undefined),
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
      mojo.internal.StructField('controller', 0, 0, mojo.internal.InterfaceProxy(ash.camera_app.mojom.WindowStateControllerSpec), null, false, 0, undefined),
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
      mojo.internal.StructField('monitor', 0, 0, mojo.internal.InterfaceProxy(ash.camera_app.mojom.StorageMonitorSpec), null, false, 0, undefined),
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
      mojo.internal.StructField('monitor', 0, 0, mojo.internal.InterfaceProxy(ash.camera_app.mojom.LidStateMonitorSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ResponseParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ResponseParams', [
      mojo.internal.StructField('lid_status', 0, 0, ash.camera_app.mojom.LidStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ParamsSpec, 'ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_Params', [
      mojo.internal.StructField('monitor', 0, 0, mojo.internal.InterfaceProxy(ash.camera_app.mojom.SWPrivacySwitchMonitorSpec), null, false, 0, undefined),
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
      mojo.internal.StructField('monitor', 0, 0, mojo.internal.InterfaceProxy(ash.camera_app.mojom.ScreenLockedMonitorSpec), null, false, 0, undefined),
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
};

ash.camera_app.mojom.CameraAppHelperRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handleCameraResult(intent_id, action, data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ResponseParamsSpec,
      [intent_id, action, data],
      false);
  }

  isTabletMode() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ResponseParamsSpec,
      [],
      false);
  }

  startPerfEventTrace(event) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_StartPerfEventTrace_ParamsSpec,
      null,
      [event],
      false);
  }

  stopPerfEventTrace(event) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_StopPerfEventTrace_ParamsSpec,
      null,
      [event],
      false);
  }

  setTabletMonitor(monitor) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ResponseParamsSpec,
      [monitor],
      false);
  }

  setScreenStateMonitor(monitor) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ResponseParamsSpec,
      [monitor],
      false);
  }

  isMetricsAndCrashReportingEnabled() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ResponseParamsSpec,
      [],
      false);
  }

  setExternalScreenMonitor(monitor) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ResponseParamsSpec,
      [monitor],
      false);
  }

  openFileInGallery(name) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_OpenFileInGallery_ParamsSpec,
      null,
      [name],
      false);
  }

  openFeedbackDialog(placeholder) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_OpenFeedbackDialog_ParamsSpec,
      null,
      [placeholder],
      false);
  }

  openUrlInBrowser(url) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_OpenUrlInBrowser_ParamsSpec,
      null,
      [url],
      false);
  }

  getWindowStateController() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ResponseParamsSpec,
      [],
      false);
  }

  processCapturedFile(file_type, destination) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ResponseParamsSpec,
      [file_type, destination],
      false);
  }

  monitorFileDeletion(name) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ResponseParamsSpec,
      [name],
      false);
  }

  isDocumentScannerSupported() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ResponseParamsSpec,
      [],
      false);
  }

  checkDocumentModeReadiness() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ResponseParamsSpec,
      [],
      false);
  }

  scanDocumentCorners(jpeg_data) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ResponseParamsSpec,
      [jpeg_data],
      false);
  }

  convertToDocument(jpeg_data, corners, rotation) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ResponseParamsSpec,
      [jpeg_data, corners, rotation],
      false);
  }

  maybeTriggerSurvey() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_MaybeTriggerSurvey_ParamsSpec,
      null,
      [],
      false);
  }

  startStorageMonitor(monitor) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ResponseParamsSpec,
      [monitor],
      false);
  }

  stopStorageMonitor() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_StopStorageMonitor_ParamsSpec,
      null,
      [],
      false);
  }

  openStorageManagement() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_OpenStorageManagement_ParamsSpec,
      null,
      [],
      false);
  }

  openWifiDialog(config) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_OpenWifiDialog_ParamsSpec,
      null,
      [config],
      false);
  }

  setLidStateMonitor(monitor) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ResponseParamsSpec,
      [monitor],
      false);
  }

  setSWPrivacySwitchMonitor(monitor) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ResponseParamsSpec,
      [monitor],
      false);
  }

  getEventsSender() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ResponseParamsSpec,
      [],
      false);
  }

  setScreenLockedMonitor(monitor) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ResponseParamsSpec,
      [monitor],
      false);
  }

  renderPdfAsJpeg(pdf_data) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ResponseParamsSpec,
      [pdf_data],
      false);
  }

  performOcr(jpeg_data) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_PerformOcr_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_PerformOcr_ResponseParamsSpec,
      [jpeg_data],
      false);
  }

  performOcrInline(jpeg_data) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ResponseParamsSpec,
      [jpeg_data],
      false);
  }

  createPdfBuilder(builder) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_CreatePdfBuilder_ParamsSpec,
      null,
      [builder],
      false);
  }

  getAspectRatioOrder() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_StartPerfEventTrace_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startPerfEventTrace(params.event);
          break;
        }
        case 3: {
          const params = ash.camera_app.mojom.CameraAppHelper_StopPerfEventTrace_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stopPerfEventTrace(params.event);
          break;
        }
        case 4: {
          const params = ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_OpenFileInGallery_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openFileInGallery(params.name);
          break;
        }
        case 9: {
          const params = ash.camera_app.mojom.CameraAppHelper_OpenFeedbackDialog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openFeedbackDialog(params.placeholder);
          break;
        }
        case 10: {
          const params = ash.camera_app.mojom.CameraAppHelper_OpenUrlInBrowser_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openUrlInBrowser(params.url);
          break;
        }
        case 11: {
          const params = ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_MaybeTriggerSurvey_ParamsSpec.$.decode(message.payload);
          const result = this.impl.maybeTriggerSurvey();
          break;
        }
        case 19: {
          const params = ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_StopStorageMonitor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stopStorageMonitor();
          break;
        }
        case 21: {
          const params = ash.camera_app.mojom.CameraAppHelper_OpenStorageManagement_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openStorageManagement();
          break;
        }
        case 22: {
          const params = ash.camera_app.mojom.CameraAppHelper_OpenWifiDialog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openWifiDialog(params.config);
          break;
        }
        case 23: {
          const params = ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_PerformOcr_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ParamsSpec.$.decode(message.payload);
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
          const params = ash.camera_app.mojom.CameraAppHelper_CreatePdfBuilder_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPdfBuilder(params.builder);
          break;
        }
        case 31: {
          const params = ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ParamsSpec.$.decode(message.payload);
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
    }});
  }
};

ash.camera_app.mojom.CameraAppHelperReceiver = ash.camera_app.mojom.CameraAppHelperReceiver;

ash.camera_app.mojom.CameraAppHelperPtr = ash.camera_app.mojom.CameraAppHelperRemote;
ash.camera_app.mojom.CameraAppHelperRequest = ash.camera_app.mojom.CameraAppHelperPendingReceiver;

