// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui_browser/browser.mojom
// Module: webui_browser.mojom

// Module namespace
var webui_browser = webui_browser || {};
webui_browser.mojom = webui_browser.mojom || {};
var tabs_api = tabs_api || {};
var mojo_base = mojo_base || {};
var url = url || {};

webui_browser.mojom.FullscreenContextSpec = { $: mojo.internal.Enum() };
webui_browser.mojom.SecurityIconSpec = { $: mojo.internal.Enum() };
webui_browser.mojom.PageHandlerFactory = {};
webui_browser.mojom.PageHandlerFactory.$interfaceName = 'webui_browser.mojom.PageHandlerFactory';
webui_browser.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
webui_browser.mojom.PageHandlerFactory_GetTabStripInset_ParamsSpec = { $: {} };
webui_browser.mojom.PageHandlerFactory_GetTabStripInset_ResponseParamsSpec = { $: {} };
webui_browser.mojom.Page = {};
webui_browser.mojom.Page.$interfaceName = 'webui_browser.mojom.Page';
webui_browser.mojom.Page_SetFocusToLocationBar_ParamsSpec = { $: {} };
webui_browser.mojom.Page_SetReloadStopState_ParamsSpec = { $: {} };
webui_browser.mojom.Page_ShowSidePanel_ParamsSpec = { $: {} };
webui_browser.mojom.Page_CloseSidePanel_ParamsSpec = { $: {} };
webui_browser.mojom.Page_OnFullscreenModeChanged_ParamsSpec = { $: {} };
webui_browser.mojom.PageHandler = {};
webui_browser.mojom.PageHandler.$interfaceName = 'webui_browser.mojom.PageHandler';
webui_browser.mojom.PageHandler_GetGuestIdForTabId_ParamsSpec = { $: {} };
webui_browser.mojom.PageHandler_GetGuestIdForTabId_ResponseParamsSpec = { $: {} };
webui_browser.mojom.PageHandler_LoadTabSearch_ParamsSpec = { $: {} };
webui_browser.mojom.PageHandler_LoadTabSearch_ResponseParamsSpec = { $: {} };
webui_browser.mojom.PageHandler_ShowTabSearchBubble_ParamsSpec = { $: {} };
webui_browser.mojom.PageHandler_OpenAppMenu_ParamsSpec = { $: {} };
webui_browser.mojom.PageHandler_OpenProfileMenu_ParamsSpec = { $: {} };
webui_browser.mojom.PageHandler_LaunchDevToolsForBrowser_ParamsSpec = { $: {} };
webui_browser.mojom.PageHandler_OnSidePanelClosed_ParamsSpec = { $: {} };
webui_browser.mojom.PageHandler_Minimize_ParamsSpec = { $: {} };
webui_browser.mojom.PageHandler_Maximize_ParamsSpec = { $: {} };
webui_browser.mojom.PageHandler_Restore_ParamsSpec = { $: {} };
webui_browser.mojom.PageHandler_Close_ParamsSpec = { $: {} };
webui_browser.mojom.GuestHandler = {};
webui_browser.mojom.GuestHandler.$interfaceName = 'webui_browser.mojom.GuestHandler';
webui_browser.mojom.GuestHandler_Navigate_ParamsSpec = { $: {} };
webui_browser.mojom.GuestHandler_CanGoBack_ParamsSpec = { $: {} };
webui_browser.mojom.GuestHandler_CanGoBack_ResponseParamsSpec = { $: {} };
webui_browser.mojom.GuestHandler_GoBack_ParamsSpec = { $: {} };
webui_browser.mojom.GuestHandler_CanGoForward_ParamsSpec = { $: {} };
webui_browser.mojom.GuestHandler_CanGoForward_ResponseParamsSpec = { $: {} };
webui_browser.mojom.GuestHandler_GoForward_ParamsSpec = { $: {} };
webui_browser.mojom.GuestHandler_Reload_ParamsSpec = { $: {} };
webui_browser.mojom.GuestHandler_StopLoading_ParamsSpec = { $: {} };
webui_browser.mojom.GuestHandler_OpenPageInfoMenu_ParamsSpec = { $: {} };
webui_browser.mojom.GuestHandler_GetSecurityIcon_ParamsSpec = { $: {} };
webui_browser.mojom.GuestHandler_GetSecurityIcon_ResponseParamsSpec = { $: {} };

