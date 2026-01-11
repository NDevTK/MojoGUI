// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/updater/updater_ui.mojom
// Module: updater_ui.mojom

// Module namespace
var updater_ui = updater_ui || {};
updater_ui.mojom = updater_ui.mojom || {};

updater_ui.mojom.PageHandlerFactory = {};
updater_ui.mojom.PageHandlerFactory.$interfaceName = 'updater_ui.mojom.PageHandlerFactory';
updater_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
updater_ui.mojom.PageHandler = {};
updater_ui.mojom.PageHandler.$interfaceName = 'updater_ui.mojom.PageHandler';
updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ParamsSpec = { $: {} };
updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ResponseParamsSpec = { $: {} };
updater_ui.mojom.Page = {};
updater_ui.mojom.Page.$interfaceName = 'updater_ui.mojom.Page';

// Interface: PageHandlerFactory
mojo.internal.Struct(
    updater_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'updater_ui.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(updater_ui.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(updater_ui.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

updater_ui.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater_ui.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'updater_ui.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater_ui.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new updater_ui.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
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

updater_ui.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      updater_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

updater_ui.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new updater_ui.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater_ui.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

updater_ui.mojom.PageHandlerFactoryReceiver = class {
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(updater_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(updater_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

updater_ui.mojom.PageHandlerFactoryReceiver = updater_ui.mojom.PageHandlerFactoryReceiver;

updater_ui.mojom.PageHandlerFactoryPtr = updater_ui.mojom.PageHandlerFactoryRemote;
updater_ui.mojom.PageHandlerFactoryRequest = updater_ui.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ParamsSpec, 'updater_ui.mojom.PageHandler_GetAllUpdaterEvents_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ResponseParamsSpec, 'updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ResponseParams', [
      mojo.internal.StructField('events', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

updater_ui.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater_ui.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'updater_ui.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater_ui.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new updater_ui.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getAllUpdaterEvents() {
    return this.$.getAllUpdaterEvents();
  }
};

updater_ui.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
    ]);
  }

  getAllUpdaterEvents() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ParamsSpec,
      updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ResponseParamsSpec,
      [],
      false);
  }

};

updater_ui.mojom.PageHandler.getRemote = function() {
  let remote = new updater_ui.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater_ui.mojom.PageHandler',
    'context');
  return remote.$;
};

updater_ui.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ParamsSpec.$.structSpec);
          const result = this.impl.getAllUpdaterEvents();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

updater_ui.mojom.PageHandlerReceiver = updater_ui.mojom.PageHandlerReceiver;

updater_ui.mojom.PageHandlerPtr = updater_ui.mojom.PageHandlerRemote;
updater_ui.mojom.PageHandlerRequest = updater_ui.mojom.PageHandlerPendingReceiver;


// Interface: Page
updater_ui.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater_ui.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'updater_ui.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater_ui.mojom.PagePendingReceiver,
      handle);
    this.$ = new updater_ui.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater_ui.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
    ]);
  }

};

updater_ui.mojom.Page.getRemote = function() {
  let remote = new updater_ui.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater_ui.mojom.Page',
    'context');
  return remote.$;
};

updater_ui.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
      }
      } catch (err) {}
    }});
  }
};

updater_ui.mojom.PageReceiver = updater_ui.mojom.PageReceiver;

updater_ui.mojom.PagePtr = updater_ui.mojom.PageRemote;
updater_ui.mojom.PageRequest = updater_ui.mojom.PagePendingReceiver;

