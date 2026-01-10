// Auto-generated MojoJS binding
// Source: chromium_src/components/browser_apis/tab_strip/tab_strip_api.mojom
// Module: tabs_api.mojom

'use strict';

// Module namespace
var tabs_api = tabs_api || {};
tabs_api.mojom = tabs_api.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

tabs_api.mojom.TabsEventSpec = { $: {} };
tabs_api.mojom.TabsSnapshotSpec = { $: {} };
tabs_api.mojom.TabStripService = {};
tabs_api.mojom.TabStripService.$interfaceName = 'tabs_api.mojom.TabStripService';
tabs_api.mojom.TabStripService_GetTabs_ParamsSpec = { $: {} };
tabs_api.mojom.TabStripService_GetTab_ParamsSpec = { $: {} };
tabs_api.mojom.TabStripService_CreateTabAt_ParamsSpec = { $: {} };
tabs_api.mojom.TabStripService_CloseTabs_ParamsSpec = { $: {} };
tabs_api.mojom.TabStripService_ActivateTab_ParamsSpec = { $: {} };
tabs_api.mojom.TabStripService_SetSelectedTabs_ParamsSpec = { $: {} };
tabs_api.mojom.TabStripService_MoveNode_ParamsSpec = { $: {} };
tabs_api.mojom.TabsObserver = {};
tabs_api.mojom.TabsObserver.$interfaceName = 'tabs_api.mojom.TabsObserver';
tabs_api.mojom.TabsObserver_OnTabEvents_ParamsSpec = { $: {} };

// Union: TabsEvent
mojo.internal.Union(
    tabs_api.mojom.TabsEventSpec, 'tabs_api.mojom.TabsEvent', {
      'tabs_created_event': {
        'ordinal': 0,
        'type': tabs_api.mojom.OnTabsCreatedEventSpec.$,
        'nullable': false,
      },
      'tabs_closed_event': {
        'ordinal': 1,
        'type': tabs_api.mojom.OnTabsClosedEventSpec.$,
        'nullable': false,
      },
      'node_moved_event': {
        'ordinal': 2,
        'type': tabs_api.mojom.OnNodeMovedEventSpec.$,
        'nullable': false,
      },
      'data_changed_event': {
        'ordinal': 3,
        'type': tabs_api.mojom.OnDataChangedEventSpec.$,
        'nullable': false,
      },
      'collection_created_event': {
        'ordinal': 4,
        'type': tabs_api.mojom.OnCollectionCreatedEventSpec.$,
        'nullable': false,
      },
    });

