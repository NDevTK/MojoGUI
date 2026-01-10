// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/tab_strip_internals/tab_strip_internals.mojom
// Module: tab_strip_internals.mojom

'use strict';

// Module namespace
var tab_strip_internals = tab_strip_internals || {};
tab_strip_internals.mojom = tab_strip_internals.mojom || {};
var tabs = tabs || {};
var tab_groups = tab_groups || {};
var mojo_base = mojo_base || {};
var url = url || {};

tab_strip_internals.mojom.TypeSpec = { $: mojo.internal.Enum() };
tab_strip_internals.mojom.LayoutSpec = { $: mojo.internal.Enum() };
tab_strip_internals.mojom.DataSpec = { $: {} };
tab_strip_internals.mojom.TabRestoreEntrySpec = { $: {} };
tab_strip_internals.mojom.ContainerSpec = { $: {} };
tab_strip_internals.mojom.TabStripTreeSpec = { $: {} };
tab_strip_internals.mojom.WindowNodeSpec = { $: {} };
tab_strip_internals.mojom.NodeIdSpec = { $: {} };
tab_strip_internals.mojom.TabStripModelSpec = { $: {} };
tab_strip_internals.mojom.NodeSpec = { $: {} };
tab_strip_internals.mojom.TabSpec = { $: {} };
tab_strip_internals.mojom.TabStripCollectionSpec = { $: {} };
tab_strip_internals.mojom.PinnedCollectionSpec = { $: {} };
tab_strip_internals.mojom.UnpinnedCollectionSpec = { $: {} };
tab_strip_internals.mojom.GroupCollectionSpec = { $: {} };
tab_strip_internals.mojom.TabGroupVisualDataSpec = { $: {} };
tab_strip_internals.mojom.SplitCollectionSpec = { $: {} };
tab_strip_internals.mojom.SplitTabVisualDataSpec = { $: {} };
tab_strip_internals.mojom.SelectionModelSpec = { $: {} };
tab_strip_internals.mojom.TabRestoreDataSpec = { $: {} };
tab_strip_internals.mojom.TabRestoreEntryBaseSpec = { $: {} };
tab_strip_internals.mojom.TabRestoreTabSpec = { $: {} };
tab_strip_internals.mojom.TabRestoreGroupSpec = { $: {} };
tab_strip_internals.mojom.TabRestoreWindowSpec = { $: {} };
tab_strip_internals.mojom.PageHandlerFactory = {};
tab_strip_internals.mojom.PageHandlerFactory.$interfaceName = 'tab_strip_internals.mojom.PageHandlerFactory';
tab_strip_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
tab_strip_internals.mojom.PageHandler = {};
tab_strip_internals.mojom.PageHandler.$interfaceName = 'tab_strip_internals.mojom.PageHandler';
tab_strip_internals.mojom.PageHandler_GetTabStripData_ParamsSpec = { $: {} };
tab_strip_internals.mojom.PageHandler_GetTabStripData_ResponseParamsSpec = { $: {} };
tab_strip_internals.mojom.Page = {};
tab_strip_internals.mojom.Page.$interfaceName = 'tab_strip_internals.mojom.Page';
tab_strip_internals.mojom.Page_OnTabStripUpdated_ParamsSpec = { $: {} };

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

// Union: Data
mojo.internal.Union(
    tab_strip_internals.mojom.DataSpec, 'tab_strip_internals.mojom.Data', {
      'tab': {
        'ordinal': 0,
        'type': tab_strip_internals.mojom.TabSpec.$,
        'nullable': false,
      },
      'tab_strip_collection': {
        'ordinal': 1,
        'type': tab_strip_internals.mojom.TabStripCollectionSpec.$,
        'nullable': false,
      },
      'pinned_tab_collection': {
        'ordinal': 2,
        'type': tab_strip_internals.mojom.PinnedCollectionSpec.$,
        'nullable': false,
      },
      'unpinned_tab_collection': {
        'ordinal': 3,
        'type': tab_strip_internals.mojom.UnpinnedCollectionSpec.$,
        'nullable': false,
      },
      'tab_group_collection': {
        'ordinal': 4,
        'type': tab_strip_internals.mojom.GroupCollectionSpec.$,
        'nullable': false,
      },
      'split_tab_collection': {
        'ordinal': 5,
        'type': tab_strip_internals.mojom.SplitCollectionSpec.$,
        'nullable': false,
      },
    });

// Union: TabRestoreEntry
mojo.internal.Union(
    tab_strip_internals.mojom.TabRestoreEntrySpec, 'tab_strip_internals.mojom.TabRestoreEntry', {
      'tab': {
        'ordinal': 0,
        'type': tab_strip_internals.mojom.TabRestoreTabSpec.$,
        'nullable': false,
      },
      'window': {
        'ordinal': 1,
        'type': tab_strip_internals.mojom.TabRestoreWindowSpec.$,
        'nullable': false,
      },
      'group': {
        'ordinal': 2,
        'type': tab_strip_internals.mojom.TabRestoreGroupSpec.$,
        'nullable': false,
      },
    });

