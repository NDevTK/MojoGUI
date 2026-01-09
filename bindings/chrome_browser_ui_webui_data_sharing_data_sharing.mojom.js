// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/data_sharing/data_sharing.mojom
// Module: data_sharing.mojom

'use strict';

// Module namespace
var data_sharing = data_sharing || {};
data_sharing.mojom = data_sharing.mojom || {};


// Enum: GroupAction
data_sharing.mojom.GroupAction = {
};

// Enum: GroupActionProgress
data_sharing.mojom.GroupActionProgress = {
};

// Struct: ReadGroupsParams
data_sharing.mojom.ReadGroupsParams = class {
  constructor(values = {}) {
    this.params = values.params !== undefined ? values.params : [];
  }
};

// Struct: ReadGroupParams
data_sharing.mojom.ReadGroupParams = class {
  constructor(values = {}) {
    this.group_id = values.group_id !== undefined ? values.group_id : "";
    this.reading = values.reading !== undefined ? values.reading : null;
    this.consistency_token = values.consistency_token !== undefined ? values.consistency_token : "";
  }
};

// Struct: ReadGroupsResult
data_sharing.mojom.ReadGroupsResult = class {
  constructor(values = {}) {
    this.status_code = values.status_code !== undefined ? values.status_code : 0;
  }
};

// Struct: ReadGroupWithTokenParam
data_sharing.mojom.ReadGroupWithTokenParam = class {
  constructor(values = {}) {
    this.access_token = values.access_token !== undefined ? values.access_token : "";
  }
};

// Struct: ReadGroupWithTokenResult
data_sharing.mojom.ReadGroupWithTokenResult = class {
  constructor(values = {}) {
    this.status_code = values.status_code !== undefined ? values.status_code : 0;
  }
};

// Struct: SharedTab
data_sharing.mojom.SharedTab = class {
  constructor(values = {}) {
    this.favicon_url = values.favicon_url !== undefined ? values.favicon_url : "";
  }
};

// Struct: GroupPreview
data_sharing.mojom.GroupPreview = class {
  constructor(values = {}) {
    this.status_code = values.status_code !== undefined ? values.status_code : "";
  }
};

// Interface: PageHandlerFactory
data_sharing.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'data_sharing.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

data_sharing.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
data_sharing.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'data_sharing.mojom.PageHandler';
  }

  showUI() {
    // Method: ShowUI
    // Call: ShowUI()
  }

  closeUI(status_code) {
    // Method: CloseUI
    // Call: CloseUI(status_code)
  }

  apiInitComplete() {
    // Method: ApiInitComplete
    // Call: ApiInitComplete()
  }

  makeTabGroupShared(tab_group_id, group_id, access_token) {
    // Method: MakeTabGroupShared
    return new Promise((resolve) => {
      // Call: MakeTabGroupShared(tab_group_id, group_id, access_token)
      resolve({});
    });
  }

  getShareLink(group_id, access_token) {
    // Method: GetShareLink
    return new Promise((resolve) => {
      // Call: GetShareLink(group_id, access_token)
      resolve({});
    });
  }

  getTabGroupPreview(group_id, access_token) {
    // Method: GetTabGroupPreview
    return new Promise((resolve) => {
      // Call: GetTabGroupPreview(group_id, access_token)
      resolve({});
    });
  }

  openTabGroup(group_id) {
    // Method: OpenTabGroup
    // Call: OpenTabGroup(group_id)
  }

  aboutToUnShareTabGroup(tab_group_id) {
    // Method: AboutToUnShareTabGroup
    // Call: AboutToUnShareTabGroup(tab_group_id)
  }

  onTabGroupUnShareComplete(tab_group_id) {
    // Method: OnTabGroupUnShareComplete
    // Call: OnTabGroupUnShareComplete(tab_group_id)
  }

  onGroupAction(action, progress) {
    // Method: OnGroupAction
    // Call: OnGroupAction(action, progress)
  }

};

data_sharing.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
data_sharing.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'data_sharing.mojom.Page';
  }

  onAccessTokenFetched(access_token) {
    // Method: OnAccessTokenFetched
    // Call: OnAccessTokenFetched(access_token)
  }

  readGroups(read_groups_params) {
    // Method: ReadGroups
    return new Promise((resolve) => {
      // Call: ReadGroups(read_groups_params)
      resolve({});
    });
  }

  readGroupWithToken(param) {
    // Method: ReadGroupWithToken
    return new Promise((resolve) => {
      // Call: ReadGroupWithToken(param)
      resolve({});
    });
  }

  deleteGroup(group_id) {
    // Method: DeleteGroup
    return new Promise((resolve) => {
      // Call: DeleteGroup(group_id)
      resolve({});
    });
  }

  leaveGroup(group_id) {
    // Method: LeaveGroup
    return new Promise((resolve) => {
      // Call: LeaveGroup(group_id)
      resolve({});
    });
  }

};

data_sharing.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
