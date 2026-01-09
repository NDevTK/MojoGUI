// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_request.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: EnabledClientHints
network.mojom.EnabledClientHintsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.EnabledClientHints',
      packedSize: 40,
      fields: [
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'is_outermost_main_frame', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'hints', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'not_allowed_hints', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TrustedUrlRequestParams
network.mojom.TrustedUrlRequestParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustedUrlRequestParams',
      packedSize: 72,
      fields: [
        { name: 'isolation_info', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IsolationInfoSpec, nullable: false },
        { name: 'disable_secure_dns', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'has_user_activation', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_cookies_from_browser', packedOffset: 16, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'include_request_cookies_with_response', packedOffset: 16, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'enabled_client_hints', packedOffset: 24, packedBitOffset: 0, type: network.mojom.EnabledClientHintsSpec, nullable: true },
        { name: 'cookie_observer', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'trust_token_observer', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'url_loader_network_observer', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'devtools_observer', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'device_bound_session_observer', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'client_security_state', packedOffset: 56, packedBitOffset: 0, type: network.mojom.ClientSecurityStateSpec, nullable: true },
        { name: 'accept_ch_frame_observer', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'shared_dictionary_observer', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebBundleTokenParams
network.mojom.WebBundleTokenParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebBundleTokenParams',
      packedSize: 32,
      fields: [
        { name: 'bundle_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'token', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'web_bundle_handle', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'render_process_id', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: URLRequest
network.mojom.URLRequestSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLRequest',
      packedSize: 400,
      fields: [
        { name: 'method', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'site_for_cookies', packedOffset: 24, packedBitOffset: 0, type: network.mojom.SiteForCookiesSpec, nullable: false },
        { name: 'update_first_party_url_on_redirect', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'request_initiator', packedOffset: 40, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true },
        { name: 'navigation_redirect_chain', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'isolated_world_origin', packedOffset: 56, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true },
        { name: 'referrer', packedOffset: 64, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'referrer_policy', packedOffset: 72, packedBitOffset: 0, type: network.mojom.URLRequestReferrerPolicySpec, nullable: false },
        { name: 'headers', packedOffset: 80, packedBitOffset: 0, type: network.mojom.HttpRequestHeadersSpec, nullable: false },
        { name: 'cors_exempt_headers', packedOffset: 88, packedBitOffset: 0, type: network.mojom.HttpRequestHeadersSpec, nullable: false },
        { name: 'load_flags', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'resource_type', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'priority', packedOffset: 104, packedBitOffset: 0, type: network.mojom.RequestPrioritySpec, nullable: false },
        { name: 'priority_incremental', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'cors_preflight_policy', packedOffset: 120, packedBitOffset: 0, type: network.mojom.CorsPreflightPolicySpec, nullable: false },
        { name: 'originated_from_service_worker', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'skip_service_worker', packedOffset: 128, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'mode', packedOffset: 136, packedBitOffset: 0, type: network.mojom.RequestModeSpec, nullable: false },
        { name: 'credentials_mode', packedOffset: 144, packedBitOffset: 0, type: network.mojom.CredentialsModeSpec, nullable: false },
        { name: 'redirect_mode', packedOffset: 152, packedBitOffset: 0, type: network.mojom.RedirectModeSpec, nullable: false },
        { name: 'fetch_integrity', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'expected_public_keys', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'destination', packedOffset: 176, packedBitOffset: 0, type: network.mojom.RequestDestinationSpec, nullable: false },
        { name: 'request_body', packedOffset: 184, packedBitOffset: 0, type: network.mojom.URLRequestBodySpec, nullable: true },
        { name: 'keepalive', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'browsing_topics', packedOffset: 192, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'ad_auction_headers', packedOffset: 192, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'shared_storage_writable_eligible', packedOffset: 192, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'has_user_gesture', packedOffset: 192, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_load_timing', packedOffset: 192, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_upload_progress', packedOffset: 192, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'do_not_prompt_for_login', packedOffset: 192, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'is_outermost_main_frame', packedOffset: 192, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
        { name: 'transition_type', packedOffset: 200, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'previews_state', packedOffset: 204, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'upgrade_if_insecure', packedOffset: 208, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_revalidating', packedOffset: 208, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'throttling_profile_id', packedOffset: 216, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
        { name: 'fetch_window_id', packedOffset: 224, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
        { name: 'devtools_request_id', packedOffset: 232, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'devtools_stack_id', packedOffset: 240, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_fetch_like_api', packedOffset: 248, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_fetch_later_api', packedOffset: 248, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_favicon', packedOffset: 248, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'original_destination', packedOffset: 256, packedBitOffset: 0, type: network.mojom.RequestDestinationSpec, nullable: false },
        { name: 'trusted_params', packedOffset: 264, packedBitOffset: 0, type: network.mojom.TrustedUrlRequestParamsSpec, nullable: true },
        { name: 'recursive_prefetch_token', packedOffset: 272, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
        { name: 'trust_token_params', packedOffset: 280, packedBitOffset: 0, type: network.mojom.TrustTokenParamsSpec, nullable: true },
        { name: 'web_bundle_token_params', packedOffset: 288, packedBitOffset: 0, type: network.mojom.WebBundleTokenParamsSpec, nullable: true },
        { name: 'devtools_accepted_stream_types', packedOffset: 296, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'net_log_create_info', packedOffset: 304, packedBitOffset: 0, type: network.mojom.NetLogSourceSpec, nullable: true },
        { name: 'net_log_reference_info', packedOffset: 312, packedBitOffset: 0, type: network.mojom.NetLogSourceSpec, nullable: true },
        { name: 'required_ip_address_space', packedOffset: 320, packedBitOffset: 0, type: network.mojom.IPAddressSpaceSpec, nullable: false },
        { name: 'storage_access_api_status', packedOffset: 328, packedBitOffset: 0, type: network.mojom.StorageAccessApiStatusSpec, nullable: false },
        { name: 'attribution_reporting_support', packedOffset: 336, packedBitOffset: 0, type: network.mojom.AttributionSupportSpec, nullable: false },
        { name: 'attribution_reporting_src_token', packedOffset: 344, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
        { name: 'keepalive_token', packedOffset: 352, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
        { name: 'is_ad_tagged', packedOffset: 360, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'shared_dictionary_writer_enabled', packedOffset: 360, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'client_side_content_decoding_enabled', packedOffset: 360, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'socket_tag', packedOffset: 368, packedBitOffset: 0, type: network.mojom.SocketTagSpec, nullable: false },
        { name: 'allows_device_bound_session_registration', packedOffset: 376, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'permissions_policy', packedOffset: 384, packedBitOffset: 0, type: network.mojom.PermissionsPolicySpec, nullable: true },
        { name: 'fetch_retry_options', packedOffset: 392, packedBitOffset: 0, type: network.mojom.FetchRetryOptionsSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: URLRequestBody
network.mojom.URLRequestBodySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLRequestBody',
      packedSize: 32,
      fields: [
        { name: 'elements', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'identifier', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'contains_sensitive_info', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_http1_for_streaming_upload', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DataElementBytes
network.mojom.DataElementBytesSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DataElementBytes',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DataElementFile
network.mojom.DataElementFileSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DataElementFile',
      packedSize: 40,
      fields: [
        { name: 'path', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'offset', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'length', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'expected_modification_time', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DataElementDataPipe
network.mojom.DataElementDataPipeSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DataElementDataPipe',
      packedSize: 16,
      fields: [
        { name: 'data_pipe_getter', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DataElementChunkedDataPipe
network.mojom.DataElementChunkedDataPipeSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DataElementChunkedDataPipe',
      packedSize: 24,
      fields: [
        { name: 'data_pipe_getter', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'read_only_once', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SocketTag
network.mojom.SocketTagSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SocketTag',
      packedSize: 24,
      fields: [
        { name: 'uid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'tag', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
