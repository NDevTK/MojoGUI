// Auto-generated MojoJS binding
// Source: chromium_src/components/history_clusters/public/mojom/history_cluster_types.mojom
// Module: history_clusters.mojom

'use strict';

// Module namespace
var history_clusters = history_clusters || {};
history_clusters.mojom = history_clusters.mojom || {};


// Enum: Annotation
history_clusters.mojom.Annotation = {
  kBookmarked: 0,
  kSearchResultsPage: 1,
};
history_clusters.mojom.AnnotationSpec = { $: mojo.internal.Enum() };

// Enum: InteractionState
history_clusters.mojom.InteractionState = {
  kDefault: 0,
  kHidden: 1,
  kDone: 2,
};
history_clusters.mojom.InteractionStateSpec = { $: mojo.internal.Enum() };

// Struct: MatchPosition
history_clusters.mojom.MatchPositionSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.MatchPosition',
      packedSize: 16,
      fields: [
        { name: 'begin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'end', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SearchQuery
history_clusters.mojom.SearchQuerySpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.SearchQuery',
      packedSize: 24,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: RawVisitData
history_clusters.mojom.RawVisitDataSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.RawVisitData',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'visit_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: URLVisit
history_clusters.mojom.URLVisitSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.URLVisit',
      packedSize: 104,
      fields: [
        { name: 'visit_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'normalized_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'url_for_display', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'page_title', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title_match_positions', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(history_clusters.mojom.MatchPositionSpec, false), nullable: false, minVersion: 0 },
        { name: 'url_for_display_match_positions', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(history_clusters.mojom.MatchPositionSpec, false), nullable: false, minVersion: 0 },
        { name: 'raw_visit_data', packedOffset: 48, packedBitOffset: 0, type: history_clusters.mojom.RawVisitDataSpec, nullable: false, minVersion: 0 },
        { name: 'duplicates', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(history_clusters.mojom.RawVisitDataSpec, false), nullable: false, minVersion: 0 },
        { name: 'relative_date', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'annotations', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array(history_clusters.mojom.AnnotationSpec, false), nullable: false, minVersion: 0 },
        { name: 'is_known_to_sync', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'debug_info', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'has_url_keyed_image', packedOffset: 80, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 104}]
    }
  }
};

// Struct: Cluster
history_clusters.mojom.ClusterSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.Cluster',
      packedSize: 80,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'visits', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(history_clusters.mojom.URLVisitSpec, false), nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'tab_group_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'label_match_positions', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(history_clusters.mojom.MatchPositionSpec, false), nullable: false, minVersion: 0 },
        { name: 'related_searches', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(history_clusters.mojom.SearchQuerySpec, false), nullable: false, minVersion: 0 },
        { name: 'image_url', packedOffset: 48, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'from_persistence', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'debug_info', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};