// Enum: FullscreenContext
webui_browser.mojom.FullscreenContext = {
  kBrowser: 0,
  kTab: 1,
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
mojo.internal.Struct(
    webui_browser.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'webui_browser.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(webui_browser.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(webui_browser.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    webui_browser.mojom.PageHandlerFactory_GetTabStripInset_ParamsSpec, 'webui_browser.mojom.PageHandlerFactory_GetTabStripInset_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webui_browser.mojom.PageHandlerFactory_GetTabStripInset_ResponseParamsSpec, 'webui_browser.mojom.PageHandlerFactory_GetTabStripInset_ResponseParams', [
      mojo.internal.StructField('width', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

webui_browser.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webui_browser.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'webui_browser.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webui_browser.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new webui_browser.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(page, handler) {
    return this.$.createPageHandler(page, handler);
  }
  getTabStripInset() {
    return this.$.getTabStripInset();
  }
};

webui_browser.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      webui_browser.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

  getTabStripInset() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      webui_browser.mojom.PageHandlerFactory_GetTabStripInset_ParamsSpec,
      webui_browser.mojom.PageHandlerFactory_GetTabStripInset_ResponseParamsSpec,
      [],
      false);
  }

};

webui_browser.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new webui_browser.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webui_browser.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

webui_browser.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.PageHandlerFactory_GetTabStripInset_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.PageHandlerFactory_GetTabStripInset_ParamsSpec.$.structSpec);
          const result = this.impl.getTabStripInset();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, webui_browser.mojom.PageHandlerFactory_GetTabStripInset_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

webui_browser.mojom.PageHandlerFactoryReceiver = webui_browser.mojom.PageHandlerFactoryReceiver;

webui_browser.mojom.PageHandlerFactoryPtr = webui_browser.mojom.PageHandlerFactoryRemote;
webui_browser.mojom.PageHandlerFactoryRequest = webui_browser.mojom.PageHandlerFactoryPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    webui_browser.mojom.Page_SetFocusToLocationBar_ParamsSpec, 'webui_browser.mojom.Page_SetFocusToLocationBar_Params', [
      mojo.internal.StructField('is_user_initiated', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webui_browser.mojom.Page_SetReloadStopState_ParamsSpec, 'webui_browser.mojom.Page_SetReloadStopState_Params', [
      mojo.internal.StructField('is_loading', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webui_browser.mojom.Page_ShowSidePanel_ParamsSpec, 'webui_browser.mojom.Page_ShowSidePanel_Params', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('guest_contents_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    webui_browser.mojom.Page_CloseSidePanel_ParamsSpec, 'webui_browser.mojom.Page_CloseSidePanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webui_browser.mojom.Page_OnFullscreenModeChanged_ParamsSpec, 'webui_browser.mojom.Page_OnFullscreenModeChanged_Params', [
      mojo.internal.StructField('context', 0, 0, webui_browser.mojom.FullscreenContextSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_fullscreen', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

webui_browser.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webui_browser.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'webui_browser.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webui_browser.mojom.PagePendingReceiver,
      handle);
    this.$ = new webui_browser.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setFocusToLocationBar(is_user_initiated) {
    return this.$.setFocusToLocationBar(is_user_initiated);
  }
  setReloadStopState(is_loading) {
    return this.$.setReloadStopState(is_loading);
  }
  showSidePanel(guest_contents_id, title) {
    return this.$.showSidePanel(guest_contents_id, title);
  }
  closeSidePanel() {
    return this.$.closeSidePanel();
  }
  onFullscreenModeChanged(is_fullscreen, context) {
    return this.$.onFullscreenModeChanged(is_fullscreen, context);
  }
};

webui_browser.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setFocusToLocationBar(is_user_initiated) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      webui_browser.mojom.Page_SetFocusToLocationBar_ParamsSpec,
      null,
      [is_user_initiated],
      false);
  }

  setReloadStopState(is_loading) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      webui_browser.mojom.Page_SetReloadStopState_ParamsSpec,
      null,
      [is_loading],
      false);
  }

  showSidePanel(guest_contents_id, title) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      webui_browser.mojom.Page_ShowSidePanel_ParamsSpec,
      null,
      [guest_contents_id, title],
      false);
  }

  closeSidePanel() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      webui_browser.mojom.Page_CloseSidePanel_ParamsSpec,
      null,
      [],
      false);
  }

  onFullscreenModeChanged(is_fullscreen, context) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      webui_browser.mojom.Page_OnFullscreenModeChanged_ParamsSpec,
      null,
      [is_fullscreen, context],
      false);
  }

};

