// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_request.mojom
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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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

network.mojom.DataElementSpec = { $: {} };
network.mojom.EnabledClientHintsSpec = { $: {} };
network.mojom.TrustedUrlRequestParamsSpec = { $: {} };
network.mojom.WebBundleTokenParamsSpec = { $: {} };
network.mojom.URLRequestSpec = { $: {} };
network.mojom.URLRequestBodySpec = { $: {} };
network.mojom.DataElementBytesSpec = { $: {} };
network.mojom.DataElementFileSpec = { $: {} };
network.mojom.DataElementDataPipeSpec = { $: {} };
network.mojom.DataElementChunkedDataPipeSpec = { $: {} };
network.mojom.SocketTagSpec = { $: {} };

// Union: DataElement
mojo.internal.Union(
    network.mojom.DataElementSpec, 'network.mojom.DataElement', {
      'bytes': {
        'ordinal': 0,
        'type': network.mojom.DataElementBytesSpec.$,
        'nullable': false,
      },
      'file': {
        'ordinal': 1,
        'type': network.mojom.DataElementFileSpec.$,
        'nullable': false,
      },
      'data_pipe': {
        'ordinal': 2,
        'type': network.mojom.DataElementDataPipeSpec.$,
        'nullable': false,
      },
      'chunked_data_pipe': {
        'ordinal': 3,
        'type': network.mojom.DataElementChunkedDataPipeSpec.$,
        'nullable': false,
      },
    });

