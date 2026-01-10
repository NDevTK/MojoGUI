// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/structured_headers.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Union: StructuredHeadersItem
network.mojom.mojom.StructuredHeadersItemSpec = { $: mojo.internal.Union(
    'network.mojom.StructuredHeadersItem', {
      'null_value': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
      }},
      'integer_value': {
        'ordinal': 1,
        'type': mojo.internal.Int64,
      }},
      'decimal_value': {
        'ordinal': 2,
        'type': mojo.internal.Double,
      }},
      'string_value': {
        'ordinal': 3,
        'type': mojo.internal.String,
      }},
      'token_value': {
        'ordinal': 4,
        'type': mojo.internal.String,
      }},
      'byte_sequence_value': {
        'ordinal': 5,
        'type': mojo_base.mojom.ByteStringSpec,
      }},
      'boolean_value': {
        'ordinal': 6,
        'type': mojo.internal.Bool,
      }},
    })
};

// Struct: StructuredHeadersParameter
network.mojom.mojom.StructuredHeadersParameterSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.StructuredHeadersParameter',
      packedSize: 32,
      fields: [
        { name: 'key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'item', packedOffset: 0, packedBitOffset: 0, type: network.mojom.StructuredHeadersItemSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: StructuredHeadersParameterizedItem
network.mojom.mojom.StructuredHeadersParameterizedItemSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.StructuredHeadersParameterizedItem',
      packedSize: 32,
      fields: [
        { name: 'item', packedOffset: 0, packedBitOffset: 0, type: network.mojom.StructuredHeadersItemSpec, nullable: false, minVersion: 0 },
        { name: 'parameters', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.StructuredHeadersParameterSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: StructuredHeadersParameterizedMember
network.mojom.mojom.StructuredHeadersParameterizedMemberSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.StructuredHeadersParameterizedMember',
      packedSize: 32,
      fields: [
        { name: 'member', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.StructuredHeadersParameterizedItemSpec, false), nullable: false, minVersion: 0 },
        { name: 'member_is_inner_list', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'parameters', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.StructuredHeadersParameterSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: StructuredHeadersDictionaryMember
network.mojom.mojom.StructuredHeadersDictionaryMemberSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.StructuredHeadersDictionaryMember',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: network.mojom.StructuredHeadersParameterizedMemberSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: StructuredHeadersDictionary
network.mojom.mojom.StructuredHeadersDictionarySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.StructuredHeadersDictionary',
      packedSize: 16,
      fields: [
        { name: 'members', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.StructuredHeadersDictionaryMemberSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
