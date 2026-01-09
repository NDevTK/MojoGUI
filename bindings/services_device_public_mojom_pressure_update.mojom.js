// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/pressure_update.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


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
device.mojom.PressureUpdateSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PressureUpdate',
      packedSize: 32,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: device.mojom.PressureSourceSpec, nullable: false },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: device.mojom.PressureDataSpec, nullable: false },
        { name: 'timestamp', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'cpu_utilization', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'own_contribution_estimate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
