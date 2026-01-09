// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/tab_strip/tab_strip.mojom
// Module: tab_strip.mojom

'use strict';

// Module namespace
var tab_strip = tab_strip || {};
tab_strip.mojom = tab_strip.mojom || {};


// Interface: PageHandlerFactory
tab_strip.mojom.PageHandlerFactory = {};

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
      null,
      [page, handler],
      undefined,
      undefined
    );
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

// ParamsSpec for CreatePageHandler
tab_strip.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
tab_strip.mojom.PageHandlerFactoryPtr = tab_strip.mojom.PageHandlerFactoryRemote;
tab_strip.mojom.PageHandlerFactoryRequest = tab_strip.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
tab_strip.mojom.PageHandler = {};

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
      tab_strip.mojom.PageHandler_GetGroupVisualData_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getTabs() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tab_strip.mojom.PageHandler_GetTabs_ParamsSpec,
      tab_strip.mojom.PageHandler_GetTabs_ResponseParamsSpec,
      tab_strip.mojom.PageHandler_GetTabs_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  closeTab(tab_id, tab_was_swiped) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tab_strip.mojom.PageHandler_CloseTab_ParamsSpec,
      null,
      null,
      [tab_id, tab_was_swiped],
      undefined,
      undefined
    );
  }

  groupTab(tab_id, group_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tab_strip.mojom.PageHandler_GroupTab_ParamsSpec,
      null,
      null,
      [tab_id, group_id],
      undefined,
      undefined
    );
  }

  moveGroup(group_id, to_index) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tab_strip.mojom.PageHandler_MoveGroup_ParamsSpec,
      null,
      null,
      [group_id, to_index],
      undefined,
      undefined
    );
  }

  moveTab(tab_id, to_index) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      tab_strip.mojom.PageHandler_MoveTab_ParamsSpec,
      null,
      null,
      [tab_id, to_index],
      undefined,
      undefined
    );
  }

  setThumbnailTracked(tab_id, thumbnail_tracked) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      tab_strip.mojom.PageHandler_SetThumbnailTracked_ParamsSpec,
      null,
      null,
      [tab_id, thumbnail_tracked],
      undefined,
      undefined
    );
  }

  ungroupTab(tab_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      tab_strip.mojom.PageHandler_UngroupTab_ParamsSpec,
      null,
      null,
      [tab_id],
      undefined,
      undefined
    );
  }

  getLayout() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      tab_strip.mojom.PageHandler_GetLayout_ParamsSpec,
      tab_strip.mojom.PageHandler_GetLayout_ResponseParamsSpec,
      tab_strip.mojom.PageHandler_GetLayout_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  showEditDialogForGroup(group_id, location_x, location_y, width, height) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      tab_strip.mojom.PageHandler_ShowEditDialogForGroup_ParamsSpec,
      null,
      null,
      [group_id, location_x, location_y, width, height],
      undefined,
      undefined
    );
  }

  showTabContextMenu(tab_id, location_x, location_y) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      tab_strip.mojom.PageHandler_ShowTabContextMenu_ParamsSpec,
      null,
      null,
      [tab_id, location_x, location_y],
      undefined,
      undefined
    );
  }

  showBackgroundContextMenu(location_x, location_y) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      tab_strip.mojom.PageHandler_ShowBackgroundContextMenu_ParamsSpec,
      null,
      null,
      [location_x, location_y],
      undefined,
      undefined
    );
  }

  closeContainer() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      tab_strip.mojom.PageHandler_CloseContainer_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  reportTabActivationDuration(duration_ms) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      tab_strip.mojom.PageHandler_ReportTabActivationDuration_ParamsSpec,
      null,
      null,
      [duration_ms],
      undefined,
      undefined
    );
  }

  reportTabDataReceivedDuration(tab_count, duration_ms) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      tab_strip.mojom.PageHandler_ReportTabDataReceivedDuration_ParamsSpec,
      null,
      null,
      [tab_count, duration_ms],
      undefined,
      undefined
    );
  }

  reportTabCreationDuration(tab_count, duration_ms) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      tab_strip.mojom.PageHandler_ReportTabCreationDuration_ParamsSpec,
      null,
      null,
      [tab_count, duration_ms],
      undefined,
      undefined
    );
  }

  activateTab(tab_id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      tab_strip.mojom.PageHandler_ActivateTab_ParamsSpec,
      null,
      null,
      [tab_id],
      undefined,
      undefined
    );
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

