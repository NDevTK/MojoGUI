// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/composebox/composebox.mojom
// Module: composebox.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var composebox = composebox || {};
composebox.mojom = composebox.mojom || {};
var searchbox = searchbox || {};
var url = url || {};

composebox.mojom.PageHandlerFactory = {};
composebox.mojom.PageHandlerFactory.$interfaceName = 'composebox.mojom.PageHandlerFactory';
composebox.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
composebox.mojom.PageHandler = {};
composebox.mojom.PageHandler.$interfaceName = 'composebox.mojom.PageHandler';
composebox.mojom.PageHandler_FocusChanged_ParamsSpec = { $: {} };
composebox.mojom.PageHandler_SetDeepSearchMode_ParamsSpec = { $: {} };
composebox.mojom.PageHandler_SetCreateImageMode_ParamsSpec = { $: {} };
composebox.mojom.PageHandler_HandleLensButtonClick_ParamsSpec = { $: {} };
composebox.mojom.PageHandler_HandleFileUpload_ParamsSpec = { $: {} };
composebox.mojom.PageHandler_NavigateUrl_ParamsSpec = { $: {} };
composebox.mojom.Page = {};
composebox.mojom.Page.$interfaceName = 'composebox.mojom.Page';

// Interface: PageHandlerFactory
mojo.internal.Struct(
    composebox.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'composebox.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(composebox.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(composebox.mojom.PageHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('searchbox_page', 16, 0, mojo.internal.InterfaceProxy(searchbox.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('searchbox_handler', 24, 0, mojo.internal.InterfaceRequest(searchbox.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

composebox.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

composebox.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'composebox.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      composebox.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new composebox.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(page, handler, searchbox_page, searchbox_handler) {
    return this.$.createPageHandler(page, handler, searchbox_page, searchbox_handler);
  }
};

composebox.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler, searchbox_page, searchbox_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      composebox.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler, searchbox_page, searchbox_handler],
      false);
  }

};

composebox.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new composebox.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'composebox.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

composebox.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(composebox.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(composebox.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler, params.searchbox_page, params.searchbox_handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

composebox.mojom.PageHandlerFactoryReceiver = composebox.mojom.PageHandlerFactoryReceiver;

composebox.mojom.PageHandlerFactoryPtr = composebox.mojom.PageHandlerFactoryRemote;
composebox.mojom.PageHandlerFactoryRequest = composebox.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    composebox.mojom.PageHandler_FocusChanged_ParamsSpec, 'composebox.mojom.PageHandler_FocusChanged_Params', [
      mojo.internal.StructField('focused', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    composebox.mojom.PageHandler_SetDeepSearchMode_ParamsSpec, 'composebox.mojom.PageHandler_SetDeepSearchMode_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    composebox.mojom.PageHandler_SetCreateImageMode_ParamsSpec, 'composebox.mojom.PageHandler_SetCreateImageMode_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('image_present', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    composebox.mojom.PageHandler_HandleLensButtonClick_ParamsSpec, 'composebox.mojom.PageHandler_HandleLensButtonClick_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    composebox.mojom.PageHandler_HandleFileUpload_ParamsSpec, 'composebox.mojom.PageHandler_HandleFileUpload_Params', [
      mojo.internal.StructField('is_image', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    composebox.mojom.PageHandler_NavigateUrl_ParamsSpec, 'composebox.mojom.PageHandler_NavigateUrl_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

composebox.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

composebox.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'composebox.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      composebox.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new composebox.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  focusChanged(focused) {
    return this.$.focusChanged(focused);
  }
  setDeepSearchMode(enabled) {
    return this.$.setDeepSearchMode(enabled);
  }
  setCreateImageMode(enabled, image_present) {
    return this.$.setCreateImageMode(enabled, image_present);
  }
  handleLensButtonClick() {
    return this.$.handleLensButtonClick();
  }
  handleFileUpload(is_image) {
    return this.$.handleFileUpload(is_image);
  }
  navigateUrl(url) {
    return this.$.navigateUrl(url);
  }
};

composebox.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  focusChanged(focused) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      composebox.mojom.PageHandler_FocusChanged_ParamsSpec,
      null,
      [focused],
      false);
  }

  setDeepSearchMode(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      composebox.mojom.PageHandler_SetDeepSearchMode_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setCreateImageMode(enabled, image_present) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      composebox.mojom.PageHandler_SetCreateImageMode_ParamsSpec,
      null,
      [enabled, image_present],
      false);
  }

  handleLensButtonClick() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      composebox.mojom.PageHandler_HandleLensButtonClick_ParamsSpec,
      null,
      [],
      false);
  }

  handleFileUpload(is_image) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      composebox.mojom.PageHandler_HandleFileUpload_ParamsSpec,
      null,
      [is_image],
      false);
  }

  navigateUrl(url) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      composebox.mojom.PageHandler_NavigateUrl_ParamsSpec,
      null,
      [url],
      false);
  }

};

composebox.mojom.PageHandler.getRemote = function() {
  let remote = new composebox.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'composebox.mojom.PageHandler',
    'context');
  return remote.$;
};

composebox.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(composebox.mojom.PageHandler_FocusChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(composebox.mojom.PageHandler_SetDeepSearchMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(composebox.mojom.PageHandler_SetCreateImageMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(composebox.mojom.PageHandler_HandleLensButtonClick_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(composebox.mojom.PageHandler_HandleFileUpload_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(composebox.mojom.PageHandler_NavigateUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(composebox.mojom.PageHandler_FocusChanged_ParamsSpec.$.structSpec);
          const result = this.impl.focusChanged(params.focused);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(composebox.mojom.PageHandler_SetDeepSearchMode_ParamsSpec.$.structSpec);
          const result = this.impl.setDeepSearchMode(params.enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(composebox.mojom.PageHandler_SetCreateImageMode_ParamsSpec.$.structSpec);
          const result = this.impl.setCreateImageMode(params.enabled, params.image_present);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(composebox.mojom.PageHandler_HandleLensButtonClick_ParamsSpec.$.structSpec);
          const result = this.impl.handleLensButtonClick();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(composebox.mojom.PageHandler_HandleFileUpload_ParamsSpec.$.structSpec);
          const result = this.impl.handleFileUpload(params.is_image);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(composebox.mojom.PageHandler_NavigateUrl_ParamsSpec.$.structSpec);
          const result = this.impl.navigateUrl(params.url);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

composebox.mojom.PageHandlerReceiver = composebox.mojom.PageHandlerReceiver;

composebox.mojom.PageHandlerPtr = composebox.mojom.PageHandlerRemote;
composebox.mojom.PageHandlerRequest = composebox.mojom.PageHandlerPendingReceiver;


// Interface: Page
composebox.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

composebox.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'composebox.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      composebox.mojom.PagePendingReceiver,
      handle);
    this.$ = new composebox.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

composebox.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
    ]);
  }

};

composebox.mojom.Page.getRemote = function() {
  let remote = new composebox.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'composebox.mojom.Page',
    'context');
  return remote.$;
};

composebox.mojom.PageReceiver = class {
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
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

composebox.mojom.PageReceiver = composebox.mojom.PageReceiver;

composebox.mojom.PagePtr = composebox.mojom.PageRemote;
composebox.mojom.PageRequest = composebox.mojom.PagePendingReceiver;

