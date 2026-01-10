// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display_color_management.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};
var skia = skia || {};
var ui = ui || {};


// Struct: GammaCurve
display.mojom.mojom.GammaCurveSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.GammaCurve',
      packedSize: 16,
      fields: [
        { name: 'lut', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(display.mojom.GammaRampRGBEntrySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ColorCalibration
display.mojom.mojom.ColorCalibrationSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.ColorCalibration',
      packedSize: 32,
      fields: [
        { name: 'srgb_to_linear', packedOffset: 0, packedBitOffset: 0, type: display.mojom.GammaCurveSpec, nullable: false, minVersion: 0 },
        { name: 'srgb_to_device_matrix', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.SkcmsMatrix3x3Spec, nullable: false, minVersion: 0 },
        { name: 'linear_to_device', packedOffset: 16, packedBitOffset: 0, type: display.mojom.GammaCurveSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ColorTemperatureAdjustment
display.mojom.mojom.ColorTemperatureAdjustmentSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.ColorTemperatureAdjustment',
      packedSize: 16,
      fields: [
        { name: 'srgb_matrix', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkcmsMatrix3x3Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: GammaAdjustment
display.mojom.mojom.GammaAdjustmentSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.GammaAdjustment',
      packedSize: 16,
      fields: [
        { name: 'curve', packedOffset: 0, packedBitOffset: 0, type: display.mojom.GammaCurveSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
