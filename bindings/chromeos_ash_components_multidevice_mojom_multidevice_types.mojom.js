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
