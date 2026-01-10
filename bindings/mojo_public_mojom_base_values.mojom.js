// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/values.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Union: Value
mojo_base.mojom.mojom.ValueSpec = { $: mojo.internal.Union(
    'mojo_base.mojom.Value', {
      'null_value': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
      }},
      'bool_value': {
        'ordinal': 1,
        'type': mojo.internal.Bool,
      }},
      'int_value': {
        'ordinal': 2,
        'type': mojo.internal.Int32,
      }},
      'double_value': {
        'ordinal': 3,
        'type': mojo.internal.Double,
      }},
      'string_value': {
        'ordinal': 4,
        'type': mojo.internal.String,
      }},
      'binary_value': {
        'ordinal': 5,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
      }},
      'dictionary_value': {
        'ordinal': 6,
        'type': mojo_base.mojom.DictionaryValueSpec,
      }},
      'list_value': {
        'ordinal': 7,
        'type': mojo_base.mojom.ListValueSpec,
      }},
    })
};

// Struct: DictionaryValue
mojo_base.mojom.mojom.DictionaryValueSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.DictionaryValue',
      packedSize: 16,
      fields: [
        { name: 'storage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo_base.mojom.ValueSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ListValue
mojo_base.mojom.mojom.ListValueSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.ListValue',
      packedSize: 16,
      fields: [
        { name: 'storage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.ValueSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
