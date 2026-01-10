// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/tab_strip/tab_strip.mojom
// Module: tab_strip.mojom

'use strict';

// Module namespace
var tab_strip = tab_strip || {};
tab_strip.mojom = tab_strip.mojom || {};
var ui = ui || {};
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
      mojo.internal.StructField('active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('alert_states', 8, 0, mojo.internal.Array(tabs.mojom.TabAlertStateSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('blocked', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('crashed', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('favicon_url', 24, 0, url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('active_favicon_url', 32, 0, url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('group_id', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('id', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('index', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_default_favicon', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('network_state', 60, 0, tabs.mojom.TabNetworkStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('pinned', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_hide_throbber', 64, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_icon', 64, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('title', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 80, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 96]]);

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
      [page, handler]);
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

tab_strip.mojom.PageHandlerFactoryPtr = tab_strip.mojom.PageHandlerFactoryRemote;
tab_strip.mojom.PageHandlerFactoryRequest = tab_strip.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    tab_strip.mojom.PageHandler_GetGroupVisualData_ParamsSpec, 'tab_strip.mojom.PageHandler_GetGroupVisualData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_GetGroupVisualData_ResponseParamsSpec, 'tab_strip.mojom.PageHandler_GetGroupVisualData_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Map(mojo.internal.String, tab_strip.mojom.TabGroupVisualDataSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_GetTabs_ParamsSpec, 'tab_strip.mojom.PageHandler_GetTabs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_strip.mojom.PageHandler_GetTabs_ResponseParamsSpec, 'tab_strip.mojom.PageHandler_GetTabs_ResponseParams', [
      mojo.internal.StructField('tabs', 0, 0, mojo.internal.Array(tab_strip.mojom.TabSpec, false), null, false, 0, undefined),
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
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('group_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
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
      []);
  }

  getTabs() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tab_strip.mojom.PageHandler_GetTabs_ParamsSpec,
      tab_strip.mojom.PageHandler_GetTabs_ResponseParamsSpec,
      []);
  }

  closeTab(tab_id, tab_was_swiped) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tab_strip.mojom.PageHandler_CloseTab_ParamsSpec,
      null,
      [tab_id, tab_was_swiped]);
  }

  groupTab(tab_id, group_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tab_strip.mojom.PageHandler_GroupTab_ParamsSpec,
      null,
      [tab_id, group_id]);
  }

  moveGroup(group_id, to_index) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tab_strip.mojom.PageHandler_MoveGroup_ParamsSpec,
      null,
      [group_id, to_index]);
  }

  moveTab(tab_id, to_index) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      tab_strip.mojom.PageHandler_MoveTab_ParamsSpec,
      null,
      [tab_id, to_index]);
  }

  setThumbnailTracked(tab_id, thumbnail_tracked) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      tab_strip.mojom.PageHandler_SetThumbnailTracked_ParamsSpec,
      null,
      [tab_id, thumbnail_tracked]);
  }

  ungroupTab(tab_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      tab_strip.mojom.PageHandler_UngroupTab_ParamsSpec,
      null,
      [tab_id]);
  }

  getLayout() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      tab_strip.mojom.PageHandler_GetLayout_ParamsSpec,
      tab_strip.mojom.PageHandler_GetLayout_ResponseParamsSpec,
      []);
  }

  showEditDialogForGroup(group_id, location_x, location_y, width, height) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      tab_strip.mojom.PageHandler_ShowEditDialogForGroup_ParamsSpec,
      null,
      [group_id, location_x, location_y, width, height]);
  }

  showTabContextMenu(tab_id, location_x, location_y) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      tab_strip.mojom.PageHandler_ShowTabContextMenu_ParamsSpec,
      null,
      [tab_id, location_x, location_y]);
  }

  showBackgroundContextMenu(location_x, location_y) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      tab_strip.mojom.PageHandler_ShowBackgroundContextMenu_ParamsSpec,
      null,
      [location_x, location_y]);
  }

  closeContainer() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      tab_strip.mojom.PageHandler_CloseContainer_ParamsSpec,
      null,
      []);
  }

  reportTabActivationDuration(duration_ms) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      tab_strip.mojom.PageHandler_ReportTabActivationDuration_ParamsSpec,
      null,
      [duration_ms]);
  }

  reportTabDataReceivedDuration(tab_count, duration_ms) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      tab_strip.mojom.PageHandler_ReportTabDataReceivedDuration_ParamsSpec,
      null,
      [tab_count, duration_ms]);
  }

  reportTabCreationDuration(tab_count, duration_ms) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      tab_strip.mojom.PageHandler_ReportTabCreationDuration_ParamsSpec,
      null,
      [tab_count, duration_ms]);
  }

  activateTab(tab_id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      tab_strip.mojom.PageHandler_ActivateTab_ParamsSpec,
      null,
      [tab_id]);
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
      mojo.internal.StructField('tab_group', 8, 0, tab_strip.mojom.TabGroupVisualDataSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('index', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('group_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tab_strip.mojom.Page_TabCloseCancelled_ParamsSpec, 'tab_strip.mojom.Page_TabCloseCancelled_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.Page_TabCreated_ParamsSpec, 'tab_strip.mojom.Page_TabCreated_Params', [
      mojo.internal.StructField('tab', 0, 0, tab_strip.mojom.TabSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('tab', 0, 0, tab_strip.mojom.TabSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_strip.mojom.Page_TabThumbnailUpdated_ParamsSpec, 'tab_strip.mojom.Page_TabThumbnailUpdated_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('data_uri', 8, 0, mojo.internal.String, null, false, 0, undefined),
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
      [layout]);
  }

  receivedKeyboardFocus() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tab_strip.mojom.Page_ReceivedKeyboardFocus_ParamsSpec,
      null,
      []);
  }

  contextMenuClosed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tab_strip.mojom.Page_ContextMenuClosed_ParamsSpec,
      null,
      []);
  }

  longPress() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tab_strip.mojom.Page_LongPress_ParamsSpec,
      null,
      []);
  }

  tabGroupVisualsChanged(group_id, tab_group) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tab_strip.mojom.Page_TabGroupVisualsChanged_ParamsSpec,
      null,
      [group_id, tab_group]);
  }

  tabGroupMoved(group_id, index) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      tab_strip.mojom.Page_TabGroupMoved_ParamsSpec,
      null,
      [group_id, index]);
  }

  tabGroupClosed(group_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      tab_strip.mojom.Page_TabGroupClosed_ParamsSpec,
      null,
      [group_id]);
  }

  tabGroupStateChanged(tab_id, index, group_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      tab_strip.mojom.Page_TabGroupStateChanged_ParamsSpec,
      null,
      [tab_id, index, group_id]);
  }

  tabCloseCancelled(tab_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      tab_strip.mojom.Page_TabCloseCancelled_ParamsSpec,
      null,
      [tab_id]);
  }

  tabCreated(tab) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      tab_strip.mojom.Page_TabCreated_ParamsSpec,
      null,
      [tab]);
  }

  tabRemoved(tab_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      tab_strip.mojom.Page_TabRemoved_ParamsSpec,
      null,
      [tab_id]);
  }

  tabMoved(tab_id, to_index, in_pinned) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      tab_strip.mojom.Page_TabMoved_ParamsSpec,
      null,
      [tab_id, to_index, in_pinned]);
  }

  tabReplaced(tab_id, new_tab_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      tab_strip.mojom.Page_TabReplaced_ParamsSpec,
      null,
      [tab_id, new_tab_id]);
  }

  tabActiveChanged(tab_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      tab_strip.mojom.Page_TabActiveChanged_ParamsSpec,
      null,
      [tab_id]);
  }

  tabUpdated(tab) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      tab_strip.mojom.Page_TabUpdated_ParamsSpec,
      null,
      [tab]);
  }

  tabThumbnailUpdated(tab_id, data_uri) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      tab_strip.mojom.Page_TabThumbnailUpdated_ParamsSpec,
      null,
      [tab_id, data_uri]);
  }

  showContextMenu() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      tab_strip.mojom.Page_ShowContextMenu_ParamsSpec,
      null,
      []);
  }

  themeChanged() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      tab_strip.mojom.Page_ThemeChanged_ParamsSpec,
      null,
      []);
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

tab_strip.mojom.PagePtr = tab_strip.mojom.PageRemote;
tab_strip.mojom.PageRequest = tab_strip.mojom.PagePendingReceiver;

