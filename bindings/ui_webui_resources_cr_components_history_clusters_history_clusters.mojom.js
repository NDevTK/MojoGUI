// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/history_clusters/history_clusters.mojom
// Module: history_clusters.mojom

'use strict';

// Module namespace
var history_clusters = history_clusters || {};
history_clusters.mojom = history_clusters.mojom || {};


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
history_clusters.mojom.QueryResultSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.QueryResult',
      packedSize: 32,
      fields: [
        { name: 'query', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'clusters', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'can_load_more', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_continuation', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageHandler
history_clusters.mojom.PageHandler = {};

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
      [url, click_modifiers]);
  }

  setPage(page) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      history_clusters.mojom.PageHandler_SetPage_ParamsSpec,
      null,
      [page]);
  }

  showContextMenuForSearchbox(query, point) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      history_clusters.mojom.PageHandler_ShowContextMenuForSearchbox_ParamsSpec,
      null,
      [query, point]);
  }

  showContextMenuForURL(url, point) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      history_clusters.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec,
      null,
      [url, point]);
  }

  showSidePanelUI() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      history_clusters.mojom.PageHandler_ShowSidePanelUI_ParamsSpec,
      null,
      []);
  }

  toggleVisibility(visible) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      history_clusters.mojom.PageHandler_ToggleVisibility_ParamsSpec,
      history_clusters.mojom.PageHandler_ToggleVisibility_ResponseParamsSpec,
      [visible]);
  }

  startQueryClusters(query, begin_time, recluster) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      history_clusters.mojom.PageHandler_StartQueryClusters_ParamsSpec,
      null,
      [query, begin_time, recluster]);
  }

  loadMoreClusters(query) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      history_clusters.mojom.PageHandler_LoadMoreClusters_ParamsSpec,
      null,
      [query]);
  }

  hideVisits(visits) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      history_clusters.mojom.PageHandler_HideVisits_ParamsSpec,
      history_clusters.mojom.PageHandler_HideVisits_ResponseParamsSpec,
      [visits]);
  }

  removeVisits(visits) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      history_clusters.mojom.PageHandler_RemoveVisits_ParamsSpec,
      history_clusters.mojom.PageHandler_RemoveVisits_ResponseParamsSpec,
      [visits]);
  }

  removeVisitByUrlAndTime(url, timestamp) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ParamsSpec,
      history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ResponseParamsSpec,
      [url, timestamp]);
  }

  openVisitUrlsInTabGroup(visits, tab_group_name) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      history_clusters.mojom.PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec,
      null,
      [visits, tab_group_name]);
  }

  recordVisitAction(visit_action, visit_index, visit_type) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      history_clusters.mojom.PageHandler_RecordVisitAction_ParamsSpec,
      null,
      [visit_action, visit_index, visit_type]);
  }

  recordRelatedSearchAction(action, visit_index) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      history_clusters.mojom.PageHandler_RecordRelatedSearchAction_ParamsSpec,
      null,
      [action, visit_index]);
  }

  recordClusterAction(cluster_action, cluster_index) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      history_clusters.mojom.PageHandler_RecordClusterAction_ParamsSpec,
      null,
      [cluster_action, cluster_index]);
  }

  recordToggledVisibility(visible) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      history_clusters.mojom.PageHandler_RecordToggledVisibility_ParamsSpec,
      null,
      [visible]);
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

