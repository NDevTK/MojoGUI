// Auto-generated MojoJS binding
// Source: chromium_src/content/common/navigation_client.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var content = content || {};
var content = content || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};
var url = url || {};


// Enum: NavigationClientDisconnectReason
content.mojom.NavigationClientDisconnectReason = {
  kNoExplicitReason: 0,
  kResetForSwap: 1,
  kResetForAbort: 2,
  kResetForNewNavigation: 3,
  kResetForDuplicateNavigation: 4,
};
content.mojom.NavigationClientDisconnectReasonSpec = { $: mojo.internal.Enum() };

// Struct: DidCommitProvisionalLoadParams
content.mojom.DidCommitProvisionalLoadParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.DidCommitProvisionalLoadParams',
      packedSize: 208,
      fields: [
        { name: 'item_sequence_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'document_sequence_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'navigation_api_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'referrer', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.ReferrerSpec, nullable: false, minVersion: 0 },
        { name: 'transition', packedOffset: 40, packedBitOffset: 0, type: content.mojom.PageTransitionSpec, nullable: false, minVersion: 0 },
        { name: 'should_update_history', packedOffset: 196, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'contents_mime_type', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'did_create_new_entry', packedOffset: 196, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'method', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'post_id', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'http_status_code', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'url_is_unreachable', packedOffset: 196, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'previous_page_state', packedOffset: 72, packedBitOffset: 0, type: content.mojom.PageStateSpec, nullable: true, minVersion: 0 },
        { name: 'page_state', packedOffset: 80, packedBitOffset: 0, type: content.mojom.PageStateSpec, nullable: false, minVersion: 0 },
        { name: 'is_overriding_user_agent', packedOffset: 196, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'history_list_was_cleared', packedOffset: 196, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'origin', packedOffset: 88, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'initiator_base_url', packedOffset: 96, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'permissions_policy_header', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.ParsedPermissionsPolicyDeclarationSpec, false), nullable: false, minVersion: 0 },
        { name: 'document_policy_header', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Map(blink.mojom.DocumentPolicyFeatureSpec, blink.mojom.PolicyValueSpec, false), nullable: false, minVersion: 0 },
        { name: 'insecure_request_policy', packedOffset: 188, packedBitOffset: 0, type: blink.mojom.InsecureRequestPolicySpec, nullable: false, minVersion: 0 },
        { name: 'insecure_navigations_set', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'has_potentially_trustworthy_unique_origin', packedOffset: 196, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'request_id', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'navigation_token', packedOffset: 128, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'embedding_token', packedOffset: 136, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'unload_start', packedOffset: 144, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true, minVersion: 0 },
        { name: 'unload_end', packedOffset: 152, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true, minVersion: 0 },
        { name: 'commit_navigation_start', packedOffset: 160, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'commit_navigation_end', packedOffset: 168, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true, minVersion: 0 },
        { name: 'commit_reply_sent', packedOffset: 176, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 208}]
    }
  }
};

// Struct: DidCommitSameDocumentNavigationParams
content.mojom.DidCommitSameDocumentNavigationParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.DidCommitSameDocumentNavigationParams',
      packedSize: 32,
      fields: [
        { name: 'same_document_navigation_type', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.SameDocumentNavigationTypeSpec, nullable: false, minVersion: 0 },
        { name: 'is_client_redirect', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'started_with_transient_activation', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'should_replace_current_entry', packedOffset: 20, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'navigation_entry_screenshot_destination', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SameDocNavigationScreenshotDestinationTokenSpec, nullable: true, minVersion: 0 },
        { name: 'same_document_metrics_token', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'caused_by_ad', packedOffset: 20, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CookieManagerInfo
content.mojom.CookieManagerInfoSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.CookieManagerInfo',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'cookie_manager', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.RestrictedCookieManagerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: StorageInfo
content.mojom.StorageInfoSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.StorageInfo',
      packedSize: 24,
      fields: [
        { name: 'local_storage_area', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.StorageAreaRemote), nullable: true, minVersion: 0 },
        { name: 'session_storage_area', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.StorageAreaRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: NavigationClient
content.mojom.NavigationClient = {};

content.mojom.NavigationClient_CommitNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.NavigationClient_CommitNavigation_Params',
      packedSize: 176,
      fields: [
        { name: 'common_params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CommonNavigationParamsSpec, nullable: false, minVersion: 0 },
        { name: 'request_params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CommitNavigationParamsSpec, nullable: false, minVersion: 0 },
        { name: 'response_head', packedOffset: 16, packedBitOffset: 0, type: network.mojom.URLResponseHeadSpec, nullable: false, minVersion: 0 },
        { name: 'response_body', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
        { name: 'url_loader_client_endpoints', packedOffset: 32, packedBitOffset: 0, type: network.mojom.URLLoaderClientEndpointsSpec, nullable: true, minVersion: 0 },
        { name: 'subresource_loader_factories', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.URLLoaderFactoryBundleSpec, nullable: true, minVersion: 0 },
        { name: 'subresource_overrides', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.TransferrableURLLoaderSpec, false), nullable: true, minVersion: 0 },
        { name: 'controller_service_worker_info', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.ControllerServiceWorkerInfoSpec, nullable: true, minVersion: 0 },
        { name: 'container_info', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.ServiceWorkerContainerInfoForClientSpec, nullable: true, minVersion: 0 },
        { name: 'subresource_proxying_loader_factory', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), nullable: true, minVersion: 0 },
        { name: 'keep_alive_loader_factory', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), nullable: true, minVersion: 0 },
        { name: 'fetch_later_loader_factory', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(blink.mojom.FetchLaterLoaderFactoryRemote), nullable: true, minVersion: 0 },
        { name: 'document_token', packedOffset: 96, packedBitOffset: 0, type: blink.mojom.DocumentTokenSpec, nullable: false, minVersion: 0 },
        { name: 'devtools_navigation_token', packedOffset: 104, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'base_auction_nonce', packedOffset: 112, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false, minVersion: 0 },
        { name: 'permissions_policy', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.ParsedPermissionsPolicyDeclarationSpec, false), nullable: true, minVersion: 0 },
        { name: 'policy_container', packedOffset: 128, packedBitOffset: 0, type: blink.mojom.PolicyContainerSpec, nullable: false, minVersion: 0 },
        { name: 'code_cache_host', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.CodeCacheHostRemote), nullable: true, minVersion: 0 },
        { name: 'code_cache_host_for_background', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.CodeCacheHostRemote), nullable: true, minVersion: 0 },
        { name: 'cookie_manager_info', packedOffset: 152, packedBitOffset: 0, type: content.mojom.CookieManagerInfoSpec, nullable: true, minVersion: 0 },
        { name: 'storage_info', packedOffset: 160, packedBitOffset: 0, type: content.mojom.StorageInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 176}]
    }
  }
};

