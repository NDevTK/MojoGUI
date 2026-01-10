// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/no_vary_search.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: NoVarySearchParseError
network.mojom.mojom.NoVarySearchParseError = {
  kOk: 0,
  kDefaultValue: 1,
  kNotDictionary: 2,
  kUnknownDictionaryKey: 3,
  kNonBooleanKeyOrder: 4,
  kParamsNotStringList: 5,
  kExceptNotStringList: 6,
  kExceptWithoutTrueParams: 7,
};
network.mojom.mojom.NoVarySearchParseErrorSpec = { $: mojo.internal.Enum() };

// Union: SearchParamsVariance
network.mojom.mojom.SearchParamsVarianceSpec = { $: mojo.internal.Union(
    'network.mojom.SearchParamsVariance', {
      'no_vary_params': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.String, false),
      }},
      'vary_params': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.String, false),
      }},
    })
};

// Union: NoVarySearchWithParseError
network.mojom.mojom.NoVarySearchWithParseErrorSpec = { $: mojo.internal.Union(
    'network.mojom.NoVarySearchWithParseError', {
      'no_vary_search': {
        'ordinal': 0,
        'type': network.mojom.NoVarySearchSpec,
      }},
      'parse_error': {
        'ordinal': 1,
        'type': network.mojom.NoVarySearchParseErrorSpec,
      }},
    })
};

// Struct: NoVarySearch
network.mojom.mojom.NoVarySearchSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NoVarySearch',
      packedSize: 32,
      fields: [
        { name: 'search_variance', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SearchParamsVarianceSpec, nullable: false, minVersion: 0 },
        { name: 'vary_on_key_order', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
