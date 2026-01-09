// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/devtools_observer.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: URLRequestDevToolsInfo
network.mojom.URLRequestDevToolsInfo = class {
  constructor(values = {}) {
    this.is_ad_related = values.is_ad_related !== undefined ? values.is_ad_related : 0;
  }
};

// Struct: URLResponseHeadDevToolsInfo
network.mojom.URLResponseHeadDevToolsInfo = class {
  constructor(values = {}) {
    this.emitted_extra_info = values.emitted_extra_info !== undefined ? values.emitted_extra_info : 0;
  }
};

// Struct: OtherPartitionInfo
network.mojom.OtherPartitionInfo = class {
  constructor(values = {}) {
    this.site_has_cookie_in_other_partition = values.site_has_cookie_in_other_partition !== undefined ? values.site_has_cookie_in_other_partition : false;
  }
};

// Interface: DevToolsObserver
network.mojom.DevToolsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.DevToolsObserver';
  }

  onRawRequest(devtool_request_id, cookies_with_access_result, headers, timestamp, client_security_state, other_partition_info, applied_network_conditions_id) {
    // Method: OnRawRequest
    // Call: OnRawRequest(devtool_request_id, cookies_with_access_result, headers, timestamp, client_security_state, other_partition_info, applied_network_conditions_id)
  }

  onRawResponse(devtool_request_id, cookies_with_access_result, headers, raw_response_headers, resource_address_space, http_status_code, cookie_partition_key) {
    // Method: OnRawResponse
    // Call: OnRawResponse(devtool_request_id, cookies_with_access_result, headers, raw_response_headers, resource_address_space, http_status_code, cookie_partition_key)
  }

  onEarlyHintsResponse(devtool_request_id, headers) {
    // Method: OnEarlyHintsResponse
    // Call: OnEarlyHintsResponse(devtool_request_id, headers)
  }

  future() {
    // Method: future
    // Call: future()
  }

  onPrivateNetworkRequest(devtool_request_id, url, is_warning, resource_address_space, client_security_state) {
    // Method: OnPrivateNetworkRequest
    // Call: OnPrivateNetworkRequest(devtool_request_id, url, is_warning, resource_address_space, client_security_state)
  }

  onCorsPreflightRequest(devtool_request_id, request_headers, request_info, initiator_url, initiator_devtool_request_id) {
    // Method: OnCorsPreflightRequest
    // Call: OnCorsPreflightRequest(devtool_request_id, request_headers, request_info, initiator_url, initiator_devtool_request_id)
  }

  onCorsPreflightResponse(devtool_request_id, url, head) {
    // Method: OnCorsPreflightResponse
    // Call: OnCorsPreflightResponse(devtool_request_id, url, head)
  }

  onCorsPreflightRequestCompleted(devtool_request_id, status) {
    // Method: OnCorsPreflightRequestCompleted
    // Call: OnCorsPreflightRequestCompleted(devtool_request_id, status)
  }

  onTrustTokenOperationDone(devtool_request_id, result) {
    // Method: OnTrustTokenOperationDone
    // Call: OnTrustTokenOperationDone(devtool_request_id, result)
  }

  onCorsError(devtool_request_id, initiator_origin, client_security_state, url, status, is_warning) {
    // Method: OnCorsError
    // Call: OnCorsError(devtool_request_id, initiator_origin, client_security_state, url, status, is_warning)
  }

  onOrbError(devtools_request_id, url) {
    // Method: OnOrbError
    // Call: OnOrbError(devtools_request_id, url)
  }

  onSharedDictionaryError(devtool_request_id, url, error) {
    // Method: OnSharedDictionaryError
    // Call: OnSharedDictionaryError(devtool_request_id, url, error)
  }

  onSRIMessageSignatureIssue(devtool_request_id, url, issues) {
    // Method: OnSRIMessageSignatureIssue
    // Call: OnSRIMessageSignatureIssue(devtool_request_id, url, issues)
  }

  onUnencodedDigestError(devtool_request_id, url, issue) {
    // Method: OnUnencodedDigestError
    // Call: OnUnencodedDigestError(devtool_request_id, url, issue)
  }

  clone(listener) {
    // Method: Clone
    // Call: Clone(listener)
  }

};

network.mojom.DevToolsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
