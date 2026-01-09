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
};

// Enum: Facing
ash.camera_app.mojom.Facing = {
};

// Enum: GridType
ash.camera_app.mojom.GridType = {
};

// Enum: TimerType
ash.camera_app.mojom.TimerType = {
};

// Enum: ShutterType
ash.camera_app.mojom.ShutterType = {
};

// Enum: Pressure
ash.camera_app.mojom.Pressure = {
};

// Enum: AndroidIntentResultType
ash.camera_app.mojom.AndroidIntentResultType = {
};

// Enum: ResolutionLevel
ash.camera_app.mojom.ResolutionLevel = {
};

// Enum: AspectRatioSet
ash.camera_app.mojom.AspectRatioSet = {
};

// Enum: RecordType
ash.camera_app.mojom.RecordType = {
};

// Enum: GifResultType
ash.camera_app.mojom.GifResultType = {
};

// Enum: DocScanActionType
ash.camera_app.mojom.DocScanActionType = {
};

// Enum: DocScanResultType
ash.camera_app.mojom.DocScanResultType = {
};

// Enum: DocScanFixType
ash.camera_app.mojom.DocScanFixType = {
};

// Enum: LowStorageActionType
ash.camera_app.mojom.LowStorageActionType = {
};

// Enum: BarcodeContentType
ash.camera_app.mojom.BarcodeContentType = {
};

// Enum: PerfEventType
ash.camera_app.mojom.PerfEventType = {
};

// Enum: UserBehavior
ash.camera_app.mojom.UserBehavior = {
};

// Enum: OcrEventType
ash.camera_app.mojom.OcrEventType = {
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
