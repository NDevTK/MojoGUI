// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/local_resource_loader_config.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.LocalResourceValueSpec = { $: {} };
blink.mojom.LocalResourceSourceSpec = { $: {} };
blink.mojom.LocalResourceLoaderConfigSpec = { $: {} };

// Union: LocalResourceValue
mojo.internal.Union(
    blink.mojom.LocalResourceValueSpec, 'blink.mojom.LocalResourceValue', {
      'resource_id': {
        'ordinal': 0,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
      'response_body': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: LocalResourceSource
mojo.internal.Struct(
    blink.mojom.LocalResourceSourceSpec, 'blink.mojom.LocalResourceSource', [
      mojo.internal.StructField('headers', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('should_replace_i18n_in_js', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('path_to_resource_map', 16, 0, mojo.internal.Map(mojo.internal.String, blink.mojom.LocalResourceValueSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('replacement_strings', 24, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: LocalResourceLoaderConfig
mojo.internal.Struct(
    blink.mojom.LocalResourceLoaderConfigSpec, 'blink.mojom.LocalResourceLoaderConfig', [
      mojo.internal.StructField('sources', 0, 0, mojo.internal.Map(url.mojom.OriginSpec, blink.mojom.LocalResourceSourceSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
