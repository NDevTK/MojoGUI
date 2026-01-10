// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/camera_app_ui/events_sender.mojom
// Module: ash.camera_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.camera_app = ash.camera_app || {};
ash.camera_app.mojom = ash.camera_app.mojom || {};

ash.camera_app.mojom.LaunchTypeSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.ModeSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.FacingSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.GridTypeSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.TimerTypeSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.ShutterTypeSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.PressureSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.AndroidIntentResultTypeSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.ResolutionLevelSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.AspectRatioSetSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.RecordTypeSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.GifResultTypeSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.DocScanActionTypeSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.DocScanResultTypeSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.DocScanFixTypeSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.LowStorageActionTypeSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.BarcodeContentTypeSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.PerfEventTypeSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.UserBehaviorSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.OcrEventTypeSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.RecordTypeDetailsSpec = { $: {} };
ash.camera_app.mojom.CaptureDetailsSpec = { $: {} };
ash.camera_app.mojom.CameraModuleSpec = { $: {} };
ash.camera_app.mojom.StartSessionEventParamsSpec = { $: {} };
ash.camera_app.mojom.PhotoDetailsSpec = { $: {} };
ash.camera_app.mojom.NormalVideoDetailsSpec = { $: {} };
ash.camera_app.mojom.GifVideoDetailsSpec = { $: {} };
ash.camera_app.mojom.TimelapseVideoDetailsSpec = { $: {} };
ash.camera_app.mojom.VideoDetailsSpec = { $: {} };
ash.camera_app.mojom.CaptureEventParamsSpec = { $: {} };
ash.camera_app.mojom.AndroidIntentEventParamsSpec = { $: {} };
ash.camera_app.mojom.OpenPTZPanelEventParamsSpec = { $: {} };
ash.camera_app.mojom.DocScanActionEventParamsSpec = { $: {} };
ash.camera_app.mojom.DocScanResultEventParamsSpec = { $: {} };
ash.camera_app.mojom.MipiCameraModuleSpec = { $: {} };
ash.camera_app.mojom.UsbCameraModuleSpec = { $: {} };
ash.camera_app.mojom.OpenCameraEventParamsSpec = { $: {} };
ash.camera_app.mojom.LowStorageActionEventParamsSpec = { $: {} };
ash.camera_app.mojom.BarcodeDetectedEventParamsSpec = { $: {} };
ash.camera_app.mojom.PerfEventParamsSpec = { $: {} };
ash.camera_app.mojom.MemoryUsageEventParamsSpec = { $: {} };
ash.camera_app.mojom.OcrEventParamsSpec = { $: {} };
ash.camera_app.mojom.EventsSender = {};
ash.camera_app.mojom.EventsSender.$interfaceName = 'ash.camera_app.mojom.EventsSender';
ash.camera_app.mojom.EventsSender_SendStartSessionEvent_ParamsSpec = { $: {} };
ash.camera_app.mojom.EventsSender_SendCaptureEvent_ParamsSpec = { $: {} };
ash.camera_app.mojom.EventsSender_SendAndroidIntentEvent_ParamsSpec = { $: {} };
ash.camera_app.mojom.EventsSender_SendOpenPTZPanelEvent_ParamsSpec = { $: {} };
ash.camera_app.mojom.EventsSender_SendDocScanActionEvent_ParamsSpec = { $: {} };
ash.camera_app.mojom.EventsSender_SendDocScanResultEvent_ParamsSpec = { $: {} };
ash.camera_app.mojom.EventsSender_SendOpenCameraEvent_ParamsSpec = { $: {} };
ash.camera_app.mojom.EventsSender_SendLowStorageActionEvent_ParamsSpec = { $: {} };
ash.camera_app.mojom.EventsSender_SendBarcodeDetectedEvent_ParamsSpec = { $: {} };
ash.camera_app.mojom.EventsSender_SendPerfEvent_ParamsSpec = { $: {} };
ash.camera_app.mojom.EventsSender_SendUnsupportedProtocolEvent_ParamsSpec = { $: {} };
ash.camera_app.mojom.EventsSender_UpdateMemoryUsageEventParams_ParamsSpec = { $: {} };
ash.camera_app.mojom.EventsSender_SendOcrEvent_ParamsSpec = { $: {} };

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
  kCorner: 1,
  kRotation: 2,
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
  kPortraitModeCapturePostProcessingSaving: 9,
  kTimelapseCapturePostProcessingSaving: 10,
  kVideoCapturePostProcessingSaving: 11,
  kSnapshotTaking: 12,
  kDocumentCapturePostProcessing: 13,
  kDocumentPdfSaving: 14,
  kOcrScanning: 15,
  kGifCaptureSaving: 16,
};

