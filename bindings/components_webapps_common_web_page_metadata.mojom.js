// Auto-generated MojoJS binding
// Source: chromium_src/components/webapps/common/web_page_metadata.mojom
// Module: webapps.mojom

'use strict';

// Module namespace
var webapps = webapps || {};
webapps.mojom = webapps.mojom || {};
var url = url || {};


// Enum: WebPageMobileCapable
webapps.mojom.mojom.WebPageMobileCapable = {
  UNSPECIFIED: 0,
  ENABLED: 1,
  ENABLED_APPLE: 2,
};
webapps.mojom.mojom.WebPageMobileCapableSpec = { $: mojo.internal.Enum() };

// Struct: WebPageIconInfo
webapps.mojom.mojom.WebPageIconInfoSpec = {
  $: {
    structSpec: {
      name: 'webapps.mojom.WebPageIconInfo',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'square_size_px', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: WebPageMetadata
webapps.mojom.mojom.WebPageMetadataSpec = {
  $: {
    structSpec: {
      name: 'webapps.mojom.WebPageMetadata',
      packedSize: 56,
      fields: [
        { name: 'application_name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'application_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'icons', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(webapps.mojom.WebPageIconInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'mobile_capable', packedOffset: 40, packedBitOffset: 0, type: webapps.mojom.WebPageMobileCapableSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};
