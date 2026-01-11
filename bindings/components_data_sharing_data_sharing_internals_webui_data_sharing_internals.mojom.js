// Auto-generated MojoJS binding
// Source: chromium_src/components/data_sharing/data_sharing_internals/webui/data_sharing_internals.mojom
// Module: data_sharing_internals.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var data_sharing_internals = data_sharing_internals || {};
data_sharing_internals.mojom = data_sharing_internals.mojom || {};
var data_sharing = data_sharing || {};
var logger_common = logger_common || {};
var mojo_base = mojo_base || {};

data_sharing_internals.mojom.PageHandlerFactory = {};
data_sharing_internals.mojom.PageHandlerFactory.$interfaceName = 'data_sharing_internals.mojom.PageHandlerFactory';
data_sharing_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
data_sharing_internals.mojom.PageHandler = {};
data_sharing_internals.mojom.PageHandler.$interfaceName = 'data_sharing_internals.mojom.PageHandler';
data_sharing_internals.mojom.PageHandler_IsEmptyService_ParamsSpec = { $: {} };
data_sharing_internals.mojom.PageHandler_IsEmptyService_ResponseParamsSpec = { $: {} };
data_sharing_internals.mojom.PageHandler_GetAllGroups_ParamsSpec = { $: {} };
data_sharing_internals.mojom.PageHandler_GetAllGroups_ResponseParamsSpec = { $: {} };
data_sharing_internals.mojom.Page = {};
data_sharing_internals.mojom.Page.$interfaceName = 'data_sharing_internals.mojom.Page';
data_sharing_internals.mojom.Page_OnLogMessageAdded_ParamsSpec = { $: {} };

// Interface: PageHandlerFactory
mojo.internal.Struct(
    data_sharing_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'data_sharing_internals.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(data_sharing_internals.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(data_sharing_internals.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

data_sharing_internals.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_sharing_internals.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'data_sharing_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_sharing_internals.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new data_sharing_internals.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
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

data_sharing_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      data_sharing_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

data_sharing_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new data_sharing_internals.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_sharing_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

data_sharing_internals.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(data_sharing_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_sharing_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

data_sharing_internals.mojom.PageHandlerFactoryReceiver = data_sharing_internals.mojom.PageHandlerFactoryReceiver;

data_sharing_internals.mojom.PageHandlerFactoryPtr = data_sharing_internals.mojom.PageHandlerFactoryRemote;
data_sharing_internals.mojom.PageHandlerFactoryRequest = data_sharing_internals.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    data_sharing_internals.mojom.PageHandler_IsEmptyService_ParamsSpec, 'data_sharing_internals.mojom.PageHandler_IsEmptyService_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    data_sharing_internals.mojom.PageHandler_IsEmptyService_ResponseParamsSpec, 'data_sharing_internals.mojom.PageHandler_IsEmptyService_ResponseParams', [
      mojo.internal.StructField('is_empty', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_sharing_internals.mojom.PageHandler_GetAllGroups_ParamsSpec, 'data_sharing_internals.mojom.PageHandler_GetAllGroups_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    data_sharing_internals.mojom.PageHandler_GetAllGroups_ResponseParamsSpec, 'data_sharing_internals.mojom.PageHandler_GetAllGroups_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(data_sharing.mojom.GroupDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('is_success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

data_sharing_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_sharing_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'data_sharing_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_sharing_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new data_sharing_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  isEmptyService() {
    return this.$.isEmptyService();
  }
  getAllGroups() {
    return this.$.getAllGroups();
  }
};

data_sharing_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  isEmptyService() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      data_sharing_internals.mojom.PageHandler_IsEmptyService_ParamsSpec,
      data_sharing_internals.mojom.PageHandler_IsEmptyService_ResponseParamsSpec,
      [],
      false);
  }

  getAllGroups() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      data_sharing_internals.mojom.PageHandler_GetAllGroups_ParamsSpec,
      data_sharing_internals.mojom.PageHandler_GetAllGroups_ResponseParamsSpec,
      [],
      false);
  }

};

data_sharing_internals.mojom.PageHandler.getRemote = function() {
  let remote = new data_sharing_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_sharing_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

data_sharing_internals.mojom.PageHandlerReceiver = class {
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
             decoder.decodeStructInline(data_sharing_internals.mojom.PageHandler_IsEmptyService_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_sharing_internals.mojom.PageHandler_GetAllGroups_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_sharing_internals.mojom.PageHandler_IsEmptyService_ParamsSpec.$.structSpec);
          const result = this.impl.isEmptyService();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_sharing_internals.mojom.PageHandler_IsEmptyService_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_sharing_internals.mojom.PageHandler_GetAllGroups_ParamsSpec.$.structSpec);
          const result = this.impl.getAllGroups();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_sharing_internals.mojom.PageHandler_GetAllGroups_ResponseParamsSpec);
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

data_sharing_internals.mojom.PageHandlerReceiver = data_sharing_internals.mojom.PageHandlerReceiver;

data_sharing_internals.mojom.PageHandlerPtr = data_sharing_internals.mojom.PageHandlerRemote;
data_sharing_internals.mojom.PageHandlerRequest = data_sharing_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    data_sharing_internals.mojom.Page_OnLogMessageAdded_ParamsSpec, 'data_sharing_internals.mojom.Page_OnLogMessageAdded_Params', [
      mojo.internal.StructField('event_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('log_source', 8, 0, logger_common.mojom.LogSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_file', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_line', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

data_sharing_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_sharing_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'data_sharing_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_sharing_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new data_sharing_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onLogMessageAdded(event_time, log_source, source_file, source_line, message) {
    return this.$.onLogMessageAdded(event_time, log_source, source_file, source_line, message);
  }
};

data_sharing_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
    ]);
  }

  onLogMessageAdded(event_time, log_source, source_file, source_line, message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      data_sharing_internals.mojom.Page_OnLogMessageAdded_ParamsSpec,
      null,
      [event_time, log_source, source_file, source_line, message],
      false);
  }

};

data_sharing_internals.mojom.Page.getRemote = function() {
  let remote = new data_sharing_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_sharing_internals.mojom.Page',
    'context');
  return remote.$;
};

data_sharing_internals.mojom.PageReceiver = class {
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_sharing_internals.mojom.Page_OnLogMessageAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_sharing_internals.mojom.Page_OnLogMessageAdded_ParamsSpec.$.structSpec);
          const result = this.impl.onLogMessageAdded(params.event_time, params.log_source, params.source_file, params.source_line, params.message);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

data_sharing_internals.mojom.PageReceiver = data_sharing_internals.mojom.PageReceiver;

data_sharing_internals.mojom.PagePtr = data_sharing_internals.mojom.PageRemote;
data_sharing_internals.mojom.PageRequest = data_sharing_internals.mojom.PagePendingReceiver;

