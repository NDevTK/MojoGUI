// Auto-generated MojoJS binding
// Source: chromium_src/components/omnibox/browser/searchbox.mojom
// Module: searchbox.mojom

'use strict';

// Module namespace
var searchbox = searchbox || {};
searchbox.mojom = searchbox.mojom || {};


// Enum: ToolMode
searchbox.mojom.ToolMode = {
  kDefault: 0,
  kDeepSearch: 1,
  kCreateImage: 2,
};
searchbox.mojom.ToolModeSpec = { $: mojo.internal.Enum() };

// Enum: SideType
searchbox.mojom.SideType = {
  kDefaultPrimary: 0,
  kSecondary: 1,
};
searchbox.mojom.SideTypeSpec = { $: mojo.internal.Enum() };

// Enum: RenderType
searchbox.mojom.RenderType = {
  kDefaultVertical: 0,
  kHorizontal: 1,
  kGrid: 2,
};
searchbox.mojom.RenderTypeSpec = { $: mojo.internal.Enum() };

// Enum: SelectionLineState
searchbox.mojom.SelectionLineState = {
  kNormal: 0,
  kKeywordMode: 1,
  kFocusedButtonAction: 2,
  kFocusedButtonRemoveSuggestion: 3,
};
searchbox.mojom.SelectionLineStateSpec = { $: mojo.internal.Enum() };

// Union: SearchContextAttachment
searchbox.mojom.SearchContextAttachmentSpec = { $: mojo.internal.Union(
    'searchbox.mojom.SearchContextAttachment', {
      'file_attachment': {
        'ordinal': 0,
        'type': searchbox.mojom.FileAttachmentSpec,
      }},
      'tab_attachment': {
        'ordinal': 1,
        'type': searchbox.mojom.TabAttachmentSpec,
      }},
    })
};

// Struct: ACMatchClassification
searchbox.mojom.ACMatchClassificationSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.ACMatchClassification',
      packedSize: 16,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'style', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Action
