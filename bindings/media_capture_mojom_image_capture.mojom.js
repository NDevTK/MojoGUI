// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/mojom/image_capture.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: BackgroundBlurMode
media.mojom.BackgroundBlurMode = {
  OFF: 0,
  BLUR: 1,
};

// Enum: EyeGazeCorrectionMode
media.mojom.EyeGazeCorrectionMode = {
  OFF: 0,
  ON: 1,
  STARE: 2,
};

// Enum: MeteringMode
media.mojom.MeteringMode = {
  NONE: 0,
  MANUAL: 1,
  SINGLE_SHOT: 2,
  CONTINUOUS: 3,
};

// Enum: RedEyeReduction
media.mojom.RedEyeReduction = {
  NEVER: 0,
  ALWAYS: 1,
  CONTROLLABLE: 2,
};

// Enum: FillLightMode
media.mojom.FillLightMode = {
  OFF: 0,
  AUTO: 1,
  FLASH: 2,
};

// Struct: Range
media.mojom.RangeSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Range',
      packedSize: 40,
      fields: [
        { name: 'max', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'min', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'current', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'step', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PhotoState
media.mojom.PhotoStateSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PhotoState',
      packedSize: 264,
      fields: [
        { name: 'supported_white_balance_modes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'current_white_balance_mode', packedOffset: 16, packedBitOffset: 0, type: media.mojom.MeteringModeSpec, nullable: false },
        { name: 'supported_exposure_modes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'current_exposure_mode', packedOffset: 32, packedBitOffset: 0, type: media.mojom.MeteringModeSpec, nullable: false },
        { name: 'supported_focus_modes', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'current_focus_mode', packedOffset: 48, packedBitOffset: 0, type: media.mojom.MeteringModeSpec, nullable: false },
        { name: 'points_of_interest', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'exposure_compensation', packedOffset: 64, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false },
        { name: 'exposure_time', packedOffset: 72, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false },
        { name: 'color_temperature', packedOffset: 80, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false },
        { name: 'iso', packedOffset: 88, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false },
        { name: 'brightness', packedOffset: 96, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false },
        { name: 'contrast', packedOffset: 104, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false },
        { name: 'saturation', packedOffset: 112, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false },
        { name: 'sharpness', packedOffset: 120, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false },
        { name: 'focus_distance', packedOffset: 128, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false },
        { name: 'pan', packedOffset: 136, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false },
        { name: 'tilt', packedOffset: 144, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false },
        { name: 'zoom', packedOffset: 152, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false },
        { name: 'supports_torch', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'torch', packedOffset: 160, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'red_eye_reduction', packedOffset: 168, packedBitOffset: 0, type: media.mojom.RedEyeReductionSpec, nullable: false },
        { name: 'height', packedOffset: 176, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false },
        { name: 'width', packedOffset: 184, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false },
        { name: 'fill_light_mode', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'supported_background_blur_modes', packedOffset: 200, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'background_blur_mode', packedOffset: 208, packedBitOffset: 0, type: media.mojom.BackgroundBlurModeSpec, nullable: false },
        { name: 'supported_face_framing_modes', packedOffset: 216, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'current_face_framing_mode', packedOffset: 224, packedBitOffset: 0, type: media.mojom.MeteringModeSpec, nullable: false },
        { name: 'supported_eye_gaze_correction_modes', packedOffset: 232, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'current_eye_gaze_correction_mode', packedOffset: 240, packedBitOffset: 0, type: media.mojom.EyeGazeCorrectionModeSpec, nullable: false },
        { name: 'supported_background_segmentation_mask_states', packedOffset: 248, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'current_background_segmentation_mask_state', packedOffset: 256, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Point2D
media.mojom.Point2DSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Point2D',
      packedSize: 24,
      fields: [
        { name: 'x', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'y', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PhotoSettings
media.mojom.PhotoSettingsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PhotoSettings',
      packedSize: 352,
      fields: [
        { name: 'has_white_balance_mode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'white_balance_mode', packedOffset: 16, packedBitOffset: 0, type: media.mojom.MeteringModeSpec, nullable: false },
        { name: 'has_exposure_mode', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'exposure_mode', packedOffset: 32, packedBitOffset: 0, type: media.mojom.MeteringModeSpec, nullable: false },
        { name: 'has_focus_mode', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'focus_mode', packedOffset: 48, packedBitOffset: 0, type: media.mojom.MeteringModeSpec, nullable: false },
        { name: 'points_of_interest', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'has_exposure_compensation', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'exposure_compensation', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'has_exposure_time', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'exposure_time', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'has_color_temperature', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'color_temperature', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'has_iso', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'iso', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'has_brightness', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'brightness', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'has_contrast', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'contrast', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'has_saturation', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'saturation', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'has_sharpness', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'sharpness', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'has_focus_distance', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'focus_distance', packedOffset: 200, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'has_pan', packedOffset: 208, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'pan', packedOffset: 216, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'has_tilt', packedOffset: 224, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'tilt', packedOffset: 232, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'has_zoom', packedOffset: 240, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'zoom', packedOffset: 248, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'has_torch', packedOffset: 256, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'torch', packedOffset: 256, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'has_fill_light_mode', packedOffset: 256, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'fill_light_mode', packedOffset: 264, packedBitOffset: 0, type: media.mojom.FillLightModeSpec, nullable: false },
        { name: 'has_width', packedOffset: 272, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'width', packedOffset: 280, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'has_height', packedOffset: 288, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'height', packedOffset: 296, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'has_red_eye_reduction', packedOffset: 304, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'red_eye_reduction', packedOffset: 304, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'has_background_blur_mode', packedOffset: 304, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'background_blur_mode', packedOffset: 312, packedBitOffset: 0, type: media.mojom.BackgroundBlurModeSpec, nullable: false },
        { name: 'has_face_framing_mode', packedOffset: 320, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'face_framing_mode', packedOffset: 328, packedBitOffset: 0, type: media.mojom.MeteringModeSpec, nullable: false },
        { name: 'eye_gaze_correction_mode', packedOffset: 336, packedBitOffset: 0, type: media.mojom.EyeGazeCorrectionModeSpec, nullable: true },
        { name: 'background_segmentation_mask_state', packedOffset: 344, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Blob
media.mojom.BlobSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Blob',
      packedSize: 24,
      fields: [
        { name: 'mime_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ImageCapture
media.mojom.ImageCapture = {};

media.mojom.ImageCapturePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.ImageCaptureRemote = class {
  static get $interfaceName() {
    return 'media.mojom.ImageCapture';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.ImageCapturePendingReceiver,
      handle);
    this.$ = new media.mojom.ImageCaptureRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.ImageCaptureRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPhotoState(source_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.ImageCapture_GetPhotoState_ParamsSpec,
      media.mojom.ImageCapture_GetPhotoState_ResponseParamsSpec,
      [source_id]);
  }

  setPhotoOptions(source_id, settings) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.ImageCapture_SetPhotoOptions_ParamsSpec,
      media.mojom.ImageCapture_SetPhotoOptions_ResponseParamsSpec,
      [source_id, settings]);
  }

  takePhoto(source_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.ImageCapture_TakePhoto_ParamsSpec,
      media.mojom.ImageCapture_TakePhoto_ResponseParamsSpec,
      [source_id]);
  }

};

media.mojom.ImageCapture.getRemote = function() {
  let remote = new media.mojom.ImageCaptureRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.ImageCapture',
    'context');
  return remote.$;
};

// ParamsSpec for GetPhotoState
media.mojom.ImageCapture_GetPhotoState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ImageCapture.GetPhotoState_Params',
      packedSize: 16,
      fields: [
        { name: 'source_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.ImageCapture_GetPhotoState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ImageCapture.GetPhotoState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: media.mojom.PhotoStateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPhotoOptions
media.mojom.ImageCapture_SetPhotoOptions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ImageCapture.SetPhotoOptions_Params',
      packedSize: 24,
      fields: [
        { name: 'source_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'settings', packedOffset: 16, packedBitOffset: 0, type: media.mojom.PhotoSettingsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.ImageCapture_SetPhotoOptions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ImageCapture.SetPhotoOptions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TakePhoto
media.mojom.ImageCapture_TakePhoto_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ImageCapture.TakePhoto_Params',
      packedSize: 16,
      fields: [
        { name: 'source_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.ImageCapture_TakePhoto_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ImageCapture.TakePhoto_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'blob', packedOffset: 8, packedBitOffset: 0, type: media.mojom.BlobSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.ImageCapturePtr = media.mojom.ImageCaptureRemote;
media.mojom.ImageCaptureRequest = media.mojom.ImageCapturePendingReceiver;

