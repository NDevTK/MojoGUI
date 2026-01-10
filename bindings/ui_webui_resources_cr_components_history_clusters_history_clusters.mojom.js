// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/history_clusters/history_clusters.mojom
// Module: history_clusters.mojom

'use strict';

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
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(history_clusters.mojom.PageSpec), null, false, 0, undefined),
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
};

history_clusters.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openHistoryUrl(url, click_modifiers) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      history_clusters.mojom.PageHandler_OpenHistoryUrl_ParamsSpec,
      null,
      [url, click_modifiers],
      false);
  }

  setPage(page) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      history_clusters.mojom.PageHandler_SetPage_ParamsSpec,
      null,
      [page],
      false);
  }

  showContextMenuForSearchbox(query, point) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      history_clusters.mojom.PageHandler_ShowContextMenuForSearchbox_ParamsSpec,
      null,
      [query, point],
      false);
  }

  showContextMenuForURL(url, point) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      history_clusters.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec,
      null,
      [url, point],
      false);
  }

  showSidePanelUI() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      history_clusters.mojom.PageHandler_ShowSidePanelUI_ParamsSpec,
      null,
      [],
      false);
  }

  toggleVisibility(visible) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      history_clusters.mojom.PageHandler_ToggleVisibility_ParamsSpec,
      history_clusters.mojom.PageHandler_ToggleVisibility_ResponseParamsSpec,
      [visible],
      false);
  }

  startQueryClusters(query, begin_time, recluster) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      history_clusters.mojom.PageHandler_StartQueryClusters_ParamsSpec,
      null,
      [query, begin_time, recluster],
      false);
  }

  loadMoreClusters(query) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      history_clusters.mojom.PageHandler_LoadMoreClusters_ParamsSpec,
      null,
      [query],
      false);
  }

  hideVisits(visits) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      history_clusters.mojom.PageHandler_HideVisits_ParamsSpec,
      history_clusters.mojom.PageHandler_HideVisits_ResponseParamsSpec,
      [visits],
      false);
  }

  removeVisits(visits) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      history_clusters.mojom.PageHandler_RemoveVisits_ParamsSpec,
      history_clusters.mojom.PageHandler_RemoveVisits_ResponseParamsSpec,
      [visits],
      false);
  }

  removeVisitByUrlAndTime(url, timestamp) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ParamsSpec,
      history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ResponseParamsSpec,
      [url, timestamp],
      false);
  }

  openVisitUrlsInTabGroup(visits, tab_group_name) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      history_clusters.mojom.PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec,
      null,
      [visits, tab_group_name],
      false);
  }

  recordVisitAction(visit_action, visit_index, visit_type) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      history_clusters.mojom.PageHandler_RecordVisitAction_ParamsSpec,
      null,
      [visit_action, visit_index, visit_type],
      false);
  }

  recordRelatedSearchAction(action, visit_index) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      history_clusters.mojom.PageHandler_RecordRelatedSearchAction_ParamsSpec,
      null,
      [action, visit_index],
      false);
  }

  recordClusterAction(cluster_action, cluster_index) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      history_clusters.mojom.PageHandler_RecordClusterAction_ParamsSpec,
      null,
      [cluster_action, cluster_index],
      false);
  }

  recordToggledVisibility(visible) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = history_clusters.mojom.PageHandler_OpenHistoryUrl_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openHistoryUrl(params.url, params.click_modifiers);
          break;
        }
        case 1: {
          const params = history_clusters.mojom.PageHandler_SetPage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPage(params.page);
          break;
        }
        case 2: {
          const params = history_clusters.mojom.PageHandler_ShowContextMenuForSearchbox_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showContextMenuForSearchbox(params.query, params.point);
          break;
        }
        case 3: {
          const params = history_clusters.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showContextMenuForURL(params.url, params.point);
          break;
        }
        case 4: {
          const params = history_clusters.mojom.PageHandler_ShowSidePanelUI_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showSidePanelUI();
          break;
        }
        case 5: {
          const params = history_clusters.mojom.PageHandler_ToggleVisibility_ParamsSpec.$.decode(message.payload);
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
          const params = history_clusters.mojom.PageHandler_StartQueryClusters_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startQueryClusters(params.query, params.begin_time, params.recluster);
          break;
        }
        case 7: {
          const params = history_clusters.mojom.PageHandler_LoadMoreClusters_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadMoreClusters(params.query);
          break;
        }
        case 8: {
          const params = history_clusters.mojom.PageHandler_HideVisits_ParamsSpec.$.decode(message.payload);
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
          const params = history_clusters.mojom.PageHandler_RemoveVisits_ParamsSpec.$.decode(message.payload);
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
          const params = history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ParamsSpec.$.decode(message.payload);
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
          const params = history_clusters.mojom.PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openVisitUrlsInTabGroup(params.visits, params.tab_group_name);
          break;
        }
        case 12: {
          const params = history_clusters.mojom.PageHandler_RecordVisitAction_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordVisitAction(params.visit_action, params.visit_index, params.visit_type);
          break;
        }
        case 13: {
          const params = history_clusters.mojom.PageHandler_RecordRelatedSearchAction_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordRelatedSearchAction(params.action, params.visit_index);
          break;
        }
        case 14: {
          const params = history_clusters.mojom.PageHandler_RecordClusterAction_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordClusterAction(params.cluster_action, params.cluster_index);
          break;
        }
        case 15: {
          const params = history_clusters.mojom.PageHandler_RecordToggledVisibility_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordToggledVisibility(params.visible);
          break;
        }
      }
    });
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
};

history_clusters.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onClustersQueryResult(result) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      history_clusters.mojom.Page_OnClustersQueryResult_ParamsSpec,
      null,
      [result],
      false);
  }

  onClusterImageUpdated(cluster_index, image_url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      history_clusters.mojom.Page_OnClusterImageUpdated_ParamsSpec,
      null,
      [cluster_index, image_url],
      false);
  }

  onVisitsHidden(hidden_visits) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      history_clusters.mojom.Page_OnVisitsHidden_ParamsSpec,
      null,
      [hidden_visits],
      false);
  }

  onVisitsRemoved(removed_visits) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      history_clusters.mojom.Page_OnVisitsRemoved_ParamsSpec,
      null,
      [removed_visits],
      false);
  }

  onHistoryDeleted() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      history_clusters.mojom.Page_OnHistoryDeleted_ParamsSpec,
      null,
      [],
      false);
  }

  onQueryChangedByUser(query) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = history_clusters.mojom.Page_OnClustersQueryResult_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onClustersQueryResult(params.result);
          break;
        }
        case 1: {
          const params = history_clusters.mojom.Page_OnClusterImageUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onClusterImageUpdated(params.cluster_index, params.image_url);
          break;
        }
        case 2: {
          const params = history_clusters.mojom.Page_OnVisitsHidden_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onVisitsHidden(params.hidden_visits);
          break;
        }
        case 3: {
          const params = history_clusters.mojom.Page_OnVisitsRemoved_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onVisitsRemoved(params.removed_visits);
          break;
        }
        case 4: {
          const params = history_clusters.mojom.Page_OnHistoryDeleted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onHistoryDeleted();
          break;
        }
        case 5: {
          const params = history_clusters.mojom.Page_OnQueryChangedByUser_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onQueryChangedByUser(params.query);
          break;
        }
      }
    });
  }
};

history_clusters.mojom.PageReceiver = history_clusters.mojom.PageReceiver;

history_clusters.mojom.PagePtr = history_clusters.mojom.PageRemote;
history_clusters.mojom.PageRequest = history_clusters.mojom.PagePendingReceiver;