searchbox.mojom.ActionSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.Action',
      packedSize: 40,
      fields: [
        { name: 'hint', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'suggestion_contents', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'icon_path', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'a11y_label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: SuggestionAnswer
searchbox.mojom.SuggestionAnswerSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.SuggestionAnswer',
      packedSize: 24,
      fields: [
        { name: 'first_line', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'second_line', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AutocompleteMatch
searchbox.mojom.AutocompleteMatchSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.AutocompleteMatch',
      packedSize: 168,
      fields: [
        { name: 'is_hidden', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'a11y_label', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'allowed_to_be_default_match', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'actions', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(searchbox.mojom.ActionSpec, false), nullable: false, minVersion: 0 },
        { name: 'answer', packedOffset: 24, packedBitOffset: 0, type: searchbox.mojom.SuggestionAnswerSpec, nullable: true, minVersion: 0 },
        { name: 'contents', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'contents_class', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(searchbox.mojom.ACMatchClassificationSpec, false), nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'description_class', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(searchbox.mojom.ACMatchClassificationSpec, false), nullable: false, minVersion: 0 },
        { name: 'destination_url', packedOffset: 64, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'inline_autocompletion', packedOffset: 72, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'fill_into_edit', packedOffset: 80, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'is_weather_answer_suggestion_$flag', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_weather_answer_suggestion_$value', originalFieldName: 'is_weather_answer_suggestion' } },
        { name: 'is_weather_answer_suggestion_$value', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_weather_answer_suggestion_$flag', originalFieldName: 'is_weather_answer_suggestion' } },
        { name: 'icon_path', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'icon_url', packedOffset: 96, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'image_dominant_color', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'image_url', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_noncanned_aim_suggestion', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_rich_suggestion', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_search_type', packedOffset: 0, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_enterprise_search_aggregator_people_type', packedOffset: 0, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'remove_button_a11y_label', packedOffset: 128, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'swap_contents_and_description', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'suggestion_group_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'supports_deletion', packedOffset: 1, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'tail_suggest_common_prefix', packedOffset: 136, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'has_instant_keyword', packedOffset: 1, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'keyword_chip_hint', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'keyword_chip_a11y', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 168}]
    }
  }
};

// Struct: TabInfo
searchbox.mojom.TabInfoSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.TabInfo',
      packedSize: 40,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'show_in_current_tab_chip', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'show_in_previous_tab_chip', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'last_active', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: FileAttachment
searchbox.mojom.FileAttachmentSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.FileAttachment',
      packedSize: 40,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'mime_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'image_data_url', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: TabAttachment
searchbox.mojom.TabAttachmentSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.TabAttachment',
      packedSize: 32,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SearchContext
searchbox.mojom.SearchContextSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.SearchContext',
      packedSize: 32,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'attachments', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(searchbox.mojom.SearchContextAttachmentSpec, false), nullable: false, minVersion: 0 },
        { name: 'tool_mode', packedOffset: 16, packedBitOffset: 0, type: searchbox.mojom.ToolModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SelectedFileInfo
searchbox.mojom.SelectedFileInfoSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.SelectedFileInfo',
      packedSize: 48,
      fields: [
        { name: 'file_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'mime_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'image_data_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'is_deletable', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'selection_time', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.JSTimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: SuggestionGroup
searchbox.mojom.SuggestionGroupSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.SuggestionGroup',
      packedSize: 24,
      fields: [
        { name: 'header', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'render_type', packedOffset: 8, packedBitOffset: 0, type: searchbox.mojom.RenderTypeSpec, nullable: false, minVersion: 0 },
        { name: 'side_type', packedOffset: 12, packedBitOffset: 0, type: searchbox.mojom.SideTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AutocompleteResult
searchbox.mojom.AutocompleteResultSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.AutocompleteResult',
      packedSize: 40,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'suggestion_groups_map', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int32, searchbox.mojom.SuggestionGroupSpec, false), nullable: false, minVersion: 0 },
        { name: 'matches', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(searchbox.mojom.AutocompleteMatchSpec, false), nullable: false, minVersion: 0 },
        { name: 'smart_compose_inline_hint', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: OmniboxPopupSelection
searchbox.mojom.OmniboxPopupSelectionSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.OmniboxPopupSelection',
      packedSize: 16,
      fields: [
        { name: 'line', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 4, packedBitOffset: 0, type: searchbox.mojom.SelectionLineStateSpec, nullable: false, minVersion: 0 },
        { name: 'action_index', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PlaceholderConfig
searchbox.mojom.PlaceholderConfigSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PlaceholderConfig',
      packedSize: 32,
      fields: [
        { name: 'texts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.String16Spec, false), nullable: false, minVersion: 0 },
        { name: 'change_text_animation_interval', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'fade_text_animation_duration', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: PageHandler
searchbox.mojom.PageHandler = {};

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
      [page]);
  }

  onFocusChanged(focused) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec,
      null,
      [focused]);
  }

  queryAutocomplete(input, prevent_inline_autocomplete) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec,
      null,
      [input, prevent_inline_autocomplete]);
  }

  stopAutocomplete(clear_result) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec,
      null,
      [clear_result]);
  }

  openAutocompleteMatch(line, url, are_matches_showing, mouse_button, alt_key, ctrl_key, meta_key, shift_key) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec,
      null,
      [line, url, are_matches_showing, mouse_button, alt_key, ctrl_key, meta_key, shift_key]);
  }

  onNavigationLikely(line, url, navigation_predictor) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec,
      null,
      [line, url, navigation_predictor]);
  }

  deleteAutocompleteMatch(line, url) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec,
      null,
      [line, url]);
  }

  activateKeyword(line, url, match_selection_timestamp, is_mouse_event) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec,
      null,
      [line, url, match_selection_timestamp, is_mouse_event]);
  }

  showContextMenu(point) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      searchbox.mojom.PageHandler_ShowContextMenu_ParamsSpec,
      null,
      [point]);
  }

  executeAction(line, action_index, url, match_selection_timestamp, mouse_button, alt_key, ctrl_key, meta_key, shift_key) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec,
      null,
      [line, action_index, url, match_selection_timestamp, mouse_button, alt_key, ctrl_key, meta_key, shift_key]);
  }

  onThumbnailRemoved() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec,
      null,
      []);
  }

  getPlaceholderConfig() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec,
      searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParamsSpec,
      []);
  }

  getRecentTabs() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec,
      searchbox.mojom.PageHandler_GetRecentTabs_ResponseParamsSpec,
      []);
  }

  getTabPreview(tab_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec,
      searchbox.mojom.PageHandler_GetTabPreview_ResponseParamsSpec,
      [tab_id]);
  }

  notifySessionStarted() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec,
      null,
      []);
  }

  notifySessionAbandoned() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec,
      null,
      []);
  }

  addFileContext(file_info, file_bytes) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      searchbox.mojom.PageHandler_AddFileContext_ParamsSpec,
      searchbox.mojom.PageHandler_AddFileContext_ResponseParamsSpec,
      [file_info, file_bytes]);
  }

  addTabContext(tab_id, delay_upload) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      searchbox.mojom.PageHandler_AddTabContext_ParamsSpec,
      searchbox.mojom.PageHandler_AddTabContext_ResponseParamsSpec,
      [tab_id, delay_upload]);
  }

  deleteContext(token, from_automatic_chip) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      searchbox.mojom.PageHandler_DeleteContext_ParamsSpec,
      null,
      [token, from_automatic_chip]);
  }

  clearFiles() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      searchbox.mojom.PageHandler_ClearFiles_ParamsSpec,
      null,
      []);
  }

  submitQuery(query_text, mouse_button, alt_key, ctrl_key, meta_key, shift_key) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec,
      null,
      [query_text, mouse_button, alt_key, ctrl_key, meta_key, shift_key]);
  }

  openLensSearch() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec,
      null,
      []);
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

