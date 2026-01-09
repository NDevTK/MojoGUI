// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display_color_management.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};


// Struct: GammaCurve
display.mojom.GammaCurveSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.GammaCurve',
      packedSize: 16,
      fields: [
        { name: 'lut', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ColorCalibration
display.mojom.ColorCalibrationSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.ColorCalibration',
      packedSize: 16,
      fields: [
        { name: 'linear_to_device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ColorTemperatureAdjustment
display.mojom.ColorTemperatureAdjustmentSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.ColorTemperatureAdjustment',
      packedSize: 16,
      fields: [
        { name: 'srgb_matrix', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GammaAdjustment
display.mojom.GammaAdjustmentSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.GammaAdjustment',
      packedSize: 16,
      fields: [
        { name: 'curve', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
