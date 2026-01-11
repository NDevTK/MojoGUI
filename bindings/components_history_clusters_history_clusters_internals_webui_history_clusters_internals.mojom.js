// Auto-generated MojoJS binding
// Source: chromium_src/components/history_clusters/history_clusters_internals/webui/history_clusters_internals.mojom
// Module: history_clusters_internals.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var history_clusters_internals = history_clusters_internals || {};
history_clusters_internals.mojom = history_clusters_internals.mojom || {};

history_clusters_internals.mojom.PageHandlerFactory = {};
history_clusters_internals.mojom.PageHandlerFactory.$interfaceName = 'history_clusters_internals.mojom.PageHandlerFactory';
history_clusters_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
history_clusters_internals.mojom.PageHandler = {};
history_clusters_internals.mojom.PageHandler.$interfaceName = 'history_clusters_internals.mojom.PageHandler';
history_clusters_internals.mojom.PageHandler_GetContextClustersJson_ParamsSpec = { $: {} };
history_clusters_internals.mojom.PageHandler_GetContextClustersJson_ResponseParamsSpec = { $: {} };
history_clusters_internals.mojom.PageHandler_PrintKeywordBagStateToLogMessages_ParamsSpec = { $: {} };
history_clusters_internals.mojom.Page = {};
history_clusters_internals.mojom.Page.$interfaceName = 'history_clusters_internals.mojom.Page';
history_clusters_internals.mojom.Page_OnLogMessageAdded_ParamsSpec = { $: {} };

// Interface: PageHandlerFactory
mojo.internal.Struct(
    history_clusters_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'history_clusters_internals.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(history_clusters_internals.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('page_handler', 8, 0, mojo.internal.InterfaceRequest(history_clusters_internals.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

history_clusters_internals.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history_clusters_internals.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'history_clusters_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history_clusters_internals.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new history_clusters_internals.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(page, page_handler) {
    return this.$.createPageHandler(page, page_handler);
  }
};

history_clusters_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, page_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      history_clusters_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, page_handler],
      false);
  }

};

history_clusters_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new history_clusters_internals.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_clusters_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

history_clusters_internals.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(history_clusters_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.page_handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

history_clusters_internals.mojom.PageHandlerFactoryReceiver = history_clusters_internals.mojom.PageHandlerFactoryReceiver;

history_clusters_internals.mojom.PageHandlerFactoryPtr = history_clusters_internals.mojom.PageHandlerFactoryRemote;
history_clusters_internals.mojom.PageHandlerFactoryRequest = history_clusters_internals.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    history_clusters_internals.mojom.PageHandler_GetContextClustersJson_ParamsSpec, 'history_clusters_internals.mojom.PageHandler_GetContextClustersJson_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history_clusters_internals.mojom.PageHandler_GetContextClustersJson_ResponseParamsSpec, 'history_clusters_internals.mojom.PageHandler_GetContextClustersJson_ResponseParams', [
      mojo.internal.StructField('context_clusters_json', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history_clusters_internals.mojom.PageHandler_PrintKeywordBagStateToLogMessages_ParamsSpec, 'history_clusters_internals.mojom.PageHandler_PrintKeywordBagStateToLogMessages_Params', [
    ],
    [[0, 8]]);

history_clusters_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history_clusters_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'history_clusters_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history_clusters_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new history_clusters_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getContextClustersJson() {
    return this.$.getContextClustersJson();
  }
  printKeywordBagStateToLogMessages() {
    return this.$.printKeywordBagStateToLogMessages();
  }
};

history_clusters_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getContextClustersJson() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      history_clusters_internals.mojom.PageHandler_GetContextClustersJson_ParamsSpec,
      history_clusters_internals.mojom.PageHandler_GetContextClustersJson_ResponseParamsSpec,
      [],
      false);
  }

  printKeywordBagStateToLogMessages() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      history_clusters_internals.mojom.PageHandler_PrintKeywordBagStateToLogMessages_ParamsSpec,
      null,
      [],
      false);
  }

};

history_clusters_internals.mojom.PageHandler.getRemote = function() {
  let remote = new history_clusters_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_clusters_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

history_clusters_internals.mojom.PageHandlerReceiver = class {
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
             decoder.decodeStructInline(history_clusters_internals.mojom.PageHandler_GetContextClustersJson_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_clusters_internals.mojom.PageHandler_PrintKeywordBagStateToLogMessages_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters_internals.mojom.PageHandler_GetContextClustersJson_ParamsSpec.$.structSpec);
          const result = this.impl.getContextClustersJson();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, history_clusters_internals.mojom.PageHandler_GetContextClustersJson_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters_internals.mojom.PageHandler_PrintKeywordBagStateToLogMessages_ParamsSpec.$.structSpec);
          const result = this.impl.printKeywordBagStateToLogMessages();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

history_clusters_internals.mojom.PageHandlerReceiver = history_clusters_internals.mojom.PageHandlerReceiver;

history_clusters_internals.mojom.PageHandlerPtr = history_clusters_internals.mojom.PageHandlerRemote;
history_clusters_internals.mojom.PageHandlerRequest = history_clusters_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    history_clusters_internals.mojom.Page_OnLogMessageAdded_ParamsSpec, 'history_clusters_internals.mojom.Page_OnLogMessageAdded_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

history_clusters_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history_clusters_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'history_clusters_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history_clusters_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new history_clusters_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onLogMessageAdded(message) {
    return this.$.onLogMessageAdded(message);
  }
};

history_clusters_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
    ]);
  }

  onLogMessageAdded(message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      history_clusters_internals.mojom.Page_OnLogMessageAdded_ParamsSpec,
      null,
      [message],
      false);
  }

};

history_clusters_internals.mojom.Page.getRemote = function() {
  let remote = new history_clusters_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_clusters_internals.mojom.Page',
    'context');
  return remote.$;
};

history_clusters_internals.mojom.PageReceiver = class {
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
             decoder.decodeStructInline(history_clusters_internals.mojom.Page_OnLogMessageAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_clusters_internals.mojom.Page_OnLogMessageAdded_ParamsSpec.$.structSpec);
          const result = this.impl.onLogMessageAdded(params.message);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

history_clusters_internals.mojom.PageReceiver = history_clusters_internals.mojom.PageReceiver;

history_clusters_internals.mojom.PagePtr = history_clusters_internals.mojom.PageRemote;
history_clusters_internals.mojom.PageRequest = history_clusters_internals.mojom.PagePendingReceiver;

