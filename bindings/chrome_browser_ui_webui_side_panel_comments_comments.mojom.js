// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/comments/comments.mojom
// Module: comments.mojom

'use strict';

// Module namespace
var comments = comments || {};
comments.mojom = comments.mojom || {};


// Interface: PageHandlerFactory
comments.mojom.PageHandlerFactory = {};

comments.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'comments.mojom.PageHandlerFactory_CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(comments.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(comments.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

comments.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

comments.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'comments.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      comments.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new comments.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

comments.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      comments.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

comments.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new comments.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'comments.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
comments.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'comments.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(comments.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(comments.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
comments.mojom.PageHandlerFactoryPtr = comments.mojom.PageHandlerFactoryRemote;
comments.mojom.PageHandlerFactoryRequest = comments.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
comments.mojom.PageHandler = {};

comments.mojom.PageHandler_ShowUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'comments.mojom.PageHandler_ShowUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

comments.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

comments.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'comments.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      comments.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new comments.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

comments.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showUI() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      comments.mojom.PageHandler_ShowUI_ParamsSpec,
      null,
      []);
  }

};

comments.mojom.PageHandler.getRemote = function() {
  let remote = new comments.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'comments.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for ShowUI
comments.mojom.PageHandler_ShowUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'comments.mojom.PageHandler.ShowUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
comments.mojom.PageHandlerPtr = comments.mojom.PageHandlerRemote;
comments.mojom.PageHandlerRequest = comments.mojom.PageHandlerPendingReceiver;


// Interface: Page
comments.mojom.Page = {};

comments.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

comments.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'comments.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      comments.mojom.PagePendingReceiver,
      handle);
    this.$ = new comments.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

comments.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

comments.mojom.Page.getRemote = function() {
  let remote = new comments.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'comments.mojom.Page',
    'context');
  return remote.$;
};

// Legacy compatibility
comments.mojom.PagePtr = comments.mojom.PageRemote;
comments.mojom.PageRequest = comments.mojom.PagePendingReceiver;

