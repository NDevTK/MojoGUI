// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/access_code_cast/access_code_cast.mojom
// Module: access_code_cast.mojom

'use strict';

// Module namespace
var access_code_cast = access_code_cast || {};
access_code_cast.mojom = access_code_cast.mojom || {};


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
access_code_cast.mojom.PageHandlerFactory = {};

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
      null,
      [page, handler],
      undefined,
      undefined
    );
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

// ParamsSpec for CreatePageHandler
access_code_cast.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'access_code_cast.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
access_code_cast.mojom.PageHandlerFactoryPtr = access_code_cast.mojom.PageHandlerFactoryRemote;
access_code_cast.mojom.PageHandlerFactoryRequest = access_code_cast.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
access_code_cast.mojom.PageHandler = {};

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
      access_code_cast.mojom.PageHandler_AddSink_ResponseParamsSpec,
      [access_code, discovery_method],
      undefined,
      undefined
    );
  }

  castToSink() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      access_code_cast.mojom.PageHandler_CastToSink_ParamsSpec,
      access_code_cast.mojom.PageHandler_CastToSink_ResponseParamsSpec,
      access_code_cast.mojom.PageHandler_CastToSink_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
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

// ParamsSpec for AddSink
access_code_cast.mojom.PageHandler_AddSink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'access_code_cast.mojom.PageHandler.AddSink_Params',
      packedSize: 24,
      fields: [
        { name: 'access_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'discovery_method', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

access_code_cast.mojom.PageHandler_AddSink_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'access_code_cast.mojom.PageHandler.AddSink_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CastToSink
access_code_cast.mojom.PageHandler_CastToSink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'access_code_cast.mojom.PageHandler.CastToSink_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

access_code_cast.mojom.PageHandler_CastToSink_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'access_code_cast.mojom.PageHandler.CastToSink_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
access_code_cast.mojom.PageHandlerPtr = access_code_cast.mojom.PageHandlerRemote;
access_code_cast.mojom.PageHandlerRequest = access_code_cast.mojom.PageHandlerPendingReceiver;


// Interface: Page
access_code_cast.mojom.Page = {};

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

// Legacy compatibility
access_code_cast.mojom.PagePtr = access_code_cast.mojom.PageRemote;
access_code_cast.mojom.PageRequest = access_code_cast.mojom.PagePendingReceiver;

