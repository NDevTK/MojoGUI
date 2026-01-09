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
      packedSize: 16,
      fields: [
        { name: 'recommendation_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
