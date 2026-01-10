// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geoposition.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var mojo_base = mojo_base || {};

device.mojom.GeopositionErrorCodeSpec = { $: mojo.internal.Enum() };
device.mojom.GeopositionResultSpec = { $: {} };
device.mojom.GeopositionSpec = { $: {} };
device.mojom.GeopositionErrorSpec = { $: {} };

device.mojom.kBadLatitudeLongitude = 200;

device.mojom.kBadAltitude = -10000;

device.mojom.kBadAccuracy = -1;

device.mojom.kBadHeading = -1;

device.mojom.kBadSpeed = -1;

device.mojom.kGeoPermissionDeniedErrorMessage = "User denied geolocation permission";

device.mojom.kGeoPositionUnavailableErrorMessage = "Position update is unavailable";

// Enum: GeopositionErrorCode
device.mojom.GeopositionErrorCode = {
  kPermissionDenied: 1,
  kPositionUnavailable: 2,
  kWifiDisabled: 3,
};

// Union: GeopositionResult
mojo.internal.Union(
    device.mojom.GeopositionResultSpec, 'device.mojom.GeopositionResult', {
      'position': {
        'ordinal': 0,
        'type': device.mojom.GeopositionSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': device.mojom.GeopositionErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: Geoposition
mojo.internal.Struct(
    device.mojom.GeopositionSpec, 'device.mojom.Geoposition', [
      mojo.internal.StructField('latitude', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('longitude', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('altitude', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('accuracy', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('altitude_accuracy', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('heading', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('speed', 48, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('timestamp', 56, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_precise', 64, 0, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: GeopositionError
mojo.internal.Struct(
    device.mojom.GeopositionErrorSpec, 'device.mojom.GeopositionError', [
      mojo.internal.StructField('error_code', 0, 0, device.mojom.GeopositionErrorCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error_technical', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);
