// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui_browser/extensions_bar.mojom
// Module: extensions_bar.mojom

'use strict';

// Module namespace
var extensions_bar = extensions_bar || {};
extensions_bar.mojom = extensions_bar.mojom || {};


// Interface: PageHandlerFactory
extensions_bar.mojom.PageHandlerFactory = {};

extensions_bar.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions_bar.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'extensions_bar.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions_bar.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new extensions_bar.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions_bar.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions_bar.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

extensions_bar.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new extensions_bar.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions_bar.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
extensions_bar.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions_bar.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
extensions_bar.mojom.PageHandlerFactoryPtr = extensions_bar.mojom.PageHandlerFactoryRemote;
extensions_bar.mojom.PageHandlerFactoryRequest = extensions_bar.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
extensions_bar.mojom.PageHandler = {};

extensions_bar.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions_bar.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'extensions_bar.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions_bar.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new extensions_bar.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions_bar.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  executeUserAction(id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions_bar.mojom.PageHandler_ExecuteUserAction_ParamsSpec,
      null,
      [id]);
  }

  showContextMenu(source, id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions_bar.mojom.PageHandler_ShowContextMenu_ParamsSpec,
      null,
      [source, id]);
  }

  toggleExtensionsMenuFromWebUI() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions_bar.mojom.PageHandler_ToggleExtensionsMenuFromWebUI_ParamsSpec,
      null,
      []);
  }

};

extensions_bar.mojom.PageHandler.getRemote = function() {
  let remote = new extensions_bar.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions_bar.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for ExecuteUserAction
extensions_bar.mojom.PageHandler_ExecuteUserAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions_bar.mojom.PageHandler.ExecuteUserAction_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowContextMenu
extensions_bar.mojom.PageHandler_ShowContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions_bar.mojom.PageHandler.ShowContextMenu_Params',
      packedSize: 24,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ToggleExtensionsMenuFromWebUI
extensions_bar.mojom.PageHandler_ToggleExtensionsMenuFromWebUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions_bar.mojom.PageHandler.ToggleExtensionsMenuFromWebUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
extensions_bar.mojom.PageHandlerPtr = extensions_bar.mojom.PageHandlerRemote;
extensions_bar.mojom.PageHandlerRequest = extensions_bar.mojom.PageHandlerPendingReceiver;


// Interface: Page
extensions_bar.mojom.Page = {};

extensions_bar.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions_bar.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'extensions_bar.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions_bar.mojom.PagePendingReceiver,
      handle);
    this.$ = new extensions_bar.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions_bar.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  actionsAddedOrUpdated(actions) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions_bar.mojom.Page_ActionsAddedOrUpdated_ParamsSpec,
      null,
      [actions]);
  }

  actionRemoved(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions_bar.mojom.Page_ActionRemoved_ParamsSpec,
      null,
      [id]);
  }

  actionPoppedOut() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions_bar.mojom.Page_ActionPoppedOut_ParamsSpec,
      null,
      []);
  }

};

extensions_bar.mojom.Page.getRemote = function() {
  let remote = new extensions_bar.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions_bar.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for ActionsAddedOrUpdated
extensions_bar.mojom.Page_ActionsAddedOrUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions_bar.mojom.Page.ActionsAddedOrUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'actions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ActionRemoved
extensions_bar.mojom.Page_ActionRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions_bar.mojom.Page.ActionRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ActionPoppedOut
extensions_bar.mojom.Page_ActionPoppedOut_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions_bar.mojom.Page.ActionPoppedOut_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
extensions_bar.mojom.PagePtr = extensions_bar.mojom.PageRemote;
extensions_bar.mojom.PageRequest = extensions_bar.mojom.PagePendingReceiver;

