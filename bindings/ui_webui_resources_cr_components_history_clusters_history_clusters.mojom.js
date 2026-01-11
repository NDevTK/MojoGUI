// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/history_clusters/history_clusters.mojom
// Module: history_clusters.mojom

// Module namespace
var history_clusters = history_clusters || {};
history_clusters.mojom = history_clusters.mojom || {};
var mojo_base = mojo_base || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};

history_clusters.mojom.ClusterActionSpec = { $: mojo.internal.Enum() };
history_clusters.mojom.RelatedSearchActionSpec = { $: mojo.internal.Enum() };
history_clusters.mojom.VisitActionSpec = { $: mojo.internal.Enum() };
history_clusters.mojom.VisitTypeSpec = { $: mojo.internal.Enum() };
history_clusters.mojom.QueryResultSpec = { $: {} };
history_clusters.mojom.PageHandler = {};
history_clusters.mojom.PageHandler.$interfaceName = 'history_clusters.mojom.PageHandler';
history_clusters.mojom.PageHandler_OpenHistoryUrl_ParamsSpec = { $: {} };
history_clusters.mojom.PageHandler_SetPage_ParamsSpec = { $: {} };
history_clusters.mojom.PageHandler_ShowContextMenuForSearchbox_ParamsSpec = { $: {} };
history_clusters.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec = { $: {} };
history_clusters.mojom.PageHandler_ShowSidePanelUI_ParamsSpec = { $: {} };
history_clusters.mojom.PageHandler_ToggleVisibility_ParamsSpec = { $: {} };
history_clusters.mojom.PageHandler_ToggleVisibility_ResponseParamsSpec = { $: {} };
history_clusters.mojom.PageHandler_StartQueryClusters_ParamsSpec = { $: {} };
history_clusters.mojom.PageHandler_LoadMoreClusters_ParamsSpec = { $: {} };
history_clusters.mojom.PageHandler_HideVisits_ParamsSpec = { $: {} };
history_clusters.mojom.PageHandler_HideVisits_ResponseParamsSpec = { $: {} };
history_clusters.mojom.PageHandler_RemoveVisits_ParamsSpec = { $: {} };
history_clusters.mojom.PageHandler_RemoveVisits_ResponseParamsSpec = { $: {} };
history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ParamsSpec = { $: {} };
history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ResponseParamsSpec = { $: {} };
history_clusters.mojom.PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec = { $: {} };
history_clusters.mojom.PageHandler_RecordVisitAction_ParamsSpec = { $: {} };
history_clusters.mojom.PageHandler_RecordRelatedSearchAction_ParamsSpec = { $: {} };
history_clusters.mojom.PageHandler_RecordClusterAction_ParamsSpec = { $: {} };
history_clusters.mojom.PageHandler_RecordToggledVisibility_ParamsSpec = { $: {} };
history_clusters.mojom.Page = {};
history_clusters.mojom.Page.$interfaceName = 'history_clusters.mojom.Page';
history_clusters.mojom.Page_OnClustersQueryResult_ParamsSpec = { $: {} };
history_clusters.mojom.Page_OnClusterImageUpdated_ParamsSpec = { $: {} };
history_clusters.mojom.Page_OnVisitsHidden_ParamsSpec = { $: {} };
history_clusters.mojom.Page_OnVisitsRemoved_ParamsSpec = { $: {} };
history_clusters.mojom.Page_OnHistoryDeleted_ParamsSpec = { $: {} };
history_clusters.mojom.Page_OnQueryChangedByUser_ParamsSpec = { $: {} };

// Enum: ClusterAction
history_clusters.mojom.ClusterAction = {
  kDeleted: 0,
  kOpenedInTabGroup: 1,
  kRelatedSearchClicked: 2,
  kVisitClicked: 3,
};

// Enum: RelatedSearchAction
history_clusters.mojom.RelatedSearchAction = {
  kClicked: 0,
};

// Enum: VisitAction
history_clusters.mojom.VisitAction = {
  kClicked: 0,
  kHidden: 1,
  kDeleted: 2,
};

// Enum: VisitType
history_clusters.mojom.VisitType = {
  kSRP: 0,
  kNonSRP: 1,
};

