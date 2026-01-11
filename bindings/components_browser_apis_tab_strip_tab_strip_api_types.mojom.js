// Auto-generated MojoJS binding
// Source: chromium_src/components/browser_apis/tab_strip/tab_strip_api_types.mojom
// Module: tabs_api.mojom

// Module namespace
var tabs_api = tabs_api || {};
tabs_api.mojom = tabs_api.mojom || {};

tabs_api.mojom.TypeSpec = { $: mojo.internal.Enum() };
tabs_api.mojom.NodeIdSpec = { $: {} };
tabs_api.mojom.PositionSpec = { $: {} };

// Enum: Type
tabs_api.mojom.Type = {
  kUnknown: 0,
  kContent: 1,
  kCollection: 2,
};

// Struct: NodeId
mojo.internal.Struct(
    tabs_api.mojom.NodeIdSpec, 'tabs_api.mojom.NodeId', [
      mojo.internal.StructField('kUnknown', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Position
mojo.internal.Struct(
    tabs_api.mojom.PositionSpec, 'tabs_api.mojom.Position', [
      mojo.internal.StructField('parent_id', 0, 0, tabs_api.mojom.NodeIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);
