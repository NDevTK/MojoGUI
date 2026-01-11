// Auto-generated MojoJS binding
 // Source: chromium_src/components/history_clusters/public/mojom/history_cluster_types.mojom
 // Module: history_clusters.mojom

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
 

 mojo.internal.bindings.history_clusters = mojo.internal.bindings.history_clusters || {};
mojo.internal.bindings.history_clusters.mojom = mojo.internal.bindings.history_clusters.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.history_clusters.mojom.AnnotationSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.history_clusters.mojom.InteractionStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.history_clusters.mojom.MatchPositionSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.SearchQuerySpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.RawVisitDataSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.URLVisitSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.ClusterSpec = { $: {} };

// Enum: Annotation
mojo.internal.bindings.history_clusters.mojom.Annotation = {
  kBookmarked: 0,
  kSearchResultsPage: 1,
};

// Enum: InteractionState
mojo.internal.bindings.history_clusters.mojom.InteractionState = {
  kDefault: 0,
  kHidden: 1,
  kDone: 2,
};

// Struct: MatchPosition
mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.MatchPositionSpec, 'history_clusters.mojom.MatchPosition', [
      mojo.internal.StructField('arg_begin', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SearchQuery
mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.SearchQuerySpec, 'history_clusters.mojom.SearchQuery', [
      mojo.internal.StructField('arg_query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RawVisitData
mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.RawVisitDataSpec, 'history_clusters.mojom.RawVisitData', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_visit_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: URLVisit
mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.URLVisitSpec, 'history_clusters.mojom.URLVisit', [
      mojo.internal.StructField('arg_visit_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_normalized_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_url_for_display', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_page_title', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_title_match_positions', 32, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.history_clusters.mojom.MatchPositionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_url_for_display_match_positions', 40, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.history_clusters.mojom.MatchPositionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_raw_visit_data', 48, 0, mojo.internal.bindings.mojo.internal.bindings.history_clusters.mojom.RawVisitDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_duplicates', 56, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.history_clusters.mojom.RawVisitDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_relative_date', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_annotations', 72, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.history_clusters.mojom.AnnotationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_debug_info', 80, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_is_known_to_sync', 88, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_url_keyed_image', 88, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 104]]);

// Struct: Cluster
mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.ClusterSpec, 'history_clusters.mojom.Cluster', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_visits', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.history_clusters.mojom.URLVisitSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_group_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_label_match_positions', 32, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.history_clusters.mojom.MatchPositionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_related_searches', 40, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.history_clusters.mojom.SearchQuerySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_image_url', 48, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_debug_info', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_from_persistence', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);
