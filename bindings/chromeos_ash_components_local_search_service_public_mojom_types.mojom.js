// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/local_search_service/public/mojom/types.mojom
// Module: ash.local_search_service.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.local_search_service = ash.local_search_service || {};
ash.local_search_service.mojom = ash.local_search_service.mojom || {};


// Enum: ResponseStatus
ash.local_search_service.mojom.ResponseStatus = {
  kUnknownError: 0,
  kSuccess: 1,
  kEmptyQuery: 2,
  kEmptyIndex: 3,
};

// Struct: Content
ash.local_search_service.mojom.ContentSpec = {
  $: {
    structSpec: {
      name: 'ash.local_search_service.mojom.Content',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'content', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'weight', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Data
ash.local_search_service.mojom.DataSpec = {
  $: {
    structSpec: {
      name: 'ash.local_search_service.mojom.Data',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'contents', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'locale', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SearchParams
ash.local_search_service.mojom.SearchParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.local_search_service.mojom.SearchParams',
      packedSize: 32,
      fields: [
        { name: 'relevance_threshold', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'prefix_threshold', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'fuzzy_threshold', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Position
ash.local_search_service.mojom.PositionSpec = {
  $: {
    structSpec: {
      name: 'ash.local_search_service.mojom.Position',
      packedSize: 24,
      fields: [
        { name: 'content_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'start', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'length', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Result
ash.local_search_service.mojom.ResultSpec = {
  $: {
    structSpec: {
      name: 'ash.local_search_service.mojom.Result',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'score', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'positions', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
