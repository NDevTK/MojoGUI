// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/local_resource_loader_config.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: LocalResourceSource
blink.mojom.LocalResourceSourceSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalResourceSource',
      packedSize: 40,
      fields: [
        { name: 'headers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'path_to_resource_map', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'replacement_strings', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'should_replace_i18n_in_js', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LocalResourceLoaderConfig
blink.mojom.LocalResourceLoaderConfigSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalResourceLoaderConfig',
      packedSize: 16,
      fields: [
        { name: 'sources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
