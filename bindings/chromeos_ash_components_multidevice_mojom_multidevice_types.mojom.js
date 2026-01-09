// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/multidevice/mojom/multidevice_types.mojom
// Module: ash.multidevice.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.multidevice = ash.multidevice || {};
ash.multidevice.mojom = ash.multidevice.mojom || {};


// Enum: SoftwareFeature
ash.multidevice.mojom.SoftwareFeature = {
  BETTER_TOGETHER_HOST: 0,
  BETTER_TOGETHER_CLIENT: 1,
  EASY_UNLOCK_HOST: 2,
  EASY_UNLOCK_CLIENT: 3,
  MAGIC_TETHER_HOST: 4,
  MAGIC_TETHER_CLIENT: 5,
  SMS_CONNECT_HOST: 6,
  SMS_CONNECT_CLIENT: 7,
  PHONE_HUB_HOST: 8,
  PHONE_HUB_CLIENT: 9,
  WIFI_SYNC_HOST: 10,
  WIFI_SYNC_CLIENT: 11,
  ECHE_HOST: 12,
  ECHE_CLIENT: 13,
  PHONE_HUB_CAMERA_ROLL_HOST: 14,
  PHONE_HUB_CAMERA_ROLL_CLIENT: 15,
};

// Enum: SoftwareFeatureState
ash.multidevice.mojom.SoftwareFeatureState = {
  kNotSupported: 0,
  kSupported: 1,
  kEnabled: 2,
};

// Struct: BeaconSeed
ash.multidevice.mojom.BeaconSeedSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice.mojom.BeaconSeed',
      packedSize: 32,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'start_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'end_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RemoteDevice
ash.multidevice.mojom.RemoteDeviceSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice.mojom.RemoteDevice',
      packedSize: 88,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'user_email', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'instance_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'device_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'pii_free_device_name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'persistent_symmetric_key', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'last_update_time', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'software_features', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'beacon_seeds', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'bluetooth_public_address', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