// Struct: QueryResult
mojo.internal.Struct(
    history_clusters.mojom.QueryResultSpec, 'history_clusters.mojom.QueryResult', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('clusters', 8, 0, mojo.internal.Array(history_clusters.mojom.ClusterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('can_load_more', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_continuation', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandler
mojo.internal.Struct(
    history_clusters.mojom.PageHandler_OpenHistoryUrl_ParamsSpec, 'history_clusters.mojom.PageHandler_OpenHistoryUrl_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('click_modifiers', 8, 0, ui.mojom.ClickModifiersSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    history_clusters.mojom.PageHandler_SetPage_ParamsSpec, 'history_clusters.mojom.PageHandler_SetPage_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(history_clusters.mojom.PageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history_clusters.mojom.PageHandler_ShowContextMenuForSearchbox_ParamsSpec, 'history_clusters.mojom.PageHandler_ShowContextMenuForSearchbox_Params', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('point', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    history_clusters.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec, 'history_clusters.mojom.PageHandler_ShowContextMenuForURL_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('point', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    history_clusters.mojom.PageHandler_ShowSidePanelUI_ParamsSpec, 'history_clusters.mojom.PageHandler_ShowSidePanelUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history_clusters.mojom.PageHandler_ToggleVisibility_ParamsSpec, 'history_clusters.mojom.PageHandler_ToggleVisibility_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history_clusters.mojom.PageHandler_ToggleVisibility_ResponseParamsSpec, 'history_clusters.mojom.PageHandler_ToggleVisibility_ResponseParams', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history_clusters.mojom.PageHandler_StartQueryClusters_ParamsSpec, 'history_clusters.mojom.PageHandler_StartQueryClusters_Params', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('begin_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('recluster', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    history_clusters.mojom.PageHandler_LoadMoreClusters_ParamsSpec, 'history_clusters.mojom.PageHandler_LoadMoreClusters_Params', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history_clusters.mojom.PageHandler_HideVisits_ParamsSpec, 'history_clusters.mojom.PageHandler_HideVisits_Params', [
      mojo.internal.StructField('visits', 0, 0, mojo.internal.Array(history_clusters.mojom.URLVisitSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history_clusters.mojom.PageHandler_HideVisits_ResponseParamsSpec, 'history_clusters.mojom.PageHandler_HideVisits_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history_clusters.mojom.PageHandler_RemoveVisits_ParamsSpec, 'history_clusters.mojom.PageHandler_RemoveVisits_Params', [
      mojo.internal.StructField('visits', 0, 0, mojo.internal.Array(history_clusters.mojom.URLVisitSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history_clusters.mojom.PageHandler_RemoveVisits_ResponseParamsSpec, 'history_clusters.mojom.PageHandler_RemoveVisits_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ParamsSpec, 'history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ResponseParamsSpec, 'history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history_clusters.mojom.PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec, 'history_clusters.mojom.PageHandler_OpenVisitUrlsInTabGroup_Params', [
      mojo.internal.StructField('visits', 0, 0, mojo.internal.Array(history_clusters.mojom.URLVisitSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('tab_group_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    history_clusters.mojom.PageHandler_RecordVisitAction_ParamsSpec, 'history_clusters.mojom.PageHandler_RecordVisitAction_Params', [
      mojo.internal.StructField('visit_action', 0, 0, history_clusters.mojom.VisitActionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visit_type', 8, 0, history_clusters.mojom.VisitTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visit_index', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    history_clusters.mojom.PageHandler_RecordRelatedSearchAction_ParamsSpec, 'history_clusters.mojom.PageHandler_RecordRelatedSearchAction_Params', [
      mojo.internal.StructField('action', 0, 0, history_clusters.mojom.RelatedSearchActionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visit_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    history_clusters.mojom.PageHandler_RecordClusterAction_ParamsSpec, 'history_clusters.mojom.PageHandler_RecordClusterAction_Params', [
      mojo.internal.StructField('cluster_action', 0, 0, history_clusters.mojom.ClusterActionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cluster_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    history_clusters.mojom.PageHandler_RecordToggledVisibility_ParamsSpec, 'history_clusters.mojom.PageHandler_RecordToggledVisibility_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

history_clusters.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history_clusters.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'history_clusters.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history_clusters.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new history_clusters.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  openHistoryUrl(url, click_modifiers) {
    return this.$.openHistoryUrl(url, click_modifiers);
  }
  setPage(page) {
    return this.$.setPage(page);
  }
  showContextMenuForSearchbox(query, point) {
    return this.$.showContextMenuForSearchbox(query, point);
  }
  showContextMenuForURL(url, point) {
    return this.$.showContextMenuForURL(url, point);
  }
  showSidePanelUI() {
    return this.$.showSidePanelUI();
  }
  toggleVisibility(visible) {
    return this.$.toggleVisibility(visible);
  }
  startQueryClusters(query, begin_time, recluster) {
    return this.$.startQueryClusters(query, begin_time, recluster);
  }
  loadMoreClusters(query) {
    return this.$.loadMoreClusters(query);
  }
  hideVisits(visits) {
    return this.$.hideVisits(visits);
  }
  removeVisits(visits) {
    return this.$.removeVisits(visits);
  }
  removeVisitByUrlAndTime(url, timestamp) {
    return this.$.removeVisitByUrlAndTime(url, timestamp);
  }
  openVisitUrlsInTabGroup(visits, tab_group_name) {
    return this.$.openVisitUrlsInTabGroup(visits, tab_group_name);
  }
  recordVisitAction(visit_action, visit_index, visit_type) {
    return this.$.recordVisitAction(visit_action, visit_index, visit_type);
  }
  recordRelatedSearchAction(action, visit_index) {
    return this.$.recordRelatedSearchAction(action, visit_index);
  }
  recordClusterAction(cluster_action, cluster_index) {
    return this.$.recordClusterAction(cluster_action, cluster_index);
  }
  recordToggledVisibility(visible) {
    return this.$.recordToggledVisibility(visible);
  }
};

history_clusters.mojom.PageHandlerRemoteCallHandler = class {
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
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  openHistoryUrl(url, click_modifiers) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      history_clusters.mojom.PageHandler_OpenHistoryUrl_ParamsSpec,
      null,
      [url, click_modifiers],
      false);
  }

  setPage(page) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      history_clusters.mojom.PageHandler_SetPage_ParamsSpec,
      null,
      [page],
      false);
  }

  showContextMenuForSearchbox(query, point) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      history_clusters.mojom.PageHandler_ShowContextMenuForSearchbox_ParamsSpec,
      null,
      [query, point],
      false);
  }

  showContextMenuForURL(url, point) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      history_clusters.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec,
      null,
      [url, point],
      false);
  }

  showSidePanelUI() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      history_clusters.mojom.PageHandler_ShowSidePanelUI_ParamsSpec,
      null,
      [],
      false);
  }

  toggleVisibility(visible) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      history_clusters.mojom.PageHandler_ToggleVisibility_ParamsSpec,
      history_clusters.mojom.PageHandler_ToggleVisibility_ResponseParamsSpec,
      [visible],
      false);
  }

  startQueryClusters(query, begin_time, recluster) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      history_clusters.mojom.PageHandler_StartQueryClusters_ParamsSpec,
      null,
      [query, begin_time, recluster],
      false);
  }

  loadMoreClusters(query) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      history_clusters.mojom.PageHandler_LoadMoreClusters_ParamsSpec,
      null,
      [query],
      false);
  }

  hideVisits(visits) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      history_clusters.mojom.PageHandler_HideVisits_ParamsSpec,
      history_clusters.mojom.PageHandler_HideVisits_ResponseParamsSpec,
      [visits],
      false);
  }

  removeVisits(visits) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      history_clusters.mojom.PageHandler_RemoveVisits_ParamsSpec,
      history_clusters.mojom.PageHandler_RemoveVisits_ResponseParamsSpec,
      [visits],
      false);
  }

  removeVisitByUrlAndTime(url, timestamp) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ParamsSpec,
      history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ResponseParamsSpec,
      [url, timestamp],
      false);
  }

  openVisitUrlsInTabGroup(visits, tab_group_name) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      history_clusters.mojom.PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec,
      null,
      [visits, tab_group_name],
      false);
  }

  recordVisitAction(visit_action, visit_index, visit_type) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      history_clusters.mojom.PageHandler_RecordVisitAction_ParamsSpec,
      null,
      [visit_action, visit_index, visit_type],
      false);
  }

  recordRelatedSearchAction(action, visit_index) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      history_clusters.mojom.PageHandler_RecordRelatedSearchAction_ParamsSpec,
      null,
      [action, visit_index],
      false);
  }

  recordClusterAction(cluster_action, cluster_index) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      history_clusters.mojom.PageHandler_RecordClusterAction_ParamsSpec,
      null,
      [cluster_action, cluster_index],
      false);
  }

  recordToggledVisibility(visible) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      history_clusters.mojom.PageHandler_RecordToggledVisibility_ParamsSpec,
      null,
      [visible],
      false);
  }

};