// Enum: UserBehavior
ash.camera_app.mojom.UserBehavior = {
  kTakeNormalPhoto: 1,
  kTakePortraitPhoto: 2,
  kScanBarcode: 4,
  kScanDocument: 8,
  kRecordNormalVideo: 16,
  kRecordGifVideo: 32,
  kRecordTimelapseVideo: 64,
};

// Enum: OcrEventType
ash.camera_app.mojom.OcrEventType = {
  kCopyText: 0,
  kTextDetected: 1,
};

// Union: RecordTypeDetails
mojo.internal.Union(
    ash.camera_app.mojom.RecordTypeDetailsSpec, 'ash.camera_app.mojom.RecordTypeDetails', {
      'normal_video_details': {
        'ordinal': 0,
        'type': ash.camera_app.mojom.NormalVideoDetailsSpec.$,
        'nullable': false,
      },
      'gif_video_details': {
        'ordinal': 1,
        'type': ash.camera_app.mojom.GifVideoDetailsSpec.$,
        'nullable': false,
      },
      'timelapse_video_details': {
        'ordinal': 2,
        'type': ash.camera_app.mojom.TimelapseVideoDetailsSpec.$,
        'nullable': false,
      },
    });

// Union: CaptureDetails
mojo.internal.Union(
    ash.camera_app.mojom.CaptureDetailsSpec, 'ash.camera_app.mojom.CaptureDetails', {
      'photo_details': {
        'ordinal': 0,
        'type': ash.camera_app.mojom.PhotoDetailsSpec.$,
        'nullable': false,
      },
      'video_details': {
        'ordinal': 1,
        'type': ash.camera_app.mojom.VideoDetailsSpec.$,
        'nullable': false,
      },
    });

// Union: CameraModule
mojo.internal.Union(
    ash.camera_app.mojom.CameraModuleSpec, 'ash.camera_app.mojom.CameraModule', {
      'mipi_camera': {
        'ordinal': 0,
        'type': ash.camera_app.mojom.MipiCameraModuleSpec.$,
        'nullable': false,
      },
      'usb_camera': {
        'ordinal': 1,
        'type': ash.camera_app.mojom.UsbCameraModuleSpec.$,
        'nullable': false,
      },
    });

