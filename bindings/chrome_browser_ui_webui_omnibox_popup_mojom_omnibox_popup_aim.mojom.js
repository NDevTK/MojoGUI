// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/omnibox_popup/mojom/omnibox_popup_aim.mojom
// Module: omnibox_popup_aim.mojom

'use strict';

// Module namespace
var omnibox_popup_aim = omnibox_popup_aim || {};
omnibox_popup_aim.mojom = omnibox_popup_aim.mojom || {};
var url = url || {};


// Interface: PageHandlerFactory
omnibox_popup_aim.mojom.mojom.PageHandlerFactory = {};

omnibox_popup_aim.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

omnibox_popup_aim.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'omnibox_popup_aim.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      omnibox_popup_aim.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new omnibox_popup_aim.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

omnibox_popup_aim.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      omnibox_popup_aim.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

omnibox_popup_aim.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new omnibox_popup_aim.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'omnibox_popup_aim.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
omnibox_popup_aim.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'omnibox_popup_aim.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(omnibox_popup_aim.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(omnibox_popup_aim.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
omnibox_popup_aim.mojom.mojom.PageHandlerFactoryPtr = omnibox_popup_aim.mojom.mojom.PageHandlerFactoryRemote;
omnibox_popup_aim.mojom.mojom.PageHandlerFactoryRequest = omnibox_popup_aim.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
omnibox_popup_aim.mojom.mojom.PageHandler = {};

omnibox_popup_aim.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

omnibox_popup_aim.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'omnibox_popup_aim.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      omnibox_popup_aim.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new omnibox_popup_aim.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

omnibox_popup_aim.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestClose() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      omnibox_popup_aim.mojom.mojom.PageHandler_RequestClose_ParamsSpec,
      null,
      []);
  }

  navigateCurrentTab(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      omnibox_popup_aim.mojom.mojom.PageHandler_NavigateCurrentTab_ParamsSpec,
      null,
      [url]);
  }

};

omnibox_popup_aim.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new omnibox_popup_aim.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'omnibox_popup_aim.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for RequestClose
omnibox_popup_aim.mojom.mojom.PageHandler_RequestClose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'omnibox_popup_aim.mojom.PageHandler.RequestClose_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for NavigateCurrentTab
omnibox_popup_aim.mojom.mojom.PageHandler_NavigateCurrentTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'omnibox_popup_aim.mojom.PageHandler.NavigateCurrentTab_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
omnibox_popup_aim.mojom.mojom.PageHandlerPtr = omnibox_popup_aim.mojom.mojom.PageHandlerRemote;
omnibox_popup_aim.mojom.mojom.PageHandlerRequest = omnibox_popup_aim.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
omnibox_popup_aim.mojom.mojom.Page = {};

omnibox_popup_aim.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

omnibox_popup_aim.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'omnibox_popup_aim.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      omnibox_popup_aim.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new omnibox_popup_aim.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

omnibox_popup_aim.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPopupShown(context) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      omnibox_popup_aim.mojom.mojom.Page_OnPopupShown_ParamsSpec,
      null,
      [context]);
  }

  addContext(context) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      omnibox_popup_aim.mojom.mojom.Page_AddContext_ParamsSpec,
      null,
      [context]);
  }

  onPopupHidden() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      omnibox_popup_aim.mojom.mojom.Page_OnPopupHidden_ParamsSpec,
      omnibox_popup_aim.mojom.mojom.Page_OnPopupHidden_ResponseParamsSpec,
      []);
  }

  setPreserveContextOnClose(preserve_context_on_close) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      omnibox_popup_aim.mojom.mojom.Page_SetPreserveContextOnClose_ParamsSpec,
      null,
      [preserve_context_on_close]);
  }

};

omnibox_popup_aim.mojom.mojom.Page.getRemote = function() {
  let remote = new omnibox_popup_aim.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'omnibox_popup_aim.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnPopupShown
omnibox_popup_aim.mojom.mojom.Page_OnPopupShown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'omnibox_popup_aim.mojom.Page.OnPopupShown_Params',
      packedSize: 16,
      fields: [
        { name: 'context', packedOffset: 0, packedBitOffset: 0, type: searchbox.mojom.SearchContextSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddContext
omnibox_popup_aim.mojom.mojom.Page_AddContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'omnibox_popup_aim.mojom.Page.AddContext_Params',
      packedSize: 16,
      fields: [
        { name: 'context', packedOffset: 0, packedBitOffset: 0, type: searchbox.mojom.SearchContextSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPopupHidden
omnibox_popup_aim.mojom.mojom.Page_OnPopupHidden_ParamsSpec = {
  $: {
    structSpec: {
      name: 'omnibox_popup_aim.mojom.Page.OnPopupHidden_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

omnibox_popup_aim.mojom.mojom.Page_OnPopupHidden_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'omnibox_popup_aim.mojom.Page.OnPopupHidden_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPreserveContextOnClose
omnibox_popup_aim.mojom.mojom.Page_SetPreserveContextOnClose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'omnibox_popup_aim.mojom.Page.SetPreserveContextOnClose_Params',
      packedSize: 16,
      fields: [
        { name: 'preserve_context_on_close', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
omnibox_popup_aim.mojom.mojom.PagePtr = omnibox_popup_aim.mojom.mojom.PageRemote;
omnibox_popup_aim.mojom.mojom.PageRequest = omnibox_popup_aim.mojom.mojom.PagePendingReceiver;

