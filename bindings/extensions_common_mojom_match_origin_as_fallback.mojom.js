// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/match_origin_as_fallback.mojom
// Module: extensions.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};

extensions.mojom.MatchOriginAsFallbackBehaviorSpec = { $: mojo.internal.Enum() };

// Enum: MatchOriginAsFallbackBehavior
extensions.mojom.MatchOriginAsFallbackBehavior = {
  kNever: 0,
  kMatchForAboutSchemeAndClimbTree: 1,
  kAlways: 2,
};
