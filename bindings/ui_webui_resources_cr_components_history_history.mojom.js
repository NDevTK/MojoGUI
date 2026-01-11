// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/history/history.mojom
// Module: history.mojom

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
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(history.mojom.PageRemote), null, false, 0, undefined),
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
  setPage(page) {
    return this.$.setPage(page);
  }
  queryHistory(query, max_results, begin_time) {
    return this.$.queryHistory(query, max_results, begin_time);
  }
  queryHistoryContinuation() {
    return this.$.queryHistoryContinuation();
  }
  removeVisits(items) {
    return this.$.removeVisits(items);
  }
  openClearBrowsingDataDialog() {
    return this.$.openClearBrowsingDataDialog();
  }
  removeBookmark(url) {
    return this.$.removeBookmark(url);
  }
  setLastSelectedTab(last_tab) {
    return this.$.setLastSelectedTab(last_tab);
  }
  showSidePanelUI() {
    return this.$.showSidePanelUI();
  }
  requestAccountInfo() {
    return this.$.requestAccountInfo();
  }
  turnOnHistorySync() {
    return this.$.turnOnHistorySync();
  }
  shouldShowHistoryPageHistorySyncPromo() {
    return this.$.shouldShowHistoryPageHistorySyncPromo();
  }
  recordHistoryPageHistorySyncPromoDismissed() {
    return this.$.recordHistoryPageHistorySyncPromoDismissed();
  }
  incrementHistoryPageHistorySyncPromoShownCount() {
    return this.$.incrementHistoryPageHistorySyncPromoShownCount();
  }
};

history.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setPage(page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      history.mojom.PageHandler_SetPage_ParamsSpec,
      null,
      [page],
      false);
  }

  queryHistory(query, max_results, begin_time) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      history.mojom.PageHandler_QueryHistory_ParamsSpec,
      history.mojom.PageHandler_QueryHistory_ResponseParamsSpec,
      [query, max_results, begin_time],
      false);
  }

  queryHistoryContinuation() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      history.mojom.PageHandler_QueryHistoryContinuation_ParamsSpec,
      history.mojom.PageHandler_QueryHistoryContinuation_ResponseParamsSpec,
      [],
      false);
  }

  removeVisits(items) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      history.mojom.PageHandler_RemoveVisits_ParamsSpec,
      history.mojom.PageHandler_RemoveVisits_ResponseParamsSpec,
      [items],
      false);
  }

  openClearBrowsingDataDialog() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      history.mojom.PageHandler_OpenClearBrowsingDataDialog_ParamsSpec,
      null,
      [],
      false);
  }

  removeBookmark(url) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      history.mojom.PageHandler_RemoveBookmark_ParamsSpec,
      null,
      [url],
      false);
  }

  setLastSelectedTab(last_tab) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      history.mojom.PageHandler_SetLastSelectedTab_ParamsSpec,
      null,
      [last_tab],
      false);
  }

  showSidePanelUI() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      history.mojom.PageHandler_ShowSidePanelUI_ParamsSpec,
      null,
      [],
      false);
  }

  requestAccountInfo() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      history.mojom.PageHandler_RequestAccountInfo_ParamsSpec,
      history.mojom.PageHandler_RequestAccountInfo_ResponseParamsSpec,
      [],
      false);
  }

  turnOnHistorySync() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      history.mojom.PageHandler_TurnOnHistorySync_ParamsSpec,
      null,
      [],
      false);
  }

  shouldShowHistoryPageHistorySyncPromo() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ParamsSpec,
      history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ResponseParamsSpec,
      [],
      false);
  }

  recordHistoryPageHistorySyncPromoDismissed() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      history.mojom.PageHandler_RecordHistoryPageHistorySyncPromoDismissed_ParamsSpec,
      null,
      [],
      false);
  }

  incrementHistoryPageHistorySyncPromoShownCount() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_SetPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_QueryHistory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_QueryHistoryContinuation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_RemoveVisits_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_OpenClearBrowsingDataDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_RemoveBookmark_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_SetLastSelectedTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_ShowSidePanelUI_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_RequestAccountInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_TurnOnHistorySync_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_RecordHistoryPageHistorySyncPromoDismissed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.PageHandler_SetPage_ParamsSpec.$.structSpec);
          const result = this.impl.setPage(params.page);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.PageHandler_QueryHistory_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(history.mojom.PageHandler_QueryHistoryContinuation_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(history.mojom.PageHandler_RemoveVisits_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(history.mojom.PageHandler_OpenClearBrowsingDataDialog_ParamsSpec.$.structSpec);
          const result = this.impl.openClearBrowsingDataDialog();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.PageHandler_RemoveBookmark_ParamsSpec.$.structSpec);
          const result = this.impl.removeBookmark(params.url);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.PageHandler_SetLastSelectedTab_ParamsSpec.$.structSpec);
          const result = this.impl.setLastSelectedTab(params.last_tab);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.PageHandler_ShowSidePanelUI_ParamsSpec.$.structSpec);
          const result = this.impl.showSidePanelUI();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.PageHandler_RequestAccountInfo_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(history.mojom.PageHandler_TurnOnHistorySync_ParamsSpec.$.structSpec);
          const result = this.impl.turnOnHistorySync();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(history.mojom.PageHandler_RecordHistoryPageHistorySyncPromoDismissed_ParamsSpec.$.structSpec);
          const result = this.impl.recordHistoryPageHistorySyncPromoDismissed();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_ParamsSpec.$.structSpec);
          const result = this.impl.incrementHistoryPageHistorySyncPromoShownCount();
          break;
        }
      }
      } catch (err) {}
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
  onHistoryDeleted() {
    return this.$.onHistoryDeleted();
  }
  onHasOtherFormsChanged(has_other_forms) {
    return this.$.onHasOtherFormsChanged(has_other_forms);
  }
  sendAccountInfo(account_info) {
    return this.$.sendAccountInfo(account_info);
  }
};

history.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onHistoryDeleted() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      history.mojom.Page_OnHistoryDeleted_ParamsSpec,
      null,
      [],
      false);
  }

  onHasOtherFormsChanged(has_other_forms) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      history.mojom.Page_OnHasOtherFormsChanged_ParamsSpec,
      null,
      [has_other_forms],
      false);
  }

  sendAccountInfo(account_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.Page_OnHistoryDeleted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.Page_OnHasOtherFormsChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.Page_SendAccountInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.Page_OnHistoryDeleted_ParamsSpec.$.structSpec);
          const result = this.impl.onHistoryDeleted();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.Page_OnHasOtherFormsChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onHasOtherFormsChanged(params.has_other_forms);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.Page_SendAccountInfo_ParamsSpec.$.structSpec);
          const result = this.impl.sendAccountInfo(params.account_info);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

history.mojom.PageReceiver = history.mojom.PageReceiver;

history.mojom.PagePtr = history.mojom.PageRemote;
history.mojom.PageRequest = history.mojom.PagePendingReceiver;

