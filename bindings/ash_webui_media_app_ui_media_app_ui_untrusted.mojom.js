// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/media_app_ui/media_app_ui_untrusted.mojom
// Module: ash.media_app_ui.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.media_app_ui = ash.media_app_ui || {};
ash.media_app_ui.media_app_ui.mojom = ash.media_app_ui.media_app_ui.mojom || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};


// Union: MantisUntrustedServiceResult
ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedServiceResultSpec = { $: mojo.internal.Union(
    'ash.media_app_ui.mojom.MantisUntrustedServiceResult', {
      'service': {
        'ordinal': 0,
        'type': mojo.internal.InterfaceProxy(ash.media_app_ui.mojom.MantisUntrustedServiceRemote),
      }},
      'error': {
        'ordinal': 1,
        'type': mantis.mojom.InitializeResultSpec,
      }},
    })
};

// Struct: PageMetadata
ash.media_app_ui.media_app_ui.mojom.mojom.PageMetadataSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.PageMetadata',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: UntrustedServiceFactory
ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactory = {};

ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.UntrustedServiceFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactoryPendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createOcrUntrustedService(receiver, page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactory_CreateOcrUntrustedService_ParamsSpec,
      null,
      [receiver, page]);
  }

  createMahiUntrustedService(receiver, page, file_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactory_CreateMahiUntrustedService_ParamsSpec,
      null,
      [receiver, page, file_name]);
  }

  isMantisAvailable() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactory_IsMantisAvailable_ParamsSpec,
      ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactory_IsMantisAvailable_ResponseParamsSpec,
      []);
  }

  createMantisUntrustedService(page, dlc_uuid) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ParamsSpec,
      ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ResponseParamsSpec,
      [page, dlc_uuid]);
  }

};

ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactory.getRemote = function() {
  let remote = new ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.UntrustedServiceFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateOcrUntrustedService
ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactory_CreateOcrUntrustedService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.UntrustedServiceFactory.CreateOcrUntrustedService_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.media_app_ui.mojom.OcrUntrustedServiceRemote), nullable: false, minVersion: 0 },
        { name: 'page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.media_app_ui.mojom.OcrUntrustedPageRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateMahiUntrustedService
ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactory_CreateMahiUntrustedService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.UntrustedServiceFactory.CreateMahiUntrustedService_Params',
      packedSize: 32,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.media_app_ui.mojom.MahiUntrustedServiceRemote), nullable: false, minVersion: 0 },
        { name: 'page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.media_app_ui.mojom.MahiUntrustedPageRemote), nullable: false, minVersion: 0 },
        { name: 'file_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for IsMantisAvailable
ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactory_IsMantisAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.UntrustedServiceFactory.IsMantisAvailable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactory_IsMantisAvailable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.UntrustedServiceFactory.IsMantisAvailable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateMantisUntrustedService
ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.UntrustedServiceFactory.CreateMantisUntrustedService_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.media_app_ui.mojom.MantisUntrustedPageRemote), nullable: false, minVersion: 0 },
        { name: 'dlc_uuid', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.UntrustedServiceFactory.CreateMantisUntrustedService_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.media_app_ui.mojom.MantisUntrustedServiceResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactoryPtr = ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactoryRemote;
ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactoryRequest = ash.media_app_ui.media_app_ui.mojom.mojom.UntrustedServiceFactoryPendingReceiver;


// Interface: OcrUntrustedService
ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedService = {};

ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedServiceRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.OcrUntrustedService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedServicePendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  pageMetadataUpdated(page_metadata) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedService_PageMetadataUpdated_ParamsSpec,
      null,
      [page_metadata]);
  }

  pageContentsUpdated(dirty_page_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedService_PageContentsUpdated_ParamsSpec,
      null,
      [dirty_page_id]);
  }

  viewportUpdated(viewport_box, scale_factor) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedService_ViewportUpdated_ParamsSpec,
      null,
      [viewport_box, scale_factor]);
  }

};

ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedService.getRemote = function() {
  let remote = new ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.OcrUntrustedService',
    'context');
  return remote.$;
};

