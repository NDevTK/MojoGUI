// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/search/mojom/magic_boost_handler.mojom
// Module: ash.settings.magic_boost_handler.mojom

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.magic_boost_handler = ash.settings.magic_boost_handler || {};
ash.settings.magic_boost_handler.mojom = ash.settings.magic_boost_handler.mojom || {};

ash.settings.magic_boost_handler.mojom.PageHandlerFactory = {};
ash.settings.magic_boost_handler.mojom.PageHandlerFactory.$interfaceName = 'ash.settings.magic_boost_handler.mojom.PageHandlerFactory';
ash.settings.magic_boost_handler.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.settings.magic_boost_handler.mojom.PageHandler = {};
ash.settings.magic_boost_handler.mojom.PageHandler.$interfaceName = 'ash.settings.magic_boost_handler.mojom.PageHandler';
ash.settings.magic_boost_handler.mojom.PageHandler_ShowNotice_ParamsSpec = { $: {} };

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.settings.magic_boost_handler.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.settings.magic_boost_handler.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.settings.magic_boost_handler.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.magic_boost_handler.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.settings.magic_boost_handler.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.magic_boost_handler.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(handler) {
    return this.$.createPageHandler(handler);
  }
};

ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.magic_boost_handler.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler],
      false);
  }

};

ash.settings.magic_boost_handler.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.magic_boost_handler.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

ash.settings.magic_boost_handler.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(ash.settings.magic_boost_handler.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.magic_boost_handler.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.settings.magic_boost_handler.mojom.PageHandlerFactoryReceiver = ash.settings.magic_boost_handler.mojom.PageHandlerFactoryReceiver;

ash.settings.magic_boost_handler.mojom.PageHandlerFactoryPtr = ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRemote;
ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRequest = ash.settings.magic_boost_handler.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.settings.magic_boost_handler.mojom.PageHandler_ShowNotice_ParamsSpec, 'ash.settings.magic_boost_handler.mojom.PageHandler_ShowNotice_Params', [
    ],
    [[0, 8]]);

ash.settings.magic_boost_handler.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.magic_boost_handler.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.magic_boost_handler.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.magic_boost_handler.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.magic_boost_handler.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  showNotice() {
    return this.$.showNotice();
  }
};

ash.settings.magic_boost_handler.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
    ]);
  }

  showNotice() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.magic_boost_handler.mojom.PageHandler_ShowNotice_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.settings.magic_boost_handler.mojom.PageHandler.getRemote = function() {
  let remote = new ash.settings.magic_boost_handler.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.magic_boost_handler.mojom.PageHandler',
    'context');
  return remote.$;
};

ash.settings.magic_boost_handler.mojom.PageHandlerReceiver = class {
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
             decoder.decodeStructInline(ash.settings.magic_boost_handler.mojom.PageHandler_ShowNotice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.magic_boost_handler.mojom.PageHandler_ShowNotice_ParamsSpec.$.structSpec);
          const result = this.impl.showNotice();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.settings.magic_boost_handler.mojom.PageHandlerReceiver = ash.settings.magic_boost_handler.mojom.PageHandlerReceiver;

ash.settings.magic_boost_handler.mojom.PageHandlerPtr = ash.settings.magic_boost_handler.mojom.PageHandlerRemote;
ash.settings.magic_boost_handler.mojom.PageHandlerRequest = ash.settings.magic_boost_handler.mojom.PageHandlerPendingReceiver;

