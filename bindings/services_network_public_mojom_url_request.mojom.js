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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.network.mojom.DataElementSpec = { $: {} };
mojo.internal.bindings.network.mojom.EnabledClientHintsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TrustedUrlRequestParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.WebBundleTokenParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLRequestSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLRequestBodySpec = { $: {} };
mojo.internal.bindings.network.mojom.DataElementBytesSpec = { $: {} };
mojo.internal.bindings.network.mojom.DataElementFileSpec = { $: {} };
mojo.internal.bindings.network.mojom.DataElementDataPipeSpec = { $: {} };
mojo.internal.bindings.network.mojom.DataElementChunkedDataPipeSpec = { $: {} };
mojo.internal.bindings.network.mojom.SocketTagSpec = { $: {} };

// Union: DataElement
mojo.internal.Union(
    mojo.internal.bindings.network.mojom.DataElementSpec, 'network.mojom.DataElement', {
      'arg_bytes': {
        'ordinal': 0,
        'type': mojo.internal.bindings.network.mojom.DataElementBytesSpec.$,
        'nullable': false,
      },
      'arg_file': {
        'ordinal': 1,
        'type': mojo.internal.bindings.network.mojom.DataElementFileSpec.$,
        'nullable': false,
      },
      'arg_data_pipe': {
        'ordinal': 2,
        'type': mojo.internal.bindings.network.mojom.DataElementDataPipeSpec.$,
        'nullable': false,
      },
      'arg_chunked_data_pipe': {
        'ordinal': 3,
        'type': mojo.internal.bindings.network.mojom.DataElementChunkedDataPipeSpec.$,
        'nullable': false,
      },
    });

