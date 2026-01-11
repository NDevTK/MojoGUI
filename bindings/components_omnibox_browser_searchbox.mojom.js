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
 

 mojo.internal.bindings.searchbox = mojo.internal.bindings.searchbox || {};
mojo.internal.bindings.searchbox.mojom = mojo.internal.bindings.searchbox.mojom || {};
mojo.internal.bindings.omnibox = mojo.internal.bindings.omnibox || {};
mojo.internal.bindings.composebox_query = mojo.internal.bindings.composebox_query || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.searchbox.mojom.ToolModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.searchbox.mojom.SideTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.searchbox.mojom.RenderTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.searchbox.mojom.SelectionLineStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.searchbox.mojom.SearchContextAttachmentSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.ACMatchClassificationSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.ActionSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.SuggestionAnswerSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.AutocompleteMatchSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.TabInfoSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.FileAttachmentSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.TabAttachmentSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.SearchContextSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.SelectedFileInfoSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.SuggestionGroupSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.AutocompleteResultSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.OmniboxPopupSelectionSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PlaceholderConfigSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler = {};
mojo.internal.bindings.searchbox.mojom.PageHandlerSpec = { $ : {} };
mojo.internal.bindings.searchbox.mojom.PageHandler.$interfaceName = 'searchbox.mojom.PageHandler';
mojo.internal.bindings.searchbox.mojom.PageHandler_SetPage_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_ShowContextMenu_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_AddFileContext_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_AddFileContext_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_AddTabContext_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_AddTabContext_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteContext_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_ClearFiles_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.Page = {};
mojo.internal.bindings.searchbox.mojom.PageSpec = { $ : {} };
mojo.internal.bindings.searchbox.mojom.Page.$interfaceName = 'searchbox.mojom.Page';
mojo.internal.bindings.searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.Page_UpdateSelection_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.Page_SetKeywordSelected_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.Page_OnShow_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.Page_SetInputText_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.Page_SetThumbnail_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.Page_OnTabStripChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.Page_AddFileContext_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.Page_UpdateAimEligibility_ParamsSpec = { $: {} };
mojo.internal.bindings.searchbox.mojom.Page_OnShowAiModePrefChanged_ParamsSpec = { $: {} };

// Enum: ToolMode
mojo.internal.bindings.searchbox.mojom.ToolMode = {
  kDefault: 0,
  kDeepSearch: 1,
  kCreateImage: 4,
};

// Enum: SideType
mojo.internal.bindings.searchbox.mojom.SideType = {
  kDefaultPrimary: 0,
  kSecondary: 1,
};

// Enum: RenderType
mojo.internal.bindings.searchbox.mojom.RenderType = {
  kDefaultVertical: 0,
  kHorizontal: 1,
  kGrid: 2,
};

// Enum: SelectionLineState
mojo.internal.bindings.searchbox.mojom.SelectionLineState = {
  kNormal: 1,
  kKeywordMode: 2,
  kFocusedButtonAction: 3,
  kFocusedButtonRemoveSuggestion: 4,
};

// Union: SearchContextAttachment
mojo.internal.Union(
    mojo.internal.bindings.searchbox.mojom.SearchContextAttachmentSpec, 'searchbox.mojom.SearchContextAttachment', {
      'arg_file_attachment': {
        'ordinal': 0,
        'type': mojo.internal.bindings.searchbox.mojom.FileAttachmentSpec.$,
        'nullable': false,
      },
      'arg_tab_attachment': {
        'ordinal': 1,
        'type': mojo.internal.bindings.searchbox.mojom.TabAttachmentSpec.$,
        'nullable': false,
      },
    });

