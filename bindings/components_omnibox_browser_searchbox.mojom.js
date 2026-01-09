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
  kNormal: 0,
  kKeywordMode: 1,
  kFocusedButtonAction: 2,
  kFocusedButtonRemoveSuggestion: 3,
};

// Struct: ACMatchClassification
searchbox.mojom.ACMatchClassification = class {
  constructor(values = {}) {
    this.style = values.style !== undefined ? values.style : 0;
  }
};

// Struct: Action
searchbox.mojom.Action = class {
  constructor(values = {}) {
    this.a11y_label = values.a11y_label !== undefined ? values.a11y_label : 0;
  }
};

// Struct: SuggestionAnswer
searchbox.mojom.SuggestionAnswer = class {
  constructor(values = {}) {
    this.second_line = values.second_line !== undefined ? values.second_line : "";
  }
};

// Struct: AutocompleteMatch
searchbox.mojom.AutocompleteMatch = class {
  constructor(values = {}) {
    this.is_noncanned_aim_suggestion = values.is_noncanned_aim_suggestion !== undefined ? values.is_noncanned_aim_suggestion : 0;
    this.answer = values.answer !== undefined ? values.answer : null;
    this.supports_deletion = values.supports_deletion !== undefined ? values.supports_deletion : 0;
    this.has_instant_keyword = values.has_instant_keyword !== undefined ? values.has_instant_keyword : false;
    this.keyword_chip_hint = values.keyword_chip_hint !== undefined ? values.keyword_chip_hint : "";
    this.keyword_chip_a11y = values.keyword_chip_a11y !== undefined ? values.keyword_chip_a11y : "";
  }
};

// Struct: TabInfo
searchbox.mojom.TabInfo = class {
  constructor(values = {}) {
    this.last_active = values.last_active !== undefined ? values.last_active : 0;
  }
};

// Struct: FileAttachment
searchbox.mojom.FileAttachment = class {
  constructor(values = {}) {
    this.image_data_url = values.image_data_url !== undefined ? values.image_data_url : "";
  }
};

// Struct: TabAttachment
searchbox.mojom.TabAttachment = class {
  constructor(values = {}) {
    this.url = values.url !== undefined ? values.url : 0;
  }
};

// Struct: SearchContext
searchbox.mojom.SearchContext = class {
  constructor(values = {}) {
    this.tool_mode = values.tool_mode !== undefined ? values.tool_mode : "";
  }
};

// Struct: SelectedFileInfo
searchbox.mojom.SelectedFileInfo = class {
  constructor(values = {}) {
    this.selection_time = values.selection_time !== undefined ? values.selection_time : false;
  }
};

// Struct: SuggestionGroup
searchbox.mojom.SuggestionGroup = class {
  constructor(values = {}) {
    this.SideType.kDefaultPrimary = values.SideType.kDefaultPrimary !== undefined ? values.SideType.kDefaultPrimary : "";
  }
};

// Struct: AutocompleteResult
searchbox.mojom.AutocompleteResult = class {
  constructor(values = {}) {
    this.smart_compose_inline_hint = values.smart_compose_inline_hint !== undefined ? values.smart_compose_inline_hint : 0;
  }
};

// Struct: OmniboxPopupSelection
searchbox.mojom.OmniboxPopupSelection = class {
  constructor(values = {}) {
    this.action_index = values.action_index !== undefined ? values.action_index : 0;
  }
};

// Struct: PlaceholderConfig
searchbox.mojom.PlaceholderConfig = class {
  constructor(values = {}) {
    this.fade_text_animation_duration = values.fade_text_animation_duration !== undefined ? values.fade_text_animation_duration : 0;
  }
};

