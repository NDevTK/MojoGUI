// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geoposition.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: GeopositionErrorCode
device.mojom.GeopositionErrorCode = {
  kPermissionDenied: 0,
  kPositionUnavailable: 1,
  kWifiDisabled: 2,
};

// Struct: Geoposition
device.mojom.GeopositionSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Geoposition',
      packedSize: 16,
      fields: [
        { name: 'true', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GeopositionError
device.mojom.GeopositionErrorSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeopositionError',
      packedSize: 16,
      fields: [
        { name: 'error_technical', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
