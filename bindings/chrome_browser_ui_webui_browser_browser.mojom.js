// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui_browser/browser.mojom
// Module: webui_browser.mojom

'use strict';

// Module namespace
var webui_browser = webui_browser || {};
webui_browser.mojom = webui_browser.mojom || {};
var url = url || {};


// Enum: FullscreenContext
webui_browser.mojom.mojom.FullscreenContext = {
  kBrowser: 0,
  kTab: 1,
};
webui_browser.mojom.mojom.FullscreenContextSpec = { $: mojo.internal.Enum() };

// Enum: SecurityIcon
webui_browser.mojom.mojom.SecurityIcon = {
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
webui_browser.mojom.mojom.SecurityIconSpec = { $: mojo.internal.Enum() };

// Interface: PageHandlerFactory
webui_browser.mojom.mojom.PageHandlerFactory = {};

webui_browser.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webui_browser.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'webui_browser.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webui_browser.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new webui_browser.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

webui_browser.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      webui_browser.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

  getTabStripInset() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      webui_browser.mojom.mojom.PageHandlerFactory_GetTabStripInset_ParamsSpec,
      webui_browser.mojom.mojom.PageHandlerFactory_GetTabStripInset_ResponseParamsSpec,
      []);
  }

};

webui_browser.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new webui_browser.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webui_browser.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
webui_browser.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetTabStripInset
webui_browser.mojom.mojom.PageHandlerFactory_GetTabStripInset_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.PageHandlerFactory.GetTabStripInset_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

webui_browser.mojom.mojom.PageHandlerFactory_GetTabStripInset_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.PageHandlerFactory.GetTabStripInset_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'width', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
webui_browser.mojom.mojom.PageHandlerFactoryPtr = webui_browser.mojom.mojom.PageHandlerFactoryRemote;
webui_browser.mojom.mojom.PageHandlerFactoryRequest = webui_browser.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: Page
webui_browser.mojom.mojom.Page = {};

webui_browser.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webui_browser.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'webui_browser.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webui_browser.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new webui_browser.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

webui_browser.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setFocusToLocationBar(is_user_initiated) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      webui_browser.mojom.mojom.Page_SetFocusToLocationBar_ParamsSpec,
      null,
      [is_user_initiated]);
  }

  setReloadStopState(is_loading) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      webui_browser.mojom.mojom.Page_SetReloadStopState_ParamsSpec,
      null,
      [is_loading]);
  }

  showSidePanel(guest_contents_id, title) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      webui_browser.mojom.mojom.Page_ShowSidePanel_ParamsSpec,
      null,
      [guest_contents_id, title]);
  }

  closeSidePanel() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      webui_browser.mojom.mojom.Page_CloseSidePanel_ParamsSpec,
      null,
      []);
  }

  onFullscreenModeChanged(is_fullscreen, context) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      webui_browser.mojom.mojom.Page_OnFullscreenModeChanged_ParamsSpec,
      null,
      [is_fullscreen, context]);
  }

};

