// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/camera_app_ui/events_sender.mojom
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
  sendStartSessionEvent(params) {
    return this.$.sendStartSessionEvent(params);
  }
  sendCaptureEvent(params) {
    return this.$.sendCaptureEvent(params);
  }
  sendAndroidIntentEvent(params) {
    return this.$.sendAndroidIntentEvent(params);
  }
  sendOpenPTZPanelEvent(params) {
    return this.$.sendOpenPTZPanelEvent(params);
  }
  sendDocScanActionEvent(params) {
    return this.$.sendDocScanActionEvent(params);
  }
  sendDocScanResultEvent(params) {
    return this.$.sendDocScanResultEvent(params);
  }
  sendOpenCameraEvent(params) {
    return this.$.sendOpenCameraEvent(params);
  }
  sendLowStorageActionEvent(params) {
    return this.$.sendLowStorageActionEvent(params);
  }
  sendBarcodeDetectedEvent(params) {
    return this.$.sendBarcodeDetectedEvent(params);
  }
  sendPerfEvent(params) {
    return this.$.sendPerfEvent(params);
  }
  sendUnsupportedProtocolEvent() {
    return this.$.sendUnsupportedProtocolEvent();
  }
  updateMemoryUsageEventParams(params) {
    return this.$.updateMemoryUsageEventParams(params);
  }
  sendOcrEvent(params) {
    return this.$.sendOcrEvent(params);
  }
};

ash.camera_app.mojom.EventsSenderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EventsSender', [
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

  sendStartSessionEvent(params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.camera_app.mojom.EventsSender_SendStartSessionEvent_ParamsSpec,
      null,
      [params],
      false);
  }

  sendCaptureEvent(params) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.camera_app.mojom.EventsSender_SendCaptureEvent_ParamsSpec,
      null,
      [params],
      false);
  }

  sendAndroidIntentEvent(params) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.camera_app.mojom.EventsSender_SendAndroidIntentEvent_ParamsSpec,
      null,
      [params],
      false);
  }

  sendOpenPTZPanelEvent(params) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.camera_app.mojom.EventsSender_SendOpenPTZPanelEvent_ParamsSpec,
      null,
      [params],
      false);
  }

  sendDocScanActionEvent(params) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.camera_app.mojom.EventsSender_SendDocScanActionEvent_ParamsSpec,
      null,
      [params],
      false);
  }

  sendDocScanResultEvent(params) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.camera_app.mojom.EventsSender_SendDocScanResultEvent_ParamsSpec,
      null,
      [params],
      false);
  }

  sendOpenCameraEvent(params) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.camera_app.mojom.EventsSender_SendOpenCameraEvent_ParamsSpec,
      null,
      [params],
      false);
  }

  sendLowStorageActionEvent(params) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.camera_app.mojom.EventsSender_SendLowStorageActionEvent_ParamsSpec,
      null,
      [params],
      false);
  }

  sendBarcodeDetectedEvent(params) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.camera_app.mojom.EventsSender_SendBarcodeDetectedEvent_ParamsSpec,
      null,
      [params],
      false);
  }

  sendPerfEvent(params) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.camera_app.mojom.EventsSender_SendPerfEvent_ParamsSpec,
      null,
      [params],
      false);
  }

  sendUnsupportedProtocolEvent() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.camera_app.mojom.EventsSender_SendUnsupportedProtocolEvent_ParamsSpec,
      null,
      [],
      false);
  }

  updateMemoryUsageEventParams(params) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      ash.camera_app.mojom.EventsSender_UpdateMemoryUsageEventParams_ParamsSpec,
      null,
      [params],
      false);
  }

  sendOcrEvent(params) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EventsSender', [
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
        
        // Try Method 0: SendStartSessionEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendStartSessionEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendStartSessionEvent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SendCaptureEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendCaptureEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendCaptureEvent (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SendAndroidIntentEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendAndroidIntentEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendAndroidIntentEvent (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SendOpenPTZPanelEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendOpenPTZPanelEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOpenPTZPanelEvent (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SendDocScanActionEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendDocScanActionEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendDocScanActionEvent (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SendDocScanResultEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendDocScanResultEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendDocScanResultEvent (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SendOpenCameraEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendOpenCameraEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOpenCameraEvent (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SendLowStorageActionEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendLowStorageActionEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendLowStorageActionEvent (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SendBarcodeDetectedEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendBarcodeDetectedEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendBarcodeDetectedEvent (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SendPerfEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendPerfEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendPerfEvent (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SendUnsupportedProtocolEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendUnsupportedProtocolEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendUnsupportedProtocolEvent (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: UpdateMemoryUsageEventParams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_UpdateMemoryUsageEventParams_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateMemoryUsageEventParams (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SendOcrEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendOcrEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOcrEvent (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendStartSessionEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendStartSessionEvent');
          const result = this.impl.sendStartSessionEvent(params.params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendCaptureEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendCaptureEvent');
          const result = this.impl.sendCaptureEvent(params.params);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendAndroidIntentEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendAndroidIntentEvent');
          const result = this.impl.sendAndroidIntentEvent(params.params);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendOpenPTZPanelEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOpenPTZPanelEvent');
          const result = this.impl.sendOpenPTZPanelEvent(params.params);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendDocScanActionEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendDocScanActionEvent');
          const result = this.impl.sendDocScanActionEvent(params.params);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendDocScanResultEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendDocScanResultEvent');
          const result = this.impl.sendDocScanResultEvent(params.params);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendOpenCameraEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOpenCameraEvent');
          const result = this.impl.sendOpenCameraEvent(params.params);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendLowStorageActionEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendLowStorageActionEvent');
          const result = this.impl.sendLowStorageActionEvent(params.params);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendBarcodeDetectedEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendBarcodeDetectedEvent');
          const result = this.impl.sendBarcodeDetectedEvent(params.params);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendPerfEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendPerfEvent');
          const result = this.impl.sendPerfEvent(params.params);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendUnsupportedProtocolEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendUnsupportedProtocolEvent');
          const result = this.impl.sendUnsupportedProtocolEvent();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_UpdateMemoryUsageEventParams_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateMemoryUsageEventParams');
          const result = this.impl.updateMemoryUsageEventParams(params.params);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.EventsSender_SendOcrEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOcrEvent');
          const result = this.impl.sendOcrEvent(params.params);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.camera_app.mojom.EventsSenderReceiver = ash.camera_app.mojom.EventsSenderReceiver;

ash.camera_app.mojom.EventsSenderPtr = ash.camera_app.mojom.EventsSenderRemote;
ash.camera_app.mojom.EventsSenderRequest = ash.camera_app.mojom.EventsSenderPendingReceiver;

