// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/parsed_headers.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: OriginAgentClusterValue
network.mojom.mojom.OriginAgentClusterValue = {
  kAbsent: 0,
  kTrue: 1,
  kFalse: 2,
};
network.mojom.mojom.OriginAgentClusterValueSpec = { $: mojo.internal.Enum() };

// Struct: ParsedHeaders
network.mojom.mojom.ParsedHeadersSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ParsedHeaders',
      packedSize: 192,
      fields: [
        { name: 'content_security_policy', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.ContentSecurityPolicySpec, false), nullable: false, minVersion: 0 },
        { name: 'allow_csp_from', packedOffset: 0, packedBitOffset: 0, type: network.mojom.AllowCSPFromHeaderValueSpec, nullable: true, minVersion: 0 },
        { name: 'connection_allowlists', packedOffset: 56, packedBitOffset: 0, type: network.mojom.ConnectionAllowlistsSpec, nullable: false, minVersion: 0 },
        { name: 'cross_origin_embedder_policy', packedOffset: 64, packedBitOffset: 0, type: network.mojom.CrossOriginEmbedderPolicySpec, nullable: false, minVersion: 0 },
        { name: 'cross_origin_opener_policy', packedOffset: 72, packedBitOffset: 0, type: network.mojom.CrossOriginOpenerPolicySpec, nullable: false, minVersion: 0 },
        { name: 'document_isolation_policy', packedOffset: 80, packedBitOffset: 0, type: network.mojom.DocumentIsolationPolicySpec, nullable: false, minVersion: 0 },
        { name: 'integrity_policy', packedOffset: 88, packedBitOffset: 0, type: network.mojom.IntegrityPolicySpec, nullable: false, minVersion: 0 },
        { name: 'integrity_policy_report_only', packedOffset: 96, packedBitOffset: 0, type: network.mojom.IntegrityPolicySpec, nullable: false, minVersion: 0 },
        { name: 'origin_agent_cluster', packedOffset: 168, packedBitOffset: 0, type: network.mojom.OriginAgentClusterValueSpec, nullable: false, minVersion: 0 },
        { name: 'accept_ch', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.WebClientHintsTypeSpec, false), nullable: true, minVersion: 0 },
        { name: 'critical_ch', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.WebClientHintsTypeSpec, false), nullable: true, minVersion: 0 },
        { name: 'client_hints_ignored_due_to_clear_site_data_header', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'xfo', packedOffset: 172, packedBitOffset: 0, type: network.mojom.XFrameOptionsValueSpec, nullable: false, minVersion: 0 },
        { name: 'link_headers', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.LinkHeaderSpec, false), nullable: false, minVersion: 0 },
        { name: 'timing_allow_origin', packedOffset: 16, packedBitOffset: 0, type: network.mojom.TimingAllowOriginSpec, nullable: true, minVersion: 0 },
        { name: 'supports_loading_mode', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.LoadingModeSpec, false), nullable: false, minVersion: 0 },
        { name: 'reporting_endpoints', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'cookie_indices', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'avail_language', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'content_language', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'no_vary_search_with_parse_error', packedOffset: 32, packedBitOffset: 0, type: network.mojom.NoVarySearchWithParseErrorSpec, nullable: true, minVersion: 0 },
        { name: 'observe_browsing_topics', packedOffset: 176, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_cross_origin_event_reporting', packedOffset: 176, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 192}]
    }
  }
};
