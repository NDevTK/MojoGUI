// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/omnibox_popup/mojom/omnibox_popup_aim.mojom
// Module: omnibox_popup_aim.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var omnibox_popup_aim = omnibox_popup_aim || {};
omnibox_popup_aim.mojom = omnibox_popup_aim.mojom || {};
var searchbox = searchbox || {};
var mojo_base = mojo_base || {};
var url = url || {};

omnibox_popup_aim.mojom.PageHandlerFactory = {};
omnibox_popup_aim.mojom.PageHandlerFactory.$interfaceName = 'omnibox_popup_aim.mojom.PageHandlerFactory';
omnibox_popup_aim.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
omnibox_popup_aim.mojom.PageHandler = {};
omnibox_popup_aim.mojom.PageHandler.$interfaceName = 'omnibox_popup_aim.mojom.PageHandler';
omnibox_popup_aim.mojom.PageHandler_RequestClose_ParamsSpec = { $: {} };
omnibox_popup_aim.mojom.PageHandler_NavigateCurrentTab_ParamsSpec = { $: {} };
omnibox_popup_aim.mojom.Page = {};
omnibox_popup_aim.mojom.Page.$interfaceName = 'omnibox_popup_aim.mojom.Page';
omnibox_popup_aim.mojom.Page_OnPopupShown_ParamsSpec = { $: {} };
omnibox_popup_aim.mojom.Page_AddContext_ParamsSpec = { $: {} };
omnibox_popup_aim.mojom.Page_OnPopupHidden_ParamsSpec = { $: {} };
omnibox_popup_aim.mojom.Page_OnPopupHidden_ResponseParamsSpec = { $: {} };
omnibox_popup_aim.mojom.Page_SetPreserveContextOnClose_ParamsSpec = { $: {} };

// Interface: PageHandlerFactory
mojo.internal.Struct(
    omnibox_popup_aim.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'omnibox_popup_aim.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(omnibox_popup_aim.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(omnibox_popup_aim.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

omnibox_popup_aim.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

omnibox_popup_aim.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'omnibox_popup_aim.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      omnibox_popup_aim.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new omnibox_popup_aim.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
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

omnibox_popup_aim.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      omnibox_popup_aim.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

omnibox_popup_aim.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new omnibox_popup_aim.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'omnibox_popup_aim.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

omnibox_popup_aim.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(omnibox_popup_aim.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(omnibox_popup_aim.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

omnibox_popup_aim.mojom.PageHandlerFactoryReceiver = omnibox_popup_aim.mojom.PageHandlerFactoryReceiver;

omnibox_popup_aim.mojom.PageHandlerFactoryPtr = omnibox_popup_aim.mojom.PageHandlerFactoryRemote;
omnibox_popup_aim.mojom.PageHandlerFactoryRequest = omnibox_popup_aim.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    omnibox_popup_aim.mojom.PageHandler_RequestClose_ParamsSpec, 'omnibox_popup_aim.mojom.PageHandler_RequestClose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    omnibox_popup_aim.mojom.PageHandler_NavigateCurrentTab_ParamsSpec, 'omnibox_popup_aim.mojom.PageHandler_NavigateCurrentTab_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

omnibox_popup_aim.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

omnibox_popup_aim.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'omnibox_popup_aim.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      omnibox_popup_aim.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new omnibox_popup_aim.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestClose() {
    return this.$.requestClose();
  }
  navigateCurrentTab(url) {
    return this.$.navigateCurrentTab(url);
  }
};

omnibox_popup_aim.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestClose() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      omnibox_popup_aim.mojom.PageHandler_RequestClose_ParamsSpec,
      null,
      [],
      false);
  }

  navigateCurrentTab(url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      omnibox_popup_aim.mojom.PageHandler_NavigateCurrentTab_ParamsSpec,
      null,
      [url],
      false);
  }

};

omnibox_popup_aim.mojom.PageHandler.getRemote = function() {
  let remote = new omnibox_popup_aim.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'omnibox_popup_aim.mojom.PageHandler',
    'context');
  return remote.$;
};

