// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/pointer_lock_result.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: PointerLockResult
blink.mojom.PointerLockResult = {
  kSuccess: 0,
  kUnsupportedOptions: 1,
  kRequiresUserGesture: 2,
  kUserRejected: 3,
  kPermissionDenied: 4,
  kAlreadyLocked: 5,
  kWrongDocument: 6,
  kElementDestroyed: 7,
  kUnknownError: 8,
};
blink.mojom.PointerLockResultSpec = { $: mojo.internal.Enum() };
