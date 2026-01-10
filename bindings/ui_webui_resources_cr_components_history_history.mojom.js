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
      mojo.internal.StructField('search_term', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('after', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('incremental', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('querying', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
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
      mojo.internal.StructField('visit_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('typed_count', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_url_in_local_database', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
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
      mojo.internal.StructField('readableTimestamp', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('snippet', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('host_filtering_behavior', 104, 0, history.mojom.FilteringBehaviorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_icon_url_for_uma', 112, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('debug', 120, 0, history.mojom.DebugInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('selected', 128, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('starred', 128, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('blocked_visit', 128, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_url_in_remote_user_data', 128, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_actor_visit', 128, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 144]]);

// Struct: QueryResult
mojo.internal.Struct(
    history.mojom.QueryResultSpec, 'history.mojom.QueryResult', [
      mojo.internal.StructField('info', 0, 0, history.mojom.HistoryQuerySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(history.mojom.HistoryEntrySpec.$, false), null, false, 0, undefined),
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
      mojo.internal.StructField('account_image_src', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('email', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandler
mojo.internal.Struct(
    history.mojom.PageHandler_SetPage_ParamsSpec, 'history.mojom.PageHandler_SetPage_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(history.mojom.PageSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.PageHandler_QueryHistory_ParamsSpec, 'history.mojom.PageHandler_QueryHistory_Params', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('begin_time_$value', 8, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'begin_time_$flag', originalFieldName: 'begin_time' }),
      mojo.internal.StructField('max_results', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('begin_time_$flag', 20, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'begin_time_$value', originalFieldName: 'begin_time' }),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    history.mojom.PageHandler_QueryHistory_ResponseParamsSpec, 'history.mojom.PageHandler_QueryHistory_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, history.mojom.QueryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.PageHandler_QueryHistoryContinuation_ParamsSpec, 'history.mojom.PageHandler_QueryHistoryContinuation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history.mojom.PageHandler_QueryHistoryContinuation_ResponseParamsSpec, 'history.mojom.PageHandler_QueryHistoryContinuation_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, history.mojom.QueryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.PageHandler_RemoveVisits_ParamsSpec, 'history.mojom.PageHandler_RemoveVisits_Params', [
      mojo.internal.StructField('items', 0, 0, mojo.internal.Array(history.mojom.RemovalItemSpec.$, false), null, false, 0, undefined),
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
      mojo.internal.StructField('account_info', 0, 0, history.mojom.AccountInfoSpec.$, null, false, 0, undefined),
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
      [page],
      false);
  }

  queryHistory(query, max_results, begin_time) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      history.mojom.PageHandler_QueryHistory_ParamsSpec,
      history.mojom.PageHandler_QueryHistory_ResponseParamsSpec,
      [query, max_results, begin_time],
      false);
  }

  queryHistoryContinuation() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      history.mojom.PageHandler_QueryHistoryContinuation_ParamsSpec,
      history.mojom.PageHandler_QueryHistoryContinuation_ResponseParamsSpec,
      [],
      false);
  }

  removeVisits(items) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      history.mojom.PageHandler_RemoveVisits_ParamsSpec,
      history.mojom.PageHandler_RemoveVisits_ResponseParamsSpec,
      [items],
      false);
  }

  openClearBrowsingDataDialog() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      history.mojom.PageHandler_OpenClearBrowsingDataDialog_ParamsSpec,
      null,
      [],
      false);
  }

  removeBookmark(url) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      history.mojom.PageHandler_RemoveBookmark_ParamsSpec,
      null,
      [url],
      false);
  }

  setLastSelectedTab(last_tab) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      history.mojom.PageHandler_SetLastSelectedTab_ParamsSpec,
      null,
      [last_tab],
      false);
  }

  showSidePanelUI() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      history.mojom.PageHandler_ShowSidePanelUI_ParamsSpec,
      null,
      [],
      false);
  }

  requestAccountInfo() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      history.mojom.PageHandler_RequestAccountInfo_ParamsSpec,
      history.mojom.PageHandler_RequestAccountInfo_ResponseParamsSpec,
      [],
      false);
  }

  turnOnHistorySync() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      history.mojom.PageHandler_TurnOnHistorySync_ParamsSpec,
      null,
      [],
      false);
  }

  shouldShowHistoryPageHistorySyncPromo() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ParamsSpec,
      history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ResponseParamsSpec,
      [],
      false);
  }

  recordHistoryPageHistorySyncPromoDismissed() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      history.mojom.PageHandler_RecordHistoryPageHistorySyncPromoDismissed_ParamsSpec,
      null,
      [],
      false);
  }

  incrementHistoryPageHistorySyncPromoShownCount() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      history.mojom.PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_ParamsSpec,
      null,
      [],
      false);
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

