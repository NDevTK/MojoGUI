// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geoposition.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


device.mojom.kBadLatitudeLongitude = 200;

device.mojom.kBadAltitude = -10000;

device.mojom.kBadAccuracy = -1;

device.mojom.kBadHeading = -1;

device.mojom.kBadSpeed = -1;

device.mojom.kGeoPermissionDeniedErrorMessage = "User denied geolocation permission";

device.mojom.kGeoPositionUnavailableErrorMessage = "Position update is unavailable";

// Enum: GeopositionErrorCode
device.mojom.GeopositionErrorCode = {
  kPermissionDenied: 0,
  kPositionUnavailable: 1,
  kWifiDisabled: 2,
};
device.mojom.GeopositionErrorCodeSpec = { $: mojo.internal.Enum() };

// Union: GeopositionResult
device.mojom.GeopositionResultSpec = { $: mojo.internal.Union(
    'device.mojom.GeopositionResult', {
      'position': {
        'ordinal': 0,
        'type': device.mojom.GeopositionSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': device.mojom.GeopositionErrorSpec,
      }},
    })
};

// Struct: Geoposition
device.mojom.GeopositionSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Geoposition',
      packedSize: 80,
      fields: [
        { name: 'latitude', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'longitude', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'altitude', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'accuracy', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'altitude_accuracy', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'heading', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'speed', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'is_precise', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Struct: GeopositionError
device.mojom.GeopositionErrorSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeopositionError',
      packedSize: 32,
      fields: [
        { name: 'error_code', packedOffset: 16, packedBitOffset: 0, type: device.mojom.GeopositionErrorCodeSpec, nullable: false, minVersion: 0 },
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'error_technical', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
