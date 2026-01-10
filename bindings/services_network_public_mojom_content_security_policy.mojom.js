// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/content_security_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};
var url = url || {};


// Enum: ContentSecurityPolicyType
network.mojom.ContentSecurityPolicyType = {
  kReport: 0,
  kEnforce: 1,
};
network.mojom.ContentSecurityPolicyTypeSpec = { $: mojo.internal.Enum() };

// Enum: ContentSecurityPolicySource
network.mojom.ContentSecurityPolicySource = {
  kHTTP: 0,
  kMeta: 1,
};
network.mojom.ContentSecurityPolicySourceSpec = { $: mojo.internal.Enum() };

// Enum: CSPDisposition
network.mojom.CSPDisposition = {
  CHECK: 0,
  DO_NOT_CHECK: 1,
};
network.mojom.CSPDispositionSpec = { $: mojo.internal.Enum() };

// Enum: CSPDirectiveName
network.mojom.CSPDirectiveName = {
  Unknown: 0,
  BaseURI: 1,
  BlockAllMixedContent: 2,
  ChildSrc: 3,
  ConnectSrc: 4,
  DefaultSrc: 5,
  FencedFrameSrc: 6,
  FontSrc: 7,
  FormAction: 8,
  FrameAncestors: 9,
  FrameSrc: 10,
  ImgSrc: 11,
  ManifestSrc: 12,
  MediaSrc: 13,
  ObjectSrc: 14,
  ReportTo: 15,
  ReportURI: 16,
  RequireTrustedTypesFor: 17,
  Sandbox: 18,
  ScriptSrc: 19,
  ScriptSrcV2: 20,
  ScriptSrcAttr: 21,
  ScriptSrcElem: 22,
  StyleSrc: 23,
  StyleSrcAttr: 24,
  StyleSrcElem: 25,
  TreatAsPublicAddress: 26,
  TrustedTypes: 27,
  UpgradeInsecureRequests: 28,
  WorkerSrc: 29,
};
network.mojom.CSPDirectiveNameSpec = { $: mojo.internal.Enum() };

// Enum: CSPRequireTrustedTypesFor
network.mojom.CSPRequireTrustedTypesFor = {
  None: 0,
  Script: 1,
};
network.mojom.CSPRequireTrustedTypesForSpec = { $: mojo.internal.Enum() };

// Union: AllowCSPFromHeaderValue
network.mojom.AllowCSPFromHeaderValueSpec = { $: mojo.internal.Union(
    'network.mojom.AllowCSPFromHeaderValue', {
      'allow_star': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'origin': {
        'ordinal': 1,
        'type': url.mojom.OriginSpec,
      }},
      'error_message': {
        'ordinal': 2,
        'type': mojo.internal.String,
      }},
    })
};

// Struct: ContentSecurityPolicyHeader
network.mojom.ContentSecurityPolicyHeaderSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ContentSecurityPolicyHeader',
      packedSize: 24,
      fields: [
        { name: 'header_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ContentSecurityPolicyTypeSpec, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 12, packedBitOffset: 0, type: network.mojom.ContentSecurityPolicySourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CSPSource
network.mojom.CSPSourceSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CSPSource',
      packedSize: 40,
      fields: [
        { name: 'scheme', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_host_wildcard', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_port_wildcard', packedOffset: 28, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: CSPSourceList
network.mojom.CSPSourceListSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CSPSourceList',
      packedSize: 56,
      fields: [
        { name: 'sources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.CSPSourceSpec, false), nullable: false, minVersion: 0 },
        { name: 'nonces', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'hashes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.IntegrityMetadataSpec, false), nullable: false, minVersion: 0 },
        { name: 'url_hashes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.IntegrityMetadataSpec, false), nullable: false, minVersion: 0 },
        { name: 'eval_hashes', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.IntegrityMetadataSpec, false), nullable: false, minVersion: 0 },
        { name: 'allow_self', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_star', packedOffset: 44, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_inline', packedOffset: 44, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_inline_speculation_rules', packedOffset: 44, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_eval', packedOffset: 44, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_wasm_eval', packedOffset: 44, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_wasm_unsafe_eval', packedOffset: 44, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_dynamic', packedOffset: 44, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_dynamic_url', packedOffset: 45, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_unsafe_hashes', packedOffset: 45, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'report_sample', packedOffset: 45, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_trusted_types_eval', packedOffset: 45, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'report_hash_algorithm', packedOffset: 40, packedBitOffset: 0, type: network.mojom.IntegrityAlgorithmSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: CSPTrustedTypes
network.mojom.CSPTrustedTypesSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CSPTrustedTypes',
      packedSize: 24,
      fields: [
        { name: 'list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'allow_any', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_duplicates', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ContentSecurityPolicy
network.mojom.ContentSecurityPolicySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ContentSecurityPolicy',
      packedSize: 72,
      fields: [
        { name: 'self_origin', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CSPSourceSpec, nullable: false, minVersion: 0 },
        { name: 'raw_directives', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(network.mojom.CSPDirectiveNameSpec, mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'directives', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(network.mojom.CSPDirectiveNameSpec, network.mojom.CSPSourceListSpec, false), nullable: false, minVersion: 0 },
        { name: 'upgrade_insecure_requests', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'treat_as_public_address', packedOffset: 60, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'block_all_mixed_content', packedOffset: 60, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sandbox', packedOffset: 56, packedBitOffset: 0, type: network.mojom.WebSandboxFlagsSpec, nullable: false, minVersion: 0 },
        { name: 'header', packedOffset: 24, packedBitOffset: 0, type: network.mojom.ContentSecurityPolicyHeaderSpec, nullable: false, minVersion: 0 },
        { name: 'use_reporting_api', packedOffset: 60, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'report_endpoints', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'trusted_types', packedOffset: 40, packedBitOffset: 0, type: network.mojom.CSPTrustedTypesSpec, nullable: true, minVersion: 0 },
        { name: 'parsing_errors', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: CSPViolation
network.mojom.CSPViolationSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CSPViolation',
      packedSize: 72,
      fields: [
        { name: 'directive', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'effective_directive', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'console_message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'blocked_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'report_endpoints', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'use_reporting_api', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'header', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 56, packedBitOffset: 0, type: network.mojom.ContentSecurityPolicyTypeSpec, nullable: false, minVersion: 0 },
        { name: 'source_location', packedOffset: 48, packedBitOffset: 0, type: network.mojom.SourceLocationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};
