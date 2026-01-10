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
ash.camera_app.mojom.LaunchTypeSpec = { $: mojo.internal.Enum() };

// Enum: Mode
ash.camera_app.mojom.Mode = {
  kPhoto: 0,
  kVideo: 1,
  kScan: 2,
  kPortrait: 3,
};
ash.camera_app.mojom.ModeSpec = { $: mojo.internal.Enum() };

// Enum: Facing
ash.camera_app.mojom.Facing = {
  kEnvironment: 0,
  kUser: 1,
  kExternal: 2,
  kUnknown: 3,
};
ash.camera_app.mojom.FacingSpec = { $: mojo.internal.Enum() };

// Enum: GridType
ash.camera_app.mojom.GridType = {
  kNone: 0,
  k3X3: 1,
  k4X4: 2,
  kGolden: 3,
};
ash.camera_app.mojom.GridTypeSpec = { $: mojo.internal.Enum() };

// Enum: TimerType
ash.camera_app.mojom.TimerType = {
  kNone: 0,
  k3Seconds: 1,
  k10Seconds: 2,
};
ash.camera_app.mojom.TimerTypeSpec = { $: mojo.internal.Enum() };

// Enum: ShutterType
ash.camera_app.mojom.ShutterType = {
  kUnknown: 0,
  kAssistant: 1,
  kKeyboard: 2,
  kMouse: 3,
  kTouch: 4,
  kVolumeKey: 5,
};
ash.camera_app.mojom.ShutterTypeSpec = { $: mojo.internal.Enum() };

// Enum: Pressure
ash.camera_app.mojom.Pressure = {
  kNominal: 0,
  kFair: 1,
  kSerious: 2,
  kCritical: 3,
};
ash.camera_app.mojom.PressureSpec = { $: mojo.internal.Enum() };

// Enum: AndroidIntentResultType
ash.camera_app.mojom.AndroidIntentResultType = {
  kNotIntent: 0,
  kConfirmed: 1,
  kCanceled: 2,
};
ash.camera_app.mojom.AndroidIntentResultTypeSpec = { $: mojo.internal.Enum() };

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
ash.camera_app.mojom.ResolutionLevelSpec = { $: mojo.internal.Enum() };

// Enum: AspectRatioSet
ash.camera_app.mojom.AspectRatioSet = {
  kOthers: 0,
  k4To3: 1,
  k16To9: 2,
  kSquare: 3,
};
ash.camera_app.mojom.AspectRatioSetSpec = { $: mojo.internal.Enum() };

// Enum: RecordType
ash.camera_app.mojom.RecordType = {
  kNotRecording: 0,
  kNormal: 1,
  kGif: 2,
  kTimelapse: 3,
};
ash.camera_app.mojom.RecordTypeSpec = { $: mojo.internal.Enum() };

// Enum: GifResultType
ash.camera_app.mojom.GifResultType = {
  kNotGif: 0,
  kRetake: 1,
  kShare: 2,
  kSave: 3,
};
ash.camera_app.mojom.GifResultTypeSpec = { $: mojo.internal.Enum() };

// Enum: DocScanActionType
ash.camera_app.mojom.DocScanActionType = {
  kAddPage: 0,
  kDeletePage: 1,
  kFix: 2,
};
ash.camera_app.mojom.DocScanActionTypeSpec = { $: mojo.internal.Enum() };

// Enum: DocScanResultType
ash.camera_app.mojom.DocScanResultType = {
  kCancel: 0,
  kSaveAsPdf: 1,
  kSaveAsPhoto: 2,
  kShare: 3,
};
ash.camera_app.mojom.DocScanResultTypeSpec = { $: mojo.internal.Enum() };

// Enum: DocScanFixType
ash.camera_app.mojom.DocScanFixType = {
  kCorner: 0,
  kRotation: 1,
};
ash.camera_app.mojom.DocScanFixTypeSpec = { $: mojo.internal.Enum() };

