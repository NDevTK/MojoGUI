// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/print_backend_service.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};
var gfx = gfx || {};

printing.mojom.PrinterCapsAndInfoSpec = { $: {} };
printing.mojom.UnsandboxedPrintBackendHost = {};
printing.mojom.UnsandboxedPrintBackendHost.$interfaceName = 'printing.mojom.UnsandboxedPrintBackendHost';
printing.mojom.UnsandboxedPrintBackendHost_BindBackend_ParamsSpec = { $: {} };
printing.mojom.SandboxedPrintBackendHost = {};
printing.mojom.SandboxedPrintBackendHost.$interfaceName = 'printing.mojom.SandboxedPrintBackendHost';
printing.mojom.SandboxedPrintBackendHost_BindBackend_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService = {};
printing.mojom.PrintBackendService.$interfaceName = 'printing.mojom.PrintBackendService';
printing.mojom.PrintBackendService_Init_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_Poke_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_EnumeratePrinters_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_GetDefaultPrinterName_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_FetchCapabilities_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_GetPaperPrintableArea_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_GetPaperPrintableArea_ResponseParamsSpec = { $: {} };
printing.mojom.PrintBackendService_EstablishPrintingContext_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_UseDefaultSettings_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_AskUserForSettings_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_UpdatePrintSettings_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_StartPrinting_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_StartPrinting_ResponseParamsSpec = { $: {} };
printing.mojom.PrintBackendService_RenderPrintedPage_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_RenderPrintedPage_ResponseParamsSpec = { $: {} };
printing.mojom.PrintBackendService_RenderPrintedDocument_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_RenderPrintedDocument_ResponseParamsSpec = { $: {} };
printing.mojom.PrintBackendService_DocumentDone_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_DocumentDone_ResponseParamsSpec = { $: {} };
printing.mojom.PrintBackendService_Cancel_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_Cancel_ResponseParamsSpec = { $: {} };

// Struct: PrinterCapsAndInfo
mojo.internal.Struct(
    printing.mojom.PrinterCapsAndInfoSpec, 'printing.mojom.PrinterCapsAndInfo', [
      mojo.internal.StructField('printer_info', 0, 0, printing.mojom.PrinterBasicInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('printer_caps', 8, 0, printing.mojom.PrinterSemanticCapsAndDefaultsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: UnsandboxedPrintBackendHost
mojo.internal.Struct(
    printing.mojom.UnsandboxedPrintBackendHost_BindBackend_ParamsSpec, 'printing.mojom.UnsandboxedPrintBackendHost_BindBackend_Params', [
      mojo.internal.StructField('service', 0, 0, mojo.internal.InterfaceRequest(printing.mojom.PrintBackendServiceSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [service],
      false);
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

printing.mojom.UnsandboxedPrintBackendHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = printing.mojom.UnsandboxedPrintBackendHost_BindBackend_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindBackend(params.service);
          break;
        }
      }
    }});
  }
};

printing.mojom.UnsandboxedPrintBackendHostReceiver = printing.mojom.UnsandboxedPrintBackendHostReceiver;

printing.mojom.UnsandboxedPrintBackendHostPtr = printing.mojom.UnsandboxedPrintBackendHostRemote;
printing.mojom.UnsandboxedPrintBackendHostRequest = printing.mojom.UnsandboxedPrintBackendHostPendingReceiver;


// Interface: SandboxedPrintBackendHost
mojo.internal.Struct(
    printing.mojom.SandboxedPrintBackendHost_BindBackend_ParamsSpec, 'printing.mojom.SandboxedPrintBackendHost_BindBackend_Params', [
      mojo.internal.StructField('service', 0, 0, mojo.internal.InterfaceRequest(printing.mojom.PrintBackendServiceSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [service],
      false);
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

printing.mojom.SandboxedPrintBackendHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = printing.mojom.SandboxedPrintBackendHost_BindBackend_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindBackend(params.service);
          break;
        }
      }
    }});
  }
};

printing.mojom.SandboxedPrintBackendHostReceiver = printing.mojom.SandboxedPrintBackendHostReceiver;

printing.mojom.SandboxedPrintBackendHostPtr = printing.mojom.SandboxedPrintBackendHostRemote;
printing.mojom.SandboxedPrintBackendHostRequest = printing.mojom.SandboxedPrintBackendHostPendingReceiver;