// ParamsSpec for OpenHistoryUrl
history_clusters.mojom.PageHandler_OpenHistoryUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.PageHandler.OpenHistoryUrl_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'click_modifiers', packedOffset: 16, packedBitOffset: 0, type: ui.mojom.ClickModifiersSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPage
history_clusters.mojom.PageHandler_SetPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.PageHandler.SetPage_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowContextMenuForSearchbox
history_clusters.mojom.PageHandler_ShowContextMenuForSearchbox_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.PageHandler.ShowContextMenuForSearchbox_Params',
      packedSize: 24,
      fields: [
        { name: 'query', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'point', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowContextMenuForURL
history_clusters.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.PageHandler.ShowContextMenuForURL_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'point', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowSidePanelUI
history_clusters.mojom.PageHandler_ShowSidePanelUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.PageHandler.ShowSidePanelUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ToggleVisibility
history_clusters.mojom.PageHandler_ToggleVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.PageHandler.ToggleVisibility_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

history_clusters.mojom.PageHandler_ToggleVisibility_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.PageHandler.ToggleVisibility_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartQueryClusters
history_clusters.mojom.PageHandler_StartQueryClusters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.PageHandler.StartQueryClusters_Params',
      packedSize: 32,
      fields: [
        { name: 'query', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'begin_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true },
        { name: 'recluster', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LoadMoreClusters
history_clusters.mojom.PageHandler_LoadMoreClusters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.PageHandler.LoadMoreClusters_Params',
      packedSize: 16,
      fields: [
        { name: 'query', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HideVisits
history_clusters.mojom.PageHandler_HideVisits_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.PageHandler.HideVisits_Params',
      packedSize: 16,
      fields: [
        { name: 'visits', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

history_clusters.mojom.PageHandler_HideVisits_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.PageHandler.HideVisits_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveVisits
history_clusters.mojom.PageHandler_RemoveVisits_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.PageHandler.RemoveVisits_Params',
      packedSize: 16,
      fields: [
        { name: 'visits', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

history_clusters.mojom.PageHandler_RemoveVisits_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.PageHandler.RemoveVisits_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveVisitByUrlAndTime
history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.PageHandler.RemoveVisitByUrlAndTime_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'timestamp', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.PageHandler.RemoveVisitByUrlAndTime_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenVisitUrlsInTabGroup
history_clusters.mojom.PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.PageHandler.OpenVisitUrlsInTabGroup_Params',
      packedSize: 24,
      fields: [
        { name: 'visits', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'tab_group_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordVisitAction
history_clusters.mojom.PageHandler_RecordVisitAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.PageHandler.RecordVisitAction_Params',
      packedSize: 32,
      fields: [
        { name: 'visit_action', packedOffset: 8, packedBitOffset: 0, type: history_clusters.mojom.VisitActionSpec, nullable: false },
        { name: 'visit_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'visit_type', packedOffset: 24, packedBitOffset: 0, type: history_clusters.mojom.VisitTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordRelatedSearchAction
history_clusters.mojom.PageHandler_RecordRelatedSearchAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.PageHandler.RecordRelatedSearchAction_Params',
      packedSize: 24,
      fields: [
        { name: 'action', packedOffset: 8, packedBitOffset: 0, type: history_clusters.mojom.RelatedSearchActionSpec, nullable: false },
        { name: 'visit_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordClusterAction
history_clusters.mojom.PageHandler_RecordClusterAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.PageHandler.RecordClusterAction_Params',
      packedSize: 24,
      fields: [
        { name: 'cluster_action', packedOffset: 8, packedBitOffset: 0, type: history_clusters.mojom.ClusterActionSpec, nullable: false },
        { name: 'cluster_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordToggledVisibility
history_clusters.mojom.PageHandler_RecordToggledVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.PageHandler.RecordToggledVisibility_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
history_clusters.mojom.PageHandlerPtr = history_clusters.mojom.PageHandlerRemote;
history_clusters.mojom.PageHandlerRequest = history_clusters.mojom.PageHandlerPendingReceiver;


// Interface: Page
history_clusters.mojom.Page = {};

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
      [result]);
  }

  onClusterImageUpdated(cluster_index, image_url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      history_clusters.mojom.Page_OnClusterImageUpdated_ParamsSpec,
      null,
      [cluster_index, image_url]);
  }

  onVisitsHidden(hidden_visits) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      history_clusters.mojom.Page_OnVisitsHidden_ParamsSpec,
      null,
      [hidden_visits]);
  }

  onVisitsRemoved(removed_visits) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      history_clusters.mojom.Page_OnVisitsRemoved_ParamsSpec,
      null,
      [removed_visits]);
  }

  onHistoryDeleted() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      history_clusters.mojom.Page_OnHistoryDeleted_ParamsSpec,
      null,
      []);
  }

  onQueryChangedByUser(query) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      history_clusters.mojom.Page_OnQueryChangedByUser_ParamsSpec,
      null,
      [query]);
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

// ParamsSpec for OnClustersQueryResult
history_clusters.mojom.Page_OnClustersQueryResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.Page.OnClustersQueryResult_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: history_clusters.mojom.QueryResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnClusterImageUpdated
history_clusters.mojom.Page_OnClusterImageUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.Page.OnClusterImageUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'cluster_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'image_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnVisitsHidden
history_clusters.mojom.Page_OnVisitsHidden_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.Page.OnVisitsHidden_Params',
      packedSize: 16,
      fields: [
        { name: 'hidden_visits', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnVisitsRemoved
history_clusters.mojom.Page_OnVisitsRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.Page.OnVisitsRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'removed_visits', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnHistoryDeleted
history_clusters.mojom.Page_OnHistoryDeleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.Page.OnHistoryDeleted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnQueryChangedByUser
history_clusters.mojom.Page_OnQueryChangedByUser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.Page.OnQueryChangedByUser_Params',
      packedSize: 16,
      fields: [
        { name: 'query', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
history_clusters.mojom.PagePtr = history_clusters.mojom.PageRemote;
history_clusters.mojom.PageRequest = history_clusters.mojom.PagePendingReceiver;

