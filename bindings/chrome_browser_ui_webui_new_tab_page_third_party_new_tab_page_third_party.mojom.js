// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page_third_party/new_tab_page_third_party.mojom
// Module: new_tab_page_third_party.mojom

'use strict';

// Module namespace
var new_tab_page_third_party = new_tab_page_third_party || {};
new_tab_page_third_party.mojom = new_tab_page_third_party.mojom || {};


// Struct: Theme
new_tab_page_third_party.mojom.ThemeSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page_third_party.mojom.Theme',
      packedSize: 16,
      fields: [
        { name: 'most_visited', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageHandlerFactory
new_tab_page_third_party.mojom.PageHandlerFactory = {};

new_tab_page_third_party.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_page_third_party.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'new_tab_page_third_party.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_page_third_party.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new new_tab_page_third_party.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_page_third_party.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_page_third_party.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

new_tab_page_third_party.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new new_tab_page_third_party.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page_third_party.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
new_tab_page_third_party.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page_third_party.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
new_tab_page_third_party.mojom.PageHandlerFactoryPtr = new_tab_page_third_party.mojom.PageHandlerFactoryRemote;
new_tab_page_third_party.mojom.PageHandlerFactoryRequest = new_tab_page_third_party.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
new_tab_page_third_party.mojom.PageHandler = {};

new_tab_page_third_party.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_page_third_party.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'new_tab_page_third_party.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_page_third_party.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new new_tab_page_third_party.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_page_third_party.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateTheme() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_page_third_party.mojom.PageHandler_UpdateTheme_ParamsSpec,
      null,
      []);
  }

};

new_tab_page_third_party.mojom.PageHandler.getRemote = function() {
  let remote = new new_tab_page_third_party.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page_third_party.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateTheme
new_tab_page_third_party.mojom.PageHandler_UpdateTheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page_third_party.mojom.PageHandler.UpdateTheme_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
new_tab_page_third_party.mojom.PageHandlerPtr = new_tab_page_third_party.mojom.PageHandlerRemote;
new_tab_page_third_party.mojom.PageHandlerRequest = new_tab_page_third_party.mojom.PageHandlerPendingReceiver;


// Interface: Page
new_tab_page_third_party.mojom.Page = {};

new_tab_page_third_party.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_page_third_party.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'new_tab_page_third_party.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_page_third_party.mojom.PagePendingReceiver,
      handle);
    this.$ = new new_tab_page_third_party.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_page_third_party.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setTheme(theme) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_page_third_party.mojom.Page_SetTheme_ParamsSpec,
      null,
      [theme]);
  }

};

new_tab_page_third_party.mojom.Page.getRemote = function() {
  let remote = new new_tab_page_third_party.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page_third_party.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for SetTheme
new_tab_page_third_party.mojom.Page_SetTheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page_third_party.mojom.Page.SetTheme_Params',
      packedSize: 16,
      fields: [
        { name: 'theme', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
new_tab_page_third_party.mojom.PagePtr = new_tab_page_third_party.mojom.PageRemote;
new_tab_page_third_party.mojom.PageRequest = new_tab_page_third_party.mojom.PagePendingReceiver;

