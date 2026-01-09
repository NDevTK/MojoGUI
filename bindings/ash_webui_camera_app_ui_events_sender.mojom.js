// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/camera_app_ui/events_sender.mojom
// Module: ash.camera_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.camera_app = ash.camera_app || {};
ash.camera_app.mojom = ash.camera_app.mojom || {};


// Enum: LaunchType
ash.camera_app.mojom.LaunchType = {
};

// Enum: Mode
ash.camera_app.mojom.Mode = {
  kPhoto: 0,
  kVideo: 1,
  kScan: 2,
  kPortrait: 3,
};

// Enum: Facing
ash.camera_app.mojom.Facing = {
  kEnvironment: 0,
  kUser: 1,
  kExternal: 2,
  kUnknown: 3,
};

// Enum: GridType
ash.camera_app.mojom.GridType = {
  kNone: 0,
  k3X3: 1,
  k4X4: 2,
  kGolden: 3,
};

// Enum: TimerType
ash.camera_app.mojom.TimerType = {
  kNone: 0,
  k3Seconds: 1,
  k10Seconds: 2,
};

// Enum: ShutterType
ash.camera_app.mojom.ShutterType = {
  kUnknown: 0,
  kAssistant: 1,
  kKeyboard: 2,
  kMouse: 3,
  kTouch: 4,
  kVolumeKey: 5,
};

// Enum: Pressure
ash.camera_app.mojom.Pressure = {
  kNominal: 0,
  kFair: 1,
  kSerious: 2,
  kCritical: 3,
};

// Enum: AndroidIntentResultType
ash.camera_app.mojom.AndroidIntentResultType = {
  kNotIntent: 0,
  kConfirmed: 1,
  kCanceled: 2,
};

// Enum: ResolutionLevel
ash.camera_app.mojom.ResolutionLevel = {
  kUnknown: 0,
  k4K: 1,
  kQuadHD: 2,
  kFullHD: 3,
  kHD: 4,
  k360P: 5,
  kFull: 6,
  kMedium: 7,
};

// Enum: AspectRatioSet
ash.camera_app.mojom.AspectRatioSet = {
  kOthers: 0,
  k4To3: 1,
  k16To9: 2,
  kSquare: 3,
};

// Enum: RecordType
ash.camera_app.mojom.RecordType = {
  kNotRecording: 0,
  kNormal: 1,
  kGif: 2,
  kTimelapse: 3,
};

// Enum: GifResultType
ash.camera_app.mojom.GifResultType = {
  kNotGif: 0,
  kRetake: 1,
  kShare: 2,
  kSave: 3,
};

// Enum: DocScanActionType
ash.camera_app.mojom.DocScanActionType = {
  kAddPage: 0,
  kDeletePage: 1,
  kFix: 2,
};

// Enum: DocScanResultType
ash.camera_app.mojom.DocScanResultType = {
  kCancel: 0,
  kSaveAsPdf: 1,
  kSaveAsPhoto: 2,
  kShare: 3,
};

// Enum: DocScanFixType
ash.camera_app.mojom.DocScanFixType = {
  kCorner: 0,
  kRotation: 1,
};

// Enum: LowStorageActionType
ash.camera_app.mojom.LowStorageActionType = {
  kManageStorageAutoStop: 0,
  kManageStorageCannotStart: 1,
  kShowAutoStopDialog: 2,
  kShowCannotStartDialog: 3,
  kShowWarningMessage: 4,
};

// Enum: BarcodeContentType
ash.camera_app.mojom.BarcodeContentType = {
  kText: 0,
  kUrl: 1,
  kWiFi: 2,
};

// Enum: PerfEventType
ash.camera_app.mojom.PerfEventType = {
  kCameraSwitching: 0,
  kGifCapturePostProcessing: 1,
  kLaunchingFromLaunchAppCold: 2,
  kLaunchingFromLaunchAppWarm: 3,
  kLaunchingFromWindowCreation: 4,
  kModeSwitching: 5,
  kPhotoCapturePostProcessingSaving: 6,
  kPhotoCaptureShutter: 7,
  kTimelapseCapturePostProcessingSaving: 8,
  kVideoCapturePostProcessingSaving: 9,
  kSnapshotTaking: 10,
  kDocumentCapturePostProcessing: 11,
  kDocumentPdfSaving: 12,
  kOcrScanning: 13,
  kGifCaptureSaving: 14,
};

// Enum: UserBehavior
ash.camera_app.mojom.UserBehavior = {
  kTakeNormalPhoto: 0,
  kTakePortraitPhoto: 1,
  kScanBarcode: 2,
  kScanDocument: 3,
  kRecordNormalVideo: 4,
  kRecordGifVideo: 5,
  kRecordTimelapseVideo: 6,
};

// Enum: OcrEventType
ash.camera_app.mojom.OcrEventType = {
  kCopyText: 0,
  kTextDetected: 1,
};

// Struct: StartSessionEventParams
ash.camera_app.mojom.StartSessionEventParams = class {
  constructor(values = {}) {
    this.launch_type = values.launch_type !== undefined ? values.launch_type : null;
  }
};

// Struct: PhotoDetails
ash.camera_app.mojom.PhotoDetails = class {
  constructor(values = {}) {
    this.is_video_snapshot = values.is_video_snapshot !== undefined ? values.is_video_snapshot : false;
  }
};

// Struct: NormalVideoDetails
ash.camera_app.mojom.NormalVideoDetails = class {
  constructor(values = {}) {
  }
};

// Struct: GifVideoDetails
ash.camera_app.mojom.GifVideoDetails = class {
  constructor(values = {}) {
    this.gif_result_type = values.gif_result_type !== undefined ? values.gif_result_type : null;
  }
};

