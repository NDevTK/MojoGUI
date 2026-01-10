// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/manage_mirrorsync/manage_mirrorsync.mojom
// Module: ash.manage_mirrorsync.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.manage_mirrorsync = ash.manage_mirrorsync || {};
ash.manage_mirrorsync.mojom = ash.manage_mirrorsync.mojom || {};

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
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.manage_mirrorsync.mojom.PageHandlerRemote), null, false, 0, undefined),
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
      [handler]);
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

ash.manage_mirrorsync.mojom.PageHandlerFactoryPtr = ash.manage_mirrorsync.mojom.PageHandlerFactoryRemote;
ash.manage_mirrorsync.mojom.PageHandlerFactoryRequest = ash.manage_mirrorsync.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.manage_mirrorsync.mojom.PageHandler_GetChildFolders_ParamsSpec, 'ash.manage_mirrorsync.mojom.PageHandler_GetChildFolders_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.manage_mirrorsync.mojom.PageHandler_GetChildFolders_ResponseParamsSpec, 'ash.manage_mirrorsync.mojom.PageHandler_GetChildFolders_ResponseParams', [
      mojo.internal.StructField('paths', 0, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.manage_mirrorsync.mojom.PageHandler_GetSyncingPaths_ParamsSpec, 'ash.manage_mirrorsync.mojom.PageHandler_GetSyncingPaths_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ash.manage_mirrorsync.mojom.PageHandler_GetSyncingPaths_ResponseParamsSpec, 'ash.manage_mirrorsync.mojom.PageHandler_GetSyncingPaths_ResponseParams', [
      mojo.internal.StructField('error', 8, 0, ash.manage_mirrorsync.mojom.GetSyncPathErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('syncing_paths', 0, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), null, false, 0, undefined),
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
      [path]);
  }

  getSyncingPaths() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.manage_mirrorsync.mojom.PageHandler_GetSyncingPaths_ParamsSpec,
      ash.manage_mirrorsync.mojom.PageHandler_GetSyncingPaths_ResponseParamsSpec,
      []);
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

ash.manage_mirrorsync.mojom.PageHandlerPtr = ash.manage_mirrorsync.mojom.PageHandlerRemote;
ash.manage_mirrorsync.mojom.PageHandlerRequest = ash.manage_mirrorsync.mojom.PageHandlerPendingReceiver;

