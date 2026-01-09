// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/examples/browser/ui/web/browser.mojom
// Module: webui_examples.mojom

'use strict';

// Module namespace
var webui_examples = webui_examples || {};
webui_examples.mojom = webui_examples.mojom || {};


// Interface: PageHandlerFactory
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
      webui_examples.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$,
      null,
      [handler]);
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

// ParamsSpec for CreatePageHandler
webui_examples.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_examples.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
webui_examples.mojom.PageHandlerFactoryPtr = webui_examples.mojom.PageHandlerFactoryRemote;
webui_examples.mojom.PageHandlerFactoryRequest = webui_examples.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
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
      webui_examples.mojom.PageHandler_Navigate_ParamsSpec.$,
      null,
      [guest_contents_id, src]);
  }

  goBack(guest_contents_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      webui_examples.mojom.PageHandler_GoBack_ParamsSpec.$,
      null,
      [guest_contents_id]);
  }

  goForward(guest_contents_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      webui_examples.mojom.PageHandler_GoForward_ParamsSpec.$,
      null,
      [guest_contents_id]);
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

// ParamsSpec for Navigate
webui_examples.mojom.PageHandler_Navigate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_examples.mojom.PageHandler.Navigate_Params',
      packedSize: 24,
      fields: [
        { name: 'guest_contents_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'src', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GoBack
webui_examples.mojom.PageHandler_GoBack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_examples.mojom.PageHandler.GoBack_Params',
      packedSize: 16,
      fields: [
        { name: 'guest_contents_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GoForward
webui_examples.mojom.PageHandler_GoForward_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webui_examples.mojom.PageHandler.GoForward_Params',
      packedSize: 16,
      fields: [
        { name: 'guest_contents_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
webui_examples.mojom.PageHandlerPtr = webui_examples.mojom.PageHandlerRemote;
webui_examples.mojom.PageHandlerRequest = webui_examples.mojom.PageHandlerPendingReceiver;

