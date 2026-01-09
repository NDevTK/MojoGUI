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
      packedSize: 16,
      fields: [
        { name: 'timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'kDefaultOwnContributionEstimate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
