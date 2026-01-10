// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/reload_button/reload_button.mojom
// Module: reload_button.mojom

'use strict';

// Module namespace
var reload_button = reload_button || {};
reload_button.mojom = reload_button.mojom || {};

reload_button.mojom.ClickDispositionFlagSpec = { $: mojo.internal.Enum() };
reload_button.mojom.PageHandlerFactory = {};
reload_button.mojom.PageHandlerFactory.$interfaceName = 'reload_button.mojom.PageHandlerFactory';
reload_button.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
reload_button.mojom.PageHandler = {};
reload_button.mojom.PageHandler.$interfaceName = 'reload_button.mojom.PageHandler';
reload_button.mojom.PageHandler_Reload_ParamsSpec = { $: {} };
reload_button.mojom.PageHandler_StopReload_ParamsSpec = { $: {} };
reload_button.mojom.PageHandler_ShowContextMenu_ParamsSpec = { $: {} };
reload_button.mojom.Page = {};
reload_button.mojom.Page.$interfaceName = 'reload_button.mojom.Page';
reload_button.mojom.Page_SetReloadButtonState_ParamsSpec = { $: {} };

// Enum: ClickDispositionFlag
reload_button.mojom.ClickDispositionFlag = {
  kMiddleMouseButton: 0,
  kAltKeyDown: 1,
  kMetaKeyDown: 2,
};

// Interface: PageHandlerFactory
mojo.internal.Struct(
    reload_button.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'reload_button.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(reload_button.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(reload_button.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [page, handler],
      false);
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

reload_button.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = reload_button.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
    }});
  }
};

reload_button.mojom.PageHandlerFactoryReceiver = reload_button.mojom.PageHandlerFactoryReceiver;

reload_button.mojom.PageHandlerFactoryPtr = reload_button.mojom.PageHandlerFactoryRemote;
reload_button.mojom.PageHandlerFactoryRequest = reload_button.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    reload_button.mojom.PageHandler_Reload_ParamsSpec, 'reload_button.mojom.PageHandler_Reload_Params', [
      mojo.internal.StructField('flags', 0, 0, mojo.internal.Array(reload_button.mojom.ClickDispositionFlagSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('ignore_cache', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    reload_button.mojom.PageHandler_StopReload_ParamsSpec, 'reload_button.mojom.PageHandler_StopReload_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    reload_button.mojom.PageHandler_ShowContextMenu_ParamsSpec, 'reload_button.mojom.PageHandler_ShowContextMenu_Params', [
      mojo.internal.StructField('offset_x', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('offset_y', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [ignore_cache, flags],
      false);
  }

  stopReload() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      reload_button.mojom.PageHandler_StopReload_ParamsSpec,
      null,
      [],
      false);
  }

  showContextMenu(offset_x, offset_y) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      reload_button.mojom.PageHandler_ShowContextMenu_ParamsSpec,
      null,
      [offset_x, offset_y],
      false);
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

reload_button.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = reload_button.mojom.PageHandler_Reload_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reload(params.ignore_cache, params.flags);
          break;
        }
        case 1: {
          const params = reload_button.mojom.PageHandler_StopReload_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stopReload();
          break;
        }
        case 2: {
          const params = reload_button.mojom.PageHandler_ShowContextMenu_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showContextMenu(params.offset_x, params.offset_y);
          break;
        }
      }
    }});
  }
};

reload_button.mojom.PageHandlerReceiver = reload_button.mojom.PageHandlerReceiver;

reload_button.mojom.PageHandlerPtr = reload_button.mojom.PageHandlerRemote;
reload_button.mojom.PageHandlerRequest = reload_button.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    reload_button.mojom.Page_SetReloadButtonState_ParamsSpec, 'reload_button.mojom.Page_SetReloadButtonState_Params', [
      mojo.internal.StructField('is_loading', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_menu_enabled', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [is_loading, is_menu_enabled],
      false);
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

reload_button.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = reload_button.mojom.Page_SetReloadButtonState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setReloadButtonState(params.is_loading, params.is_menu_enabled);
          break;
        }
      }
    }});
  }
};

reload_button.mojom.PageReceiver = reload_button.mojom.PageReceiver;

reload_button.mojom.PagePtr = reload_button.mojom.PageRemote;
reload_button.mojom.PageRequest = reload_button.mojom.PagePendingReceiver;

