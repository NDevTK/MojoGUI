// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/print_backend_service.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: PrinterCapsAndInfo
printing.mojom.mojom.PrinterCapsAndInfoSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrinterCapsAndInfo',
      packedSize: 24,
      fields: [
        { name: 'printer_info', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.PrinterBasicInfoSpec, nullable: false, minVersion: 0 },
        { name: 'printer_caps', packedOffset: 8, packedBitOffset: 0, type: printing.mojom.PrinterSemanticCapsAndDefaultsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: UnsandboxedPrintBackendHost
printing.mojom.mojom.UnsandboxedPrintBackendHost = {};

printing.mojom.mojom.UnsandboxedPrintBackendHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.mojom.UnsandboxedPrintBackendHostRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.UnsandboxedPrintBackendHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.mojom.UnsandboxedPrintBackendHostPendingReceiver,
      handle);
    this.$ = new printing.mojom.mojom.UnsandboxedPrintBackendHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.mojom.UnsandboxedPrintBackendHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindBackend(service) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.mojom.UnsandboxedPrintBackendHost_BindBackend_ParamsSpec,
      null,
      [service]);
  }

};

printing.mojom.mojom.UnsandboxedPrintBackendHost.getRemote = function() {
  let remote = new printing.mojom.mojom.UnsandboxedPrintBackendHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.UnsandboxedPrintBackendHost',
    'context');
  return remote.$;
};

// ParamsSpec for BindBackend
printing.mojom.mojom.UnsandboxedPrintBackendHost_BindBackend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.UnsandboxedPrintBackendHost.BindBackend_Params',
      packedSize: 16,
      fields: [
        { name: 'service', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
printing.mojom.mojom.UnsandboxedPrintBackendHostPtr = printing.mojom.mojom.UnsandboxedPrintBackendHostRemote;
printing.mojom.mojom.UnsandboxedPrintBackendHostRequest = printing.mojom.mojom.UnsandboxedPrintBackendHostPendingReceiver;


// Interface: SandboxedPrintBackendHost
printing.mojom.mojom.SandboxedPrintBackendHost = {};

printing.mojom.mojom.SandboxedPrintBackendHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.mojom.SandboxedPrintBackendHostRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.SandboxedPrintBackendHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.mojom.SandboxedPrintBackendHostPendingReceiver,
      handle);
    this.$ = new printing.mojom.mojom.SandboxedPrintBackendHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.mojom.SandboxedPrintBackendHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindBackend(service) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.mojom.SandboxedPrintBackendHost_BindBackend_ParamsSpec,
      null,
      [service]);
  }

};

printing.mojom.mojom.SandboxedPrintBackendHost.getRemote = function() {
  let remote = new printing.mojom.mojom.SandboxedPrintBackendHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.SandboxedPrintBackendHost',
    'context');
  return remote.$;
};