webui_browser.mojom.mojom.Page.getRemote = function() {
  let remote = new webui_browser.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webui_browser.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for SetFocusToLocationBar
webui_browser.mojom.mojom.Page_SetFocusToLocationBar_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.Page.SetFocusToLocationBar_Params',
      packedSize: 16,
      fields: [
        { name: 'is_user_initiated', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetReloadStopState
webui_browser.mojom.mojom.Page_SetReloadStopState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.Page.SetReloadStopState_Params',
      packedSize: 16,
      fields: [
        { name: 'is_loading', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowSidePanel
webui_browser.mojom.mojom.Page_ShowSidePanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.Page.ShowSidePanel_Params',
      packedSize: 24,
      fields: [
        { name: 'guest_contents_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CloseSidePanel
webui_browser.mojom.mojom.Page_CloseSidePanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.Page.CloseSidePanel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnFullscreenModeChanged
webui_browser.mojom.mojom.Page_OnFullscreenModeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.Page.OnFullscreenModeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_fullscreen', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'context', packedOffset: 0, packedBitOffset: 0, type: webui_browser.mojom.FullscreenContextSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
webui_browser.mojom.mojom.PagePtr = webui_browser.mojom.mojom.PageRemote;
webui_browser.mojom.mojom.PageRequest = webui_browser.mojom.mojom.PagePendingReceiver;


// Interface: PageHandler
webui_browser.mojom.mojom.PageHandler = {};

webui_browser.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webui_browser.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'webui_browser.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webui_browser.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new webui_browser.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

webui_browser.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getGuestIdForTabId(tab_id, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      webui_browser.mojom.mojom.PageHandler_GetGuestIdForTabId_ParamsSpec,
      webui_browser.mojom.mojom.PageHandler_GetGuestIdForTabId_ResponseParamsSpec,
      [tab_id, handler]);
  }

  loadTabSearch() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      webui_browser.mojom.mojom.PageHandler_LoadTabSearch_ParamsSpec,
      webui_browser.mojom.mojom.PageHandler_LoadTabSearch_ResponseParamsSpec,
      []);
  }

  showTabSearchBubble(anchor_name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      webui_browser.mojom.mojom.PageHandler_ShowTabSearchBubble_ParamsSpec,
      null,
      [anchor_name]);
  }

  openAppMenu() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      webui_browser.mojom.mojom.PageHandler_OpenAppMenu_ParamsSpec,
      null,
      []);
  }

  openProfileMenu() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      webui_browser.mojom.mojom.PageHandler_OpenProfileMenu_ParamsSpec,
      null,
      []);
  }

  launchDevToolsForBrowser() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      webui_browser.mojom.mojom.PageHandler_LaunchDevToolsForBrowser_ParamsSpec,
      null,
      []);
  }

  onSidePanelClosed() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      webui_browser.mojom.mojom.PageHandler_OnSidePanelClosed_ParamsSpec,
      null,
      []);
  }

  minimize() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      webui_browser.mojom.mojom.PageHandler_Minimize_ParamsSpec,
      null,
      []);
  }

  maximize() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      webui_browser.mojom.mojom.PageHandler_Maximize_ParamsSpec,
      null,
      []);
  }

  restore() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      webui_browser.mojom.mojom.PageHandler_Restore_ParamsSpec,
      null,
      []);
  }

  close() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      webui_browser.mojom.mojom.PageHandler_Close_ParamsSpec,
      null,
      []);
  }

};

webui_browser.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new webui_browser.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webui_browser.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetGuestIdForTabId
webui_browser.mojom.mojom.PageHandler_GetGuestIdForTabId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.PageHandler.GetGuestIdForTabId_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

webui_browser.mojom.mojom.PageHandler_GetGuestIdForTabId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.PageHandler.GetGuestIdForTabId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'guest_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadTabSearch
webui_browser.mojom.mojom.PageHandler_LoadTabSearch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.PageHandler.LoadTabSearch_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

