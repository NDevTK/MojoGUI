// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/compute_pressure/web_pressure_update.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};

blink.mojom.WebPressureUpdateSpec = { $: {} };

// Struct: WebPressureUpdate
mojo.internal.Struct(
    blink.mojom.WebPressureUpdateSpec, 'blink.mojom.WebPressureUpdate', [
      mojo.internal.StructField('source', 16, 0, device.mojom.PressureSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('state', 20, 0, device.mojom.PressureStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('own_contribution_estimate', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('timestamp', 8, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);
