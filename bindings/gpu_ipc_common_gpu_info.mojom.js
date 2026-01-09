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
gpu.mojom.GpuDeviceSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuDevice',
      packedSize: 16,
      fields: [
        { name: 'gpu_preference', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoDecodeAcceleratorSupportedProfile
gpu.mojom.VideoDecodeAcceleratorSupportedProfileSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VideoDecodeAcceleratorSupportedProfile',
      packedSize: 16,
      fields: [
        { name: 'encrypted_only', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoDecodeAcceleratorCapabilities
gpu.mojom.VideoDecodeAcceleratorCapabilitiesSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VideoDecodeAcceleratorCapabilities',
      packedSize: 16,
      fields: [
        { name: 'flags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoEncodeAcceleratorSupportedProfile
gpu.mojom.VideoEncodeAcceleratorSupportedProfileSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VideoEncodeAcceleratorSupportedProfile',
      packedSize: 16,
      fields: [
        { name: 'max_framerate_denominator', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ImageDecodeAcceleratorSupportedProfile
gpu.mojom.ImageDecodeAcceleratorSupportedProfileSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.ImageDecodeAcceleratorSupportedProfile',
      packedSize: 16,
      fields: [
        { name: 'subsamplings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OverlayInfo
gpu.mojom.OverlayInfoSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.OverlayInfo',
      packedSize: 16,
      fields: [
        { name: 'p010_overlay_support', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GpuInfo
gpu.mojom.GpuInfoSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuInfo',
      packedSize: 16,
      fields: [
        { name: 'vulkan_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
