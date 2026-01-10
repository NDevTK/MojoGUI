// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/early_hints.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};

network.mojom.EarlyHintsSpec = { $: {} };

// Struct: EarlyHints
mojo.internal.Struct(
    network.mojom.EarlyHintsSpec, 'network.mojom.EarlyHints', [
      mojo.internal.StructField('headers', 0, 0, network.mojom.ParsedHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('referrer_policy', 8, 0, network.mojom.ReferrerPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ip_address_space', 16, 0, network.mojom.IPAddressSpaceSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);
