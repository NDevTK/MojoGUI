// Auto-generated MojoJS binding
// Source: chromium_src/components/browser_apis/tab_strip/tab_strip_api_events.mojom
// Module: tabs_api.mojom

'use strict';

// Module namespace
var tabs_api = tabs_api || {};
tabs_api.mojom = tabs_api.mojom || {};
var components = components || {};
var components = components || {};

tabs_api.mojom.OnTabsCreatedEventSpec = { $: {} };
tabs_api.mojom.OnTabsClosedEventSpec = { $: {} };
tabs_api.mojom.OnDataChangedEventSpec = { $: {} };
tabs_api.mojom.OnCollectionCreatedEventSpec = { $: {} };
tabs_api.mojom.OnNodeMovedEventSpec = { $: {} };

// Struct: OnTabsCreatedEvent
mojo.internal.Struct(
    tabs_api.mojom.OnTabsCreatedEventSpec, 'tabs_api.mojom.OnTabsCreatedEvent', [
      mojo.internal.StructField('tabs', 0, 0, mojo.internal.Array(tabs_api.mojom.TabCreatedContainerSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: OnTabsClosedEvent
mojo.internal.Struct(
    tabs_api.mojom.OnTabsClosedEventSpec, 'tabs_api.mojom.OnTabsClosedEvent', [
      mojo.internal.StructField('tabs', 0, 0, mojo.internal.Array(tabs_api.mojom.NodeIdSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: OnDataChangedEvent
mojo.internal.Struct(
    tabs_api.mojom.OnDataChangedEventSpec, 'tabs_api.mojom.OnDataChangedEvent', [
      mojo.internal.StructField('data', 0, 0, tabs_api.mojom.DataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: OnCollectionCreatedEvent
mojo.internal.Struct(
    tabs_api.mojom.OnCollectionCreatedEventSpec, 'tabs_api.mojom.OnCollectionCreatedEvent', [
      mojo.internal.StructField('position', 0, 0, tabs_api.mojom.PositionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('collection', 8, 0, tabs_api.mojom.ContainerSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OnNodeMovedEvent
mojo.internal.Struct(
    tabs_api.mojom.OnNodeMovedEventSpec, 'tabs_api.mojom.OnNodeMovedEvent', [
      mojo.internal.StructField('id', 0, 0, tabs_api.mojom.NodeIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('from', 8, 0, tabs_api.mojom.PositionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('to', 16, 0, tabs_api.mojom.PositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);
