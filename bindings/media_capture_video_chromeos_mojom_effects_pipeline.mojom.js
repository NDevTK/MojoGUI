// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/effects_pipeline.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};
var mojo_base = mojo_base || {};

cros.mojom.CameraEffectSpec = { $: mojo.internal.Enum() };
cros.mojom.GpuApiSpec = { $: mojo.internal.Enum() };
cros.mojom.SetEffectResultSpec = { $: mojo.internal.Enum() };
cros.mojom.BlurLevelSpec = { $: mojo.internal.Enum() };
cros.mojom.SegmentationModelSpec = { $: mojo.internal.Enum() };
cros.mojom.InferenceBackendSpec = { $: mojo.internal.Enum() };
cros.mojom.EffectsConfigSpec = { $: {} };

// Enum: CameraEffect
cros.mojom.CameraEffect = {
  kNone: 0,
  kBackgroundBlur: 1,
  kBackgroundReplace: 2,
  kPortraitRelight: 3,
};

// Enum: GpuApi
cros.mojom.GpuApi = {
  kOpenCL: 0,
  kOpenGL: 1,
};

// Enum: SetEffectResult
cros.mojom.SetEffectResult = {
  kOk: 0,
  kError: 1,
};

// Enum: BlurLevel
cros.mojom.BlurLevel = {
  kLowest: 0,
  kLight: 1,
  kMedium: 2,
  kHeavy: 3,
  kMaximum: 4,
};

// Enum: SegmentationModel
cros.mojom.SegmentationModel = {
  kAuto: 0,
  kHighResolution: 1,
  kLowerResolution: 2,
};

// Enum: InferenceBackend
cros.mojom.InferenceBackend = {
  kGpu: 0,
  kNpu: 1,
  kAuto: 2,
};

// Struct: EffectsConfig
mojo.internal.Struct(
    cros.mojom.EffectsConfigSpec, 'cros.mojom.EffectsConfig', [
      mojo.internal.StructField('effect', 0, 0, cros.mojom.CameraEffectSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('blur_level', 8, 0, cros.mojom.BlurLevelSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('segmentation_gpu_api', 16, 0, cros.mojom.GpuApiSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('graph_max_frames_in_flight', 24, 0, mojo.internal.Uint16, 2, false, 0, undefined),
      mojo.internal.StructField('blur_enabled', 26, 0, mojo.internal.Bool, false, false, 1, undefined),
      mojo.internal.StructField('replace_enabled', 26, 1, mojo.internal.Bool, false, false, 1, undefined),
      mojo.internal.StructField('relight_enabled', 26, 2, mojo.internal.Bool, false, false, 1, undefined),
      mojo.internal.StructField('segmentation_model', 32, 0, cros.mojom.SegmentationModelSpec.$, null, false, 2, undefined),
      mojo.internal.StructField('background_filepath', 40, 0, mojo_base.mojom.RelativeFilePathSpec.$, null, true, 3, undefined),
      mojo.internal.StructField('light_intensity_$value', 48, 0, mojo.internal.Float, 0, false, 4, { isPrimary: false, linkedValueFieldName: 'light_intensity_$flag', originalFieldName: 'light_intensity' }),
      mojo.internal.StructField('light_intensity_$flag', 52, 0, mojo.internal.Bool, false, false, 4, { isPrimary: true, linkedValueFieldName: 'light_intensity_$value', originalFieldName: 'light_intensity' }),
      mojo.internal.StructField('segmentation_inference_backend', 56, 0, cros.mojom.InferenceBackendSpec.$, null, false, 5, undefined),
      mojo.internal.StructField('relighting_inference_backend', 64, 0, cros.mojom.InferenceBackendSpec.$, null, false, 5, undefined),
      mojo.internal.StructField('retouch_enabled', 72, 0, mojo.internal.Bool, false, false, 6, undefined),
      mojo.internal.StructField('studio_look_enabled', 72, 1, mojo.internal.Bool, true, false, 6, undefined),
      mojo.internal.StructField('retouch_inference_backend', 80, 0, cros.mojom.InferenceBackendSpec.$, null, false, 7, undefined),
    ],
    [[0, 40], [1, 40], [2, 48], [3, 56], [4, 64], [5, 80], [6, 88], [7, 96]]);
