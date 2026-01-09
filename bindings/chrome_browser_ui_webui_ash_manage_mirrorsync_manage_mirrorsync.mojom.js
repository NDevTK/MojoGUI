// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/manage_mirrorsync/manage_mirrorsync.mojom
// Module: ash.manage_mirrorsync.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.manage_mirrorsync = ash.manage_mirrorsync || {};
ash.manage_mirrorsync.mojom = ash.manage_mirrorsync.mojom || {};


// Enum: GetSyncPathError
ash.manage_mirrorsync.mojom.GetSyncPathError = {
  kServiceUnavailable: 0,
  kSuccess: 1,
  kFailed: 2,
};

// Interface: PageHandlerFactory
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
      ash.manage_mirrorsync.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$,
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

// ParamsSpec for CreatePageHandler
ash.manage_mirrorsync.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.manage_mirrorsync.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.manage_mirrorsync.mojom.PageHandlerFactoryPtr = ash.manage_mirrorsync.mojom.PageHandlerFactoryRemote;
ash.manage_mirrorsync.mojom.PageHandlerFactoryRequest = ash.manage_mirrorsync.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
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
      ash.manage_mirrorsync.mojom.PageHandler_GetChildFolders_ParamsSpec.$,
      ash.manage_mirrorsync.mojom.PageHandler_GetChildFolders_ResponseParamsSpec.$,
      [path]);
  }

  getSyncingPaths() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.manage_mirrorsync.mojom.PageHandler_GetSyncingPaths_ParamsSpec.$,
      ash.manage_mirrorsync.mojom.PageHandler_GetSyncingPaths_ResponseParamsSpec.$,
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

// ParamsSpec for GetChildFolders
ash.manage_mirrorsync.mojom.PageHandler_GetChildFolders_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.manage_mirrorsync.mojom.PageHandler.GetChildFolders_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.manage_mirrorsync.mojom.PageHandler_GetChildFolders_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.manage_mirrorsync.mojom.PageHandler.GetChildFolders_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'paths', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSyncingPaths
ash.manage_mirrorsync.mojom.PageHandler_GetSyncingPaths_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.manage_mirrorsync.mojom.PageHandler.GetSyncingPaths_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.manage_mirrorsync.mojom.PageHandler_GetSyncingPaths_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.manage_mirrorsync.mojom.PageHandler.GetSyncingPaths_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'syncing_paths', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.manage_mirrorsync.mojom.PageHandlerPtr = ash.manage_mirrorsync.mojom.PageHandlerRemote;
ash.manage_mirrorsync.mojom.PageHandlerRequest = ash.manage_mirrorsync.mojom.PageHandlerPendingReceiver;

