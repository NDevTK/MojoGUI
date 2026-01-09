// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/no_vary_search.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: NoVarySearchParseError
network.mojom.NoVarySearchParseError = {
  kOk: 0,
  kDefaultValue: 1,
  kNotDictionary: 2,
  kUnknownDictionaryKey: 3,
  kNonBooleanKeyOrder: 4,
  kParamsNotStringList: 5,
  kExceptNotStringList: 6,
  kExceptWithoutTrueParams: 7,
};

// Struct: NoVarySearch
network.mojom.NoVarySearchSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NoVarySearch',
      packedSize: 16,
      fields: [
        { name: 'vary_on_key_order', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