history_clusters.mojom.PageHandler.getRemote = function() {
  let remote = new history_clusters.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_clusters.mojom.PageHandler',
    'context');
  return remote.$;
};

history_clusters.mojom.PageHandlerReceiver = class {
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(history_clusters.mojom.PageHandler_OpenHistoryUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters.mojom.PageHandler_SetPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters.mojom.PageHandler_ShowContextMenuForSearchbox_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters.mojom.PageHandler_ShowSidePanelUI_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters.mojom.PageHandler_ToggleVisibility_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters.mojom.PageHandler_StartQueryClusters_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters.mojom.PageHandler_LoadMoreClusters_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters.mojom.PageHandler_HideVisits_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters.mojom.PageHandler_RemoveVisits_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters.mojom.PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters.mojom.PageHandler_RecordVisitAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters.mojom.PageHandler_RecordRelatedSearchAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters.mojom.PageHandler_RecordClusterAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters.mojom.PageHandler_RecordToggledVisibility_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.PageHandler_OpenHistoryUrl_ParamsSpec.$.structSpec);
          const result = this.impl.openHistoryUrl(params.url, params.click_modifiers);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.PageHandler_SetPage_ParamsSpec.$.structSpec);
          const result = this.impl.setPage(params.page);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.PageHandler_ShowContextMenuForSearchbox_ParamsSpec.$.structSpec);
          const result = this.impl.showContextMenuForSearchbox(params.query, params.point);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec.$.structSpec);
          const result = this.impl.showContextMenuForURL(params.url, params.point);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.PageHandler_ShowSidePanelUI_ParamsSpec.$.structSpec);
          const result = this.impl.showSidePanelUI();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.PageHandler_ToggleVisibility_ParamsSpec.$.structSpec);
          const result = this.impl.toggleVisibility(params.visible);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, history_clusters.mojom.PageHandler_ToggleVisibility_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.PageHandler_StartQueryClusters_ParamsSpec.$.structSpec);
          const result = this.impl.startQueryClusters(params.query, params.begin_time, params.recluster);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.PageHandler_LoadMoreClusters_ParamsSpec.$.structSpec);
          const result = this.impl.loadMoreClusters(params.query);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.PageHandler_HideVisits_ParamsSpec.$.structSpec);
          const result = this.impl.hideVisits(params.visits);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, history_clusters.mojom.PageHandler_HideVisits_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.PageHandler_RemoveVisits_ParamsSpec.$.structSpec);
          const result = this.impl.removeVisits(params.visits);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, history_clusters.mojom.PageHandler_RemoveVisits_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ParamsSpec.$.structSpec);
          const result = this.impl.removeVisitByUrlAndTime(params.url, params.timestamp);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec.$.structSpec);
          const result = this.impl.openVisitUrlsInTabGroup(params.visits, params.tab_group_name);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.PageHandler_RecordVisitAction_ParamsSpec.$.structSpec);
          const result = this.impl.recordVisitAction(params.visit_action, params.visit_index, params.visit_type);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.PageHandler_RecordRelatedSearchAction_ParamsSpec.$.structSpec);
          const result = this.impl.recordRelatedSearchAction(params.action, params.visit_index);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.PageHandler_RecordClusterAction_ParamsSpec.$.structSpec);
          const result = this.impl.recordClusterAction(params.cluster_action, params.cluster_index);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.PageHandler_RecordToggledVisibility_ParamsSpec.$.structSpec);
          const result = this.impl.recordToggledVisibility(params.visible);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

