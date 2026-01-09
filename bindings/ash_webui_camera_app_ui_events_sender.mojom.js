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
  kDefault: 0,
  kAssistant: 1,
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
  kPortraitModeCapturePostProcessingSaving: 8,
  kTimelapseCapturePostProcessingSaving: 9,
  kVideoCapturePostProcessingSaving: 10,
  kSnapshotTaking: 11,
  kDocumentCapturePostProcessing: 12,
  kDocumentPdfSaving: 13,
  kOcrScanning: 14,
  kGifCaptureSaving: 15,
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
ash.camera_app.mojom.StartSessionEventParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.StartSessionEventParams',
      packedSize: 16,
      fields: [
        { name: 'launch_type', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.LaunchTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PhotoDetails
ash.camera_app.mojom.PhotoDetailsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.PhotoDetails',
      packedSize: 16,
      fields: [
        { name: 'is_video_snapshot', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NormalVideoDetails
ash.camera_app.mojom.NormalVideoDetailsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.NormalVideoDetails',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GifVideoDetails
ash.camera_app.mojom.GifVideoDetailsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.GifVideoDetails',
      packedSize: 16,
      fields: [
        { name: 'gif_result_type', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.GifResultTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TimelapseVideoDetails
ash.camera_app.mojom.TimelapseVideoDetailsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.TimelapseVideoDetails',
      packedSize: 16,
      fields: [
        { name: 'timelapse_speed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoDetails
ash.camera_app.mojom.VideoDetailsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.VideoDetails',
      packedSize: 32,
      fields: [
        { name: 'record_type_details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'fps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'duration', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'is_muted', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'ever_paused', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CaptureEventParams
ash.camera_app.mojom.CaptureEventParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CaptureEventParams',
      packedSize: 104,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.ModeSpec, nullable: false },
        { name: 'facing', packedOffset: 8, packedBitOffset: 0, type: ash.camera_app.mojom.FacingSpec, nullable: false },
        { name: 'grid_type', packedOffset: 16, packedBitOffset: 0, type: ash.camera_app.mojom.GridTypeSpec, nullable: false },
        { name: 'timer_type', packedOffset: 24, packedBitOffset: 0, type: ash.camera_app.mojom.TimerTypeSpec, nullable: false },
        { name: 'shutter_type', packedOffset: 32, packedBitOffset: 0, type: ash.camera_app.mojom.ShutterTypeSpec, nullable: false },
        { name: 'android_intent_result_type', packedOffset: 40, packedBitOffset: 0, type: ash.camera_app.mojom.AndroidIntentResultTypeSpec, nullable: false },
        { name: 'resolution_level', packedOffset: 48, packedBitOffset: 0, type: ash.camera_app.mojom.ResolutionLevelSpec, nullable: false },
        { name: 'aspect_ratio_set', packedOffset: 56, packedBitOffset: 0, type: ash.camera_app.mojom.AspectRatioSetSpec, nullable: false },
        { name: 'capture_details', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'zoom_ratio', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'resolution_width', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'resolution_height', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'is_mirrored', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_window_maximized', packedOffset: 88, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_window_portrait', packedOffset: 88, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AndroidIntentEventParams
ash.camera_app.mojom.AndroidIntentEventParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.AndroidIntentEventParams',
      packedSize: 24,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.ModeSpec, nullable: false },
        { name: 'should_handle_result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'should_downscale', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_secure', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OpenPTZPanelEventParams
ash.camera_app.mojom.OpenPTZPanelEventParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.OpenPTZPanelEventParams',
      packedSize: 16,
      fields: [
        { name: 'support_pan', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'support_tilt', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'support_zoom', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DocScanActionEventParams
ash.camera_app.mojom.DocScanActionEventParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.DocScanActionEventParams',
      packedSize: 16,
      fields: [
        { name: 'action_type', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.DocScanActionTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DocScanResultEventParams
ash.camera_app.mojom.DocScanResultEventParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.DocScanResultEventParams',
      packedSize: 32,
      fields: [
        { name: 'result_type', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.DocScanResultTypeSpec, nullable: false },
        { name: 'fix_types_mask', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'fix_count', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'page_count', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MipiCameraModule
ash.camera_app.mojom.MipiCameraModuleSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.MipiCameraModule',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UsbCameraModule
ash.camera_app.mojom.UsbCameraModuleSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.UsbCameraModule',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OpenCameraEventParams
ash.camera_app.mojom.OpenCameraEventParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.OpenCameraEventParams',
      packedSize: 16,
      fields: [
        { name: 'camera_module', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LowStorageActionEventParams
ash.camera_app.mojom.LowStorageActionEventParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.LowStorageActionEventParams',
      packedSize: 16,
      fields: [
        { name: 'action_type', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.LowStorageActionTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BarcodeDetectedEventParams
ash.camera_app.mojom.BarcodeDetectedEventParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.BarcodeDetectedEventParams',
      packedSize: 24,
      fields: [
        { name: 'content_type', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.BarcodeContentTypeSpec, nullable: false },
        { name: 'wifi_security_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PerfEventParams
ash.camera_app.mojom.PerfEventParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.PerfEventParams',
      packedSize: 48,
      fields: [
        { name: 'event_type', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.PerfEventTypeSpec, nullable: false },
        { name: 'facing', packedOffset: 8, packedBitOffset: 0, type: ash.camera_app.mojom.FacingSpec, nullable: false },
        { name: 'pressure', packedOffset: 16, packedBitOffset: 0, type: ash.camera_app.mojom.PressureSpec, nullable: false },
        { name: 'duration', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'resolution_width', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'resolution_height', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'page_count', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MemoryUsageEventParams
ash.camera_app.mojom.MemoryUsageEventParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.MemoryUsageEventParams',
      packedSize: 24,
      fields: [
        { name: 'memory_usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'behaviors_mask', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OcrEventParams
ash.camera_app.mojom.OcrEventParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.OcrEventParams',
      packedSize: 32,
      fields: [
        { name: 'event_type', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.OcrEventTypeSpec, nullable: false },
        { name: 'line_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'word_count', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'is_primary_language', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: EventsSender
ash.camera_app.mojom.EventsSender = {};

ash.camera_app.mojom.EventsSenderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.EventsSenderRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.EventsSender';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.EventsSenderPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.EventsSenderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.camera_app.mojom.EventsSenderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendStartSessionEvent(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.camera_app.mojom.EventsSender_SendStartSessionEvent_ParamsSpec,
      null,
      [params]);
  }

  sendCaptureEvent(params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.camera_app.mojom.EventsSender_SendCaptureEvent_ParamsSpec,
      null,
      [params]);
  }

  sendAndroidIntentEvent(params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.camera_app.mojom.EventsSender_SendAndroidIntentEvent_ParamsSpec,
      null,
      [params]);
  }

  sendOpenPTZPanelEvent(params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.camera_app.mojom.EventsSender_SendOpenPTZPanelEvent_ParamsSpec,
      null,
      [params]);
  }

  sendDocScanActionEvent(params) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.camera_app.mojom.EventsSender_SendDocScanActionEvent_ParamsSpec,
      null,
      [params]);
  }

  sendDocScanResultEvent(params) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.camera_app.mojom.EventsSender_SendDocScanResultEvent_ParamsSpec,
      null,
      [params]);
  }

  sendOpenCameraEvent(params) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.camera_app.mojom.EventsSender_SendOpenCameraEvent_ParamsSpec,
      null,
      [params]);
  }

  sendLowStorageActionEvent(params) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.camera_app.mojom.EventsSender_SendLowStorageActionEvent_ParamsSpec,
      null,
      [params]);
  }

  sendBarcodeDetectedEvent(params) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.camera_app.mojom.EventsSender_SendBarcodeDetectedEvent_ParamsSpec,
      null,
      [params]);
  }

  sendPerfEvent(params) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.camera_app.mojom.EventsSender_SendPerfEvent_ParamsSpec,
      null,
      [params]);
  }

  sendUnsupportedProtocolEvent() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.camera_app.mojom.EventsSender_SendUnsupportedProtocolEvent_ParamsSpec,
      null,
      []);
  }

  updateMemoryUsageEventParams(params) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.camera_app.mojom.EventsSender_UpdateMemoryUsageEventParams_ParamsSpec,
      null,
      [params]);
  }

  sendOcrEvent(params) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.camera_app.mojom.EventsSender_SendOcrEvent_ParamsSpec,
      null,
      [params]);
  }

};

ash.camera_app.mojom.EventsSender.getRemote = function() {
  let remote = new ash.camera_app.mojom.EventsSenderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.EventsSender',
    'context');
  return remote.$;
};

// ParamsSpec for SendStartSessionEvent
ash.camera_app.mojom.EventsSender_SendStartSessionEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.EventsSender.SendStartSessionEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.StartSessionEventParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendCaptureEvent
ash.camera_app.mojom.EventsSender_SendCaptureEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.EventsSender.SendCaptureEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.CaptureEventParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendAndroidIntentEvent
ash.camera_app.mojom.EventsSender_SendAndroidIntentEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.EventsSender.SendAndroidIntentEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.AndroidIntentEventParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendOpenPTZPanelEvent
ash.camera_app.mojom.EventsSender_SendOpenPTZPanelEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.EventsSender.SendOpenPTZPanelEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.OpenPTZPanelEventParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendDocScanActionEvent
ash.camera_app.mojom.EventsSender_SendDocScanActionEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.EventsSender.SendDocScanActionEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.DocScanActionEventParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendDocScanResultEvent
ash.camera_app.mojom.EventsSender_SendDocScanResultEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.EventsSender.SendDocScanResultEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.DocScanResultEventParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendOpenCameraEvent
ash.camera_app.mojom.EventsSender_SendOpenCameraEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.EventsSender.SendOpenCameraEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.OpenCameraEventParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendLowStorageActionEvent
ash.camera_app.mojom.EventsSender_SendLowStorageActionEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.EventsSender.SendLowStorageActionEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.LowStorageActionEventParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendBarcodeDetectedEvent
ash.camera_app.mojom.EventsSender_SendBarcodeDetectedEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.EventsSender.SendBarcodeDetectedEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.BarcodeDetectedEventParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendPerfEvent
ash.camera_app.mojom.EventsSender_SendPerfEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.EventsSender.SendPerfEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.PerfEventParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendUnsupportedProtocolEvent
ash.camera_app.mojom.EventsSender_SendUnsupportedProtocolEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.EventsSender.SendUnsupportedProtocolEvent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateMemoryUsageEventParams
ash.camera_app.mojom.EventsSender_UpdateMemoryUsageEventParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.EventsSender.UpdateMemoryUsageEventParams_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.MemoryUsageEventParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendOcrEvent
ash.camera_app.mojom.EventsSender_SendOcrEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.EventsSender.SendOcrEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.OcrEventParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.camera_app.mojom.EventsSenderPtr = ash.camera_app.mojom.EventsSenderRemote;
ash.camera_app.mojom.EventsSenderRequest = ash.camera_app.mojom.EventsSenderPendingReceiver;

