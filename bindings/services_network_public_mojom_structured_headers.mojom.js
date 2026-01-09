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
      packedSize: 16,
      fields: [
        { name: 'item', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'parameters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'parameters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
