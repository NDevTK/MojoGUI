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
      packedSize: 88,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'cluster_title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'domain', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'image_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'product_url', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'current_price', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'previous_price', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'cluster_id', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'category_labels', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'price_summary', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'bookmark_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'info', packedOffset: 8, packedBitOffset: 0, type: commerce.shared.mojom.ProductInfoSpec, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'uuid', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false },
        { name: 'urls', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
