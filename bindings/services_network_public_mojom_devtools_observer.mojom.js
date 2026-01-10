// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/devtools_observer.mojom
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
var url = url || {};
var url = url || {};

network.mojom.URLRequestDevToolsInfoSpec = { $: {} };
network.mojom.URLResponseHeadDevToolsInfoSpec = { $: {} };
network.mojom.OtherPartitionInfoSpec = { $: {} };
network.mojom.DevToolsObserver = {};
network.mojom.DevToolsObserver.$interfaceName = 'network.mojom.DevToolsObserver';
network.mojom.DevToolsObserver_OnRawRequest_ParamsSpec = { $: {} };
network.mojom.DevToolsObserver_OnRawResponse_ParamsSpec = { $: {} };
network.mojom.DevToolsObserver_OnEarlyHintsResponse_ParamsSpec = { $: {} };
network.mojom.DevToolsObserver_OnPrivateNetworkRequest_ParamsSpec = { $: {} };
network.mojom.DevToolsObserver_OnCorsPreflightRequest_ParamsSpec = { $: {} };
network.mojom.DevToolsObserver_OnCorsPreflightResponse_ParamsSpec = { $: {} };
network.mojom.DevToolsObserver_OnCorsPreflightRequestCompleted_ParamsSpec = { $: {} };
network.mojom.DevToolsObserver_OnTrustTokenOperationDone_ParamsSpec = { $: {} };
network.mojom.DevToolsObserver_OnCorsError_ParamsSpec = { $: {} };
network.mojom.DevToolsObserver_OnOrbError_ParamsSpec = { $: {} };
network.mojom.DevToolsObserver_OnSharedDictionaryError_ParamsSpec = { $: {} };
network.mojom.DevToolsObserver_OnSRIMessageSignatureIssue_ParamsSpec = { $: {} };
network.mojom.DevToolsObserver_OnUnencodedDigestError_ParamsSpec = { $: {} };
network.mojom.DevToolsObserver_Clone_ParamsSpec = { $: {} };

