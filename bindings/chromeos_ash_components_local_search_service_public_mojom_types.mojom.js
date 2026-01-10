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
ash.local_search_service.mojom.ResponseStatusSpec = { $: mojo.internal.Enum() };

// Struct: Content
ash.local_search_service.mojom.ContentSpec = {
  $: {
    structSpec: {
      name: 'ash.local_search_service.mojom.Content',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'content', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'weight', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'contents', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.local_search_service.mojom.ContentSpec, false), nullable: false, minVersion: 0 },
        { name: 'locale', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'relevance_threshold', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'prefix_threshold', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'fuzzy_threshold', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'content_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'start', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'score', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'positions', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(ash.local_search_service.mojom.PositionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
