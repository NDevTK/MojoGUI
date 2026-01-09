// Auto-generated MojoJS binding
// Source: chromium_src/components/variations/variations.mojom
// Module: variations.mojom

'use strict';

// Module namespace
var variations = variations || {};
variations.mojom = variations.mojom || {};


// Enum: GoogleWebVisibility
variations.mojom.GoogleWebVisibility = {
  ANY: 0,
  FIRST_PARTY: 1,
};

// Struct: VariationsHeaders
variations.mojom.VariationsHeadersSpec = {
  $: {
    structSpec: {
      name: 'variations.mojom.VariationsHeaders',
      packedSize: 16,
      fields: [
        { name: 'headers_map', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
