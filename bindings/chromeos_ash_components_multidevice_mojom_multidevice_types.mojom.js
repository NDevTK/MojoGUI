// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/multidevice/mojom/multidevice_types.mojom
// Module: ash.multidevice.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.multidevice = ash.multidevice || {};
ash.multidevice.mojom = ash.multidevice.mojom || {};

ash.multidevice.mojom.SoftwareFeatureSpec = { $: mojo.internal.Enum() };
ash.multidevice.mojom.SoftwareFeatureStateSpec = { $: mojo.internal.Enum() };
ash.multidevice.mojom.BeaconSeedSpec = { $: {} };
ash.multidevice.mojom.RemoteDeviceSpec = { $: {} };

// Enum: SoftwareFeature
ash.multidevice.mojom.SoftwareFeature = {
  BETTER_TOGETHER_HOST: 1,
  BETTER_TOGETHER_CLIENT: 2,
  EASY_UNLOCK_HOST: 3,
  EASY_UNLOCK_CLIENT: 4,
  MAGIC_TETHER_HOST: 5,
  MAGIC_TETHER_CLIENT: 6,
  SMS_CONNECT_HOST: 7,
  SMS_CONNECT_CLIENT: 8,
  PHONE_HUB_HOST: 9,
  PHONE_HUB_CLIENT: 10,
  WIFI_SYNC_HOST: 11,
  WIFI_SYNC_CLIENT: 12,
  ECHE_HOST: 13,
  ECHE_CLIENT: 14,
  PHONE_HUB_CAMERA_ROLL_HOST: 15,
  PHONE_HUB_CAMERA_ROLL_CLIENT: 16,
};

// Enum: SoftwareFeatureState
ash.multidevice.mojom.SoftwareFeatureState = {
  kNotSupported: 0,
  kSupported: 1,
  kEnabled: 2,
};

// Struct: BeaconSeed
mojo.internal.Struct(
    ash.multidevice.mojom.BeaconSeedSpec, 'ash.multidevice.mojom.BeaconSeed', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('start_time', 8, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('end_time', 16, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: RemoteDevice
mojo.internal.Struct(
    ash.multidevice.mojom.RemoteDeviceSpec, 'ash.multidevice.mojom.RemoteDevice', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('user_email', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('instance_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pii_free_device_name', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('persistent_symmetric_key', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_update_time', 48, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('software_features', 56, 0, mojo.internal.Map(ash.multidevice.mojom.SoftwareFeatureSpec, ash.multidevice.mojom.SoftwareFeatureStateSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('beacon_seeds', 64, 0, mojo.internal.Array(ash.multidevice.mojom.BeaconSeedSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('bluetooth_public_address', 72, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 88]]);
