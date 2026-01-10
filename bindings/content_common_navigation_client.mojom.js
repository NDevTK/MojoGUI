// Auto-generated MojoJS binding
// Source: chromium_src/content/common/navigation_client.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var content = content || {};
var content = content || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
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
var services = services || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};
var url = url || {};

content.mojom.NavigationClientDisconnectReasonSpec = { $: mojo.internal.Enum() };
content.mojom.DidCommitProvisionalLoadParamsSpec = { $: {} };
content.mojom.DidCommitSameDocumentNavigationParamsSpec = { $: {} };
content.mojom.CookieManagerInfoSpec = { $: {} };
content.mojom.StorageInfoSpec = { $: {} };
content.mojom.NavigationClient = {};
content.mojom.NavigationClient.$interfaceName = 'content.mojom.NavigationClient';
content.mojom.NavigationClient_CommitNavigation_ParamsSpec = { $: {} };
content.mojom.NavigationClient_CommitNavigation_ResponseParamsSpec = { $: {} };
content.mojom.NavigationClient_CommitFailedNavigation_ParamsSpec = { $: {} };
content.mojom.NavigationClient_CommitFailedNavigation_ResponseParamsSpec = { $: {} };

// Enum: NavigationClientDisconnectReason
content.mojom.NavigationClientDisconnectReason = {
  kNoExplicitReason: 0,
  kResetForSwap: 1,
  kResetForAbort: 2,
  kResetForNewNavigation: 3,
  kResetForDuplicateNavigation: 4,
};