// Interface: PrintBackendService
mojo.internal.Struct(
    printing.mojom.PrintBackendService_Init_ParamsSpec, 'printing.mojom.PrintBackendService_Init_Params', [
      mojo.internal.StructField('locale', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('remote', 8, 0, mojo.internal.InterfaceProxy(printing.mojom.PrinterXmlParserRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_Poke_ParamsSpec, 'printing.mojom.PrintBackendService_Poke_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_EnumeratePrinters_ParamsSpec, 'printing.mojom.PrintBackendService_EnumeratePrinters_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_GetDefaultPrinterName_ParamsSpec, 'printing.mojom.PrintBackendService_GetDefaultPrinterName_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_ParamsSpec, 'printing.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_Params', [
      mojo.internal.StructField('printer_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_FetchCapabilities_ParamsSpec, 'printing.mojom.PrintBackendService_FetchCapabilities_Params', [
      mojo.internal.StructField('printer_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_GetPaperPrintableArea_ParamsSpec, 'printing.mojom.PrintBackendService_GetPaperPrintableArea_Params', [
      mojo.internal.StructField('printer_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('media', 8, 0, printing.mojom.RequestedMediaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_GetPaperPrintableArea_ResponseParamsSpec, 'printing.mojom.PrintBackendService_GetPaperPrintableArea_ResponseParams', [
      mojo.internal.StructField('printable_area_um', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_EstablishPrintingContext_ParamsSpec, 'printing.mojom.PrintBackendService_EstablishPrintingContext_Params', [
      mojo.internal.StructField('context_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('parent_window_id', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_UseDefaultSettings_ParamsSpec, 'printing.mojom.PrintBackendService_UseDefaultSettings_Params', [
      mojo.internal.StructField('context_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_AskUserForSettings_ParamsSpec, 'printing.mojom.PrintBackendService_AskUserForSettings_Params', [
      mojo.internal.StructField('context_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_pages', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_selection', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_scripted', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_UpdatePrintSettings_ParamsSpec, 'printing.mojom.PrintBackendService_UpdatePrintSettings_Params', [
      mojo.internal.StructField('job_settings', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('context_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_StartPrinting_ParamsSpec, 'printing.mojom.PrintBackendService_StartPrinting_Params', [
      mojo.internal.StructField('document_name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('settings', 8, 0, printing.mojom.PrintSettingsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('context_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_StartPrinting_ResponseParamsSpec, 'printing.mojom.PrintBackendService_StartPrinting_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, printing.mojom.ResultCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('job_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_RenderPrintedPage_ParamsSpec, 'printing.mojom.PrintBackendService_RenderPrintedPage_Params', [
      mojo.internal.StructField('page_data_type', 0, 0, printing.mojom.MetafileDataTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('serialized_page', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_size', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_content_rect', 24, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('page_index', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('shrink_factor', 40, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_RenderPrintedPage_ResponseParamsSpec, 'printing.mojom.PrintBackendService_RenderPrintedPage_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, printing.mojom.ResultCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_RenderPrintedDocument_ParamsSpec, 'printing.mojom.PrintBackendService_RenderPrintedDocument_Params', [
      mojo.internal.StructField('data_type', 0, 0, printing.mojom.MetafileDataTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('serialized_doc', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('page_count', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_RenderPrintedDocument_ResponseParamsSpec, 'printing.mojom.PrintBackendService_RenderPrintedDocument_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, printing.mojom.ResultCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_DocumentDone_ParamsSpec, 'printing.mojom.PrintBackendService_DocumentDone_Params', [
      mojo.internal.StructField('document_cookie', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_DocumentDone_ResponseParamsSpec, 'printing.mojom.PrintBackendService_DocumentDone_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, printing.mojom.ResultCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_Cancel_ParamsSpec, 'printing.mojom.PrintBackendService_Cancel_Params', [
      mojo.internal.StructField('document_cookie', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_Cancel_ResponseParamsSpec, 'printing.mojom.PrintBackendService_Cancel_ResponseParams', [
    ],
    [[0, 8]]);

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
      [locale, remote],
      false);
  }

  poke() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.PrintBackendService_Poke_ParamsSpec,
      null,
      [],
      false);
  }

  enumeratePrinters() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      printing.mojom.PrintBackendService_EnumeratePrinters_ParamsSpec,
      null,
      [],
      false);
  }

  getDefaultPrinterName() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      printing.mojom.PrintBackendService_GetDefaultPrinterName_ParamsSpec,
      null,
      [],
      false);
  }

  getPrinterSemanticCapsAndDefaults(printer_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      printing.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_ParamsSpec,
      null,
      [printer_name],
      false);
  }

  fetchCapabilities(printer_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      printing.mojom.PrintBackendService_FetchCapabilities_ParamsSpec,
      null,
      [printer_name],
      false);
  }

  getPaperPrintableArea(printer_name, media) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      printing.mojom.PrintBackendService_GetPaperPrintableArea_ParamsSpec,
      printing.mojom.PrintBackendService_GetPaperPrintableArea_ResponseParamsSpec,
      [printer_name, media],
      false);
  }

  establishPrintingContext(context_id, parent_window_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      printing.mojom.PrintBackendService_EstablishPrintingContext_ParamsSpec,
      null,
      [context_id, parent_window_id],
      false);
  }

  useDefaultSettings(context_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      printing.mojom.PrintBackendService_UseDefaultSettings_ParamsSpec,
      null,
      [context_id],
      false);
  }

  askUserForSettings(context_id, max_pages, has_selection, is_scripted) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      printing.mojom.PrintBackendService_AskUserForSettings_ParamsSpec,
      null,
      [context_id, max_pages, has_selection, is_scripted],
      false);
  }

  updatePrintSettings(context_id, job_settings) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      printing.mojom.PrintBackendService_UpdatePrintSettings_ParamsSpec,
      null,
      [context_id, job_settings],
      false);
  }

  startPrinting(context_id, document_cookie, document_name, settings) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      printing.mojom.PrintBackendService_StartPrinting_ParamsSpec,
      printing.mojom.PrintBackendService_StartPrinting_ResponseParamsSpec,
      [context_id, document_cookie, document_name, settings],
      false);
  }

  renderPrintedPage(document_cookie, page_index, page_data_type, serialized_page, page_size, page_content_rect, shrink_factor) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      printing.mojom.PrintBackendService_RenderPrintedPage_ParamsSpec,
      printing.mojom.PrintBackendService_RenderPrintedPage_ResponseParamsSpec,
      [document_cookie, page_index, page_data_type, serialized_page, page_size, page_content_rect, shrink_factor],
      false);
  }

  renderPrintedDocument(document_cookie, page_count, data_type, serialized_doc) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      printing.mojom.PrintBackendService_RenderPrintedDocument_ParamsSpec,
      printing.mojom.PrintBackendService_RenderPrintedDocument_ResponseParamsSpec,
      [document_cookie, page_count, data_type, serialized_doc],
      false);
  }

  documentDone(document_cookie) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      printing.mojom.PrintBackendService_DocumentDone_ParamsSpec,
      printing.mojom.PrintBackendService_DocumentDone_ResponseParamsSpec,
      [document_cookie],
      false);
  }

  cancel(document_cookie) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      printing.mojom.PrintBackendService_Cancel_ParamsSpec,
      printing.mojom.PrintBackendService_Cancel_ResponseParamsSpec,
      [document_cookie],
      false);
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