// Struct: EnabledClientHints
mojo.internal.Struct(
    network.mojom.EnabledClientHintsSpec, 'network.mojom.EnabledClientHints', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hints', 8, 0, mojo.internal.Array(network.mojom.WebClientHintsTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('not_allowed_hints', 16, 0, mojo.internal.Array(network.mojom.WebClientHintsTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('is_outermost_main_frame', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TrustedUrlRequestParams
mojo.internal.Struct(
    network.mojom.TrustedUrlRequestParamsSpec, 'network.mojom.TrustedUrlRequestParams', [
      mojo.internal.StructField('isolation_info', 0, 0, network.mojom.IsolationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enabled_client_hints', 8, 0, network.mojom.EnabledClientHintsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cookie_observer', 16, 0, mojo.internal.InterfaceProxy(network.mojom.CookieAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('trust_token_observer', 24, 0, mojo.internal.InterfaceProxy(network.mojom.TrustTokenAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('url_loader_network_observer', 32, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderNetworkServiceObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('devtools_observer', 40, 0, mojo.internal.InterfaceProxy(network.mojom.DevToolsObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('device_bound_session_observer', 48, 0, mojo.internal.InterfaceProxy(network.mojom.DeviceBoundSessionAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('client_security_state', 56, 0, network.mojom.ClientSecurityStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('accept_ch_frame_observer', 64, 0, mojo.internal.InterfaceProxy(network.mojom.AcceptCHFrameObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('shared_dictionary_observer', 72, 0, mojo.internal.InterfaceProxy(network.mojom.SharedDictionaryAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('disable_secure_dns', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_user_activation', 80, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_cookies_from_browser', 80, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('include_request_cookies_with_response', 80, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: WebBundleTokenParams
mojo.internal.Struct(
    network.mojom.WebBundleTokenParamsSpec, 'network.mojom.WebBundleTokenParams', [
      mojo.internal.StructField('bundle_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('token', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('web_bundle_handle', 16, 0, mojo.internal.InterfaceProxy(network.mojom.WebBundleHandleRemote), null, true, 0, undefined),
      mojo.internal.StructField('render_process_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: URLRequest
mojo.internal.Struct(
    network.mojom.URLRequestSpec, 'network.mojom.URLRequest', [
      mojo.internal.StructField('method', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('site_for_cookies', 16, 0, network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_initiator', 24, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('navigation_redirect_chain', 32, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('isolated_world_origin', 40, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('referrer', 48, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('referrer_policy', 56, 0, network.mojom.URLRequestReferrerPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('headers', 64, 0, network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cors_exempt_headers', 72, 0, network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('priority', 80, 0, network.mojom.RequestPrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cors_preflight_policy', 88, 0, network.mojom.CorsPreflightPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mode', 96, 0, network.mojom.RequestModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('credentials_mode', 104, 0, network.mojom.CredentialsModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('redirect_mode', 112, 0, network.mojom.RedirectModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fetch_integrity', 120, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('expected_public_keys', 128, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('destination', 136, 0, network.mojom.RequestDestinationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_body', 144, 0, network.mojom.URLRequestBodySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('throttling_profile_id', 152, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('fetch_window_id', 160, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('devtools_request_id', 168, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('devtools_stack_id', 176, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('original_destination', 184, 0, network.mojom.RequestDestinationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trusted_params', 192, 0, network.mojom.TrustedUrlRequestParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('recursive_prefetch_token', 200, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('trust_token_params', 208, 0, network.mojom.TrustTokenParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('web_bundle_token_params', 216, 0, network.mojom.WebBundleTokenParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('devtools_accepted_stream_types', 224, 0, mojo.internal.Array(network.mojom.SourceTypeSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('net_log_create_info', 232, 0, network.mojom.NetLogSourceSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('net_log_reference_info', 240, 0, network.mojom.NetLogSourceSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('required_ip_address_space', 248, 0, network.mojom.IPAddressSpaceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('storage_access_api_status', 256, 0, network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attribution_reporting_support', 264, 0, network.mojom.AttributionSupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attribution_reporting_src_token', 272, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('keepalive_token', 280, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('socket_tag', 288, 0, network.mojom.SocketTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('permissions_policy', 296, 0, network.mojom.PermissionsPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('fetch_retry_options', 304, 0, network.mojom.FetchRetryOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('load_flags', 312, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('resource_type', 316, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('transition_type', 320, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('previews_state', 324, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('update_first_party_url_on_redirect', 328, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('priority_incremental', 328, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('originated_from_service_worker', 328, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('skip_service_worker', 328, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('keepalive', 328, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('browsing_topics', 328, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ad_auction_headers', 328, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shared_storage_writable_eligible', 328, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_user_gesture', 329, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_load_timing', 329, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_upload_progress', 329, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('do_not_prompt_for_login', 329, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_outermost_main_frame', 329, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('upgrade_if_insecure', 329, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_revalidating', 329, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_fetch_like_api', 329, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_fetch_later_api', 330, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_favicon', 330, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_ad_tagged', 330, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shared_dictionary_writer_enabled', 330, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('client_side_content_decoding_enabled', 330, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allows_device_bound_session_registration', 330, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 344]]);

// Struct: URLRequestBody
mojo.internal.Struct(
    network.mojom.URLRequestBodySpec, 'network.mojom.URLRequestBody', [
      mojo.internal.StructField('elements', 0, 0, mojo.internal.Array(network.mojom.DataElementSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('identifier', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('contains_sensitive_info', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_http1_for_streaming_upload', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DataElementBytes
mojo.internal.Struct(
    network.mojom.DataElementBytesSpec, 'network.mojom.DataElementBytes', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DataElementFile
mojo.internal.Struct(
    network.mojom.DataElementFileSpec, 'network.mojom.DataElementFile', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('length', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('expected_modification_time', 24, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DataElementDataPipe
mojo.internal.Struct(
    network.mojom.DataElementDataPipeSpec, 'network.mojom.DataElementDataPipe', [
      mojo.internal.StructField('data_pipe_getter', 0, 0, mojo.internal.InterfaceProxy(network.mojom.DataPipeGetterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DataElementChunkedDataPipe
mojo.internal.Struct(
    network.mojom.DataElementChunkedDataPipeSpec, 'network.mojom.DataElementChunkedDataPipe', [
      mojo.internal.StructField('data_pipe_getter', 0, 0, mojo.internal.InterfaceProxy(network.mojom.ChunkedDataPipeGetterRemote), null, false, 0, undefined),
      mojo.internal.StructField('read_only_once', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SocketTag
mojo.internal.Struct(
    network.mojom.SocketTagSpec, 'network.mojom.SocketTag', [
      mojo.internal.StructField('uid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('tag', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);
