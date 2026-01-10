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
media.mojom.BackgroundBlurModeSpec = { $: mojo.internal.Enum() };

// Enum: EyeGazeCorrectionMode
media.mojom.EyeGazeCorrectionMode = {
  OFF: 0,
  ON: 1,
  STARE: 2,
};
media.mojom.EyeGazeCorrectionModeSpec = { $: mojo.internal.Enum() };

// Enum: MeteringMode
media.mojom.MeteringMode = {
  NONE: 0,
  MANUAL: 1,
  SINGLE_SHOT: 2,
  CONTINUOUS: 3,
};
media.mojom.MeteringModeSpec = { $: mojo.internal.Enum() };

// Enum: RedEyeReduction
media.mojom.RedEyeReduction = {
  NEVER: 0,
  ALWAYS: 1,
  CONTROLLABLE: 2,
};
media.mojom.RedEyeReductionSpec = { $: mojo.internal.Enum() };

// Enum: FillLightMode
media.mojom.FillLightMode = {
  OFF: 0,
  AUTO: 1,
  FLASH: 2,
};
media.mojom.FillLightModeSpec = { $: mojo.internal.Enum() };

// Struct: Range
media.mojom.RangeSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Range',
      packedSize: 40,
      fields: [
        { name: 'max', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'min', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'current', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'step', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: PhotoState
media.mojom.PhotoStateSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PhotoState',
      packedSize: 224,
      fields: [
        { name: 'supported_white_balance_modes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.MeteringModeSpec, false), nullable: false, minVersion: 0 },
        { name: 'current_white_balance_mode', packedOffset: 184, packedBitOffset: 0, type: media.mojom.MeteringModeSpec, nullable: false, minVersion: 0 },
        { name: 'supported_exposure_modes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.MeteringModeSpec, false), nullable: false, minVersion: 0 },
        { name: 'current_exposure_mode', packedOffset: 188, packedBitOffset: 0, type: media.mojom.MeteringModeSpec, nullable: false, minVersion: 0 },
        { name: 'supported_focus_modes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.MeteringModeSpec, false), nullable: false, minVersion: 0 },
        { name: 'current_focus_mode', packedOffset: 192, packedBitOffset: 0, type: media.mojom.MeteringModeSpec, nullable: false, minVersion: 0 },
        { name: 'points_of_interest', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.Point2DSpec, false), nullable: false, minVersion: 0 },
        { name: 'exposure_compensation', packedOffset: 32, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'exposure_time', packedOffset: 40, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'color_temperature', packedOffset: 48, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'iso', packedOffset: 56, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'brightness', packedOffset: 64, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'contrast', packedOffset: 72, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'saturation', packedOffset: 80, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'sharpness', packedOffset: 88, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'focus_distance', packedOffset: 96, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'pan', packedOffset: 104, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'tilt', packedOffset: 112, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'zoom', packedOffset: 120, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'supports_torch', packedOffset: 212, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'torch', packedOffset: 212, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'red_eye_reduction', packedOffset: 196, packedBitOffset: 0, type: media.mojom.RedEyeReductionSpec, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 128, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'width', packedOffset: 136, packedBitOffset: 0, type: media.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'fill_light_mode', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.FillLightModeSpec, false), nullable: false, minVersion: 0 },
        { name: 'supported_background_blur_modes', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.BackgroundBlurModeSpec, false), nullable: false, minVersion: 0 },
        { name: 'background_blur_mode', packedOffset: 200, packedBitOffset: 0, type: media.mojom.BackgroundBlurModeSpec, nullable: false, minVersion: 0 },
        { name: 'supported_face_framing_modes', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.MeteringModeSpec, false), nullable: false, minVersion: 0 },
        { name: 'current_face_framing_mode', packedOffset: 204, packedBitOffset: 0, type: media.mojom.MeteringModeSpec, nullable: false, minVersion: 0 },
        { name: 'supported_eye_gaze_correction_modes', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.EyeGazeCorrectionModeSpec, false), nullable: false, minVersion: 0 },
        { name: 'current_eye_gaze_correction_mode', packedOffset: 208, packedBitOffset: 0, type: media.mojom.EyeGazeCorrectionModeSpec, nullable: false, minVersion: 0 },
        { name: 'supported_background_segmentation_mask_states', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Bool, false), nullable: false, minVersion: 0 },
        { name: 'current_background_segmentation_mask_state', packedOffset: 212, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 224}]
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
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'y', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PhotoSettings
media.mojom.PhotoSettingsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PhotoSettings',
      packedSize: 160,
      fields: [
        { name: 'has_white_balance_mode', packedOffset: 148, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'white_balance_mode', packedOffset: 120, packedBitOffset: 0, type: media.mojom.MeteringModeSpec, nullable: false, minVersion: 0 },
        { name: 'has_exposure_mode', packedOffset: 148, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'exposure_mode', packedOffset: 124, packedBitOffset: 0, type: media.mojom.MeteringModeSpec, nullable: false, minVersion: 0 },
        { name: 'has_focus_mode', packedOffset: 148, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'focus_mode', packedOffset: 128, packedBitOffset: 0, type: media.mojom.MeteringModeSpec, nullable: false, minVersion: 0 },
        { name: 'points_of_interest', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.Point2DSpec, false), nullable: false, minVersion: 0 },
        { name: 'has_exposure_compensation', packedOffset: 148, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'exposure_compensation', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'has_exposure_time', packedOffset: 148, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'exposure_time', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'has_color_temperature', packedOffset: 148, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'color_temperature', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'has_iso', packedOffset: 148, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'iso', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'has_brightness', packedOffset: 148, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'brightness', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'has_contrast', packedOffset: 149, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'contrast', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'has_saturation', packedOffset: 149, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'saturation', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'has_sharpness', packedOffset: 149, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sharpness', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'has_focus_distance', packedOffset: 149, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'focus_distance', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'has_pan', packedOffset: 149, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'pan', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'has_tilt', packedOffset: 149, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'tilt', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'has_zoom', packedOffset: 149, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'zoom', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'has_torch', packedOffset: 149, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'torch', packedOffset: 150, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_fill_light_mode', packedOffset: 150, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'fill_light_mode', packedOffset: 132, packedBitOffset: 0, type: media.mojom.FillLightModeSpec, nullable: false, minVersion: 0 },
        { name: 'has_width', packedOffset: 150, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'width', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'has_height', packedOffset: 150, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'has_red_eye_reduction', packedOffset: 150, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'red_eye_reduction', packedOffset: 150, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_background_blur_mode', packedOffset: 150, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'background_blur_mode', packedOffset: 136, packedBitOffset: 0, type: media.mojom.BackgroundBlurModeSpec, nullable: false, minVersion: 0 },
        { name: 'has_face_framing_mode', packedOffset: 150, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'face_framing_mode', packedOffset: 140, packedBitOffset: 0, type: media.mojom.MeteringModeSpec, nullable: false, minVersion: 0 },
        { name: 'eye_gaze_correction_mode', packedOffset: 144, packedBitOffset: 0, type: media.mojom.EyeGazeCorrectionModeSpec, nullable: true, minVersion: 0 },
        { name: 'background_segmentation_mask_state_$flag', packedOffset: 151, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'background_segmentation_mask_state_$value', originalFieldName: 'background_segmentation_mask_state' } },
        { name: 'background_segmentation_mask_state_$value', packedOffset: 151, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'background_segmentation_mask_state_$flag', originalFieldName: 'background_segmentation_mask_state' } },
      ],
      versions: [{version: 0, packedSize: 160}]
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
        { name: 'mime_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: ImageCapture
media.mojom.ImageCapture = {};

media.mojom.ImageCapture_GetPhotoState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ImageCapture_GetPhotoState_Params',
      packedSize: 16,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.ImageCapture_SetPhotoOptions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ImageCapture_SetPhotoOptions_Params',
      packedSize: 24,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 8, packedBitOffset: 0, type: media.mojom.PhotoSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.ImageCapture_TakePhoto_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ImageCapture_TakePhoto_Params',
      packedSize: 16,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.ImageCapture_GetPhotoState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ImageCapture.GetPhotoState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: media.mojom.PhotoStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 8, packedBitOffset: 0, type: media.mojom.PhotoSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.ImageCapture_SetPhotoOptions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ImageCapture.SetPhotoOptions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.ImageCapture_TakePhoto_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ImageCapture.TakePhoto_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'blob', packedOffset: 0, packedBitOffset: 0, type: media.mojom.BlobSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.ImageCapturePtr = media.mojom.ImageCaptureRemote;
media.mojom.ImageCaptureRequest = media.mojom.ImageCapturePendingReceiver;

