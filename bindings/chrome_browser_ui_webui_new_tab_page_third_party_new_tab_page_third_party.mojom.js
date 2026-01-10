// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page_third_party/new_tab_page_third_party.mojom
// Module: new_tab_page_third_party.mojom

'use strict';

// Module namespace
var new_tab_page_third_party = new_tab_page_third_party || {};
new_tab_page_third_party.mojom = new_tab_page_third_party.mojom || {};
var skia = skia || {};
var ui = ui || {};


// Struct: Theme
new_tab_page_third_party.mojom.mojom.ThemeSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page_third_party.mojom.Theme',
      packedSize: 64,
      fields: [
        { name: 'text_color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
        { name: 'is_dark', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'color_background', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'background_tiling', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'background_position', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'has_custom_background', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'most_visited', packedOffset: 40, packedBitOffset: 0, type: most_visited.mojom.MostVisitedThemeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Interface: PageHandlerFactory
new_tab_page_third_party.mojom.mojom.PageHandlerFactory = {};

new_tab_page_third_party.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_page_third_party.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'new_tab_page_third_party.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_page_third_party.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new new_tab_page_third_party.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_page_third_party.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_page_third_party.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

new_tab_page_third_party.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new new_tab_page_third_party.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page_third_party.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
new_tab_page_third_party.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page_third_party.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
new_tab_page_third_party.mojom.mojom.PageHandlerFactoryPtr = new_tab_page_third_party.mojom.mojom.PageHandlerFactoryRemote;
new_tab_page_third_party.mojom.mojom.PageHandlerFactoryRequest = new_tab_page_third_party.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
new_tab_page_third_party.mojom.mojom.PageHandler = {};

new_tab_page_third_party.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_page_third_party.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'new_tab_page_third_party.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_page_third_party.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new new_tab_page_third_party.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_page_third_party.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateTheme() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_page_third_party.mojom.mojom.PageHandler_UpdateTheme_ParamsSpec,
      null,
      []);
  }

};

new_tab_page_third_party.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new new_tab_page_third_party.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page_third_party.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateTheme
new_tab_page_third_party.mojom.mojom.PageHandler_UpdateTheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page_third_party.mojom.PageHandler.UpdateTheme_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
new_tab_page_third_party.mojom.mojom.PageHandlerPtr = new_tab_page_third_party.mojom.mojom.PageHandlerRemote;
new_tab_page_third_party.mojom.mojom.PageHandlerRequest = new_tab_page_third_party.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
new_tab_page_third_party.mojom.mojom.Page = {};

new_tab_page_third_party.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_page_third_party.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'new_tab_page_third_party.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_page_third_party.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new new_tab_page_third_party.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_page_third_party.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setTheme(theme) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_page_third_party.mojom.mojom.Page_SetTheme_ParamsSpec,
      null,
      [theme]);
  }

};

new_tab_page_third_party.mojom.mojom.Page.getRemote = function() {
  let remote = new new_tab_page_third_party.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page_third_party.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for SetTheme
new_tab_page_third_party.mojom.mojom.Page_SetTheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page_third_party.mojom.Page.SetTheme_Params',
      packedSize: 16,
      fields: [
        { name: 'theme', packedOffset: 0, packedBitOffset: 0, type: new_tab_page_third_party.mojom.ThemeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
new_tab_page_third_party.mojom.mojom.PagePtr = new_tab_page_third_party.mojom.mojom.PageRemote;
new_tab_page_third_party.mojom.mojom.PageRequest = new_tab_page_third_party.mojom.mojom.PagePendingReceiver;