// Struct: ACMatchClassification
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.ACMatchClassificationSpec, 'searchbox.mojom.ACMatchClassification', [
      mojo.internal.StructField('arg_offset', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_style', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Action
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.ActionSpec, 'searchbox.mojom.Action', [
      mojo.internal.StructField('arg_hint', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_suggestion_contents', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon_path', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_a11y_label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SuggestionAnswer
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.SuggestionAnswerSpec, 'searchbox.mojom.SuggestionAnswer', [
      mojo.internal.StructField('arg_first_line', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_second_line', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AutocompleteMatch
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.AutocompleteMatchSpec, 'searchbox.mojom.AutocompleteMatch', [
      mojo.internal.StructField('arg_a11y_label', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_actions', 8, 0, mojo.internal.Array(mojo.internal.bindings.searchbox.mojom.ActionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_answer', 16, 0, mojo.internal.bindings.searchbox.mojom.SuggestionAnswerSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_contents', 24, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_contents_class', 32, 0, mojo.internal.Array(mojo.internal.bindings.searchbox.mojom.ACMatchClassificationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_description', 40, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_description_class', 48, 0, mojo.internal.Array(mojo.internal.bindings.searchbox.mojom.ACMatchClassificationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_destination_url', 56, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_inline_autocompletion', 64, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_fill_into_edit', 72, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon_path', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon_url', 88, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_dominant_color', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_url', 104, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 112, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_remove_button_a11y_label', 120, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tail_suggest_common_prefix', 128, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_keyword_chip_hint', 136, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_keyword_chip_a11y', 144, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_suggestion_group_id', 152, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_hidden', 156, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allowed_to_be_default_match', 156, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_weather_answer_suggestion_$flag', 156, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_weather_answer_suggestion_$value', originalFieldName: 'arg_is_weather_answer_suggestion' }),
      mojo.internal.StructField('arg_is_weather_answer_suggestion_$value', 156, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_weather_answer_suggestion_$flag', originalFieldName: 'arg_is_weather_answer_suggestion' }),
      mojo.internal.StructField('arg_is_noncanned_aim_suggestion', 156, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_rich_suggestion', 156, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_search_type', 156, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_enterprise_search_aggregator_people_type', 156, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_swap_contents_and_description', 157, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_supports_deletion', 157, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_instant_keyword', 157, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 168]]);

// Struct: TabInfo
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.TabInfoSpec, 'searchbox.mojom.TabInfo', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_active', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_show_in_current_tab_chip', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_show_in_previous_tab_chip', 28, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: FileAttachment
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.FileAttachmentSpec, 'searchbox.mojom.FileAttachment', [
      mojo.internal.StructField('arg_uuid', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_data_url', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TabAttachment
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.TabAttachmentSpec, 'searchbox.mojom.TabAttachment', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SearchContext
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.SearchContextSpec, 'searchbox.mojom.SearchContext', [
      mojo.internal.StructField('arg_input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_attachments', 8, 0, mojo.internal.Array(mojo.internal.bindings.searchbox.mojom.SearchContextAttachmentSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_tool_mode', 16, 0, mojo.internal.bindings.searchbox.mojom.ToolModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SelectedFileInfo
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.SelectedFileInfoSpec, 'searchbox.mojom.SelectedFileInfo', [
      mojo.internal.StructField('arg_file_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_data_url', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_selection_time', 24, 0, mojo.internal.bindings.mojo_base.mojom.JSTimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_deletable', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: SuggestionGroup
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.SuggestionGroupSpec, 'searchbox.mojom.SuggestionGroup', [
      mojo.internal.StructField('arg_header', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_render_type', 8, 0, mojo.internal.bindings.searchbox.mojom.RenderTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_side_type', 16, 0, mojo.internal.bindings.searchbox.mojom.SideTypeSpec.$, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AutocompleteResult
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.AutocompleteResultSpec, 'searchbox.mojom.AutocompleteResult', [
      mojo.internal.StructField('arg_input', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_suggestion_groups_map', 8, 0, mojo.internal.Map(mojo.internal.Int32, mojo.internal.bindings.searchbox.mojom.SuggestionGroupSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_matches', 16, 0, mojo.internal.Array(mojo.internal.bindings.searchbox.mojom.AutocompleteMatchSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_smart_compose_inline_hint', 24, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: OmniboxPopupSelection
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.OmniboxPopupSelectionSpec, 'searchbox.mojom.OmniboxPopupSelection', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.searchbox.mojom.SelectionLineStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_line', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_action_index', 9, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PlaceholderConfig
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PlaceholderConfigSpec, 'searchbox.mojom.PlaceholderConfig', [
      mojo.internal.StructField('arg_texts', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_change_text_animation_interval', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_fade_text_animation_duration', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_SetPage_ParamsSpec, 'searchbox.mojom.PageHandler_SetPage_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.searchbox.mojom.PageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec, 'searchbox.mojom.PageHandler_OnFocusChanged_Params', [
      mojo.internal.StructField('arg_focused', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec, 'searchbox.mojom.PageHandler_QueryAutocomplete_Params', [
      mojo.internal.StructField('arg_input', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_prevent_inline_autocomplete', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec, 'searchbox.mojom.PageHandler_StopAutocomplete_Params', [
      mojo.internal.StructField('arg_clear_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec, 'searchbox.mojom.PageHandler_OpenAutocompleteMatch_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_line', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_are_matches_showing', 9, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_mouse_button', 10, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_alt_key', 11, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ctrl_key', 11, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_meta_key', 11, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shift_key', 11, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec, 'searchbox.mojom.PageHandler_OnNavigationLikely_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_navigation_predictor', 8, 0, mojo.internal.bindings.omnibox.mojom.NavigationPredictorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_line', 16, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec, 'searchbox.mojom.PageHandler_DeleteAutocompleteMatch_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_line', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec, 'searchbox.mojom.PageHandler_ActivateKeyword_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_match_selection_timestamp', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_line', 16, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_mouse_event', 17, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_ShowContextMenu_ParamsSpec, 'searchbox.mojom.PageHandler_ShowContextMenu_Params', [
      mojo.internal.StructField('arg_point', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec, 'searchbox.mojom.PageHandler_ExecuteAction_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_match_selection_timestamp', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_line', 16, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_action_index', 17, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_mouse_button', 18, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_alt_key', 19, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ctrl_key', 19, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_meta_key', 19, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shift_key', 19, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec, 'searchbox.mojom.PageHandler_OnThumbnailRemoved_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec, 'searchbox.mojom.PageHandler_GetPlaceholderConfig_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParamsSpec, 'searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParams', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.searchbox.mojom.PlaceholderConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec, 'searchbox.mojom.PageHandler_GetRecentTabs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ResponseParamsSpec, 'searchbox.mojom.PageHandler_GetRecentTabs_ResponseParams', [
      mojo.internal.StructField('arg_tabs', 0, 0, mojo.internal.Array(mojo.internal.bindings.searchbox.mojom.TabInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec, 'searchbox.mojom.PageHandler_GetTabPreview_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ResponseParamsSpec, 'searchbox.mojom.PageHandler_GetTabPreview_ResponseParams', [
      mojo.internal.StructField('arg_preview_data_url', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec, 'searchbox.mojom.PageHandler_NotifySessionStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec, 'searchbox.mojom.PageHandler_NotifySessionAbandoned_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_AddFileContext_ParamsSpec, 'searchbox.mojom.PageHandler_AddFileContext_Params', [
      mojo.internal.StructField('arg_file_info', 0, 0, mojo.internal.bindings.searchbox.mojom.SelectedFileInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_file_bytes', 8, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_AddFileContext_ResponseParamsSpec, 'searchbox.mojom.PageHandler_AddFileContext_ResponseParams', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_AddTabContext_ParamsSpec, 'searchbox.mojom.PageHandler_AddTabContext_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_delay_upload', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_AddTabContext_ResponseParamsSpec, 'searchbox.mojom.PageHandler_AddTabContext_ResponseParams', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteContext_ParamsSpec, 'searchbox.mojom.PageHandler_DeleteContext_Params', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_from_automatic_chip', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_ClearFiles_ParamsSpec, 'searchbox.mojom.PageHandler_ClearFiles_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec, 'searchbox.mojom.PageHandler_SubmitQuery_Params', [
      mojo.internal.StructField('arg_query_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_mouse_button', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_alt_key', 9, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ctrl_key', 9, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_meta_key', 9, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shift_key', 9, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec, 'searchbox.mojom.PageHandler_OpenLensSearch_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.searchbox.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.searchbox.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'searchbox.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.searchbox.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.searchbox.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setPage(arg_page) {
    return this.$.setPage(arg_page);
  }
  onFocusChanged(arg_focused) {
    return this.$.onFocusChanged(arg_focused);
  }
  queryAutocomplete(arg_input, arg_prevent_inline_autocomplete) {
    return this.$.queryAutocomplete(arg_input, arg_prevent_inline_autocomplete);
  }
  stopAutocomplete(arg_clear_result) {
    return this.$.stopAutocomplete(arg_clear_result);
  }
  openAutocompleteMatch(arg_line, arg_url, arg_are_matches_showing, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key) {
    return this.$.openAutocompleteMatch(arg_line, arg_url, arg_are_matches_showing, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key);
  }
  onNavigationLikely(arg_line, arg_url, arg_navigation_predictor) {
    return this.$.onNavigationLikely(arg_line, arg_url, arg_navigation_predictor);
  }
  deleteAutocompleteMatch(arg_line, arg_url) {
    return this.$.deleteAutocompleteMatch(arg_line, arg_url);
  }
  activateKeyword(arg_line, arg_url, arg_match_selection_timestamp, arg_is_mouse_event) {
    return this.$.activateKeyword(arg_line, arg_url, arg_match_selection_timestamp, arg_is_mouse_event);
  }
  showContextMenu(arg_point) {
    return this.$.showContextMenu(arg_point);
  }
  executeAction(arg_line, arg_action_index, arg_url, arg_match_selection_timestamp, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key) {
    return this.$.executeAction(arg_line, arg_action_index, arg_url, arg_match_selection_timestamp, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key);
  }
  onThumbnailRemoved() {
    return this.$.onThumbnailRemoved();
  }
  getPlaceholderConfig() {
    return this.$.getPlaceholderConfig();
  }
  getRecentTabs() {
    return this.$.getRecentTabs();
  }
  getTabPreview(arg_tab_id) {
    return this.$.getTabPreview(arg_tab_id);
  }
  notifySessionStarted() {
    return this.$.notifySessionStarted();
  }
  notifySessionAbandoned() {
    return this.$.notifySessionAbandoned();
  }
  addFileContext(arg_file_info, arg_file_bytes) {
    return this.$.addFileContext(arg_file_info, arg_file_bytes);
  }
  addTabContext(arg_tab_id, arg_delay_upload) {
    return this.$.addTabContext(arg_tab_id, arg_delay_upload);
  }
  deleteContext(arg_token, arg_from_automatic_chip) {
    return this.$.deleteContext(arg_token, arg_from_automatic_chip);
  }
  clearFiles() {
    return this.$.clearFiles();
  }
  submitQuery(arg_query_text, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key) {
    return this.$.submitQuery(arg_query_text, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key);
  }
  openLensSearch() {
    return this.$.openLensSearch();
  }
};

mojo.internal.bindings.searchbox.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('searchbox.mojom.PageHandler', [
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

  setPage(arg_page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_SetPage_ParamsSpec,
      null,
      [arg_page],
      false);
  }

  onFocusChanged(arg_focused) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec,
      null,
      [arg_focused],
      false);
  }

  queryAutocomplete(arg_input, arg_prevent_inline_autocomplete) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec,
      null,
      [arg_input, arg_prevent_inline_autocomplete],
      false);
  }

  stopAutocomplete(arg_clear_result) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec,
      null,
      [arg_clear_result],
      false);
  }

  openAutocompleteMatch(arg_line, arg_url, arg_are_matches_showing, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec,
      null,
      [arg_line, arg_url, arg_are_matches_showing, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key],
      false);
  }

  onNavigationLikely(arg_line, arg_url, arg_navigation_predictor) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec,
      null,
      [arg_line, arg_url, arg_navigation_predictor],
      false);
  }

  deleteAutocompleteMatch(arg_line, arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec,
      null,
      [arg_line, arg_url],
      false);
  }

  activateKeyword(arg_line, arg_url, arg_match_selection_timestamp, arg_is_mouse_event) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec,
      null,
      [arg_line, arg_url, arg_match_selection_timestamp, arg_is_mouse_event],
      false);
  }

  showContextMenu(arg_point) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_ShowContextMenu_ParamsSpec,
      null,
      [arg_point],
      false);
  }

  executeAction(arg_line, arg_action_index, arg_url, arg_match_selection_timestamp, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec,
      null,
      [arg_line, arg_action_index, arg_url, arg_match_selection_timestamp, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key],
      false);
  }

  onThumbnailRemoved() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec,
      null,
      [],
      false);
  }

  getPlaceholderConfig() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec,
      mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParamsSpec,
      [],
      false);
  }

  getRecentTabs() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec,
      mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ResponseParamsSpec,
      [],
      false);
  }

  getTabPreview(arg_tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec,
      mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ResponseParamsSpec,
      [arg_tab_id],
      false);
  }

  notifySessionStarted() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec,
      null,
      [],
      false);
  }

  notifySessionAbandoned() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec,
      null,
      [],
      false);
  }

  addFileContext(arg_file_info, arg_file_bytes) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_AddFileContext_ParamsSpec,
      mojo.internal.bindings.searchbox.mojom.PageHandler_AddFileContext_ResponseParamsSpec,
      [arg_file_info, arg_file_bytes],
      false);
  }

  addTabContext(arg_tab_id, arg_delay_upload) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_AddTabContext_ParamsSpec,
      mojo.internal.bindings.searchbox.mojom.PageHandler_AddTabContext_ResponseParamsSpec,
      [arg_tab_id, arg_delay_upload],
      false);
  }

  deleteContext(arg_token, arg_from_automatic_chip) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteContext_ParamsSpec,
      null,
      [arg_token, arg_from_automatic_chip],
      false);
  }

  clearFiles() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_ClearFiles_ParamsSpec,
      null,
      [],
      false);
  }

  submitQuery(arg_query_text, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec,
      null,
      [arg_query_text, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key],
      false);
  }

  openLensSearch() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.searchbox.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.searchbox.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'searchbox.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.searchbox.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('searchbox.mojom.PageHandler', [
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_SetPage_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_ShowContextMenu_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_AddFileContext_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_AddTabContext_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteContext_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_ClearFiles_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_SetPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPage');
          const result = this.impl.setPage(params.arg_page);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFocusChanged');
          const result = this.impl.onFocusChanged(params.arg_focused);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queryAutocomplete');
          const result = this.impl.queryAutocomplete(params.arg_input, params.arg_prevent_inline_autocomplete);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopAutocomplete');
          const result = this.impl.stopAutocomplete(params.arg_clear_result);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openAutocompleteMatch');
          const result = this.impl.openAutocompleteMatch(params.arg_line, params.arg_url, params.arg_are_matches_showing, params.arg_mouse_button, params.arg_alt_key, params.arg_ctrl_key, params.arg_meta_key, params.arg_shift_key);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNavigationLikely');
          const result = this.impl.onNavigationLikely(params.arg_line, params.arg_url, params.arg_navigation_predictor);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteAutocompleteMatch');
          const result = this.impl.deleteAutocompleteMatch(params.arg_line, params.arg_url);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.activateKeyword');
          const result = this.impl.activateKeyword(params.arg_line, params.arg_url, params.arg_match_selection_timestamp, params.arg_is_mouse_event);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_ShowContextMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showContextMenu');
          const result = this.impl.showContextMenu(params.arg_point);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.executeAction');
          const result = this.impl.executeAction(params.arg_line, params.arg_action_index, params.arg_url, params.arg_match_selection_timestamp, params.arg_mouse_button, params.arg_alt_key, params.arg_ctrl_key, params.arg_meta_key, params.arg_shift_key);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onThumbnailRemoved');
          const result = this.impl.onThumbnailRemoved();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPlaceholderConfig');
          const result = this.impl.getPlaceholderConfig();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPlaceholderConfig FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRecentTabs');
          const result = this.impl.getRecentTabs();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetRecentTabs FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTabPreview');
          const result = this.impl.getTabPreview(params.arg_tab_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetTabPreview FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySessionStarted');
          const result = this.impl.notifySessionStarted();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySessionAbandoned');
          const result = this.impl.notifySessionAbandoned();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_AddFileContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addFileContext');
          const result = this.impl.addFileContext(params.arg_file_info, params.arg_file_bytes);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.searchbox.mojom.PageHandler_AddFileContext_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddFileContext FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_AddTabContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addTabContext');
          const result = this.impl.addTabContext(params.arg_tab_id, params.arg_delay_upload);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.searchbox.mojom.PageHandler_AddTabContext_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddTabContext FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteContext');
          const result = this.impl.deleteContext(params.arg_token, params.arg_from_automatic_chip);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_ClearFiles_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearFiles');
          const result = this.impl.clearFiles();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submitQuery');
          const result = this.impl.submitQuery(params.arg_query_text, params.arg_mouse_button, params.arg_alt_key, params.arg_ctrl_key, params.arg_meta_key, params.arg_shift_key);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec.$.structSpec);
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

