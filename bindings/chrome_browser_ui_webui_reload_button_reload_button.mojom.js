// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/reload_button/reload_button.mojom
// Module: reload_button.mojom

'use strict';

// Module namespace
var reload_button = reload_button || {};
reload_button.mojom = reload_button.mojom || {};


// Enum: ClickDispositionFlag
reload_button.mojom.mojom.ClickDispositionFlag = {
  kMiddleMouseButton: 0,
  kAltKeyDown: 1,
  kMetaKeyDown: 2,
};
reload_button.mojom.mojom.ClickDispositionFlagSpec = { $: mojo.internal.Enum() };

// Interface: PageHandlerFactory
reload_button.mojom.mojom.PageHandlerFactory = {};

reload_button.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

reload_button.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'reload_button.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      reload_button.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new reload_button.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

reload_button.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      reload_button.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

reload_button.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new reload_button.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'reload_button.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
reload_button.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reload_button.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(reload_button.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(reload_button.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
reload_button.mojom.mojom.PageHandlerFactoryPtr = reload_button.mojom.mojom.PageHandlerFactoryRemote;
reload_button.mojom.mojom.PageHandlerFactoryRequest = reload_button.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
reload_button.mojom.mojom.PageHandler = {};

reload_button.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

reload_button.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'reload_button.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      reload_button.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new reload_button.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

reload_button.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  reload(ignore_cache, flags) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      reload_button.mojom.mojom.PageHandler_Reload_ParamsSpec,
      null,
      [ignore_cache, flags]);
  }

  stopReload() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      reload_button.mojom.mojom.PageHandler_StopReload_ParamsSpec,
      null,
      []);
  }

  showContextMenu(offset_x, offset_y) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      reload_button.mojom.mojom.PageHandler_ShowContextMenu_ParamsSpec,
      null,
      [offset_x, offset_y]);
  }

};

reload_button.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new reload_button.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'reload_button.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for Reload
reload_button.mojom.mojom.PageHandler_Reload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reload_button.mojom.PageHandler.Reload_Params',
      packedSize: 24,
      fields: [
        { name: 'ignore_cache', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'flags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(reload_button.mojom.ClickDispositionFlagSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for StopReload
reload_button.mojom.mojom.PageHandler_StopReload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reload_button.mojom.PageHandler.StopReload_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ShowContextMenu
reload_button.mojom.mojom.PageHandler_ShowContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reload_button.mojom.PageHandler.ShowContextMenu_Params',
      packedSize: 16,
      fields: [
        { name: 'offset_x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'offset_y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
reload_button.mojom.mojom.PageHandlerPtr = reload_button.mojom.mojom.PageHandlerRemote;
reload_button.mojom.mojom.PageHandlerRequest = reload_button.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
reload_button.mojom.mojom.Page = {};

reload_button.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

reload_button.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'reload_button.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      reload_button.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new reload_button.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

reload_button.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setReloadButtonState(is_loading, is_menu_enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      reload_button.mojom.mojom.Page_SetReloadButtonState_ParamsSpec,
      null,
      [is_loading, is_menu_enabled]);
  }

};

reload_button.mojom.mojom.Page.getRemote = function() {
  let remote = new reload_button.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'reload_button.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for SetReloadButtonState
reload_button.mojom.mojom.Page_SetReloadButtonState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reload_button.mojom.Page.SetReloadButtonState_Params',
      packedSize: 16,
      fields: [
        { name: 'is_loading', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_menu_enabled', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
reload_button.mojom.mojom.PagePtr = reload_button.mojom.mojom.PageRemote;
reload_button.mojom.mojom.PageRequest = reload_button.mojom.mojom.PagePendingReceiver;

