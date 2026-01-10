// Auto-generated MojoJS binding
// Source: chromium_src/components/history_clusters/public/mojom/history_cluster_types.mojom
// Module: history_clusters.mojom

'use strict';

// Module namespace
var history_clusters = history_clusters || {};
history_clusters.mojom = history_clusters.mojom || {};
var url = url || {};

history_clusters.mojom.AnnotationSpec = { $: mojo.internal.Enum() };
history_clusters.mojom.InteractionStateSpec = { $: mojo.internal.Enum() };
history_clusters.mojom.MatchPositionSpec = { $: {} };
history_clusters.mojom.SearchQuerySpec = { $: {} };
history_clusters.mojom.RawVisitDataSpec = { $: {} };
history_clusters.mojom.URLVisitSpec = { $: {} };
history_clusters.mojom.ClusterSpec = { $: {} };

// Enum: Annotation
history_clusters.mojom.Annotation = {
  kBookmarked: 0,
  kSearchResultsPage: 1,
};

// Enum: InteractionState
history_clusters.mojom.InteractionState = {
  kDefault: 0,
  kHidden: 1,
  kDone: 2,
};

// Struct: MatchPosition
mojo.internal.Struct(
    history_clusters.mojom.MatchPositionSpec, 'history_clusters.mojom.MatchPosition', [
      mojo.internal.StructField('begin', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SearchQuery
mojo.internal.Struct(
    history_clusters.mojom.SearchQuerySpec, 'history_clusters.mojom.SearchQuery', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RawVisitData
mojo.internal.Struct(
    history_clusters.mojom.RawVisitDataSpec, 'history_clusters.mojom.RawVisitData', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('visit_time', 8, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: URLVisit
mojo.internal.Struct(
    history_clusters.mojom.URLVisitSpec, 'history_clusters.mojom.URLVisit', [
      mojo.internal.StructField('visit_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('normalized_url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('url_for_display', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('page_title', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title_match_positions', 32, 0, mojo.internal.Array(history_clusters.mojom.MatchPositionSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('url_for_display_match_positions', 40, 0, mojo.internal.Array(history_clusters.mojom.MatchPositionSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('raw_visit_data', 48, 0, history_clusters.mojom.RawVisitDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('duplicates', 56, 0, mojo.internal.Array(history_clusters.mojom.RawVisitDataSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('relative_date', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('annotations', 72, 0, mojo.internal.Array(history_clusters.mojom.AnnotationSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('is_known_to_sync', 88, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('debug_info', 80, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('has_url_keyed_image', 88, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 104]]);

// Struct: Cluster
mojo.internal.Struct(
    history_clusters.mojom.ClusterSpec, 'history_clusters.mojom.Cluster', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('visits', 8, 0, mojo.internal.Array(history_clusters.mojom.URLVisitSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('label', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tab_group_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('label_match_positions', 32, 0, mojo.internal.Array(history_clusters.mojom.MatchPositionSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('related_searches', 40, 0, mojo.internal.Array(history_clusters.mojom.SearchQuerySpec, false), null, false, 0, undefined),
      mojo.internal.StructField('image_url', 48, 0, url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('from_persistence', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('debug_info', 56, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 80]]);
