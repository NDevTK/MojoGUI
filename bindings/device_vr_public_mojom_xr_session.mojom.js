// Auto-generated MojoJS binding
// Source: chromium_src/device/vr/public/mojom/xr_session.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: RequestSessionError
device.mojom.RequestSessionError = {
  EXISTING_IMMERSIVE_SESSION: 0,
  INVALID_CLIENT: 1,
  USER_DENIED_CONSENT: 2,
  NO_RUNTIME_FOUND: 3,
  UNKNOWN_RUNTIME_ERROR: 4,
  RUNTIME_INSTALL_FAILURE: 5,
  RUNTIMES_CHANGED: 6,
  FULLSCREEN_ERROR: 7,
  UNKNOWN_FAILURE: 8,
};

// Enum: XRSessionFeature
device.mojom.XRSessionFeature = {
  REF_SPACE_VIEWER: 0,
  REF_SPACE_LOCAL: 1,
  REF_SPACE_LOCAL_FLOOR: 2,
  REF_SPACE_BOUNDED_FLOOR: 3,
  REF_SPACE_UNBOUNDED: 4,
  DOM_OVERLAY: 5,
  HIT_TEST: 6,
  LIGHT_ESTIMATION: 7,
  ANCHORS: 8,
  CAMERA_ACCESS: 9,
  PLANE_DETECTION: 10,
  DEPTH: 11,
  IMAGE_TRACKING: 12,
  HAND_INPUT: 13,
  SECONDARY_VIEWS: 14,
  LAYERS: 15,
  FRONT_FACING: 16,
  WEBGPU: 17,
};

// Enum: XRSessionMode
device.mojom.XRSessionMode = {
  kInline: 0,
  kImmersiveVr: 1,
  kImmersiveAr: 2,
};

// Enum: XRDepthUsage
device.mojom.XRDepthUsage = {
  kCPUOptimized: 0,
  kGPUOptimized: 1,
};

// Enum: XRDepthDataFormat
device.mojom.XRDepthDataFormat = {
  kLuminanceAlpha: 0,
  kFloat32: 1,
  kUnsignedShort: 2,
};

// Enum: XRDepthType
device.mojom.XRDepthType = {
  kRaw: 0,
  kSmooth: 1,
};

// Struct: XRTrackedImage
device.mojom.XRTrackedImageSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRTrackedImage',
      packedSize: 32,
      fields: [
        { name: 'bitmap', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: false },
        { name: 'size_in_pixels', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'width_in_meters', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRDepthOptions
device.mojom.XRDepthOptionsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRDepthOptions',
      packedSize: 40,
      fields: [
        { name: 'usage_preferences', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'data_format_preferences', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'depth_type_request', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'match_depth_view', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XRSessionOptions
device.mojom.XRSessionOptionsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRSessionOptions',
      packedSize: 56,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRSessionModeSpec, nullable: false },
        { name: 'required_features', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'optional_features', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'tracked_images', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'depth_options', packedOffset: 32, packedBitOffset: 0, type: device.mojom.XRDepthOptionsSpec, nullable: true },
        { name: 'trace_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XrFrameStatistics
device.mojom.XrFrameStatisticsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XrFrameStatistics',
      packedSize: 64,
      fields: [
        { name: 'trace_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'duration', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'num_frames', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'dropped_frames', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'frame_data_time', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'page_animation_frame_time', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'submit_frame_time', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XrLogMessage
device.mojom.XrLogMessageSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XrLogMessage',
      packedSize: 24,
      fields: [
        { name: 'trace_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
