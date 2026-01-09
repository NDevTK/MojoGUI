// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/tab_strip_internals/tab_strip_internals.mojom
// Module: tab_strip_internals.mojom

'use strict';

// Module namespace
var tab_strip_internals = tab_strip_internals || {};
tab_strip_internals.mojom = tab_strip_internals.mojom || {};


// Enum: Type
tab_strip_internals.mojom.Type = {
  kTab: 0,
  kCollection: 1,
  kWindow: 2,
  kTabRestoreTab: 3,
  kTabRestoreGroup: 4,
  kTabRestoreWindow: 5,
};

// Enum: Layout
tab_strip_internals.mojom.Layout = {
  kVertical: 0,
  kHorizontal: 1,
};

// Struct: Container
tab_strip_internals.mojom.ContainerSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.Container',
      packedSize: 24,
      fields: [
        { name: 'tabstrip_tree', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.TabStripTreeSpec, nullable: false },
        { name: 'tab_restore', packedOffset: 8, packedBitOffset: 0, type: tab_strip_internals.mojom.TabRestoreDataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TabStripTree
tab_strip_internals.mojom.TabStripTreeSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.TabStripTree',
      packedSize: 16,
      fields: [
        { name: 'windows', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WindowNode
tab_strip_internals.mojom.WindowNodeSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.WindowNode',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeIdSpec, nullable: false },
        { name: 'tabstrip_model', packedOffset: 8, packedBitOffset: 0, type: tab_strip_internals.mojom.TabStripModelSpec, nullable: false },
        { name: 'selection_model', packedOffset: 16, packedBitOffset: 0, type: tab_strip_internals.mojom.SelectionModelSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NodeId
tab_strip_internals.mojom.NodeIdSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.NodeId',
      packedSize: 16,
      fields: [
        { name: 'kTab', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TabStripModel
tab_strip_internals.mojom.TabStripModelSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.TabStripModel',
      packedSize: 16,
      fields: [
        { name: 'root', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Node
tab_strip_internals.mojom.NodeSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.Node',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'children', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Tab
tab_strip_internals.mojom.TabSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.Tab',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeIdSpec, nullable: false },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'alert_states', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'active', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'visible', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'selected', packedOffset: 32, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'pinned', packedOffset: 32, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'split', packedOffset: 32, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TabStripCollection
tab_strip_internals.mojom.TabStripCollectionSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.TabStripCollection',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeIdSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PinnedCollection
tab_strip_internals.mojom.PinnedCollectionSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.PinnedCollection',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeIdSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UnpinnedCollection
tab_strip_internals.mojom.UnpinnedCollectionSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.UnpinnedCollection',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeIdSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GroupCollection
tab_strip_internals.mojom.GroupCollectionSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.GroupCollection',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeIdSpec, nullable: false },
        { name: 'visualData', packedOffset: 8, packedBitOffset: 0, type: tab_strip_internals.mojom.TabGroupVisualDataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TabGroupVisualData
tab_strip_internals.mojom.TabGroupVisualDataSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.TabGroupVisualData',
      packedSize: 32,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'color', packedOffset: 8, packedBitOffset: 0, type: tab_groups.mojom.ColorSpec, nullable: false },
        { name: 'is_collapsed', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SplitCollection
tab_strip_internals.mojom.SplitCollectionSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.SplitCollection',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeIdSpec, nullable: false },
        { name: 'visualData', packedOffset: 8, packedBitOffset: 0, type: tab_strip_internals.mojom.SplitTabVisualDataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SplitTabVisualData
tab_strip_internals.mojom.SplitTabVisualDataSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.SplitTabVisualData',
      packedSize: 16,
      fields: [
        { name: 'kVertical', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SelectionModel
tab_strip_internals.mojom.SelectionModelSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.SelectionModel',
      packedSize: 24,
      fields: [
        { name: 'selected_indices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'active_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'anchor_index', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TabRestoreData
tab_strip_internals.mojom.TabRestoreDataSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.TabRestoreData',
      packedSize: 16,
      fields: [
        { name: 'entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TabRestoreEntryBase
tab_strip_internals.mojom.TabRestoreEntryBaseSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.TabRestoreEntryBase',
      packedSize: 24,
      fields: [
        { name: 'timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true },
        { name: 'original_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TabRestoreTab
tab_strip_internals.mojom.TabRestoreTabSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.TabRestoreTab',
      packedSize: 72,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeIdSpec, nullable: false },
        { name: 'restore_entry', packedOffset: 8, packedBitOffset: 0, type: tab_strip_internals.mojom.TabRestoreEntryBaseSpec, nullable: false },
        { name: 'group_id', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: true },
        { name: 'group_visual_data', packedOffset: 24, packedBitOffset: 0, type: tab_strip_internals.mojom.TabGroupVisualDataSpec, nullable: true },
        { name: 'title', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 40, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'browser_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'tabstrip_index', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'pinned', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TabRestoreGroup
tab_strip_internals.mojom.TabRestoreGroupSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.TabRestoreGroup',
      packedSize: 56,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeIdSpec, nullable: false },
        { name: 'restore_entry', packedOffset: 8, packedBitOffset: 0, type: tab_strip_internals.mojom.TabRestoreEntryBaseSpec, nullable: false },
        { name: 'group_id', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false },
        { name: 'visual_data', packedOffset: 24, packedBitOffset: 0, type: tab_strip_internals.mojom.TabGroupVisualDataSpec, nullable: false },
        { name: 'tabs', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'browser_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TabRestoreWindow
tab_strip_internals.mojom.TabRestoreWindowSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.TabRestoreWindow',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.NodeIdSpec, nullable: false },
        { name: 'restore_entry', packedOffset: 8, packedBitOffset: 0, type: tab_strip_internals.mojom.TabRestoreEntryBaseSpec, nullable: false },
        { name: 'tabs', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'selected_tab_index', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageHandlerFactory
tab_strip_internals.mojom.PageHandlerFactory = {};

tab_strip_internals.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tab_strip_internals.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'tab_strip_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tab_strip_internals.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new tab_strip_internals.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tab_strip_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tab_strip_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

tab_strip_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new tab_strip_internals.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_strip_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
tab_strip_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
tab_strip_internals.mojom.PageHandlerFactoryPtr = tab_strip_internals.mojom.PageHandlerFactoryRemote;
tab_strip_internals.mojom.PageHandlerFactoryRequest = tab_strip_internals.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
tab_strip_internals.mojom.PageHandler = {};

tab_strip_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tab_strip_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'tab_strip_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tab_strip_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new tab_strip_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tab_strip_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getTabStripData() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tab_strip_internals.mojom.PageHandler_GetTabStripData_ParamsSpec,
      tab_strip_internals.mojom.PageHandler_GetTabStripData_ResponseParamsSpec,
      []);
  }

};

tab_strip_internals.mojom.PageHandler.getRemote = function() {
  let remote = new tab_strip_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_strip_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetTabStripData
tab_strip_internals.mojom.PageHandler_GetTabStripData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.PageHandler.GetTabStripData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

tab_strip_internals.mojom.PageHandler_GetTabStripData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.PageHandler.GetTabStripData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.ContainerSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
tab_strip_internals.mojom.PageHandlerPtr = tab_strip_internals.mojom.PageHandlerRemote;
tab_strip_internals.mojom.PageHandlerRequest = tab_strip_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
tab_strip_internals.mojom.Page = {};

tab_strip_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tab_strip_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'tab_strip_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tab_strip_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new tab_strip_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tab_strip_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTabStripUpdated(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tab_strip_internals.mojom.Page_OnTabStripUpdated_ParamsSpec,
      null,
      [data]);
  }

};

tab_strip_internals.mojom.Page.getRemote = function() {
  let remote = new tab_strip_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_strip_internals.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnTabStripUpdated
tab_strip_internals.mojom.Page_OnTabStripUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.Page.OnTabStripUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: tab_strip_internals.mojom.ContainerSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
tab_strip_internals.mojom.PagePtr = tab_strip_internals.mojom.PageRemote;
tab_strip_internals.mojom.PageRequest = tab_strip_internals.mojom.PagePendingReceiver;

