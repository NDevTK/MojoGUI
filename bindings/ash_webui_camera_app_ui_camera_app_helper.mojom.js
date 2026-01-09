// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/camera_app_ui/camera_app_helper.mojom
// Module: ash.camera_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.camera_app = ash.camera_app || {};
ash.camera_app.mojom = ash.camera_app.mojom || {};


// Enum: ScreenState
ash.camera_app.mojom.ScreenState = {
  kOn: 0,
  kOff: 1,
  kOffAuto: 2,
};

// Enum: LidState
ash.camera_app.mojom.LidState = {
  kOpen: 0,
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
};

// Enum: StorageMonitorStatus
ash.camera_app.mojom.StorageMonitorStatus = {
  display: 0,
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
};

// Struct: WifiConfig
ash.camera_app.mojom.WifiConfig = class {
  constructor(values = {}) {
    this.eap_anonymous_identity = values.eap_anonymous_identity !== undefined ? values.eap_anonymous_identity : "";
  }
};

// Struct: CloudUpload
ash.camera_app.mojom.CloudUpload = class {
  constructor(values = {}) {
    this.thumbnail = values.thumbnail !== undefined ? values.thumbnail : 0;
  }
};

// Struct: LocalFile
ash.camera_app.mojom.LocalFile = class {
  constructor(values = {}) {
    this.file_name = values.file_name !== undefined ? values.file_name : "";
  }
};

// Interface: TabletModeMonitor
ash.camera_app.mojom.TabletModeMonitorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.camera_app.mojom.TabletModeMonitor';
  }

  update(is_tablet_mode) {
    // Method: Update
    // Call: Update(is_tablet_mode)
  }

};

ash.camera_app.mojom.TabletModeMonitorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ScreenStateMonitor
ash.camera_app.mojom.ScreenStateMonitorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.camera_app.mojom.ScreenStateMonitor';
  }

  update(state) {
    // Method: Update
    // Call: Update(state)
  }

};

ash.camera_app.mojom.ScreenStateMonitorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ScreenLockedMonitor
ash.camera_app.mojom.ScreenLockedMonitorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.camera_app.mojom.ScreenLockedMonitor';
  }

  update(is_screen_locked) {
    // Method: Update
    // Call: Update(is_screen_locked)
  }

};

ash.camera_app.mojom.ScreenLockedMonitorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ExternalScreenMonitor
ash.camera_app.mojom.ExternalScreenMonitorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.camera_app.mojom.ExternalScreenMonitor';
  }

  update(has_external_screen) {
    // Method: Update
    // Call: Update(has_external_screen)
  }

};

ash.camera_app.mojom.ExternalScreenMonitorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CameraUsageOwnershipMonitor
ash.camera_app.mojom.CameraUsageOwnershipMonitorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.camera_app.mojom.CameraUsageOwnershipMonitor';
  }

  onCameraUsageOwnershipChanged(has_usage) {
    // Method: OnCameraUsageOwnershipChanged
    // Call: OnCameraUsageOwnershipChanged(has_usage)
  }

};

ash.camera_app.mojom.CameraUsageOwnershipMonitorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: LidStateMonitor
ash.camera_app.mojom.LidStateMonitorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.camera_app.mojom.LidStateMonitor';
  }

  update(lid_status) {
    // Method: Update
    // Call: Update(lid_status)
  }

};

ash.camera_app.mojom.LidStateMonitorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SWPrivacySwitchMonitor
ash.camera_app.mojom.SWPrivacySwitchMonitorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.camera_app.mojom.SWPrivacySwitchMonitor';
  }

  update(is_sw_privacy_switch_on) {
    // Method: Update
    // Call: Update(is_sw_privacy_switch_on)
  }

};

ash.camera_app.mojom.SWPrivacySwitchMonitorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WindowStateMonitor
ash.camera_app.mojom.WindowStateMonitorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.camera_app.mojom.WindowStateMonitor';
  }

  onWindowStateChanged(states) {
    // Method: OnWindowStateChanged
    // Call: OnWindowStateChanged(states)
  }

  onWindowFocusChanged(is_focus) {
    // Method: OnWindowFocusChanged
    // Call: OnWindowFocusChanged(is_focus)
  }

};

ash.camera_app.mojom.WindowStateMonitorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: StorageMonitor
ash.camera_app.mojom.StorageMonitorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.camera_app.mojom.StorageMonitor';
  }

  update(status) {
    // Method: Update
    // Call: Update(status)
  }

};

ash.camera_app.mojom.StorageMonitorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WindowStateController
ash.camera_app.mojom.WindowStateControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.camera_app.mojom.WindowStateController';
  }

  addMonitor(monitor) {
    // Method: AddMonitor
    return new Promise((resolve) => {
      // Call: AddMonitor(monitor)
      resolve({});
    });
  }

  getWindowState() {
    // Method: GetWindowState
    return new Promise((resolve) => {
      // Call: GetWindowState()
      resolve({});
    });
  }

  minimize() {
    // Method: Minimize
    // Call: Minimize()
  }

  restore() {
    // Method: Restore
    // Call: Restore()
  }

  maximize() {
    // Method: Maximize
    // Call: Maximize()
  }

  fullscreen() {
    // Method: Fullscreen
    // Call: Fullscreen()
  }

  focus() {
    // Method: Focus
    // Call: Focus()
  }

};

