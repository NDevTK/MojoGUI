// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/shared.mojom
// Module: commerce.shared.mojom

'use strict';

// Module namespace
var commerce = commerce || {};
commerce.shared = commerce.shared || {};
commerce.shared.shared.mojom = commerce.shared.shared.mojom || {};
var url = url || {};


// Struct: ProductInfo
commerce.shared.shared.mojom.mojom.ProductInfoSpec = {
  $: {
    structSpec: {
      name: 'commerce.shared.mojom.ProductInfo',
      packedSize: 88,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'cluster_title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'domain', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'image_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'product_url', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'current_price', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'previous_price', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'cluster_id', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'category_labels', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'price_summary', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
    }
  }
};

// Struct: BookmarkProductInfo
commerce.shared.shared.mojom.mojom.BookmarkProductInfoSpec = {
  $: {
    structSpec: {
      name: 'commerce.shared.mojom.BookmarkProductInfo',
      packedSize: 24,
      fields: [
        { name: 'bookmark_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'info', packedOffset: 8, packedBitOffset: 0, type: commerce.shared.mojom.ProductInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ProductSpecificationsSet
commerce.shared.shared.mojom.mojom.ProductSpecificationsSetSpec = {
  $: {
    structSpec: {
      name: 'commerce.shared.mojom.ProductSpecificationsSet',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'uuid', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false, minVersion: 0 },
        { name: 'urls', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
