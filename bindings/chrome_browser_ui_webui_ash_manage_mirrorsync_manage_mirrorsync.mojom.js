// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/manage_mirrorsync/manage_mirrorsync.mojom
// Module: ash.manage_mirrorsync.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.manage_mirrorsync = ash.manage_mirrorsync || {};
ash.manage_mirrorsync.mojom = ash.manage_mirrorsync.mojom || {};
var mojo_base = mojo_base || {};

ash.manage_mirrorsync.mojom.GetSyncPathErrorSpec = { $: mojo.internal.Enum() };
ash.manage_mirrorsync.mojom.PageHandlerFactory = {};
ash.manage_mirrorsync.mojom.PageHandlerFactory.$interfaceName = 'ash.manage_mirrorsync.mojom.PageHandlerFactory';
ash.manage_mirrorsync.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.manage_mirrorsync.mojom.PageHandler = {};
ash.manage_mirrorsync.mojom.PageHandler.$interfaceName = 'ash.manage_mirrorsync.mojom.PageHandler';
ash.manage_mirrorsync.mojom.PageHandler_GetChildFolders_ParamsSpec = { $: {} };
ash.manage_mirrorsync.mojom.PageHandler_GetChildFolders_ResponseParamsSpec = { $: {} };
ash.manage_mirrorsync.mojom.PageHandler_GetSyncingPaths_ParamsSpec = { $: {} };
ash.manage_mirrorsync.mojom.PageHandler_GetSyncingPaths_ResponseParamsSpec = { $: {} };

// Enum: GetSyncPathError
ash.manage_mirrorsync.mojom.GetSyncPathError = {
  kServiceUnavailable: 0,
  kSuccess: 1,
  kFailed: 2,
};

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.manage_mirrorsync.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.manage_mirrorsync.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.manage_mirrorsync.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.manage_mirrorsync.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.manage_mirrorsync.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.manage_mirrorsync.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.manage_mirrorsync.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.manage_mirrorsync.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.manage_mirrorsync.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.manage_mirrorsync.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler],
      false);
  }

};

ash.manage_mirrorsync.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.manage_mirrorsync.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.manage_mirrorsync.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

ash.manage_mirrorsync.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.manage_mirrorsync.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
    }});
  }
};

ash.manage_mirrorsync.mojom.PageHandlerFactoryReceiver = ash.manage_mirrorsync.mojom.PageHandlerFactoryReceiver;

ash.manage_mirrorsync.mojom.PageHandlerFactoryPtr = ash.manage_mirrorsync.mojom.PageHandlerFactoryRemote;
ash.manage_mirrorsync.mojom.PageHandlerFactoryRequest = ash.manage_mirrorsync.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.manage_mirrorsync.mojom.PageHandler_GetChildFolders_ParamsSpec, 'ash.manage_mirrorsync.mojom.PageHandler_GetChildFolders_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.manage_mirrorsync.mojom.PageHandler_GetChildFolders_ResponseParamsSpec, 'ash.manage_mirrorsync.mojom.PageHandler_GetChildFolders_ResponseParams', [
      mojo.internal.StructField('paths', 0, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.manage_mirrorsync.mojom.PageHandler_GetSyncingPaths_ParamsSpec, 'ash.manage_mirrorsync.mojom.PageHandler_GetSyncingPaths_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.manage_mirrorsync.mojom.PageHandler_GetSyncingPaths_ResponseParamsSpec, 'ash.manage_mirrorsync.mojom.PageHandler_GetSyncingPaths_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, ash.manage_mirrorsync.mojom.GetSyncPathErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('syncing_paths', 8, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.manage_mirrorsync.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.manage_mirrorsync.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.manage_mirrorsync.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.manage_mirrorsync.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.manage_mirrorsync.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.manage_mirrorsync.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getChildFolders(path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.manage_mirrorsync.mojom.PageHandler_GetChildFolders_ParamsSpec,
      ash.manage_mirrorsync.mojom.PageHandler_GetChildFolders_ResponseParamsSpec,
      [path],
      false);
  }

  getSyncingPaths() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.manage_mirrorsync.mojom.PageHandler_GetSyncingPaths_ParamsSpec,
      ash.manage_mirrorsync.mojom.PageHandler_GetSyncingPaths_ResponseParamsSpec,
      [],
      false);
  }

};

ash.manage_mirrorsync.mojom.PageHandler.getRemote = function() {
  let remote = new ash.manage_mirrorsync.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.manage_mirrorsync.mojom.PageHandler',
    'context');
  return remote.$;
};

ash.manage_mirrorsync.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.manage_mirrorsync.mojom.PageHandler_GetChildFolders_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getChildFolders(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.manage_mirrorsync.mojom.PageHandler_GetChildFolders_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.manage_mirrorsync.mojom.PageHandler_GetSyncingPaths_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getSyncingPaths();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.manage_mirrorsync.mojom.PageHandler_GetSyncingPaths_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

ash.manage_mirrorsync.mojom.PageHandlerReceiver = ash.manage_mirrorsync.mojom.PageHandlerReceiver;

ash.manage_mirrorsync.mojom.PageHandlerPtr = ash.manage_mirrorsync.mojom.PageHandlerRemote;
ash.manage_mirrorsync.mojom.PageHandlerRequest = ash.manage_mirrorsync.mojom.PageHandlerPendingReceiver;

