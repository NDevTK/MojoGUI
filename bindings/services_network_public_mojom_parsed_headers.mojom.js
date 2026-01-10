// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/parsed_headers.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};

network.mojom.OriginAgentClusterValueSpec = { $: mojo.internal.Enum() };
network.mojom.ParsedHeadersSpec = { $: {} };

// Enum: OriginAgentClusterValue
network.mojom.OriginAgentClusterValue = {
  kAbsent: 0,
  kTrue: 1,
  kFalse: 2,
};

// Struct: ParsedHeaders
mojo.internal.Struct(
    network.mojom.ParsedHeadersSpec, 'network.mojom.ParsedHeaders', [
      mojo.internal.StructField('content_security_policy', 0, 0, mojo.internal.Array(network.mojom.ContentSecurityPolicySpec, false), null, false, 0, undefined),
      mojo.internal.StructField('allow_csp_from', 8, 0, network.mojom.AllowCSPFromHeaderValueSpec, null, true, 0, undefined),
      mojo.internal.StructField('connection_allowlists', 24, 0, network.mojom.ConnectionAllowlistsSpec, null, false, 0, undefined),
      mojo.internal.StructField('cross_origin_embedder_policy', 32, 0, network.mojom.CrossOriginEmbedderPolicySpec, null, false, 0, undefined),
      mojo.internal.StructField('cross_origin_opener_policy', 40, 0, network.mojom.CrossOriginOpenerPolicySpec, null, false, 0, undefined),
      mojo.internal.StructField('document_isolation_policy', 48, 0, network.mojom.DocumentIsolationPolicySpec, null, false, 0, undefined),
      mojo.internal.StructField('integrity_policy', 56, 0, network.mojom.IntegrityPolicySpec, null, false, 0, undefined),
      mojo.internal.StructField('integrity_policy_report_only', 64, 0, network.mojom.IntegrityPolicySpec, null, false, 0, undefined),
      mojo.internal.StructField('origin_agent_cluster', 72, 0, network.mojom.OriginAgentClusterValueSpec, null, false, 0, undefined),
      mojo.internal.StructField('accept_ch', 80, 0, mojo.internal.Array(network.mojom.WebClientHintsTypeSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('critical_ch', 88, 0, mojo.internal.Array(network.mojom.WebClientHintsTypeSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('client_hints_ignored_due_to_clear_site_data_header', 96, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('xfo', 100, 0, network.mojom.XFrameOptionsValueSpec, null, false, 0, undefined),
      mojo.internal.StructField('link_headers', 104, 0, mojo.internal.Array(network.mojom.LinkHeaderSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('timing_allow_origin', 112, 0, network.mojom.TimingAllowOriginSpec, null, true, 0, undefined),
      mojo.internal.StructField('supports_loading_mode', 128, 0, mojo.internal.Array(network.mojom.LoadingModeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('reporting_endpoints', 136, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('cookie_indices', 144, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('avail_language', 152, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('content_language', 160, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('no_vary_search_with_parse_error', 168, 0, network.mojom.NoVarySearchWithParseErrorSpec, null, true, 0, undefined),
      mojo.internal.StructField('observe_browsing_topics', 184, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_cross_origin_event_reporting', 184, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 200]]);
