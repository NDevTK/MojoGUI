// Auto-generated MojoJS binding
// Source: chromium_src/components/browser_apis/tab_strip/tab_strip_experiment_api.mojom
// Module: tabs_api.mojom

'use strict';

// Module namespace
var tabs_api = tabs_api || {};
tabs_api.mojom = tabs_api.mojom || {};


// Interface: TabStripExperimentService
tabs_api.mojom.TabStripExperimentServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tabs_api.mojom.TabStripExperimentService';
  }

  updateTabGroupVisual(id, visual_data) {
    // Method: UpdateTabGroupVisual
    // Call: UpdateTabGroupVisual(id, visual_data)
  }

  type(WebUI) {
    // Method: type
    // Call: type(WebUI)
  }

  showTabContextMenu(tab_id, location) {
    // Method: ShowTabContextMenu
    // Call: ShowTabContextMenu(tab_id, location)
  }

};

tabs_api.mojom.TabStripExperimentServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
