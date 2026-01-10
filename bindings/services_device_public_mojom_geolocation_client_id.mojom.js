// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation_client_id.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.GeolocationClientIdSpec = { $: mojo.internal.Enum() };

// Enum: GeolocationClientId
device.mojom.GeolocationClientId = {
  kForTesting: 0,
  kGeolocationServiceImpl: 1,
  kGeoLanguageProvider: 2,
  kFingerprintDataLoader: 3,
};
