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
      packedSize: 80,
      fields: [
        { name: 'latitude', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'longitude', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'altitude', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'accuracy', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'altitude_accuracy', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'heading', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'speed', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'timestamp', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_precise', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'error_technical', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
