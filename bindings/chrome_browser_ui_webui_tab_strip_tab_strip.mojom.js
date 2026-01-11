// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/tab_strip/tab_strip.mojom
// Module: tab_strip.mojom

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
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(tab_strip.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(tab_strip.mojom.PageHandlerRemote), null, false, 0, undefined),
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
  createPageHandler(page, handler) {
    return this.$.createPageHandler(page, handler);
  }
};

tab_strip.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
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
  getGroupVisualData() {
    return this.$.getGroupVisualData();
  }
  getTabs() {
    return this.$.getTabs();
  }
  closeTab(tab_id, tab_was_swiped) {
    return this.$.closeTab(tab_id, tab_was_swiped);
  }
  groupTab(tab_id, group_id) {
    return this.$.groupTab(tab_id, group_id);
  }
  moveGroup(group_id, to_index) {
    return this.$.moveGroup(group_id, to_index);
  }
  moveTab(tab_id, to_index) {
    return this.$.moveTab(tab_id, to_index);
  }
  setThumbnailTracked(tab_id, thumbnail_tracked) {
    return this.$.setThumbnailTracked(tab_id, thumbnail_tracked);
  }
  ungroupTab(tab_id) {
    return this.$.ungroupTab(tab_id);
  }
  getLayout() {
    return this.$.getLayout();
  }
  showEditDialogForGroup(group_id, location_x, location_y, width, height) {
    return this.$.showEditDialogForGroup(group_id, location_x, location_y, width, height);
  }
  showTabContextMenu(tab_id, location_x, location_y) {
    return this.$.showTabContextMenu(tab_id, location_x, location_y);
  }
  showBackgroundContextMenu(location_x, location_y) {
    return this.$.showBackgroundContextMenu(location_x, location_y);
  }
  closeContainer() {
    return this.$.closeContainer();
  }
  reportTabActivationDuration(duration_ms) {
    return this.$.reportTabActivationDuration(duration_ms);
  }
  reportTabDataReceivedDuration(tab_count, duration_ms) {
    return this.$.reportTabDataReceivedDuration(tab_count, duration_ms);
  }
  reportTabCreationDuration(tab_count, duration_ms) {
    return this.$.reportTabCreationDuration(tab_count, duration_ms);
  }
  activateTab(tab_id) {
    return this.$.activateTab(tab_id);
  }
};

