// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/devtools_observer.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: URLRequestDevToolsInfo
network.mojom.URLRequestDevToolsInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLRequestDevToolsInfo',
      packedSize: 72,
      fields: [
        { name: 'method', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'priority', packedOffset: 16, packedBitOffset: 0, type: network.mojom.RequestPrioritySpec, nullable: false },
        { name: 'referrer_policy', packedOffset: 24, packedBitOffset: 0, type: network.mojom.URLRequestReferrerPolicySpec, nullable: false },
        { name: 'trust_token_params', packedOffset: 32, packedBitOffset: 0, type: network.mojom.TrustTokenParamsSpec, nullable: true },
        { name: 'has_user_gesture', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'resource_type', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'is_ad_related', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: URLResponseHeadDevToolsInfo
network.mojom.URLResponseHeadDevToolsInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLResponseHeadDevToolsInfo',
      packedSize: 144,
      fields: [
        { name: 'response_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'headers', packedOffset: 8, packedBitOffset: 0, type: network.mojom.HttpResponseHeadersSpec, nullable: false },
        { name: 'mime_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'charset', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'load_timing', packedOffset: 32, packedBitOffset: 0, type: network.mojom.LoadTimingInfoSpec, nullable: false },
        { name: 'cert_status', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'encoded_data_length', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'was_in_prefetch_cache', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'was_fetched_via_service_worker', packedOffset: 56, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'cache_storage_cache_name', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'alpn_negotiated_protocol', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'alternate_protocol_usage', packedOffset: 80, packedBitOffset: 0, type: network.mojom.AlternateProtocolUsageSpec, nullable: false },
        { name: 'was_fetched_via_spdy', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'service_worker_response_source', packedOffset: 96, packedBitOffset: 0, type: network.mojom.FetchResponseSourceSpec, nullable: false },
        { name: 'service_worker_router_info', packedOffset: 104, packedBitOffset: 0, type: network.mojom.ServiceWorkerRouterInfoSpec, nullable: true },
        { name: 'ssl_info', packedOffset: 112, packedBitOffset: 0, type: network.mojom.SSLInfoSpec, nullable: true },
        { name: 'remote_endpoint', packedOffset: 120, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: false },
        { name: 'emitted_extra_info', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OtherPartitionInfo
network.mojom.OtherPartitionInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.OtherPartitionInfo',
      packedSize: 16,
      fields: [
        { name: 'site_has_cookie_in_other_partition', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: DevToolsObserver
network.mojom.DevToolsObserver = {};

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
      [devtool_request_id, cookies_with_access_result, headers, timestamp, client_security_state, other_partition_info, applied_network_conditions_id]);
  }

  onRawResponse(devtool_request_id, cookies_with_access_result, headers, raw_response_headers, resource_address_space, http_status_code, cookie_partition_key) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.DevToolsObserver_OnRawResponse_ParamsSpec,
      null,
      [devtool_request_id, cookies_with_access_result, headers, raw_response_headers, resource_address_space, http_status_code, cookie_partition_key]);
  }

  onEarlyHintsResponse(devtool_request_id, headers) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.DevToolsObserver_OnEarlyHintsResponse_ParamsSpec,
      null,
      [devtool_request_id, headers]);
  }

  onPrivateNetworkRequest(devtool_request_id, url, is_warning, resource_address_space, client_security_state) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.DevToolsObserver_OnPrivateNetworkRequest_ParamsSpec,
      null,
      [devtool_request_id, url, is_warning, resource_address_space, client_security_state]);
  }

  onCorsPreflightRequest(devtool_request_id, request_headers, request_info, initiator_url, initiator_devtool_request_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.DevToolsObserver_OnCorsPreflightRequest_ParamsSpec,
      null,
      [devtool_request_id, request_headers, request_info, initiator_url, initiator_devtool_request_id]);
  }

  onCorsPreflightResponse(devtool_request_id, url, head) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.DevToolsObserver_OnCorsPreflightResponse_ParamsSpec,
      null,
      [devtool_request_id, url, head]);
  }

  onCorsPreflightRequestCompleted(devtool_request_id, status) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      network.mojom.DevToolsObserver_OnCorsPreflightRequestCompleted_ParamsSpec,
      null,
      [devtool_request_id, status]);
  }

  onTrustTokenOperationDone(devtool_request_id, result) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      network.mojom.DevToolsObserver_OnTrustTokenOperationDone_ParamsSpec,
      null,
      [devtool_request_id, result]);
  }

  onCorsError(devtool_request_id, initiator_origin, client_security_state, url, status, is_warning) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      network.mojom.DevToolsObserver_OnCorsError_ParamsSpec,
      null,
      [devtool_request_id, initiator_origin, client_security_state, url, status, is_warning]);
  }

  onOrbError(devtools_request_id, url) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      network.mojom.DevToolsObserver_OnOrbError_ParamsSpec,
      null,
      [devtools_request_id, url]);
  }

  onSharedDictionaryError(devtool_request_id, url, error) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      network.mojom.DevToolsObserver_OnSharedDictionaryError_ParamsSpec,
      null,
      [devtool_request_id, url, error]);
  }

  onSRIMessageSignatureIssue(devtool_request_id, url, issues) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      network.mojom.DevToolsObserver_OnSRIMessageSignatureIssue_ParamsSpec,
      null,
      [devtool_request_id, url, issues]);
  }

  onUnencodedDigestError(devtool_request_id, url, issue) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      network.mojom.DevToolsObserver_OnUnencodedDigestError_ParamsSpec,
      null,
      [devtool_request_id, url, issue]);
  }

  clone(listener) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      network.mojom.DevToolsObserver_Clone_ParamsSpec,
      null,
      [listener]);
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

