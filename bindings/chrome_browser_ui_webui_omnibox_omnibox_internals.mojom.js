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
var mojom = mojom || {};
var url = url || {};

mojom.AutocompleteControllerTypeSpec = { $: mojo.internal.Enum() };
mojom.ACMatchClassificationSpec = { $: {} };
mojom.SignalsSpec = { $: {} };
mojom.AutocompleteMatchSpec = { $: {} };
mojom.AutocompleteResultsForProviderSpec = { $: {} };
mojom.OmniboxResponseSpec = { $: {} };
mojom.OmniboxPageHandler = {};
mojom.OmniboxPageHandler.$interfaceName = 'mojom.OmniboxPageHandler';
mojom.OmniboxPageHandler_SetClientPage_ParamsSpec = { $: {} };
mojom.OmniboxPageHandler_StartOmniboxQuery_ParamsSpec = { $: {} };
mojom.OmniboxPageHandler_GetMlModelVersion_ParamsSpec = { $: {} };
mojom.OmniboxPageHandler_GetMlModelVersion_ResponseParamsSpec = { $: {} };
mojom.OmniboxPageHandler_StartMl_ParamsSpec = { $: {} };
mojom.OmniboxPageHandler_StartMl_ResponseParamsSpec = { $: {} };
mojom.OmniboxPage = {};
mojom.OmniboxPage.$interfaceName = 'mojom.OmniboxPage';
mojom.OmniboxPage_HandleNewAutocompleteQuery_ParamsSpec = { $: {} };
mojom.OmniboxPage_HandleNewAutocompleteResponse_ParamsSpec = { $: {} };
mojom.OmniboxPage_HandleNewMlResponse_ParamsSpec = { $: {} };
mojom.OmniboxPage_HandleAnswerIconImageData_ParamsSpec = { $: {} };

// Enum: AutocompleteControllerType
mojom.AutocompleteControllerType = {
  kBrowser: 0,
  kDebug: 1,
  kMlDisabledDebug: 2,
};

