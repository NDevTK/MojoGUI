// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/infobar_internals/infobar_internals.mojom
// Module: infobar_internals.mojom

// Module namespace
var infobar_internals = infobar_internals || {};
infobar_internals.mojom = infobar_internals.mojom || {};

infobar_internals.mojom.InfoBarTypeSpec = { $: mojo.internal.Enum() };
infobar_internals.mojom.InfoBarEntrySpec = { $: {} };
infobar_internals.mojom.Page = {};
infobar_internals.mojom.Page.$interfaceName = 'infobar_internals.mojom.Page';
infobar_internals.mojom.PageHandler = {};
infobar_internals.mojom.PageHandler.$interfaceName = 'infobar_internals.mojom.PageHandler';
infobar_internals.mojom.PageHandler_GetInfoBars_ParamsSpec = { $: {} };
infobar_internals.mojom.PageHandler_GetInfoBars_ResponseParamsSpec = { $: {} };
infobar_internals.mojom.PageHandler_TriggerInfoBar_ParamsSpec = { $: {} };
infobar_internals.mojom.PageHandler_TriggerInfoBar_ResponseParamsSpec = { $: {} };
infobar_internals.mojom.PageHandlerFactory = {};
infobar_internals.mojom.PageHandlerFactory.$interfaceName = 'infobar_internals.mojom.PageHandlerFactory';
infobar_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };

// Enum: InfoBarType
infobar_internals.mojom.InfoBarType = {
  kDefaultBrowser: 0,
  kInstallerDownloader: 1,
  kSessionRestore: 2,
};

// Struct: InfoBarEntry
mojo.internal.Struct(
    infobar_internals.mojom.InfoBarEntrySpec, 'infobar_internals.mojom.InfoBarEntry', [
      mojo.internal.StructField('type', 0, 0, infobar_internals.mojom.InfoBarTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: Page
infobar_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

infobar_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'infobar_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      infobar_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new infobar_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

infobar_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
    ]);
  }

};

infobar_internals.mojom.Page.getRemote = function() {
  let remote = new infobar_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'infobar_internals.mojom.Page',
    'context');
  return remote.$;
};

infobar_internals.mojom.PageReceiver = class {
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

infobar_internals.mojom.PageReceiver = infobar_internals.mojom.PageReceiver;

infobar_internals.mojom.PagePtr = infobar_internals.mojom.PageRemote;
infobar_internals.mojom.PageRequest = infobar_internals.mojom.PagePendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    infobar_internals.mojom.PageHandler_GetInfoBars_ParamsSpec, 'infobar_internals.mojom.PageHandler_GetInfoBars_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    infobar_internals.mojom.PageHandler_GetInfoBars_ResponseParamsSpec, 'infobar_internals.mojom.PageHandler_GetInfoBars_ResponseParams', [
      mojo.internal.StructField('infobars', 0, 0, mojo.internal.Array(infobar_internals.mojom.InfoBarEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    infobar_internals.mojom.PageHandler_TriggerInfoBar_ParamsSpec, 'infobar_internals.mojom.PageHandler_TriggerInfoBar_Params', [
      mojo.internal.StructField('type', 0, 0, infobar_internals.mojom.InfoBarTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    infobar_internals.mojom.PageHandler_TriggerInfoBar_ResponseParamsSpec, 'infobar_internals.mojom.PageHandler_TriggerInfoBar_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

infobar_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

infobar_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'infobar_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      infobar_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new infobar_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getInfoBars() {
    return this.$.getInfoBars();
  }
  triggerInfoBar(type) {
    return this.$.triggerInfoBar(type);
  }
};

infobar_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getInfoBars() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      infobar_internals.mojom.PageHandler_GetInfoBars_ParamsSpec,
      infobar_internals.mojom.PageHandler_GetInfoBars_ResponseParamsSpec,
      [],
      false);
  }

  triggerInfoBar(type) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      infobar_internals.mojom.PageHandler_TriggerInfoBar_ParamsSpec,
      infobar_internals.mojom.PageHandler_TriggerInfoBar_ResponseParamsSpec,
      [type],
      false);
  }

};

infobar_internals.mojom.PageHandler.getRemote = function() {
  let remote = new infobar_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'infobar_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

infobar_internals.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(infobar_internals.mojom.PageHandler_GetInfoBars_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(infobar_internals.mojom.PageHandler_TriggerInfoBar_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(infobar_internals.mojom.PageHandler_GetInfoBars_ParamsSpec.$.structSpec);
          const result = this.impl.getInfoBars();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, infobar_internals.mojom.PageHandler_GetInfoBars_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(infobar_internals.mojom.PageHandler_TriggerInfoBar_ParamsSpec.$.structSpec);
          const result = this.impl.triggerInfoBar(params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, infobar_internals.mojom.PageHandler_TriggerInfoBar_ResponseParamsSpec);
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

infobar_internals.mojom.PageHandlerReceiver = infobar_internals.mojom.PageHandlerReceiver;

infobar_internals.mojom.PageHandlerPtr = infobar_internals.mojom.PageHandlerRemote;
infobar_internals.mojom.PageHandlerRequest = infobar_internals.mojom.PageHandlerPendingReceiver;


// Interface: PageHandlerFactory
mojo.internal.Struct(
    infobar_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'infobar_internals.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(infobar_internals.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(infobar_internals.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

infobar_internals.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

infobar_internals.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'infobar_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      infobar_internals.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new infobar_internals.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
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

infobar_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      infobar_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

infobar_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new infobar_internals.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'infobar_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

infobar_internals.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(infobar_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(infobar_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

infobar_internals.mojom.PageHandlerFactoryReceiver = infobar_internals.mojom.PageHandlerFactoryReceiver;

infobar_internals.mojom.PageHandlerFactoryPtr = infobar_internals.mojom.PageHandlerFactoryRemote;
infobar_internals.mojom.PageHandlerFactoryRequest = infobar_internals.mojom.PageHandlerFactoryPendingReceiver;

