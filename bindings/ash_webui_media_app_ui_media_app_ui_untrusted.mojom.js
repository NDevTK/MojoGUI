// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/media_app_ui/media_app_ui_untrusted.mojom
// Module: ash.media_app_ui.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.media_app_ui = ash.media_app_ui || {};
ash.media_app_ui.mojom = ash.media_app_ui.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var components = components || {};
var ash = ash || {};
var chromeos = chromeos || {};
var components = components || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};

ash.media_app_ui.mojom.MantisUntrustedServiceResultSpec = { $: {} };
ash.media_app_ui.mojom.PageMetadataSpec = { $: {} };
ash.media_app_ui.mojom.UntrustedServiceFactory = {};
ash.media_app_ui.mojom.UntrustedServiceFactory.$interfaceName = 'ash.media_app_ui.mojom.UntrustedServiceFactory';
ash.media_app_ui.mojom.UntrustedServiceFactory_CreateOcrUntrustedService_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMahiUntrustedService_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.OcrUntrustedService = {};
ash.media_app_ui.mojom.OcrUntrustedService.$interfaceName = 'ash.media_app_ui.mojom.OcrUntrustedService';
ash.media_app_ui.mojom.OcrUntrustedService_PageMetadataUpdated_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.OcrUntrustedService_PageContentsUpdated_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.OcrUntrustedService_ViewportUpdated_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.OcrUntrustedPage = {};
ash.media_app_ui.mojom.OcrUntrustedPage.$interfaceName = 'ash.media_app_ui.mojom.OcrUntrustedPage';
ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.OcrUntrustedPage_SetViewport_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.OcrUntrustedPage_SetPdfOcrEnabled_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MahiUntrustedService = {};
ash.media_app_ui.mojom.MahiUntrustedService.$interfaceName = 'ash.media_app_ui.mojom.MahiUntrustedService';
ash.media_app_ui.mojom.MahiUntrustedService_OnPdfLoaded_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MahiUntrustedService_OnPdfFileNameUpdated_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuShow_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuHide_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MahiUntrustedPage = {};
ash.media_app_ui.mojom.MahiUntrustedPage.$interfaceName = 'ash.media_app_ui.mojom.MahiUntrustedPage';
ash.media_app_ui.mojom.MahiUntrustedPage_HidePdfContextMenu_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService = {};
ash.media_app_ui.mojom.MantisUntrustedService.$interfaceName = 'ash.media_app_ui.mojom.MantisUntrustedService';
ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedPage = {};
ash.media_app_ui.mojom.MantisUntrustedPage.$interfaceName = 'ash.media_app_ui.mojom.MantisUntrustedPage';
ash.media_app_ui.mojom.MantisUntrustedPage_ReportMantisProgress_ParamsSpec = { $: {} };

// Union: MantisUntrustedServiceResult
mojo.internal.Union(
    ash.media_app_ui.mojom.MantisUntrustedServiceResultSpec, 'ash.media_app_ui.mojom.MantisUntrustedServiceResult', {
      'service': {
        'ordinal': 0,
        'type': mojo.internal.InterfaceProxy(ash.media_app_ui.mojom.MantisUntrustedServiceRemote),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mantis.mojom.InitializeResultSpec,
        'nullable': false,
      },
    });

