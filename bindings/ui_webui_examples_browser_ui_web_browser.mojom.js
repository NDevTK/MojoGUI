// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/examples/browser/ui/web/browser.mojom
// Module: webui_examples.mojom

'use strict';

// Module namespace
var webui_examples = webui_examples || {};
webui_examples.mojom = webui_examples.mojom || {};
var url = url || {};

webui_examples.mojom.PageHandlerFactory = {};
webui_examples.mojom.PageHandlerFactory.$interfaceName = 'webui_examples.mojom.PageHandlerFactory';
webui_examples.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
webui_examples.mojom.PageHandler = {};
webui_examples.mojom.PageHandler.$interfaceName = 'webui_examples.mojom.PageHandler';
webui_examples.mojom.PageHandler_Navigate_ParamsSpec = { $: {} };
webui_examples.mojom.PageHandler_GoBack_ParamsSpec = { $: {} };
webui_examples.mojom.PageHandler_GoForward_ParamsSpec = { $: {} };

// Interface: PageHandlerFactory
mojo.internal.Struct(
    webui_examples.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'webui_examples.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(webui_examples.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

webui_examples.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webui_examples.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'webui_examples.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webui_examples.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new webui_examples.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

webui_examples.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      webui_examples.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler],
      false);
  }

};

webui_examples.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new webui_examples.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webui_examples.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

webui_examples.mojom.PageHandlerFactoryPtr = webui_examples.mojom.PageHandlerFactoryRemote;
webui_examples.mojom.PageHandlerFactoryRequest = webui_examples.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    webui_examples.mojom.PageHandler_Navigate_ParamsSpec, 'webui_examples.mojom.PageHandler_Navigate_Params', [
      mojo.internal.StructField('guest_contents_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('src', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    webui_examples.mojom.PageHandler_GoBack_ParamsSpec, 'webui_examples.mojom.PageHandler_GoBack_Params', [
      mojo.internal.StructField('guest_contents_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webui_examples.mojom.PageHandler_GoForward_ParamsSpec, 'webui_examples.mojom.PageHandler_GoForward_Params', [
      mojo.internal.StructField('guest_contents_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

webui_examples.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webui_examples.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'webui_examples.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webui_examples.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new webui_examples.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

webui_examples.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  navigate(guest_contents_id, src) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      webui_examples.mojom.PageHandler_Navigate_ParamsSpec,
      null,
      [guest_contents_id, src],
      false);
  }

  goBack(guest_contents_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      webui_examples.mojom.PageHandler_GoBack_ParamsSpec,
      null,
      [guest_contents_id],
      false);
  }

  goForward(guest_contents_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      webui_examples.mojom.PageHandler_GoForward_ParamsSpec,
      null,
      [guest_contents_id],
      false);
  }

};

webui_examples.mojom.PageHandler.getRemote = function() {
  let remote = new webui_examples.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webui_examples.mojom.PageHandler',
    'context');
  return remote.$;
};

webui_examples.mojom.PageHandlerPtr = webui_examples.mojom.PageHandlerRemote;
webui_examples.mojom.PageHandlerRequest = webui_examples.mojom.PageHandlerPendingReceiver;

