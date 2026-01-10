// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/mojom/image_capture.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.BackgroundBlurModeSpec = { $: mojo.internal.Enum() };
media.mojom.EyeGazeCorrectionModeSpec = { $: mojo.internal.Enum() };
media.mojom.MeteringModeSpec = { $: mojo.internal.Enum() };
media.mojom.RedEyeReductionSpec = { $: mojo.internal.Enum() };
media.mojom.FillLightModeSpec = { $: mojo.internal.Enum() };
media.mojom.RangeSpec = { $: {} };
media.mojom.PhotoStateSpec = { $: {} };
media.mojom.Point2DSpec = { $: {} };
media.mojom.PhotoSettingsSpec = { $: {} };
media.mojom.BlobSpec = { $: {} };
media.mojom.ImageCapture = {};
media.mojom.ImageCapture.$interfaceName = 'media.mojom.ImageCapture';
media.mojom.ImageCapture_GetPhotoState_ParamsSpec = { $: {} };
media.mojom.ImageCapture_GetPhotoState_ResponseParamsSpec = { $: {} };
media.mojom.ImageCapture_SetPhotoOptions_ParamsSpec = { $: {} };
media.mojom.ImageCapture_SetPhotoOptions_ResponseParamsSpec = { $: {} };
media.mojom.ImageCapture_TakePhoto_ParamsSpec = { $: {} };
media.mojom.ImageCapture_TakePhoto_ResponseParamsSpec = { $: {} };

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
mojo.internal.Struct(
    media.mojom.RangeSpec, 'media.mojom.Range', [
      mojo.internal.StructField('max', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('min', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('current', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('step', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PhotoState
mojo.internal.Struct(
    media.mojom.PhotoStateSpec, 'media.mojom.PhotoState', [
      mojo.internal.StructField('supported_white_balance_modes', 0, 0, mojo.internal.Array(media.mojom.MeteringModeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('current_white_balance_mode', 8, 0, media.mojom.MeteringModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('supported_exposure_modes', 16, 0, mojo.internal.Array(media.mojom.MeteringModeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('current_exposure_mode', 24, 0, media.mojom.MeteringModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('supported_focus_modes', 32, 0, mojo.internal.Array(media.mojom.MeteringModeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('current_focus_mode', 40, 0, media.mojom.MeteringModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('points_of_interest', 48, 0, mojo.internal.Array(media.mojom.Point2DSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('exposure_compensation', 56, 0, media.mojom.RangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('exposure_time', 64, 0, media.mojom.RangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('color_temperature', 72, 0, media.mojom.RangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('iso', 80, 0, media.mojom.RangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('brightness', 88, 0, media.mojom.RangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('contrast', 96, 0, media.mojom.RangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('saturation', 104, 0, media.mojom.RangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('sharpness', 112, 0, media.mojom.RangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('focus_distance', 120, 0, media.mojom.RangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('pan', 128, 0, media.mojom.RangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('tilt', 136, 0, media.mojom.RangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('zoom', 144, 0, media.mojom.RangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('supports_torch', 152, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('torch', 152, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('red_eye_reduction', 156, 0, media.mojom.RedEyeReductionSpec, null, false, 0, undefined),
      mojo.internal.StructField('height', 160, 0, media.mojom.RangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('width', 168, 0, media.mojom.RangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('fill_light_mode', 176, 0, mojo.internal.Array(media.mojom.FillLightModeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('supported_background_blur_modes', 184, 0, mojo.internal.Array(media.mojom.BackgroundBlurModeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('background_blur_mode', 192, 0, media.mojom.BackgroundBlurModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('supported_face_framing_modes', 200, 0, mojo.internal.Array(media.mojom.MeteringModeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('current_face_framing_mode', 208, 0, media.mojom.MeteringModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('supported_eye_gaze_correction_modes', 216, 0, mojo.internal.Array(media.mojom.EyeGazeCorrectionModeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('current_eye_gaze_correction_mode', 224, 0, media.mojom.EyeGazeCorrectionModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('supported_background_segmentation_mask_states', 232, 0, mojo.internal.Array(mojo.internal.Bool, false), null, false, 0, undefined),
      mojo.internal.StructField('current_background_segmentation_mask_state', 240, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 256]]);

// Struct: Point2D
mojo.internal.Struct(
    media.mojom.Point2DSpec, 'media.mojom.Point2D', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('y', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PhotoSettings
mojo.internal.Struct(
    media.mojom.PhotoSettingsSpec, 'media.mojom.PhotoSettings', [
      mojo.internal.StructField('has_white_balance_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('white_balance_mode', 4, 0, media.mojom.MeteringModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('has_exposure_mode', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('exposure_mode', 12, 0, media.mojom.MeteringModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('has_focus_mode', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('focus_mode', 20, 0, media.mojom.MeteringModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('points_of_interest', 24, 0, mojo.internal.Array(media.mojom.Point2DSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('has_exposure_compensation', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('exposure_compensation', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('has_exposure_time', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('exposure_time', 56, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('has_color_temperature', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('color_temperature', 72, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('has_iso', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('iso', 88, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('has_brightness', 96, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('brightness', 104, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('has_contrast', 112, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('contrast', 120, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('has_saturation', 128, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('saturation', 136, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('has_sharpness', 144, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sharpness', 152, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('has_focus_distance', 160, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('focus_distance', 168, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('has_pan', 176, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('pan', 184, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('has_tilt', 192, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('tilt', 200, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('has_zoom', 208, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('zoom', 216, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('has_torch', 224, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('torch', 224, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_fill_light_mode', 224, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('fill_light_mode', 228, 0, media.mojom.FillLightModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('has_width', 232, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('width', 240, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('has_height', 248, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('height', 256, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('has_red_eye_reduction', 264, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('red_eye_reduction', 264, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_background_blur_mode', 264, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('background_blur_mode', 268, 0, media.mojom.BackgroundBlurModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('has_face_framing_mode', 272, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('face_framing_mode', 276, 0, media.mojom.MeteringModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('eye_gaze_correction_mode', 280, 0, media.mojom.EyeGazeCorrectionModeSpec, null, true, 0, undefined),
      mojo.internal.StructField('background_segmentation_mask_state_$flag', 284, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'background_segmentation_mask_state_$value', originalFieldName: 'background_segmentation_mask_state' }),
      mojo.internal.StructField('background_segmentation_mask_state_$value', 284, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'background_segmentation_mask_state_$flag', originalFieldName: 'background_segmentation_mask_state' }),
    ],
    [[0, 296]]);

// Struct: Blob
mojo.internal.Struct(
    media.mojom.BlobSpec, 'media.mojom.Blob', [
      mojo.internal.StructField('mime_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ImageCapture
mojo.internal.Struct(
    media.mojom.ImageCapture_GetPhotoState_ParamsSpec, 'media.mojom.ImageCapture_GetPhotoState_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.ImageCapture_GetPhotoState_ResponseParamsSpec, 'media.mojom.ImageCapture_GetPhotoState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, media.mojom.PhotoStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.ImageCapture_SetPhotoOptions_ParamsSpec, 'media.mojom.ImageCapture_SetPhotoOptions_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('settings', 8, 0, media.mojom.PhotoSettingsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.ImageCapture_SetPhotoOptions_ResponseParamsSpec, 'media.mojom.ImageCapture_SetPhotoOptions_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.ImageCapture_TakePhoto_ParamsSpec, 'media.mojom.ImageCapture_TakePhoto_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.ImageCapture_TakePhoto_ResponseParamsSpec, 'media.mojom.ImageCapture_TakePhoto_ResponseParams', [
      mojo.internal.StructField('blob', 0, 0, media.mojom.BlobSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [source_id],
      false);
  }

  setPhotoOptions(source_id, settings) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.ImageCapture_SetPhotoOptions_ParamsSpec,
      media.mojom.ImageCapture_SetPhotoOptions_ResponseParamsSpec,
      [source_id, settings],
      false);
  }

  takePhoto(source_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.ImageCapture_TakePhoto_ParamsSpec,
      media.mojom.ImageCapture_TakePhoto_ResponseParamsSpec,
      [source_id],
      false);
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

media.mojom.ImageCapturePtr = media.mojom.ImageCaptureRemote;
media.mojom.ImageCaptureRequest = media.mojom.ImageCapturePendingReceiver;

