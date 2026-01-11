// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/contextual_tasks/contextual_tasks_internals.mojom
// Module: contextual_tasks_internals.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var contextual_tasks_internals = contextual_tasks_internals || {};
contextual_tasks_internals.mojom = contextual_tasks_internals.mojom || {};
var contextual_tasks = contextual_tasks || {};
var mojo_base = mojo_base || {};
var url = url || {};

contextual_tasks_internals.mojom.GetRelevantContextRequestSpec = { $: {} };
contextual_tasks_internals.mojom.TabSpec = { $: {} };
contextual_tasks_internals.mojom.GetRelevantContextResponseSpec = { $: {} };
contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory = {};
contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory.$interfaceName = 'contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory';
contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler = {};
contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler.$interfaceName = 'contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler';
contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler_GetRelevantContext_ParamsSpec = { $: {} };
contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler_GetRelevantContext_ResponseParamsSpec = { $: {} };
contextual_tasks_internals.mojom.ContextualTasksInternalsPage = {};
contextual_tasks_internals.mojom.ContextualTasksInternalsPage.$interfaceName = 'contextual_tasks_internals.mojom.ContextualTasksInternalsPage';
contextual_tasks_internals.mojom.ContextualTasksInternalsPage_OnLogMessageAdded_ParamsSpec = { $: {} };

// Struct: GetRelevantContextRequest
mojo.internal.Struct(
    contextual_tasks_internals.mojom.GetRelevantContextRequestSpec, 'contextual_tasks_internals.mojom.GetRelevantContextRequest', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tab_selection_mode', 8, 0, contextual_tasks.mojom.TabSelectionModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('min_model_score', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Tab
mojo.internal.Struct(
    contextual_tasks_internals.mojom.TabSpec, 'contextual_tasks_internals.mojom.Tab', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GetRelevantContextResponse
mojo.internal.Struct(
    contextual_tasks_internals.mojom.GetRelevantContextResponseSpec, 'contextual_tasks_internals.mojom.GetRelevantContextResponse', [
      mojo.internal.StructField('relevant_tabs', 0, 0, mojo.internal.Array(contextual_tasks_internals.mojom.TabSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: ContextualTasksInternalsPageHandlerFactory
mojo.internal.Struct(
    contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory_CreatePageHandler_ParamsSpec, 'contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(contextual_tasks_internals.mojom.ContextualTasksInternalsPageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryRemoteCallHandler(this.proxy);
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

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ContextualTasksInternalsPageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory.getRemote = function() {
  let remote = new contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory',
    'context');
  return remote.$;
};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ContextualTasksInternalsPageHandlerFactory', [
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
             decoder.decodeStructInline(contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryReceiver = contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryReceiver;

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryPtr = contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryRemote;
contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryRequest = contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryPendingReceiver;


// Interface: ContextualTasksInternalsPageHandler
mojo.internal.Struct(
    contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler_GetRelevantContext_ParamsSpec, 'contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler_GetRelevantContext_Params', [
      mojo.internal.StructField('request', 0, 0, contextual_tasks_internals.mojom.GetRelevantContextRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler_GetRelevantContext_ResponseParamsSpec, 'contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler_GetRelevantContext_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, contextual_tasks_internals.mojom.GetRelevantContextResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerRemote = class {
  static get $interfaceName() {
    return 'contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerPendingReceiver,
      handle);
    this.$ = new contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getRelevantContext(request) {
    return this.$.getRelevantContext(request);
  }
};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ContextualTasksInternalsPageHandler', [
      { explicit: null },
    ]);
  }

  getRelevantContext(request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler_GetRelevantContext_ParamsSpec,
      contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler_GetRelevantContext_ResponseParamsSpec,
      [request],
      false);
  }

};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler.getRemote = function() {
  let remote = new contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler',
    'context');
  return remote.$;
};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ContextualTasksInternalsPageHandler', [
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
             decoder.decodeStructInline(contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler_GetRelevantContext_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler_GetRelevantContext_ParamsSpec.$.structSpec);
          const result = this.impl.getRelevantContext(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler_GetRelevantContext_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerReceiver = contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerReceiver;

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerPtr = contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerRemote;
contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerRequest = contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerPendingReceiver;


// Interface: ContextualTasksInternalsPage
mojo.internal.Struct(
    contextual_tasks_internals.mojom.ContextualTasksInternalsPage_OnLogMessageAdded_ParamsSpec, 'contextual_tasks_internals.mojom.ContextualTasksInternalsPage_OnLogMessageAdded_Params', [
      mojo.internal.StructField('event_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_file', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_line', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('message', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

contextual_tasks_internals.mojom.ContextualTasksInternalsPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageRemote = class {
  static get $interfaceName() {
    return 'contextual_tasks_internals.mojom.ContextualTasksInternalsPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      contextual_tasks_internals.mojom.ContextualTasksInternalsPagePendingReceiver,
      handle);
    this.$ = new contextual_tasks_internals.mojom.ContextualTasksInternalsPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onLogMessageAdded(event_time, source_file, source_line, message) {
    return this.$.onLogMessageAdded(event_time, source_file, source_line, message);
  }
};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ContextualTasksInternalsPage', [
      { explicit: null },
    ]);
  }

  onLogMessageAdded(event_time, source_file, source_line, message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      contextual_tasks_internals.mojom.ContextualTasksInternalsPage_OnLogMessageAdded_ParamsSpec,
      null,
      [event_time, source_file, source_line, message],
      false);
  }

};

contextual_tasks_internals.mojom.ContextualTasksInternalsPage.getRemote = function() {
  let remote = new contextual_tasks_internals.mojom.ContextualTasksInternalsPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'contextual_tasks_internals.mojom.ContextualTasksInternalsPage',
    'context');
  return remote.$;
};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ContextualTasksInternalsPage', [
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
             decoder.decodeStructInline(contextual_tasks_internals.mojom.ContextualTasksInternalsPage_OnLogMessageAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks_internals.mojom.ContextualTasksInternalsPage_OnLogMessageAdded_ParamsSpec.$.structSpec);
          const result = this.impl.onLogMessageAdded(params.event_time, params.source_file, params.source_line, params.message);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageReceiver = contextual_tasks_internals.mojom.ContextualTasksInternalsPageReceiver;

contextual_tasks_internals.mojom.ContextualTasksInternalsPagePtr = contextual_tasks_internals.mojom.ContextualTasksInternalsPageRemote;
contextual_tasks_internals.mojom.ContextualTasksInternalsPageRequest = contextual_tasks_internals.mojom.ContextualTasksInternalsPagePendingReceiver;

