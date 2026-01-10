// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/clear_data_filter.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};


// Enum: Type
network.mojom.mojom.Type = {
  DELETE_MATCHES: 0,
  KEEP_MATCHES: 1,
};
network.mojom.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Struct: ClearDataFilter
network.mojom.mojom.ClearDataFilterSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ClearDataFilter',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};
