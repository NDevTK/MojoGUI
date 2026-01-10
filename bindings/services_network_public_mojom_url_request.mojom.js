// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_request.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};
var url = url || {};


// Union: DataElement
network.mojom.mojom.DataElementSpec = { $: mojo.internal.Union(
    'network.mojom.DataElement', {
      'bytes': {
        'ordinal': 0,
        'type': network.mojom.DataElementBytesSpec,
      }},
      'file': {
        'ordinal': 1,
        'type': network.mojom.DataElementFileSpec,
      }},
      'data_pipe': {
        'ordinal': 2,
        'type': network.mojom.DataElementDataPipeSpec,
      }},
      'chunked_data_pipe': {
        'ordinal': 3,
        'type': network.mojom.DataElementChunkedDataPipeSpec,
      }},
    })
};

// Struct: EnabledClientHints
network.mojom.mojom.EnabledClientHintsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.EnabledClientHints',
      packedSize: 40,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'is_outermost_main_frame', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'hints', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.WebClientHintsTypeSpec, false), nullable: false, minVersion: 0 },
        { name: 'not_allowed_hints', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.WebClientHintsTypeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: TrustedUrlRequestParams
network.mojom.mojom.TrustedUrlRequestParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustedUrlRequestParams',
      packedSize: 96,
      fields: [
        { name: 'isolation_info', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IsolationInfoSpec, nullable: false, minVersion: 0 },
        { name: 'disable_secure_dns', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_user_activation', packedOffset: 80, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_cookies_from_browser', packedOffset: 80, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'include_request_cookies_with_response', packedOffset: 80, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enabled_client_hints', packedOffset: 8, packedBitOffset: 0, type: network.mojom.EnabledClientHintsSpec, nullable: true, minVersion: 0 },
        { name: 'cookie_observer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.CookieAccessObserverRemote), nullable: true, minVersion: 0 },
        { name: 'trust_token_observer', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.TrustTokenAccessObserverRemote), nullable: true, minVersion: 0 },
        { name: 'url_loader_network_observer', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.URLLoaderNetworkServiceObserverRemote), nullable: true, minVersion: 0 },
        { name: 'devtools_observer', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.DevToolsObserverRemote), nullable: true, minVersion: 0 },
        { name: 'device_bound_session_observer', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.DeviceBoundSessionAccessObserverRemote), nullable: true, minVersion: 0 },
        { name: 'client_security_state', packedOffset: 56, packedBitOffset: 0, type: network.mojom.ClientSecurityStateSpec, nullable: true, minVersion: 0 },
        { name: 'accept_ch_frame_observer', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.AcceptCHFrameObserverRemote), nullable: true, minVersion: 0 },
        { name: 'shared_dictionary_observer', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.SharedDictionaryAccessObserverRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 96}]
    }
  }
};

