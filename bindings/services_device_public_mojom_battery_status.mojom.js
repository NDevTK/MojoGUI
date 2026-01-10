// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/battery_status.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.BatteryStatusSpec = { $: {} };

// Struct: BatteryStatus
mojo.internal.Struct(
    device.mojom.BatteryStatusSpec, 'device.mojom.BatteryStatus', [
      mojo.internal.StructField('charging_time', 0, 0, mojo.internal.Double, 0.0, false, 0, undefined),
      mojo.internal.StructField('discharging_time', 8, 0, mojo.internal.Double, Infinity, false, 0, undefined),
      mojo.internal.StructField('level', 16, 0, mojo.internal.Double, 1.0, false, 0, undefined),
      mojo.internal.StructField('charging', 24, 0, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 40]]);
