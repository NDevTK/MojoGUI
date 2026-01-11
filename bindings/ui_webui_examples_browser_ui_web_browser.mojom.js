// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/examples/browser/ui/web/browser.mojom
// Module: webui_examples.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var webui_examples = webui_examples || {};
webui_examples.mojom = webui_examples.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

webui_examples.mojom.PageHandlerFactory = {};
webui_examples.mojom.PageHandlerFactory.$interfaceName = 'webui_examples.mojom.PageHandlerFactory';
webui_examples.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
webui_examples.mojom.PageHandler = {};
webui_examples.mojom.PageHandler.$interfaceName = 'webui_examples.mojom.PageHandler';
webui_examples.mojom.PageHandler_Navigate_ParamsSpec = { $: {} };
webui_examples.mojom.PageHandler_GoBack_ParamsSpec = { $: {} };
webui_examples.mojom.PageHandler_GoForward_ParamsSpec = { $: {} };

// Interface: PageHandlerFactory
mojo.internal.Struct(
    webui_examples.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'webui_examples.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(webui_examples.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

webui_examples.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webui_examples.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'webui_examples.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webui_examples.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new webui_examples.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
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

webui_examples.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      webui_examples.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler],
      false);
  }

};

webui_examples.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new webui_examples.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webui_examples.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

webui_examples.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(webui_examples.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_examples.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

webui_examples.mojom.PageHandlerFactoryReceiver = webui_examples.mojom.PageHandlerFactoryReceiver;

webui_examples.mojom.PageHandlerFactoryPtr = webui_examples.mojom.PageHandlerFactoryRemote;
webui_examples.mojom.PageHandlerFactoryRequest = webui_examples.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    webui_examples.mojom.PageHandler_Navigate_ParamsSpec, 'webui_examples.mojom.PageHandler_Navigate_Params', [
      mojo.internal.StructField('src', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('guest_contents_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    webui_examples.mojom.PageHandler_GoBack_ParamsSpec, 'webui_examples.mojom.PageHandler_GoBack_Params', [
      mojo.internal.StructField('guest_contents_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webui_examples.mojom.PageHandler_GoForward_ParamsSpec, 'webui_examples.mojom.PageHandler_GoForward_Params', [
      mojo.internal.StructField('guest_contents_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

webui_examples.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webui_examples.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'webui_examples.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webui_examples.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new webui_examples.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  navigate(guest_contents_id, src) {
    return this.$.navigate(guest_contents_id, src);
  }
  goBack(guest_contents_id) {
    return this.$.goBack(guest_contents_id);
  }
  goForward(guest_contents_id) {
    return this.$.goForward(guest_contents_id);
  }
};

webui_examples.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  navigate(guest_contents_id, src) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      webui_examples.mojom.PageHandler_Navigate_ParamsSpec,
      null,
      [guest_contents_id, src],
      false);
  }

  goBack(guest_contents_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      webui_examples.mojom.PageHandler_GoBack_ParamsSpec,
      null,
      [guest_contents_id],
      false);
  }

  goForward(guest_contents_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      webui_examples.mojom.PageHandler_GoForward_ParamsSpec,
      null,
      [guest_contents_id],
      false);
  }

};

webui_examples.mojom.PageHandler.getRemote = function() {
  let remote = new webui_examples.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webui_examples.mojom.PageHandler',
    'context');
  return remote.$;
};

webui_examples.mojom.PageHandlerReceiver = class {
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_examples.mojom.PageHandler_Navigate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_examples.mojom.PageHandler_GoBack_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webui_examples.mojom.PageHandler_GoForward_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_examples.mojom.PageHandler_Navigate_ParamsSpec.$.structSpec);
          const result = this.impl.navigate(params.guest_contents_id, params.src);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_examples.mojom.PageHandler_GoBack_ParamsSpec.$.structSpec);
          const result = this.impl.goBack(params.guest_contents_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webui_examples.mojom.PageHandler_GoForward_ParamsSpec.$.structSpec);
          const result = this.impl.goForward(params.guest_contents_id);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

webui_examples.mojom.PageHandlerReceiver = webui_examples.mojom.PageHandlerReceiver;

webui_examples.mojom.PageHandlerPtr = webui_examples.mojom.PageHandlerRemote;
webui_examples.mojom.PageHandlerRequest = webui_examples.mojom.PageHandlerPendingReceiver;