// ParamsSpec for BindBackend
printing.mojom.mojom.SandboxedPrintBackendHost_BindBackend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.SandboxedPrintBackendHost.BindBackend_Params',
      packedSize: 16,
      fields: [
        { name: 'service', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
printing.mojom.mojom.SandboxedPrintBackendHostPtr = printing.mojom.mojom.SandboxedPrintBackendHostRemote;
printing.mojom.mojom.SandboxedPrintBackendHostRequest = printing.mojom.mojom.SandboxedPrintBackendHostPendingReceiver;


// Interface: PrintBackendService
printing.mojom.mojom.PrintBackendService = {};

printing.mojom.mojom.PrintBackendServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.mojom.PrintBackendServiceRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrintBackendService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.mojom.PrintBackendServicePendingReceiver,
      handle);
    this.$ = new printing.mojom.mojom.PrintBackendServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.mojom.PrintBackendServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(locale, remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.mojom.PrintBackendService_Init_ParamsSpec,
      null,
      [locale, remote]);
  }

  poke() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.mojom.PrintBackendService_Poke_ParamsSpec,
      null,
      []);
  }

  enumeratePrinters() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      printing.mojom.mojom.PrintBackendService_EnumeratePrinters_ParamsSpec,
      null,
      []);
  }

  getDefaultPrinterName() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      printing.mojom.mojom.PrintBackendService_GetDefaultPrinterName_ParamsSpec,
      null,
      []);
  }

  getPrinterSemanticCapsAndDefaults(printer_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      printing.mojom.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_ParamsSpec,
      null,
      [printer_name]);
  }

  fetchCapabilities(printer_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      printing.mojom.mojom.PrintBackendService_FetchCapabilities_ParamsSpec,
      null,
      [printer_name]);
  }

  getPaperPrintableArea(printer_name, media) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      printing.mojom.mojom.PrintBackendService_GetPaperPrintableArea_ParamsSpec,
      printing.mojom.mojom.PrintBackendService_GetPaperPrintableArea_ResponseParamsSpec,
      [printer_name, media]);
  }

  establishPrintingContext(context_id, parent_window_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      printing.mojom.mojom.PrintBackendService_EstablishPrintingContext_ParamsSpec,
      null,
      [context_id, parent_window_id]);
  }

  useDefaultSettings(context_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      printing.mojom.mojom.PrintBackendService_UseDefaultSettings_ParamsSpec,
      null,
      [context_id]);
  }

  askUserForSettings(context_id, max_pages, has_selection, is_scripted) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      printing.mojom.mojom.PrintBackendService_AskUserForSettings_ParamsSpec,
      null,
      [context_id, max_pages, has_selection, is_scripted]);
  }

  updatePrintSettings(context_id, job_settings) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      printing.mojom.mojom.PrintBackendService_UpdatePrintSettings_ParamsSpec,
      null,
      [context_id, job_settings]);
  }

  startPrinting(context_id, document_cookie, document_name, settings) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      printing.mojom.mojom.PrintBackendService_StartPrinting_ParamsSpec,
      printing.mojom.mojom.PrintBackendService_StartPrinting_ResponseParamsSpec,
      [context_id, document_cookie, document_name, settings]);
  }

  renderPrintedPage(document_cookie, page_index, page_data_type, serialized_page, page_size, page_content_rect, shrink_factor) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      printing.mojom.mojom.PrintBackendService_RenderPrintedPage_ParamsSpec,
      printing.mojom.mojom.PrintBackendService_RenderPrintedPage_ResponseParamsSpec,
      [document_cookie, page_index, page_data_type, serialized_page, page_size, page_content_rect, shrink_factor]);
  }

  renderPrintedDocument(document_cookie, page_count, data_type, serialized_doc) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      printing.mojom.mojom.PrintBackendService_RenderPrintedDocument_ParamsSpec,
      printing.mojom.mojom.PrintBackendService_RenderPrintedDocument_ResponseParamsSpec,
      [document_cookie, page_count, data_type, serialized_doc]);
  }

  documentDone(document_cookie) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      printing.mojom.mojom.PrintBackendService_DocumentDone_ParamsSpec,
      printing.mojom.mojom.PrintBackendService_DocumentDone_ResponseParamsSpec,
      [document_cookie]);
  }

  cancel(document_cookie) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      printing.mojom.mojom.PrintBackendService_Cancel_ParamsSpec,
      null,
      [document_cookie]);
  }

};

printing.mojom.mojom.PrintBackendService.getRemote = function() {
  let remote = new printing.mojom.mojom.PrintBackendServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrintBackendService',
    'context');
  return remote.$;
};

