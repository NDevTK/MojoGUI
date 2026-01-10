// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/effects_pipeline.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Enum: CameraEffect
cros.mojom.mojom.CameraEffect = {
  kBackgroundBlur: 0,
  kBackgroundReplace: 1,
  kPortraitRelight: 2,
};
cros.mojom.mojom.CameraEffectSpec = { $: mojo.internal.Enum() };

// Enum: GpuApi
cros.mojom.mojom.GpuApi = {
  kOpenCL: 0,
};
cros.mojom.mojom.GpuApiSpec = { $: mojo.internal.Enum() };

// Enum: SetEffectResult
cros.mojom.mojom.SetEffectResult = {
  kError: 0,
};
cros.mojom.mojom.SetEffectResultSpec = { $: mojo.internal.Enum() };

// Enum: BlurLevel
cros.mojom.mojom.BlurLevel = {
  kLowest: 0,
  kLight: 1,
  kHeavy: 2,
  kMaximum: 3,
};
cros.mojom.mojom.BlurLevelSpec = { $: mojo.internal.Enum() };

// Enum: SegmentationModel
cros.mojom.mojom.SegmentationModel = {
  kAuto: 0,
  kLowerResolution: 1,
};
cros.mojom.mojom.SegmentationModelSpec = { $: mojo.internal.Enum() };

// Enum: InferenceBackend
cros.mojom.mojom.InferenceBackend = {
  kGpu: 0,
  kNpu: 1,
};
cros.mojom.mojom.InferenceBackendSpec = { $: mojo.internal.Enum() };

// Struct: EffectsConfig
cros.mojom.mojom.EffectsConfigSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.EffectsConfig',
      packedSize: 56,
      fields: [
        { name: 'effect', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.CameraEffectSpec, nullable: false, minVersion: 0 },
        { name: 'blur_level', packedOffset: 4, packedBitOffset: 0, type: cros.mojom.BlurLevelSpec, nullable: false, minVersion: 0 },
        { name: 'segmentation_gpu_api', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.GpuApiSpec, nullable: false, minVersion: 0 },
        { name: 'graph_max_frames_in_flight', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'blur_enabled', packedOffset: 14, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 1 },
        { name: 'replace_enabled', packedOffset: 14, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 1 },
        { name: 'relight_enabled', packedOffset: 14, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 1 },
        { name: 'segmentation_model', packedOffset: 16, packedBitOffset: 0, type: cros.mojom.SegmentationModelSpec, nullable: false, minVersion: 2 },
        { name: 'background_filepath', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.RelativeFilePathSpec, nullable: true, minVersion: 3 },
        { name: 'light_intensity_$flag', packedOffset: 14, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 4, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'light_intensity_$value', originalFieldName: 'light_intensity' } },
        { name: 'light_intensity_$value', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 4, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'light_intensity_$flag', originalFieldName: 'light_intensity' } },
        { name: 'segmentation_inference_backend', packedOffset: 32, packedBitOffset: 0, type: cros.mojom.InferenceBackendSpec, nullable: false, minVersion: 5 },
        { name: 'relighting_inference_backend', packedOffset: 36, packedBitOffset: 0, type: cros.mojom.InferenceBackendSpec, nullable: false, minVersion: 5 },
        { name: 'retouch_enabled', packedOffset: 14, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 6 },
        { name: 'studio_look_enabled', packedOffset: 14, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 6 },
        { name: 'retouch_inference_backend', packedOffset: 40, packedBitOffset: 0, type: cros.mojom.InferenceBackendSpec, nullable: false, minVersion: 7 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 1, packedSize: 24}, {version: 2, packedSize: 32}, {version: 3, packedSize: 40}, {version: 4, packedSize: 40}, {version: 5, packedSize: 48}, {version: 6, packedSize: 48}, {version: 7, packedSize: 56}]
    }
  }
};
