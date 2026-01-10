// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/tab_strip/tab_strip.mojom
// Module: tab_strip.mojom

'use strict';

// Module namespace
var tab_strip = tab_strip || {};
tab_strip.mojom = tab_strip.mojom || {};
var tabs = tabs || {};
var url = url || {};

tab_strip.mojom.TabSpec = { $: {} };
tab_strip.mojom.TabGroupVisualDataSpec = { $: {} };
tab_strip.mojom.PageHandlerFactory = {};
tab_strip.mojom.PageHandlerFactory.$interfaceName = 'tab_strip.mojom.PageHandlerFactory';
tab_strip.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
tab_strip.mojom.PageHandler = {};
tab_strip.mojom.PageHandler.$interfaceName = 'tab_strip.mojom.PageHandler';
tab_strip.mojom.PageHandler_GetGroupVisualData_ParamsSpec = { $: {} };
tab_strip.mojom.PageHandler_GetGroupVisualData_ResponseParamsSpec = { $: {} };
tab_strip.mojom.PageHandler_GetTabs_ParamsSpec = { $: {} };
tab_strip.mojom.PageHandler_GetTabs_ResponseParamsSpec = { $: {} };
tab_strip.mojom.PageHandler_CloseTab_ParamsSpec = { $: {} };
tab_strip.mojom.PageHandler_GroupTab_ParamsSpec = { $: {} };
tab_strip.mojom.PageHandler_MoveGroup_ParamsSpec = { $: {} };
tab_strip.mojom.PageHandler_MoveTab_ParamsSpec = { $: {} };
tab_strip.mojom.PageHandler_SetThumbnailTracked_ParamsSpec = { $: {} };
tab_strip.mojom.PageHandler_UngroupTab_ParamsSpec = { $: {} };
tab_strip.mojom.PageHandler_GetLayout_ParamsSpec = { $: {} };
tab_strip.mojom.PageHandler_GetLayout_ResponseParamsSpec = { $: {} };
tab_strip.mojom.PageHandler_ShowEditDialogForGroup_ParamsSpec = { $: {} };
tab_strip.mojom.PageHandler_ShowTabContextMenu_ParamsSpec = { $: {} };
tab_strip.mojom.PageHandler_ShowBackgroundContextMenu_ParamsSpec = { $: {} };
tab_strip.mojom.PageHandler_CloseContainer_ParamsSpec = { $: {} };
tab_strip.mojom.PageHandler_ReportTabActivationDuration_ParamsSpec = { $: {} };
tab_strip.mojom.PageHandler_ReportTabDataReceivedDuration_ParamsSpec = { $: {} };
tab_strip.mojom.PageHandler_ReportTabCreationDuration_ParamsSpec = { $: {} };
tab_strip.mojom.PageHandler_ActivateTab_ParamsSpec = { $: {} };
tab_strip.mojom.Page = {};
tab_strip.mojom.Page.$interfaceName = 'tab_strip.mojom.Page';
tab_strip.mojom.Page_LayoutChanged_ParamsSpec = { $: {} };
tab_strip.mojom.Page_ReceivedKeyboardFocus_ParamsSpec = { $: {} };
tab_strip.mojom.Page_ContextMenuClosed_ParamsSpec = { $: {} };
tab_strip.mojom.Page_LongPress_ParamsSpec = { $: {} };
tab_strip.mojom.Page_TabGroupVisualsChanged_ParamsSpec = { $: {} };
tab_strip.mojom.Page_TabGroupMoved_ParamsSpec = { $: {} };
tab_strip.mojom.Page_TabGroupClosed_ParamsSpec = { $: {} };
tab_strip.mojom.Page_TabGroupStateChanged_ParamsSpec = { $: {} };
tab_strip.mojom.Page_TabCloseCancelled_ParamsSpec = { $: {} };
tab_strip.mojom.Page_TabCreated_ParamsSpec = { $: {} };
tab_strip.mojom.Page_TabRemoved_ParamsSpec = { $: {} };
tab_strip.mojom.Page_TabMoved_ParamsSpec = { $: {} };
tab_strip.mojom.Page_TabReplaced_ParamsSpec = { $: {} };
tab_strip.mojom.Page_TabActiveChanged_ParamsSpec = { $: {} };
tab_strip.mojom.Page_TabUpdated_ParamsSpec = { $: {} };
tab_strip.mojom.Page_TabThumbnailUpdated_ParamsSpec = { $: {} };
tab_strip.mojom.Page_ShowContextMenu_ParamsSpec = { $: {} };
tab_strip.mojom.Page_ThemeChanged_ParamsSpec = { $: {} };

