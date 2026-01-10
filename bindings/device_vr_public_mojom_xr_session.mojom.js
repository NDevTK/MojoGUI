// Auto-generated MojoJS binding
// Source: chromium_src/device/vr/public/mojom/xr_session.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};

device.mojom.RequestSessionErrorSpec = { $: mojo.internal.Enum() };
device.mojom.XRSessionFeatureSpec = { $: mojo.internal.Enum() };
device.mojom.XRSessionModeSpec = { $: mojo.internal.Enum() };
device.mojom.XRDepthUsageSpec = { $: mojo.internal.Enum() };
device.mojom.XRDepthDataFormatSpec = { $: mojo.internal.Enum() };
device.mojom.XRDepthTypeSpec = { $: mojo.internal.Enum() };
device.mojom.XRTrackedImageSpec = { $: {} };
device.mojom.XRDepthOptionsSpec = { $: {} };
device.mojom.XRSessionOptionsSpec = { $: {} };
device.mojom.XrFrameStatisticsSpec = { $: {} };
device.mojom.XrLogMessageSpec = { $: {} };

// Enum: RequestSessionError
device.mojom.RequestSessionError = {
  EXISTING_IMMERSIVE_SESSION: 1,
  INVALID_CLIENT: 2,
  USER_DENIED_CONSENT: 3,
  NO_RUNTIME_FOUND: 4,
  UNKNOWN_RUNTIME_ERROR: 5,
  RUNTIME_INSTALL_FAILURE: 6,
  RUNTIMES_CHANGED: 7,
  FULLSCREEN_ERROR: 8,
  UNKNOWN_FAILURE: 9,
};

// Enum: XRSessionFeature
device.mojom.XRSessionFeature = {
  REF_SPACE_VIEWER: 1,
  REF_SPACE_LOCAL: 2,
  REF_SPACE_LOCAL_FLOOR: 3,
  REF_SPACE_BOUNDED_FLOOR: 4,
  REF_SPACE_UNBOUNDED: 5,
  DOM_OVERLAY: 6,
  HIT_TEST: 7,
  LIGHT_ESTIMATION: 8,
  ANCHORS: 9,
  CAMERA_ACCESS: 10,
  PLANE_DETECTION: 11,
  DEPTH: 12,
  IMAGE_TRACKING: 13,
  HAND_INPUT: 14,
  SECONDARY_VIEWS: 15,
  LAYERS: 16,
  FRONT_FACING: 17,
  WEBGPU: 18,
};

// Enum: XRSessionMode
device.mojom.XRSessionMode = {
  kInline: 1,
  kImmersiveVr: 2,
  kImmersiveAr: 3,
};

// Enum: XRDepthUsage
device.mojom.XRDepthUsage = {
  kCPUOptimized: 1,
  kGPUOptimized: 2,
};

// Enum: XRDepthDataFormat
device.mojom.XRDepthDataFormat = {
  kLuminanceAlpha: 1,
  kFloat32: 2,
  kUnsignedShort: 3,
};

// Enum: XRDepthType
device.mojom.XRDepthType = {
  kRaw: 1,
  kSmooth: 2,
};

// Struct: XRTrackedImage
mojo.internal.Struct(
    device.mojom.XRTrackedImageSpec, 'device.mojom.XRTrackedImage', [
      mojo.internal.StructField('bitmap', 0, 0, skia.mojom.BitmapN32Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('size_in_pixels', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('width_in_meters', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRDepthOptions
mojo.internal.Struct(
    device.mojom.XRDepthOptionsSpec, 'device.mojom.XRDepthOptions', [
      mojo.internal.StructField('usage_preferences', 0, 0, mojo.internal.Array(device.mojom.XRDepthUsageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('data_format_preferences', 8, 0, mojo.internal.Array(device.mojom.XRDepthDataFormatSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('depth_type_request', 16, 0, mojo.internal.Array(device.mojom.XRDepthTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('match_depth_view', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: XRSessionOptions
mojo.internal.Struct(
    device.mojom.XRSessionOptionsSpec, 'device.mojom.XRSessionOptions', [
      mojo.internal.StructField('mode', 0, 0, device.mojom.XRSessionModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('required_features', 8, 0, mojo.internal.Array(device.mojom.XRSessionFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('optional_features', 16, 0, mojo.internal.Array(device.mojom.XRSessionFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('tracked_images', 24, 0, mojo.internal.Array(device.mojom.XRTrackedImageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('depth_options', 32, 0, device.mojom.XRDepthOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('trace_id', 40, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: XrFrameStatistics
mojo.internal.Struct(
    device.mojom.XrFrameStatisticsSpec, 'device.mojom.XrFrameStatistics', [
      mojo.internal.StructField('trace_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('duration', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('num_frames', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('dropped_frames', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('frame_data_time', 32, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_animation_frame_time', 40, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('submit_frame_time', 48, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: XrLogMessage
mojo.internal.Struct(
    device.mojom.XrLogMessageSpec, 'device.mojom.XrLogMessage', [
      mojo.internal.StructField('trace_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);
