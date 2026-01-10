// Auto-generated MojoJS binding
// Source: chromium_src/components/webui/chrome_urls/mojom/chrome_urls.mojom
// Module: chrome_urls.mojom

'use strict';

// Module namespace
var chrome_urls = chrome_urls || {};
chrome_urls.mojom = chrome_urls.mojom || {};
var url = url || {};

chrome_urls.mojom.WebuiUrlInfoSpec = { $: {} };
chrome_urls.mojom.ChromeUrlsDataSpec = { $: {} };
chrome_urls.mojom.PageHandlerFactory = {};
chrome_urls.mojom.PageHandlerFactory.$interfaceName = 'chrome_urls.mojom.PageHandlerFactory';
chrome_urls.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
chrome_urls.mojom.PageHandler = {};
chrome_urls.mojom.PageHandler.$interfaceName = 'chrome_urls.mojom.PageHandler';
chrome_urls.mojom.PageHandler_GetUrls_ParamsSpec = { $: {} };
chrome_urls.mojom.PageHandler_GetUrls_ResponseParamsSpec = { $: {} };
chrome_urls.mojom.PageHandler_SetDebugPagesEnabled_ParamsSpec = { $: {} };
chrome_urls.mojom.PageHandler_SetDebugPagesEnabled_ResponseParamsSpec = { $: {} };
chrome_urls.mojom.Page = {};
chrome_urls.mojom.Page.$interfaceName = 'chrome_urls.mojom.Page';

// Struct: WebuiUrlInfo
mojo.internal.Struct(
    chrome_urls.mojom.WebuiUrlInfoSpec, 'chrome_urls.mojom.WebuiUrlInfo', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('internal', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ChromeUrlsData
mojo.internal.Struct(
    chrome_urls.mojom.ChromeUrlsDataSpec, 'chrome_urls.mojom.ChromeUrlsData', [
      mojo.internal.StructField('webui_urls', 0, 0, mojo.internal.Array(chrome_urls.mojom.WebuiUrlInfoSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('command_urls', 8, 0, mojo.internal.Array(url.mojom.UrlSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('internal_debugging_uis_enabled', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    chrome_urls.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'chrome_urls.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(chrome_urls.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(chrome_urls.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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

chrome_urls.mojom.PageHandlerFactoryPtr = chrome_urls.mojom.PageHandlerFactoryRemote;
chrome_urls.mojom.PageHandlerFactoryRequest = chrome_urls.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    chrome_urls.mojom.PageHandler_GetUrls_ParamsSpec, 'chrome_urls.mojom.PageHandler_GetUrls_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chrome_urls.mojom.PageHandler_GetUrls_ResponseParamsSpec, 'chrome_urls.mojom.PageHandler_GetUrls_ResponseParams', [
      mojo.internal.StructField('urls_data', 0, 0, chrome_urls.mojom.ChromeUrlsDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome_urls.mojom.PageHandler_SetDebugPagesEnabled_ParamsSpec, 'chrome_urls.mojom.PageHandler_SetDebugPagesEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome_urls.mojom.PageHandler_SetDebugPagesEnabled_ResponseParamsSpec, 'chrome_urls.mojom.PageHandler_SetDebugPagesEnabled_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

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
      chrome_urls.mojom.PageHandler_SetDebugPagesEnabled_ResponseParamsSpec,
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

chrome_urls.mojom.PageHandlerPtr = chrome_urls.mojom.PageHandlerRemote;
chrome_urls.mojom.PageHandlerRequest = chrome_urls.mojom.PageHandlerPendingReceiver;


// Interface: Page
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

chrome_urls.mojom.PagePtr = chrome_urls.mojom.PageRemote;
chrome_urls.mojom.PageRequest = chrome_urls.mojom.PagePendingReceiver;

