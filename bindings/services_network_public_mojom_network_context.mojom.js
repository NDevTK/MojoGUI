// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_context.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: TrustTokenOperationPolicyVerdict
network.mojom.TrustTokenOperationPolicyVerdict = {
  kForbid: 0,
  kPotentiallyPermit: 1,
};

// Enum: SCTAuditingMode
network.mojom.SCTAuditingMode = {
  kDisabled: 0,
  kEnhancedSafeBrowsingReporting: 1,
  kHashdance: 2,
};

// Enum: DomainReliabilityClearMode
network.mojom.DomainReliabilityClearMode = {
  CLEAR_CONTEXTS: 0,
  CLEAR_BEACONS: 1,
};

// Struct: CustomProxyConfig
network.mojom.CustomProxyConfigSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CustomProxyConfig',
      packedSize: 32,
      fields: [
        { name: 'rules', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ProxyRulesSpec, nullable: false },
        { name: 'should_override_existing_config', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_non_idempotent_methods', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'connect_tunnel_headers', packedOffset: 24, packedBitOffset: 0, type: network.mojom.HttpRequestHeadersSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CertVerifierServiceRemoteParams
network.mojom.CertVerifierServiceRemoteParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CertVerifierServiceRemoteParams',
      packedSize: 16,
      fields: [
        { name: 'cert_verifier_service', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'cert_verifier_service_client_receiver', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HttpAuthStaticNetworkContextParams
network.mojom.HttpAuthStaticNetworkContextParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpAuthStaticNetworkContextParams',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NetworkContextFilePaths
network.mojom.NetworkContextFilePathsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContextFilePaths',
      packedSize: 112,
      fields: [
        { name: 'shared_dictionary_directory', packedOffset: 8, packedBitOffset: 0, type: network.mojom.TransferableDirectorySpec, nullable: true },
        { name: 'http_cache_directory', packedOffset: 16, packedBitOffset: 0, type: network.mojom.TransferableDirectorySpec, nullable: true },
        { name: 'no_vary_search_directory', packedOffset: 24, packedBitOffset: 0, type: network.mojom.TransferableDirectorySpec, nullable: true },
        { name: 'data_directory', packedOffset: 32, packedBitOffset: 0, type: network.mojom.TransferableDirectorySpec, nullable: false },
        { name: 'unsandboxed_data_path', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: true },
        { name: 'cookie_database_name', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: true },
        { name: 'device_bound_sessions_database_name', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: true },
        { name: 'trust_token_database_name', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: true },
        { name: 'http_server_properties_file_name', packedOffset: 72, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: true },
        { name: 'transport_security_persister_file_name', packedOffset: 80, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: true },
        { name: 'reporting_and_nel_store_database_name', packedOffset: 88, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: true },
        { name: 'sct_auditing_pending_reports_file_name', packedOffset: 96, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: true },
        { name: 'trigger_migration', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SocketBrokerRemotes
network.mojom.SocketBrokerRemotesSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SocketBrokerRemotes',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'server', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NetworkContextParams
network.mojom.NetworkContextParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContextParams',
      packedSize: 400,
      fields: [
        { name: 'user_agent', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'accept_language', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'enable_brotli', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_zstd', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_referrers', packedOffset: 24, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'validate_referrer_policy_on_initial_request', packedOffset: 24, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'proxy_resolver_factory', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'system_proxy_resolver', packedOffset: 40, packedBitOffset: 0, type: [EnableIf=is_win] pending_remote<proxy_resolver.mojom.SystemProxyResolver>Spec, nullable: true },
        { name: 'dhcp_wpad_url_client', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'enable_encrypted_cookies', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'restore_old_session_cookies', packedOffset: 56, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'persist_session_cookies', packedOffset: 56, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'http_cache_enabled', packedOffset: 56, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'http_cache_max_size', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'http_cache_file_operations_factory', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'encryption_provider', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'check_clear_text_permitted', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'initial_ssl_config', packedOffset: 88, packedBitOffset: 0, type: network.mojom.SSLConfigSpec, nullable: true },
        { name: 'ssl_config_client_receiver', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
        { name: 'initial_proxy_config', packedOffset: 104, packedBitOffset: 0, type: network.mojom.ProxyConfigWithAnnotationSpec, nullable: true },
        { name: 'proxy_config_client_receiver', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
        { name: 'initial_custom_proxy_config', packedOffset: 120, packedBitOffset: 0, type: network.mojom.CustomProxyConfigSpec, nullable: true },
        { name: 'custom_proxy_config_client_receiver', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
        { name: 'custom_proxy_connection_observer_remote', packedOffset: 132, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'proxy_config_poller_client', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'proxy_error_client', packedOffset: 140, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'socket_brokers', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'pac_quick_check_enabled', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_certificate_reporting', packedOffset: 152, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'enforce_chrome_ct_policy', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'sct_auditing_mode', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'ct_policy', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'cert_verifier_params', packedOffset: 184, packedBitOffset: 0, type: network.mojom.CertVerifierServiceRemoteParamsSpec, nullable: false },
        { name: 'cookie_manager_params', packedOffset: 192, packedBitOffset: 0, type: network.mojom.CookieManagerParamsSpec, nullable: true },
        { name: 'cookie_manager', packedOffset: 200, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'enable_domain_reliability', packedOffset: 208, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'domain_reliability_upload_reporter', packedOffset: 216, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'discard_domain_reliablity_uploads', packedOffset: 224, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'reporting_delivery_interval', packedOffset: 232, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
        { name: 'skip_reporting_send_permission_check', packedOffset: 240, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'cors_origin_access_list', packedOffset: 248, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'cors_exempt_header_list', packedOffset: 256, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'hsts_policy_bypass_list', packedOffset: 264, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'http_auth_static_network_context_params', packedOffset: 272, packedBitOffset: 0, type: network.mojom.HttpAuthStaticNetworkContextParamsSpec, nullable: true },
        { name: 'reset_http_cache_backend', packedOffset: 280, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'split_auth_cache_by_network_anonymization_key', packedOffset: 280, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'require_network_anonymization_key', packedOffset: 280, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'win_permissions_set', packedOffset: 288, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'file_paths', packedOffset: 296, packedBitOffset: 0, type: network.mojom.NetworkContextFilePathsSpec, nullable: true },
        { name: 'block_trust_tokens', packedOffset: 304, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'shared_dictionary_enabled', packedOffset: 304, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'shared_dictionary_cache_max_size', packedOffset: 312, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'first_party_sets_access_delegate_params', packedOffset: 320, packedBitOffset: 0, type: network.mojom.FirstPartySetsAccessDelegateParamsSpec, nullable: true },
        { name: 'first_party_sets_access_delegate_receiver', packedOffset: 328, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
        { name: 'acam_preflight_spec_conformant', packedOffset: 332, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'cookie_encryption_provider', packedOffset: 340, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'device_bound_sessions_enabled', packedOffset: 344, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'bound_network', packedOffset: 352, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'enterprise_reporting_endpoints', packedOffset: 360, packedBitOffset: 0, type: mojo.internal.Map, nullable: true },
        { name: 'stale_dns_enabled', packedOffset: 368, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'quic_idle_connection_timeout_seconds', packedOffset: 376, packedBitOffset: 0, type: mojo.internal.Int64, nullable: true },
        { name: 'enable_encrypted_http_cache', packedOffset: 384, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'bound_sessions_unexportable_key_service', packedOffset: 392, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NetworkConditions
network.mojom.NetworkConditionsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkConditions',
      packedSize: 72,
      fields: [
        { name: 'offline', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'latency', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'download_throughput', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'upload_throughput', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'packet_loss', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'packet_queue_length', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'packet_reordering', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'rule_id', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MatchedNetworkConditions
network.mojom.MatchedNetworkConditionsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.MatchedNetworkConditions',
      packedSize: 24,
      fields: [
        { name: 'pattern', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'conditions', packedOffset: 16, packedBitOffset: 0, type: network.mojom.NetworkConditionsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SharedDictionaryInfo
network.mojom.SharedDictionaryInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedDictionaryInfo',
      packedSize: 88,
      fields: [
        { name: 'match', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'match_dest', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'dictionary_url', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'last_fetch_time', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'response_time', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'expiration', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'last_used_time', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'size', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'hash', packedOffset: 80, packedBitOffset: 0, type: network.mojom.SHA256HashValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SignedExchangeReport
network.mojom.SignedExchangeReportSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SignedExchangeReport',
      packedSize: 96,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'outer_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'inner_url', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'cert_url', packedOffset: 40, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'referrer', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'server_ip_address', packedOffset: 56, packedBitOffset: 0, type: network.mojom.IPAddressSpec, nullable: false },
        { name: 'protocol', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'method', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'status_code', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'elapsed_time', packedOffset: 88, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: URLLoaderFactoryOverride
network.mojom.URLLoaderFactoryOverrideSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderFactoryOverride',
      packedSize: 24,
      fields: [
        { name: 'overriding_factory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'overridden_factory_receiver', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
        { name: 'skip_cors_enabled_scheme_check', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: URLLoaderFactoryParams
network.mojom.URLLoaderFactoryParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderFactoryParams',
      packedSize: 168,
      fields: [
        { name: 'process_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'request_initiator_origin_lock', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true },
        { name: 'is_orb_enabled', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'ignore_isolated_world_origin', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'unsafe_non_webby_initiator', packedOffset: 24, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_web_security', packedOffset: 24, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'header_client', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'isolation_info', packedOffset: 40, packedBitOffset: 0, type: network.mojom.IsolationInfoSpec, nullable: false },
        { name: 'disable_secure_dns', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_trusted', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'automatically_assign_isolation_info', packedOffset: 48, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'top_frame_id', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
        { name: 'factory_override', packedOffset: 64, packedBitOffset: 0, type: network.mojom.URLLoaderFactoryOverrideSpec, nullable: true },
        { name: 'client_security_state', packedOffset: 72, packedBitOffset: 0, type: network.mojom.ClientSecurityStateSpec, nullable: true },
        { name: 'coep_reporter', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'dip_reporter', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'cookie_observer', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'trust_token_observer', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'shared_dictionary_observer', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'url_loader_network_observer', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'devtools_observer', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'device_bound_session_observer', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'kPotentiallyPermit', packedOffset: 112, packedBitOffset: 0, type: network.mojom.TrustTokenOperationPolicyVerdict trust_token_issuance_policy =Spec, nullable: false },
        { name: 'kPotentiallyPermit', packedOffset: 120, packedBitOffset: 0, type: network.mojom.TrustTokenOperationPolicyVerdict trust_token_redemption_policy =Spec, nullable: false },
        { name: 'debug_tag', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'cookie_setting_overrides', packedOffset: 136, packedBitOffset: 0, type: network.mojom.CookieSettingOverridesSpec, nullable: false },
        { name: 'devtools_cookie_setting_overrides', packedOffset: 144, packedBitOffset: 0, type: network.mojom.CookieSettingOverridesSpec, nullable: false },
        { name: 'require_cross_site_request_for_cookies', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'ignore_factory_reset', packedOffset: 152, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_main_frame_origin_recently_accessed', packedOffset: 152, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'network_restrictions_id', packedOffset: 160, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NonceAndAllowlistedPatterns
network.mojom.NonceAndAllowlistedPatternsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NonceAndAllowlistedPatterns',
      packedSize: 24,
      fields: [
        { name: 'nonce', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'allowlisted_patterns', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: CustomProxyConnectionObserver
network.mojom.CustomProxyConnectionObserver = {};

network.mojom.CustomProxyConnectionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.CustomProxyConnectionObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CustomProxyConnectionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.CustomProxyConnectionObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.CustomProxyConnectionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.CustomProxyConnectionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFallback(bad_chain, net_error) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.CustomProxyConnectionObserver_OnFallback_ParamsSpec,
      null,
      [bad_chain, net_error]);
  }

  onTunnelHeadersReceived(proxy_chain, chain_index, response_headers) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_ParamsSpec,
      null,
      [proxy_chain, chain_index, response_headers]);
  }

};

network.mojom.CustomProxyConnectionObserver.getRemote = function() {
  let remote = new network.mojom.CustomProxyConnectionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CustomProxyConnectionObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnFallback
network.mojom.CustomProxyConnectionObserver_OnFallback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CustomProxyConnectionObserver.OnFallback_Params',
      packedSize: 24,
      fields: [
        { name: 'bad_chain', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ProxyChainSpec, nullable: false },
        { name: 'net_error', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTunnelHeadersReceived
network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CustomProxyConnectionObserver.OnTunnelHeadersReceived_Params',
      packedSize: 32,
      fields: [
        { name: 'proxy_chain', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ProxyChainSpec, nullable: false },
        { name: 'chain_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'response_headers', packedOffset: 24, packedBitOffset: 0, type: network.mojom.HttpResponseHeadersSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.CustomProxyConnectionObserverPtr = network.mojom.CustomProxyConnectionObserverRemote;
network.mojom.CustomProxyConnectionObserverRequest = network.mojom.CustomProxyConnectionObserverPendingReceiver;


// Interface: CustomProxyConfigClient
network.mojom.CustomProxyConfigClient = {};

network.mojom.CustomProxyConfigClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.CustomProxyConfigClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CustomProxyConfigClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.CustomProxyConfigClientPendingReceiver,
      handle);
    this.$ = new network.mojom.CustomProxyConfigClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.CustomProxyConfigClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCustomProxyConfigUpdated(proxy_config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ParamsSpec,
      null,
      [proxy_config]);
  }

};

network.mojom.CustomProxyConfigClient.getRemote = function() {
  let remote = new network.mojom.CustomProxyConfigClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CustomProxyConfigClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnCustomProxyConfigUpdated
network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CustomProxyConfigClient.OnCustomProxyConfigUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'proxy_config', packedOffset: 8, packedBitOffset: 0, type: network.mojom.CustomProxyConfigSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.CustomProxyConfigClientPtr = network.mojom.CustomProxyConfigClientRemote;
network.mojom.CustomProxyConfigClientRequest = network.mojom.CustomProxyConfigClientPendingReceiver;


// Interface: TrustedHeaderClient
network.mojom.TrustedHeaderClient = {};

network.mojom.TrustedHeaderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.TrustedHeaderClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TrustedHeaderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.TrustedHeaderClientPendingReceiver,
      handle);
    this.$ = new network.mojom.TrustedHeaderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.TrustedHeaderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBeforeSendHeaders(headers) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ParamsSpec,
      network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParamsSpec,
      [headers]);
  }

  onHeadersReceived(headers, remote_endpoint, ssl_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.TrustedHeaderClient_OnHeadersReceived_ParamsSpec,
      network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParamsSpec,
      [headers, remote_endpoint, ssl_info]);
  }

};

network.mojom.TrustedHeaderClient.getRemote = function() {
  let remote = new network.mojom.TrustedHeaderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TrustedHeaderClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnBeforeSendHeaders
network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustedHeaderClient.OnBeforeSendHeaders_Params',
      packedSize: 16,
      fields: [
        { name: 'headers', packedOffset: 8, packedBitOffset: 0, type: network.mojom.HttpRequestHeadersSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustedHeaderClient.OnBeforeSendHeaders_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'headers', packedOffset: 16, packedBitOffset: 0, type: network.mojom.HttpRequestHeadersSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnHeadersReceived
network.mojom.TrustedHeaderClient_OnHeadersReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustedHeaderClient.OnHeadersReceived_Params',
      packedSize: 32,
      fields: [
        { name: 'headers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'remote_endpoint', packedOffset: 16, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: false },
        { name: 'ssl_info', packedOffset: 24, packedBitOffset: 0, type: network.mojom.SSLInfoSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustedHeaderClient.OnHeadersReceived_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'headers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'preserve_fragment_on_redirect_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.TrustedHeaderClientPtr = network.mojom.TrustedHeaderClientRemote;
network.mojom.TrustedHeaderClientRequest = network.mojom.TrustedHeaderClientPendingReceiver;


// Interface: TrustedURLLoaderHeaderClient
network.mojom.TrustedURLLoaderHeaderClient = {};

network.mojom.TrustedURLLoaderHeaderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.TrustedURLLoaderHeaderClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TrustedURLLoaderHeaderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.TrustedURLLoaderHeaderClientPendingReceiver,
      handle);
    this.$ = new network.mojom.TrustedURLLoaderHeaderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.TrustedURLLoaderHeaderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLoaderCreated(request_id, header_client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_ParamsSpec,
      null,
      [request_id, header_client]);
  }

  onLoaderForCorsPreflightCreated(request, header_client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_ParamsSpec,
      null,
      [request, header_client]);
  }

};

network.mojom.TrustedURLLoaderHeaderClient.getRemote = function() {
  let remote = new network.mojom.TrustedURLLoaderHeaderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TrustedURLLoaderHeaderClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnLoaderCreated
network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustedURLLoaderHeaderClient.OnLoaderCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'header_client', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnLoaderForCorsPreflightCreated
network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustedURLLoaderHeaderClient.OnLoaderForCorsPreflightCreated_Params',
      packedSize: 24,
      fields: [
        { name: 'request', packedOffset: 8, packedBitOffset: 0, type: network.mojom.URLRequestSpec, nullable: false },
        { name: 'header_client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.TrustedURLLoaderHeaderClientPtr = network.mojom.TrustedURLLoaderHeaderClientRemote;
network.mojom.TrustedURLLoaderHeaderClientRequest = network.mojom.TrustedURLLoaderHeaderClientPendingReceiver;


// Interface: PreloadedSharedDictionaryInfoHandle
network.mojom.PreloadedSharedDictionaryInfoHandle = {};

network.mojom.PreloadedSharedDictionaryInfoHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.PreloadedSharedDictionaryInfoHandleRemote = class {
  static get $interfaceName() {
    return 'network.mojom.PreloadedSharedDictionaryInfoHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.PreloadedSharedDictionaryInfoHandlePendingReceiver,
      handle);
    this.$ = new network.mojom.PreloadedSharedDictionaryInfoHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.PreloadedSharedDictionaryInfoHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

network.mojom.PreloadedSharedDictionaryInfoHandle.getRemote = function() {
  let remote = new network.mojom.PreloadedSharedDictionaryInfoHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.PreloadedSharedDictionaryInfoHandle',
    'context');
  return remote.$;
};

// Legacy compatibility
network.mojom.PreloadedSharedDictionaryInfoHandlePtr = network.mojom.PreloadedSharedDictionaryInfoHandleRemote;
network.mojom.PreloadedSharedDictionaryInfoHandleRequest = network.mojom.PreloadedSharedDictionaryInfoHandlePendingReceiver;


// Interface: NetworkContext
network.mojom.NetworkContext = {};

network.mojom.NetworkContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetworkContextRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetworkContextPendingReceiver,
      handle);
    this.$ = new network.mojom.NetworkContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.NetworkContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.NetworkContext_SetClient_ParamsSpec,
      null,
      [client]);
  }

  createURLLoaderFactory(url_loader_factory, params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.NetworkContext_CreateURLLoaderFactory_ParamsSpec,
      null,
      [url_loader_factory, params]);
  }

  resetURLLoaderFactories() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.NetworkContext_ResetURLLoaderFactories_ParamsSpec,
      null,
      []);
  }

  getViaObliviousHttp(request, client) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.NetworkContext_GetViaObliviousHttp_ParamsSpec,
      null,
      [request, client]);
  }

  getCookieManager(cookie_manager) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.NetworkContext_GetCookieManager_ParamsSpec,
      null,
      [cookie_manager]);
  }

  getRestrictedCookieManager(restricted_cookie_manager, role, origin, isolation_info, cookie_setting_overrides, devtools_cookie_setting_overrides, cookie_observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.NetworkContext_GetRestrictedCookieManager_ParamsSpec,
      null,
      [restricted_cookie_manager, role, origin, isolation_info, cookie_setting_overrides, devtools_cookie_setting_overrides, cookie_observer]);
  }

  getTrustTokenQueryAnswerer(trust_token_query_answerer, top_frame_origin) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_ParamsSpec,
      null,
      [trust_token_query_answerer, top_frame_origin]);
  }

  clearTrustTokenData(filter) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      network.mojom.NetworkContext_ClearTrustTokenData_ParamsSpec,
      null,
      [filter]);
  }

  clearTrustTokenSessionOnlyData() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ParamsSpec,
      network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParamsSpec,
      []);
  }

  getStoredTrustTokenCounts() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      network.mojom.NetworkContext_GetStoredTrustTokenCounts_ParamsSpec,
      network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParamsSpec,
      []);
  }

  getPrivateStateTokenRedemptionRecords() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ParamsSpec,
      network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParamsSpec,
      []);
  }

  deleteStoredTrustTokens(issuer) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      network.mojom.NetworkContext_DeleteStoredTrustTokens_ParamsSpec,
      network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParamsSpec,
      [issuer]);
  }

  setBlockTrustTokens(block) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      network.mojom.NetworkContext_SetBlockTrustTokens_ParamsSpec,
      null,
      [block]);
  }

  clearNetworkingHistoryBetween(start_time, end_time) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ParamsSpec,
      null,
      [start_time, end_time]);
  }

  clearHttpCache(start_time, end_time, filter) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      network.mojom.NetworkContext_ClearHttpCache_ParamsSpec,
      null,
      [start_time, end_time, filter]);
  }

  computeHttpCacheSize(start_time, end_time) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      network.mojom.NetworkContext_ComputeHttpCacheSize_ParamsSpec,
      network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParamsSpec,
      [start_time, end_time]);
  }

  notifyBrowserIdle() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      network.mojom.NetworkContext_NotifyBrowserIdle_ParamsSpec,
      null,
      []);
  }

  notifyExternalCacheHit(url, http_method, key, include_credentials) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      network.mojom.NetworkContext_NotifyExternalCacheHit_ParamsSpec,
      null,
      [url, http_method, key, include_credentials]);
  }

  clearHostCache(filter) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      network.mojom.NetworkContext_ClearHostCache_ParamsSpec,
      null,
      [filter]);
  }

  clearHttpAuthCache(start_time, end_time, filter) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      network.mojom.NetworkContext_ClearHttpAuthCache_ParamsSpec,
      null,
      [start_time, end_time, filter]);
  }

  clearCorsPreflightCache(filter) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      network.mojom.NetworkContext_ClearCorsPreflightCache_ParamsSpec,
      null,
      [filter]);
  }

  clearReportingCacheReports(filter) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      network.mojom.NetworkContext_ClearReportingCacheReports_ParamsSpec,
      null,
      [filter]);
  }

  clearReportingCacheClients(filter) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      network.mojom.NetworkContext_ClearReportingCacheClients_ParamsSpec,
      null,
      [filter]);
  }

  clearNetworkErrorLogging(filter) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      network.mojom.NetworkContext_ClearNetworkErrorLogging_ParamsSpec,
      null,
      [filter]);
  }

  clearDomainReliability(filter, mode) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      network.mojom.NetworkContext_ClearDomainReliability_ParamsSpec,
      null,
      [filter, mode]);
  }

  clearSharedDictionaryCache(start_time, end_time, filter) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      network.mojom.NetworkContext_ClearSharedDictionaryCache_ParamsSpec,
      null,
      [start_time, end_time, filter]);
  }

  clearSharedDictionaryCacheForIsolationKey(isolation_key) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ParamsSpec,
      null,
      [isolation_key]);
  }

  setDocumentReportingEndpoints(reporting_source, origin, isolation_info, endpoints) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      network.mojom.NetworkContext_SetDocumentReportingEndpoints_ParamsSpec,
      null,
      [reporting_source, origin, isolation_info, endpoints]);
  }

  setEnterpriseReportingEndpoints(endpoints) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      network.mojom.NetworkContext_SetEnterpriseReportingEndpoints_ParamsSpec,
      null,
      [endpoints]);
  }

  sendReportsAndRemoveSource(reporting_source) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      network.mojom.NetworkContext_SendReportsAndRemoveSource_ParamsSpec,
      null,
      [reporting_source]);
  }

  queueReport(type, group, url, reporting_source, network_anonymization_key, body) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      network.mojom.NetworkContext_QueueReport_ParamsSpec,
      null,
      [type, group, url, reporting_source, network_anonymization_key, body]);
  }

  queueEnterpriseReport(type, group, url, body) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      network.mojom.NetworkContext_QueueEnterpriseReport_ParamsSpec,
      null,
      [type, group, url, body]);
  }

  queueSignedExchangeReport(report, network_anonymization_key) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      network.mojom.NetworkContext_QueueSignedExchangeReport_ParamsSpec,
      null,
      [report, network_anonymization_key]);
  }

  closeAllConnections() {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      network.mojom.NetworkContext_CloseAllConnections_ParamsSpec,
      null,
      []);
  }

  closeIdleConnections() {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      network.mojom.NetworkContext_CloseIdleConnections_ParamsSpec,
      null,
      []);
  }

  setNetworkConditions(throttling_profile_id, conditions) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      network.mojom.NetworkContext_SetNetworkConditions_ParamsSpec,
      null,
      [throttling_profile_id, conditions]);
  }

  setAcceptLanguage(new_accept_language) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      network.mojom.NetworkContext_SetAcceptLanguage_ParamsSpec,
      null,
      [new_accept_language]);
  }

  setEnableReferrers(enable_referrers) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      network.mojom.NetworkContext_SetEnableReferrers_ParamsSpec,
      null,
      [enable_referrers]);
  }

  setCTPolicy(ct_policy) {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      network.mojom.NetworkContext_SetCTPolicy_ParamsSpec,
      null,
      [ct_policy]);
  }

  createUDPSocket(receiver, listener) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      network.mojom.NetworkContext_CreateUDPSocket_ParamsSpec,
      null,
      [receiver, listener]);
  }

  createRestrictedUDPSocket(addr, mode, traffic_annotation, params, receiver, listener, allow_multicast) {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      network.mojom.NetworkContext_CreateRestrictedUDPSocket_ParamsSpec,
      network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParamsSpec,
      [addr, mode, traffic_annotation, params, receiver, listener, allow_multicast]);
  }

  createTCPServerSocket(local_addr, options, traffic_annotation, socket) {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      network.mojom.NetworkContext_CreateTCPServerSocket_ParamsSpec,
      network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParamsSpec,
      [local_addr, options, traffic_annotation, socket]);
  }

  createTCPConnectedSocket(local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer) {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      network.mojom.NetworkContext_CreateTCPConnectedSocket_ParamsSpec,
      network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParamsSpec,
      [local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer]);
  }

  createTCPBoundSocket(local_addr, traffic_annotation, socket) {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      network.mojom.NetworkContext_CreateTCPBoundSocket_ParamsSpec,
      network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParamsSpec,
      [local_addr, traffic_annotation, socket]);
  }

  createProxyResolvingSocketFactory(factory) {
    // Ordinal: 44
    return this.proxy.sendMessage(
      44,  // ordinal
      network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_ParamsSpec,
      null,
      [factory]);
  }

  lookUpProxyForURL(url, network_anonymization_key, proxy_lookup_client) {
    // Ordinal: 45
    return this.proxy.sendMessage(
      45,  // ordinal
      network.mojom.NetworkContext_LookUpProxyForURL_ParamsSpec,
      null,
      [url, network_anonymization_key, proxy_lookup_client]);
  }

  forceReloadProxyConfig() {
    // Ordinal: 46
    return this.proxy.sendMessage(
      46,  // ordinal
      network.mojom.NetworkContext_ForceReloadProxyConfig_ParamsSpec,
      null,
      []);
  }

  clearBadProxiesCache() {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      network.mojom.NetworkContext_ClearBadProxiesCache_ParamsSpec,
      null,
      []);
  }

  createWebSocket(url, requested_protocols, site_for_cookies, storage_access_api_status, isolation_info, additional_headers, process_id, origin, client_security_state, options, traffic_annotation, handshake_client, url_loader_network_observer, auth_handler, header_client, throttling_profile_id) {
    // Ordinal: 48
    return this.proxy.sendMessage(
      48,  // ordinal
      network.mojom.NetworkContext_CreateWebSocket_ParamsSpec,
      null,
      [url, requested_protocols, site_for_cookies, storage_access_api_status, isolation_info, additional_headers, process_id, origin, client_security_state, options, traffic_annotation, handshake_client, url_loader_network_observer, auth_handler, header_client, throttling_profile_id]);
  }

  createWebTransport(url, origin, network_anonymization_key, fingerprints, application_protocols, handshake_client, url_loader_network_observer, client_security_state) {
    // Ordinal: 49
    return this.proxy.sendMessage(
      49,  // ordinal
      network.mojom.NetworkContext_CreateWebTransport_ParamsSpec,
      null,
      [url, origin, network_anonymization_key, fingerprints, application_protocols, handshake_client, url_loader_network_observer, client_security_state]);
  }

  createNetLogExporter(receiver) {
    // Ordinal: 50
    return this.proxy.sendMessage(
      50,  // ordinal
      network.mojom.NetworkContext_CreateNetLogExporter_ParamsSpec,
      null,
      [receiver]);
  }

  preconnectSockets(num_streams, url, credentials_mode, network_anonymization_key, traffic_annotation, keepalive_config, observer_client) {
    // Ordinal: 51
    return this.proxy.sendMessage(
      51,  // ordinal
      network.mojom.NetworkContext_PreconnectSockets_ParamsSpec,
      null,
      [num_streams, url, credentials_mode, network_anonymization_key, traffic_annotation, keepalive_config, observer_client]);
  }

  createP2PSocketManager(network_anonymization_key, client, trusted_socket_manager, socket_manager) {
    // Ordinal: 52
    return this.proxy.sendMessage(
      52,  // ordinal
      network.mojom.NetworkContext_CreateP2PSocketManager_ParamsSpec,
      null,
      [network_anonymization_key, client, trusted_socket_manager, socket_manager]);
  }

  createMdnsResponder(responder_receiver) {
    // Ordinal: 53
    return this.proxy.sendMessage(
      53,  // ordinal
      network.mojom.NetworkContext_CreateMdnsResponder_ParamsSpec,
      null,
      [responder_receiver]);
  }

  resolveHost(host, network_anonymization_key, optional_parameters, response_client) {
    // Ordinal: 54
    return this.proxy.sendMessage(
      54,  // ordinal
      network.mojom.NetworkContext_ResolveHost_ParamsSpec,
      null,
      [host, network_anonymization_key, optional_parameters, response_client]);
  }

  createHostResolver(config_overrides, host_resolver) {
    // Ordinal: 55
    return this.proxy.sendMessage(
      55,  // ordinal
      network.mojom.NetworkContext_CreateHostResolver_ParamsSpec,
      null,
      [config_overrides, host_resolver]);
  }

  verifyCert(certificate, host_port, ocsp_response, sct_list) {
    // Ordinal: 56
    return this.proxy.sendMessage(
      56,  // ordinal
      network.mojom.NetworkContext_VerifyCert_ParamsSpec,
      network.mojom.NetworkContext_VerifyCert_ResponseParamsSpec,
      [certificate, host_port, ocsp_response, sct_list]);
  }

  verifyCertForSignedExchange(certificate, host_port, ocsp_response, sct_list) {
    // Ordinal: 57
    return this.proxy.sendMessage(
      57,  // ordinal
      network.mojom.NetworkContext_VerifyCertForSignedExchange_ParamsSpec,
      network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParamsSpec,
      [certificate, host_port, ocsp_response, sct_list]);
  }

  verify2QwacCertBinding(binding, hostname, tls_certificate) {
    // Ordinal: 58
    return this.proxy.sendMessage(
      58,  // ordinal
      network.mojom.NetworkContext_Verify2QwacCertBinding_ParamsSpec,
      network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParamsSpec,
      [binding, hostname, tls_certificate]);
  }

  addHSTS(host, expiry, include_subdomains) {
    // Ordinal: 59
    return this.proxy.sendMessage(
      59,  // ordinal
      network.mojom.NetworkContext_AddHSTS_ParamsSpec,
      null,
      [host, expiry, include_subdomains]);
  }

  isHSTSActiveForHost(host, is_top_level_nav) {
    // Ordinal: 60
    return this.proxy.sendMessage(
      60,  // ordinal
      network.mojom.NetworkContext_IsHSTSActiveForHost_ParamsSpec,
      network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParamsSpec,
      [host, is_top_level_nav]);
  }

  getHSTSState(domain) {
    // Ordinal: 61
    return this.proxy.sendMessage(
      61,  // ordinal
      network.mojom.NetworkContext_GetHSTSState_ParamsSpec,
      network.mojom.NetworkContext_GetHSTSState_ResponseParamsSpec,
      [domain]);
  }

  setCorsOriginAccessListsForOrigin(source_origin, allow_patterns, block_patterns) {
    // Ordinal: 62
    return this.proxy.sendMessage(
      62,  // ordinal
      network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ParamsSpec,
      null,
      [source_origin, allow_patterns, block_patterns]);
  }

  deleteDynamicDataForHost(host) {
    // Ordinal: 63
    return this.proxy.sendMessage(
      63,  // ordinal
      network.mojom.NetworkContext_DeleteDynamicDataForHost_ParamsSpec,
      network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParamsSpec,
      [host]);
  }

  setSplitAuthCacheByNetworkAnonymizationKey(split_auth_cache_by_network_anonymization_key) {
    // Ordinal: 64
    return this.proxy.sendMessage(
      64,  // ordinal
      network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_ParamsSpec,
      null,
      [split_auth_cache_by_network_anonymization_key]);
  }

  saveHttpAuthCacheProxyEntries() {
    // Ordinal: 65
    return this.proxy.sendMessage(
      65,  // ordinal
      network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ParamsSpec,
      network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParamsSpec,
      []);
  }

  loadHttpAuthCacheProxyEntries(cache_key) {
    // Ordinal: 66
    return this.proxy.sendMessage(
      66,  // ordinal
      network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ParamsSpec,
      null,
      [cache_key]);
  }

  addAuthCacheEntry(challenge, network_anonymization_key, credentials) {
    // Ordinal: 67
    return this.proxy.sendMessage(
      67,  // ordinal
      network.mojom.NetworkContext_AddAuthCacheEntry_ParamsSpec,
      null,
      [challenge, network_anonymization_key, credentials]);
  }

  setCorsNonWildcardRequestHeadersSupport(value) {
    // Ordinal: 68
    return this.proxy.sendMessage(
      68,  // ordinal
      network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_ParamsSpec,
      null,
      [value]);
  }

  lookupProxyAuthCredentials(proxy_server, auth_scheme, realm) {
    // Ordinal: 69
    return this.proxy.sendMessage(
      69,  // ordinal
      network.mojom.NetworkContext_LookupProxyAuthCredentials_ParamsSpec,
      network.mojom.NetworkContext_LookupProxyAuthCredentials_ResponseParamsSpec,
      [proxy_server, auth_scheme, realm]);
  }

  enableStaticKeyPinningForTesting() {
    // Ordinal: 70
    return this.proxy.sendMessage(
      70,  // ordinal
      network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ParamsSpec,
      null,
      []);
  }

  verifyCertificateForTesting(certificate, hostname, ocsp_response, sct_list) {
    // Ordinal: 71
    return this.proxy.sendMessage(
      71,  // ordinal
      network.mojom.NetworkContext_VerifyCertificateForTesting_ParamsSpec,
      network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParamsSpec,
      [certificate, hostname, ocsp_response, sct_list]);
  }

  getTrustAnchorIDsForTesting() {
    // Ordinal: 72
    return this.proxy.sendMessage(
      72,  // ordinal
      network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ParamsSpec,
      network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParamsSpec,
      []);
  }

  addDomainReliabilityContextForTesting(origin, upload_url) {
    // Ordinal: 73
    return this.proxy.sendMessage(
      73,  // ordinal
      network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ParamsSpec,
      null,
      [origin, upload_url]);
  }

  forceDomainReliabilityUploadsForTesting() {
    // Ordinal: 74
    return this.proxy.sendMessage(
      74,  // ordinal
      network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ParamsSpec,
      null,
      []);
  }

  setSCTAuditingMode(mode) {
    // Ordinal: 75
    return this.proxy.sendMessage(
      75,  // ordinal
      network.mojom.NetworkContext_SetSCTAuditingMode_ParamsSpec,
      null,
      [mode]);
  }

  addReportingApiObserver(observer) {
    // Ordinal: 76
    return this.proxy.sendMessage(
      76,  // ordinal
      network.mojom.NetworkContext_AddReportingApiObserver_ParamsSpec,
      null,
      [observer]);
  }

  getSharedDictionaryUsageInfo() {
    // Ordinal: 77
    return this.proxy.sendMessage(
      77,  // ordinal
      network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ParamsSpec,
      network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParamsSpec,
      []);
  }

  getSharedDictionaryInfo(isolation_key) {
    // Ordinal: 78
    return this.proxy.sendMessage(
      78,  // ordinal
      network.mojom.NetworkContext_GetSharedDictionaryInfo_ParamsSpec,
      network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParamsSpec,
      [isolation_key]);
  }

  getSharedDictionaryOriginsBetween(start_time, end_time) {
    // Ordinal: 79
    return this.proxy.sendMessage(
      79,  // ordinal
      network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ParamsSpec,
      network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParamsSpec,
      [start_time, end_time]);
  }

  setSharedDictionaryCacheMaxSize(cache_max_size) {
    // Ordinal: 80
    return this.proxy.sendMessage(
      80,  // ordinal
      network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_ParamsSpec,
      null,
      [cache_max_size]);
  }

  preloadSharedDictionaryInfoForDocument(urls, preload_handle) {
    // Ordinal: 81
    return this.proxy.sendMessage(
      81,  // ordinal
      network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_ParamsSpec,
      null,
      [urls, preload_handle]);
  }

  hasPreloadedSharedDictionaryInfoForTesting() {
    // Ordinal: 82
    return this.proxy.sendMessage(
      82,  // ordinal
      network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ParamsSpec,
      network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParamsSpec,
      []);
  }

  flushCachedClientCertIfNeeded(host, certificate) {
    // Ordinal: 83
    return this.proxy.sendMessage(
      83,  // ordinal
      network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_ParamsSpec,
      null,
      [host, certificate]);
  }

  flushMatchingCachedClientCert(certificate) {
    // Ordinal: 84
    return this.proxy.sendMessage(
      84,  // ordinal
      network.mojom.NetworkContext_FlushMatchingCachedClientCert_ParamsSpec,
      null,
      [certificate]);
  }

  flushClientCertCache() {
    // Ordinal: 85
    return this.proxy.sendMessage(
      85,  // ordinal
      network.mojom.NetworkContext_FlushClientCertCache_ParamsSpec,
      null,
      []);
  }

  revokeNetworkForNonces(nonces_to_patterns) {
    // Ordinal: 86
    return this.proxy.sendMessage(
      86,  // ordinal
      network.mojom.NetworkContext_RevokeNetworkForNonces_ParamsSpec,
      null,
      [nonces_to_patterns]);
  }

  clearNonces(nonces) {
    // Ordinal: 87
    return this.proxy.sendMessage(
      87,  // ordinal
      network.mojom.NetworkContext_ClearNonces_ParamsSpec,
      null,
      [nonces]);
  }

  exemptUrlFromNetworkRevocationForNonce(exempted_url, nonce) {
    // Ordinal: 88
    return this.proxy.sendMessage(
      88,  // ordinal
      network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ParamsSpec,
      null,
      [exempted_url, nonce]);
  }

  prefetch(request_id, options, request, traffic_annotation) {
    // Ordinal: 89
    return this.proxy.sendMessage(
      89,  // ordinal
      network.mojom.NetworkContext_Prefetch_ParamsSpec,
      null,
      [request_id, options, request, traffic_annotation]);
  }

  getBoundNetworkForTesting() {
    // Ordinal: 90
    return this.proxy.sendMessage(
      90,  // ordinal
      network.mojom.NetworkContext_GetBoundNetworkForTesting_ParamsSpec,
      network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParamsSpec,
      []);
  }

  getDeviceBoundSessionManager(device_bound_session_manager) {
    // Ordinal: 91
    return this.proxy.sendMessage(
      91,  // ordinal
      network.mojom.NetworkContext_GetDeviceBoundSessionManager_ParamsSpec,
      null,
      [device_bound_session_manager]);
  }

  addQuicHints(origins, network_anonymization_key) {
    // Ordinal: 92
    return this.proxy.sendMessage(
      92,  // ordinal
      network.mojom.NetworkContext_AddQuicHints_ParamsSpec,
      null,
      [origins, network_anonymization_key]);
  }

};