// Struct: Tab
mojo.internal.Struct(
    tab_strip.mojom.TabSpec, 'tab_strip.mojom.Tab', [
      mojo.internal.StructField('alert_states', 0, 0, mojo.internal.Array(tabs.mojom.TabAlertStateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('favicon_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('active_favicon_url', 16, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('group_id', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('network_state', 32, 0, tabs.mojom.TabNetworkStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 48, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('index', 60, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('active', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('blocked', 64, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('crashed', 64, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_default_favicon', 64, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('pinned', 64, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_hide_throbber', 64, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_icon', 64, 6, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: TabGroupVisualData
mojo.internal.Struct(
    tab_strip.mojom.TabGroupVisualDataSpec, 'tab_strip.mojom.TabGroupVisualData', [
      mojo.internal.StructField('color', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_color', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    tab_strip.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'tab_strip.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(tab_strip.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(tab_strip.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

tab_strip.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tab_strip.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'tab_strip.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tab_strip.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new tab_strip.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tab_strip.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tab_strip.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

tab_strip.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new tab_strip.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_strip.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

tab_strip.mojom.PageHandlerFactoryReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$);
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
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$);
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

tab_strip.mojom.PageHandlerFactoryReceiver = tab_strip.mojom.PageHandlerFactoryReceiver;

tab_strip.mojom.PageHandlerFactoryPtr = tab_strip.mojom.PageHandlerFactoryRemote;
tab_strip.mojom.PageHandlerFactoryRequest = tab_strip.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    tab_strip.mojom.PageHandler_GetGroupVisualData_ParamsSpec, 'tab_strip.mojom.PageHandler_GetGroupVisualData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_GetGroupVisualData_ResponseParamsSpec, 'tab_strip.mojom.PageHandler_GetGroupVisualData_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Map(mojo.internal.String, tab_strip.mojom.TabGroupVisualDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_GetTabs_ParamsSpec, 'tab_strip.mojom.PageHandler_GetTabs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_GetTabs_ResponseParamsSpec, 'tab_strip.mojom.PageHandler_GetTabs_ResponseParams', [
      mojo.internal.StructField('tabs', 0, 0, mojo.internal.Array(tab_strip.mojom.TabSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_CloseTab_ParamsSpec, 'tab_strip.mojom.PageHandler_CloseTab_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('tab_was_swiped', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_GroupTab_ParamsSpec, 'tab_strip.mojom.PageHandler_GroupTab_Params', [
      mojo.internal.StructField('group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_MoveGroup_ParamsSpec, 'tab_strip.mojom.PageHandler_MoveGroup_Params', [
      mojo.internal.StructField('group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('to_index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_MoveTab_ParamsSpec, 'tab_strip.mojom.PageHandler_MoveTab_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('to_index', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_SetThumbnailTracked_ParamsSpec, 'tab_strip.mojom.PageHandler_SetThumbnailTracked_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('thumbnail_tracked', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_UngroupTab_ParamsSpec, 'tab_strip.mojom.PageHandler_UngroupTab_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_GetLayout_ParamsSpec, 'tab_strip.mojom.PageHandler_GetLayout_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_GetLayout_ResponseParamsSpec, 'tab_strip.mojom.PageHandler_GetLayout_ResponseParams', [
      mojo.internal.StructField('layout', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_ShowEditDialogForGroup_ParamsSpec, 'tab_strip.mojom.PageHandler_ShowEditDialogForGroup_Params', [
      mojo.internal.StructField('group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('location_x', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('location_y', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('width', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_ShowTabContextMenu_ParamsSpec, 'tab_strip.mojom.PageHandler_ShowTabContextMenu_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('location_x', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('location_y', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_ShowBackgroundContextMenu_ParamsSpec, 'tab_strip.mojom.PageHandler_ShowBackgroundContextMenu_Params', [
      mojo.internal.StructField('location_x', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('location_y', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_CloseContainer_ParamsSpec, 'tab_strip.mojom.PageHandler_CloseContainer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_ReportTabActivationDuration_ParamsSpec, 'tab_strip.mojom.PageHandler_ReportTabActivationDuration_Params', [
      mojo.internal.StructField('duration_ms', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_ReportTabDataReceivedDuration_ParamsSpec, 'tab_strip.mojom.PageHandler_ReportTabDataReceivedDuration_Params', [
      mojo.internal.StructField('tab_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('duration_ms', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_ReportTabCreationDuration_ParamsSpec, 'tab_strip.mojom.PageHandler_ReportTabCreationDuration_Params', [
      mojo.internal.StructField('tab_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('duration_ms', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_ActivateTab_ParamsSpec, 'tab_strip.mojom.PageHandler_ActivateTab_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

tab_strip.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tab_strip.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'tab_strip.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tab_strip.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new tab_strip.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tab_strip.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getGroupVisualData() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tab_strip.mojom.PageHandler_GetGroupVisualData_ParamsSpec,
      tab_strip.mojom.PageHandler_GetGroupVisualData_ResponseParamsSpec,
      [],
      false);
  }

  getTabs() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tab_strip.mojom.PageHandler_GetTabs_ParamsSpec,
      tab_strip.mojom.PageHandler_GetTabs_ResponseParamsSpec,
      [],
      false);
  }

  closeTab(tab_id, tab_was_swiped) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tab_strip.mojom.PageHandler_CloseTab_ParamsSpec,
      null,
      [tab_id, tab_was_swiped],
      false);
  }

  groupTab(tab_id, group_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tab_strip.mojom.PageHandler_GroupTab_ParamsSpec,
      null,
      [tab_id, group_id],
      false);
  }

  moveGroup(group_id, to_index) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tab_strip.mojom.PageHandler_MoveGroup_ParamsSpec,
      null,
      [group_id, to_index],
      false);
  }

  moveTab(tab_id, to_index) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      tab_strip.mojom.PageHandler_MoveTab_ParamsSpec,
      null,
      [tab_id, to_index],
      false);
  }

  setThumbnailTracked(tab_id, thumbnail_tracked) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      tab_strip.mojom.PageHandler_SetThumbnailTracked_ParamsSpec,
      null,
      [tab_id, thumbnail_tracked],
      false);
  }

  ungroupTab(tab_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      tab_strip.mojom.PageHandler_UngroupTab_ParamsSpec,
      null,
      [tab_id],
      false);
  }

  getLayout() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      tab_strip.mojom.PageHandler_GetLayout_ParamsSpec,
      tab_strip.mojom.PageHandler_GetLayout_ResponseParamsSpec,
      [],
      false);
  }

  showEditDialogForGroup(group_id, location_x, location_y, width, height) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      tab_strip.mojom.PageHandler_ShowEditDialogForGroup_ParamsSpec,
      null,
      [group_id, location_x, location_y, width, height],
      false);
  }

  showTabContextMenu(tab_id, location_x, location_y) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      tab_strip.mojom.PageHandler_ShowTabContextMenu_ParamsSpec,
      null,
      [tab_id, location_x, location_y],
      false);
  }

  showBackgroundContextMenu(location_x, location_y) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      tab_strip.mojom.PageHandler_ShowBackgroundContextMenu_ParamsSpec,
      null,
      [location_x, location_y],
      false);
  }

  closeContainer() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      tab_strip.mojom.PageHandler_CloseContainer_ParamsSpec,
      null,
      [],
      false);
  }

  reportTabActivationDuration(duration_ms) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      tab_strip.mojom.PageHandler_ReportTabActivationDuration_ParamsSpec,
      null,
      [duration_ms],
      false);
  }

  reportTabDataReceivedDuration(tab_count, duration_ms) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      tab_strip.mojom.PageHandler_ReportTabDataReceivedDuration_ParamsSpec,
      null,
      [tab_count, duration_ms],
      false);
  }

  reportTabCreationDuration(tab_count, duration_ms) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      tab_strip.mojom.PageHandler_ReportTabCreationDuration_ParamsSpec,
      null,
      [tab_count, duration_ms],
      false);
  }

  activateTab(tab_id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      tab_strip.mojom.PageHandler_ActivateTab_ParamsSpec,
      null,
      [tab_id],
      false);
  }

};