// Interface: PageHandler
searchbox.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'searchbox.mojom.PageHandler';
  }

  setPage(page) {
    // Method: SetPage
    // Call: SetPage(page)
  }

  onFocusChanged(focused) {
    // Method: OnFocusChanged
    // Call: OnFocusChanged(focused)
  }

  queryAutocomplete(input, prevent_inline_autocomplete) {
    // Method: QueryAutocomplete
    // Call: QueryAutocomplete(input, prevent_inline_autocomplete)
  }

  stopAutocomplete(clear_result) {
    // Method: StopAutocomplete
    // Call: StopAutocomplete(clear_result)
  }

  openAutocompleteMatch(line, url, are_matches_showing, mouse_button, alt_key, ctrl_key, meta_key, shift_key) {
    // Method: OpenAutocompleteMatch
    // Call: OpenAutocompleteMatch(line, url, are_matches_showing, mouse_button, alt_key, ctrl_key, meta_key, shift_key)
  }

  onNavigationLikely(line, url, navigation_predictor) {
    // Method: OnNavigationLikely
    // Call: OnNavigationLikely(line, url, navigation_predictor)
  }

  deleteAutocompleteMatch(line, url) {
    // Method: DeleteAutocompleteMatch
    // Call: DeleteAutocompleteMatch(line, url)
  }

  activateKeyword(line, url, match_selection_timestamp, is_mouse_event) {
    // Method: ActivateKeyword
    // Call: ActivateKeyword(line, url, match_selection_timestamp, is_mouse_event)
  }

  showContextMenu(point) {
    // Method: ShowContextMenu
    // Call: ShowContextMenu(point)
  }

  executeAction(line, action_index, url, match_selection_timestamp, mouse_button, alt_key, ctrl_key, meta_key, shift_key) {
    // Method: ExecuteAction
    // Call: ExecuteAction(line, action_index, url, match_selection_timestamp, mouse_button, alt_key, ctrl_key, meta_key, shift_key)
  }

  onThumbnailRemoved() {
    // Method: OnThumbnailRemoved
    // Call: OnThumbnailRemoved()
  }

  getPlaceholderConfig() {
    // Method: GetPlaceholderConfig
    return new Promise((resolve) => {
      // Call: GetPlaceholderConfig()
      resolve({});
    });
  }

  getRecentTabs() {
    // Method: GetRecentTabs
    return new Promise((resolve) => {
      // Call: GetRecentTabs()
      resolve({});
    });
  }

  getTabPreview(tab_id) {
    // Method: GetTabPreview
    return new Promise((resolve) => {
      // Call: GetTabPreview(tab_id)
      resolve({});
    });
  }

  notifySessionStarted() {
    // Method: NotifySessionStarted
    // Call: NotifySessionStarted()
  }

  notifySessionAbandoned() {
    // Method: NotifySessionAbandoned
    // Call: NotifySessionAbandoned()
  }

  addFileContext(file_info, file_bytes) {
    // Method: AddFileContext
    return new Promise((resolve) => {
      // Call: AddFileContext(file_info, file_bytes)
      resolve({});
    });
  }

  addTabContext(tab_id, delay_upload) {
    // Method: AddTabContext
    return new Promise((resolve) => {
      // Call: AddTabContext(tab_id, delay_upload)
      resolve({});
    });
  }

  deleteContext(token, from_automatic_chip) {
    // Method: DeleteContext
    // Call: DeleteContext(token, from_automatic_chip)
  }

  clearFiles() {
    // Method: ClearFiles
    // Call: ClearFiles()
  }

  submitQuery(query_text, mouse_button, alt_key, ctrl_key, meta_key, shift_key) {
    // Method: SubmitQuery
    // Call: SubmitQuery(query_text, mouse_button, alt_key, ctrl_key, meta_key, shift_key)
  }

  openLensSearch() {
    // Method: OpenLensSearch
    // Call: OpenLensSearch()
  }

};

searchbox.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
searchbox.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'searchbox.mojom.Page';
  }

  autocompleteResultChanged(result) {
    // Method: AutocompleteResultChanged
    // Call: AutocompleteResultChanged(result)
  }

  updateSelection(old_selection, selection) {
    // Method: UpdateSelection
    // Call: UpdateSelection(old_selection, selection)
  }

  setKeywordSelected(is_keyword_selected) {
    // Method: SetKeywordSelected
    // Call: SetKeywordSelected(is_keyword_selected)
  }

  onShow() {
    // Method: OnShow
    // Call: OnShow()
  }

  setInputText(input) {
    // Method: SetInputText
    // Call: SetInputText(input)
  }

  setThumbnail(thumbnail_url, is_deletable) {
    // Method: SetThumbnail
    // Call: SetThumbnail(thumbnail_url, is_deletable)
  }

  onContextualInputStatusChanged(token, status, error_type) {
    // Method: OnContextualInputStatusChanged
    // Call: OnContextualInputStatusChanged(token, status, error_type)
  }

  onTabStripChanged() {
    // Method: OnTabStripChanged
    // Call: OnTabStripChanged()
  }

  addFileContext(token, file_info) {
    // Method: AddFileContext
    // Call: AddFileContext(token, file_info)
  }

  updateAutoSuggestedTabContext(tab) {
    // Method: UpdateAutoSuggestedTabContext
    // Call: UpdateAutoSuggestedTabContext(tab)
  }

  updateLensSearchEligibility(eligible) {
    // Method: UpdateLensSearchEligibility
    // Call: UpdateLensSearchEligibility(eligible)
  }

  updateContentSharingPolicy(enabled) {
    // Method: UpdateContentSharingPolicy
    // Call: UpdateContentSharingPolicy(enabled)
  }

  updateAimEligibility(eligible) {
    // Method: UpdateAimEligibility
    // Call: UpdateAimEligibility(eligible)
  }

  onShowAiModePrefChanged(canShow) {
    // Method: OnShowAiModePrefChanged
    // Call: OnShowAiModePrefChanged(canShow)
  }

};

searchbox.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
