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
        { name: 'end', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'visit_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'has_url_keyed_image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'debug_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