// Struct: WebBundleTokenParams
network.mojom.mojom.WebBundleTokenParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebBundleTokenParams',
      packedSize: 40,
      fields: [
        { name: 'bundle_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'token', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'web_bundle_handle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.WebBundleHandleRemote), nullable: true, minVersion: 0 },
        { name: 'render_process_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: URLRequest
network.mojom.mojom.URLRequestSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLRequest',
      packedSize: 296,
      fields: [
        { name: 'method', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'site_for_cookies', packedOffset: 16, packedBitOffset: 0, type: network.mojom.SiteForCookiesSpec, nullable: false, minVersion: 0 },
        { name: 'update_first_party_url_on_redirect', packedOffset: 284, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'request_initiator', packedOffset: 24, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'navigation_redirect_chain', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
        { name: 'isolated_world_origin', packedOffset: 40, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'referrer', packedOffset: 48, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'referrer_policy', packedOffset: 224, packedBitOffset: 0, type: network.mojom.URLRequestReferrerPolicySpec, nullable: false, minVersion: 0 },
        { name: 'headers', packedOffset: 56, packedBitOffset: 0, type: network.mojom.HttpRequestHeadersSpec, nullable: false, minVersion: 0 },
        { name: 'cors_exempt_headers', packedOffset: 64, packedBitOffset: 0, type: network.mojom.HttpRequestHeadersSpec, nullable: false, minVersion: 0 },
        { name: 'load_flags', packedOffset: 228, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'resource_type', packedOffset: 232, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 236, packedBitOffset: 0, type: network.mojom.RequestPrioritySpec, nullable: false, minVersion: 0 },
        { name: 'priority_incremental', packedOffset: 284, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'cors_preflight_policy', packedOffset: 240, packedBitOffset: 0, type: network.mojom.CorsPreflightPolicySpec, nullable: false, minVersion: 0 },
        { name: 'originated_from_service_worker', packedOffset: 284, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'skip_service_worker', packedOffset: 284, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'mode', packedOffset: 244, packedBitOffset: 0, type: network.mojom.RequestModeSpec, nullable: false, minVersion: 0 },
        { name: 'credentials_mode', packedOffset: 248, packedBitOffset: 0, type: network.mojom.CredentialsModeSpec, nullable: false, minVersion: 0 },
        { name: 'redirect_mode', packedOffset: 252, packedBitOffset: 0, type: network.mojom.RedirectModeSpec, nullable: false, minVersion: 0 },
        { name: 'fetch_integrity', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'expected_public_keys', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), nullable: false, minVersion: 0 },
        { name: 'destination', packedOffset: 256, packedBitOffset: 0, type: network.mojom.RequestDestinationSpec, nullable: false, minVersion: 0 },
        { name: 'request_body', packedOffset: 88, packedBitOffset: 0, type: network.mojom.URLRequestBodySpec, nullable: true, minVersion: 0 },
        { name: 'keepalive', packedOffset: 284, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'browsing_topics', packedOffset: 284, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ad_auction_headers', packedOffset: 284, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shared_storage_writable_eligible', packedOffset: 284, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_user_gesture', packedOffset: 285, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_load_timing', packedOffset: 285, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_upload_progress', packedOffset: 285, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'do_not_prompt_for_login', packedOffset: 285, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_outermost_main_frame', packedOffset: 285, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'transition_type', packedOffset: 260, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'previews_state', packedOffset: 264, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'upgrade_if_insecure', packedOffset: 285, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_revalidating', packedOffset: 285, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'throttling_profile_id', packedOffset: 96, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'fetch_window_id', packedOffset: 104, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'devtools_request_id', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'devtools_stack_id', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'is_fetch_like_api', packedOffset: 285, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_fetch_later_api', packedOffset: 286, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_favicon', packedOffset: 286, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'original_destination', packedOffset: 268, packedBitOffset: 0, type: network.mojom.RequestDestinationSpec, nullable: false, minVersion: 0 },
        { name: 'trusted_params', packedOffset: 128, packedBitOffset: 0, type: network.mojom.TrustedUrlRequestParamsSpec, nullable: true, minVersion: 0 },
        { name: 'recursive_prefetch_token', packedOffset: 136, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'trust_token_params', packedOffset: 144, packedBitOffset: 0, type: network.mojom.TrustTokenParamsSpec, nullable: true, minVersion: 0 },
        { name: 'web_bundle_token_params', packedOffset: 152, packedBitOffset: 0, type: network.mojom.WebBundleTokenParamsSpec, nullable: true, minVersion: 0 },
        { name: 'devtools_accepted_stream_types', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.SourceTypeSpec, false), nullable: true, minVersion: 0 },
        { name: 'net_log_create_info', packedOffset: 168, packedBitOffset: 0, type: network.mojom.NetLogSourceSpec, nullable: true, minVersion: 0 },
        { name: 'net_log_reference_info', packedOffset: 176, packedBitOffset: 0, type: network.mojom.NetLogSourceSpec, nullable: true, minVersion: 0 },
        { name: 'required_ip_address_space', packedOffset: 272, packedBitOffset: 0, type: network.mojom.IPAddressSpaceSpec, nullable: false, minVersion: 0 },
        { name: 'storage_access_api_status', packedOffset: 276, packedBitOffset: 0, type: network.mojom.StorageAccessApiStatusSpec, nullable: false, minVersion: 0 },
        { name: 'attribution_reporting_support', packedOffset: 280, packedBitOffset: 0, type: network.mojom.AttributionSupportSpec, nullable: false, minVersion: 0 },
        { name: 'attribution_reporting_src_token', packedOffset: 184, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'keepalive_token', packedOffset: 192, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'is_ad_tagged', packedOffset: 286, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shared_dictionary_writer_enabled', packedOffset: 286, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'client_side_content_decoding_enabled', packedOffset: 286, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'socket_tag', packedOffset: 200, packedBitOffset: 0, type: network.mojom.SocketTagSpec, nullable: false, minVersion: 0 },
        { name: 'allows_device_bound_session_registration', packedOffset: 286, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'permissions_policy', packedOffset: 208, packedBitOffset: 0, type: network.mojom.PermissionsPolicySpec, nullable: true, minVersion: 0 },
        { name: 'fetch_retry_options', packedOffset: 216, packedBitOffset: 0, type: network.mojom.FetchRetryOptionsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 296}]
    }
  }
};

// Struct: URLRequestBody
network.mojom.mojom.URLRequestBodySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLRequestBody',
      packedSize: 32,
      fields: [
        { name: 'elements', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.DataElementSpec, false), nullable: false, minVersion: 0 },
        { name: 'identifier', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'contains_sensitive_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_http1_for_streaming_upload', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DataElementBytes
network.mojom.mojom.DataElementBytesSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DataElementBytes',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DataElementFile
network.mojom.mojom.DataElementFileSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DataElementFile',
      packedSize: 40,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'expected_modification_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: DataElementDataPipe
network.mojom.mojom.DataElementDataPipeSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DataElementDataPipe',
      packedSize: 16,
      fields: [
        { name: 'data_pipe_getter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.DataPipeGetterRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DataElementChunkedDataPipe
network.mojom.mojom.DataElementChunkedDataPipeSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DataElementChunkedDataPipe',
      packedSize: 24,
      fields: [
        { name: 'data_pipe_getter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.ChunkedDataPipeGetterRemote), nullable: false, minVersion: 0 },
        { name: 'read_only_once', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SocketTag
network.mojom.mojom.SocketTagSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SocketTag',
      packedSize: 16,
      fields: [
        { name: 'uid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'tag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
