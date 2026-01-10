// Auto-generated MojoJS binding
// Source: chromium_src/content/common/navigation_client.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var blink = blink || {};
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
      mojo.internal.StructField('contents_mime_type', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('method', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('post_id', 64, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('previous_page_state', 72, 0, blink.mojom.PageStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('page_state', 80, 0, blink.mojom.PageStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin', 88, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('initiator_base_url', 96, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('permissions_policy_header', 104, 0, mojo.internal.Array(network.mojom.ParsedPermissionsPolicyDeclarationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('document_policy_header', 112, 0, mojo.internal.Map(blink.mojom.DocumentPolicyFeatureSpec.$, blink.mojom.PolicyValueSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('insecure_request_policy', 120, 0, blink.mojom.InsecureRequestPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('insecure_navigations_set', 128, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('navigation_token', 136, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('embedding_token', 144, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('unload_start', 152, 0, mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('unload_end', 160, 0, mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('commit_navigation_start', 168, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('commit_navigation_end', 176, 0, mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('commit_reply_sent', 184, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('http_status_code', 192, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('request_id', 196, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('should_update_history', 200, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('did_create_new_entry', 200, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('url_is_unreachable', 200, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_overriding_user_agent', 200, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('history_list_was_cleared', 200, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_potentially_trustworthy_unique_origin', 200, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 216]]);

// Struct: DidCommitSameDocumentNavigationParams
mojo.internal.Struct(
    content.mojom.DidCommitSameDocumentNavigationParamsSpec, 'content.mojom.DidCommitSameDocumentNavigationParams', [
      mojo.internal.StructField('same_document_navigation_type', 0, 0, blink.mojom.SameDocumentNavigationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('navigation_entry_screenshot_destination', 8, 0, blink.mojom.SameDocNavigationScreenshotDestinationTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('same_document_metrics_token', 16, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_client_redirect', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('started_with_transient_activation', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_replace_current_entry', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('caused_by_ad', 24, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

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
      mojo.internal.StructField('fetch_later_loader_factory', 88, 0, pending_associated_remote<blink.mojom.FetchLaterLoaderFactory>Spec.$, null, true, 0, undefined),
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
      mojo.internal.StructField('resolve_error_info', 16, 0, network.mojom.ResolveErrorInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_page_content', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('subresource_loader_factories', 32, 0, blink.mojom.URLLoaderFactoryBundleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('document_token', 40, 0, blink.mojom.DocumentTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_navigation_token', 48, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('policy_container', 56, 0, blink.mojom.PolicyContainerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('alternative_error_page_info', 64, 0, content.mojom.AlternativeErrorPageOverrideInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error_code', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('extended_error_code', 76, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_stale_copy_in_cache', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
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
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.NavigationClient',
    'context');
  return remote.$;
};

content.mojom.NavigationClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.NavigationClient_CommitNavigation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.commitNavigation(params.common_params, params.request_params, params.response_head, params.response_body, params.url_loader_client_endpoints, params.subresource_loader_factories, params.subresource_overrides, params.controller_service_worker_info, params.container_info, params.subresource_proxying_loader_factory, params.keep_alive_loader_factory, params.fetch_later_loader_factory, params.document_token, params.devtools_navigation_token, params.base_auction_nonce, params.permissions_policy, params.policy_container, params.code_cache_host, params.code_cache_host_for_background, params.cookie_manager_info, params.storage_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.NavigationClient_CommitNavigation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = content.mojom.NavigationClient_CommitFailedNavigation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.commitFailedNavigation(params.common_params, params.request_params, params.has_stale_copy_in_cache, params.error_code, params.extended_error_code, params.resolve_error_info, params.error_page_content, params.subresource_loader_factories, params.document_token, params.devtools_navigation_token, params.policy_container, params.alternative_error_page_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.NavigationClient_CommitFailedNavigation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

content.mojom.NavigationClientReceiver = content.mojom.NavigationClientReceiver;

content.mojom.NavigationClientPtr = content.mojom.NavigationClientRemote;
content.mojom.NavigationClientRequest = content.mojom.NavigationClientPendingReceiver;