tab_strip.mojom.PageHandler.getRemote = function() {
  let remote = new tab_strip.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_strip.mojom.PageHandler',
    'context');
  return remote.$;
};

tab_strip.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetGroupVisualData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_GetGroupVisualData_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetGroupVisualData (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetTabs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_GetTabs_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTabs (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CloseTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_CloseTab_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseTab (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GroupTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_GroupTab_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GroupTab (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: MoveGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_MoveGroup_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MoveGroup (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: MoveTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_MoveTab_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MoveTab (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetThumbnailTracked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_SetThumbnailTracked_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetThumbnailTracked (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: UngroupTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_UngroupTab_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UngroupTab (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetLayout
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_GetLayout_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetLayout (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ShowEditDialogForGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_ShowEditDialogForGroup_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowEditDialogForGroup (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: ShowTabContextMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_ShowTabContextMenu_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowTabContextMenu (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: ShowBackgroundContextMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_ShowBackgroundContextMenu_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowBackgroundContextMenu (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: CloseContainer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_CloseContainer_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseContainer (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: ReportTabActivationDuration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_ReportTabActivationDuration_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportTabActivationDuration (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: ReportTabDataReceivedDuration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_ReportTabDataReceivedDuration_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportTabDataReceivedDuration (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: ReportTabCreationDuration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_ReportTabCreationDuration_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportTabCreationDuration (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: ActivateTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_ActivateTab_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ActivateTab (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
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
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_GetGroupVisualData_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getGroupVisualData');
          const result = this.impl.getGroupVisualData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tab_strip.mojom.PageHandler_GetGroupVisualData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_GetTabs_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getTabs');
          const result = this.impl.getTabs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tab_strip.mojom.PageHandler_GetTabs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_CloseTab_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.closeTab');
          const result = this.impl.closeTab(params.tab_id, params.tab_was_swiped);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_GroupTab_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.groupTab');
          const result = this.impl.groupTab(params.tab_id, params.group_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_MoveGroup_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.moveGroup');
          const result = this.impl.moveGroup(params.group_id, params.to_index);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_MoveTab_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.moveTab');
          const result = this.impl.moveTab(params.tab_id, params.to_index);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_SetThumbnailTracked_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setThumbnailTracked');
          const result = this.impl.setThumbnailTracked(params.tab_id, params.thumbnail_tracked);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_UngroupTab_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.ungroupTab');
          const result = this.impl.ungroupTab(params.tab_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_GetLayout_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getLayout');
          const result = this.impl.getLayout();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tab_strip.mojom.PageHandler_GetLayout_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_ShowEditDialogForGroup_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.showEditDialogForGroup');
          const result = this.impl.showEditDialogForGroup(params.group_id, params.location_x, params.location_y, params.width, params.height);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_ShowTabContextMenu_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.showTabContextMenu');
          const result = this.impl.showTabContextMenu(params.tab_id, params.location_x, params.location_y);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_ShowBackgroundContextMenu_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.showBackgroundContextMenu');
          const result = this.impl.showBackgroundContextMenu(params.location_x, params.location_y);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_CloseContainer_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.closeContainer');
          const result = this.impl.closeContainer();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_ReportTabActivationDuration_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.reportTabActivationDuration');
          const result = this.impl.reportTabActivationDuration(params.duration_ms);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_ReportTabDataReceivedDuration_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.reportTabDataReceivedDuration');
          const result = this.impl.reportTabDataReceivedDuration(params.tab_count, params.duration_ms);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_ReportTabCreationDuration_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.reportTabCreationDuration');
          const result = this.impl.reportTabCreationDuration(params.tab_count, params.duration_ms);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_ActivateTab_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.activateTab');
          const result = this.impl.activateTab(params.tab_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

tab_strip.mojom.PageHandlerReceiver = tab_strip.mojom.PageHandlerReceiver;

tab_strip.mojom.PageHandlerPtr = tab_strip.mojom.PageHandlerRemote;
tab_strip.mojom.PageHandlerRequest = tab_strip.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    tab_strip.mojom.Page_LayoutChanged_ParamsSpec, 'tab_strip.mojom.Page_LayoutChanged_Params', [
      mojo.internal.StructField('layout', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.Page_ReceivedKeyboardFocus_ParamsSpec, 'tab_strip.mojom.Page_ReceivedKeyboardFocus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_strip.mojom.Page_ContextMenuClosed_ParamsSpec, 'tab_strip.mojom.Page_ContextMenuClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_strip.mojom.Page_LongPress_ParamsSpec, 'tab_strip.mojom.Page_LongPress_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_strip.mojom.Page_TabGroupVisualsChanged_ParamsSpec, 'tab_strip.mojom.Page_TabGroupVisualsChanged_Params', [
      mojo.internal.StructField('group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tab_group', 8, 0, tab_strip.mojom.TabGroupVisualDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tab_strip.mojom.Page_TabGroupMoved_ParamsSpec, 'tab_strip.mojom.Page_TabGroupMoved_Params', [
      mojo.internal.StructField('group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tab_strip.mojom.Page_TabGroupClosed_ParamsSpec, 'tab_strip.mojom.Page_TabGroupClosed_Params', [
      mojo.internal.StructField('group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.Page_TabGroupStateChanged_ParamsSpec, 'tab_strip.mojom.Page_TabGroupStateChanged_Params', [
      mojo.internal.StructField('group_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('index', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tab_strip.mojom.Page_TabCloseCancelled_ParamsSpec, 'tab_strip.mojom.Page_TabCloseCancelled_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.Page_TabCreated_ParamsSpec, 'tab_strip.mojom.Page_TabCreated_Params', [
      mojo.internal.StructField('tab', 0, 0, tab_strip.mojom.TabSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.Page_TabRemoved_ParamsSpec, 'tab_strip.mojom.Page_TabRemoved_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.Page_TabMoved_ParamsSpec, 'tab_strip.mojom.Page_TabMoved_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('to_index', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('in_pinned', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tab_strip.mojom.Page_TabReplaced_ParamsSpec, 'tab_strip.mojom.Page_TabReplaced_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('new_tab_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.Page_TabActiveChanged_ParamsSpec, 'tab_strip.mojom.Page_TabActiveChanged_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.Page_TabUpdated_ParamsSpec, 'tab_strip.mojom.Page_TabUpdated_Params', [
      mojo.internal.StructField('tab', 0, 0, tab_strip.mojom.TabSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.Page_TabThumbnailUpdated_ParamsSpec, 'tab_strip.mojom.Page_TabThumbnailUpdated_Params', [
      mojo.internal.StructField('data_uri', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tab_strip.mojom.Page_ShowContextMenu_ParamsSpec, 'tab_strip.mojom.Page_ShowContextMenu_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_strip.mojom.Page_ThemeChanged_ParamsSpec, 'tab_strip.mojom.Page_ThemeChanged_Params', [
    ],
    [[0, 8]]);

tab_strip.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tab_strip.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'tab_strip.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tab_strip.mojom.PagePendingReceiver,
      handle);
    this.$ = new tab_strip.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tab_strip.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  layoutChanged(layout) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tab_strip.mojom.Page_LayoutChanged_ParamsSpec,
      null,
      [layout],
      false);
  }

  receivedKeyboardFocus() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tab_strip.mojom.Page_ReceivedKeyboardFocus_ParamsSpec,
      null,
      [],
      false);
  }

  contextMenuClosed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tab_strip.mojom.Page_ContextMenuClosed_ParamsSpec,
      null,
      [],
      false);
  }

  longPress() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tab_strip.mojom.Page_LongPress_ParamsSpec,
      null,
      [],
      false);
  }

  tabGroupVisualsChanged(group_id, tab_group) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tab_strip.mojom.Page_TabGroupVisualsChanged_ParamsSpec,
      null,
      [group_id, tab_group],
      false);
  }

  tabGroupMoved(group_id, index) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      tab_strip.mojom.Page_TabGroupMoved_ParamsSpec,
      null,
      [group_id, index],
      false);
  }

  tabGroupClosed(group_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      tab_strip.mojom.Page_TabGroupClosed_ParamsSpec,
      null,
      [group_id],
      false);
  }

  tabGroupStateChanged(tab_id, index, group_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      tab_strip.mojom.Page_TabGroupStateChanged_ParamsSpec,
      null,
      [tab_id, index, group_id],
      false);
  }

  tabCloseCancelled(tab_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      tab_strip.mojom.Page_TabCloseCancelled_ParamsSpec,
      null,
      [tab_id],
      false);
  }

  tabCreated(tab) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      tab_strip.mojom.Page_TabCreated_ParamsSpec,
      null,
      [tab],
      false);
  }

  tabRemoved(tab_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      tab_strip.mojom.Page_TabRemoved_ParamsSpec,
      null,
      [tab_id],
      false);
  }

  tabMoved(tab_id, to_index, in_pinned) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      tab_strip.mojom.Page_TabMoved_ParamsSpec,
      null,
      [tab_id, to_index, in_pinned],
      false);
  }

  tabReplaced(tab_id, new_tab_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      tab_strip.mojom.Page_TabReplaced_ParamsSpec,
      null,
      [tab_id, new_tab_id],
      false);
  }

  tabActiveChanged(tab_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      tab_strip.mojom.Page_TabActiveChanged_ParamsSpec,
      null,
      [tab_id],
      false);
  }

  tabUpdated(tab) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      tab_strip.mojom.Page_TabUpdated_ParamsSpec,
      null,
      [tab],
      false);
  }

  tabThumbnailUpdated(tab_id, data_uri) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      tab_strip.mojom.Page_TabThumbnailUpdated_ParamsSpec,
      null,
      [tab_id, data_uri],
      false);
  }

  showContextMenu() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      tab_strip.mojom.Page_ShowContextMenu_ParamsSpec,
      null,
      [],
      false);
  }

  themeChanged() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      tab_strip.mojom.Page_ThemeChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

tab_strip.mojom.Page.getRemote = function() {
  let remote = new tab_strip.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_strip.mojom.Page',
    'context');
  return remote.$;
};

tab_strip.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: LayoutChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_LayoutChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LayoutChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ReceivedKeyboardFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_ReceivedKeyboardFocus_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReceivedKeyboardFocus (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ContextMenuClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_ContextMenuClosed_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ContextMenuClosed (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: LongPress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_LongPress_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LongPress (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: TabGroupVisualsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabGroupVisualsChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabGroupVisualsChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: TabGroupMoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabGroupMoved_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabGroupMoved (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: TabGroupClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabGroupClosed_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabGroupClosed (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: TabGroupStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabGroupStateChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabGroupStateChanged (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: TabCloseCancelled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabCloseCancelled_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabCloseCancelled (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: TabCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabCreated_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabCreated (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: TabRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabRemoved_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabRemoved (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: TabMoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabMoved_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabMoved (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: TabReplaced
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabReplaced_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabReplaced (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: TabActiveChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabActiveChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabActiveChanged (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: TabUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabUpdated_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabUpdated (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: TabThumbnailUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabThumbnailUpdated_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabThumbnailUpdated (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: ShowContextMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_ShowContextMenu_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowContextMenu (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: ThemeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_ThemeChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ThemeChanged (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
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
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_LayoutChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.layoutChanged');
          const result = this.impl.layoutChanged(params.layout);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_ReceivedKeyboardFocus_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.receivedKeyboardFocus');
          const result = this.impl.receivedKeyboardFocus();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_ContextMenuClosed_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.contextMenuClosed');
          const result = this.impl.contextMenuClosed();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_LongPress_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.longPress');
          const result = this.impl.longPress();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabGroupVisualsChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.tabGroupVisualsChanged');
          const result = this.impl.tabGroupVisualsChanged(params.group_id, params.tab_group);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabGroupMoved_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.tabGroupMoved');
          const result = this.impl.tabGroupMoved(params.group_id, params.index);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabGroupClosed_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.tabGroupClosed');
          const result = this.impl.tabGroupClosed(params.group_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabGroupStateChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.tabGroupStateChanged');
          const result = this.impl.tabGroupStateChanged(params.tab_id, params.index, params.group_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabCloseCancelled_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.tabCloseCancelled');
          const result = this.impl.tabCloseCancelled(params.tab_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabCreated_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.tabCreated');
          const result = this.impl.tabCreated(params.tab);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabRemoved_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.tabRemoved');
          const result = this.impl.tabRemoved(params.tab_id);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabMoved_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.tabMoved');
          const result = this.impl.tabMoved(params.tab_id, params.to_index, params.in_pinned);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabReplaced_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.tabReplaced');
          const result = this.impl.tabReplaced(params.tab_id, params.new_tab_id);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabActiveChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.tabActiveChanged');
          const result = this.impl.tabActiveChanged(params.tab_id);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabUpdated_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.tabUpdated');
          const result = this.impl.tabUpdated(params.tab);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabThumbnailUpdated_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.tabThumbnailUpdated');
          const result = this.impl.tabThumbnailUpdated(params.tab_id, params.data_uri);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_ShowContextMenu_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.showContextMenu');
          const result = this.impl.showContextMenu();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_ThemeChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.themeChanged');
          const result = this.impl.themeChanged();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

tab_strip.mojom.PageReceiver = tab_strip.mojom.PageReceiver;

tab_strip.mojom.PagePtr = tab_strip.mojom.PageRemote;
tab_strip.mojom.PageRequest = tab_strip.mojom.PagePendingReceiver;