// Struct: EnabledClientHints
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.EnabledClientHintsSpec, 'network.mojom.EnabledClientHints', [
      mojo.internal.StructField('arg_origin', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hints', 8, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.WebClientHintsTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_not_allowed_hints', 16, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.WebClientHintsTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_is_outermost_main_frame', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TrustedUrlRequestParams
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TrustedUrlRequestParamsSpec, 'network.mojom.TrustedUrlRequestParams', [
      mojo.internal.StructField('arg_isolation_info', 0, 0, mojo.internal.bindings.network.mojom.IsolationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_enabled_client_hints', 8, 0, mojo.internal.bindings.network.mojom.EnabledClientHintsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_cookie_observer', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.CookieAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_trust_token_observer', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.TrustTokenAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_url_loader_network_observer', 32, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_devtools_observer', 40, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.DevToolsObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_device_bound_session_observer', 48, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_client_security_state', 56, 0, mojo.internal.bindings.network.mojom.ClientSecurityStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_accept_ch_frame_observer', 64, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.AcceptCHFrameObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_shared_dictionary_observer', 72, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.SharedDictionaryAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_disable_secure_dns', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_user_activation', 80, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_cookies_from_browser', 80, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_include_request_cookies_with_response', 80, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: WebBundleTokenParams
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.WebBundleTokenParamsSpec, 'network.mojom.WebBundleTokenParams', [
      mojo.internal.StructField('arg_bundle_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_token', 8, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_web_bundle_handle', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.WebBundleHandleRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_render_process_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: URLRequest
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLRequestSpec, 'network.mojom.URLRequest', [
      mojo.internal.StructField('arg_method', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_site_for_cookies', 16, 0, mojo.internal.bindings.network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_initiator', 24, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_navigation_redirect_chain', 32, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_isolated_world_origin', 40, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_referrer', 48, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_referrer_policy', 56, 0, mojo.internal.bindings.network.mojom.URLRequestReferrerPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_headers', 64, 0, mojo.internal.bindings.network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cors_exempt_headers', 72, 0, mojo.internal.bindings.network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_priority', 80, 0, mojo.internal.bindings.network.mojom.RequestPrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cors_preflight_policy', 88, 0, mojo.internal.bindings.network.mojom.CorsPreflightPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mode', 96, 0, mojo.internal.bindings.network.mojom.RequestModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_credentials_mode', 104, 0, mojo.internal.bindings.network.mojom.CredentialsModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_redirect_mode', 112, 0, mojo.internal.bindings.network.mojom.RedirectModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_fetch_integrity', 120, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_expected_public_keys', 128, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('arg_destination', 136, 0, mojo.internal.bindings.network.mojom.RequestDestinationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_body', 144, 0, mojo.internal.bindings.network.mojom.URLRequestBodySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_throttling_profile_id', 152, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_fetch_window_id', 160, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_devtools_request_id', 168, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_devtools_stack_id', 176, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_original_destination', 184, 0, mojo.internal.bindings.network.mojom.RequestDestinationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_trusted_params', 192, 0, mojo.internal.bindings.network.mojom.TrustedUrlRequestParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_recursive_prefetch_token', 200, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_trust_token_params', 208, 0, mojo.internal.bindings.network.mojom.TrustTokenParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_web_bundle_token_params', 216, 0, mojo.internal.bindings.network.mojom.WebBundleTokenParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_devtools_accepted_stream_types', 224, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.SourceTypeSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_net_log_create_info', 232, 0, mojo.internal.bindings.network.mojom.NetLogSourceSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_net_log_reference_info', 240, 0, mojo.internal.bindings.network.mojom.NetLogSourceSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_required_ip_address_space', 248, 0, mojo.internal.bindings.network.mojom.IPAddressSpaceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_storage_access_api_status', 256, 0, mojo.internal.bindings.network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_attribution_reporting_support', 264, 0, mojo.internal.bindings.network.mojom.AttributionSupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_attribution_reporting_src_token', 272, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_keepalive_token', 280, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_socket_tag', 288, 0, mojo.internal.bindings.network.mojom.SocketTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_permissions_policy', 296, 0, mojo.internal.bindings.network.mojom.PermissionsPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_fetch_retry_options', 304, 0, mojo.internal.bindings.network.mojom.FetchRetryOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_load_flags', 312, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_resource_type', 316, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_transition_type', 320, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_previews_state', 324, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_update_first_party_url_on_redirect', 328, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_priority_incremental', 328, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_originated_from_service_worker', 328, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_skip_service_worker', 328, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_keepalive', 328, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_browsing_topics', 328, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ad_auction_headers', 328, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shared_storage_writable_eligible', 328, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_user_gesture', 329, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_load_timing', 329, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_upload_progress', 329, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_do_not_prompt_for_login', 329, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_outermost_main_frame', 329, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_upgrade_if_insecure', 329, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_revalidating', 329, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_fetch_like_api', 329, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_fetch_later_api', 330, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_favicon', 330, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_ad_tagged', 330, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shared_dictionary_writer_enabled', 330, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_client_side_content_decoding_enabled', 330, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allows_device_bound_session_registration', 330, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 344]]);

// Struct: URLRequestBody
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLRequestBodySpec, 'network.mojom.URLRequestBody', [
      mojo.internal.StructField('arg_elements', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.DataElementSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_identifier', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_contains_sensitive_info', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_http1_for_streaming_upload', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DataElementBytes
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DataElementBytesSpec, 'network.mojom.DataElementBytes', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DataElementFile
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DataElementFileSpec, 'network.mojom.DataElementFile', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_length', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_expected_modification_time', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DataElementDataPipe
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DataElementDataPipeSpec, 'network.mojom.DataElementDataPipe', [
      mojo.internal.StructField('arg_data_pipe_getter', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.DataPipeGetterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DataElementChunkedDataPipe
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DataElementChunkedDataPipeSpec, 'network.mojom.DataElementChunkedDataPipe', [
      mojo.internal.StructField('arg_data_pipe_getter', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.ChunkedDataPipeGetterRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_read_only_once', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SocketTag
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SocketTagSpec, 'network.mojom.SocketTag', [
      mojo.internal.StructField('arg_uid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tag', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);
