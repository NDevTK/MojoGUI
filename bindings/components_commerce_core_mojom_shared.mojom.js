// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/shared.mojom
// Module: commerce.shared.mojom

'use strict';

// Module namespace
var commerce = commerce || {};
commerce.shared = commerce.shared || {};
commerce.shared.mojom = commerce.shared.mojom || {};


// Struct: ProductInfo
commerce.shared.mojom.ProductInfoSpec = {
  $: {
    structSpec: {
      name: 'commerce.shared.mojom.ProductInfo',
      packedSize: 16,
      fields: [
        { name: 'price_summary', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BookmarkProductInfo
commerce.shared.mojom.BookmarkProductInfoSpec = {
  $: {
    structSpec: {
      name: 'commerce.shared.mojom.BookmarkProductInfo',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProductSpecificationsSet
commerce.shared.mojom.ProductSpecificationsSetSpec = {
  $: {
    structSpec: {
      name: 'commerce.shared.mojom.ProductSpecificationsSet',
      packedSize: 16,
      fields: [
        { name: 'urls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