webui_browser.mojom.Page.getRemote = function() {
  let remote = new webui_browser.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webui_browser.mojom.Page',
    'context');
  return remote.$;
};

webui_browser.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.Page_SetFocusToLocationBar_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.Page_SetReloadStopState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.Page_ShowSidePanel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.Page_CloseSidePanel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.Page_OnFullscreenModeChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.Page_SetFocusToLocationBar_ParamsSpec.$.structSpec);
          const result = this.impl.setFocusToLocationBar(params.is_user_initiated);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.Page_SetReloadStopState_ParamsSpec.$.structSpec);
          const result = this.impl.setReloadStopState(params.is_loading);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.Page_ShowSidePanel_ParamsSpec.$.structSpec);
          const result = this.impl.showSidePanel(params.guest_contents_id, params.title);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.Page_CloseSidePanel_ParamsSpec.$.structSpec);
          const result = this.impl.closeSidePanel();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.Page_OnFullscreenModeChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onFullscreenModeChanged(params.is_fullscreen, params.context);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

webui_browser.mojom.PageReceiver = webui_browser.mojom.PageReceiver;

webui_browser.mojom.PagePtr = webui_browser.mojom.PageRemote;
webui_browser.mojom.PageRequest = webui_browser.mojom.PagePendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    webui_browser.mojom.PageHandler_GetGuestIdForTabId_ParamsSpec, 'webui_browser.mojom.PageHandler_GetGuestIdForTabId_Params', [
      mojo.internal.StructField('tab_id', 0, 0, tabs_api.mojom.NodeIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(webui_browser.mojom.GuestHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    webui_browser.mojom.PageHandler_GetGuestIdForTabId_ResponseParamsSpec, 'webui_browser.mojom.PageHandler_GetGuestIdForTabId_ResponseParams', [
      mojo.internal.StructField('guest_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webui_browser.mojom.PageHandler_LoadTabSearch_ParamsSpec, 'webui_browser.mojom.PageHandler_LoadTabSearch_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webui_browser.mojom.PageHandler_LoadTabSearch_ResponseParamsSpec, 'webui_browser.mojom.PageHandler_LoadTabSearch_ResponseParams', [
      mojo.internal.StructField('guest_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webui_browser.mojom.PageHandler_ShowTabSearchBubble_ParamsSpec, 'webui_browser.mojom.PageHandler_ShowTabSearchBubble_Params', [
      mojo.internal.StructField('anchor_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webui_browser.mojom.PageHandler_OpenAppMenu_ParamsSpec, 'webui_browser.mojom.PageHandler_OpenAppMenu_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webui_browser.mojom.PageHandler_OpenProfileMenu_ParamsSpec, 'webui_browser.mojom.PageHandler_OpenProfileMenu_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webui_browser.mojom.PageHandler_LaunchDevToolsForBrowser_ParamsSpec, 'webui_browser.mojom.PageHandler_LaunchDevToolsForBrowser_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webui_browser.mojom.PageHandler_OnSidePanelClosed_ParamsSpec, 'webui_browser.mojom.PageHandler_OnSidePanelClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webui_browser.mojom.PageHandler_Minimize_ParamsSpec, 'webui_browser.mojom.PageHandler_Minimize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webui_browser.mojom.PageHandler_Maximize_ParamsSpec, 'webui_browser.mojom.PageHandler_Maximize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webui_browser.mojom.PageHandler_Restore_ParamsSpec, 'webui_browser.mojom.PageHandler_Restore_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webui_browser.mojom.PageHandler_Close_ParamsSpec, 'webui_browser.mojom.PageHandler_Close_Params', [
    ],
    [[0, 8]]);

webui_browser.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webui_browser.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'webui_browser.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webui_browser.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new webui_browser.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getGuestIdForTabId(tab_id, handler) {
    return this.$.getGuestIdForTabId(tab_id, handler);
  }
  loadTabSearch() {
    return this.$.loadTabSearch();
  }
  showTabSearchBubble(anchor_name) {
    return this.$.showTabSearchBubble(anchor_name);
  }
  openAppMenu() {
    return this.$.openAppMenu();
  }
  openProfileMenu() {
    return this.$.openProfileMenu();
  }
  launchDevToolsForBrowser() {
    return this.$.launchDevToolsForBrowser();
  }
  onSidePanelClosed() {
    return this.$.onSidePanelClosed();
  }
  minimize() {
    return this.$.minimize();
  }
  maximize() {
    return this.$.maximize();
  }
  restore() {
    return this.$.restore();
  }
  close() {
    return this.$.close();
  }
};

webui_browser.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getGuestIdForTabId(tab_id, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      webui_browser.mojom.PageHandler_GetGuestIdForTabId_ParamsSpec,
      webui_browser.mojom.PageHandler_GetGuestIdForTabId_ResponseParamsSpec,
      [tab_id, handler],
      false);
  }

  loadTabSearch() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      webui_browser.mojom.PageHandler_LoadTabSearch_ParamsSpec,
      webui_browser.mojom.PageHandler_LoadTabSearch_ResponseParamsSpec,
      [],
      false);
  }

  showTabSearchBubble(anchor_name) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      webui_browser.mojom.PageHandler_ShowTabSearchBubble_ParamsSpec,
      null,
      [anchor_name],
      false);
  }

  openAppMenu() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      webui_browser.mojom.PageHandler_OpenAppMenu_ParamsSpec,
      null,
      [],
      false);
  }

  openProfileMenu() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      webui_browser.mojom.PageHandler_OpenProfileMenu_ParamsSpec,
      null,
      [],
      false);
  }

  launchDevToolsForBrowser() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      webui_browser.mojom.PageHandler_LaunchDevToolsForBrowser_ParamsSpec,
      null,
      [],
      false);
  }

  onSidePanelClosed() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      webui_browser.mojom.PageHandler_OnSidePanelClosed_ParamsSpec,
      null,
      [],
      false);
  }

  minimize() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      webui_browser.mojom.PageHandler_Minimize_ParamsSpec,
      null,
      [],
      false);
  }

  maximize() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      webui_browser.mojom.PageHandler_Maximize_ParamsSpec,
      null,
      [],
      false);
  }

  restore() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      webui_browser.mojom.PageHandler_Restore_ParamsSpec,
      null,
      [],
      false);
  }

  close() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      webui_browser.mojom.PageHandler_Close_ParamsSpec,
      null,
      [],
      false);
  }

};

