// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/omnibox/omnibox_internals.mojom
// Module: mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
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
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(mojom.OmniboxPageRemote), null, false, 0, undefined),
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.OmniboxPageHandler_SetClientPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.OmniboxPageHandler_StartOmniboxQuery_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.OmniboxPageHandler_GetMlModelVersion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.OmniboxPageHandler_StartMl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.OmniboxPageHandler_SetClientPage_ParamsSpec.$.structSpec);
          const result = this.impl.setClientPage(params.page);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.OmniboxPageHandler_StartOmniboxQuery_ParamsSpec.$.structSpec);
          const result = this.impl.startOmniboxQuery(params.input_string, params.reset_autocomplete_controller, params.cursor_position, params.zero_suggest, params.prevent_inline_autocomplete, params.prefer_keyword, params.current_url, params.page_classification);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.OmniboxPageHandler_GetMlModelVersion_ParamsSpec.$.structSpec);
          const result = this.impl.getMlModelVersion();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.OmniboxPageHandler_GetMlModelVersion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.OmniboxPageHandler_StartMl_ParamsSpec.$.structSpec);
          const result = this.impl.startMl(params.signals);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.OmniboxPageHandler_StartMl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.OmniboxPage_HandleNewAutocompleteQuery_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.OmniboxPage_HandleNewAutocompleteResponse_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.OmniboxPage_HandleNewMlResponse_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.OmniboxPage_HandleAnswerIconImageData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.OmniboxPage_HandleNewAutocompleteQuery_ParamsSpec.$.structSpec);
          const result = this.impl.handleNewAutocompleteQuery(params.autocomplete_controller_type, params.input_text);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.OmniboxPage_HandleNewAutocompleteResponse_ParamsSpec.$.structSpec);
          const result = this.impl.handleNewAutocompleteResponse(params.autocomplete_controller_type, params.response);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.OmniboxPage_HandleNewMlResponse_ParamsSpec.$.structSpec);
          const result = this.impl.handleNewMlResponse(params.autocomplete_controller_type, params.input_text, params.matches);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.OmniboxPage_HandleAnswerIconImageData_ParamsSpec.$.structSpec);
          const result = this.impl.handleAnswerIconImageData(params.autocomplete_controller_type, params.image_url, params.image_data);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

mojom.OmniboxPageReceiver = mojom.OmniboxPageReceiver;

mojom.OmniboxPagePtr = mojom.OmniboxPageRemote;
mojom.OmniboxPageRequest = mojom.OmniboxPagePendingReceiver;