ash.camera_app.mojom.WindowStateControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CameraAppHelper
ash.camera_app.mojom.CameraAppHelperPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.camera_app.mojom.CameraAppHelper';
  }

  handleCameraResult(intent_id, action, data) {
    // Method: HandleCameraResult
    return new Promise((resolve) => {
      // Call: HandleCameraResult(intent_id, action, data)
      resolve({});
    });
  }

  isTabletMode() {
    // Method: IsTabletMode
    return new Promise((resolve) => {
      // Call: IsTabletMode()
      resolve({});
    });
  }

  startPerfEventTrace(event) {
    // Method: StartPerfEventTrace
    // Call: StartPerfEventTrace(event)
  }

  stopPerfEventTrace(event) {
    // Method: StopPerfEventTrace
    // Call: StopPerfEventTrace(event)
  }

  setTabletMonitor(monitor) {
    // Method: SetTabletMonitor
    return new Promise((resolve) => {
      // Call: SetTabletMonitor(monitor)
      resolve({});
    });
  }

  setScreenStateMonitor(monitor) {
    // Method: SetScreenStateMonitor
    return new Promise((resolve) => {
      // Call: SetScreenStateMonitor(monitor)
      resolve({});
    });
  }

  isMetricsAndCrashReportingEnabled() {
    // Method: IsMetricsAndCrashReportingEnabled
    return new Promise((resolve) => {
      // Call: IsMetricsAndCrashReportingEnabled()
      resolve({});
    });
  }

  setExternalScreenMonitor(monitor) {
    // Method: SetExternalScreenMonitor
    return new Promise((resolve) => {
      // Call: SetExternalScreenMonitor(monitor)
      resolve({});
    });
  }

  openFileInGallery(name) {
    // Method: OpenFileInGallery
    // Call: OpenFileInGallery(name)
  }

  openFeedbackDialog(placeholder) {
    // Method: OpenFeedbackDialog
    // Call: OpenFeedbackDialog(placeholder)
  }

  openUrlInBrowser(url) {
    // Method: OpenUrlInBrowser
    // Call: OpenUrlInBrowser(url)
  }

  getWindowStateController() {
    // Method: GetWindowStateController
    return new Promise((resolve) => {
      // Call: GetWindowStateController()
      resolve({});
    });
  }

  processCapturedFile(file_type, destination) {
    // Method: ProcessCapturedFile
    return new Promise((resolve) => {
      // Call: ProcessCapturedFile(file_type, destination)
      resolve({});
    });
  }

  monitorFileDeletion(name) {
    // Method: MonitorFileDeletion
    return new Promise((resolve) => {
      // Call: MonitorFileDeletion(name)
      resolve({});
    });
  }

  isDocumentScannerSupported() {
    // Method: IsDocumentScannerSupported
    return new Promise((resolve) => {
      // Call: IsDocumentScannerSupported()
      resolve({});
    });
  }

  checkDocumentModeReadiness() {
    // Method: CheckDocumentModeReadiness
    return new Promise((resolve) => {
      // Call: CheckDocumentModeReadiness()
      resolve({});
    });
  }

  scanDocumentCorners(jpeg_data) {
    // Method: ScanDocumentCorners
    return new Promise((resolve) => {
      // Call: ScanDocumentCorners(jpeg_data)
      resolve({});
    });
  }

  convertToDocument(jpeg_data, corners, rotation) {
    // Method: ConvertToDocument
    return new Promise((resolve) => {
      // Call: ConvertToDocument(jpeg_data, corners, rotation)
      resolve({});
    });
  }

  maybeTriggerSurvey() {
    // Method: MaybeTriggerSurvey
    // Call: MaybeTriggerSurvey()
  }

  startStorageMonitor(monitor) {
    // Method: StartStorageMonitor
    return new Promise((resolve) => {
      // Call: StartStorageMonitor(monitor)
      resolve({});
    });
  }

  stopStorageMonitor() {
    // Method: StopStorageMonitor
    // Call: StopStorageMonitor()
  }

  openStorageManagement() {
    // Method: OpenStorageManagement
    // Call: OpenStorageManagement()
  }

  openWifiDialog(config) {
    // Method: OpenWifiDialog
    // Call: OpenWifiDialog(config)
  }

  setLidStateMonitor(monitor) {
    // Method: SetLidStateMonitor
    return new Promise((resolve) => {
      // Call: SetLidStateMonitor(monitor)
      resolve({});
    });
  }

  setSWPrivacySwitchMonitor(monitor) {
    // Method: SetSWPrivacySwitchMonitor
    return new Promise((resolve) => {
      // Call: SetSWPrivacySwitchMonitor(monitor)
      resolve({});
    });
  }

  getEventsSender() {
    // Method: GetEventsSender
    return new Promise((resolve) => {
      // Call: GetEventsSender()
      resolve({});
    });
  }

  setScreenLockedMonitor(monitor) {
    // Method: SetScreenLockedMonitor
    return new Promise((resolve) => {
      // Call: SetScreenLockedMonitor(monitor)
      resolve({});
    });
  }

  renderPdfAsJpeg(pdf_data) {
    // Method: RenderPdfAsJpeg
    return new Promise((resolve) => {
      // Call: RenderPdfAsJpeg(pdf_data)
      resolve({});
    });
  }

  performOcr(jpeg_data) {
    // Method: PerformOcr
    return new Promise((resolve) => {
      // Call: PerformOcr(jpeg_data)
      resolve({});
    });
  }

  performOcrInline(jpeg_data) {
    // Method: PerformOcrInline
    return new Promise((resolve) => {
      // Call: PerformOcrInline(jpeg_data)
      resolve({});
    });
  }

  createPdfBuilder(builder) {
    // Method: CreatePdfBuilder
    // Call: CreatePdfBuilder(builder)
  }

  getAspectRatioOrder() {
    // Method: GetAspectRatioOrder
    return new Promise((resolve) => {
      // Call: GetAspectRatioOrder()
      resolve({});
    });
  }

};

ash.camera_app.mojom.CameraAppHelperRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
