// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/client_security_state.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: PrivateNetworkRequestPolicy
network.mojom.PrivateNetworkRequestPolicy = {
  kAllow: 0,
  kWarn: 1,
  kBlock: 2,
  kPermissionWarn: 3,
  kPermissionBlock: 4,
};

// Struct: ClientSecurityState
network.mojom.ClientSecurityStateSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ClientSecurityState',
      packedSize: 16,
      fields: [
        { name: 'document_isolation_policy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
