// Auto-generated MojoJS binding
// Source: chromium_src/components/webapps/common/web_page_metadata.mojom
// Module: webapps.mojom

'use strict';

// Module namespace
var webapps = webapps || {};
webapps.mojom = webapps.mojom || {};


// Enum: WebPageMobileCapable
webapps.mojom.WebPageMobileCapable = {
  UNSPECIFIED: 0,
  ENABLED: 1,
  ENABLED_APPLE: 2,
};

// Struct: WebPageIconInfo
webapps.mojom.WebPageIconInfoSpec = {
  $: {
    structSpec: {
      name: 'webapps.mojom.WebPageIconInfo',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'square_size_px', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebPageMetadata
webapps.mojom.WebPageMetadataSpec = {
  $: {
    structSpec: {
      name: 'webapps.mojom.WebPageMetadata',
      packedSize: 56,
      fields: [
        { name: 'application_name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'application_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'title', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'icons', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'mobile_capable', packedOffset: 48, packedBitOffset: 0, type: webapps.mojom.WebPageMobileCapableSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
