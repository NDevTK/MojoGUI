// Auto-generated MojoJS binding
// Source: chromium_src/components/omnibox/browser/searchbox.mojom
// Module: searchbox.mojom

'use strict';

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
  }

  setPage(page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      searchbox.mojom.PageHandler_SetPage_ParamsSpec,
      null,
      [page],
      false);
  }

  onFocusChanged(focused) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec,
      null,
      [focused],
      false);
  }

  queryAutocomplete(input, prevent_inline_autocomplete) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec,
      null,
      [input, prevent_inline_autocomplete],
      false);
  }

  stopAutocomplete(clear_result) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec,
      null,
      [clear_result],
      false);
  }

  openAutocompleteMatch(line, url, are_matches_showing, mouse_button, alt_key, ctrl_key, meta_key, shift_key) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec,
      null,
      [line, url, are_matches_showing, mouse_button, alt_key, ctrl_key, meta_key, shift_key],
      false);
  }

  onNavigationLikely(line, url, navigation_predictor) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec,
      null,
      [line, url, navigation_predictor],
      false);
  }

  deleteAutocompleteMatch(line, url) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec,
      null,
      [line, url],
      false);
  }

  activateKeyword(line, url, match_selection_timestamp, is_mouse_event) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec,
      null,
      [line, url, match_selection_timestamp, is_mouse_event],
      false);
  }

  showContextMenu(point) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      searchbox.mojom.PageHandler_ShowContextMenu_ParamsSpec,
      null,
      [point],
      false);
  }

  executeAction(line, action_index, url, match_selection_timestamp, mouse_button, alt_key, ctrl_key, meta_key, shift_key) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec,
      null,
      [line, action_index, url, match_selection_timestamp, mouse_button, alt_key, ctrl_key, meta_key, shift_key],
      false);
  }

  onThumbnailRemoved() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec,
      null,
      [],
      false);
  }

  getPlaceholderConfig() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec,
      searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParamsSpec,
      [],
      false);
  }

  getRecentTabs() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec,
      searchbox.mojom.PageHandler_GetRecentTabs_ResponseParamsSpec,
      [],
      false);
  }

  getTabPreview(tab_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec,
      searchbox.mojom.PageHandler_GetTabPreview_ResponseParamsSpec,
      [tab_id],
      false);
  }

  notifySessionStarted() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec,
      null,
      [],
      false);
  }

  notifySessionAbandoned() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec,
      null,
      [],
      false);
  }

  addFileContext(file_info, file_bytes) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      searchbox.mojom.PageHandler_AddFileContext_ParamsSpec,
      searchbox.mojom.PageHandler_AddFileContext_ResponseParamsSpec,
      [file_info, file_bytes],
      false);
  }

  addTabContext(tab_id, delay_upload) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      searchbox.mojom.PageHandler_AddTabContext_ParamsSpec,
      searchbox.mojom.PageHandler_AddTabContext_ResponseParamsSpec,
      [tab_id, delay_upload],
      false);
  }

  deleteContext(token, from_automatic_chip) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      searchbox.mojom.PageHandler_DeleteContext_ParamsSpec,
      null,
      [token, from_automatic_chip],
      false);
  }

  clearFiles() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      searchbox.mojom.PageHandler_ClearFiles_ParamsSpec,
      null,
      [],
      false);
  }

  submitQuery(query_text, mouse_button, alt_key, ctrl_key, meta_key, shift_key) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec,
      null,
      [query_text, mouse_button, alt_key, ctrl_key, meta_key, shift_key],
      false);
  }

  openLensSearch() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = searchbox.mojom.PageHandler_SetPage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPage(params.page);
          break;
        }
        case 1: {
          const params = searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFocusChanged(params.focused);
          break;
        }
        case 2: {
          const params = searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec.$.decode(message.payload);
          const result = this.impl.queryAutocomplete(params.input, params.prevent_inline_autocomplete);
          break;
        }
        case 3: {
          const params = searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stopAutocomplete(params.clear_result);
          break;
        }
        case 4: {
          const params = searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openAutocompleteMatch(params.line, params.url, params.are_matches_showing, params.mouse_button, params.alt_key, params.ctrl_key, params.meta_key, params.shift_key);
          break;
        }
        case 5: {
          const params = searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNavigationLikely(params.line, params.url, params.navigation_predictor);
          break;
        }
        case 6: {
          const params = searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deleteAutocompleteMatch(params.line, params.url);
          break;
        }
        case 7: {
          const params = searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec.$.decode(message.payload);
          const result = this.impl.activateKeyword(params.line, params.url, params.match_selection_timestamp, params.is_mouse_event);
          break;
        }
        case 8: {
          const params = searchbox.mojom.PageHandler_ShowContextMenu_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showContextMenu(params.point);
          break;
        }
        case 9: {
          const params = searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec.$.decode(message.payload);
          const result = this.impl.executeAction(params.line, params.action_index, params.url, params.match_selection_timestamp, params.mouse_button, params.alt_key, params.ctrl_key, params.meta_key, params.shift_key);
          break;
        }
        case 10: {
          const params = searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onThumbnailRemoved();
          break;
        }
        case 11: {
          const params = searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPlaceholderConfig();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 12: {
          const params = searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getRecentTabs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, searchbox.mojom.PageHandler_GetRecentTabs_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 13: {
          const params = searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getTabPreview(params.tab_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, searchbox.mojom.PageHandler_GetTabPreview_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 14: {
          const params = searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifySessionStarted();
          break;
        }
        case 15: {
          const params = searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifySessionAbandoned();
          break;
        }
        case 16: {
          const params = searchbox.mojom.PageHandler_AddFileContext_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addFileContext(params.file_info, params.file_bytes);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, searchbox.mojom.PageHandler_AddFileContext_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 17: {
          const params = searchbox.mojom.PageHandler_AddTabContext_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addTabContext(params.tab_id, params.delay_upload);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, searchbox.mojom.PageHandler_AddTabContext_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 18: {
          const params = searchbox.mojom.PageHandler_DeleteContext_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deleteContext(params.token, params.from_automatic_chip);
          break;
        }
        case 19: {
          const params = searchbox.mojom.PageHandler_ClearFiles_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearFiles();
          break;
        }
        case 20: {
          const params = searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec.$.decode(message.payload);
          const result = this.impl.submitQuery(params.query_text, params.mouse_button, params.alt_key, params.ctrl_key, params.meta_key, params.shift_key);
          break;
        }
        case 21: {
          const params = searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openLensSearch();
          break;
        }
      }
    });
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
  }

  autocompleteResultChanged(result) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec,
      null,
      [result],
      false);
  }

  updateSelection(old_selection, selection) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      searchbox.mojom.Page_UpdateSelection_ParamsSpec,
      null,
      [old_selection, selection],
      false);
  }

  setKeywordSelected(is_keyword_selected) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      searchbox.mojom.Page_SetKeywordSelected_ParamsSpec,
      null,
      [is_keyword_selected],
      false);
  }

  onShow() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      searchbox.mojom.Page_OnShow_ParamsSpec,
      null,
      [],
      false);
  }

  setInputText(input) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      searchbox.mojom.Page_SetInputText_ParamsSpec,
      null,
      [input],
      false);
  }

  setThumbnail(thumbnail_url, is_deletable) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      searchbox.mojom.Page_SetThumbnail_ParamsSpec,
      null,
      [thumbnail_url, is_deletable],
      false);
  }

  onContextualInputStatusChanged(token, status, error_type) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec,
      null,
      [token, status, error_type],
      false);
  }

  onTabStripChanged() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      searchbox.mojom.Page_OnTabStripChanged_ParamsSpec,
      null,
      [],
      false);
  }

  addFileContext(token, file_info) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      searchbox.mojom.Page_AddFileContext_ParamsSpec,
      null,
      [token, file_info],
      false);
  }

  updateAutoSuggestedTabContext(tab) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec,
      null,
      [tab],
      false);
  }

  updateLensSearchEligibility(eligible) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec,
      null,
      [eligible],
      false);
  }

  updateContentSharingPolicy(enabled) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec,
      null,
      [enabled],
      false);
  }

  updateAimEligibility(eligible) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      searchbox.mojom.Page_UpdateAimEligibility_ParamsSpec,
      null,
      [eligible],
      false);
  }

  onShowAiModePrefChanged(canShow) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.autocompleteResultChanged(params.result);
          break;
        }
        case 1: {
          const params = searchbox.mojom.Page_UpdateSelection_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateSelection(params.old_selection, params.selection);
          break;
        }
        case 2: {
          const params = searchbox.mojom.Page_SetKeywordSelected_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setKeywordSelected(params.is_keyword_selected);
          break;
        }
        case 3: {
          const params = searchbox.mojom.Page_OnShow_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onShow();
          break;
        }
        case 4: {
          const params = searchbox.mojom.Page_SetInputText_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setInputText(params.input);
          break;
        }
        case 5: {
          const params = searchbox.mojom.Page_SetThumbnail_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setThumbnail(params.thumbnail_url, params.is_deletable);
          break;
        }
        case 6: {
          const params = searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onContextualInputStatusChanged(params.token, params.status, params.error_type);
          break;
        }
        case 7: {
          const params = searchbox.mojom.Page_OnTabStripChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTabStripChanged();
          break;
        }
        case 8: {
          const params = searchbox.mojom.Page_AddFileContext_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addFileContext(params.token, params.file_info);
          break;
        }
        case 9: {
          const params = searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateAutoSuggestedTabContext(params.tab);
          break;
        }
        case 10: {
          const params = searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateLensSearchEligibility(params.eligible);
          break;
        }
        case 11: {
          const params = searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateContentSharingPolicy(params.enabled);
          break;
        }
        case 12: {
          const params = searchbox.mojom.Page_UpdateAimEligibility_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateAimEligibility(params.eligible);
          break;
        }
        case 13: {
          const params = searchbox.mojom.Page_OnShowAiModePrefChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onShowAiModePrefChanged(params.canShow);
          break;
        }
      }
    });
  }
};

searchbox.mojom.PageReceiver = searchbox.mojom.PageReceiver;

searchbox.mojom.PagePtr = searchbox.mojom.PageRemote;
searchbox.mojom.PageRequest = searchbox.mojom.PagePendingReceiver;

