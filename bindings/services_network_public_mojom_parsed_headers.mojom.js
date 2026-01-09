// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/parsed_headers.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: OriginAgentClusterValue
network.mojom.OriginAgentClusterValue = {
  kAbsent: 0,
  kTrue: 1,
  kFalse: 2,
};

// Struct: ParsedHeaders
network.mojom.ParsedHeadersSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ParsedHeaders',
      packedSize: 176,
      fields: [
        { name: 'content_security_policy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'allow_csp_from', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'connection_allowlists', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'cross_origin_embedder_policy', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'cross_origin_opener_policy', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'document_isolation_policy', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'integrity_policy', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'integrity_policy_report_only', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'origin_agent_cluster', packedOffset: 64, packedBitOffset: 0, type: network.mojom.OriginAgentClusterValueSpec, nullable: false },
        { name: 'accept_ch', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'critical_ch', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'xfo', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'link_headers', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'timing_allow_origin', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'supports_loading_mode', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'reporting_endpoints', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Map, nullable: true },
        { name: 'cookie_indices', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'avail_language', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'content_language', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'no_vary_search_with_parse_error', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'client_hints_ignored_due_to_clear_site_data_header', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'observe_browsing_topics', packedOffset: 160, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_cross_origin_event_reporting', packedOffset: 160, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
