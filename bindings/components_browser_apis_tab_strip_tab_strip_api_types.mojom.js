// Auto-generated MojoJS binding
// Source: chromium_src/components/browser_apis/tab_strip/tab_strip_api_types.mojom
// Module: tabs_api.mojom

'use strict';

// Module namespace
var tabs_api = tabs_api || {};
tabs_api.mojom = tabs_api.mojom || {};


// Enum: Type
tabs_api.mojom.mojom.Type = {
  kUnknown: 0,
  kContent: 1,
  kCollection: 2,
};
tabs_api.mojom.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Struct: NodeId
tabs_api.mojom.mojom.NodeIdSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.NodeId',
      packedSize: 16,
      fields: [
        { name: 'kUnknown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Position
tabs_api.mojom.mojom.PositionSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.Position',
      packedSize: 24,
      fields: [
        { name: 'parent_id', packedOffset: 0, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: true, minVersion: 0 },
        { name: 'index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