// Struct: PageMetadata
mojo.internal.Struct(
    ash.media_app_ui.mojom.PageMetadataSpec, 'ash.media_app_ui.mojom.PageMetadata', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('rect', 8, 0, gfx.mojom.RectFSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: UntrustedServiceFactory
mojo.internal.Struct(
    ash.media_app_ui.mojom.UntrustedServiceFactory_CreateOcrUntrustedService_ParamsSpec, 'ash.media_app_ui.mojom.UntrustedServiceFactory_CreateOcrUntrustedService_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(ash.media_app_ui.mojom.OcrUntrustedServiceRemote), null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, mojo.internal.InterfaceProxy(ash.media_app_ui.mojom.OcrUntrustedPageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMahiUntrustedService_ParamsSpec, 'ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMahiUntrustedService_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(ash.media_app_ui.mojom.MahiUntrustedServiceRemote), null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, mojo.internal.InterfaceProxy(ash.media_app_ui.mojom.MahiUntrustedPageRemote), null, false, 0, undefined),
      mojo.internal.StructField('file_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ParamsSpec, 'ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ResponseParamsSpec, 'ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ParamsSpec, 'ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(ash.media_app_ui.mojom.MantisUntrustedPageRemote), null, false, 0, undefined),
      mojo.internal.StructField('dlc_uuid', 8, 0, mojo_base.mojom.UuidSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ResponseParamsSpec, 'ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.media_app_ui.mojom.MantisUntrustedServiceResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.media_app_ui.mojom.UntrustedServiceFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.mojom.UntrustedServiceFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.UntrustedServiceFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.mojom.UntrustedServiceFactoryPendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.mojom.UntrustedServiceFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.mojom.UntrustedServiceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createOcrUntrustedService(receiver, page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.media_app_ui.mojom.UntrustedServiceFactory_CreateOcrUntrustedService_ParamsSpec,
      null,
      [receiver, page],
      false);
  }

  createMahiUntrustedService(receiver, page, file_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMahiUntrustedService_ParamsSpec,
      null,
      [receiver, page, file_name],
      false);
  }

  isMantisAvailable() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ParamsSpec,
      ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ResponseParamsSpec,
      [],
      false);
  }

  createMantisUntrustedService(page, dlc_uuid) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ParamsSpec,
      ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ResponseParamsSpec,
      [page, dlc_uuid],
      false);
  }

};

ash.media_app_ui.mojom.UntrustedServiceFactory.getRemote = function() {
  let remote = new ash.media_app_ui.mojom.UntrustedServiceFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.UntrustedServiceFactory',
    'context');
  return remote.$;
};

ash.media_app_ui.mojom.UntrustedServiceFactoryPtr = ash.media_app_ui.mojom.UntrustedServiceFactoryRemote;
ash.media_app_ui.mojom.UntrustedServiceFactoryRequest = ash.media_app_ui.mojom.UntrustedServiceFactoryPendingReceiver;


// Interface: OcrUntrustedService
mojo.internal.Struct(
    ash.media_app_ui.mojom.OcrUntrustedService_PageMetadataUpdated_ParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedService_PageMetadataUpdated_Params', [
      mojo.internal.StructField('page_metadata', 0, 0, mojo.internal.Array(ash.media_app_ui.mojom.PageMetadataSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.OcrUntrustedService_PageContentsUpdated_ParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedService_PageContentsUpdated_Params', [
      mojo.internal.StructField('dirty_page_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.OcrUntrustedService_ViewportUpdated_ParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedService_ViewportUpdated_Params', [
      mojo.internal.StructField('viewport_box', 0, 0, gfx.mojom.RectFSpec, null, false, 0, undefined),
      mojo.internal.StructField('scale_factor', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

ash.media_app_ui.mojom.OcrUntrustedServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.mojom.OcrUntrustedServiceRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.OcrUntrustedService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.mojom.OcrUntrustedServicePendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.mojom.OcrUntrustedServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.mojom.OcrUntrustedServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  pageMetadataUpdated(page_metadata) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.media_app_ui.mojom.OcrUntrustedService_PageMetadataUpdated_ParamsSpec,
      null,
      [page_metadata],
      false);
  }

  pageContentsUpdated(dirty_page_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.media_app_ui.mojom.OcrUntrustedService_PageContentsUpdated_ParamsSpec,
      null,
      [dirty_page_id],
      false);
  }

  viewportUpdated(viewport_box, scale_factor) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.media_app_ui.mojom.OcrUntrustedService_ViewportUpdated_ParamsSpec,
      null,
      [viewport_box, scale_factor],
      false);
  }

};

ash.media_app_ui.mojom.OcrUntrustedService.getRemote = function() {
  let remote = new ash.media_app_ui.mojom.OcrUntrustedServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.OcrUntrustedService',
    'context');
  return remote.$;
};

ash.media_app_ui.mojom.OcrUntrustedServicePtr = ash.media_app_ui.mojom.OcrUntrustedServiceRemote;
ash.media_app_ui.mojom.OcrUntrustedServiceRequest = ash.media_app_ui.mojom.OcrUntrustedServicePendingReceiver;


