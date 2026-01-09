// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/screen_orientation_lock_types.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: ScreenOrientationLockResult
device.mojom.ScreenOrientationLockResult = {
  SCREEN_ORIENTATION_LOCK_RESULT_SUCCESS: 0,
  SCREEN_ORIENTATION_LOCK_RESULT_ERROR_NOT_AVAILABLE: 1,
  SCREEN_ORIENTATION_LOCK_RESULT_ERROR_FULLSCREEN_REQUIRED: 2,
  SCREEN_ORIENTATION_LOCK_RESULT_ERROR_CANCELED: 3,
};

// Enum: ScreenOrientationLockType
device.mojom.ScreenOrientationLockType = {
  DEFAULT: 0,
  PORTRAIT_PRIMARY: 1,
  PORTRAIT_SECONDARY: 2,
  LANDSCAPE_PRIMARY: 3,
  LANDSCAPE_SECONDARY: 4,
  ANY: 5,
  LANDSCAPE: 6,
  PORTRAIT: 7,
  NATURAL: 8,
};
