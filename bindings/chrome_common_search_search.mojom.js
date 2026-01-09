// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/search/search.mojom
// Module: search.mojom

'use strict';

// Module namespace
var search = search || {};
search.mojom = search.mojom || {};


// Interface: EmbeddedSearchConnector
search.mojom.EmbeddedSearchConnectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'search.mojom.EmbeddedSearchConnector';
  }

  connect(embedded_search, client) {
    // Method: Connect
    // Call: Connect(embedded_search, client)
  }

};

search.mojom.EmbeddedSearchConnectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: EmbeddedSearch
search.mojom.EmbeddedSearchPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'search.mojom.EmbeddedSearch';
  }

  focusOmnibox(page_seq_no, focus) {
    // Method: FocusOmnibox
    // Call: FocusOmnibox(page_seq_no, focus)
  }

  deleteMostVisitedItem(page_seq_no, url) {
    // Method: DeleteMostVisitedItem
    // Call: DeleteMostVisitedItem(page_seq_no, url)
  }

  undoAllMostVisitedDeletions(page_seq_no) {
    // Method: UndoAllMostVisitedDeletions
    // Call: UndoAllMostVisitedDeletions(page_seq_no)
  }

  undoMostVisitedDeletion(page_seq_no, url) {
    // Method: UndoMostVisitedDeletion
    // Call: UndoMostVisitedDeletion(page_seq_no, url)
  }

};

search.mojom.EmbeddedSearchRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: EmbeddedSearchClient
search.mojom.EmbeddedSearchClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'search.mojom.EmbeddedSearchClient';
  }

  setPageSequenceNumber(page_seq_no) {
    // Method: SetPageSequenceNumber
    // Call: SetPageSequenceNumber(page_seq_no)
  }

  focusChanged(new_focus_state, reason) {
    // Method: FocusChanged
    // Call: FocusChanged(new_focus_state, reason)
  }

  mostVisitedInfoChanged(most_visited_info) {
    // Method: MostVisitedInfoChanged
    // Call: MostVisitedInfoChanged(most_visited_info)
  }

  setInputInProgress(input_in_progress) {
    // Method: SetInputInProgress
    // Call: SetInputInProgress(input_in_progress)
  }

  themeChanged(theme) {
    // Method: ThemeChanged
    // Call: ThemeChanged(theme)
  }

};

search.mojom.EmbeddedSearchClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
