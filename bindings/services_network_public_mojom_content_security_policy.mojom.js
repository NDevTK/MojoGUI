// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/content_security_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: ContentSecurityPolicyType
network.mojom.ContentSecurityPolicyType = {
  kReport: 0,
  kEnforce: 1,
};

// Enum: ContentSecurityPolicySource
network.mojom.ContentSecurityPolicySource = {
  kHTTP: 0,
  kMeta: 1,
};

// Enum: CSPDisposition
network.mojom.CSPDisposition = {
  CHECK: 0,
  DO_NOT_CHECK: 1,
};

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

// Enum: CSPRequireTrustedTypesFor
network.mojom.CSPRequireTrustedTypesFor = {
  None: 0,
  Script: 1,
};

// Struct: ContentSecurityPolicyHeader
network.mojom.ContentSecurityPolicyHeaderSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ContentSecurityPolicyHeader',
      packedSize: 32,
      fields: [
        { name: 'header_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ContentSecurityPolicyTypeSpec, nullable: false },
        { name: 'source', packedOffset: 16, packedBitOffset: 0, type: network.mojom.ContentSecurityPolicySourceSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CSPSource
network.mojom.CSPSourceSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CSPSource',
      packedSize: 48,
      fields: [
        { name: 'scheme', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'path', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'port', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'is_host_wildcard', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_port_wildcard', packedOffset: 28, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CSPSourceList
network.mojom.CSPSourceListSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CSPSourceList',
      packedSize: 64,
      fields: [
        { name: 'sources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'nonces', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'hashes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'url_hashes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'eval_hashes', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'report_hash_algorithm', packedOffset: 40, packedBitOffset: 0, type: network.mojom.IntegrityAlgorithmSpec, nullable: true },
        { name: 'allow_self', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_star', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_inline', packedOffset: 48, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_inline_speculation_rules', packedOffset: 48, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_eval', packedOffset: 48, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_wasm_eval', packedOffset: 48, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_wasm_unsafe_eval', packedOffset: 48, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_dynamic', packedOffset: 48, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_dynamic_url', packedOffset: 48, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_unsafe_hashes', packedOffset: 48, packedBitOffset: 9, type: mojo.internal.Bool, nullable: false },
        { name: 'report_sample', packedOffset: 48, packedBitOffset: 10, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_trusted_types_eval', packedOffset: 48, packedBitOffset: 11, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'allow_any', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_duplicates', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ContentSecurityPolicy
network.mojom.ContentSecurityPolicySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ContentSecurityPolicy',
      packedSize: 80,
      fields: [
        { name: 'self_origin', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CSPSourceSpec, nullable: false },
        { name: 'raw_directives', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'directives', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'sandbox', packedOffset: 24, packedBitOffset: 0, type: network.mojom.WebSandboxFlagsSpec, nullable: false },
        { name: 'header', packedOffset: 32, packedBitOffset: 0, type: network.mojom.ContentSecurityPolicyHeaderSpec, nullable: false },
        { name: 'report_endpoints', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'trusted_types', packedOffset: 48, packedBitOffset: 0, type: network.mojom.CSPTrustedTypesSpec, nullable: true },
        { name: 'parsing_errors', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'upgrade_insecure_requests', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'treat_as_public_address', packedOffset: 64, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'block_all_mixed_content', packedOffset: 64, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'use_reporting_api', packedOffset: 64, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CSPViolation
network.mojom.CSPViolationSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CSPViolation',
      packedSize: 80,
      fields: [
        { name: 'directive', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'effective_directive', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'console_message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'blocked_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'report_endpoints', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'header', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'type', packedOffset: 48, packedBitOffset: 0, type: network.mojom.ContentSecurityPolicyTypeSpec, nullable: false },
        { name: 'source_location', packedOffset: 56, packedBitOffset: 0, type: network.mojom.SourceLocationSpec, nullable: false },
        { name: 'use_reporting_api', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