content.mojom.NavigationClient_CommitFailedNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.NavigationClient_CommitFailedNavigation_Params',
      packedSize: 96,
      fields: [
        { name: 'common_params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CommonNavigationParamsSpec, nullable: false, minVersion: 0 },
        { name: 'request_params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CommitNavigationParamsSpec, nullable: false, minVersion: 0 },
        { name: 'has_stale_copy_in_cache', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'error_code', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'extended_error_code', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'resolve_error_info', packedOffset: 16, packedBitOffset: 0, type: network.mojom.ResolveErrorInfoSpec, nullable: false, minVersion: 0 },
        { name: 'error_page_content', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'subresource_loader_factories', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.URLLoaderFactoryBundleSpec, nullable: true, minVersion: 0 },
        { name: 'document_token', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.DocumentTokenSpec, nullable: false, minVersion: 0 },
        { name: 'devtools_navigation_token', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'policy_container', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.PolicyContainerSpec, nullable: false, minVersion: 0 },
        { name: 'alternative_error_page_info', packedOffset: 64, packedBitOffset: 0, type: content.mojom.AlternativeErrorPageOverrideInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 96}]
    }
  }
};

content.mojom.NavigationClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.NavigationClientRemote = class {
  static get $interfaceName() {
    return 'content.mojom.NavigationClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.NavigationClientPendingReceiver,
      handle);
    this.$ = new content.mojom.NavigationClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.NavigationClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  commitNavigation(common_params, request_params, response_head, response_body, url_loader_client_endpoints, subresource_loader_factories, subresource_overrides, controller_service_worker_info, container_info, subresource_proxying_loader_factory, keep_alive_loader_factory, fetch_later_loader_factory, document_token, devtools_navigation_token, base_auction_nonce, permissions_policy, policy_container, code_cache_host, code_cache_host_for_background, cookie_manager_info, storage_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.NavigationClient_CommitNavigation_ParamsSpec,
      content.mojom.NavigationClient_CommitNavigation_ResponseParamsSpec,
      [common_params, request_params, response_head, response_body, url_loader_client_endpoints, subresource_loader_factories, subresource_overrides, controller_service_worker_info, container_info, subresource_proxying_loader_factory, keep_alive_loader_factory, fetch_later_loader_factory, document_token, devtools_navigation_token, base_auction_nonce, permissions_policy, policy_container, code_cache_host, code_cache_host_for_background, cookie_manager_info, storage_info]);
  }

  commitFailedNavigation(common_params, request_params, has_stale_copy_in_cache, error_code, extended_error_code, resolve_error_info, error_page_content, subresource_loader_factories, document_token, devtools_navigation_token, policy_container, alternative_error_page_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.NavigationClient_CommitFailedNavigation_ParamsSpec,
      content.mojom.NavigationClient_CommitFailedNavigation_ResponseParamsSpec,
      [common_params, request_params, has_stale_copy_in_cache, error_code, extended_error_code, resolve_error_info, error_page_content, subresource_loader_factories, document_token, devtools_navigation_token, policy_container, alternative_error_page_info]);
  }

};

