// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/omnibox/omnibox_internals.mojom
// Module: mojom

'use strict';

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
      mojo.internal.StructField('typed_count_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'typed_count_$value', originalFieldName: 'typed_count' }),
      mojo.internal.StructField('typed_count_$value', 4, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'typed_count_$flag', originalFieldName: 'typed_count' }),
      mojo.internal.StructField('visit_count_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'visit_count_$value', originalFieldName: 'visit_count' }),
      mojo.internal.StructField('visit_count_$value', 12, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'visit_count_$flag', originalFieldName: 'visit_count' }),
      mojo.internal.StructField('elapsed_time_last_visit_secs_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'elapsed_time_last_visit_secs_$value', originalFieldName: 'elapsed_time_last_visit_secs' }),
      mojo.internal.StructField('elapsed_time_last_visit_secs_$value', 24, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'elapsed_time_last_visit_secs_$flag', originalFieldName: 'elapsed_time_last_visit_secs' }),
      mojo.internal.StructField('shortcut_visit_count_$flag', 32, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'shortcut_visit_count_$value', originalFieldName: 'shortcut_visit_count' }),
      mojo.internal.StructField('shortcut_visit_count_$value', 36, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'shortcut_visit_count_$flag', originalFieldName: 'shortcut_visit_count' }),
      mojo.internal.StructField('shortest_shortcut_len_$flag', 40, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'shortest_shortcut_len_$value', originalFieldName: 'shortest_shortcut_len' }),
      mojo.internal.StructField('shortest_shortcut_len_$value', 44, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'shortest_shortcut_len_$flag', originalFieldName: 'shortest_shortcut_len' }),
      mojo.internal.StructField('elapsed_time_last_shortcut_visit_sec_$flag', 48, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'elapsed_time_last_shortcut_visit_sec_$value', originalFieldName: 'elapsed_time_last_shortcut_visit_sec' }),
      mojo.internal.StructField('elapsed_time_last_shortcut_visit_sec_$value', 56, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'elapsed_time_last_shortcut_visit_sec_$flag', originalFieldName: 'elapsed_time_last_shortcut_visit_sec' }),
      mojo.internal.StructField('is_host_only_$flag', 64, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_host_only_$value', originalFieldName: 'is_host_only' }),
      mojo.internal.StructField('is_host_only_$value', 64, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_host_only_$flag', originalFieldName: 'is_host_only' }),
      mojo.internal.StructField('num_bookmarks_of_url_$flag', 64, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'num_bookmarks_of_url_$value', originalFieldName: 'num_bookmarks_of_url' }),
      mojo.internal.StructField('num_bookmarks_of_url_$value', 68, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'num_bookmarks_of_url_$flag', originalFieldName: 'num_bookmarks_of_url' }),
      mojo.internal.StructField('first_bookmark_title_match_position_$flag', 72, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'first_bookmark_title_match_position_$value', originalFieldName: 'first_bookmark_title_match_position' }),
      mojo.internal.StructField('first_bookmark_title_match_position_$value', 76, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'first_bookmark_title_match_position_$flag', originalFieldName: 'first_bookmark_title_match_position' }),
      mojo.internal.StructField('total_bookmark_title_match_length_$flag', 80, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'total_bookmark_title_match_length_$value', originalFieldName: 'total_bookmark_title_match_length' }),
      mojo.internal.StructField('total_bookmark_title_match_length_$value', 84, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'total_bookmark_title_match_length_$flag', originalFieldName: 'total_bookmark_title_match_length' }),
      mojo.internal.StructField('num_input_terms_matched_by_bookmark_title_$flag', 88, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'num_input_terms_matched_by_bookmark_title_$value', originalFieldName: 'num_input_terms_matched_by_bookmark_title' }),
      mojo.internal.StructField('num_input_terms_matched_by_bookmark_title_$value', 92, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'num_input_terms_matched_by_bookmark_title_$flag', originalFieldName: 'num_input_terms_matched_by_bookmark_title' }),
      mojo.internal.StructField('first_url_match_position_$flag', 96, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'first_url_match_position_$value', originalFieldName: 'first_url_match_position' }),
      mojo.internal.StructField('first_url_match_position_$value', 100, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'first_url_match_position_$flag', originalFieldName: 'first_url_match_position' }),
      mojo.internal.StructField('total_url_match_length_$flag', 104, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'total_url_match_length_$value', originalFieldName: 'total_url_match_length' }),
      mojo.internal.StructField('total_url_match_length_$value', 108, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'total_url_match_length_$flag', originalFieldName: 'total_url_match_length' }),
      mojo.internal.StructField('host_match_at_word_boundary_$flag', 112, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'host_match_at_word_boundary_$value', originalFieldName: 'host_match_at_word_boundary' }),
      mojo.internal.StructField('host_match_at_word_boundary_$value', 112, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'host_match_at_word_boundary_$flag', originalFieldName: 'host_match_at_word_boundary' }),
      mojo.internal.StructField('total_host_match_length_$flag', 112, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'total_host_match_length_$value', originalFieldName: 'total_host_match_length' }),
      mojo.internal.StructField('total_host_match_length_$value', 116, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'total_host_match_length_$flag', originalFieldName: 'total_host_match_length' }),
      mojo.internal.StructField('total_path_match_length_$flag', 120, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'total_path_match_length_$value', originalFieldName: 'total_path_match_length' }),
      mojo.internal.StructField('total_path_match_length_$value', 124, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'total_path_match_length_$flag', originalFieldName: 'total_path_match_length' }),
      mojo.internal.StructField('total_query_or_ref_match_length_$flag', 128, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'total_query_or_ref_match_length_$value', originalFieldName: 'total_query_or_ref_match_length' }),
      mojo.internal.StructField('total_query_or_ref_match_length_$value', 132, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'total_query_or_ref_match_length_$flag', originalFieldName: 'total_query_or_ref_match_length' }),
      mojo.internal.StructField('total_title_match_length_$flag', 136, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'total_title_match_length_$value', originalFieldName: 'total_title_match_length' }),
      mojo.internal.StructField('total_title_match_length_$value', 140, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'total_title_match_length_$flag', originalFieldName: 'total_title_match_length' }),
      mojo.internal.StructField('has_non_scheme_www_match_$flag', 144, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'has_non_scheme_www_match_$value', originalFieldName: 'has_non_scheme_www_match' }),
      mojo.internal.StructField('has_non_scheme_www_match_$value', 144, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'has_non_scheme_www_match_$flag', originalFieldName: 'has_non_scheme_www_match' }),
      mojo.internal.StructField('num_input_terms_matched_by_title_$flag', 144, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'num_input_terms_matched_by_title_$value', originalFieldName: 'num_input_terms_matched_by_title' }),
      mojo.internal.StructField('num_input_terms_matched_by_title_$value', 148, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'num_input_terms_matched_by_title_$flag', originalFieldName: 'num_input_terms_matched_by_title' }),
      mojo.internal.StructField('num_input_terms_matched_by_url_$flag', 152, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'num_input_terms_matched_by_url_$value', originalFieldName: 'num_input_terms_matched_by_url' }),
      mojo.internal.StructField('num_input_terms_matched_by_url_$value', 156, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'num_input_terms_matched_by_url_$flag', originalFieldName: 'num_input_terms_matched_by_url' }),
      mojo.internal.StructField('length_of_url_$flag', 160, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'length_of_url_$value', originalFieldName: 'length_of_url' }),
      mojo.internal.StructField('length_of_url_$value', 164, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'length_of_url_$flag', originalFieldName: 'length_of_url' }),
      mojo.internal.StructField('site_engagement_$flag', 168, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'site_engagement_$value', originalFieldName: 'site_engagement' }),
      mojo.internal.StructField('site_engagement_$value', 172, 0, mojo.internal.Float, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'site_engagement_$flag', originalFieldName: 'site_engagement' }),
      mojo.internal.StructField('allowed_to_be_default_match_$flag', 176, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'allowed_to_be_default_match_$value', originalFieldName: 'allowed_to_be_default_match' }),
      mojo.internal.StructField('allowed_to_be_default_match_$value', 176, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'allowed_to_be_default_match_$flag', originalFieldName: 'allowed_to_be_default_match' }),
      mojo.internal.StructField('search_suggest_relevance_$flag', 176, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'search_suggest_relevance_$value', originalFieldName: 'search_suggest_relevance' }),
      mojo.internal.StructField('search_suggest_relevance_$value', 180, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'search_suggest_relevance_$flag', originalFieldName: 'search_suggest_relevance' }),
      mojo.internal.StructField('is_search_suggest_entity_$flag', 184, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_search_suggest_entity_$value', originalFieldName: 'is_search_suggest_entity' }),
      mojo.internal.StructField('is_search_suggest_entity_$value', 184, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_search_suggest_entity_$flag', originalFieldName: 'is_search_suggest_entity' }),
      mojo.internal.StructField('is_verbatim_$flag', 184, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_verbatim_$value', originalFieldName: 'is_verbatim' }),
      mojo.internal.StructField('is_verbatim_$value', 184, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_verbatim_$flag', originalFieldName: 'is_verbatim' }),
      mojo.internal.StructField('is_navsuggest_$flag', 184, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_navsuggest_$value', originalFieldName: 'is_navsuggest' }),
      mojo.internal.StructField('is_navsuggest_$value', 184, 5, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_navsuggest_$flag', originalFieldName: 'is_navsuggest' }),
      mojo.internal.StructField('is_search_suggest_tail_$flag', 184, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_search_suggest_tail_$value', originalFieldName: 'is_search_suggest_tail' }),
      mojo.internal.StructField('is_search_suggest_tail_$value', 184, 7, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_search_suggest_tail_$flag', originalFieldName: 'is_search_suggest_tail' }),
      mojo.internal.StructField('is_answer_suggest_$flag', 185, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_answer_suggest_$value', originalFieldName: 'is_answer_suggest' }),
      mojo.internal.StructField('is_answer_suggest_$value', 185, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_answer_suggest_$flag', originalFieldName: 'is_answer_suggest' }),
      mojo.internal.StructField('is_calculator_suggest_$flag', 185, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_calculator_suggest_$value', originalFieldName: 'is_calculator_suggest' }),
      mojo.internal.StructField('is_calculator_suggest_$value', 185, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_calculator_suggest_$flag', originalFieldName: 'is_calculator_suggest' }),
    ],
    [[0, 200]]);

// Struct: AutocompleteMatch
mojo.internal.Struct(
    mojom.AutocompleteMatchSpec, 'mojom.AutocompleteMatch', [
      mojo.internal.StructField('provider_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('provider_done', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('relevance', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('deletable', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('fill_into_edit', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('inline_autocompletion', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('destination_url', 40, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('stripped_destination_url', 48, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('icon', 56, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('image', 64, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('contents', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('contents_class', 80, 0, mojo.internal.Array(mojom.ACMatchClassificationSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('description', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description_class', 96, 0, mojo.internal.Array(mojom.ACMatchClassificationSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('swap_contents_and_description', 104, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('answer', 112, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('transition', 120, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('allowed_to_be_default_match', 128, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('type', 136, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_search_type', 144, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('aqs_type_subtypes', 152, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('has_tab_match', 160, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('associated_keyword', 168, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('keyword', 176, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('starred', 184, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('duplicates', 188, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('from_previous', 192, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('pedal_id', 196, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('scoring_signals', 200, 0, mojom.SignalsSpec, null, false, 0, undefined),
      mojo.internal.StructField('additional_info', 208, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 224]]);

// Struct: AutocompleteResultsForProvider
mojo.internal.Struct(
    mojom.AutocompleteResultsForProviderSpec, 'mojom.AutocompleteResultsForProvider', [
      mojo.internal.StructField('provider_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('results', 8, 0, mojo.internal.Array(mojom.AutocompleteMatchSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OmniboxResponse
mojo.internal.Struct(
    mojom.OmniboxResponseSpec, 'mojom.OmniboxResponse', [
      mojo.internal.StructField('cursor_position', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('time_since_omnibox_started_ms', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('done', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('host', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_typed_host', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('input_text', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('combined_results', 48, 0, mojo.internal.Array(mojom.AutocompleteMatchSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('results_by_provider', 56, 0, mojo.internal.Array(mojom.AutocompleteResultsForProviderSpec, false), null, false, 0, undefined),
    ],
    [[0, 72]]);

// Interface: OmniboxPageHandler
mojo.internal.Struct(
    mojom.OmniboxPageHandler_SetClientPage_ParamsSpec, 'mojom.OmniboxPageHandler_SetClientPage_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(mojom.OmniboxPageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.OmniboxPageHandler_StartOmniboxQuery_ParamsSpec, 'mojom.OmniboxPageHandler_StartOmniboxQuery_Params', [
      mojo.internal.StructField('input_string', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('reset_autocomplete_controller', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('cursor_position', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('zero_suggest', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prevent_inline_autocomplete', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prefer_keyword', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('current_url', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('page_classification', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

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
      mojo.internal.StructField('signals', 0, 0, mojom.SignalsSpec, null, false, 0, undefined),
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
};

mojom.OmniboxPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setClientPage(page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojom.OmniboxPageHandler_SetClientPage_ParamsSpec,
      null,
      [page],
      false);
  }

  startOmniboxQuery(input_string, reset_autocomplete_controller, cursor_position, zero_suggest, prevent_inline_autocomplete, prefer_keyword, current_url, page_classification) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mojom.OmniboxPageHandler_StartOmniboxQuery_ParamsSpec,
      null,
      [input_string, reset_autocomplete_controller, cursor_position, zero_suggest, prevent_inline_autocomplete, prefer_keyword, current_url, page_classification],
      false);
  }

  getMlModelVersion() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mojom.OmniboxPageHandler_GetMlModelVersion_ParamsSpec,
      mojom.OmniboxPageHandler_GetMlModelVersion_ResponseParamsSpec,
      [],
      false);
  }

  startMl(signals) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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

mojom.OmniboxPageHandlerPtr = mojom.OmniboxPageHandlerRemote;
mojom.OmniboxPageHandlerRequest = mojom.OmniboxPageHandlerPendingReceiver;


// Interface: OmniboxPage
mojo.internal.Struct(
    mojom.OmniboxPage_HandleNewAutocompleteQuery_ParamsSpec, 'mojom.OmniboxPage_HandleNewAutocompleteQuery_Params', [
      mojo.internal.StructField('autocomplete_controller_type', 0, 0, mojom.AutocompleteControllerTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('input_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojom.OmniboxPage_HandleNewAutocompleteResponse_ParamsSpec, 'mojom.OmniboxPage_HandleNewAutocompleteResponse_Params', [
      mojo.internal.StructField('autocomplete_controller_type', 0, 0, mojom.AutocompleteControllerTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('response', 8, 0, mojom.OmniboxResponseSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojom.OmniboxPage_HandleNewMlResponse_ParamsSpec, 'mojom.OmniboxPage_HandleNewMlResponse_Params', [
      mojo.internal.StructField('autocomplete_controller_type', 0, 0, mojom.AutocompleteControllerTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('input_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('matches', 16, 0, mojo.internal.Array(mojom.AutocompleteMatchSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojom.OmniboxPage_HandleAnswerIconImageData_ParamsSpec, 'mojom.OmniboxPage_HandleAnswerIconImageData_Params', [
      mojo.internal.StructField('autocomplete_controller_type', 0, 0, mojom.AutocompleteControllerTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('image_url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
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
};

mojom.OmniboxPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handleNewAutocompleteQuery(autocomplete_controller_type, input_text) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojom.OmniboxPage_HandleNewAutocompleteQuery_ParamsSpec,
      null,
      [autocomplete_controller_type, input_text],
      false);
  }

  handleNewAutocompleteResponse(autocomplete_controller_type, response) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mojom.OmniboxPage_HandleNewAutocompleteResponse_ParamsSpec,
      null,
      [autocomplete_controller_type, response],
      false);
  }

  handleNewMlResponse(autocomplete_controller_type, input_text, matches) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mojom.OmniboxPage_HandleNewMlResponse_ParamsSpec,
      null,
      [autocomplete_controller_type, input_text, matches],
      false);
  }

  handleAnswerIconImageData(autocomplete_controller_type, image_url, image_data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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

mojom.OmniboxPagePtr = mojom.OmniboxPageRemote;
mojom.OmniboxPageRequest = mojom.OmniboxPagePendingReceiver;

