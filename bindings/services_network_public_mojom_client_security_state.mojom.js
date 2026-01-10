// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/client_security_state.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.PrivateNetworkRequestPolicySpec = { $: mojo.internal.Enum() };
network.mojom.ClientSecurityStateSpec = { $: {} };

// Enum: PrivateNetworkRequestPolicy
network.mojom.PrivateNetworkRequestPolicy = {
  kAllow: 0,
  kWarn: 1,
  kBlock: 2,
  kPermissionWarn: 3,
  kPermissionBlock: 4,
};

// Struct: ClientSecurityState
mojo.internal.Struct(
    network.mojom.ClientSecurityStateSpec, 'network.mojom.ClientSecurityState', [
      mojo.internal.StructField('cross_origin_embedder_policy', 0, 0, network.mojom.CrossOriginEmbedderPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ip_address_space', 8, 0, network.mojom.IPAddressSpaceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('private_network_request_policy', 16, 0, network.mojom.PrivateNetworkRequestPolicySpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('document_isolation_policy', 24, 0, network.mojom.DocumentIsolationPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_web_secure_context', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);