omnibox_popup_aim.mojom.PageHandlerReceiver = class {
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(omnibox_popup_aim.mojom.PageHandler_RequestClose_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(omnibox_popup_aim.mojom.PageHandler_NavigateCurrentTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(omnibox_popup_aim.mojom.PageHandler_RequestClose_ParamsSpec.$.structSpec);
          const result = this.impl.requestClose();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(omnibox_popup_aim.mojom.PageHandler_NavigateCurrentTab_ParamsSpec.$.structSpec);
          const result = this.impl.navigateCurrentTab(params.url);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

omnibox_popup_aim.mojom.PageHandlerReceiver = omnibox_popup_aim.mojom.PageHandlerReceiver;

omnibox_popup_aim.mojom.PageHandlerPtr = omnibox_popup_aim.mojom.PageHandlerRemote;
omnibox_popup_aim.mojom.PageHandlerRequest = omnibox_popup_aim.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    omnibox_popup_aim.mojom.Page_OnPopupShown_ParamsSpec, 'omnibox_popup_aim.mojom.Page_OnPopupShown_Params', [
      mojo.internal.StructField('context', 0, 0, searchbox.mojom.SearchContextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    omnibox_popup_aim.mojom.Page_AddContext_ParamsSpec, 'omnibox_popup_aim.mojom.Page_AddContext_Params', [
      mojo.internal.StructField('context', 0, 0, searchbox.mojom.SearchContextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    omnibox_popup_aim.mojom.Page_OnPopupHidden_ParamsSpec, 'omnibox_popup_aim.mojom.Page_OnPopupHidden_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    omnibox_popup_aim.mojom.Page_OnPopupHidden_ResponseParamsSpec, 'omnibox_popup_aim.mojom.Page_OnPopupHidden_ResponseParams', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    omnibox_popup_aim.mojom.Page_SetPreserveContextOnClose_ParamsSpec, 'omnibox_popup_aim.mojom.Page_SetPreserveContextOnClose_Params', [
      mojo.internal.StructField('preserve_context_on_close', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

omnibox_popup_aim.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

omnibox_popup_aim.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'omnibox_popup_aim.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      omnibox_popup_aim.mojom.PagePendingReceiver,
      handle);
    this.$ = new omnibox_popup_aim.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPopupShown(context) {
    return this.$.onPopupShown(context);
  }
  addContext(context) {
    return this.$.addContext(context);
  }
  onPopupHidden() {
    return this.$.onPopupHidden();
  }
  setPreserveContextOnClose(preserve_context_on_close) {
    return this.$.setPreserveContextOnClose(preserve_context_on_close);
  }
};

omnibox_popup_aim.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onPopupShown(context) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      omnibox_popup_aim.mojom.Page_OnPopupShown_ParamsSpec,
      null,
      [context],
      false);
  }

  addContext(context) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      omnibox_popup_aim.mojom.Page_AddContext_ParamsSpec,
      null,
      [context],
      false);
  }

  onPopupHidden() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      omnibox_popup_aim.mojom.Page_OnPopupHidden_ParamsSpec,
      omnibox_popup_aim.mojom.Page_OnPopupHidden_ResponseParamsSpec,
      [],
      false);
  }

  setPreserveContextOnClose(preserve_context_on_close) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      omnibox_popup_aim.mojom.Page_SetPreserveContextOnClose_ParamsSpec,
      null,
      [preserve_context_on_close],
      false);
  }

};

omnibox_popup_aim.mojom.Page.getRemote = function() {
  let remote = new omnibox_popup_aim.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'omnibox_popup_aim.mojom.Page',
    'context');
  return remote.$;
};

omnibox_popup_aim.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
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
             decoder.decodeStructInline(omnibox_popup_aim.mojom.Page_OnPopupShown_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(omnibox_popup_aim.mojom.Page_AddContext_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(omnibox_popup_aim.mojom.Page_OnPopupHidden_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(omnibox_popup_aim.mojom.Page_SetPreserveContextOnClose_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(omnibox_popup_aim.mojom.Page_OnPopupShown_ParamsSpec.$.structSpec);
          const result = this.impl.onPopupShown(params.context);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(omnibox_popup_aim.mojom.Page_AddContext_ParamsSpec.$.structSpec);
          const result = this.impl.addContext(params.context);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(omnibox_popup_aim.mojom.Page_OnPopupHidden_ParamsSpec.$.structSpec);
          const result = this.impl.onPopupHidden();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, omnibox_popup_aim.mojom.Page_OnPopupHidden_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(omnibox_popup_aim.mojom.Page_SetPreserveContextOnClose_ParamsSpec.$.structSpec);
          const result = this.impl.setPreserveContextOnClose(params.preserve_context_on_close);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

omnibox_popup_aim.mojom.PageReceiver = omnibox_popup_aim.mojom.PageReceiver;

omnibox_popup_aim.mojom.PagePtr = omnibox_popup_aim.mojom.PageRemote;
omnibox_popup_aim.mojom.PageRequest = omnibox_popup_aim.mojom.PagePendingReceiver;

