// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/omnibox/omnibox_internals.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};


// Enum: AutocompleteControllerType
mojom.AutocompleteControllerType = {
  kBrowser: 0,
  kDebug: 1,
  kMlDisabledDebug: 2,
};

// Struct: ACMatchClassification
mojom.ACMatchClassificationSpec = {
  $: {
    structSpec: {
      name: 'mojom.ACMatchClassification',
      packedSize: 16,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'style', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Signals
mojom.SignalsSpec = {
  $: {
    structSpec: {
      name: 'mojom.Signals',
      packedSize: 144,
      fields: [
        { name: 'typed_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'visit_count', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'elapsed_time_last_visit_secs', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: true },
        { name: 'shortcut_visit_count', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'shortest_shortcut_len', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'elapsed_time_last_shortcut_visit_sec', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: true },
        { name: 'is_host_only', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
        { name: 'num_bookmarks_of_url', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'first_bookmark_title_match_position', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'total_bookmark_title_match_length', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'num_input_terms_matched_by_bookmark_title', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'first_url_match_position', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'total_url_match_length', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'host_match_at_word_boundary', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
        { name: 'total_host_match_length', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'total_path_match_length', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'total_query_or_ref_match_length', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'total_title_match_length', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'has_non_scheme_www_match', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
        { name: 'num_input_terms_matched_by_title', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'num_input_terms_matched_by_url', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'length_of_url', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'site_engagement', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Float, nullable: true },
        { name: 'allowed_to_be_default_match', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
        { name: 'search_suggest_relevance', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'is_search_suggest_entity', packedOffset: 124, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
        { name: 'is_verbatim', packedOffset: 124, packedBitOffset: 1, type: mojo.internal.Bool, nullable: true },
        { name: 'is_navsuggest', packedOffset: 124, packedBitOffset: 2, type: mojo.internal.Bool, nullable: true },
        { name: 'is_search_suggest_tail', packedOffset: 124, packedBitOffset: 3, type: mojo.internal.Bool, nullable: true },
        { name: 'is_answer_suggest', packedOffset: 124, packedBitOffset: 4, type: mojo.internal.Bool, nullable: true },
        { name: 'is_calculator_suggest', packedOffset: 124, packedBitOffset: 5, type: mojo.internal.Bool, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AutocompleteMatch
mojom.AutocompleteMatchSpec = {
  $: {
    structSpec: {
      name: 'mojom.AutocompleteMatch',
      packedSize: 240,
      fields: [
        { name: 'provider_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'provider_done', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'relevance', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'deletable', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'fill_into_edit', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'inline_autocompletion', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'destination_url', packedOffset: 48, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'stripped_destination_url', packedOffset: 56, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'icon', packedOffset: 64, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'image', packedOffset: 72, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'contents', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'contents_class', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'description', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'description_class', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'swap_contents_and_description', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'answer', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'transition', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'allowed_to_be_default_match', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'type', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_search_type', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'aqs_type_subtypes', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'has_tab_match', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'associated_keyword', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'keyword', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'starred', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'duplicates', packedOffset: 200, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'from_previous', packedOffset: 204, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'pedal_id', packedOffset: 212, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'scoring_signals', packedOffset: 216, packedBitOffset: 0, type: mojom.SignalsSpec, nullable: false },
        { name: 'additional_info', packedOffset: 224, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'provider_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OmniboxResponse
mojom.OmniboxResponseSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxResponse',
      packedSize: 72,
      fields: [
        { name: 'cursor_position', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'time_since_omnibox_started_ms', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'done', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'host', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_typed_host', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'input_text', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'combined_results', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'results_by_provider', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartOmniboxQuery
mojom.OmniboxPageHandler_StartOmniboxQuery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPageHandler.StartOmniboxQuery_Params',
      packedSize: 56,
      fields: [
        { name: 'input_string', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'reset_autocomplete_controller', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'cursor_position', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'zero_suggest', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'prevent_inline_autocomplete', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'prefer_keyword', packedOffset: 20, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'current_url', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'page_classification', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

mojom.OmniboxPageHandler_GetMlModelVersion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPageHandler.GetMlModelVersion_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'signals', packedOffset: 0, packedBitOffset: 0, type: mojom.SignalsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.OmniboxPageHandler_StartMl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPageHandler.StartMl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'score', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'autocomplete_controller_type', packedOffset: 0, packedBitOffset: 0, type: mojom.AutocompleteControllerTypeSpec, nullable: false },
        { name: 'input_text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'autocomplete_controller_type', packedOffset: 0, packedBitOffset: 0, type: mojom.AutocompleteControllerTypeSpec, nullable: false },
        { name: 'response', packedOffset: 8, packedBitOffset: 0, type: mojom.OmniboxResponseSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'autocomplete_controller_type', packedOffset: 0, packedBitOffset: 0, type: mojom.AutocompleteControllerTypeSpec, nullable: false },
        { name: 'input_text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'matches', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'autocomplete_controller_type', packedOffset: 0, packedBitOffset: 0, type: mojom.AutocompleteControllerTypeSpec, nullable: false },
        { name: 'image_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'image_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
mojom.OmniboxPagePtr = mojom.OmniboxPageRemote;
mojom.OmniboxPageRequest = mojom.OmniboxPagePendingReceiver;

