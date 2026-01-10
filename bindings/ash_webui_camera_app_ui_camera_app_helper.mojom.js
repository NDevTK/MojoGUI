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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.TabletModeMonitor_Update_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.TabletModeMonitor_Update_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.is_tablet_mode);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.ScreenStateMonitor_Update_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.ScreenStateMonitor_Update_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.ScreenLockedMonitor_Update_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.ScreenLockedMonitor_Update_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.is_screen_locked);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.ExternalScreenMonitor_Update_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.ExternalScreenMonitor_Update_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.has_external_screen);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnCameraUsageOwnershipChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCameraUsageOwnershipChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onCameraUsageOwnershipChanged');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.LidStateMonitor_Update_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.LidStateMonitor_Update_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.lid_status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.SWPrivacySwitchMonitor_Update_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.SWPrivacySwitchMonitor_Update_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.is_sw_privacy_switch_on);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnWindowStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.WindowStateMonitor_OnWindowStateChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowStateChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: OnWindowFocusChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.WindowStateMonitor_OnWindowFocusChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowFocusChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.WindowStateMonitor_OnWindowStateChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWindowStateChanged');
          const result = this.impl.onWindowStateChanged(params.states);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.camera_app.mojom.WindowStateMonitor_OnWindowFocusChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWindowFocusChanged');
          const result = this.impl.onWindowFocusChanged(params.is_focus);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.StorageMonitor_Update_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.StorageMonitor_Update_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AddMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.WindowStateController_AddMonitor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddMonitor (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: GetWindowState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.WindowStateController_GetWindowState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWindowState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: Minimize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.WindowStateController_Minimize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Minimize (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: Restore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.WindowStateController_Restore_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Restore (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: Maximize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.WindowStateController_Maximize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Maximize (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: Fullscreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.WindowStateController_Fullscreen_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Fullscreen (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: Focus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.WindowStateController_Focus_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Focus (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.WindowStateController_AddMonitor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addMonitor');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.WindowStateController_GetWindowState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getWindowState');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.WindowStateController_Minimize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.minimize');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.WindowStateController_Restore_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.restore');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.WindowStateController_Maximize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.maximize');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.WindowStateController_Fullscreen_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fullscreen');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.WindowStateController_Focus_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.focus');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
    this.ordinalMap.set(20, 20); // Default ordinal 20 -> Index 20
    this.ordinalMap.set(21, 21); // Default ordinal 21 -> Index 21
    this.ordinalMap.set(22, 22); // Default ordinal 22 -> Index 22
    this.ordinalMap.set(23, 23); // Default ordinal 23 -> Index 23
    this.ordinalMap.set(24, 24); // Default ordinal 24 -> Index 24
    this.ordinalMap.set(25, 25); // Default ordinal 25 -> Index 25
    this.ordinalMap.set(26, 26); // Default ordinal 26 -> Index 26
    this.ordinalMap.set(27, 27); // Default ordinal 27 -> Index 27
    this.ordinalMap.set(28, 28); // Default ordinal 28 -> Index 28
    this.ordinalMap.set(29, 29); // Default ordinal 29 -> Index 29
    this.ordinalMap.set(30, 30); // Default ordinal 30 -> Index 30
    this.ordinalMap.set(31, 31); // Default ordinal 31 -> Index 31
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: HandleCameraResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleCameraResult (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: IsTabletMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsTabletMode (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: StartPerfEventTrace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_StartPerfEventTrace_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartPerfEventTrace (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: StopPerfEventTrace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_StopPerfEventTrace_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopPerfEventTrace (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: SetTabletMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTabletMonitor (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: SetScreenStateMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetScreenStateMonitor (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: IsMetricsAndCrashReportingEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsMetricsAndCrashReportingEnabled (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: SetExternalScreenMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetExternalScreenMonitor (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: OpenFileInGallery
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_OpenFileInGallery_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFileInGallery (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 9: OpenFeedbackDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_OpenFeedbackDialog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFeedbackDialog (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 10: OpenUrlInBrowser
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_OpenUrlInBrowser_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenUrlInBrowser (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 11: GetWindowStateController
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWindowStateController (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 12: ProcessCapturedFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProcessCapturedFile (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 13: MonitorFileDeletion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MonitorFileDeletion (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 14: IsDocumentScannerSupported
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsDocumentScannerSupported (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 15: CheckDocumentModeReadiness
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CheckDocumentModeReadiness (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 16: ScanDocumentCorners
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScanDocumentCorners (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 17: ConvertToDocument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConvertToDocument (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 18: MaybeTriggerSurvey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_MaybeTriggerSurvey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MaybeTriggerSurvey (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 19: StartStorageMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartStorageMonitor (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 20: StopStorageMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_StopStorageMonitor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopStorageMonitor (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 21: OpenStorageManagement
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_OpenStorageManagement_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenStorageManagement (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 22: OpenWifiDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_OpenWifiDialog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenWifiDialog (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 23: SetLidStateMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLidStateMonitor (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 24: SetSWPrivacySwitchMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSWPrivacySwitchMonitor (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 25: GetEventsSender
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetEventsSender (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 26: SetScreenLockedMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetScreenLockedMonitor (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 27: RenderPdfAsJpeg
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RenderPdfAsJpeg (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 28: PerformOcr
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_PerformOcr_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PerformOcr (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 29: PerformOcrInline
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PerformOcrInline (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 30: CreatePdfBuilder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_CreatePdfBuilder_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePdfBuilder (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 31: GetAspectRatioOrder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAspectRatioOrder (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.handleCameraResult');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isTabletMode');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_StartPerfEventTrace_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startPerfEventTrace');
          const result = this.impl.startPerfEventTrace(params.event);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_StopPerfEventTrace_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopPerfEventTrace');
          const result = this.impl.stopPerfEventTrace(params.event);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setTabletMonitor');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setScreenStateMonitor');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isMetricsAndCrashReportingEnabled');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setExternalScreenMonitor');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_OpenFileInGallery_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openFileInGallery');
          const result = this.impl.openFileInGallery(params.name);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_OpenFeedbackDialog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openFeedbackDialog');
          const result = this.impl.openFeedbackDialog(params.placeholder);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_OpenUrlInBrowser_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openUrlInBrowser');
          const result = this.impl.openUrlInBrowser(params.url);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getWindowStateController');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.processCapturedFile');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.monitorFileDeletion');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isDocumentScannerSupported');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.checkDocumentModeReadiness');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.scanDocumentCorners');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.convertToDocument');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_MaybeTriggerSurvey_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.maybeTriggerSurvey');
          const result = this.impl.maybeTriggerSurvey();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startStorageMonitor');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_StopStorageMonitor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopStorageMonitor');
          const result = this.impl.stopStorageMonitor();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_OpenStorageManagement_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openStorageManagement');
          const result = this.impl.openStorageManagement();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_OpenWifiDialog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openWifiDialog');
          const result = this.impl.openWifiDialog(params.config);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setLidStateMonitor');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setSWPrivacySwitchMonitor');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getEventsSender');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setScreenLockedMonitor');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.renderPdfAsJpeg');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_PerformOcr_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.performOcr');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.performOcrInline');
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
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_CreatePdfBuilder_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createPdfBuilder');
          const result = this.impl.createPdfBuilder(params.builder);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAspectRatioOrder');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.camera_app.mojom.CameraAppHelperReceiver = ash.camera_app.mojom.CameraAppHelperReceiver;

ash.camera_app.mojom.CameraAppHelperPtr = ash.camera_app.mojom.CameraAppHelperRemote;
ash.camera_app.mojom.CameraAppHelperRequest = ash.camera_app.mojom.CameraAppHelperPendingReceiver;

