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
      packedSize: 16,
      fields: [
        { name: 'false', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'reporting_endpoint', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'inherited_policies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
