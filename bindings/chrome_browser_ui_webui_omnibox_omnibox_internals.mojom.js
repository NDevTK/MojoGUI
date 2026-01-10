// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/omnibox/omnibox_internals.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};
var url = url || {};


// Enum: AutocompleteControllerType
mojom.AutocompleteControllerType = {
  kBrowser: 0,
  kDebug: 1,
  kMlDisabledDebug: 2,
};
mojom.AutocompleteControllerTypeSpec = { $: mojo.internal.Enum() };

// Struct: ACMatchClassification
mojom.ACMatchClassificationSpec = {
  $: {
    structSpec: {
      name: 'mojom.ACMatchClassification',
      packedSize: 16,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'style', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Signals
mojom.SignalsSpec = {
  $: {
    structSpec: {
      name: 'mojom.Signals',
      packedSize: 112,
      fields: [
        { name: 'typed_count_$flag', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'typed_count_$value', originalFieldName: 'typed_count' } },
        { name: 'typed_count_$value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'typed_count_$flag', originalFieldName: 'typed_count' } },
        { name: 'visit_count_$flag', packedOffset: 92, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'visit_count_$value', originalFieldName: 'visit_count' } },
        { name: 'visit_count_$value', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'visit_count_$flag', originalFieldName: 'visit_count' } },
        { name: 'elapsed_time_last_visit_secs_$flag', packedOffset: 92, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'elapsed_time_last_visit_secs_$value', originalFieldName: 'elapsed_time_last_visit_secs' } },
        { name: 'elapsed_time_last_visit_secs_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'elapsed_time_last_visit_secs_$flag', originalFieldName: 'elapsed_time_last_visit_secs' } },
        { name: 'shortcut_visit_count_$flag', packedOffset: 92, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'shortcut_visit_count_$value', originalFieldName: 'shortcut_visit_count' } },
        { name: 'shortcut_visit_count_$value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'shortcut_visit_count_$flag', originalFieldName: 'shortcut_visit_count' } },
        { name: 'shortest_shortcut_len_$flag', packedOffset: 92, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'shortest_shortcut_len_$value', originalFieldName: 'shortest_shortcut_len' } },
        { name: 'shortest_shortcut_len_$value', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'shortest_shortcut_len_$flag', originalFieldName: 'shortest_shortcut_len' } },
        { name: 'elapsed_time_last_shortcut_visit_sec_$flag', packedOffset: 92, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'elapsed_time_last_shortcut_visit_sec_$value', originalFieldName: 'elapsed_time_last_shortcut_visit_sec' } },
        { name: 'elapsed_time_last_shortcut_visit_sec_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'elapsed_time_last_shortcut_visit_sec_$flag', originalFieldName: 'elapsed_time_last_shortcut_visit_sec' } },
        { name: 'is_host_only_$flag', packedOffset: 92, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_host_only_$value', originalFieldName: 'is_host_only' } },
        { name: 'is_host_only_$value', packedOffset: 92, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_host_only_$flag', originalFieldName: 'is_host_only' } },
        { name: 'num_bookmarks_of_url_$flag', packedOffset: 93, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'num_bookmarks_of_url_$value', originalFieldName: 'num_bookmarks_of_url' } },
        { name: 'num_bookmarks_of_url_$value', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'num_bookmarks_of_url_$flag', originalFieldName: 'num_bookmarks_of_url' } },
        { name: 'first_bookmark_title_match_position_$flag', packedOffset: 93, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'first_bookmark_title_match_position_$value', originalFieldName: 'first_bookmark_title_match_position' } },
        { name: 'first_bookmark_title_match_position_$value', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'first_bookmark_title_match_position_$flag', originalFieldName: 'first_bookmark_title_match_position' } },
        { name: 'total_bookmark_title_match_length_$flag', packedOffset: 93, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'total_bookmark_title_match_length_$value', originalFieldName: 'total_bookmark_title_match_length' } },
        { name: 'total_bookmark_title_match_length_$value', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'total_bookmark_title_match_length_$flag', originalFieldName: 'total_bookmark_title_match_length' } },
        { name: 'num_input_terms_matched_by_bookmark_title_$flag', packedOffset: 93, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'num_input_terms_matched_by_bookmark_title_$value', originalFieldName: 'num_input_terms_matched_by_bookmark_title' } },
        { name: 'num_input_terms_matched_by_bookmark_title_$value', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'num_input_terms_matched_by_bookmark_title_$flag', originalFieldName: 'num_input_terms_matched_by_bookmark_title' } },
        { name: 'first_url_match_position_$flag', packedOffset: 93, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'first_url_match_position_$value', originalFieldName: 'first_url_match_position' } },
        { name: 'first_url_match_position_$value', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'first_url_match_position_$flag', originalFieldName: 'first_url_match_position' } },
        { name: 'total_url_match_length_$flag', packedOffset: 93, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'total_url_match_length_$value', originalFieldName: 'total_url_match_length' } },
        { name: 'total_url_match_length_$value', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'total_url_match_length_$flag', originalFieldName: 'total_url_match_length' } },
        { name: 'host_match_at_word_boundary_$flag', packedOffset: 93, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'host_match_at_word_boundary_$value', originalFieldName: 'host_match_at_word_boundary' } },
        { name: 'host_match_at_word_boundary_$value', packedOffset: 93, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'host_match_at_word_boundary_$flag', originalFieldName: 'host_match_at_word_boundary' } },
        { name: 'total_host_match_length_$flag', packedOffset: 94, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'total_host_match_length_$value', originalFieldName: 'total_host_match_length' } },
        { name: 'total_host_match_length_$value', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'total_host_match_length_$flag', originalFieldName: 'total_host_match_length' } },
        { name: 'total_path_match_length_$flag', packedOffset: 94, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'total_path_match_length_$value', originalFieldName: 'total_path_match_length' } },
        { name: 'total_path_match_length_$value', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'total_path_match_length_$flag', originalFieldName: 'total_path_match_length' } },
        { name: 'total_query_or_ref_match_length_$flag', packedOffset: 94, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'total_query_or_ref_match_length_$value', originalFieldName: 'total_query_or_ref_match_length' } },
        { name: 'total_query_or_ref_match_length_$value', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'total_query_or_ref_match_length_$flag', originalFieldName: 'total_query_or_ref_match_length' } },
        { name: 'total_title_match_length_$flag', packedOffset: 94, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'total_title_match_length_$value', originalFieldName: 'total_title_match_length' } },
        { name: 'total_title_match_length_$value', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'total_title_match_length_$flag', originalFieldName: 'total_title_match_length' } },
        { name: 'has_non_scheme_www_match_$flag', packedOffset: 94, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'has_non_scheme_www_match_$value', originalFieldName: 'has_non_scheme_www_match' } },
        { name: 'has_non_scheme_www_match_$value', packedOffset: 94, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'has_non_scheme_www_match_$flag', originalFieldName: 'has_non_scheme_www_match' } },
        { name: 'num_input_terms_matched_by_title_$flag', packedOffset: 94, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'num_input_terms_matched_by_title_$value', originalFieldName: 'num_input_terms_matched_by_title' } },
        { name: 'num_input_terms_matched_by_title_$value', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'num_input_terms_matched_by_title_$flag', originalFieldName: 'num_input_terms_matched_by_title' } },
        { name: 'num_input_terms_matched_by_url_$flag', packedOffset: 94, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'num_input_terms_matched_by_url_$value', originalFieldName: 'num_input_terms_matched_by_url' } },
        { name: 'num_input_terms_matched_by_url_$value', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'num_input_terms_matched_by_url_$flag', originalFieldName: 'num_input_terms_matched_by_url' } },
        { name: 'length_of_url_$flag', packedOffset: 95, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'length_of_url_$value', originalFieldName: 'length_of_url' } },
        { name: 'length_of_url_$value', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'length_of_url_$flag', originalFieldName: 'length_of_url' } },
        { name: 'site_engagement_$flag', packedOffset: 95, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'site_engagement_$value', originalFieldName: 'site_engagement' } },
        { name: 'site_engagement_$value', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'site_engagement_$flag', originalFieldName: 'site_engagement' } },
        { name: 'allowed_to_be_default_match_$flag', packedOffset: 95, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'allowed_to_be_default_match_$value', originalFieldName: 'allowed_to_be_default_match' } },
        { name: 'allowed_to_be_default_match_$value', packedOffset: 95, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'allowed_to_be_default_match_$flag', originalFieldName: 'allowed_to_be_default_match' } },
        { name: 'search_suggest_relevance_$flag', packedOffset: 95, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'search_suggest_relevance_$value', originalFieldName: 'search_suggest_relevance' } },
        { name: 'search_suggest_relevance_$value', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'search_suggest_relevance_$flag', originalFieldName: 'search_suggest_relevance' } },
        { name: 'is_search_suggest_entity_$flag', packedOffset: 95, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_search_suggest_entity_$value', originalFieldName: 'is_search_suggest_entity' } },
        { name: 'is_search_suggest_entity_$value', packedOffset: 95, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_search_suggest_entity_$flag', originalFieldName: 'is_search_suggest_entity' } },
        { name: 'is_verbatim_$flag', packedOffset: 95, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_verbatim_$value', originalFieldName: 'is_verbatim' } },
        { name: 'is_verbatim_$value', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_verbatim_$flag', originalFieldName: 'is_verbatim' } },
        { name: 'is_navsuggest_$flag', packedOffset: 96, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_navsuggest_$value', originalFieldName: 'is_navsuggest' } },
        { name: 'is_navsuggest_$value', packedOffset: 96, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_navsuggest_$flag', originalFieldName: 'is_navsuggest' } },
        { name: 'is_search_suggest_tail_$flag', packedOffset: 96, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_search_suggest_tail_$value', originalFieldName: 'is_search_suggest_tail' } },
        { name: 'is_search_suggest_tail_$value', packedOffset: 96, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_search_suggest_tail_$flag', originalFieldName: 'is_search_suggest_tail' } },
        { name: 'is_answer_suggest_$flag', packedOffset: 96, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_answer_suggest_$value', originalFieldName: 'is_answer_suggest' } },
        { name: 'is_answer_suggest_$value', packedOffset: 96, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_answer_suggest_$flag', originalFieldName: 'is_answer_suggest' } },
        { name: 'is_calculator_suggest_$flag', packedOffset: 96, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_calculator_suggest_$value', originalFieldName: 'is_calculator_suggest' } },
        { name: 'is_calculator_suggest_$value', packedOffset: 97, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_calculator_suggest_$flag', originalFieldName: 'is_calculator_suggest' } },
      ],
      versions: [{version: 0, packedSize: 112}]
    }
  }
};

// Struct: AutocompleteMatch
mojom.AutocompleteMatchSpec = {
  $: {
    structSpec: {
      name: 'mojom.AutocompleteMatch',
      packedSize: 176,
      fields: [
        { name: 'provider_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'provider_done', packedOffset: 164, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'relevance', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'deletable', packedOffset: 164, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'fill_into_edit', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'inline_autocompletion', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'destination_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'stripped_destination_url', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'icon', packedOffset: 40, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'image', packedOffset: 48, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'contents', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'contents_class', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array(mojom.ACMatchClassificationSpec, false), nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'description_class', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array(mojom.ACMatchClassificationSpec, false), nullable: false, minVersion: 0 },
        { name: 'swap_contents_and_description', packedOffset: 164, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'answer', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'transition', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'allowed_to_be_default_match', packedOffset: 164, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_search_type', packedOffset: 164, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'aqs_type_subtypes', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'has_tab_match', packedOffset: 164, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'associated_keyword', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'keyword', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'starred', packedOffset: 164, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'duplicates', packedOffset: 156, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'from_previous', packedOffset: 164, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'pedal_id', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'scoring_signals', packedOffset: 136, packedBitOffset: 0, type: mojom.SignalsSpec, nullable: false, minVersion: 0 },
        { name: 'additional_info', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 176}]
    }
  }
};

// Struct: AutocompleteResultsForProvider
mojom.AutocompleteResultsForProviderSpec = {
  $: {
    structSpec: {
      name: 'mojom.AutocompleteResultsForProvider',
      packedSize: 24,
      fields: [
        { name: 'provider_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojom.AutocompleteMatchSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: OmniboxResponse
mojom.OmniboxResponseSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxResponse',
      packedSize: 64,
      fields: [
        { name: 'cursor_position', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'time_since_omnibox_started_ms', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'done', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_typed_host', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'input_text', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'combined_results', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojom.AutocompleteMatchSpec, false), nullable: false, minVersion: 0 },
        { name: 'results_by_provider', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojom.AutocompleteResultsForProviderSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Interface: OmniboxPageHandler
mojom.OmniboxPageHandler = {};

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
      [page]);
  }

  startOmniboxQuery(input_string, reset_autocomplete_controller, cursor_position, zero_suggest, prevent_inline_autocomplete, prefer_keyword, current_url, page_classification) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mojom.OmniboxPageHandler_StartOmniboxQuery_ParamsSpec,
      null,
      [input_string, reset_autocomplete_controller, cursor_position, zero_suggest, prevent_inline_autocomplete, prefer_keyword, current_url, page_classification]);
  }

  getMlModelVersion() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mojom.OmniboxPageHandler_GetMlModelVersion_ParamsSpec,
      mojom.OmniboxPageHandler_GetMlModelVersion_ResponseParamsSpec,
      []);
  }

  startMl(signals) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      mojom.OmniboxPageHandler_StartMl_ParamsSpec,
      mojom.OmniboxPageHandler_StartMl_ResponseParamsSpec,
      [signals]);
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

// ParamsSpec for SetClientPage
mojom.OmniboxPageHandler_SetClientPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPageHandler.SetClientPage_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(mojom.OmniboxPageRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartOmniboxQuery
mojom.OmniboxPageHandler_StartOmniboxQuery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPageHandler.StartOmniboxQuery_Params',
      packedSize: 40,
      fields: [
        { name: 'input_string', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'reset_autocomplete_controller', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'cursor_position', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'zero_suggest', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'prevent_inline_autocomplete', packedOffset: 24, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'prefer_keyword', packedOffset: 24, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'current_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'page_classification', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for GetMlModelVersion
mojom.OmniboxPageHandler_GetMlModelVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPageHandler.GetMlModelVersion_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

mojom.OmniboxPageHandler_GetMlModelVersion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPageHandler.GetMlModelVersion_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartMl
mojom.OmniboxPageHandler_StartMl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPageHandler.StartMl_Params',
      packedSize: 16,
      fields: [
        { name: 'signals', packedOffset: 0, packedBitOffset: 0, type: mojom.SignalsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

mojom.OmniboxPageHandler_StartMl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPageHandler.StartMl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'score', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
mojom.OmniboxPageHandlerPtr = mojom.OmniboxPageHandlerRemote;
mojom.OmniboxPageHandlerRequest = mojom.OmniboxPageHandlerPendingReceiver;


// Interface: OmniboxPage
mojom.OmniboxPage = {};

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
      [autocomplete_controller_type, input_text]);
  }

  handleNewAutocompleteResponse(autocomplete_controller_type, response) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mojom.OmniboxPage_HandleNewAutocompleteResponse_ParamsSpec,
      null,
      [autocomplete_controller_type, response]);
  }

  handleNewMlResponse(autocomplete_controller_type, input_text, matches) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mojom.OmniboxPage_HandleNewMlResponse_ParamsSpec,
      null,
      [autocomplete_controller_type, input_text, matches]);
  }

  handleAnswerIconImageData(autocomplete_controller_type, image_url, image_data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      mojom.OmniboxPage_HandleAnswerIconImageData_ParamsSpec,
      null,
      [autocomplete_controller_type, image_url, image_data]);
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

// ParamsSpec for HandleNewAutocompleteQuery
mojom.OmniboxPage_HandleNewAutocompleteQuery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPage.HandleNewAutocompleteQuery_Params',
      packedSize: 24,
      fields: [
        { name: 'autocomplete_controller_type', packedOffset: 8, packedBitOffset: 0, type: mojom.AutocompleteControllerTypeSpec, nullable: false, minVersion: 0 },
        { name: 'input_text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for HandleNewAutocompleteResponse
mojom.OmniboxPage_HandleNewAutocompleteResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPage.HandleNewAutocompleteResponse_Params',
      packedSize: 24,
      fields: [
        { name: 'autocomplete_controller_type', packedOffset: 8, packedBitOffset: 0, type: mojom.AutocompleteControllerTypeSpec, nullable: false, minVersion: 0 },
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojom.OmniboxResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for HandleNewMlResponse
mojom.OmniboxPage_HandleNewMlResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPage.HandleNewMlResponse_Params',
      packedSize: 32,
      fields: [
        { name: 'autocomplete_controller_type', packedOffset: 16, packedBitOffset: 0, type: mojom.AutocompleteControllerTypeSpec, nullable: false, minVersion: 0 },
        { name: 'input_text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'matches', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojom.AutocompleteMatchSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for HandleAnswerIconImageData
mojom.OmniboxPage_HandleAnswerIconImageData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPage.HandleAnswerIconImageData_Params',
      packedSize: 32,
      fields: [
        { name: 'autocomplete_controller_type', packedOffset: 16, packedBitOffset: 0, type: mojom.AutocompleteControllerTypeSpec, nullable: false, minVersion: 0 },
        { name: 'image_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'image_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
mojom.OmniboxPagePtr = mojom.OmniboxPageRemote;
mojom.OmniboxPageRequest = mojom.OmniboxPagePendingReceiver;