// Struct: TabsSnapshot
mojo.internal.Struct(
    tabs_api.mojom.TabsSnapshotSpec, 'tabs_api.mojom.TabsSnapshot', [
      mojo.internal.StructField('tab_strip', 0, 0, tabs_api.mojom.ContainerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('stream', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: TabStripService
mojo.internal.Struct(
    tabs_api.mojom.TabStripService_GetTabs_ParamsSpec, 'tabs_api.mojom.TabStripService_GetTabs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tabs_api.mojom.TabStripService_GetTab_ParamsSpec, 'tabs_api.mojom.TabStripService_GetTab_Params', [
      mojo.internal.StructField('id', 0, 0, tabs_api.mojom.NodeIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tabs_api.mojom.TabStripService_CreateTabAt_ParamsSpec, 'tabs_api.mojom.TabStripService_CreateTabAt_Params', [
      mojo.internal.StructField('pos', 0, 0, tabs_api.mojom.PositionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tabs_api.mojom.TabStripService_CloseTabs_ParamsSpec, 'tabs_api.mojom.TabStripService_CloseTabs_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Array(tabs_api.mojom.NodeIdSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tabs_api.mojom.TabStripService_ActivateTab_ParamsSpec, 'tabs_api.mojom.TabStripService_ActivateTab_Params', [
      mojo.internal.StructField('id', 0, 0, tabs_api.mojom.NodeIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tabs_api.mojom.TabStripService_SetSelectedTabs_ParamsSpec, 'tabs_api.mojom.TabStripService_SetSelectedTabs_Params', [
      mojo.internal.StructField('selection', 0, 0, mojo.internal.Array(tabs_api.mojom.NodeIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('tab_to_activate', 8, 0, tabs_api.mojom.NodeIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tabs_api.mojom.TabStripService_MoveNode_ParamsSpec, 'tabs_api.mojom.TabStripService_MoveNode_Params', [
      mojo.internal.StructField('id', 0, 0, tabs_api.mojom.NodeIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, tabs_api.mojom.PositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [],
      false);
  }

  getTab(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tabs_api.mojom.TabStripService_GetTab_ParamsSpec,
      null,
      [id],
      false);
  }

  createTabAt(pos, url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tabs_api.mojom.TabStripService_CreateTabAt_ParamsSpec,
      null,
      [pos, url],
      false);
  }

  closeTabs(id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tabs_api.mojom.TabStripService_CloseTabs_ParamsSpec,
      null,
      [id],
      false);
  }

  activateTab(id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tabs_api.mojom.TabStripService_ActivateTab_ParamsSpec,
      null,
      [id],
      false);
  }

  setSelectedTabs(selection, tab_to_activate) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      tabs_api.mojom.TabStripService_SetSelectedTabs_ParamsSpec,
      null,
      [selection, tab_to_activate],
      false);
  }

  moveNode(id, position) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      tabs_api.mojom.TabStripService_MoveNode_ParamsSpec,
      null,
      [id, position],
      false);
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

tabs_api.mojom.TabStripServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = tabs_api.mojom.TabStripService_GetTabs_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getTabs();
          break;
        }
        case 1: {
          const params = tabs_api.mojom.TabStripService_GetTab_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getTab(params.id);
          break;
        }
        case 2: {
          const params = tabs_api.mojom.TabStripService_CreateTabAt_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createTabAt(params.pos, params.url);
          break;
        }
        case 3: {
          const params = tabs_api.mojom.TabStripService_CloseTabs_ParamsSpec.$.decode(message.payload);
          const result = this.impl.closeTabs(params.id);
          break;
        }
        case 4: {
          const params = tabs_api.mojom.TabStripService_ActivateTab_ParamsSpec.$.decode(message.payload);
          const result = this.impl.activateTab(params.id);
          break;
        }
        case 5: {
          const params = tabs_api.mojom.TabStripService_SetSelectedTabs_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setSelectedTabs(params.selection, params.tab_to_activate);
          break;
        }
        case 6: {
          const params = tabs_api.mojom.TabStripService_MoveNode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.moveNode(params.id, params.position);
          break;
        }
      }
    }});
  }
};

tabs_api.mojom.TabStripServiceReceiver = tabs_api.mojom.TabStripServiceReceiver;

tabs_api.mojom.TabStripServicePtr = tabs_api.mojom.TabStripServiceRemote;
tabs_api.mojom.TabStripServiceRequest = tabs_api.mojom.TabStripServicePendingReceiver;


// Interface: TabsObserver
mojo.internal.Struct(
    tabs_api.mojom.TabsObserver_OnTabEvents_ParamsSpec, 'tabs_api.mojom.TabsObserver_OnTabEvents_Params', [
      mojo.internal.StructField('events', 0, 0, mojo.internal.Array(tabs_api.mojom.TabsEventSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [events],
      false);
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

tabs_api.mojom.TabsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = tabs_api.mojom.TabsObserver_OnTabEvents_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTabEvents(params.events);
          break;
        }
      }
    }});
  }
};

tabs_api.mojom.TabsObserverReceiver = tabs_api.mojom.TabsObserverReceiver;

tabs_api.mojom.TabsObserverPtr = tabs_api.mojom.TabsObserverRemote;
tabs_api.mojom.TabsObserverRequest = tabs_api.mojom.TabsObserverPendingReceiver;