// Struct: TimelapseVideoDetails
ash.camera_app.mojom.TimelapseVideoDetails = class {
  constructor(values = {}) {
    this.timelapse_speed = values.timelapse_speed !== undefined ? values.timelapse_speed : 0;
  }
};

// Struct: VideoDetails
ash.camera_app.mojom.VideoDetails = class {
  constructor(values = {}) {
    this.record_type_details = values.record_type_details !== undefined ? values.record_type_details : 0;
  }
};

// Struct: CaptureEventParams
ash.camera_app.mojom.CaptureEventParams = class {
  constructor(values = {}) {
    this.zoom_ratio = values.zoom_ratio !== undefined ? values.zoom_ratio : 0;
  }
};

// Struct: AndroidIntentEventParams
ash.camera_app.mojom.AndroidIntentEventParams = class {
  constructor(values = {}) {
    this.is_secure = values.is_secure !== undefined ? values.is_secure : false;
  }
};

// Struct: OpenPTZPanelEventParams
ash.camera_app.mojom.OpenPTZPanelEventParams = class {
  constructor(values = {}) {
    this.support_zoom = values.support_zoom !== undefined ? values.support_zoom : false;
  }
};

// Struct: DocScanActionEventParams
ash.camera_app.mojom.DocScanActionEventParams = class {
  constructor(values = {}) {
    this.action_type = values.action_type !== undefined ? values.action_type : null;
  }
};

// Struct: DocScanResultEventParams
ash.camera_app.mojom.DocScanResultEventParams = class {
  constructor(values = {}) {
    this.page_count = values.page_count !== undefined ? values.page_count : 0;
  }
};

// Struct: MipiCameraModule
ash.camera_app.mojom.MipiCameraModule = class {
  constructor(values = {}) {
  }
};

// Struct: UsbCameraModule
ash.camera_app.mojom.UsbCameraModule = class {
  constructor(values = {}) {
    this."[vid]:[pid]" = values."[vid]:[pid]" !== undefined ? values."[vid]:[pid]" : null;
    this.id = values.id !== undefined ? values.id : "";
  }
};

// Struct: OpenCameraEventParams
ash.camera_app.mojom.OpenCameraEventParams = class {
  constructor(values = {}) {
    this.camera_module = values.camera_module !== undefined ? values.camera_module : null;
  }
};

// Struct: LowStorageActionEventParams
ash.camera_app.mojom.LowStorageActionEventParams = class {
  constructor(values = {}) {
    this.action_type = values.action_type !== undefined ? values.action_type : null;
  }
};

// Struct: BarcodeDetectedEventParams
ash.camera_app.mojom.BarcodeDetectedEventParams = class {
  constructor(values = {}) {
    this.wifi_security_type = values.wifi_security_type !== undefined ? values.wifi_security_type : null;
  }
};

// Struct: PerfEventParams
ash.camera_app.mojom.PerfEventParams = class {
  constructor(values = {}) {
    this.pressure = values.pressure !== undefined ? values.pressure : 0;
  }
};

// Struct: MemoryUsageEventParams
ash.camera_app.mojom.MemoryUsageEventParams = class {
  constructor(values = {}) {
    this.memory_usage = values.memory_usage !== undefined ? values.memory_usage : 0;
  }
};

// Struct: OcrEventParams
ash.camera_app.mojom.OcrEventParams = class {
  constructor(values = {}) {
    this.word_count = values.word_count !== undefined ? values.word_count : 0;
  }
};

// Interface: EventsSender
ash.camera_app.mojom.EventsSenderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.camera_app.mojom.EventsSender';
  }

  sendStartSessionEvent(params) {
    // Method: SendStartSessionEvent
    // Call: SendStartSessionEvent(params)
  }

  sendCaptureEvent(params) {
    // Method: SendCaptureEvent
    // Call: SendCaptureEvent(params)
  }

  sendAndroidIntentEvent(params) {
    // Method: SendAndroidIntentEvent
    // Call: SendAndroidIntentEvent(params)
  }

  sendOpenPTZPanelEvent(params) {
    // Method: SendOpenPTZPanelEvent
    // Call: SendOpenPTZPanelEvent(params)
  }

  sendDocScanActionEvent(params) {
    // Method: SendDocScanActionEvent
    // Call: SendDocScanActionEvent(params)
  }

  sendDocScanResultEvent(params) {
    // Method: SendDocScanResultEvent
    // Call: SendDocScanResultEvent(params)
  }

  sendOpenCameraEvent(params) {
    // Method: SendOpenCameraEvent
    // Call: SendOpenCameraEvent(params)
  }

  sendLowStorageActionEvent(params) {
    // Method: SendLowStorageActionEvent
    // Call: SendLowStorageActionEvent(params)
  }

  sendBarcodeDetectedEvent(params) {
    // Method: SendBarcodeDetectedEvent
    // Call: SendBarcodeDetectedEvent(params)
  }

  sendPerfEvent(params) {
    // Method: SendPerfEvent
    // Call: SendPerfEvent(params)
  }

  sendUnsupportedProtocolEvent() {
    // Method: SendUnsupportedProtocolEvent
    // Call: SendUnsupportedProtocolEvent()
  }

  updateMemoryUsageEventParams(params) {
    // Method: UpdateMemoryUsageEventParams
    // Call: UpdateMemoryUsageEventParams(params)
  }

  sendOcrEvent(params) {
    // Method: SendOcrEvent
    // Call: SendOcrEvent(params)
  }

};

ash.camera_app.mojom.EventsSenderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
