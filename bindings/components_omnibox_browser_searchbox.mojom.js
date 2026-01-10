// Auto-generated MojoJS binding
// Source: chromium_src/components/omnibox/browser/searchbox.mojom
// Module: searchbox.mojom

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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
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
var searchbox = searchbox || {};
searchbox.mojom = searchbox.mojom || {};
var omnibox = omnibox || {};
var composebox_query = composebox_query || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};
var url = url || {};

searchbox.mojom.ToolModeSpec = { $: mojo.internal.Enum() };
searchbox.mojom.SideTypeSpec = { $: mojo.internal.Enum() };
searchbox.mojom.RenderTypeSpec = { $: mojo.internal.Enum() };
searchbox.mojom.SelectionLineStateSpec = { $: mojo.internal.Enum() };
searchbox.mojom.SearchContextAttachmentSpec = { $: {} };
searchbox.mojom.ACMatchClassificationSpec = { $: {} };
searchbox.mojom.ActionSpec = { $: {} };
searchbox.mojom.SuggestionAnswerSpec = { $: {} };
searchbox.mojom.AutocompleteMatchSpec = { $: {} };
searchbox.mojom.TabInfoSpec = { $: {} };
searchbox.mojom.FileAttachmentSpec = { $: {} };
searchbox.mojom.TabAttachmentSpec = { $: {} };
searchbox.mojom.SearchContextSpec = { $: {} };
searchbox.mojom.SelectedFileInfoSpec = { $: {} };
searchbox.mojom.SuggestionGroupSpec = { $: {} };
searchbox.mojom.AutocompleteResultSpec = { $: {} };
searchbox.mojom.OmniboxPopupSelectionSpec = { $: {} };
searchbox.mojom.PlaceholderConfigSpec = { $: {} };
searchbox.mojom.PageHandler = {};
searchbox.mojom.PageHandler.$interfaceName = 'searchbox.mojom.PageHandler';
searchbox.mojom.PageHandler_SetPage_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_ShowContextMenu_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParamsSpec = { $: {} };
searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_GetRecentTabs_ResponseParamsSpec = { $: {} };
searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_GetTabPreview_ResponseParamsSpec = { $: {} };
searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_AddFileContext_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_AddFileContext_ResponseParamsSpec = { $: {} };
searchbox.mojom.PageHandler_AddTabContext_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_AddTabContext_ResponseParamsSpec = { $: {} };
searchbox.mojom.PageHandler_DeleteContext_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_ClearFiles_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec = { $: {} };
searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec = { $: {} };
searchbox.mojom.Page = {};
searchbox.mojom.Page.$interfaceName = 'searchbox.mojom.Page';
searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec = { $: {} };
searchbox.mojom.Page_UpdateSelection_ParamsSpec = { $: {} };
searchbox.mojom.Page_SetKeywordSelected_ParamsSpec = { $: {} };
searchbox.mojom.Page_OnShow_ParamsSpec = { $: {} };
searchbox.mojom.Page_SetInputText_ParamsSpec = { $: {} };
searchbox.mojom.Page_SetThumbnail_ParamsSpec = { $: {} };
searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec = { $: {} };
searchbox.mojom.Page_OnTabStripChanged_ParamsSpec = { $: {} };
searchbox.mojom.Page_AddFileContext_ParamsSpec = { $: {} };
searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec = { $: {} };
searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec = { $: {} };
searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec = { $: {} };
searchbox.mojom.Page_UpdateAimEligibility_ParamsSpec = { $: {} };
searchbox.mojom.Page_OnShowAiModePrefChanged_ParamsSpec = { $: {} };

// Enum: ToolMode
searchbox.mojom.ToolMode = {
  kDefault: 0,
  kDeepSearch: 1,
  kCreateImage: 4,
};

// Enum: SideType
searchbox.mojom.SideType = {
  kDefaultPrimary: 0,
  kSecondary: 1,
};

// Enum: RenderType
searchbox.mojom.RenderType = {
  kDefaultVertical: 0,
  kHorizontal: 1,
  kGrid: 2,
};