// Struct: DidCommitProvisionalLoadParams
mojo.internal.Struct(
    content.mojom.DidCommitProvisionalLoadParamsSpec, 'content.mojom.DidCommitProvisionalLoadParams', [
      mojo.internal.StructField('item_sequence_number', 0, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('document_sequence_number', 8, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('navigation_api_key', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('referrer', 32, 0, blink.mojom.ReferrerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transition', 40, 0, content.mojom.PageTransitionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('should_update_history', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('contents_mime_type', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('did_create_new_entry', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('method', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('post_id', 80, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('http_status_code', 88, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('url_is_unreachable', 92, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('previous_page_state', 96, 0, content.mojom.PageStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('page_state', 104, 0, content.mojom.PageStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_overriding_user_agent', 112, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('history_list_was_cleared', 112, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('origin', 120, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('initiator_base_url', 128, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('permissions_policy_header', 136, 0, mojo.internal.Array(network.mojom.ParsedPermissionsPolicyDeclarationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('document_policy_header', 144, 0, mojo.internal.Map(blink.mojom.DocumentPolicyFeatureSpec.$, blink.mojom.PolicyValueSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('insecure_request_policy', 152, 0, blink.mojom.InsecureRequestPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('insecure_navigations_set', 160, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('has_potentially_trustworthy_unique_origin', 168, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('request_id', 172, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('navigation_token', 176, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('embedding_token', 184, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('unload_start', 192, 0, mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('unload_end', 200, 0, mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('commit_navigation_start', 208, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('commit_navigation_end', 216, 0, mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('commit_reply_sent', 224, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 240]]);

// Struct: DidCommitSameDocumentNavigationParams
mojo.internal.Struct(
    content.mojom.DidCommitSameDocumentNavigationParamsSpec, 'content.mojom.DidCommitSameDocumentNavigationParams', [
      mojo.internal.StructField('same_document_navigation_type', 0, 0, blink.mojom.SameDocumentNavigationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_client_redirect', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('started_with_transient_activation', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_replace_current_entry', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('navigation_entry_screenshot_destination', 16, 0, blink.mojom.SameDocNavigationScreenshotDestinationTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('same_document_metrics_token', 24, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('caused_by_ad', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: CookieManagerInfo
mojo.internal.Struct(
    content.mojom.CookieManagerInfoSpec, 'content.mojom.CookieManagerInfo', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cookie_manager', 8, 0, mojo.internal.InterfaceProxy(network.mojom.RestrictedCookieManagerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StorageInfo
mojo.internal.Struct(
    content.mojom.StorageInfoSpec, 'content.mojom.StorageInfo', [
      mojo.internal.StructField('local_storage_area', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.StorageAreaRemote), null, true, 0, undefined),
      mojo.internal.StructField('session_storage_area', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.StorageAreaRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: NavigationClient
mojo.internal.Struct(
    content.mojom.NavigationClient_CommitNavigation_ParamsSpec, 'content.mojom.NavigationClient_CommitNavigation_Params', [
      mojo.internal.StructField('common_params', 0, 0, blink.mojom.CommonNavigationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_params', 8, 0, blink.mojom.CommitNavigationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response_head', 16, 0, network.mojom.URLResponseHeadSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response_body', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('url_loader_client_endpoints', 32, 0, network.mojom.URLLoaderClientEndpointsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('subresource_loader_factories', 40, 0, blink.mojom.URLLoaderFactoryBundleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('subresource_overrides', 48, 0, mojo.internal.Array(blink.mojom.TransferrableURLLoaderSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('controller_service_worker_info', 56, 0, blink.mojom.ControllerServiceWorkerInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('container_info', 64, 0, blink.mojom.ServiceWorkerContainerInfoForClientSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('subresource_proxying_loader_factory', 72, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('keep_alive_loader_factory', 80, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('fetch_later_loader_factory', 88, 0, mojo.internal.AssociatedInterfaceProxy(blink.mojom.FetchLaterLoaderFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('document_token', 96, 0, blink.mojom.DocumentTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_navigation_token', 104, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('base_auction_nonce', 112, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('permissions_policy', 120, 0, mojo.internal.Array(network.mojom.ParsedPermissionsPolicyDeclarationSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('policy_container', 128, 0, blink.mojom.PolicyContainerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('code_cache_host', 136, 0, mojo.internal.InterfaceProxy(blink.mojom.CodeCacheHostRemote), null, true, 0, undefined),
      mojo.internal.StructField('code_cache_host_for_background', 144, 0, mojo.internal.InterfaceProxy(blink.mojom.CodeCacheHostRemote), null, true, 0, undefined),
      mojo.internal.StructField('cookie_manager_info', 152, 0, content.mojom.CookieManagerInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('storage_info', 160, 0, content.mojom.StorageInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 176]]);

mojo.internal.Struct(
    content.mojom.NavigationClient_CommitNavigation_ResponseParamsSpec, 'content.mojom.NavigationClient_CommitNavigation_ResponseParams', [
      mojo.internal.StructField('params', 0, 0, content.mojom.DidCommitProvisionalLoadParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('interface_params', 8, 0, content.mojom.DidCommitProvisionalLoadInterfaceParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.NavigationClient_CommitFailedNavigation_ParamsSpec, 'content.mojom.NavigationClient_CommitFailedNavigation_Params', [
      mojo.internal.StructField('common_params', 0, 0, blink.mojom.CommonNavigationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_params', 8, 0, blink.mojom.CommitNavigationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_stale_copy_in_cache', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('error_code', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('extended_error_code', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('resolve_error_info', 32, 0, network.mojom.ResolveErrorInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_page_content', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('subresource_loader_factories', 48, 0, blink.mojom.URLLoaderFactoryBundleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('document_token', 56, 0, blink.mojom.DocumentTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_navigation_token', 64, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('policy_container', 72, 0, blink.mojom.PolicyContainerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('alternative_error_page_info', 80, 0, content.mojom.AlternativeErrorPageOverrideInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 96]]);

mojo.internal.Struct(
    content.mojom.NavigationClient_CommitFailedNavigation_ResponseParamsSpec, 'content.mojom.NavigationClient_CommitFailedNavigation_ResponseParams', [
      mojo.internal.StructField('params', 0, 0, content.mojom.DidCommitProvisionalLoadParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('interface_params', 8, 0, content.mojom.DidCommitProvisionalLoadInterfaceParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

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
      [common_params, request_params, response_head, response_body, url_loader_client_endpoints, subresource_loader_factories, subresource_overrides, controller_service_worker_info, container_info, subresource_proxying_loader_factory, keep_alive_loader_factory, fetch_later_loader_factory, document_token, devtools_navigation_token, base_auction_nonce, permissions_policy, policy_container, code_cache_host, code_cache_host_for_background, cookie_manager_info, storage_info],
      false);
  }

  commitFailedNavigation(common_params, request_params, has_stale_copy_in_cache, error_code, extended_error_code, resolve_error_info, error_page_content, subresource_loader_factories, document_token, devtools_navigation_token, policy_container, alternative_error_page_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.NavigationClient_CommitFailedNavigation_ParamsSpec,
      content.mojom.NavigationClient_CommitFailedNavigation_ResponseParamsSpec,
      [common_params, request_params, has_stale_copy_in_cache, error_code, extended_error_code, resolve_error_info, error_page_content, subresource_loader_factories, document_token, devtools_navigation_token, policy_container, alternative_error_page_info],
      false);
  }

};

content.mojom.NavigationClient.getRemote = function() {
  let remote = new content.mojom.NavigationClientRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'content.mojom.NavigationClient',
    'context');
  return remote.$;
};

content.mojom.NavigationClientPtr = content.mojom.NavigationClientRemote;
content.mojom.NavigationClientRequest = content.mojom.NavigationClientPendingReceiver;

