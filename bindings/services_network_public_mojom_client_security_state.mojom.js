// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/client_security_state.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};

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
      mojo.internal.StructField('cross_origin_embedder_policy', 0, 0, network.mojom.CrossOriginEmbedderPolicySpec, null, false, 0, undefined),
      mojo.internal.StructField('is_web_secure_context', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ip_address_space', 16, 0, network.mojom.IPAddressSpaceSpec, null, false, 0, undefined),
      mojo.internal.StructField('private_network_request_policy', 20, 0, network.mojom.PrivateNetworkRequestPolicySpec, null, false, 0, undefined),
      mojo.internal.StructField('document_isolation_policy', 8, 0, network.mojom.DocumentIsolationPolicySpec, null, false, 0, undefined),
    ],
    [[0, 40]]);