// Struct: Container
mojo.internal.Struct(
    tab_strip_internals.mojom.ContainerSpec, 'tab_strip_internals.mojom.Container', [
      mojo.internal.StructField('tabstrip_tree', 0, 0, tab_strip_internals.mojom.TabStripTreeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab_restore', 8, 0, tab_strip_internals.mojom.TabRestoreDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TabStripTree
mojo.internal.Struct(
    tab_strip_internals.mojom.TabStripTreeSpec, 'tab_strip_internals.mojom.TabStripTree', [
      mojo.internal.StructField('windows', 0, 0, mojo.internal.Array(tab_strip_internals.mojom.WindowNodeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WindowNode
mojo.internal.Struct(
    tab_strip_internals.mojom.WindowNodeSpec, 'tab_strip_internals.mojom.WindowNode', [
      mojo.internal.StructField('id', 0, 0, tab_strip_internals.mojom.NodeIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tabstrip_model', 8, 0, tab_strip_internals.mojom.TabStripModelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('selection_model', 16, 0, tab_strip_internals.mojom.SelectionModelSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: NodeId
mojo.internal.Struct(
    tab_strip_internals.mojom.NodeIdSpec, 'tab_strip_internals.mojom.NodeId', [
      mojo.internal.StructField('kTab', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TabStripModel
mojo.internal.Struct(
    tab_strip_internals.mojom.TabStripModelSpec, 'tab_strip_internals.mojom.TabStripModel', [
      mojo.internal.StructField('root', 0, 0, tab_strip_internals.mojom.NodeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Node
mojo.internal.Struct(
    tab_strip_internals.mojom.NodeSpec, 'tab_strip_internals.mojom.Node', [
      mojo.internal.StructField('data', 0, 0, tab_strip_internals.mojom.DataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('children', 8, 0, mojo.internal.Array(tab_strip_internals.mojom.NodeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Tab
mojo.internal.Struct(
    tab_strip_internals.mojom.TabSpec, 'tab_strip_internals.mojom.Tab', [
      mojo.internal.StructField('id', 0, 0, tab_strip_internals.mojom.NodeIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('alert_states', 24, 0, mojo.internal.Array(tabs.mojom.TabAlertStateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('active', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('visible', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('selected', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('pinned', 32, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('split', 32, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: TabStripCollection
mojo.internal.Struct(
    tab_strip_internals.mojom.TabStripCollectionSpec, 'tab_strip_internals.mojom.TabStripCollection', [
      mojo.internal.StructField('id', 0, 0, tab_strip_internals.mojom.NodeIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PinnedCollection
mojo.internal.Struct(
    tab_strip_internals.mojom.PinnedCollectionSpec, 'tab_strip_internals.mojom.PinnedCollection', [
      mojo.internal.StructField('id', 0, 0, tab_strip_internals.mojom.NodeIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UnpinnedCollection
mojo.internal.Struct(
    tab_strip_internals.mojom.UnpinnedCollectionSpec, 'tab_strip_internals.mojom.UnpinnedCollection', [
      mojo.internal.StructField('id', 0, 0, tab_strip_internals.mojom.NodeIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GroupCollection
mojo.internal.Struct(
    tab_strip_internals.mojom.GroupCollectionSpec, 'tab_strip_internals.mojom.GroupCollection', [
      mojo.internal.StructField('id', 0, 0, tab_strip_internals.mojom.NodeIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visualData', 8, 0, tab_strip_internals.mojom.TabGroupVisualDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TabGroupVisualData
mojo.internal.Struct(
    tab_strip_internals.mojom.TabGroupVisualDataSpec, 'tab_strip_internals.mojom.TabGroupVisualData', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('color', 8, 0, tab_groups.mojom.ColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_collapsed', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SplitCollection
mojo.internal.Struct(
    tab_strip_internals.mojom.SplitCollectionSpec, 'tab_strip_internals.mojom.SplitCollection', [
      mojo.internal.StructField('id', 0, 0, tab_strip_internals.mojom.NodeIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visualData', 8, 0, tab_strip_internals.mojom.SplitTabVisualDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SplitTabVisualData
mojo.internal.Struct(
    tab_strip_internals.mojom.SplitTabVisualDataSpec, 'tab_strip_internals.mojom.SplitTabVisualData', [
      mojo.internal.StructField('kVertical', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SelectionModel
mojo.internal.Struct(
    tab_strip_internals.mojom.SelectionModelSpec, 'tab_strip_internals.mojom.SelectionModel', [
      mojo.internal.StructField('selected_indices', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('active_index', 8, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('anchor_index', 12, 0, mojo.internal.Int32, -1, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TabRestoreData
mojo.internal.Struct(
    tab_strip_internals.mojom.TabRestoreDataSpec, 'tab_strip_internals.mojom.TabRestoreData', [
      mojo.internal.StructField('entries', 0, 0, mojo.internal.Array(tab_strip_internals.mojom.TabRestoreEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TabRestoreEntryBase
mojo.internal.Struct(
    tab_strip_internals.mojom.TabRestoreEntryBaseSpec, 'tab_strip_internals.mojom.TabRestoreEntryBase', [
      mojo.internal.StructField('timestamp', 0, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('original_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TabRestoreTab
mojo.internal.Struct(
    tab_strip_internals.mojom.TabRestoreTabSpec, 'tab_strip_internals.mojom.TabRestoreTab', [
      mojo.internal.StructField('id', 0, 0, tab_strip_internals.mojom.NodeIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('restore_entry', 8, 0, tab_strip_internals.mojom.TabRestoreEntryBaseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 16, 0, mojo_base.mojom.TokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('group_visual_data', 24, 0, tab_strip_internals.mojom.TabGroupVisualDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('title', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 40, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('browser_id', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('tabstrip_index', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('pinned', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: TabRestoreGroup
mojo.internal.Struct(
    tab_strip_internals.mojom.TabRestoreGroupSpec, 'tab_strip_internals.mojom.TabRestoreGroup', [
      mojo.internal.StructField('id', 0, 0, tab_strip_internals.mojom.NodeIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('restore_entry', 8, 0, tab_strip_internals.mojom.TabRestoreEntryBaseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 16, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visual_data', 24, 0, tab_strip_internals.mojom.TabGroupVisualDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tabs', 32, 0, mojo.internal.Array(tab_strip_internals.mojom.TabRestoreTabSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('browser_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: TabRestoreWindow
mojo.internal.Struct(
    tab_strip_internals.mojom.TabRestoreWindowSpec, 'tab_strip_internals.mojom.TabRestoreWindow', [
      mojo.internal.StructField('id', 0, 0, tab_strip_internals.mojom.NodeIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('restore_entry', 8, 0, tab_strip_internals.mojom.TabRestoreEntryBaseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tabs', 16, 0, mojo.internal.Array(tab_strip_internals.mojom.TabRestoreTabSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('selected_tab_index', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    tab_strip_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'tab_strip_internals.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(tab_strip_internals.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(tab_strip_internals.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [page, handler],
      false);
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

tab_strip_internals.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(tab_strip_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(tab_strip_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

tab_strip_internals.mojom.PageHandlerFactoryReceiver = tab_strip_internals.mojom.PageHandlerFactoryReceiver;

tab_strip_internals.mojom.PageHandlerFactoryPtr = tab_strip_internals.mojom.PageHandlerFactoryRemote;
tab_strip_internals.mojom.PageHandlerFactoryRequest = tab_strip_internals.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    tab_strip_internals.mojom.PageHandler_GetTabStripData_ParamsSpec, 'tab_strip_internals.mojom.PageHandler_GetTabStripData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_strip_internals.mojom.PageHandler_GetTabStripData_ResponseParamsSpec, 'tab_strip_internals.mojom.PageHandler_GetTabStripData_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, tab_strip_internals.mojom.ContainerSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
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

tab_strip_internals.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetTabStripData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(tab_strip_internals.mojom.PageHandler_GetTabStripData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTabStripData (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(tab_strip_internals.mojom.PageHandler_GetTabStripData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getTabStripData');
          const result = this.impl.getTabStripData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tab_strip_internals.mojom.PageHandler_GetTabStripData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

tab_strip_internals.mojom.PageHandlerReceiver = tab_strip_internals.mojom.PageHandlerReceiver;

tab_strip_internals.mojom.PageHandlerPtr = tab_strip_internals.mojom.PageHandlerRemote;
tab_strip_internals.mojom.PageHandlerRequest = tab_strip_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    tab_strip_internals.mojom.Page_OnTabStripUpdated_ParamsSpec, 'tab_strip_internals.mojom.Page_OnTabStripUpdated_Params', [
      mojo.internal.StructField('data', 0, 0, tab_strip_internals.mojom.ContainerSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [data],
      false);
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

tab_strip_internals.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnTabStripUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(tab_strip_internals.mojom.Page_OnTabStripUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTabStripUpdated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(tab_strip_internals.mojom.Page_OnTabStripUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTabStripUpdated');
          const result = this.impl.onTabStripUpdated(params.data);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

tab_strip_internals.mojom.PageReceiver = tab_strip_internals.mojom.PageReceiver;

tab_strip_internals.mojom.PagePtr = tab_strip_internals.mojom.PageRemote;
tab_strip_internals.mojom.PageRequest = tab_strip_internals.mojom.PagePendingReceiver;

