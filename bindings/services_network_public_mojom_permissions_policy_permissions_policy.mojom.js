// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/permissions_policy/permissions_policy.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};

network.mojom.OriginWithPossibleWildcardsSpec = { $: {} };
network.mojom.ParsedPermissionsPolicyDeclarationSpec = { $: {} };
network.mojom.PermissionsPolicySpec = { $: {} };

// Struct: OriginWithPossibleWildcards
mojo.internal.Struct(
    network.mojom.OriginWithPossibleWildcardsSpec, 'network.mojom.OriginWithPossibleWildcards', [
      mojo.internal.StructField('scheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port', 16, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('is_host_wildcard', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_port_wildcard', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ParsedPermissionsPolicyDeclaration
mojo.internal.Struct(
    network.mojom.ParsedPermissionsPolicyDeclarationSpec, 'network.mojom.ParsedPermissionsPolicyDeclaration', [
      mojo.internal.StructField('feature', 0, 0, network.mojom.PermissionsPolicyFeatureSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allowed_origins', 8, 0, mojo.internal.Array(network.mojom.OriginWithPossibleWildcardsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('self_if_matches', 16, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('reporting_endpoint', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('matches_all_origins', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('matches_opaque_src', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PermissionsPolicy
mojo.internal.Struct(
    network.mojom.PermissionsPolicySpec, 'network.mojom.PermissionsPolicy', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('declarations', 8, 0, mojo.internal.Array(network.mojom.ParsedPermissionsPolicyDeclarationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('inherited_policies', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('headerless', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);
