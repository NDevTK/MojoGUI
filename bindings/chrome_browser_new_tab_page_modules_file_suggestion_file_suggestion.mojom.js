// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/file_suggestion/file_suggestion.mojom
// Module: file_suggestion.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var file_suggestion = file_suggestion || {};
file_suggestion.mojom = file_suggestion.mojom || {};
var url = url || {};

file_suggestion.mojom.RecommendationTypeSpec = { $: mojo.internal.Enum() };
file_suggestion.mojom.FileSpec = { $: {} };

// Enum: RecommendationType
file_suggestion.mojom.RecommendationType = {
  kUsed: 0,
  kShared: 1,
  kTrending: 2,
};

// Struct: File
mojo.internal.Struct(
    file_suggestion.mojom.FileSpec, 'file_suggestion.mojom.File', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('justification_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('item_url', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('recommendation_type', 40, 0, file_suggestion.mojom.RecommendationTypeSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);
