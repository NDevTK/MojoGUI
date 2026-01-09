// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/print_backend_service.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Interface: UnsandboxedPrintBackendHost
printing.mojom.UnsandboxedPrintBackendHost = {};

printing.mojom.UnsandboxedPrintBackendHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.UnsandboxedPrintBackendHostRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.UnsandboxedPrintBackendHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.UnsandboxedPrintBackendHostPendingReceiver,
      handle);
    this.$ = new printing.mojom.UnsandboxedPrintBackendHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.UnsandboxedPrintBackendHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindBackend(service) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.UnsandboxedPrintBackendHost_BindBackend_ParamsSpec,
      null,
      null,
      [service],
      undefined,
      undefined
    );
  }

};

printing.mojom.UnsandboxedPrintBackendHost.getRemote = function() {
  let remote = new printing.mojom.UnsandboxedPrintBackendHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.UnsandboxedPrintBackendHost',
    'context');
  return remote.$;
};

// ParamsSpec for BindBackend
printing.mojom.UnsandboxedPrintBackendHost_BindBackend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.UnsandboxedPrintBackendHost.BindBackend_Params',
      packedSize: 16,
      fields: [
        { name: 'service', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
printing.mojom.UnsandboxedPrintBackendHostPtr = printing.mojom.UnsandboxedPrintBackendHostRemote;
printing.mojom.UnsandboxedPrintBackendHostRequest = printing.mojom.UnsandboxedPrintBackendHostPendingReceiver;


// Interface: SandboxedPrintBackendHost
printing.mojom.SandboxedPrintBackendHost = {};

printing.mojom.SandboxedPrintBackendHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.SandboxedPrintBackendHostRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.SandboxedPrintBackendHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.SandboxedPrintBackendHostPendingReceiver,
      handle);
    this.$ = new printing.mojom.SandboxedPrintBackendHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.SandboxedPrintBackendHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindBackend(service) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.SandboxedPrintBackendHost_BindBackend_ParamsSpec,
      null,
      null,
      [service],
      undefined,
      undefined
    );
  }

};

printing.mojom.SandboxedPrintBackendHost.getRemote = function() {
  let remote = new printing.mojom.SandboxedPrintBackendHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.SandboxedPrintBackendHost',
    'context');
  return remote.$;
};

// ParamsSpec for BindBackend
printing.mojom.SandboxedPrintBackendHost_BindBackend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.SandboxedPrintBackendHost.BindBackend_Params',
      packedSize: 16,
      fields: [
        { name: 'service', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
printing.mojom.SandboxedPrintBackendHostPtr = printing.mojom.SandboxedPrintBackendHostRemote;
printing.mojom.SandboxedPrintBackendHostRequest = printing.mojom.SandboxedPrintBackendHostPendingReceiver;


// Interface: PrintBackendService
printing.mojom.PrintBackendService = {};

printing.mojom.PrintBackendServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.PrintBackendServiceRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrintBackendService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.PrintBackendServicePendingReceiver,
      handle);
    this.$ = new printing.mojom.PrintBackendServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.PrintBackendServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(locale, remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.PrintBackendService_Init_ParamsSpec,
      null,
      null,
      [locale, remote],
      undefined,
      undefined
    );
  }

  poke() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.PrintBackendService_Poke_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  enumeratePrinters() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      printing.mojom.PrintBackendService_EnumeratePrinters_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  getDefaultPrinterName() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      printing.mojom.PrintBackendService_GetDefaultPrinterName_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  getPrinterSemanticCapsAndDefaults(printer_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      printing.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_ParamsSpec,
      null,
      null,
      [printer_name],
      undefined,
      undefined
    );
  }

  fetchCapabilities(printer_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      printing.mojom.PrintBackendService_FetchCapabilities_ParamsSpec,
      null,
      null,
      [printer_name],
      undefined,
      undefined
    );
  }

  getPaperPrintableArea(printer_name, media) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      printing.mojom.PrintBackendService_GetPaperPrintableArea_ParamsSpec,
      printing.mojom.PrintBackendService_GetPaperPrintableArea_ResponseParamsSpec,
      printing.mojom.PrintBackendService_GetPaperPrintableArea_ResponseParamsSpec,
      [printer_name, media],
      undefined,
      undefined
    );
  }

  establishPrintingContext(context_id, parent_window_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      printing.mojom.PrintBackendService_EstablishPrintingContext_ParamsSpec,
      null,
      null,
      [context_id, parent_window_id],
      undefined,
      undefined
    );
  }

  useDefaultSettings(context_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      printing.mojom.PrintBackendService_UseDefaultSettings_ParamsSpec,
      null,
      null,
      [context_id],
      undefined,
      undefined
    );
  }

  askUserForSettings(context_id, max_pages, has_selection, is_scripted) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      printing.mojom.PrintBackendService_AskUserForSettings_ParamsSpec,
      null,
      null,
      [context_id, max_pages, has_selection, is_scripted],
      undefined,
      undefined
    );
  }

  updatePrintSettings(context_id, job_settings) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      printing.mojom.PrintBackendService_UpdatePrintSettings_ParamsSpec,
      null,
      null,
      [context_id, job_settings],
      undefined,
      undefined
    );
  }

  startPrinting(context_id, document_cookie, document_name, settings) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      printing.mojom.PrintBackendService_StartPrinting_ParamsSpec,
      printing.mojom.PrintBackendService_StartPrinting_ResponseParamsSpec,
      printing.mojom.PrintBackendService_StartPrinting_ResponseParamsSpec,
      [context_id, document_cookie, document_name, settings],
      undefined,
      undefined
    );
  }

  renderPrintedPage(document_cookie, page_index, page_data_type, serialized_page, page_size, page_content_rect, shrink_factor) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      printing.mojom.PrintBackendService_RenderPrintedPage_ParamsSpec,
      printing.mojom.PrintBackendService_RenderPrintedPage_ResponseParamsSpec,
      printing.mojom.PrintBackendService_RenderPrintedPage_ResponseParamsSpec,
      [document_cookie, page_index, page_data_type, serialized_page, page_size, page_content_rect, shrink_factor],
      undefined,
      undefined
    );
  }

  renderPrintedDocument(document_cookie, page_count, data_type, serialized_doc) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      printing.mojom.PrintBackendService_RenderPrintedDocument_ParamsSpec,
      printing.mojom.PrintBackendService_RenderPrintedDocument_ResponseParamsSpec,
      printing.mojom.PrintBackendService_RenderPrintedDocument_ResponseParamsSpec,
      [document_cookie, page_count, data_type, serialized_doc],
      undefined,
      undefined
    );
  }

  documentDone(document_cookie) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      printing.mojom.PrintBackendService_DocumentDone_ParamsSpec,
      printing.mojom.PrintBackendService_DocumentDone_ResponseParamsSpec,
      printing.mojom.PrintBackendService_DocumentDone_ResponseParamsSpec,
      [document_cookie],
      undefined,
      undefined
    );
  }

  cancel(document_cookie) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      printing.mojom.PrintBackendService_Cancel_ParamsSpec,
      null,
      null,
      [document_cookie],
      undefined,
      undefined
    );
  }

};