tab_strip.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getGroupVisualData() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      tab_strip.mojom.PageHandler_GetGroupVisualData_ParamsSpec,
      tab_strip.mojom.PageHandler_GetGroupVisualData_ResponseParamsSpec,
      [],
      false);
  }

  getTabs() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      tab_strip.mojom.PageHandler_GetTabs_ParamsSpec,
      tab_strip.mojom.PageHandler_GetTabs_ResponseParamsSpec,
      [],
      false);
  }

  closeTab(tab_id, tab_was_swiped) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      tab_strip.mojom.PageHandler_CloseTab_ParamsSpec,
      null,
      [tab_id, tab_was_swiped],
      false);
  }

  groupTab(tab_id, group_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      tab_strip.mojom.PageHandler_GroupTab_ParamsSpec,
      null,
      [tab_id, group_id],
      false);
  }

  moveGroup(group_id, to_index) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      tab_strip.mojom.PageHandler_MoveGroup_ParamsSpec,
      null,
      [group_id, to_index],
      false);
  }

  moveTab(tab_id, to_index) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      tab_strip.mojom.PageHandler_MoveTab_ParamsSpec,
      null,
      [tab_id, to_index],
      false);
  }

  setThumbnailTracked(tab_id, thumbnail_tracked) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      tab_strip.mojom.PageHandler_SetThumbnailTracked_ParamsSpec,
      null,
      [tab_id, thumbnail_tracked],
      false);
  }

  ungroupTab(tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      tab_strip.mojom.PageHandler_UngroupTab_ParamsSpec,
      null,
      [tab_id],
      false);
  }

  getLayout() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      tab_strip.mojom.PageHandler_GetLayout_ParamsSpec,
      tab_strip.mojom.PageHandler_GetLayout_ResponseParamsSpec,
      [],
      false);
  }

  showEditDialogForGroup(group_id, location_x, location_y, width, height) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      tab_strip.mojom.PageHandler_ShowEditDialogForGroup_ParamsSpec,
      null,
      [group_id, location_x, location_y, width, height],
      false);
  }

  showTabContextMenu(tab_id, location_x, location_y) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      tab_strip.mojom.PageHandler_ShowTabContextMenu_ParamsSpec,
      null,
      [tab_id, location_x, location_y],
      false);
  }

  showBackgroundContextMenu(location_x, location_y) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      tab_strip.mojom.PageHandler_ShowBackgroundContextMenu_ParamsSpec,
      null,
      [location_x, location_y],
      false);
  }

  closeContainer() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      tab_strip.mojom.PageHandler_CloseContainer_ParamsSpec,
      null,
      [],
      false);
  }

  reportTabActivationDuration(duration_ms) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      tab_strip.mojom.PageHandler_ReportTabActivationDuration_ParamsSpec,
      null,
      [duration_ms],
      false);
  }

  reportTabDataReceivedDuration(tab_count, duration_ms) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      tab_strip.mojom.PageHandler_ReportTabDataReceivedDuration_ParamsSpec,
      null,
      [tab_count, duration_ms],
      false);
  }

  reportTabCreationDuration(tab_count, duration_ms) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      tab_strip.mojom.PageHandler_ReportTabCreationDuration_ParamsSpec,
      null,
      [tab_count, duration_ms],
      false);
  }

  activateTab(tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_GetGroupVisualData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_GetTabs_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_CloseTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_GroupTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_MoveGroup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_MoveTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_SetThumbnailTracked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_UngroupTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_GetLayout_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_ShowEditDialogForGroup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_ShowTabContextMenu_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_ShowBackgroundContextMenu_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_CloseContainer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_ReportTabActivationDuration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_ReportTabDataReceivedDuration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_ReportTabCreationDuration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.PageHandler_ActivateTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_GetGroupVisualData_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_GetTabs_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_CloseTab_ParamsSpec.$.structSpec);
          const result = this.impl.closeTab(params.tab_id, params.tab_was_swiped);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_GroupTab_ParamsSpec.$.structSpec);
          const result = this.impl.groupTab(params.tab_id, params.group_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_MoveGroup_ParamsSpec.$.structSpec);
          const result = this.impl.moveGroup(params.group_id, params.to_index);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_MoveTab_ParamsSpec.$.structSpec);
          const result = this.impl.moveTab(params.tab_id, params.to_index);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_SetThumbnailTracked_ParamsSpec.$.structSpec);
          const result = this.impl.setThumbnailTracked(params.tab_id, params.thumbnail_tracked);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_UngroupTab_ParamsSpec.$.structSpec);
          const result = this.impl.ungroupTab(params.tab_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_GetLayout_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_ShowEditDialogForGroup_ParamsSpec.$.structSpec);
          const result = this.impl.showEditDialogForGroup(params.group_id, params.location_x, params.location_y, params.width, params.height);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_ShowTabContextMenu_ParamsSpec.$.structSpec);
          const result = this.impl.showTabContextMenu(params.tab_id, params.location_x, params.location_y);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_ShowBackgroundContextMenu_ParamsSpec.$.structSpec);
          const result = this.impl.showBackgroundContextMenu(params.location_x, params.location_y);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_CloseContainer_ParamsSpec.$.structSpec);
          const result = this.impl.closeContainer();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_ReportTabActivationDuration_ParamsSpec.$.structSpec);
          const result = this.impl.reportTabActivationDuration(params.duration_ms);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_ReportTabDataReceivedDuration_ParamsSpec.$.structSpec);
          const result = this.impl.reportTabDataReceivedDuration(params.tab_count, params.duration_ms);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_ReportTabCreationDuration_ParamsSpec.$.structSpec);
          const result = this.impl.reportTabCreationDuration(params.tab_count, params.duration_ms);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.PageHandler_ActivateTab_ParamsSpec.$.structSpec);
          const result = this.impl.activateTab(params.tab_id);
          break;
        }
      }
      } catch (err) {}
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
  layoutChanged(layout) {
    return this.$.layoutChanged(layout);
  }
  receivedKeyboardFocus() {
    return this.$.receivedKeyboardFocus();
  }
  contextMenuClosed() {
    return this.$.contextMenuClosed();
  }
  longPress() {
    return this.$.longPress();
  }
  tabGroupVisualsChanged(group_id, tab_group) {
    return this.$.tabGroupVisualsChanged(group_id, tab_group);
  }
  tabGroupMoved(group_id, index) {
    return this.$.tabGroupMoved(group_id, index);
  }
  tabGroupClosed(group_id) {
    return this.$.tabGroupClosed(group_id);
  }
  tabGroupStateChanged(tab_id, index, group_id) {
    return this.$.tabGroupStateChanged(tab_id, index, group_id);
  }
  tabCloseCancelled(tab_id) {
    return this.$.tabCloseCancelled(tab_id);
  }
  tabCreated(tab) {
    return this.$.tabCreated(tab);
  }
  tabRemoved(tab_id) {
    return this.$.tabRemoved(tab_id);
  }
  tabMoved(tab_id, to_index, in_pinned) {
    return this.$.tabMoved(tab_id, to_index, in_pinned);
  }
  tabReplaced(tab_id, new_tab_id) {
    return this.$.tabReplaced(tab_id, new_tab_id);
  }
  tabActiveChanged(tab_id) {
    return this.$.tabActiveChanged(tab_id);
  }
  tabUpdated(tab) {
    return this.$.tabUpdated(tab);
  }
  tabThumbnailUpdated(tab_id, data_uri) {
    return this.$.tabThumbnailUpdated(tab_id, data_uri);
  }
  showContextMenu() {
    return this.$.showContextMenu();
  }
  themeChanged() {
    return this.$.themeChanged();
  }
};

