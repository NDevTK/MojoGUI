// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/access_code_cast/access_code_cast.mojom
// Module: access_code_cast.mojom

'use strict';

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
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(access_code_cast.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(access_code_cast.mojom.PageHandlerSpec), null, false, 0, undefined),
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
};

access_code_cast.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = access_code_cast.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
    });
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
};

access_code_cast.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addSink(access_code, discovery_method) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      access_code_cast.mojom.PageHandler_AddSink_ParamsSpec,
      access_code_cast.mojom.PageHandler_AddSink_ResponseParamsSpec,
      [access_code, discovery_method],
      false);
  }

  castToSink() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = access_code_cast.mojom.PageHandler_AddSink_ParamsSpec.$.decode(message.payload);
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
          const params = access_code_cast.mojom.PageHandler_CastToSink_ParamsSpec.$.decode(message.payload);
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
    });
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
      }
    });
  }
};

access_code_cast.mojom.PageReceiver = access_code_cast.mojom.PageReceiver;

access_code_cast.mojom.PagePtr = access_code_cast.mojom.PageRemote;
access_code_cast.mojom.PageRequest = access_code_cast.mojom.PagePendingReceiver;

