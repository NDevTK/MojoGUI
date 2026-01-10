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
      packedSize: 32,
      fields: [
        { name: 'scheme', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'is_host_wildcard', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_port_wildcard', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ParsedPermissionsPolicyDeclaration
network.mojom.ParsedPermissionsPolicyDeclarationSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ParsedPermissionsPolicyDeclaration',
      packedSize: 40,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: network.mojom.PermissionsPolicyFeatureSpec, nullable: false, minVersion: 0 },
        { name: 'allowed_origins', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.OriginWithPossibleWildcardsSpec, false), nullable: false, minVersion: 0 },
        { name: 'self_if_matches', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'matches_all_origins', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'matches_opaque_src', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'reporting_endpoint', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'headerless', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'declarations', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.ParsedPermissionsPolicyDeclarationSpec, false), nullable: false, minVersion: 0 },
        { name: 'inherited_policies', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
