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
