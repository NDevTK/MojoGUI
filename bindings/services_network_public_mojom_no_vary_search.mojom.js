// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/no_vary_search.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.NoVarySearchParseErrorSpec = { $: mojo.internal.Enum() };
network.mojom.SearchParamsVarianceSpec = { $: {} };
network.mojom.NoVarySearchWithParseErrorSpec = { $: {} };
network.mojom.NoVarySearchSpec = { $: {} };

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

// Union: SearchParamsVariance
mojo.internal.Union(
    network.mojom.SearchParamsVarianceSpec, 'network.mojom.SearchParamsVariance', {
      'no_vary_params': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.String, false),
        'nullable': false,
      },
      'vary_params': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.String, false),
        'nullable': false,
      },
    });

// Union: NoVarySearchWithParseError
mojo.internal.Union(
    network.mojom.NoVarySearchWithParseErrorSpec, 'network.mojom.NoVarySearchWithParseError', {
      'no_vary_search': {
        'ordinal': 0,
        'type': network.mojom.NoVarySearchSpec.$,
        'nullable': false,
      },
      'parse_error': {
        'ordinal': 1,
        'type': network.mojom.NoVarySearchParseErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: NoVarySearch
mojo.internal.Struct(
    network.mojom.NoVarySearchSpec, 'network.mojom.NoVarySearch', [
      mojo.internal.StructField('search_variance', 0, 0, network.mojom.SearchParamsVarianceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('vary_on_key_order', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);