webui_browser.mojom.PageHandler.getRemote = function() {
  let remote = new webui_browser.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webui_browser.mojom.PageHandler',
    'context');
  return remote.$;
};

webui_browser.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.PageHandler_GetGuestIdForTabId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.PageHandler_LoadTabSearch_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.PageHandler_ShowTabSearchBubble_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.PageHandler_OpenAppMenu_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.PageHandler_OpenProfileMenu_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.PageHandler_LaunchDevToolsForBrowser_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.PageHandler_OnSidePanelClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.PageHandler_Minimize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.PageHandler_Maximize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.PageHandler_Restore_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.PageHandler_Close_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.PageHandler_GetGuestIdForTabId_ParamsSpec.$.structSpec);
          const result = this.impl.getGuestIdForTabId(params.tab_id, params.handler);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, webui_browser.mojom.PageHandler_GetGuestIdForTabId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.PageHandler_LoadTabSearch_ParamsSpec.$.structSpec);
          const result = this.impl.loadTabSearch();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, webui_browser.mojom.PageHandler_LoadTabSearch_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.PageHandler_ShowTabSearchBubble_ParamsSpec.$.structSpec);
          const result = this.impl.showTabSearchBubble(params.anchor_name);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.PageHandler_OpenAppMenu_ParamsSpec.$.structSpec);
          const result = this.impl.openAppMenu();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.PageHandler_OpenProfileMenu_ParamsSpec.$.structSpec);
          const result = this.impl.openProfileMenu();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.PageHandler_LaunchDevToolsForBrowser_ParamsSpec.$.structSpec);
          const result = this.impl.launchDevToolsForBrowser();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.PageHandler_OnSidePanelClosed_ParamsSpec.$.structSpec);
          const result = this.impl.onSidePanelClosed();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.PageHandler_Minimize_ParamsSpec.$.structSpec);
          const result = this.impl.minimize();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.PageHandler_Maximize_ParamsSpec.$.structSpec);
          const result = this.impl.maximize();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.PageHandler_Restore_ParamsSpec.$.structSpec);
          const result = this.impl.restore();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.PageHandler_Close_ParamsSpec.$.structSpec);
          const result = this.impl.close();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

