// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/local_resource_loader_config.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};


// Union: LocalResourceValue
blink.mojom.mojom.LocalResourceValueSpec = { $: mojo.internal.Union(
    'blink.mojom.LocalResourceValue', {
      'resource_id': {
        'ordinal': 0,
        'type': mojo.internal.Int32,
      }},
      'response_body': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Struct: LocalResourceSource
blink.mojom.mojom.LocalResourceSourceSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalResourceSource',
      packedSize: 40,
      fields: [
        { name: 'headers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'should_replace_i18n_in_js', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'path_to_resource_map', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, blink.mojom.LocalResourceValueSpec, false), nullable: false, minVersion: 0 },
        { name: 'replacement_strings', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: LocalResourceLoaderConfig
blink.mojom.mojom.LocalResourceLoaderConfigSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalResourceLoaderConfig',
      packedSize: 16,
      fields: [
        { name: 'sources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(url.mojom.OriginSpec, blink.mojom.LocalResourceSourceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
