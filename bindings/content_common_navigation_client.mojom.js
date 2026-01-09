// Auto-generated MojoJS binding
// Source: chromium_src/content/common/navigation_client.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Enum: NavigationClientDisconnectReason
content.mojom.NavigationClientDisconnectReason = {
  it: 0,
  this: 1,
  method: 2,
  other: 3,
};

// Struct: DidCommitProvisionalLoadParams
content.mojom.DidCommitProvisionalLoadParams = class {
  constructor(values = {}) {
    this.-1 = values.-1 !== undefined ? values.-1 : 0;
    this.transition = values.transition !== undefined ? values.transition : "";
    this.http_status_code = values.http_status_code !== undefined ? values.http_status_code : 0;
    this.is_overriding_user_agent = values.is_overriding_user_agent !== undefined ? values.is_overriding_user_agent : false;
    this.origin = values.origin !== undefined ? values.origin : false;
    this.initiator_base_url = values.initiator_base_url !== undefined ? values.initiator_base_url : null;
    this.embedding_token = values.embedding_token !== undefined ? values.embedding_token : 0;
    this.unload_end = values.unload_end !== undefined ? values.unload_end : null;
    this.is = values.is !== undefined ? values.is : null;
    this.other = values.other !== undefined ? values.other : null;
    this.below. = values.below. !== undefined ? values.below. : null;
    this.metrics = values.metrics !== undefined ? values.metrics : null;
    this.commit_reply_sent = values.commit_reply_sent !== undefined ? values.commit_reply_sent : null;
  }
};

// Struct: DidCommitSameDocumentNavigationParams
content.mojom.DidCommitSameDocumentNavigationParams = class {
  constructor(values = {}) {
    this.same_document_metrics_token = values.same_document_metrics_token !== undefined ? values.same_document_metrics_token : false;
    this.at = values.at !== undefined ? values.at : null;
    this.frame = values.frame !== undefined ? values.frame : null;
    this.caused_by_ad = values.caused_by_ad !== undefined ? values.caused_by_ad : false;
  }
};

// Struct: CookieManagerInfo
content.mojom.CookieManagerInfo = class {
  constructor(values = {}) {
    this.cookie_manager = values.cookie_manager !== undefined ? values.cookie_manager : null;
  }
};

// Struct: StorageInfo
content.mojom.StorageInfo = class {
  constructor(values = {}) {
    this.session_storage_area = values.session_storage_area !== undefined ? values.session_storage_area : null;
  }
};

// Interface: NavigationClient
content.mojom.NavigationClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.NavigationClient';
  }

  commitNavigation(common_params, request_params, response_head, response_body, url_loader_client_endpoints, subresource_loader_factories, subresource_overrides, controller_service_worker_info, container_info, subresource_proxying_loader_factory, keep_alive_loader_factory, fetch_later_loader_factory, document_token, devtools_navigation_token, base_auction_nonce, permissions_policy, policy_container, code_cache_host, code_cache_host_for_background, cookie_manager_info, storage_info) {
    // Method: CommitNavigation
    return new Promise((resolve) => {
      // Call: CommitNavigation(common_params, request_params, response_head, response_body, url_loader_client_endpoints, subresource_loader_factories, subresource_overrides, controller_service_worker_info, container_info, subresource_proxying_loader_factory, keep_alive_loader_factory, fetch_later_loader_factory, document_token, devtools_navigation_token, base_auction_nonce, permissions_policy, policy_container, code_cache_host, code_cache_host_for_background, cookie_manager_info, storage_info)
      resolve({});
    });
  }

  commitFailedNavigation(common_params, request_params, has_stale_copy_in_cache, error_code, extended_error_code, resolve_error_info, error_page_content, subresource_loader_factories, document_token, devtools_navigation_token, policy_container, alternative_error_page_info) {
    // Method: CommitFailedNavigation
    return new Promise((resolve) => {
      // Call: CommitFailedNavigation(common_params, request_params, has_stale_copy_in_cache, error_code, extended_error_code, resolve_error_info, error_page_content, subresource_loader_factories, document_token, devtools_navigation_token, policy_container, alternative_error_page_info)
      resolve({});
    });
  }

};

content.mojom.NavigationClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