// Struct: ACMatchClassification
mojo.internal.Struct(
    mojom.ACMatchClassificationSpec, 'mojom.ACMatchClassification', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('style', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Signals
mojo.internal.Struct(
    mojom.SignalsSpec, 'mojom.Signals', [
      mojo.internal.StructField('elapsed_time_last_visit_secs_$value', 0, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'elapsed_time_last_visit_secs_$flag', originalFieldName: 'elapsed_time_last_visit_secs' }),
      mojo.internal.StructField('elapsed_time_last_shortcut_visit_sec_$value', 8, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'elapsed_time_last_shortcut_visit_sec_$flag', originalFieldName: 'elapsed_time_last_shortcut_visit_sec' }),
      mojo.internal.StructField('typed_count_$value', 16, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'typed_count_$flag', originalFieldName: 'typed_count' }),
      mojo.internal.StructField('visit_count_$value', 20, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'visit_count_$flag', originalFieldName: 'visit_count' }),
      mojo.internal.StructField('shortcut_visit_count_$value', 24, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'shortcut_visit_count_$flag', originalFieldName: 'shortcut_visit_count' }),
      mojo.internal.StructField('shortest_shortcut_len_$value', 28, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'shortest_shortcut_len_$flag', originalFieldName: 'shortest_shortcut_len' }),
      mojo.internal.StructField('num_bookmarks_of_url_$value', 32, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'num_bookmarks_of_url_$flag', originalFieldName: 'num_bookmarks_of_url' }),
      mojo.internal.StructField('first_bookmark_title_match_position_$value', 36, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'first_bookmark_title_match_position_$flag', originalFieldName: 'first_bookmark_title_match_position' }),
      mojo.internal.StructField('total_bookmark_title_match_length_$value', 40, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'total_bookmark_title_match_length_$flag', originalFieldName: 'total_bookmark_title_match_length' }),
      mojo.internal.StructField('num_input_terms_matched_by_bookmark_title_$value', 44, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'num_input_terms_matched_by_bookmark_title_$flag', originalFieldName: 'num_input_terms_matched_by_bookmark_title' }),
      mojo.internal.StructField('first_url_match_position_$value', 48, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'first_url_match_position_$flag', originalFieldName: 'first_url_match_position' }),
      mojo.internal.StructField('total_url_match_length_$value', 52, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'total_url_match_length_$flag', originalFieldName: 'total_url_match_length' }),
      mojo.internal.StructField('total_host_match_length_$value', 56, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'total_host_match_length_$flag', originalFieldName: 'total_host_match_length' }),
      mojo.internal.StructField('total_path_match_length_$value', 60, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'total_path_match_length_$flag', originalFieldName: 'total_path_match_length' }),
      mojo.internal.StructField('total_query_or_ref_match_length_$value', 64, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'total_query_or_ref_match_length_$flag', originalFieldName: 'total_query_or_ref_match_length' }),
      mojo.internal.StructField('total_title_match_length_$value', 68, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'total_title_match_length_$flag', originalFieldName: 'total_title_match_length' }),
      mojo.internal.StructField('num_input_terms_matched_by_title_$value', 72, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'num_input_terms_matched_by_title_$flag', originalFieldName: 'num_input_terms_matched_by_title' }),
      mojo.internal.StructField('num_input_terms_matched_by_url_$value', 76, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'num_input_terms_matched_by_url_$flag', originalFieldName: 'num_input_terms_matched_by_url' }),
      mojo.internal.StructField('length_of_url_$value', 80, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'length_of_url_$flag', originalFieldName: 'length_of_url' }),
      mojo.internal.StructField('site_engagement_$value', 84, 0, mojo.internal.Float, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'site_engagement_$flag', originalFieldName: 'site_engagement' }),
      mojo.internal.StructField('search_suggest_relevance_$value', 88, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'search_suggest_relevance_$flag', originalFieldName: 'search_suggest_relevance' }),
      mojo.internal.StructField('typed_count_$flag', 92, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'typed_count_$value', originalFieldName: 'typed_count' }),
      mojo.internal.StructField('visit_count_$flag', 92, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'visit_count_$value', originalFieldName: 'visit_count' }),
      mojo.internal.StructField('elapsed_time_last_visit_secs_$flag', 92, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'elapsed_time_last_visit_secs_$value', originalFieldName: 'elapsed_time_last_visit_secs' }),
      mojo.internal.StructField('shortcut_visit_count_$flag', 92, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'shortcut_visit_count_$value', originalFieldName: 'shortcut_visit_count' }),
      mojo.internal.StructField('shortest_shortcut_len_$flag', 92, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'shortest_shortcut_len_$value', originalFieldName: 'shortest_shortcut_len' }),
      mojo.internal.StructField('elapsed_time_last_shortcut_visit_sec_$flag', 92, 5, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'elapsed_time_last_shortcut_visit_sec_$value', originalFieldName: 'elapsed_time_last_shortcut_visit_sec' }),
      mojo.internal.StructField('is_host_only_$flag', 92, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_host_only_$value', originalFieldName: 'is_host_only' }),
      mojo.internal.StructField('is_host_only_$value', 92, 7, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_host_only_$flag', originalFieldName: 'is_host_only' }),
      mojo.internal.StructField('num_bookmarks_of_url_$flag', 93, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'num_bookmarks_of_url_$value', originalFieldName: 'num_bookmarks_of_url' }),
      mojo.internal.StructField('first_bookmark_title_match_position_$flag', 93, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'first_bookmark_title_match_position_$value', originalFieldName: 'first_bookmark_title_match_position' }),
      mojo.internal.StructField('total_bookmark_title_match_length_$flag', 93, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'total_bookmark_title_match_length_$value', originalFieldName: 'total_bookmark_title_match_length' }),
      mojo.internal.StructField('num_input_terms_matched_by_bookmark_title_$flag', 93, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'num_input_terms_matched_by_bookmark_title_$value', originalFieldName: 'num_input_terms_matched_by_bookmark_title' }),
      mojo.internal.StructField('first_url_match_position_$flag', 93, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'first_url_match_position_$value', originalFieldName: 'first_url_match_position' }),
      mojo.internal.StructField('total_url_match_length_$flag', 93, 5, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'total_url_match_length_$value', originalFieldName: 'total_url_match_length' }),
      mojo.internal.StructField('host_match_at_word_boundary_$flag', 93, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'host_match_at_word_boundary_$value', originalFieldName: 'host_match_at_word_boundary' }),
      mojo.internal.StructField('host_match_at_word_boundary_$value', 93, 7, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'host_match_at_word_boundary_$flag', originalFieldName: 'host_match_at_word_boundary' }),
      mojo.internal.StructField('total_host_match_length_$flag', 94, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'total_host_match_length_$value', originalFieldName: 'total_host_match_length' }),
      mojo.internal.StructField('total_path_match_length_$flag', 94, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'total_path_match_length_$value', originalFieldName: 'total_path_match_length' }),
      mojo.internal.StructField('total_query_or_ref_match_length_$flag', 94, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'total_query_or_ref_match_length_$value', originalFieldName: 'total_query_or_ref_match_length' }),
      mojo.internal.StructField('total_title_match_length_$flag', 94, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'total_title_match_length_$value', originalFieldName: 'total_title_match_length' }),
      mojo.internal.StructField('has_non_scheme_www_match_$flag', 94, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'has_non_scheme_www_match_$value', originalFieldName: 'has_non_scheme_www_match' }),
      mojo.internal.StructField('has_non_scheme_www_match_$value', 94, 5, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'has_non_scheme_www_match_$flag', originalFieldName: 'has_non_scheme_www_match' }),
      mojo.internal.StructField('num_input_terms_matched_by_title_$flag', 94, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'num_input_terms_matched_by_title_$value', originalFieldName: 'num_input_terms_matched_by_title' }),
      mojo.internal.StructField('num_input_terms_matched_by_url_$flag', 94, 7, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'num_input_terms_matched_by_url_$value', originalFieldName: 'num_input_terms_matched_by_url' }),
      mojo.internal.StructField('length_of_url_$flag', 95, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'length_of_url_$value', originalFieldName: 'length_of_url' }),
      mojo.internal.StructField('site_engagement_$flag', 95, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'site_engagement_$value', originalFieldName: 'site_engagement' }),
      mojo.internal.StructField('allowed_to_be_default_match_$flag', 95, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'allowed_to_be_default_match_$value', originalFieldName: 'allowed_to_be_default_match' }),
      mojo.internal.StructField('allowed_to_be_default_match_$value', 95, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'allowed_to_be_default_match_$flag', originalFieldName: 'allowed_to_be_default_match' }),
      mojo.internal.StructField('search_suggest_relevance_$flag', 95, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'search_suggest_relevance_$value', originalFieldName: 'search_suggest_relevance' }),
      mojo.internal.StructField('is_search_suggest_entity_$flag', 95, 5, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_search_suggest_entity_$value', originalFieldName: 'is_search_suggest_entity' }),
      mojo.internal.StructField('is_search_suggest_entity_$value', 95, 6, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_search_suggest_entity_$flag', originalFieldName: 'is_search_suggest_entity' }),
      mojo.internal.StructField('is_verbatim_$flag', 95, 7, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_verbatim_$value', originalFieldName: 'is_verbatim' }),
      mojo.internal.StructField('is_verbatim_$value', 96, 0, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_verbatim_$flag', originalFieldName: 'is_verbatim' }),
      mojo.internal.StructField('is_navsuggest_$flag', 96, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_navsuggest_$value', originalFieldName: 'is_navsuggest' }),
      mojo.internal.StructField('is_navsuggest_$value', 96, 2, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_navsuggest_$flag', originalFieldName: 'is_navsuggest' }),
      mojo.internal.StructField('is_search_suggest_tail_$flag', 96, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_search_suggest_tail_$value', originalFieldName: 'is_search_suggest_tail' }),
      mojo.internal.StructField('is_search_suggest_tail_$value', 96, 4, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_search_suggest_tail_$flag', originalFieldName: 'is_search_suggest_tail' }),
      mojo.internal.StructField('is_answer_suggest_$flag', 96, 5, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_answer_suggest_$value', originalFieldName: 'is_answer_suggest' }),
      mojo.internal.StructField('is_answer_suggest_$value', 96, 6, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_answer_suggest_$flag', originalFieldName: 'is_answer_suggest' }),
      mojo.internal.StructField('is_calculator_suggest_$flag', 96, 7, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_calculator_suggest_$value', originalFieldName: 'is_calculator_suggest' }),
      mojo.internal.StructField('is_calculator_suggest_$value', 97, 0, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_calculator_suggest_$flag', originalFieldName: 'is_calculator_suggest' }),
    ],
    [[0, 112]]);

// Struct: AutocompleteMatch
mojo.internal.Struct(
    mojom.AutocompleteMatchSpec, 'mojom.AutocompleteMatch', [
      mojo.internal.StructField('provider_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('fill_into_edit', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('inline_autocompletion', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('destination_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('stripped_destination_url', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('icon', 40, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image', 48, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('contents', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('contents_class', 64, 0, mojo.internal.Array(mojom.ACMatchClassificationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('description', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description_class', 80, 0, mojo.internal.Array(mojom.ACMatchClassificationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('answer', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('transition', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 104, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('aqs_type_subtypes', 112, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('associated_keyword', 120, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('keyword', 128, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('scoring_signals', 136, 0, mojom.SignalsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('additional_info', 144, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('relevance', 152, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('duplicates', 156, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('pedal_id', 160, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('provider_done', 164, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('deletable', 164, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('swap_contents_and_description', 164, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allowed_to_be_default_match', 164, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_search_type', 164, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_tab_match', 164, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('starred', 164, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('from_previous', 164, 7, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 176]]);

// Struct: AutocompleteResultsForProvider
mojo.internal.Struct(
    mojom.AutocompleteResultsForProviderSpec, 'mojom.AutocompleteResultsForProvider', [
      mojo.internal.StructField('provider_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('results', 8, 0, mojo.internal.Array(mojom.AutocompleteMatchSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OmniboxResponse
mojo.internal.Struct(
    mojom.OmniboxResponseSpec, 'mojom.OmniboxResponse', [
      mojo.internal.StructField('type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('input_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('combined_results', 24, 0, mojo.internal.Array(mojom.AutocompleteMatchSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('results_by_provider', 32, 0, mojo.internal.Array(mojom.AutocompleteResultsForProviderSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('cursor_position', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('time_since_omnibox_started_ms', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('done', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_typed_host', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: OmniboxPageHandler
mojo.internal.Struct(
    mojom.OmniboxPageHandler_SetClientPage_ParamsSpec, 'mojom.OmniboxPageHandler_SetClientPage_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(mojom.OmniboxPageSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.OmniboxPageHandler_StartOmniboxQuery_ParamsSpec, 'mojom.OmniboxPageHandler_StartOmniboxQuery_Params', [
      mojo.internal.StructField('input_string', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('current_url', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cursor_position', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('page_classification', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('reset_autocomplete_controller', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('zero_suggest', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prevent_inline_autocomplete', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prefer_keyword', 24, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojom.OmniboxPageHandler_GetMlModelVersion_ParamsSpec, 'mojom.OmniboxPageHandler_GetMlModelVersion_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.OmniboxPageHandler_GetMlModelVersion_ResponseParamsSpec, 'mojom.OmniboxPageHandler_GetMlModelVersion_ResponseParams', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.OmniboxPageHandler_StartMl_ParamsSpec, 'mojom.OmniboxPageHandler_StartMl_Params', [
      mojo.internal.StructField('signals', 0, 0, mojom.SignalsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.OmniboxPageHandler_StartMl_ResponseParamsSpec, 'mojom.OmniboxPageHandler_StartMl_ResponseParams', [
      mojo.internal.StructField('score', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojom.OmniboxPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.OmniboxPageHandlerRemote = class {
  static get $interfaceName() {
    return 'mojom.OmniboxPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.OmniboxPageHandlerPendingReceiver,
      handle);
    this.$ = new mojom.OmniboxPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setClientPage(page) {
    return this.$.setClientPage(page);
  }
  startOmniboxQuery(input_string, reset_autocomplete_controller, cursor_position, zero_suggest, prevent_inline_autocomplete, prefer_keyword, current_url, page_classification) {
    return this.$.startOmniboxQuery(input_string, reset_autocomplete_controller, cursor_position, zero_suggest, prevent_inline_autocomplete, prefer_keyword, current_url, page_classification);
  }
  getMlModelVersion() {
    return this.$.getMlModelVersion();
  }
  startMl(signals) {
    return this.$.startMl(signals);
  }
};

mojom.OmniboxPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OmniboxPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setClientPage(page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojom.OmniboxPageHandler_SetClientPage_ParamsSpec,
      null,
      [page],
      false);
  }

  startOmniboxQuery(input_string, reset_autocomplete_controller, cursor_position, zero_suggest, prevent_inline_autocomplete, prefer_keyword, current_url, page_classification) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojom.OmniboxPageHandler_StartOmniboxQuery_ParamsSpec,
      null,
      [input_string, reset_autocomplete_controller, cursor_position, zero_suggest, prevent_inline_autocomplete, prefer_keyword, current_url, page_classification],
      false);
  }

  getMlModelVersion() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojom.OmniboxPageHandler_GetMlModelVersion_ParamsSpec,
      mojom.OmniboxPageHandler_GetMlModelVersion_ResponseParamsSpec,
      [],
      false);
  }

  startMl(signals) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojom.OmniboxPageHandler_StartMl_ParamsSpec,
      mojom.OmniboxPageHandler_StartMl_ResponseParamsSpec,
      [signals],
      false);
  }

};

mojom.OmniboxPageHandler.getRemote = function() {
  let remote = new mojom.OmniboxPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.OmniboxPageHandler',
    'context');
  return remote.$;
};

mojom.OmniboxPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OmniboxPageHandler', [
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
             decoder.decodeStructInline(mojom.OmniboxPageHandler_SetClientPage_ParamsSpec);
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
             decoder.decodeStructInline(mojom.OmniboxPageHandler_StartOmniboxQuery_ParamsSpec);
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
             decoder.decodeStructInline(mojom.OmniboxPageHandler_GetMlModelVersion_ParamsSpec);
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
             decoder.decodeStructInline(mojom.OmniboxPageHandler_StartMl_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojom.OmniboxPageHandler_SetClientPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setClientPage');
          const result = this.impl.setClientPage(params.page);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.OmniboxPageHandler_StartOmniboxQuery_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startOmniboxQuery');
          const result = this.impl.startOmniboxQuery(params.input_string, params.reset_autocomplete_controller, params.cursor_position, params.zero_suggest, params.prevent_inline_autocomplete, params.prefer_keyword, params.current_url, params.page_classification);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.OmniboxPageHandler_GetMlModelVersion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMlModelVersion');
          const result = this.impl.getMlModelVersion();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.OmniboxPageHandler_GetMlModelVersion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetMlModelVersion FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.OmniboxPageHandler_StartMl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startMl');
          const result = this.impl.startMl(params.signals);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.OmniboxPageHandler_StartMl_ResponseParamsSpec, header, rawHeader);
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

mojom.OmniboxPageHandlerReceiver = mojom.OmniboxPageHandlerReceiver;

mojom.OmniboxPageHandlerPtr = mojom.OmniboxPageHandlerRemote;
mojom.OmniboxPageHandlerRequest = mojom.OmniboxPageHandlerPendingReceiver;


// Interface: OmniboxPage
mojo.internal.Struct(
    mojom.OmniboxPage_HandleNewAutocompleteQuery_ParamsSpec, 'mojom.OmniboxPage_HandleNewAutocompleteQuery_Params', [
      mojo.internal.StructField('autocomplete_controller_type', 0, 0, mojom.AutocompleteControllerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('input_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojom.OmniboxPage_HandleNewAutocompleteResponse_ParamsSpec, 'mojom.OmniboxPage_HandleNewAutocompleteResponse_Params', [
      mojo.internal.StructField('autocomplete_controller_type', 0, 0, mojom.AutocompleteControllerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response', 8, 0, mojom.OmniboxResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojom.OmniboxPage_HandleNewMlResponse_ParamsSpec, 'mojom.OmniboxPage_HandleNewMlResponse_Params', [
      mojo.internal.StructField('autocomplete_controller_type', 0, 0, mojom.AutocompleteControllerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('input_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('matches', 16, 0, mojo.internal.Array(mojom.AutocompleteMatchSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojom.OmniboxPage_HandleAnswerIconImageData_ParamsSpec, 'mojom.OmniboxPage_HandleAnswerIconImageData_Params', [
      mojo.internal.StructField('autocomplete_controller_type', 0, 0, mojom.AutocompleteControllerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_data', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojom.OmniboxPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.OmniboxPageRemote = class {
  static get $interfaceName() {
    return 'mojom.OmniboxPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.OmniboxPagePendingReceiver,
      handle);
    this.$ = new mojom.OmniboxPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  handleNewAutocompleteQuery(autocomplete_controller_type, input_text) {
    return this.$.handleNewAutocompleteQuery(autocomplete_controller_type, input_text);
  }
  handleNewAutocompleteResponse(autocomplete_controller_type, response) {
    return this.$.handleNewAutocompleteResponse(autocomplete_controller_type, response);
  }
  handleNewMlResponse(autocomplete_controller_type, input_text, matches) {
    return this.$.handleNewMlResponse(autocomplete_controller_type, input_text, matches);
  }
  handleAnswerIconImageData(autocomplete_controller_type, image_url, image_data) {
    return this.$.handleAnswerIconImageData(autocomplete_controller_type, image_url, image_data);
  }
};

mojom.OmniboxPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OmniboxPage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  handleNewAutocompleteQuery(autocomplete_controller_type, input_text) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojom.OmniboxPage_HandleNewAutocompleteQuery_ParamsSpec,
      null,
      [autocomplete_controller_type, input_text],
      false);
  }

  handleNewAutocompleteResponse(autocomplete_controller_type, response) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojom.OmniboxPage_HandleNewAutocompleteResponse_ParamsSpec,
      null,
      [autocomplete_controller_type, response],
      false);
  }

  handleNewMlResponse(autocomplete_controller_type, input_text, matches) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojom.OmniboxPage_HandleNewMlResponse_ParamsSpec,
      null,
      [autocomplete_controller_type, input_text, matches],
      false);
  }

  handleAnswerIconImageData(autocomplete_controller_type, image_url, image_data) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojom.OmniboxPage_HandleAnswerIconImageData_ParamsSpec,
      null,
      [autocomplete_controller_type, image_url, image_data],
      false);
  }

};

mojom.OmniboxPage.getRemote = function() {
  let remote = new mojom.OmniboxPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.OmniboxPage',
    'context');
  return remote.$;
};

mojom.OmniboxPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OmniboxPage', [
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
             decoder.decodeStructInline(mojom.OmniboxPage_HandleNewAutocompleteQuery_ParamsSpec);
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
             decoder.decodeStructInline(mojom.OmniboxPage_HandleNewAutocompleteResponse_ParamsSpec);
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
             decoder.decodeStructInline(mojom.OmniboxPage_HandleNewMlResponse_ParamsSpec);
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
             decoder.decodeStructInline(mojom.OmniboxPage_HandleAnswerIconImageData_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojom.OmniboxPage_HandleNewAutocompleteQuery_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleNewAutocompleteQuery');
          const result = this.impl.handleNewAutocompleteQuery(params.autocomplete_controller_type, params.input_text);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.OmniboxPage_HandleNewAutocompleteResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleNewAutocompleteResponse');
          const result = this.impl.handleNewAutocompleteResponse(params.autocomplete_controller_type, params.response);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.OmniboxPage_HandleNewMlResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleNewMlResponse');
          const result = this.impl.handleNewMlResponse(params.autocomplete_controller_type, params.input_text, params.matches);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.OmniboxPage_HandleAnswerIconImageData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleAnswerIconImageData');
          const result = this.impl.handleAnswerIconImageData(params.autocomplete_controller_type, params.image_url, params.image_data);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojom.OmniboxPageReceiver = mojom.OmniboxPageReceiver;

mojom.OmniboxPagePtr = mojom.OmniboxPageRemote;
mojom.OmniboxPageRequest = mojom.OmniboxPagePendingReceiver;