history_clusters.mojom.PageHandlerReceiver = history_clusters.mojom.PageHandlerReceiver;

history_clusters.mojom.PageHandlerPtr = history_clusters.mojom.PageHandlerRemote;
history_clusters.mojom.PageHandlerRequest = history_clusters.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    history_clusters.mojom.Page_OnClustersQueryResult_ParamsSpec, 'history_clusters.mojom.Page_OnClustersQueryResult_Params', [
      mojo.internal.StructField('result', 0, 0, history_clusters.mojom.QueryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history_clusters.mojom.Page_OnClusterImageUpdated_ParamsSpec, 'history_clusters.mojom.Page_OnClusterImageUpdated_Params', [
      mojo.internal.StructField('image_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cluster_index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    history_clusters.mojom.Page_OnVisitsHidden_ParamsSpec, 'history_clusters.mojom.Page_OnVisitsHidden_Params', [
      mojo.internal.StructField('hidden_visits', 0, 0, mojo.internal.Array(history_clusters.mojom.URLVisitSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history_clusters.mojom.Page_OnVisitsRemoved_ParamsSpec, 'history_clusters.mojom.Page_OnVisitsRemoved_Params', [
      mojo.internal.StructField('removed_visits', 0, 0, mojo.internal.Array(history_clusters.mojom.URLVisitSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history_clusters.mojom.Page_OnHistoryDeleted_ParamsSpec, 'history_clusters.mojom.Page_OnHistoryDeleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history_clusters.mojom.Page_OnQueryChangedByUser_ParamsSpec, 'history_clusters.mojom.Page_OnQueryChangedByUser_Params', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

history_clusters.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history_clusters.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'history_clusters.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history_clusters.mojom.PagePendingReceiver,
      handle);
    this.$ = new history_clusters.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onClustersQueryResult(result) {
    return this.$.onClustersQueryResult(result);
  }
  onClusterImageUpdated(cluster_index, image_url) {
    return this.$.onClusterImageUpdated(cluster_index, image_url);
  }
  onVisitsHidden(hidden_visits) {
    return this.$.onVisitsHidden(hidden_visits);
  }
  onVisitsRemoved(removed_visits) {
    return this.$.onVisitsRemoved(removed_visits);
  }
  onHistoryDeleted() {
    return this.$.onHistoryDeleted();
  }
  onQueryChangedByUser(query) {
    return this.$.onQueryChangedByUser(query);
  }
};

history_clusters.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onClustersQueryResult(result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      history_clusters.mojom.Page_OnClustersQueryResult_ParamsSpec,
      null,
      [result],
      false);
  }

  onClusterImageUpdated(cluster_index, image_url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      history_clusters.mojom.Page_OnClusterImageUpdated_ParamsSpec,
      null,
      [cluster_index, image_url],
      false);
  }

  onVisitsHidden(hidden_visits) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      history_clusters.mojom.Page_OnVisitsHidden_ParamsSpec,
      null,
      [hidden_visits],
      false);
  }

  onVisitsRemoved(removed_visits) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      history_clusters.mojom.Page_OnVisitsRemoved_ParamsSpec,
      null,
      [removed_visits],
      false);
  }

  onHistoryDeleted() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      history_clusters.mojom.Page_OnHistoryDeleted_ParamsSpec,
      null,
      [],
      false);
  }

  onQueryChangedByUser(query) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      history_clusters.mojom.Page_OnQueryChangedByUser_ParamsSpec,
      null,
      [query],
      false);
  }

};