webui_browser.mojom.PageHandlerReceiver = webui_browser.mojom.PageHandlerReceiver;

webui_browser.mojom.PageHandlerPtr = webui_browser.mojom.PageHandlerRemote;
webui_browser.mojom.PageHandlerRequest = webui_browser.mojom.PageHandlerPendingReceiver;


// Interface: GuestHandler
mojo.internal.Struct(
    webui_browser.mojom.GuestHandler_Navigate_ParamsSpec, 'webui_browser.mojom.GuestHandler_Navigate_Params', [
      mojo.internal.StructField('src', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webui_browser.mojom.GuestHandler_CanGoBack_ParamsSpec, 'webui_browser.mojom.GuestHandler_CanGoBack_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webui_browser.mojom.GuestHandler_CanGoBack_ResponseParamsSpec, 'webui_browser.mojom.GuestHandler_CanGoBack_ResponseParams', [
      mojo.internal.StructField('can_go_back', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webui_browser.mojom.GuestHandler_GoBack_ParamsSpec, 'webui_browser.mojom.GuestHandler_GoBack_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webui_browser.mojom.GuestHandler_CanGoForward_ParamsSpec, 'webui_browser.mojom.GuestHandler_CanGoForward_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webui_browser.mojom.GuestHandler_CanGoForward_ResponseParamsSpec, 'webui_browser.mojom.GuestHandler_CanGoForward_ResponseParams', [
      mojo.internal.StructField('can_go_forward', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webui_browser.mojom.GuestHandler_GoForward_ParamsSpec, 'webui_browser.mojom.GuestHandler_GoForward_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webui_browser.mojom.GuestHandler_Reload_ParamsSpec, 'webui_browser.mojom.GuestHandler_Reload_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webui_browser.mojom.GuestHandler_StopLoading_ParamsSpec, 'webui_browser.mojom.GuestHandler_StopLoading_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webui_browser.mojom.GuestHandler_OpenPageInfoMenu_ParamsSpec, 'webui_browser.mojom.GuestHandler_OpenPageInfoMenu_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webui_browser.mojom.GuestHandler_GetSecurityIcon_ParamsSpec, 'webui_browser.mojom.GuestHandler_GetSecurityIcon_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webui_browser.mojom.GuestHandler_GetSecurityIcon_ResponseParamsSpec, 'webui_browser.mojom.GuestHandler_GetSecurityIcon_ResponseParams', [
      mojo.internal.StructField('security_icon', 0, 0, webui_browser.mojom.SecurityIconSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

webui_browser.mojom.GuestHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webui_browser.mojom.GuestHandlerRemote = class {
  static get $interfaceName() {
    return 'webui_browser.mojom.GuestHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webui_browser.mojom.GuestHandlerPendingReceiver,
      handle);
    this.$ = new webui_browser.mojom.GuestHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  navigate(src) {
    return this.$.navigate(src);
  }
  canGoBack() {
    return this.$.canGoBack();
  }
  goBack() {
    return this.$.goBack();
  }
  canGoForward() {
    return this.$.canGoForward();
  }
  goForward() {
    return this.$.goForward();
  }
  reload() {
    return this.$.reload();
  }
  stopLoading() {
    return this.$.stopLoading();
  }
  openPageInfoMenu() {
    return this.$.openPageInfoMenu();
  }
  getSecurityIcon() {
    return this.$.getSecurityIcon();
  }
};

webui_browser.mojom.GuestHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GuestHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  navigate(src) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      webui_browser.mojom.GuestHandler_Navigate_ParamsSpec,
      null,
      [src],
      false);
  }

  canGoBack() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      webui_browser.mojom.GuestHandler_CanGoBack_ParamsSpec,
      webui_browser.mojom.GuestHandler_CanGoBack_ResponseParamsSpec,
      [],
      false);
  }

  goBack() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      webui_browser.mojom.GuestHandler_GoBack_ParamsSpec,
      null,
      [],
      false);
  }

  canGoForward() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      webui_browser.mojom.GuestHandler_CanGoForward_ParamsSpec,
      webui_browser.mojom.GuestHandler_CanGoForward_ResponseParamsSpec,
      [],
      false);
  }

  goForward() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      webui_browser.mojom.GuestHandler_GoForward_ParamsSpec,
      null,
      [],
      false);
  }

  reload() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      webui_browser.mojom.GuestHandler_Reload_ParamsSpec,
      null,
      [],
      false);
  }

  stopLoading() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      webui_browser.mojom.GuestHandler_StopLoading_ParamsSpec,
      null,
      [],
      false);
  }

  openPageInfoMenu() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      webui_browser.mojom.GuestHandler_OpenPageInfoMenu_ParamsSpec,
      null,
      [],
      false);
  }

  getSecurityIcon() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      webui_browser.mojom.GuestHandler_GetSecurityIcon_ParamsSpec,
      webui_browser.mojom.GuestHandler_GetSecurityIcon_ResponseParamsSpec,
      [],
      false);
  }

};

