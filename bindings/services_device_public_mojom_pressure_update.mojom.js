// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/pressure_update.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


device.mojom.kDefaultOwnContributionEstimate = -1.0;

// Enum: PressureSource
device.mojom.PressureSource = {
  kCpu: 0,
};
device.mojom.PressureSourceSpec = { $: mojo.internal.Enum() };

// Enum: PressureState
device.mojom.PressureState = {
  kNominal: 0,
  kFair: 1,
  kSerious: 2,
  kCritical: 3,
};
device.mojom.PressureStateSpec = { $: mojo.internal.Enum() };

// Struct: PressureUpdate
device.mojom.PressureUpdateSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PressureUpdate',
      packedSize: 32,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: device.mojom.PressureSourceSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: device.mojom.PressureDataSpec, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PressureData
device.mojom.PressureDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PressureData',
      packedSize: 24,
      fields: [
        { name: 'cpu_utilization', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'own_contribution_estimate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
