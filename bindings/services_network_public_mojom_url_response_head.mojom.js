// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_response_head.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: NavigationDeliveryType
network.mojom.NavigationDeliveryType = {
  kDefault: 0,
  kNavigationalPrefetch: 1,
};

// Struct: URLResponseHead
network.mojom.URLResponseHeadSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLResponseHead',
      packedSize: 368,
      fields: [
        { name: 'request_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'response_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'original_response_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'headers', packedOffset: 24, packedBitOffset: 0, type: network.mojom.HttpResponseHeadersSpec, nullable: false },
        { name: 'mime_type', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'charset', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'content_length', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'encoded_data_length', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'encoded_body_length', packedOffset: 64, packedBitOffset: 0, type: network.mojom.EncodedBodyLengthSpec, nullable: true },
        { name: 'network_accessed', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'load_timing', packedOffset: 80, packedBitOffset: 0, type: network.mojom.LoadTimingInfoSpec, nullable: false },
        { name: 'load_timing_internal_info', packedOffset: 88, packedBitOffset: 0, type: network.mojom.LoadTimingInternalInfoSpec, nullable: true },
        { name: 'emitted_extra_info', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'was_fetched_via_spdy', packedOffset: 96, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'was_alpn_negotiated', packedOffset: 96, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'was_alternate_protocol_available', packedOffset: 96, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'connection_info', packedOffset: 104, packedBitOffset: 0, type: network.mojom.ConnectionInfoSpec, nullable: false },
        { name: 'alpn_negotiated_protocol', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'alternate_protocol_usage', packedOffset: 120, packedBitOffset: 0, type: network.mojom.AlternateProtocolUsageSpec, nullable: false },
        { name: 'remote_endpoint', packedOffset: 128, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: false },
        { name: 'client_address_space', packedOffset: 136, packedBitOffset: 0, type: network.mojom.IPAddressSpaceSpec, nullable: false },
        { name: 'response_address_space', packedOffset: 144, packedBitOffset: 0, type: network.mojom.IPAddressSpaceSpec, nullable: false },
        { name: 'is_validated', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'was_fetched_via_cache', packedOffset: 152, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'navigation_delivery_type', packedOffset: 160, packedBitOffset: 0, type: network.mojom.NavigationDeliveryTypeSpec, nullable: false },
        { name: 'proxy_chain', packedOffset: 168, packedBitOffset: 0, type: network.mojom.ProxyChainSpec, nullable: false },
        { name: 'was_fetched_via_service_worker', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'url_list_via_service_worker', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'initial_service_worker_status', packedOffset: 192, packedBitOffset: 0, type: network.mojom.ServiceWorkerStatusSpec, nullable: true },
        { name: 'service_worker_router_info', packedOffset: 200, packedBitOffset: 0, type: network.mojom.ServiceWorkerRouterInfoSpec, nullable: true },
        { name: 'response_type', packedOffset: 208, packedBitOffset: 0, type: network.mojom.FetchResponseTypeSpec, nullable: false },
        { name: 'padding', packedOffset: 216, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'cache_storage_cache_name', packedOffset: 224, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'cert_status', packedOffset: 232, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'ssl_info', packedOffset: 240, packedBitOffset: 0, type: network.mojom.SSLInfoSpec, nullable: true },
        { name: 'request_cookies', packedOffset: 248, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'cors_exposed_header_names', packedOffset: 256, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'did_service_worker_navigation_preload', packedOffset: 264, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'async_revalidation_requested', packedOffset: 264, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'did_mime_sniff', packedOffset: 264, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'is_signed_exchange_inner_response', packedOffset: 264, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'is_web_bundle_inner_response', packedOffset: 264, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'was_in_prefetch_cache', packedOffset: 264, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'is_prefetch_with_cross_site_contamination', packedOffset: 264, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'was_cookie_in_request', packedOffset: 264, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'intercepted_by_plugin', packedOffset: 264, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
        { name: 'has_range_requested', packedOffset: 264, packedBitOffset: 9, type: mojo.internal.Bool, nullable: false },
        { name: 'timing_allow_passed', packedOffset: 264, packedBitOffset: 10, type: mojo.internal.Bool, nullable: false },
        { name: 'auth_challenge_info', packedOffset: 272, packedBitOffset: 0, type: network.mojom.AuthChallengeInfoSpec, nullable: true },
        { name: 'request_start', packedOffset: 280, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'response_start', packedOffset: 288, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'parsed_headers', packedOffset: 296, packedBitOffset: 0, type: network.mojom.ParsedHeadersSpec, nullable: true },
        { name: 'recursive_prefetch_token', packedOffset: 304, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
        { name: 'dns_aliases', packedOffset: 312, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'has_authorization_covered_by_wildcard_on_preflight', packedOffset: 320, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'request_include_credentials', packedOffset: 320, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'should_use_source_hash_for_js_code_cache', packedOffset: 320, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'did_use_shared_dictionary', packedOffset: 320, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'load_with_storage_access', packedOffset: 320, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'client_side_content_decoding_types', packedOffset: 328, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'from_synthetic_response', packedOffset: 336, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'bypass_redirect_checks', packedOffset: 336, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'unencoded_digests', packedOffset: 344, packedBitOffset: 0, type: network.mojom.UnencodedDigestsSpec, nullable: true },
        { name: 'did_use_server_http_auth', packedOffset: 352, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