webui_browser.mojom.GuestHandler.getRemote = function() {
  let remote = new webui_browser.mojom.GuestHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webui_browser.mojom.GuestHandler',
    'context');
  return remote.$;
};

webui_browser.mojom.GuestHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GuestHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.GuestHandler_Navigate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.GuestHandler_CanGoBack_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.GuestHandler_GoBack_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.GuestHandler_CanGoForward_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.GuestHandler_GoForward_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.GuestHandler_Reload_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.GuestHandler_StopLoading_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.GuestHandler_OpenPageInfoMenu_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_browser.mojom.GuestHandler_GetSecurityIcon_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.GuestHandler_Navigate_ParamsSpec.$.structSpec);
          const result = this.impl.navigate(params.src);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.GuestHandler_CanGoBack_ParamsSpec.$.structSpec);
          const result = this.impl.canGoBack();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, webui_browser.mojom.GuestHandler_CanGoBack_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.GuestHandler_GoBack_ParamsSpec.$.structSpec);
          const result = this.impl.goBack();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.GuestHandler_CanGoForward_ParamsSpec.$.structSpec);
          const result = this.impl.canGoForward();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, webui_browser.mojom.GuestHandler_CanGoForward_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.GuestHandler_GoForward_ParamsSpec.$.structSpec);
          const result = this.impl.goForward();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.GuestHandler_Reload_ParamsSpec.$.structSpec);
          const result = this.impl.reload();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.GuestHandler_StopLoading_ParamsSpec.$.structSpec);
          const result = this.impl.stopLoading();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.GuestHandler_OpenPageInfoMenu_ParamsSpec.$.structSpec);
          const result = this.impl.openPageInfoMenu();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_browser.mojom.GuestHandler_GetSecurityIcon_ParamsSpec.$.structSpec);
          const result = this.impl.getSecurityIcon();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, webui_browser.mojom.GuestHandler_GetSecurityIcon_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

webui_browser.mojom.GuestHandlerReceiver = webui_browser.mojom.GuestHandlerReceiver;

webui_browser.mojom.GuestHandlerPtr = webui_browser.mojom.GuestHandlerRemote;
webui_browser.mojom.GuestHandlerRequest = webui_browser.mojom.GuestHandlerPendingReceiver;

