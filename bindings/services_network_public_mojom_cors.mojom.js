// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cors.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

network.mojom.CorsPreflightPolicySpec = { $: mojo.internal.Enum() };
network.mojom.CorsErrorSpec = { $: mojo.internal.Enum() };
network.mojom.CorsErrorStatusSpec = { $: {} };

// Enum: CorsPreflightPolicy
network.mojom.CorsPreflightPolicy = {
  kConsiderPreflight: 0,
  kPreventPreflight: 1,
};

// Enum: CorsError
network.mojom.CorsError = {
  kDisallowedByMode: 0,
  kInvalidResponse: 1,
  kWildcardOriginNotAllowed: 2,
  kMissingAllowOriginHeader: 3,
  kMultipleAllowOriginValues: 4,
  kInvalidAllowOriginValue: 5,
  kAllowOriginMismatch: 6,
  kInvalidAllowCredentials: 7,
  kCorsDisabledScheme: 8,
  kPreflightInvalidStatus: 9,
  kPreflightDisallowedRedirect: 10,
  kPreflightWildcardOriginNotAllowed: 11,
  kPreflightMissingAllowOriginHeader: 12,
  kPreflightMultipleAllowOriginValues: 13,
  kPreflightInvalidAllowOriginValue: 14,
  kPreflightAllowOriginMismatch: 15,
  kPreflightInvalidAllowCredentials: 16,
  kInvalidAllowMethodsPreflightResponse: 17,
  kInvalidAllowHeadersPreflightResponse: 18,
  kMethodDisallowedByPreflightResponse: 19,
  kHeaderDisallowedByPreflightResponse: 20,
  kRedirectContainsCredentials: 21,
  kInsecurePrivateNetwork: 22,
  kInvalidPrivateNetworkAccess: 23,
  kLocalNetworkAccessPermissionDenied: 24,
};

// Struct: CorsErrorStatus
mojo.internal.Struct(
    network.mojom.CorsErrorStatusSpec, 'network.mojom.CorsErrorStatus', [
      mojo.internal.StructField('cors_error', 0, 0, network.mojom.CorsErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('failed_parameter', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('resource_address_space', 16, 0, network.mojom.IPAddressSpaceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('inconsistent_address_space', 24, 0, network.mojom.IPAddressSpaceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('issue_id', 32, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_authorization_covered_by_wildcard_on_preflight', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);