// Enum: LowStorageActionType
ash.camera_app.mojom.LowStorageActionType = {
  kManageStorageAutoStop: 0,
  kManageStorageCannotStart: 1,
  kShowAutoStopDialog: 2,
  kShowCannotStartDialog: 3,
  kShowWarningMessage: 4,
};
ash.camera_app.mojom.LowStorageActionTypeSpec = { $: mojo.internal.Enum() };

// Enum: BarcodeContentType
ash.camera_app.mojom.BarcodeContentType = {
  kText: 0,
  kUrl: 1,
  kWiFi: 2,
};
ash.camera_app.mojom.BarcodeContentTypeSpec = { $: mojo.internal.Enum() };

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
ash.camera_app.mojom.PerfEventTypeSpec = { $: mojo.internal.Enum() };

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
ash.camera_app.mojom.UserBehaviorSpec = { $: mojo.internal.Enum() };

// Enum: OcrEventType
ash.camera_app.mojom.OcrEventType = {
  kCopyText: 0,
  kTextDetected: 1,
};
ash.camera_app.mojom.OcrEventTypeSpec = { $: mojo.internal.Enum() };

// Union: RecordTypeDetails
ash.camera_app.mojom.RecordTypeDetailsSpec = { $: mojo.internal.Union(
    'ash.camera_app.mojom.RecordTypeDetails', {
      'normal_video_details': {
        'ordinal': 0,
        'type': ash.camera_app.mojom.NormalVideoDetailsSpec,
      }},
      'gif_video_details': {
        'ordinal': 1,
        'type': ash.camera_app.mojom.GifVideoDetailsSpec,
      }},
      'timelapse_video_details': {
        'ordinal': 2,
        'type': ash.camera_app.mojom.TimelapseVideoDetailsSpec,
      }},
    })
};

// Union: CaptureDetails
ash.camera_app.mojom.CaptureDetailsSpec = { $: mojo.internal.Union(
    'ash.camera_app.mojom.CaptureDetails', {
      'photo_details': {
        'ordinal': 0,
        'type': ash.camera_app.mojom.PhotoDetailsSpec,
      }},
      'video_details': {
        'ordinal': 1,
        'type': ash.camera_app.mojom.VideoDetailsSpec,
      }},
    })
};

// Union: CameraModule
ash.camera_app.mojom.CameraModuleSpec = { $: mojo.internal.Union(
    'ash.camera_app.mojom.CameraModule', {
      'mipi_camera': {
        'ordinal': 0,
        'type': ash.camera_app.mojom.MipiCameraModuleSpec,
      }},
      'usb_camera': {
        'ordinal': 1,
        'type': ash.camera_app.mojom.UsbCameraModuleSpec,
      }},
    })
};

