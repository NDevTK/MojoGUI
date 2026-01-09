// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/parakeet/ad_request.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: AdSignals
blink.mojom.AdSignals = {
  kCourseGeolocation: 0,
  kCourseUserAgent: 1,
  kTargeting: 2,
  kUserAdInterests: 3,
};

// Struct: AdProperties
blink.mojom.AdPropertiesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdProperties',
      packedSize: 16,
      fields: [
        { name: 'bid_floor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AdGeolocation
blink.mojom.AdGeolocationSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdGeolocation',
      packedSize: 16,
      fields: [
        { name: 'longitude', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AdTargeting
blink.mojom.AdTargetingSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdTargeting',
      packedSize: 16,
      fields: [
        { name: 'geolocation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AdRequestConfig
blink.mojom.AdRequestConfigSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdRequestConfig',
      packedSize: 16,
      fields: [
        { name: 'fallback_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
