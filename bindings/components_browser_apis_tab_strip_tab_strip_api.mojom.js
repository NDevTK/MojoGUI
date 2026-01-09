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