content.mojom.NavigationClient.getRemote = function() {
  let remote = new content.mojom.NavigationClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.NavigationClient',
    'context');
  return remote.$;
};

// ParamsSpec for CommitNavigation
content.mojom.NavigationClient_CommitNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.NavigationClient.CommitNavigation_Params',
      packedSize: 176,
      fields: [
        { name: 'common_params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CommonNavigationParamsSpec, nullable: false, minVersion: 0 },
        { name: 'request_params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CommitNavigationParamsSpec, nullable: false, minVersion: 0 },
        { name: 'response_head', packedOffset: 16, packedBitOffset: 0, type: network.mojom.URLResponseHeadSpec, nullable: false, minVersion: 0 },
        { name: 'response_body', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
        { name: 'url_loader_client_endpoints', packedOffset: 32, packedBitOffset: 0, type: network.mojom.URLLoaderClientEndpointsSpec, nullable: true, minVersion: 0 },
        { name: 'subresource_loader_factories', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.URLLoaderFactoryBundleSpec, nullable: true, minVersion: 0 },
        { name: 'subresource_overrides', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.TransferrableURLLoaderSpec, false), nullable: true, minVersion: 0 },
        { name: 'controller_service_worker_info', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.ControllerServiceWorkerInfoSpec, nullable: true, minVersion: 0 },
        { name: 'container_info', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.ServiceWorkerContainerInfoForClientSpec, nullable: true, minVersion: 0 },
        { name: 'subresource_proxying_loader_factory', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), nullable: true, minVersion: 0 },
        { name: 'keep_alive_loader_factory', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), nullable: true, minVersion: 0 },
        { name: 'fetch_later_loader_factory', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(blink.mojom.FetchLaterLoaderFactoryRemote), nullable: true, minVersion: 0 },
        { name: 'document_token', packedOffset: 96, packedBitOffset: 0, type: blink.mojom.DocumentTokenSpec, nullable: false, minVersion: 0 },
        { name: 'devtools_navigation_token', packedOffset: 104, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'base_auction_nonce', packedOffset: 112, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false, minVersion: 0 },
        { name: 'permissions_policy', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.ParsedPermissionsPolicyDeclarationSpec, false), nullable: true, minVersion: 0 },
        { name: 'policy_container', packedOffset: 128, packedBitOffset: 0, type: blink.mojom.PolicyContainerSpec, nullable: false, minVersion: 0 },
        { name: 'code_cache_host', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.CodeCacheHostRemote), nullable: true, minVersion: 0 },
        { name: 'code_cache_host_for_background', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.CodeCacheHostRemote), nullable: true, minVersion: 0 },
        { name: 'cookie_manager_info', packedOffset: 152, packedBitOffset: 0, type: content.mojom.CookieManagerInfoSpec, nullable: true, minVersion: 0 },
        { name: 'storage_info', packedOffset: 160, packedBitOffset: 0, type: content.mojom.StorageInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 176}]
    }
  }
};

content.mojom.NavigationClient_CommitNavigation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.NavigationClient.CommitNavigation_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: content.mojom.DidCommitProvisionalLoadParamsSpec, nullable: false, minVersion: 0 },
        { name: 'interface_params', packedOffset: 8, packedBitOffset: 0, type: content.mojom.DidCommitProvisionalLoadInterfaceParamsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CommitFailedNavigation
content.mojom.NavigationClient_CommitFailedNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.NavigationClient.CommitFailedNavigation_Params',
      packedSize: 96,
      fields: [
        { name: 'common_params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CommonNavigationParamsSpec, nullable: false, minVersion: 0 },
        { name: 'request_params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CommitNavigationParamsSpec, nullable: false, minVersion: 0 },
        { name: 'has_stale_copy_in_cache', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'error_code', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'extended_error_code', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'resolve_error_info', packedOffset: 16, packedBitOffset: 0, type: network.mojom.ResolveErrorInfoSpec, nullable: false, minVersion: 0 },
        { name: 'error_page_content', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'subresource_loader_factories', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.URLLoaderFactoryBundleSpec, nullable: true, minVersion: 0 },
        { name: 'document_token', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.DocumentTokenSpec, nullable: false, minVersion: 0 },
        { name: 'devtools_navigation_token', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'policy_container', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.PolicyContainerSpec, nullable: false, minVersion: 0 },
        { name: 'alternative_error_page_info', packedOffset: 64, packedBitOffset: 0, type: content.mojom.AlternativeErrorPageOverrideInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 96}]
    }
  }
};

content.mojom.NavigationClient_CommitFailedNavigation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.NavigationClient.CommitFailedNavigation_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: content.mojom.DidCommitProvisionalLoadParamsSpec, nullable: false, minVersion: 0 },
        { name: 'interface_params', packedOffset: 8, packedBitOffset: 0, type: content.mojom.DidCommitProvisionalLoadInterfaceParamsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
content.mojom.NavigationClientPtr = content.mojom.NavigationClientRemote;
content.mojom.NavigationClientRequest = content.mojom.NavigationClientPendingReceiver;

