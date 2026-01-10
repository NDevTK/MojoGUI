// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/devtools_observer.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};
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
      mojo.internal.StructField('resource_type', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('has_user_gesture', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_ad_related', 44, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: URLResponseHeadDevToolsInfo
mojo.internal.Struct(
    network.mojom.URLResponseHeadDevToolsInfoSpec, 'network.mojom.URLResponseHeadDevToolsInfo', [
      mojo.internal.StructField('response_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('headers', 8, 0, network.mojom.HttpResponseHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('charset', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('load_timing', 32, 0, network.mojom.LoadTimingInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('encoded_data_length', 40, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('cache_storage_cache_name', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('alpn_negotiated_protocol', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('alternate_protocol_usage', 64, 0, network.mojom.AlternateProtocolUsageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_response_source', 72, 0, network.mojom.FetchResponseSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_router_info', 80, 0, network.mojom.ServiceWorkerRouterInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ssl_info', 88, 0, network.mojom.SSLInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('remote_endpoint', 96, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cert_status', 104, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('was_in_prefetch_cache', 108, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('was_fetched_via_service_worker', 108, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('was_fetched_via_spdy', 108, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('emitted_extra_info', 108, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 120]]);

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
      mojo.internal.StructField('cookie_partition_key', 40, 0, network.mojom.CookiePartitionKeySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('http_status_code', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
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
      mojo.internal.StructField('resource_address_space', 16, 0, network.mojom.IPAddressSpaceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_security_state', 24, 0, network.mojom.ClientSecurityStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_warning', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
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
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceRequest(network.mojom.DevToolsObserverSpec), null, false, 0, undefined),
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
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DevToolsObserver',
    'context');
  return remote.$;
};

network.mojom.DevToolsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DevToolsObserver_OnRawRequest_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onRawRequest');
          const result = this.impl.onRawRequest(params.devtool_request_id, params.cookies_with_access_result, params.headers, params.timestamp, params.client_security_state, params.other_partition_info, params.applied_network_conditions_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DevToolsObserver_OnRawResponse_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onRawResponse');
          const result = this.impl.onRawResponse(params.devtool_request_id, params.cookies_with_access_result, params.headers, params.raw_response_headers, params.resource_address_space, params.http_status_code, params.cookie_partition_key);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DevToolsObserver_OnEarlyHintsResponse_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onEarlyHintsResponse');
          const result = this.impl.onEarlyHintsResponse(params.devtool_request_id, params.headers);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DevToolsObserver_OnPrivateNetworkRequest_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onPrivateNetworkRequest');
          const result = this.impl.onPrivateNetworkRequest(params.devtool_request_id, params.url, params.is_warning, params.resource_address_space, params.client_security_state);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DevToolsObserver_OnCorsPreflightRequest_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onCorsPreflightRequest');
          const result = this.impl.onCorsPreflightRequest(params.devtool_request_id, params.request_headers, params.request_info, params.initiator_url, params.initiator_devtool_request_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DevToolsObserver_OnCorsPreflightResponse_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onCorsPreflightResponse');
          const result = this.impl.onCorsPreflightResponse(params.devtool_request_id, params.url, params.head);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DevToolsObserver_OnCorsPreflightRequestCompleted_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onCorsPreflightRequestCompleted');
          const result = this.impl.onCorsPreflightRequestCompleted(params.devtool_request_id, params.status);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DevToolsObserver_OnTrustTokenOperationDone_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onTrustTokenOperationDone');
          const result = this.impl.onTrustTokenOperationDone(params.devtool_request_id, params.result);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DevToolsObserver_OnCorsError_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onCorsError');
          const result = this.impl.onCorsError(params.devtool_request_id, params.initiator_origin, params.client_security_state, params.url, params.status, params.is_warning);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DevToolsObserver_OnOrbError_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onOrbError');
          const result = this.impl.onOrbError(params.devtools_request_id, params.url);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DevToolsObserver_OnSharedDictionaryError_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onSharedDictionaryError');
          const result = this.impl.onSharedDictionaryError(params.devtool_request_id, params.url, params.error);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DevToolsObserver_OnSRIMessageSignatureIssue_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onSRIMessageSignatureIssue');
          const result = this.impl.onSRIMessageSignatureIssue(params.devtool_request_id, params.url, params.issues);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DevToolsObserver_OnUnencodedDigestError_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onUnencodedDigestError');
          const result = this.impl.onUnencodedDigestError(params.devtool_request_id, params.url, params.issue);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DevToolsObserver_Clone_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.listener);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.DevToolsObserverReceiver = network.mojom.DevToolsObserverReceiver;

network.mojom.DevToolsObserverPtr = network.mojom.DevToolsObserverRemote;
network.mojom.DevToolsObserverRequest = network.mojom.DevToolsObserverPendingReceiver;

