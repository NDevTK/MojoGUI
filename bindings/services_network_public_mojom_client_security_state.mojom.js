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
      packedSize: 48,
      fields: [
        { name: 'cross_origin_embedder_policy', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CrossOriginEmbedderPolicySpec, nullable: false },
        { name: 'is_web_secure_context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'ip_address_space', packedOffset: 16, packedBitOffset: 0, type: network.mojom.IPAddressSpaceSpec, nullable: false },
        { name: 'private_network_request_policy', packedOffset: 24, packedBitOffset: 0, type: network.mojom.PrivateNetworkRequestPolicySpec, nullable: false },
        { name: 'document_isolation_policy', packedOffset: 32, packedBitOffset: 0, type: network.mojom.DocumentIsolationPolicySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
