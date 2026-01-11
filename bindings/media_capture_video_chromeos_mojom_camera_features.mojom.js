// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/camera_features.mojom
// Module: cros.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};

cros.mojom.PortraitModeSegResultSpec = { $: mojo.internal.Enum() };
cros.mojom.Camera3StreamEffectSpec = { $: {} };
cros.mojom.PortraitModeConfigSpec = { $: {} };

// Enum: PortraitModeSegResult
cros.mojom.PortraitModeSegResult = {
  kSuccess: 0,
  kFailure: 1,
  kTimeout: 2,
  kNoFaces: 3,
  kUnknown: 4,
};

// Union: Camera3StreamEffect
mojo.internal.Union(
    cros.mojom.Camera3StreamEffectSpec, 'cros.mojom.Camera3StreamEffect', {
      'unknown_config': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'portrait_mode_config': {
        'ordinal': 1,
        'type': cros.mojom.PortraitModeConfigSpec.$,
        'nullable': false,
      },
    });

// Struct: PortraitModeConfig
mojo.internal.Struct(
    cros.mojom.PortraitModeConfigSpec, 'cros.mojom.PortraitModeConfig', [
      mojo.internal.StructField('enable_rectiface', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);
