// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/files/mojom/google_drive_handler.mojom
// Module: ash.settings.google_drive.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.google_drive = ash.settings.google_drive || {};
ash.settings.google_drive.mojom = ash.settings.google_drive.mojom || {};


// Struct: Status
ash.settings.google_drive.mojom.StatusSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.google_drive.mojom.Status',
      packedSize: 16,
      fields: [
        { name: 'is_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageHandlerFactory
ash.settings.google_drive.mojom.PageHandlerFactory = {};

ash.settings.google_drive.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.google_drive.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.settings.google_drive.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.google_drive.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.settings.google_drive.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.google_drive.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.google_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

ash.settings.google_drive.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.settings.google_drive.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.google_drive.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
ash.settings.google_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.google_drive.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.google_drive.mojom.PageHandlerFactoryPtr = ash.settings.google_drive.mojom.PageHandlerFactoryRemote;
ash.settings.google_drive.mojom.PageHandlerFactoryRequest = ash.settings.google_drive.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
ash.settings.google_drive.mojom.PageHandler = {};

ash.settings.google_drive.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.google_drive.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.google_drive.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.google_drive.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.google_drive.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.google_drive.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  calculateRequiredSpace() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.google_drive.mojom.PageHandler_CalculateRequiredSpace_ParamsSpec,
      null,
      []);
  }

  getContentCacheSize() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ParamsSpec,
      ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ResponseParamsSpec,
      []);
  }

  clearPinnedFiles() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_ParamsSpec,
      null,
      []);
  }

  recordBulkPinningEnabledMetric() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.google_drive.mojom.PageHandler_RecordBulkPinningEnabledMetric_ParamsSpec,
      null,
      []);
  }

};

ash.settings.google_drive.mojom.PageHandler.getRemote = function() {
  let remote = new ash.settings.google_drive.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.google_drive.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for CalculateRequiredSpace
ash.settings.google_drive.mojom.PageHandler_CalculateRequiredSpace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.google_drive.mojom.PageHandler.CalculateRequiredSpace_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetContentCacheSize
ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.google_drive.mojom.PageHandler.GetContentCacheSize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.google_drive.mojom.PageHandler.GetContentCacheSize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearPinnedFiles
ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.google_drive.mojom.PageHandler.ClearPinnedFiles_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordBulkPinningEnabledMetric
ash.settings.google_drive.mojom.PageHandler_RecordBulkPinningEnabledMetric_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.google_drive.mojom.PageHandler.RecordBulkPinningEnabledMetric_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.google_drive.mojom.PageHandlerPtr = ash.settings.google_drive.mojom.PageHandlerRemote;
ash.settings.google_drive.mojom.PageHandlerRequest = ash.settings.google_drive.mojom.PageHandlerPendingReceiver;


// Interface: Page
ash.settings.google_drive.mojom.Page = {};

ash.settings.google_drive.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.google_drive.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.settings.google_drive.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.google_drive.mojom.PagePendingReceiver,
      handle);
    this.$ = new ash.settings.google_drive.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.google_drive.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onServiceUnavailable() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.google_drive.mojom.Page_OnServiceUnavailable_ParamsSpec,
      null,
      []);
  }

  onProgress(status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.google_drive.mojom.Page_OnProgress_ParamsSpec,
      null,
      [status]);
  }

};

ash.settings.google_drive.mojom.Page.getRemote = function() {
  let remote = new ash.settings.google_drive.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.google_drive.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnServiceUnavailable
ash.settings.google_drive.mojom.Page_OnServiceUnavailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.google_drive.mojom.Page.OnServiceUnavailable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnProgress
ash.settings.google_drive.mojom.Page_OnProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.google_drive.mojom.Page.OnProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.google_drive.mojom.PagePtr = ash.settings.google_drive.mojom.PageRemote;
ash.settings.google_drive.mojom.PageRequest = ash.settings.google_drive.mojom.PagePendingReceiver;