// Struct: StartSessionEventParams
ash.camera_app.mojom.StartSessionEventParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.StartSessionEventParams',
      packedSize: 16,
      fields: [
        { name: 'launch_type', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.LaunchTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'is_video_snapshot', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'gif_result_type', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.GifResultTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'timelapse_speed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: VideoDetails
ash.camera_app.mojom.VideoDetailsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.VideoDetails',
      packedSize: 40,
      fields: [
        { name: 'is_muted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'fps', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'ever_paused', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'duration', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'record_type_details', packedOffset: 16, packedBitOffset: 0, type: ash.camera_app.mojom.RecordTypeDetailsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: CaptureEventParams
ash.camera_app.mojom.CaptureEventParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CaptureEventParams',
      packedSize: 80,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.ModeSpec, nullable: false, minVersion: 0 },
        { name: 'facing', packedOffset: 4, packedBitOffset: 0, type: ash.camera_app.mojom.FacingSpec, nullable: false, minVersion: 0 },
        { name: 'is_mirrored', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'grid_type', packedOffset: 12, packedBitOffset: 0, type: ash.camera_app.mojom.GridTypeSpec, nullable: false, minVersion: 0 },
        { name: 'timer_type', packedOffset: 16, packedBitOffset: 0, type: ash.camera_app.mojom.TimerTypeSpec, nullable: false, minVersion: 0 },
        { name: 'shutter_type', packedOffset: 20, packedBitOffset: 0, type: ash.camera_app.mojom.ShutterTypeSpec, nullable: false, minVersion: 0 },
        { name: 'android_intent_result_type', packedOffset: 24, packedBitOffset: 0, type: ash.camera_app.mojom.AndroidIntentResultTypeSpec, nullable: false, minVersion: 0 },
        { name: 'is_window_maximized', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_window_portrait', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'resolution_width', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'resolution_height', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'resolution_level', packedOffset: 36, packedBitOffset: 0, type: ash.camera_app.mojom.ResolutionLevelSpec, nullable: false, minVersion: 0 },
        { name: 'aspect_ratio_set', packedOffset: 40, packedBitOffset: 0, type: ash.camera_app.mojom.AspectRatioSetSpec, nullable: false, minVersion: 0 },
        { name: 'capture_details', packedOffset: 48, packedBitOffset: 0, type: ash.camera_app.mojom.CaptureDetailsSpec, nullable: true, minVersion: 0 },
        { name: 'zoom_ratio', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Struct: AndroidIntentEventParams
ash.camera_app.mojom.AndroidIntentEventParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.AndroidIntentEventParams',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.ModeSpec, nullable: false, minVersion: 0 },
        { name: 'should_handle_result', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'should_downscale', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_secure', packedOffset: 4, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'support_pan', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'support_tilt', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'support_zoom', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'action_type', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.DocScanActionTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DocScanResultEventParams
ash.camera_app.mojom.DocScanResultEventParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.DocScanResultEventParams',
      packedSize: 24,
      fields: [
        { name: 'result_type', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.DocScanResultTypeSpec, nullable: false, minVersion: 0 },
        { name: 'fix_types_mask', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'fix_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'page_count', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: OpenCameraEventParams
ash.camera_app.mojom.OpenCameraEventParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.OpenCameraEventParams',
      packedSize: 24,
      fields: [
        { name: 'camera_module', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.CameraModuleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'action_type', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.LowStorageActionTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: BarcodeDetectedEventParams
ash.camera_app.mojom.BarcodeDetectedEventParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.BarcodeDetectedEventParams',
      packedSize: 16,
      fields: [
        { name: 'content_type', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.BarcodeContentTypeSpec, nullable: false, minVersion: 0 },
        { name: 'wifi_security_type', packedOffset: 4, packedBitOffset: 0, type: ash.camera_app.mojom.WifiSecurityTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PerfEventParams
ash.camera_app.mojom.PerfEventParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.PerfEventParams',
      packedSize: 40,
      fields: [
        { name: 'event_type', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.PerfEventTypeSpec, nullable: false, minVersion: 0 },
        { name: 'duration', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'facing', packedOffset: 8, packedBitOffset: 0, type: ash.camera_app.mojom.FacingSpec, nullable: false, minVersion: 0 },
        { name: 'resolution_width', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'resolution_height', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'page_count', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pressure', packedOffset: 24, packedBitOffset: 0, type: ash.camera_app.mojom.PressureSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
        { name: 'behaviors_mask', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'memory_usage', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: OcrEventParams
ash.camera_app.mojom.OcrEventParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.OcrEventParams',
      packedSize: 24,
      fields: [
        { name: 'event_type', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.OcrEventTypeSpec, nullable: false, minVersion: 0 },
        { name: 'is_primary_language', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'line_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'word_count', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.StartSessionEventParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.CaptureEventParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.AndroidIntentEventParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.OpenPTZPanelEventParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.DocScanActionEventParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.DocScanResultEventParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.OpenCameraEventParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.LowStorageActionEventParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.BarcodeDetectedEventParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.PerfEventParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.MemoryUsageEventParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.OcrEventParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.camera_app.mojom.EventsSenderPtr = ash.camera_app.mojom.EventsSenderRemote;
ash.camera_app.mojom.EventsSenderRequest = ash.camera_app.mojom.EventsSenderPendingReceiver;

