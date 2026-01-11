// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/access_code_cast/access_code_cast.mojom
// Module: access_code_cast.mojom

// Module namespace
var access_code_cast = access_code_cast || {};
access_code_cast.mojom = access_code_cast.mojom || {};
var media_router = media_router || {};

access_code_cast.mojom.AddSinkResultCodeSpec = { $: mojo.internal.Enum() };
access_code_cast.mojom.CastDiscoveryMethodSpec = { $: mojo.internal.Enum() };
access_code_cast.mojom.PageHandlerFactory = {};
access_code_cast.mojom.PageHandlerFactory.$interfaceName = 'access_code_cast.mojom.PageHandlerFactory';
access_code_cast.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
access_code_cast.mojom.PageHandler = {};
access_code_cast.mojom.PageHandler.$interfaceName = 'access_code_cast.mojom.PageHandler';
access_code_cast.mojom.PageHandler_AddSink_ParamsSpec = { $: {} };
access_code_cast.mojom.PageHandler_AddSink_ResponseParamsSpec = { $: {} };
access_code_cast.mojom.PageHandler_CastToSink_ParamsSpec = { $: {} };
access_code_cast.mojom.PageHandler_CastToSink_ResponseParamsSpec = { $: {} };
access_code_cast.mojom.Page = {};
access_code_cast.mojom.Page.$interfaceName = 'access_code_cast.mojom.Page';

// Enum: AddSinkResultCode
access_code_cast.mojom.AddSinkResultCode = {
  UNKNOWN_ERROR: 0,
  OK: 1,
  AUTH_ERROR: 2,
  HTTP_RESPONSE_CODE_ERROR: 3,
  RESPONSE_MALFORMED: 4,
  EMPTY_RESPONSE: 5,
  INVALID_ACCESS_CODE: 6,
  ACCESS_CODE_NOT_FOUND: 7,
  TOO_MANY_REQUESTS: 8,
  SERVICE_NOT_PRESENT: 9,
  SERVER_ERROR: 10,
  SINK_CREATION_ERROR: 11,
  CHANNEL_OPEN_ERROR: 12,
  PROFILE_SYNC_ERROR: 13,
  INTERNAL_MEDIA_ROUTER_ERROR: 14,
};

// Enum: CastDiscoveryMethod
access_code_cast.mojom.CastDiscoveryMethod = {
  QR_CODE: 0,
  INPUT_ACCESS_CODE: 1,
};

// Interface: PageHandlerFactory
mojo.internal.Struct(
    access_code_cast.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'access_code_cast.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(access_code_cast.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(access_code_cast.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

access_code_cast.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

access_code_cast.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'access_code_cast.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      access_code_cast.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new access_code_cast.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
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

access_code_cast.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      access_code_cast.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

access_code_cast.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new access_code_cast.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'access_code_cast.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

access_code_cast.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(access_code_cast.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(access_code_cast.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

access_code_cast.mojom.PageHandlerFactoryReceiver = access_code_cast.mojom.PageHandlerFactoryReceiver;

access_code_cast.mojom.PageHandlerFactoryPtr = access_code_cast.mojom.PageHandlerFactoryRemote;
access_code_cast.mojom.PageHandlerFactoryRequest = access_code_cast.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    access_code_cast.mojom.PageHandler_AddSink_ParamsSpec, 'access_code_cast.mojom.PageHandler_AddSink_Params', [
      mojo.internal.StructField('access_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('discovery_method', 8, 0, access_code_cast.mojom.CastDiscoveryMethodSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    access_code_cast.mojom.PageHandler_AddSink_ResponseParamsSpec, 'access_code_cast.mojom.PageHandler_AddSink_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, access_code_cast.mojom.AddSinkResultCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    access_code_cast.mojom.PageHandler_CastToSink_ParamsSpec, 'access_code_cast.mojom.PageHandler_CastToSink_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    access_code_cast.mojom.PageHandler_CastToSink_ResponseParamsSpec, 'access_code_cast.mojom.PageHandler_CastToSink_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, media_router.mojom.RouteRequestResultCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

access_code_cast.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

access_code_cast.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'access_code_cast.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      access_code_cast.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new access_code_cast.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addSink(access_code, discovery_method) {
    return this.$.addSink(access_code, discovery_method);
  }
  castToSink() {
    return this.$.castToSink();
  }
};

access_code_cast.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  addSink(access_code, discovery_method) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      access_code_cast.mojom.PageHandler_AddSink_ParamsSpec,
      access_code_cast.mojom.PageHandler_AddSink_ResponseParamsSpec,
      [access_code, discovery_method],
      false);
  }

  castToSink() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      access_code_cast.mojom.PageHandler_CastToSink_ParamsSpec,
      access_code_cast.mojom.PageHandler_CastToSink_ResponseParamsSpec,
      [],
      false);
  }

};

access_code_cast.mojom.PageHandler.getRemote = function() {
  let remote = new access_code_cast.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'access_code_cast.mojom.PageHandler',
    'context');
  return remote.$;
};

access_code_cast.mojom.PageHandlerReceiver = class {
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
             decoder.decodeStructInline(access_code_cast.mojom.PageHandler_AddSink_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(access_code_cast.mojom.PageHandler_CastToSink_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(access_code_cast.mojom.PageHandler_AddSink_ParamsSpec.$.structSpec);
          const result = this.impl.addSink(params.access_code, params.discovery_method);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, access_code_cast.mojom.PageHandler_AddSink_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(access_code_cast.mojom.PageHandler_CastToSink_ParamsSpec.$.structSpec);
          const result = this.impl.castToSink();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, access_code_cast.mojom.PageHandler_CastToSink_ResponseParamsSpec);
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

access_code_cast.mojom.PageHandlerReceiver = access_code_cast.mojom.PageHandlerReceiver;

access_code_cast.mojom.PageHandlerPtr = access_code_cast.mojom.PageHandlerRemote;
access_code_cast.mojom.PageHandlerRequest = access_code_cast.mojom.PageHandlerPendingReceiver;


// Interface: Page
access_code_cast.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

access_code_cast.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'access_code_cast.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      access_code_cast.mojom.PagePendingReceiver,
      handle);
    this.$ = new access_code_cast.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

access_code_cast.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
    ]);
  }

};

access_code_cast.mojom.Page.getRemote = function() {
  let remote = new access_code_cast.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'access_code_cast.mojom.Page',
    'context');
  return remote.$;
};

access_code_cast.mojom.PageReceiver = class {
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

access_code_cast.mojom.PageReceiver = access_code_cast.mojom.PageReceiver;

access_code_cast.mojom.PagePtr = access_code_cast.mojom.PageRemote;
access_code_cast.mojom.PageRequest = access_code_cast.mojom.PagePendingReceiver;