// ParamsSpec for OnRawRequest
network.mojom.DevToolsObserver_OnRawRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DevToolsObserver.OnRawRequest_Params',
      packedSize: 64,
      fields: [
        { name: 'devtool_request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'cookies_with_access_result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'headers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'timestamp', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'client_security_state', packedOffset: 32, packedBitOffset: 0, type: network.mojom.ClientSecurityStateSpec, nullable: true },
        { name: 'other_partition_info', packedOffset: 40, packedBitOffset: 0, type: network.mojom.OtherPartitionInfoSpec, nullable: true },
        { name: 'applied_network_conditions_id', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnRawResponse
network.mojom.DevToolsObserver_OnRawResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DevToolsObserver.OnRawResponse_Params',
      packedSize: 64,
      fields: [
        { name: 'devtool_request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'cookies_with_access_result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'headers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'raw_response_headers', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'resource_address_space', packedOffset: 32, packedBitOffset: 0, type: network.mojom.IPAddressSpaceSpec, nullable: false },
        { name: 'http_status_code', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'cookie_partition_key', packedOffset: 48, packedBitOffset: 0, type: network.mojom.CookiePartitionKeySpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnEarlyHintsResponse
network.mojom.DevToolsObserver_OnEarlyHintsResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DevToolsObserver.OnEarlyHintsResponse_Params',
      packedSize: 24,
      fields: [
        { name: 'devtool_request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'headers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPrivateNetworkRequest
network.mojom.DevToolsObserver_OnPrivateNetworkRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DevToolsObserver.OnPrivateNetworkRequest_Params',
      packedSize: 48,
      fields: [
        { name: 'devtool_request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'is_warning', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'resource_address_space', packedOffset: 24, packedBitOffset: 0, type: network.mojom.IPAddressSpaceSpec, nullable: false },
        { name: 'client_security_state', packedOffset: 32, packedBitOffset: 0, type: network.mojom.ClientSecurityStateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnCorsPreflightRequest
network.mojom.DevToolsObserver_OnCorsPreflightRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DevToolsObserver.OnCorsPreflightRequest_Params',
      packedSize: 48,
      fields: [
        { name: 'devtool_request_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'request_headers', packedOffset: 8, packedBitOffset: 0, type: network.mojom.HttpRequestHeadersSpec, nullable: false },
        { name: 'request_info', packedOffset: 16, packedBitOffset: 0, type: network.mojom.URLRequestDevToolsInfoSpec, nullable: false },
        { name: 'initiator_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'initiator_devtool_request_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnCorsPreflightResponse
network.mojom.DevToolsObserver_OnCorsPreflightResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DevToolsObserver.OnCorsPreflightResponse_Params',
      packedSize: 32,
      fields: [
        { name: 'devtool_request_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'head', packedOffset: 16, packedBitOffset: 0, type: network.mojom.URLResponseHeadDevToolsInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnCorsPreflightRequestCompleted
network.mojom.DevToolsObserver_OnCorsPreflightRequestCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DevToolsObserver.OnCorsPreflightRequestCompleted_Params',
      packedSize: 24,
      fields: [
        { name: 'devtool_request_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: network.mojom.URLLoaderCompletionStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTrustTokenOperationDone
network.mojom.DevToolsObserver_OnTrustTokenOperationDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DevToolsObserver.OnTrustTokenOperationDone_Params',
      packedSize: 24,
      fields: [
        { name: 'devtool_request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: network.mojom.TrustTokenOperationResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnCorsError
network.mojom.DevToolsObserver_OnCorsError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DevToolsObserver.OnCorsError_Params',
      packedSize: 56,
      fields: [
        { name: 'devtool_request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'initiator_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true },
        { name: 'client_security_state', packedOffset: 16, packedBitOffset: 0, type: network.mojom.ClientSecurityStateSpec, nullable: true },
        { name: 'url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'status', packedOffset: 32, packedBitOffset: 0, type: network.mojom.CorsErrorStatusSpec, nullable: false },
        { name: 'is_warning', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnOrbError
network.mojom.DevToolsObserver_OnOrbError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DevToolsObserver.OnOrbError_Params',
      packedSize: 24,
      fields: [
        { name: 'devtools_request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSharedDictionaryError
network.mojom.DevToolsObserver_OnSharedDictionaryError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DevToolsObserver.OnSharedDictionaryError_Params',
      packedSize: 32,
      fields: [
        { name: 'devtool_request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: network.mojom.SharedDictionaryErrorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSRIMessageSignatureIssue
network.mojom.DevToolsObserver_OnSRIMessageSignatureIssue_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DevToolsObserver.OnSRIMessageSignatureIssue_Params',
      packedSize: 32,
      fields: [
        { name: 'devtool_request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'issues', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnUnencodedDigestError
network.mojom.DevToolsObserver_OnUnencodedDigestError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DevToolsObserver.OnUnencodedDigestError_Params',
      packedSize: 32,
      fields: [
        { name: 'devtool_request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'issue', packedOffset: 16, packedBitOffset: 0, type: network.mojom.UnencodedDigestIssueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Clone
network.mojom.DevToolsObserver_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DevToolsObserver.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.DevToolsObserverPtr = network.mojom.DevToolsObserverRemote;
network.mojom.DevToolsObserverRequest = network.mojom.DevToolsObserverPendingReceiver;

