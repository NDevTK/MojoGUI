// Auto-generated MojoJS binding
 // Source: chromium_src/services/network/public/mojom/url_response_head.mojom
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
mojo.internal.bindings.proxy_resolver = mojo.internal.bindings.proxy_resolver || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.network.mojom.NavigationDeliveryTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.URLResponseHeadSpec = { $: {} };

// Enum: NavigationDeliveryType
mojo.internal.bindings.network.mojom.NavigationDeliveryType = {
  kDefault: 0,
  kNavigationalPrefetch: 1,
};

// Struct: URLResponseHead
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLResponseHeadSpec, 'network.mojom.URLResponseHead', [
      mojo.internal.StructField('arg_request_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_response_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_original_response_time', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_headers', 24, 0, mojo.internal.bindings.network.mojom.HttpResponseHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_type', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_charset', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_content_length', 48, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('arg_encoded_data_length', 56, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('arg_encoded_body_length', 64, 0, mojo.internal.bindings.network.mojom.EncodedBodyLengthSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_load_timing', 72, 0, mojo.internal.bindings.network.mojom.LoadTimingInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_load_timing_internal_info', 80, 0, mojo.internal.bindings.network.mojom.LoadTimingInternalInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_connection_info', 88, 0, mojo.internal.bindings.network.mojom.ConnectionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_alpn_negotiated_protocol', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_alternate_protocol_usage', 104, 0, mojo.internal.bindings.network.mojom.AlternateProtocolUsageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_remote_endpoint', 112, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client_address_space', 120, 0, mojo.internal.bindings.network.mojom.IPAddressSpaceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_response_address_space', 128, 0, mojo.internal.bindings.network.mojom.IPAddressSpaceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_navigation_delivery_type', 136, 0, mojo.internal.bindings.network.mojom.NavigationDeliveryTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_proxy_chain', 144, 0, mojo.internal.bindings.network.mojom.ProxyChainSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_url_list_via_service_worker', 152, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_initial_service_worker_status', 160, 0, mojo.internal.bindings.network.mojom.ServiceWorkerStatusSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_service_worker_router_info', 168, 0, mojo.internal.bindings.network.mojom.ServiceWorkerRouterInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_response_type', 176, 0, mojo.internal.bindings.network.mojom.FetchResponseTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_padding', 184, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_cache_storage_cache_name', 192, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_ssl_info', 200, 0, mojo.internal.bindings.network.mojom.SSLInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_request_cookies', 208, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.ParsedRequestCookieSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_cors_exposed_header_names', 216, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_auth_challenge_info', 224, 0, mojo.internal.bindings.network.mojom.AuthChallengeInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_request_start', 232, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_response_start', 240, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_parsed_headers', 248, 0, mojo.internal.bindings.network.mojom.ParsedHeadersSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_recursive_prefetch_token', 256, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_dns_aliases', 264, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_client_side_content_decoding_types', 272, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.SourceTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_unencoded_digests', 280, 0, mojo.internal.bindings.network.mojom.UnencodedDigestsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_cert_status', 288, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_network_accessed', 292, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_emitted_extra_info', 292, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_was_fetched_via_spdy', 292, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_was_alpn_negotiated', 292, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_was_alternate_protocol_available', 292, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_validated', 292, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_was_fetched_via_cache', 292, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_was_fetched_via_service_worker', 292, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_did_service_worker_navigation_preload', 293, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_async_revalidation_requested', 293, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_did_mime_sniff', 293, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_signed_exchange_inner_response', 293, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_web_bundle_inner_response', 293, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_was_in_prefetch_cache', 293, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_prefetch_with_cross_site_contamination', 293, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_was_cookie_in_request', 293, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_intercepted_by_plugin', 294, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_range_requested', 294, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_timing_allow_passed', 294, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_authorization_covered_by_wildcard_on_preflight', 294, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_request_include_credentials', 294, 4, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_should_use_source_hash_for_js_code_cache', 294, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_did_use_shared_dictionary', 294, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_load_with_storage_access', 294, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_from_synthetic_response', 295, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_bypass_redirect_checks', 295, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_did_use_server_http_auth', 295, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 304]]);
