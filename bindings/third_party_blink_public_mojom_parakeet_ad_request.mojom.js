// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/parakeet/ad_request.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.AdSignalsSpec = { $: mojo.internal.Enum() };
blink.mojom.AdPropertiesSpec = { $: {} };
blink.mojom.AdGeolocationSpec = { $: {} };
blink.mojom.AdTargetingSpec = { $: {} };
blink.mojom.AdRequestConfigSpec = { $: {} };

// Enum: AdSignals
blink.mojom.AdSignals = {
  kCourseGeolocation: 0,
  kCourseUserAgent: 1,
  kTargeting: 2,
  kUserAdInterests: 3,
};

// Struct: AdProperties
mojo.internal.Struct(
    blink.mojom.AdPropertiesSpec, 'blink.mojom.AdProperties', [
      mojo.internal.StructField('width', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('height', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('slot', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('lang', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('ad_type', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bid_floor', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: AdGeolocation
mojo.internal.Struct(
    blink.mojom.AdGeolocationSpec, 'blink.mojom.AdGeolocation', [
      mojo.internal.StructField('latitude', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('longitude', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AdTargeting
mojo.internal.Struct(
    blink.mojom.AdTargetingSpec, 'blink.mojom.AdTargeting', [
      mojo.internal.StructField('interests', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('geolocation', 8, 0, blink.mojom.AdGeolocationSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AdRequestConfig
mojo.internal.Struct(
    blink.mojom.AdRequestConfigSpec, 'blink.mojom.AdRequestConfig', [
      mojo.internal.StructField('ad_request_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ad_properties', 8, 0, mojo.internal.Array(blink.mojom.AdPropertiesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('publisher_code', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('targeting', 24, 0, blink.mojom.AdTargetingSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('anonymized_proxied_signals', 32, 0, mojo.internal.Array(blink.mojom.AdSignalsSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('fallback_source', 40, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);
