// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_common.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: VideoCodecProfile
arc.mojom.VideoCodecProfile = {
  VIDEO_CODEC_PROFILE_UNKNOWN: 0,
  VIDEO_CODEC_PROFILE_MIN: 1,
  H264PROFILE_MIN: 2,
  H264PROFILE_BASELINE: 3,
  H264PROFILE_MAIN: 4,
  H264PROFILE_EXTENDED: 5,
  H264PROFILE_HIGH: 6,
  H264PROFILE_HIGH10PROFILE: 7,
  H264PROFILE_HIGH422PROFILE: 8,
  H264PROFILE_HIGH444PREDICTIVEPROFILE: 9,
  H264PROFILE_SCALABLEBASELINE: 10,
  H264PROFILE_SCALABLEHIGH: 11,
  H264PROFILE_STEREOHIGH: 12,
  H264PROFILE_MULTIVIEWHIGH: 13,
  H264PROFILE_MAX: 14,
  VP8PROFILE_MIN: 15,
  VP8PROFILE_ANY: 16,
  VP8PROFILE_MAX: 17,
  VP9PROFILE_MIN: 18,
  VP9PROFILE_PROFILE0: 19,
  VP9PROFILE_PROFILE1: 20,
  VP9PROFILE_PROFILE2: 21,
  VP9PROFILE_PROFILE3: 22,
  VP9PROFILE_MAX: 23,
  HEVCPROFILE_MIN: 24,
  HEVCPROFILE_MAIN: 25,
  HEVCPROFILE_MAIN10: 26,
  HEVCPROFILE_MAIN_STILL_PICTURE: 27,
  HEVCPROFILE_MAX: 28,
  DOLBYVISION_PROFILE0: 29,
  DOLBYVISION_PROFILE5: 30,
  DOLBYVISION_PROFILE7: 31,
  THEORAPROFILE_MIN: 32,
  THEORAPROFILE_ANY: 33,
  THEORAPROFILE_MAX: 34,
  AV1PROFILE_MIN: 35,
  AV1PROFILE_PROFILE_MAIN: 36,
  AV1PROFILE_PROFILE_HIGH: 37,
  AV1PROFILE_PROFILE_PRO: 38,
  AV1PROFILE_MAX: 39,
  DOLBYVISION_PROFILE8: 40,
  DOLBYVISION_PROFILE9: 41,
  HEVCPROFILE_EXT_MIN: 42,
  HEVCPROFILE_REXT: 43,
  HEVCPROFILE_HIGH_THROUGHPUT: 44,
  HEVCPROFILE_MULTIVIEW_MAIN: 45,
  HEVCPROFILE_SCALABLE_MAIN: 46,
  HEVCPROFILE_3D_MAIN: 47,
  HEVCPROFILE_SCREEN_EXTENDED: 48,
  HEVCPROFILE_SCALABLE_REXT: 49,
  HEVCPROFILE_HIGH_THROUGHPUT_SCREEN_EXTENDED: 50,
  HEVCPROFILE_EXT_MAX: 51,
  VVCPROFILE_MIN: 52,
  VVCPROFILE_MAIN10: 53,
  VVCPROFILE_MAIN12: 54,
  VVCPROFILE_MAIN12_INTRA: 55,
  VVCPROIFLE_MULTILAYER_MAIN10: 56,
  VVCPROFILE_MAIN10_444: 57,
  VVCPROFILE_MAIN12_444: 58,
  VVCPROFILE_MAIN16_444: 59,
  VVCPROFILE_MAIN12_444_INTRA: 60,
  VVCPROFILE_MAIN16_444_INTRA: 61,
  VVCPROFILE_MULTILAYER_MAIN10_444: 62,
  VVCPROFILE_MAIN10_STILL_PICTURE: 63,
  VVCPROFILE_MAIN12_STILL_PICTURE: 64,
  VVCPROFILE_MAIN10_444_STILL_PICTURE: 65,
  VVCPROFILE_MAIN12_444_STILL_PICTURE: 66,
  VVCPROFILE_MAIN16_444_STILL_PICTURE: 67,
  VVCPROFILE_MAX: 68,
  VIDEO_CODEC_PROFILE_MAX: 69,
};
arc.mojom.VideoCodecProfileSpec = { $: mojo.internal.Enum() };

// Enum: HalPixelFormat
arc.mojom.HalPixelFormat = {
  HAL_PIXEL_FORMAT_BGRA_8888: 0,
  HAL_PIXEL_FORMAT_YCbCr_420_888: 1,
  HAL_PIXEL_FORMAT_YV12: 2,
  HAL_PIXEL_FORMAT_NV12: 3,
};
arc.mojom.HalPixelFormatSpec = { $: mojo.internal.Enum() };

// Enum: VideoPixelFormat
arc.mojom.VideoPixelFormat = {
  PIXEL_FORMAT_UNKNOWN: 0,
  PIXEL_FORMAT_I420: 1,
};
arc.mojom.VideoPixelFormatSpec = { $: mojo.internal.Enum() };

// Struct: VideoFramePlane
arc.mojom.VideoFramePlaneSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoFramePlane',
      packedSize: 16,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'stride', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ColorPlaneLayout
arc.mojom.ColorPlaneLayoutSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ColorPlaneLayout',
      packedSize: 24,
      fields: [
        { name: 'stride', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: VideoFrameLayout
arc.mojom.VideoFrameLayoutSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoFrameLayout',
      packedSize: 48,
      fields: [
        { name: 'format', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.VideoPixelFormatSpec, nullable: false, minVersion: 0 },
        { name: 'coded_size', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'planes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.ColorPlaneLayoutSpec, false), nullable: false, minVersion: 0 },
        { name: 'is_multi_planar', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'buffer_addr_align', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'modifier', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};
