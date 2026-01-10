// Auto-generated MojoJS binding
// Source: chromium_src/components/browser_apis/tab_strip/tab_strip_api.mojom
// Module: tabs_api.mojom

'use strict';

// Module namespace
var tabs_api = tabs_api || {};
tabs_api.mojom = tabs_api.mojom || {};
var url = url || {};


// Union: TabsEvent
tabs_api.mojom.mojom.TabsEventSpec = { $: mojo.internal.Union(
    'tabs_api.mojom.TabsEvent', {
      'tabs_created_event': {
        'ordinal': 0,
        'type': tabs_api.mojom.OnTabsCreatedEventSpec,
      }},
      'tabs_closed_event': {
        'ordinal': 1,
        'type': tabs_api.mojom.OnTabsClosedEventSpec,
      }},
      'node_moved_event': {
        'ordinal': 2,
        'type': tabs_api.mojom.OnNodeMovedEventSpec,
      }},
      'data_changed_event': {
        'ordinal': 3,
        'type': tabs_api.mojom.OnDataChangedEventSpec,
      }},
      'collection_created_event': {
        'ordinal': 4,
        'type': tabs_api.mojom.OnCollectionCreatedEventSpec,
      }},
    })
};

// Struct: TabsSnapshot
tabs_api.mojom.mojom.TabsSnapshotSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabsSnapshot',
      packedSize: 24,
      fields: [
        { name: 'tab_strip', packedOffset: 0, packedBitOffset: 0, type: tabs_api.mojom.ContainerSpec, nullable: false, minVersion: 0 },
        { name: 'stream', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: TabStripService
tabs_api.mojom.mojom.TabStripService = {};

tabs_api.mojom.mojom.TabStripServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tabs_api.mojom.mojom.TabStripServiceRemote = class {
  static get $interfaceName() {
    return 'tabs_api.mojom.TabStripService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tabs_api.mojom.mojom.TabStripServicePendingReceiver,
      handle);
    this.$ = new tabs_api.mojom.mojom.TabStripServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tabs_api.mojom.mojom.TabStripServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getTabs() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tabs_api.mojom.mojom.TabStripService_GetTabs_ParamsSpec,
      null,
      []);
  }

  getTab(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tabs_api.mojom.mojom.TabStripService_GetTab_ParamsSpec,
      null,
      [id]);
  }

  createTabAt(pos, url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tabs_api.mojom.mojom.TabStripService_CreateTabAt_ParamsSpec,
      null,
      [pos, url]);
  }

  closeTabs(id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tabs_api.mojom.mojom.TabStripService_CloseTabs_ParamsSpec,
      null,
      [id]);
  }

  activateTab(id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tabs_api.mojom.mojom.TabStripService_ActivateTab_ParamsSpec,
      null,
      [id]);
  }

  setSelectedTabs(selection, tab_to_activate) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      tabs_api.mojom.mojom.TabStripService_SetSelectedTabs_ParamsSpec,
      null,
      [selection, tab_to_activate]);
  }

  moveNode(id, position) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      tabs_api.mojom.mojom.TabStripService_MoveNode_ParamsSpec,
      null,
      [id, position]);
  }

};

tabs_api.mojom.mojom.TabStripService.getRemote = function() {
  let remote = new tabs_api.mojom.mojom.TabStripServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tabs_api.mojom.TabStripService',
    'context');
  return remote.$;
};

// ParamsSpec for GetTabs
tabs_api.mojom.mojom.TabStripService_GetTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabStripService.GetTabs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetTab
tabs_api.mojom.mojom.TabStripService_GetTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabStripService.GetTab_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateTabAt
tabs_api.mojom.mojom.TabStripService_CreateTabAt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabStripService.CreateTabAt_Params',
      packedSize: 24,
      fields: [
        { name: 'pos', packedOffset: 0, packedBitOffset: 0, type: tabs_api.mojom.PositionSpec, nullable: true, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CloseTabs
tabs_api.mojom.mojom.TabStripService_CloseTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabStripService.CloseTabs_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(tabs_api.mojom.NodeIdSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ActivateTab
tabs_api.mojom.mojom.TabStripService_ActivateTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabStripService.ActivateTab_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSelectedTabs
tabs_api.mojom.mojom.TabStripService_SetSelectedTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabStripService.SetSelectedTabs_Params',
      packedSize: 24,
      fields: [
        { name: 'selection', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(tabs_api.mojom.NodeIdSpec, false), nullable: false, minVersion: 0 },
        { name: 'tab_to_activate', packedOffset: 8, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for MoveNode
tabs_api.mojom.mojom.TabStripService_MoveNode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabStripService.MoveNode_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: tabs_api.mojom.PositionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
tabs_api.mojom.mojom.TabStripServicePtr = tabs_api.mojom.mojom.TabStripServiceRemote;
tabs_api.mojom.mojom.TabStripServiceRequest = tabs_api.mojom.mojom.TabStripServicePendingReceiver;


// Interface: TabsObserver
tabs_api.mojom.mojom.TabsObserver = {};

tabs_api.mojom.mojom.TabsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tabs_api.mojom.mojom.TabsObserverRemote = class {
  static get $interfaceName() {
    return 'tabs_api.mojom.TabsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tabs_api.mojom.mojom.TabsObserverPendingReceiver,
      handle);
    this.$ = new tabs_api.mojom.mojom.TabsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tabs_api.mojom.mojom.TabsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTabEvents(events) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tabs_api.mojom.mojom.TabsObserver_OnTabEvents_ParamsSpec,
      null,
      [events]);
  }

};

tabs_api.mojom.mojom.TabsObserver.getRemote = function() {
  let remote = new tabs_api.mojom.mojom.TabsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tabs_api.mojom.TabsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnTabEvents
tabs_api.mojom.mojom.TabsObserver_OnTabEvents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabsObserver.OnTabEvents_Params',
      packedSize: 16,
      fields: [
        { name: 'events', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(tabs_api.mojom.TabsEventSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
tabs_api.mojom.mojom.TabsObserverPtr = tabs_api.mojom.mojom.TabsObserverRemote;
tabs_api.mojom.mojom.TabsObserverRequest = tabs_api.mojom.mojom.TabsObserverPendingReceiver;

