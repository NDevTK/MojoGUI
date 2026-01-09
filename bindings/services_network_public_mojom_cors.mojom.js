// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cors.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


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
network.mojom.CorsErrorStatusSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CorsErrorStatus',
      packedSize: 56,
      fields: [
        { name: 'cors_error', packedOffset: 8, packedBitOffset: 0, type: network.mojom.CorsErrorSpec, nullable: false },
        { name: 'failed_parameter', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'resource_address_space', packedOffset: 24, packedBitOffset: 0, type: network.mojom.IPAddressSpaceSpec, nullable: false },
        { name: 'inconsistent_address_space', packedOffset: 32, packedBitOffset: 0, type: network.mojom.IPAddressSpaceSpec, nullable: false },
        { name: 'has_authorization_covered_by_wildcard_on_preflight', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'issue_id', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
