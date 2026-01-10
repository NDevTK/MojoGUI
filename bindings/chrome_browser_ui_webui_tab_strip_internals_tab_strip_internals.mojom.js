// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/tab_strip_internals/tab_strip_internals.mojom
// Module: tab_strip_internals.mojom

'use strict';

// Module namespace
var tab_strip_internals = tab_strip_internals || {};
tab_strip_internals.mojom = tab_strip_internals.mojom || {};
var ui = ui || {};
var url = url || {};


// Enum: Type
tab_strip_internals.mojom.mojom.Type = {
  kTab: 0,
  kCollection: 1,
  kWindow: 2,
  kTabRestoreTab: 3,
  kTabRestoreGroup: 4,
  kTabRestoreWindow: 5,
};
tab_strip_internals.mojom.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Enum: Layout
tab_strip_internals.mojom.mojom.Layout = {
  kVertical: 0,
  kHorizontal: 1,
};
tab_strip_internals.mojom.mojom.LayoutSpec = { $: mojo.internal.Enum() };

// Union: Data
tab_strip_internals.mojom.mojom.DataSpec = { $: mojo.internal.Union(
    'tab_strip_internals.mojom.Data', {
      'tab': {
        'ordinal': 0,
        'type': tab_strip_internals.mojom.TabSpec,
      }},
      'tab_strip_collection': {
        'ordinal': 1,
        'type': tab_strip_internals.mojom.TabStripCollectionSpec,
      }},
      'pinned_tab_collection': {
        'ordinal': 2,
        'type': tab_strip_internals.mojom.PinnedCollectionSpec,
      }},
      'unpinned_tab_collection': {
        'ordinal': 3,
        'type': tab_strip_internals.mojom.UnpinnedCollectionSpec,
      }},
      'tab_group_collection': {
        'ordinal': 4,
        'type': tab_strip_internals.mojom.GroupCollectionSpec,
      }},
      'split_tab_collection': {
        'ordinal': 5,
        'type': tab_strip_internals.mojom.SplitCollectionSpec,
      }},
    })
};

// Union: TabRestoreEntry
tab_strip_internals.mojom.mojom.TabRestoreEntrySpec = { $: mojo.internal.Union(
    'tab_strip_internals.mojom.TabRestoreEntry', {
      'tab': {
        'ordinal': 0,
        'type': tab_strip_internals.mojom.TabRestoreTabSpec,
      }},
      'window': {
        'ordinal': 1,
        'type': tab_strip_internals.mojom.TabRestoreWindowSpec,
      }},
      'group': {
        'ordinal': 2,
        'type': tab_strip_internals.mojom.TabRestoreGroupSpec,
      }},
    })
};

