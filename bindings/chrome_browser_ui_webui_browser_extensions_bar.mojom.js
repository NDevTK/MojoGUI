// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui_browser/extensions_bar.mojom
// Module: extensions_bar.mojom

'use strict';

// Module namespace
var extensions_bar = extensions_bar || {};
extensions_bar.mojom = extensions_bar.mojom || {};
var url = url || {};
var ui = ui || {};

extensions_bar.mojom.ExtensionActionInfoSpec = { $: {} };
extensions_bar.mojom.PageHandlerFactory = {};
extensions_bar.mojom.PageHandlerFactory.$interfaceName = 'extensions_bar.mojom.PageHandlerFactory';
extensions_bar.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
extensions_bar.mojom.PageHandler = {};
extensions_bar.mojom.PageHandler.$interfaceName = 'extensions_bar.mojom.PageHandler';
extensions_bar.mojom.PageHandler_ExecuteUserAction_ParamsSpec = { $: {} };
extensions_bar.mojom.PageHandler_ShowContextMenu_ParamsSpec = { $: {} };
extensions_bar.mojom.PageHandler_ToggleExtensionsMenuFromWebUI_ParamsSpec = { $: {} };
extensions_bar.mojom.Page = {};
extensions_bar.mojom.Page.$interfaceName = 'extensions_bar.mojom.Page';
extensions_bar.mojom.Page_ActionsAddedOrUpdated_ParamsSpec = { $: {} };
extensions_bar.mojom.Page_ActionRemoved_ParamsSpec = { $: {} };
extensions_bar.mojom.Page_ActionPoppedOut_ParamsSpec = { $: {} };
extensions_bar.mojom.Page_ActionPoppedOut_ResponseParamsSpec = { $: {} };

// Struct: ExtensionActionInfo
mojo.internal.Struct(
    extensions_bar.mojom.ExtensionActionInfoSpec, 'extensions_bar.mojom.ExtensionActionInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('accessible_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tooltip', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_visible', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('data_url_for_icon', 24, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    extensions_bar.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'extensions_bar.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(extensions_bar.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(extensions_bar.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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

extensions_bar.mojom.PageHandlerFactoryPtr = extensions_bar.mojom.PageHandlerFactoryRemote;
extensions_bar.mojom.PageHandlerFactoryRequest = extensions_bar.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    extensions_bar.mojom.PageHandler_ExecuteUserAction_ParamsSpec, 'extensions_bar.mojom.PageHandler_ExecuteUserAction_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions_bar.mojom.PageHandler_ShowContextMenu_ParamsSpec, 'extensions_bar.mojom.PageHandler_ShowContextMenu_Params', [
      mojo.internal.StructField('source', 8, 0, ui.mojom.MenuSourceTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions_bar.mojom.PageHandler_ToggleExtensionsMenuFromWebUI_ParamsSpec, 'extensions_bar.mojom.PageHandler_ToggleExtensionsMenuFromWebUI_Params', [
    ],
    [{version: 0, packedSize: 8}]);

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

extensions_bar.mojom.PageHandlerPtr = extensions_bar.mojom.PageHandlerRemote;
extensions_bar.mojom.PageHandlerRequest = extensions_bar.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    extensions_bar.mojom.Page_ActionsAddedOrUpdated_ParamsSpec, 'extensions_bar.mojom.Page_ActionsAddedOrUpdated_Params', [
      mojo.internal.StructField('actions', 0, 0, mojo.internal.Array(extensions_bar.mojom.ExtensionActionInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions_bar.mojom.Page_ActionRemoved_ParamsSpec, 'extensions_bar.mojom.Page_ActionRemoved_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions_bar.mojom.Page_ActionPoppedOut_ParamsSpec, 'extensions_bar.mojom.Page_ActionPoppedOut_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    extensions_bar.mojom.Page_ActionPoppedOut_ResponseParamsSpec, 'extensions_bar.mojom.Page_ActionPoppedOut_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

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
      extensions_bar.mojom.Page_ActionPoppedOut_ResponseParamsSpec,
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

extensions_bar.mojom.PagePtr = extensions_bar.mojom.PageRemote;
extensions_bar.mojom.PageRequest = extensions_bar.mojom.PagePendingReceiver;

