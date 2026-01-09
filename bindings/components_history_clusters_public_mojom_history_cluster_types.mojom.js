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

// Enum: InteractionState
history_clusters.mojom.InteractionState = {
  kDefault: 0,
  kHidden: 1,
  kDone: 2,
};

// Struct: MatchPosition
history_clusters.mojom.MatchPositionSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.MatchPosition',
      packedSize: 16,
      fields: [
        { name: 'begin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'end', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'visit_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: URLVisit
history_clusters.mojom.URLVisitSpec = {
  $: {
    structSpec: {
      name: 'history_clusters.mojom.URLVisit',
      packedSize: 112,
      fields: [
        { name: 'visit_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'normalized_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'url_for_display', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'page_title', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'title_match_positions', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'url_for_display_match_positions', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'raw_visit_data', packedOffset: 48, packedBitOffset: 0, type: history_clusters.mojom.RawVisitDataSpec, nullable: false },
        { name: 'duplicates', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'relative_date', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'annotations', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'is_known_to_sync', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'debug_info', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'has_url_keyed_image', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'visits', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'tab_group_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'label_match_positions', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'related_searches', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'image_url', packedOffset: 48, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'from_persistence', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'debug_info', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