// ParamsSpec for PageMetadataUpdated
ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedService_PageMetadataUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.OcrUntrustedService.PageMetadataUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'page_metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.media_app_ui.mojom.PageMetadataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PageContentsUpdated
ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedService_PageContentsUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.OcrUntrustedService.PageContentsUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'dirty_page_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ViewportUpdated
ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedService_ViewportUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.OcrUntrustedService.ViewportUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'viewport_box', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'scale_factor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedServicePtr = ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedServiceRemote;
ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedServiceRequest = ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedServicePendingReceiver;


// Interface: OcrUntrustedPage
ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedPage = {};

ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedPageRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.OcrUntrustedPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedPagePendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestBitmap(requestedPageId) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedPage_RequestBitmap_ParamsSpec,
      ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedPage_RequestBitmap_ResponseParamsSpec,
      [requestedPageId]);
  }

  setViewport(viewport_box) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedPage_SetViewport_ParamsSpec,
      null,
      [viewport_box]);
  }

  setPdfOcrEnabled(enabled) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedPage_SetPdfOcrEnabled_ParamsSpec,
      null,
      [enabled]);
  }

};

ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedPage.getRemote = function() {
  let remote = new ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.OcrUntrustedPage',
    'context');
  return remote.$;
};

// ParamsSpec for RequestBitmap
ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedPage_RequestBitmap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.OcrUntrustedPage.RequestBitmap_Params',
      packedSize: 16,
      fields: [
        { name: 'requestedPageId', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedPage_RequestBitmap_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.OcrUntrustedPage.RequestBitmap_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetViewport
ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedPage_SetViewport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.OcrUntrustedPage.SetViewport_Params',
      packedSize: 16,
      fields: [
        { name: 'viewport_box', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPdfOcrEnabled
ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedPage_SetPdfOcrEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.OcrUntrustedPage.SetPdfOcrEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedPagePtr = ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedPageRemote;
ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedPageRequest = ash.media_app_ui.media_app_ui.mojom.mojom.OcrUntrustedPagePendingReceiver;


// Interface: MahiUntrustedService
ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedService = {};

ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedServiceRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.MahiUntrustedService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedServicePendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPdfLoaded() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedService_OnPdfLoaded_ParamsSpec,
      null,
      []);
  }

  onPdfFileNameUpdated(new_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedService_OnPdfFileNameUpdated_ParamsSpec,
      null,
      [new_name]);
  }

  onPdfContextMenuShow(anchor, selected_text) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedService_OnPdfContextMenuShow_ParamsSpec,
      null,
      [anchor, selected_text]);
  }

  onPdfContextMenuHide() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedService_OnPdfContextMenuHide_ParamsSpec,
      null,
      []);
  }

};

ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedService.getRemote = function() {
  let remote = new ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.MahiUntrustedService',
    'context');
  return remote.$;
};

// ParamsSpec for OnPdfLoaded
ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedService_OnPdfLoaded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.MahiUntrustedService.OnPdfLoaded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnPdfFileNameUpdated
ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedService_OnPdfFileNameUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.MahiUntrustedService.OnPdfFileNameUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'new_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPdfContextMenuShow
ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedService_OnPdfContextMenuShow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.MahiUntrustedService.OnPdfContextMenuShow_Params',
      packedSize: 24,
      fields: [
        { name: 'anchor', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'selected_text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnPdfContextMenuHide
ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedService_OnPdfContextMenuHide_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.MahiUntrustedService.OnPdfContextMenuHide_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedServicePtr = ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedServiceRemote;
ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedServiceRequest = ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedServicePendingReceiver;


// Interface: MahiUntrustedPage
ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedPage = {};

ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedPageRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.MahiUntrustedPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedPagePendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  hidePdfContextMenu() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedPage_HidePdfContextMenu_ParamsSpec,
      null,
      []);
  }

  getPdfContent(limit) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedPage_GetPdfContent_ParamsSpec,
      ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedPage_GetPdfContent_ResponseParamsSpec,
      [limit]);
  }

};

ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedPage.getRemote = function() {
  let remote = new ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.MahiUntrustedPage',
    'context');
  return remote.$;
};

