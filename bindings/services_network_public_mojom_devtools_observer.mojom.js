// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/devtools_observer.mojom
// Module: network.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const p = window.mojoVersion.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

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
    this.ordinals = window.mojoScrambler.getOrdinals('DevToolsObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onRawRequest(devtool_request_id, cookies_with_access_result, headers, timestamp, client_security_state, other_partition_info, applied_network_conditions_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.DevToolsObserver_OnRawRequest_ParamsSpec,
      null,
      [devtool_request_id, cookies_with_access_result, headers, timestamp, client_security_state, other_partition_info, applied_network_conditions_id],
      false);
  }

  onRawResponse(devtool_request_id, cookies_with_access_result, headers, raw_response_headers, resource_address_space, http_status_code, cookie_partition_key) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.DevToolsObserver_OnRawResponse_ParamsSpec,
      null,
      [devtool_request_id, cookies_with_access_result, headers, raw_response_headers, resource_address_space, http_status_code, cookie_partition_key],
      false);
  }

  onEarlyHintsResponse(devtool_request_id, headers) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.DevToolsObserver_OnEarlyHintsResponse_ParamsSpec,
      null,
      [devtool_request_id, headers],
      false);
  }

  onPrivateNetworkRequest(devtool_request_id, url, is_warning, resource_address_space, client_security_state) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.DevToolsObserver_OnPrivateNetworkRequest_ParamsSpec,
      null,
      [devtool_request_id, url, is_warning, resource_address_space, client_security_state],
      false);
  }

  onCorsPreflightRequest(devtool_request_id, request_headers, request_info, initiator_url, initiator_devtool_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      network.mojom.DevToolsObserver_OnCorsPreflightRequest_ParamsSpec,
      null,
      [devtool_request_id, request_headers, request_info, initiator_url, initiator_devtool_request_id],
      false);
  }

  onCorsPreflightResponse(devtool_request_id, url, head) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      network.mojom.DevToolsObserver_OnCorsPreflightResponse_ParamsSpec,
      null,
      [devtool_request_id, url, head],
      false);
  }

  onCorsPreflightRequestCompleted(devtool_request_id, status) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      network.mojom.DevToolsObserver_OnCorsPreflightRequestCompleted_ParamsSpec,
      null,
      [devtool_request_id, status],
      false);
  }

  onTrustTokenOperationDone(devtool_request_id, result) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      network.mojom.DevToolsObserver_OnTrustTokenOperationDone_ParamsSpec,
      null,
      [devtool_request_id, result],
      false);
  }

  onCorsError(devtool_request_id, initiator_origin, client_security_state, url, status, is_warning) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      network.mojom.DevToolsObserver_OnCorsError_ParamsSpec,
      null,
      [devtool_request_id, initiator_origin, client_security_state, url, status, is_warning],
      false);
  }

  onOrbError(devtools_request_id, url) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      network.mojom.DevToolsObserver_OnOrbError_ParamsSpec,
      null,
      [devtools_request_id, url],
      false);
  }

  onSharedDictionaryError(devtool_request_id, url, error) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      network.mojom.DevToolsObserver_OnSharedDictionaryError_ParamsSpec,
      null,
      [devtool_request_id, url, error],
      false);
  }

  onSRIMessageSignatureIssue(devtool_request_id, url, issues) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      network.mojom.DevToolsObserver_OnSRIMessageSignatureIssue_ParamsSpec,
      null,
      [devtool_request_id, url, issues],
      false);
  }

  onUnencodedDigestError(devtool_request_id, url, issue) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      network.mojom.DevToolsObserver_OnUnencodedDigestError_ParamsSpec,
      null,
      [devtool_request_id, url, issue],
      false);
  }

  clone(listener) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('DevToolsObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnRawRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.DevToolsObserver_OnRawRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRawRequest (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnRawResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.DevToolsObserver_OnRawResponse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRawResponse (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnEarlyHintsResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.DevToolsObserver_OnEarlyHintsResponse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEarlyHintsResponse (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnPrivateNetworkRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.DevToolsObserver_OnPrivateNetworkRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPrivateNetworkRequest (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnCorsPreflightRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.DevToolsObserver_OnCorsPreflightRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCorsPreflightRequest (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnCorsPreflightResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.DevToolsObserver_OnCorsPreflightResponse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCorsPreflightResponse (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnCorsPreflightRequestCompleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.DevToolsObserver_OnCorsPreflightRequestCompleted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCorsPreflightRequestCompleted (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnTrustTokenOperationDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.DevToolsObserver_OnTrustTokenOperationDone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTrustTokenOperationDone (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnCorsError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.DevToolsObserver_OnCorsError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCorsError (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnOrbError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.DevToolsObserver_OnOrbError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOrbError (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnSharedDictionaryError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.DevToolsObserver_OnSharedDictionaryError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSharedDictionaryError (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OnSRIMessageSignatureIssue
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.DevToolsObserver_OnSRIMessageSignatureIssue_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSRIMessageSignatureIssue (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OnUnencodedDigestError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.DevToolsObserver_OnUnencodedDigestError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnUnencodedDigestError (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.DevToolsObserver_Clone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Clone (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DevToolsObserver_OnRawRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRawRequest');
          const result = this.impl.onRawRequest(params.devtool_request_id, params.cookies_with_access_result, params.headers, params.timestamp, params.client_security_state, params.other_partition_info, params.applied_network_conditions_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DevToolsObserver_OnRawResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRawResponse');
          const result = this.impl.onRawResponse(params.devtool_request_id, params.cookies_with_access_result, params.headers, params.raw_response_headers, params.resource_address_space, params.http_status_code, params.cookie_partition_key);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DevToolsObserver_OnEarlyHintsResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onEarlyHintsResponse');
          const result = this.impl.onEarlyHintsResponse(params.devtool_request_id, params.headers);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DevToolsObserver_OnPrivateNetworkRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPrivateNetworkRequest');
          const result = this.impl.onPrivateNetworkRequest(params.devtool_request_id, params.url, params.is_warning, params.resource_address_space, params.client_security_state);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DevToolsObserver_OnCorsPreflightRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCorsPreflightRequest');
          const result = this.impl.onCorsPreflightRequest(params.devtool_request_id, params.request_headers, params.request_info, params.initiator_url, params.initiator_devtool_request_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DevToolsObserver_OnCorsPreflightResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCorsPreflightResponse');
          const result = this.impl.onCorsPreflightResponse(params.devtool_request_id, params.url, params.head);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DevToolsObserver_OnCorsPreflightRequestCompleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCorsPreflightRequestCompleted');
          const result = this.impl.onCorsPreflightRequestCompleted(params.devtool_request_id, params.status);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DevToolsObserver_OnTrustTokenOperationDone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTrustTokenOperationDone');
          const result = this.impl.onTrustTokenOperationDone(params.devtool_request_id, params.result);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DevToolsObserver_OnCorsError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCorsError');
          const result = this.impl.onCorsError(params.devtool_request_id, params.initiator_origin, params.client_security_state, params.url, params.status, params.is_warning);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DevToolsObserver_OnOrbError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOrbError');
          const result = this.impl.onOrbError(params.devtools_request_id, params.url);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DevToolsObserver_OnSharedDictionaryError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSharedDictionaryError');
          const result = this.impl.onSharedDictionaryError(params.devtool_request_id, params.url, params.error);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DevToolsObserver_OnSRIMessageSignatureIssue_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSRIMessageSignatureIssue');
          const result = this.impl.onSRIMessageSignatureIssue(params.devtool_request_id, params.url, params.issues);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DevToolsObserver_OnUnencodedDigestError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUnencodedDigestError');
          const result = this.impl.onUnencodedDigestError(params.devtool_request_id, params.url, params.issue);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DevToolsObserver_Clone_ParamsSpec.$.structSpec);
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

