// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/structured_headers.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

network.mojom.StructuredHeadersItemSpec = { $: {} };
network.mojom.StructuredHeadersParameterSpec = { $: {} };
network.mojom.StructuredHeadersParameterizedItemSpec = { $: {} };
network.mojom.StructuredHeadersParameterizedMemberSpec = { $: {} };
network.mojom.StructuredHeadersDictionaryMemberSpec = { $: {} };
network.mojom.StructuredHeadersDictionarySpec = { $: {} };

// Union: StructuredHeadersItem
mojo.internal.Union(
    network.mojom.StructuredHeadersItemSpec, 'network.mojom.StructuredHeadersItem', {
      'null_value': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'integer_value': {
        'ordinal': 1,
        'type': mojo.internal.Int64,
        'nullable': false,
      },
      'decimal_value': {
        'ordinal': 2,
        'type': mojo.internal.Double,
        'nullable': false,
      },
      'string_value': {
        'ordinal': 3,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'token_value': {
        'ordinal': 4,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'byte_sequence_value': {
        'ordinal': 5,
        'type': mojo_base.mojom.ByteStringSpec.$,
        'nullable': false,
      },
      'boolean_value': {
        'ordinal': 6,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
    });

// Struct: StructuredHeadersParameter
mojo.internal.Struct(
    network.mojom.StructuredHeadersParameterSpec, 'network.mojom.StructuredHeadersParameter', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('item', 8, 0, network.mojom.StructuredHeadersItemSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StructuredHeadersParameterizedItem
mojo.internal.Struct(
    network.mojom.StructuredHeadersParameterizedItemSpec, 'network.mojom.StructuredHeadersParameterizedItem', [
      mojo.internal.StructField('item', 0, 0, network.mojom.StructuredHeadersItemSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('parameters', 8, 0, mojo.internal.Array(network.mojom.StructuredHeadersParameterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StructuredHeadersParameterizedMember
mojo.internal.Struct(
    network.mojom.StructuredHeadersParameterizedMemberSpec, 'network.mojom.StructuredHeadersParameterizedMember', [
      mojo.internal.StructField('member', 0, 0, mojo.internal.Array(network.mojom.StructuredHeadersParameterizedItemSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('parameters', 8, 0, mojo.internal.Array(network.mojom.StructuredHeadersParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('member_is_inner_list', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: StructuredHeadersDictionaryMember
mojo.internal.Struct(
    network.mojom.StructuredHeadersDictionaryMemberSpec, 'network.mojom.StructuredHeadersDictionaryMember', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, network.mojom.StructuredHeadersParameterizedMemberSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StructuredHeadersDictionary
mojo.internal.Struct(
    network.mojom.StructuredHeadersDictionarySpec, 'network.mojom.StructuredHeadersDictionary', [
      mojo.internal.StructField('members', 0, 0, mojo.internal.Array(network.mojom.StructuredHeadersDictionaryMemberSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
