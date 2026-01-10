// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_request.mojom
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
var url = url || {};

network.mojom.DataElementSpec = { $: {} };
network.mojom.EnabledClientHintsSpec = { $: {} };
network.mojom.TrustedUrlRequestParamsSpec = { $: {} };
network.mojom.WebBundleTokenParamsSpec = { $: {} };
network.mojom.URLRequestSpec = { $: {} };
network.mojom.URLRequestBodySpec = { $: {} };
network.mojom.DataElementBytesSpec = { $: {} };
network.mojom.DataElementFileSpec = { $: {} };
network.mojom.DataElementDataPipeSpec = { $: {} };
network.mojom.DataElementChunkedDataPipeSpec = { $: {} };
network.mojom.SocketTagSpec = { $: {} };

// Union: DataElement
mojo.internal.Union(
    network.mojom.DataElementSpec, 'network.mojom.DataElement', {
      'bytes': {
        'ordinal': 0,
        'type': network.mojom.DataElementBytesSpec.$,
        'nullable': false,
      },
      'file': {
        'ordinal': 1,
        'type': network.mojom.DataElementFileSpec.$,
        'nullable': false,
      },
      'data_pipe': {
        'ordinal': 2,
        'type': network.mojom.DataElementDataPipeSpec.$,
        'nullable': false,
      },
      'chunked_data_pipe': {
        'ordinal': 3,
        'type': network.mojom.DataElementChunkedDataPipeSpec.$,
        'nullable': false,
      },
    });

