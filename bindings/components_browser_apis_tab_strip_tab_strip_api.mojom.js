// Auto-generated MojoJS binding
// Source: chromium_src/components/browser_apis/tab_strip/tab_strip_api.mojom
// Module: tabs_api.mojom

'use strict';

// Module namespace
var tabs_api = tabs_api || {};
tabs_api.mojom = tabs_api.mojom || {};


// Struct: TabsSnapshot
tabs_api.mojom.TabsSnapshot = class {
  constructor(values = {}) {
    this.stream = values.stream !== undefined ? values.stream : null;
  }
};

// Interface: TabStripService
tabs_api.mojom.TabStripServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tabs_api.mojom.TabStripService';
  }

  getTabs() {
    // Method: GetTabs
    // Call: GetTabs()
  }

  getTab(id) {
    // Method: GetTab
    // Call: GetTab(id)
  }

  createTabAt(pos, url) {
    // Method: CreateTabAt
    // Call: CreateTabAt(pos, url)
  }

  closeTabs(id) {
    // Method: CloseTabs
    // Call: CloseTabs(id)
  }

  activateTab(id) {
    // Method: ActivateTab
    // Call: ActivateTab(id)
  }

  setSelectedTabs(selection, tab_to_activate) {
    // Method: SetSelectedTabs
    // Call: SetSelectedTabs(selection, tab_to_activate)
  }

  moveNode(id, position) {
    // Method: MoveNode
    // Call: MoveNode(id, position)
  }

};

tabs_api.mojom.TabStripServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TabsObserver
tabs_api.mojom.TabsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tabs_api.mojom.TabsObserver';
  }

  onTabEvents(events) {
    // Method: OnTabEvents
    // Call: OnTabEvents(events)
  }

};

tabs_api.mojom.TabsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
