// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/values.mojom
// Module: mojo_base.mojom

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.ValueSpec = { $: {} };
mojo_base.mojom.DictionaryValueSpec = { $: {} };
mojo_base.mojom.ListValueSpec = { $: {} };

// Union: Value
mojo.internal.Union(
    mojo_base.mojom.ValueSpec, 'mojo_base.mojom.Value', {
      'null_value': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'bool_value': {
        'ordinal': 1,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'int_value': {
        'ordinal': 2,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
      'double_value': {
        'ordinal': 3,
        'type': mojo.internal.Double,
        'nullable': false,
      },
      'string_value': {
        'ordinal': 4,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'binary_value': {
        'ordinal': 5,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
      'dictionary_value': {
        'ordinal': 6,
        'type': mojo_base.mojom.DictionaryValueSpec.$,
        'nullable': false,
      },
      'list_value': {
        'ordinal': 7,
        'type': mojo_base.mojom.ListValueSpec.$,
        'nullable': false,
      },
    });

// Struct: DictionaryValue
mojo.internal.Struct(
    mojo_base.mojom.DictionaryValueSpec, 'mojo_base.mojom.DictionaryValue', [
      mojo.internal.StructField('storage', 0, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.ValueSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ListValue
mojo.internal.Struct(
    mojo_base.mojom.ListValueSpec, 'mojo_base.mojom.ListValue', [
      mojo.internal.StructField('storage', 0, 0, mojo.internal.Array(mojo_base.mojom.ValueSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
