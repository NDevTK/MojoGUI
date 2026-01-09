// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/file_suggestion/file_suggestion.mojom
// Module: file_suggestion.mojom

'use strict';

// Module namespace
var file_suggestion = file_suggestion || {};
file_suggestion.mojom = file_suggestion.mojom || {};


// Enum: RecommendationType
file_suggestion.mojom.RecommendationType = {
  kUsed: 0,
  kShared: 1,
  kTrending: 2,
};

// Struct: File
file_suggestion.mojom.FileSpec = {
  $: {
    structSpec: {
      name: 'file_suggestion.mojom.File',
      packedSize: 56,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'justification_text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'icon_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'title', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'item_url', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'recommendation_type', packedOffset: 40, packedBitOffset: 0, type: file_suggestion.mojom.RecommendationTypeSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
