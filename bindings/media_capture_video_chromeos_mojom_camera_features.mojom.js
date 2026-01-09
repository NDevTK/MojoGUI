// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/camera_features.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Enum: PortraitModeSegResult
cros.mojom.PortraitModeSegResult = {
  kSuccess: 0,
  kFailure: 1,
  kTimeout: 2,
  kNoFaces: 3,
  kUnknown: 4,
};
cros.mojom.PortraitModeSegResultSpec = { $: mojo.internal.Enum() };

// Union: Camera3StreamEffect
cros.mojom.Camera3StreamEffectSpec = { $: mojo.internal.Union(
    'cros.mojom.Camera3StreamEffect', {
      'unknown_config': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
      }},
      'portrait_mode_config': {
        'ordinal': 1,
        'type': cros.mojom.PortraitModeConfigSpec,
      }},
    })
};

// Struct: PortraitModeConfig
cros.mojom.PortraitModeConfigSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.PortraitModeConfig',
      packedSize: 16,
      fields: [
        { name: 'enable_rectiface', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
