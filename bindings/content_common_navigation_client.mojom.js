// Auto-generated MojoJS binding
// Source: chromium_src/content/common/navigation_client.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Enum: NavigationClientDisconnectReason
content.mojom.NavigationClientDisconnectReason = {
  kNoExplicitReason: 0,
  kResetForSwap: 1,
  kResetForAbort: 2,
  kResetForNewNavigation: 3,
  kResetForDuplicateNavigation: 4,
};

// Struct: DidCommitProvisionalLoadParams
content.mojom.DidCommitProvisionalLoadParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.DidCommitProvisionalLoadParams',
      packedSize: 256,
      fields: [
        { name: 'item_sequence_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'document_sequence_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'navigation_api_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'referrer', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.ReferrerSpec, nullable: false },
        { name: 'transition', packedOffset: 40, packedBitOffset: 0, type: content.mojom.PageTransitionSpec, nullable: false },
        { name: 'should_update_history', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'contents_mime_type', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'did_create_new_entry', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'method', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'post_id', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'http_status_code', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'url_is_unreachable', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'previous_page_state', packedOffset: 104, packedBitOffset: 0, type: content.mojom.PageStateSpec, nullable: true },
        { name: 'page_state', packedOffset: 112, packedBitOffset: 0, type: content.mojom.PageStateSpec, nullable: false },
        { name: 'is_overriding_user_agent', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'history_list_was_cleared', packedOffset: 120, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'origin', packedOffset: 128, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'initiator_base_url', packedOffset: 136, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'permissions_policy_header', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'document_policy_header', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'insecure_request_policy', packedOffset: 160, packedBitOffset: 0, type: blink.mojom.InsecureRequestPolicySpec, nullable: false },
        { name: 'insecure_navigations_set', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'has_potentially_trustworthy_unique_origin', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'request_id', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'navigation_token', packedOffset: 192, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'embedding_token', packedOffset: 200, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
        { name: 'unload_start', packedOffset: 208, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true },
        { name: 'unload_end', packedOffset: 216, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true },
        { name: 'commit_navigation_start', packedOffset: 224, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'commit_navigation_end', packedOffset: 232, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true },
        { name: 'commit_reply_sent', packedOffset: 240, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DidCommitSameDocumentNavigationParams
content.mojom.DidCommitSameDocumentNavigationParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.DidCommitSameDocumentNavigationParams',
      packedSize: 48,
      fields: [
        { name: 'same_document_navigation_type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SameDocumentNavigationTypeSpec, nullable: false },
        { name: 'is_client_redirect', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'started_with_transient_activation', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'should_replace_current_entry', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'navigation_entry_screenshot_destination', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.SameDocNavigationScreenshotDestinationTokenSpec, nullable: true },
        { name: 'same_document_metrics_token', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'caused_by_ad', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'cookie_manager', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StorageInfo
content.mojom.StorageInfoSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.StorageInfo',
      packedSize: 16,
      fields: [
        { name: 'local_storage_area', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'session_storage_area', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: NavigationClient
content.mojom.NavigationClient = {};

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
      packedSize: 160,
      fields: [
        { name: 'common_params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CommonNavigationParamsSpec, nullable: false },
        { name: 'request_params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CommitNavigationParamsSpec, nullable: false },
        { name: 'response_head', packedOffset: 16, packedBitOffset: 0, type: network.mojom.URLResponseHeadSpec, nullable: false },
        { name: 'response_body', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'url_loader_client_endpoints', packedOffset: 32, packedBitOffset: 0, type: network.mojom.URLLoaderClientEndpointsSpec, nullable: true },
        { name: 'subresource_loader_factories', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.URLLoaderFactoryBundleSpec, nullable: true },
        { name: 'subresource_overrides', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'controller_service_worker_info', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.ControllerServiceWorkerInfoSpec, nullable: true },
        { name: 'container_info', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.ServiceWorkerContainerInfoForClientSpec, nullable: true },
        { name: 'subresource_proxying_loader_factory', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'keep_alive_loader_factory', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'fetch_later_loader_factory', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: true },
        { name: 'document_token', packedOffset: 88, packedBitOffset: 0, type: blink.mojom.DocumentTokenSpec, nullable: false },
        { name: 'devtools_navigation_token', packedOffset: 96, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'base_auction_nonce', packedOffset: 104, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false },
        { name: 'permissions_policy', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'policy_container', packedOffset: 120, packedBitOffset: 0, type: blink.mojom.PolicyContainerSpec, nullable: false },
        { name: 'code_cache_host', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'code_cache_host_for_background', packedOffset: 132, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'cookie_manager_info', packedOffset: 136, packedBitOffset: 0, type: content.mojom.CookieManagerInfoSpec, nullable: true },
        { name: 'storage_info', packedOffset: 144, packedBitOffset: 0, type: content.mojom.StorageInfoSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

content.mojom.NavigationClient_CommitNavigation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.NavigationClient.CommitNavigation_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: content.mojom.DidCommitProvisionalLoadParamsSpec, nullable: false },
        { name: 'interface_params', packedOffset: 8, packedBitOffset: 0, type: content.mojom.DidCommitProvisionalLoadInterfaceParamsSpec, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'common_params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CommonNavigationParamsSpec, nullable: false },
        { name: 'request_params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CommitNavigationParamsSpec, nullable: false },
        { name: 'has_stale_copy_in_cache', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'error_code', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'extended_error_code', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'resolve_error_info', packedOffset: 32, packedBitOffset: 0, type: network.mojom.ResolveErrorInfoSpec, nullable: false },
        { name: 'error_page_content', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'subresource_loader_factories', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.URLLoaderFactoryBundleSpec, nullable: true },
        { name: 'document_token', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.DocumentTokenSpec, nullable: false },
        { name: 'devtools_navigation_token', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'policy_container', packedOffset: 72, packedBitOffset: 0, type: blink.mojom.PolicyContainerSpec, nullable: false },
        { name: 'alternative_error_page_info', packedOffset: 80, packedBitOffset: 0, type: content.mojom.AlternativeErrorPageOverrideInfoSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

content.mojom.NavigationClient_CommitFailedNavigation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.NavigationClient.CommitFailedNavigation_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: content.mojom.DidCommitProvisionalLoadParamsSpec, nullable: false },
        { name: 'interface_params', packedOffset: 8, packedBitOffset: 0, type: content.mojom.DidCommitProvisionalLoadInterfaceParamsSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.NavigationClientPtr = content.mojom.NavigationClientRemote;
content.mojom.NavigationClientRequest = content.mojom.NavigationClientPendingReceiver;

