// Auto-generated MojoJS binding
// Source: chromium_src/components/webui/chrome_urls/mojom/chrome_urls.mojom
// Module: chrome_urls.mojom

'use strict';

// Module namespace
var chrome_urls = chrome_urls || {};
chrome_urls.mojom = chrome_urls.mojom || {};
var url = url || {};


// Struct: WebuiUrlInfo
chrome_urls.mojom.mojom.WebuiUrlInfoSpec = {
  $: {
    structSpec: {
      name: 'chrome_urls.mojom.WebuiUrlInfo',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'internal', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ChromeUrlsData
chrome_urls.mojom.mojom.ChromeUrlsDataSpec = {
  $: {
    structSpec: {
      name: 'chrome_urls.mojom.ChromeUrlsData',
      packedSize: 32,
      fields: [
        { name: 'webui_urls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chrome_urls.mojom.WebuiUrlInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'command_urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
        { name: 'internal_debugging_uis_enabled', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: PageHandlerFactory
chrome_urls.mojom.mojom.PageHandlerFactory = {};

chrome_urls.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome_urls.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'chrome_urls.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome_urls.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new chrome_urls.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome_urls.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome_urls.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

chrome_urls.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new chrome_urls.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome_urls.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
chrome_urls.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome_urls.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chrome_urls.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chrome_urls.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chrome_urls.mojom.mojom.PageHandlerFactoryPtr = chrome_urls.mojom.mojom.PageHandlerFactoryRemote;
chrome_urls.mojom.mojom.PageHandlerFactoryRequest = chrome_urls.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
chrome_urls.mojom.mojom.PageHandler = {};

chrome_urls.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome_urls.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'chrome_urls.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome_urls.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new chrome_urls.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome_urls.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getUrls() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome_urls.mojom.mojom.PageHandler_GetUrls_ParamsSpec,
      chrome_urls.mojom.mojom.PageHandler_GetUrls_ResponseParamsSpec,
      []);
  }

  setDebugPagesEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome_urls.mojom.mojom.PageHandler_SetDebugPagesEnabled_ParamsSpec,
      null,
      [enabled]);
  }

};

chrome_urls.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new chrome_urls.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome_urls.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetUrls
chrome_urls.mojom.mojom.PageHandler_GetUrls_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome_urls.mojom.PageHandler.GetUrls_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chrome_urls.mojom.mojom.PageHandler_GetUrls_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome_urls.mojom.PageHandler.GetUrls_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'urls_data', packedOffset: 0, packedBitOffset: 0, type: chrome_urls.mojom.ChromeUrlsDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDebugPagesEnabled
chrome_urls.mojom.mojom.PageHandler_SetDebugPagesEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome_urls.mojom.PageHandler.SetDebugPagesEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome_urls.mojom.mojom.PageHandlerPtr = chrome_urls.mojom.mojom.PageHandlerRemote;
chrome_urls.mojom.mojom.PageHandlerRequest = chrome_urls.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
chrome_urls.mojom.mojom.Page = {};

chrome_urls.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome_urls.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'chrome_urls.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome_urls.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new chrome_urls.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome_urls.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chrome_urls.mojom.mojom.Page.getRemote = function() {
  let remote = new chrome_urls.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome_urls.mojom.Page',
    'context');
  return remote.$;
};

// Legacy compatibility
chrome_urls.mojom.mojom.PagePtr = chrome_urls.mojom.mojom.PageRemote;
chrome_urls.mojom.mojom.PageRequest = chrome_urls.mojom.mojom.PagePendingReceiver;