mojo.internal.bindings.searchbox.mojom.PageHandlerReceiver = mojo.internal.bindings.searchbox.mojom.PageHandlerReceiver;

mojo.internal.bindings.searchbox.mojom.PageHandlerPtr = mojo.internal.bindings.searchbox.mojom.PageHandlerRemote;
mojo.internal.bindings.searchbox.mojom.PageHandlerRequest = mojo.internal.bindings.searchbox.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec, 'searchbox.mojom.Page_AutocompleteResultChanged_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.searchbox.mojom.AutocompleteResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_UpdateSelection_ParamsSpec, 'searchbox.mojom.Page_UpdateSelection_Params', [
      mojo.internal.StructField('arg_old_selection', 0, 0, mojo.internal.bindings.searchbox.mojom.OmniboxPopupSelectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_selection', 8, 0, mojo.internal.bindings.searchbox.mojom.OmniboxPopupSelectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_SetKeywordSelected_ParamsSpec, 'searchbox.mojom.Page_SetKeywordSelected_Params', [
      mojo.internal.StructField('arg_is_keyword_selected', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_OnShow_ParamsSpec, 'searchbox.mojom.Page_OnShow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_SetInputText_ParamsSpec, 'searchbox.mojom.Page_SetInputText_Params', [
      mojo.internal.StructField('arg_input', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_SetThumbnail_ParamsSpec, 'searchbox.mojom.Page_SetThumbnail_Params', [
      mojo.internal.StructField('arg_thumbnail_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_deletable', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec, 'searchbox.mojom.Page_OnContextualInputStatusChanged_Params', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 8, 0, mojo.internal.bindings.composebox_query.mojom.FileUploadStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_type', 16, 0, mojo.internal.bindings.composebox_query.mojom.FileUploadErrorTypeSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_OnTabStripChanged_ParamsSpec, 'searchbox.mojom.Page_OnTabStripChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_AddFileContext_ParamsSpec, 'searchbox.mojom.Page_AddFileContext_Params', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_file_info', 8, 0, mojo.internal.bindings.searchbox.mojom.SelectedFileInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec, 'searchbox.mojom.Page_UpdateAutoSuggestedTabContext_Params', [
      mojo.internal.StructField('arg_tab', 0, 0, mojo.internal.bindings.searchbox.mojom.TabInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec, 'searchbox.mojom.Page_UpdateLensSearchEligibility_Params', [
      mojo.internal.StructField('arg_eligible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec, 'searchbox.mojom.Page_UpdateContentSharingPolicy_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_UpdateAimEligibility_ParamsSpec, 'searchbox.mojom.Page_UpdateAimEligibility_Params', [
      mojo.internal.StructField('arg_eligible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_OnShowAiModePrefChanged_ParamsSpec, 'searchbox.mojom.Page_OnShowAiModePrefChanged_Params', [
      mojo.internal.StructField('arg_canShow', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.searchbox.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.searchbox.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'searchbox.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.searchbox.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.searchbox.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  autocompleteResultChanged(arg_result) {
    return this.$.autocompleteResultChanged(arg_result);
  }
  updateSelection(arg_old_selection, arg_selection) {
    return this.$.updateSelection(arg_old_selection, arg_selection);
  }
  setKeywordSelected(arg_is_keyword_selected) {
    return this.$.setKeywordSelected(arg_is_keyword_selected);
  }
  onShow() {
    return this.$.onShow();
  }
  setInputText(arg_input) {
    return this.$.setInputText(arg_input);
  }
  setThumbnail(arg_thumbnail_url, arg_is_deletable) {
    return this.$.setThumbnail(arg_thumbnail_url, arg_is_deletable);
  }
  onContextualInputStatusChanged(arg_token, arg_status, arg_error_type) {
    return this.$.onContextualInputStatusChanged(arg_token, arg_status, arg_error_type);
  }
  onTabStripChanged() {
    return this.$.onTabStripChanged();
  }
  addFileContext(arg_token, arg_file_info) {
    return this.$.addFileContext(arg_token, arg_file_info);
  }
  updateAutoSuggestedTabContext(arg_tab) {
    return this.$.updateAutoSuggestedTabContext(arg_tab);
  }
  updateLensSearchEligibility(arg_eligible) {
    return this.$.updateLensSearchEligibility(arg_eligible);
  }
  updateContentSharingPolicy(arg_enabled) {
    return this.$.updateContentSharingPolicy(arg_enabled);
  }
  updateAimEligibility(arg_eligible) {
    return this.$.updateAimEligibility(arg_eligible);
  }
  onShowAiModePrefChanged(arg_canShow) {
    return this.$.onShowAiModePrefChanged(arg_canShow);
  }
};

mojo.internal.bindings.searchbox.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('searchbox.mojom.Page', [
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

  autocompleteResultChanged(arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec,
      null,
      [arg_result],
      false);
  }

  updateSelection(arg_old_selection, arg_selection) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_UpdateSelection_ParamsSpec,
      null,
      [arg_old_selection, arg_selection],
      false);
  }

  setKeywordSelected(arg_is_keyword_selected) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_SetKeywordSelected_ParamsSpec,
      null,
      [arg_is_keyword_selected],
      false);
  }

  onShow() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_OnShow_ParamsSpec,
      null,
      [],
      false);
  }

  setInputText(arg_input) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_SetInputText_ParamsSpec,
      null,
      [arg_input],
      false);
  }

  setThumbnail(arg_thumbnail_url, arg_is_deletable) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_SetThumbnail_ParamsSpec,
      null,
      [arg_thumbnail_url, arg_is_deletable],
      false);
  }

  onContextualInputStatusChanged(arg_token, arg_status, arg_error_type) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec,
      null,
      [arg_token, arg_status, arg_error_type],
      false);
  }

  onTabStripChanged() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_OnTabStripChanged_ParamsSpec,
      null,
      [],
      false);
  }

  addFileContext(arg_token, arg_file_info) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_AddFileContext_ParamsSpec,
      null,
      [arg_token, arg_file_info],
      false);
  }

  updateAutoSuggestedTabContext(arg_tab) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec,
      null,
      [arg_tab],
      false);
  }

  updateLensSearchEligibility(arg_eligible) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec,
      null,
      [arg_eligible],
      false);
  }

  updateContentSharingPolicy(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  updateAimEligibility(arg_eligible) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_UpdateAimEligibility_ParamsSpec,
      null,
      [arg_eligible],
      false);
  }

  onShowAiModePrefChanged(arg_canShow) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_OnShowAiModePrefChanged_ParamsSpec,
      null,
      [arg_canShow],
      false);
  }

};

