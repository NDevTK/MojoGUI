// Auto-generated MojoJS binding
// Source: chromium_src/device/bluetooth/public/mojom/gatt_characteristic_properties.mojom
// Module: bluetooth.mojom

'use strict';

// Module namespace
var bluetooth = bluetooth || {};
bluetooth.mojom = bluetooth.mojom || {};

bluetooth.mojom.GattCharacteristicPropertiesSpec = { $: {} };

// Struct: GattCharacteristicProperties
mojo.internal.Struct(
    bluetooth.mojom.GattCharacteristicPropertiesSpec, 'bluetooth.mojom.GattCharacteristicProperties', [
      mojo.internal.StructField('broadcast', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('read', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('write_without_response', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('write', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('notify', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('indicate', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('authenticated_signed_writes', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('extended_properties', 0, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('reliable_write', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('writable_auxiliaries', 1, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('read_encrypted', 1, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('write_encrypted', 1, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('read_encrypted_authenticated', 1, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('write_encrypted_authenticated', 1, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);
