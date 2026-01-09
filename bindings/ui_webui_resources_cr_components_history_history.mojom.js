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
  kBlock: 2,
  kInvalid: 3,
};

// Struct: QueryState
history.mojom.QueryStateSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.QueryState',
      packedSize: 16,
      fields: [
        { name: 'after', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HistoryQuery
history.mojom.HistoryQuerySpec = {
  $: {
    structSpec: {
      name: 'history.mojom.HistoryQuery',
      packedSize: 16,
      fields: [
        { name: 'finished', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DebugInfo
history.mojom.DebugInfoSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.DebugInfo',
      packedSize: 16,
      fields: [
        { name: 'typed_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HistoryEntry
history.mojom.HistoryEntrySpec = {
  $: {
    structSpec: {
      name: 'history.mojom.HistoryEntry',
      packedSize: 16,
      fields: [
        { name: 'debug', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: QueryResult
history.mojom.QueryResultSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.QueryResult',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RemovalItem
history.mojom.RemovalItemSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.RemovalItem',
      packedSize: 16,
      fields: [
        { name: 'timestamps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AccountInfo
history.mojom.AccountInfoSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.AccountInfo',
      packedSize: 16,
      fields: [
        { name: 'email', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageHandler
history.mojom.PageHandler = {};

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
      null,
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

// ParamsSpec for SetPage
history.mojom.PageHandler_SetPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.SetPage_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for QueryHistory
history.mojom.PageHandler_QueryHistory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.QueryHistory_Params',
      packedSize: 32,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'begin_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: true },
        { name: 'max_results', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

history.mojom.PageHandler_QueryHistory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.QueryHistory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for QueryHistoryContinuation
history.mojom.PageHandler_QueryHistoryContinuation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.QueryHistoryContinuation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

history.mojom.PageHandler_QueryHistoryContinuation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.QueryHistoryContinuation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveVisits
history.mojom.PageHandler_RemoveVisits_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.RemoveVisits_Params',
      packedSize: 16,
      fields: [
        { name: 'items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenClearBrowsingDataDialog
history.mojom.PageHandler_OpenClearBrowsingDataDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.OpenClearBrowsingDataDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveBookmark
history.mojom.PageHandler_RemoveBookmark_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.RemoveBookmark_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetLastSelectedTab
history.mojom.PageHandler_SetLastSelectedTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.SetLastSelectedTab_Params',
      packedSize: 16,
      fields: [
        { name: 'last_tab', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowSidePanelUI
history.mojom.PageHandler_ShowSidePanelUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.ShowSidePanelUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestAccountInfo
history.mojom.PageHandler_RequestAccountInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.RequestAccountInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

history.mojom.PageHandler_RequestAccountInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.RequestAccountInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'account_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TurnOnHistorySync
history.mojom.PageHandler_TurnOnHistorySync_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.TurnOnHistorySync_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShouldShowHistoryPageHistorySyncPromo
history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.ShouldShowHistoryPageHistorySyncPromo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.ShouldShowHistoryPageHistorySyncPromo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'should_show', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordHistoryPageHistorySyncPromoDismissed
history.mojom.PageHandler_RecordHistoryPageHistorySyncPromoDismissed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.RecordHistoryPageHistorySyncPromoDismissed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IncrementHistoryPageHistorySyncPromoShownCount
history.mojom.PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.PageHandler.IncrementHistoryPageHistorySyncPromoShownCount_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
history.mojom.PageHandlerPtr = history.mojom.PageHandlerRemote;
history.mojom.PageHandlerRequest = history.mojom.PageHandlerPendingReceiver;


// Interface: Page
history.mojom.Page = {};

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

// ParamsSpec for OnHistoryDeleted
history.mojom.Page_OnHistoryDeleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.Page.OnHistoryDeleted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnHasOtherFormsChanged
history.mojom.Page_OnHasOtherFormsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.Page.OnHasOtherFormsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'has_other_forms', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendAccountInfo
history.mojom.Page_SendAccountInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history.mojom.Page.SendAccountInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'account_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
history.mojom.PagePtr = history.mojom.PageRemote;
history.mojom.PageRequest = history.mojom.PagePendingReceiver;

