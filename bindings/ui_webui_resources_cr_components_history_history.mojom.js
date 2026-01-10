// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/history/history.mojom
// Module: history.mojom

'use strict';

// Module namespace
var history = history || {};
history.mojom = history.mojom || {};
var url = url || {};

history.mojom.FilteringBehaviorSpec = { $: mojo.internal.Enum() };
history.mojom.QueryStateSpec = { $: {} };
history.mojom.HistoryQuerySpec = { $: {} };
history.mojom.DebugInfoSpec = { $: {} };
history.mojom.HistoryEntrySpec = { $: {} };
history.mojom.QueryResultSpec = { $: {} };
history.mojom.RemovalItemSpec = { $: {} };
history.mojom.AccountInfoSpec = { $: {} };
history.mojom.PageHandler = {};
history.mojom.PageHandler.$interfaceName = 'history.mojom.PageHandler';
history.mojom.PageHandler_SetPage_ParamsSpec = { $: {} };
history.mojom.PageHandler_QueryHistory_ParamsSpec = { $: {} };
history.mojom.PageHandler_QueryHistory_ResponseParamsSpec = { $: {} };
history.mojom.PageHandler_QueryHistoryContinuation_ParamsSpec = { $: {} };
history.mojom.PageHandler_QueryHistoryContinuation_ResponseParamsSpec = { $: {} };
history.mojom.PageHandler_RemoveVisits_ParamsSpec = { $: {} };
history.mojom.PageHandler_RemoveVisits_ResponseParamsSpec = { $: {} };
history.mojom.PageHandler_OpenClearBrowsingDataDialog_ParamsSpec = { $: {} };
history.mojom.PageHandler_RemoveBookmark_ParamsSpec = { $: {} };
history.mojom.PageHandler_SetLastSelectedTab_ParamsSpec = { $: {} };
history.mojom.PageHandler_ShowSidePanelUI_ParamsSpec = { $: {} };
history.mojom.PageHandler_RequestAccountInfo_ParamsSpec = { $: {} };
history.mojom.PageHandler_RequestAccountInfo_ResponseParamsSpec = { $: {} };
history.mojom.PageHandler_TurnOnHistorySync_ParamsSpec = { $: {} };
history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ParamsSpec = { $: {} };
history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ResponseParamsSpec = { $: {} };
history.mojom.PageHandler_RecordHistoryPageHistorySyncPromoDismissed_ParamsSpec = { $: {} };
history.mojom.PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_ParamsSpec = { $: {} };
history.mojom.Page = {};
history.mojom.Page.$interfaceName = 'history.mojom.Page';
history.mojom.Page_OnHistoryDeleted_ParamsSpec = { $: {} };
history.mojom.Page_OnHasOtherFormsChanged_ParamsSpec = { $: {} };
history.mojom.Page_SendAccountInfo_ParamsSpec = { $: {} };

// Enum: FilteringBehavior
history.mojom.FilteringBehavior = {
  kUnknown: -1,
  kAllow: 0,
  kBlock: 2,
  kInvalid: 3,
};

