// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_common.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.VideoCodecProfileSpec = { $: mojo.internal.Enum() };
arc.mojom.HalPixelFormatSpec = { $: mojo.internal.Enum() };
arc.mojom.VideoPixelFormatSpec = { $: mojo.internal.Enum() };
arc.mojom.VideoFramePlaneSpec = { $: {} };
arc.mojom.ColorPlaneLayoutSpec = { $: {} };
arc.mojom.VideoFrameLayoutSpec = { $: {} };

// Enum: VideoCodecProfile
arc.mojom.VideoCodecProfile = {
  VIDEO_CODEC_PROFILE_UNKNOWN: -1,
  VIDEO_CODEC_PROFILE_MIN: -1,
  H264PROFILE_MIN: 0,
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
  H264PROFILE_MAX: 10,
  VP8PROFILE_MIN: 11,
  VP8PROFILE_ANY: 11,
  VP8PROFILE_MAX: 11,
  VP9PROFILE_MIN: 12,
  VP9PROFILE_PROFILE0: 12,
  VP9PROFILE_PROFILE1: 13,
  VP9PROFILE_PROFILE2: 14,
  VP9PROFILE_PROFILE3: 15,
  VP9PROFILE_MAX: 15,
  HEVCPROFILE_MIN: 16,
  HEVCPROFILE_MAIN: 16,
  HEVCPROFILE_MAIN10: 17,
  HEVCPROFILE_MAIN_STILL_PICTURE: 18,
  HEVCPROFILE_MAX: 18,
  DOLBYVISION_PROFILE0: 19,
  DOLBYVISION_PROFILE5: 21,
  DOLBYVISION_PROFILE7: 22,
  THEORAPROFILE_MIN: 23,
  THEORAPROFILE_ANY: 23,
  THEORAPROFILE_MAX: 23,
  AV1PROFILE_MIN: 24,
  AV1PROFILE_PROFILE_MAIN: 24,
  AV1PROFILE_PROFILE_HIGH: 25,
  AV1PROFILE_PROFILE_PRO: 26,
  AV1PROFILE_MAX: 26,
  DOLBYVISION_PROFILE8: 27,
  DOLBYVISION_PROFILE9: 28,
  HEVCPROFILE_EXT_MIN: 29,
  HEVCPROFILE_REXT: 29,
  HEVCPROFILE_HIGH_THROUGHPUT: 30,
  HEVCPROFILE_MULTIVIEW_MAIN: 31,
  HEVCPROFILE_SCALABLE_MAIN: 32,
  HEVCPROFILE_3D_MAIN: 33,
  HEVCPROFILE_SCREEN_EXTENDED: 34,
  HEVCPROFILE_SCALABLE_REXT: 35,
  HEVCPROFILE_HIGH_THROUGHPUT_SCREEN_EXTENDED: 36,
  HEVCPROFILE_EXT_MAX: 36,
  VVCPROFILE_MIN: 37,
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
  VVCPROFILE_MAX: 51,
  VIDEO_CODEC_PROFILE_MAX: 51,
};

// Enum: HalPixelFormat
arc.mojom.HalPixelFormat = {
  HAL_PIXEL_FORMAT_BGRA_8888: 5,
  HAL_PIXEL_FORMAT_YCbCr_420_888: 35,
  HAL_PIXEL_FORMAT_YV12: 842094169,
  HAL_PIXEL_FORMAT_NV12: 842094158,
};

// Enum: VideoPixelFormat
arc.mojom.VideoPixelFormat = {
  PIXEL_FORMAT_UNKNOWN: 0,
  PIXEL_FORMAT_I420: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
};

// Struct: VideoFramePlane
mojo.internal.Struct(
    arc.mojom.VideoFramePlaneSpec, 'arc.mojom.VideoFramePlane', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('stride', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ColorPlaneLayout
mojo.internal.Struct(
    arc.mojom.ColorPlaneLayoutSpec, 'arc.mojom.ColorPlaneLayout', [
      mojo.internal.StructField('stride', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VideoFrameLayout
mojo.internal.Struct(
    arc.mojom.VideoFrameLayoutSpec, 'arc.mojom.VideoFrameLayout', [
      mojo.internal.StructField('format', 0, 0, arc.mojom.VideoPixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('coded_size', 8, 0, arc.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('planes', 16, 0, mojo.internal.Array(arc.mojom.ColorPlaneLayoutSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('modifier', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('buffer_addr_align', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_multi_planar', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);
