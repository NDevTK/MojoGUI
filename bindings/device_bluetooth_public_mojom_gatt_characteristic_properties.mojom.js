// Auto-generated MojoJS binding
// Source: chromium_src/device/bluetooth/public/mojom/gatt_characteristic_properties.mojom
// Module: bluetooth.mojom

'use strict';

// Module namespace
var bluetooth = bluetooth || {};
bluetooth.mojom = bluetooth.mojom || {};


// Struct: GattCharacteristicProperties
bluetooth.mojom.GattCharacteristicPropertiesSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.GattCharacteristicProperties',
      packedSize: 16,
      fields: [
        { name: 'broadcast', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'read', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'write_without_response', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'write', packedOffset: 8, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'notify', packedOffset: 8, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'indicate', packedOffset: 8, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'authenticated_signed_writes', packedOffset: 8, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'extended_properties', packedOffset: 8, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'reliable_write', packedOffset: 8, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
        { name: 'writable_auxiliaries', packedOffset: 8, packedBitOffset: 9, type: mojo.internal.Bool, nullable: false },
        { name: 'read_encrypted', packedOffset: 8, packedBitOffset: 10, type: mojo.internal.Bool, nullable: false },
        { name: 'write_encrypted', packedOffset: 8, packedBitOffset: 11, type: mojo.internal.Bool, nullable: false },
        { name: 'read_encrypted_authenticated', packedOffset: 8, packedBitOffset: 12, type: mojo.internal.Bool, nullable: false },
        { name: 'write_encrypted_authenticated', packedOffset: 8, packedBitOffset: 13, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