// Interface: OcrUntrustedPage
mojo.internal.Struct(
    ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_Params', [
      mojo.internal.StructField('requestedPageId', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ResponseParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ResponseParams', [
      mojo.internal.StructField('page', 0, 0, skia.mojom.BitmapN32Spec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.OcrUntrustedPage_SetViewport_ParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedPage_SetViewport_Params', [
      mojo.internal.StructField('viewport_box', 0, 0, gfx.mojom.RectFSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.OcrUntrustedPage_SetPdfOcrEnabled_ParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedPage_SetPdfOcrEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.media_app_ui.mojom.OcrUntrustedPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.mojom.OcrUntrustedPageRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.OcrUntrustedPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.mojom.OcrUntrustedPagePendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.mojom.OcrUntrustedPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.mojom.OcrUntrustedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestBitmap(requestedPageId) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ParamsSpec,
      ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ResponseParamsSpec,
      [requestedPageId],
      false);
  }

  setViewport(viewport_box) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.media_app_ui.mojom.OcrUntrustedPage_SetViewport_ParamsSpec,
      null,
      [viewport_box],
      false);
  }

  setPdfOcrEnabled(enabled) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.media_app_ui.mojom.OcrUntrustedPage_SetPdfOcrEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

};

ash.media_app_ui.mojom.OcrUntrustedPage.getRemote = function() {
  let remote = new ash.media_app_ui.mojom.OcrUntrustedPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.OcrUntrustedPage',
    'context');
  return remote.$;
};

ash.media_app_ui.mojom.OcrUntrustedPagePtr = ash.media_app_ui.mojom.OcrUntrustedPageRemote;
ash.media_app_ui.mojom.OcrUntrustedPageRequest = ash.media_app_ui.mojom.OcrUntrustedPagePendingReceiver;


// Interface: MahiUntrustedService
mojo.internal.Struct(
    ash.media_app_ui.mojom.MahiUntrustedService_OnPdfLoaded_ParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedService_OnPdfLoaded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MahiUntrustedService_OnPdfFileNameUpdated_ParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedService_OnPdfFileNameUpdated_Params', [
      mojo.internal.StructField('new_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuShow_ParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuShow_Params', [
      mojo.internal.StructField('anchor', 0, 0, gfx.mojom.RectFSpec, null, false, 0, undefined),
      mojo.internal.StructField('selected_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuHide_ParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuHide_Params', [
    ],
    [[0, 8]]);

ash.media_app_ui.mojom.MahiUntrustedServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.mojom.MahiUntrustedServiceRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.MahiUntrustedService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.mojom.MahiUntrustedServicePendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.mojom.MahiUntrustedServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.mojom.MahiUntrustedServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPdfLoaded() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.media_app_ui.mojom.MahiUntrustedService_OnPdfLoaded_ParamsSpec,
      null,
      [],
      false);
  }

  onPdfFileNameUpdated(new_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.media_app_ui.mojom.MahiUntrustedService_OnPdfFileNameUpdated_ParamsSpec,
      null,
      [new_name],
      false);
  }

  onPdfContextMenuShow(anchor, selected_text) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuShow_ParamsSpec,
      null,
      [anchor, selected_text],
      false);
  }

  onPdfContextMenuHide() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuHide_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.media_app_ui.mojom.MahiUntrustedService.getRemote = function() {
  let remote = new ash.media_app_ui.mojom.MahiUntrustedServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.MahiUntrustedService',
    'context');
  return remote.$;
};

ash.media_app_ui.mojom.MahiUntrustedServicePtr = ash.media_app_ui.mojom.MahiUntrustedServiceRemote;
ash.media_app_ui.mojom.MahiUntrustedServiceRequest = ash.media_app_ui.mojom.MahiUntrustedServicePendingReceiver;


// Interface: MahiUntrustedPage
mojo.internal.Struct(
    ash.media_app_ui.mojom.MahiUntrustedPage_HidePdfContextMenu_ParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedPage_HidePdfContextMenu_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_Params', [
      mojo.internal.StructField('limit', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ResponseParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ResponseParams', [
      mojo.internal.StructField('content', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

ash.media_app_ui.mojom.MahiUntrustedPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.mojom.MahiUntrustedPageRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.MahiUntrustedPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.mojom.MahiUntrustedPagePendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.mojom.MahiUntrustedPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.mojom.MahiUntrustedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  hidePdfContextMenu() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.media_app_ui.mojom.MahiUntrustedPage_HidePdfContextMenu_ParamsSpec,
      null,
      [],
      false);
  }

  getPdfContent(limit) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ParamsSpec,
      ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ResponseParamsSpec,
      [limit],
      false);
  }

};

