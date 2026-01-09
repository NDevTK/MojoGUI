// Auto-generated MojoJS binding
// Source: chromium_src/components/webui/chrome_urls/mojom/chrome_urls.mojom
// Module: chrome_urls.mojom

'use strict';

// Module namespace
var chrome_urls = chrome_urls || {};
chrome_urls.mojom = chrome_urls.mojom || {};


// Struct: WebuiUrlInfo
chrome_urls.mojom.WebuiUrlInfoSpec = {
  $: {
    structSpec: {
      name: 'chrome_urls.mojom.WebuiUrlInfo',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'enabled', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'internal', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ChromeUrlsData
chrome_urls.mojom.ChromeUrlsDataSpec = {
  $: {
    structSpec: {
      name: 'chrome_urls.mojom.ChromeUrlsData',
      packedSize: 32,
      fields: [
        { name: 'webui_urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'command_urls', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'internal_debugging_uis_enabled', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageHandlerFactory
chrome_urls.mojom.PageHandlerFactory = {};

chrome_urls.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome_urls.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'chrome_urls.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome_urls.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new chrome_urls.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome_urls.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome_urls.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

chrome_urls.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new chrome_urls.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome_urls.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
chrome_urls.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome_urls.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome_urls.mojom.PageHandlerFactoryPtr = chrome_urls.mojom.PageHandlerFactoryRemote;
chrome_urls.mojom.PageHandlerFactoryRequest = chrome_urls.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
chrome_urls.mojom.PageHandler = {};

chrome_urls.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome_urls.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'chrome_urls.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome_urls.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new chrome_urls.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome_urls.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getUrls() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome_urls.mojom.PageHandler_GetUrls_ParamsSpec,
      chrome_urls.mojom.PageHandler_GetUrls_ResponseParamsSpec,
      []);
  }

  setDebugPagesEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome_urls.mojom.PageHandler_SetDebugPagesEnabled_ParamsSpec,
      null,
      [enabled]);
  }

};

chrome_urls.mojom.PageHandler.getRemote = function() {
  let remote = new chrome_urls.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome_urls.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetUrls
chrome_urls.mojom.PageHandler_GetUrls_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome_urls.mojom.PageHandler.GetUrls_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chrome_urls.mojom.PageHandler_GetUrls_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome_urls.mojom.PageHandler.GetUrls_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'urls_data', packedOffset: 8, packedBitOffset: 0, type: chrome_urls.mojom.ChromeUrlsDataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetDebugPagesEnabled
chrome_urls.mojom.PageHandler_SetDebugPagesEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome_urls.mojom.PageHandler.SetDebugPagesEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome_urls.mojom.PageHandlerPtr = chrome_urls.mojom.PageHandlerRemote;
chrome_urls.mojom.PageHandlerRequest = chrome_urls.mojom.PageHandlerPendingReceiver;


// Interface: Page
chrome_urls.mojom.Page = {};

chrome_urls.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome_urls.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'chrome_urls.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome_urls.mojom.PagePendingReceiver,
      handle);
    this.$ = new chrome_urls.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome_urls.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chrome_urls.mojom.Page.getRemote = function() {
  let remote = new chrome_urls.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome_urls.mojom.Page',
    'context');
  return remote.$;
};

// Legacy compatibility
chrome_urls.mojom.PagePtr = chrome_urls.mojom.PageRemote;
chrome_urls.mojom.PageRequest = chrome_urls.mojom.PagePendingReceiver;

