// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui_browser/browser.mojom
// Module: webui_browser.mojom

'use strict';

// Module namespace
var webui_browser = webui_browser || {};
webui_browser.mojom = webui_browser.mojom || {};


// Enum: FullscreenContext
webui_browser.mojom.FullscreenContext = {
};

// Enum: SecurityIcon
webui_browser.mojom.SecurityIcon = {
  HttpChromeRefresh: 0,
  SecurePageInfoChromeRefresh: 1,
  NoEncryption: 2,
  NotSecureWarningChromeRefresh: 3,
  BusinessChromeRefresh: 4,
  DangerousChromeRefresh: 5,
  ProductChromeRefresh: 6,
  ExtensionChromeRefresh: 7,
  OfflinePin: 8,
};

// Interface: PageHandlerFactory
webui_browser.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'webui_browser.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

  getTabStripInset() {
    // Method: GetTabStripInset
    return new Promise((resolve) => {
      // Call: GetTabStripInset()
      resolve({});
    });
  }

};

webui_browser.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
webui_browser.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'webui_browser.mojom.Page';
  }

  explicitly(Ctrl-L) {
    // Method: explicitly
    // Call: explicitly(Ctrl-L)
  }

  setFocusToLocationBar(is_user_initiated) {
    // Method: SetFocusToLocationBar
    // Call: SetFocusToLocationBar(is_user_initiated)
  }

  setReloadStopState(is_loading) {
    // Method: SetReloadStopState
    // Call: SetReloadStopState(is_loading)
  }

  showSidePanel(guest_contents_id, title) {
    // Method: ShowSidePanel
    // Call: ShowSidePanel(guest_contents_id, title)
  }

  closeSidePanel() {
    // Method: CloseSidePanel
    // Call: CloseSidePanel()
  }

  onFullscreenModeChanged(is_fullscreen, context) {
    // Method: OnFullscreenModeChanged
    // Call: OnFullscreenModeChanged(is_fullscreen, context)
  }

};

webui_browser.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
webui_browser.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'webui_browser.mojom.PageHandler';
  }

  getGuestIdForTabId(tab_id, handler) {
    // Method: GetGuestIdForTabId
    return new Promise((resolve) => {
      // Call: GetGuestIdForTabId(tab_id, handler)
      resolve({});
    });
  }

  loadTabSearch() {
    // Method: LoadTabSearch
    return new Promise((resolve) => {
      // Call: LoadTabSearch()
      resolve({});
    });
  }

  showTabSearchBubble(anchor_name) {
    // Method: ShowTabSearchBubble
    // Call: ShowTabSearchBubble(anchor_name)
  }

  openAppMenu() {
    // Method: OpenAppMenu
    // Call: OpenAppMenu()
  }

  openProfileMenu() {
    // Method: OpenProfileMenu
    // Call: OpenProfileMenu()
  }

  launchDevToolsForBrowser() {
    // Method: LaunchDevToolsForBrowser
    // Call: LaunchDevToolsForBrowser()
  }

  onSidePanelClosed() {
    // Method: OnSidePanelClosed
    // Call: OnSidePanelClosed()
  }

  minimize() {
    // Method: Minimize
    // Call: Minimize()
  }

  maximize() {
    // Method: Maximize
    // Call: Maximize()
  }

  restore() {
    // Method: Restore
    // Call: Restore()
  }

  close() {
    // Method: Close
    // Call: Close()
  }

};

webui_browser.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GuestHandler
webui_browser.mojom.GuestHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'webui_browser.mojom.GuestHandler';
  }

  navigate(src) {
    // Method: Navigate
    // Call: Navigate(src)
  }

  canGoBack() {
    // Method: CanGoBack
    return new Promise((resolve) => {
      // Call: CanGoBack()
      resolve({});
    });
  }

  goBack() {
    // Method: GoBack
    // Call: GoBack()
  }

  canGoForward() {
    // Method: CanGoForward
    return new Promise((resolve) => {
      // Call: CanGoForward()
      resolve({});
    });
  }

  goForward() {
    // Method: GoForward
    // Call: GoForward()
  }

  reload() {
    // Method: Reload
    // Call: Reload()
  }

  stopLoading() {
    // Method: StopLoading
    // Call: StopLoading()
  }

  openPageInfoMenu() {
    // Method: OpenPageInfoMenu
    // Call: OpenPageInfoMenu()
  }

  getSecurityIcon() {
    // Method: GetSecurityIcon
    return new Promise((resolve) => {
      // Call: GetSecurityIcon()
      resolve({});
    });
  }

};

webui_browser.mojom.GuestHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
