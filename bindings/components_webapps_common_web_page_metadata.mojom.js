// Auto-generated MojoJS binding
// Source: chromium_src/components/webapps/common/web_page_metadata.mojom
// Module: webapps.mojom

'use strict';

// Module namespace
var webapps = webapps || {};
webapps.mojom = webapps.mojom || {};
var url = url || {};

webapps.mojom.WebPageMobileCapableSpec = { $: mojo.internal.Enum() };
webapps.mojom.WebPageIconInfoSpec = { $: {} };
webapps.mojom.WebPageMetadataSpec = { $: {} };

// Enum: WebPageMobileCapable
webapps.mojom.WebPageMobileCapable = {
  UNSPECIFIED: 0,
  ENABLED: 1,
  ENABLED_APPLE: 2,
};

// Struct: WebPageIconInfo
mojo.internal.Struct(
    webapps.mojom.WebPageIconInfoSpec, 'webapps.mojom.WebPageIconInfo', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('square_size_px', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebPageMetadata
mojo.internal.Struct(
    webapps.mojom.WebPageMetadataSpec, 'webapps.mojom.WebPageMetadata', [
      mojo.internal.StructField('application_name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('description', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('application_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('icons', 32, 0, mojo.internal.Array(webapps.mojom.WebPageIconInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('mobile_capable', 40, 0, webapps.mojom.WebPageMobileCapableSpec.$, 0, false, 0, undefined),
    ],
    [[0, 56]]);