// Struct: QueryState
mojo.internal.Struct(
    history.mojom.QueryStateSpec, 'history.mojom.QueryState', [
      mojo.internal.StructField('incremental', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('querying', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('search_term', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('after', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: HistoryQuery
mojo.internal.Struct(
    history.mojom.HistoryQuerySpec, 'history.mojom.HistoryQuery', [
      mojo.internal.StructField('term', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('finished', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DebugInfo
mojo.internal.Struct(
    history.mojom.DebugInfoSpec, 'history.mojom.DebugInfo', [
      mojo.internal.StructField('is_url_in_local_database', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('visit_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('typed_count', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HistoryEntry
mojo.internal.Struct(
    history.mojom.HistoryEntrySpec, 'history.mojom.HistoryEntry', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('domain', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('fallback_favicon_text', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('time', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('all_timestamps', 40, 0, mojo.internal.Array(mojo.internal.Double, false), null, false, 0, undefined),
      mojo.internal.StructField('date_short', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_name', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_type', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('date_time_of_day', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('date_relative_day', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('selected', 124, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('readableTimestamp', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('snippet', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('starred', 124, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('host_filtering_behavior', 120, 0, history.mojom.FilteringBehaviorSpec, null, false, 0, undefined),
      mojo.internal.StructField('blocked_visit', 124, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_url_in_remote_user_data', 124, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_actor_visit', 124, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('remote_icon_url_for_uma', 104, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('debug', 112, 0, history.mojom.DebugInfoSpec, null, true, 0, undefined),
    ],
    [[0, 136]]);

// Struct: QueryResult
mojo.internal.Struct(
    history.mojom.QueryResultSpec, 'history.mojom.QueryResult', [
      mojo.internal.StructField('info', 0, 0, history.mojom.HistoryQuerySpec, null, true, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(history.mojom.HistoryEntrySpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RemovalItem
mojo.internal.Struct(
    history.mojom.RemovalItemSpec, 'history.mojom.RemovalItem', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('timestamps', 8, 0, mojo.internal.Array(mojo.internal.Double, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AccountInfo
mojo.internal.Struct(
    history.mojom.AccountInfoSpec, 'history.mojom.AccountInfo', [
      mojo.internal.StructField('account_image_src', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('email', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandler
mojo.internal.Struct(
    history.mojom.PageHandler_SetPage_ParamsSpec, 'history.mojom.PageHandler_SetPage_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(history.mojom.PageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.PageHandler_QueryHistory_ParamsSpec, 'history.mojom.PageHandler_QueryHistory_Params', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('max_results', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('begin_time_$flag', 20, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'begin_time_$value', originalFieldName: 'begin_time' }),
      mojo.internal.StructField('begin_time_$value', 8, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'begin_time_$flag', originalFieldName: 'begin_time' }),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    history.mojom.PageHandler_QueryHistory_ResponseParamsSpec, 'history.mojom.PageHandler_QueryHistory_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, history.mojom.QueryResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.PageHandler_QueryHistoryContinuation_ParamsSpec, 'history.mojom.PageHandler_QueryHistoryContinuation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history.mojom.PageHandler_QueryHistoryContinuation_ResponseParamsSpec, 'history.mojom.PageHandler_QueryHistoryContinuation_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, history.mojom.QueryResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.PageHandler_RemoveVisits_ParamsSpec, 'history.mojom.PageHandler_RemoveVisits_Params', [
      mojo.internal.StructField('items', 0, 0, mojo.internal.Array(history.mojom.RemovalItemSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.PageHandler_RemoveVisits_ResponseParamsSpec, 'history.mojom.PageHandler_RemoveVisits_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history.mojom.PageHandler_OpenClearBrowsingDataDialog_ParamsSpec, 'history.mojom.PageHandler_OpenClearBrowsingDataDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history.mojom.PageHandler_RemoveBookmark_ParamsSpec, 'history.mojom.PageHandler_RemoveBookmark_Params', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.PageHandler_SetLastSelectedTab_ParamsSpec, 'history.mojom.PageHandler_SetLastSelectedTab_Params', [
      mojo.internal.StructField('last_tab', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.PageHandler_ShowSidePanelUI_ParamsSpec, 'history.mojom.PageHandler_ShowSidePanelUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history.mojom.PageHandler_RequestAccountInfo_ParamsSpec, 'history.mojom.PageHandler_RequestAccountInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history.mojom.PageHandler_RequestAccountInfo_ResponseParamsSpec, 'history.mojom.PageHandler_RequestAccountInfo_ResponseParams', [
      mojo.internal.StructField('account_info', 0, 0, history.mojom.AccountInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.PageHandler_TurnOnHistorySync_ParamsSpec, 'history.mojom.PageHandler_TurnOnHistorySync_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ParamsSpec, 'history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ResponseParamsSpec, 'history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ResponseParams', [
      mojo.internal.StructField('should_show', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.PageHandler_RecordHistoryPageHistorySyncPromoDismissed_ParamsSpec, 'history.mojom.PageHandler_RecordHistoryPageHistorySyncPromoDismissed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history.mojom.PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_ParamsSpec, 'history.mojom.PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_Params', [
    ],
    [[0, 8]]);

history.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'history.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new history.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

history.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setPage(page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      history.mojom.PageHandler_SetPage_ParamsSpec,
      null,
      [page]);
  }

  queryHistory(query, max_results, begin_time) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      history.mojom.PageHandler_QueryHistory_ParamsSpec,
      history.mojom.PageHandler_QueryHistory_ResponseParamsSpec,
      [query, max_results, begin_time]);
  }

  queryHistoryContinuation() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      history.mojom.PageHandler_QueryHistoryContinuation_ParamsSpec,
      history.mojom.PageHandler_QueryHistoryContinuation_ResponseParamsSpec,
      []);
  }

  removeVisits(items) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      history.mojom.PageHandler_RemoveVisits_ParamsSpec,
      history.mojom.PageHandler_RemoveVisits_ResponseParamsSpec,
      [items]);
  }

  openClearBrowsingDataDialog() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      history.mojom.PageHandler_OpenClearBrowsingDataDialog_ParamsSpec,
      null,
      []);
  }

  removeBookmark(url) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      history.mojom.PageHandler_RemoveBookmark_ParamsSpec,
      null,
      [url]);
  }

  setLastSelectedTab(last_tab) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      history.mojom.PageHandler_SetLastSelectedTab_ParamsSpec,
      null,
      [last_tab]);
  }

  showSidePanelUI() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      history.mojom.PageHandler_ShowSidePanelUI_ParamsSpec,
      null,
      []);
  }

  requestAccountInfo() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      history.mojom.PageHandler_RequestAccountInfo_ParamsSpec,
      history.mojom.PageHandler_RequestAccountInfo_ResponseParamsSpec,
      []);
  }

  turnOnHistorySync() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      history.mojom.PageHandler_TurnOnHistorySync_ParamsSpec,
      null,
      []);
  }

  shouldShowHistoryPageHistorySyncPromo() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ParamsSpec,
      history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ResponseParamsSpec,
      []);
  }

  recordHistoryPageHistorySyncPromoDismissed() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      history.mojom.PageHandler_RecordHistoryPageHistorySyncPromoDismissed_ParamsSpec,
      null,
      []);
  }

  incrementHistoryPageHistorySyncPromoShownCount() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      history.mojom.PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_ParamsSpec,
      null,
      []);
  }

};

history.mojom.PageHandler.getRemote = function() {
  let remote = new history.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history.mojom.PageHandler',
    'context');
  return remote.$;
};

history.mojom.PageHandlerPtr = history.mojom.PageHandlerRemote;
history.mojom.PageHandlerRequest = history.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    history.mojom.Page_OnHistoryDeleted_ParamsSpec, 'history.mojom.Page_OnHistoryDeleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history.mojom.Page_OnHasOtherFormsChanged_ParamsSpec, 'history.mojom.Page_OnHasOtherFormsChanged_Params', [
      mojo.internal.StructField('has_other_forms', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.Page_SendAccountInfo_ParamsSpec, 'history.mojom.Page_SendAccountInfo_Params', [
      mojo.internal.StructField('account_info', 0, 0, history.mojom.AccountInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

history.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'history.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history.mojom.PagePendingReceiver,
      handle);
    this.$ = new history.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

history.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onHistoryDeleted() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      history.mojom.Page_OnHistoryDeleted_ParamsSpec,
      null,
      []);
  }

  onHasOtherFormsChanged(has_other_forms) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      history.mojom.Page_OnHasOtherFormsChanged_ParamsSpec,
      null,
      [has_other_forms]);
  }

  sendAccountInfo(account_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      history.mojom.Page_SendAccountInfo_ParamsSpec,
      null,
      [account_info]);
  }

};

history.mojom.Page.getRemote = function() {
  let remote = new history.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history.mojom.Page',
    'context');
  return remote.$;
};

history.mojom.PagePtr = history.mojom.PageRemote;
history.mojom.PageRequest = history.mojom.PagePendingReceiver;