// Struct: EnabledClientHints
mojo.internal.Struct(
    network.mojom.EnabledClientHintsSpec, 'network.mojom.EnabledClientHints', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_outermost_main_frame', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hints', 16, 0, mojo.internal.Array(network.mojom.WebClientHintsTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('not_allowed_hints', 24, 0, mojo.internal.Array(network.mojom.WebClientHintsTypeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TrustedUrlRequestParams
mojo.internal.Struct(
    network.mojom.TrustedUrlRequestParamsSpec, 'network.mojom.TrustedUrlRequestParams', [
      mojo.internal.StructField('isolation_info', 0, 0, network.mojom.IsolationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('disable_secure_dns', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_user_activation', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_cookies_from_browser', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('include_request_cookies_with_response', 8, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enabled_client_hints', 16, 0, network.mojom.EnabledClientHintsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cookie_observer', 24, 0, mojo.internal.InterfaceProxy(network.mojom.CookieAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('trust_token_observer', 32, 0, mojo.internal.InterfaceProxy(network.mojom.TrustTokenAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('url_loader_network_observer', 40, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderNetworkServiceObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('devtools_observer', 48, 0, mojo.internal.InterfaceProxy(network.mojom.DevToolsObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('device_bound_session_observer', 56, 0, mojo.internal.InterfaceProxy(network.mojom.DeviceBoundSessionAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('client_security_state', 64, 0, network.mojom.ClientSecurityStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('accept_ch_frame_observer', 72, 0, mojo.internal.InterfaceProxy(network.mojom.AcceptCHFrameObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('shared_dictionary_observer', 80, 0, mojo.internal.InterfaceProxy(network.mojom.SharedDictionaryAccessObserverRemote), null, true, 0, undefined),
    ],
    [[0, 96]]);

// Struct: WebBundleTokenParams
mojo.internal.Struct(
    network.mojom.WebBundleTokenParamsSpec, 'network.mojom.WebBundleTokenParams', [
      mojo.internal.StructField('bundle_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('token', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('web_bundle_handle', 16, 0, mojo.internal.InterfaceProxy(network.mojom.WebBundleHandleRemote), null, true, 0, undefined),
      mojo.internal.StructField('render_process_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: URLRequest
mojo.internal.Struct(
    network.mojom.URLRequestSpec, 'network.mojom.URLRequest', [
      mojo.internal.StructField('method', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('site_for_cookies', 16, 0, network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('update_first_party_url_on_redirect', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('request_initiator', 32, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('navigation_redirect_chain', 40, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('isolated_world_origin', 48, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('referrer', 56, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('referrer_policy', 64, 0, network.mojom.URLRequestReferrerPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('headers', 72, 0, network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cors_exempt_headers', 80, 0, network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('load_flags', 88, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('resource_type', 92, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('priority', 96, 0, network.mojom.RequestPrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('priority_incremental', 104, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('cors_preflight_policy', 112, 0, network.mojom.CorsPreflightPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('originated_from_service_worker', 120, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('skip_service_worker', 120, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('mode', 128, 0, network.mojom.RequestModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('credentials_mode', 136, 0, network.mojom.CredentialsModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('redirect_mode', 144, 0, network.mojom.RedirectModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fetch_integrity', 152, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('expected_public_keys', 160, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('destination', 168, 0, network.mojom.RequestDestinationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_body', 176, 0, network.mojom.URLRequestBodySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('keepalive', 184, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('browsing_topics', 184, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ad_auction_headers', 184, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shared_storage_writable_eligible', 184, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_user_gesture', 184, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_load_timing', 184, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_upload_progress', 184, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('do_not_prompt_for_login', 184, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_outermost_main_frame', 185, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('transition_type', 188, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('previews_state', 192, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('upgrade_if_insecure', 196, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_revalidating', 196, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('throttling_profile_id', 200, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('fetch_window_id', 208, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('devtools_request_id', 216, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('devtools_stack_id', 224, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('is_fetch_like_api', 232, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_fetch_later_api', 232, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_favicon', 232, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('original_destination', 240, 0, network.mojom.RequestDestinationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trusted_params', 248, 0, network.mojom.TrustedUrlRequestParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('recursive_prefetch_token', 256, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('trust_token_params', 264, 0, network.mojom.TrustTokenParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('web_bundle_token_params', 272, 0, network.mojom.WebBundleTokenParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('devtools_accepted_stream_types', 280, 0, mojo.internal.Array(network.mojom.SourceTypeSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('net_log_create_info', 288, 0, network.mojom.NetLogSourceSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('net_log_reference_info', 296, 0, network.mojom.NetLogSourceSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('required_ip_address_space', 304, 0, network.mojom.IPAddressSpaceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('storage_access_api_status', 312, 0, network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attribution_reporting_support', 320, 0, network.mojom.AttributionSupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attribution_reporting_src_token', 328, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('keepalive_token', 336, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_ad_tagged', 344, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shared_dictionary_writer_enabled', 344, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('client_side_content_decoding_enabled', 344, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('socket_tag', 352, 0, network.mojom.SocketTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allows_device_bound_session_registration', 360, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('permissions_policy', 368, 0, network.mojom.PermissionsPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('fetch_retry_options', 376, 0, network.mojom.FetchRetryOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 392]]);

// Struct: URLRequestBody
mojo.internal.Struct(
    network.mojom.URLRequestBodySpec, 'network.mojom.URLRequestBody', [
      mojo.internal.StructField('elements', 0, 0, mojo.internal.Array(network.mojom.DataElementSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('identifier', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('contains_sensitive_info', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_http1_for_streaming_upload', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DataElementBytes
mojo.internal.Struct(
    network.mojom.DataElementBytesSpec, 'network.mojom.DataElementBytes', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DataElementFile
mojo.internal.Struct(
    network.mojom.DataElementFileSpec, 'network.mojom.DataElementFile', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('length', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('expected_modification_time', 24, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DataElementDataPipe
mojo.internal.Struct(
    network.mojom.DataElementDataPipeSpec, 'network.mojom.DataElementDataPipe', [
      mojo.internal.StructField('data_pipe_getter', 0, 0, mojo.internal.InterfaceProxy(network.mojom.DataPipeGetterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DataElementChunkedDataPipe
mojo.internal.Struct(
    network.mojom.DataElementChunkedDataPipeSpec, 'network.mojom.DataElementChunkedDataPipe', [
      mojo.internal.StructField('data_pipe_getter', 0, 0, mojo.internal.InterfaceProxy(network.mojom.ChunkedDataPipeGetterRemote), null, false, 0, undefined),
      mojo.internal.StructField('read_only_once', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SocketTag
mojo.internal.Struct(
    network.mojom.SocketTagSpec, 'network.mojom.SocketTag', [
      mojo.internal.StructField('uid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('tag', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);
