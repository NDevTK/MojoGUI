// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/gamma_ramp_rgb_entry.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};

display.mojom.GammaRampRGBEntrySpec = { $: {} };

// Struct: GammaRampRGBEntry
mojo.internal.Struct(
    display.mojom.GammaRampRGBEntrySpec, 'display.mojom.GammaRampRGBEntry', [
      mojo.internal.StructField('r', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('g', 2, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('b', 4, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 16]]);