// ParamsSpec for GetGroupVisualData
tab_strip.mojom.PageHandler_GetGroupVisualData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandler.GetGroupVisualData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

tab_strip.mojom.PageHandler_GetGroupVisualData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandler.GetGroupVisualData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetTabs
tab_strip.mojom.PageHandler_GetTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandler.GetTabs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

tab_strip.mojom.PageHandler_GetTabs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandler.GetTabs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tabs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CloseTab
tab_strip.mojom.PageHandler_CloseTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandler.CloseTab_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'tab_was_swiped', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GroupTab
tab_strip.mojom.PageHandler_GroupTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandler.GroupTab_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'group_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for MoveGroup
tab_strip.mojom.PageHandler_MoveGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandler.MoveGroup_Params',
      packedSize: 24,
      fields: [
        { name: 'group_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'to_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for MoveTab
tab_strip.mojom.PageHandler_MoveTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandler.MoveTab_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'to_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetThumbnailTracked
tab_strip.mojom.PageHandler_SetThumbnailTracked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandler.SetThumbnailTracked_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'thumbnail_tracked', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UngroupTab
tab_strip.mojom.PageHandler_UngroupTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandler.UngroupTab_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetLayout
tab_strip.mojom.PageHandler_GetLayout_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandler.GetLayout_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

tab_strip.mojom.PageHandler_GetLayout_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandler.GetLayout_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'layout', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowEditDialogForGroup
tab_strip.mojom.PageHandler_ShowEditDialogForGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandler.ShowEditDialogForGroup_Params',
      packedSize: 48,
      fields: [
        { name: 'group_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'location_x', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'location_y', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'width', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'height', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for ShowTabContextMenu
tab_strip.mojom.PageHandler_ShowTabContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandler.ShowTabContextMenu_Params',
      packedSize: 32,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'location_x', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'location_y', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ShowBackgroundContextMenu
tab_strip.mojom.PageHandler_ShowBackgroundContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandler.ShowBackgroundContextMenu_Params',
      packedSize: 24,
      fields: [
        { name: 'location_x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'location_y', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CloseContainer
tab_strip.mojom.PageHandler_CloseContainer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandler.CloseContainer_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ReportTabActivationDuration
tab_strip.mojom.PageHandler_ReportTabActivationDuration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandler.ReportTabActivationDuration_Params',
      packedSize: 16,
      fields: [
        { name: 'duration_ms', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportTabDataReceivedDuration
tab_strip.mojom.PageHandler_ReportTabDataReceivedDuration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandler.ReportTabDataReceivedDuration_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'duration_ms', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ReportTabCreationDuration
tab_strip.mojom.PageHandler_ReportTabCreationDuration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandler.ReportTabCreationDuration_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'duration_ms', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ActivateTab
tab_strip.mojom.PageHandler_ActivateTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.PageHandler.ActivateTab_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
tab_strip.mojom.PageHandlerPtr = tab_strip.mojom.PageHandlerRemote;
tab_strip.mojom.PageHandlerRequest = tab_strip.mojom.PageHandlerPendingReceiver;


// Interface: Page
tab_strip.mojom.Page = {};

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
      null,
      [layout],
      undefined,
      undefined
    );
  }

  receivedKeyboardFocus() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tab_strip.mojom.Page_ReceivedKeyboardFocus_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  contextMenuClosed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tab_strip.mojom.Page_ContextMenuClosed_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  longPress() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tab_strip.mojom.Page_LongPress_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  tabGroupVisualsChanged(group_id, tab_group) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tab_strip.mojom.Page_TabGroupVisualsChanged_ParamsSpec,
      null,
      null,
      [group_id, tab_group],
      undefined,
      undefined
    );
  }

  tabGroupMoved(group_id, index) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      tab_strip.mojom.Page_TabGroupMoved_ParamsSpec,
      null,
      null,
      [group_id, index],
      undefined,
      undefined
    );
  }

  tabGroupClosed(group_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      tab_strip.mojom.Page_TabGroupClosed_ParamsSpec,
      null,
      null,
      [group_id],
      undefined,
      undefined
    );
  }

  tabGroupStateChanged(tab_id, index, group_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      tab_strip.mojom.Page_TabGroupStateChanged_ParamsSpec,
      null,
      null,
      [tab_id, index, group_id],
      undefined,
      undefined
    );
  }

  tabCloseCancelled(tab_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      tab_strip.mojom.Page_TabCloseCancelled_ParamsSpec,
      null,
      null,
      [tab_id],
      undefined,
      undefined
    );
  }

  tabCreated(tab) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      tab_strip.mojom.Page_TabCreated_ParamsSpec,
      null,
      null,
      [tab],
      undefined,
      undefined
    );
  }

  tabRemoved(tab_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      tab_strip.mojom.Page_TabRemoved_ParamsSpec,
      null,
      null,
      [tab_id],
      undefined,
      undefined
    );
  }

  tabMoved(tab_id, to_index, in_pinned) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      tab_strip.mojom.Page_TabMoved_ParamsSpec,
      null,
      null,
      [tab_id, to_index, in_pinned],
      undefined,
      undefined
    );
  }

  tabReplaced(tab_id, new_tab_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      tab_strip.mojom.Page_TabReplaced_ParamsSpec,
      null,
      null,
      [tab_id, new_tab_id],
      undefined,
      undefined
    );
  }

  tabActiveChanged(tab_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      tab_strip.mojom.Page_TabActiveChanged_ParamsSpec,
      null,
      null,
      [tab_id],
      undefined,
      undefined
    );
  }

  tabUpdated(tab) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      tab_strip.mojom.Page_TabUpdated_ParamsSpec,
      null,
      null,
      [tab],
      undefined,
      undefined
    );
  }

  tabThumbnailUpdated(tab_id, data_uri) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      tab_strip.mojom.Page_TabThumbnailUpdated_ParamsSpec,
      null,
      null,
      [tab_id, data_uri],
      undefined,
      undefined
    );
  }

  showContextMenu() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      tab_strip.mojom.Page_ShowContextMenu_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  themeChanged() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      tab_strip.mojom.Page_ThemeChanged_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
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

