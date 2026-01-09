// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar.mojom
// Module: side_panel.customize_chrome.mojom

'use strict';

// Module namespace
var side_panel = side_panel || {};
side_panel.customize_chrome = side_panel.customize_chrome || {};
side_panel.customize_chrome.mojom = side_panel.customize_chrome.mojom || {};


// Enum: ActionId
side_panel.customize_chrome.mojom.ActionId = {
  kShowBookmarks: 0,
  kShowHistoryCluster: 1,
  kShowReadAnything: 2,
  kShowReadingList: 3,
  kShowLensOverlay: 4,
  kShowSearchCompanion: 5,
  kHome: 6,
  kForward: 7,
  kNewIncognitoWindow: 8,
  kShowPasswordManager: 9,
  kShowPaymentMethods: 10,
  kShowAddresses: 11,
  kShowDownloads: 12,
  kClearBrowsingData: 13,
  kPrint: 14,
  kShowTranslate: 15,
  kSendTabToSelf: 16,
  kQrCodeGenerator: 17,
  kRouteMedia: 18,
  kTaskManager: 19,
  kDevTools: 20,
  kShowChromeLabs: 21,
  kCopyLink: 22,
  kTabSearch: 23,
  kSplitTab: 24,
  kContextualTasks: 25,
};

// Enum: CategoryId
side_panel.customize_chrome.mojom.CategoryId = {
  kNavigation: 0,
  kYourChrome: 1,
  kTools: 2,
};

// Struct: Action
side_panel.customize_chrome.mojom.Action = class {
  constructor(values = {}) {
    this.category = values.category !== undefined ? values.category : false;
    this.icon_url = values.icon_url !== undefined ? values.icon_url : null;
  }
};

// Struct: Category
side_panel.customize_chrome.mojom.Category = class {
  constructor(values = {}) {
    this.display_name = values.display_name !== undefined ? values.display_name : "";
  }
};

// Interface: CustomizeToolbarHandlerFactory
side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory';
  }

  createCustomizeToolbarHandler(client, handler) {
    // Method: CreateCustomizeToolbarHandler
    // Call: CreateCustomizeToolbarHandler(client, handler)
  }

};

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CustomizeToolbarHandler
side_panel.customize_chrome.mojom.CustomizeToolbarHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler';
  }

  listActions() {
    // Method: ListActions
    return new Promise((resolve) => {
      // Call: ListActions()
      resolve({});
    });
  }

  listCategories() {
    // Method: ListCategories
    return new Promise((resolve) => {
      // Call: ListCategories()
      resolve({});
    });
  }

  pinAction(action_id, pinned) {
    // Method: PinAction
    // Call: PinAction(action_id, pinned)
  }

  getIsCustomized() {
    // Method: GetIsCustomized
    return new Promise((resolve) => {
      // Call: GetIsCustomized()
      resolve({});
    });
  }

  resetToDefault() {
    // Method: ResetToDefault
    // Call: ResetToDefault()
  }

};

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CustomizeToolbarClient
side_panel.customize_chrome.mojom.CustomizeToolbarClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'side_panel.customize_chrome.mojom.CustomizeToolbarClient';
  }

  setActionPinned(action_id, pinned) {
    // Method: SetActionPinned
    // Call: SetActionPinned(action_id, pinned)
  }

  notifyActionsUpdated() {
    // Method: NotifyActionsUpdated
    // Call: NotifyActionsUpdated()
  }

};

side_panel.customize_chrome.mojom.CustomizeToolbarClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
