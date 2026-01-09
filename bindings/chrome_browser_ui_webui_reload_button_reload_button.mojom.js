// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/reload_button/reload_button.mojom
// Module: reload_button.mojom

'use strict';

// Module namespace
var reload_button = reload_button || {};
reload_button.mojom = reload_button.mojom || {};


// Enum: ClickDispositionFlag
reload_button.mojom.ClickDispositionFlag = {
  kMiddleMouseButton: 0,
  kAltKeyDown: 1,
  kMetaKeyDown: 2,
};

// Interface: PageHandlerFactory
reload_button.mojom.PageHandlerFactory = {};

reload_button.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

reload_button.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'reload_button.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      reload_button.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new reload_button.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

reload_button.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      reload_button.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

reload_button.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new reload_button.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'reload_button.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
reload_button.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reload_button.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
reload_button.mojom.PageHandlerFactoryPtr = reload_button.mojom.PageHandlerFactoryRemote;
reload_button.mojom.PageHandlerFactoryRequest = reload_button.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
reload_button.mojom.PageHandler = {};

reload_button.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

reload_button.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'reload_button.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      reload_button.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new reload_button.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

reload_button.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  reload(ignore_cache, flags) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      reload_button.mojom.PageHandler_Reload_ParamsSpec,
      null,
      [ignore_cache, flags]);
  }

  stopReload() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      reload_button.mojom.PageHandler_StopReload_ParamsSpec,
      null,
      []);
  }

  showContextMenu(offset_x, offset_y) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      reload_button.mojom.PageHandler_ShowContextMenu_ParamsSpec,
      null,
      [offset_x, offset_y]);
  }

};

reload_button.mojom.PageHandler.getRemote = function() {
  let remote = new reload_button.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'reload_button.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for Reload
reload_button.mojom.PageHandler_Reload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reload_button.mojom.PageHandler.Reload_Params',
      packedSize: 24,
      fields: [
        { name: 'flags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'ignore_cache', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopReload
reload_button.mojom.PageHandler_StopReload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reload_button.mojom.PageHandler.StopReload_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowContextMenu
reload_button.mojom.PageHandler_ShowContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reload_button.mojom.PageHandler.ShowContextMenu_Params',
      packedSize: 16,
      fields: [
        { name: 'offset_x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'offset_y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
reload_button.mojom.PageHandlerPtr = reload_button.mojom.PageHandlerRemote;
reload_button.mojom.PageHandlerRequest = reload_button.mojom.PageHandlerPendingReceiver;


// Interface: Page
reload_button.mojom.Page = {};

reload_button.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

reload_button.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'reload_button.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      reload_button.mojom.PagePendingReceiver,
      handle);
    this.$ = new reload_button.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

reload_button.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setReloadButtonState(is_loading, is_menu_enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      reload_button.mojom.Page_SetReloadButtonState_ParamsSpec,
      null,
      [is_loading, is_menu_enabled]);
  }

};

reload_button.mojom.Page.getRemote = function() {
  let remote = new reload_button.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'reload_button.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for SetReloadButtonState
reload_button.mojom.Page_SetReloadButtonState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reload_button.mojom.Page.SetReloadButtonState_Params',
      packedSize: 16,
      fields: [
        { name: 'is_loading', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_menu_enabled', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
reload_button.mojom.PagePtr = reload_button.mojom.PageRemote;
reload_button.mojom.PageRequest = reload_button.mojom.PagePendingReceiver;

