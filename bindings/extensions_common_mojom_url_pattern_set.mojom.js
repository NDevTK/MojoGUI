// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/url_pattern_set.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Struct: URLPattern
extensions.mojom.URLPatternSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.URLPattern',
      packedSize: 24,
      fields: [
        { name: 'valid_schemes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'pattern', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: URLPatternSet
extensions.mojom.URLPatternSetSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.URLPatternSet',
      packedSize: 16,
      fields: [
        { name: 'patterns', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
