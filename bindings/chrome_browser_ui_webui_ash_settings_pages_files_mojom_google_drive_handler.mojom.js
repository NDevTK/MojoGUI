// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/files/mojom/google_drive_handler.mojom
// Module: ash.settings.google_drive.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.google_drive = ash.settings.google_drive || {};
ash.settings.google_drive.mojom = ash.settings.google_drive.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var components = components || {};

ash.settings.google_drive.mojom.StatusSpec = { $: {} };
ash.settings.google_drive.mojom.PageHandlerFactory = {};
ash.settings.google_drive.mojom.PageHandlerFactory.$interfaceName = 'ash.settings.google_drive.mojom.PageHandlerFactory';
ash.settings.google_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.settings.google_drive.mojom.PageHandler = {};
ash.settings.google_drive.mojom.PageHandler.$interfaceName = 'ash.settings.google_drive.mojom.PageHandler';
ash.settings.google_drive.mojom.PageHandler_CalculateRequiredSpace_ParamsSpec = { $: {} };
ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ParamsSpec = { $: {} };
ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ResponseParamsSpec = { $: {} };
ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_ParamsSpec = { $: {} };
ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_ResponseParamsSpec = { $: {} };
ash.settings.google_drive.mojom.PageHandler_RecordBulkPinningEnabledMetric_ParamsSpec = { $: {} };
ash.settings.google_drive.mojom.Page = {};
ash.settings.google_drive.mojom.Page.$interfaceName = 'ash.settings.google_drive.mojom.Page';
ash.settings.google_drive.mojom.Page_OnServiceUnavailable_ParamsSpec = { $: {} };
ash.settings.google_drive.mojom.Page_OnProgress_ParamsSpec = { $: {} };

// Struct: Status
mojo.internal.Struct(
    ash.settings.google_drive.mojom.StatusSpec, 'ash.settings.google_drive.mojom.Status', [
      mojo.internal.StructField('required_space', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('free_space', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('stage', 16, 0, drivefs.pinning_manager_types.mojom.StageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('listed_files', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('is_error', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.settings.google_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.settings.google_drive.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(ash.settings.google_drive.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(ash.settings.google_drive.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [page, handler],
      false);
  }

};

ash.settings.google_drive.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.settings.google_drive.mojom.PageHandlerFactoryRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ash.settings.google_drive.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

ash.settings.google_drive.mojom.PageHandlerFactoryPtr = ash.settings.google_drive.mojom.PageHandlerFactoryRemote;
ash.settings.google_drive.mojom.PageHandlerFactoryRequest = ash.settings.google_drive.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.settings.google_drive.mojom.PageHandler_CalculateRequiredSpace_ParamsSpec, 'ash.settings.google_drive.mojom.PageHandler_CalculateRequiredSpace_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ParamsSpec, 'ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ResponseParamsSpec, 'ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ResponseParams', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_ParamsSpec, 'ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_ResponseParamsSpec, 'ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.google_drive.mojom.PageHandler_RecordBulkPinningEnabledMetric_ParamsSpec, 'ash.settings.google_drive.mojom.PageHandler_RecordBulkPinningEnabledMetric_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
  }

  getContentCacheSize() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ParamsSpec,
      ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ResponseParamsSpec,
      [],
      false);
  }

  clearPinnedFiles() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_ParamsSpec,
      ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_ResponseParamsSpec,
      [],
      false);
  }

  recordBulkPinningEnabledMetric() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.google_drive.mojom.PageHandler_RecordBulkPinningEnabledMetric_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.settings.google_drive.mojom.PageHandler.getRemote = function() {
  let remote = new ash.settings.google_drive.mojom.PageHandlerRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ash.settings.google_drive.mojom.PageHandler',
    'context');
  return remote.$;
};

ash.settings.google_drive.mojom.PageHandlerPtr = ash.settings.google_drive.mojom.PageHandlerRemote;
ash.settings.google_drive.mojom.PageHandlerRequest = ash.settings.google_drive.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    ash.settings.google_drive.mojom.Page_OnServiceUnavailable_ParamsSpec, 'ash.settings.google_drive.mojom.Page_OnServiceUnavailable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.google_drive.mojom.Page_OnProgress_ParamsSpec, 'ash.settings.google_drive.mojom.Page_OnProgress_Params', [
      mojo.internal.StructField('status', 0, 0, ash.settings.google_drive.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  onProgress(status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.google_drive.mojom.Page_OnProgress_ParamsSpec,
      null,
      [status],
      false);
  }

};

ash.settings.google_drive.mojom.Page.getRemote = function() {
  let remote = new ash.settings.google_drive.mojom.PageRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ash.settings.google_drive.mojom.Page',
    'context');
  return remote.$;
};

ash.settings.google_drive.mojom.PagePtr = ash.settings.google_drive.mojom.PageRemote;
ash.settings.google_drive.mojom.PageRequest = ash.settings.google_drive.mojom.PagePendingReceiver;

