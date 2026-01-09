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
history_clusters.mojom.QueryResult = class {
  constructor(values = {}) {
    this.query = values.query !== undefined ? values.query : "";
    this.null = values.null !== undefined ? values.null : null;
    this.is_continuation = values.is_continuation !== undefined ? values.is_continuation : false;
  }
};

// Interface: PageHandler
history_clusters.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'history_clusters.mojom.PageHandler';
  }

  openHistoryUrl(url, click_modifiers) {
    // Method: OpenHistoryUrl
    // Call: OpenHistoryUrl(url, click_modifiers)
  }

  setPage(page) {
    // Method: SetPage
    // Call: SetPage(page)
  }

  showContextMenuForSearchbox(query, point) {
    // Method: ShowContextMenuForSearchbox
    // Call: ShowContextMenuForSearchbox(query, point)
  }

  showContextMenuForURL(url, point) {
    // Method: ShowContextMenuForURL
    // Call: ShowContextMenuForURL(url, point)
  }

  showSidePanelUI() {
    // Method: ShowSidePanelUI
    // Call: ShowSidePanelUI()
  }

  toggleVisibility(visible) {
    // Method: ToggleVisibility
    return new Promise((resolve) => {
      // Call: ToggleVisibility(visible)
      resolve({});
    });
  }

  startQueryClusters(query, begin_time, recluster) {
    // Method: StartQueryClusters
    // Call: StartQueryClusters(query, begin_time, recluster)
  }

  loadMoreClusters(query) {
    // Method: LoadMoreClusters
    // Call: LoadMoreClusters(query)
  }

  hideVisits(visits) {
    // Method: HideVisits
    return new Promise((resolve) => {
      // Call: HideVisits(visits)
      resolve({});
    });
  }

  removeVisits(visits) {
    // Method: RemoveVisits
    return new Promise((resolve) => {
      // Call: RemoveVisits(visits)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  removeVisitByUrlAndTime(url, timestamp) {
    // Method: RemoveVisitByUrlAndTime
    return new Promise((resolve) => {
      // Call: RemoveVisitByUrlAndTime(url, timestamp)
      resolve({});
    });
  }

  openVisitUrlsInTabGroup(visits, tab_group_name) {
    // Method: OpenVisitUrlsInTabGroup
    // Call: OpenVisitUrlsInTabGroup(visits, tab_group_name)
  }

  recordVisitAction(visit_action, visit_index, visit_type) {
    // Method: RecordVisitAction
    // Call: RecordVisitAction(visit_action, visit_index, visit_type)
  }

  recordRelatedSearchAction(action, visit_index) {
    // Method: RecordRelatedSearchAction
    // Call: RecordRelatedSearchAction(action, visit_index)
  }

  recordClusterAction(cluster_action, cluster_index) {
    // Method: RecordClusterAction
    // Call: RecordClusterAction(cluster_action, cluster_index)
  }

  recordToggledVisibility(visible) {
    // Method: RecordToggledVisibility
    // Call: RecordToggledVisibility(visible)
  }

};

history_clusters.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
history_clusters.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'history_clusters.mojom.Page';
  }

  queryClusters() {
    // Method: QueryClusters
    // Call: QueryClusters()
  }

  onClustersQueryResult(result) {
    // Method: OnClustersQueryResult
    // Call: OnClustersQueryResult(result)
  }

  onClusterImageUpdated(cluster_index, image_url) {
    // Method: OnClusterImageUpdated
    // Call: OnClusterImageUpdated(cluster_index, image_url)
  }

  hideVisits() {
    // Method: HideVisits
    // Call: HideVisits()
  }

  onVisitsHidden(hidden_visits) {
    // Method: OnVisitsHidden
    // Call: OnVisitsHidden(hidden_visits)
  }

  removeVisits() {
    // Method: RemoveVisits
    // Call: RemoveVisits()
  }

  onVisitsRemoved(removed_visits) {
    // Method: OnVisitsRemoved
    // Call: OnVisitsRemoved(removed_visits)
  }

  onHistoryDeleted() {
    // Method: OnHistoryDeleted
    // Call: OnHistoryDeleted()
  }

  onQueryChangedByUser(query) {
    // Method: OnQueryChangedByUser
    // Call: OnQueryChangedByUser(query)
  }

};

history_clusters.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
