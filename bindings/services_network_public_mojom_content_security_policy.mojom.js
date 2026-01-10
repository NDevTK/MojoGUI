// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/content_security_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};
var url = url || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};

network.mojom.ContentSecurityPolicyTypeSpec = { $: mojo.internal.Enum() };
network.mojom.ContentSecurityPolicySourceSpec = { $: mojo.internal.Enum() };
network.mojom.CSPDispositionSpec = { $: mojo.internal.Enum() };
network.mojom.CSPDirectiveNameSpec = { $: mojo.internal.Enum() };
network.mojom.CSPRequireTrustedTypesForSpec = { $: mojo.internal.Enum() };
network.mojom.AllowCSPFromHeaderValueSpec = { $: {} };
network.mojom.ContentSecurityPolicyHeaderSpec = { $: {} };
network.mojom.CSPSourceSpec = { $: {} };
network.mojom.CSPSourceListSpec = { $: {} };
network.mojom.CSPTrustedTypesSpec = { $: {} };
network.mojom.ContentSecurityPolicySpec = { $: {} };
network.mojom.CSPViolationSpec = { $: {} };

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

// Union: AllowCSPFromHeaderValue
mojo.internal.Union(
    network.mojom.AllowCSPFromHeaderValueSpec, 'network.mojom.AllowCSPFromHeaderValue', {
      'allow_star': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'origin': {
        'ordinal': 1,
        'type': url.mojom.OriginSpec,
        'nullable': false,
      },
      'error_message': {
        'ordinal': 2,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: ContentSecurityPolicyHeader
mojo.internal.Struct(
    network.mojom.ContentSecurityPolicyHeaderSpec, 'network.mojom.ContentSecurityPolicyHeader', [
      mojo.internal.StructField('header_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, network.mojom.ContentSecurityPolicyTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('source', 12, 0, network.mojom.ContentSecurityPolicySourceSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CSPSource
mojo.internal.Struct(
    network.mojom.CSPSourceSpec, 'network.mojom.CSPSource', [
      mojo.internal.StructField('scheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('path', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_host_wildcard', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_port_wildcard', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: CSPSourceList
mojo.internal.Struct(
    network.mojom.CSPSourceListSpec, 'network.mojom.CSPSourceList', [
      mojo.internal.StructField('sources', 0, 0, mojo.internal.Array(network.mojom.CSPSourceSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('nonces', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('hashes', 16, 0, mojo.internal.Array(network.mojom.IntegrityMetadataSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('url_hashes', 24, 0, mojo.internal.Array(network.mojom.IntegrityMetadataSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('eval_hashes', 32, 0, mojo.internal.Array(network.mojom.IntegrityMetadataSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('allow_self', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_star', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_inline', 40, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_inline_speculation_rules', 40, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_eval', 40, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_wasm_eval', 40, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_wasm_unsafe_eval', 40, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_dynamic', 40, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_dynamic_url', 41, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_unsafe_hashes', 41, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('report_sample', 41, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_trusted_types_eval', 41, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('report_hash_algorithm', 44, 0, network.mojom.IntegrityAlgorithmSpec, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: CSPTrustedTypes
mojo.internal.Struct(
    network.mojom.CSPTrustedTypesSpec, 'network.mojom.CSPTrustedTypes', [
      mojo.internal.StructField('list', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('allow_any', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_duplicates', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ContentSecurityPolicy
mojo.internal.Struct(
    network.mojom.ContentSecurityPolicySpec, 'network.mojom.ContentSecurityPolicy', [
      mojo.internal.StructField('self_origin', 0, 0, network.mojom.CSPSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('raw_directives', 8, 0, mojo.internal.Map(network.mojom.CSPDirectiveNameSpec, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('directives', 16, 0, mojo.internal.Map(network.mojom.CSPDirectiveNameSpec, network.mojom.CSPSourceListSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('upgrade_insecure_requests', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('treat_as_public_address', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('block_all_mixed_content', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sandbox', 28, 0, network.mojom.WebSandboxFlagsSpec, null, false, 0, undefined),
      mojo.internal.StructField('header', 32, 0, network.mojom.ContentSecurityPolicyHeaderSpec, null, false, 0, undefined),
      mojo.internal.StructField('use_reporting_api', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('report_endpoints', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('trusted_types', 56, 0, network.mojom.CSPTrustedTypesSpec, null, true, 0, undefined),
      mojo.internal.StructField('parsing_errors', 64, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: CSPViolation
mojo.internal.Struct(
    network.mojom.CSPViolationSpec, 'network.mojom.CSPViolation', [
      mojo.internal.StructField('directive', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('effective_directive', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('console_message', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('blocked_url', 24, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('report_endpoints', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('use_reporting_api', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('header', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 56, 0, network.mojom.ContentSecurityPolicyTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('source_location', 64, 0, network.mojom.SourceLocationSpec, null, false, 0, undefined),
    ],
    [[0, 80]]);
