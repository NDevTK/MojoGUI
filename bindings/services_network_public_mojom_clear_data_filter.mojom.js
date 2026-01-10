// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/clear_data_filter.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};

network.mojom.TypeSpec = { $: mojo.internal.Enum() };
network.mojom.ClearDataFilterSpec = { $: {} };

// Enum: Type
network.mojom.Type = {
  DELETE_MATCHES: 0,
  KEEP_MATCHES: 1,
};

// Struct: ClearDataFilter
mojo.internal.Struct(
    network.mojom.ClearDataFilterSpec, 'network.mojom.ClearDataFilter', [
    ],
    [{version: 0, packedSize: 8}]);
