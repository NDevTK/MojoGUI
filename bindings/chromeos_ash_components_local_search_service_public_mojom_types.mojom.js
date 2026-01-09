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
      packedSize: 8,
      fields: [
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
      packedSize: 16,
      fields: [
        { name: 'locale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 8,
      fields: [
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
      packedSize: 16,
      fields: [
        { name: 'length', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'positions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
