// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/tab_groups/tab_groups.mojom
// Module: ntp.tab_groups.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.tab_groups = ntp.tab_groups || {};
ntp.tab_groups.mojom = ntp.tab_groups.mojom || {};


// Struct: TabGroup
ntp.tab_groups.mojom.TabGroup = class {
  constructor(values = {}) {
    this.is_shared_tab_group = values.is_shared_tab_group !== undefined ? values.is_shared_tab_group : 0;
  }
};

// Interface: PageHandler
ntp.tab_groups.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ntp.tab_groups.mojom.PageHandler';
  }

  createNewTabGroup() {
    // Method: CreateNewTabGroup
    // Call: CreateNewTabGroup()
  }

  getTabGroups() {
    // Method: GetTabGroups
    return new Promise((resolve) => {
      // Call: GetTabGroups()
      resolve({});
    });
  }

  openTabGroup(id) {
    // Method: OpenTabGroup
    // Call: OpenTabGroup(id)
  }

  dismissModule() {
    // Method: DismissModule
    // Call: DismissModule()
  }

  restoreModule() {
    // Method: RestoreModule
    // Call: RestoreModule()
  }

};

ntp.tab_groups.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
