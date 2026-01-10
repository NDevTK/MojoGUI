// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/history/history.mojom
// Module: history.mojom

'use strict';

// Module namespace
var history = history || {};
history.mojom = history.mojom || {};
var url = url || {};


// Enum: FilteringBehavior
history.mojom.mojom.FilteringBehavior = {
  kUnknown: 0,
  kAllow: 1,
  kBlock: 2,
  kInvalid: 3,
};
history.mojom.mojom.FilteringBehaviorSpec = { $: mojo.internal.Enum() };

// Struct: QueryState
history.mojom.mojom.QueryStateSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.QueryState',
      packedSize: 32,
      fields: [
        { name: 'incremental', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'querying', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'search_term', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'after', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: HistoryQuery
history.mojom.mojom.HistoryQuerySpec = {
  $: {
    structSpec: {
      name: 'history.mojom.HistoryQuery',
      packedSize: 24,
      fields: [
        { name: 'term', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'finished', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DebugInfo
history.mojom.mojom.DebugInfoSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.DebugInfo',
      packedSize: 24,
      fields: [
        { name: 'is_url_in_local_database', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'visit_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'typed_count', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: HistoryEntry
history.mojom.mojom.HistoryEntrySpec = {
  $: {
    structSpec: {
      name: 'history.mojom.HistoryEntry',
      packedSize: 136,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'domain', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'fallback_favicon_text', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'time', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'all_timestamps', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Double, false), nullable: false, minVersion: 0 },
        { name: 'date_short', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device_name', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device_type', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'date_time_of_day', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'date_relative_day', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'selected', packedOffset: 124, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'readableTimestamp', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'snippet', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'starred', packedOffset: 124, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'host_filtering_behavior', packedOffset: 120, packedBitOffset: 0, type: history.mojom.FilteringBehaviorSpec, nullable: false, minVersion: 0 },
        { name: 'blocked_visit', packedOffset: 124, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_url_in_remote_user_data', packedOffset: 124, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_actor_visit', packedOffset: 124, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'remote_icon_url_for_uma', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'debug', packedOffset: 112, packedBitOffset: 0, type: history.mojom.DebugInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 136}]
    }
  }
};

// Struct: QueryResult
history.mojom.mojom.QueryResultSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.QueryResult',
      packedSize: 24,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: history.mojom.HistoryQuerySpec, nullable: true, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(history.mojom.HistoryEntrySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: RemovalItem
history.mojom.mojom.RemovalItemSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.RemovalItem',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'timestamps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Double, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AccountInfo
history.mojom.mojom.AccountInfoSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.AccountInfo',
      packedSize: 32,
      fields: [
        { name: 'account_image_src', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'email', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: PageHandler
history.mojom.mojom.PageHandler = {};

history.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'history.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new history.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

history.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setPage(page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      history.mojom.mojom.PageHandler_SetPage_ParamsSpec,
      null,
      [page]);
  }

  queryHistory(query, max_results, begin_time) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      history.mojom.mojom.PageHandler_QueryHistory_ParamsSpec,
      history.mojom.mojom.PageHandler_QueryHistory_ResponseParamsSpec,
      [query, max_results, begin_time]);
  }

  queryHistoryContinuation() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      history.mojom.mojom.PageHandler_QueryHistoryContinuation_ParamsSpec,
      history.mojom.mojom.PageHandler_QueryHistoryContinuation_ResponseParamsSpec,
      []);
  }

  removeVisits(items) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      history.mojom.mojom.PageHandler_RemoveVisits_ParamsSpec,
      null,
      [items]);
  }

  openClearBrowsingDataDialog() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      history.mojom.mojom.PageHandler_OpenClearBrowsingDataDialog_ParamsSpec,
      null,
      []);
  }

  removeBookmark(url) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      history.mojom.mojom.PageHandler_RemoveBookmark_ParamsSpec,
      null,
      [url]);
  }

  setLastSelectedTab(last_tab) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      history.mojom.mojom.PageHandler_SetLastSelectedTab_ParamsSpec,
      null,
      [last_tab]);
  }

  showSidePanelUI() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      history.mojom.mojom.PageHandler_ShowSidePanelUI_ParamsSpec,
      null,
      []);
  }

  requestAccountInfo() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      history.mojom.mojom.PageHandler_RequestAccountInfo_ParamsSpec,
      history.mojom.mojom.PageHandler_RequestAccountInfo_ResponseParamsSpec,
      []);
  }

  turnOnHistorySync() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      history.mojom.mojom.PageHandler_TurnOnHistorySync_ParamsSpec,
      null,
      []);
  }

  shouldShowHistoryPageHistorySyncPromo() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      history.mojom.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ParamsSpec,
      history.mojom.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ResponseParamsSpec,
      []);
  }

  recordHistoryPageHistorySyncPromoDismissed() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      history.mojom.mojom.PageHandler_RecordHistoryPageHistorySyncPromoDismissed_ParamsSpec,
      null,
      []);
  }

  incrementHistoryPageHistorySyncPromoShownCount() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      history.mojom.mojom.PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_ParamsSpec,
      null,
      []);
  }

};

