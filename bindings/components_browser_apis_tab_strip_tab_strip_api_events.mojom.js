// Auto-generated MojoJS binding
// Source: chromium_src/components/browser_apis/tab_strip/tab_strip_api_events.mojom
// Module: tabs_api.mojom

'use strict';

// Module namespace
var tabs_api = tabs_api || {};
tabs_api.mojom = tabs_api.mojom || {};


// Struct: OnTabsCreatedEvent
tabs_api.mojom.OnTabsCreatedEventSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.OnTabsCreatedEvent',
      packedSize: 16,
      fields: [
        { name: 'tabs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(tabs_api.mojom.TabCreatedContainerSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: OnTabsClosedEvent
tabs_api.mojom.OnTabsClosedEventSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.OnTabsClosedEvent',
      packedSize: 16,
      fields: [
        { name: 'tabs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(tabs_api.mojom.NodeIdSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: OnDataChangedEvent
tabs_api.mojom.OnDataChangedEventSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.OnDataChangedEvent',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: tabs_api.mojom.DataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: OnCollectionCreatedEvent
tabs_api.mojom.OnCollectionCreatedEventSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.OnCollectionCreatedEvent',
      packedSize: 24,
      fields: [
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: tabs_api.mojom.PositionSpec, nullable: false, minVersion: 0 },
        { name: 'collection', packedOffset: 8, packedBitOffset: 0, type: tabs_api.mojom.ContainerSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: OnNodeMovedEvent
tabs_api.mojom.OnNodeMovedEventSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.OnNodeMovedEvent',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
        { name: 'from', packedOffset: 8, packedBitOffset: 0, type: tabs_api.mojom.PositionSpec, nullable: false, minVersion: 0 },
        { name: 'to', packedOffset: 16, packedBitOffset: 0, type: tabs_api.mojom.PositionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