tab_strip.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  layoutChanged(layout) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      tab_strip.mojom.Page_LayoutChanged_ParamsSpec,
      null,
      [layout],
      false);
  }

  receivedKeyboardFocus() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      tab_strip.mojom.Page_ReceivedKeyboardFocus_ParamsSpec,
      null,
      [],
      false);
  }

  contextMenuClosed() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      tab_strip.mojom.Page_ContextMenuClosed_ParamsSpec,
      null,
      [],
      false);
  }

  longPress() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      tab_strip.mojom.Page_LongPress_ParamsSpec,
      null,
      [],
      false);
  }

  tabGroupVisualsChanged(group_id, tab_group) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      tab_strip.mojom.Page_TabGroupVisualsChanged_ParamsSpec,
      null,
      [group_id, tab_group],
      false);
  }

  tabGroupMoved(group_id, index) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      tab_strip.mojom.Page_TabGroupMoved_ParamsSpec,
      null,
      [group_id, index],
      false);
  }

  tabGroupClosed(group_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      tab_strip.mojom.Page_TabGroupClosed_ParamsSpec,
      null,
      [group_id],
      false);
  }

  tabGroupStateChanged(tab_id, index, group_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      tab_strip.mojom.Page_TabGroupStateChanged_ParamsSpec,
      null,
      [tab_id, index, group_id],
      false);
  }

  tabCloseCancelled(tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      tab_strip.mojom.Page_TabCloseCancelled_ParamsSpec,
      null,
      [tab_id],
      false);
  }

  tabCreated(tab) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      tab_strip.mojom.Page_TabCreated_ParamsSpec,
      null,
      [tab],
      false);
  }

  tabRemoved(tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      tab_strip.mojom.Page_TabRemoved_ParamsSpec,
      null,
      [tab_id],
      false);
  }

  tabMoved(tab_id, to_index, in_pinned) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      tab_strip.mojom.Page_TabMoved_ParamsSpec,
      null,
      [tab_id, to_index, in_pinned],
      false);
  }

  tabReplaced(tab_id, new_tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      tab_strip.mojom.Page_TabReplaced_ParamsSpec,
      null,
      [tab_id, new_tab_id],
      false);
  }

  tabActiveChanged(tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      tab_strip.mojom.Page_TabActiveChanged_ParamsSpec,
      null,
      [tab_id],
      false);
  }

  tabUpdated(tab) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      tab_strip.mojom.Page_TabUpdated_ParamsSpec,
      null,
      [tab],
      false);
  }

  tabThumbnailUpdated(tab_id, data_uri) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      tab_strip.mojom.Page_TabThumbnailUpdated_ParamsSpec,
      null,
      [tab_id, data_uri],
      false);
  }

  showContextMenu() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      tab_strip.mojom.Page_ShowContextMenu_ParamsSpec,
      null,
      [],
      false);
  }

  themeChanged() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_LayoutChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_ReceivedKeyboardFocus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_ContextMenuClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_LongPress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabGroupVisualsChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabGroupMoved_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabGroupClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabGroupStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabCloseCancelled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabCreated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabRemoved_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabMoved_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabReplaced_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabActiveChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_TabThumbnailUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_ShowContextMenu_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tab_strip.mojom.Page_ThemeChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_LayoutChanged_ParamsSpec.$.structSpec);
          const result = this.impl.layoutChanged(params.layout);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_ReceivedKeyboardFocus_ParamsSpec.$.structSpec);
          const result = this.impl.receivedKeyboardFocus();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_ContextMenuClosed_ParamsSpec.$.structSpec);
          const result = this.impl.contextMenuClosed();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_LongPress_ParamsSpec.$.structSpec);
          const result = this.impl.longPress();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabGroupVisualsChanged_ParamsSpec.$.structSpec);
          const result = this.impl.tabGroupVisualsChanged(params.group_id, params.tab_group);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabGroupMoved_ParamsSpec.$.structSpec);
          const result = this.impl.tabGroupMoved(params.group_id, params.index);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabGroupClosed_ParamsSpec.$.structSpec);
          const result = this.impl.tabGroupClosed(params.group_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabGroupStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.tabGroupStateChanged(params.tab_id, params.index, params.group_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabCloseCancelled_ParamsSpec.$.structSpec);
          const result = this.impl.tabCloseCancelled(params.tab_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabCreated_ParamsSpec.$.structSpec);
          const result = this.impl.tabCreated(params.tab);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabRemoved_ParamsSpec.$.structSpec);
          const result = this.impl.tabRemoved(params.tab_id);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabMoved_ParamsSpec.$.structSpec);
          const result = this.impl.tabMoved(params.tab_id, params.to_index, params.in_pinned);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabReplaced_ParamsSpec.$.structSpec);
          const result = this.impl.tabReplaced(params.tab_id, params.new_tab_id);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabActiveChanged_ParamsSpec.$.structSpec);
          const result = this.impl.tabActiveChanged(params.tab_id);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.tabUpdated(params.tab);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_TabThumbnailUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.tabThumbnailUpdated(params.tab_id, params.data_uri);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_ShowContextMenu_ParamsSpec.$.structSpec);
          const result = this.impl.showContextMenu();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_strip.mojom.Page_ThemeChanged_ParamsSpec.$.structSpec);
          const result = this.impl.themeChanged();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

tab_strip.mojom.PageReceiver = tab_strip.mojom.PageReceiver;

tab_strip.mojom.PagePtr = tab_strip.mojom.PageRemote;
tab_strip.mojom.PageRequest = tab_strip.mojom.PagePendingReceiver;

