// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_response_head.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};


// Enum: NavigationDeliveryType
network.mojom.NavigationDeliveryType = {
  kDefault: 0,
  kNavigationalPrefetch: 1,
};
network.mojom.NavigationDeliveryTypeSpec = { $: mojo.internal.Enum() };

// Struct: URLResponseHead
network.mojom.URLResponseHeadSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLResponseHead',
      packedSize: 280,
      fields: [
        { name: 'request_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'response_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'original_response_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'headers', packedOffset: 24, packedBitOffset: 0, type: network.mojom.HttpResponseHeadersSpec, nullable: false, minVersion: 0 },
        { name: 'mime_type', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'charset', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'content_length', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'encoded_data_length', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'encoded_body_length', packedOffset: 64, packedBitOffset: 0, type: network.mojom.EncodedBodyLengthSpec, nullable: true, minVersion: 0 },
        { name: 'network_accessed', packedOffset: 268, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'load_timing', packedOffset: 72, packedBitOffset: 0, type: network.mojom.LoadTimingInfoSpec, nullable: false, minVersion: 0 },
        { name: 'load_timing_internal_info', packedOffset: 80, packedBitOffset: 0, type: network.mojom.LoadTimingInternalInfoSpec, nullable: true, minVersion: 0 },
        { name: 'emitted_extra_info', packedOffset: 268, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'was_fetched_via_spdy', packedOffset: 268, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'was_alpn_negotiated', packedOffset: 268, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'was_alternate_protocol_available', packedOffset: 268, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'connection_info', packedOffset: 88, packedBitOffset: 0, type: network.mojom.ConnectionInfoSpec, nullable: false, minVersion: 0 },
        { name: 'alpn_negotiated_protocol', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'alternate_protocol_usage', packedOffset: 240, packedBitOffset: 0, type: network.mojom.AlternateProtocolUsageSpec, nullable: false, minVersion: 0 },
        { name: 'remote_endpoint', packedOffset: 104, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: false, minVersion: 0 },
        { name: 'client_address_space', packedOffset: 244, packedBitOffset: 0, type: network.mojom.IPAddressSpaceSpec, nullable: false, minVersion: 0 },
        { name: 'response_address_space', packedOffset: 248, packedBitOffset: 0, type: network.mojom.IPAddressSpaceSpec, nullable: false, minVersion: 0 },
        { name: 'is_validated', packedOffset: 268, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'was_fetched_via_cache', packedOffset: 268, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'navigation_delivery_type', packedOffset: 252, packedBitOffset: 0, type: network.mojom.NavigationDeliveryTypeSpec, nullable: false, minVersion: 0 },
        { name: 'proxy_chain', packedOffset: 112, packedBitOffset: 0, type: network.mojom.ProxyChainSpec, nullable: false, minVersion: 0 },
        { name: 'was_fetched_via_service_worker', packedOffset: 268, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'url_list_via_service_worker', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
        { name: 'initial_service_worker_status', packedOffset: 256, packedBitOffset: 0, type: network.mojom.ServiceWorkerStatusSpec, nullable: true, minVersion: 0 },
        { name: 'service_worker_router_info', packedOffset: 128, packedBitOffset: 0, type: network.mojom.ServiceWorkerRouterInfoSpec, nullable: true, minVersion: 0 },
        { name: 'response_type', packedOffset: 260, packedBitOffset: 0, type: network.mojom.FetchResponseTypeSpec, nullable: false, minVersion: 0 },
        { name: 'padding', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'cache_storage_cache_name', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'cert_status', packedOffset: 264, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'ssl_info', packedOffset: 152, packedBitOffset: 0, type: network.mojom.SSLInfoSpec, nullable: true, minVersion: 0 },
        { name: 'request_cookies', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.ParsedRequestCookieSpec, false), nullable: false, minVersion: 0 },
        { name: 'cors_exposed_header_names', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'did_service_worker_navigation_preload', packedOffset: 269, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'async_revalidation_requested', packedOffset: 269, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'did_mime_sniff', packedOffset: 269, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_signed_exchange_inner_response', packedOffset: 269, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_web_bundle_inner_response', packedOffset: 269, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'was_in_prefetch_cache', packedOffset: 269, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_prefetch_with_cross_site_contamination', packedOffset: 269, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'was_cookie_in_request', packedOffset: 269, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'intercepted_by_plugin', packedOffset: 270, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_range_requested', packedOffset: 270, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'timing_allow_passed', packedOffset: 270, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'auth_challenge_info', packedOffset: 176, packedBitOffset: 0, type: network.mojom.AuthChallengeInfoSpec, nullable: true, minVersion: 0 },
        { name: 'request_start', packedOffset: 184, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'response_start', packedOffset: 192, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'parsed_headers', packedOffset: 200, packedBitOffset: 0, type: network.mojom.ParsedHeadersSpec, nullable: true, minVersion: 0 },
        { name: 'recursive_prefetch_token', packedOffset: 208, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'dns_aliases', packedOffset: 216, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'has_authorization_covered_by_wildcard_on_preflight', packedOffset: 270, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'request_include_credentials', packedOffset: 270, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'should_use_source_hash_for_js_code_cache', packedOffset: 270, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'did_use_shared_dictionary', packedOffset: 270, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'load_with_storage_access', packedOffset: 270, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'client_side_content_decoding_types', packedOffset: 224, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.SourceTypeSpec, false), nullable: false, minVersion: 0 },
        { name: 'from_synthetic_response', packedOffset: 271, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'bypass_redirect_checks', packedOffset: 271, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'unencoded_digests', packedOffset: 232, packedBitOffset: 0, type: network.mojom.UnencodedDigestsSpec, nullable: true, minVersion: 0 },
        { name: 'did_use_server_http_auth', packedOffset: 271, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 280}]
    }
  }
};