// Struct: URLRequestDevToolsInfo
mojo.internal.Struct(
    network.mojom.URLRequestDevToolsInfoSpec, 'network.mojom.URLRequestDevToolsInfo', [
      mojo.internal.StructField('method', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('priority', 16, 0, network.mojom.RequestPrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('referrer_policy', 24, 0, network.mojom.URLRequestReferrerPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trust_token_params', 32, 0, network.mojom.TrustTokenParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('has_user_gesture', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('resource_type', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_ad_related', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: URLResponseHeadDevToolsInfo
mojo.internal.Struct(
    network.mojom.URLResponseHeadDevToolsInfoSpec, 'network.mojom.URLResponseHeadDevToolsInfo', [
      mojo.internal.StructField('response_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('headers', 8, 0, network.mojom.HttpResponseHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('charset', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('load_timing', 32, 0, network.mojom.LoadTimingInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cert_status', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('encoded_data_length', 48, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('was_in_prefetch_cache', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('was_fetched_via_service_worker', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('cache_storage_cache_name', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('alpn_negotiated_protocol', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('alternate_protocol_usage', 80, 0, network.mojom.AlternateProtocolUsageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('was_fetched_via_spdy', 88, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('service_worker_response_source', 96, 0, network.mojom.FetchResponseSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_router_info', 104, 0, network.mojom.ServiceWorkerRouterInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ssl_info', 112, 0, network.mojom.SSLInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('remote_endpoint', 120, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('emitted_extra_info', 128, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 144]]);

// Struct: OtherPartitionInfo
mojo.internal.Struct(
    network.mojom.OtherPartitionInfoSpec, 'network.mojom.OtherPartitionInfo', [
      mojo.internal.StructField('site_has_cookie_in_other_partition', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: DevToolsObserver
mojo.internal.Struct(
    network.mojom.DevToolsObserver_OnRawRequest_ParamsSpec, 'network.mojom.DevToolsObserver_OnRawRequest_Params', [
      mojo.internal.StructField('devtool_request_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cookies_with_access_result', 8, 0, mojo.internal.Array(network.mojom.CookieWithAccessResultSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('headers', 16, 0, mojo.internal.Array(network.mojom.HttpRawHeaderPairSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 24, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_security_state', 32, 0, network.mojom.ClientSecurityStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('other_partition_info', 40, 0, network.mojom.OtherPartitionInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('applied_network_conditions_id', 48, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    network.mojom.DevToolsObserver_OnRawResponse_ParamsSpec, 'network.mojom.DevToolsObserver_OnRawResponse_Params', [
      mojo.internal.StructField('devtool_request_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cookies_with_access_result', 8, 0, mojo.internal.Array(network.mojom.CookieAndLineWithAccessResultSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('headers', 16, 0, mojo.internal.Array(network.mojom.HttpRawHeaderPairSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('raw_response_headers', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('resource_address_space', 32, 0, network.mojom.IPAddressSpaceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('http_status_code', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('cookie_partition_key', 48, 0, network.mojom.CookiePartitionKeySpec.$, null, true, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    network.mojom.DevToolsObserver_OnEarlyHintsResponse_ParamsSpec, 'network.mojom.DevToolsObserver_OnEarlyHintsResponse_Params', [
      mojo.internal.StructField('devtool_request_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('headers', 8, 0, mojo.internal.Array(network.mojom.HttpRawHeaderPairSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.DevToolsObserver_OnPrivateNetworkRequest_ParamsSpec, 'network.mojom.DevToolsObserver_OnPrivateNetworkRequest_Params', [
      mojo.internal.StructField('devtool_request_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_warning', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('resource_address_space', 24, 0, network.mojom.IPAddressSpaceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_security_state', 32, 0, network.mojom.ClientSecurityStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    network.mojom.DevToolsObserver_OnCorsPreflightRequest_ParamsSpec, 'network.mojom.DevToolsObserver_OnCorsPreflightRequest_Params', [
      mojo.internal.StructField('devtool_request_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_headers', 8, 0, network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_info', 16, 0, network.mojom.URLRequestDevToolsInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('initiator_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('initiator_devtool_request_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    network.mojom.DevToolsObserver_OnCorsPreflightResponse_ParamsSpec, 'network.mojom.DevToolsObserver_OnCorsPreflightResponse_Params', [
      mojo.internal.StructField('devtool_request_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('head', 16, 0, network.mojom.URLResponseHeadDevToolsInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.DevToolsObserver_OnCorsPreflightRequestCompleted_ParamsSpec, 'network.mojom.DevToolsObserver_OnCorsPreflightRequestCompleted_Params', [
      mojo.internal.StructField('devtool_request_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, network.mojom.URLLoaderCompletionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.DevToolsObserver_OnTrustTokenOperationDone_ParamsSpec, 'network.mojom.DevToolsObserver_OnTrustTokenOperationDone_Params', [
      mojo.internal.StructField('devtool_request_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, network.mojom.TrustTokenOperationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.DevToolsObserver_OnCorsError_ParamsSpec, 'network.mojom.DevToolsObserver_OnCorsError_Params', [
      mojo.internal.StructField('devtool_request_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('initiator_origin', 8, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_security_state', 16, 0, network.mojom.ClientSecurityStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 32, 0, network.mojom.CorsErrorStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_warning', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    network.mojom.DevToolsObserver_OnOrbError_ParamsSpec, 'network.mojom.DevToolsObserver_OnOrbError_Params', [
      mojo.internal.StructField('devtools_request_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.DevToolsObserver_OnSharedDictionaryError_ParamsSpec, 'network.mojom.DevToolsObserver_OnSharedDictionaryError_Params', [
      mojo.internal.StructField('devtool_request_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 16, 0, network.mojom.SharedDictionaryErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.DevToolsObserver_OnSRIMessageSignatureIssue_ParamsSpec, 'network.mojom.DevToolsObserver_OnSRIMessageSignatureIssue_Params', [
      mojo.internal.StructField('devtool_request_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('issues', 16, 0, mojo.internal.Array(network.mojom.SRIMessageSignatureIssueSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.DevToolsObserver_OnUnencodedDigestError_ParamsSpec, 'network.mojom.DevToolsObserver_OnUnencodedDigestError_Params', [
      mojo.internal.StructField('devtool_request_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('issue', 16, 0, network.mojom.UnencodedDigestIssueSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.DevToolsObserver_Clone_ParamsSpec, 'network.mojom.DevToolsObserver_Clone_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceRequest(network.mojom.DevToolsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.DevToolsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.DevToolsObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DevToolsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.DevToolsObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.DevToolsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.DevToolsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRawRequest(devtool_request_id, cookies_with_access_result, headers, timestamp, client_security_state, other_partition_info, applied_network_conditions_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.DevToolsObserver_OnRawRequest_ParamsSpec,
      null,
      [devtool_request_id, cookies_with_access_result, headers, timestamp, client_security_state, other_partition_info, applied_network_conditions_id],
      false);
  }

  onRawResponse(devtool_request_id, cookies_with_access_result, headers, raw_response_headers, resource_address_space, http_status_code, cookie_partition_key) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.DevToolsObserver_OnRawResponse_ParamsSpec,
      null,
      [devtool_request_id, cookies_with_access_result, headers, raw_response_headers, resource_address_space, http_status_code, cookie_partition_key],
      false);
  }

  onEarlyHintsResponse(devtool_request_id, headers) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.DevToolsObserver_OnEarlyHintsResponse_ParamsSpec,
      null,
      [devtool_request_id, headers],
      false);
  }

  onPrivateNetworkRequest(devtool_request_id, url, is_warning, resource_address_space, client_security_state) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.DevToolsObserver_OnPrivateNetworkRequest_ParamsSpec,
      null,
      [devtool_request_id, url, is_warning, resource_address_space, client_security_state],
      false);
  }

  onCorsPreflightRequest(devtool_request_id, request_headers, request_info, initiator_url, initiator_devtool_request_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.DevToolsObserver_OnCorsPreflightRequest_ParamsSpec,
      null,
      [devtool_request_id, request_headers, request_info, initiator_url, initiator_devtool_request_id],
      false);
  }

  onCorsPreflightResponse(devtool_request_id, url, head) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.DevToolsObserver_OnCorsPreflightResponse_ParamsSpec,
      null,
      [devtool_request_id, url, head],
      false);
  }

  onCorsPreflightRequestCompleted(devtool_request_id, status) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      network.mojom.DevToolsObserver_OnCorsPreflightRequestCompleted_ParamsSpec,
      null,
      [devtool_request_id, status],
      false);
  }

  onTrustTokenOperationDone(devtool_request_id, result) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      network.mojom.DevToolsObserver_OnTrustTokenOperationDone_ParamsSpec,
      null,
      [devtool_request_id, result],
      false);
  }

  onCorsError(devtool_request_id, initiator_origin, client_security_state, url, status, is_warning) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      network.mojom.DevToolsObserver_OnCorsError_ParamsSpec,
      null,
      [devtool_request_id, initiator_origin, client_security_state, url, status, is_warning],
      false);
  }

  onOrbError(devtools_request_id, url) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      network.mojom.DevToolsObserver_OnOrbError_ParamsSpec,
      null,
      [devtools_request_id, url],
      false);
  }

  onSharedDictionaryError(devtool_request_id, url, error) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      network.mojom.DevToolsObserver_OnSharedDictionaryError_ParamsSpec,
      null,
      [devtool_request_id, url, error],
      false);
  }

  onSRIMessageSignatureIssue(devtool_request_id, url, issues) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      network.mojom.DevToolsObserver_OnSRIMessageSignatureIssue_ParamsSpec,
      null,
      [devtool_request_id, url, issues],
      false);
  }

  onUnencodedDigestError(devtool_request_id, url, issue) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      network.mojom.DevToolsObserver_OnUnencodedDigestError_ParamsSpec,
      null,
      [devtool_request_id, url, issue],
      false);
  }

  clone(listener) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      network.mojom.DevToolsObserver_Clone_ParamsSpec,
      null,
      [listener],
      false);
  }

};

network.mojom.DevToolsObserver.getRemote = function() {
  let remote = new network.mojom.DevToolsObserverRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'network.mojom.DevToolsObserver',
    'context');
  return remote.$;
};

network.mojom.DevToolsObserverPtr = network.mojom.DevToolsObserverRemote;
network.mojom.DevToolsObserverRequest = network.mojom.DevToolsObserverPendingReceiver;