ash.media_app_ui.mojom.MahiUntrustedPage.getRemote = function() {
  let remote = new ash.media_app_ui.mojom.MahiUntrustedPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.MahiUntrustedPage',
    'context');
  return remote.$;
};

ash.media_app_ui.mojom.MahiUntrustedPagePtr = ash.media_app_ui.mojom.MahiUntrustedPageRemote;
ash.media_app_ui.mojom.MahiUntrustedPageRequest = ash.media_app_ui.mojom.MahiUntrustedPagePendingReceiver;


// Interface: MantisUntrustedService
mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_Params', [
      mojo.internal.StructField('image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('selection', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ResponseParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mantis.mojom.MantisResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_Params', [
      mojo.internal.StructField('image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('mask', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('seed', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ResponseParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mantis.mojom.MantisResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_Params', [
      mojo.internal.StructField('image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('mask', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('seed', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ResponseParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mantis.mojom.MantisResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_Params', [
      mojo.internal.StructField('image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('mask', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('seed', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ResponseParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mantis.mojom.MantisResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_Params', [
      mojo.internal.StructField('image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ResponseParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ResponseParams', [
      mojo.internal.StructField('verdict', 0, 0, mantis.mojom.SafetyClassifierVerdictSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_Params', [
      mojo.internal.StructField('gesture', 0, 0, mojo.internal.Array(mantis.mojom.TouchPointSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ResponseParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ResponseParams', [
      mojo.internal.StructField('mode', 0, 0, mantis.mojom.SegmentationModeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.media_app_ui.mojom.MantisUntrustedServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.mojom.MantisUntrustedServiceRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.MantisUntrustedService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.mojom.MantisUntrustedServicePendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.mojom.MantisUntrustedServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.mojom.MantisUntrustedServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  segmentImage(image, selection) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ParamsSpec,
      ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ResponseParamsSpec,
      [image, selection],
      false);
  }

  generativeFillImage(image, mask, text, seed) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ParamsSpec,
      ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ResponseParamsSpec,
      [image, mask, text, seed],
      false);
  }

  inpaintImage(image, mask, seed) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ParamsSpec,
      ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ResponseParamsSpec,
      [image, mask, seed],
      false);
  }

  outpaintImage(image, mask, seed) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ParamsSpec,
      ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ResponseParamsSpec,
      [image, mask, seed],
      false);
  }

  classifyImageSafety(image) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ParamsSpec,
      ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ResponseParamsSpec,
      [image],
      false);
  }

  inferSegmentationMode(gesture) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ParamsSpec,
      ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ResponseParamsSpec,
      [gesture],
      false);
  }

};

ash.media_app_ui.mojom.MantisUntrustedService.getRemote = function() {
  let remote = new ash.media_app_ui.mojom.MantisUntrustedServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.MantisUntrustedService',
    'context');
  return remote.$;
};

ash.media_app_ui.mojom.MantisUntrustedServicePtr = ash.media_app_ui.mojom.MantisUntrustedServiceRemote;
ash.media_app_ui.mojom.MantisUntrustedServiceRequest = ash.media_app_ui.mojom.MantisUntrustedServicePendingReceiver;


// Interface: MantisUntrustedPage
mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedPage_ReportMantisProgress_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedPage_ReportMantisProgress_Params', [
      mojo.internal.StructField('progress', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

ash.media_app_ui.mojom.MantisUntrustedPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.mojom.MantisUntrustedPageRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.MantisUntrustedPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.mojom.MantisUntrustedPagePendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.mojom.MantisUntrustedPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.mojom.MantisUntrustedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  reportMantisProgress(progress) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.media_app_ui.mojom.MantisUntrustedPage_ReportMantisProgress_ParamsSpec,
      null,
      [progress],
      false);
  }

};

ash.media_app_ui.mojom.MantisUntrustedPage.getRemote = function() {
  let remote = new ash.media_app_ui.mojom.MantisUntrustedPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.MantisUntrustedPage',
    'context');
  return remote.$;
};

ash.media_app_ui.mojom.MantisUntrustedPagePtr = ash.media_app_ui.mojom.MantisUntrustedPageRemote;
ash.media_app_ui.mojom.MantisUntrustedPageRequest = ash.media_app_ui.mojom.MantisUntrustedPagePendingReceiver;

