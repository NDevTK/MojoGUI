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
      packedSize: 56,
      fields: [
        { name: 'width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'height', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'slot', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'lang', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'ad_type', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'bid_floor', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'latitude', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'longitude', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'interests', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'geolocation', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AdGeolocationSpec, nullable: true },
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
      packedSize: 56,
      fields: [
        { name: 'ad_request_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'ad_properties', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'publisher_code', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'targeting', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.AdTargetingSpec, nullable: true },
        { name: 'anonymized_proxied_signals', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'fallback_source', packedOffset: 48, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
