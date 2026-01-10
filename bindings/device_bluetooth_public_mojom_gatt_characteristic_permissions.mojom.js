// Auto-generated MojoJS binding
// Source: chromium_src/device/bluetooth/public/mojom/gatt_characteristic_permissions.mojom
// Module: bluetooth.mojom

'use strict';

// Module namespace
var bluetooth = bluetooth || {};
bluetooth.mojom = bluetooth.mojom || {};

bluetooth.mojom.GattCharacteristicPermissionsSpec = { $: {} };

// Struct: GattCharacteristicPermissions
mojo.internal.Struct(
    bluetooth.mojom.GattCharacteristicPermissionsSpec, 'bluetooth.mojom.GattCharacteristicPermissions', [
      mojo.internal.StructField('read', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('write', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('read_encrypted', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('write_encrypted', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('read_encrypted_authenticated', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('write_encrypted_authenticated', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);
