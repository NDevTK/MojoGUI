// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/effects_pipeline.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Enum: CameraEffect
cros.mojom.CameraEffect = {
  kBackgroundBlur: 0,
  kBackgroundReplace: 1,
  kPortraitRelight: 2,
};

// Enum: GpuApi
cros.mojom.GpuApi = {
  kOpenCL: 0,
};

// Enum: SetEffectResult
cros.mojom.SetEffectResult = {
  kError: 0,
};

// Enum: BlurLevel
cros.mojom.BlurLevel = {
  kLowest: 0,
  kLight: 1,
  kHeavy: 2,
  kMaximum: 3,
};

// Enum: SegmentationModel
cros.mojom.SegmentationModel = {
  kAuto: 0,
  kLowerResolution: 1,
};

// Enum: InferenceBackend
cros.mojom.InferenceBackend = {
  kGpu: 0,
  kNpu: 1,
};

// Struct: EffectsConfig
cros.mojom.EffectsConfigSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.EffectsConfig',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};