history.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history.mojom.PageHandler_SetPage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: QueryHistory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history.mojom.PageHandler_QueryHistory_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueryHistory (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: QueryHistoryContinuation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history.mojom.PageHandler_QueryHistoryContinuation_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueryHistoryContinuation (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RemoveVisits
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history.mojom.PageHandler_RemoveVisits_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveVisits (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OpenClearBrowsingDataDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history.mojom.PageHandler_OpenClearBrowsingDataDialog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenClearBrowsingDataDialog (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RemoveBookmark
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history.mojom.PageHandler_RemoveBookmark_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveBookmark (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetLastSelectedTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history.mojom.PageHandler_SetLastSelectedTab_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLastSelectedTab (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ShowSidePanelUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history.mojom.PageHandler_ShowSidePanelUI_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowSidePanelUI (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RequestAccountInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history.mojom.PageHandler_RequestAccountInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestAccountInfo (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: TurnOnHistorySync
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history.mojom.PageHandler_TurnOnHistorySync_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TurnOnHistorySync (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: ShouldShowHistoryPageHistorySyncPromo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldShowHistoryPageHistorySyncPromo (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: RecordHistoryPageHistorySyncPromoDismissed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history.mojom.PageHandler_RecordHistoryPageHistorySyncPromoDismissed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordHistoryPageHistorySyncPromoDismissed (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: IncrementHistoryPageHistorySyncPromoShownCount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history.mojom.PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IncrementHistoryPageHistorySyncPromoShownCount (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history.mojom.PageHandler_SetPage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPage');
          const result = this.impl.setPage(params.page);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history.mojom.PageHandler_QueryHistory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.queryHistory');
          const result = this.impl.queryHistory(params.query, params.max_results, params.begin_time);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, history.mojom.PageHandler_QueryHistory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history.mojom.PageHandler_QueryHistoryContinuation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.queryHistoryContinuation');
          const result = this.impl.queryHistoryContinuation();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, history.mojom.PageHandler_QueryHistoryContinuation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history.mojom.PageHandler_RemoveVisits_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.removeVisits');
          const result = this.impl.removeVisits(params.items);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, history.mojom.PageHandler_RemoveVisits_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history.mojom.PageHandler_OpenClearBrowsingDataDialog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openClearBrowsingDataDialog');
          const result = this.impl.openClearBrowsingDataDialog();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history.mojom.PageHandler_RemoveBookmark_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.removeBookmark');
          const result = this.impl.removeBookmark(params.url);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history.mojom.PageHandler_SetLastSelectedTab_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setLastSelectedTab');
          const result = this.impl.setLastSelectedTab(params.last_tab);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history.mojom.PageHandler_ShowSidePanelUI_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showSidePanelUI');
          const result = this.impl.showSidePanelUI();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history.mojom.PageHandler_RequestAccountInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestAccountInfo');
          const result = this.impl.requestAccountInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, history.mojom.PageHandler_RequestAccountInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history.mojom.PageHandler_TurnOnHistorySync_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.turnOnHistorySync');
          const result = this.impl.turnOnHistorySync();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.shouldShowHistoryPageHistorySyncPromo');
          const result = this.impl.shouldShowHistoryPageHistorySyncPromo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history.mojom.PageHandler_RecordHistoryPageHistorySyncPromoDismissed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordHistoryPageHistorySyncPromoDismissed');
          const result = this.impl.recordHistoryPageHistorySyncPromoDismissed();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history.mojom.PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.incrementHistoryPageHistorySyncPromoShownCount');
          const result = this.impl.incrementHistoryPageHistorySyncPromoShownCount();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

history.mojom.PageHandlerReceiver = history.mojom.PageHandlerReceiver;

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
      mojo.internal.StructField('account_info', 0, 0, history.mojom.AccountInfoSpec.$, null, false, 0, undefined),
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
      [],
      false);
  }

  onHasOtherFormsChanged(has_other_forms) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      history.mojom.Page_OnHasOtherFormsChanged_ParamsSpec,
      null,
      [has_other_forms],
      false);
  }

  sendAccountInfo(account_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      history.mojom.Page_SendAccountInfo_ParamsSpec,
      null,
      [account_info],
      false);
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

history.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnHistoryDeleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history.mojom.Page_OnHistoryDeleted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHistoryDeleted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnHasOtherFormsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history.mojom.Page_OnHasOtherFormsChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHasOtherFormsChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SendAccountInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history.mojom.Page_SendAccountInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendAccountInfo (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history.mojom.Page_OnHistoryDeleted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onHistoryDeleted');
          const result = this.impl.onHistoryDeleted();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history.mojom.Page_OnHasOtherFormsChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onHasOtherFormsChanged');
          const result = this.impl.onHasOtherFormsChanged(params.has_other_forms);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history.mojom.Page_SendAccountInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sendAccountInfo');
          const result = this.impl.sendAccountInfo(params.account_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

history.mojom.PageReceiver = history.mojom.PageReceiver;

history.mojom.PagePtr = history.mojom.PageRemote;
history.mojom.PageRequest = history.mojom.PagePendingReceiver;

