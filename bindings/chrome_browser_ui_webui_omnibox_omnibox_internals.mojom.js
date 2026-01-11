// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui/omnibox/omnibox_internals.mojom
 // Module: mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.mojom = mojo.internal.bindings.mojom || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.mojom.AutocompleteControllerTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.mojom.ACMatchClassificationSpec = { $: {} };
mojo.internal.bindings.mojom.SignalsSpec = { $: {} };
mojo.internal.bindings.mojom.AutocompleteMatchSpec = { $: {} };
mojo.internal.bindings.mojom.AutocompleteResultsForProviderSpec = { $: {} };
mojo.internal.bindings.mojom.OmniboxResponseSpec = { $: {} };
mojo.internal.bindings.mojom.OmniboxPageHandler = {};
mojo.internal.bindings.mojom.OmniboxPageHandlerSpec = { $ : {} };
mojo.internal.bindings.mojom.OmniboxPageHandler.$interfaceName = 'mojom.OmniboxPageHandler';
mojo.internal.bindings.mojom.OmniboxPageHandler_SetClientPage_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.OmniboxPageHandler_StartOmniboxQuery_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.OmniboxPageHandler_GetMlModelVersion_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.OmniboxPageHandler_GetMlModelVersion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mojom.OmniboxPageHandler_StartMl_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.OmniboxPageHandler_StartMl_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mojom.OmniboxPage = {};
mojo.internal.bindings.mojom.OmniboxPageSpec = { $ : {} };
mojo.internal.bindings.mojom.OmniboxPage.$interfaceName = 'mojom.OmniboxPage';
mojo.internal.bindings.mojom.OmniboxPage_HandleNewAutocompleteQuery_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.OmniboxPage_HandleNewAutocompleteResponse_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.OmniboxPage_HandleNewMlResponse_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.OmniboxPage_HandleAnswerIconImageData_ParamsSpec = { $: {} };

// Enum: AutocompleteControllerType
mojo.internal.bindings.mojom.AutocompleteControllerType = {
  kBrowser: 0,
  kDebug: 1,
  kMlDisabledDebug: 2,
};

