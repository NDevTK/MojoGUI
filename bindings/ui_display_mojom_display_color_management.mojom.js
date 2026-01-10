// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display_color_management.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};
var skia = skia || {};
var ui = ui || {};

display.mojom.GammaCurveSpec = { $: {} };
display.mojom.ColorCalibrationSpec = { $: {} };
display.mojom.ColorTemperatureAdjustmentSpec = { $: {} };
display.mojom.GammaAdjustmentSpec = { $: {} };

// Struct: GammaCurve
mojo.internal.Struct(
    display.mojom.GammaCurveSpec, 'display.mojom.GammaCurve', [
      mojo.internal.StructField('lut', 0, 0, mojo.internal.Array(display.mojom.GammaRampRGBEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ColorCalibration
mojo.internal.Struct(
    display.mojom.ColorCalibrationSpec, 'display.mojom.ColorCalibration', [
      mojo.internal.StructField('srgb_to_linear', 0, 0, display.mojom.GammaCurveSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('srgb_to_device_matrix', 8, 0, skia.mojom.SkcmsMatrix3x3Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('linear_to_device', 16, 0, display.mojom.GammaCurveSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ColorTemperatureAdjustment
mojo.internal.Struct(
    display.mojom.ColorTemperatureAdjustmentSpec, 'display.mojom.ColorTemperatureAdjustment', [
      mojo.internal.StructField('srgb_matrix', 0, 0, skia.mojom.SkcmsMatrix3x3Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GammaAdjustment
mojo.internal.Struct(
    display.mojom.GammaAdjustmentSpec, 'display.mojom.GammaAdjustment', [
      mojo.internal.StructField('curve', 0, 0, display.mojom.GammaCurveSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);
