// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/battery_status.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Struct: BatteryStatus
device.mojom.BatteryStatusSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.BatteryStatus',
      packedSize: 40,
      fields: [
        { name: 'charging', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'charging_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'discharging_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'level', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
