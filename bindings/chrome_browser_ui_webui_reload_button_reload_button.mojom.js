// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/reload_button/reload_button.mojom
// Module: reload_button.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(reload_button.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(reload_button.mojom.PageHandlerRemote), null, false, 0, undefined),
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
  createPageHandler(page, handler) {
    return this.$.createPageHandler(page, handler);
  }
};

reload_button.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(reload_button.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(reload_button.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
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
  reload(ignore_cache, flags) {
    return this.$.reload(ignore_cache, flags);
  }
  stopReload() {
    return this.$.stopReload();
  }
  showContextMenu(offset_x, offset_y) {
    return this.$.showContextMenu(offset_x, offset_y);
  }
};

reload_button.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  reload(ignore_cache, flags) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      reload_button.mojom.PageHandler_Reload_ParamsSpec,
      null,
      [ignore_cache, flags],
      false);
  }

  stopReload() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      reload_button.mojom.PageHandler_StopReload_ParamsSpec,
      null,
      [],
      false);
  }

  showContextMenu(offset_x, offset_y) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(reload_button.mojom.PageHandler_Reload_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(reload_button.mojom.PageHandler_StopReload_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(reload_button.mojom.PageHandler_ShowContextMenu_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(reload_button.mojom.PageHandler_Reload_ParamsSpec.$.structSpec);
          const result = this.impl.reload(params.ignore_cache, params.flags);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(reload_button.mojom.PageHandler_StopReload_ParamsSpec.$.structSpec);
          const result = this.impl.stopReload();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(reload_button.mojom.PageHandler_ShowContextMenu_ParamsSpec.$.structSpec);
          const result = this.impl.showContextMenu(params.offset_x, params.offset_y);
          break;
        }
      }
      } catch (err) {}
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
  setReloadButtonState(is_loading, is_menu_enabled) {
    return this.$.setReloadButtonState(is_loading, is_menu_enabled);
  }
};

reload_button.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
    ]);
  }

  setReloadButtonState(is_loading, is_menu_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(reload_button.mojom.Page_SetReloadButtonState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(reload_button.mojom.Page_SetReloadButtonState_ParamsSpec.$.structSpec);
          const result = this.impl.setReloadButtonState(params.is_loading, params.is_menu_enabled);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

reload_button.mojom.PageReceiver = reload_button.mojom.PageReceiver;

reload_button.mojom.PagePtr = reload_button.mojom.PageRemote;
reload_button.mojom.PageRequest = reload_button.mojom.PagePendingReceiver;

