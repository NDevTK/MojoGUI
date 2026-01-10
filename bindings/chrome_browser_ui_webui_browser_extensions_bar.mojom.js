// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui_browser/extensions_bar.mojom
// Module: extensions_bar.mojom

'use strict';

// Module namespace
var extensions_bar = extensions_bar || {};
extensions_bar.mojom = extensions_bar.mojom || {};
var url = url || {};
var ui = ui || {};


// Struct: ExtensionActionInfo
extensions_bar.mojom.mojom.ExtensionActionInfoSpec = {
  $: {
    structSpec: {
      name: 'extensions_bar.mojom.ExtensionActionInfo',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'accessible_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'tooltip', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_visible', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'data_url_for_icon', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: PageHandlerFactory
extensions_bar.mojom.mojom.PageHandlerFactory = {};

extensions_bar.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions_bar.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'extensions_bar.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions_bar.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new extensions_bar.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions_bar.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions_bar.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

extensions_bar.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new extensions_bar.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions_bar.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
extensions_bar.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions_bar.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(extensions_bar.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(extensions_bar.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
extensions_bar.mojom.mojom.PageHandlerFactoryPtr = extensions_bar.mojom.mojom.PageHandlerFactoryRemote;
extensions_bar.mojom.mojom.PageHandlerFactoryRequest = extensions_bar.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
extensions_bar.mojom.mojom.PageHandler = {};

extensions_bar.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions_bar.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'extensions_bar.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions_bar.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new extensions_bar.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions_bar.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  executeUserAction(id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions_bar.mojom.mojom.PageHandler_ExecuteUserAction_ParamsSpec,
      null,
      [id]);
  }

  showContextMenu(source, id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions_bar.mojom.mojom.PageHandler_ShowContextMenu_ParamsSpec,
      null,
      [source, id]);
  }

  toggleExtensionsMenuFromWebUI() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions_bar.mojom.mojom.PageHandler_ToggleExtensionsMenuFromWebUI_ParamsSpec,
      null,
      []);
  }

};

extensions_bar.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new extensions_bar.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions_bar.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for ExecuteUserAction
extensions_bar.mojom.mojom.PageHandler_ExecuteUserAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions_bar.mojom.PageHandler.ExecuteUserAction_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowContextMenu
extensions_bar.mojom.mojom.PageHandler_ShowContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions_bar.mojom.PageHandler.ShowContextMenu_Params',
      packedSize: 24,
      fields: [
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.MenuSourceTypeSpec, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ToggleExtensionsMenuFromWebUI
extensions_bar.mojom.mojom.PageHandler_ToggleExtensionsMenuFromWebUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions_bar.mojom.PageHandler.ToggleExtensionsMenuFromWebUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
extensions_bar.mojom.mojom.PageHandlerPtr = extensions_bar.mojom.mojom.PageHandlerRemote;
extensions_bar.mojom.mojom.PageHandlerRequest = extensions_bar.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
extensions_bar.mojom.mojom.Page = {};

extensions_bar.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions_bar.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'extensions_bar.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions_bar.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new extensions_bar.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions_bar.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  actionsAddedOrUpdated(actions) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions_bar.mojom.mojom.Page_ActionsAddedOrUpdated_ParamsSpec,
      null,
      [actions]);
  }

  actionRemoved(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions_bar.mojom.mojom.Page_ActionRemoved_ParamsSpec,
      null,
      [id]);
  }

  actionPoppedOut() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions_bar.mojom.mojom.Page_ActionPoppedOut_ParamsSpec,
      null,
      []);
  }

};

extensions_bar.mojom.mojom.Page.getRemote = function() {
  let remote = new extensions_bar.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions_bar.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for ActionsAddedOrUpdated
extensions_bar.mojom.mojom.Page_ActionsAddedOrUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions_bar.mojom.Page.ActionsAddedOrUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'actions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(extensions_bar.mojom.ExtensionActionInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ActionRemoved
extensions_bar.mojom.mojom.Page_ActionRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions_bar.mojom.Page.ActionRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ActionPoppedOut
extensions_bar.mojom.mojom.Page_ActionPoppedOut_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions_bar.mojom.Page.ActionPoppedOut_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
extensions_bar.mojom.mojom.PagePtr = extensions_bar.mojom.mojom.PageRemote;
extensions_bar.mojom.mojom.PageRequest = extensions_bar.mojom.mojom.PagePendingReceiver;

