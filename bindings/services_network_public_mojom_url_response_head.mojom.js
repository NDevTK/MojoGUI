// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_response_head.mojom
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
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
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
      mojo.internal.StructField('request_time', 0, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('response_time', 8, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('original_response_time', 16, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('headers', 24, 0, network.mojom.HttpResponseHeadersSpec, null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('charset', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content_length', 48, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('encoded_data_length', 56, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('encoded_body_length', 64, 0, network.mojom.EncodedBodyLengthSpec, null, true, 0, undefined),
      mojo.internal.StructField('network_accessed', 268, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('load_timing', 72, 0, network.mojom.LoadTimingInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('load_timing_internal_info', 80, 0, network.mojom.LoadTimingInternalInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('emitted_extra_info', 268, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('was_fetched_via_spdy', 268, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('was_alpn_negotiated', 268, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('was_alternate_protocol_available', 268, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('connection_info', 88, 0, network.mojom.ConnectionInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('alpn_negotiated_protocol', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('alternate_protocol_usage', 240, 0, network.mojom.AlternateProtocolUsageSpec, null, false, 0, undefined),
      mojo.internal.StructField('remote_endpoint', 104, 0, network.mojom.IPEndPointSpec, null, false, 0, undefined),
      mojo.internal.StructField('client_address_space', 244, 0, network.mojom.IPAddressSpaceSpec, null, false, 0, undefined),
      mojo.internal.StructField('response_address_space', 248, 0, network.mojom.IPAddressSpaceSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_validated', 268, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('was_fetched_via_cache', 268, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('navigation_delivery_type', 252, 0, network.mojom.NavigationDeliveryTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('proxy_chain', 112, 0, network.mojom.ProxyChainSpec, null, false, 0, undefined),
      mojo.internal.StructField('was_fetched_via_service_worker', 268, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('url_list_via_service_worker', 120, 0, mojo.internal.Array(url.mojom.UrlSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('initial_service_worker_status', 256, 0, network.mojom.ServiceWorkerStatusSpec, null, true, 0, undefined),
      mojo.internal.StructField('service_worker_router_info', 128, 0, network.mojom.ServiceWorkerRouterInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('response_type', 260, 0, network.mojom.FetchResponseTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('padding', 136, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('cache_storage_cache_name', 144, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cert_status', 264, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('ssl_info', 152, 0, network.mojom.SSLInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('request_cookies', 160, 0, mojo.internal.Array(network.mojom.ParsedRequestCookieSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('cors_exposed_header_names', 168, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('did_service_worker_navigation_preload', 269, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('async_revalidation_requested', 269, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('did_mime_sniff', 269, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_signed_exchange_inner_response', 269, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_web_bundle_inner_response', 269, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('was_in_prefetch_cache', 269, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_prefetch_with_cross_site_contamination', 269, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('was_cookie_in_request', 269, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('intercepted_by_plugin', 270, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_range_requested', 270, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('timing_allow_passed', 270, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('auth_challenge_info', 176, 0, network.mojom.AuthChallengeInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('request_start', 184, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('response_start', 192, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('parsed_headers', 200, 0, network.mojom.ParsedHeadersSpec, null, true, 0, undefined),
      mojo.internal.StructField('recursive_prefetch_token', 208, 0, mojo_base.mojom.UnguessableTokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('dns_aliases', 216, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('has_authorization_covered_by_wildcard_on_preflight', 270, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('request_include_credentials', 270, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_use_source_hash_for_js_code_cache', 270, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('did_use_shared_dictionary', 270, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('load_with_storage_access', 270, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('client_side_content_decoding_types', 224, 0, mojo.internal.Array(network.mojom.SourceTypeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('from_synthetic_response', 271, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('bypass_redirect_checks', 271, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('unencoded_digests', 232, 0, network.mojom.UnencodedDigestsSpec, null, true, 0, undefined),
      mojo.internal.StructField('did_use_server_http_auth', 271, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 280]]);
