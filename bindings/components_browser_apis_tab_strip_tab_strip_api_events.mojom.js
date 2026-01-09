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
        { name: 'tabs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'tabs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OnDataChangedEvent
tabs_api.mojom.OnDataChangedEventSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.OnDataChangedEvent',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OnCollectionCreatedEvent
tabs_api.mojom.OnCollectionCreatedEventSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.OnCollectionCreatedEvent',
      packedSize: 16,
      fields: [
        { name: 'collection', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OnNodeMovedEvent
tabs_api.mojom.OnNodeMovedEventSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.OnNodeMovedEvent',
      packedSize: 16,
      fields: [
        { name: 'to', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