history.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new history.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for SetPage
history.mojom.mojom.PageHandler_SetPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.SetPage_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for QueryHistory
history.mojom.mojom.PageHandler_QueryHistory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.QueryHistory_Params',
      packedSize: 32,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'max_results', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'begin_time_$flag', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'begin_time_$value', originalFieldName: 'begin_time' } },
        { name: 'begin_time_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'begin_time_$flag', originalFieldName: 'begin_time' } },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

history.mojom.mojom.PageHandler_QueryHistory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.QueryHistory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: history.mojom.QueryResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for QueryHistoryContinuation
history.mojom.mojom.PageHandler_QueryHistoryContinuation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.QueryHistoryContinuation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

history.mojom.mojom.PageHandler_QueryHistoryContinuation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.QueryHistoryContinuation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: history.mojom.QueryResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RemoveVisits
history.mojom.mojom.PageHandler_RemoveVisits_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.RemoveVisits_Params',
      packedSize: 16,
      fields: [
        { name: 'items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(history.mojom.RemovalItemSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenClearBrowsingDataDialog
history.mojom.mojom.PageHandler_OpenClearBrowsingDataDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.OpenClearBrowsingDataDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RemoveBookmark
history.mojom.mojom.PageHandler_RemoveBookmark_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.RemoveBookmark_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetLastSelectedTab
history.mojom.mojom.PageHandler_SetLastSelectedTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.SetLastSelectedTab_Params',
      packedSize: 16,
      fields: [
        { name: 'last_tab', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowSidePanelUI
history.mojom.mojom.PageHandler_ShowSidePanelUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.ShowSidePanelUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RequestAccountInfo
history.mojom.mojom.PageHandler_RequestAccountInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.RequestAccountInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

history.mojom.mojom.PageHandler_RequestAccountInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.RequestAccountInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'account_info', packedOffset: 0, packedBitOffset: 0, type: history.mojom.AccountInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TurnOnHistorySync
history.mojom.mojom.PageHandler_TurnOnHistorySync_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.TurnOnHistorySync_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ShouldShowHistoryPageHistorySyncPromo
history.mojom.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.ShouldShowHistoryPageHistorySyncPromo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

history.mojom.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.ShouldShowHistoryPageHistorySyncPromo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'should_show', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordHistoryPageHistorySyncPromoDismissed
history.mojom.mojom.PageHandler_RecordHistoryPageHistorySyncPromoDismissed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.RecordHistoryPageHistorySyncPromoDismissed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for IncrementHistoryPageHistorySyncPromoShownCount
history.mojom.mojom.PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.IncrementHistoryPageHistorySyncPromoShownCount_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
history.mojom.mojom.PageHandlerPtr = history.mojom.mojom.PageHandlerRemote;
history.mojom.mojom.PageHandlerRequest = history.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
history.mojom.mojom.Page = {};

history.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'history.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new history.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

history.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onHistoryDeleted() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      history.mojom.mojom.Page_OnHistoryDeleted_ParamsSpec,
      null,
      []);
  }

  onHasOtherFormsChanged(has_other_forms) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      history.mojom.mojom.Page_OnHasOtherFormsChanged_ParamsSpec,
      null,
      [has_other_forms]);
  }

  sendAccountInfo(account_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      history.mojom.mojom.Page_SendAccountInfo_ParamsSpec,
      null,
      [account_info]);
  }

};

history.mojom.mojom.Page.getRemote = function() {
  let remote = new history.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnHistoryDeleted
history.mojom.mojom.Page_OnHistoryDeleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.Page.OnHistoryDeleted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnHasOtherFormsChanged
history.mojom.mojom.Page_OnHasOtherFormsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.Page.OnHasOtherFormsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'has_other_forms', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendAccountInfo
history.mojom.mojom.Page_SendAccountInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.Page.SendAccountInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'account_info', packedOffset: 0, packedBitOffset: 0, type: history.mojom.AccountInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
history.mojom.mojom.PagePtr = history.mojom.mojom.PageRemote;
history.mojom.mojom.PageRequest = history.mojom.mojom.PagePendingReceiver;

