// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/fetch/fetch_api_request.mojom
// Module: blink.mojom

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
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var url = url || {};

blink.mojom.RequestContextTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.FetchCacheModeSpec = { $: mojo.internal.Enum() };
blink.mojom.FetchPriorityHintSpec = { $: mojo.internal.Enum() };
blink.mojom.FetchAPIRequestHeadersSpec = { $: {} };
blink.mojom.FetchAPIRequestBodySpec = { $: {} };
blink.mojom.FetchAPIRequestSpec = { $: {} };

// Enum: RequestContextType
blink.mojom.RequestContextType = {
  UNSPECIFIED: 0,
  ATTRIBUTION_SRC: 1,
  AUDIO: 2,
  BEACON: 3,
  CSP_REPORT: 4,
  DOWNLOAD: 5,
  EMBED: 6,
  EVENT_SOURCE: 7,
  FAVICON: 8,
  FETCH: 9,
  FONT: 10,
  FORM: 11,
  FRAME: 12,
  HYPERLINK: 13,
  IFRAME: 14,
  IMAGE: 15,
  IMAGE_SET: 16,
  INTERNAL: 17,
  JSON: 18,
  LOCATION: 19,
  MANIFEST: 20,
  OBJECT: 21,
  PING: 22,
  PLUGIN: 23,
  PREFETCH: 24,
  SCRIPT: 25,
  SERVICE_WORKER: 26,
  SHARED_WORKER: 27,
  SPECULATION_RULES: 28,
  SUBRESOURCE: 29,
  SUBRESOURCE_WEBBUNDLE: 30,
  STYLE: 31,
  TRACK: 32,
  VIDEO: 33,
  WORKER: 34,
  XML_HTTP_REQUEST: 35,
  XSLT: 36,
};

// Enum: FetchCacheMode
blink.mojom.FetchCacheMode = {
  kDefault: 0,
  kNoStore: 1,
  kBypassCache: 2,
  kValidateCache: 3,
  kForceCache: 4,
  kOnlyIfCached: 5,
  kUnspecifiedOnlyIfCachedStrict: 6,
  kUnspecifiedForceCacheMiss: 7,
};

// Enum: FetchPriorityHint
blink.mojom.FetchPriorityHint = {
  kLow: 0,
  kAuto: 1,
  kHigh: 2,
};

// Struct: FetchAPIRequestHeaders
mojo.internal.Struct(
    blink.mojom.FetchAPIRequestHeadersSpec, 'blink.mojom.FetchAPIRequestHeaders', [
      mojo.internal.StructField('headers', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FetchAPIRequestBody
mojo.internal.Struct(
    blink.mojom.FetchAPIRequestBodySpec, 'blink.mojom.FetchAPIRequestBody', [
      mojo.internal.StructField('elements', 0, 0, mojo.internal.Array(network.mojom.DataElementSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('identifier', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('contains_sensitive_info', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: FetchAPIRequest
mojo.internal.Struct(
    blink.mojom.FetchAPIRequestSpec, 'blink.mojom.FetchAPIRequest', [
      mojo.internal.StructField('mode', 0, 0, network.mojom.RequestModeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('destination', 8, 0, network.mojom.RequestDestinationSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('frame_type', 16, 0, blink.mojom.RequestContextFrameTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('method', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('headers', 40, 0, blink.mojom.FetchAPIRequestHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('blob', 48, 0, blink.mojom.SerializedBlobSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('body', 56, 0, blink.mojom.FetchAPIRequestBodySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('request_initiator', 64, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('navigation_redirect_chain', 72, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('referrer', 80, 0, blink.mojom.ReferrerSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cache_mode', 88, 0, blink.mojom.FetchCacheModeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('integrity', 96, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('priority', 104, 0, network.mojom.RequestPrioritySpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('fetch_window_id', 112, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('devtools_stack_id', 120, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('trust_token_params', 128, 0, network.mojom.TrustTokenParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('target_address_space', 136, 0, network.mojom.IPAddressSpaceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('service_worker_race_network_request_token', 144, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_main_resource_load', 152, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('keepalive', 152, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_reload', 152, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_history_navigation', 152, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 168]]);
