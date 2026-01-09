// Auto-generated MojoJS binding
// Source: chromium_src/components/browser_apis/tab_strip/tab_strip_api_types.mojom
// Module: tabs_api.mojom

'use strict';

// Module namespace
var tabs_api = tabs_api || {};
tabs_api.mojom = tabs_api.mojom || {};


// Enum: Type
tabs_api.mojom.Type = {
  kUnknown: 0,
  kContent: 1,
  kCollection: 2,
};

// Struct: NodeId
tabs_api.mojom.NodeIdSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.NodeId',
      packedSize: 16,
      fields: [
        { name: 'kUnknown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Position
tabs_api.mojom.PositionSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.Position',
      packedSize: 16,
      fields: [
        { name: 'index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