// ParamsSpec for SetPage
searchbox.mojom.PageHandler_SetPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.SetPage_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnFocusChanged
searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.OnFocusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'focused', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for QueryAutocomplete
searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.QueryAutocomplete_Params',
      packedSize: 24,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'prevent_inline_autocomplete', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for StopAutocomplete
searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.StopAutocomplete_Params',
      packedSize: 16,
      fields: [
        { name: 'clear_result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenAutocompleteMatch
searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.OpenAutocompleteMatch_Params',
      packedSize: 24,
      fields: [
        { name: 'line', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'are_matches_showing', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'mouse_button', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'alt_key', packedOffset: 1, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ctrl_key', packedOffset: 1, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'meta_key', packedOffset: 1, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shift_key', packedOffset: 1, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnNavigationLikely
searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.OnNavigationLikely_Params',
      packedSize: 24,
      fields: [
        { name: 'line', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'navigation_predictor', packedOffset: 4, packedBitOffset: 0, type: omnibox.mojom.NavigationPredictorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DeleteAutocompleteMatch
searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.DeleteAutocompleteMatch_Params',
      packedSize: 24,
      fields: [
        { name: 'line', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ActivateKeyword
searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.ActivateKeyword_Params',
      packedSize: 32,
      fields: [
        { name: 'line', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'match_selection_timestamp', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'is_mouse_event', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ShowContextMenu
searchbox.mojom.PageHandler_ShowContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.ShowContextMenu_Params',
      packedSize: 16,
      fields: [
        { name: 'point', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ExecuteAction
searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.ExecuteAction_Params',
      packedSize: 32,
      fields: [
        { name: 'line', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'action_index', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'match_selection_timestamp', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'mouse_button', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'alt_key', packedOffset: 3, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ctrl_key', packedOffset: 3, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'meta_key', packedOffset: 3, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shift_key', packedOffset: 3, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnThumbnailRemoved
searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.OnThumbnailRemoved_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetPlaceholderConfig
searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.GetPlaceholderConfig_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: searchbox.mojom.PlaceholderConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetRecentTabs
searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.GetRecentTabs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

searchbox.mojom.PageHandler_GetRecentTabs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tabs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(searchbox.mojom.TabInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetTabPreview
searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.GetTabPreview_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

searchbox.mojom.PageHandler_GetTabPreview_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'preview_data_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifySessionStarted
searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.NotifySessionStarted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for NotifySessionAbandoned
searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.NotifySessionAbandoned_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for AddFileContext
searchbox.mojom.PageHandler_AddFileContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.AddFileContext_Params',
      packedSize: 32,
      fields: [
        { name: 'file_info', packedOffset: 0, packedBitOffset: 0, type: searchbox.mojom.SelectedFileInfoSpec, nullable: false, minVersion: 0 },
        { name: 'file_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

searchbox.mojom.PageHandler_AddFileContext_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddTabContext
searchbox.mojom.PageHandler_AddTabContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.AddTabContext_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'delay_upload', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

searchbox.mojom.PageHandler_AddTabContext_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteContext
searchbox.mojom.PageHandler_DeleteContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.DeleteContext_Params',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'from_automatic_chip', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ClearFiles
searchbox.mojom.PageHandler_ClearFiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.ClearFiles_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SubmitQuery
searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.SubmitQuery_Params',
      packedSize: 24,
      fields: [
        { name: 'query_text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'mouse_button', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'alt_key', packedOffset: 9, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ctrl_key', packedOffset: 9, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'meta_key', packedOffset: 9, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shift_key', packedOffset: 9, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OpenLensSearch
searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.PageHandler.OpenLensSearch_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
searchbox.mojom.PageHandlerPtr = searchbox.mojom.PageHandlerRemote;
searchbox.mojom.PageHandlerRequest = searchbox.mojom.PageHandlerPendingReceiver;


// Interface: Page
searchbox.mojom.Page = {};

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
      [result]);
  }

  updateSelection(old_selection, selection) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      searchbox.mojom.Page_UpdateSelection_ParamsSpec,
      null,
      [old_selection, selection]);
  }

  setKeywordSelected(is_keyword_selected) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      searchbox.mojom.Page_SetKeywordSelected_ParamsSpec,
      null,
      [is_keyword_selected]);
  }

  onShow() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      searchbox.mojom.Page_OnShow_ParamsSpec,
      null,
      []);
  }

  setInputText(input) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      searchbox.mojom.Page_SetInputText_ParamsSpec,
      null,
      [input]);
  }

  setThumbnail(thumbnail_url, is_deletable) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      searchbox.mojom.Page_SetThumbnail_ParamsSpec,
      null,
      [thumbnail_url, is_deletable]);
  }

  onContextualInputStatusChanged(token, status, error_type) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec,
      null,
      [token, status, error_type]);
  }

  onTabStripChanged() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      searchbox.mojom.Page_OnTabStripChanged_ParamsSpec,
      null,
      []);
  }

  addFileContext(token, file_info) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      searchbox.mojom.Page_AddFileContext_ParamsSpec,
      null,
      [token, file_info]);
  }

  updateAutoSuggestedTabContext(tab) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec,
      null,
      [tab]);
  }

  updateLensSearchEligibility(eligible) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec,
      null,
      [eligible]);
  }

  updateContentSharingPolicy(enabled) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec,
      null,
      [enabled]);
  }

  updateAimEligibility(eligible) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      searchbox.mojom.Page_UpdateAimEligibility_ParamsSpec,
      null,
      [eligible]);
  }

  onShowAiModePrefChanged(canShow) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      searchbox.mojom.Page_OnShowAiModePrefChanged_ParamsSpec,
      null,
      [canShow]);
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

