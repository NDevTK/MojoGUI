// Auto-generated MojoJS binding
// Source: chromium_src/content/public/common/alternative_error_page_override_info.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Struct: AlternativeErrorPageOverrideInfo
content.mojom.mojom.AlternativeErrorPageOverrideInfoSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.AlternativeErrorPageOverrideInfo',
      packedSize: 24,
      fields: [
        { name: 'resource_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'alternative_error_page_params', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