printing.mojom.PrintBackendService.getRemote = function() {
  let remote = new printing.mojom.PrintBackendServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrintBackendService',
    'context');
  return remote.$;
};

// ParamsSpec for Init
printing.mojom.PrintBackendService_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.Init_Params',
      packedSize: 24,
      fields: [
        { name: 'locale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Poke
printing.mojom.PrintBackendService_Poke_ParamsSpec = {
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
printing.mojom.PrintBackendService_EnumeratePrinters_ParamsSpec = {
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
printing.mojom.PrintBackendService_GetDefaultPrinterName_ParamsSpec = {
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
printing.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.GetPrinterSemanticCapsAndDefaults_Params',
      packedSize: 16,
      fields: [
        { name: 'printer_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FetchCapabilities
printing.mojom.PrintBackendService_FetchCapabilities_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.FetchCapabilities_Params',
      packedSize: 16,
      fields: [
        { name: 'printer_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPaperPrintableArea
printing.mojom.PrintBackendService_GetPaperPrintableArea_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.GetPaperPrintableArea_Params',
      packedSize: 24,
      fields: [
        { name: 'printer_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'media', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

printing.mojom.PrintBackendService_GetPaperPrintableArea_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.GetPaperPrintableArea_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'printable_area_um', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EstablishPrintingContext
printing.mojom.PrintBackendService_EstablishPrintingContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.EstablishPrintingContext_Params',
      packedSize: 24,
      fields: [
        { name: 'context_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'parent_window_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UseDefaultSettings
printing.mojom.PrintBackendService_UseDefaultSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.UseDefaultSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'context_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AskUserForSettings
printing.mojom.PrintBackendService_AskUserForSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.AskUserForSettings_Params',
      packedSize: 32,
      fields: [
        { name: 'context_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'max_pages', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'has_selection', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_scripted', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for UpdatePrintSettings
printing.mojom.PrintBackendService_UpdatePrintSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.UpdatePrintSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'context_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'job_settings', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for StartPrinting
printing.mojom.PrintBackendService_StartPrinting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.StartPrinting_Params',
      packedSize: 40,
      fields: [
        { name: 'context_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'document_cookie', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'document_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'settings', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

printing.mojom.PrintBackendService_StartPrinting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.StartPrinting_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'job_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RenderPrintedPage
printing.mojom.PrintBackendService_RenderPrintedPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.RenderPrintedPage_Params',
      packedSize: 64,
      fields: [
        { name: 'document_cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'page_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'page_data_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'serialized_page', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'page_size', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'page_content_rect', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'shrink_factor', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

printing.mojom.PrintBackendService_RenderPrintedPage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.RenderPrintedPage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RenderPrintedDocument
printing.mojom.PrintBackendService_RenderPrintedDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.RenderPrintedDocument_Params',
      packedSize: 40,
      fields: [
        { name: 'document_cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'page_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'data_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'serialized_doc', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

printing.mojom.PrintBackendService_RenderPrintedDocument_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.RenderPrintedDocument_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DocumentDone
printing.mojom.PrintBackendService_DocumentDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.DocumentDone_Params',
      packedSize: 16,
      fields: [
        { name: 'document_cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

printing.mojom.PrintBackendService_DocumentDone_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.DocumentDone_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Cancel
printing.mojom.PrintBackendService_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintBackendService.Cancel_Params',
      packedSize: 16,
      fields: [
        { name: 'document_cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
printing.mojom.PrintBackendServicePtr = printing.mojom.PrintBackendServiceRemote;
printing.mojom.PrintBackendServiceRequest = printing.mojom.PrintBackendServicePendingReceiver;