// ParamsSpec for Init
printing.mojom.mojom.PrintBackendService_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.Init_Params',
      packedSize: 24,
      fields: [
        { name: 'locale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Poke
printing.mojom.mojom.PrintBackendService_Poke_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.Poke_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for EnumeratePrinters
printing.mojom.mojom.PrintBackendService_EnumeratePrinters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.EnumeratePrinters_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetDefaultPrinterName
printing.mojom.mojom.PrintBackendService_GetDefaultPrinterName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.GetDefaultPrinterName_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetPrinterSemanticCapsAndDefaults
printing.mojom.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.GetPrinterSemanticCapsAndDefaults_Params',
      packedSize: 16,
      fields: [
        { name: 'printer_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FetchCapabilities
printing.mojom.mojom.PrintBackendService_FetchCapabilities_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.FetchCapabilities_Params',
      packedSize: 16,
      fields: [
        { name: 'printer_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPaperPrintableArea
printing.mojom.mojom.PrintBackendService_GetPaperPrintableArea_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.GetPaperPrintableArea_Params',
      packedSize: 24,
      fields: [
        { name: 'printer_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'media', packedOffset: 8, packedBitOffset: 0, type: printing.mojom.RequestedMediaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

printing.mojom.mojom.PrintBackendService_GetPaperPrintableArea_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.GetPaperPrintableArea_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'printable_area_um', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EstablishPrintingContext
printing.mojom.mojom.PrintBackendService_EstablishPrintingContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.EstablishPrintingContext_Params',
      packedSize: 16,
      fields: [
        { name: 'context_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'parent_window_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UseDefaultSettings
printing.mojom.mojom.PrintBackendService_UseDefaultSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.UseDefaultSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'context_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AskUserForSettings
printing.mojom.mojom.PrintBackendService_AskUserForSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.AskUserForSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'context_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_pages', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'has_selection', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_scripted', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdatePrintSettings
printing.mojom.mojom.PrintBackendService_UpdatePrintSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.UpdatePrintSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'context_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'job_settings', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for StartPrinting
printing.mojom.mojom.PrintBackendService_StartPrinting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.StartPrinting_Params',
      packedSize: 32,
      fields: [
        { name: 'context_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'document_cookie', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'document_name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 8, packedBitOffset: 0, type: printing.mojom.PrintSettingsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

printing.mojom.mojom.PrintBackendService_StartPrinting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.StartPrinting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.ResultCodeSpec, nullable: false, minVersion: 0 },
        { name: 'job_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RenderPrintedPage
printing.mojom.mojom.PrintBackendService_RenderPrintedPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.RenderPrintedPage_Params',
      packedSize: 48,
      fields: [
        { name: 'document_cookie', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'page_index', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'page_data_type', packedOffset: 32, packedBitOffset: 0, type: printing.mojom.MetafileDataTypeSpec, nullable: false, minVersion: 0 },
        { name: 'serialized_page', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
        { name: 'page_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'page_content_rect', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'shrink_factor', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

printing.mojom.mojom.PrintBackendService_RenderPrintedPage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.RenderPrintedPage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.ResultCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RenderPrintedDocument
printing.mojom.mojom.PrintBackendService_RenderPrintedDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.RenderPrintedDocument_Params',
      packedSize: 32,
      fields: [
        { name: 'document_cookie', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'page_count', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data_type', packedOffset: 16, packedBitOffset: 0, type: printing.mojom.MetafileDataTypeSpec, nullable: false, minVersion: 0 },
        { name: 'serialized_doc', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

printing.mojom.mojom.PrintBackendService_RenderPrintedDocument_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.RenderPrintedDocument_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.ResultCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DocumentDone
printing.mojom.mojom.PrintBackendService_DocumentDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.DocumentDone_Params',
      packedSize: 16,
      fields: [
        { name: 'document_cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

printing.mojom.mojom.PrintBackendService_DocumentDone_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.DocumentDone_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.ResultCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Cancel
printing.mojom.mojom.PrintBackendService_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.Cancel_Params',
      packedSize: 16,
      fields: [
        { name: 'document_cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
printing.mojom.mojom.PrintBackendServicePtr = printing.mojom.mojom.PrintBackendServiceRemote;
printing.mojom.mojom.PrintBackendServiceRequest = printing.mojom.mojom.PrintBackendServicePendingReceiver;