// Enum: SelectionLineState
searchbox.mojom.SelectionLineState = {
  kNormal: 1,
  kKeywordMode: 2,
  kFocusedButtonAction: 3,
  kFocusedButtonRemoveSuggestion: 4,
};

// Union: SearchContextAttachment
mojo.internal.Union(
    searchbox.mojom.SearchContextAttachmentSpec, 'searchbox.mojom.SearchContextAttachment', {
      'file_attachment': {
        'ordinal': 0,
        'type': searchbox.mojom.FileAttachmentSpec.$,
        'nullable': false,
      },
      'tab_attachment': {
        'ordinal': 1,
        'type': searchbox.mojom.TabAttachmentSpec.$,
        'nullable': false,
      },
    });

// Struct: ACMatchClassification
mojo.internal.Struct(
    searchbox.mojom.ACMatchClassificationSpec, 'searchbox.mojom.ACMatchClassification', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('style', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Action
mojo.internal.Struct(
    searchbox.mojom.ActionSpec, 'searchbox.mojom.Action', [
      mojo.internal.StructField('hint', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('suggestion_contents', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon_path', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('a11y_label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SuggestionAnswer
mojo.internal.Struct(
    searchbox.mojom.SuggestionAnswerSpec, 'searchbox.mojom.SuggestionAnswer', [
      mojo.internal.StructField('first_line', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('second_line', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AutocompleteMatch
mojo.internal.Struct(
    searchbox.mojom.AutocompleteMatchSpec, 'searchbox.mojom.AutocompleteMatch', [
      mojo.internal.StructField('a11y_label', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('actions', 8, 0, mojo.internal.Array(searchbox.mojom.ActionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('answer', 16, 0, searchbox.mojom.SuggestionAnswerSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('contents', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('contents_class', 32, 0, mojo.internal.Array(searchbox.mojom.ACMatchClassificationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('description', 40, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('description_class', 48, 0, mojo.internal.Array(searchbox.mojom.ACMatchClassificationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('destination_url', 56, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('inline_autocompletion', 64, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('fill_into_edit', 72, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('icon_path', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon_url', 88, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_dominant_color', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('image_url', 104, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 112, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('remove_button_a11y_label', 120, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('tail_suggest_common_prefix', 128, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('keyword_chip_hint', 136, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('keyword_chip_a11y', 144, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('suggestion_group_id', 152, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_hidden', 156, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allowed_to_be_default_match', 156, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_weather_answer_suggestion_$flag', 156, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_weather_answer_suggestion_$value', originalFieldName: 'is_weather_answer_suggestion' }),
      mojo.internal.StructField('is_weather_answer_suggestion_$value', 156, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_weather_answer_suggestion_$flag', originalFieldName: 'is_weather_answer_suggestion' }),
      mojo.internal.StructField('is_noncanned_aim_suggestion', 156, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_rich_suggestion', 156, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_search_type', 156, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_enterprise_search_aggregator_people_type', 156, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('swap_contents_and_description', 157, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_deletion', 157, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_instant_keyword', 157, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 168]]);

// Struct: TabInfo
mojo.internal.Struct(
    searchbox.mojom.TabInfoSpec, 'searchbox.mojom.TabInfo', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_active', 16, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('show_in_current_tab_chip', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_in_previous_tab_chip', 28, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: FileAttachment
mojo.internal.Struct(
    searchbox.mojom.FileAttachmentSpec, 'searchbox.mojom.FileAttachment', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('image_data_url', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TabAttachment
mojo.internal.Struct(
    searchbox.mojom.TabAttachmentSpec, 'searchbox.mojom.TabAttachment', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SearchContext
mojo.internal.Struct(
    searchbox.mojom.SearchContextSpec, 'searchbox.mojom.SearchContext', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('attachments', 8, 0, mojo.internal.Array(searchbox.mojom.SearchContextAttachmentSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('tool_mode', 16, 0, searchbox.mojom.ToolModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SelectedFileInfo
mojo.internal.Struct(
    searchbox.mojom.SelectedFileInfoSpec, 'searchbox.mojom.SelectedFileInfo', [
      mojo.internal.StructField('file_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('image_data_url', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('selection_time', 24, 0, mojo_base.mojom.JSTimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_deletable', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: SuggestionGroup
mojo.internal.Struct(
    searchbox.mojom.SuggestionGroupSpec, 'searchbox.mojom.SuggestionGroup', [
      mojo.internal.StructField('header', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('render_type', 8, 0, searchbox.mojom.RenderTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('side_type', 16, 0, searchbox.mojom.SideTypeSpec.$, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AutocompleteResult
mojo.internal.Struct(
    searchbox.mojom.AutocompleteResultSpec, 'searchbox.mojom.AutocompleteResult', [
      mojo.internal.StructField('input', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('suggestion_groups_map', 8, 0, mojo.internal.Map(mojo.internal.Int32, searchbox.mojom.SuggestionGroupSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('matches', 16, 0, mojo.internal.Array(searchbox.mojom.AutocompleteMatchSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('smart_compose_inline_hint', 24, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: OmniboxPopupSelection
mojo.internal.Struct(
    searchbox.mojom.OmniboxPopupSelectionSpec, 'searchbox.mojom.OmniboxPopupSelection', [
      mojo.internal.StructField('state', 0, 0, searchbox.mojom.SelectionLineStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('line', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('action_index', 9, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PlaceholderConfig
mojo.internal.Struct(
    searchbox.mojom.PlaceholderConfigSpec, 'searchbox.mojom.PlaceholderConfig', [
      mojo.internal.StructField('texts', 0, 0, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('change_text_animation_interval', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fade_text_animation_duration', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandler
mojo.internal.Struct(
    searchbox.mojom.PageHandler_SetPage_ParamsSpec, 'searchbox.mojom.PageHandler_SetPage_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(searchbox.mojom.PageSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec, 'searchbox.mojom.PageHandler_OnFocusChanged_Params', [
      mojo.internal.StructField('focused', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec, 'searchbox.mojom.PageHandler_QueryAutocomplete_Params', [
      mojo.internal.StructField('input', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('prevent_inline_autocomplete', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec, 'searchbox.mojom.PageHandler_StopAutocomplete_Params', [
      mojo.internal.StructField('clear_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec, 'searchbox.mojom.PageHandler_OpenAutocompleteMatch_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('line', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('are_matches_showing', 9, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('mouse_button', 10, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('alt_key', 11, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ctrl_key', 11, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('meta_key', 11, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shift_key', 11, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec, 'searchbox.mojom.PageHandler_OnNavigationLikely_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('navigation_predictor', 8, 0, omnibox.mojom.NavigationPredictorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('line', 16, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec, 'searchbox.mojom.PageHandler_DeleteAutocompleteMatch_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('line', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec, 'searchbox.mojom.PageHandler_ActivateKeyword_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('match_selection_timestamp', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('line', 16, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('is_mouse_event', 17, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_ShowContextMenu_ParamsSpec, 'searchbox.mojom.PageHandler_ShowContextMenu_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec, 'searchbox.mojom.PageHandler_ExecuteAction_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('match_selection_timestamp', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('line', 16, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('action_index', 17, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('mouse_button', 18, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('alt_key', 19, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ctrl_key', 19, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('meta_key', 19, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shift_key', 19, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec, 'searchbox.mojom.PageHandler_OnThumbnailRemoved_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec, 'searchbox.mojom.PageHandler_GetPlaceholderConfig_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParamsSpec, 'searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParams', [
      mojo.internal.StructField('config', 0, 0, searchbox.mojom.PlaceholderConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec, 'searchbox.mojom.PageHandler_GetRecentTabs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_GetRecentTabs_ResponseParamsSpec, 'searchbox.mojom.PageHandler_GetRecentTabs_ResponseParams', [
      mojo.internal.StructField('tabs', 0, 0, mojo.internal.Array(searchbox.mojom.TabInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec, 'searchbox.mojom.PageHandler_GetTabPreview_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_GetTabPreview_ResponseParamsSpec, 'searchbox.mojom.PageHandler_GetTabPreview_ResponseParams', [
      mojo.internal.StructField('preview_data_url', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec, 'searchbox.mojom.PageHandler_NotifySessionStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec, 'searchbox.mojom.PageHandler_NotifySessionAbandoned_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_AddFileContext_ParamsSpec, 'searchbox.mojom.PageHandler_AddFileContext_Params', [
      mojo.internal.StructField('file_info', 0, 0, searchbox.mojom.SelectedFileInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file_bytes', 8, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_AddFileContext_ResponseParamsSpec, 'searchbox.mojom.PageHandler_AddFileContext_ResponseParams', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_AddTabContext_ParamsSpec, 'searchbox.mojom.PageHandler_AddTabContext_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('delay_upload', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_AddTabContext_ResponseParamsSpec, 'searchbox.mojom.PageHandler_AddTabContext_ResponseParams', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_DeleteContext_ParamsSpec, 'searchbox.mojom.PageHandler_DeleteContext_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('from_automatic_chip', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_ClearFiles_ParamsSpec, 'searchbox.mojom.PageHandler_ClearFiles_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec, 'searchbox.mojom.PageHandler_SubmitQuery_Params', [
      mojo.internal.StructField('query_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mouse_button', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('alt_key', 9, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ctrl_key', 9, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('meta_key', 9, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shift_key', 9, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec, 'searchbox.mojom.PageHandler_OpenLensSearch_Params', [
    ],
    [[0, 8]]);

searchbox.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

searchbox.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'searchbox.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      searchbox.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new searchbox.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

searchbox.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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

  setPage(page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      searchbox.mojom.PageHandler_SetPage_ParamsSpec,
      null,
      [page],
      false);
  }

  onFocusChanged(focused) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec,
      null,
      [focused],
      false);
  }

  queryAutocomplete(input, prevent_inline_autocomplete) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec,
      null,
      [input, prevent_inline_autocomplete],
      false);
  }

  stopAutocomplete(clear_result) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec,
      null,
      [clear_result],
      false);
  }

  openAutocompleteMatch(line, url, are_matches_showing, mouse_button, alt_key, ctrl_key, meta_key, shift_key) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec,
      null,
      [line, url, are_matches_showing, mouse_button, alt_key, ctrl_key, meta_key, shift_key],
      false);
  }

  onNavigationLikely(line, url, navigation_predictor) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec,
      null,
      [line, url, navigation_predictor],
      false);
  }

  deleteAutocompleteMatch(line, url) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec,
      null,
      [line, url],
      false);
  }

  activateKeyword(line, url, match_selection_timestamp, is_mouse_event) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec,
      null,
      [line, url, match_selection_timestamp, is_mouse_event],
      false);
  }

  showContextMenu(point) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      searchbox.mojom.PageHandler_ShowContextMenu_ParamsSpec,
      null,
      [point],
      false);
  }

  executeAction(line, action_index, url, match_selection_timestamp, mouse_button, alt_key, ctrl_key, meta_key, shift_key) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec,
      null,
      [line, action_index, url, match_selection_timestamp, mouse_button, alt_key, ctrl_key, meta_key, shift_key],
      false);
  }

  onThumbnailRemoved() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec,
      null,
      [],
      false);
  }

  getPlaceholderConfig() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec,
      searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParamsSpec,
      [],
      false);
  }

  getRecentTabs() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec,
      searchbox.mojom.PageHandler_GetRecentTabs_ResponseParamsSpec,
      [],
      false);
  }

  getTabPreview(tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec,
      searchbox.mojom.PageHandler_GetTabPreview_ResponseParamsSpec,
      [tab_id],
      false);
  }

  notifySessionStarted() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec,
      null,
      [],
      false);
  }

  notifySessionAbandoned() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec,
      null,
      [],
      false);
  }

  addFileContext(file_info, file_bytes) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      searchbox.mojom.PageHandler_AddFileContext_ParamsSpec,
      searchbox.mojom.PageHandler_AddFileContext_ResponseParamsSpec,
      [file_info, file_bytes],
      false);
  }

  addTabContext(tab_id, delay_upload) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      searchbox.mojom.PageHandler_AddTabContext_ParamsSpec,
      searchbox.mojom.PageHandler_AddTabContext_ResponseParamsSpec,
      [tab_id, delay_upload],
      false);
  }

  deleteContext(token, from_automatic_chip) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      searchbox.mojom.PageHandler_DeleteContext_ParamsSpec,
      null,
      [token, from_automatic_chip],
      false);
  }

  clearFiles() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      searchbox.mojom.PageHandler_ClearFiles_ParamsSpec,
      null,
      [],
      false);
  }

  submitQuery(query_text, mouse_button, alt_key, ctrl_key, meta_key, shift_key) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec,
      null,
      [query_text, mouse_button, alt_key, ctrl_key, meta_key, shift_key],
      false);
  }

  openLensSearch() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec,
      null,
      [],
      false);
  }

};

searchbox.mojom.PageHandler.getRemote = function() {
  let remote = new searchbox.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'searchbox.mojom.PageHandler',
    'context');
  return remote.$;
};

searchbox.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
        
        // Try Method 0: SetPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_SetPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnFocusChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFocusChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: QueryAutocomplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueryAutocomplete (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: StopAutocomplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopAutocomplete (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OpenAutocompleteMatch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenAutocompleteMatch (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnNavigationLikely
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNavigationLikely (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DeleteAutocompleteMatch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteAutocompleteMatch (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ActivateKeyword
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ActivateKeyword (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ShowContextMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_ShowContextMenu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowContextMenu (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ExecuteAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteAction (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnThumbnailRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnThumbnailRemoved (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: GetPlaceholderConfig
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPlaceholderConfig (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetRecentTabs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRecentTabs (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: GetTabPreview
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTabPreview (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: NotifySessionStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifySessionStarted (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: NotifySessionAbandoned
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifySessionAbandoned (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: AddFileContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_AddFileContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddFileContext (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: AddTabContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_AddTabContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddTabContext (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: DeleteContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_DeleteContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteContext (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: ClearFiles
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_ClearFiles_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearFiles (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: SubmitQuery
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubmitQuery (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: OpenLensSearch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenLensSearch (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
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
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_SetPage_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setPage');
          const result = this.impl.setPage(params.page);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onFocusChanged');
          const result = this.impl.onFocusChanged(params.focused);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.queryAutocomplete');
          const result = this.impl.queryAutocomplete(params.input, params.prevent_inline_autocomplete);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.stopAutocomplete');
          const result = this.impl.stopAutocomplete(params.clear_result);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openAutocompleteMatch');
          const result = this.impl.openAutocompleteMatch(params.line, params.url, params.are_matches_showing, params.mouse_button, params.alt_key, params.ctrl_key, params.meta_key, params.shift_key);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onNavigationLikely');
          const result = this.impl.onNavigationLikely(params.line, params.url, params.navigation_predictor);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteAutocompleteMatch');
          const result = this.impl.deleteAutocompleteMatch(params.line, params.url);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.activateKeyword');
          const result = this.impl.activateKeyword(params.line, params.url, params.match_selection_timestamp, params.is_mouse_event);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_ShowContextMenu_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.showContextMenu');
          const result = this.impl.showContextMenu(params.point);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.executeAction');
          const result = this.impl.executeAction(params.line, params.action_index, params.url, params.match_selection_timestamp, params.mouse_button, params.alt_key, params.ctrl_key, params.meta_key, params.shift_key);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onThumbnailRemoved');
          const result = this.impl.onThumbnailRemoved();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getPlaceholderConfig');
          const result = this.impl.getPlaceholderConfig();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getRecentTabs');
          const result = this.impl.getRecentTabs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, searchbox.mojom.PageHandler_GetRecentTabs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getTabPreview');
          const result = this.impl.getTabPreview(params.tab_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, searchbox.mojom.PageHandler_GetTabPreview_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySessionStarted');
          const result = this.impl.notifySessionStarted();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySessionAbandoned');
          const result = this.impl.notifySessionAbandoned();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_AddFileContext_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.addFileContext');
          const result = this.impl.addFileContext(params.file_info, params.file_bytes);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, searchbox.mojom.PageHandler_AddFileContext_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_AddTabContext_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.addTabContext');
          const result = this.impl.addTabContext(params.tab_id, params.delay_upload);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, searchbox.mojom.PageHandler_AddTabContext_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_DeleteContext_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteContext');
          const result = this.impl.deleteContext(params.token, params.from_automatic_chip);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_ClearFiles_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.clearFiles');
          const result = this.impl.clearFiles();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.submitQuery');
          const result = this.impl.submitQuery(params.query_text, params.mouse_button, params.alt_key, params.ctrl_key, params.meta_key, params.shift_key);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openLensSearch');
          const result = this.impl.openLensSearch();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

searchbox.mojom.PageHandlerReceiver = searchbox.mojom.PageHandlerReceiver;

searchbox.mojom.PageHandlerPtr = searchbox.mojom.PageHandlerRemote;
searchbox.mojom.PageHandlerRequest = searchbox.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec, 'searchbox.mojom.Page_AutocompleteResultChanged_Params', [
      mojo.internal.StructField('result', 0, 0, searchbox.mojom.AutocompleteResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    searchbox.mojom.Page_UpdateSelection_ParamsSpec, 'searchbox.mojom.Page_UpdateSelection_Params', [
      mojo.internal.StructField('old_selection', 0, 0, searchbox.mojom.OmniboxPopupSelectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('selection', 8, 0, searchbox.mojom.OmniboxPopupSelectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    searchbox.mojom.Page_SetKeywordSelected_ParamsSpec, 'searchbox.mojom.Page_SetKeywordSelected_Params', [
      mojo.internal.StructField('is_keyword_selected', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    searchbox.mojom.Page_OnShow_ParamsSpec, 'searchbox.mojom.Page_OnShow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    searchbox.mojom.Page_SetInputText_ParamsSpec, 'searchbox.mojom.Page_SetInputText_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    searchbox.mojom.Page_SetThumbnail_ParamsSpec, 'searchbox.mojom.Page_SetThumbnail_Params', [
      mojo.internal.StructField('thumbnail_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_deletable', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec, 'searchbox.mojom.Page_OnContextualInputStatusChanged_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, composebox_query.mojom.FileUploadStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_type', 16, 0, composebox_query.mojom.FileUploadErrorTypeSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    searchbox.mojom.Page_OnTabStripChanged_ParamsSpec, 'searchbox.mojom.Page_OnTabStripChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    searchbox.mojom.Page_AddFileContext_ParamsSpec, 'searchbox.mojom.Page_AddFileContext_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file_info', 8, 0, searchbox.mojom.SelectedFileInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec, 'searchbox.mojom.Page_UpdateAutoSuggestedTabContext_Params', [
      mojo.internal.StructField('tab', 0, 0, searchbox.mojom.TabInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec, 'searchbox.mojom.Page_UpdateLensSearchEligibility_Params', [
      mojo.internal.StructField('eligible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec, 'searchbox.mojom.Page_UpdateContentSharingPolicy_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    searchbox.mojom.Page_UpdateAimEligibility_ParamsSpec, 'searchbox.mojom.Page_UpdateAimEligibility_Params', [
      mojo.internal.StructField('eligible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    searchbox.mojom.Page_OnShowAiModePrefChanged_ParamsSpec, 'searchbox.mojom.Page_OnShowAiModePrefChanged_Params', [
      mojo.internal.StructField('canShow', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

searchbox.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

searchbox.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'searchbox.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      searchbox.mojom.PagePendingReceiver,
      handle);
    this.$ = new searchbox.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

searchbox.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
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

  autocompleteResultChanged(result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec,
      null,
      [result],
      false);
  }

  updateSelection(old_selection, selection) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      searchbox.mojom.Page_UpdateSelection_ParamsSpec,
      null,
      [old_selection, selection],
      false);
  }

  setKeywordSelected(is_keyword_selected) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      searchbox.mojom.Page_SetKeywordSelected_ParamsSpec,
      null,
      [is_keyword_selected],
      false);
  }

  onShow() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      searchbox.mojom.Page_OnShow_ParamsSpec,
      null,
      [],
      false);
  }

  setInputText(input) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      searchbox.mojom.Page_SetInputText_ParamsSpec,
      null,
      [input],
      false);
  }

  setThumbnail(thumbnail_url, is_deletable) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      searchbox.mojom.Page_SetThumbnail_ParamsSpec,
      null,
      [thumbnail_url, is_deletable],
      false);
  }

  onContextualInputStatusChanged(token, status, error_type) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec,
      null,
      [token, status, error_type],
      false);
  }

  onTabStripChanged() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      searchbox.mojom.Page_OnTabStripChanged_ParamsSpec,
      null,
      [],
      false);
  }

  addFileContext(token, file_info) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      searchbox.mojom.Page_AddFileContext_ParamsSpec,
      null,
      [token, file_info],
      false);
  }

  updateAutoSuggestedTabContext(tab) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec,
      null,
      [tab],
      false);
  }

  updateLensSearchEligibility(eligible) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec,
      null,
      [eligible],
      false);
  }

  updateContentSharingPolicy(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec,
      null,
      [enabled],
      false);
  }

  updateAimEligibility(eligible) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      searchbox.mojom.Page_UpdateAimEligibility_ParamsSpec,
      null,
      [eligible],
      false);
  }

  onShowAiModePrefChanged(canShow) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      searchbox.mojom.Page_OnShowAiModePrefChanged_ParamsSpec,
      null,
      [canShow],
      false);
  }

};

searchbox.mojom.Page.getRemote = function() {
  let remote = new searchbox.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'searchbox.mojom.Page',
    'context');
  return remote.$;
};

searchbox.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
        
        // Try Method 0: AutocompleteResultChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AutocompleteResultChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdateSelection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.Page_UpdateSelection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateSelection (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetKeywordSelected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.Page_SetKeywordSelected_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetKeywordSelected (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnShow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.Page_OnShow_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnShow (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetInputText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.Page_SetInputText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInputText (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetThumbnail
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.Page_SetThumbnail_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetThumbnail (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnContextualInputStatusChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnContextualInputStatusChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnTabStripChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.Page_OnTabStripChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTabStripChanged (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: AddFileContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.Page_AddFileContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddFileContext (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: UpdateAutoSuggestedTabContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateAutoSuggestedTabContext (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: UpdateLensSearchEligibility
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateLensSearchEligibility (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: UpdateContentSharingPolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateContentSharingPolicy (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: UpdateAimEligibility
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.Page_UpdateAimEligibility_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateAimEligibility (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: OnShowAiModePrefChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(searchbox.mojom.Page_OnShowAiModePrefChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnShowAiModePrefChanged (13)');
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
          const params = decoder.decodeStructInline(searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.autocompleteResultChanged');
          const result = this.impl.autocompleteResultChanged(params.result);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.Page_UpdateSelection_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.updateSelection');
          const result = this.impl.updateSelection(params.old_selection, params.selection);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.Page_SetKeywordSelected_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setKeywordSelected');
          const result = this.impl.setKeywordSelected(params.is_keyword_selected);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.Page_OnShow_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onShow');
          const result = this.impl.onShow();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.Page_SetInputText_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setInputText');
          const result = this.impl.setInputText(params.input);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.Page_SetThumbnail_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setThumbnail');
          const result = this.impl.setThumbnail(params.thumbnail_url, params.is_deletable);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onContextualInputStatusChanged');
          const result = this.impl.onContextualInputStatusChanged(params.token, params.status, params.error_type);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.Page_OnTabStripChanged_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onTabStripChanged');
          const result = this.impl.onTabStripChanged();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.Page_AddFileContext_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.addFileContext');
          const result = this.impl.addFileContext(params.token, params.file_info);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.updateAutoSuggestedTabContext');
          const result = this.impl.updateAutoSuggestedTabContext(params.tab);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.updateLensSearchEligibility');
          const result = this.impl.updateLensSearchEligibility(params.eligible);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.updateContentSharingPolicy');
          const result = this.impl.updateContentSharingPolicy(params.enabled);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.Page_UpdateAimEligibility_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.updateAimEligibility');
          const result = this.impl.updateAimEligibility(params.eligible);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(searchbox.mojom.Page_OnShowAiModePrefChanged_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onShowAiModePrefChanged');
          const result = this.impl.onShowAiModePrefChanged(params.canShow);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

searchbox.mojom.PageReceiver = searchbox.mojom.PageReceiver;

searchbox.mojom.PagePtr = searchbox.mojom.PageRemote;
searchbox.mojom.PageRequest = searchbox.mojom.PagePendingReceiver;

