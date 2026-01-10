// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/local_search_service/public/mojom/types.mojom
// Module: ash.local_search_service.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.local_search_service = ash.local_search_service || {};
ash.local_search_service.mojom = ash.local_search_service.mojom || {};

ash.local_search_service.mojom.ResponseStatusSpec = { $: mojo.internal.Enum() };
ash.local_search_service.mojom.ContentSpec = { $: {} };
ash.local_search_service.mojom.DataSpec = { $: {} };
ash.local_search_service.mojom.SearchParamsSpec = { $: {} };
ash.local_search_service.mojom.PositionSpec = { $: {} };
ash.local_search_service.mojom.ResultSpec = { $: {} };

// Enum: ResponseStatus
ash.local_search_service.mojom.ResponseStatus = {
  kUnknownError: 0,
  kSuccess: 1,
  kEmptyQuery: 2,
  kEmptyIndex: 3,
};

// Struct: Content
mojo.internal.Struct(
    ash.local_search_service.mojom.ContentSpec, 'ash.local_search_service.mojom.Content', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('weight', 16, 0, mojo.internal.Double, 1.0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Data
mojo.internal.Struct(
    ash.local_search_service.mojom.DataSpec, 'ash.local_search_service.mojom.Data', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('contents', 8, 0, mojo.internal.Array(ash.local_search_service.mojom.ContentSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('locale', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SearchParams
mojo.internal.Struct(
    ash.local_search_service.mojom.SearchParamsSpec, 'ash.local_search_service.mojom.SearchParams', [
      mojo.internal.StructField('relevance_threshold', 0, 0, mojo.internal.Double, 0.32, false, 0, undefined),
      mojo.internal.StructField('prefix_threshold', 8, 0, mojo.internal.Double, 0.6, false, 0, undefined),
      mojo.internal.StructField('fuzzy_threshold', 16, 0, mojo.internal.Double, 0.6, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Position
mojo.internal.Struct(
    ash.local_search_service.mojom.PositionSpec, 'ash.local_search_service.mojom.Position', [
      mojo.internal.StructField('content_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('start', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('length', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Result
mojo.internal.Struct(
    ash.local_search_service.mojom.ResultSpec, 'ash.local_search_service.mojom.Result', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('score', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('positions', 16, 0, mojo.internal.Array(ash.local_search_service.mojom.PositionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);
