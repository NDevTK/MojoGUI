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
      packedSize: 16,
      fields: [
        { name: 'square_size_px', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};
