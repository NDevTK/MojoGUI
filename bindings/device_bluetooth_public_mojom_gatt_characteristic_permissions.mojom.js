// Auto-generated MojoJS binding
// Source: chromium_src/device/bluetooth/public/mojom/gatt_characteristic_permissions.mojom
// Module: bluetooth.mojom

'use strict';

// Module namespace
var bluetooth = bluetooth || {};
bluetooth.mojom = bluetooth.mojom || {};


// Struct: GattCharacteristicPermissions
bluetooth.mojom.mojom.GattCharacteristicPermissionsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.GattCharacteristicPermissions',
      packedSize: 16,
      fields: [
        { name: 'read', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'write', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'read_encrypted', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'write_encrypted', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'read_encrypted_authenticated', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'write_encrypted_authenticated', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
