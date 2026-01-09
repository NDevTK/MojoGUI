// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/tab_strip/tab_strip.mojom
// Module: tab_strip.mojom

'use strict';

// Module namespace
var tab_strip = tab_strip || {};
tab_strip.mojom = tab_strip.mojom || {};


// Struct: Tab
tab_strip.mojom.Tab = class {
  constructor(values = {}) {
    this.url = values.url !== undefined ? values.url : 0;
  }
};

// Struct: TabGroupVisualData
tab_strip.mojom.TabGroupVisualData = class {
  constructor(values = {}) {
    this.title = values.title !== undefined ? values.title : "";
  }
};

// Interface: PageHandlerFactory
tab_strip.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tab_strip.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

tab_strip.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
tab_strip.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tab_strip.mojom.PageHandler';
  }

  getGroupVisualData() {
    // Method: GetGroupVisualData
    return new Promise((resolve) => {
      // Call: GetGroupVisualData()
      resolve({});
    });
  }

  getTabs() {
    // Method: GetTabs
    return new Promise((resolve) => {
      // Call: GetTabs()
      resolve({});
    });
  }

  closeTab(tab_id, tab_was_swiped) {
    // Method: CloseTab
    // Call: CloseTab(tab_id, tab_was_swiped)
  }

  groupTab(tab_id, group_id) {
    // Method: GroupTab
    // Call: GroupTab(tab_id, group_id)
  }

  moveGroup(group_id, to_index) {
    // Method: MoveGroup
    // Call: MoveGroup(group_id, to_index)
  }

  moveTab(tab_id, to_index) {
    // Method: MoveTab
    // Call: MoveTab(tab_id, to_index)
  }

  setThumbnailTracked(tab_id, thumbnail_tracked) {
    // Method: SetThumbnailTracked
    // Call: SetThumbnailTracked(tab_id, thumbnail_tracked)
  }

  ungroupTab(tab_id) {
    // Method: UngroupTab
    // Call: UngroupTab(tab_id)
  }

  getLayout() {
    // Method: GetLayout
    return new Promise((resolve) => {
      // Call: GetLayout()
      resolve({});
    });
  }

  showEditDialogForGroup(group_id, location_x, location_y, width, height) {
    // Method: ShowEditDialogForGroup
    // Call: ShowEditDialogForGroup(group_id, location_x, location_y, width, height)
  }

  showTabContextMenu(tab_id, location_x, location_y) {
    // Method: ShowTabContextMenu
    // Call: ShowTabContextMenu(tab_id, location_x, location_y)
  }

  showBackgroundContextMenu(location_x, location_y) {
    // Method: ShowBackgroundContextMenu
    // Call: ShowBackgroundContextMenu(location_x, location_y)
  }

  closeContainer() {
    // Method: CloseContainer
    // Call: CloseContainer()
  }

  reportTabActivationDuration(duration_ms) {
    // Method: ReportTabActivationDuration
    // Call: ReportTabActivationDuration(duration_ms)
  }

  reportTabDataReceivedDuration(tab_count, duration_ms) {
    // Method: ReportTabDataReceivedDuration
    // Call: ReportTabDataReceivedDuration(tab_count, duration_ms)
  }

  reportTabCreationDuration(tab_count, duration_ms) {
    // Method: ReportTabCreationDuration
    // Call: ReportTabCreationDuration(tab_count, duration_ms)
  }

  activateTab(tab_id) {
    // Method: ActivateTab
    // Call: ActivateTab(tab_id)
  }

};

tab_strip.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
tab_strip.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tab_strip.mojom.Page';
  }

  layoutChanged(layout) {
    // Method: LayoutChanged
    // Call: LayoutChanged(layout)
  }

  receivedKeyboardFocus() {
    // Method: ReceivedKeyboardFocus
    // Call: ReceivedKeyboardFocus()
  }

  contextMenuClosed() {
    // Method: ContextMenuClosed
    // Call: ContextMenuClosed()
  }

  longPress() {
    // Method: LongPress
    // Call: LongPress()
  }

  tabGroupVisualsChanged(group_id, tab_group) {
    // Method: TabGroupVisualsChanged
    // Call: TabGroupVisualsChanged(group_id, tab_group)
  }

  tabGroupMoved(group_id, index) {
    // Method: TabGroupMoved
    // Call: TabGroupMoved(group_id, index)
  }

  tabGroupClosed(group_id) {
    // Method: TabGroupClosed
    // Call: TabGroupClosed(group_id)
  }

  tabGroupStateChanged(tab_id, index, group_id) {
    // Method: TabGroupStateChanged
    // Call: TabGroupStateChanged(tab_id, index, group_id)
  }

  tabCloseCancelled(tab_id) {
    // Method: TabCloseCancelled
    // Call: TabCloseCancelled(tab_id)
  }

  tabCreated(tab) {
    // Method: TabCreated
    // Call: TabCreated(tab)
  }

  tabRemoved(tab_id) {
    // Method: TabRemoved
    // Call: TabRemoved(tab_id)
  }

  tabMoved(tab_id, to_index, in_pinned) {
    // Method: TabMoved
    // Call: TabMoved(tab_id, to_index, in_pinned)
  }

  tabReplaced(tab_id, new_tab_id) {
    // Method: TabReplaced
    // Call: TabReplaced(tab_id, new_tab_id)
  }

  tabActiveChanged(tab_id) {
    // Method: TabActiveChanged
    // Call: TabActiveChanged(tab_id)
  }

  tabUpdated(tab) {
    // Method: TabUpdated
    // Call: TabUpdated(tab)
  }

  tabThumbnailUpdated(tab_id, data_uri) {
    // Method: TabThumbnailUpdated
    // Call: TabThumbnailUpdated(tab_id, data_uri)
  }

  showContextMenu() {
    // Method: ShowContextMenu
    // Call: ShowContextMenu()
  }

  themeChanged() {
    // Method: ThemeChanged
    // Call: ThemeChanged()
  }

};

tab_strip.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