webui_browser.mojom.mojom.PageHandler_LoadTabSearch_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.PageHandler.LoadTabSearch_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'guest_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowTabSearchBubble
webui_browser.mojom.mojom.PageHandler_ShowTabSearchBubble_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.PageHandler.ShowTabSearchBubble_Params',
      packedSize: 16,
      fields: [
        { name: 'anchor_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenAppMenu
webui_browser.mojom.mojom.PageHandler_OpenAppMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.PageHandler.OpenAppMenu_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenProfileMenu
webui_browser.mojom.mojom.PageHandler_OpenProfileMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.PageHandler.OpenProfileMenu_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for LaunchDevToolsForBrowser
webui_browser.mojom.mojom.PageHandler_LaunchDevToolsForBrowser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.PageHandler.LaunchDevToolsForBrowser_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnSidePanelClosed
webui_browser.mojom.mojom.PageHandler_OnSidePanelClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.PageHandler.OnSidePanelClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Minimize
webui_browser.mojom.mojom.PageHandler_Minimize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.PageHandler.Minimize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Maximize
webui_browser.mojom.mojom.PageHandler_Maximize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.PageHandler.Maximize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Restore
webui_browser.mojom.mojom.PageHandler_Restore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.PageHandler.Restore_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Close
webui_browser.mojom.mojom.PageHandler_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.PageHandler.Close_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
webui_browser.mojom.mojom.PageHandlerPtr = webui_browser.mojom.mojom.PageHandlerRemote;
webui_browser.mojom.mojom.PageHandlerRequest = webui_browser.mojom.mojom.PageHandlerPendingReceiver;


// Interface: GuestHandler
webui_browser.mojom.mojom.GuestHandler = {};

webui_browser.mojom.mojom.GuestHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webui_browser.mojom.mojom.GuestHandlerRemote = class {
  static get $interfaceName() {
    return 'webui_browser.mojom.GuestHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webui_browser.mojom.mojom.GuestHandlerPendingReceiver,
      handle);
    this.$ = new webui_browser.mojom.mojom.GuestHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

webui_browser.mojom.mojom.GuestHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  navigate(src) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      webui_browser.mojom.mojom.GuestHandler_Navigate_ParamsSpec,
      null,
      [src]);
  }

  canGoBack() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      webui_browser.mojom.mojom.GuestHandler_CanGoBack_ParamsSpec,
      webui_browser.mojom.mojom.GuestHandler_CanGoBack_ResponseParamsSpec,
      []);
  }

  goBack() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      webui_browser.mojom.mojom.GuestHandler_GoBack_ParamsSpec,
      null,
      []);
  }

  canGoForward() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      webui_browser.mojom.mojom.GuestHandler_CanGoForward_ParamsSpec,
      webui_browser.mojom.mojom.GuestHandler_CanGoForward_ResponseParamsSpec,
      []);
  }

  goForward() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      webui_browser.mojom.mojom.GuestHandler_GoForward_ParamsSpec,
      null,
      []);
  }

  reload() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      webui_browser.mojom.mojom.GuestHandler_Reload_ParamsSpec,
      null,
      []);
  }

  stopLoading() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      webui_browser.mojom.mojom.GuestHandler_StopLoading_ParamsSpec,
      null,
      []);
  }

  openPageInfoMenu() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      webui_browser.mojom.mojom.GuestHandler_OpenPageInfoMenu_ParamsSpec,
      null,
      []);
  }

  getSecurityIcon() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      webui_browser.mojom.mojom.GuestHandler_GetSecurityIcon_ParamsSpec,
      webui_browser.mojom.mojom.GuestHandler_GetSecurityIcon_ResponseParamsSpec,
      []);
  }

};

webui_browser.mojom.mojom.GuestHandler.getRemote = function() {
  let remote = new webui_browser.mojom.mojom.GuestHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webui_browser.mojom.GuestHandler',
    'context');
  return remote.$;
};

// ParamsSpec for Navigate
webui_browser.mojom.mojom.GuestHandler_Navigate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.GuestHandler.Navigate_Params',
      packedSize: 16,
      fields: [
        { name: 'src', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CanGoBack
webui_browser.mojom.mojom.GuestHandler_CanGoBack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.GuestHandler.CanGoBack_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

webui_browser.mojom.mojom.GuestHandler_CanGoBack_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.GuestHandler.CanGoBack_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'can_go_back', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GoBack
webui_browser.mojom.mojom.GuestHandler_GoBack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.GuestHandler.GoBack_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CanGoForward
webui_browser.mojom.mojom.GuestHandler_CanGoForward_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.GuestHandler.CanGoForward_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

webui_browser.mojom.mojom.GuestHandler_CanGoForward_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.GuestHandler.CanGoForward_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'can_go_forward', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GoForward
webui_browser.mojom.mojom.GuestHandler_GoForward_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.GuestHandler.GoForward_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Reload
webui_browser.mojom.mojom.GuestHandler_Reload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.GuestHandler.Reload_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for StopLoading
webui_browser.mojom.mojom.GuestHandler_StopLoading_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.GuestHandler.StopLoading_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenPageInfoMenu
webui_browser.mojom.mojom.GuestHandler_OpenPageInfoMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.GuestHandler.OpenPageInfoMenu_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetSecurityIcon
webui_browser.mojom.mojom.GuestHandler_GetSecurityIcon_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.GuestHandler.GetSecurityIcon_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

webui_browser.mojom.mojom.GuestHandler_GetSecurityIcon_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_browser.mojom.GuestHandler.GetSecurityIcon_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'security_icon', packedOffset: 0, packedBitOffset: 0, type: webui_browser.mojom.SecurityIconSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
webui_browser.mojom.mojom.GuestHandlerPtr = webui_browser.mojom.mojom.GuestHandlerRemote;
webui_browser.mojom.mojom.GuestHandlerRequest = webui_browser.mojom.mojom.GuestHandlerPendingReceiver;