// Struct: StartSessionEventParams
mojo.internal.Struct(
    ash.camera_app.mojom.StartSessionEventParamsSpec, 'ash.camera_app.mojom.StartSessionEventParams', [
      mojo.internal.StructField('launch_type', 0, 0, ash.camera_app.mojom.LaunchTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PhotoDetails
mojo.internal.Struct(
    ash.camera_app.mojom.PhotoDetailsSpec, 'ash.camera_app.mojom.PhotoDetails', [
      mojo.internal.StructField('is_video_snapshot', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: NormalVideoDetails
mojo.internal.Struct(
    ash.camera_app.mojom.NormalVideoDetailsSpec, 'ash.camera_app.mojom.NormalVideoDetails', [
    ],
    [[0, 8]]);

// Struct: GifVideoDetails
mojo.internal.Struct(
    ash.camera_app.mojom.GifVideoDetailsSpec, 'ash.camera_app.mojom.GifVideoDetails', [
      mojo.internal.StructField('gif_result_type', 0, 0, ash.camera_app.mojom.GifResultTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TimelapseVideoDetails
mojo.internal.Struct(
    ash.camera_app.mojom.TimelapseVideoDetailsSpec, 'ash.camera_app.mojom.TimelapseVideoDetails', [
      mojo.internal.StructField('timelapse_speed', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VideoDetails
mojo.internal.Struct(
    ash.camera_app.mojom.VideoDetailsSpec, 'ash.camera_app.mojom.VideoDetails', [
      mojo.internal.StructField('record_type_details', 0, 0, ash.camera_app.mojom.RecordTypeDetailsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fps', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('duration', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_muted', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ever_paused', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CaptureEventParams
mojo.internal.Struct(
    ash.camera_app.mojom.CaptureEventParamsSpec, 'ash.camera_app.mojom.CaptureEventParams', [
      mojo.internal.StructField('mode', 0, 0, ash.camera_app.mojom.ModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('facing', 8, 0, ash.camera_app.mojom.FacingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('grid_type', 16, 0, ash.camera_app.mojom.GridTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timer_type', 24, 0, ash.camera_app.mojom.TimerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shutter_type', 32, 0, ash.camera_app.mojom.ShutterTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('android_intent_result_type', 40, 0, ash.camera_app.mojom.AndroidIntentResultTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('resolution_level', 48, 0, ash.camera_app.mojom.ResolutionLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('aspect_ratio_set', 56, 0, ash.camera_app.mojom.AspectRatioSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('capture_details', 64, 0, ash.camera_app.mojom.CaptureDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('zoom_ratio', 72, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('resolution_width', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('resolution_height', 84, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_mirrored', 88, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_window_maximized', 88, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_window_portrait', 88, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 104]]);

// Struct: AndroidIntentEventParams
mojo.internal.Struct(
    ash.camera_app.mojom.AndroidIntentEventParamsSpec, 'ash.camera_app.mojom.AndroidIntentEventParams', [
      mojo.internal.StructField('mode', 0, 0, ash.camera_app.mojom.ModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('should_handle_result', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_downscale', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_secure', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OpenPTZPanelEventParams
mojo.internal.Struct(
    ash.camera_app.mojom.OpenPTZPanelEventParamsSpec, 'ash.camera_app.mojom.OpenPTZPanelEventParams', [
      mojo.internal.StructField('support_pan', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('support_tilt', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('support_zoom', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DocScanActionEventParams
mojo.internal.Struct(
    ash.camera_app.mojom.DocScanActionEventParamsSpec, 'ash.camera_app.mojom.DocScanActionEventParams', [
      mojo.internal.StructField('action_type', 0, 0, ash.camera_app.mojom.DocScanActionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DocScanResultEventParams
mojo.internal.Struct(
    ash.camera_app.mojom.DocScanResultEventParamsSpec, 'ash.camera_app.mojom.DocScanResultEventParams', [
      mojo.internal.StructField('result_type', 0, 0, ash.camera_app.mojom.DocScanResultTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fix_types_mask', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('fix_count', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('page_count', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: MipiCameraModule
mojo.internal.Struct(
    ash.camera_app.mojom.MipiCameraModuleSpec, 'ash.camera_app.mojom.MipiCameraModule', [
    ],
    [[0, 8]]);

// Struct: UsbCameraModule
mojo.internal.Struct(
    ash.camera_app.mojom.UsbCameraModuleSpec, 'ash.camera_app.mojom.UsbCameraModule', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: OpenCameraEventParams
mojo.internal.Struct(
    ash.camera_app.mojom.OpenCameraEventParamsSpec, 'ash.camera_app.mojom.OpenCameraEventParams', [
      mojo.internal.StructField('camera_module', 0, 0, ash.camera_app.mojom.CameraModuleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: LowStorageActionEventParams
mojo.internal.Struct(
    ash.camera_app.mojom.LowStorageActionEventParamsSpec, 'ash.camera_app.mojom.LowStorageActionEventParams', [
      mojo.internal.StructField('action_type', 0, 0, ash.camera_app.mojom.LowStorageActionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BarcodeDetectedEventParams
mojo.internal.Struct(
    ash.camera_app.mojom.BarcodeDetectedEventParamsSpec, 'ash.camera_app.mojom.BarcodeDetectedEventParams', [
      mojo.internal.StructField('content_type', 0, 0, ash.camera_app.mojom.BarcodeContentTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wifi_security_type', 8, 0, ash.camera_app.mojom.WifiSecurityTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PerfEventParams
mojo.internal.Struct(
    ash.camera_app.mojom.PerfEventParamsSpec, 'ash.camera_app.mojom.PerfEventParams', [
      mojo.internal.StructField('event_type', 0, 0, ash.camera_app.mojom.PerfEventTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('facing', 8, 0, ash.camera_app.mojom.FacingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pressure', 16, 0, ash.camera_app.mojom.PressureSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('duration', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('resolution_width', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('resolution_height', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('page_count', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: MemoryUsageEventParams
mojo.internal.Struct(
    ash.camera_app.mojom.MemoryUsageEventParamsSpec, 'ash.camera_app.mojom.MemoryUsageEventParams', [
      mojo.internal.StructField('memory_usage', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('behaviors_mask', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OcrEventParams
mojo.internal.Struct(
    ash.camera_app.mojom.OcrEventParamsSpec, 'ash.camera_app.mojom.OcrEventParams', [
      mojo.internal.StructField('event_type', 0, 0, ash.camera_app.mojom.OcrEventTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('line_count', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('word_count', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_primary_language', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: EventsSender
mojo.internal.Struct(
    ash.camera_app.mojom.EventsSender_SendStartSessionEvent_ParamsSpec, 'ash.camera_app.mojom.EventsSender_SendStartSessionEvent_Params', [
      mojo.internal.StructField('params', 0, 0, ash.camera_app.mojom.StartSessionEventParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.EventsSender_SendCaptureEvent_ParamsSpec, 'ash.camera_app.mojom.EventsSender_SendCaptureEvent_Params', [
      mojo.internal.StructField('params', 0, 0, ash.camera_app.mojom.CaptureEventParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.EventsSender_SendAndroidIntentEvent_ParamsSpec, 'ash.camera_app.mojom.EventsSender_SendAndroidIntentEvent_Params', [
      mojo.internal.StructField('params', 0, 0, ash.camera_app.mojom.AndroidIntentEventParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.EventsSender_SendOpenPTZPanelEvent_ParamsSpec, 'ash.camera_app.mojom.EventsSender_SendOpenPTZPanelEvent_Params', [
      mojo.internal.StructField('params', 0, 0, ash.camera_app.mojom.OpenPTZPanelEventParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.EventsSender_SendDocScanActionEvent_ParamsSpec, 'ash.camera_app.mojom.EventsSender_SendDocScanActionEvent_Params', [
      mojo.internal.StructField('params', 0, 0, ash.camera_app.mojom.DocScanActionEventParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.EventsSender_SendDocScanResultEvent_ParamsSpec, 'ash.camera_app.mojom.EventsSender_SendDocScanResultEvent_Params', [
      mojo.internal.StructField('params', 0, 0, ash.camera_app.mojom.DocScanResultEventParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.EventsSender_SendOpenCameraEvent_ParamsSpec, 'ash.camera_app.mojom.EventsSender_SendOpenCameraEvent_Params', [
      mojo.internal.StructField('params', 0, 0, ash.camera_app.mojom.OpenCameraEventParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.EventsSender_SendLowStorageActionEvent_ParamsSpec, 'ash.camera_app.mojom.EventsSender_SendLowStorageActionEvent_Params', [
      mojo.internal.StructField('params', 0, 0, ash.camera_app.mojom.LowStorageActionEventParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.EventsSender_SendBarcodeDetectedEvent_ParamsSpec, 'ash.camera_app.mojom.EventsSender_SendBarcodeDetectedEvent_Params', [
      mojo.internal.StructField('params', 0, 0, ash.camera_app.mojom.BarcodeDetectedEventParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.EventsSender_SendPerfEvent_ParamsSpec, 'ash.camera_app.mojom.EventsSender_SendPerfEvent_Params', [
      mojo.internal.StructField('params', 0, 0, ash.camera_app.mojom.PerfEventParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.EventsSender_SendUnsupportedProtocolEvent_ParamsSpec, 'ash.camera_app.mojom.EventsSender_SendUnsupportedProtocolEvent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.EventsSender_UpdateMemoryUsageEventParams_ParamsSpec, 'ash.camera_app.mojom.EventsSender_UpdateMemoryUsageEventParams_Params', [
      mojo.internal.StructField('params', 0, 0, ash.camera_app.mojom.MemoryUsageEventParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.EventsSender_SendOcrEvent_ParamsSpec, 'ash.camera_app.mojom.EventsSender_SendOcrEvent_Params', [
      mojo.internal.StructField('params', 0, 0, ash.camera_app.mojom.OcrEventParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [params],
      false);
  }

  sendCaptureEvent(params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.camera_app.mojom.EventsSender_SendCaptureEvent_ParamsSpec,
      null,
      [params],
      false);
  }

  sendAndroidIntentEvent(params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.camera_app.mojom.EventsSender_SendAndroidIntentEvent_ParamsSpec,
      null,
      [params],
      false);
  }

  sendOpenPTZPanelEvent(params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.camera_app.mojom.EventsSender_SendOpenPTZPanelEvent_ParamsSpec,
      null,
      [params],
      false);
  }

  sendDocScanActionEvent(params) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.camera_app.mojom.EventsSender_SendDocScanActionEvent_ParamsSpec,
      null,
      [params],
      false);
  }

  sendDocScanResultEvent(params) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.camera_app.mojom.EventsSender_SendDocScanResultEvent_ParamsSpec,
      null,
      [params],
      false);
  }

  sendOpenCameraEvent(params) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.camera_app.mojom.EventsSender_SendOpenCameraEvent_ParamsSpec,
      null,
      [params],
      false);
  }

  sendLowStorageActionEvent(params) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.camera_app.mojom.EventsSender_SendLowStorageActionEvent_ParamsSpec,
      null,
      [params],
      false);
  }

  sendBarcodeDetectedEvent(params) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.camera_app.mojom.EventsSender_SendBarcodeDetectedEvent_ParamsSpec,
      null,
      [params],
      false);
  }

  sendPerfEvent(params) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.camera_app.mojom.EventsSender_SendPerfEvent_ParamsSpec,
      null,
      [params],
      false);
  }

  sendUnsupportedProtocolEvent() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.camera_app.mojom.EventsSender_SendUnsupportedProtocolEvent_ParamsSpec,
      null,
      [],
      false);
  }

  updateMemoryUsageEventParams(params) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.camera_app.mojom.EventsSender_UpdateMemoryUsageEventParams_ParamsSpec,
      null,
      [params],
      false);
  }

  sendOcrEvent(params) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.camera_app.mojom.EventsSender_SendOcrEvent_ParamsSpec,
      null,
      [params],
      false);
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

ash.camera_app.mojom.EventsSenderReceiver = class {
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
          const params = ash.camera_app.mojom.EventsSender_SendStartSessionEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendStartSessionEvent(params.params);
          break;
        }
        case 1: {
          const params = ash.camera_app.mojom.EventsSender_SendCaptureEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendCaptureEvent(params.params);
          break;
        }
        case 2: {
          const params = ash.camera_app.mojom.EventsSender_SendAndroidIntentEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendAndroidIntentEvent(params.params);
          break;
        }
        case 3: {
          const params = ash.camera_app.mojom.EventsSender_SendOpenPTZPanelEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendOpenPTZPanelEvent(params.params);
          break;
        }
        case 4: {
          const params = ash.camera_app.mojom.EventsSender_SendDocScanActionEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendDocScanActionEvent(params.params);
          break;
        }
        case 5: {
          const params = ash.camera_app.mojom.EventsSender_SendDocScanResultEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendDocScanResultEvent(params.params);
          break;
        }
        case 6: {
          const params = ash.camera_app.mojom.EventsSender_SendOpenCameraEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendOpenCameraEvent(params.params);
          break;
        }
        case 7: {
          const params = ash.camera_app.mojom.EventsSender_SendLowStorageActionEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendLowStorageActionEvent(params.params);
          break;
        }
        case 8: {
          const params = ash.camera_app.mojom.EventsSender_SendBarcodeDetectedEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendBarcodeDetectedEvent(params.params);
          break;
        }
        case 9: {
          const params = ash.camera_app.mojom.EventsSender_SendPerfEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendPerfEvent(params.params);
          break;
        }
        case 10: {
          const params = ash.camera_app.mojom.EventsSender_SendUnsupportedProtocolEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendUnsupportedProtocolEvent();
          break;
        }
        case 11: {
          const params = ash.camera_app.mojom.EventsSender_UpdateMemoryUsageEventParams_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateMemoryUsageEventParams(params.params);
          break;
        }
        case 12: {
          const params = ash.camera_app.mojom.EventsSender_SendOcrEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendOcrEvent(params.params);
          break;
        }
      }
    }});
  }
};

ash.camera_app.mojom.EventsSenderReceiver = ash.camera_app.mojom.EventsSenderReceiver;

ash.camera_app.mojom.EventsSenderPtr = ash.camera_app.mojom.EventsSenderRemote;
ash.camera_app.mojom.EventsSenderRequest = ash.camera_app.mojom.EventsSenderPendingReceiver;

