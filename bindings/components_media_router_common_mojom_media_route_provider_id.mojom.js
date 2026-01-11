// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/media_route_provider_id.mojom
// Module: media_router.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};

media_router.mojom.MediaRouteProviderIdSpec = { $: mojo.internal.Enum() };

// Enum: MediaRouteProviderId
media_router.mojom.MediaRouteProviderId = {
  WIRED_DISPLAY: 0,
  CAST: 1,
  DIAL: 2,
  ANDROID_CAF: 3,
  TEST: 4,
};
