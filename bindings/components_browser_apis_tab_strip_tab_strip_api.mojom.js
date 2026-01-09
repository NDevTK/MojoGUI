// Auto-generated MojoJS binding
// Source: chromium_src/components/browser_apis/tab_strip/tab_strip_api.mojom
// Module: tabs_api.mojom

'use strict';

// Module namespace
var tabs_api = tabs_api || {};
tabs_api.mojom = tabs_api.mojom || {};


// Interface: TabStripService
tabs_api.mojom.TabStripService = {};

tabs_api.mojom.TabStripServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tabs_api.mojom.TabStripServiceRemote = class {
  static get $interfaceName() {
    return 'tabs_api.mojom.TabStripService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tabs_api.mojom.TabStripServicePendingReceiver,
      handle);
    this.$ = new tabs_api.mojom.TabStripServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tabs_api.mojom.TabStripServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getTabs() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tabs_api.mojom.TabStripService_GetTabs_ParamsSpec,
      null,
      []);
  }

  getTab(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tabs_api.mojom.TabStripService_GetTab_ParamsSpec,
      null,
      [id]);
  }

  createTabAt(pos, url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tabs_api.mojom.TabStripService_CreateTabAt_ParamsSpec,
      null,
      [pos, url]);
  }

  closeTabs(id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tabs_api.mojom.TabStripService_CloseTabs_ParamsSpec,
      null,
      [id]);
  }

  activateTab(id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tabs_api.mojom.TabStripService_ActivateTab_ParamsSpec,
      null,
      [id]);
  }

  setSelectedTabs(selection, tab_to_activate) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      tabs_api.mojom.TabStripService_SetSelectedTabs_ParamsSpec,
      null,
      [selection, tab_to_activate]);
  }

  moveNode(id, position) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      tabs_api.mojom.TabStripService_MoveNode_ParamsSpec,
      null,
      [id, position]);
  }

};

tabs_api.mojom.TabStripService.getRemote = function() {
  let remote = new tabs_api.mojom.TabStripServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tabs_api.mojom.TabStripService',
    'context');
  return remote.$;
};

// ParamsSpec for GetTabs
tabs_api.mojom.TabStripService_GetTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabStripService.GetTabs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetTab
tabs_api.mojom.TabStripService_GetTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabStripService.GetTab_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateTabAt
tabs_api.mojom.TabStripService_CreateTabAt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabStripService.CreateTabAt_Params',
      packedSize: 24,
      fields: [
        { name: 'pos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CloseTabs
tabs_api.mojom.TabStripService_CloseTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabStripService.CloseTabs_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ActivateTab
tabs_api.mojom.TabStripService_ActivateTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabStripService.ActivateTab_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetSelectedTabs
tabs_api.mojom.TabStripService_SetSelectedTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabStripService.SetSelectedTabs_Params',
      packedSize: 24,
      fields: [
        { name: 'selection', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'tab_to_activate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MoveNode
tabs_api.mojom.TabStripService_MoveNode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabStripService.MoveNode_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
tabs_api.mojom.TabStripServicePtr = tabs_api.mojom.TabStripServiceRemote;
tabs_api.mojom.TabStripServiceRequest = tabs_api.mojom.TabStripServicePendingReceiver;


// Interface: TabsObserver
tabs_api.mojom.TabsObserver = {};

tabs_api.mojom.TabsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tabs_api.mojom.TabsObserverRemote = class {
  static get $interfaceName() {
    return 'tabs_api.mojom.TabsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tabs_api.mojom.TabsObserverPendingReceiver,
      handle);
    this.$ = new tabs_api.mojom.TabsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tabs_api.mojom.TabsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTabEvents(events) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tabs_api.mojom.TabsObserver_OnTabEvents_ParamsSpec,
      null,
      [events]);
  }

};

tabs_api.mojom.TabsObserver.getRemote = function() {
  let remote = new tabs_api.mojom.TabsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tabs_api.mojom.TabsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnTabEvents
tabs_api.mojom.TabsObserver_OnTabEvents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabsObserver.OnTabEvents_Params',
      packedSize: 16,
      fields: [
        { name: 'events', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
tabs_api.mojom.TabsObserverPtr = tabs_api.mojom.TabsObserverRemote;
tabs_api.mojom.TabsObserverRequest = tabs_api.mojom.TabsObserverPendingReceiver;

