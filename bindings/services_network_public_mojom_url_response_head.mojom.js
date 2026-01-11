// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_response_head.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};
var proxy_resolver = proxy_resolver || {};
var url = url || {};

network.mojom.NavigationDeliveryTypeSpec = { $: mojo.internal.Enum() };
network.mojom.URLResponseHeadSpec = { $: {} };

// Enum: NavigationDeliveryType
network.mojom.NavigationDeliveryType = {
  kDefault: 0,
  kNavigationalPrefetch: 1,
};

// Struct: URLResponseHead
mojo.internal.Struct(
    network.mojom.URLResponseHeadSpec, 'network.mojom.URLResponseHead', [
      mojo.internal.StructField('request_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('original_response_time', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('headers', 24, 0, network.mojom.HttpResponseHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('charset', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content_length', 48, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('encoded_data_length', 56, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('encoded_body_length', 64, 0, network.mojom.EncodedBodyLengthSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('load_timing', 72, 0, network.mojom.LoadTimingInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('load_timing_internal_info', 80, 0, network.mojom.LoadTimingInternalInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('connection_info', 88, 0, network.mojom.ConnectionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('alpn_negotiated_protocol', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('alternate_protocol_usage', 104, 0, network.mojom.AlternateProtocolUsageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_endpoint', 112, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_address_space', 120, 0, network.mojom.IPAddressSpaceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('response_address_space', 128, 0, network.mojom.IPAddressSpaceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('navigation_delivery_type', 136, 0, network.mojom.NavigationDeliveryTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('proxy_chain', 144, 0, network.mojom.ProxyChainSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url_list_via_service_worker', 152, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('initial_service_worker_status', 160, 0, network.mojom.ServiceWorkerStatusSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('service_worker_router_info', 168, 0, network.mojom.ServiceWorkerRouterInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('response_type', 176, 0, network.mojom.FetchResponseTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('padding', 184, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('cache_storage_cache_name', 192, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('ssl_info', 200, 0, network.mojom.SSLInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('request_cookies', 208, 0, mojo.internal.Array(network.mojom.ParsedRequestCookieSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('cors_exposed_header_names', 216, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('auth_challenge_info', 224, 0, network.mojom.AuthChallengeInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('request_start', 232, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response_start', 240, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('parsed_headers', 248, 0, network.mojom.ParsedHeadersSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('recursive_prefetch_token', 256, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('dns_aliases', 264, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('client_side_content_decoding_types', 272, 0, mojo.internal.Array(network.mojom.SourceTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('unencoded_digests', 280, 0, network.mojom.UnencodedDigestsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cert_status', 288, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('network_accessed', 292, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('emitted_extra_info', 292, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('was_fetched_via_spdy', 292, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('was_alpn_negotiated', 292, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('was_alternate_protocol_available', 292, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_validated', 292, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('was_fetched_via_cache', 292, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('was_fetched_via_service_worker', 292, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('did_service_worker_navigation_preload', 293, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('async_revalidation_requested', 293, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('did_mime_sniff', 293, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_signed_exchange_inner_response', 293, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_web_bundle_inner_response', 293, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('was_in_prefetch_cache', 293, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_prefetch_with_cross_site_contamination', 293, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('was_cookie_in_request', 293, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('intercepted_by_plugin', 294, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_range_requested', 294, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('timing_allow_passed', 294, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_authorization_covered_by_wildcard_on_preflight', 294, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('request_include_credentials', 294, 4, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('should_use_source_hash_for_js_code_cache', 294, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('did_use_shared_dictionary', 294, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('load_with_storage_access', 294, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('from_synthetic_response', 295, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('bypass_redirect_checks', 295, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('did_use_server_http_auth', 295, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 304]]);
