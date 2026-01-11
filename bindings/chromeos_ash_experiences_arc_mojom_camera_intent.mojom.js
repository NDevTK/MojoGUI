// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/camera_intent.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.CameraIntentModeSpec = { $: mojo.internal.Enum() };
arc.mojom.CameraIntentActionSpec = { $: mojo.internal.Enum() };

// Enum: CameraIntentMode
arc.mojom.CameraIntentMode = {
  PHOTO: 0,
  VIDEO: 1,
};

// Enum: CameraIntentAction
arc.mojom.CameraIntentAction = {
  FINISH: 0,
  CANCEL: 1,
  APPEND_DATA: 2,
  CLEAR_DATA: 3,
};
