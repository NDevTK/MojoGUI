// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/history/history.mojom
// Module: history.mojom

'use strict';

// Module namespace
var history = history || {};
history.mojom = history.mojom || {};


// Enum: FilteringBehavior
history.mojom.FilteringBehavior = {
  kUnknown: 0,
  kAllow: 1,
  kWarn: 2,
  kInvalid: 3,
};

// Struct: QueryState
history.mojom.QueryState = class {
  constructor(values = {}) {
    this.after = values.after !== undefined ? values.after : false;
  }
};

// Struct: HistoryQuery
history.mojom.HistoryQuery = class {
  constructor(values = {}) {
    this.finished = values.finished !== undefined ? values.finished : false;
  }
};

// Struct: DebugInfo
history.mojom.DebugInfo = class {
  constructor(values = {}) {
    this.typed_count = values.typed_count !== undefined ? values.typed_count : 0;
  }
};

// Struct: HistoryEntry
history.mojom.HistoryEntry = class {
  constructor(values = {}) {
    this.readableTimestamp = values.readableTimestamp !== undefined ? values.readableTimestamp : 0;
    this.debug = values.debug !== undefined ? values.debug : false;
  }
};

// Struct: QueryResult
history.mojom.QueryResult = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : [];
  }
};

// Struct: RemovalItem
history.mojom.RemovalItem = class {
  constructor(values = {}) {
    this.timestamps = values.timestamps !== undefined ? values.timestamps : 0;
  }
};

// Struct: AccountInfo
history.mojom.AccountInfo = class {
  constructor(values = {}) {
    this.email = values.email !== undefined ? values.email : "";
  }
};

// Interface: PageHandler
history.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'history.mojom.PageHandler';
  }

  setPage(page) {
    // Method: SetPage
    // Call: SetPage(page)
  }

  queryHistory(query, max_results, begin_time) {
    // Method: QueryHistory
    return new Promise((resolve) => {
      // Call: QueryHistory(query, max_results, begin_time)
      resolve({});
    });
  }

  queryHistoryContinuation() {
    // Method: QueryHistoryContinuation
    return new Promise((resolve) => {
      // Call: QueryHistoryContinuation()
      resolve({});
    });
  }

  removeVisits(items) {
    // Method: RemoveVisits
    // Call: RemoveVisits(items)
  }

  openClearBrowsingDataDialog() {
    // Method: OpenClearBrowsingDataDialog
    // Call: OpenClearBrowsingDataDialog()
  }

  removeBookmark(url) {
    // Method: RemoveBookmark
    // Call: RemoveBookmark(url)
  }

  setLastSelectedTab(last_tab) {
    // Method: SetLastSelectedTab
    // Call: SetLastSelectedTab(last_tab)
  }

  showSidePanelUI() {
    // Method: ShowSidePanelUI
    // Call: ShowSidePanelUI()
  }

  requestAccountInfo() {
    // Method: RequestAccountInfo
    return new Promise((resolve) => {
      // Call: RequestAccountInfo()
      resolve({});
    });
  }

  turnOnHistorySync() {
    // Method: TurnOnHistorySync
    // Call: TurnOnHistorySync()
  }

  shouldShowHistoryPageHistorySyncPromo() {
    // Method: ShouldShowHistoryPageHistorySyncPromo
    return new Promise((resolve) => {
      // Call: ShouldShowHistoryPageHistorySyncPromo()
      resolve({});
    });
  }

  recordHistoryPageHistorySyncPromoDismissed() {
    // Method: RecordHistoryPageHistorySyncPromoDismissed
    // Call: RecordHistoryPageHistorySyncPromoDismissed()
  }

  incrementHistoryPageHistorySyncPromoShownCount() {
    // Method: IncrementHistoryPageHistorySyncPromoShownCount
    // Call: IncrementHistoryPageHistorySyncPromoShownCount()
  }

};

history.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
history.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'history.mojom.Page';
  }

  onHistoryDeleted() {
    // Method: OnHistoryDeleted
    // Call: OnHistoryDeleted()
  }

  onHasOtherFormsChanged(has_other_forms) {
    // Method: OnHasOtherFormsChanged
    // Call: OnHasOtherFormsChanged(has_other_forms)
  }

  sendAccountInfo(account_info) {
    // Method: SendAccountInfo
    // Call: SendAccountInfo(account_info)
  }

};

history.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
