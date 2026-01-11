// Auto-generated MojoJS binding
// Source: chromium_src/components/webui/chrome_urls/mojom/chrome_urls.mojom
// Module: chrome_urls.mojom

// Module namespace
var chrome_urls = chrome_urls || {};
chrome_urls.mojom = chrome_urls.mojom || {};
var url = url || {};

chrome_urls.mojom.WebuiUrlInfoSpec = { $: {} };
chrome_urls.mojom.ChromeUrlsDataSpec = { $: {} };
chrome_urls.mojom.PageHandlerFactory = {};
chrome_urls.mojom.PageHandlerFactory.$interfaceName = 'chrome_urls.mojom.PageHandlerFactory';
chrome_urls.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
chrome_urls.mojom.PageHandler = {};
chrome_urls.mojom.PageHandler.$interfaceName = 'chrome_urls.mojom.PageHandler';
chrome_urls.mojom.PageHandler_GetUrls_ParamsSpec = { $: {} };
chrome_urls.mojom.PageHandler_GetUrls_ResponseParamsSpec = { $: {} };
chrome_urls.mojom.PageHandler_SetDebugPagesEnabled_ParamsSpec = { $: {} };
chrome_urls.mojom.PageHandler_SetDebugPagesEnabled_ResponseParamsSpec = { $: {} };
chrome_urls.mojom.Page = {};
chrome_urls.mojom.Page.$interfaceName = 'chrome_urls.mojom.Page';

// Struct: WebuiUrlInfo
mojo.internal.Struct(
    chrome_urls.mojom.WebuiUrlInfoSpec, 'chrome_urls.mojom.WebuiUrlInfo', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('internal', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ChromeUrlsData
mojo.internal.Struct(
    chrome_urls.mojom.ChromeUrlsDataSpec, 'chrome_urls.mojom.ChromeUrlsData', [
      mojo.internal.StructField('webui_urls', 0, 0, mojo.internal.Array(chrome_urls.mojom.WebuiUrlInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('command_urls', 8, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('internal_debugging_uis_enabled', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    chrome_urls.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'chrome_urls.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(chrome_urls.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(chrome_urls.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

chrome_urls.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome_urls.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'chrome_urls.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome_urls.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new chrome_urls.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
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

chrome_urls.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome_urls.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

chrome_urls.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new chrome_urls.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome_urls.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

chrome_urls.mojom.PageHandlerFactoryReceiver = class {
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(chrome_urls.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome_urls.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chrome_urls.mojom.PageHandlerFactoryReceiver = chrome_urls.mojom.PageHandlerFactoryReceiver;

chrome_urls.mojom.PageHandlerFactoryPtr = chrome_urls.mojom.PageHandlerFactoryRemote;
chrome_urls.mojom.PageHandlerFactoryRequest = chrome_urls.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    chrome_urls.mojom.PageHandler_GetUrls_ParamsSpec, 'chrome_urls.mojom.PageHandler_GetUrls_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome_urls.mojom.PageHandler_GetUrls_ResponseParamsSpec, 'chrome_urls.mojom.PageHandler_GetUrls_ResponseParams', [
      mojo.internal.StructField('urls_data', 0, 0, chrome_urls.mojom.ChromeUrlsDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome_urls.mojom.PageHandler_SetDebugPagesEnabled_ParamsSpec, 'chrome_urls.mojom.PageHandler_SetDebugPagesEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome_urls.mojom.PageHandler_SetDebugPagesEnabled_ResponseParamsSpec, 'chrome_urls.mojom.PageHandler_SetDebugPagesEnabled_ResponseParams', [
    ],
    [[0, 8]]);

chrome_urls.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome_urls.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'chrome_urls.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome_urls.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new chrome_urls.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getUrls() {
    return this.$.getUrls();
  }
  setDebugPagesEnabled(enabled) {
    return this.$.setDebugPagesEnabled(enabled);
  }
};

chrome_urls.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getUrls() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome_urls.mojom.PageHandler_GetUrls_ParamsSpec,
      chrome_urls.mojom.PageHandler_GetUrls_ResponseParamsSpec,
      [],
      false);
  }

  setDebugPagesEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chrome_urls.mojom.PageHandler_SetDebugPagesEnabled_ParamsSpec,
      chrome_urls.mojom.PageHandler_SetDebugPagesEnabled_ResponseParamsSpec,
      [enabled],
      false);
  }

};

chrome_urls.mojom.PageHandler.getRemote = function() {
  let remote = new chrome_urls.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome_urls.mojom.PageHandler',
    'context');
  return remote.$;
};

chrome_urls.mojom.PageHandlerReceiver = class {
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(chrome_urls.mojom.PageHandler_GetUrls_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome_urls.mojom.PageHandler_SetDebugPagesEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome_urls.mojom.PageHandler_GetUrls_ParamsSpec.$.structSpec);
          const result = this.impl.getUrls();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome_urls.mojom.PageHandler_GetUrls_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome_urls.mojom.PageHandler_SetDebugPagesEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setDebugPagesEnabled(params.enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome_urls.mojom.PageHandler_SetDebugPagesEnabled_ResponseParamsSpec);
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

chrome_urls.mojom.PageHandlerReceiver = chrome_urls.mojom.PageHandlerReceiver;

chrome_urls.mojom.PageHandlerPtr = chrome_urls.mojom.PageHandlerRemote;
chrome_urls.mojom.PageHandlerRequest = chrome_urls.mojom.PageHandlerPendingReceiver;


// Interface: Page
chrome_urls.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome_urls.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'chrome_urls.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome_urls.mojom.PagePendingReceiver,
      handle);
    this.$ = new chrome_urls.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome_urls.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
    ]);
  }

};

chrome_urls.mojom.Page.getRemote = function() {
  let remote = new chrome_urls.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome_urls.mojom.Page',
    'context');
  return remote.$;
};

chrome_urls.mojom.PageReceiver = class {
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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

chrome_urls.mojom.PageReceiver = chrome_urls.mojom.PageReceiver;

chrome_urls.mojom.PagePtr = chrome_urls.mojom.PageRemote;
chrome_urls.mojom.PageRequest = chrome_urls.mojom.PagePendingReceiver;