// Struct: Container
tab_strip_internals.mojom.mojom.ContainerSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.Container',
      packedSize: 24,
      fields: [
        { name: 'tabstrip_tree', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.TabStripTreeSpec, nullable: false, minVersion: 0 },
        { name: 'tab_restore', packedOffset: 8, packedBitOffset: 0, type: tab_strip_internals.mojom.TabRestoreDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TabStripTree
tab_strip_internals.mojom.mojom.TabStripTreeSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.TabStripTree',
      packedSize: 16,
      fields: [
        { name: 'windows', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(tab_strip_internals.mojom.WindowNodeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: WindowNode
tab_strip_internals.mojom.mojom.WindowNodeSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.WindowNode',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
        { name: 'tabstrip_model', packedOffset: 8, packedBitOffset: 0, type: tab_strip_internals.mojom.TabStripModelSpec, nullable: false, minVersion: 0 },
        { name: 'selection_model', packedOffset: 16, packedBitOffset: 0, type: tab_strip_internals.mojom.SelectionModelSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: NodeId
tab_strip_internals.mojom.mojom.NodeIdSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.NodeId',
      packedSize: 16,
      fields: [
        { name: 'kTab', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TabStripModel
tab_strip_internals.mojom.mojom.TabStripModelSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.TabStripModel',
      packedSize: 16,
      fields: [
        { name: 'root', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Node
tab_strip_internals.mojom.mojom.NodeSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.Node',
      packedSize: 32,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.DataSpec, nullable: false, minVersion: 0 },
        { name: 'children', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(tab_strip_internals.mojom.NodeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Tab
tab_strip_internals.mojom.mojom.TabSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.Tab',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'active', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'visible', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'selected', packedOffset: 32, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'pinned', packedOffset: 32, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'split', packedOffset: 32, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'alert_states', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(tabs.mojom.TabAlertStateSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: TabStripCollection
tab_strip_internals.mojom.mojom.TabStripCollectionSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.TabStripCollection',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PinnedCollection
tab_strip_internals.mojom.mojom.PinnedCollectionSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.PinnedCollection',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: UnpinnedCollection
tab_strip_internals.mojom.mojom.UnpinnedCollectionSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.UnpinnedCollection',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: GroupCollection
tab_strip_internals.mojom.mojom.GroupCollectionSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.GroupCollection',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
        { name: 'visualData', packedOffset: 8, packedBitOffset: 0, type: tab_strip_internals.mojom.TabGroupVisualDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TabGroupVisualData
tab_strip_internals.mojom.mojom.TabGroupVisualDataSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.TabGroupVisualData',
      packedSize: 24,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 8, packedBitOffset: 0, type: tab_groups.mojom.ColorSpec, nullable: false, minVersion: 0 },
        { name: 'is_collapsed', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SplitCollection
tab_strip_internals.mojom.mojom.SplitCollectionSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.SplitCollection',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
        { name: 'visualData', packedOffset: 8, packedBitOffset: 0, type: tab_strip_internals.mojom.SplitTabVisualDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SplitTabVisualData
tab_strip_internals.mojom.mojom.SplitTabVisualDataSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.SplitTabVisualData',
      packedSize: 16,
      fields: [
        { name: 'kVertical', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SelectionModel
tab_strip_internals.mojom.mojom.SelectionModelSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.SelectionModel',
      packedSize: 24,
      fields: [
        { name: 'active_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'anchor_index', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'selected_indices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TabRestoreData
tab_strip_internals.mojom.mojom.TabRestoreDataSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.TabRestoreData',
      packedSize: 16,
      fields: [
        { name: 'entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(tab_strip_internals.mojom.TabRestoreEntrySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TabRestoreEntryBase
tab_strip_internals.mojom.mojom.TabRestoreEntryBaseSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.TabRestoreEntryBase',
      packedSize: 24,
      fields: [
        { name: 'original_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TabRestoreTab
tab_strip_internals.mojom.mojom.TabRestoreTabSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.TabRestoreTab',
      packedSize: 72,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
        { name: 'restore_entry', packedOffset: 8, packedBitOffset: 0, type: tab_strip_internals.mojom.TabRestoreEntryBaseSpec, nullable: false, minVersion: 0 },
        { name: 'browser_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'tabstrip_index', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'pinned', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'group_id', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: true, minVersion: 0 },
        { name: 'group_visual_data', packedOffset: 24, packedBitOffset: 0, type: tab_strip_internals.mojom.TabGroupVisualDataSpec, nullable: true, minVersion: 0 },
        { name: 'title', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 40, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: TabRestoreGroup
tab_strip_internals.mojom.mojom.TabRestoreGroupSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.TabRestoreGroup',
      packedSize: 56,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
        { name: 'restore_entry', packedOffset: 8, packedBitOffset: 0, type: tab_strip_internals.mojom.TabRestoreEntryBaseSpec, nullable: false, minVersion: 0 },
        { name: 'browser_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'group_id', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false, minVersion: 0 },
        { name: 'visual_data', packedOffset: 24, packedBitOffset: 0, type: tab_strip_internals.mojom.TabGroupVisualDataSpec, nullable: false, minVersion: 0 },
        { name: 'tabs', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(tab_strip_internals.mojom.TabRestoreTabSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: TabRestoreWindow
tab_strip_internals.mojom.mojom.TabRestoreWindowSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.TabRestoreWindow',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
        { name: 'restore_entry', packedOffset: 8, packedBitOffset: 0, type: tab_strip_internals.mojom.TabRestoreEntryBaseSpec, nullable: false, minVersion: 0 },
        { name: 'selected_tab_index', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'tabs', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(tab_strip_internals.mojom.TabRestoreTabSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: PageHandlerFactory
tab_strip_internals.mojom.mojom.PageHandlerFactory = {};

tab_strip_internals.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tab_strip_internals.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'tab_strip_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tab_strip_internals.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new tab_strip_internals.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tab_strip_internals.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tab_strip_internals.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

tab_strip_internals.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new tab_strip_internals.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_strip_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
tab_strip_internals.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
tab_strip_internals.mojom.mojom.PageHandlerFactoryPtr = tab_strip_internals.mojom.mojom.PageHandlerFactoryRemote;
tab_strip_internals.mojom.mojom.PageHandlerFactoryRequest = tab_strip_internals.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
tab_strip_internals.mojom.mojom.PageHandler = {};

tab_strip_internals.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tab_strip_internals.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'tab_strip_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tab_strip_internals.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new tab_strip_internals.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tab_strip_internals.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getTabStripData() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tab_strip_internals.mojom.mojom.PageHandler_GetTabStripData_ParamsSpec,
      tab_strip_internals.mojom.mojom.PageHandler_GetTabStripData_ResponseParamsSpec,
      []);
  }

};

tab_strip_internals.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new tab_strip_internals.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_strip_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetTabStripData
tab_strip_internals.mojom.mojom.PageHandler_GetTabStripData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.PageHandler.GetTabStripData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

tab_strip_internals.mojom.mojom.PageHandler_GetTabStripData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.PageHandler.GetTabStripData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.ContainerSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
tab_strip_internals.mojom.mojom.PageHandlerPtr = tab_strip_internals.mojom.mojom.PageHandlerRemote;
tab_strip_internals.mojom.mojom.PageHandlerRequest = tab_strip_internals.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
tab_strip_internals.mojom.mojom.Page = {};

tab_strip_internals.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tab_strip_internals.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'tab_strip_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tab_strip_internals.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new tab_strip_internals.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tab_strip_internals.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTabStripUpdated(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tab_strip_internals.mojom.mojom.Page_OnTabStripUpdated_ParamsSpec,
      null,
      [data]);
  }

};

tab_strip_internals.mojom.mojom.Page.getRemote = function() {
  let remote = new tab_strip_internals.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_strip_internals.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnTabStripUpdated
tab_strip_internals.mojom.mojom.Page_OnTabStripUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.Page.OnTabStripUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.ContainerSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
tab_strip_internals.mojom.mojom.PagePtr = tab_strip_internals.mojom.mojom.PageRemote;
tab_strip_internals.mojom.mojom.PageRequest = tab_strip_internals.mojom.mojom.PagePendingReceiver;

