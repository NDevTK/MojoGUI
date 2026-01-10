// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/gpu_info.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Enum: SkiaBackendType
gpu.mojom.SkiaBackendType = {
  kUnknown: 0,
  kNone: 1,
  kGaneshGL: 2,
  kGaneshVulkan: 3,
  kGraphiteDawnVulkan: 4,
  kGraphiteDawnMetal: 5,
  kGraphiteDawnD3D11: 6,
  kGraphiteDawnD3D12: 7,
  kGraphiteMetal: 8,
};
gpu.mojom.SkiaBackendTypeSpec = { $: mojo.internal.Enum() };

// Enum: VideoCodecProfile
gpu.mojom.VideoCodecProfile = {
  VIDEO_CODEC_PROFILE_UNKNOWN: 0,
  H264PROFILE_BASELINE: 1,
  H264PROFILE_MAIN: 2,
  H264PROFILE_EXTENDED: 3,
  H264PROFILE_HIGH: 4,
  H264PROFILE_HIGH10PROFILE: 5,
  H264PROFILE_HIGH422PROFILE: 6,
  H264PROFILE_HIGH444PREDICTIVEPROFILE: 7,
  H264PROFILE_SCALABLEBASELINE: 8,
  H264PROFILE_SCALABLEHIGH: 9,
  H264PROFILE_STEREOHIGH: 10,
  H264PROFILE_MULTIVIEWHIGH: 11,
  VP8PROFILE_ANY: 12,
  VP9PROFILE_PROFILE0: 13,
  VP9PROFILE_PROFILE1: 14,
  VP9PROFILE_PROFILE2: 15,
  VP9PROFILE_PROFILE3: 16,
  HEVCPROFILE_MAIN: 17,
  HEVCPROFILE_MAIN10: 18,
  HEVCPROFILE_MAIN_STILL_PICTURE: 19,
  DOLBYVISION_PROFILE0: 20,
  DOLBYVISION_PROFILE5: 21,
  DOLBYVISION_PROFILE7: 22,
  THEORAPROFILE_ANY: 23,
  AV1PROFILE_PROFILE_MAIN: 24,
  AV1PROFILE_PROFILE_HIGH: 25,
  AV1PROFILE_PROFILE_PRO: 26,
  DOLBYVISION_PROFILE8: 27,
  DOLBYVISION_PROFILE9: 28,
  HEVCPROFILE_REXT: 29,
  HEVCPROFILE_HIGH_THROUGHPUT: 30,
  HEVCPROFILE_MULTIVIEW_MAIN: 31,
  HEVCPROFILE_SCALABLE_MAIN: 32,
  HEVCPROFILE_3D_MAIN: 33,
  HEVCPROFILE_SCREEN_EXTENDED: 34,
  HEVCPROFILE_SCALABLE_REXT: 35,
  HEVCPROFILE_HIGH_THROUGHPUT_SCREEN_EXTENDED: 36,
  VVCPROFILE_MAIN10: 37,
  VVCPROFILE_MAIN12: 38,
  VVCPROFILE_MAIN12_INTRA: 39,
  VVCPROIFLE_MULTILAYER_MAIN10: 40,
  VVCPROFILE_MAIN10_444: 41,
  VVCPROFILE_MAIN12_444: 42,
  VVCPROFILE_MAIN16_444: 43,
  VVCPROFILE_MAIN12_444_INTRA: 44,
  VVCPROFILE_MAIN16_444_INTRA: 45,
  VVCPROFILE_MULTILAYER_MAIN10_444: 46,
  VVCPROFILE_MAIN10_STILL_PICTURE: 47,
  VVCPROFILE_MAIN12_STILL_PICTURE: 48,
  VVCPROFILE_MAIN10_444_STILL_PICTURE: 49,
  VVCPROFILE_MAIN12_444_STILL_PICTURE: 50,
  VVCPROFILE_MAIN16_444_STILL_PICTURE: 51,
};
gpu.mojom.VideoCodecProfileSpec = { $: mojo.internal.Enum() };

// Enum: ImageDecodeAcceleratorType
gpu.mojom.ImageDecodeAcceleratorType = {
  kJpeg: 0,
  kWebP: 1,
  kUnknown: 2,
};
gpu.mojom.ImageDecodeAcceleratorTypeSpec = { $: mojo.internal.Enum() };

// Enum: ImageDecodeAcceleratorSubsampling
gpu.mojom.ImageDecodeAcceleratorSubsampling = {
  k420: 0,
  k422: 1,
  k444: 2,
};
gpu.mojom.ImageDecodeAcceleratorSubsamplingSpec = { $: mojo.internal.Enum() };

// Enum: OverlaySupport
gpu.mojom.OverlaySupport = {
  NONE: 0,
  DIRECT: 1,
  SCALING: 2,
  SOFTWARE: 3,
};
gpu.mojom.OverlaySupportSpec = { $: mojo.internal.Enum() };

