// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/permissions_policy/permissions_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: OriginWithPossibleWildcards
network.mojom.OriginWithPossibleWildcardsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.OriginWithPossibleWildcards',
      packedSize: 40,
      fields: [
        { name: 'scheme', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'host', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'port', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'is_host_wildcard', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_port_wildcard', packedOffset: 28, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ParsedPermissionsPolicyDeclaration
network.mojom.ParsedPermissionsPolicyDeclarationSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ParsedPermissionsPolicyDeclaration',
      packedSize: 48,
      fields: [
        { name: 'feature', packedOffset: 8, packedBitOffset: 0, type: network.mojom.PermissionsPolicyFeatureSpec, nullable: false },
        { name: 'allowed_origins', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'self_if_matches', packedOffset: 24, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true },
        { name: 'matches_all_origins', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'matches_opaque_src', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'reporting_endpoint', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PermissionsPolicy
network.mojom.PermissionsPolicySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.PermissionsPolicy',
      packedSize: 40,
      fields: [
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'headerless', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'declarations', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'inherited_policies', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
