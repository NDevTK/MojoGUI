// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/pressure_update.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.PressureSourceSpec = { $: mojo.internal.Enum() };
device.mojom.PressureStateSpec = { $: mojo.internal.Enum() };
device.mojom.PressureUpdateSpec = { $: {} };
device.mojom.PressureDataSpec = { $: {} };

device.mojom.kDefaultOwnContributionEstimate = -1.0;

// Enum: PressureSource
device.mojom.PressureSource = {
  kCpu: 0,
};

// Enum: PressureState
device.mojom.PressureState = {
  kNominal: 0,
  kFair: 1,
  kSerious: 2,
  kCritical: 3,
};

// Struct: PressureUpdate
mojo.internal.Struct(
    device.mojom.PressureUpdateSpec, 'device.mojom.PressureUpdate', [
      mojo.internal.StructField('source', 16, 0, device.mojom.PressureSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('data', 0, 0, device.mojom.PressureDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 8, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PressureData
mojo.internal.Struct(
    device.mojom.PressureDataSpec, 'device.mojom.PressureData', [
      mojo.internal.StructField('cpu_utilization', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('own_contribution_estimate', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);
