// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/gpu_info.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};
var gl = gl || {};

gpu.mojom.SkiaBackendTypeSpec = { $: mojo.internal.Enum() };
gpu.mojom.VideoCodecProfileSpec = { $: mojo.internal.Enum() };
gpu.mojom.ImageDecodeAcceleratorTypeSpec = { $: mojo.internal.Enum() };
gpu.mojom.ImageDecodeAcceleratorSubsamplingSpec = { $: mojo.internal.Enum() };
gpu.mojom.OverlaySupportSpec = { $: mojo.internal.Enum() };
gpu.mojom.GpuDeviceSpec = { $: {} };
gpu.mojom.VideoDecodeAcceleratorSupportedProfileSpec = { $: {} };
gpu.mojom.VideoDecodeAcceleratorCapabilitiesSpec = { $: {} };
gpu.mojom.VideoEncodeAcceleratorSupportedProfileSpec = { $: {} };
gpu.mojom.ImageDecodeAcceleratorSupportedProfileSpec = { $: {} };
gpu.mojom.OverlayInfoSpec = { $: {} };
gpu.mojom.GpuInfoSpec = { $: {} };

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

// Enum: VideoCodecProfile
gpu.mojom.VideoCodecProfile = {
  VIDEO_CODEC_PROFILE_UNKNOWN: -1,
  H264PROFILE_BASELINE: 0,
  H264PROFILE_MAIN: 1,
  H264PROFILE_EXTENDED: 2,
  H264PROFILE_HIGH: 3,
  H264PROFILE_HIGH10PROFILE: 4,
  H264PROFILE_HIGH422PROFILE: 5,
  H264PROFILE_HIGH444PREDICTIVEPROFILE: 6,
  H264PROFILE_SCALABLEBASELINE: 7,
  H264PROFILE_SCALABLEHIGH: 8,
  H264PROFILE_STEREOHIGH: 9,
  H264PROFILE_MULTIVIEWHIGH: 10,
  VP8PROFILE_ANY: 11,
  VP9PROFILE_PROFILE0: 12,
  VP9PROFILE_PROFILE1: 13,
  VP9PROFILE_PROFILE2: 14,
  VP9PROFILE_PROFILE3: 15,
  HEVCPROFILE_MAIN: 16,
  HEVCPROFILE_MAIN10: 17,
  HEVCPROFILE_MAIN_STILL_PICTURE: 18,
  DOLBYVISION_PROFILE0: 19,
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

// Enum: ImageDecodeAcceleratorType
gpu.mojom.ImageDecodeAcceleratorType = {
  kJpeg: 0,
  kWebP: 1,
  kUnknown: 2,
};

// Enum: ImageDecodeAcceleratorSubsampling
gpu.mojom.ImageDecodeAcceleratorSubsampling = {
  k420: 0,
  k422: 1,
  k444: 2,
};

// Enum: OverlaySupport
gpu.mojom.OverlaySupport = {
  NONE: 0,
  DIRECT: 1,
  SCALING: 2,
  SOFTWARE: 3,
};

// Struct: GpuDevice
mojo.internal.Struct(
    gpu.mojom.GpuDeviceSpec, 'gpu.mojom.GpuDevice', [
      mojo.internal.StructField('vendor_string', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_string', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('driver_vendor', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('driver_version', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('luid', 32, 0, gpu.mojom.LuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gpu_preference', 40, 0, gl.mojom.GpuPreferenceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('vendor_id', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('device_id', 52, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('sub_sys_id', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('revision', 60, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('active', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: VideoDecodeAcceleratorSupportedProfile
mojo.internal.Struct(
    gpu.mojom.VideoDecodeAcceleratorSupportedProfileSpec, 'gpu.mojom.VideoDecodeAcceleratorSupportedProfile', [
      mojo.internal.StructField('profile', 0, 0, gpu.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_resolution', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('min_resolution', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('encrypted_only', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: VideoDecodeAcceleratorCapabilities
mojo.internal.Struct(
    gpu.mojom.VideoDecodeAcceleratorCapabilitiesSpec, 'gpu.mojom.VideoDecodeAcceleratorCapabilities', [
      mojo.internal.StructField('supported_profiles', 0, 0, mojo.internal.Array(gpu.mojom.VideoDecodeAcceleratorSupportedProfileSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('flags', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VideoEncodeAcceleratorSupportedProfile
mojo.internal.Struct(
    gpu.mojom.VideoEncodeAcceleratorSupportedProfileSpec, 'gpu.mojom.VideoEncodeAcceleratorSupportedProfile', [
      mojo.internal.StructField('profile', 0, 0, gpu.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('min_resolution', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_resolution', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_framerate_numerator', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_framerate_denominator', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ImageDecodeAcceleratorSupportedProfile
mojo.internal.Struct(
    gpu.mojom.ImageDecodeAcceleratorSupportedProfileSpec, 'gpu.mojom.ImageDecodeAcceleratorSupportedProfile', [
      mojo.internal.StructField('image_type', 0, 0, gpu.mojom.ImageDecodeAcceleratorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('min_encoded_dimensions', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_encoded_dimensions', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subsamplings', 24, 0, mojo.internal.Array(gpu.mojom.ImageDecodeAcceleratorSubsamplingSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: OverlayInfo
mojo.internal.Struct(
    gpu.mojom.OverlayInfoSpec, 'gpu.mojom.OverlayInfo', [
      mojo.internal.StructField('yuy2_overlay_support', 0, 0, gpu.mojom.OverlaySupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('nv12_overlay_support', 8, 0, gpu.mojom.OverlaySupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bgra8_overlay_support', 16, 0, gpu.mojom.OverlaySupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rgb10a2_overlay_support', 24, 0, gpu.mojom.OverlaySupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('p010_overlay_support', 32, 0, gpu.mojom.OverlaySupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('direct_composition', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_overlays', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: GpuInfo
mojo.internal.Struct(
    gpu.mojom.GpuInfoSpec, 'gpu.mojom.GpuInfo', [
      mojo.internal.StructField('initialization_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gpu', 8, 0, gpu.mojom.GpuDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('secondary_gpus', 16, 0, mojo.internal.Array(gpu.mojom.GpuDeviceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('npus', 24, 0, mojo.internal.Array(gpu.mojom.GpuDeviceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('pixel_shader_version', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('vertex_shader_version', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('max_msaa_samples', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('machine_model_name', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('machine_model_version', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_type', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('skia_backend_type', 80, 0, gpu.mojom.SkiaBackendTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gl_version', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gl_vendor', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gl_renderer', 104, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gl_extensions', 112, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gl_ws_vendor', 120, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gl_ws_version', 128, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gl_ws_extensions', 136, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gl_implementation_parts', 144, 0, gl.mojom.GLImplementationPartsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('direct_rendering_version', 152, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('overlay_info', 160, 0, gpu.mojom.OverlayInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('video_decode_accelerator_supported_profiles', 168, 0, mojo.internal.Array(gpu.mojom.VideoDecodeAcceleratorSupportedProfileSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('video_encode_accelerator_supported_profiles', 176, 0, mojo.internal.Array(gpu.mojom.VideoEncodeAcceleratorSupportedProfileSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('vulkan_info', 184, 0, gpu.mojom.VulkanInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('gl_reset_notification_strategy', 192, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('directml_feature_level', 196, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('d3d12_feature_level', 200, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('vulkan_version', 204, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('visibility_callback_call_count', 208, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('optimus', 212, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('amd_switchable', 212, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sandboxed', 212, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('in_process_gpu', 212, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('passthrough_cmd_decoder', 212, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('can_support_threaded_texture_mailbox', 212, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shared_image_d3d', 212, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('jpeg_decode_accelerator_supported', 212, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('subpixel_font_rendering', 213, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hardware_supports_vulkan', 213, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 224]]);
