// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/files/mojom/google_drive_handler.mojom
// Module: ash.settings.google_drive.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.settings.google_drive = ash.settings.settings.google_drive || {};
ash.settings.settings.google_drive.google_drive.mojom = ash.settings.settings.google_drive.google_drive.mojom || {};


// Struct: Status
ash.settings.settings.google_drive.google_drive.mojom.mojom.StatusSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.google_drive.mojom.Status',
      packedSize: 40,
      fields: [
        { name: 'required_space', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'free_space', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'stage', packedOffset: 24, packedBitOffset: 0, type: drivefs.pinning_manager_types.mojom.StageSpec, nullable: false, minVersion: 0 },
        { name: 'listed_files', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'is_error', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: PageHandlerFactory
ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerFactory = {};

ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.settings.google_drive.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.google_drive.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.google_drive.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerFactoryPtr = ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerFactoryRemote;
ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerFactoryRequest = ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandler = {};

ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.google_drive.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  calculateRequiredSpace() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandler_CalculateRequiredSpace_ParamsSpec,
      null,
      []);
  }

  getContentCacheSize() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandler_GetContentCacheSize_ParamsSpec,
      ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandler_GetContentCacheSize_ResponseParamsSpec,
      []);
  }

  clearPinnedFiles() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandler_ClearPinnedFiles_ParamsSpec,
      null,
      []);
  }

  recordBulkPinningEnabledMetric() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandler_RecordBulkPinningEnabledMetric_ParamsSpec,
      null,
      []);
  }

};

ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.google_drive.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for CalculateRequiredSpace
ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandler_CalculateRequiredSpace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.google_drive.mojom.PageHandler.CalculateRequiredSpace_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetContentCacheSize
ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandler_GetContentCacheSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.google_drive.mojom.PageHandler.GetContentCacheSize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandler_GetContentCacheSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.google_drive.mojom.PageHandler.GetContentCacheSize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearPinnedFiles
ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandler_ClearPinnedFiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.google_drive.mojom.PageHandler.ClearPinnedFiles_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RecordBulkPinningEnabledMetric
ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandler_RecordBulkPinningEnabledMetric_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.google_drive.mojom.PageHandler.RecordBulkPinningEnabledMetric_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerPtr = ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerRemote;
ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerRequest = ash.settings.settings.google_drive.google_drive.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
ash.settings.settings.google_drive.google_drive.mojom.mojom.Page = {};

ash.settings.settings.google_drive.google_drive.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.google_drive.google_drive.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.settings.google_drive.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.google_drive.google_drive.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new ash.settings.settings.google_drive.google_drive.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.google_drive.google_drive.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onServiceUnavailable() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.google_drive.google_drive.mojom.mojom.Page_OnServiceUnavailable_ParamsSpec,
      null,
      []);
  }

  onProgress(status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.settings.google_drive.google_drive.mojom.mojom.Page_OnProgress_ParamsSpec,
      null,
      [status]);
  }

};

ash.settings.settings.google_drive.google_drive.mojom.mojom.Page.getRemote = function() {
  let remote = new ash.settings.settings.google_drive.google_drive.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.google_drive.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnServiceUnavailable
ash.settings.settings.google_drive.google_drive.mojom.mojom.Page_OnServiceUnavailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.google_drive.mojom.Page.OnServiceUnavailable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnProgress
ash.settings.settings.google_drive.google_drive.mojom.mojom.Page_OnProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.google_drive.mojom.Page.OnProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: ash.settings.google_drive.mojom.StatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.google_drive.google_drive.mojom.mojom.PagePtr = ash.settings.settings.google_drive.google_drive.mojom.mojom.PageRemote;
ash.settings.settings.google_drive.google_drive.mojom.mojom.PageRequest = ash.settings.settings.google_drive.google_drive.mojom.mojom.PagePendingReceiver;

