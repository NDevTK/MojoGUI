// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/shared.mojom
// Module: commerce.shared.mojom

'use strict';

// Module namespace
var commerce = commerce || {};
commerce.shared = commerce.shared || {};
commerce.shared.mojom = commerce.shared.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

commerce.shared.mojom.ProductInfoSpec = { $: {} };
commerce.shared.mojom.BookmarkProductInfoSpec = { $: {} };
commerce.shared.mojom.ProductSpecificationsSetSpec = { $: {} };

// Struct: ProductInfo
mojo.internal.Struct(
    commerce.shared.mojom.ProductInfoSpec, 'commerce.shared.mojom.ProductInfo', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cluster_title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('domain', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('image_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('product_url', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('current_price', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('previous_price', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cluster_id', 56, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('category_labels', 64, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('price_summary', 72, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: BookmarkProductInfo
mojo.internal.Struct(
    commerce.shared.mojom.BookmarkProductInfoSpec, 'commerce.shared.mojom.BookmarkProductInfo', [
      mojo.internal.StructField('bookmark_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('info', 8, 0, commerce.shared.mojom.ProductInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProductSpecificationsSet
mojo.internal.Struct(
    commerce.shared.mojom.ProductSpecificationsSetSpec, 'commerce.shared.mojom.ProductSpecificationsSet', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('urls', 16, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);
