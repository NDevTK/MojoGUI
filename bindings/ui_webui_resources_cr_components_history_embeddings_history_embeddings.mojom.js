// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/history_embeddings/history_embeddings.mojom
// Module: history_embeddings.mojom

'use strict';

// Module namespace
var history_embeddings = history_embeddings || {};
history_embeddings.mojom = history_embeddings.mojom || {};


// Enum: AnswerStatus
history_embeddings.mojom.AnswerStatus = {
};

// Enum: UserFeedback
history_embeddings.mojom.UserFeedback = {
};

// Struct: AnswerData
history_embeddings.mojom.AnswerData = class {
  constructor(values = {}) {
    this.answer_text_directives = values.answer_text_directives !== undefined ? values.answer_text_directives : "";
  }
};

// Struct: SearchResultItem
history_embeddings.mojom.SearchResultItem = class {
  constructor(values = {}) {
    this.url_for_display = values.url_for_display !== undefined ? values.url_for_display : "";
    this.relative_time = values.relative_time !== undefined ? values.relative_time : "";
    this.short_date_time = values.short_date_time !== undefined ? values.short_date_time : "";
    this.source_passage = values.source_passage !== undefined ? values.source_passage : 0;
    this.is_url_known_to_sync = values.is_url_known_to_sync !== undefined ? values.is_url_known_to_sync : false;
  }
};

// Struct: SearchQuery
history_embeddings.mojom.SearchQuery = class {
  constructor(values = {}) {
    this.query = values.query !== undefined ? values.query : "";
    this.month = values.month !== undefined ? values.month : null;
    this.time_range_start = values.time_range_start !== undefined ? values.time_range_start : null;
  }
};

// Struct: SearchResult
history_embeddings.mojom.SearchResult = class {
  constructor(values = {}) {
    this.items = values.items !== undefined ? values.items : "";
  }
};

// Interface: PageHandler
history_embeddings.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'history_embeddings.mojom.PageHandler';
  }

  setPage(page) {
    // Method: SetPage
    // Call: SetPage(page)
  }

  search(query) {
    // Method: Search
    // Call: Search(query)
  }

  sendQualityLog(selected_indices, num_entered_chars) {
    // Method: SendQualityLog
    // Call: SendQualityLog(selected_indices, num_entered_chars)
  }

  recordSearchResultsMetrics(nonEmptyResults, userClickedResult, answerShown, answerCitationClicked, otherHistoryResultClicked, queryWordCount) {
    // Method: RecordSearchResultsMetrics
    // Call: RecordSearchResultsMetrics(nonEmptyResults, userClickedResult, answerShown, answerCitationClicked, otherHistoryResultClicked, queryWordCount)
  }

  setUserFeedback(feedback) {
    // Method: SetUserFeedback
    // Call: SetUserFeedback(feedback)
  }

  maybeShowFeaturePromo() {
    // Method: MaybeShowFeaturePromo
    // Call: MaybeShowFeaturePromo()
  }

  openSettingsPage() {
    // Method: OpenSettingsPage
    // Call: OpenSettingsPage()
  }

};

history_embeddings.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
history_embeddings.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'history_embeddings.mojom.Page';
  }

  searchResultChanged(result) {
    // Method: SearchResultChanged
    // Call: SearchResultChanged(result)
  }

};

history_embeddings.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