network.mojom.NetworkContext.getRemote = function() {
  let remote = new network.mojom.NetworkContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkContext',
    'context');
  return remote.$;
};

// ParamsSpec for SetClient
network.mojom.NetworkContext_SetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateURLLoaderFactory
network.mojom.NetworkContext_CreateURLLoaderFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateURLLoaderFactory_Params',
      packedSize: 24,
      fields: [
        { name: 'url_loader_factory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'params', packedOffset: 16, packedBitOffset: 0, type: network.mojom.URLLoaderFactoryParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResetURLLoaderFactories
network.mojom.NetworkContext_ResetURLLoaderFactories_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ResetURLLoaderFactories_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetViaObliviousHttp
network.mojom.NetworkContext_GetViaObliviousHttp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetViaObliviousHttp_Params',
      packedSize: 24,
      fields: [
        { name: 'request', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ObliviousHttpRequestSpec, nullable: false },
        { name: 'client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetCookieManager
network.mojom.NetworkContext_GetCookieManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetCookieManager_Params',
      packedSize: 16,
      fields: [
        { name: 'cookie_manager', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetRestrictedCookieManager
network.mojom.NetworkContext_GetRestrictedCookieManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetRestrictedCookieManager_Params',
      packedSize: 64,
      fields: [
        { name: 'restricted_cookie_manager', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'role', packedOffset: 16, packedBitOffset: 0, type: network.mojom.RestrictedCookieManagerRoleSpec, nullable: false },
        { name: 'origin', packedOffset: 24, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'isolation_info', packedOffset: 32, packedBitOffset: 0, type: network.mojom.IsolationInfoSpec, nullable: false },
        { name: 'cookie_setting_overrides', packedOffset: 40, packedBitOffset: 0, type: network.mojom.CookieSettingOverridesSpec, nullable: false },
        { name: 'devtools_cookie_setting_overrides', packedOffset: 48, packedBitOffset: 0, type: network.mojom.CookieSettingOverridesSpec, nullable: false },
        { name: 'cookie_observer', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetTrustTokenQueryAnswerer
network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetTrustTokenQueryAnswerer_Params',
      packedSize: 24,
      fields: [
        { name: 'trust_token_query_answerer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'top_frame_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearTrustTokenData
network.mojom.NetworkContext_ClearTrustTokenData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearTrustTokenData_Params',
      packedSize: 16,
      fields: [
        { name: 'filter', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ClearDataFilterSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearTrustTokenSessionOnlyData
network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearTrustTokenSessionOnlyData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearTrustTokenSessionOnlyData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'any_data_deleted', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetStoredTrustTokenCounts
network.mojom.NetworkContext_GetStoredTrustTokenCounts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetStoredTrustTokenCounts_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetStoredTrustTokenCounts_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tokens', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPrivateStateTokenRedemptionRecords
network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetPrivateStateTokenRedemptionRecords_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetPrivateStateTokenRedemptionRecords_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'issuer_redemption_record_map', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteStoredTrustTokens
network.mojom.NetworkContext_DeleteStoredTrustTokens_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.DeleteStoredTrustTokens_Params',
      packedSize: 16,
      fields: [
        { name: 'issuer', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.DeleteStoredTrustTokens_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DeleteStoredTrustTokensStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetBlockTrustTokens
network.mojom.NetworkContext_SetBlockTrustTokens_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetBlockTrustTokens_Params',
      packedSize: 16,
      fields: [
        { name: 'block', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearNetworkingHistoryBetween
network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearNetworkingHistoryBetween_Params',
      packedSize: 24,
      fields: [
        { name: 'start_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'end_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearHttpCache
network.mojom.NetworkContext_ClearHttpCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearHttpCache_Params',
      packedSize: 32,
      fields: [
        { name: 'start_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'end_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'filter', packedOffset: 24, packedBitOffset: 0, type: network.mojom.ClearDataFilterSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ComputeHttpCacheSize
network.mojom.NetworkContext_ComputeHttpCacheSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ComputeHttpCacheSize_Params',
      packedSize: 24,
      fields: [
        { name: 'start_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'end_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ComputeHttpCacheSize_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'is_upper_bound', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'size_or_error', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyBrowserIdle
network.mojom.NetworkContext_NotifyBrowserIdle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.NotifyBrowserIdle_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyExternalCacheHit
network.mojom.NetworkContext_NotifyExternalCacheHit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.NotifyExternalCacheHit_Params',
      packedSize: 40,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'http_method', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'key', packedOffset: 24, packedBitOffset: 0, type: network.mojom.NetworkIsolationKeySpec, nullable: false },
        { name: 'include_credentials', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearHostCache
network.mojom.NetworkContext_ClearHostCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearHostCache_Params',
      packedSize: 16,
      fields: [
        { name: 'filter', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ClearDataFilterSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearHttpAuthCache
network.mojom.NetworkContext_ClearHttpAuthCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearHttpAuthCache_Params',
      packedSize: 32,
      fields: [
        { name: 'start_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'end_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'filter', packedOffset: 24, packedBitOffset: 0, type: network.mojom.ClearDataFilterSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearCorsPreflightCache
network.mojom.NetworkContext_ClearCorsPreflightCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearCorsPreflightCache_Params',
      packedSize: 16,
      fields: [
        { name: 'filter', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ClearDataFilterSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearReportingCacheReports
network.mojom.NetworkContext_ClearReportingCacheReports_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearReportingCacheReports_Params',
      packedSize: 16,
      fields: [
        { name: 'filter', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ClearDataFilterSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearReportingCacheClients
network.mojom.NetworkContext_ClearReportingCacheClients_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearReportingCacheClients_Params',
      packedSize: 16,
      fields: [
        { name: 'filter', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ClearDataFilterSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearNetworkErrorLogging
network.mojom.NetworkContext_ClearNetworkErrorLogging_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearNetworkErrorLogging_Params',
      packedSize: 16,
      fields: [
        { name: 'filter', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ClearDataFilterSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearDomainReliability
network.mojom.NetworkContext_ClearDomainReliability_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearDomainReliability_Params',
      packedSize: 24,
      fields: [
        { name: 'filter', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ClearDataFilterSpec, nullable: true },
        { name: 'mode', packedOffset: 16, packedBitOffset: 0, type: network.mojom.DomainReliabilityClearModeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearSharedDictionaryCache
network.mojom.NetworkContext_ClearSharedDictionaryCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearSharedDictionaryCache_Params',
      packedSize: 32,
      fields: [
        { name: 'start_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'end_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'filter', packedOffset: 24, packedBitOffset: 0, type: network.mojom.ClearDataFilterSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearSharedDictionaryCacheForIsolationKey
network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearSharedDictionaryCacheForIsolationKey_Params',
      packedSize: 16,
      fields: [
        { name: 'isolation_key', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SharedDictionaryIsolationKeySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetDocumentReportingEndpoints
network.mojom.NetworkContext_SetDocumentReportingEndpoints_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetDocumentReportingEndpoints_Params',
      packedSize: 40,
      fields: [
        { name: 'reporting_source', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'isolation_info', packedOffset: 24, packedBitOffset: 0, type: network.mojom.IsolationInfoSpec, nullable: false },
        { name: 'endpoints', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetEnterpriseReportingEndpoints
network.mojom.NetworkContext_SetEnterpriseReportingEndpoints_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetEnterpriseReportingEndpoints_Params',
      packedSize: 16,
      fields: [
        { name: 'endpoints', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendReportsAndRemoveSource
network.mojom.NetworkContext_SendReportsAndRemoveSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SendReportsAndRemoveSource_Params',
      packedSize: 16,
      fields: [
        { name: 'reporting_source', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for QueueReport
network.mojom.NetworkContext_QueueReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.QueueReport_Params',
      packedSize: 56,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'group', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'reporting_source', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
        { name: 'network_anonymization_key', packedOffset: 40, packedBitOffset: 0, type: network.mojom.NetworkAnonymizationKeySpec, nullable: false },
        { name: 'body', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for QueueEnterpriseReport
network.mojom.NetworkContext_QueueEnterpriseReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.QueueEnterpriseReport_Params',
      packedSize: 40,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'group', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'body', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for QueueSignedExchangeReport
network.mojom.NetworkContext_QueueSignedExchangeReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.QueueSignedExchangeReport_Params',
      packedSize: 24,
      fields: [
        { name: 'report', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SignedExchangeReportSpec, nullable: false },
        { name: 'network_anonymization_key', packedOffset: 16, packedBitOffset: 0, type: network.mojom.NetworkAnonymizationKeySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CloseAllConnections
network.mojom.NetworkContext_CloseAllConnections_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CloseAllConnections_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CloseIdleConnections
network.mojom.NetworkContext_CloseIdleConnections_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CloseIdleConnections_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetNetworkConditions
network.mojom.NetworkContext_SetNetworkConditions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetNetworkConditions_Params',
      packedSize: 24,
      fields: [
        { name: 'throttling_profile_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'conditions', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetAcceptLanguage
network.mojom.NetworkContext_SetAcceptLanguage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetAcceptLanguage_Params',
      packedSize: 16,
      fields: [
        { name: 'new_accept_language', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetEnableReferrers
network.mojom.NetworkContext_SetEnableReferrers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetEnableReferrers_Params',
      packedSize: 16,
      fields: [
        { name: 'enable_referrers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetCTPolicy
network.mojom.NetworkContext_SetCTPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetCTPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'ct_policy', packedOffset: 8, packedBitOffset: 0, type: network.mojom.CTPolicySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateUDPSocket
network.mojom.NetworkContext_CreateUDPSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateUDPSocket_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'listener', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateRestrictedUDPSocket
network.mojom.NetworkContext_CreateRestrictedUDPSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateRestrictedUDPSocket_Params',
      packedSize: 56,
      fields: [
        { name: 'addr', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: false },
        { name: 'mode', packedOffset: 16, packedBitOffset: 0, type: network.mojom.RestrictedUDPSocketModeSpec, nullable: false },
        { name: 'traffic_annotation', packedOffset: 24, packedBitOffset: 0, type: network.mojom.MutableNetworkTrafficAnnotationTagSpec, nullable: false },
        { name: 'params', packedOffset: 32, packedBitOffset: 0, type: network.mojom.RestrictedUDPSocketParamsSpec, nullable: true },
        { name: 'receiver', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'listener', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'allow_multicast', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateRestrictedUDPSocket_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'local_addr_out', packedOffset: 16, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateTCPServerSocket
network.mojom.NetworkContext_CreateTCPServerSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateTCPServerSocket_Params',
      packedSize: 40,
      fields: [
        { name: 'local_addr', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: false },
        { name: 'options', packedOffset: 16, packedBitOffset: 0, type: network.mojom.TCPServerSocketOptionsSpec, nullable: false },
        { name: 'traffic_annotation', packedOffset: 24, packedBitOffset: 0, type: network.mojom.MutableNetworkTrafficAnnotationTagSpec, nullable: false },
        { name: 'socket', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateTCPServerSocket_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'local_addr_out', packedOffset: 16, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateTCPConnectedSocket
network.mojom.NetworkContext_CreateTCPConnectedSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateTCPConnectedSocket_Params',
      packedSize: 48,
      fields: [
        { name: 'local_addr', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true },
        { name: 'remote_addr_list', packedOffset: 16, packedBitOffset: 0, type: network.mojom.AddressListSpec, nullable: false },
        { name: 'tcp_connected_socket_options', packedOffset: 24, packedBitOffset: 0, type: network.mojom.TCPConnectedSocketOptionsSpec, nullable: true },
        { name: 'traffic_annotation', packedOffset: 32, packedBitOffset: 0, type: network.mojom.MutableNetworkTrafficAnnotationTagSpec, nullable: false },
        { name: 'socket', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'observer', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateTCPConnectedSocket_ResponseParams',
      packedSize: 48,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'local_addr', packedOffset: 16, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true },
        { name: 'peer_addr', packedOffset: 24, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true },
        { name: 'receive_stream', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'send_stream', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateTCPBoundSocket
network.mojom.NetworkContext_CreateTCPBoundSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateTCPBoundSocket_Params',
      packedSize: 32,
      fields: [
        { name: 'local_addr', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: false },
        { name: 'traffic_annotation', packedOffset: 16, packedBitOffset: 0, type: network.mojom.MutableNetworkTrafficAnnotationTagSpec, nullable: false },
        { name: 'socket', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateTCPBoundSocket_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'local_addr', packedOffset: 16, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateProxyResolvingSocketFactory
network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateProxyResolvingSocketFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'factory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LookUpProxyForURL
network.mojom.NetworkContext_LookUpProxyForURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.LookUpProxyForURL_Params',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'network_anonymization_key', packedOffset: 16, packedBitOffset: 0, type: network.mojom.NetworkAnonymizationKeySpec, nullable: false },
        { name: 'proxy_lookup_client', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ForceReloadProxyConfig
network.mojom.NetworkContext_ForceReloadProxyConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ForceReloadProxyConfig_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearBadProxiesCache
network.mojom.NetworkContext_ClearBadProxiesCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearBadProxiesCache_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateWebSocket
network.mojom.NetworkContext_CreateWebSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateWebSocket_Params',
      packedSize: 120,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'requested_protocols', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'site_for_cookies', packedOffset: 24, packedBitOffset: 0, type: network.mojom.SiteForCookiesSpec, nullable: false },
        { name: 'storage_access_api_status', packedOffset: 32, packedBitOffset: 0, type: network.mojom.StorageAccessApiStatusSpec, nullable: false },
        { name: 'isolation_info', packedOffset: 40, packedBitOffset: 0, type: network.mojom.IsolationInfoSpec, nullable: false },
        { name: 'additional_headers', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'process_id', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'origin', packedOffset: 64, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'client_security_state', packedOffset: 72, packedBitOffset: 0, type: network.mojom.ClientSecurityStateSpec, nullable: false },
        { name: 'options', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'traffic_annotation', packedOffset: 88, packedBitOffset: 0, type: network.mojom.MutableNetworkTrafficAnnotationTagSpec, nullable: false },
        { name: 'handshake_client', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'url_loader_network_observer', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'auth_handler', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'header_client', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'throttling_profile_id', packedOffset: 112, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateWebTransport
network.mojom.NetworkContext_CreateWebTransport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateWebTransport_Params',
      packedSize: 64,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'network_anonymization_key', packedOffset: 24, packedBitOffset: 0, type: network.mojom.NetworkAnonymizationKeySpec, nullable: false },
        { name: 'fingerprints', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'application_protocols', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'handshake_client', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'url_loader_network_observer', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'client_security_state', packedOffset: 56, packedBitOffset: 0, type: network.mojom.ClientSecurityStateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateNetLogExporter
network.mojom.NetworkContext_CreateNetLogExporter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateNetLogExporter_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PreconnectSockets
network.mojom.NetworkContext_PreconnectSockets_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.PreconnectSockets_Params',
      packedSize: 64,
      fields: [
        { name: 'num_streams', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'credentials_mode', packedOffset: 24, packedBitOffset: 0, type: network.mojom.CredentialsModeSpec, nullable: false },
        { name: 'network_anonymization_key', packedOffset: 32, packedBitOffset: 0, type: network.mojom.NetworkAnonymizationKeySpec, nullable: false },
        { name: 'traffic_annotation', packedOffset: 40, packedBitOffset: 0, type: network.mojom.MutableNetworkTrafficAnnotationTagSpec, nullable: false },
        { name: 'keepalive_config', packedOffset: 48, packedBitOffset: 0, type: network.mojom.ConnectionKeepAliveConfigSpec, nullable: true },
        { name: 'observer_client', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateP2PSocketManager
network.mojom.NetworkContext_CreateP2PSocketManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateP2PSocketManager_Params',
      packedSize: 32,
      fields: [
        { name: 'network_anonymization_key', packedOffset: 8, packedBitOffset: 0, type: network.mojom.NetworkAnonymizationKeySpec, nullable: false },
        { name: 'client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'trusted_socket_manager', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'socket_manager', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateMdnsResponder
network.mojom.NetworkContext_CreateMdnsResponder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateMdnsResponder_Params',
      packedSize: 16,
      fields: [
        { name: 'responder_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResolveHost
network.mojom.NetworkContext_ResolveHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ResolveHost_Params',
      packedSize: 40,
      fields: [
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: network.mojom.HostResolverHostSpec, nullable: false },
        { name: 'network_anonymization_key', packedOffset: 16, packedBitOffset: 0, type: network.mojom.NetworkAnonymizationKeySpec, nullable: false },
        { name: 'optional_parameters', packedOffset: 24, packedBitOffset: 0, type: network.mojom.ResolveHostParametersSpec, nullable: true },
        { name: 'response_client', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateHostResolver
network.mojom.NetworkContext_CreateHostResolver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.CreateHostResolver_Params',
      packedSize: 24,
      fields: [
        { name: 'config_overrides', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DnsConfigOverridesSpec, nullable: true },
        { name: 'host_resolver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for VerifyCert
network.mojom.NetworkContext_VerifyCert_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.VerifyCert_Params',
      packedSize: 40,
      fields: [
        { name: 'certificate', packedOffset: 8, packedBitOffset: 0, type: network.mojom.X509CertificateSpec, nullable: false },
        { name: 'host_port', packedOffset: 16, packedBitOffset: 0, type: network.mojom.HostPortPairSpec, nullable: false },
        { name: 'ocsp_response', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'sct_list', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_VerifyCert_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.VerifyCert_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'error_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'cv_result', packedOffset: 16, packedBitOffset: 0, type: network.mojom.CertVerifyResultSpec, nullable: false },
        { name: 'pkp_bypassed', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for VerifyCertForSignedExchange
network.mojom.NetworkContext_VerifyCertForSignedExchange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.VerifyCertForSignedExchange_Params',
      packedSize: 40,
      fields: [
        { name: 'certificate', packedOffset: 8, packedBitOffset: 0, type: network.mojom.X509CertificateSpec, nullable: false },
        { name: 'host_port', packedOffset: 16, packedBitOffset: 0, type: network.mojom.HostPortPairSpec, nullable: false },
        { name: 'ocsp_response', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'sct_list', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.VerifyCertForSignedExchange_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'error_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'cv_result', packedOffset: 16, packedBitOffset: 0, type: network.mojom.CertVerifyResultSpec, nullable: false },
        { name: 'pkp_bypassed', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Verify2QwacCertBinding
network.mojom.NetworkContext_Verify2QwacCertBinding_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.Verify2QwacCertBinding_Params',
      packedSize: 32,
      fields: [
        { name: 'binding', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'hostname', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'tls_certificate', packedOffset: 24, packedBitOffset: 0, type: network.mojom.X509CertificateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.Verify2QwacCertBinding_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'verified_cert', packedOffset: 8, packedBitOffset: 0, type: network.mojom.X509CertificateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddHSTS
network.mojom.NetworkContext_AddHSTS_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.AddHSTS_Params',
      packedSize: 32,
      fields: [
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'expiry', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'include_subdomains', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsHSTSActiveForHost
network.mojom.NetworkContext_IsHSTSActiveForHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.IsHSTSActiveForHost_Params',
      packedSize: 24,
      fields: [
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_top_level_nav', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.IsHSTSActiveForHost_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetHSTSState
network.mojom.NetworkContext_GetHSTSState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetHSTSState_Params',
      packedSize: 16,
      fields: [
        { name: 'domain', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_GetHSTSState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetHSTSState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetCorsOriginAccessListsForOrigin
network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetCorsOriginAccessListsForOrigin_Params',
      packedSize: 32,
      fields: [
        { name: 'source_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'allow_patterns', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'block_patterns', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteDynamicDataForHost
network.mojom.NetworkContext_DeleteDynamicDataForHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.DeleteDynamicDataForHost_Params',
      packedSize: 16,
      fields: [
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.DeleteDynamicDataForHost_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetSplitAuthCacheByNetworkAnonymizationKey
network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetSplitAuthCacheByNetworkAnonymizationKey_Params',
      packedSize: 16,
      fields: [
        { name: 'split_auth_cache_by_network_anonymization_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SaveHttpAuthCacheProxyEntries
network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SaveHttpAuthCacheProxyEntries_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SaveHttpAuthCacheProxyEntries_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'cache_key', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LoadHttpAuthCacheProxyEntries
network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.LoadHttpAuthCacheProxyEntries_Params',
      packedSize: 16,
      fields: [
        { name: 'cache_key', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddAuthCacheEntry
network.mojom.NetworkContext_AddAuthCacheEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.AddAuthCacheEntry_Params',
      packedSize: 32,
      fields: [
        { name: 'challenge', packedOffset: 8, packedBitOffset: 0, type: network.mojom.AuthChallengeInfoSpec, nullable: false },
        { name: 'network_anonymization_key', packedOffset: 16, packedBitOffset: 0, type: network.mojom.NetworkAnonymizationKeySpec, nullable: false },
        { name: 'credentials', packedOffset: 24, packedBitOffset: 0, type: network.mojom.AuthCredentialsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetCorsNonWildcardRequestHeadersSupport
network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetCorsNonWildcardRequestHeadersSupport_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LookupProxyAuthCredentials
network.mojom.NetworkContext_LookupProxyAuthCredentials_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.LookupProxyAuthCredentials_Params',
      packedSize: 32,
      fields: [
        { name: 'proxy_server', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ProxyServerSpec, nullable: false },
        { name: 'auth_scheme', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'realm', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_LookupProxyAuthCredentials_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.LookupProxyAuthCredentials_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'credentials', packedOffset: 8, packedBitOffset: 0, type: network.mojom.AuthCredentialsSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnableStaticKeyPinningForTesting
network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.EnableStaticKeyPinningForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for VerifyCertificateForTesting
network.mojom.NetworkContext_VerifyCertificateForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.VerifyCertificateForTesting_Params',
      packedSize: 40,
      fields: [
        { name: 'certificate', packedOffset: 8, packedBitOffset: 0, type: network.mojom.X509CertificateSpec, nullable: false },
        { name: 'hostname', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'ocsp_response', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'sct_list', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.VerifyCertificateForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetTrustAnchorIDsForTesting
network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetTrustAnchorIDsForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetTrustAnchorIDsForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'trust_anchor_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddDomainReliabilityContextForTesting
network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.AddDomainReliabilityContextForTesting_Params',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'upload_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ForceDomainReliabilityUploadsForTesting
network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ForceDomainReliabilityUploadsForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetSCTAuditingMode
network.mojom.NetworkContext_SetSCTAuditingMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetSCTAuditingMode_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SCTAuditingModeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddReportingApiObserver
network.mojom.NetworkContext_AddReportingApiObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.AddReportingApiObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSharedDictionaryUsageInfo
network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetSharedDictionaryUsageInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetSharedDictionaryUsageInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'usage_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSharedDictionaryInfo
network.mojom.NetworkContext_GetSharedDictionaryInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetSharedDictionaryInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'isolation_key', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SharedDictionaryIsolationKeySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetSharedDictionaryInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'dictionaries', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSharedDictionaryOriginsBetween
network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetSharedDictionaryOriginsBetween_Params',
      packedSize: 24,
      fields: [
        { name: 'start_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'end_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetSharedDictionaryOriginsBetween_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'origins', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetSharedDictionaryCacheMaxSize
network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.SetSharedDictionaryCacheMaxSize_Params',
      packedSize: 16,
      fields: [
        { name: 'cache_max_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PreloadSharedDictionaryInfoForDocument
network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.PreloadSharedDictionaryInfoForDocument_Params',
      packedSize: 24,
      fields: [
        { name: 'urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'preload_handle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HasPreloadedSharedDictionaryInfoForTesting
network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.HasPreloadedSharedDictionaryInfoForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.HasPreloadedSharedDictionaryInfoForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FlushCachedClientCertIfNeeded
network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.FlushCachedClientCertIfNeeded_Params',
      packedSize: 24,
      fields: [
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: network.mojom.HostPortPairSpec, nullable: false },
        { name: 'certificate', packedOffset: 16, packedBitOffset: 0, type: network.mojom.X509CertificateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FlushMatchingCachedClientCert
network.mojom.NetworkContext_FlushMatchingCachedClientCert_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.FlushMatchingCachedClientCert_Params',
      packedSize: 16,
      fields: [
        { name: 'certificate', packedOffset: 8, packedBitOffset: 0, type: network.mojom.X509CertificateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FlushClientCertCache
network.mojom.NetworkContext_FlushClientCertCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.FlushClientCertCache_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RevokeNetworkForNonces
network.mojom.NetworkContext_RevokeNetworkForNonces_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.RevokeNetworkForNonces_Params',
      packedSize: 16,
      fields: [
        { name: 'nonces_to_patterns', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearNonces
network.mojom.NetworkContext_ClearNonces_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ClearNonces_Params',
      packedSize: 16,
      fields: [
        { name: 'nonces', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExemptUrlFromNetworkRevocationForNonce
network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.ExemptUrlFromNetworkRevocationForNonce_Params',
      packedSize: 24,
      fields: [
        { name: 'exempted_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'nonce', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Prefetch
network.mojom.NetworkContext_Prefetch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.Prefetch_Params',
      packedSize: 32,
      fields: [
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'options', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'request', packedOffset: 16, packedBitOffset: 0, type: network.mojom.URLRequestSpec, nullable: false },
        { name: 'traffic_annotation', packedOffset: 24, packedBitOffset: 0, type: network.mojom.MutableNetworkTrafficAnnotationTagSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetBoundNetworkForTesting
network.mojom.NetworkContext_GetBoundNetworkForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetBoundNetworkForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetBoundNetworkForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'bound_network', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDeviceBoundSessionManager
network.mojom.NetworkContext_GetDeviceBoundSessionManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.GetDeviceBoundSessionManager_Params',
      packedSize: 16,
      fields: [
        { name: 'device_bound_session_manager', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddQuicHints
network.mojom.NetworkContext_AddQuicHints_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContext.AddQuicHints_Params',
      packedSize: 24,
      fields: [
        { name: 'origins', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'network_anonymization_key', packedOffset: 16, packedBitOffset: 0, type: network.mojom.NetworkAnonymizationKeySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.NetworkContextPtr = network.mojom.NetworkContextRemote;
network.mojom.NetworkContextRequest = network.mojom.NetworkContextPendingReceiver;