// ParamsSpec for HidePdfContextMenu
ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedPage_HidePdfContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.MahiUntrustedPage.HidePdfContextMenu_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetPdfContent
ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedPage_GetPdfContent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.MahiUntrustedPage.GetPdfContent_Params',
      packedSize: 16,
      fields: [
        { name: 'limit', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedPage_GetPdfContent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.MahiUntrustedPage.GetPdfContent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'content', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedPagePtr = ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedPageRemote;
ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedPageRequest = ash.media_app_ui.media_app_ui.mojom.mojom.MahiUntrustedPagePendingReceiver;


// Interface: MantisUntrustedService
ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService = {};

ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedServiceRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.MantisUntrustedService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedServicePendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  segmentImage(image, selection) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_SegmentImage_ParamsSpec,
      ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_SegmentImage_ResponseParamsSpec,
      [image, selection]);
  }

  generativeFillImage(image, mask, text, seed) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_GenerativeFillImage_ParamsSpec,
      ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_GenerativeFillImage_ResponseParamsSpec,
      [image, mask, text, seed]);
  }

  inpaintImage(image, mask, seed) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_InpaintImage_ParamsSpec,
      ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_InpaintImage_ResponseParamsSpec,
      [image, mask, seed]);
  }

  outpaintImage(image, mask, seed) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_OutpaintImage_ParamsSpec,
      ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_OutpaintImage_ResponseParamsSpec,
      [image, mask, seed]);
  }

  classifyImageSafety(image) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_ClassifyImageSafety_ParamsSpec,
      ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_ClassifyImageSafety_ResponseParamsSpec,
      [image]);
  }

  inferSegmentationMode(gesture) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_InferSegmentationMode_ParamsSpec,
      ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_InferSegmentationMode_ResponseParamsSpec,
      [gesture]);
  }

};

ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService.getRemote = function() {
  let remote = new ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.MantisUntrustedService',
    'context');
  return remote.$;
};

// ParamsSpec for SegmentImage
ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_SegmentImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.MantisUntrustedService.SegmentImage_Params',
      packedSize: 24,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'selection', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_SegmentImage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.MantisUntrustedService.SegmentImage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mantis.mojom.MantisResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GenerativeFillImage
ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_GenerativeFillImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.MantisUntrustedService.GenerativeFillImage_Params',
      packedSize: 40,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'mask', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'text', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'seed', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_GenerativeFillImage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.MantisUntrustedService.GenerativeFillImage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mantis.mojom.MantisResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for InpaintImage
ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_InpaintImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.MantisUntrustedService.InpaintImage_Params',
      packedSize: 32,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'mask', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'seed', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_InpaintImage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.MantisUntrustedService.InpaintImage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mantis.mojom.MantisResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OutpaintImage
ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_OutpaintImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.MantisUntrustedService.OutpaintImage_Params',
      packedSize: 32,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'mask', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'seed', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_OutpaintImage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.MantisUntrustedService.OutpaintImage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mantis.mojom.MantisResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ClassifyImageSafety
ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_ClassifyImageSafety_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.MantisUntrustedService.ClassifyImageSafety_Params',
      packedSize: 16,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_ClassifyImageSafety_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.MantisUntrustedService.ClassifyImageSafety_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'verdict', packedOffset: 0, packedBitOffset: 0, type: mantis.mojom.SafetyClassifierVerdictSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InferSegmentationMode
ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_InferSegmentationMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.MantisUntrustedService.InferSegmentationMode_Params',
      packedSize: 16,
      fields: [
        { name: 'gesture', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mantis.mojom.TouchPointSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedService_InferSegmentationMode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.MantisUntrustedService.InferSegmentationMode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: mantis.mojom.SegmentationModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedServicePtr = ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedServiceRemote;
ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedServiceRequest = ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedServicePendingReceiver;


// Interface: MantisUntrustedPage
ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedPage = {};

ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedPageRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.MantisUntrustedPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedPagePendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  reportMantisProgress(progress) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedPage_ReportMantisProgress_ParamsSpec,
      null,
      [progress]);
  }

};

ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedPage.getRemote = function() {
  let remote = new ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.MantisUntrustedPage',
    'context');
  return remote.$;
};

// ParamsSpec for ReportMantisProgress
ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedPage_ReportMantisProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.MantisUntrustedPage.ReportMantisProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'progress', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedPagePtr = ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedPageRemote;
ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedPageRequest = ash.media_app_ui.media_app_ui.mojom.mojom.MantisUntrustedPagePendingReceiver;