mojo.internal.bindings.searchbox.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.searchbox.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'searchbox.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.searchbox.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('searchbox.mojom.Page', [
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_UpdateSelection_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_SetKeywordSelected_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_OnShow_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_SetInputText_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_SetThumbnail_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_OnTabStripChanged_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_AddFileContext_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_UpdateAimEligibility_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_OnShowAiModePrefChanged_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.autocompleteResultChanged');
          const result = this.impl.autocompleteResultChanged(params.arg_result);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_UpdateSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateSelection');
          const result = this.impl.updateSelection(params.arg_old_selection, params.arg_selection);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_SetKeywordSelected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setKeywordSelected');
          const result = this.impl.setKeywordSelected(params.arg_is_keyword_selected);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_OnShow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onShow');
          const result = this.impl.onShow();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_SetInputText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setInputText');
          const result = this.impl.setInputText(params.arg_input);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_SetThumbnail_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setThumbnail');
          const result = this.impl.setThumbnail(params.arg_thumbnail_url, params.arg_is_deletable);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onContextualInputStatusChanged');
          const result = this.impl.onContextualInputStatusChanged(params.arg_token, params.arg_status, params.arg_error_type);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_OnTabStripChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTabStripChanged');
          const result = this.impl.onTabStripChanged();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_AddFileContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addFileContext');
          const result = this.impl.addFileContext(params.arg_token, params.arg_file_info);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateAutoSuggestedTabContext');
          const result = this.impl.updateAutoSuggestedTabContext(params.arg_tab);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateLensSearchEligibility');
          const result = this.impl.updateLensSearchEligibility(params.arg_eligible);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateContentSharingPolicy');
          const result = this.impl.updateContentSharingPolicy(params.arg_enabled);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_UpdateAimEligibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateAimEligibility');
          const result = this.impl.updateAimEligibility(params.arg_eligible);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_OnShowAiModePrefChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onShowAiModePrefChanged');
          const result = this.impl.onShowAiModePrefChanged(params.arg_canShow);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.searchbox.mojom.PageReceiver = mojo.internal.bindings.searchbox.mojom.PageReceiver;

mojo.internal.bindings.searchbox.mojom.PagePtr = mojo.internal.bindings.searchbox.mojom.PageRemote;
mojo.internal.bindings.searchbox.mojom.PageRequest = mojo.internal.bindings.searchbox.mojom.PagePendingReceiver;