history_clusters.mojom.Page.getRemote = function() {
  let remote = new history_clusters.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_clusters.mojom.Page',
    'context');
  return remote.$;
};

history_clusters.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(history_clusters.mojom.Page_OnClustersQueryResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters.mojom.Page_OnClusterImageUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters.mojom.Page_OnVisitsHidden_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters.mojom.Page_OnVisitsRemoved_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters.mojom.Page_OnHistoryDeleted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters.mojom.Page_OnQueryChangedByUser_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.Page_OnClustersQueryResult_ParamsSpec.$.structSpec);
          const result = this.impl.onClustersQueryResult(params.result);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.Page_OnClusterImageUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onClusterImageUpdated(params.cluster_index, params.image_url);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.Page_OnVisitsHidden_ParamsSpec.$.structSpec);
          const result = this.impl.onVisitsHidden(params.hidden_visits);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.Page_OnVisitsRemoved_ParamsSpec.$.structSpec);
          const result = this.impl.onVisitsRemoved(params.removed_visits);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.Page_OnHistoryDeleted_ParamsSpec.$.structSpec);
          const result = this.impl.onHistoryDeleted();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters.mojom.Page_OnQueryChangedByUser_ParamsSpec.$.structSpec);
          const result = this.impl.onQueryChangedByUser(params.query);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

history_clusters.mojom.PageReceiver = history_clusters.mojom.PageReceiver;

history_clusters.mojom.PagePtr = history_clusters.mojom.PageRemote;
history_clusters.mojom.PageRequest = history_clusters.mojom.PagePendingReceiver;

