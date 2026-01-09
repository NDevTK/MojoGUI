// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/structured_headers.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: StructuredHeadersParameter
network.mojom.StructuredHeadersParameterSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.StructuredHeadersParameter',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'item', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StructuredHeadersParameterizedItem
network.mojom.StructuredHeadersParameterizedItemSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.StructuredHeadersParameterizedItem',
      packedSize: 24,
      fields: [
        { name: 'item', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'parameters', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StructuredHeadersParameterizedMember
network.mojom.StructuredHeadersParameterizedMemberSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.StructuredHeadersParameterizedMember',
      packedSize: 32,
      fields: [
        { name: 'member', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'parameters', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'member_is_inner_list', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StructuredHeadersDictionaryMember
network.mojom.StructuredHeadersDictionaryMemberSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.StructuredHeadersDictionaryMember',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: network.mojom.StructuredHeadersParameterizedMemberSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StructuredHeadersDictionary
network.mojom.StructuredHeadersDictionarySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.StructuredHeadersDictionary',
      packedSize: 16,
      fields: [
        { name: 'members', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
