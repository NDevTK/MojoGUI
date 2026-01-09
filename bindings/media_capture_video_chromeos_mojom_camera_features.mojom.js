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

// Struct: PortraitModeConfig
cros.mojom.PortraitModeConfigSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.PortraitModeConfig',
      packedSize: 16,
      fields: [
        { name: 'enable_rectiface', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