// Struct: ACMatchClassification
mojo.internal.Struct(
    mojo.internal.bindings.mojom.ACMatchClassificationSpec, 'mojom.ACMatchClassification', [
      mojo.internal.StructField('arg_offset', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_style', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Signals
mojo.internal.Struct(
    mojo.internal.bindings.mojom.SignalsSpec, 'mojom.Signals', [
      mojo.internal.StructField('arg_elapsed_time_last_visit_secs_$value', 0, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_elapsed_time_last_visit_secs_$flag', originalFieldName: 'arg_elapsed_time_last_visit_secs' }),
      mojo.internal.StructField('arg_elapsed_time_last_shortcut_visit_sec_$value', 8, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_elapsed_time_last_shortcut_visit_sec_$flag', originalFieldName: 'arg_elapsed_time_last_shortcut_visit_sec' }),
      mojo.internal.StructField('arg_typed_count_$value', 16, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_typed_count_$flag', originalFieldName: 'arg_typed_count' }),
      mojo.internal.StructField('arg_visit_count_$value', 20, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_visit_count_$flag', originalFieldName: 'arg_visit_count' }),
      mojo.internal.StructField('arg_shortcut_visit_count_$value', 24, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_shortcut_visit_count_$flag', originalFieldName: 'arg_shortcut_visit_count' }),
      mojo.internal.StructField('arg_shortest_shortcut_len_$value', 28, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_shortest_shortcut_len_$flag', originalFieldName: 'arg_shortest_shortcut_len' }),
      mojo.internal.StructField('arg_num_bookmarks_of_url_$value', 32, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_num_bookmarks_of_url_$flag', originalFieldName: 'arg_num_bookmarks_of_url' }),
      mojo.internal.StructField('arg_first_bookmark_title_match_position_$value', 36, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_first_bookmark_title_match_position_$flag', originalFieldName: 'arg_first_bookmark_title_match_position' }),
      mojo.internal.StructField('arg_total_bookmark_title_match_length_$value', 40, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_total_bookmark_title_match_length_$flag', originalFieldName: 'arg_total_bookmark_title_match_length' }),
      mojo.internal.StructField('arg_num_input_terms_matched_by_bookmark_title_$value', 44, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_num_input_terms_matched_by_bookmark_title_$flag', originalFieldName: 'arg_num_input_terms_matched_by_bookmark_title' }),
      mojo.internal.StructField('arg_first_url_match_position_$value', 48, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_first_url_match_position_$flag', originalFieldName: 'arg_first_url_match_position' }),
      mojo.internal.StructField('arg_total_url_match_length_$value', 52, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_total_url_match_length_$flag', originalFieldName: 'arg_total_url_match_length' }),
      mojo.internal.StructField('arg_total_host_match_length_$value', 56, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_total_host_match_length_$flag', originalFieldName: 'arg_total_host_match_length' }),
      mojo.internal.StructField('arg_total_path_match_length_$value', 60, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_total_path_match_length_$flag', originalFieldName: 'arg_total_path_match_length' }),
      mojo.internal.StructField('arg_total_query_or_ref_match_length_$value', 64, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_total_query_or_ref_match_length_$flag', originalFieldName: 'arg_total_query_or_ref_match_length' }),
      mojo.internal.StructField('arg_total_title_match_length_$value', 68, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_total_title_match_length_$flag', originalFieldName: 'arg_total_title_match_length' }),
      mojo.internal.StructField('arg_num_input_terms_matched_by_title_$value', 72, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_num_input_terms_matched_by_title_$flag', originalFieldName: 'arg_num_input_terms_matched_by_title' }),
      mojo.internal.StructField('arg_num_input_terms_matched_by_url_$value', 76, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_num_input_terms_matched_by_url_$flag', originalFieldName: 'arg_num_input_terms_matched_by_url' }),
      mojo.internal.StructField('arg_length_of_url_$value', 80, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_length_of_url_$flag', originalFieldName: 'arg_length_of_url' }),
      mojo.internal.StructField('arg_site_engagement_$value', 84, 0, mojo.internal.Float, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_site_engagement_$flag', originalFieldName: 'arg_site_engagement' }),
      mojo.internal.StructField('arg_search_suggest_relevance_$value', 88, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_search_suggest_relevance_$flag', originalFieldName: 'arg_search_suggest_relevance' }),
      mojo.internal.StructField('arg_typed_count_$flag', 92, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_typed_count_$value', originalFieldName: 'arg_typed_count' }),
      mojo.internal.StructField('arg_visit_count_$flag', 92, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_visit_count_$value', originalFieldName: 'arg_visit_count' }),
      mojo.internal.StructField('arg_elapsed_time_last_visit_secs_$flag', 92, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_elapsed_time_last_visit_secs_$value', originalFieldName: 'arg_elapsed_time_last_visit_secs' }),
      mojo.internal.StructField('arg_shortcut_visit_count_$flag', 92, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_shortcut_visit_count_$value', originalFieldName: 'arg_shortcut_visit_count' }),
      mojo.internal.StructField('arg_shortest_shortcut_len_$flag', 92, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_shortest_shortcut_len_$value', originalFieldName: 'arg_shortest_shortcut_len' }),
      mojo.internal.StructField('arg_elapsed_time_last_shortcut_visit_sec_$flag', 92, 5, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_elapsed_time_last_shortcut_visit_sec_$value', originalFieldName: 'arg_elapsed_time_last_shortcut_visit_sec' }),
      mojo.internal.StructField('arg_is_host_only_$flag', 92, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_host_only_$value', originalFieldName: 'arg_is_host_only' }),
      mojo.internal.StructField('arg_is_host_only_$value', 92, 7, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_host_only_$flag', originalFieldName: 'arg_is_host_only' }),
      mojo.internal.StructField('arg_num_bookmarks_of_url_$flag', 93, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_num_bookmarks_of_url_$value', originalFieldName: 'arg_num_bookmarks_of_url' }),
      mojo.internal.StructField('arg_first_bookmark_title_match_position_$flag', 93, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_first_bookmark_title_match_position_$value', originalFieldName: 'arg_first_bookmark_title_match_position' }),
      mojo.internal.StructField('arg_total_bookmark_title_match_length_$flag', 93, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_total_bookmark_title_match_length_$value', originalFieldName: 'arg_total_bookmark_title_match_length' }),
      mojo.internal.StructField('arg_num_input_terms_matched_by_bookmark_title_$flag', 93, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_num_input_terms_matched_by_bookmark_title_$value', originalFieldName: 'arg_num_input_terms_matched_by_bookmark_title' }),
      mojo.internal.StructField('arg_first_url_match_position_$flag', 93, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_first_url_match_position_$value', originalFieldName: 'arg_first_url_match_position' }),
      mojo.internal.StructField('arg_total_url_match_length_$flag', 93, 5, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_total_url_match_length_$value', originalFieldName: 'arg_total_url_match_length' }),
      mojo.internal.StructField('arg_host_match_at_word_boundary_$flag', 93, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_host_match_at_word_boundary_$value', originalFieldName: 'arg_host_match_at_word_boundary' }),
      mojo.internal.StructField('arg_host_match_at_word_boundary_$value', 93, 7, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_host_match_at_word_boundary_$flag', originalFieldName: 'arg_host_match_at_word_boundary' }),
      mojo.internal.StructField('arg_total_host_match_length_$flag', 94, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_total_host_match_length_$value', originalFieldName: 'arg_total_host_match_length' }),
      mojo.internal.StructField('arg_total_path_match_length_$flag', 94, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_total_path_match_length_$value', originalFieldName: 'arg_total_path_match_length' }),
      mojo.internal.StructField('arg_total_query_or_ref_match_length_$flag', 94, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_total_query_or_ref_match_length_$value', originalFieldName: 'arg_total_query_or_ref_match_length' }),
      mojo.internal.StructField('arg_total_title_match_length_$flag', 94, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_total_title_match_length_$value', originalFieldName: 'arg_total_title_match_length' }),
      mojo.internal.StructField('arg_has_non_scheme_www_match_$flag', 94, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_has_non_scheme_www_match_$value', originalFieldName: 'arg_has_non_scheme_www_match' }),
      mojo.internal.StructField('arg_has_non_scheme_www_match_$value', 94, 5, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_has_non_scheme_www_match_$flag', originalFieldName: 'arg_has_non_scheme_www_match' }),
      mojo.internal.StructField('arg_num_input_terms_matched_by_title_$flag', 94, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_num_input_terms_matched_by_title_$value', originalFieldName: 'arg_num_input_terms_matched_by_title' }),
      mojo.internal.StructField('arg_num_input_terms_matched_by_url_$flag', 94, 7, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_num_input_terms_matched_by_url_$value', originalFieldName: 'arg_num_input_terms_matched_by_url' }),
      mojo.internal.StructField('arg_length_of_url_$flag', 95, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_length_of_url_$value', originalFieldName: 'arg_length_of_url' }),
      mojo.internal.StructField('arg_site_engagement_$flag', 95, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_site_engagement_$value', originalFieldName: 'arg_site_engagement' }),
      mojo.internal.StructField('arg_allowed_to_be_default_match_$flag', 95, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_allowed_to_be_default_match_$value', originalFieldName: 'arg_allowed_to_be_default_match' }),
      mojo.internal.StructField('arg_allowed_to_be_default_match_$value', 95, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_allowed_to_be_default_match_$flag', originalFieldName: 'arg_allowed_to_be_default_match' }),
      mojo.internal.StructField('arg_search_suggest_relevance_$flag', 95, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_search_suggest_relevance_$value', originalFieldName: 'arg_search_suggest_relevance' }),
      mojo.internal.StructField('arg_is_search_suggest_entity_$flag', 95, 5, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_search_suggest_entity_$value', originalFieldName: 'arg_is_search_suggest_entity' }),
      mojo.internal.StructField('arg_is_search_suggest_entity_$value', 95, 6, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_search_suggest_entity_$flag', originalFieldName: 'arg_is_search_suggest_entity' }),
      mojo.internal.StructField('arg_is_verbatim_$flag', 95, 7, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_verbatim_$value', originalFieldName: 'arg_is_verbatim' }),
      mojo.internal.StructField('arg_is_verbatim_$value', 96, 0, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_verbatim_$flag', originalFieldName: 'arg_is_verbatim' }),
      mojo.internal.StructField('arg_is_navsuggest_$flag', 96, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_navsuggest_$value', originalFieldName: 'arg_is_navsuggest' }),
      mojo.internal.StructField('arg_is_navsuggest_$value', 96, 2, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_navsuggest_$flag', originalFieldName: 'arg_is_navsuggest' }),
      mojo.internal.StructField('arg_is_search_suggest_tail_$flag', 96, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_search_suggest_tail_$value', originalFieldName: 'arg_is_search_suggest_tail' }),
      mojo.internal.StructField('arg_is_search_suggest_tail_$value', 96, 4, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_search_suggest_tail_$flag', originalFieldName: 'arg_is_search_suggest_tail' }),
      mojo.internal.StructField('arg_is_answer_suggest_$flag', 96, 5, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_answer_suggest_$value', originalFieldName: 'arg_is_answer_suggest' }),
      mojo.internal.StructField('arg_is_answer_suggest_$value', 96, 6, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_answer_suggest_$flag', originalFieldName: 'arg_is_answer_suggest' }),
      mojo.internal.StructField('arg_is_calculator_suggest_$flag', 96, 7, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_calculator_suggest_$value', originalFieldName: 'arg_is_calculator_suggest' }),
      mojo.internal.StructField('arg_is_calculator_suggest_$value', 97, 0, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_calculator_suggest_$flag', originalFieldName: 'arg_is_calculator_suggest' }),
    ],
    [[0, 112]]);

// Struct: AutocompleteMatch
mojo.internal.Struct(
    mojo.internal.bindings.mojom.AutocompleteMatchSpec, 'mojom.AutocompleteMatch', [
      mojo.internal.StructField('arg_provider_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_fill_into_edit', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_inline_autocompletion', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_destination_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_stripped_destination_url', 32, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon', 40, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_image', 48, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_contents', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_contents_class', 64, 0, mojo.internal.Array(mojo.internal.bindings.mojom.ACMatchClassificationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_description', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_description_class', 80, 0, mojo.internal.Array(mojo.internal.bindings.mojom.ACMatchClassificationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_answer', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_transition', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 104, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_aqs_type_subtypes', 112, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_associated_keyword', 120, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_keyword', 128, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_scoring_signals', 136, 0, mojo.internal.bindings.mojom.SignalsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_additional_info', 144, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_relevance', 152, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_duplicates', 156, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pedal_id', 160, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_provider_done', 164, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_deletable', 164, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_swap_contents_and_description', 164, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allowed_to_be_default_match', 164, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_search_type', 164, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_tab_match', 164, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_starred', 164, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_from_previous', 164, 7, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 176]]);

// Struct: AutocompleteResultsForProvider
mojo.internal.Struct(
    mojo.internal.bindings.mojom.AutocompleteResultsForProviderSpec, 'mojom.AutocompleteResultsForProvider', [
      mojo.internal.StructField('arg_provider_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_results', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojom.AutocompleteMatchSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OmniboxResponse
mojo.internal.Struct(
    mojo.internal.bindings.mojom.OmniboxResponseSpec, 'mojom.OmniboxResponse', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_host', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_input_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_combined_results', 24, 0, mojo.internal.Array(mojo.internal.bindings.mojom.AutocompleteMatchSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_results_by_provider', 32, 0, mojo.internal.Array(mojo.internal.bindings.mojom.AutocompleteResultsForProviderSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_cursor_position', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_time_since_omnibox_started_ms', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_done', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_typed_host', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: OmniboxPageHandler
mojo.internal.Struct(
    mojo.internal.bindings.mojom.OmniboxPageHandler_SetClientPage_ParamsSpec, 'mojom.OmniboxPageHandler_SetClientPage_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.mojom.OmniboxPageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.OmniboxPageHandler_StartOmniboxQuery_ParamsSpec, 'mojom.OmniboxPageHandler_StartOmniboxQuery_Params', [
      mojo.internal.StructField('arg_input_string', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_current_url', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_cursor_position', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_page_classification', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_reset_autocomplete_controller', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_zero_suggest', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_prevent_inline_autocomplete', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_prefer_keyword', 24, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.OmniboxPageHandler_GetMlModelVersion_ParamsSpec, 'mojom.OmniboxPageHandler_GetMlModelVersion_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.OmniboxPageHandler_GetMlModelVersion_ResponseParamsSpec, 'mojom.OmniboxPageHandler_GetMlModelVersion_ResponseParams', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.OmniboxPageHandler_StartMl_ParamsSpec, 'mojom.OmniboxPageHandler_StartMl_Params', [
      mojo.internal.StructField('arg_signals', 0, 0, mojo.internal.bindings.mojom.SignalsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.OmniboxPageHandler_StartMl_ResponseParamsSpec, 'mojom.OmniboxPageHandler_StartMl_ResponseParams', [
      mojo.internal.StructField('arg_score', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.mojom.OmniboxPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.mojom.OmniboxPageHandlerRemote = class {
  static get $interfaceName() {
    return 'mojom.OmniboxPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.mojom.OmniboxPageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.mojom.OmniboxPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setClientPage(arg_page) {
    return this.$.setClientPage(arg_page);
  }
  startOmniboxQuery(arg_input_string, arg_reset_autocomplete_controller, arg_cursor_position, arg_zero_suggest, arg_prevent_inline_autocomplete, arg_prefer_keyword, arg_current_url, arg_page_classification) {
    return this.$.startOmniboxQuery(arg_input_string, arg_reset_autocomplete_controller, arg_cursor_position, arg_zero_suggest, arg_prevent_inline_autocomplete, arg_prefer_keyword, arg_current_url, arg_page_classification);
  }
  getMlModelVersion() {
    return this.$.getMlModelVersion();
  }
  startMl(arg_signals) {
    return this.$.startMl(arg_signals);
  }
};

mojo.internal.bindings.mojom.OmniboxPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('mojom.OmniboxPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setClientPage(arg_page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.mojom.OmniboxPageHandler_SetClientPage_ParamsSpec,
      null,
      [arg_page],
      false);
  }

  startOmniboxQuery(arg_input_string, arg_reset_autocomplete_controller, arg_cursor_position, arg_zero_suggest, arg_prevent_inline_autocomplete, arg_prefer_keyword, arg_current_url, arg_page_classification) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.mojom.OmniboxPageHandler_StartOmniboxQuery_ParamsSpec,
      null,
      [arg_input_string, arg_reset_autocomplete_controller, arg_cursor_position, arg_zero_suggest, arg_prevent_inline_autocomplete, arg_prefer_keyword, arg_current_url, arg_page_classification],
      false);
  }

  getMlModelVersion() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.mojom.OmniboxPageHandler_GetMlModelVersion_ParamsSpec,
      mojo.internal.bindings.mojom.OmniboxPageHandler_GetMlModelVersion_ResponseParamsSpec,
      [],
      false);
  }

  startMl(arg_signals) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.mojom.OmniboxPageHandler_StartMl_ParamsSpec,
      mojo.internal.bindings.mojom.OmniboxPageHandler_StartMl_ResponseParamsSpec,
      [arg_signals],
      false);
  }

};

mojo.internal.bindings.mojom.OmniboxPageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.mojom.OmniboxPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.OmniboxPageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.mojom.OmniboxPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('mojom.OmniboxPageHandler', [
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
        
        // Try Method 0: SetClientPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.OmniboxPageHandler_SetClientPage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetClientPage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StartOmniboxQuery
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.OmniboxPageHandler_StartOmniboxQuery_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartOmniboxQuery (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetMlModelVersion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.OmniboxPageHandler_GetMlModelVersion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMlModelVersion (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: StartMl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.OmniboxPageHandler_StartMl_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartMl (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.OmniboxPageHandler_SetClientPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setClientPage');
          const result = this.impl.setClientPage(params.arg_page);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.OmniboxPageHandler_StartOmniboxQuery_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startOmniboxQuery');
          const result = this.impl.startOmniboxQuery(params.arg_input_string, params.arg_reset_autocomplete_controller, params.arg_cursor_position, params.arg_zero_suggest, params.arg_prevent_inline_autocomplete, params.arg_prefer_keyword, params.arg_current_url, params.arg_page_classification);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.OmniboxPageHandler_GetMlModelVersion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMlModelVersion');
          const result = this.impl.getMlModelVersion();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mojom.OmniboxPageHandler_GetMlModelVersion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetMlModelVersion FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.OmniboxPageHandler_StartMl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startMl');
          const result = this.impl.startMl(params.arg_signals);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mojom.OmniboxPageHandler_StartMl_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartMl FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.mojom.OmniboxPageHandlerReceiver = mojo.internal.bindings.mojom.OmniboxPageHandlerReceiver;

mojo.internal.bindings.mojom.OmniboxPageHandlerPtr = mojo.internal.bindings.mojom.OmniboxPageHandlerRemote;
mojo.internal.bindings.mojom.OmniboxPageHandlerRequest = mojo.internal.bindings.mojom.OmniboxPageHandlerPendingReceiver;


// Interface: OmniboxPage
mojo.internal.Struct(
    mojo.internal.bindings.mojom.OmniboxPage_HandleNewAutocompleteQuery_ParamsSpec, 'mojom.OmniboxPage_HandleNewAutocompleteQuery_Params', [
      mojo.internal.StructField('arg_autocomplete_controller_type', 0, 0, mojo.internal.bindings.mojom.AutocompleteControllerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_input_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.OmniboxPage_HandleNewAutocompleteResponse_ParamsSpec, 'mojom.OmniboxPage_HandleNewAutocompleteResponse_Params', [
      mojo.internal.StructField('arg_autocomplete_controller_type', 0, 0, mojo.internal.bindings.mojom.AutocompleteControllerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_response', 8, 0, mojo.internal.bindings.mojom.OmniboxResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.OmniboxPage_HandleNewMlResponse_ParamsSpec, 'mojom.OmniboxPage_HandleNewMlResponse_Params', [
      mojo.internal.StructField('arg_autocomplete_controller_type', 0, 0, mojo.internal.bindings.mojom.AutocompleteControllerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_input_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_matches', 16, 0, mojo.internal.Array(mojo.internal.bindings.mojom.AutocompleteMatchSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.OmniboxPage_HandleAnswerIconImageData_ParamsSpec, 'mojom.OmniboxPage_HandleAnswerIconImageData_Params', [
      mojo.internal.StructField('arg_autocomplete_controller_type', 0, 0, mojo.internal.bindings.mojom.AutocompleteControllerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_data', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.mojom.OmniboxPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.mojom.OmniboxPageRemote = class {
  static get $interfaceName() {
    return 'mojom.OmniboxPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.mojom.OmniboxPagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.mojom.OmniboxPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  handleNewAutocompleteQuery(arg_autocomplete_controller_type, arg_input_text) {
    return this.$.handleNewAutocompleteQuery(arg_autocomplete_controller_type, arg_input_text);
  }
  handleNewAutocompleteResponse(arg_autocomplete_controller_type, arg_response) {
    return this.$.handleNewAutocompleteResponse(arg_autocomplete_controller_type, arg_response);
  }
  handleNewMlResponse(arg_autocomplete_controller_type, arg_input_text, arg_matches) {
    return this.$.handleNewMlResponse(arg_autocomplete_controller_type, arg_input_text, arg_matches);
  }
  handleAnswerIconImageData(arg_autocomplete_controller_type, arg_image_url, arg_image_data) {
    return this.$.handleAnswerIconImageData(arg_autocomplete_controller_type, arg_image_url, arg_image_data);
  }
};

mojo.internal.bindings.mojom.OmniboxPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('mojom.OmniboxPage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  handleNewAutocompleteQuery(arg_autocomplete_controller_type, arg_input_text) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.mojom.OmniboxPage_HandleNewAutocompleteQuery_ParamsSpec,
      null,
      [arg_autocomplete_controller_type, arg_input_text],
      false);
  }

  handleNewAutocompleteResponse(arg_autocomplete_controller_type, arg_response) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.mojom.OmniboxPage_HandleNewAutocompleteResponse_ParamsSpec,
      null,
      [arg_autocomplete_controller_type, arg_response],
      false);
  }

  handleNewMlResponse(arg_autocomplete_controller_type, arg_input_text, arg_matches) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.mojom.OmniboxPage_HandleNewMlResponse_ParamsSpec,
      null,
      [arg_autocomplete_controller_type, arg_input_text, arg_matches],
      false);
  }

  handleAnswerIconImageData(arg_autocomplete_controller_type, arg_image_url, arg_image_data) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.mojom.OmniboxPage_HandleAnswerIconImageData_ParamsSpec,
      null,
      [arg_autocomplete_controller_type, arg_image_url, arg_image_data],
      false);
  }

};

mojo.internal.bindings.mojom.OmniboxPage.getRemote = function() {
  let remote = new mojo.internal.bindings.mojom.OmniboxPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.OmniboxPage',
    'context');
  return remote.$;
};

mojo.internal.bindings.mojom.OmniboxPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('mojom.OmniboxPage', [
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
        
        // Try Method 0: HandleNewAutocompleteQuery
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.OmniboxPage_HandleNewAutocompleteQuery_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleNewAutocompleteQuery (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: HandleNewAutocompleteResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.OmniboxPage_HandleNewAutocompleteResponse_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleNewAutocompleteResponse (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: HandleNewMlResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.OmniboxPage_HandleNewMlResponse_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleNewMlResponse (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: HandleAnswerIconImageData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.OmniboxPage_HandleAnswerIconImageData_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleAnswerIconImageData (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.OmniboxPage_HandleNewAutocompleteQuery_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleNewAutocompleteQuery');
          const result = this.impl.handleNewAutocompleteQuery(params.arg_autocomplete_controller_type, params.arg_input_text);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.OmniboxPage_HandleNewAutocompleteResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleNewAutocompleteResponse');
          const result = this.impl.handleNewAutocompleteResponse(params.arg_autocomplete_controller_type, params.arg_response);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.OmniboxPage_HandleNewMlResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleNewMlResponse');
          const result = this.impl.handleNewMlResponse(params.arg_autocomplete_controller_type, params.arg_input_text, params.arg_matches);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.OmniboxPage_HandleAnswerIconImageData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleAnswerIconImageData');
          const result = this.impl.handleAnswerIconImageData(params.arg_autocomplete_controller_type, params.arg_image_url, params.arg_image_data);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.mojom.OmniboxPageReceiver = mojo.internal.bindings.mojom.OmniboxPageReceiver;

mojo.internal.bindings.mojom.OmniboxPagePtr = mojo.internal.bindings.mojom.OmniboxPageRemote;
mojo.internal.bindings.mojom.OmniboxPageRequest = mojo.internal.bindings.mojom.OmniboxPagePendingReceiver;