// ParamsSpec for LayoutChanged
tab_strip.mojom.Page_LayoutChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.Page.LayoutChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'layout', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReceivedKeyboardFocus
tab_strip.mojom.Page_ReceivedKeyboardFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.Page.ReceivedKeyboardFocus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ContextMenuClosed
tab_strip.mojom.Page_ContextMenuClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.Page.ContextMenuClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for LongPress
tab_strip.mojom.Page_LongPress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.Page.LongPress_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for TabGroupVisualsChanged
tab_strip.mojom.Page_TabGroupVisualsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.Page.TabGroupVisualsChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'group_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'tab_group', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for TabGroupMoved
tab_strip.mojom.Page_TabGroupMoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.Page.TabGroupMoved_Params',
      packedSize: 24,
      fields: [
        { name: 'group_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for TabGroupClosed
tab_strip.mojom.Page_TabGroupClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.Page.TabGroupClosed_Params',
      packedSize: 16,
      fields: [
        { name: 'group_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TabGroupStateChanged
tab_strip.mojom.Page_TabGroupStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.Page.TabGroupStateChanged_Params',
      packedSize: 32,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'group_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for TabCloseCancelled
tab_strip.mojom.Page_TabCloseCancelled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.Page.TabCloseCancelled_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TabCreated
tab_strip.mojom.Page_TabCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.Page.TabCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'tab', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TabRemoved
tab_strip.mojom.Page_TabRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.Page.TabRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TabMoved
tab_strip.mojom.Page_TabMoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.Page.TabMoved_Params',
      packedSize: 32,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'to_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'in_pinned', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for TabReplaced
tab_strip.mojom.Page_TabReplaced_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.Page.TabReplaced_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'new_tab_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for TabActiveChanged
tab_strip.mojom.Page_TabActiveChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.Page.TabActiveChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TabUpdated
tab_strip.mojom.Page_TabUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.Page.TabUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'tab', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TabThumbnailUpdated
tab_strip.mojom.Page_TabThumbnailUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.Page.TabThumbnailUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'data_uri', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ShowContextMenu
tab_strip.mojom.Page_ShowContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.Page.ShowContextMenu_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ThemeChanged
tab_strip.mojom.Page_ThemeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip.mojom.Page.ThemeChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
tab_strip.mojom.PagePtr = tab_strip.mojom.PageRemote;
tab_strip.mojom.PageRequest = tab_strip.mojom.PagePendingReceiver;