printing.mojom.PrintBackendServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = printing.mojom.PrintBackendService_Init_ParamsSpec.$.decode(message.payload);
          const result = this.impl.init(params.locale, params.remote);
          break;
        }
        case 1: {
          const params = printing.mojom.PrintBackendService_Poke_ParamsSpec.$.decode(message.payload);
          const result = this.impl.poke();
          break;
        }
        case 2: {
          const params = printing.mojom.PrintBackendService_EnumeratePrinters_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enumeratePrinters();
          break;
        }
        case 3: {
          const params = printing.mojom.PrintBackendService_GetDefaultPrinterName_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDefaultPrinterName();
          break;
        }
        case 4: {
          const params = printing.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPrinterSemanticCapsAndDefaults(params.printer_name);
          break;
        }
        case 5: {
          const params = printing.mojom.PrintBackendService_FetchCapabilities_ParamsSpec.$.decode(message.payload);
          const result = this.impl.fetchCapabilities(params.printer_name);
          break;
        }
        case 6: {
          const params = printing.mojom.PrintBackendService_GetPaperPrintableArea_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPaperPrintableArea(params.printer_name, params.media);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintBackendService_GetPaperPrintableArea_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = printing.mojom.PrintBackendService_EstablishPrintingContext_ParamsSpec.$.decode(message.payload);
          const result = this.impl.establishPrintingContext(params.context_id, params.parent_window_id);
          break;
        }
        case 8: {
          const params = printing.mojom.PrintBackendService_UseDefaultSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.useDefaultSettings(params.context_id);
          break;
        }
        case 9: {
          const params = printing.mojom.PrintBackendService_AskUserForSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.askUserForSettings(params.context_id, params.max_pages, params.has_selection, params.is_scripted);
          break;
        }
        case 10: {
          const params = printing.mojom.PrintBackendService_UpdatePrintSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updatePrintSettings(params.context_id, params.job_settings);
          break;
        }
        case 11: {
          const params = printing.mojom.PrintBackendService_StartPrinting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startPrinting(params.context_id, params.document_cookie, params.document_name, params.settings);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintBackendService_StartPrinting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const params = printing.mojom.PrintBackendService_RenderPrintedPage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.renderPrintedPage(params.document_cookie, params.page_index, params.page_data_type, params.serialized_page, params.page_size, params.page_content_rect, params.shrink_factor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintBackendService_RenderPrintedPage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const params = printing.mojom.PrintBackendService_RenderPrintedDocument_ParamsSpec.$.decode(message.payload);
          const result = this.impl.renderPrintedDocument(params.document_cookie, params.page_count, params.data_type, params.serialized_doc);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintBackendService_RenderPrintedDocument_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const params = printing.mojom.PrintBackendService_DocumentDone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.documentDone(params.document_cookie);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintBackendService_DocumentDone_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const params = printing.mojom.PrintBackendService_Cancel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancel(params.document_cookie);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintBackendService_Cancel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

printing.mojom.PrintBackendServiceReceiver = printing.mojom.PrintBackendServiceReceiver;

printing.mojom.PrintBackendServicePtr = printing.mojom.PrintBackendServiceRemote;
printing.mojom.PrintBackendServiceRequest = printing.mojom.PrintBackendServicePendingReceiver;