// ParamsSpec for AutocompleteResultChanged
searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.Page.AutocompleteResultChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: searchbox.mojom.AutocompleteResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateSelection
searchbox.mojom.Page_UpdateSelection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.Page.UpdateSelection_Params',
      packedSize: 24,
      fields: [
        { name: 'old_selection', packedOffset: 0, packedBitOffset: 0, type: searchbox.mojom.OmniboxPopupSelectionSpec, nullable: false, minVersion: 0 },
        { name: 'selection', packedOffset: 8, packedBitOffset: 0, type: searchbox.mojom.OmniboxPopupSelectionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetKeywordSelected
searchbox.mojom.Page_SetKeywordSelected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.Page.SetKeywordSelected_Params',
      packedSize: 16,
      fields: [
        { name: 'is_keyword_selected', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnShow
searchbox.mojom.Page_OnShow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.Page.OnShow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetInputText
searchbox.mojom.Page_SetInputText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.Page.SetInputText_Params',
      packedSize: 16,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetThumbnail
searchbox.mojom.Page_SetThumbnail_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.Page.SetThumbnail_Params',
      packedSize: 24,
      fields: [
        { name: 'thumbnail_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_deletable', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnContextualInputStatusChanged
searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.Page.OnContextualInputStatusChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: composebox_query.mojom.FileUploadStatusSpec, nullable: false, minVersion: 0 },
        { name: 'error_type', packedOffset: 12, packedBitOffset: 0, type: composebox_query.mojom.FileUploadErrorTypeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnTabStripChanged
searchbox.mojom.Page_OnTabStripChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.Page.OnTabStripChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for AddFileContext
searchbox.mojom.Page_AddFileContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.Page.AddFileContext_Params',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'file_info', packedOffset: 8, packedBitOffset: 0, type: searchbox.mojom.SelectedFileInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateAutoSuggestedTabContext
searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.Page.UpdateAutoSuggestedTabContext_Params',
      packedSize: 16,
      fields: [
        { name: 'tab', packedOffset: 0, packedBitOffset: 0, type: searchbox.mojom.TabInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateLensSearchEligibility
searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.Page.UpdateLensSearchEligibility_Params',
      packedSize: 16,
      fields: [
        { name: 'eligible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateContentSharingPolicy
searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.Page.UpdateContentSharingPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateAimEligibility
searchbox.mojom.Page_UpdateAimEligibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.Page.UpdateAimEligibility_Params',
      packedSize: 16,
      fields: [
        { name: 'eligible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnShowAiModePrefChanged
searchbox.mojom.Page_OnShowAiModePrefChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'searchbox.mojom.Page.OnShowAiModePrefChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'canShow', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
searchbox.mojom.PagePtr = searchbox.mojom.PageRemote;
searchbox.mojom.PageRequest = searchbox.mojom.PagePendingReceiver;