// Struct: GpuDevice
gpu.mojom.GpuDeviceSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuDevice',
      packedSize: 72,
      fields: [
        { name: 'vendor_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'device_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'sub_sys_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'revision', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'active', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'vendor_string', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device_string', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'driver_vendor', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'driver_version', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'luid', packedOffset: 56, packedBitOffset: 0, type: gpu.mojom.LuidSpec, nullable: false, minVersion: 0 },
        { name: 'gpu_preference', packedOffset: 20, packedBitOffset: 0, type: gl.mojom.GpuPreferenceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: VideoDecodeAcceleratorSupportedProfile
gpu.mojom.VideoDecodeAcceleratorSupportedProfileSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VideoDecodeAcceleratorSupportedProfile',
      packedSize: 32,
      fields: [
        { name: 'profile', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.VideoCodecProfileSpec, nullable: false, minVersion: 0 },
        { name: 'max_resolution', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'min_resolution', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'encrypted_only', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: VideoDecodeAcceleratorCapabilities
gpu.mojom.VideoDecodeAcceleratorCapabilitiesSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VideoDecodeAcceleratorCapabilities',
      packedSize: 24,
      fields: [
        { name: 'supported_profiles', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gpu.mojom.VideoDecodeAcceleratorSupportedProfileSpec, false), nullable: false, minVersion: 0 },
        { name: 'flags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: VideoEncodeAcceleratorSupportedProfile
gpu.mojom.VideoEncodeAcceleratorSupportedProfileSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VideoEncodeAcceleratorSupportedProfile',
      packedSize: 40,
      fields: [
        { name: 'profile', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.VideoCodecProfileSpec, nullable: false, minVersion: 0 },
        { name: 'min_resolution', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'max_resolution', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'max_framerate_numerator', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_framerate_denominator', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ImageDecodeAcceleratorSupportedProfile
gpu.mojom.ImageDecodeAcceleratorSupportedProfileSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.ImageDecodeAcceleratorSupportedProfile',
      packedSize: 40,
      fields: [
        { name: 'image_type', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.ImageDecodeAcceleratorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'min_encoded_dimensions', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'max_encoded_dimensions', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'subsamplings', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(gpu.mojom.ImageDecodeAcceleratorSubsamplingSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: OverlayInfo
gpu.mojom.OverlayInfoSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.OverlayInfo',
      packedSize: 32,
      fields: [
        { name: 'direct_composition', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'supports_overlays', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'yuy2_overlay_support', packedOffset: 4, packedBitOffset: 0, type: gpu.mojom.OverlaySupportSpec, nullable: false, minVersion: 0 },
        { name: 'nv12_overlay_support', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.OverlaySupportSpec, nullable: false, minVersion: 0 },
        { name: 'bgra8_overlay_support', packedOffset: 12, packedBitOffset: 0, type: gpu.mojom.OverlaySupportSpec, nullable: false, minVersion: 0 },
        { name: 'rgb10a2_overlay_support', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.OverlaySupportSpec, nullable: false, minVersion: 0 },
        { name: 'p010_overlay_support', packedOffset: 20, packedBitOffset: 0, type: gpu.mojom.OverlaySupportSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: GpuInfo
gpu.mojom.GpuInfoSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuInfo',
      packedSize: 224,
      fields: [
        { name: 'initialization_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'optimus', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'amd_switchable', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'gpu', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.GpuDeviceSpec, nullable: false, minVersion: 0 },
        { name: 'secondary_gpus', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(gpu.mojom.GpuDeviceSpec, false), nullable: false, minVersion: 0 },
        { name: 'npus', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(gpu.mojom.GpuDeviceSpec, false), nullable: false, minVersion: 0 },
        { name: 'pixel_shader_version', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'vertex_shader_version', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'max_msaa_samples', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'machine_model_name', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'machine_model_version', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'display_type', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'skia_backend_type', packedOffset: 12, packedBitOffset: 0, type: gpu.mojom.SkiaBackendTypeSpec, nullable: false, minVersion: 0 },
        { name: 'gl_version', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'gl_vendor', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'gl_renderer', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'gl_extensions', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'gl_ws_vendor', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'gl_ws_version', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'gl_ws_extensions', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'gl_reset_notification_strategy', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'gl_implementation_parts', packedOffset: 152, packedBitOffset: 0, type: gl.mojom.GLImplementationPartsSpec, nullable: false, minVersion: 0 },
        { name: 'direct_rendering_version', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'sandboxed', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'in_process_gpu', packedOffset: 8, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'passthrough_cmd_decoder', packedOffset: 8, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'can_support_threaded_texture_mailbox', packedOffset: 8, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'directml_feature_level', packedOffset: 148, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'd3d12_feature_level', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'vulkan_version', packedOffset: 172, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'overlay_info', packedOffset: 176, packedBitOffset: 0, type: gpu.mojom.OverlayInfoSpec, nullable: false, minVersion: 0 },
        { name: 'shared_image_d3d', packedOffset: 8, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'video_decode_accelerator_supported_profiles', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.Array(gpu.mojom.VideoDecodeAcceleratorSupportedProfileSpec, false), nullable: false, minVersion: 0 },
        { name: 'video_encode_accelerator_supported_profiles', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Array(gpu.mojom.VideoEncodeAcceleratorSupportedProfileSpec, false), nullable: false, minVersion: 0 },
        { name: 'jpeg_decode_accelerator_supported', packedOffset: 8, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'subpixel_font_rendering', packedOffset: 9, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'visibility_callback_call_count', packedOffset: 200, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'hardware_supports_vulkan', packedOffset: 9, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'vulkan_info', packedOffset: 208, packedBitOffset: 0, type: gpu.mojom.VulkanInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 224}]
    }
  }
};
